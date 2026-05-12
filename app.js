const ASSETS = {
	sona: "assets/Sona.webp",
	github: "assets/Github.webp",
	roblox: "assets/Roblox.webp",
	npa: "assets/NPA.webp",
	asylum: "assets/AsylumLife.webp",
	eclipsis: "assets/Eclipsis.webp",
	eclipsisPipeDiagram: "assets/EclipsisPipeDiagram.webp",
	eclipsisPipeAnnotated: "assets/EclipsisPipeAnnotated.webp",
	squash: "assets/Squash.webp",
	rocketSpleef: "assets/RocketSpleef.webp",
	offsetCamera: "assets/OffsetCamera.webp",
	reflector: "assets/Reflector.webp",
	depths: "assets/DepthsOfIndustry.webp",
};

const LINKS = {
	sonaGithub: "https://github.com/SolarScuffle-Bot",
	sonaRoblox: "https://www.roblox.com/users/2722909519/profile",
	npaGithub: "https://github.com/3065325",
	npaRoblox: "https://www.roblox.com/users/86032838/profile",
	asylumLife: "https://www.roblox.com/games/132352755769957/Asylum-Life",
	eclipsis: "https://www.roblox.com/games/632574862/Eclipsis",
	squash: "https://data-oriented-house.github.io/Squash/",
	rocketSpleef: "https://www.roblox.com/games/106404336773666/Rocket-Spleef",
	offsetCamera: "https://devforum.roblox.com/t/offset-camera-classic-camera-extension-for-fps-shiftlock-over-the-shoulder-for-all-platforms/3177209",
	reflector: "https://devforum.roblox.com/t/reflector-plugin-to-mirror-just-about-anything-in-studio/4617810",
	depths: "https://www.roblox.com/games/119768530425232/Depths-of-Industry",
};

