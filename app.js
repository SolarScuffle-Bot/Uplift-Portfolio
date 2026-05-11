"use strict";

const ASSETS = {
	sona: "assets/Sona.webp",
	npa: "assets/NPA.webp",
	github: "assets/Github.webp",
	roblox: "assets/Roblox.webp",
	asylumLife: "assets/AsylumLife.webp",
	eclipsis: "assets/Eclipsis.webp",
	squash: "assets/Squash.webp",
	rocketSpleef: "assets/RocketSpleef.webp",
	depthsOfIndustry: "assets/DepthsOfIndustry.webp",
	offsetCamera: "assets/OffsetCamera.webp",
	reflector: "assets/Reflector.webp",
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
	depthsOfIndustry: "https://www.roblox.com/games/119768530425232/Depths-of-Industry",
};

const projects = {
	"asylum-life": {
		category: "Gameplay",
		proofPath: "Production credibility",
		title: "Asylum Life",
		cardTitle: "Asylum\nLife webp",
		role: "Gameplay Engineer & Acting Operations Lead",
		status: "Past production work",
		linkLabel: "Roblox Link",
		link: LINKS.asylumLife,
		image: ASSETS.asylumLife,
		imageClass: "cover",
		summary: "Front-page Roblox production work across gameplay systems, GUI-driven features, QA support, live debugging, and temporary operations coordination.",
		thesis: "Asylum Life proves that I can enter a live Roblox production environment, ship player-facing systems, reduce release risk, and improve engineering communication under weekly update pressure.",
		roleText: "I contributed as a gameplay engineer while temporarily helping stabilize operations during a staffing gap. My work sat between implementation, debugging, QA communication, technical guidance, and release coordination.",
		contributions: [
			"Built and supported GUI-driven chores, popup-style minigames, leaderboards, doors, elevators, and live-service gameplay tasks.",
			"Used ScriptProfiler, MicroProfiler, runtime diagnostics, and creator analytics to investigate reliability and performance issues.",
			"Improved release safety through QA notes, testing instructions, style guidance, and clearer cross-disciplinary communication.",
			"Helped allocate work, mentor contributors, and reduce production ambiguity while still contributing directly as an engineer."
		],
		constraints: [
			"Weekly live-update expectations with player-facing regression risk.",
			"Inherited systems that required cautious debugging rather than broad rewrites.",
			"Gameplay, GUI, QA, and operations needs competing for limited engineering time."
		],
		decisions: [
			"Prioritized targeted fixes, release clarity, and testable behavior over speculative cleanups.",
			"Documented intent and testing steps so changes could be evaluated by testers and non-programmers.",
			"Used profiling and diagnostics to turn vague live issues into concrete engineering tasks."
		],
		results: [
			"Supported weekly delivery across live gameplay and GUI-facing features.",
			"Improved release safety through clearer QA/process artifacts.",
			"Provided temporary operations support without dropping engineering ownership."
		],
		media: [
			{ title: "Minigames", kind: "video", caption: "Add a 30–60 second clip showing GUI-driven chores, task flow, and player-facing polish." },
			{ title: "Emotes", kind: "video", caption: "Add a clip or screenshots showing emote selection, UI behavior, and release-ready feature polish." }
		],
		tags: ["Live production", "Gameplay/UI", "QA", "Profiler diagnostics", "Operations"],
		demonstrates: ["Live Roblox production experience", "Release-safe engineering", "Player-facing feature work", "Leadership under pressure"],
		gaps: ["Minigame/chore clip", "Feature screenshots", "Sanitized QA checklist", "Style guide excerpt"]
	},
	"eclipsis": {
		category: "Systems",
		proofPath: "Systems depth",
		title: "Eclipsis",
		cardTitle: "Eclipsis\nwebp",
		role: "Active Systems Engineer & Game Designer",
		status: "Active",
		linkLabel: "Roblox Link",
		link: LINKS.eclipsis,
		image: ASSETS.eclipsis,
		imageClass: "cover",
		summary: "Legacy systems optimization and game-design support for a long-running Roblox strategy game.",
		thesis: "Eclipsis is the strongest systems-engineering pillar: inherited-system modernization, measurable optimization, technical-debt reduction, and design-aware engineering.",
		roleText: "I work on Eclipsis as an active systems engineer and game designer, focusing on performance-critical inherited systems, architecture modernization, and changes that respect the game’s existing strategic identity.",
		contributions: [
			"Refactored legacy pipe-networking behavior from effectively explosive update scaling toward near constant-time behavior under normal gameplay conditions.",
			"Reworked terrain generation and rendering, reducing load time from roughly 24 seconds to roughly 9 seconds.",
			"Reduced draw calls from roughly 3000 to roughly 900 through rendering and generation changes.",
			"Modernized Rojo usage, repository organization, coding expectations, and GitHub QA standards."
		],
		constraints: [
			"Long-running strategy game with inherited architecture and production risk.",
			"Optimization work had to preserve design intent and player expectations.",
			"Performance wins needed to come from removing redundant work, not hiding cost behind heuristics."
		],
		decisions: [
			"Focused on the highest-leverage repeated work first: pipe updates, terrain generation, rendering, and repository workflow.",
			"Used diagrams and profiling-style reasoning to make complexity visible before refactoring.",
			"Modernized engineering process alongside code so future changes are easier to review and ship."
		],
		results: [
			"Load time reduced from ~24s to ~9s.",
			"Draw calls reduced from ~3000 to ~900.",
			"Pipe-network updates moved away from runaway scaling toward localized, practical behavior."
		],
		media: [
			{ title: "Pipe Scaling", kind: "diagram", caption: "Add old-vs-new pipe-networking diagram showing what repeated work was removed." },
			{ title: "Rendering", kind: "chart", caption: "Add before/after profiler captures for load time and draw-call reduction." }
		],
		tags: ["~24s → ~9s", "~3000 → ~900", "Legacy systems", "Rojo", "Optimization"],
		demonstrates: ["Senior systems optimization", "Technical-debt reduction", "Design-aware refactoring", "Measurable impact"],
		gaps: ["Before/after chart", "Pipe system diagram", "Terrain/rendering notes", "QA modernization example"]
	},
	"offset-camera": {
		category: "Tooling",
		proofPath: "Gameplay feel",
		title: "Offset Camera",
		cardTitle: "Offset\nCamera\nwebp",
		role: "Creator & Maintainer",
		status: "Public developer resource",
		linkLabel: "DevForum Link",
		link: LINKS.offsetCamera,
		image: ASSETS.offsetCamera,
		imageClass: "icon",
		summary: "A modular Roblox camera extension for FPS, shift-lock, over-the-shoulder behavior, and cross-platform comfort.",
		thesis: "Offset Camera is the direct game-feel proof point: camera behavior, input responsiveness, player comfort, and reusable developer integration.",
		roleText: "I created and maintain the resource, with emphasis on preserving familiar Roblox camera behavior while making offset camera modes practical for real games.",
		contributions: [
			"Created a drop-in camera extension that integrates with default Roblox camera expectations.",
			"Supported FPS, shift-lock, over-the-shoulder, vehicle, and focus-offset use cases.",
			"Designed the API for practical developer adoption rather than a one-off demo scene.",
			"Considered player comfort, responsiveness, avatar behavior, and cross-platform use."
		],
		constraints: [
			"Camera systems are felt immediately when they are wrong.",
			"The implementation must coexist with Roblox’s default camera stack instead of fighting it.",
			"PC, mobile, console, avatar type, and shift-lock behavior create edge cases."
		],
		decisions: [
			"Treat comfort and readability as engineering requirements, not only UX polish.",
			"Keep integration minimal so developers can adopt it without rewriting camera code.",
			"Prefer predictable behavior over clever camera effects that only work in narrow cases."
		],
		results: [
			"Public DevForum resource with clear use cases.",
			"Reusable camera behavior for FPS, shift-lock, over-the-shoulder, and focus offsets.",
			"Supports the portfolio’s gameplay-feel and developer-usability story."
		],
		media: [
			{ title: "Camera Feel", kind: "video", caption: "Add clips for FPS, shift-lock, over-the-shoulder, and focus-offset behavior." },
			{ title: "Integration", kind: "code", caption: "Add a small setup snippet or developer integration diagram." }
		],
		tags: ["Camera systems", "Game feel", "Input", "Cross-platform", "DevForum"],
		demonstrates: ["Player comfort", "Responsive controls", "Reusable gameplay tooling", "Developer empathy"],
		gaps: ["FPS clip", "Shift-lock clip", "Over-the-shoulder clip", "Integration snippet"]
	},
	"squash": {
		category: "Tooling",
		proofPath: "Open-source credibility",
		title: "Squash",
		cardTitle: "Squash\nwebp",
		role: "Creator & Roblox Open Source Software Maintainer",
		status: "Public documentation site",
		linkLabel: "Docs Link",
		link: LINKS.squash,
		image: ASSETS.squash,
		imageClass: "icon",
		summary: "A recognized Luau serialization/deserialization library for compact Roblox data workflows.",
		thesis: "Squash proves infrastructure-level Luau work: compact data encoding, API design, documentation, benchmarks, and maintainership.",
		roleText: "I created and maintain Squash as a practical SerDes library for Roblox developers working with networking, persistence, and compact data representation.",
		contributions: [
			"Created and maintain a Luau SerDes library focused on compact, practical data encoding.",
			"Designed APIs for binary/data-layout work while keeping constraints visible and inspectable.",
			"Wrote documentation and examples so developers can adopt the library without direct support.",
			"Treat benchmarks, edge cases, and tradeoffs as part of the library’s public API story."
		],
		constraints: [
			"Serialization failures are correctness bugs, not cosmetic issues.",
			"Roblox developers need practical APIs that do not hide important data-layout constraints.",
			"Networking and persistence contexts reward compactness, but not at the cost of readability or correctness."
		],
		decisions: [
			"Expose data-layout intent clearly instead of making the library feel magical.",
			"Make examples and documentation part of the product, not an afterthought.",
			"Use recognition evidence conservatively unless adoption metrics support stronger claims."
		],
		results: [
			"Public documentation site for a reusable Luau infrastructure library.",
			"Supports compact encoding workflows for networking and persistence.",
			"Strengthens open-source credibility beyond game-specific work."
		],
		media: [
			{ title: "API Example", kind: "code", caption: "Add a current docs snippet showing compact serialization in a practical workflow." },
			{ title: "Adoption", kind: "chart", caption: "Add stars, community references, package usage, benchmarks, or projects using Squash." }
		],
		tags: ["Luau", "Serialization", "Buffers", "Docs", "Open source"],
		demonstrates: ["Infrastructure design", "API design", "Documentation quality", "Maintainership"],
		gaps: ["GitHub stars", "Package downloads", "Benchmark comparison", "Community references"]
	},
	"rocket-spleef": {
		category: "Gameplay",
		proofPath: "Original game ownership",
		title: "Rocket Spleef",
		cardTitle: "Rocket\nSpleef\nwebp",
		role: "Creator / Lead Developer",
		status: "Public Roblox experience",
		linkLabel: "Roblox Link",
		link: LINKS.rocketSpleef,
		image: ASSETS.rocketSpleef,
		imageClass: "cover",
		summary: "Original Roblox game built around readable high-chaos arena play and server-authoritative rockets.",
		thesis: "Rocket Spleef proves original game ownership, product instinct, server-authoritative design, and readable casual-competitive chaos.",
		roleText: "I created the game around a simple sticky loop: enter quickly, understand the threat, make explosive decisions, recover fast, and keep the central mechanic server-owned.",
		contributions: [
			"Designed a casual competitive loop around fast entry, clear pressure, and rapid round recovery.",
			"Built rocket outcomes around server authority so the central mechanic remains exploit-aware.",
			"Tuned high-chaos interactions so players can understand wins, losses, escapes, and mistakes.",
			"Planned expression, retention, monetization, and progression around a casual competitive audience."
		],
		constraints: [
			"The game needs to be readable even when many players are creating chaos at once.",
			"Rockets must feel responsive without trusting critical outcomes to the client.",
			"A casual competitive loop needs low UI friction and quick recovery from losses."
		],
		decisions: [
			"Keep the core loop simple enough to understand in seconds.",
			"Make server authority part of the mechanic’s foundation, not an anti-cheat patch later.",
			"Prioritize readable consequences over visual noise for its own sake."
		],
		results: [
			"Public original Roblox game with a clear central mechanic.",
			"Supports server-authoritative gameplay and product-thinking proof.",
			"Adds independent game ownership to the portfolio’s production/system/tooling pillars."
		],
		media: [
			{ title: "Gameplay Loop", kind: "video", caption: "Add a 30-second clip showing round pacing, arena pressure, and readable chaos." },
			{ title: "Authority", kind: "diagram", caption: "Add a client-input → server-validation → replicated outcome diagram." }
		],
		tags: ["Original game", "Server authority", "Competitive loop", "Game feel", "Product"],
		demonstrates: ["Original game direction", "Exploit-aware mechanics", "Casual competitive design", "Player motivation"],
		gaps: ["Gameplay clip", "Arena clip", "Server authority diagram", "Progression/monetization notes"]
	},
	"reflector": {
		category: "Tooling",
		proofPath: "Supporting technical breadth",
		title: "Reflector",
		cardTitle: "Reflector\nwebp",
		role: "Creator & Maintainer, AI-Assisted Implementation",
		status: "Public Studio plugin",
		linkLabel: "DevForum Link",
		link: LINKS.reflector,
		image: ASSETS.reflector,
		imageClass: "icon",
		summary: "AI-assisted Roblox Studio plugin for reflection and transform workflows.",
		thesis: "Reflector is presented honestly as AI-assisted tooling: I owned problem definition, transform behavior, algorithmic direction, edge-case resolution, validation, and product behavior.",
		roleText: "The implementation was AI-assisted. My ownership was in directing the tool, defining correct behavior, resolving edge cases, validating output, and making the plugin useful for creator workflows.",
		contributions: [
			"Directed reflection behavior for objects, rigs, meshes, accessories, pivots, decals, and animation data.",
			"Specified transform/math requirements and diagnosed edge cases from real Studio test scenes.",
			"Validated final behavior against creator workflow expectations rather than treating implementation as sufficient by itself.",
			"Maintained honest public framing around AI-assisted implementation."
		],
		constraints: [
			"Reflection is deceptively hard across pivots, rigs, meshes, accessories, decals, animations, and Studio selection behavior.",
			"The portfolio must not imply that every line was hand-written.",
			"Correctness depends on creator-visible behavior, not only code structure."
		],
		decisions: [
			"Frame the project as technical direction and validation, not hand-written implementation proof.",
			"Treat edge-case diagnosis as the main evidence of engineering judgment.",
			"Use public wording that says AI-assisted rather than informal terms like vibecoded."
		],
		results: [
			"Public Studio plugin with a clear creator workflow.",
			"Demonstrates transform reasoning, tooling direction, and validation discipline.",
			"Supports the technical breadth story without replacing stronger proof pillars."
		],
		media: [
			{ title: "Workflow", kind: "video", caption: "Add a clip showing selection, plane movement, reflection, and final result." },
			{ title: "Edge Cases", kind: "diagram", caption: "Add a concise visual sequence of rigs, decals, accessories, and mesh cases handled." }
		],
		tags: ["AI-assisted", "Studio plugin", "Transform math", "Validation", "Creator workflow"],
		demonstrates: ["Tooling direction", "AI-assisted development judgment", "Edge-case diagnosis", "Creator empathy"],
		gaps: ["Workflow clip", "Edge-case gallery", "Public wording review", "Known-limitations note"]
	},
	"depths-of-industry": {
		category: "Gameplay",
		proofPath: "Supporting game breadth",
		title: "Depths of Industry",
		cardTitle: "Depths of\nIndustry\nwebp",
		role: "Creator / Systems Designer",
		status: "Public Roblox experience",
		linkLabel: "Roblox Link",
		link: LINKS.depthsOfIndustry,
		image: ASSETS.depthsOfIndustry,
		imageClass: "cover",
		summary: "Supporting game-work example for systems design, resource loops, industrial mood, and Roblox project ownership.",
		thesis: "Depths of Industry belongs as supporting game history rather than a main proof pillar, but it broadens the portfolio through systems framing, resource loops, and atmosphere.",
		roleText: "I use this project as a compact example of independent game direction: turning an industrial premise into playable systems, goals, and mood.",
		contributions: [
			"Explored industrial progression, resource loops, and readable player goals.",
			"Built the project as a compact proof of independent Roblox development and systems framing.",
			"Used the project to support the broader portfolio by showing range beyond one genre or production context."
		],
		constraints: [
			"This is a supporting proof point and should not compete with Asylum Life, Eclipsis, Squash, Offset Camera, or Rocket Spleef.",
			"The strongest public value is systems framing and visual/gameplay breadth."
		],
		decisions: [
			"Keep the page compact and honest about its role in the portfolio.",
			"Use it to show breadth, not inflate it into a primary case study."
		],
		results: [
			"Adds visible game-work range beyond the featured pillars.",
			"Supports resource-loop and systems-design discussion.",
			"Provides a public Roblox link for additional context."
		],
		media: [
			{ title: "Game Loop", kind: "video", caption: "Add a short clip showing the central industrial loop and player objective." },
			{ title: "Systems", kind: "diagram", caption: "Add a small resource-loop or progression diagram." }
		],
		tags: ["Original work", "Resource loops", "Systems", "Atmosphere", "Breadth"],
		demonstrates: ["Independent game ownership", "Systems framing", "Genre range", "Concept-to-prototype execution"],
		gaps: ["Loop clip", "Resource diagram", "Current status note"]
	}
};

