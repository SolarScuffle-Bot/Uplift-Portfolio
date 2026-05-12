const links = {
	sonaGithub: "https://github.com/SolarScuffle-Bot",
	npaGithub: "https://github.com/3065325",
	sonaRoblox: "https://www.roblox.com/users/2722909519/profile",
	npaRoblox: "https://www.roblox.com/users/86032838/profile",
	resume: "assets/Sona_Resume.pdf",
	asylum: "https://www.roblox.com/games/132352755769957/Asylum-Life",
	eclipsis: "https://www.roblox.com/games/632574862/Eclipsis",
	squash: "https://data-oriented-house.github.io/Squash/",
	rocket: "https://www.roblox.com/games/106404336773666/Rocket-Spleef",
	offset: "https://devforum.roblox.com/t/offset-camera-classic-camera-extension-for-fps-shiftlock-over-the-shoulder-for-all-platforms/3177209",
	reflector: "https://devforum.roblox.com/t/reflector-plugin-to-mirror-just-about-anything-in-studio/4617810",
	depths: "https://www.roblox.com/games/119768530425232/Depths-of-Industry"
};

const projects = {
	"asylum-life": {
		id: "asylum-life",
		title: "Asylum Life",
		image: "assets/AsylumLife.webp",
		link: links.asylum,
		role: "Gameplay Engineer & Acting Operations Lead",
		proof: "Live Roblox production, release support, data-driven features, and legacy debugging.",
		tags: ["Production", "QA", "Legacy Code", "Leadership", "Gameplay"],
		status: "2024 – 2025",
		contributions: [
			"Built and polished player-facing systems under tight release schedules.",
			"Helped establish clearer coding, QA, and cross-team handoff practices.",
			"Debugged runtime problems across live servers and inherited systems.",
			"Supported operations during a staffing gap while keeping engineering work moving."
		],
		impact: [
			"Improved production flow during a high-pressure update period.",
			"Reduced release risk through better communication and QA expectations.",
			"Kept features focused on clear UX and fast iteration."
		],
		media: [
			{ title: "Project page", image: "assets/AsylumLife.webp", caption: "Needs final minigame, GUI, and live-feature clips." }
		]
	},
	"eclipsis": {
		id: "eclipsis",
		title: "Eclipsis",
		image: "assets/Eclipsis.webp",
		link: links.eclipsis,
		role: "Systems Engineer & Game Designer",
		proof: "Legacy systems modernization, performance work, and design-aware engineering.",
		tags: ["Systems", "Performance", "Game Design", "Legacy Code", "Leadership"],
		status: "2022 – Present",
		metrics: [
			{ value: "~24s → ~9s", label: "Load time after terrain/rendering work" },
			{ value: "~3000 → ~900", label: "Draw calls after rendering reduction" },
			{ value: "Aggregate", label: "Pipe network state instead of broad propagation" }
		],
		contributions: [
			"Reworked legacy systems that were blocking new design work.",
			"Separated pipe structures from abstract network state for cheaper updates.",
			"Reduced rendering and loading costs through focused terrain work.",
			"Helped coordinate priorities, QA, and production throughput across teams."
		],
		impact: [
			"Made large systems easier to reason about, test, and extend.",
			"Improved load time and draw-call cost with measurable results.",
			"Moved engineering work closer to the actual game-design goals."
		],
		storyboard: true,
		media: [
			{ title: "Pipe network model", image: "assets/EclipsisPipeClean.png", caption: "Physical nodes, network nodes, and network totals were split into separate concepts." },
			{ title: "Engineering sketch", image: "assets/EclipsisPipeSketch.png", caption: "Early planning sketch for removing repeated traversal from normal production and consumption updates." }
		]
	},
	"squash": {
		id: "squash",
		title: "Squash",
		image: "assets/Squash.webp",
		link: links.squash,
		role: "Creator & Maintainer",
		proof: "Luau serialization infrastructure for compact Roblox data workflows.",
		tags: ["Luau", "Open Source", "Serialization", "Infrastructure", "Docs"],
		status: "Active",
		contributions: [
			"Designed the public API around compact, practical Roblox data encoding.",
			"Maintained documentation and examples for other developers.",
			"Built infrastructure useful for networking and persistence-heavy systems.",
			"Supported the open-source Roblox community through reusable tooling."
		],
		impact: [
			"Provides a concrete example of long-term Luau library ownership.",
			"Shows API design, documentation, and maintainer responsibility.",
			"Needs adoption/benchmark proof added before making stronger public claims."
		],
		media: [
			{ title: "Documentation", image: "assets/Squash.webp", caption: "Current proof is strongest through docs, examples, and public library presence." }
		]
	},
	"rocket-spleef": {
		id: "rocket-spleef",
		title: "Rocket Spleef",
		image: "assets/RocketSpleef.webp",
		link: links.rocket,
		role: "Creator / Lead Developer",
		proof: "Original Roblox game built around readable chaos and server-authoritative rockets.",
		tags: ["Server Authority", "Game Design", "Gameplay Feel", "Ownership"],
		status: "Active / Iterating",
		contributions: [
			"Designed the core competitive loop around fast, legible destruction pressure.",
			"Built server-authoritative rocket behavior to keep outcomes trustworthy.",
			"Kept the interface low-friction so players can understand the game quickly.",
			"Planned progression and monetization around long-term play instead of short-term pressure."
		],
		impact: [
			"Demonstrates original game ownership from mechanic to product direction.",
			"Shows gameplay judgment around fairness, readability, and chaos control.",
			"Needs gameplay clips and a simple authority diagram."
		],
		media: [
			{ title: "Game icon", image: "assets/RocketSpleef.webp", caption: "Replace with a 20–30 second match clip when ready." }
		]
	},
	"offset-camera": {
		id: "offset-camera",
		title: "Offset Camera",
		image: "assets/OffsetCamera.webp",
		link: links.offset,
		role: "Creator & Maintainer",
		proof: "Drop-in camera extension for FPS, shift-lock, and over-the-shoulder Roblox controls.",
		tags: ["Game Feel", "Camera", "Tooling", "Cross-Platform"],
		status: "Public",
		contributions: [
			"Built camera behavior around comfort, responsiveness, and default-camera compatibility.",
			"Supported common Roblox play styles without forcing a full camera rewrite.",
			"Documented integration so other developers can adopt it quickly.",
			"Focused on player feel instead of only technical correctness."
		],
		impact: [
			"Strong proof of camera/input taste and developer-facing usability.",
			"Needs behavior clips for FPS, shift-lock, over-the-shoulder, and mobile/console."
		],
		media: [
			{ title: "DevForum release", image: "assets/OffsetCamera.webp", caption: "Camera projects need video. Screenshots cannot prove feel." }
		]
	},
	"reflector": {
		id: "reflector",
		title: "Reflector",
		image: "assets/Reflector.webp",
		link: links.reflector,
		role: "Technical Director / Maintainer",
		proof: "AI-assisted Studio tooling directed through requirements, validation, and edge-case work.",
		tags: ["Tooling", "Validation", "AI-Assisted", "Studio"],
		status: "Public",
		contributions: [
			"Owned the transform requirements, behavior rules, and correctness criteria.",
			"Directed handling for pivots, rigs, meshes, accessories, decals, and animation data.",
			"Tested edge cases and tightened product behavior through repeated validation.",
			"Kept the public framing honest: AI-assisted implementation, human-owned direction."
		],
		impact: [
			"Shows tooling taste, math reasoning, AI-assisted development judgment, and creator empathy.",
			"Should support the portfolio, not act as the main hand-written engineering proof."
		],
		media: [
			{ title: "Plugin icon", image: "assets/Reflector.webp", caption: "Needs a short transform workflow clip and one edge-case storyboard." }
		]
	},
	"voxel-destruction": {
		id: "voxel-destruction",
		title: "Voxel Destruction",
		image: "assets/Eclipsis.webp",
		link: "#technical",
		role: "Systems Design / Prototype",
		proof: "Data-oriented Roblox destruction pipeline using chunking, occupancy, and greedy meshing.",
		tags: ["Performance", "Spatial", "Data-Oriented", "Rendering"],
		status: "In Progress",
		contributions: [
			"Designed around hierarchical chunking and localized regeneration.",
			"Used compact occupancy state instead of per-object bookkeeping where possible.",
			"Focused on update bounds, render count, and Roblox engine constraints.",
			"Kept the working octree renderer as a stable base for the next meshing layer."
		],
		impact: [
			"Strong proof of low-level systems thinking inside Roblox constraints.",
			"Needs destruction clip, chunking diagram, and meshing diagram."
		],
		media: []
	},
	"cursor": {
		id: "cursor",
		title: "Cursor",
		image: "assets/Squash.webp",
		link: links.squash,
		role: "Library / Support Infrastructure",
		proof: "Procedural buffer workflow for push/pop data layouts and compact encoding.",
		tags: ["Luau", "Buffers", "Infrastructure"],
		status: "Supporting",
		contributions: [
			"Supports practical low-level data workflows around serialization-style systems.",
			"Acts as companion infrastructure for compact buffer manipulation.",
			"Keeps data layout code direct and explicit."
		],
		impact: [
			"Supports the broader Squash and Luau infrastructure story."
		],
		media: []
	},
	"depths-of-industry": {
		id: "depths-of-industry",
		title: "Depths of Industry",
		image: "assets/DepthsOfIndustry.webp",
		link: links.depths,
		role: "Original Game / Systems Design",
		proof: "Supporting original-game proof for production loops, systems design, and Roblox iteration.",
		tags: ["Game Design", "Systems", "Ownership"],
		status: "Public",
		contributions: [
			"Supports the independent-development pillar as an original game project.",
			"Useful for showing taste in systems and player motivation once media is available."
		],
		impact: [
			"Needs current gameplay summary and proof media before being promoted."
		],
		media: [
			{ title: "Game icon", image: "assets/DepthsOfIndustry.webp", caption: "Supporting project until stronger data is added." }
		]
	}
};

