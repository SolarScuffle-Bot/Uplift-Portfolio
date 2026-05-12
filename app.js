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
	reflector: "https://devforum.roblox.com/t/reflector-plugin-to-mirror-just-about-anything-in-studio/4617810",
	depths: "https://www.roblox.com/games/119768530425232/Depths-of-Industry"
});

const projects = Object.freeze({
	"asylum-life": {
		id: "asylum-life",
		title: "Asylum Life",
		role: "Gameplay Engineer & Acting Operations Lead",
		asset: "assets/AsylumLife.webp",
		link: links.asylum,
		linkLabel: "Open Roblox experience",
		pitch: "Live-service Roblox production work across gameplay features, GUI-heavy UX, QA, debugging, operations, and mentorship.",
		proof: ["Feature ownership", "Cross-disciplinary coordination", "Live debugging", "QA process", "Mentorship"],
		stats: [
			["Top 30", "earning Roblox experience"],
			["Weekly", "release pressure"],
			["Live", "servers and player data"],
			["Multi-team", "production coordination"]
		],
		sections: [
			{
				title: "Collaboration",
				intro: "The value was not just writing code. The value was turning ambiguous production needs into shippable, testable updates.",
				groups: [
					["Twin Atlas", "Partnered with Reverie Studios on design advice and QA management."],
					["Executives", "Worked directly with executives and management to define unambiguous updates."],
					["Art & Modelling", "Helped make producer-facing ideas concrete enough for art, modelling, and implementation."],
					["GUI Team", "Implemented cosmetics, settings, minigames, and UI-facing flows with GUI contributors."]
				]
			},
			{
				title: "Minigames",
				intro: "Short player actions needed to read clearly, respond immediately, and avoid feeling like static menu chores.",
				groups: [
					["Washing Clothes", "GUI state, timing, readable feedback, and completion flow."],
					["Painting", "Short-loop interaction design with visual and audio response."],
					["Plunging Toilets", "Simple physical premise translated into readable GUI interaction."],
					["Tightening Pipes", "Timing, feedback, and clear success/failure communication."]
				]
			},
			{
				title: "Emotes",
				intro: "Player expression feature work focused on recognisable flow, input support, and satisfying feedback.",
				groups: [
					["Design Reference", "Studied The Strongest Battlegrounds and designed the GUI direction myself."],
					["Cross-Platform UX", "Planned interaction flow around multiple input modes instead of desktop only."],
					["Satisfying Use", "Prioritized fast recognition, selection clarity, and player-facing polish."]
				]
			},
			{
				title: "Settings & Cosmetics",
				intro: "Responsive UI work with immediate client feedback and server-owned truth.",
				groups: [
					["Settings", "Responsive toggles, immediate feedback, server-authoritative persistence."],
					["Cosmetics", "Cross-platform editor work, improved original design, fast local feel, server-owned results."],
					["State Flow", "Reduced confusion by making UI state and server results easier to understand."]
				]
			},
			{
				title: "Doors & Elevators",
				intro: "Production fixes where the important work was scoping, modernizing, and stabilizing fragile legacy systems.",
				groups: [
					["Scoped", "Separated symptoms from causes before expanding the work."],
					["Modernized", "Cleaned up legacy behavior without turning the fix into a rewrite."],
					["Optimized", "Removed needless repeated work where it affected live behavior."]
				]
			},
			{
				title: "Operations Lead",
				intro: "Temporary leadership work while still carrying engineering responsibility.",
				groups: [
					["Led Teams", "Programmers, QA, and contractors."],
					["Delegated Updates", "Programmers, GUI artists, SFX artists, and art/modelling management."],
					["Release Hygiene", "Clearer handoffs, checklists, and testing expectations before shipping."]
				]
			},
			{
				title: "Mentorship",
				intro: "Raised team consistency by making standards explicit instead of relying on hidden expectations.",
				groups: [
					["Styleguides", "Shared coding and review expectations."],
					["Architecture Principles", "Explained why certain structures reduce future risk."],
					["Industry Practices", "Introduced production habits around QA, ownership, and review."],
					["Executive Mindsets", "Helped connect technical decisions to production consequences."]
				]
			},
			{
				title: "Exploit Security",
				intro: "Security work covered both adversarial clients and engine-level failure modes.",
				groups: [
					["Engine Bugs", "Investigated corrupted animations that could crash games."],
					["Network Security", "Addressed abuse of networked remotes from legacy implementations."],
					["Authority Model", "Separated responsive UX from trusted state changes."]
				]
			}
		],
		mediaSlots: ["Minigame video", "Emote selection video", "Cosmetics flow video", "Settings feedback video", "Sanitized QA checklist"]
	},
	"eclipsis": {
		id: "eclipsis",
		title: "Eclipsis",
		role: "Systems Engineer & Game Designer",
		asset: "assets/Eclipsis.webp",
		link: links.eclipsis,
		linkLabel: "Open Roblox experience",
		pitch: "Pipe-network graph modernization, terrain/rendering optimization, game design, team formation, and education.",
		proof: ["Performance", "Legacy systems", "Game design", "Delegation", "Security"],
		stats: [
			["1 month", "pipe network push"],
			["Graph", "network representation"],
			["~24s → ~9s", "terrain load time"],
			["~3000 → ~900", "draw calls"]
		],
		sections: [
			{
				title: "Terrain Generation",
				intro: "A focused optimization pass that changed asset layout, rendering cost, and migration expectations together.",
				groups: [
					["Reduced Part Count", "Collapsed avoidable instance cost and reduced draw pressure."],
					["Shared Textures", "Moved repeated visual data toward reusable assets."],
					["Reformatted Assets", "Changed the data format so the renderer had less work to do."],
					["Restructured Pipeline", "Updated migrations so old data could survive the new representation."],
					["Sustained Push", "Worked for three weeks straight to get the change through."]
				]
			},
			{
				title: "Pipe Networks",
				intro: "The important shift was moving from local physical parts doing too much work to explicit graph and aggregate state.",
				groups: [
					["Hierarchical Graphs", "Pioneered graph representations that separated physical layout from logical network behavior."],
					["Existential Processing", "Processed the things that existed and changed instead of broad boolean sweeps."],
					["Centralized Replication", "Reduced redundant network state replication by centralizing the source of truth."],
					["Sustained Push", "Worked for a month straight on the network modernization."]
				]
			},
			{
				title: "Education",
				intro: "Technical leadership meant teaching the project how to move forward, not just replacing code.",
				groups: [
					["Data-Oriented Design", "Taught data layout and processing choices around actual game constraints."],
					["Folder-Per-Feature", "Introduced architecture habits that make systems easier to locate and modify."],
					["Analytics", "Explained experience analytics and player-behavior reasoning."],
					["Rojo Adaptation", "Helped adapt project workflow toward external tooling."]
				]
			},
			{
				title: "Game Design",
				intro: "Moved balance philosophy away from isolated counters and toward a broader board-state model.",
				groups: [
					["Structures", "Designed and planned new update content."],
					["Balance Changes", "Replaced tanks, added new wellpump mechanics, and simplified economy pressure."],
					["Removed Submersibles", "Removed an infinite-economy pattern that encouraged turtling."],
					["Spire Batteries", "Replaced condensers that encouraged skybasing and infinite economy loops."],
					["Crystal Atomizers", "Replaced resonators with simpler mechanics and better UX."],
					["Roadmap", "Planned updates using community feedback and data-driven priorities."],
					["Mindset Shift", "Moved from rock-paper-scissors thinking toward chess-like positional design."]
				]
			},
			{
				title: "Team Formation & Delegation",
				intro: "Created specialized groups so work could continue without every responsibility collapsing onto one person.",
				groups: [
					["Balancing Team", "Separated balance work into a focused team."],
					["Wikipedia Team", "Delegated knowledge-base maintenance."],
					["Tournament Team", "Hosted for years, modernized with rules, then delegated to staff."],
					["Bug Hunters", "Created a path for structured issue discovery."]
				]
			},
			{
				title: "Exploit Security",
				intro: "Balanced client-eager feel with server-authoritative truth.",
				groups: [
					["Client Eagerness", "Kept moment-to-moment feedback responsive."],
					["Server Authority", "Kept final results controlled by the server."],
					["Typed Remotes", "Used strictly typed, runtime-safe remote patterns."]
				]
			}
		],
		mediaSlots: ["Before/after terrain screenshots", "Profiler screenshots", "Pipe network diagram", "Balance roadmap excerpt"]
	},
	"squash": {
		id: "squash",
		title: "Squash",
		role: "Creator & Maintainer",
		asset: "assets/Squash.webp",
		link: links.squash,
		linkLabel: "Open documentation",
		pitch: "A public Luau serialization library focused on comprehensive Roblox type support, compact layouts, and instructive documentation.",
		proof: ["Open source", "Luau", "Serialization", "Documentation", "Education"],
		stats: [["Every", "serializable Roblox type"], ["Declarative", "schema API"], ["Lazy", "runtime code generation"], ["Public", "documentation"]],
		sections: [
			{
				title: "Comprehensiveness",
				intro: "The library is meant to cover the practical Roblox data domain instead of a narrow demo subset.",
				groups: [["Roblox Types", "Covers every serializable Roblox type."], ["Schema Composition", "Allows complex schemas to be built from smaller pieces."]]
			},
			{
				title: "Innovative API",
				intro: "The API is declarative and functional, so users describe layouts rather than manually stepping through buffers.",
				groups: [["Declarative Schemas", "Compose infinitely complex layouts from small reusable schema functions."], ["Practical Ergonomics", "Expose data compression without forcing every user to become a bit-level specialist."]]
			},
			{
				title: "Optimizations",
				intro: "The API allows specific layouts to be optimized based on what the schema says.",
				groups: [
					["Packed Booleans", "Bitpack booleans and optionals in arrays, tuples, and records."],
					["Arithmetic Over bit32", "Use arithmetic where Luau constraints make it preferable."],
					["Interpreter-Aware", "Use inlining and constant folding patterns when they help."],
					["Code Generation", "Generate runtime code lazily for layout-specific speed."],
					["Quaternion Compression", "Compress rotations for network and storage-heavy data."]
				]
			},
			{
				title: "Educational Resource",
				intro: "The docs are meant to teach network and serialization practice, not just list methods.",
				groups: [["RakNet Events", "Reverse-engineered RemoteEvent and RemoteFunction RakNet event layouts."], ["Best Practices", "Documented conclusions and practical network guidance."], ["Community Education", "Explained SerDes and compression strategies for Roblox developers."]]
			},
			{
				title: "Documentation",
				intro: "Documentation went through many iterations to make compression concepts usable.",
				groups: [["Intuitive Docs", "Organized around examples, conclusions, and implementation tradeoffs."], ["Compression Strategy", "Teaches when compact layouts are worth their complexity."]]
			}
		],
		mediaSlots: ["API examples", "Benchmark table", "RemoteEvent layout diagram"]
	},
	"rocket-spleef": {
		id: "rocket-spleef",
		title: "Rocket Spleef",
		role: "Creator / Lead Developer",
		asset: "assets/RocketSpleef.webp",
		link: links.rocket,
		linkLabel: "Open Roblox experience",
		pitch: "Original Roblox party game built around responsive rocket feel, server-authoritative outcomes, progression, events, and monetization loops.",
		proof: ["Game feel", "Server authority", "Original game", "Progression", "Monetization"],
		stats: [["0-latency", "perceived launcher response"], ["Server", "tiles and events"], ["5m → 12d", "crate opening range"], ["Party", "round design target"]],
		sections: [
			{
				title: "Rocket Launchers",
				intro: "The main mechanic had to feel instant without letting the client own the truth.",
				groups: [["Zero-Latency Feel", "Researched and designed client-eager, server-authoritative projectile behavior."], ["Cooldown UX", "Improved feedback so players understand when they can shoot."], ["Knockback", "Stabilized explosions to make rocket jumping intentional and rewarding."]]
			},
			{
				title: "Server Authority",
				intro: "The server controls outcomes while the client gets fast feedback.",
				groups: [["Client-Eager Rockets", "Rockets start immediately and switch to the server as soon as possible."], ["Server Tiles", "Tiles and round events are server-owned."], ["Secure Products", "Monetization and product handling stay server-secure."]]
			},
			{
				title: "Crates",
				intro: "Crates create short-term and mid-term progression without making losing feel punishing.",
				groups: [["Earned Flow", "Earned after a number of rounds or after a win."], ["Time Range", "Opening times encode progression from roughly 5 minutes to 12 days."], ["Content Driver", "Primary unlock path that also feeds monetization."]]
			},
			{
				title: "Events & Tools",
				intro: "Round variety should shorten rounds and create different play patterns.",
				groups: [["Events", "Different event types change round texture and add stylized VFX moments."], ["Tools", "Purchasable or crate-earned tools create new play opportunities."], ["Gameplay Variety", "Each tool or event should encourage a different decision, not just add noise."]]
			},
			{
				title: "Game Design",
				intro: "The target is a casual party game that is easy to play, hard to master, and safe to lose.",
				groups: [["Shorter Rounds", "Content should increase pressure and make rounds resolve."], ["No Fear of Losing", "Progression avoids making loss feel like wasted time."], ["Repeatable Loop", "Round, reward, crate, tool, and cosmetic planning support repeated play."]]
			},
			{
				title: "Monetization & Progression",
				intro: "Monetization is built around crates, unlocks, pedestals, cosmetics, tools, and planned crafting.",
				groups: [["Crate Purchases", "Buying and unlocking crates support the core loop."], ["Pedestals", "Additional unlock friction and collection goals."], ["Crafting", "Planned content farming and crafting support longer-term progression."]]
			}
		],
		mediaSlots: ["Launcher feel video", "Authority diagram", "Events montage", "Crate/progression flow"]
	},
	"offset-camera": {
		id: "offset-camera",
		title: "Offset Camera",
		role: "Creator & Maintainer",
		asset: "assets/OffsetCamera.webp",
		link: links.offset,
		linkLabel: "Open DevForum post",
		pitch: "Drop-in Roblox camera extension for FPS, shift-lock, and over-the-shoulder controls that preserves native camera feel.",
		proof: ["Camera", "UX", "Open source", "Documentation"],
		stats: [["Native", "camera integration"], ["Drop-in", "developer workflow"], ["Secure", "torso replication"], ["Tuned", "camera feel"]],
		sections: [
			{ title: "Native Integration", intro: "The camera uses Roblox's own camera code instead of fighting the default stack.", groups: [["Roblox Camera Code", "Builds on the native behavior players already understand."]] },
			{ title: "Drop-In Replacement", intro: "The point is that it works without forcing developers into a full camera framework.", groups: [["It Just Works", "Preserves default-camera expectations."], ["Feel Match", "Tuned to feel identical where it should, and different only where the feature requires it."]] },
			{ title: "Torso Replication", intro: "Handles torso replication securely and with minimal waste.", groups: [["Replication", "Only the necessary visual state crosses the network."], ["Security", "Avoids trusting unnecessary client state."]] },
			{ title: "Customization & Docs", intro: "Settings and documentation make it usable by other Roblox developers.", groups: [["Many Settings", "Configurable without changing core code."], ["Documentation", "Written to teach integration and edge cases."]] }
		],
		mediaSlots: ["FPS clip", "Shift-lock clip", "Over-the-shoulder clip", "Mobile/controller clip"]
	},
	"depths-of-industry": {
		id: "depths-of-industry",
		title: "Depths of Industry",
		role: "Original Game / UX Systems",
		asset: "assets/DepthsOfIndustry.webp",
		link: links.depths,
		linkLabel: "Open Roblox experience",
		pitch: "Placement-system and cross-platform UX proof around snapping, rotations, feedback, and player intuition.",
		proof: ["Placement UX", "Cross-platform", "Original game", "Sound and springs"],
		stats: [["Grid", "rectangular placement"], ["Cubic", "rotation handling"], ["Desktop", "mobile, console"], ["Springs", "feedback language"]],
		sections: [
			{ title: "Placement System", intro: "The system handles grid-based placement for rectangular structures and intrinsic cubic rotations.", groups: [["Grid Placement", "Clear placement rules for structures."], ["Cubic Rotations", "Accounts for orientation in a way players can predict."]] },
			{ title: "Cross-Platform", intro: "The interaction was tested against mobile, desktop, and console instead of treating non-mouse inputs as afterthoughts.", groups: [["Mobile", "Touch constraints considered."], ["Desktop", "Mouse/keyboard precision supported."], ["Console", "Controller flow kept in view."]] },
			{ title: "Excellent UX", intro: "Placement has to feel physical, not like dragging invisible math.", groups: [["Snapping", "Springs and sound convey snap, weight, buildup, and response."], ["Intuition", "Optimized for players understanding what will happen before committing."]] }
		],
		mediaSlots: ["Placement clip", "Cross-platform input clip", "Sound/spring feedback montage"]
	},
	"reflector": {
		id: "reflector",
		title: "Reflector",
		role: "Technical Director / Maintainer",
		asset: "assets/Reflector.webp",
		link: links.reflector,
		linkLabel: "Open DevForum post",
		pitch: "AI-assisted Studio tooling directed through precise requirements, edge-case validation, GUI UX, and data-loss safety.",
		proof: ["Tooling", "GUI UX", "Validation", "AI-assisted"],
		stats: [["Broad", "instance coverage"], ["Minimal", "plugin GUI"], ["Safety", "internal versioning"], ["Honest", "AI-assisted framing"]],
		sections: [
			{ title: "Comprehensiveness", intro: "The plugin aims to reflect the vast majority of reflectable instances while handling semantic ambiguity better than common ad hoc solutions.", groups: [["Coverage", "Covers many instance types and edge cases."], ["Semantic Ambiguity", "Separates mirror intent from orientation hacks where possible."]] },
			{ title: "GUI UX", intro: "The GUI is intentionally minimal so the tool does not slow normal Studio workflows.", groups: [["Small Surface", "Controls stay compact."], ["Workflow Fit", "The plugin should stay out of the user's way until a decision is needed."]] },
			{ title: "Safety", intro: "Internal version control protects against data loss and corrupted assets.", groups: [["Rollback", "Tooling should be reversible when it mutates user work."], ["Validation", "Unsupported cases should fail clearly instead of corrupting content."]] },
			{ title: "AI Assisted", intro: "Implementation was accelerated with AI, while algorithms, requirements, validation, and problem resolution were human-directed.", groups: [["Iteration Speed", "AI shortened implementation cycles."], ["Human Direction", "Correctness rules, math decisions, and acceptance criteria came from project direction."]] }
		],
		mediaSlots: ["Workflow clip", "Before/after reflection clip", "Edge-case storyboard", "Safety/rollback clip"]
	},
	"ocean-demo": {
		id: "ocean-demo",
		title: "Ocean Demo",
		role: "Simulation Prototype",
		asset: null,
		link: "#/ocean-demo",
		linkLabel: "Internal page",
		pitch: "Efficient Gerstner-wave simulation with server-authoritative composition for weather, buoys, and boats.",
		proof: ["Simulation", "Physics", "Server authority", "Weather"],
		stats: [["Gerstner", "wave model"], ["Composable", "weather waves"], ["Server", "authoritative state"], ["Physics", "buoys and boats"]],
		sections: [
			{ title: "Efficient Gerstner Waves", intro: "Composable server-authoritative wave parameters make weather possible without replacing the water system for every condition.", groups: [["Composition", "Multiple wave components can combine into distinct sea states."], ["Authority", "Server-owned parameters keep clients synchronized."], ["Weather", "Wave profiles can encode changing weather conditions."]] },
			{ title: "Physically-Simulated Buoys & Boats", intro: "The next proof target is objects responding to the wave field in a readable, stable way.", groups: [["Buoys", "Floating markers prove small-object response."], ["Boats", "Vehicle response proves player-facing simulation value."]] }
		],
		mediaSlots: ["Wave video", "Buoy physics clip", "Boat physics clip", "Weather-state diagram"]
	}
});

