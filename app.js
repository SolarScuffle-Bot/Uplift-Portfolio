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
	rocketDemo: "https://i.gyazo.com/62c5a056391249fdae10184a9c62aa1a.mp4",
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
		proof: "Original Roblox game built around client-predicted, server-validated rocket physics.",
		tags: ["Server Authority", "Game Design", "Gameplay Feel", "Ownership"],
		status: "Active / Iterating",
		contributions: [
			"Designed the core loop around fast, readable destruction pressure.",
			"Built rocket firing so the client gets instant feel while the server owns the result.",
			"Used pooled rockets, network ownership transfer, blockcast validation, and ping compensation.",
			"Handled disagreement by killing, recycling, or restoring rockets from server truth."
		],
		impact: [
			"Keeps chaotic physics responsive without trusting client outcomes blindly.",
			"Lets the shooter feel immediate feedback while peers see server-approved results.",
			"Shows original game ownership from mechanic design to network behavior."
		],
		authority: [
			{ title: "Predict", text: "The client fires a pooled rocket it temporarily owns, so shooting feels instant." },
			{ title: "Validate", text: "The server receives the shot request and blockcasts the expected path." },
			{ title: "Resolve", text: "The server rejects cheats/desyncs, confirms early hits, or retakes ownership with ping compensation." },
			{ title: "Recycle", text: "Rocket logic disconnects, ownership returns to the client, and the pool entry becomes reusable." }
		],
		media: [
			{ title: "Authority diagram", image: "assets/RocketAuthorityFlow.png", caption: "Client prediction, server validation, peer rendering, reconciliation, and rocket pool recycling." },
			{ title: "Gameplay sync clip", video: links.rocketDemo, caption: "External MP4 showing the rocket behavior in motion." }
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
		title: "Voxel Carver",
		image: "assets/Carver.webp",
		link: "#technical",
		role: "Voxel Systems Prototype",
		proof: "High-performance Roblox voxel carving built around chunking, occupancy, and localized remeshing.",
		tags: ["Performance", "Spatial", "Data-Oriented", "Rendering"],
		status: "In Progress",
		contributions: [
			"Designed chunked carve state around localized regeneration instead of global rebuilds.",
			"Used compact occupancy data to keep the renderer focused on what changed.",
			"Focused on update bounds, render count, and Roblox engine constraints.",
			"Kept the working octree renderer as the stable base for the next meshing layer."
		],
		impact: [
			"Shows low-level systems thinking inside Roblox constraints.",
			"Needs carve clip, chunking diagram, and meshing diagram."
		],
		media: []
	},
	"cursor": {
		id: "cursor",
		title: "Cursor",
		image: "assets/Cursor.webp",
		link: "#technical",
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
		title: "Production",
		meta: "Asylum Life · 2024 – 2025",
		text: "Live feature work, QA handoffs, runtime debugging, and release support on a front-page Roblox game.",
		projects: ["asylum-life"],
		tone: "linear-gradient(145deg, rgba(255,136,159,0.11), transparent)"
	},
	{
		title: "Systems",
		meta: "Eclipsis · 2022 – Present",
		text: "Legacy modernization, performance work, game design, and team throughput on an active Roblox game.",
		projects: ["eclipsis", "voxel-destruction"],
		tone: "linear-gradient(145deg, rgba(130,168,255,0.13), transparent)"
	},
	{
		title: "Design",
		meta: "Independent · Roblox",
		text: "Original game loops, player motivation, readable chaos, and end-to-end release practice.",
		projects: ["rocket-spleef", "depths-of-industry"],
		tone: "linear-gradient(145deg, rgba(255,210,138,0.10), transparent)"
	},
	{
		title: "Tooling",
		meta: "Independent · Public Work",
		text: "Reusable Luau libraries, camera tooling, Studio workflow support, docs, and public APIs.",
		projects: ["squash", "offset-camera", "reflector", "cursor"],
		tone: "linear-gradient(145deg, rgba(215,124,255,0.12), transparent)"
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
	{ title: "Systems Optimization", projects: ["eclipsis", "voxel-destruction", "squash"], text: "Legacy refactors, update bounds, compact data shape, rendering cost, and load-time work." },
	{ title: "Luau Infrastructure", projects: ["squash", "cursor"], text: "Reusable APIs, compact encoding, documentation, and library maintainership." },
	{ title: "Project Ownership", projects: ["squash", "rocket-spleef", "offset-camera"], text: "Projects carried from problem definition into public release, documentation, or iteration." },
	{ title: "Team Coordination", projects: ["asylum-life", "eclipsis"], text: "Cross-team communication, priority shaping, QA handoffs, and workload balancing." },
	{ title: "Legacy Codebases", projects: ["asylum-life", "eclipsis"], text: "Inherited systems made safer, clearer, and easier to ship against." },
	{ title: "Mentorship / Communication", projects: ["asylum-life", "eclipsis", "squash"], text: "Standards, docs, technical explanations, and support for peers and the open-source community." }
];