const projects = {
	"asylum-life": {
		category: "Gameplay",
		title: "Asylum Life",
		shortTitle: "Asylum Life",
		pageTitle: "Asylum Life: Live Roblox Gameplay Engineering & Operations Support",
		role: "Gameplay Engineer & Acting Operations Lead",
		status: "Past production work",
		image: ASSETS.asylum,
		imageMode: "cover",
		linkLabel: "Roblox Link",
		link: LINKS.asylumLife,
		oneLine: "Front-page Roblox production experience across gameplay systems, UI-driven tasks, release support, and temporary operations coordination.",
		overview: "Joined during a high-pressure production period with weekly update expectations and inherited reliability risks. I helped stabilize delivery through player-facing gameplay implementation, live debugging, QA and process improvements, engineering documentation, and temporary operations coordination.",
		problem: "The project needed regular player-facing updates while maintaining live reliability. New content, bug fixes, contributor coordination, and QA all had to move without turning every release into a risky rewrite.",
		contributions: [
			"Implemented and maintained chore, popup, GUI, door, elevator, leaderboard, and interaction systems used by live players.",
			"Used ScriptProfiler, MicroProfiler, runtime diagnostics, and creator analytics to isolate production risks and regressions.",
			"Created QA notes, release-risk documentation, style guidance, and engineering references for safer team contribution.",
			"Supported task allocation, cross-disciplinary communication, and operations coordination during a staffing gap.",
			"Refactored targeted parts of the codebase where localized improvements could reduce risk without destabilizing weekly releases."
		],
		constraints: [
			"Live players and weekly update expectations limited the room for broad rewrites.",
			"Changes had to be understandable to QA, designers, artists, and programmers, not just technically correct.",
			"Inherited reliability risks required instrumentation and targeted fixes rather than abstract cleanup."
		],
		decisions: [
			"Favored localized refactors and diagnostic tooling over large rewrite attempts.",
			"Wrote testing instructions around intended player behavior, not only implementation details.",
			"Treated release safety as a combined engineering, QA, and communication problem."
		],
		results: [
			"Improved delivery reliability during a difficult production period.",
			"Reduced avoidable release risk by making feature intent and testing expectations explicit.",
			"Converted undocumented implementation knowledge into reusable team process and standards."
		],
		metrics: [
			{ value: "Front-page", label: "Roblox production experience" },
			{ value: "Weekly", label: "live update pressure" },
			{ value: "QA + docs", label: "release-risk support" },
		],
		media: [
			{ title: "Minigames / Chores", kind: "play", caption: "Add a 30–60 second gameplay clip showing GUI-driven chores, popup minigames, or other player-facing task loops." },
			{ title: "Release Support", kind: "play", caption: "Add a sanitized QA checklist, style-guide excerpt, profiler capture, or before/after debugging timeline." },
		],
		proves: ["Live production", "Gameplay implementation", "Debugging", "QA discipline", "Operations support"],
		missing: [
			"30–60 second clip of minigames, chores, doors, elevators, leaderboards, or GUI systems.",
			"Sanitized QA checklist, style-guide excerpt, or release-risk template.",
			"One concrete debugging example: symptom, diagnostic tool, root cause, fix, shipped result."
		]
	},
	"eclipsis": {
		category: "Systems",
		title: "Eclipsis",
		shortTitle: "Eclipsis",
		pageTitle: "Eclipsis: Legacy Systems Optimization & Game Design",
		role: "Active Systems Engineer & Game Designer",
		status: "Active work",
		image: ASSETS.eclipsis,
		imageMode: "cover",
		linkLabel: "Roblox Link",
		link: LINKS.eclipsis,
		oneLine: "Inherited-system modernization, measurable performance gains, and design-aware engineering on an active Roblox strategy game.",
		overview: "Eclipsis is the strongest systems case study here. It shows inherited-codebase judgment, optimization, performance profiling, and engineering changes guided by game design rather than cleanup for its own sake.",
		problem: "Legacy simulation and terrain systems had become too expensive to reason about comfortably. The work needed to improve performance while preserving the strategic shape and player-facing behavior of the original game.",
		contributions: [
			"Refactored legacy pipe-networking behavior from effectively explosive scaling toward near constant-time updates under normal gameplay conditions.",
			"Reworked terrain generation and rendering paths to reduce load time from roughly 24 seconds to roughly 9 seconds.",
			"Reduced draw calls from roughly 3000 to roughly 900 by changing how generated terrain and rendering work were structured.",
			"Modernized Rojo usage, repository organization, GitHub QA standards, and team-facing code expectations.",
			"Balanced technical-debt reduction against production risk, player expectations, and design intent."
		],
		constraints: [
			"The inherited systems could not simply be discarded without changing the game.",
			"Optimization needed to preserve strategic readability and existing player expectations.",
			"Improvements had to fit active development rather than a clean-room rewrite."
		],
		decisions: [
			"Used profiling and asymptotic reasoning to identify systems that were structurally expensive, not merely locally inefficient.",
			"Moved update behavior toward invalidation boundaries and data flow that scale with meaningful changes.",
			"Kept design goals visible so optimization did not erase the gameplay identity of the project."
		],
		results: [
			"Load time reduced from ~24s to ~9s.",
			"Draw calls reduced from ~3000 to ~900.",
			"Pipe-networking behavior became easier to reason about, profile, and safely extend."
		],
		metrics: [
			{ value: "~24s → ~9s", label: "load-time reduction" },
			{ value: "~3000 → ~900", label: "draw-call reduction" },
			{ value: "near O(1)", label: "normal pipe update behavior" },
		],
		media: [
			{ title: "Pipe Network Optimization", kind: "image", image: ASSETS.eclipsisPipeDiagram, caption: "Refactored pipe-network updates by separating physical ports from abstract network state. Producers and consumers now contribute to aggregate network totals instead of repeatedly propagating across every connected structure." },
			{ title: "Engineering Sketch", kind: "image", image: ASSETS.eclipsisPipeAnnotated, caption: "Annotated design note showing the three-layer model: physical nodes, network nodes, and networks. The sketch records why the new data layout reduces redundant merge, split, and update work." },
		],
		proves: ["Systems optimization", "Profiling", "Architecture", "Technical-debt reduction", "Design-aware engineering"],
		missing: [
			"Before/after chart or profiler capture for the load-time reduction.",
			"Before/after chart or capture for draw calls.",
			"Short explanation of what player-facing behavior was preserved."
		]
	},
	"squash": {
		category: "Tooling",
		title: "Squash",
		shortTitle: "Squash",
		pageTitle: "Squash: Luau Serialization Infrastructure for Roblox Developers",
		role: "Creator & Roblox Open Source Software Maintainer",
		status: "Open-source library",
		image: ASSETS.squash,
		imageMode: "icon",
		linkLabel: "Docs Link",
		link: LINKS.squash,
		oneLine: "A recognized Luau serialization/deserialization library for compact data encoding, networking, and persistence workflows.",
		overview: "Squash demonstrates infrastructure-level Luau work: API design, compact data layout, documentation, examples, benchmarks, and maintainer judgment. It helps Roblox developers encode structured data predictably for networking, persistence, and low-level data workflows.",
		problem: "Roblox developers often need compact, predictable data encodings, but serialization tools can become either too magical to trust or too low-level to use comfortably.",
		contributions: [
			"Designed and maintained a Luau SerDes library focused on compact, practical data encoding.",
			"Built developer-facing APIs that make binary/data-layout work approachable without hiding important constraints.",
			"Wrote documentation and examples so developers could adopt the library without direct support.",
			"Treated benchmarks, tradeoffs, and edge cases as part of the API story rather than marketing numbers.",
			"Maintained the project as part of a broader Roblox open-source infrastructure ecosystem."
		],
		constraints: [
			"Serialization libraries must be predictable and boring in correctness-critical places.",
			"Compact data workflows are useful only when the API remains inspectable and documented.",
			"Public infrastructure needs examples, versioning discipline, and clear maintainer expectations."
		],
		decisions: [
			"Use clear public documentation instead of relying on direct support or hidden project context.",
			"Keep adoption language at 'recognized' until stronger public proof supports a stronger claim.",
			"Present benchmarks with methodology and tradeoffs so readers understand what the numbers mean."
		],
		results: [
			"Provides reusable serialization infrastructure for Roblox developers.",
			"Supports compact data workflows for networking and persistence use cases.",
			"Strengthens open-source Luau credibility with documentation and maintainership evidence."
		],
		metrics: [
			{ value: "SerDes", label: "core infrastructure" },
			{ value: "Luau", label: "Roblox-focused API" },
			{ value: "Docs", label: "developer adoption support" },
		],
		media: [
			{ title: "API Example", kind: "code", caption: "Add an exact current docs snippet showing a compact, understandable serialization workflow." },
			{ title: "Benchmark / Adoption", kind: "diagram", caption: "Add stars, downloads, community references, benchmarks, or projects using Squash." },
		],
		proves: ["Luau infrastructure", "API design", "Serialization", "Documentation", "Open source"],
		missing: [
			"GitHub stars, package downloads, projects using Squash, or community references.",
			"A real API snippet from the current docs.",
			"Benchmark chart with methodology and comparison targets."
		]
	},
	"rocket-spleef": {
		category: "Gameplay",
		title: "Rocket Spleef",
		shortTitle: "Rocket Spleef",
		pageTitle: "Rocket Spleef: Server-Authoritative Casual Competitive Gameplay",
		role: "Creator / Lead Developer",
		status: "Original Roblox game",
		image: ASSETS.rocketSpleef,
		imageMode: "cover",
		linkLabel: "Roblox Link",
		link: LINKS.rocketSpleef,
		oneLine: "An original Roblox game built around readable high-chaos arena play, server-authoritative rockets, and a sticky casual competitive loop.",
		overview: "Rocket Spleef is the portfolio’s original-game ownership proof. It shows product judgment, server-authoritative gameplay, readable chaos, player expression, and progression thinking in a compact Roblox experience.",
		problem: "The game needed to validate a simple competitive loop quickly while avoiding the common failure mode of chaotic mechanics becoming unreadable or exploitable.",
		contributions: [
			"Designed the core arena loop around low-friction entry, readable destruction pressure, and fast round-to-round recovery.",
			"Built rocket interactions around server authority so the most important gameplay outcomes are not client-trusted.",
			"Tuned high-chaos interactions so players can understand why they won, lost, or narrowly escaped.",
			"Planned engagement, expression, monetization, and long-term progression systems around a casual competitive audience."
		],
		constraints: [
			"Casual competitive games need immediate clarity, not long onboarding.",
			"Rockets and destruction are naturally chaotic, so readability had to be designed intentionally.",
			"Server authority matters because the core mechanic directly determines competitive outcomes."
		],
		decisions: [
			"Prioritized low UI friction and fast comprehension over feature breadth.",
			"Used server-authoritative outcomes for the central competitive mechanic.",
			"Kept monetization framing secondary to expression, retention, and progression."
		],
		results: [
			"Created a clear original-game case study separate from production support and infrastructure work.",
			"Demonstrates gameplay-product instincts alongside engineering implementation.",
			"Provides a place to show video proof of combat readability, round pacing, and server authority."
		],
		metrics: [
			{ value: "Server", label: "authoritative rocket outcomes" },
			{ value: "Low UI", label: "friction-first loop" },
			{ value: "Readable", label: "high-chaos design target" },
		],
		media: [
			{ title: "Gameplay Clip", kind: "image", image: ASSETS.rocketSpleef, caption: "Replace with a 30-second clip showing the round loop, rocket pressure, and readable high-chaos interactions." },
			{ title: "Authority Diagram", kind: "diagram", caption: "Add a client-input → server-validation → replicated outcome diagram for rocket behavior." },
		],
		proves: ["Original game ownership", "Server authority", "Game feel", "Product thinking", "Competitive readability"],
		missing: [
			"30-second gameplay clip.",
			"Simple client/server authority diagram.",
			"Current roadmap or progression-status note."
		]
	},
	"offset-camera": {
		category: "Gameplay / Tooling",
		title: "Offset Camera",
		shortTitle: "Offset Camera",
		pageTitle: "Offset Camera: Responsive Roblox Camera Systems",
		role: "Creator & Maintainer",
		status: "Developer-facing camera tool",
		image: ASSETS.offsetCamera,
		imageMode: "icon",
		linkLabel: "DevForum Link",
		link: LINKS.offsetCamera,
		oneLine: "A modular camera extension focused on FPS, shift-lock, over-the-shoulder behavior, cross-platform input, and player comfort.",
		overview: "Offset Camera is the direct game-feel case study. It demonstrates camera behavior, input responsiveness, player comfort, cross-platform UX, and reusable developer integration within Roblox’s existing camera expectations.",
		problem: "Roblox camera extensions need to feel native, responsive, and predictable across PC, mobile, console, avatar types, shift-lock, FPS, and over-the-shoulder use cases.",
		contributions: [
			"Created a drop-in camera extension that integrates with Roblox default camera behavior instead of fighting it.",
			"Supported FPS, shift-lock, over-the-shoulder, vehicle, and focus-offset use cases.",
			"Designed the API for developer usability while keeping player comfort and responsiveness visible.",
			"Considered cross-platform input behavior so the tool remains practical outside a narrow PC-only demo."
		],
		constraints: [
			"Camera systems fail quickly when they make players uncomfortable or disoriented.",
			"Roblox default camera behavior creates expectations developers and players already understand.",
			"A public developer tool needs simple integration and clear examples."
		],
		decisions: [
			"Treat camera feel as gameplay engineering, not cosmetic polish.",
			"Preserve compatibility with common Roblox control modes and avatar expectations.",
			"Show the final page through video, because camera quality is difficult to prove with text."
		],
		results: [
			"Provides reusable camera infrastructure for Roblox developers.",
			"Demonstrates practical game-feel engineering through input, view framing, and comfort.",
			"Gives the portfolio a strong player-experience example outside combat or UI systems."
		],
		metrics: [
			{ value: "FPS", label: "supported view mode" },
			{ value: "Shift-lock", label: "supported Roblox workflow" },
			{ value: "All platforms", label: "design target" },
		],
		media: [
			{ title: "FPS / Shift-lock", kind: "image", image: ASSETS.offsetCamera, caption: "Replace with short clips showing FPS, shift-lock, and over-the-shoulder behavior in motion." },
			{ title: "Integration Example", kind: "code", caption: "Add a real minimal integration snippet from the public DevForum/docs post." },
		],
		proves: ["Game feel", "Camera systems", "Input responsiveness", "Developer tooling", "Cross-platform UX"],
		missing: [
			"FPS behavior video.",
			"Over-the-shoulder and shift-lock behavior videos.",
			"Mobile/console clip if available.",
			"Exact minimal integration code snippet."
		]
	},
	"reflector": {
		category: "Tooling",
		title: "Reflector",
		shortTitle: "Reflector",
		pageTitle: "Reflector: AI-Assisted Roblox Studio Transform Tooling",
		role: "Creator & Maintainer, AI-Assisted Implementation",
		status: "Studio plugin / tooling project",
		image: ASSETS.reflector,
		imageMode: "icon",
		linkLabel: "DevForum Link",
		link: LINKS.reflector,
		oneLine: "AI-assisted Roblox Studio tooling for reflection and transform workflows, directed and validated through algorithmic requirements and edge-case testing.",
		overview: "Reflector is a Roblox Studio plugin developed with AI-assisted implementation. I owned the problem definition, algorithmic direction, transform logic requirements, edge-case resolution, testing, validation, and final product behavior.",
		problem: "Reflection tooling seems simple until it meets real Studio content: meshes, rigs, pivots, accessories, decals, animations, unions, undo/redo, long operations, and creator expectations all expose edge cases.",
		contributions: [
			"Defined reflection workflows for parts, meshes, rigs, accessories, pivots, decals, and animation data.",
			"Directed transform-math requirements and validated edge cases against real Roblox Studio behavior.",
			"Diagnosed issues around mesh orientation, decal tangents, rigs, accessories, undo/redo, long-running operations, and creator workflow expectations.",
			"Maintained final product behavior while keeping the public description honest about AI-assisted implementation."
		],
		constraints: [
			"The implementation must be framed honestly as AI-assisted.",
			"Studio tools must avoid destructive surprises and preserve creator trust.",
			"Transform correctness has to be tested against real content, not only idealized math examples."
		],
		decisions: [
			"Position Reflector as tooling direction, validation, and algorithmic ownership rather than hand-written coding proof.",
			"Use a support role in the portfolio, below the main production and systems case studies.",
			"Show a supported-object matrix and demo clip instead of relying on claims."
		],
		results: [
			"Demonstrates AI-assisted development judgment, tooling direction, and validation discipline.",
			"Shows transform/math reasoning and creator empathy across awkward Studio edge cases.",
			"Supports technical breadth without overstating implementation authorship."
		],
		metrics: [
			{ value: "AI-assisted", label: "implementation framing" },
			{ value: "Studio", label: "creator workflow tooling" },
			{ value: "Edge cases", label: "validation focus" },
		],
		media: [
			{ title: "Plugin Demo", kind: "image", image: ASSETS.reflector, caption: "Replace with a short Studio clip showing preview plane, reflection workflow, and final result." },
			{ title: "Support Matrix", kind: "diagram", caption: "Add a compact matrix for parts, meshes, rigs, accessories, decals, animation data, and current caveats." },
		],
		proves: ["Tooling direction", "Transform reasoning", "AI-assisted workflow", "Validation", "Creator empathy"],
		missing: [
			"Plugin demo clip.",
			"Supported-object matrix.",
			"Concise before/after reflection example.",
			"Final public note on AI-assisted implementation."
		]
	},
	"depths-of-industry": {
		category: "Gameplay",
		title: "Depths of Industry",
		shortTitle: "Depths of Industry",
		pageTitle: "Depths of Industry: Supporting Game Work",
		role: "Role details needed",
		status: "Supporting project",
		image: ASSETS.depths,
		imageMode: "cover",
		linkLabel: "Roblox Link",
		link: LINKS.depths,
		oneLine: "Supporting Roblox game work. This page is intentionally conservative until contribution details, media, and current status are supplied.",
		overview: "Depths of Industry belongs in the supporting archive unless it has stronger evidence than the current draft provides. It can become a useful gameplay or systems example once the exact ownership, difficult constraints, and shipped outcomes are documented.",
		problem: "The public link and icon exist, but the portfolio still needs the project’s actual engineering story before it should be used as hiring proof.",
		contributions: [
			"Add exact ownership: systems implemented, gameplay features shipped, tools built, or production support provided.",
			"Add the hardest constraint: performance, networking, content pipeline, game feel, QA, design, or team execution.",
			"Add one concrete before/after result or shipped player-facing outcome."
		],
		constraints: ["Contribution details are not yet documented.", "Media and metrics are not yet available.", "The card should remain secondary until it proves a specific senior signal."],
		decisions: ["Keep this as compact supporting work for now.", "Promote only if the project demonstrates a distinct proof category not already covered by the featured five."],
		results: ["Current result: public archive card with a live Roblox link.", "Needed result: contribution-specific case study copy."],
		metrics: [
			{ value: "TBD", label: "role" },
			{ value: "TBD", label: "technical proof" },
			{ value: "TBD", label: "media" },
		],
		media: [
			{ title: "Project Image", kind: "image", image: ASSETS.depths, caption: "Current icon. Add gameplay footage if this becomes more than an archive card." },
			{ title: "Contribution Proof", kind: "diagram", caption: "Add a short diagram, code sample, or feature clip after clarifying ownership." },
		],
		proves: ["Supporting breadth", "Needs details"],
		missing: ["Exact role and dates.", "3 concrete contribution bullets.", "Media or metric showing why this belongs in the portfolio."]
	},
	"voxel-destruction": {
		category: "Systems",
		title: "Voxel Destruction",
		shortTitle: "Voxel Destruction",
		pageTitle: "High-Performance Roblox Voxel Destruction Framework",
		role: "Systems Designer / Programmer",
		status: "Technical prototype / framework",
		image: null,
		imageMode: "icon",
		linkLabel: "Internal / Demo Link Needed",
		link: "",
		oneLine: "A data-oriented Roblox destruction framework using hierarchical chunking, occupancy bitsets, localized regeneration, and greedy meshing.",
		overview: "The voxel destruction framework demonstrates advanced systems design under Roblox engine constraints. It focuses on carving volumes from parts, maintaining compact occupancy state, and rebuilding visible geometry with low recomputation.",
		problem: "Naive destruction systems rebuild too much geometry and create too many instances. The challenge is to localize updates, preserve performance, and keep state small enough to reason about.",
		contributions: [
			"Designed hierarchical chunking and occupancy data structures for localized destructive updates.",
			"Used bitsets and summary state to avoid storing redundant per-voxel information.",
			"Built toward incremental greedy meshing so visible geometry can be regenerated in affected regions instead of globally.",
			"Separated box and wedge pipelines where abstraction would make the hot path slower or less clear."
		],
		constraints: ["Roblox part count, rendering cost, and physics behavior constrain the design.", "Geometry updates must be local and predictable.", "The implementation must stay data-oriented and type-safe enough to debug."],
		decisions: ["Use derived truth and minimal state over duplicated bookkeeping.", "Favor chunk-local recomputation and explicit dirty propagation.", "Avoid cross-shape abstractions that slow the common box pipeline."],
		results: ["Current milestone: octree-only hierarchical chunk renderer works well and is performant.", "Next milestone: lightweight incremental greedy-meshed octant layer on top of the working version."],
		metrics: [
			{ value: "Bitsets", label: "compact occupancy" },
			{ value: "Chunks", label: "localized updates" },
			{ value: "Greedy", label: "render coalescing target" },
		],
		media: [
			{ title: "Destruction Demo", kind: "play", caption: "Add a short destruction clip showing carve behavior and regenerated render geometry." },
			{ title: "Chunking Diagram", kind: "diagram", caption: "Add a diagram for root → chunks → occupancy → greedy-meshed render children." },
		],
		proves: ["Data-oriented design", "Spatial partitioning", "Greedy meshing", "Roblox performance", "Systems architecture"],
		missing: ["Demo clip.", "Chunking diagram.", "Update-bound explanation.", "Code snippet showing data layout and invariants."]
	}
};