const homeColumns = [
	{
		title: "Gameplay",
		main: "asylum-life",
		summary: "Live Roblox production, player-facing systems, readable game loops, and release-safe implementation.",
		mini: ["rocket-spleef", "depths-of-industry"]
	},
	{
		title: "Systems",
		main: "eclipsis",
		summary: "Inherited-system optimization, technical-debt reduction, data-oriented reasoning, and measurable performance wins.",
		centerLink: { route: "technical", label: "Technical Expertise" }
	},
	{
		title: "Tooling",
		main: "squash",
		summary: "Luau infrastructure, open-source libraries, Studio tools, camera systems, and developer workflow design.",
		mini: ["offset-camera", "reflector"]
	}
];

const proofPath = ["asylum-life", "eclipsis", "offset-camera", "squash", "rocket-spleef"];
const supportingWork = ["reflector", "depths-of-industry"];

const technicalGroups = [
	{
		title: "Performance & Legacy Systems",
		description: "Profiling-led optimization, redundant-work removal, legacy refactors, and production-safe modernization.",
		projects: ["eclipsis", "asylum-life"],
		evidence: ["~24s → ~9s load time", "~3000 → ~900 draw calls", "Runtime diagnostics", "Production constraints"]
	},
	{
		title: "Gameplay Feel & Player Readability",
		description: "Camera behavior, readable chaos, cross-platform comfort, and player-facing implementation.",
		projects: ["offset-camera", "rocket-spleef", "asylum-life"],
		evidence: ["Camera feel", "Shift-lock/FPS support", "Round readability", "GUI-driven tasks"]
	},
	{
		title: "Server Authority & Data Workflows",
		description: "Exploit-aware mechanics, compact serialization, networking/persistence workflows, and correctness-first data design.",
		projects: ["rocket-spleef", "squash"],
		evidence: ["Server-authoritative rockets", "Luau SerDes", "Compact encoding", "Persistence/networking use cases"]
	},
	{
		title: "Developer Tools & Creator Workflow",
		description: "Reusable libraries, Studio plugins, public resources, documentation, and workflow-focused UX.",
		projects: ["squash", "offset-camera", "reflector"],
		evidence: ["Public docs", "DevForum resources", "Studio workflow", "API design"]
	},
	{
		title: "Production Reliability",
		description: "QA clarity, release-risk management, engineering notes, mentorship, and cross-disciplinary communication.",
		projects: ["asylum-life", "eclipsis"],
		evidence: ["QA checklists", "Style guidance", "GitHub standards", "Operations support"]
	}
];