const highlightIds = Object.freeze(["asylum-life", "eclipsis", "rocket-spleef"]);

const proofMap = Object.freeze([
	{
		title: "Coordination",
		detail: "Owning ambiguous work across executives, producers, engineers, QA, artists, and community-facing priorities.",
		items: [
			["Asylum Life", "Live production, QA management, delegation, executive collaboration.", "asylum-life"],
			["Eclipsis", "Team formation, roadmap work, tournament delegation, education.", "eclipsis"]
		]
	},
	{
		title: "Technical",
		detail: "Roblox systems that need data layout, performance, server authority, documentation, or unusual engine knowledge.",
		items: [
			["Eclipsis", "Terrain, pipe networks, replication, migrations.", "eclipsis"],
			["Squash", "Serialization, compact schemas, Luau optimization.", "squash"],
			["Rocket Spleef", "Server-authoritative rockets and monetization.", "rocket-spleef"],
			["Offset Camera", "Native camera integration and torso replication.", "offset-camera"],
			["Reflector", "Studio tooling, validation, edge-case handling.", "reflector"],
			["Ocean Demo", "Gerstner waves and physics simulation.", "ocean-demo"]
		]
	},
	{
		title: "Gameplay",
		detail: "Original mechanics, balance changes, round structure, and server-safe moment-to-moment feedback.",
		items: [
			["Eclipsis", "Balance changes, economy fixes, roadmap, strategic depth.", "eclipsis"],
			["Rocket Spleef", "Rocket feel, event variety, tools, crates, progression.", "rocket-spleef"]
		]
	},
	{
		title: "UX",
		detail: "Readable feedback, input support, placement feel, camera feel, and workflow clarity.",
		items: [
			["Rocket Spleef", "Cooldown feedback, knockback feel, party-game readability.", "rocket-spleef"],
			["Depths of Industry", "Grid placement, cubic rotations, cross-platform input.", "depths-of-industry"],
			["Offset Camera", "FPS, shift-lock, and over-the-shoulder camera feel.", "offset-camera"],
			["Reflector", "Minimal plugin UI and safe workflow decisions.", "reflector"]
		]
	},
	{
		title: "Mentorship",
		detail: "Teaching standards, architecture, review habits, data-oriented design, and technical communication.",
		items: [
			["Asylum Life", "Styleguides, architecture principles, QA expectations.", "asylum-life"],
			["Eclipsis", "Data-oriented design, analytics, Rojo adaptation, team education.", "eclipsis"],
			["Squash", "Public docs explaining serialization and Roblox networking tradeoffs.", "squash"]
		]
	}
]);