const featuredIds = ["asylum-life", "eclipsis", "offset-camera", "squash", "rocket-spleef"];
const supportIds = ["reflector", "voxel-destruction", "depths-of-industry"];
const routes = new Set(["home", "work", "leadership", "about", "gaps", ...Object.keys(projects)]);
const view = document.getElementById("main");
let activeRoute = null;

function escapeHtml(value) {
	return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}
function list(items) {
	return `<ul class="bullet-list">${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}
function tags(items, mode = "") {
	return `<div class="tag-row">${items.map(item => `<span class="tag ${mode}">${escapeHtml(item)}</span>`).join("")}</div>`;
}
function externalIcon(label) {
	const lower = label.toLowerCase();
	if (lower.includes("roblox")) return ASSETS.roblox;
	if (lower.includes("github") || lower.includes("docs")) return ASSETS.github;
	if (lower.includes("devforum")) return ASSETS.roblox;
	return ASSETS.roblox;
}
function card(id, size = "large") {
	const p = projects[id];
	const mode = p.imageMode === "icon" ? "icon-thumb" : "";
	const img = p.image ? `<img src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy" />` : `<span class="play-triangle" aria-hidden="true"></span>`;
	return `
		<button class="project-card ${size} nav-trigger" data-route="${id}" aria-label="Open ${escapeHtml(p.title)} case study">
			<div class="project-thumb ${mode}">${img}</div>
			<div class="project-body">
				<h3>${escapeHtml(p.shortTitle)}</h3>
				${size !== "small" ? `<p>${escapeHtml(p.oneLine)}</p>` : `<p>webp</p>`}
			</div>
		</button>
	`;
}
function mediaBox(item) {
	let body = `<span class="play-triangle" aria-hidden="true"></span>`;
	if (item.kind === "image" && item.image) {
		body = `<img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />`;
	} else if (item.kind === "code") {
		body = `<code>code sample<br/>goes here</code>`;
	} else if (item.kind === "diagram") {
		body = `<code>diagram<br/>goes here</code>`;
	}
	return `
		<div class="media-box">
			<div class="media-header"><h3>${escapeHtml(item.title)}</h3></div>
			<div class="media-placeholder">${body}</div>
			<div class="media-caption">${escapeHtml(item.caption)}</div>
		</div>
	`;
}
function metricRow(metrics) {
	return `<div class="metric-row">${metrics.map(m => `<div class="metric"><strong>${escapeHtml(m.value)}</strong><span>${escapeHtml(m.label)}</span></div>`).join("")}</div>`;
}