const routes = new Map([
	["home", renderHome],
	["work", renderWork],
	["technical", renderTechnical],
	["leadership", renderLeadership],
	["about", renderAbout],
	["gaps", renderGaps],
]);

for (const id of Object.keys(projects)) {
	routes.set(id, () => renderProject(projects[id]));
}

const main = document.querySelector("#main");
let currentRoute = "";

function escapeHtml(value) {
	return String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}

function routeFromHash() {
	const raw = location.hash.replace(/^#\/?/, "").trim();
	return raw || "home";
}

function go(route) {
	if (!routes.has(route)) route = "home";
	if (routeFromHash() === route) {
		render(route);
		return;
	}
	location.hash = route;
}

function render(route) {
	if (!routes.has(route)) route = "home";
	if (route === currentRoute && main.innerHTML.length > 0) return;
	currentRoute = route;
	document.body.dataset.route = route;
	setNav(route);

	main.classList.add("is-exiting");
	window.setTimeout(() => {
		main.innerHTML = routes.get(route)();
		bindRouteTriggers(main);
		bindPointerGlow(main);
		main.classList.remove("is-exiting");
		main.classList.add("is-entering");
		window.setTimeout(() => main.classList.remove("is-entering"), 380);
		main.focus({ preventScroll: true });
	}, 150);
}

function setNav(route) {
	document.querySelectorAll(".nav-pill[data-route]").forEach((pill) => {
		pill.removeAttribute("aria-current");
		const pillRoute = pill.dataset.route;
		if (pillRoute === route || (projects[route] && pillRoute === "work")) {
			pill.setAttribute("aria-current", "page");
		}
	});
}

function bindRouteTriggers(root = document) {
	root.querySelectorAll(".nav-trigger[data-route]").forEach((element) => {
		element.addEventListener("click", () => go(element.dataset.route));
	});
}

function bindPointerGlow(root = document) {
	root.querySelectorAll(".hoverable").forEach((element) => {
		element.addEventListener("pointermove", (event) => {
			const rect = element.getBoundingClientRect();
			element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
			element.style.setProperty("--my", `${event.clientY - rect.top}px`);
		});
	});
}

function tagList(items, limit = items.length) {
	return `<div class="tag-list">${items.slice(0, limit).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`;
}

function projectCard(id, variant = "large") {
	const project = projects[id];
	const isSmall = variant === "small";
	return `
		<button class="project-card ${isSmall ? "project-card-small" : "project-card-large"} hoverable nav-trigger" data-route="${escapeHtml(id)}" aria-label="Open ${escapeHtml(project.title)} case study">
			<span class="project-image-wrap ${escapeHtml(project.imageClass)}">
				<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy" />
			</span>
			<span class="project-card-overlay">
				<span>${escapeHtml(project.proofPath)}</span>
				<small>open case</small>
			</span>
		</button>
		<div class="project-label ${isSmall ? "project-label-small" : ""}">${escapeHtml(project.title)}</div>
	`;
}

function statRail() {
	const stats = ["6+ years Roblox", "Front-page production", "~24s → ~9s load", "~3000 → ~900 draw calls", "Creator of Squash", "Live QA + tooling"];
	return `<div class="stat-rail" aria-label="Portfolio proof strip">${stats.map((stat) => `<span>${escapeHtml(stat)}</span>`).join("")}</div>`;
}

function renderHome() {
	return `
		<section class="home-page" aria-label="Portfolio home">
			<section class="home-proof-strip hoverable" aria-label="Condensed portfolio proof">
				<p>Gameplay feel · systems optimization · Luau tooling · live production reliability</p>
				${statRail()}
			</section>

			<div class="home-columns">
				${homeColumns.map((column) => `
					<section class="home-column home-column-${escapeHtml(column.title.toLowerCase())}">
						<h2 class="section-title">${escapeHtml(column.title)}</h2>
						<div class="main-project">${projectCard(column.main, "large")}</div>
						<button class="summary-copy hoverable nav-trigger" data-route="${escapeHtml(column.main)}">${escapeHtml(column.summary)}</button>
						${column.mini ? `
							<div class="mini-project-row">
								${column.mini.map((id) => `<div class="mini-project">${projectCard(id, "small")}</div>`).join("")}
							</div>
						` : ""}
						${column.centerLink ? `
							<button class="technical-link nav-trigger hoverable" data-route="${escapeHtml(column.centerLink.route)}">${escapeHtml(column.centerLink.label)}</button>
						` : ""}
					</section>
				`).join("")}
			</div>
		</section>
	`;
}

function renderProject(project) {
	return `
		<article class="project-page">
			<header class="project-top-wire">
				<div class="project-description-card hoverable">
					<p>${escapeHtml(project.summary)}</p>
					${tagList([project.category, project.status, project.proofPath], 3)}
				</div>

				<div class="top-project-card">
					<a class="tiny-card linked-project-card hoverable" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(project.title)} external link">
						<span class="card-link-hint">${escapeHtml(project.linkLabel)}</span>
						<span class="project-image-wrap ${escapeHtml(project.imageClass)}">
							<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" />
						</span>
					</a>
					<div class="project-label project-label-tiny">${escapeHtml(project.title)}</div>
				</div>
			</header>

			<h1 class="project-role-title">${escapeHtml(project.role)}</h1>

			<section class="case-layout">
				<section class="case-primary hoverable">
					<p class="eyebrow">${escapeHtml(project.proofPath)}</p>
					<h2>${escapeHtml(project.title)}</h2>
					<p class="case-thesis">${escapeHtml(project.thesis)}</p>
					<p>${escapeHtml(project.roleText)}</p>
					<h3>My Contributions</h3>
					<ul>${project.contributions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
				</section>

				<section class="case-media-stack">
					${project.media.map((media) => `
						<section class="media-card hoverable">
							<div class="media-heading-row">
								<h2>${escapeHtml(media.title)}</h2>
								<span>${escapeHtml(media.kind)}</span>
							</div>
							<div class="video-placeholder" aria-label="Media placeholder for ${escapeHtml(media.title)}">
								<div class="play-triangle"></div>
							</div>
							<p class="media-caption">${escapeHtml(media.caption)}</p>
						</section>
					`).join("")}
				</section>

				<aside class="case-sidebar">
					<section class="proof-module hoverable">
						<h2>Results / Impact</h2>
						<ul>${project.results.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
					</section>
					<section class="proof-module hoverable">
						<h2>What This Demonstrates</h2>
						${tagList(project.demonstrates)}
					</section>
				</aside>
			</section>

			<section class="case-detail-grid">
				<section class="detail-module hoverable">
					<h2>Constraints</h2>
					<ul>${project.constraints.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
				</section>
				<section class="detail-module hoverable">
					<h2>Technical Decisions</h2>
					<ul>${project.decisions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
				</section>
				<section class="detail-module hoverable">
					<h2>Need To Add</h2>
					<ul>${project.gaps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
				</section>
			</section>
		</article>
	`;
}

function renderWork() {
	return `
		<section class="work-page">
			<header class="route-heading">
				<p class="eyebrow">Curated proof path</p>
				<h1 class="project-role-title">Featured Work</h1>
				<p class="center-copy">The same portfolio reorganized for fast hiring review: production credibility first, then systems depth, gameplay feel, open-source infrastructure, original game ownership, and supporting breadth.</p>
			</header>

			<section class="proof-path" aria-label="Featured proof path">
				${proofPath.map((id, index) => {
					const p = projects[id];
					return `
						<button class="proof-card hoverable nav-trigger" data-route="${escapeHtml(id)}">
							<span class="proof-number">${String(index + 1).padStart(2, "0")}</span>
							<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" />
							<span class="proof-copy">
								<small>${escapeHtml(p.proofPath)}</small>
								<strong>${escapeHtml(p.title)}</strong>
								<span>${escapeHtml(p.summary)}</span>
								${tagList(p.tags, 4)}
							</span>
						</button>
					`;
				}).join("")}
			</section>

			<section class="route-heading route-heading-small">
				<h2>Supporting Work</h2>
				<p>Projects that broaden the portfolio without replacing the strongest proof pillars.</p>
			</section>
			<section class="support-grid">
				${supportingWork.map((id) => {
					const p = projects[id];
					return `
						<button class="support-card hoverable nav-trigger" data-route="${escapeHtml(id)}">
							<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" />
							<h2>${escapeHtml(p.title)}</h2>
							<p>${escapeHtml(p.summary)}</p>
						</button>
					`;
				}).join("")}
			</section>
		</section>
	`;
}

function renderTechnical() {
	return `
		<section class="technical-page">
			<header class="route-heading">
				<p class="eyebrow">Different view of the same evidence</p>
				<h1 class="project-role-title">Technical Expertise</h1>
				<p class="center-copy">Systems optimization, gameplay feel, Luau infrastructure, Studio tooling, server-authoritative gameplay, data layout, and production-safe engineering.</p>
			</header>
			<section class="technical-map">
				${technicalGroups.map((group) => `
					<section class="technical-node hoverable">
						<h2>${escapeHtml(group.title)}</h2>
						<p>${escapeHtml(group.description)}</p>
						<div class="project-chip-row">
							${group.projects.map((id) => `<button class="project-chip nav-trigger" data-route="${escapeHtml(id)}">${escapeHtml(projects[id].title)}</button>`).join("")}
						</div>
						${tagList(group.evidence)}
					</section>
				`).join("")}
			</section>
		</section>
	`;
}

function renderLeadership() {
	const panels = [
		{
			title: "Release Risk Management",
			body: "I write QA notes that explain the feature, intended behavior, risky edges, and exact testing instructions so testers and non-programmers can evaluate changes before they become live regressions.",
			items: ["QA checklists", "Testing instructions", "Profiler-backed diagnosis", "Risk-first communication"]
		},
		{
			title: "Mentorship & Standards",
			body: "I make contribution safer by turning implicit expectations into engineering notes, style guidance, architecture explanations, and review principles.",
			items: ["Style guides", "Architecture notes", "Code review principles", "Onboarding help"]
		},
		{
			title: "Cross-Disciplinary Translation",
			body: "I connect game design, engineering, art, QA, and production by explaining tradeoffs through player outcomes, constraints, invariants, and release risk.",
			items: ["Design intent", "Engineering plans", "Artist support", "Async clarity"]
		},
		{
			title: "Simple Systems Bias",
			body: "My default preference is simple, inspectable, data-oriented systems that are easier to ship, debug, profile, teach, and extend under live production constraints.",
			items: ["Data-oriented design", "Minimal state", "Observable behavior", "Maintainability"]
		}
	];
	return `
		<section class="text-page leadership-page">
			<header class="route-heading">
				<p class="eyebrow">Why senior means more than coding</p>
				<h1 class="project-role-title">Production & Leadership</h1>
				<p class="center-copy">I help teams ship safely by clarifying architecture, reducing release risk, improving communication, documenting standards, and mentoring contributors.</p>
			</header>
			<div class="leadership-grid">
				${panels.map((panel) => `
					<section class="leadership-panel hoverable">
						<h2>${escapeHtml(panel.title)}</h2>
						<p>${escapeHtml(panel.body)}</p>
						${tagList(panel.items)}
					</section>
				`).join("")}
			</div>
			<section class="artifact-strip hoverable">
				<h2>Artifacts to make this page stronger</h2>
				<p>Sanitized QA checklist, release-risk template, style guide excerpt, architecture note, bug triage example, code review principles, debugging timeline, and onboarding note.</p>
			</section>
		</section>
	`;
}

function renderAbout() {
	return `
		<section class="text-page about-page">
			<div class="about-layout">
				<img class="about-mark" src="${escapeHtml(ASSETS.sona)}" alt="Sona mark" />
				<section class="about-copy hoverable">
					<p class="eyebrow">About</p>
					<h1 class="project-role-title">Senior Roblox Gameplay & Systems Engineer</h1>
					<p>I am Sona, a Roblox gameplay and systems engineer focused on building practical, maintainable, and performant game systems in Luau.</p>
					<p>My work sits between gameplay engineering, systems optimization, developer tooling, and production support. I enjoy turning messy constraints into simple, shippable solutions: improving inherited codebases, building reusable tools, tuning player-facing systems, and helping teams move faster without sacrificing reliability.</p>
					<p>My engineering style is influenced by data-oriented design and the belief that simpler systems are easier to ship, debug, teach, and extend.</p>
					<p>Outside of programming, I compose music for games and experimental media, which shapes how I think about atmosphere, pacing, and player experience.</p>
					<div class="about-actions">
						<a href="${escapeHtml(LINKS.sonaGithub)}" target="_blank" rel="noreferrer">GitHub</a>
						<a href="${escapeHtml(LINKS.sonaRoblox)}" target="_blank" rel="noreferrer">Roblox</a>
						<button class="nav-trigger" data-route="work">Featured Work</button>
					</div>
				</section>
			</div>
		</section>
	`;
}

function renderGaps() {
	const globalGaps = [
		{ title: "Eclipsis Case Study", body: "Add before/after charts, pipe-networking diagrams, terrain/rendering notes, and exact screenshots supporting the strongest performance metrics." },
		{ title: "Game Feel Video", body: "Offset Camera and Rocket Spleef need short clips. These should be visible because game feel is hard to prove with text alone." },
		{ title: "Squash Proof", body: "Add GitHub stars, package usage, community references, benchmark comparisons, or real adoption evidence before using stronger wording than recognized." },
		{ title: "Asylum Life Artifacts", body: "Add a minigame/chore clip, feature screenshots, sanitized QA checklist, and style-guide excerpt." },
		{ title: "Reflector Honesty", body: "Keep AI-assisted framing. Add a workflow clip, edge-case gallery, and known-limitations note." },
		{ title: "Testimonials", body: "Keep only professional quotes about reliability, systems skill, low-bug output, polish, mentorship, and calm problem-solving." }
	];
	return `
		<section class="gaps-page">
			<header class="route-heading">
				<p class="eyebrow">Draft review</p>
				<h1 class="project-role-title">What Still Needs Proof</h1>
				<p class="center-copy">The site is structured as a full portfolio draft, but these artifacts decide how strong the final hiring-manager version becomes.</p>
			</header>
			<section class="gap-grid">
				${globalGaps.map((gap) => `
					<section class="gap-card hoverable">
						<h2>${escapeHtml(gap.title)}</h2>
						<p>${escapeHtml(gap.body)}</p>
					</section>
				`).join("")}
			</section>
			<section class="gap-matrix hoverable">
				<h2>Per-project missing media</h2>
				<div class="gap-matrix-list">
					${Object.values(projects).map((project) => `
						<div>
							<strong>${escapeHtml(project.title)}</strong>
							<span>${escapeHtml(project.gaps.join(" / "))}</span>
						</div>
					`).join("")}
				</div>
			</section>
		</section>
	`;
}

bindRouteTriggers(document);
window.addEventListener("hashchange", () => render(routeFromHash()));
render(routeFromHash());
