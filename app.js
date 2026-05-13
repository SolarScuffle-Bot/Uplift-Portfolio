/**
 * Static portfolio application for Sona's Roblox gameplay engineering portfolio.
 *
 * The site is intentionally data-driven: project pages, evidence cards, and modal
 * media are declared below and rendered through a small hash-router. To add a new
 * project or evidence panel, prefer editing the data structures instead of the
 * rendering functions.
 */

/**
 * @typedef {Object} MediaSlot
 * @property {string} kind - Media category shown in the card chip, e.g. "diagram", "video", "image", or "code".
 * @property {string} label - Human-readable media title used for modal labels and accessibility text.
 * @property {string=} src - Local image or video source path.
 * @property {string=} thumbnail - Optional local image used as the blurred evidence-card background.
 * @property {string=} youtubeId - YouTube video id used for privacy-preserving embeds.
 * @property {string=} embedHtml - Trusted raw embed HTML for custom media.
 * @property {string=} language - Code language label, e.g. "luau".
 * @property {string=} code - Code sample shown in the modal code component.
 * @property {string=} description - Opening explanation for the modal.
 * @property {string=} context - Context paragraph explaining the problem or constraint.
 * @property {string=} decision - Decision paragraph explaining the chosen implementation or tradeoff.
 * @property {string=} result - Result paragraph explaining the outcome.
 */

/**
 * @typedef {Object} EvidenceCard
 * @property {string} title - Short card heading shown in a case-study section.
 * @property {string} text - Compact proof sentence shown beneath the heading.
 * @property {MediaSlot=} media - Optional media and modal content attached to this exact card.
 */

/**
 * @typedef {Object} ProjectSection
 * @property {string} title - Section name used in the case-study jump navigation.
 * @property {string} intro - Section-level summary shown above the evidence grid.
 * @property {ReadonlyArray<EvidenceCard>} groups - Evidence cards rendered inside the section.
 */

/**
 * @typedef {Object} StatCard
 * @property {string} value - Large stat or short emphasis text.
 * @property {string} label - Supporting stat description.
 */

/**
 * @typedef {Object} Project
 * @property {string} id - Stable hash-route id.
 * @property {string} title - Display name.
 * @property {string} role - Role or ownership summary.
 * @property {string} asset - Main visual asset path.
 * @property {string} link - External project link.
 * @property {string} linkLabel - Label for the external project link.
 * @property {string} pitch - One-paragraph project summary.
 * @property {ReadonlyArray<string>} proof - Short proof tags.
 * @property {ReadonlyArray<StatCard>} stats - Compact stat cards.
 * @property {ReadonlyArray<ProjectSection>} sections - Case-study sections.
 */

/**
 * @typedef {Object} ProofBucketItem
 * @property {string} title - Project label shown in the role-fit index.
 * @property {string} detail - Why this project supports the bucket.
 * @property {string} projectId - Target project id.
 */

/**
 * @typedef {Object} ProofBucket
 * @property {string} title - Role-fit category title.
 * @property {string} detail - Category explanation.
 * @property {ReadonlyArray<ProofBucketItem>} items - Project cards for this category.
 */

/**
 * @typedef {Object} ActiveMediaRecord
 * @property {string} id - Runtime modal id.
 * @property {string} projectTitle - Parent project title.
 * @property {string} sectionTitle - Parent section title.
 * @property {string} groupTitle - Parent evidence-card title.
 * @property {string} groupText - Parent evidence-card text.
 * @property {string} kind - Media category.
 * @property {string} label - Modal media label.
 * @property {string} src - Local media source path.
 * @property {string} thumbnail - Optional thumbnail path.
 * @property {string} youtubeId - Optional YouTube video id.
 * @property {string} embedHtml - Optional trusted raw embed HTML.
 * @property {string} fallbackSrc - Parent project asset fallback path.
 * @property {string} language - Code language label.
 * @property {string} code - Code sample text.
 * @property {string} description - Modal introduction.
 * @property {string} context - Modal context paragraph.
 * @property {string} decision - Modal decision paragraph.
 * @property {string} result - Modal result paragraph.
 */

/** @type {Readonly<Record<string, string>>} */
const links = Object.freeze({
	sonaGithub: "https://github.com/SolarScuffle-Bot",
	npaGithub: "https://github.com/3065325",
	sonaRoblox: "https://www.roblox.com/users/2722909519/profile",
	email: "mailto:synapsescuffle@gmail.com",
	discord: "https://discord.com/users/864793728879558667",
	resume: "assets/Sona_Resume.pdf",
	asylum: "https://www.roblox.com/games/132352755769957/Asylum-Life",
	eclipsis: "https://www.roblox.com/games/632574862/Eclipsis",
	squash: "https://data-oriented-house.github.io/Squash/",
	rocket: "https://www.roblox.com/games/106404336773666/Rocket-Spleef",
	offset: "https://devforum.roblox.com/t/offset-camera-classic-camera-extension-for-fps-shiftlock-over-the-shoulder-for-all-platforms/3177209",
	reflector:
		"https://devforum.roblox.com/t/reflector-plugin-to-mirror-just-about-anything-in-studio/4617810",
	depths: "https://www.roblox.com/games/119768530425232/Depths-of-Industry",
	ocean: "https://www.roblox.com/games/120797260198041/Call-of-the-Abyss",
});