function renderHome() {
	return `
		<section class="hero reveal">
			<h1 class="hero-title">Senior Roblox<br><span class="thin">Gameplay & Systems Engineer</span></h1>
			<p class="hero-thesis">I build Roblox gameplay systems, Luau infrastructure, and production tools with a focus on game feel, performance, maintainability, and live-service reliability.</p>
			<div class="action-row">
				<button class="solid-button nav-trigger" data-route="work">View Featured Work</button>
				<button class="ghost-button nav-trigger" data-route="leadership">Production & Leadership</button>
				<a class="ghost-button" href="${LINKS.sonaGithub}" target="_blank" rel="noreferrer">GitHub</a>
			</div>
		</section>

		<section class="proof-strip reveal" aria-label="Portfolio proof strip">
			<div class="proof-item"><strong>6+ years</strong><span>Roblox game development experience.</span></div>
			<div class="proof-item"><strong>Front-page</strong><span>live Roblox production experience.</span></div>
			<div class="proof-item"><strong>~24s → ~9s</strong><span>Eclipsis load-time improvement.</span></div>
			<div class="proof-item"><strong>~3000 → ~900</strong><span>Eclipsis draw-call reduction.</span></div>
			<div class="proof-item"><strong>Squash</strong><span>Luau SerDes infrastructure.</span></div>
			<div class="proof-item"><strong>QA + docs</strong><span>release safety and team support.</span></div>
		</section>

		<section class="triad reveal" aria-label="Featured proof pillars">
			<div class="column-stack">
				<h2 class="column-title">Gameplay</h2>
				${card("asylum-life", "large")}
				<div class="card-caption">Asylum Life</div>
				<div class="small-row">${card("rocket-spleef", "small")}${card("depths-of-industry", "small")}</div>
			</div>
			<div class="column-stack">
				<h2 class="column-title">Systems</h2>
				${card("eclipsis", "large")}
				<div class="card-caption">Eclipsis</div>
				<button class="summary-card nav-trigger" data-route="voxel-destruction"><strong>Technical Expertise</strong><span>Profiling, spatial partitioning, serialization, greedy meshing, and QA-aware refactors.</span></button>
			</div>
			<div class="column-stack">
				<h2 class="column-title">Tooling</h2>
				${card("squash", "large")}
				<div class="card-caption">Squash</div>
				<div class="small-row">${card("offset-camera", "small")}${card("reflector", "small")}</div>
			</div>
		</section>
	`;
}