const pillars = [
	{
		title: "Independent Developer",
		meta: "Roblox · 2019 – Present",
		text: "Open-source Luau infrastructure, original Roblox games, developer education, and end-to-end release practice.",
		projects: ["squash", "rocket-spleef", "offset-camera", "depths-of-industry"],
		tone: "linear-gradient(145deg, rgba(117,255,243,0.10), transparent)"
	},
	{
		title: "Asylum Life",
		meta: "Gameplay Engineer · Acting Operations Lead",
		text: "Live production work across features, QA, communication, runtime debugging, and inherited systems.",
		projects: ["asylum-life"],
		tone: "linear-gradient(145deg, rgba(255,136,159,0.10), transparent)"
	},
	{
		title: "Eclipsis",
		meta: "Systems Engineer · Game Designer",
		text: "Systems modernization, design collaboration, performance work, and team throughput on an active Roblox game.",
		projects: ["eclipsis"],
		tone: "linear-gradient(145deg, rgba(130,168,255,0.12), transparent)"
	}
];

const metrics = [
	{ value: "6+ years", label: "Roblox development and independent game work" },
	{ value: "Front page", label: "Production experience on Asylum Life" },
	{ value: "~24s → ~9s", label: "Eclipsis load-time reduction" },
	{ value: "~3000 → ~900", label: "Eclipsis draw-call reduction" },
	{ value: "Squash", label: "Public Luau serialization infrastructure" },
	{ value: "Live servers", label: "Debugging and release support experience" }
];