const projectIntroMedia = Object.freeze({
	"asylum-life": [
		{ kind: "video", label: "30-second gameplay/production reel" },
		{ kind: "image", label: "Clickable 1:1 experience thumbnail" },
		{ kind: "doc", label: "Sanitized QA handoff example" }
	],
	"eclipsis": [
		{ kind: "diagram", label: "Pipe network graph diagram", src: "assets/PipeNetworkGraphs.webp" },
		{ kind: "image", label: "Before/after terrain screenshots" },
		{ kind: "image", label: "Profiler or draw-call evidence" }
	],
	"squash": [
		{ kind: "image", label: "API example screenshot" },
		{ kind: "diagram", label: "Schema composition diagram" },
		{ kind: "image", label: "Benchmark table" }
	],
	"rocket-spleef": [
		{ kind: "video", label: "Rocket feel gameplay clip" },
		{ kind: "diagram", label: "Client-eager/server-authoritative flow" },
		{ kind: "video", label: "Round event montage" }
	],
	"offset-camera": [
		{ kind: "video", label: "FPS camera clip" },
		{ kind: "video", label: "Shift-lock clip" },
		{ kind: "video", label: "Over-the-shoulder clip" }
	],
	"depths-of-industry": [
		{ kind: "video", label: "Placement system clip" },
		{ kind: "video", label: "Cross-platform input clip" },
		{ kind: "image", label: "Grid/rotation explanation" }
	],
	"reflector": [
		{ kind: "video", label: "Reflection workflow clip" },
		{ kind: "video", label: "Before/after reflection clip" },
		{ kind: "image", label: "Rollback/safety proof" }
	],
	"ocean-demo": [
		{ kind: "video", label: "Gerstner wave clip" },
		{ kind: "video", label: "Buoy physics clip" },
		{ kind: "diagram", label: "Weather-state wave composition" }
	]
});