/** @type {Readonly<Record<string, Project>>} */
const projects = Object.freeze({
	"asylum-life": {
		"id": "asylum-life",
		"title": "Asylum Life",
		"role": "Gameplay Engineer & Acting Operations Lead (2024 - 2025)",
		"asset": "assets/AsylumLife.webp",
		"link": "https://www.roblox.com/games/132352755769957/Asylum-Life",
		"linkLabel": "Open Roblox experience",
		"pitch": "Live-service Roblox production work across gameplay features, GUI-heavy UX, QA, debugging, operations, and mentorship.",
		"proof": [
			"Feature ownership",
			"Cross-disciplinary coordination",
			"Live debugging",
			"QA process",
			"Mentorship",
		],
		"stats": [
			{
				value: "Top 30",
				label: "earning Roblox experience",
			},
			{
				value: "Weekly",
				label: "release pressure",
			},
			{
				value: "Live",
				label: "servers and player data",
			},
			{
				value: "Multi-team",
				label: "production coordination",
			},
		],
		"sections": [
			{
				"title": "Collaboration",
				"intro": "The value was not just writing code. The value was turning ambiguous production needs into shippable, testable updates.",
				"groups": [
					{
						"title": "Twin Atlas",
						"text": "Partnered with Reverie Studios on design advice and QA management.",
					},
					{
						"title": "Executives",
						"text": "Worked directly with executives and management to define unambiguous updates.",
					},
					{
						"title": "Art & Modelling",
						"text": "Helped make producer-facing ideas concrete enough for art, modelling, and implementation.",
					},
					{
						"title": "GUI Team",
						"text": "Implemented cosmetics, settings, minigames, and UI-facing flows with GUI contributors.",
					},
				],
			},
			{
				"title": "Minigames",
				"intro": "Short player actions needed to read clearly, respond immediately, and avoid feeling like static menu chores.",
				"groups": [
					{
						"title": "Washing Clothes",
						"text": "GUI state, timing, readable feedback, and completion flow.",
					},
					{
						"title": "Painting",
						"text": "Short-loop interaction design with visual and audio response.",
					},
					{
						"title": "Plunging Toilets",
						"text": "Simple physical premise translated into readable GUI interaction.",
					},
					{
						"title": "Tightening Pipes",
						"text": "Timing, feedback, and clear success/failure communication.",
					},
				],
			},
			{
				"title": "Emotes",
				"intro": "Player expression feature work focused on recognisable flow, input support, and satisfying feedback.",
				"groups": [
					{
						"title": "Design Reference",
						"text": "Studied The Strongest Battlegrounds and designed the GUI direction myself.",
					},
					{
						"title": "Cross-Platform UX",
						"text": "Planned interaction flow around multiple input modes instead of desktop only.",
					},
					{
						"title": "Satisfying Use",
						"text": "Prioritized fast recognition, selection clarity, and player-facing polish.",
					},
				],
			},
			{
				"title": "Settings & Cosmetics",
				"intro": "Responsive UI work with immediate client feedback and server-owned truth.",
				"groups": [
					{
						"title": "Settings",
						"text": "Responsive toggles, immediate feedback, server-authoritative persistence.",
					},
					{
						"title": "Cosmetics",
						"text": "Cross-platform editor work, improved original design, fast local feel, server-owned results.",
					},
					{
						"title": "State Flow",
						"text": "Reduced confusion by making UI state and server results easier to understand.",
					},
				],
			},
			{
				"title": "Doors & Elevators",
				"intro": "Production fixes where the important work was scoping, modernizing, and stabilizing fragile legacy systems.",
				"groups": [
					{
						"title": "Scoped",
						"text": "Separated symptoms from causes before expanding the work.",
					},
					{
						"title": "Modernized",
						"text": "Cleaned up legacy behavior without turning the fix into a rewrite.",
					},
					{
						"title": "Optimized",
						"text": "Removed needless repeated work where it affected live behavior.",
					},
				],
			},
			{
				"title": "Operations Lead",
				"intro": "Temporary leadership work while still carrying engineering responsibility.",
				"groups": [
					{
						"title": "Led Teams",
						"text": "Programmers, QA, and contractors.",
					},
					{
						"title": "Delegated Updates",
						"text": "Programmers, GUI artists, SFX artists, and art/modelling management.",
					},
					{
						"title": "Release Hygiene",
						"text": "Clearer handoffs, checklists, and testing expectations before shipping.",
					},
				],
			},
			{
				"title": "Mentorship",
				"intro": "Raised team consistency by making standards explicit instead of relying on hidden expectations.",
				"groups": [
					{
						"title": "Styleguides",
						"text": "Shared coding and review expectations.",
					},
					{
						"title": "Architecture Principles",
						"text": "Explained why certain structures reduce future risk.",
					},
					{
						"title": "Industry Practices",
						"text": "Introduced production habits around QA, ownership, and review.",
					},
					{
						"title": "Executive Mindsets",
						"text": "Helped connect technical decisions to production consequences.",
					},
				],
			},
			{
				"title": "Exploit Security",
				"intro": "Security work covered both adversarial clients and engine-level failure modes.",
				"groups": [
					{
						"title": "Engine Bugs",
						"text": "Investigated corrupted animations that could crash games.",
					},
					{
						"title": "Network Security",
						"text": "Addressed abuse of networked remotes from legacy implementations.",
					},
					{
						"title": "Authority Model",
						"text": "Separated responsive UX from trusted state changes.",
					},
				],
			},
		],
	},
	"eclipsis": {
		"id": "eclipsis",
		"title": "Eclipsis",
		"role": "Systems Engineer & Game Designer (2022 - PRESENT)",
		"asset": "assets/Eclipsis.webp",
		"link": "https://www.roblox.com/games/632574862/Eclipsis",
		"linkLabel": "Open Roblox experience",
		"pitch": "Pipe-network graph modernization, terrain/rendering optimization, game design, team formation, and education.",
		"proof": [
			"Performance",
			"Legacy Systems",
			"Game Design",
			"Team Delegation",
			"Security",
		],
		"stats": [
			{
				value: "Teamwork",
				label: "Form teams and delegate responsibilities between them",
			},
			{
				value: "~4000ms → ~100ms",
				label: "Lower ping-pong response times in late games",
			},
			{
				value: "~24s → ~9s",
				label: "Optimize terrain loading times",
			},
			{
				value: "~3000 → ~140",
				label: "Reduce map draw calls",
			},
		],
		"sections": [
			{
				"title": "Pipe Networks",
				"intro": "I translated domain-unaware nodes doing too much work to explicit graph and aggregate state algorithms after a month of continous labor",
				"groups": [
					{
						"title": "Hierarchical Graphs",
						"text": "Pioneered hierarchical-graph representations that separated physical layout from logical network behaviors, enabling efficient context-aware graph algorithms where the old implementation couldn't.",
						"media": {
							"kind": "diagram",
							"label": "Pipe network graph diagram",
							"src": "assets/EclipsisPipeDiagram.webp",
							"description": "Annotated graph view showing how the pipe network can be reasoned about as connected logical structure instead of only as physical parts in the world. Green circle nodes are Flanges. Blue diamond nodes are Network Nodes. Yellow triangles are Networks. Network Node information is formatted as +Production|-Consumption|Capacity. Network information is formatted as +Production|-Consumption Storage/Capacity.",
							"context": "The old mental model made too much behavior local to individual pieces. That made reasoning, replication, and debugging harder than necessary. It also eliminated contextual optimization opportunities leveraging existential bulk processing.",
							"decision": "Separate physical layout from logical network behavior, then treat the network as explicit graph state that can be inspected and updated directly. Have Flanges share Network Nodes and Network Nodes share Networks.",
							"result": "The system became easier to explain, debug, optimize, and extend because the important state was no longer scattered across the map representation.",
						},
					},
					{
						"title": "Years-Worth Of Cleaning",
						"text": "Totaled to 29,476 lines of code across every structure and network-facing system combined. Was the initial push our team needed to release network-related features with confidence after years of hinderance.",
					},
					{
						"title": "Centralized Replication",
						"text": "When faced with bandwidth explosion of all networks replicating their state to the client, I built a native solution to centralize and tame their bandwidth usage.",
						media: {
							kind: "image",
							src: "assets/EclipsisNetworkConfigurations.webp",
							label: "Replicated configuration object state",
							decision: "Since the release of buffers and tools like Squash, there exists the opportunity to reduce bandwidth further.",
							result: "A centralized, reactive, automatically replicated, readonly interface of configuration instances used to transfer network information from the server to the client in a controlled manner."
						}
					},
					{
						"title": "Existential Processing",
						"text": "Utilize ECS-esque patterns to distinguish different states of data and process them as infrequently as possible. My springboard topic of education among the team.",
					},
				],
			},
			{
				"title": "Terrain Generation",
				"intro": "A focused optimization pass that changed asset layout, rendering cost, and migration expectations together over the course of three weeks.",
				"groups": [
					{
						"title": "Balanced Waste Costs",
						"text": "Reduced drawcalls from ~3000 to ~140 after collapsing avoidable instance costs across structures and terrain cells. Was a balancing act between streaming cost and rendering cost. Consolidated repeated visual data across all assets. Now superseded by a mesh-per-cell approach thanks to a talented coworker.",
					},
					{
						"title": "Restructured Pipeline",
						"text": "Rewrote generation pipeline with modernized data layouts and invariants to bring generation times from ~24 seconds to ~9 seconds, reducing churn. Wrote new migrations to ensure existing data was not corrupted.",
					},
				],
			},
			{
				"title": "Education",
				"intro": "Technical leadership meant teaching the project how to move forward, to not fall back into problematic patterns",
				"groups": [
					{
						"title": "Data-Oriented Design",
						"text": "Taught the team data layout and processing choices around actual game constraints so they could maintain and extend new pipe, terrain, and structure logic.",
					},
					{
						"title": "Folder-Per-Feature",
						"text": "When we experienced friction reasoning about features scattered across the codebase, I introduced folder-per-feature architecture habits using Rojo that make systems easier to locate and modify. Applied responsibly among the existing service-oriented architecture to avoid disrupting progress and stability.",
					},
				],
			},
			{
				"title": "Game Design",
				"intro": "Bridging data-driven ideas, balancing changes, and community engagement by turning ideas into concrete plans of action with constructive mindsets.",
				"groups": [
					{
						"title": "Structures",
						"text": "Designed and scoped new update content in accordance with balancing roadmap, replacing beloved problematic structures at the heart of our economy problems. A few examples I designed, modelled, and implemented are Pressurizers, Spire Batteries, and Crystal Atomizers.",
					},
					{
						"title": "Balance Changes",
						"text": "Approached balancing with the goals of encouraging land-expansion and eliminating infinite economy sources. Took it upon myself to align game to vision, identifying and designing fun, unique replacements to each problematic structure.",
					},
					{
						"title": "Roadmap",
						"text": "Planned updates using community feedback and data-driven priorities, such as fixing our economy and optimizing terrain generation, to establish the foundation for pivotal features like PVE that will redefine the game's retention rates.",
					},
					{
						"title": "Mindset Shift",
						"text": "Moved team decisions from \"rock-paper-scissors-like\" thinking towards \"chess-like\" positional design to better match the context of our desired outcomes and gameplay situation. This enabled new insights in round lifetimes and overarching gameplay chains.",
					},
				],
			},
			{
				"title": "Team Formation & Delegation",
				"intro": "Our community plays an impactful role in contributing to the game's livelihood. I created specialized groups so work could continue without every responsibility collapsing onto developers, increasing community participation towards the game's future.",
				"groups": [
					{
						"title": "Balancing Team",
						"text": "Revived the balancing team from its dormant state and regularly filtered qualified community members to populate it. Actively consulted the balancing team for new feature proposals and reviews on updates. Encouraged the development team to utilize this resource when making decisions.",
					},
					{
						"title": "Wikipedia Team",
						"text": "Officiated an unofficial group of self-guided community members focusing on maintaining our game's wiki. Offer developer resources for accurate statistics and delegate all wiki responsibilities to this team.",
						media: {
							kind: "image",
							src: "assets/EclipsisWiki.webp",
							label: "Screenshot of Eclipsis Wiki page",
							description: "https://eclipsis.fandom.com/wiki/Eclipsis_Wiki",
						}
					},
					{
						"title": "Tournament Team",
						"text": "Hosted and organized tournaments for years before becoming a developer, formalizing with written rules, eventually delegated responsibilities to new host with minimal oversight.",
						media: {
							kind: "image",
							src: "assets/EclipsisTournaments.webp",
							label: "Screenshot of gold-division singles' tournament"
						}
					},
					{
						"title": "Bug Hunters",
						"text": "Newest team formulated, aiming to utilize community members that love to break things and share bugs by putting their natural tendencies to work, catching new and old bugs alike. Least organized team and directly under the supervision of developers as an extra QA layer.",
						media: {
							kind: "image",
							src: "https://i.gyazo.com/35e7cf7aaa1a3fc43464b4e06bf6fa89.gif",
							label: "Bug hunter identifying comical pipe-placement bug"
						}
					},
				],
			},
			{
				"title": "Exploit Security",
				"intro": "Balanced client-eager feel with server-authoritative truth.",
				"groups": [
					{
						"title": "Tool Overhaul",
						"text": "Overhaul of critical tools framework to establish immediate feedback, better UX, reduced server communication bandwidth, and secure exploit-proof networking channels. Currently still in development in offshoot branch.",
					},
					{
						"title": "Server Authority",
						"text": "After pipe networking overhaul, structures split responsibilities between the server and client. The client handles rendering and collecting input, while the server handles game-critical logic and processes these inputs in dedicated protected channels per-structure.",
					},
				],
			},
		],
	},
	"squash": {
		"id": "squash",
		"title": "Squash",
		"role": "Creator & Maintainer",
		"asset": "assets/Squash.webp",
		"link": "https://data-oriented-house.github.io/Squash/",
		"linkLabel": "Open documentation",
		"pitch": "A public Luau serialization library focused on comprehensive Roblox type support, compact layouts, and instructive documentation.",
		"proof": [
			"Open source",
			"Luau",
			"Serialization",
			"Documentation",
			"Education",
		],
		"stats": [
			{
				value: "Comprehensive",
				label: "Every serializable Roblox type",
			},
			{
				value: "Innovative",
				label: "Ergonomic declarative functional schema API",
			},
			{
				value: "Code Generation",
				label: "Highly optimized code paths",
			},
			{
				value: "Education",
				label: "Documentation, education, and research material",
			},
		],
		"sections": [
			{
				"title": "Comprehensive",
				"intro": "Squash covers the entire domain of serializable Roblox & Luau datatypes.",
				"groups": [
					{
						"title": "Roblox Types",
						"text": "Covers every serializable Roblox type.",
					},
					{
						"title": "Schema Composition",
						"text": "Allows complex schemas to be built from smaller pieces, enabling highly efficient spatial compression of otherwise arbitrary tables.",
					},
				],
			},
			{
				"title": "Innovative API",
				"intro": "The API is declarative and functional, so users describe layouts rather than manually stepping through buffers.",
				"groups": [
					{
						"title": "Declarative Schemas",
						"text": "Compose infinitely complex layouts from small, reusable, intuitive schema functions.",
						"media": {
							"kind": "code",
							"label": "Schema Composition",
							"language": "luau",
							"code": "local T = Squash.T\nlocal u = Squash.uint\nlocal vlq = Squash.vlq()\nlocal bool = Squash.boolean()\nlocal str = Squash.string()\nlocal float = Squash.number(4)\nlocal vec2 = Squash.Vector2\nlocal arr = Squash.array\nlocal map = Squash.map\nlocal opt = Squash.opt\nlocal record = Squash.record\n\nlocal playerserdes = record {\n\tposition = T(vec2(float)),\n\thealth = T(u(1)),\n\tname = T(str),\n\tpoisoned = T(bool),\n\titems = T(arr(record {\n\t\tcount = T(vlq),\n\t\tname = T(str),\n\t})),\n\tinns = T(map(str, bool)),\n\tequipped = T(opt(str)),\n}\n\nlocal cursor = Squash.cursor()\nplayerserdes.ser(cursor, {\n\tposition = Vector2.new(287.3855, -13486.3),\n\thealth = 9,\n\tname = \"Cedrick\",\n\tpoisoned = true,\n\titems = {\n\t\t{ name = 'Lantern', count = 2 },\n\t\t{ name = 'Waterskin', count = 1 },\n\t\t{ name = 'Map', count = 4 },\n\t},\n\tinns = {\n\t\t['The Copper Cauldron'] = true,\n\t\tInfirmary = true,\n\t\t['His Recess'] = true,\n\t},\n\tequipped = nil,\n})\nSquash.print(cursor)\n-- Pos: 90 / 90\n-- Buf: { 0 9 1 72 105 115 32 82 101 99 101 115 115 138 1 84 104 101 32 67 111 112 112 101 114 32 67 97 117 108 100 114 111 110 147 1 73 110 102 105 114 109 97 114 121 137 131 130 76 97 110 116 101 114 110 135 129 87 97 116 101 114 115 107 105 110 137 132 77 97 112 131 131 67 101 100 114 105 99 107 135 1 51 185 82 198 88 177 143 67   }\n--                                                                                                                                                                                                                                                                                                                                            ^\nlocal buf = Squash.tobuffer(cursor)\n\nlocal cursor = Squash.frombuffer(buf)\nprint(playerserdes.des(cursor))\n-- {\n--     [\"health\"] = 9,\n--     [\"inns\"] =  ▼  {\n--        [\"His Recess\"] = true,\n--        [\"Infirmary\"] = true,\n--        [\"The Copper Cauldron\"] = true\n--     },\n--     [\"items\"] =  ▼  {\n--        [1] =  ▼  {\n--           [\"count\"] = 2,\n--           [\"name\"] = \"Lantern\"\n--        },\n--        [2] =  ▼  {\n--           [\"count\"] = 1,\n--           [\"name\"] = \"Waterskin\"\n--        },\n--        [3] =  ▼  {\n--           [\"count\"] = 4,\n--           [\"name\"] = \"Map\"\n--        }\n--     },\n--     [\"name\"] = \"Cedrick\",\n--     [\"poisoned\"] = true,\n--     [\"position\"] = 287.385498, -13486.2998\n--  }",
							"context": "Combine primitive serializers into complex, highly optimized schemas that can serialize complex structured data into buffers and back again!",
							"decision": "",
							"result": "",
						},
					},
					{
						"title": "Practical Ergonomics",
						"text": "Expose data compression without forcing every user to become a bit-level specialist.",
					},
				],
			},
			{
				"title": "Optimizations",
				"intro": "The API allows specific layouts to be optimized based on what the schema says.",
				"groups": [
					{
						"title": "Packed Booleans",
						"text": "Bitpack booleans and optionals in arrays, tuples, and records.",
					},
					{
						"title": "Arithmetic Over bit32",
						"text": "Use arithmetic where Luau constraints make it preferable.",
					},
					{
						"title": "Interpreter-Aware",
						"text": "Use inlining and constant folding patterns when they help.",
					},
					{
						"title": "Code Generation",
						"text": "Generate runtime code lazily for layout-specific speed.",
					},
					{
						"title": "Quaternion Compression",
						"text": "Compress rotations for network and storage-heavy data.",
					},
				],
			},
			{
				"title": "Educational Resource",
				"intro": "The docs are meant to teach network and serialization practice, raising our ecosystem up to find use for the tool.",
				"groups": [
					{
						"title": "RakNet Events",
						"text": "Took RemoteEvent and RemoteFunction RakNet event layouts in raw binary form and reverse-engineered today's documentation.",
					},
					{
						"title": "Best Practices & Strategies",
						"text": "Documented conclusions and practical network guidance. Teaches when compact layouts and certain datatypes are worth their complexity.",
					},
					{
						"title": "Community Education",
						"text": "Explained SerDes and compression strategies for Roblox developers.",
					},
					{
						"title": "Documentation",
						"text": "Went through many iterations to make compression concepts usable and understood by the wider audience.",
					},
				],
			},
		],
	},
	"rocket-spleef": {
		"id": "rocket-spleef",
		"title": "Rocket Spleef",
		"role": "Creator / Sole Developer",
		"asset": "assets/RocketSpleef.webp",
		"link": "https://www.roblox.com/games/106404336773666/Rocket-Spleef",
		"linkLabel": "Open Roblox experience",
		"pitch": "Original Roblox party game built around responsive rocket feel, server-authoritative outcomes, progression, events, and monetization loops.",
		"proof": [
			"Game Feel",
			"Server Authority",
			"Original Game",
			"Progression",
			"Monetization",
		],
		"stats": [
			{
				value: "Immediate Feedback",
				label: "Client-eager implementations where possible",
			},
			{
				value: "Server Authority",
				label: "Important mechanics are owned by the server",
			},
			{
				value: "Feel-Good Design",
				label: "Rewarded for winning, for losing, and for staying",
			},
			{
				value: "Iteration",
				label: "Test bed for new ideas and growth opportunities",
			},
		],
		"sections": [
			{
				"title": "Rocket Launchers",
				"intro": "The main mechanic had to feel instant without letting the client own the truth.",
				"groups": [
					{
						"title": "Zero-Latency Feel",
						"text": "Researched and designed client-eager, server-authoritative projectile behavior. Handles all possible edge-cases relating to client/server desync to ensure best compromising outcome.",
						media: {
							kind: "video",
							src: "https://i.gyazo.com/62c5a056391249fdae10184a9c62aa1a.mp4",
							context: "A separate testing environment with an artificial gravity well to demonstrate eager client behavior in a physically-simulated setting. Try to catch the gap in the particle trail where the client-to-server handoff occurs.",
							label: "Firing zero-latency server-authoritative projectiles in a gravity well"
						}
					},
					{
						"title": "Cooldown UX",
						"text": "Experimenting with color-coded animated cursors to communicate reload status and duration.",
						media: {
							kind: "image",
							src: "https://i.gyazo.com/7c0f115af4bf12ec72cbf3fb0391a498.gif",
							label: "Color-coded animated rocket cooldown cursor",
							context: "Experimenting with new ideas, I decided to try a color-coded animated crosshair to count down the remaining seconds until reloaded. The goal was to make it easy to notice at a glance.",
							decision: "This is likely better achieved or accompanied by changing the tool's icon to reflect the state.",
						}
					},
					{
						"title": "Knockback",
						"text": "Stabilized explosions communicate rocket jumping is intentional and rewarding.",
						media: {
							kind: "image",
							src: "https://i.gyazo.com/bdd94f7432179e45241ba30d969f8ab9.gif",
							context: "Rocket-jumping is a core mechanic in Rocket Spleef. When hit with an explosion, the humanoid is put into the seated state since that disables Roblox's alignment tendencies and encourages tumbling.",
							label: "Rocket-jumping without jumping to restabilize, causing quite the tumble",
						}
					},
				],
			},
			{
				"title": "Server Authority",
				"intro": "The server controls outcomes while the client gets fast feedback.",
				"groups": [
					{
						"title": "Client-Eager Rockets",
						"text": "Rockets start immediately and switch to the server as soon as possible.",
						"media": {
							"kind": "diagram",
							"label": "Client-Eager Server-Authoritative Flowchart",
							"src": "assets/RocketAuthorityFlow.png",
							"context": "Rocket gameplay feels bad if every shot waits on the server, but fully trusting the client creates exploit risk.",
							"decision": "Let the client start the feeling immediately, then transfer ownership and final outcomes to the server as soon as possible.",
							"result": "The player gets immediate feedback while plates, events, and round outcomes remain server-owned.",
						},
					},
					{
						"title": "Arena",
						"text": "The arena's plates and round events are server-owned.",
					},
				],
			},
			{
				"title": "Crates",
				"intro": "Crates create short-term and mid-term progression without making losing feel punishing.",
				"groups": [
					{
						"title": "Earned Flow",
						"text": "Rewards players for participating with random prizes they must spend time unlocking.",
						media: {
							kind: "image",
							src: "https://i.gyazo.com/1a641dc8c38a59b3596be9db642a67a8.gif",
							context: "In earlier versions of the game, crates were earned more frequently than opened. This leads to a massive tower of crates that takes a looooong time to clear. Each earned crate randomly chooses an owned pedestal and falls onto the queue."
						}
					},
					{
						"title": "Time Range",
						"text": "Opening times encode progression from 5 minutes to 12 days, occupying the short-mid term progression timeline.",
						media: {
							kind: "video",
							src: "assets/RocketSpleefUnlock.webm",
							label: "Watching Common Crate unlock",
							context: "After earning a crate, it will sit on the queue of crates until reaching the pedestal at the bottom. There it will count down to unlock for its duration.",
							result: "This encodes short-term and mid-term progression.",
						}
					},
					{
						"title": "Content Driver",
						"text": "Primary unlock path that also feeds monetization.",
						media: {
							kind: "video",
							src: "assets/RocketSpleefOpen.webm",
							label: "Watching Common Crate open",
							context: "Players can earn a weighted random set of rewards from different crates, publically displayed in accordance with Roblox's legal policies."
						}
					},
				],
			},
			{
				"title": "Events & Tools",
				"intro": "Round variety should shorten rounds and create different play patterns.",
				"groups": [
					{
						"title": "Events",
						"text": "Different event types stack together to spice up round gameplay and add stylized VFX moments.",
						media: {
							kind: "video",
							src: "assets/RocketSpleefEvents.webm",
							label: "Preview of a typical round, highlighting Slip and Imposters event",
							context: "Rocket Spleef will choose 1-4 random events every other round to flip the game's winning strategy from offense to defense.",
						}
					},
					{
						"title": "Tools",
						"text": "Purchasable or crate-earned tools create new play opportunities.",
						media: {
							kind: "video",
							src: "https://i.gyazo.com/abb2fed36314315917bdf0e8ac5f62aa.mp4",
							label: "Buying quick items during intermission",
							context: "Players can spend coins on temporary items to experience new gameplay opportunities."
						}
					},
					{
						"title": "Gameplay Variety",
						"text": "Each tool and event should encourage a different decision, not just add noise or reskin an existing idea.",
					},
				],
			},
			{
				"title": "Game Design",
				"intro": "The target is a casual party game that is easy to play, hard to master, and fun to lose.",
				"groups": [
					{
						"title": "Shorter Rounds",
						"text": "Content should increase pressure and accelerate round resolution.",
						media: {
							kind: "video",
							src: "https://cdn.medal.tv/ugcc/content-social/jZdiw6EhY7vMNGO-R65Xng.mp4?auth=exp=1778682600~data=MzI3MDU0MzgsbDNCdHJaYkI1NWp6T1FqWXIsMWUyQWQ2RU9hRSwtMQ~hmac=cb8a1731763e0e3345eea48588751858259ab90fcc13225f363a684554347d0a",
							label: "Round ending in seconds thanks to Mines and the Slingshot",
							context: "Items, events, and future abilities contribute to rounds ending quickly and reliably, keeping players in the action at all times.",
							result: "Players are less likely to churn from boredom."
						}
					},
					{
						"title": "No Fear of Losing",
						"text": "Any new additions to the game must never allow players to measure their losses or encourage players to optimize killing.",
					},
					{
						"title": "Repeatable Loop",
						"text": "Round, reward, crate, tool, and cosmetic planning support repeated play.",
					},
					{
						"title": "Visual Language",
						"text": "The game should utilize and develop a visual language to communicate both native and foreign concepts to players, establishing a unique identity.",
					},
				],
			},
			{
				"title": "Monetization & Progression",
				"intro": "Monetization is built around crates, unlocks, pedestals, cosmetics, tools, and crafting paths.",
				"groups": [
					{
						"title": "Crate Purchases",
						"text": "Buying and unlocking crates act as another economy sink to encourage spending.",
						media: {
							kind: "video",
							src: "https://i.gyazo.com/2a23943db5d36549e6473d44e6f02071.mp4",
							label: "Buying two Epic crates",
							context: "To be unconventional and better match value to robux, players buy two crates at a time. Each crate will try to land on a different pedestal if possible as a mercy to the player.",
							decision: "I plan to better communicate the success of the purchase and draw attention to the falling crates.",
						}
					},
					{
						"title": "Pedestals",
						"text": "Additional unlock friction and collection goals.",
						media: {
							kind: "video",
							src: "https://i.gyazo.com/f0a55813686b3d8a783e70a620e88fdc.mp4",
							label: "Unlocking Uncommon pedestal",
							context: "Players unlock a series of pedestals to increase the surface area of their crate spawns.",
							decision: "I wanted to compliment the random nature of crates falling on random pedestals, while also giving the players something to spend their coins on.",
							result: "Pedestals can be bought for coins and guarantee the first crate is of the same rarity.",
						}
					},
					{
						"title": "Content & Crafting",
						"text": "Planned content farming and crafting support longer-term progression.",
						media: {
							kind: "image",
							src: "assets/RocketSpleefCrafting.webp",
							label: "Work-in-progress crafting pedestals",
							context: `The crafting system needs crates, duplicates, shards, seasonal materials, and long-term progression without becoming too complicated. Single-material or few-material crates seem stronger than broad material pools because they are easier to understand and balance. Low-rarity filler items can fill crate space, while duplicate rewards convert into shards. Shards act as the universal fallback ingredient and can vary by season, though crate paging still needs to be resolved.`,
							decision: `Use single/few-material crates with random low-rarity filler rewards rather than many-material crates. Put shards on the center pedestal as the final catch-all ingredient, and let players choose which seasonal shard type they want to earn. Focus craftables on items that justify the system, such as rocket variants, tools, tool upgrades, arenas, win/lose cards, and win/lose sounds. Cosmetics should likely be handled through rarity keys, while abilities should only be added if they create clearly distinct gameplay.`,
						}
					},
					{
						"title": "Analytics & Balancing",
						"text": "Analytics and data-driven statistical methods will drive the configuration constants used to balance the game's economy and progression pacing.",
					}
				],
			},
		],
	},
	"offset-camera": {
		"id": "offset-camera",
		"title": "Offset Camera",
		"role": "Author & Maintainer",
		"asset": "assets/OffsetCamera.webp",
		"link": "https://devforum.roblox.com/t/offset-camera-classic-camera-extension-for-fps-shiftlock-over-the-shoulder-for-all-platforms/3177209",
		"linkLabel": "Open DevForum post",
		"pitch": "Drop-In replacement camera library for FPS, shift-lock, and over-the-shoulder controls that preserves native camera feel.",
		"proof": [
			"Camera",
			"UX",
			"Open Source",
			"Battle Tested",
		],
		"stats": [
			{
				value: "Native Feel",
				label: "Uses Roblox's own camera modules for identical feel",
			},
			{
				value: "Drop-In Replacement",
				label: "Minimizes friction to introduce into existing games",
			},
			{
				value: "Secure",
				label: "Resillient optimized torso replication",
			},
			{
				value: "Configurable",
				label: "Countless runtime parameters to customize behavior",
			},
		],
		"sections": [
			{
				"title": "Drop-In Replacement",
				"intro": "Easy to deploy without forcing developers into a full camera framework.",
				"groups": [
					{
						"title": "\"It Just Works\"",
						"text": "Preserves default-camera expectations by integrating natively with roblox state handling and lifecycles.",
					},
					{
						"title": "Roblox Native",
						"text": "Builds on the native behavior players already understand, utilizing the native zoom, popper, input, and state modules.",
					},
				],
			},
			{
				"title": "Torso Replication",
				"intro": "Additionally handles torso replication securely and with minimal waste.",
				"groups": [
					{
						"title": "Replication",
						"text": "Only the necessary visual state crosses the network.",
						media: {
							kind: "image",
							src: "https://i.gyazo.com/0962ab0af7b8fa417dbf47dfacd0e9d9.gif",
							context: "Peer's torso replicating smoothly to match their local camera.",
						},
					},
					{
						"title": "Security",
						"text": "Avoids trusting unnecessary client state while maintaining client-sided settings. Guards against remote attacks.",
					},
				],
			},
			{
				"title": "Customization & Docs",
				"intro": "Settings and documentation make it usable by other Roblox developers across many genres.",
				"groups": [
					{
						"title": "Many Settings",
						"text": "Highly configurable public interface without needing to change implementation details.",
						"media": {
							"kind": "code",
							"label": "Offset Camera Settings",
							"code": `OffsetCamera.settings = {
	-- Set me to the name of a basepart or attachment under the Character or Camera.CameraSubject, and I'll treat that as my focus
	subjectName = nil :: string?,

	-- Set me to true if you want me to focus on the whole vehicle instead of the subject
	centerOnVehicle = false,

	-- Set me to 0 if you don't want the camera to rotate with the subject
	-- Set me to 1 if you want to rotate entirely with the subject, like following the head as it turns or the shoulder when it wobbles
	-- It's best if you redefine the whole table like this instead of changing individual keys
	subjectRotationConvergence = {
		[Players.LocalPlayer.CameraMinZoomDistance] = 1,
		[ZOOM_DEFAULT] = 0,
	},

	-- Set me to define the camera keypoints at different distances
	-- It's best if you redefine the whole table like this instead of changing individual keys
	offsets = {
		[Players.LocalPlayer.CameraMinZoomDistance] = CFrame.identity,
		[3] = CFrame.new(1.75, 0, 0),
	},

	-- Set me if you want to go from Right-Handed to Left-Handed
	mirrorOffsets = false,

	-- Set us if you want to make the camera faster or slower in a direction
	horizontalSensitivity = 1,
	verticalSensitivity = 1,

	-- Set me to true if you want the character to bend their head and torso to follow the camera
	bendToFollowCamera = true,

	-- Change me to change how fast the character bends to face the camera. Slower is more dramatic, faster is snappier.
	bendSpeed = 10,

	-- Set me to false to let players look past their max yaw without spinning the character around
	rotateCharacterYawToFollowCamera = true,

	-- Set us to true if you want to restrict how far the camera can turn horizontally when standing or sitting.
	-- (Keep us off if your character flings around while seated or platformstanding to prevent nausea, jittery camera corrections, and weird physics beahvior)
	restrictCameraByTorsoYawWhenStanding = false,
	restrictCameraByTorsoYawWhenSitting = false,

	-- Change us to change how far up and down the camera can look, and how far the head & torso will rotate to follow
	-- https://www.desmos.com/calculator/tjyrshl4xt   This is an interactive graphing calculator you can use to preview the angles
	maxHeadPitch = math.rad(80),
	minHeadPitch = math.rad(-80),
	maxTorsoPitchPercent = 0.625,
	minTorsoPitchPercent = 0.5,
	torsoPitchWeight = 3,

	-- Change us to change how far left and right the camera can look, and how far the head & torso will rotate to follow
	maxHeadYaw = math.rad(90),
	minHeadYaw = math.rad(-90),
	maxTorsoYawPercent = 0.5,
	minTorsoYawPercent = 0.5,
	torsoYawWeight = 1,
}`,
							// "src": "assets/OffsetCamera.webp",
							"context": "Enough settings to use this camera between racing games, shooters, horror games, and more.",
						},
					},
					{
						"title": "Documentation",
						"text": "Approachable documentation full of diagrams and explanations to teach integration and edge cases.",
						media: {
							kind: "image",
							src: "assets/OffsetCamera1.webp",
							context: ""
						}
					},
				],
			},
		],
	},
	"depths-of-industry": {
		"id": "depths-of-industry",
		"title": "Depths of Industry",
		"role": "Original Game / UX Systems",
		"asset": "assets/DepthsOfIndustry.webp",
		"link": "https://www.roblox.com/games/119768530425232/Depths-of-Industry",
		"linkLabel": "Open Roblox experience",
		"pitch": "Placement-system and cross-platform UX proof around snapping, rotations, feedback, and player intuition.",
		"proof": [
			"Placement UX",
			"Cross-platform",
			"Original game",
			"Sound and springs",
		],
		"stats": [
			{
				value: "Grid",
				label: "rectangular placement",
			},
			{
				value: "Cubic",
				label: "rotation handling",
			},
			{
				value: "Desktop",
				label: "mobile, console",
			},
			{
				value: "Springs",
				label: "feedback language",
			},
		],
		"sections": [
			{
				"title": "Placement System",
				"intro": "The system handles grid-based placement for rectangular structures and intrinsic cubic rotations.",
				"groups": [
					{
						"title": "Grid Placement",
						"text": "Clear placement rules for structures.",
					},
					{
						"title": "Cubic Rotations",
						"text": "Accounts for orientation in a way players can predict.",
					},
				],
			},
			{
				"title": "Cross-Platform",
				"intro": "The interaction was tested against mobile, desktop, and console instead of treating non-mouse inputs as afterthoughts.",
				"groups": [
					{
						"title": "Mobile",
						"text": "Touch constraints considered.",
					},
					{
						"title": "Desktop",
						"text": "Mouse/keyboard precision supported.",
					},
					{
						"title": "Console",
						"text": "Controller flow kept in view.",
					},
				],
			},
			{
				"title": "Excellent UX",
				"intro": "Placement has to feel physical, not like dragging invisible math.",
				"groups": [
					{
						"title": "Snapping",
						"text": "Springs and sound convey snap, weight, buildup, and response.",
					},
					{
						"title": "Intuition",
						"text": "Optimized for players understanding what will happen before committing.",
					},
				],
			},
		],
	},
	"reflector": {
		"id": "reflector",
		"title": "Reflector",
		"role": "Studio Plugin",
		"asset": "assets/Reflector.webp",
		"link": "https://devforum.roblox.com/t/reflector-plugin-to-mirror-just-about-anything-in-studio/4617810",
		"linkLabel": "Open DevForum post",
		"pitch": "Studio plugin directed by precise requirements, edge-case validation, GUI UX, and data-loss safety.",
		"proof": [
			"Tooling",
			"GUI UX",
			"Validation",
			"AI-Assisted",
		],
		"stats": [
			{
				value: "Comprehensive",
				label: "Reflects almost any instance, even animations",
			},
			{
				value: "Minimal & Intuitive",
				label: "Intentionally designed unintrusive plugin GUI",
			},
			{
				value: "Safe",
				label: "Internal versioning and secure rollbacks to prevent data loss",
			},
			{
				value: "AI Accelerated",
				label: "Produced in days thanks to an AI-powered workflow",
			},
		],
		"sections": [
			{
				"title": "Comprehensive",
				"intro": "The plugin reflects the vast majority of reflectable instances while handling semantic ambiguity better than any ad hoc solutions.",
				"groups": [
					{
						"title": "Coverage",
						"text": "Covers baseparts, folders, models, unions, meshes motor6d rigs, physics rigs, decals, textures, keyframe sequences, curve sequences, and more!",
					},
					{
						"title": "\"It Just Works\"",
						"text": "Intelligenty scans selections to deduce correct orientation and perform degraded reflections, preserving the intended result of the reflection using only rotations and translations.",
					},
				],
			},
			{
				"title": "GUI UX",
				"intro": "GUI is intentionally minimal so the plugin does not slow normal Studio workflows.",
				"groups": [
					{
						"title": "Small Surface",
						"text": "A small plugin is a good plugin, especially when you're building things.",
					},
					{
						"title": "Adjustable Plane",
						"text": "In addition to compact controls, spatial interactions happen in the workspace itself by moving and rotating a plane of reflection for an intuitive experience.",
						"media": {
							"kind": "image",
							"label": "Moving the plane of reflection",
							"src": "assets/Reflector2.webp",
							"context": "The user has their control widget to toggle behavior. They also have their physical plane they can manipulate in the same manner they have with any other roblox instance.",
						}
					},
				],
			},
			{
				"title": "Safety",
				"intro": "Internal and external version control protects against data loss and corrupted assets, a problem in alternatives.",
				"groups": [
					{
						"title": "Rollback",
						"text": "Tooling should be reversible when it mutates user work. Designed to adhere to this guideline.",
					},
					{
						"title": "Validation",
						"text": "Unsupported cases should fail clearly instead of corrupting content. The plugin will intuitively prevent you from making irreversible mistakes",
						"media": {
							"kind": "image",
							"label": "Different validation states",
							"src": "assets/Reflector1.webp",
							"description": "A non-exhaustive assortment of different visual states the plugin can be in during use.",
							"context": "When reflecting objects in Studio, there's many edge cases that can invalidate selections or result in dangerous irreversible situations.",
							"decision": "Take extra time developing clear gui states that communicate exact issues, warning, and valid operations.",
							"result": "The user feels confident their selection will not break when reflected. They feel well-informed about why a selection might be invalid or take time to process.",
						},
					},
				],
			},
			{
				"title": "AI Assisted",
				"intro": "Implementation was accelerated with AI, while algorithms, requirements, validation, and problem resolution were human-directed.",
				"groups": [
					{
						"title": "Iteration Speed",
						"text": "AI shortened implementation cycles by over 20x allowing breakneck iteration and testing speeds.",
					},
					{
						"title": "Human Direction",
						"text": "Correctness rules, math decisions, coverage, and acceptance criteria were defined by hand as I went along.",
					},
				],
			},
		],
	},
	"ocean-demo": {
		"id": "ocean-demo",
		"title": "Ocean Tech",
		"role": "Wave Simulation",
		"asset": "assets/CallOfTheAbyss.webp",
		"link": "https://www.roblox.com/games/120797260198041/Call-of-the-Abyss",
		"linkLabel": "Open Roblox experience",
		"pitch": "Efficient Gerstner-wave simulation with server-authoritative composition for weather, buoys, and boats.",
		"proof": [
			"Simulation",
			"Physics",
			"Server Authority",
			"Client Rendering",
			"High Performance",
		],
		"stats": [
			{
				value: "Optimized",
				label: "Performant parallelized level-of-detail wave system",
			},
			{
				value: "Composable",
				label: "Layered high-fidelity waves",
			},
			{
				value: "Physics",
				label: "Define buoys and boats",
			},
			{
				value: "Server Authoritive",
				label: "Defined on server, rendered on clients",
			},
		],
		"sections": [
			{
				"title": "Gerstner Waves",
				"intro": "Composable server-authoritative wave parameters make weather possible without replacing the water system for every condition.",
				"groups": [
					{
						"title": "Composition",
						"text": "Multiple wave layers are combined into distinct sea states to simulate weather conditions.",
					},
					{
						"title": "Server Owned",
						"text": "Server-owned parameters keep clients synchronized and safe from bad actors. Clients render waves separately in parallel.",
					},
					{
						"title": "Performance",
						"text": "Waves are computed using optimal formulas, data-oriented pipelines, and rendered client-sided across multiple actors using an intricate level-of-detail system.",
					},
					{
						"title": "Tunable",
						"text": "Low-level configuration constants and high-level tuning options enable optimizing to meet every game's needs and constraints, balancing visual fidelity with computation time.",
					},
				],
			},
			{
				"title": "Simulated Buoys & Boats",
				"intro": "Objects respond to the wave field in a readable, stable way.",
				"groups": [
					{
						"title": "Buoys",
						"text": "Add tags to parts to make them float in the water. Use attributes to define how deep into the water (submarines).",
						media: {
							kind: "video",
							src: "https://i.gyazo.com/ea412c43bbb697f8c14e7066bfaa59b1.mp4",
							label: "Buoys and boats floating in active waters",
						}
					},
					{
						"title": "Boats",
						"text": "Add tags to boats with FloatParts, Propellers, and Seats to navigate turbulent waves.",
						media: {
							kind: "video",
							src: "https://i.gyazo.com/0d6fa5bee91689c14a118297912b5cec.mp4",
							label: "Driving boat across huge turbulent waves"
						}
					},
				],
			},
		],
	},
});