const featuredProjectIds = ["asylum-life", "eclipsis", "squash", "rocket-spleef", "offset-camera"];
const supportProjectIds = ["reflector", "voxel-destruction", "cursor", "depths-of-industry"];

const signals = [
	{ title: "Production", projects: ["asylum-life", "eclipsis"], text: "Feature delivery, live debugging, QA expectations, and release risk under real production pressure." },
	{ title: "Gameplay Feel", projects: ["offset-camera", "rocket-spleef", "asylum-life"], text: "Camera comfort, readable interactions, GUI systems, and player-facing iteration." },
	{ title: "Systems Optimization", projects: ["eclipsis", "voxel-destruction"], text: "Legacy refactors, update bounds, rendering cost, load time, and data-oriented structure." },
	{ title: "Luau Infrastructure", projects: ["squash", "cursor"], text: "Reusable APIs, compact encoding, documentation, and library maintainership." },
	{ title: "Project Ownership", projects: ["squash", "rocket-spleef", "offset-camera"], text: "Projects carried from problem definition into public release, documentation, or iteration." },
	{ title: "Team Coordination", projects: ["asylum-life", "eclipsis"], text: "Cross-team communication, priority shaping, QA handoffs, and workload balancing." },
	{ title: "Legacy Codebases", projects: ["asylum-life", "eclipsis"], text: "Inherited systems made safer, clearer, and easier to ship against." },
	{ title: "Mentorship / Communication", projects: ["asylum-life", "eclipsis", "squash"], text: "Standards, docs, technical explanations, and support for peers and the open-source community." }
];