const sectionMediaSlots = Object.freeze({
	"asylum-life": {
		"Collaboration": [
			{ kind: "doc", label: "Sanitized production handoff" },
			{ kind: "image", label: "Update planning board or release outline" }
		],
		"Minigames": [
			{ kind: "video", label: "Washing Clothes clip" },
			{ kind: "video", label: "Painting clip" },
			{ kind: "video", label: "Plunging/Tightening clips" }
		],
		"Emotes": [
			{ kind: "video", label: "Radial selection UX clip" },
			{ kind: "image", label: "Cross-platform input states" }
		],
		"Settings & Cosmetics": [
			{ kind: "video", label: "Settings immediate feedback" },
			{ kind: "video", label: "Cosmetics equip flow" }
		],
		"Doors & Elevators": [
			{ kind: "image", label: "Before/after bug explanation" },
			{ kind: "doc", label: "Scoped fix notes" }
		],
		"Operations Lead": [
			{ kind: "doc", label: "Delegation/QA workflow excerpt" },
			{ kind: "image", label: "Release checklist visual" }
		],
		"Mentorship": [
			{ kind: "doc", label: "Styleguide excerpt" },
			{ kind: "doc", label: "Architecture principles excerpt" }
		],
		"Exploit Security": [
			{ kind: "diagram", label: "Remote authority model" },
			{ kind: "doc", label: "Sanitized exploit postmortem" }
		]
	},
	"eclipsis": {
		"Pipe Networks": [
			{ kind: "diagram", label: "Pipe network graph diagram", src: "assets/PipeNetworkGraphs.webp" },
			{ kind: "diagram", label: "Replication/source-of-truth flow" },
			{ kind: "image", label: "Before/after network debug view" }
		],
		"Terrain Generation": [
			{ kind: "image", label: "Before/after terrain screenshots" },
			{ kind: "image", label: "Draw-call/profile proof" },
			{ kind: "diagram", label: "Asset pipeline migration diagram" }
		],
		"Education": [
			{ kind: "doc", label: "Data-oriented design teaching note" },
			{ kind: "image", label: "Folder-per-feature structure screenshot" }
		],
		"Game Design": [
			{ kind: "image", label: "Structure/balance comparison" },
			{ kind: "doc", label: "Roadmap excerpt" },
			{ kind: "image", label: "Community feedback summary" }
		],
		"Team Formation & Delegation": [
			{ kind: "doc", label: "Team responsibility map" },
			{ kind: "doc", label: "Tournament rules modernization" }
		],
		"Exploit Security": [
			{ kind: "diagram", label: "Client eagerness/server authority boundary" },
			{ kind: "code", label: "Typed remote interface excerpt" }
		]
	},
	"squash": {
		"Comprehensiveness": [
			{ kind: "image", label: "Supported Roblox types table" }
		],
		"Innovative API": [
			{ kind: "code", label: "Declarative schema example" },
			{ kind: "diagram", label: "Composition tree diagram" }
		],
		"Optimizations": [
			{ kind: "image", label: "Benchmark table" },
			{ kind: "diagram", label: "Bitpacking layout diagram" },
			{ kind: "code", label: "Generated runtime layout excerpt" }
		],
		"Educational Resource": [
			{ kind: "diagram", label: "RemoteEvent RakNet layout" },
			{ kind: "doc", label: "Best-practices documentation excerpt" }
		],
		"Documentation": [
			{ kind: "image", label: "Docs navigation screenshot" }
		]
	},
	"rocket-spleef": {
		"Rocket Launchers": [
			{ kind: "video", label: "Launcher responsiveness clip" },
			{ kind: "video", label: "Rocket jumping/knockback clip" }
		],
		"Server Authority": [
			{ kind: "diagram", label: "Client-eager rocket ownership flow" },
			{ kind: "code", label: "Server validation excerpt" }
		],
		"Crates": [
			{ kind: "image", label: "Crate progression UI" },
			{ kind: "diagram", label: "5-minute to 12-day unlock curve" }
		],
		"Events & Tools": [
			{ kind: "video", label: "Events montage" },
			{ kind: "video", label: "Tool variety montage" }
		],
		"Game Design": [
			{ kind: "doc", label: "Round loop design note" },
			{ kind: "diagram", label: "Reward loop diagram" }
		],
		"Monetization & Progression": [
			{ kind: "diagram", label: "Monetization/progression map" },
			{ kind: "image", label: "Planned cosmetics/crafting mockup" }
		]
	},
	"offset-camera": {
		"Native Integration": [
			{ kind: "code", label: "Native camera integration excerpt" }
		],
		"Drop-In Replacement": [
			{ kind: "video", label: "Default camera parity clip" },
			{ kind: "video", label: "Over-the-shoulder comparison" }
		],
		"Torso Replication": [
			{ kind: "diagram", label: "Torso replication boundary" }
		],
		"Customization & Docs": [
			{ kind: "image", label: "Settings/API screenshot" },
			{ kind: "image", label: "Documentation screenshot" }
		]
	},
	"depths-of-industry": {
		"Placement System": [
			{ kind: "video", label: "Grid placement clip" },
			{ kind: "diagram", label: "Cubic rotation states" }
		],
		"Cross-Platform": [
			{ kind: "video", label: "Mobile placement clip" },
			{ kind: "video", label: "Controller placement clip" }
		],
		"Excellent UX": [
			{ kind: "video", label: "Springs/sound feedback clip" },
			{ kind: "image", label: "UX state annotations" }
		]
	},
	"reflector": {
		"Comprehensiveness": [
			{ kind: "video", label: "Mixed selection reflection clip" },
			{ kind: "image", label: "Supported instance matrix" }
		],
		"GUI UX": [
			{ kind: "video", label: "Minimal plugin workflow clip" },
			{ kind: "image", label: "Header/control layout screenshot" }
		],
		"Safety": [
			{ kind: "video", label: "Rollback/cancel demonstration" },
			{ kind: "doc", label: "Validation error examples" }
		],
		"AI Assisted": [
			{ kind: "doc", label: "Human-directed problem log" },
			{ kind: "diagram", label: "AI-assisted workflow boundary" }
		]
	},
	"ocean-demo": {
		"Efficient Gerstner Waves": [
			{ kind: "video", label: "Wave field clip" },
			{ kind: "diagram", label: "Composable wave parameters" }
		],
		"Physically-Simulated Buoys & Boats": [
			{ kind: "video", label: "Buoy response clip" },
			{ kind: "video", label: "Boat response clip" }
		]
	}
});