function renderCaseStudy(id) {
	const p = projects[id];
	const linkPanel = p.link
		? `<a class="link-panel" href="${p.link}" target="_blank" rel="noreferrer"><div class="link-panel-title"><img src="${externalIcon(p.linkLabel)}" alt="" />${escapeHtml(p.linkLabel)}</div><p>Open the public project page in a new tab.</p></a>`
		: `<div class="link-panel"><div class="link-panel-title">Link Needed</div><p>Add a public demo, repository, DevForum post, video, or sanitized artifact link.</p></div>`;
	return `
		<section class="case-top reveal">
			<div class="case-card">${card(id, "large")}</div>
			${linkPanel}
			<div class="case-description"><p>${escapeHtml(p.oneLine)}</p>${tags([p.category, p.status], "ok")}</div>
		</section>

		<section class="case-heading reveal">
			<h1>${escapeHtml(p.role)}</h1>
			<p>${escapeHtml(p.overview)}</p>
		</section>

		<section class="case-layout reveal">
			<div class="panel">
				<h2>My Contributions</h2>
				${list(p.contributions)}
				${metricRow(p.metrics)}
				${tags(p.proves)}
			</div>
			<div class="media-grid">
				${p.media.map(mediaBox).join("")}
			</div>
		</section>

		<section class="two-col reveal" style="margin-top:24px">
			<div class="panel"><h2>Problem</h2><p>${escapeHtml(p.problem)}</p></div>
			<div class="panel"><h2>Constraints</h2>${list(p.constraints)}</div>
			<div class="panel"><h2>Technical Decisions</h2>${list(p.decisions)}</div>
			<div class="panel"><h2>Result / Impact</h2>${list(p.results)}</div>
		</section>
	`;
}