const technicalDomains = [
	{ title: "Performance & Profiling", meta: "Eclipsis · Asylum Life · Voxel", text: "Profiling-led work around live-server behavior, load time, draw calls, and incremental updates.", wide: true },
	{ title: "Systems Architecture", meta: "Eclipsis · Voxel · Squash", text: "Aggregation, spatial partitioning, compact state, and structures built around the work that actually changes." },
	{ title: "Roblox Gameplay", meta: "Asylum Life · Rocket Spleef · Offset Camera", text: "Server authority, camera feel, GUI-driven features, interaction loops, and cross-platform comfort." },
	{ title: "Luau Infrastructure", meta: "Squash · Cursor", text: "Strict Luau, public APIs, compact buffer workflows, documentation, examples, and maintainer discipline." },
	{ title: "Studio Tooling", meta: "Reflector · Offset Camera", text: "Creator workflows, validation, transform tooling, integration comfort, and pragmatic AI-assisted direction." }
];

const leadershipDomains = [
	{ title: "Production Coordination", meta: "Asylum Life · Eclipsis", text: "Clarified priorities and communication paths so teams could move faster without hiding risk." },
	{ title: "QA / Release Risk", meta: "Asylum Life · Eclipsis", text: "Raised testing expectations, change notes, and release visibility around fast update cycles." },
	{ title: "Mentorship", meta: "Independent Work · Asylum Life", text: "Helped peers through standards, review, documentation, and open-source examples." },
	{ title: "Documentation", meta: "Squash · Asylum Life", text: "Wrote technical material that makes systems easier to adopt, maintain, and discuss." },
	{ title: "Cross-Discipline Work", meta: "Asylum Life · Eclipsis", text: "Worked with executives, engineers, designers, artists, and community feedback without losing engineering clarity." },
	{ title: "Operations Support", meta: "Asylum Life", text: "Stepped into coordination work during a staffing gap while continuing to contribute as an engineer." }
];

const app = document.querySelector("#app");
const template = document.querySelector("#route-template");
let currentView = null;

function html(strings, ...values) {
	return strings.reduce((out, string, index) => out + string + (values[index] ?? ""), "");
}

function escapeHtml(value) {
	return String(value)
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}

function projectLink(id, label = null) {
	const project = projects[id];
	return `<a href="#project/${project.id}">${escapeHtml(label ?? project.title)}</a>`;
}

function tags(project, limit = 3) {
	return `<div class="tag-row">${project.tags.slice(0, limit).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>`;
}

function projectCard(id, compact = false) {
	const project = projects[id];
	return html`
		<a class="project-card ${compact ? "compact" : ""}" href="#project/${project.id}" aria-label="Open ${escapeHtml(project.title)} case file">
			<div class="project-thumb"><img src="${project.image}" alt="" loading="lazy" /></div>
			<div class="project-body">
				<h3>${escapeHtml(project.title)}</h3>
				<p>${escapeHtml(project.proof)}</p>
				${tags(project)}
			</div>
		</a>
	`;
}

function pageTitle(kicker, title, subtitle = "") {
	return html`
		<div class="page-title-row">
			<div>
				<p class="kicker">${escapeHtml(kicker)}</p>
				<h1>${escapeHtml(title)}</h1>
				${subtitle ? `<p class="page-subtitle">${escapeHtml(subtitle)}</p>` : ""}
			</div>
			<a class="link-pill" href="${links.resume}" target="_blank" rel="noopener noreferrer">Resume PDF</a>
		</div>
	`;
}

function renderHome() {
	return html`
		<div class="home-grid">
			<section class="home-hero panel">
				<div>
					<p class="kicker">Portfolio</p>
					<h1>Sona</h1>
					<p class="thesis">Senior Gameplay & Systems Engineer focused on Roblox gameplay, systems optimization, Luau tooling, and production reliability.</p>
				</div>
				<div>
					<div class="hero-actions">
						<a class="link-pill" href="#work">Work</a>
						<a class="link-pill" href="#signals">Signals</a>
						<a class="link-pill" href="${links.resume}" target="_blank" rel="noopener noreferrer">Resume</a>
					</div>
					<div class="metric-strip">
						${metrics.map(item => html`<div class="metric-card"><span class="metric-value">${escapeHtml(item.value)}</span><span class="metric-label">${escapeHtml(item.label)}</span></div>`).join("")}
					</div>
				</div>
			</section>

			<section class="pillar-grid" aria-label="Resume pillars">
				${pillars.map(pillar => html`
					<article class="pillar-card" style="--tone:${pillar.tone}">
						<div>
							<h3>${escapeHtml(pillar.title)}</h3>
							<div class="pillar-meta">${escapeHtml(pillar.meta)}</div>
							<p>${escapeHtml(pillar.text)}</p>
						</div>
						<div class="project-list">
							${pillar.projects.map(id => {
								const project = projects[id];
								return `<a class="project-line" href="#project/${id}"><span>${escapeHtml(project.title)}</span><span>${escapeHtml(project.tags[0])}</span></a>`;
							}).join("")}
						</div>
					</article>
				`).join("")}
			</section>
		</div>
	`;
}