/** @type {ReadonlyArray<string>} */
const highlightIds = Object.freeze([
	"asylum-life",
	"eclipsis",
	"rocket-spleef",
]);

/** @type {ReadonlyArray<ProofBucket>} */
const proofMap = Object.freeze([
	{
		title: "Coordination",
		detail: "Owning ambiguous work across executives, producers, engineers, QA, artists, and community-facing priorities.",
		items: [
			{
				title: "Asylum Life",
				detail: "Live production, QA management, delegation, executive collaboration.",
				projectId: "asylum-life",
			},
			{
				title: "Eclipsis",
				detail: "Team formation, roadmap work, tournament delegation, education.",
				projectId: "eclipsis",
			},
		],
	},
	{
		title: "Technical",
		detail: "Roblox systems that need data layout, performance, server authority, documentation, or unusual engine knowledge.",
		items: [
			{
				title: "Eclipsis",
				detail: "Terrain, pipe networks, replication, migrations.",
				projectId: "eclipsis",
			},
			{
				title: "Squash",
				detail: "Serialization, compact schemas, Luau optimization.",
				projectId: "squash",
			},
			{
				title: "Rocket Spleef",
				detail: "Server-authoritative rockets and monetization.",
				projectId: "rocket-spleef",
			},
			{
				title: "Offset Camera",
				detail: "Customizable native camera integration and torso replication.",
				projectId: "offset-camera",
			},
			{
				title: "Reflector",
				detail: "Comprehensive case-by-case algorithms.",
				projectId: "reflector",
			},
			{
				title: "Ocean Demo",
				detail: "Gerstner waves and physics simulation.",
				projectId: "ocean-demo",
			},
		],
	},
	{
		title: "Gameplay",
		detail: "Original mechanics, balance changes, round structure, and server-safe moment-to-moment feedback.",
		items: [
			{
				title: "Eclipsis",
				detail: "Balance changes, economy fixes, roadmap, strategic depth.",
				projectId: "eclipsis",
			},
			{
				title: "Rocket Spleef",
				detail: "Rocket feel, event variety, tools, crates, progression.",
				projectId: "rocket-spleef",
			},
		],
	},
	{
		title: "UX",
		detail: "Readable feedback, crossplatform, placement feel, camera feel, and workflow clarity.",
		items: [
			{
				title: "Rocket Spleef",
				detail: "Item & event interactions, crate UX, establishing visual language.",
				projectId: "rocket-spleef",
			},
			{
				title: "Depths of Industry",
				detail: "Satisfying and responsive placement, cross-platform input.",
				projectId: "depths-of-industry",
			},
			{
				title: "Asylum Life",
				detail: "Responsive minigames, cosmetics, emotes, and GUI.",
				projectId: "asylum-life",
			},
			{
				title: "Offset Camera",
				detail: "Native roblox camera camera feel.",
				projectId: "offset-camera",
			},
			{
				title: "Reflector",
				detail: "Minimal plugin UI and safe workflow decisions.",
				projectId: "reflector",
			},
		],
	},
	{
		title: "Mentorship",
		detail: "Teaching standards, architecture, review habits, data-oriented design, and technical communication.",
		items: [
			{
				title: "Asylum Life",
				detail: "Styleguides, architecture principles, QA expectations.",
				projectId: "asylum-life",
			},
			{
				title: "Eclipsis",
				detail: "Data-oriented design, analytics, Rojo adaptation, team education.",
				projectId: "eclipsis",
			},
			{
				title: "Squash",
				detail: "Public docs explaining serialization and Roblox networking tradeoffs.",
				projectId: "squash",
			},
		],
	},
]);