function renderWork() {
	return `
		<section class="hero reveal">
			<h1 class="hero-title">Featured<br><span class="thin">Work</span></h1>
			<p class="hero-thesis">The portfolio is a curated proof path: production credibility, systems depth, gameplay feel, open-source infrastructure, original game ownership, and supporting technical breadth.</p>
		</section>
		<section class="section-heading reveal"><h2>Primary Case Studies</h2><p>These should remain the first five proof pillars unless new media or metrics change the hiring signal.</p></section>
		<section class="work-grid reveal">
			${featuredIds.map(id => {
				const p = projects[id];
				return `<div class="work-tile"><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.oneLine)}</p>${tags(p.proves.slice(0, 4))}<button class="ghost-button nav-trigger" data-route="${id}">Open</button></div>`;
			}).join("")}
		</section>
		<section class="section-heading reveal"><h2>Supporting Technical Work</h2><p>These support breadth without competing with the strongest production and systems examples.</p></section>
		<section class="work-grid reveal">
			${supportIds.map(id => {
				const p = projects[id];
				return `<div class="work-tile"><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.oneLine)}</p>${tags(p.proves.slice(0, 4), id === "depths-of-industry" ? "needs" : "") }<button class="ghost-button nav-trigger" data-route="${id}">Open</button></div>`;
			}).join("")}
			<div class="work-tile"><h3>Cursor</h3><p>Procedural buffer library supporting push/pop data formats, compact encoding workflows, and practical low-level Luau serialization infrastructure.</p>${tags(["Buffers", "Data layout", "Serialization"], "needs")}<button class="ghost-button nav-trigger" data-route="gaps">Needs details</button></div>
		</section>
		<section class="section-heading reveal"><h2>Additional Game Archive</h2><p>Older or supporting games should use compact cards unless they have specific contribution proof, media, and constraints.</p></section>
		<section class="work-grid reveal">
			${["NDA Fighting Game", "Silent Limbo: Reignited", "Stalking", "Solar Escapade", "Puzzled With Friends", "Project Exodus", "Cargo Run", "The Backrooms", "Labyrinth", "Pro Border RP"].map(title => `<div class="work-tile"><h3>${title}</h3><p>Archive placeholder. Add role, dates, one-sentence project description, three contribution bullets, tags, and media only if publicly safe.</p>${tags(["Archive", "Needs proof"], "needs")}</div>`).join("")}
		</section>
	`;
}