const app = document.getElementById("app");

function escapeHtml(value) {
	return String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}

function pathFor(id) {
	return `#/${id}`;
}

function projectImage(project, className = "") {
	if (project.asset) {
		return `<img class="${className}" src="${project.asset}" alt="${escapeHtml(project.title)} project image" loading="lazy" />`;
	}

	return `<div class="project-placeholder ${className}" aria-hidden="true">${escapeHtml(project.title.split(" ").map((word) => word[0]).join(""))}</div>`;
}

function actionLinks(project) {
	const internal = `<a class="action primary" href="${pathFor(project.id)}">Read proof</a>`;
	const external = project.link && !project.link.startsWith("#/")
		? `<a class="action secondary" href="${project.link}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.linkLabel)}</a>`
		: "";
	return `<div class="actions">${internal}${external}</div>`;
}

function statGrid(project) {
	return `<div class="stat-grid">${project.stats.map(([value, label]) => `
		<div class="stat-card">
			<strong>${escapeHtml(value)}</strong>
			<span>${escapeHtml(label)}</span>
		</div>
	`).join("")}</div>`;
}

function proofPills(project) {
	return `<div class="proof-pills">${project.proof.map((pill) => `<span>${escapeHtml(pill)}</span>`).join("")}</div>`;
}

function projectBackgroundStyle(id) {
	const project = projects[id];
	if (!project || !project.asset) {
		return "";
	}

	return ` style="--item-bg: url('${escapeHtml(project.asset)}')"`;
}