function renderWork() {
	return html`
		${pageTitle("Project Cabinet", "Work", "A small index of the strongest proof. Each card opens a case file with role, contribution, result, and media.")}
		<div class="group-label"><span>Featured</span><span>Primary proof</span></div>
		<section class="work-grid">${featuredProjectIds.map(id => projectCard(id)).join("")}</section>
		<div class="group-label"><span>Supporting</span><span>Technical breadth</span></div>
		<section class="support-grid">${supportProjectIds.map(id => projectCard(id, true)).join("")}</section>
	`;
}

function renderSignals() {
	return html`
		${pageTitle("Interviewer Map", "Signals", "The same projects sorted by the questions an interviewer is likely trying to answer.")}
		<section class="matrix-grid">
			${signals.map(signal => html`
				<article class="signal-card">
					<h3>${escapeHtml(signal.title)}</h3>
					<p>${escapeHtml(signal.text)}</p>
					<div class="link-cluster">${signal.projects.map(id => projectLink(id)).join("")}</div>
				</article>
			`).join("")}
		</section>
	`;
}

function renderTechnical() {
	return html`
		${pageTitle("Systems Board", "Technical", "Engineering depth grouped by domain instead of by project name.")}
		<section class="technical-board">
			${technicalDomains.map((domain, index) => html`
				<article class="domain-card ${domain.wide ? "wide" : ""} ${index === 4 ? "center" : ""}">
					<h3>${escapeHtml(domain.title)}</h3>
					<div class="domain-meta">${escapeHtml(domain.meta)}</div>
					<p>${escapeHtml(domain.text)}</p>
				</article>
			`).join("")}
		</section>
	`;
}

function renderLeadership() {
	return html`
		${pageTitle("Production Board", "Leadership", "The senior signal outside the code: communication, safety, documentation, mentorship, and production throughput.")}
		<section class="lead-grid">
			${leadershipDomains.map(item => html`
				<article class="lead-card">
					<h3>${escapeHtml(item.title)}</h3>
					<div class="lead-meta">${escapeHtml(item.meta)}</div>
					<p>${escapeHtml(item.text)}</p>
				</article>
			`).join("")}
		</section>
	`;
}

function renderAbout() {
	return html`
		<div class="about-layout">
			<section class="about-card">
				<p class="kicker">About</p>
				<h1>Sona</h1>
				<p>I build Roblox gameplay and systems with a bias toward clear UX, practical architecture, and code that can survive production pressure.</p>
				<p>My work sits between player-facing features, legacy-system recovery, Luau infrastructure, and team support. I care about simple systems because they are easier to ship, debug, explain, and extend.</p>
				<p>Outside programming, I compose music for games and experimental media, which shapes how I think about pacing, atmosphere, and player response.</p>
			</section>
			<aside class="contact-card">
				<p class="kicker">Links</p>
				<h2>Contact / Proof</h2>
				<div class="contact-list">
					<a class="contact-link" href="${links.resume}" target="_blank" rel="noopener noreferrer"><strong>Resume</strong><span>PDF</span></a>
					<a class="contact-link" href="${links.sonaGithub}" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong><span>Sona</span></a>
					<a class="contact-link" href="${links.npaGithub}" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong><span>NPA</span></a>
					<a class="contact-link" href="${links.sonaRoblox}" target="_blank" rel="noopener noreferrer"><strong>Roblox</strong><span>Sona</span></a>
					<a class="contact-link" href="${links.npaRoblox}" target="_blank" rel="noopener noreferrer"><strong>Roblox</strong><span>NPA</span></a>
				</div>
			</aside>
		</div>
	`;
}

