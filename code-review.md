# Code Review: hass-family-calendar

## Übersicht

Das Projekt ist ein Home-Assistant-Dashboard mit einem Python/FastAPI-Backend (Add-on) und einem React/Vite-Frontend. Es integriert Kalender, Wetter, HVV-Abfahrten, Türklingel-Kamera, Garagentor, Waschmaschine und E-Auto-Status.

---

## 1. Security

### 🔴 Kritisch

**CORS komplett offen (main.py, Zeile ~130)**

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    ...
)
```

`allow_origins=["*"]` kombiniert mit `allow_credentials=True` erlaubt jeder Website, authentifizierte Requests an dein Backend zu senden. Ein Angreifer könnte über eine bösartige Website dein Garagentor öffnen, wenn du gleichzeitig eingeloggt bist. Lösung: Origins auf die tatsächlich genutzten URLs einschränken (z.B. die HA-Ingress-URL).

---

**Geofox-Endpunkt öffentlich ohne Rate-Limiting (main.py)**

```python
@app.post("/gti/public/{endpoint:path}")
```

Dieser Endpunkt ist explizit als "public" markiert und hat kein Rate-Limiting. Ein Angreifer könnte dein Geofox-API-Kontingent ausschöpfen. Lösung: `slowapi` oder ein einfacher Token-Bucket als Middleware.

---

**Secrets in lokalen Konfigurationsdateien**

`.env` und `.deploy-config.local` enthalten im Klartext: Home-Assistant-JWT-Tokens, Geofox-Credentials, Weather-API-Key und SSH-Host-Informationen. Zwar sind diese Dateien per `.gitignore` ausgeschlossen, aber:

- Prüfe mit `git log --all --full-history -- .env .deploy-config.local`, ob sie jemals committed wurden.
- Die JWT-Tokens in `.deploy-config.local` haben Ablaufdaten weit in der Zukunft (2032/2024) — bei Kompromittierung wären sie lange gültig.
- Die `.gitignore` hat keine Patterns für Varianten wie `.env.local` oder `.deploy-config.prod`.

Ergänze die `.gitignore` um:

```
.env*.local
.deploy-config*
*.local
```

---

### 🟠 Hoch

**SSH Host-Key-Verifikation deaktiviert (dev-deploy.sh)**

```bash
ssh_opts+=("-o" "StrictHostKeyChecking=no")
ssh_opts+=("-o" "UserKnownHostsFile=/dev/null")
```

Das deaktiviert den MITM-Schutz komplett. Besser: `StrictHostKeyChecking=accept-new` verwenden, dann wird der Key beim ersten Connect akzeptiert und danach verifiziert.

---

**Keine Input-Validierung bei WebSocket-Entity-IDs (main.py)**

```python
entity_id = data.get("entity_id")  # Keine Formatprüfung
```

Entity-IDs sollten gegen das HA-Format `domain.name` validiert werden (z.B. `re.match(r'^[a-z_]+\.[a-z0-9_]+$', entity_id)`).

---

**Konfigurationsendpunkt ohne Zugriffskontrolle (main.py)**

`GET /api/config` liefert Entity-IDs, GPS-Koordinaten und Feature-Flags an jeden Aufrufer. Diese Informationen verraten die Systemstruktur (Garagentor-Entity, Kamera-Entity, etc.).

---

**GitHub Actions mit `contents: write` (build.yml)**

Die CI-Pipeline hat Schreibrechte auf das Repository und erstellt Commits/Tags automatisch. Bei einem kompromittierten Workflow könnten beliebige Commits gepusht werden.

---

### 🟡 Mittel

- **Header-Forwarding zu HA (main.py):** Alle Client-Headers werden an HA weitergeleitet, statt nur erlaubte Headers per Whitelist durchzulassen.
- **Fehlerdetails an Clients (main.py):** HTTPException-Details enthalten interne Fehlermeldungen, die Systemstruktur verraten könnten.
- **Shell-Scripts ohne `set -e` (update-hass.sh):** `rm -rf /var/www/html/*` gefolgt von `cp` — wenn der Copy fehlschlägt, bleibt das Verzeichnis leer, ohne dass es bemerkt wird.
- **Hardcoded Benutzername in Scripts (hdmi-*.sh):** `/home/elien/.Xauthority` verrät den Systembenutzernamen.
- **Default SSH-User ist `root` (dev-deploy.sh):** `HA_SSH_USER="${HA_SSH_USER:-root}"` — sollte nie auf root defaulten.

---

## 2. Performance

### 🔴 Kritisch

**Massives Debug-Logging im Hot Path (main.py)**

Der `/api/{path}` Proxy-Endpunkt loggt bei jedem einzelnen Request:

- Alle eingehenden Headers (Zeile ~428-445)
- Alle Headers nochmal vor dem Senden (Zeile ~706-731)
- Den gesamten Response-Content (Zeile ~765-791)
- Spezielle Mojibake-Checks für "Björn" in jedem Header

Das erzeugt massiven I/O bei jedem API-Call. Diese Logging-Blöcke sollten entfernt oder hinter ein explizites Debug-Flag gestellt werden (nicht nur `logger.debug`, da der Logger auf DEBUG steht).

---

### 🟠 Hoch

**Mehrfache Encode/Decode-Zyklen pro Header (main.py, ~474-536)**

```python
decoded_value = value.decode('utf-8', errors='strict')
# ... dann:
if 'Ã¶' in decoded_value:  # Mojibake-Fix
    fixed = decoded_value.encode('latin-1').decode('utf-8')
# ... dann:
normalized = decoded_value.encode('utf-8').decode('utf-8')
# ... dann nochmal:
normalized.encode('ascii', errors='strict')
```

Vier Encode/Decode-Runden pro Header-Wert. Dieser Code war offensichtlich ein Debug-Workaround für das "Björn"-Encoding-Problem. Lösung: Das Encoding-Problem an der Quelle beheben (z.B. sicherstellen, dass alle Clients UTF-8 senden) und dann nur einen einzigen Decode durchführen.

---

**Neuer HTTP-Client bei jedem Entity-Fetch (websocket_manager.py)**

```python
async with httpx.AsyncClient(timeout=30.0) as client:
    # ... fetch states
```

Erstellt bei jeder Initial-State-Abfrage einen neuen `httpx.AsyncClient`. Der Client sollte einmal erstellt und wiederverwendet werden (Connection Pooling).

---

**O(n²) List-Conversion in Loop (websocket_manager.py, ~167)**

```python
for i, response in enumerate(responses):
    entity_id = list(entities)[i]  # Set → List bei jeder Iteration!
```

`list(entities)` wird bei jedem Schleifendurchlauf neu erstellt. Einmal vor der Schleife konvertieren.

---

**Blocking subprocess.run() im Event Loop (config.py)**

```python
result = subprocess.run([bashio_path, command], ...)
```

Blockiert den asyncio Event Loop für bis zu 5 Sekunden. Besser: `asyncio.create_subprocess_exec()` verwenden.

---

### 🟡 Mittel (Frontend)

- **Unnötige Re-Renders (doorbell.jsx):** `useHomeAssistantWebSocket` wird auch aufgerufen, wenn `ENABLE_DOORBELL=false`.
- **Array-Dependencies mit `.join(',')` (laundry.jsx, washing-machine.js):** Workaround für Array-Referenzvergleiche — besser `useMemo` auf die Array-Quelle.
- **console.log in Render (week.jsx, ~145):** Erzeugt Output bei jedem Render.
- **Kein Maximum für Retry-Timer (use-home-assistant-websocket.js):** `schedulePeriodicRetry` hat kein Iterationslimit und kann theoretisch endlos weiterlaufen.

---

## 3. Code-Deduplikation

### 🔴 Header-Filterung 4× dupliziert (main.py)

Das gleiche Pattern erscheint an vier Stellen:

```python
excluded_headers = {
    "content-encoding", "transfer-encoding", "content-length",
    "connection", "server"
}
for key, value in response.headers.items():
    if key.lower() not in excluded_headers:
        response_headers[key] = value
```

**Lösung:** Eine Utility-Funktion `filter_response_headers(headers)` extrahieren.

---

### 🔴 Fetch-Pattern 7× dupliziert (Frontend)

In `use-doorbell.js`, `use-garage-door.js`, `use-ev.js`, `use-everyday-calendar-state.js`, `use-washing-machine.js` u.a. erscheint:

```javascript
useEffect(() => {
    let isMounted = true
    const abortController = new AbortController()
    axios(url, { signal: abortController.signal })
        .then(response => { if (isMounted) setState(response.data.state) })
        .catch(err => { if (isMounted && !abortController.signal.aborted) setError(...) })
    return () => { isMounted = false; abortController.abort() }
}, [deps])
```

**Lösung:** Einen `useFetchEntityState(url, enabled)` Hook extrahieren. Das eliminiert ca. 200 Zeilen duplizierten Code.

---

### 🟠 WebSocket-Subscription 4× dupliziert (Frontend)

`use-doorbell.js`, `use-garage-door.js`, `use-ev.js`, `use-washing-machine.js` haben alle nahezu identische Subscribe/Unsubscribe-Logik.

**Lösung:** Einen `useEntitySubscription(entityId, onStateUpdate, enabled)` Wrapper um `useHomeAssistantWebSocket` erstellen.

---

### 🟠 Error-Handling-Pattern 3× dupliziert (main.py)

```python
except httpx.TimeoutException:
    logger.error(f"Timeout connecting to {service}: {url}")
    raise HTTPException(status_code=504, detail=...)
except Exception as e:
    logger.error(f"Error connecting to {service}: {e}")
    raise HTTPException(status_code=502, detail=...)
```

Erscheint für Geofox, Weather und den HA-Proxy. **Lösung:** `handle_api_error(service_name, exception)` Utility.

---

### 🟠 Feature-Config-Loading 7× dupliziert (config.py)

```python
feature_enabled = _get_bool_config("FEATURE_ENABLED", "feature.enabled", False, ...)
if not feature_enabled and not in_ha:
    entity = _get_env_config("ENTITY_FEATURE", "")
    feature_enabled = bool(entity)
config["ENABLE_FEATURE"] = feature_enabled
```

Dieses Pattern wiederholt sich für Garage, Doorbell, EV, Laundry, Weather, HVV und Everyday-Calendar. **Lösung:** Eine generische `load_feature_config()` Funktion.

---

### 🟡 Mittel

- **Error-UI-Pattern 7× dupliziert (Frontend):** Alle Komponenten zeigen Fehler mit dem gleichen `<div style={{color: '#f85a5a'}}>` an. → `<ErrorMessage>` Komponente extrahieren.
- **Service-Call-Pattern 5× dupliziert (Frontend):** `toggleGarageDoor`, `openGarageDoor`, `closeGarageDoor`, `unlatchFrontDoor`, `startPreclimate` haben identische Timeout/Loading-Logik. → Generische `callHaService()` Utility.
- **Logger-Setup 3× dupliziert (main.py):** Root-Logger, Uvicorn-Logger und App-Logger werden mit identischem Code konfiguriert. → `configure_logger(name, level)` Funktion.
- **Entity-Extraction aus Config (websocket_manager.py):** Das `if config.get("ENABLE_X"): entity = config.get("ENTITY_X"); if entity: entities.add(entity)` Pattern wiederholt sich 7×.

---

## Empfohlene Reihenfolge

| Priorität | Aufgabe                                           | Aufwand | Status |
| --------- | ------------------------------------------------- | ------- | ------ |
| 1         | CORS einschränken                                 | 5 min   | done   |
| 2         | Debug-Logging aus Hot Path entfernen              | 15 min  | done   |
| 3         | Encoding-Workaround durch saubere Lösung ersetzen | 30 min  | done   |
| 4         | Rate-Limiting für `/gti/public/`                  | 15 min  | done   |
| 5         | Entity-ID-Validierung im WebSocket                | 10 min  |        |
| 6         | `useFetchEntityState` Hook extrahieren            | 45 min  |        |
| 7         | `useEntitySubscription` Hook extrahieren          | 30 min  |        |
| 8         | `filter_response_headers()` extrahieren           | 10 min  |        |
| 9         | `handle_api_error()` extrahieren                  | 10 min  |        |
| 10        | Feature-Config-Loading generalisieren             | 30 min  |        |
| 11        | SSH StrictHostKeyChecking fixen                   | 5 min   |        |
| 12        | `.gitignore` Patterns erweitern                   | 5 min   |        |