function externalLink(project) {
	if (!project.link || project.link.startsWith("#/")) {
		return "";
	}

	return `<a class="external-text-link" href="${project.link}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.linkLabel)}</a>`;
}

function sectionsFor(project) {
	if (project.id !== "eclipsis") {
		return project.sections;
	}

	const pipeNetworks = project.sections.find((section) => section.title === "Pipe Networks");
	const rest = project.sections.filter((section) => section.title !== "Pipe Networks");
	return pipeNetworks ? [pipeNetworks, ...rest] : project.sections;
}

const mediaPanelAssignments = Object.freeze({
	"eclipsis": {
		"Pipe Networks": {
			"Hierarchical Graphs": "Pipe network graph diagram",
			"Existential Processing": "Before/after network debug view",
			"Centralized Replication": "Replication/source-of-truth flow"
		}
	}
});

const activeMedia = new Map();

function mediaSlotsForSection(project, section) {
	const byProject = sectionMediaSlots[project.id];
	return byProject && byProject[section.title] ? byProject[section.title] : [];
}

function mediaForEvidence(project, section, groupTitle, groupIndex) {
	const slots = mediaSlotsForSection(project, section);
	if (slots.length === 0) {
		return null;
	}

	const projectAssignments = mediaPanelAssignments[project.id];
	const sectionAssignments = projectAssignments ? projectAssignments[section.title] : null;
	const assignedLabel = sectionAssignments ? sectionAssignments[groupTitle] : null;
	if (assignedLabel) {
		return slots.find((slot) => slot.label === assignedLabel) || null;
	}

	return slots[groupIndex] || null;
}

