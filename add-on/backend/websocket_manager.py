"""
WebSocket State Manager for Home Assistant.

Maintains a single WebSocket connection to HA, subscribes to entities,
and maintains internal state cache for serving clients.
"""
import asyncio
import json
import logging
import os
from typing import Dict, Set, Callable, Optional, Any
from collections import defaultdict
import websockets
from websockets.exceptions import ConnectionClosed
import httpx

logger = logging.getLogger(__name__)


class WebSocketStateManager:
    """Manages WebSocket connection to HA and internal state cache."""
    
    def __init__(self, config: Dict[str, Any]):
        """Initialize the state manager with configuration.
        
        Args:
            config: Configuration dictionary from get_config()
        """
        self.config = config
        self.ha_ws_url = config.get("HASS_WEBSOCKET_URL", "ws://supervisor/core/websocket")
        self.ha_api_url = config.get("HASS_API_URL", "http://supervisor/core/api")
        self.auth_token = os.environ.get("SUPERVISOR_TOKEN") or os.environ.get("HASS_ACCESS_TOKEN", "")
        
        # State cache: {entity_id: {state: value, attributes: {}, last_update: timestamp}}
        self.state_cache: Dict[str, Dict[str, Any]] = {}
        
        # Client subscriptions: {entity_id: Set[callback_functions]}
        self.client_subscriptions: Dict[str, Set[Callable]] = defaultdict(set)
        
        # Connection state
        self.ha_websocket: Optional[websockets.WebSocketClientProtocol] = None
        self.connected = False
        self.authenticated = False
        self._reconnect_task: Optional[asyncio.Task] = None
        self._message_handler_task: Optional[asyncio.Task] = None
        self._running = False
        
        # Subscription IDs for tracking
        self._subscription_id_counter = 1
        self._entity_subscriptions: Dict[int, str] = {}  # {subscription_id: entity_id}
    
    def get_entities_from_config(self) -> Set[str]:
        """Extract all entity IDs from config that need to be subscribed to.
        
        Returns:
            Set of entity IDs to subscribe to
        """
        entities = set()
        
        # Garage
        if self.config.get("ENABLE_GARAGE"):
            entity = self.config.get("ENTITY_GARAGE_DOOR", "")
            if entity:
                entities.add(entity)
        
        # Doorbell
        if self.config.get("ENABLE_DOORBELL"):
            entity = self.config.get("ENTITY_DOORBELL", "")
            if entity:
                entities.add(entity)
        
        # Laundry
        if self.config.get("ENABLE_LAUNDRY"):
            machines = self.config.get("LAUNDRY_MACHINES", [])
            for machine in machines:
                if isinstance(machine, dict) and "entity_id" in machine:
                    entities.add(machine["entity_id"])
        
        # EV
        if self.config.get("ENABLE_EV"):
            for key in ["ENTITY_PRECLIMATE_STATUS", "ENTITY_CHARGING_STATE", "ENTITY_STATE_OF_CHARGE"]:
                entity = self.config.get(key, "")
                if entity:
                    entities.add(entity)
        
        # Everyday calendar
        if self.config.get("ENABLE_EVERYDAY_CALENDAR"):
            entity = self.config.get("ENTITY_EVERYDAY_CALENDAR", "")
            if entity:
                entities.add(entity)
        
        return entities
    
    async def connect_to_ha(self):
        """Establish WebSocket connection to HA and authenticate."""
        if not self.auth_token:
            logger.error("No authentication token available")
            return False
        
        try:
            logger.info(f"Connecting to Home Assistant WebSocket at: {self.ha_ws_url}")
            self.ha_websocket = await websockets.connect(self.ha_ws_url)
            self.connected = True
            logger.info("Connected to Home Assistant WebSocket")
            
            # Wait for auth_required
            auth_required = await self.ha_websocket.recv()
            auth_data = json.loads(auth_required)
            
            if auth_data.get("type") != "auth_required":
                logger.error(f"Unexpected message from HA: {auth_data}")
                return False
            
            # Send authentication
            auth_message = {
                "type": "auth",
                "access_token": self.auth_token
            }
            await self.ha_websocket.send(json.dumps(auth_message))
            
            # Wait for auth_ok
            auth_response = await self.ha_websocket.recv()
            auth_result = json.loads(auth_response)
            
            if auth_result.get("type") == "auth_ok":
                self.authenticated = True
                logger.info("Authenticated with Home Assistant")
                return True
            else:
                logger.error(f"Authentication failed: {auth_result}")
                return False
                
        except Exception as e:
            logger.error(f"Error connecting to HA: {e}", exc_info=True)
            self.connected = False
            self.authenticated = False
            return False
    
    async def _fetch_initial_states_via_rest(self, entities: Set[str]):
        """Fetch initial states for entities via REST API.
        
        Args:
            entities: Set of entity IDs to fetch states for
        """
        if not entities:
            return
        
        try:
            # Use a longer timeout for initial state fetching (30 seconds)
            # Some entities might be slow to respond, especially if HA is busy
            async with httpx.AsyncClient(timeout=30.0) as client:
                headers = {
                    "Authorization": f"Bearer {self.auth_token}",
                    "Content-Type": "application/json"
                }
                
                # Fetch states for each entity in parallel
                # Note: If too many parallel requests cause issues, we could batch them
                tasks = []
                for entity_id in entities:
                    url = f"{self.ha_api_url}/states/{entity_id}"
                    tasks.append(client.get(url, headers=headers))
                
                responses = await asyncio.gather(*tasks, return_exceptions=True)
                
                # Process responses and update cache
                for i, response in enumerate(responses):
                    entity_id = list(entities)[i]
                    if isinstance(response, Exception):
                        error_msg = str(response)
                        error_type = type(response).__name__
                        logger.warning(f"Failed to fetch initial state for {entity_id}: {error_type}: {error_msg}")
                        continue
                    
                    if response.status_code == 200:
                        state_data = response.json()
                        self.state_cache[entity_id] = {
                            "state": state_data.get("state"),
                            "attributes": state_data.get("attributes", {}),
                            "last_update": asyncio.get_event_loop().time()
                        }
                        logger.debug(f"Initial state loaded for {entity_id}: {state_data.get('state')}")
                    else:
                        error_text = response.text[:200] if hasattr(response, 'text') else 'N/A'
                        logger.warning(f"Failed to fetch initial state for {entity_id}: HTTP {response.status_code} - {error_text}")
        
        except Exception as e:
            logger.error(f"Error fetching initial states via REST API: {e}", exc_info=True)
            # Don't fail completely - WebSocket updates will still work
    
    async def subscribe_to_entities(self):
        """Subscribe to all entities from config."""
        entities = self.get_entities_from_config()
        
        if not entities:
            logger.info("No entities to subscribe to")
            return
        
        if not self.ha_websocket or not self.connected:
            logger.error("Cannot subscribe: HA WebSocket not connected")
            return
        
        logger.info(f"Subscribing to {len(entities)} entities: {entities}")
        
        try:
            # Fetch initial states via REST API (WebSocket get_states returns all states which is too big)
            # This gives us immediate state for entities we care about
            await self._fetch_initial_states_via_rest(entities)
            
            # Subscribe to state_changed events for all entities
            # This will catch state changes for all entities we care about
            subscription_id = self._subscription_id_counter
            self._subscription_id_counter += 1
            
            subscribe_message = {
                "id": subscription_id,
                "type": "subscribe_events",
                "event_type": "state_changed"
            }
            
            await self.ha_websocket.send(json.dumps(subscribe_message))
            logger.info(f"Subscribed to state_changed events (subscription_id={subscription_id})")
        except Exception as e:
            logger.error(f"Error subscribing to entities: {e}", exc_info=True)
            raise
    
    async def handle_message(self, message: str):
        """Handle incoming message from HA and update state cache."""
        try:
            data = json.loads(message)
            msg_type = data.get("type")
            
            # Handle result messages (responses to our requests)
            if msg_type == "result":
                result_id = data.get("id")
                result_data = data.get("result")
                success = data.get("success", True)
                
                if not success:
                    error = data.get("error", {})
                    logger.error(f"HA returned error for request {result_id}: {error}")
                    return
                
                # Handle subscribe_events result (just acknowledge, no action needed)
                # Note: We no longer fetch initial states via WebSocket, so we only handle subscribe_events results
                logger.debug(f"Received result message for id {result_id}: {type(result_data)}")
            
            # Handle state_changed events
            elif msg_type == "event" and data.get("event", {}).get("event_type") == "state_changed":
                event_data = data.get("event", {}).get("data", {})
                entity_id = event_data.get("entity_id")
                new_state = event_data.get("new_state")
                
                if entity_id and new_state:
                    self.state_cache[entity_id] = {
                        "state": new_state.get("state"),
                        "attributes": new_state.get("attributes", {}),
                        "last_update": asyncio.get_event_loop().time()
                    }
                    
                    # Notify subscribed clients
                    if entity_id in self.client_subscriptions:
                        state_update = {
                            "type": "state_update",
                            "entity_id": entity_id,
                            "state": new_state.get("state"),
                            "attributes": new_state.get("attributes", {})
                        }
                        for callback in list(self.client_subscriptions[entity_id]):
                            try:
                                await callback(state_update)
                            except Exception as e:
                                logger.error(f"Error notifying client for {entity_id}: {e}")
            
            # Handle other message types
            else:
                logger.debug(f"Received unhandled message type: {msg_type}")
        
        except json.JSONDecodeError:
            logger.debug(f"Received non-JSON message: {message}")
        except Exception as e:
            logger.error(f"Error handling message: {e}", exc_info=True)
    
    async def message_handler_loop(self):
        """Main loop for handling messages from HA."""
        logger.debug("Message handler loop started")
        while self._running and self.connected:
            try:
                if not self.ha_websocket:
                    logger.debug("HA WebSocket is None, breaking message handler loop")
                    break
                
                try:
                    message = await asyncio.wait_for(self.ha_websocket.recv(), timeout=30.0)
                    await self.handle_message(message)
                except asyncio.TimeoutError:
                    # Send a WebSocket ping to verify the connection is truly alive.
                    # If the peer doesn't respond, websockets raises ConnectionClosed
                    # which the outer except block handles by triggering reconnection.
                    try:
                        pong = await self.ha_websocket.ping()
                        await asyncio.wait_for(pong, timeout=10.0)
                        logger.debug("Ping/pong OK — HA connection alive")
                    except (asyncio.TimeoutError, ConnectionClosed):
                        logger.warning("Ping to HA timed out or connection lost — triggering reconnect")
                        self.connected = False
                        self.authenticated = False
                        break
                    continue
                
            except ConnectionClosed as e:
                logger.warning(f"HA WebSocket connection closed: {e}")
                self.connected = False
                self.authenticated = False
                break
            except Exception as e:
                logger.error(f"Error in message handler loop: {e}", exc_info=True)
                self.connected = False
                self.authenticated = False
                break
        
        logger.debug("Message handler loop ended")
    
    async def _push_refreshed_states_to_clients(self):
        """Push all cached states to subscribed clients after a reconnect.

        When the backend→HA connection drops and reconnects, already-connected
        frontend clients won't know that states may have changed.  This method
        proactively pushes the freshly-fetched cache to every subscriber.
        """
        pushed = 0
        for entity_id, subscribers in list(self.client_subscriptions.items()):
            cached = self.state_cache.get(entity_id)
            if not cached:
                continue
            update = {
                "type": "state_update",
                "entity_id": entity_id,
                "state": cached.get("state"),
                "attributes": cached.get("attributes", {}),
            }
            for callback in list(subscribers):
                try:
                    await callback(update)
                    pushed += 1
                except Exception as e:
                    logger.debug(f"Error pushing refreshed state for {entity_id}: {e}")
        if pushed:
            logger.info(f"Pushed refreshed states to {pushed} client subscription(s)")

    async def reconnect_loop(self):
        """Handle reconnection to HA."""
        while self._running:
            if not self.connected:
                logger.info("Attempting to reconnect to HA...")
                success = await self.connect_to_ha()

                if success:
                    # Restart message handler BEFORE subscribing
                    if self._message_handler_task:
                        self._message_handler_task.cancel()
                    self._message_handler_task = asyncio.create_task(self.message_handler_loop())
                    # Small delay to ensure message handler is ready
                    await asyncio.sleep(0.1)
                    await self.subscribe_to_entities()
                    # Push refreshed states to all already-connected frontend clients
                    await self._push_refreshed_states_to_clients()
                else:
                    # Wait before retrying
                    await asyncio.sleep(5)
            else:
                # Wait a bit before checking again
                await asyncio.sleep(1)
    
    async def start(self):
        """Start the state manager."""
        if self._running:
            logger.warning("State manager already running")
            return
        
        self._running = True
        logger.info("Starting WebSocket State Manager")
        
        try:
            # Initial connection
            success = await self.connect_to_ha()
            if success:
                # Start message handler loop BEFORE subscribing so it can handle responses
                self._message_handler_task = asyncio.create_task(self.message_handler_loop())
                # Small delay to ensure message handler is ready
                await asyncio.sleep(0.1)
                try:
                    await self.subscribe_to_entities()
                except Exception as e:
                    logger.error(f"Error subscribing to entities: {e}", exc_info=True)
                    # Don't fail completely - connection is still valid, just subscriptions failed
            else:
                logger.warning("Failed to connect to HA, will retry in reconnect loop")
            
            # Start reconnection loop (always start this, even if initial connection failed)
            self._reconnect_task = asyncio.create_task(self.reconnect_loop())
        except Exception as e:
            logger.error(f"Error starting WebSocket State Manager: {e}", exc_info=True)
            self._running = False
            raise
    
    async def stop(self):
        """Stop the state manager."""
        logger.info("Stopping WebSocket State Manager")
        self._running = False
        
        # Cancel tasks
        if self._message_handler_task:
            self._message_handler_task.cancel()
        if self._reconnect_task:
            self._reconnect_task.cancel()
        
        # Close connection
        if self.ha_websocket:
            try:
                await self.ha_websocket.close()
            except Exception:
                pass
        
        self.connected = False
        self.authenticated = False
    
    def get_state(self, entity_id: str) -> Optional[Dict[str, Any]]:
        """Get cached state for an entity.
        
        Args:
            entity_id: Entity ID to get state for
            
        Returns:
            State dictionary or None if not found
        """
        return self.state_cache.get(entity_id)
    
    def subscribe_client(self, entity_id: str, callback: Callable):
        """Subscribe a client callback to entity updates.
        
        Args:
            entity_id: Entity ID to subscribe to
            callback: Async callback function that receives state updates
        """
        self.client_subscriptions[entity_id].add(callback)
        logger.debug(f"Client subscribed to {entity_id} (total subscribers: {len(self.client_subscriptions[entity_id])})")
        
        # Send current state immediately if available
        if entity_id in self.state_cache:
            state = self.state_cache[entity_id]
            state_response = {
                "type": "state_response",
                "entity_id": entity_id,
                "state": state.get("state"),
                "attributes": state.get("attributes", {})
            }
            # Schedule callback (don't await to avoid blocking)
            asyncio.create_task(callback(state_response))
    
    def unsubscribe_client(self, entity_id: str, callback: Callable):
        """Unsubscribe a client callback from entity updates.
        
        Args:
            entity_id: Entity ID to unsubscribe from
            callback: Callback function to remove
        """
        if entity_id in self.client_subscriptions:
            self.client_subscriptions[entity_id].discard(callback)
            logger.debug(f"Client unsubscribed from {entity_id} (remaining subscribers: {len(self.client_subscriptions[entity_id])})")
            
            # Clean up empty sets
            if not self.client_subscriptions[entity_id]:
                del self.client_subscriptions[entity_id]

