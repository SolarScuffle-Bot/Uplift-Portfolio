# Sona Portfolio Draft v3

Raw JavaScript single-page portfolio draft.

## v3 changes

- Reworked the topbar into the requested symmetrical layout:
  - Sona profile icon + name + Sona GitHub + Sona Roblox on the left.
  - NPA Roblox + NPA GitHub + NPA name + NPA profile icon on the right.
  - Both corner profile icons return to the home route.
- Removed visible wireframe borders from text boxes, section boxes, media boxes, and project regions.
- Kept hover-responsive behavior, route fade transitions, and mouse-position glow behavior.
- Changed the typography stack to prefer Cascadia Code ExtraLight / Cascadia Code with a 200-weight local font face.

## Font note

The draft does not bundle or redistribute Cascadia Code font files. For the exact intended look during local testing, install Cascadia Code locally and make sure the ExtraLight face is available. The CSS falls back to Cascadia Code, Cascadia Mono, and common monospace fonts.

## Run locally

Open `index.html` directly, or serve the folder with any static server.

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.
