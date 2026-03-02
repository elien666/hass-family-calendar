"""Tests for proxy.py - Geofox HMAC-SHA1 signature generation."""
import json
import hmac
import hashlib
import base64

import pytest

from proxy import create_geofox_signature


class TestCreateGeofoxSignature:
    """Tests for create_geofox_signature()."""

    def test_returns_base64_string(self, sample_geofox_body):
        """Signature should be a valid base64-encoded string."""
        sig = create_geofox_signature(sample_geofox_body, "test-secret")
        # Should be decodable as base64
        decoded = base64.b64decode(sig)
        # HMAC-SHA1 produces 20 bytes
        assert len(decoded) == 20

    def test_deterministic_output(self, sample_geofox_body):
        """Same input should always produce the same signature."""
        sig1 = create_geofox_signature(sample_geofox_body, "my-secret")
        sig2 = create_geofox_signature(sample_geofox_body, "my-secret")
        assert sig1 == sig2

    def test_different_secrets_produce_different_signatures(self, sample_geofox_body):
        """Different secrets must produce different signatures."""
        sig1 = create_geofox_signature(sample_geofox_body, "secret-a")
        sig2 = create_geofox_signature(sample_geofox_body, "secret-b")
        assert sig1 != sig2

    def test_different_bodies_produce_different_signatures(self):
        """Different bodies must produce different signatures."""
        body1 = {"action": "getStops", "id": "1"}
        body2 = {"action": "getStops", "id": "2"}
        sig1 = create_geofox_signature(body1, "secret")
        sig2 = create_geofox_signature(body2, "secret")
        assert sig1 != sig2

    def test_preserves_key_insertion_order(self):
        """Keys must NOT be sorted - must preserve insertion order like JavaScript."""
        body1 = {"b": 1, "a": 2}
        body2 = {"a": 2, "b": 1}
        sig1 = create_geofox_signature(body1, "secret")
        sig2 = create_geofox_signature(body2, "secret")
        # Different key order = different JSON = different signature
        assert sig1 != sig2

    def test_compact_json_no_spaces(self):
        """JSON should use compact separators (',', ':') like JavaScript."""
        body = {"key": "value"}
        secret = "test"

        # Manually compute expected signature with compact JSON
        body_json = json.dumps(body, separators=(',', ':'), ensure_ascii=False, sort_keys=False)
        assert body_json == '{"key":"value"}'  # No spaces

        expected = base64.b64encode(
            hmac.new(secret.encode('utf-8'), body_json.encode('utf-8'), hashlib.sha1).digest()
        ).decode('utf-8')

        actual = create_geofox_signature(body, secret)
        assert actual == expected

    def test_handles_unicode_characters(self):
        """UTF-8 characters (e.g., German umlauts) must work correctly."""
        body = {"station": "Jungfernstieg", "name": "Björn"}
        sig = create_geofox_signature(body, "geheimnis")
        assert isinstance(sig, str)
        assert len(sig) > 0

    def test_handles_empty_body(self):
        """Empty dict should produce a valid signature."""
        sig = create_geofox_signature({}, "secret")
        assert isinstance(sig, str)
        assert len(sig) > 0

    def test_handles_nested_objects(self, sample_geofox_body):
        """Nested objects (like the full Geofox body) should work."""
        sig = create_geofox_signature(sample_geofox_body, "real-secret")
        assert isinstance(sig, str)
        # Verify it's valid base64
        base64.b64decode(sig)

    def test_known_test_vector(self):
        """Verify against a manually computed test vector."""
        body = {"test": "data"}
        secret = "secret-key"

        # Manually compute: HMAC-SHA1(json.dumps(body, separators=(',',':')), secret)
        body_json = '{"test":"data"}'
        expected = base64.b64encode(
            hmac.new(
                secret.encode('utf-8'),
                body_json.encode('utf-8'),
                hashlib.sha1
            ).digest()
        ).decode('utf-8')

        actual = create_geofox_signature(body, secret)
        assert actual == expected


class TestCreateGeofoxSignatureEdgeCases:
    """Edge case tests for create_geofox_signature()."""

    def test_numeric_values(self):
        """Numbers in JSON should not be quoted."""
        body = {"count": 42, "ratio": 3.14}
        sig = create_geofox_signature(body, "secret")
        assert isinstance(sig, str)

    def test_boolean_values(self):
        """Booleans should serialize as true/false (not True/False)."""
        body = {"active": True, "deleted": False}
        sig = create_geofox_signature(body, "secret")

        # Verify JSON serialization uses lowercase true/false
        body_json = json.dumps(body, separators=(',', ':'), ensure_ascii=False)
        assert "true" in body_json
        assert "false" in body_json

    def test_null_values(self):
        """None should serialize as null."""
        body = {"value": None}
        sig = create_geofox_signature(body, "secret")
        assert isinstance(sig, str)

    def test_array_values(self):
        """Arrays should be properly serialized."""
        body = {"items": [1, 2, 3], "names": ["a", "b"]}
        sig = create_geofox_signature(body, "secret")
        assert isinstance(sig, str)

    def test_special_characters_in_secret(self):
        """Secrets with special characters should work."""
        body = {"test": True}
        sig = create_geofox_signature(body, "s3cr3t!@#$%^&*()")
        assert isinstance(sig, str)