function renderLeadership() {
	return `
		<section class="hero reveal">
			<h1 class="hero-title">Production &<br><span class="thin">Leadership</span></h1>
			<p class="hero-thesis">Senior engineering is not only implementation speed. I help teams ship safely by clarifying architecture, reducing release risk, improving communication, documenting standards, and mentoring contributors.</p>
		</section>
		<section class="two-col reveal" style="margin-top:48px">
			<div class="panel"><h2>Release Risk Management</h2>${list(["Write QA notes that explain the feature, intended behavior, risky edges, and exact testing instructions.", "Prefer explicit ownership and communication channels so changes do not disappear into vague responsibility.", "Treat production bugs as process feedback: what invariant failed, who needed to know, and how should future work catch it earlier?"])}</div>
			<div class="panel"><h2>Mentorship & Standards</h2>${list(["Create codebase documentation and style guides that make safe contribution easier for newer engineers.", "Explain architectural decisions through constraints and tradeoffs instead of preference alone.", "Favor simple, inspectable systems that are easier to profile, teach, debug, and extend."])}</div>
			<div class="panel"><h2>Cross-Disciplinary Work</h2>${list(["Translate game-design intent into implementation plans that programmers, artists, QA, and leadership can reason about.", "Use sanitized artifacts such as release-risk templates, bug triage examples, and onboarding notes to show process without exposing private team history.", "Keep player-facing outcomes visible while discussing technical debt and architecture."])}</div>
			<div class="panel"><h2>Artifacts to Add</h2><div class="missing-list"><div class="missing-item"><strong>Needed</strong><span>Sanitized QA checklist.</span></div><div class="missing-item"><strong>Needed</strong><span>Style-guide excerpt or architecture note.</span></div><div class="missing-item"><strong>Needed</strong><span>Bug triage example showing diagnosis, ownership, and release outcome.</span></div></div></div>
		</section>
	`;
}

function renderAbout() {
	return `
		<section class="hero reveal">
			<h1 class="hero-title">About<br><span class="thin">Sona</span></h1>
			<p class="hero-thesis">I am a Roblox gameplay and systems engineer focused on building practical, maintainable, and performant game systems in Luau.</p>
		</section>
		<section class="two-col reveal" style="margin-top:48px">
			<div class="panel"><h2>Engineering Thesis</h2><p>My work sits between gameplay engineering, systems optimization, developer tooling, and production support. I enjoy turning messy constraints into simple, shippable solutions: improving inherited codebases, building reusable tools, tuning player-facing systems, and helping teams move faster without sacrificing reliability.</p><p>My engineering style is influenced by data-oriented design and the belief that simpler systems are easier to ship, debug, teach, and extend.</p></div>
			<div class="panel"><h2>Creative Context</h2><p>Outside of programming, I compose music for games and experimental media. That has shaped how I think about atmosphere, pacing, readability, and player experience.</p>${tags(["Roblox", "Luau", "Gameplay", "Systems", "Tooling", "Performance", "QA"])}</div>
			<div class="panel"><h2>Public Links</h2>${list(["GitHub: SolarScuffle-Bot", "Roblox profile: Sona", "NPA GitHub and Roblox links are included in the header as supporting links."])}<div class="action-row"><a class="ghost-button" href="${LINKS.sonaGithub}" target="_blank" rel="noreferrer">GitHub</a><a class="ghost-button" href="${LINKS.sonaRoblox}" target="_blank" rel="noreferrer">Roblox</a></div></div>
			<div class="panel"><h2>Resume / Contact</h2><p>The public site still needs a downloadable resume PDF and a portfolio-safe contact method. Until those are added, this section should stay visibly marked as unfinished.</p><button class="ghost-button nav-trigger" data-route="gaps">View Missing Items</button></div>
		</section>
	`;
}

