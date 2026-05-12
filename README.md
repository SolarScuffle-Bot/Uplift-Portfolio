# Sona Portfolio Compact Draft

This is a raw HTML/CSS/JavaScript single-page portfolio draft built around the final résumé structure and the newer box-layout plan.

## Public navigation

- Home: résumé mirror and three experience pillars.
- Work: project cabinet.
- Signals: interviewer-oriented skill map.
- Technical: engineering-domain board.
- Leadership: production and team-reliability board.
- About: short bio and links.

## Project detail views

Project cards open hash routes such as `#project/eclipsis`. These use reusable case-file blocks:

- Hero / quick facts
- Proof statement
- My Contributions
- Result / Impact
- Media

Eclipsis has a specialized metric/diagram layout because the pipe-network asset is currently the strongest technical proof artifact.

## Structure note

The portfolio is intentionally data-driven in `app.js`. Page structure and project content can change as more proof arrives, especially clips, diagrams, metrics, screenshots, and adoption data.

## Font note

The CSS prefers `Cascadia Code ExtraLight` for display/UI text and uses a clean sans-serif fallback stack for content text. No font files are bundled.
