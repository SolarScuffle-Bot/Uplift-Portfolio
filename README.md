# Sona Portfolio Draft v9

Raw HTML/CSS/JavaScript single-page portfolio draft.

## v9 changes

- Roblox header icon is now the same visual scale as the GitHub icons.
- Roblox header icon links only to Sona's Roblox profile.
- Removed the Roblox account popover.
- Bolded the `Sona` title text in the header.
- Centered the main header navigation in the topbar.
- Added `Senior Gameplay Engineer` to the top-right header area.
- Reduced header height and top padding.
- Restored the small rotation hover on the Sona logo.
- Moved the long home thesis line out of the top of the home layout so the main three-column content appears immediately.
- Added a lower proof strip under the home columns so scrolling reveals supporting information rather than hiding the primary content.
- Added a complementary body-text stack: `Inter`, then `Aptos`, `Segoe UI`, `Helvetica Neue`, and `Arial`.
- Cascadia Code ExtraLight remains the display/navigation/card font target.

## Notes

The site does not bundle Cascadia Code or Inter font files. It targets them locally and falls back to system fonts.

Open `index.html` directly or serve the folder with any static server.


## v11 Changes

- Removed the visible white outline around project/media images.
- Kept subtle hover lighting so cards still feel interactive without boxed image borders.
- Repositioned the home proof strip above the home columns with larger bottom spacing.
- Tuned the home route height so the proof rail and main cards sit more comfortably within the first viewport.