function renderProject(id) {
	const project = projects[id];
	if (!project) return renderMissing();

	if (project.id === "eclipsis") {
		return renderEclipsis(project);
	}

	return html`
		${caseNav(project)}
		<section class="case-layout">
			<div class="case-side">
				${caseHero(project)}
				<div class="fact-box">
					<h3>Quick Facts</h3>
					<p>${escapeHtml(project.role)}</p>
					<p>${escapeHtml(project.status)}</p>
					${tags(project, 5)}
					<div class="hero-actions"><a class="small-action" href="${project.link}" target="_blank" rel="noopener noreferrer">Open Link</a></div>
				</div>
			</div>
			<div class="case-main">
				<div class="detail-box">
					<h3>Proof Statement</h3>
					<p>${escapeHtml(project.proof)}</p>
				</div>
				<div class="case-grid-2">
					${bulletBox("My Contributions", project.contributions)}
					${bulletBox("Result / Impact", project.impact)}
				</div>
				${mediaGrid(project)}
			</div>
		</section>
	`;
}

function renderEclipsis(project) {
	return html`
		${caseNav(project)}
		<section class="case-layout">
			<div class="case-side">
				${caseHero(project)}
				<div class="metric-row">
					${project.metrics.map(item => `<div class="metric-card"><span class="metric-value">${escapeHtml(item.value)}</span><span class="metric-label">${escapeHtml(item.label)}</span></div>`).join("")}
				</div>
			</div>
			<div class="case-main">
				<div class="media-box">
					<h3>Pipe Network Optimization</h3>
					<img src="assets/EclipsisPipeClean.png" alt="Clean Eclipsis pipe network optimization diagram" loading="lazy" />
					<p>Pipe structures were split from abstract network state. Producers and consumers contribute to shared totals instead of pushing updates across every connected part during normal gameplay.</p>
				</div>
				<div class="case-grid-2">
					${bulletBox("My Contributions", project.contributions)}
					${bulletBox("Result / Impact", project.impact)}
				</div>
			</div>
		</section>
	`;
}

function caseNav(project) {
	return html`
		<div class="page-title-row">
			<div>
				<p class="kicker">Case File</p>
				<h2>${escapeHtml(project.title)}</h2>
			</div>
			<div class="hero-actions">
				<a class="link-pill" href="#work">Work</a>
				<a class="link-pill" href="#signals">Signals</a>
			</div>
		</div>
	`;
}

function caseHero(project) {
	return html`
		<div class="case-hero">
			<img src="${project.image}" alt="${escapeHtml(project.title)}" loading="lazy" />
			<div class="case-hero-text">
				<h1>${escapeHtml(project.title)}</h1>
				<p>${escapeHtml(project.role)}</p>
			</div>
		</div>
	`;
}

function bulletBox(title, items) {
	return html`
		<div class="detail-box">
			<h3>${escapeHtml(title)}</h3>
			<ul>${items.slice(0, 4).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
		</div>
	`;
}

function mediaGrid(project) {
	if (!project.media || project.media.length === 0) {
		return html`
			<div class="media-box">
				<h3>Media Needed</h3>
				<p>This case file is ready for a clip, diagram, profiler capture, or code excerpt. The page structure is intentionally data-driven so this can change as proof is collected.</p>
			</div>
		`;
	}

	return html`
		<div class="case-grid-2">
			${project.media.slice(0, 2).map(item => html`
				<div class="media-box">
					<h3>${escapeHtml(item.title)}</h3>
					<img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
					<p>${escapeHtml(item.caption)}</p>
				</div>
			`).join("")}
		</div>
	`;
}

function renderMissing() {
	return html`
		<div class="empty-state">
			<h2>Not found</h2>
			<p>That section does not exist yet.</p>
			<a class="link-pill" href="#home">Home</a>
		</div>
	`;
}

const routes = {
	home: renderHome,
	work: renderWork,
	signals: renderSignals,
	technical: renderTechnical,
	leadership: renderLeadership,
	about: renderAbout
};

function parseRoute() {
	const hash = window.location.hash.replace(/^#/, "") || "home";
	const [name, id] = hash.split("/");
	return { name, id };
}

function updateNav(name) {
	document.querySelectorAll(".main-nav a").forEach(link => {
		link.classList.toggle("active", link.dataset.route === name);
	});
}

function renderRoute() {
	const { name, id } = parseRoute();
	const next = template.content.firstElementChild.cloneNode(true);

	let markup;
	if (name === "project") {
		markup = renderProject(id);
		updateNav("work");
	} else {
		markup = (routes[name] || renderMissing)();
		updateNav(routes[name] ? name : "");
	}

	next.innerHTML = markup;

	if (currentView) {
		const oldView = currentView;
		oldView.classList.add("out");
		window.setTimeout(() => oldView.remove(), 170);
	}

	app.appendChild(next);
	currentView = next;
	app.focus({ preventScroll: true });
	window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);
