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
		title: "Asylum Life",
		cardTitle: "Asylum\nLife webp",
		role: "Gameplay Engineer & Acting Operations Lead",
		linkLabel: "Roblox Link",
		link: LINKS.asylumLife,
		image: ASSETS.asylumLife,
		imageClass: "cover",
		description: "Front-page Roblox production work across gameplay systems, GUI-driven features, QA support, live debugging, and temporary operations coordination.",
		primaryText: "Joined during a high-pressure production period with weekly update expectations and inherited reliability risks. I supported player-facing feature delivery, helped stabilize release practices, wrote engineering guidance, improved QA communication, and temporarily helped coordinate operations while still contributing as an engineer.",
		bullets: [
			"Built and supported GUI-driven chores, popup-style minigames, leaderboards, doors, elevators, and live-service gameplay tasks.",
			"Used ScriptProfiler, MicroProfiler, runtime diagnostics, and creator analytics to investigate live reliability and performance issues.",
			"Improved release safety with QA checklists, testing instructions, style guidance, and clearer cross-discipline communication.",
			"Helped allocate work, mentor contributors, and reduce production ambiguity during a temporary staffing gap."
		],
		media: [
			{ title: "Minigames", caption: "Add a 30–60 second clip showing GUI-driven chores, task flow, and player-facing polish." },
			{ title: "Emotes", caption: "Add a clip or screenshots showing emote selection, UI behavior, and release-ready feature polish." }
		],
		proof: ["Live production", "Weekly releases", "Gameplay/UI systems", "QA discipline", "Operations support"]
	},
	"eclipsis": {
		category: "Systems",
		title: "Eclipsis",
		cardTitle: "Eclipsis\nwebp",
		role: "Active Systems Engineer & Game Designer",
		linkLabel: "Roblox Link",
		link: LINKS.eclipsis,
		image: ASSETS.eclipsis,
		imageClass: "cover",
		description: "Legacy systems optimization and game-design support for a long-running Roblox strategy game.",
		primaryText: "Eclipsis is the strongest systems-engineering proof point: inherited-system modernization, measurable optimization, technical-debt reduction, production-aware refactoring, and design-conscious engineering. My work focused on improving the systems that most affected load time, rendering cost, and maintainability without erasing the game’s strategic identity.",
		bullets: [
			"Refactored legacy pipe-networking behavior from effectively explosive update scaling toward near constant-time behavior under normal gameplay conditions.",
			"Reworked terrain generation and rendering, reducing load time from roughly 24 seconds to roughly 9 seconds.",
			"Reduced draw calls from roughly 3000 to roughly 900 through rendering and generation changes.",
			"Modernized Rojo usage, repository organization, coding expectations, and GitHub QA standards."
		],
		media: [
			{ title: "Pipe Scaling", caption: "Add old-vs-new pipe-networking diagram showing what repeated work was removed." },
			{ title: "Rendering", caption: "Add before/after profiler captures for load time and draw calls." }
		],
		proof: ["~24s → ~9s load time", "~3000 → ~900 draw calls", "Legacy modernization", "Profiling", "Design-aware optimization"]
	},
	"squash": {
		category: "Tooling",
		title: "Squash",
		cardTitle: "Squash\nwebp",
		role: "Creator & Roblox Open Source Software Maintainer",
		linkLabel: "Docs Link",
		link: LINKS.squash,
		image: ASSETS.squash,
		imageClass: "icon",
		description: "A recognized Luau serialization/deserialization library for compact Roblox data workflows.",
		primaryText: "Squash proves infrastructure-level Luau work: compact data encoding, API design, documentation, benchmarks, and maintainership. It is designed for Roblox developers who need predictable serialization for networking, persistence, and low-level data layout without turning correctness-critical code into a black box.",
		bullets: [
			"Created and maintain a Luau SerDes library focused on compact, practical data encoding.",
			"Designed developer-facing APIs for binary/data-layout work while keeping constraints visible and inspectable.",
			"Wrote documentation and examples so developers can adopt the library without direct support.",
			"Treat benchmarks, edge cases, and tradeoffs as part of the library’s public API story."
		],
		media: [
			{ title: "API Example", caption: "Add a current docs snippet showing compact serialization in a small practical workflow." },
			{ title: "Adoption", caption: "Add stars, community references, package usage, benchmarks, or projects using Squash." }
		],
		proof: ["Luau infrastructure", "Serialization", "API design", "Documentation", "Open source"]
	},
	"rocket-spleef": {
		category: "Gameplay",
		title: "Rocket Spleef",
		cardTitle: "Rocket\nSpleef\nwebp",
		role: "Creator / Lead Developer",
		linkLabel: "Roblox Link",
		link: LINKS.rocketSpleef,
		image: ASSETS.rocketSpleef,
		imageClass: "cover",
		description: "Original Roblox game built around readable high-chaos arena play and server-authoritative rockets.",
		primaryText: "Rocket Spleef demonstrates original game ownership, product instinct, server-authoritative design, and readable chaos. It was built to validate a simple competitive loop with low UI friction, quick comprehension, and gameplay outcomes that are not trusted to the client.",
		bullets: [
			"Designed a casual competitive loop around fast entry, clear pressure, and rapid round recovery.",
			"Built rocket outcomes around server authority so the central mechanic remains exploit-aware.",
			"Tuned high-chaos interactions so players can understand wins, losses, escapes, and mistakes.",
			"Planned expression, retention, monetization, and progression around a casual competitive audience."
		],
		media: [
			{ title: "Gameplay Loop", caption: "Add a 30-second clip showing round pacing, arena pressure, and readable chaos." },
			{ title: "Authority", caption: "Add a client-input → server-validation → replicated outcome diagram." }
		],
		proof: ["Original game", "Server authority", "Game feel", "Product thinking", "Competitive readability"]
	},
	"depths-of-industry": {
		category: "Gameplay",
		title: "Depths of Industry",
		cardTitle: "Depths of\nIndustry\nwebp",
		role: "Creator / Systems Designer",
		linkLabel: "Roblox Link",
		link: LINKS.depthsOfIndustry,
		image: ASSETS.depthsOfIndustry,
		imageClass: "cover",
		description: "Supporting game-work example for systems design, resource loops, industrial mood, and Roblox project ownership.",
		primaryText: "Depths of Industry belongs as supporting game history rather than a main proof pillar. It can still show breadth: systems design, atmosphere, economic/resource thinking, and the ability to turn a concept into a playable Roblox experience.",
		bullets: [
			"Explored industrial progression, resource loops, and readable player goals.",
			"Built the project as a compact proof of independent Roblox development and systems framing.",
			"Supports the broader portfolio by showing range beyond one genre or production context."
		],
		media: [
			{ title: "Game Loop", caption: "Add a short clip showing the central industrial loop and player objective." },
			{ title: "Systems", caption: "Add a small resource-loop or progression diagram." }
		],
		proof: ["Original work", "Systems framing", "Resource loops", "Atmosphere", "Breadth"]
	},
	"offset-camera": {
		category: "Tooling",
		title: "Offset Camera",
		cardTitle: "Offset\nCamera\nwebp",
		role: "Creator & Maintainer",
		linkLabel: "DevForum Link",
		link: LINKS.offsetCamera,
		image: ASSETS.offsetCamera,
		imageClass: "icon",
		description: "A modular Roblox camera extension for FPS, shift-lock, over-the-shoulder behavior, and cross-platform comfort.",
		primaryText: "Offset Camera is the direct game-feel case study. It demonstrates camera behavior, input responsiveness, player comfort, and reusable developer integration while respecting Roblox’s existing camera expectations instead of fighting them.",
		bullets: [
			"Created a drop-in camera extension that integrates with default Roblox camera behavior.",
			"Supported FPS, shift-lock, over-the-shoulder, vehicle, and focus-offset use cases.",
			"Designed for developer usability while keeping player comfort and responsiveness visible.",
			"Considered PC, mobile, console, and avatar-type support instead of a narrow demo path."
		],
		media: [
			{ title: "Camera Feel", caption: "Add clips for FPS, shift-lock, over-the-shoulder, and focus-offset behavior." },
			{ title: "Integration", caption: "Add a small integration snippet or setup diagram." }
		],
		proof: ["Camera systems", "Game feel", "Input responsiveness", "Cross-platform UX", "Developer usability"]
	},
	"reflector": {
		category: "Tooling",
		title: "Reflector",
		cardTitle: "Reflector\nwebp",
		role: "Creator & Maintainer, AI-Assisted Implementation",
		linkLabel: "DevForum Link",
		link: LINKS.reflector,
		image: ASSETS.reflector,
		imageClass: "icon",
		description: "AI-assisted Roblox Studio plugin for reflection and transform workflows.",
		primaryText: "Reflector is intentionally framed as AI-assisted tooling rather than hand-written engineering proof. I owned the problem definition, algorithmic direction, transform requirements, edge-case resolution, validation, testing, and final product behavior for a plugin that mirrors complex Studio selections.",
		bullets: [
			"Directed reflection behavior for objects, rigs, meshes, accessories, pivots, decals, and animation data.",
			"Specified transform/math requirements and diagnosed edge cases from real Studio test scenes.",
			"Validated final behavior against creator workflow expectations rather than treating implementation as sufficient by itself.",
			"Used AI-assisted implementation while maintaining ownership of product direction, correctness expectations, and public presentation."
		],
		media: [
			{ title: "Workflow", caption: "Add a clip showing selection, plane movement, reflection, and final result." },
			{ title: "Edge Cases", caption: "Add a concise list or visual sequence of rigs, decals, accessories, and mesh cases handled." }
		],
		proof: ["AI-assisted tooling", "Transform math", "Edge-case diagnosis", "Validation", "Creator empathy"]
	}
};