/** @type {HTMLElement | null} */
const app = document.getElementById("app");

if (!app) {
	throw new Error("Missing #app root element.");
}

/**
 * Escapes text before injecting it into HTML templates.
 *
 * @param {unknown} value - Value to render as safe text.
 * @returns {string} HTML-escaped text.
 */
function escapeHtml(value) {
	return String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}


/** @type {ReadonlySet<string>} */
const luauKeywords = new Set([
	"and",
	"break",
	"continue",
	"do",
	"else",
	"elseif",
	"end",
	"export",
	"false",
	"for",
	"function",
	"if",
	"in",
	"local",
	"nil",
	"not",
	"or",
	"repeat",
	"return",
	"then",
	"true",
	"type",
	"typeof",
	"until",
	"while",
]);

/** @type {ReadonlySet<string>} */
const luauBuiltins = new Set([
	"assert",
	"bit32",
	"buffer",
	"CFrame",
	"Color3",
	"Enum",
	"game",
	"Instance",
	"ipairs",
	"math",
	"next",
	"pairs",
	"pcall",
	"Players",
	"print",
	"script",
	"self",
	"string",
	"table",
	"task",
	"tonumber",
	"tostring",
	"type",
	"typeof",
	"utf8",
	"Vector2",
	"Vector3",
	"warn",
	"workspace",
	"xpcall",
]);