function mediaBackgroundStyle(project, slot) {
	const image = slot && slot.src ? slot.src : project.asset;
	return image ? ` style="--media-bg: url('${escapeHtml(image)}')"` : "";
}

function mediaKindLabel(slot) {
	return String(slot && slot.kind ? slot.kind : "media").toUpperCase();
}

function registerPanelMedia(project, section, groupTitle, groupText, slot, sectionIndex, groupIndex) {
	const id = `media-${project.id}-${sectionIndex}-${groupIndex}`;
	activeMedia.set(id, {
		id,
		projectTitle: project.title,
		sectionTitle: section.title,
		groupTitle,
		groupText,
		kind: slot.kind || "media",
		label: slot.label || "Media placeholder",
		src: slot.src || "",
		fallbackSrc: project.asset || ""
	});
	return id;
}

function renderEvidenceCard(project, section, group, sectionIndex, groupIndex) {
	const [title, text] = group;
	const slot = mediaForEvidence(project, section, title, groupIndex);
	if (!slot) {
		return `
			<div class="evidence-card">
				<h3>${escapeHtml(title)}</h3>
				<p>${escapeHtml(text)}</p>
			</div>
		`;
	}

	const mediaId = registerPanelMedia(project, section, title, text, slot, sectionIndex, groupIndex);
	return `
		<div class="evidence-card has-media"${mediaBackgroundStyle(project, slot)}>
			<button class="evidence-media-button" type="button" data-media-id="${escapeHtml(mediaId)}" aria-label="Open ${escapeHtml(slot.label)} media notes">
				<span class="media-corner-icon" aria-hidden="true">⌄</span>
			</button>
			<div class="evidence-content">
				<span class="attached-media-kind">${escapeHtml(mediaKindLabel(slot))}</span>
				<h3>${escapeHtml(title)}</h3>
				<p>${escapeHtml(text)}</p>
			</div>
		</div>
	`;
}

function mediaChecklist(project) {
	const byProject = sectionMediaSlots[project.id] || {};
	const intro = (projectIntroMedia[project.id] || []).map((slot) => slot.label);
	const specific = Object.values(byProject).flat().map((slot) => slot.label);
	const legacy = project.mediaSlots || [];
	const unique = [...new Set([...intro, ...specific, ...legacy])];
	return unique;
}

function renderLanding() {
	activeMedia.clear();
	const highlights = highlightIds.map((id) => projects[id]);

	app.innerHTML = `
		<section class="landing route-view">
			<section class="hero" aria-labelledby="hero-title">
				<div class="hero-copy">
					<p class="eyebrow">Roblox · gameplay · systems · production</p>
					<h1 id="hero-title">Senior Roblox Gameplay Engineer</h1>
					<p class="hero-lede">I build player-facing Roblox features, stabilize legacy systems, and keep UX responsive while the server owns the truth.</p>
				</div>
				<aside class="hero-panel" aria-label="Role fit summary">
					<div class="role-line"><span>01</span><strong>Feature ownership</strong></div>
					<div class="role-line"><span>02</span><strong>Game feel and UX</strong></div>
					<div class="role-line"><span>03</span><strong>Server authority</strong></div>
					<div class="role-line"><span>04</span><strong>Production coordination</strong></div>
				</aside>
			</section>

			<section class="section-block" aria-labelledby="highlights-title">
				<div class="section-heading">
					<p class="eyebrow">Primary proof</p>
					<h2 id="highlights-title">Project Highlights</h2>
					<p>These are the first three things a hiring manager should inspect. Each proves a different part of the role.</p>
				</div>
				<div class="highlight-grid">
					${highlights.map((project, index) => `
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
					`).join("")}
				</div>
			</section>

			<section class="section-block proof-index" aria-labelledby="proof-title">
				<div class="section-heading compact">
					<p class="eyebrow">Role-matched index</p>
					<h2 id="proof-title">Find proof by requirement</h2>
					<p>The categories below are arranged around the Senior Gameplay Engineer work: collaboration, technical judgment, gameplay, UX, and mentorship.</p>
				</div>
				<div class="proof-map">
					${proofMap.map((bucket) => `
						<section class="proof-bucket" aria-labelledby="bucket-${bucket.title.toLowerCase()}">
							<div class="bucket-head">
								<h3 id="bucket-${bucket.title.toLowerCase()}">${escapeHtml(bucket.title)}</h3>
								<p>${escapeHtml(bucket.detail)}</p>
							</div>
							<div class="bucket-items">
								${bucket.items.map(([title, detail, id]) => `
									<a class="bucket-item" href="${pathFor(id)}"${projectBackgroundStyle(id)}>
										<strong>${escapeHtml(title)}</strong>
										<span>${escapeHtml(detail)}</span>
									</a>
								`).join("")}
							</div>
						</section>
					`).join("")}
				</div>
			</section>
		</section>
	`;
}

