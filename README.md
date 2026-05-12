# Sona Portfolio Prototype v4

Static hash-routed portfolio prototype for a Senior Roblox Gameplay Engineer application.

## Run locally

Open `index.html` directly, or serve the folder with any static server.

## Routing

The site uses hash routes so it can be hosted without rewrite rules:

- `#/`
- `#/asylum-life`
- `#/eclipsis`
- `#/squash`
- `#/rocket-spleef`
- `#/offset-camera`
- `#/depths-of-industry`
- `#/reflector`
- `#/ocean-demo`

## Media system

Case-study panels may have media attached. Panels with media show a small corner marker and a blurred/faded background image. Clicking the panel opens a centered scrollable modal with media placement notes. Replace placeholder slots by editing `sectionMediaSlots` in `app.js` and adding `src` paths to assets.

The Eclipsis pipe network graph is stored at:

- `assets/PipeNetworkGraphs.webp`