const homeColumns = [
	{
		title: "Gameplay",
		main: "asylum-life",
		summary: "Live Roblox production, player-facing features, readable game loops, and release-safe implementation.",
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
	setNav(route);

	main.classList.add("is-exiting");
	window.setTimeout(() => {
		main.innerHTML = routes.get(route)();
		bindRouteTriggers(main);
		bindPointerGlow(main);
		main.classList.remove("is-exiting");
		main.classList.add("is-entering");
		window.setTimeout(() => main.classList.remove("is-entering"), 360);
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

function projectCard(id, variant = "large") {
	const project = projects[id];
	const isSmall = variant === "small";
	return `
		<button class="project-card ${isSmall ? "project-card-small" : "project-card-large"} hoverable nav-trigger" data-route="${escapeHtml(id)}" aria-label="Open ${escapeHtml(project.title)} case study">
			<span class="project-image-wrap ${escapeHtml(project.imageClass)}">
				<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy" />
			</span>
			<span class="project-card-fallback">${escapeHtml(project.cardTitle)}</span>
		</button>
		<div class="project-label ${isSmall ? "project-label-small" : ""}">${escapeHtml(project.title)}</div>
	`;
}

function renderHome() {
	return `
		<section class="home-wire" aria-label="Portfolio home">
			<div class="home-columns">
				${homeColumns.map((column) => `
					<section class="home-column home-column-${escapeHtml(column.title.toLowerCase())}">
						<h1 class="section-title">${escapeHtml(column.title)}</h1>
						<div class="main-project">
							${projectCard(column.main, "large")}
						</div>
						<button class="summary-copy hoverable nav-trigger" data-route="${escapeHtml(column.main)}">
							${escapeHtml(column.summary)}
						</button>
						${column.mini ? `
							<div class="mini-project-row">
								${column.mini.map((id) => `<div class="mini-project">${projectCard(id, "small")}</div>`).join("")}
							</div>
						` : ""}
						${column.centerLink ? `
							<button class="technical-link nav-trigger hoverable" data-route="${escapeHtml(column.centerLink.route)}">
								${escapeHtml(column.centerLink.label)}
							</button>
						` : ""}
					</section>
				`).join("")}
			</div>
			<div class="home-bottom-links">
				<button class="fine-link nav-trigger" data-route="about">About</button>
				<button class="fine-link nav-trigger" data-route="gaps">Draft Gaps</button>
			</div>
		</section>
	`;
}

function renderProject(project) {
	return `
		<article class="project-page">
			<header class="project-top-wire">
				<p class="project-description-card hoverable">${escapeHtml(project.description)}</p>

				<div class="top-project-card">
					<a class="tiny-card linked-project-card hoverable" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(project.title)} external link">
						<span class="card-link-hint">click me to go<br>to link</span>
						<span class="project-image-wrap ${escapeHtml(project.imageClass)}">
							<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" />
						</span>
						<span class="project-card-fallback">${escapeHtml(project.cardTitle)}</span>
					</a>
					<div class="project-label project-label-tiny">${escapeHtml(project.title)}</div>
				</div>
			</header>

			<h1 class="project-role-title">${escapeHtml(project.role)}</h1>

			<section class="project-wire-grid">
				<section class="project-explainer hoverable">
					<h2>${escapeHtml(project.title)}</h2>
					<p>${escapeHtml(project.primaryText)}</p>
					<ul>
						${project.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
					</ul>
				</section>

				${project.media.map((media) => `
					<section class="media-column">
						<h2>${escapeHtml(media.title)}</h2>
						<div class="video-placeholder hoverable" aria-label="Media placeholder for ${escapeHtml(media.title)}">
							<div class="play-triangle"></div>
						</div>
						<p class="media-caption">${escapeHtml(media.caption)}</p>
						<div class="support-copy hoverable">
							${project.proof.slice(0, 3).map((proof) => `<span>${escapeHtml(proof)}</span>`).join("")}
						</div>
					</section>
				`).join("")}
			</section>
		</article>
	`;
}


function miniTags(items) {
	return `<div class="tag-list">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>`;
}

function renderWork() {
	const featured = ["asylum-life", "eclipsis", "offset-camera", "squash", "rocket-spleef"];
	const support = ["reflector", "depths-of-industry"];
	return `
		<section class="work-page">
			<header class="route-heading">
				<h1 class="project-role-title">Featured Work</h1>
				<p class="center-copy">The same portfolio content reorganized for fast hiring review: production proof first, then systems depth, gameplay feel, open-source infrastructure, original game ownership, and supporting technical breadth.</p>
			</header>

			<section class="work-grid featured-work-grid" aria-label="Featured projects">
				${featured.map((id) => {
					const p = projects[id];
					return `
						<button class="work-tile hoverable nav-trigger" data-route="${escapeHtml(id)}">
							<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" />
							<span class="work-kicker">${escapeHtml(p.category)}</span>
							<h2>${escapeHtml(p.title)}</h2>
							<p>${escapeHtml(p.description)}</p>
							${miniTags(p.proof.slice(0, 4))}
						</button>
					`;
				}).join("")}
			</section>

			<section class="route-heading route-heading-small">
				<h2>Supporting Technical Work</h2>
				<p>Projects that add breadth without replacing the main proof path.</p>
			</section>
			<section class="work-grid support-work-grid" aria-label="Supporting work">
				${support.map((id) => {
					const p = projects[id];
					return `
						<button class="work-tile compact-work-tile hoverable nav-trigger" data-route="${escapeHtml(id)}">
							<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" />
							<h2>${escapeHtml(p.title)}</h2>
							<p>${escapeHtml(p.description)}</p>
						</button>
					`;
				}).join("")}
			</section>
		</section>
	`;
}

function renderLeadership() {
	return `
		<section class="text-page leadership-page">
			<h1 class="project-role-title">Production & Leadership</h1>
			<p class="center-copy">Senior engineering is not only implementation speed. This page collects the production habits behind the project work: release safety, QA clarity, documentation, technical standards, mentorship, and cross-disciplinary communication.</p>
			<div class="panel-grid">
				<section class="panel hoverable">
					<h2>Release Risk Management</h2>
					<ul>
						<li>Write QA notes that explain the feature, intended behavior, risky edges, and exact testing instructions.</li>
						<li>Use profiler data, runtime diagnostics, and creator analytics to turn vague production issues into concrete fixes.</li>
						<li>Keep changes understandable enough for testers, designers, artists, and leadership to evaluate before release.</li>
					</ul>
				</section>
				<section class="panel hoverable">
					<h2>Mentorship & Standards</h2>
					<ul>
						<li>Create engineering notes, style guides, and architecture explanations that make safer contribution possible.</li>
						<li>Explain tradeoffs through constraints, invariants, production risk, and maintainability instead of preference alone.</li>
						<li>Favor simple, inspectable systems that are easier to profile, debug, teach, and extend.</li>
					</ul>
				</section>
				<section class="panel hoverable">
					<h2>Cross-Disciplinary Work</h2>
					<ul>
						<li>Translate game-design intent into implementation plans programmers and non-programmers can reason about.</li>
						<li>Coordinate around ownership, release readiness, and player-facing outcomes rather than isolated code tasks.</li>
						<li>Use sanitized artifacts such as QA checklists, bug triage notes, onboarding notes, and style guide excerpts as public proof.</li>
					</ul>
				</section>
				<section class="panel hoverable">
					<h2>Artifacts Still Needed</h2>
					<ul>
						<li>Sanitized QA checklist or release-risk template.</li>
						<li>Style-guide excerpt or architecture note.</li>
						<li>Bug triage example showing diagnosis, ownership, and production outcome.</li>
					</ul>
				</section>
			</div>
		</section>
	`;
}

function renderTechnical() {
	const ids = ["eclipsis", "squash", "offset-camera", "reflector", "rocket-spleef", "depths-of-industry"];
	return `
		<section class="technical-page">
			<h1 class="project-role-title">Technical Expertise</h1>
			<p class="center-copy">Systems optimization, gameplay feel, Luau infrastructure, Studio tooling, server-authoritative gameplay, and production-safe engineering.</p>
			<div class="technical-grid">
				${ids.map((id) => {
					const p = projects[id];
					return `
						<button class="technical-item nav-trigger hoverable" data-route="${escapeHtml(id)}">
							<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" />
							<span>${escapeHtml(p.title)}</span>
							<small>${escapeHtml(p.description)}</small>
						</button>
					`;
				}).join("")}
			</div>
		</section>
	`;
}

function renderAbout() {
	return `
		<section class="text-page">
			<h1 class="project-role-title">Senior Roblox Gameplay & Systems Engineer</h1>
			<div class="about-layout">
				<img class="about-mark" src="${ASSETS.sona}" alt="Sona" />
				<div class="project-explainer hoverable">
					<p>I am Sona, a Roblox gameplay and systems engineer focused on building practical, maintainable, and performant game systems in Luau.</p>
					<p>My work sits between gameplay engineering, systems optimization, developer tooling, and production support. I enjoy turning messy constraints into simple, shippable solutions: improving inherited codebases, building reusable tools, tuning player-facing systems, and helping teams move faster without sacrificing reliability.</p>
					<p>My engineering style is influenced by data-oriented design and the belief that simpler systems are easier to ship, debug, teach, and extend.</p>
				</div>
			</div>
		</section>
	`;
}

function renderGaps() {
	return `
		<section class="text-page">
			<h1 class="project-role-title">Draft Gaps</h1>
			<div class="gap-list">
				${Object.values(projects).map((project) => `
					<section class="gap-item hoverable">
						<h2>${escapeHtml(project.title)}</h2>
						<p>${escapeHtml(project.media.map((m) => m.caption).join(" "))}</p>
					</section>
				`).join("")}
			</div>
		</section>
	`;
}

bindRouteTriggers(document);
window.addEventListener("hashchange", () => render(routeFromHash()));
render(routeFromHash());