function renderProject(id) {
	activeMedia.clear();
	const project = projects[id];
	if (!project) {
		renderLanding();
		return;
	}

	const sections = sectionsFor(project);
	const checklist = mediaChecklist(project);

	app.innerHTML = `
		<article class="case-page route-view">
			<a class="back-link" href="#/">← Landing</a>

			<header class="case-hero">
				<div class="case-hero-copy">
					<p class="eyebrow">Case study skeleton</p>
					<h1>${escapeHtml(project.title)}</h1>
					<p class="case-role">${escapeHtml(project.role)}</p>
					<p class="case-pitch">${escapeHtml(project.pitch)}</p>
					${proofPills(project)}
					${externalLink(project)}
				</div>
				<a class="case-media" href="${project.link && !project.link.startsWith("#/") ? project.link : pathFor(project.id)}" ${project.link && !project.link.startsWith("#/") ? "target=\"_blank\" rel=\"noopener noreferrer\"" : ""} aria-label="Open ${escapeHtml(project.title)} external link">
					${projectImage(project)}
				</a>
			</header>

			${statGrid(project)}

			<nav class="case-jump" aria-label="Case study sections">
				${sections.map((section, index) => `<a href="${pathFor(project.id)}" data-jump="section-${index}">${escapeHtml(section.title)}</a>`).join("")}
			</nav>

			<div class="case-sections">
				${sections.map((section, index) => `
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
				`).join("")}
			</div>

			<section class="media-needed" aria-labelledby="media-needed-title">
				<div class="section-heading compact">
					<p class="eyebrow">Evidence checklist</p>
					<h2 id="media-needed-title">Media to fill manually</h2>
					<p>Panels with a corner marker already know where their media belongs. This checklist keeps the missing assets visible while the page is still skeletal.</p>
				</div>
				<div class="slot-grid">
					${checklist.map((slot) => `<div class="media-slot"><span>needed</span><strong>${escapeHtml(slot)}</strong></div>`).join("")}
				</div>
			</section>
		</article>
	`;
}


function modalMediaFigure(record) {
	if (record.src) {
		return `
			<figure class="modal-media filled ${escapeHtml(record.kind)}">
				<img src="${escapeHtml(record.src)}" alt="${escapeHtml(record.label)}" />
				<figcaption>${escapeHtml(record.label)}</figcaption>
			</figure>
		`;
	}

	const fallbackStyle = record.fallbackSrc ? ` style="--media-bg: url('${escapeHtml(record.fallbackSrc)}')"` : "";
	return `
		<div class="modal-media placeholder ${escapeHtml(record.kind)}"${fallbackStyle}>
			<span>${escapeHtml(record.kind)} slot</span>
			<strong>${escapeHtml(record.label)}</strong>
			<p>Replace this panel with the actual ${escapeHtml(record.kind)} when the asset is ready.</p>
		</div>
	`;
}

function showMediaModal(mediaId) {
	const record = activeMedia.get(mediaId);
	if (!record) {
		return;
	}

	closeMediaModal();
	document.body.classList.add("modal-open");
	document.body.insertAdjacentHTML("beforeend", `
		<div class="media-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal-overlay>
			<section class="media-modal-panel">
				<button class="modal-close" type="button" data-modal-close aria-label="Close media panel">×</button>
				<div class="modal-scroll">
					<p class="modal-kicker">${escapeHtml(record.projectTitle)} · ${escapeHtml(record.sectionTitle)}</p>
					<h2 id="modal-title">${escapeHtml(record.groupTitle)}</h2>
					<p class="modal-lede">${escapeHtml(record.groupText)}</p>
					${modalMediaFigure(record)}
					<div class="modal-copy">
						<section>
							<h3>What this media should prove</h3>
							<p>This asset belongs directly to the <strong>${escapeHtml(record.groupTitle)}</strong> panel. It should make the claim concrete instead of adding a detached gallery image elsewhere on the page.</p>
						</section>
						<section>
							<h3>What to include</h3>
							<p>Use the strongest available ${escapeHtml(record.kind)}: a short clip, annotated screenshot, diagram, profiler capture, code excerpt, or sanitized document that demonstrates the claim without forcing the reader to infer the connection.</p>
						</section>
						<section>
							<h3>Caption direction</h3>
							<p>Explain the before-state, the decision made, and the observable result. Keep it specific enough that a hiring manager can understand the engineering or production judgment in one pass.</p>
						</section>
					</div>
				</div>
			</section>
		</div>
	`);

	const closeButton = document.querySelector("[data-modal-close]");
	if (closeButton) {
		closeButton.focus({ preventScroll: true });
	}
}

function closeMediaModal() {
	const modal = document.querySelector("[data-modal-overlay]");
	if (modal) {
		modal.remove();
	}
	document.body.classList.remove("modal-open");
}

function getRoute() {
	const hash = window.location.hash || "#/";
	const clean = hash.replace(/^#\/?/, "").replace(/^\//, "");
	return clean || "/";
}

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


document.addEventListener("click", (event) => {
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

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeMediaModal();
	}
});

window.addEventListener("hashchange", route);
route();