const technicalFamilies = [
	{
		title: "Legacy Recovery",
		kicker: "Inherited Systems",
		text: "Stabilize old systems without stopping production work.",
		examples: [
			{ project: "eclipsis", label: "Pipe networks", note: "Split physical ports from aggregate network state so normal updates stop traversing every connected structure." },
			{ project: "asylum-life", label: "Live legacy debugging", note: "Debugged inherited systems across live servers while player-facing work kept moving." },
			{ project: "eclipsis", label: "Modernization path", note: "Prioritized the systems blocking design work, then refactored toward simpler update boundaries." }
		]
	},
	{
		title: "Server Authority",
		kicker: "Trustworthy Gameplay",
		text: "Keep outcomes server-owned without making the player wait for every response.",
		examples: [
			{ project: "rocket-spleef", label: "Client prediction", note: "The shooter fires a temporary network-owned rocket immediately for feel." },
			{ project: "rocket-spleef", label: "Server validation", note: "The server blockcasts, rejects desyncs, confirms early hits, or retakes ownership with ping compensation." },
			{ project: "rocket-spleef", label: "Reconciliation", note: "Disagreement resolves by killing, restoring, exploding, or recycling from server truth." }
		]
	},
	{
		title: "Optimization",
		kicker: "Bounded Work",
		text: "Make expensive systems cheaper by changing what needs to update.",
		examples: [
			{ project: "eclipsis", label: "~24s → ~9s", note: "Reduced load time through terrain and rendering work." },
			{ project: "eclipsis", label: "~3000 → ~900", note: "Reduced draw calls by reworking how world content renders." },
			{ project: "voxel-destruction", label: "Localized carving", note: "Chunked occupancy and regeneration focused on the region that changed." }
		]
	},
	{
		title: "Plugins & Libraries",
		kicker: "Reusable Tools",
		text: "Build public or creator-facing tools that make other developers faster.",
		examples: [
			{ project: "squash", label: "Squash", note: "Public Luau serialization API for compact Roblox data workflows." },
			{ project: "cursor", label: "Cursor", note: "Procedural buffer workflow for push/pop data layouts." },
			{ project: "reflector", label: "Reflector", note: "AI-assisted Studio plugin directed through requirements, edge cases, and validation." }
		]
	}
];

