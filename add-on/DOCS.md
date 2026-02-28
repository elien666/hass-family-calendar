# Familienkalender

Ein Vollbild-Dashboard für Home Assistant mit Kalenderansicht, Wettervorhersage, ÖPNV-Abfahrten, Kameraüberwachung und Smart-Home-Steuerung.

## Funktionen

- **Kalender** — Termine aus mehreren Home Assistant Kalendern anzeigen
- **Wettervorhersage** — Aktuelle Bedingungen und stündliche/tägliche Vorhersagen (Pirate Weather API)
- **HVV-Abfahrten** — Echtzeit-Abfahrten des Hamburger Nahverkehrs (Geofox API)
- **Garagentor** — Status und Steuerung des Garagentors
- **Wäsche** — Waschmaschinen- und Trocknerstatus überwachen
- **Türklingel** — Echtzeit-Benachrichtigungen mit Kameraintegration
- **Alltagskalender** — Visuelles Tracking für tägliche Gewohnheiten
- **Elektrofahrzeug** — Ladezustand und Vorklimatisierung steuern

## Installation

1. Repository zur Home Assistant Add-on-Verwaltung hinzufügen
2. "Familienkalender" Add-on installieren
3. Optionen über die Home Assistant Oberfläche konfigurieren (siehe unten)
4. Add-on starten
5. Über das Seitenleisten-Symbol oder die Ingress-URL aufrufen

## Konfiguration

Jede Funktion kann einzeln über Schalter in der Konfigurationsoberfläche aktiviert oder deaktiviert werden.

### Externe API-Integrationen

#### Wettervorhersage

- `weather_api_key` — Pirate Weather API-Schlüssel
- `weather_latitude` — Breitengrad für den Standort
- `weather_longitude` — Längengrad für den Standort

Alle drei Optionen müssen gesetzt sein, damit die Funktion arbeitet.

#### HVV Nahverkehr

- `geofox_user` — Geofox API-Benutzername
- `geofox_secret` — Geofox API-Schlüssel

Beide Optionen müssen gesetzt sein.

### Home Assistant Entitäten

#### Garagentor

- `entity_garage_door` — Entity-ID der Garagentor-Abdeckung (z.B. `cover.garagentor`)

#### Wäsche

- `machines` — Liste der Maschinen mit `name` (Anzeigename) und `entity_id` (Sensor-Entity-ID)

#### Türklingel

- `entity_doorbell` — Entity-ID des Türklingel-Sensors
- `entity_doorbell_button` — Entity-ID des Türöffner-Buttons
- `cameras` — Liste der Kameras mit `entity_id` und optionaler `orientation`

#### Alltagskalender

- `entity_everyday_calendar` — Entity-ID des Alltagskalender-Sensors

#### Elektrofahrzeug

- `entity_preclimate_status` — Vorklimatisierung Status
- `entity_preclimate_start` — Vorklimatisierung starten
- `entity_preclimate_stop` — Vorklimatisierung stoppen
- `entity_charging_state` — Ladezustand
- `entity_state_of_charge` — Akkustand

#### Go2RTC Kamerastreams

- `go2rtc_base_url` — Basis-URL der Go2RTC-Installation. Falls Authentifizierung nötig, den Token in den URL-Pfad einbetten (z.B. `https://domain.com/streams/token`).

### Home Assistant Verbindung

**HASS_HOST und HASS_ACCESS_TOKEN sind NICHT erforderlich** wenn das Add-on als Home Assistant Add-on läuft. Das Add-on nutzt automatisch relative URLs und Ingress-Authentifizierung.

## Fehlerbehebung

### Funktionen werden nicht angezeigt

- Prüfen, ob der Funktionsschalter in der Konfiguration aktiviert ist
- Sicherstellen, dass alle erforderlichen Optionen der Funktion konfiguriert sind
- Entity-IDs müssen exakt mit den Home Assistant Entitäten übereinstimmen
- Browser-Konsole auf Fehler prüfen
- Add-on nach Konfigurationsänderungen neu starten

### Keine Verbindung zu Home Assistant

- Als Add-on sollten HASS_HOST und HASS_ACCESS_TOKEN **leer/nicht gesetzt** sein
- Das Add-on nutzt automatisch relative URLs und Ingress-Authentifizierung
- Diese Optionen nur setzen wenn eine Verbindung zu einer **anderen** Home Assistant Instanz nötig ist

### Wetter/HVV laden nicht

- Feature-Schalter aktiviert?
- API-Schlüssel korrekt und mit richtigen Berechtigungen?
- Alle erforderlichen Optionen der Funktion konfiguriert?
- Browser-Konsole auf API-Fehler prüfen