function renderGaps() {
	const rows = Object.values(projects).flatMap(p => p.missing.map(item => ({ project: p.title, item })));
	return `
		<section class="hero reveal">
			<h1 class="hero-title">Draft Gaps<br><span class="thin">Before Final</span></h1>
			<p class="hero-thesis">This page collects what the current draft exposes: missing proof, media, metrics, contribution details, and public-safe artifacts.</p>
		</section>
		<section class="two-col reveal" style="margin-top:48px">
			<div class="panel"><h2>Now Filled</h2>${list(["Sona GitHub and Roblox links.", "NPA GitHub and Roblox links.", "Public links for Asylum Life, Eclipsis, Squash, Rocket Spleef, Offset Camera, Reflector, and Depths of Industry.", "WEBP images for main cards and supporting project cards.", "Eclipsis pipe-network optimization diagram and annotated engineering sketch."])}</div>
			<div class="panel"><h2>Highest Priority</h2>${list(["Create the Eclipsis diagrams/charts first because they support the strongest metrics.", "Record Offset Camera and Rocket Spleef videos because game feel is not proven by text.", "Collect Squash adoption or benchmark evidence before using stronger language than 'recognized'.", "Prepare sanitized QA/style-guide artifacts for Asylum Life and Production Leadership.", "Keep Reflector honest as AI-assisted implementation."])}</div>
		</section>
		<section class="section-heading reveal"><h2>Project-Specific Gaps</h2><p>Each item below corresponds to proof that would make the draft safer, more concrete, or more hiring-manager-readable.</p></section>
		<section class="panel reveal"><div class="missing-list">${rows.map(row => `<div class="missing-item"><strong>${escapeHtml(row.project)}</strong><span>${escapeHtml(row.item)}</span></div>`).join("")}</div></section>
	`;
}

function getTemplate(route) {
	if (projects[route]) return renderCaseStudy(route);
	if (route === "work") return renderWork();
	if (route === "leadership") return renderLeadership();
	if (route === "about") return renderAbout();
	if (route === "gaps") return renderGaps();
	return renderHome();
}
function setupReveals() {
	const revealEls = [...document.querySelectorAll(".reveal")];
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		revealEls.forEach(el => el.classList.add("in"));
		return;
	}
	const observer = new IntersectionObserver(entries => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				entry.target.classList.add("in");
				observer.unobserve(entry.target);
			}
		}
	}, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
	revealEls.forEach(el => observer.observe(el));
}
function setupInteractiveElements() {
	for (const cardEl of view.querySelectorAll(".project-card, .work-tile, .panel, .media-box, .mini-card")) {
		cardEl.addEventListener("pointermove", event => {
			const rect = cardEl.getBoundingClientRect();
			cardEl.style.setProperty("--mx", `${event.clientX - rect.left}px`);
			cardEl.style.setProperty("--my", `${event.clientY - rect.top}px`);
		});
	}
	for (const trigger of view.querySelectorAll(".nav-trigger")) {
		trigger.addEventListener("click", () => navigate(trigger.dataset.route));
	}
}
function setNav(route) {
	for (const pill of document.querySelectorAll(".nav-pill")) {
		pill.removeAttribute("aria-current");
		if (pill.dataset.route === route || (projects[route] && pill.dataset.route === "work")) {
			pill.setAttribute("aria-current", "page");
		}
	}
}
function normalizeRoute(raw) {
	const value = (raw || "home").replace(/^#/, "").trim();
	return routes.has(value) ? value : "home";
}
function render(route, replace = false) {
	route = normalizeRoute(route);
	if (activeRoute === route && !replace) return;
	activeRoute = route;
	setNav(route);
	view.classList.add("is-exiting");
	window.setTimeout(() => {
		view.innerHTML = getTemplate(route);
		view.classList.remove("is-exiting");
		view.classList.add("is-entering");
		window.setTimeout(() => view.classList.remove("is-entering"), 380);
		setupReveals();
		setupInteractiveElements();
		window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
		view.focus({ preventScroll: true });
	}, 210);
}
function navigate(route) {
	route = normalizeRoute(route);
	if (normalizeRoute(location.hash) !== route) history.pushState({ route }, "", `#${route}`);
	render(route);
}
window.addEventListener("popstate", () => render(location.hash, true));
window.addEventListener("hashchange", () => render(location.hash));
for (const trigger of document.querySelectorAll(".nav-trigger")) trigger.addEventListener("click", () => navigate(trigger.dataset.route));
render(location.hash || "home", true);