/**
 * Token matcher for compact Luau syntax highlighting.
 *
 * This intentionally favors safe, readable portfolio snippets over a complete parser.
 * It recognizes common Luau comments, strings, numbers, identifiers, and operators.
 *
 * @type {RegExp}
 */
const luauTokenPattern =
	/--[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|[A-Za-z_][A-Za-z0-9_]*|::|->|==|~=|<=|>=|\+=|-=|\*=|\/=|\/\/|%=|\.\.\.?|[{}()[\],.;:+\-*/%^#=<>]/g;

/**
 * Classifies a single Luau token for syntax highlighting.
 *
 * @param {string} token - Raw source-code token.
 * @returns {string} CSS token class, or an empty string for plain identifiers.
 */
function luauTokenClass(token) {
	if (token.startsWith("--")) {
		return "tok-comment";
	}

	if (
		token.startsWith('"') ||
		token.startsWith("'") ||
		token.startsWith("`")
	) {
		return "tok-string";
	}

	if (/^(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)$/.test(token)) {
		return "tok-number";
	}

	if (luauKeywords.has(token)) {
		return "tok-keyword";
	}

	if (luauBuiltins.has(token)) {
		return "tok-builtin";
	}

	if (/^[A-Z][A-Za-z0-9_]*$/.test(token)) {
		return "tok-type";
	}

	if (/^(?:::|->|==|~=|<=|>=|\+=|-=|\*=|\/=|\/\/|%=|\.\.\.?|[{}()[\],.;:+\-*/%^#=<>])$/.test(token)) {
		return "tok-operator";
	}

	return "";
}

/**
 * Syntax-highlights one Luau line while still escaping all user-visible source text.
 *
 * @param {string} line - Raw source-code line.
 * @returns {string} Highlighted HTML for the line.
 */
function highlightLuauLine(line) {
	let html = "";
	let previousIndex = 0;

	for (const match of line.matchAll(luauTokenPattern)) {
		const token = match[0];
		const index = match.index ?? 0;

		html += escapeHtml(line.slice(previousIndex, index));

		const className = luauTokenClass(token);
		html += className
			? `<span class="${className}">${escapeHtml(token)}</span>`
			: escapeHtml(token);

		previousIndex = index + token.length;
	}

	html += escapeHtml(line.slice(previousIndex));
	return html || " ";
}

/**
 * Syntax-highlights a code line when the language is supported.
 *
 * @param {string} line - Raw source-code line.
 * @param {string} language - Media language label.
 * @returns {string} Highlighted HTML for supported languages, otherwise escaped text.
 */
function highlightCodeLine(line, language) {
	const normalized = language.toLowerCase();

	if (normalized === "luau" || normalized === "lua") {
		return highlightLuauLine(line);
	}

	return escapeHtml(line) || " ";
}



/**
 * Builds the hash route for a project id.
 *
 * @param {string} id - Project route id.
 * @returns {string} Hash route path.
 */
function pathFor(id) {
	return `#/${id}`;
}

/**
 * Renders the project image or a text fallback when no asset exists.
 *
 * @param {Project} project - Project to render.
 * @param {string} [className] - Extra class applied to the media element.
 * @returns {string} HTML string for the project visual.
 */
function projectImage(project, className = "") {
	if (project.asset) {
		return `<img class="${className}" src="${project.asset}" alt="${escapeHtml(project.title)} project image" loading="lazy" />`;
	}

	return `<div class="project-fallback ${className}" aria-hidden="true">${escapeHtml(
		project.title
			.split(" ")
			.map(word => word[0])
			.join(""),
	)}</div>`;
}

/**
 * Renders standard internal/external project action links.
 *
 * @param {Project} project - Project to link.
 * @returns {string} HTML string for action links.
 */
function actionLinks(project) {
	const internal = `<a class="action primary" href="${pathFor(project.id)}">Read proof</a>`;
	const external =
		project.link && !project.link.startsWith("#/")
			? `<a class="action secondary" href="${project.link}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.linkLabel)}</a>`
			: "";
	return `<div class="actions">${internal}${external}</div>`;
}

/**
 * Renders a project stat grid.
 *
 * @param {Project} project - Project whose stats should be rendered.
 * @returns {string} HTML string for the stat grid.
 */
function statGrid(project) {
	return `<div class="stat-grid">${project.stats
		.map(
			stat => `
		<div class="stat-card">
			<strong>${escapeHtml(stat.value)}</strong>
			<span>${escapeHtml(stat.label)}</span>
		</div>
	`,
		)
		.join("")}</div>`;
}

/**
 * Renders proof-category pills for a project.
 *
 * @param {Project} project - Project whose proof tags should be rendered.
 * @returns {string} HTML string for the proof pills.
 */
function proofPills(project) {
	return `<div class="proof-pills">${project.proof.map(pill => `<span>${escapeHtml(pill)}</span>`).join("")}</div>`;
}

/**
 * Creates an inline CSS variable for a project card background image.
 *
 * @param {string} id - Project id.
 * @returns {string} Inline style attribute or an empty string.
 */
function projectBackgroundStyle(id) {
	const project = projects[id];
	if (!project || !project.asset) {
		return "";
	}

	return ` style="--item-bg: url('${escapeHtml(project.asset)}')"`;
}

/**
 * Renders a case-study external link when a project has a public URL.
 *
 * @param {Project} project - Project to link externally.
 * @returns {string} HTML string for the external link.
 */
function externalLink(project) {
	if (!project.link || project.link.startsWith("#/")) {
		return "";
	}

	return `<a class="external-text-link" href="${project.link}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.linkLabel)}</a>`;
}

/**
 * Returns project sections in display order. Eclipsis keeps Pipe Networks first.
 *
 * @param {Project} project - Project whose sections should be ordered.
 * @returns {ReadonlyArray<ProjectSection>} Ordered project sections.
 */
function sectionsFor(project) {
	if (project.id !== "eclipsis") {
		return project.sections;
	}

	const pipeNetworks = project.sections.find(
		section => section.title === "Pipe Networks",
	);
	const rest = project.sections.filter(
		section => section.title !== "Pipe Networks",
	);
	return pipeNetworks ? [pipeNetworks, ...rest] : project.sections;
}


/** @type {Map<string, ActiveMediaRecord>} */
const activeMedia = new Map();


/**
 * Tests whether a media slot has anything worth opening in a modal.
 *
 * @param {MediaSlot | null | undefined} slot - Optional media slot.
 * @returns {boolean} True when modal content exists.
 */
function hasModalContent(slot) {
	return Boolean(
		slot &&
		(slot.src ||
			slot.youtubeId ||
			slot.embedHtml ||
			slot.code ||
			slot.description ||
			slot.context ||
			slot.decision ||
			slot.result),
	);
}

/**
 * Returns the media slot attached directly to an evidence card.
 *
 * @param {EvidenceCard} group - Evidence card data.
 * @returns {MediaSlot | null} Attached media slot, or null for text-only cards.
 */
function mediaForEvidence(group) {
	const slot = group.media || null;
	return hasModalContent(slot) ? slot : null;
}

/**
 * Builds an inline CSS variable for blurred evidence-card media backgrounds.
 *
 * @param {Project} project - Parent project used for fallback imagery.
 * @param {MediaSlot} slot - Attached media slot.
 * @returns {string} Inline style attribute or an empty string.
 */
function mediaBackgroundStyle(project, slot) {
	const image =
		slot && (slot.thumbnail || (slot.kind !== "video" ? slot.src : slot.src))
			? slot.thumbnail || slot.src
			: project.asset;
	return image ? ` style="--media-bg: url('${escapeHtml(image)}')"` : "";
}

/**
 * Renders a muted looping video layer for video-backed evidence cards.
 *
 * @param {MediaSlot} slot - Attached media slot.
 * @returns {string} Background video HTML, or an empty string for non-video media.
 */
function evidenceBackgroundVideo(slot) {
	if (!slot || slot.kind !== "video" || !slot.src) {
		return "";
	}

	return `<video class="evidence-media-bg-video" src="${escapeHtml(slot.src)}" autoplay muted loop playsinline preload="metadata" aria-hidden="true" tabindex="-1"></video>`;
}

/**
 * Formats the media kind label shown on attached-media evidence cards.
 *
 * @param {MediaSlot} slot - Attached media slot.
 * @returns {string} Uppercase media kind.
 */
function mediaKindLabel(slot) {
	return String(slot && slot.kind ? slot.kind : "media").toUpperCase();
}

/**
 * Stores modal data for a rendered media evidence card and returns its runtime id.
 *
 * @param {Project} project - Parent project.
 * @param {ProjectSection} section - Parent section.
 * @param {string} groupTitle - Evidence card title.
 * @param {string} groupText - Evidence card text.
 * @param {MediaSlot} slot - Attached media slot.
 * @param {number} sectionIndex - Section index used for stable runtime ids.
 * @param {number} groupIndex - Evidence-card index used for stable runtime ids.
 * @returns {string} Runtime media id.
 */
function registerPanelMedia(
	project,
	section,
	groupTitle,
	groupText,
	slot,
	sectionIndex,
	groupIndex,
) {
	const id = `media-${project.id}-${sectionIndex}-${groupIndex}`;
	activeMedia.set(id, {
		id,
		projectTitle: project.title,
		sectionTitle: section.title,
		groupTitle,
		groupText,
		kind: slot.kind || "media",
		label: slot.label || "Media",
		src: slot.src || "",
		thumbnail: slot.thumbnail || "",
		youtubeId: slot.youtubeId || "",
		embedHtml: slot.embedHtml || "",
		fallbackSrc: project.asset || "",
		language: slot.language || (slot.kind === "code" ? "luau" : ""),
		code: slot.code || "",
		description: slot.description || "",
		context: slot.context || "",
		decision: slot.decision || "",
		result: slot.result || "",
	});
	return id;
}

/**
 * Renders a single case-study evidence card, including attached modal media when present.
 *
 * @param {Project} project - Parent project.
 * @param {ProjectSection} section - Parent section.
 * @param {EvidenceCard} group - Evidence card data.
 * @param {number} sectionIndex - Section index.
 * @param {number} groupIndex - Evidence-card index.
 * @returns {string} HTML string for the evidence card.
 */
function renderEvidenceCard(project, section, group, sectionIndex, groupIndex) {
	const { title, text } = group;
	const slot = mediaForEvidence(group);

	if (!slot) {
		return `
			<div class="evidence-card">
				<h3>${escapeHtml(title)}</h3>
				<p>${escapeHtml(text)}</p>
			</div>
		`;
	}

	const mediaId = registerPanelMedia(
		project,
		section,
		title,
		text,
		slot,
		sectionIndex,
		groupIndex,
	);
	const mediaLabel = slot.label || title;
	return `
		<div class="evidence-card has-media"${mediaBackgroundStyle(project, slot)}>
			${evidenceBackgroundVideo(slot)}
			<button class="evidence-media-button" type="button" data-media-id="${escapeHtml(mediaId)}" aria-label="Open ${escapeHtml(mediaLabel)} media notes">
				<span class="media-corner-icon" aria-hidden="true"></span>
			</button>
			<div class="evidence-content">
				<span class="attached-media-kind">${escapeHtml(mediaKindLabel(slot))}</span>
				<h3>${escapeHtml(title)}</h3>
				<p>${escapeHtml(text)}</p>
			</div>
		</div>
	`;
}

/**
 * Renders the landing route.
 *
 * @returns {void}
 */
function renderLanding() {
	activeMedia.clear();
	const highlights = highlightIds.map(id => projects[id]);

	app.innerHTML = `
		<section class="landing route-view">
			<section class="hero" aria-labelledby="hero-title">
			<div class="hero-copy">
				<p class="eyebrow">Roblox · gameplay · systems · tooling · production</p>
				<h1 id="hero-title">Senior Gameplay & Systems Engineer</h1>
				<p></p>
				<p class="hero-lede">Ship intuitive player-facing features. Lead teams and modernize legacy systems. Ready to take <i><b>you</b></i> to the next level.</p>
				<p class="hero-lede"></p>
			</div>
			<aside class="hero-panel" aria-label="Role fit summary">
				<div class="role-line"><span>01</span><strong>Technical Communication</strong></div>
				<div class="role-line"><span>02</span><strong>Mentorship</strong></div>
				<div class="role-line"><span>03</span><strong>Instinctive Security</strong></div>
				<div class="role-line"><span>04</span><strong>Game Feel & UX</strong></div>
				<div class="role-line"><span>05</span><strong>Production Coordination</strong></div>
				<div class="role-line"><span>07</span><strong>Performance Programming</strong></div>
				<div class="role-line"><span>08</span><strong>Legacy Codebases</strong></div>
			</aside>
		</section>

			<section class="section-block" aria-labelledby="highlights-title">
				<div class="section-heading">
					<h2 id="highlights-title">Project Highlights</h2>
				</div>
				<div class="highlight-grid">
					${highlights
			.map(
				(project, index) => `
						<article class="highlight-card ${index === 0 ? "featured" : ""}">
							<a class="highlight-media" href="${pathFor(project.id)}" aria-label="Read ${escapeHtml(project.title)} case study">
								${projectImage(project)}
							</a>
							<div class="highlight-body">
								<div>
									<p class="project-role">${escapeHtml(project.role)}</p>
									<h3><a href="${pathFor(project.id)}">${escapeHtml(project.title)}</a></h3>
									<p>${escapeHtml(project.pitch)}</p>
								</div>
								${proofPills(project)}
								${statGrid(project)}
							</div>
						</article>
					`,
			)
			.join("")}
				</div>
			</section>

			<section class="section-block proof-index" aria-labelledby="proof-title">
				<div class="proof-map">
					${proofMap
			.map(
				bucket => `
						<section class="proof-bucket" aria-labelledby="bucket-${bucket.title.toLowerCase()}">
							<div class="bucket-head">
								<h3 id="bucket-${bucket.title.toLowerCase()}">${escapeHtml(bucket.title)}</h3>
								<p>${escapeHtml(bucket.detail)}</p>
							</div>
							<div class="bucket-items">
								${bucket.items
						.map(
							item => `
									<a class="bucket-item" href="${pathFor(item.projectId)}"${projectBackgroundStyle(item.projectId)}>
										<strong>${escapeHtml(item.title)}</strong>
										<span>${escapeHtml(item.detail)}</span>
									</a>
								`,
						)
						.join("")}
							</div>
						</section>
					`,
			)
			.join("")}
				</div>
			</section>
		</section>
	`;
}

/**
 * Renders a project case-study route or falls back to the landing page.
 *
 * @param {string} id - Project id from the hash route.
 * @returns {void}
 */
function renderProject(id) {
	activeMedia.clear();
	const project = projects[id];
	if (!project) {
		renderLanding();
		return;
	}

	const sections = sectionsFor(project);

	app.innerHTML = `
		<article class="case-page route-view">
			<a class="back-link" href="#/">← Landing</a>

			<header class="case-hero">
				<div class="case-hero-copy">
					<p class="eyebrow">Case study</p>
					<h1>${escapeHtml(project.title)}</h1>
					<p class="case-role">${escapeHtml(project.role)}</p>
					<p class="case-pitch">${escapeHtml(project.pitch)}</p>
					${proofPills(project)}
					${externalLink(project)}
				</div>
				<a class="case-media" href="${project.link && !project.link.startsWith("#/") ? project.link : pathFor(project.id)}" ${project.link && !project.link.startsWith("#/") ? 'target="_blank" rel="noopener noreferrer"' : ""} aria-label="Open ${escapeHtml(project.title)} external link">
					${projectImage(project)}
				</a>
			</header>

			${statGrid(project)}

			<nav class="case-jump" aria-label="Case study sections">
				${sections.map((section, index) => `<a href="${pathFor(project.id)}" data-jump="section-${index}">${escapeHtml(section.title)}</a>`).join("")}
			</nav>

			<div class="case-sections">
				${sections
			.map(
				(section, index) => `
					<section class="case-section" id="section-${index}">
						<div class="case-section-heading">
							<p class="eyebrow">${String(index + 1).padStart(2, "0")}</p>
							<h2>${escapeHtml(section.title)}</h2>
							<p>${escapeHtml(section.intro)}</p>
						</div>
						<div class="case-section-body">
							<div class="evidence-grid">
								${section.groups.map((group, groupIndex) => renderEvidenceCard(project, section, group, index, groupIndex)).join("")}
							</div>
						</div>
					</section>
				`,
			)
			.join("")}
			</div>

		</article>
	`;
}

/**
 * Produces a small default code excerpt for code modals without explicit code.
 *
 * @param {ActiveMediaRecord} record - Modal media record.
 * @returns {string} Default code sample.
 */
function defaultCodeFor(record) {
	const label = record.label || "Code excerpt";
	const safeLabel = label.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
	return [
		"-- " + label,
		"-- Add the compact excerpt that best proves this claim.",
		"-- Keep context in the modal text so the code can stay focused.",
		"",
		"export type Evidence = {",
		"\tclaim: string,",
		"\tdecision: string,",
		"\tresult: string,",
		"}",
		"",
		"return {",
		`\tclaim = "${safeLabel}",`,
		'\tdecision = "show the smallest code path that proves the system boundary",',
		'\tresult = "make the engineering judgment reviewable without a full codebase",',
		"}",
	].join("\n");
}

/**
 * Renders a line-numbered code block for code media.
 *
 * @param {ActiveMediaRecord} record - Modal media record.
 * @returns {string} HTML string for the code block, or an empty string.
 */
function modalCodeEmbed(record) {
	if (record.kind !== "code" && !record.code) {
		return "";
	}

	const language = record.language || "text";
	const code = record.code || defaultCodeFor(record);
	const lines = code.split("\n");

	return `
		<figure class="code-embed">
			<figcaption>
				<span>code excerpt</span>
				<strong>${escapeHtml(record.label)}</strong>
				<em>${escapeHtml(language)}</em>
			</figcaption>
			<pre aria-label="${escapeHtml(record.label)} code excerpt"><code class="language-${escapeHtml(language.toLowerCase())}">${lines.map((line, index) => `<span class="code-line"><span class="line-number">${String(index + 1).padStart(2, "0")}</span><span class="line-text">${highlightCodeLine(line, language)}</span></span>`).join("")}</code></pre>
		</figure>
	`;
}

/**
 * Renders the primary media element inside a modal.
 *
 * @param {ActiveMediaRecord} record - Modal media record.
 * @returns {string} HTML string for image, video, YouTube, or custom embed content.
 */
function modalMediaFigure(record) {
	if (record.embedHtml) {
		return `<div class="modal-media embed">${record.embedHtml}</div>`;
	}

	if (record.youtubeId) {
		return `
			<div class="modal-media video youtube-embed">
				<iframe src="https://www.youtube-nocookie.com/embed/${escapeHtml(record.youtubeId)}" title="${escapeHtml(record.label)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
		`;
	}

	if (record.src && record.kind === "video") {
		return `
			<figure class="modal-media filled video">
				<video src="${escapeHtml(record.src)}" controls playsinline preload="metadata" loop></video>
				<figcaption>${escapeHtml(record.label)}</figcaption>
			</figure>
		`;
	}

	if (record.src) {
		return `
			<figure class="modal-media filled ${escapeHtml(record.kind)}">
				<img src="${escapeHtml(record.src)}" alt="${escapeHtml(record.label)}" />
				<figcaption>${escapeHtml(record.label)}</figcaption>
			</figure>
		`;
	}

	return "";
}

/**
 * Renders context, decision, and result writing for a modal.
 *
 * @param {ActiveMediaRecord} record - Modal media record.
 * @returns {string} HTML string for modal copy.
 */
function modalDescription(record) {
	const sections = [
		["Context", record.context],
		["Decision", record.decision],
		["Result", record.result],
	].filter(([, value]) => value);

	if (sections.length === 0 && !record.description) {
		return "";
	}

	return `
		<div class="modal-copy">
			${record.description ? `<p>${escapeHtml(record.description)}</p>` : ""}
			${sections
			.map(
				([title, text]) => `
				<section>
					<h3>${escapeHtml(title)}</h3>
					<p>${escapeHtml(text)}</p>
				</section>
			`,
			)
			.join("")}
		</div>
	`;
}

/**
 * Opens the modal for a registered media id.
 *
 * @param {string | null} mediaId - Runtime media id from a card button.
 * @returns {void}
 */
function showMediaModal(mediaId) {
	const record = activeMedia.get(mediaId);
	if (!record) {
		return;
	}

	closeMediaModal();
	document.body.classList.add("modal-open");
	document.body.insertAdjacentHTML(
		"beforeend",
		`
		<div class="media-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal-overlay>
			<section class="media-modal-panel">
				<button class="modal-close" type="button" data-modal-close aria-label="Close media panel">×</button>
				<div class="modal-scroll">
					<p class="modal-kicker">${escapeHtml(record.projectTitle)} · ${escapeHtml(record.sectionTitle)}</p>
					<h2 id="modal-title">${escapeHtml(record.groupTitle)}</h2>
					<p class="modal-lede">${escapeHtml(record.groupText)}</p>
					${modalMediaFigure(record)}
					${modalCodeEmbed(record)}
					${modalDescription(record)}
				</div>
			</section>
		</div>
	`,
	);

	const closeButton = document.querySelector("[data-modal-close]");
	if (closeButton) {
		closeButton.focus({ preventScroll: true });
	}
}

/**
 * Closes any active media modal.
 *
 * @returns {void}
 */
function closeMediaModal() {
	const modal = document.querySelector("[data-modal-overlay]");
	if (modal) {
		modal.remove();
	}
	document.body.classList.remove("modal-open");
}

/**
 * Reads the current hash route.
 *
 * @returns {string} Current route id or "/".
 */
function getRoute() {
	const hash = window.location.hash || "#/";
	const clean = hash.replace(/^#\/?/, "").replace(/^\//, "");
	return clean || "/";
}

/**
 * Renders the current route and resets scroll.
 *
 * @returns {void}
 */
function route() {
	const current = getRoute();
	if (current === "/" || current === "") {
		renderLanding();
	} else {
		renderProject(current);
	}
	window.scrollTo({ top: 0, behavior: "auto" });
	app.focus({ preventScroll: true });
}

/**
 * Copies text to the clipboard with a textarea fallback for non-secure contexts.
 *
 * @param {string} text - Text to copy.
 * @returns {Promise<void>} Promise resolving after the copy attempt.
 */
function copyText(text) {
	if (navigator.clipboard && window.isSecureContext) {
		return navigator.clipboard.writeText(text);
	}

	const textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.setAttribute("readonly", "");
	textarea.style.position = "fixed";
	textarea.style.left = "-9999px";
	document.body.appendChild(textarea);
	textarea.select();
	try {
		document.execCommand("copy");
		return Promise.resolve();
	} finally {
		textarea.remove();
	}
}

/**
 * Handles modal, email-copy, and in-page jump interactions from delegated clicks.
 */
document.addEventListener("click", event => {
	const mediaButton = event.target.closest("[data-media-id]");
	if (mediaButton) {
		event.preventDefault();
		showMediaModal(mediaButton.getAttribute("data-media-id"));
		return;
	}

	if (event.target.closest("[data-modal-close]")) {
		event.preventDefault();
		closeMediaModal();
		return;
	}

	const overlay = event.target.closest("[data-modal-overlay]");
	if (overlay && event.target === overlay) {
		closeMediaModal();
		return;
	}

	const emailLink = event.target.closest("[data-copy-email]");
	if (emailLink) {
		event.preventDefault();
		const email = emailLink.getAttribute("data-copy-email");
		const label = emailLink.querySelector("span");
		const originalText = label ? label.textContent : "";
		if (email) {
			copyText(email)
				.then(() => {
					if (label) {
						label.textContent = "Email Copied!";
						emailLink.classList.add("email-copied");
						window.setTimeout(() => {
							label.textContent = originalText;
							emailLink.classList.remove("email-copied");
						}, 1400);
					}
				})
				.catch(() => {
					window.location.href = emailLink.href;
				});
		}
		return;
	}

	const target = event.target.closest("[data-jump]");
	if (!target) {
		return;
	}

	event.preventDefault();
	const id = target.getAttribute("data-jump");
	const element = id ? document.getElementById(id) : null;
	if (element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	}
});

/**
 * Allows Escape to dismiss the active media modal.
 */
document.addEventListener("keydown", event => {
	if (event.key === "Escape") {
		closeMediaModal();
	}
});

/**
 * Re-render the application whenever the hash route changes.
 */
window.addEventListener("hashchange", route);

/**
 * Render the initial route after the document is ready.
 *
 * Five Server can hot-reload the script without changing the hash, so relying only
 * on `hashchange` leaves the root app blank until the user navigates manually.
 */
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", route, { once: true });
} else {
	route();
}
