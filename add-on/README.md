# HASS Family Calendar

An improved full screen calendar, showing the current week's
events, weather, next public transpart and status of the garage
door and the washing machines.

This is a private add-on, currently not meant to be shared
or used by anyone else.

## Important DEV Note

The merry-timeline dependency does not work OOTB in version 0.5.0.
This line must be changed

    "module": "index.js",

in ```node_modules/.pnpm/merry-timeline@0.5.0/node_modules/merry-timeline/package.json```