const leadershipDomains = [
	{
		title: "Production Pressure",
		text: "Keep work moving when timelines are short, systems are inherited, and priorities change.",
		examples: [
			{ project: "asylum-life", label: "Live update pressure", note: "Built and polished player-facing work under sub-weekly production deadlines." },
			{ project: "asylum-life", label: "Live-server debugging", note: "Debugged complex legacy behavior across hundreds of active servers." },
			{ project: "eclipsis", label: "Active production", note: "Balanced refactors, design needs, and release risk on an active Roblox project." }
		]
	},
	{
		title: "Communication Paths",
		text: "Turn vague work into shared expectations between engineering, leadership, QA, and contributors.",
		examples: [
			{ project: "asylum-life", label: "Cross-team workflow", note: "Established communication habits that made production easier to coordinate." },
			{ project: "eclipsis", label: "Design alignment", note: "Kept modernization work tied to actual game-design goals." },
			{ project: "squash", label: "Public explanation", note: "Maintained docs and examples so other developers could adopt the library." }
		]
	},
	{
		title: "Standards & QA",
		text: "Raise the floor through clearer handoffs, safer changes, and explicit testing expectations.",
		examples: [
			{ project: "asylum-life", label: "QA practice", note: "Helped establish stronger coding and QA expectations around live changes." },
			{ project: "eclipsis", label: "Repository hygiene", note: "Modernized codebase and GitHub practices around ongoing production work." },
			{ project: "reflector", label: "Validation loops", note: "Repeatedly tested edge cases around transforms, rigs, meshes, decals, and accessories." }
		]
	},
	{
		title: "Delivery",
		text: "Ship features that survive contact with players instead of stopping at implementation.",
		examples: [
			{ project: "asylum-life", label: "Data-driven features", note: "Worked with executives and cross-disciplinary teams to deploy polished production features." },
			{ project: "rocket-spleef", label: "Original loop", note: "Built a readable, server-authoritative competitive loop for fast product validation." },
			{ project: "offset-camera", label: "Usable integration", note: "Released a drop-in camera extension that developers can understand and adopt." }
		]
	},
	{
		title: "Modernization",
		text: "Choose old systems worth fixing, then make them smaller, clearer, and easier to extend.",
		examples: [
			{ project: "eclipsis", label: "Pipe networking", note: "Moved production and consumption into aggregate network state." },
			{ project: "eclipsis", label: "Rendering cost", note: "Reduced load time and draw calls through terrain/rendering changes." },
			{ project: "voxel-destruction", label: "Voxel architecture", note: "Designed localized regeneration around chunks, occupancy, and update bounds." }
		]
	},
	{
		title: "Peer Growth",
		text: "Make teammates and community developers more effective through examples, standards, and reusable work.",
		examples: [
			{ project: "squash", label: "Open-source education", note: "Docs and examples turn the library into an explanation, not just code." },
			{ project: "asylum-life", label: "Architecture guidance", note: "Helped clarify code expectations and production handoffs during a staffing gap." },
			{ project: "eclipsis", label: "Workload balance", note: "Helped coordinate priorities and quality expectations across multiple teams." }
		]
	}
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
	return `<a class="skill-project-tag" href="#project/${project.id}"><span>${escapeHtml(label ?? project.title)}</span><small>${escapeHtml(project.tags[0])}</small></a>`;
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
				<div class="home-copy">
					<p class="kicker">Portfolio</p>
					<h1>Sona</h1>
					<div class="home-role">Senior Gameplay Engineer</div>
					<div class="home-role-detail">Systems Engineer · Luau Tooling · Production Support</div>
					<div class="objective-card">
						<p>I own Roblox features from concept to release, balancing gameplay feel, code quality, production risk, and team communication.</p>
						<p>When technical debt or setbacks block progress, I adapt the system, clarify the work, and help the team keep shipping.</p>
					</div>
				</div>

				<div class="home-link-board" aria-label="Primary portfolio links">
					<a class="link-pill" href="#work">Work</a>
					<a class="link-pill" href="#skills">Skills</a>
					<a class="link-pill" href="#technical">Technical</a>
					<a class="link-pill" href="#leadership">Leadership</a>
					<a class="link-pill" href="${links.resume}" target="_blank" rel="noopener noreferrer">Resume</a>
					<a class="link-pill" href="${links.sonaGithub}" target="_blank" rel="noopener noreferrer">GitHub</a>
					<a class="link-pill" href="${links.sonaRoblox}" target="_blank" rel="noopener noreferrer">Roblox</a>
				</div>

				<div class="metric-strip compact-metrics">
					${metrics.slice(0, 4).map(item => html`<div class="metric-card"><span class="metric-value">${escapeHtml(item.value)}</span><span class="metric-label">${escapeHtml(item.label)}</span></div>`).join("")}
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
								return `<a class="project-line" href="#project/${id}" style="--line-img:url('${project.image}')"><span>${escapeHtml(project.title)}</span><span>${escapeHtml(project.tags[0])}</span></a>`;
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

function renderSkills() {
	return html`
		${pageTitle("Skill Map", "Skills", "The same work sorted by what it proves: production, feel, systems, tooling, ownership, and communication.")}
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

function technicalExample(example) {
	const project = projects[example.project];
	return html`
		<a class="tech-example" href="#project/${project.id}" style="--tech-img:url('${project.image}')">
			<span class="tech-example-image"><img src="${project.image}" alt="" loading="lazy" /></span>
			<span class="tech-example-copy">
				<strong>${escapeHtml(example.label)}</strong>
				<small>${escapeHtml(project.title)}</small>
				<em>${escapeHtml(example.note)}</em>
			</span>
		</a>
	`;
}

function renderTechnical() {
	return html`
		${pageTitle("Technical Frame", "Technical", "A load-bearing view of the work: inherited systems, server authority, optimization, and reusable tools.")}
		<section class="tech-frame" aria-label="Technical frame">
			<div class="tech-frame-title">
				<span>Technical Workload</span>
				<small>Bound the work · keep authority clear · make tools reusable</small>
			</div>
			<div class="tech-pillar-row">
				${technicalFamilies.map((family, index) => html`
					<article class="tech-pillar tech-pillar-${index + 1}">
						<div class="tech-pillar-head">
							<p>${escapeHtml(family.kicker)}</p>
							<h3>${escapeHtml(family.title)}</h3>
							<span>${escapeHtml(family.text)}</span>
						</div>
						<div class="tech-example-stack">
							${family.examples.map(example => technicalExample(example)).join("")}
						</div>
					</article>
				`).join("")}
			</div>
			<div class="tech-foundation">
				<div>
					<strong>Core habit</strong>
					<span>Prefer systems where the important work is explicit, bounded, testable, and easy for the next developer to explain.</span>
				</div>
				<a href="#project/eclipsis">Eclipsis pipe diagram</a>
				<a href="#project/voxel-destruction">Voxel update bounds</a>
				<a href="#project/squash">Luau data layout</a>
			</div>
		</section>
	`;
}

function leadershipExample(example) {
	const project = projects[example.project];
	return html`
		<a class="road-example" href="#project/${project.id}" style="--road-img:url('${project.image}')">
			<span class="road-example-meta">${escapeHtml(project.title)}</span>
			<strong>${escapeHtml(example.label)}</strong>
			<small>${escapeHtml(example.note)}</small>
		</a>
	`;
}

function renderLeadership() {
	return html`
		${pageTitle("Production Roadmap", "Leadership", "How production work becomes clearer: pressure, communication, standards, delivery, modernization, and peer growth.")}
		<section class="roadmap" aria-label="Leadership roadmap">
			${leadershipDomains.map((item, index) => html`
				<article class="road-step">
					<div class="road-marker"><span>${String(index + 1).padStart(2, "0")}</span></div>
					<div class="road-card">
						<h3>${escapeHtml(item.title)}</h3>
						<p>${escapeHtml(item.text)}</p>
						<div class="road-examples">
							${item.examples.map(example => leadershipExample(example)).join("")}
						</div>
					</div>
				</article>
			`).join("")}
		</section>
	`;
}

function renderAbout() {
	return html`
		<div class="about-float-layout">
			<section class="about-profile-card">
				<img class="about-avatar" src="assets/Sona.webp" alt="Sona profile icon" loading="lazy" />
				<div>
					<p class="kicker">About</p>
					<h1>Sona</h1>
					<p class="about-title">Senior Gameplay & Systems Engineer</p>
				</div>
			</section>

			<section class="about-note-card">
				<h3>Working Focus</h3>
				<p>I build Roblox gameplay and systems with a bias toward clear UX, practical architecture, and code that can survive production pressure.</p>
				<p>My work sits between player-facing features, legacy-system recovery, Luau infrastructure, and team support.</p>
			</section>

			<section class="about-note-card small-note">
				<h3>Style</h3>
				<p>Simple systems are easier to ship, debug, explain, and extend.</p>
			</section>

			<section class="about-note-card small-note">
				<h3>Creative Work</h3>
				<p>I also compose music for games and experimental media, which shapes how I think about pacing and player response.</p>
			</section>

			<aside class="contact-card floating-contact">
				<p class="kicker">Links</p>
				<h2>Full Proof</h2>
				<div class="contact-list">
					<a class="contact-link" href="#work"><strong>Work</strong><span>Projects</span></a>
					<a class="contact-link" href="#skills"><strong>Skills</strong><span>Map</span></a>
					<a class="contact-link" href="#technical"><strong>Technical</strong><span>Depth</span></a>
					<a class="contact-link" href="${links.resume}" target="_blank" rel="noopener noreferrer"><strong>Resume</strong><span>PDF</span></a>
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

	if (project.id === "rocket-spleef") {
		return renderRocketSpleef(project);
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

function renderRocketSpleef(project) {
	return html`
		${caseNav(project)}
		<section class="case-layout rocket-case">
			<div class="case-side">
				${caseHero(project)}
				<div class="fact-box">
					<h3>Quick Facts</h3>
					<p>${escapeHtml(project.role)}</p>
					<p>${escapeHtml(project.status)}</p>
					${tags(project, 5)}
				</div>
			</div>
			<div class="case-main">
				<div class="detail-box">
					<h3>Proof Statement</h3>
					<p>${escapeHtml(project.proof)}</p>
				</div>
				<div class="authority-flow">
					${project.authority.map(step => html`
						<div class="authority-step">
							<strong>${escapeHtml(step.title)}</strong>
							<span>${escapeHtml(step.text)}</span>
						</div>
					`).join("")}
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
				<a class="link-pill" href="#skills">Skills</a>
			</div>
		</div>
	`;
}

function caseHero(project) {
	const isExternal = /^https?:\/\//.test(project.link);
	const target = isExternal ? ` target="_blank" rel="noopener noreferrer"` : "";
	return html`
		<a class="case-hero" href="${project.link}"${target} aria-label="Open ${escapeHtml(project.title)} link">
			<img src="${project.image}" alt="${escapeHtml(project.title)}" loading="lazy" />
			<div class="case-hero-text">
				<h1>${escapeHtml(project.title)}</h1>
				<p>${escapeHtml(project.role)}</p>
			</div>
		</a>
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
					${item.video
						? `<video src="${item.video}" controls preload="metadata" playsinline></video>`
						: `<img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />`}
					<p>${escapeHtml(item.caption)}</p>
					${item.video ? `<a class="small-action" href="${item.video}" target="_blank" rel="noopener noreferrer">Open clip</a>` : ""}
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
	skills: renderSkills,
	signals: renderSkills,
	technical: renderTechnical,
	leadership: renderLeadership,
	about: renderAbout
};

function parseRoute() {
	const hash = window.location.hash.replace(/^#/, "") || "home";
	const [rawName, id] = hash.split("/");
	const name = rawName === "signals" ? "skills" : rawName;
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
