import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  DatabaseZap,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  MessageSquare,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  TestTube2,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

const profile = {
  name: "Vedant Pol",
  role: "AI SYSTEMS ENGINEER",
  email: "polvedant7@gmail.com",
  phone: "+91 8779930826",
  location: "Mumbai, India",
  github: "https://github.com/VedantPol",
  linkedin: "https://www.linkedin.com/in/vedant-pol-30987b20a",
  resume: "/Vedant-Pol-Resume.pdf",
  summary:
    "Computer Science engineer building reliable GenAI, RAG, LLM evaluation, automation, and cloud-native systems. I turn messy AI workflows into measurable, source-grounded products.",
};

const navItems = [
  ["Home", "home"],
  ["Experience", "experience"],
  ["Patent", "patent"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Certifications", "certifications"],
  ["Kaggle", "kaggle"],
  ["Contact", "contact"],
];

const stats = [
  ["2+", "YEARS OF", "EXPERIENCE"],
  ["284K+", "TRANSACTIONS", "ANALYZED"],
  ["500+", "DOCS", "INDEXED"],
  ["81/2422", "KAGGLE", "BEST RANK"],
];

const projects = [
  {
    title: "Enterprise RAG Knowledge Assistant",
    eyebrow: "Live RAG App",
    copy:
      "Built and deployed a source-aware assistant for policy and technical document search using PDF parsing, chunking, embeddings, temporary upload indexing, reranking, Docker, Cloudflare Tunnel, and citation-grounded answer generation.",
    stack: ["Python", "LangChain", "FastAPI", "Docker", "Cloudflare"],
    href: "https://enterprise_rag.vedant-home-server.in/",
    repoHref: "https://github.com/VedantPol/enterprise-rag-knowledge-assistant",
    icon: DatabaseZap,
  },
  {
    title: "Multi-Agent Knowledge Management System",
    eyebrow: "Live Agentic AI App",
    copy:
      "Deployed a LangGraph and AutoGen knowledge-management system with Retriever, Planner, Critic, Summarizer, prompt-injection guardrails, unsupported-claim checks, citation validation, hallucination detection, and LLM-as-Judge evaluation.",
    stack: ["LangGraph", "AutoGen", "FastAPI", "Docker"],
    href: "https://multi_agent_kms.vedant-home-server.in/",
    repoHref: "https://github.com/VedantPol/multi-agent-knowledge-manager",
    icon: BrainCircuit,
  },
  {
    title: "LLM Evaluation & Regression Framework",
    eyebrow: "Quality + Safety Automation",
    copy:
      "Automated checks for factuality, refusal behavior, hallucination rate, prompt-injection resistance, latency, business-rule compliance, citation presence, retrieval quality, and missing-context handling.",
    stack: ["Python", "Playwright", "Pytest", "Allure", "MLflow"],
    href: profile.github,
    icon: TestTube2,
  },
];

const patent = {
  title: "ML-Based Printer Fault Diagnosis",
  eyebrow: "German Patent",
  copy:
    "Developed an audio-based supervised ML system using signal processing, feature extraction, classification models, CNNs, hardware sensor data, and Raspberry Pi to detect printer faults.",
  stack: ["Audio ML", "CNNs", "Signal Processing", "Hardware Sensors", "Raspberry Pi"],
  href: "https://drive.google.com/file/d/12Nkm-uN7GnuPpnKP-rH8cr7VUtiqqluu/view",
};

const experience = [
  {
    company: "Machine Learning Practice & Kaggle",
    title: "Applied ML Competitions, Feature Engineering & Model Evaluation",
    period: "Ongoing",
    location: "Kaggle",
    points: [
      "Competed across tabular prediction, regression, time-series forecasting, computer vision, medical imaging, signal extraction, and classification problems.",
      "Ranked 81/2422 in Binary Prediction of Poisonous Mushrooms using playground-scale model iteration and feature engineering.",
      "Practiced ML fundamentals across Titanic, Digit Recognizer, House Prices, Store Sales, Santander Customer Transaction Prediction, and Spaceship Titanic.",
      "Explored domain-specific problems including exoplanet signal extraction, diabetic retinopathy detection, and Ethiopic digit recognition.",
    ],
  },
  {
    company: "IDFC First Bank",
    title: "Software Development Engineer in Test, AI Systems & Automation",
    period: "2024 - Present",
    location: "Mumbai",
    points: [
      "Built and evaluated a GenAI fraud-risk workflow across 284K+ transaction records, improving fraud-case triage recall by 25%.",
      "Developed a RAG compliance and policy search system with LangChain, Pinecone, embeddings, metadata filtering, and citation-grounded retrieval.",
      "Indexed 500+ regulatory and operational documents, reducing manual policy lookup time by 60%.",
      "Improved grounded-answer accuracy from 78% to 91% through RAG benchmarking across chunking, embedding, top-k, reranking, and prompt settings.",
      "Built LLM/RAG evaluation datasets tracking Recall@K, Precision@K, MRR, faithfulness, hallucination rate, latency, and cost per query.",
      "Automated factuality, refusal, hallucination, prompt-injection, and consistency checks with Python, Playwright, GoCD, and Allure.",
    ],
  },
  {
    company: "Google Summer of Code, XWiki",
    title: "Software Engineering Intern, Open Source",
    period: "Jun 2022 - Sep 2022",
    location: "Remote",
    points: [
      "Built the XWiki Snap package and automated cloud-ready release workflows using CI/CD, Linux packaging, Docker, Kubernetes, and deployment automation.",
      "Contributed 24 PRs, 85 commits, and 7K+ lines of code to the open-source packaging project.",
      "Created user and developer documentation for setup, builds, packaging, automation, and deployment workflows.",
    ],
  },
];

const kaggleCompetitions = [
  {
    title: "Binary Prediction of Poisonous Mushrooms",
    type: "Playground Series S4E8",
    detail: "Classification challenge focused on predicting mushroom toxicity.",
    teams: "2422 teams",
    result: "81/2422",
    highlight: true,
  },
  {
    title: "NeurIPS - Ariel Data Challenge 2024",
    type: "Featured Code Competition",
    detail: "Derive exoplanet signals from Ariel optical instruments.",
    teams: "1151 teams",
    result: "Unranked",
  },
  {
    title: "Store Sales - Time Series Forecasting",
    type: "Getting Started",
    detail: "Use machine learning to predict grocery sales.",
    teams: "932 teams",
    result: "Ongoing",
  },
  {
    title: "House Prices - Advanced Regression Techniques",
    type: "Getting Started",
    detail: "Predict sale prices with feature engineering, random forests, and gradient boosting.",
    teams: "5048 teams",
    result: "Ongoing",
  },
  {
    title: "Digit Recognizer",
    type: "Getting Started",
    detail: "Learn computer vision fundamentals using MNIST.",
    teams: "1713 teams",
    result: "Ongoing",
  },
  {
    title: "Diabetic Retinopathy Detection",
    type: "Featured",
    detail: "Identify signs of diabetic retinopathy in eye images.",
    teams: "660 teams",
    result: "Unranked",
  },
  {
    title: "Santander Customer Transaction Prediction",
    type: "Featured",
    detail: "Identify customers likely to make a transaction.",
    teams: "8751 teams",
    result: "Unranked",
  },
  {
    title: "Titanic - Machine Learning from Disaster",
    type: "Getting Started",
    detail: "Predict passenger survival and practice ML basics.",
    teams: "12887 teams",
    result: "Ongoing",
  },
  {
    title: "Spaceship Titanic",
    type: "Getting Started",
    detail: "Predict transported passengers in a sci-fi tabular classification problem.",
    teams: "2327 teams",
    result: "Ongoing",
  },
  {
    title: "TAU Ethiopic Digit Recognition",
    type: "Community",
    detail: "Classify Ethiopic digits in an MNIST-like competition.",
    teams: "99 teams",
    result: "Unranked",
  },
];

const mlExperience = [
  ["Tabular ML", "Classification, regression, feature engineering, model comparison, and leaderboard iteration."],
  ["Computer Vision", "MNIST-style digit recognition, medical imaging exploration, CNN fundamentals, and image classification."],
  ["Time Series", "Forecasting workflows for store sales, validation strategy, lag features, and trend-aware modeling."],
  ["Signal + Scientific ML", "Exoplanet signal extraction, audio-based fault diagnosis, and sensor-driven supervised learning."],
];

const tools = [
  ["Python", "Core language for AI workflows, automation, evaluation, and backend tooling.", Code2],
  ["RAG + LangChain", "Retrieval pipelines, citation-grounded answers, chunking, reranking, and prompt design.", BrainCircuit],
  ["Pinecone / FAISS / Milvus", "Semantic search, embeddings, hybrid retrieval, metadata filters, and vector indexes.", DatabaseZap],
  ["PyTorch + Hugging Face", "Model evaluation, feature extraction, classification, transformers, and ML experiments.", Sparkles],
  ["Docker + Kubernetes", "Cloud-ready packaging, deployment automation, and reproducible engineering environments.", Cloud],
  ["Playwright + Pytest + Allure", "Regression-ready automation for UI, APIs, LLM behavior, and reporting.", ShieldCheck],
];

const notes = [
  {
    title: "RAG Quality Needs Metrics, Not Vibes",
    copy:
      "Good retrieval is visible in Recall@K, Precision@K, MRR, groundedness, latency, cost, and citation quality. The UI can be beautiful, but the system still has to prove itself.",
    date: "AI Evaluation",
  },
  {
    title: "LLM Safety Belongs In The Test Suite",
    copy:
      "Prompt-injection checks, missing-context questions, refusal behavior, unsupported-claim detection, and hallucination tracking should be regression tests, not a last-minute review.",
    date: "Automation",
  },
  {
    title: "Open Source Teaches Operational Taste",
    copy:
      "Packaging, docs, CI/CD, and release automation make software usable by people who were not in the room when it was built.",
    date: "Engineering",
  },
];

const certifications = [
  {
    label: "AWS Certified Machine Learning - Specialty",
    href: "https://cp.certmetrics.com/amazon/en/public/verify/credential/90b1777f8555422e908156fe93fecc10",
  },
  {
    label: "AWS Certified Cloud Practitioner",
    href: "https://cp.certmetrics.com/amazon/en/public/verify/credential/35dd6f346e2e4b8d93e864654052cfa5",
  },
  {
    label: "Mathematics for Machine Learning - Imperial College London",
    href: "https://coursera.org/share/91f17c8d69e987e085050a6854cac50d",
  },
];

const linkCards = [
  ["XWiki Commits", "https://github.com/xwiki-contrib/packaging-snap/commits/main"],
  ["GSoC Report", "https://github.com/VedantPol/GSoC_2022_Report_XWiki/blob/main/GSoC_2022_Vedant_Pol.md"],
  ["User Guide", "https://dev.xwiki.org/xwiki/bin/view/GoogleSummerOfCode/XWiki%20Snap%20Guide/"],
  ["Developer Guide", "https://dev.xwiki.org/xwiki/bin/view/GoogleSummerOfCode/XWiki%20Snap%20Guide/XWiki%20Snap%20developer%20guide/"],
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ kicker, children }) {
  return (
    <Reveal className="section-title">
      <span>{kicker}</span>
      <h2>{children}</h2>
    </Reveal>
  );
}

function MagneticButton({ href, children, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  return (
    <motion.a
      className={`magnetic ${className}`}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.a>
  );
}

function HeroVisual() {
  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="orbital">
        <span />
        <span />
        <span />
      </div>
      <div className="portrait-card">
        <div className="portrait-top">
          <span>AI QUALITY SYSTEM</span>
          <BrainCircuit size={24} />
        </div>
        <div className="profile-photo-wrap">
          <img src="/vedant-profile.png" alt="Vedant Pol" />
          <div className="photo-badge">
            <strong>81</strong>
            <span>Kaggle rank</span>
          </div>
        </div>
        <div className="metric-ring">
          <strong>91%</strong>
          <small>grounded accuracy</small>
        </div>
        <div className="terminal-lines">
          <p>rag.eval.run()</p>
          <p>citations: verified</p>
          <p>kaggle.practice: active</p>
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, -120]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <div className="site-shell">
        <header className="nav-wrap">
          <a href="#home" className="brand">
            <span aria-hidden="true">
              <BrainCircuit size={20} strokeWidth={2.4} />
            </span>
            Vedant Pol
          </a>
          <nav aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={`#${href}`}>
                {label}
              </a>
            ))}
          </nav>
          <a className="nav-icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
        </header>

        <main>
          <section className="hero" id="home">
            <motion.div className="hero-copy" style={{ y: heroY }}>
              <motion.div
                className="availability"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span />
                Available for AI/ML, GenAI, RAG, and MLOps roles
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
              >
                {profile.name}
              </motion.h1>
              <motion.p
                className="hero-summary"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                {profile.summary}
              </motion.p>
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
              >
                <MagneticButton href="#contact" className="primary">
                  <Mail size={18} /> Contact
                </MagneticButton>
                <MagneticButton href={profile.resume}>
                  <FileDown size={18} /> Resume
                </MagneticButton>
                <MagneticButton href={profile.linkedin}>
                  <Linkedin size={18} /> LinkedIn
                </MagneticButton>
              </motion.div>
            </motion.div>
            <HeroVisual />
          </section>

          <section className="marquee" aria-label="Role marquee">
            <div>
              <span>{profile.role}</span>
              <span>RAG ENGINEER</span>
              <span>KAGGLE ML</span>
              <span>LLM EVALUATION</span>
              <span>AI AUTOMATION</span>
            </div>
            <div aria-hidden="true">
              <span>{profile.role}</span>
              <span>RAG ENGINEER</span>
              <span>KAGGLE ML</span>
              <span>LLM EVALUATION</span>
              <span>AI AUTOMATION</span>
            </div>
          </section>

          <section className="stats-grid" aria-label="Career statistics">
            {stats.map(([value, line1, line2], index) => (
              <Reveal key={value} className="stat-card" delay={index * 0.05}>
                <strong>{value}</strong>
                <span>{line1}</span>
                <span>{line2}</span>
              </Reveal>
            ))}
          </section>

          <section className="split-intro">
            <Reveal className="intro-large">
              DYNAMIC AI SYSTEMS, MEASURABLE EVALUATION
            </Reveal>
            <Reveal className="intro-stack" delay={0.08}>
              PYTHON, RAG, LANGCHAIN, PINECONE, PYTORCH, DOCKER, KUBERNETES
            </Reveal>
          </section>

          <section id="experience" className="section experience-section">
            <SectionTitle kicker="2+ Years Of">Experience</SectionTitle>
            <div className="timeline">
              {experience.map((item, index) => (
                <Reveal key={item.company} className="timeline-item" delay={index * 0.08}>
                  <div className="timeline-meta">
                    <BriefcaseBusiness size={22} />
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                  <div className="timeline-body">
                    <h3>{item.company}</h3>
                    <p>{item.title}</p>
                    <ul>
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="patent" className="section patent-section">
            <SectionTitle kicker="Featured">Patent</SectionTitle>
            <Reveal className="patent-spotlight">
              <div className="patent-copy">
                <div className="patent-badge">
                  <Award size={22} />
                  {patent.eyebrow}
                </div>
                <h3>{patent.title}</h3>
                <p>{patent.copy}</p>
                <div className="stack-list patent-stack">
                  {patent.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project-links patent-links">
                  <a href={patent.href} target="_blank" rel="noreferrer">
                    <ArrowUpRight size={16} /> View Patent
                  </a>
                </div>
              </div>
              <div className="patent-proof" aria-label="Patent technical highlights">
                <div>
                  <span>01</span>
                  <strong>Audio Signal Diagnosis</strong>
                </div>
                <div>
                  <span>02</span>
                  <strong>Supervised ML Pipeline</strong>
                </div>
                <div>
                  <span>03</span>
                  <strong>Hardware Sensor Prototype</strong>
                </div>
              </div>
            </Reveal>
          </section>

          <section id="projects" className="section">
            <SectionTitle kicker="Recent">Projects</SectionTitle>
            <div className="project-grid">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Reveal key={project.title} className="project-card" delay={index * 0.06}>
                    <div className="project-card-content">
                      <div className="card-topline">
                        <span>{project.eyebrow}</span>
                        <ArrowUpRight size={20} />
                      </div>
                      <div className="project-icon">
                        <Icon size={30} />
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.copy}</p>
                      <div className="stack-list">
                        {project.stack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a href={project.href} target="_blank" rel="noreferrer">
                          <ArrowUpRight size={16} /> Live
                        </a>
                        {(project.repoHref || project.href) && (
                          <a href={project.repoHref || project.href} target="_blank" rel="noreferrer">
                            <Github size={16} /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section id="skills" className="section">
            <SectionTitle kicker="Core">Skills</SectionTitle>
            <div className="tool-grid">
              {tools.map(([name, copy, Icon], index) => (
                <Reveal key={name} className="tool-card" delay={index * 0.04}>
                  <Icon size={28} />
                  <h3>{name}</h3>
                  <p>{copy}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="certifications" className="section education-band">
            <Reveal className="education-card certification-spotlight">
              <div>
                <span className="section-kicker">AWS Certified</span>
                <h2>Machine Learning Specialist</h2>
                <p>
                  AWS Certified Machine Learning - Specialty and AWS Certified Cloud Practitioner,
                  backed by applied ML, GenAI/RAG evaluation, automation, and cloud-native engineering work.
                </p>
              </div>
              <Award size={58} />
            </Reveal>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <Reveal key={cert.label} className="cert-card" delay={index * 0.05}>
                  <a href={cert.href} target="_blank" rel="noreferrer">
                    <Award size={20} />
                    <span>{cert.label}</span>
                    <ArrowUpRight size={18} />
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal className="degree-card">
              <Medal size={24} />
              <div>
                <span>B.Tech, Computer Science</span>
                <p>
                  Mumbai University, 2020 - 2024. CGPA 9.08/10 with coursework in DSA, databases,
                  operating systems, computer networks, ML, AI, software engineering, and cloud computing.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="kaggle" className="section kaggle-section">
            <SectionTitle kicker="ML">Kaggle</SectionTitle>
            <div className="kaggle-lead">
              <Reveal className="kaggle-hero-card">
                <div>
                  <span className="section-kicker">Best Result</span>
                  <h3>81/2422</h3>
                  <p>
                    Binary Prediction of Poisonous Mushrooms. Applied ML practice across tabular
                    classification, regression, forecasting, computer vision, medical imaging, and
                    scientific signal challenges.
                  </p>
                </div>
                <Award size={46} />
              </Reveal>
              <div className="ml-grid">
                {mlExperience.map(([title, copy], index) => (
                  <Reveal key={title} className="ml-card" delay={index * 0.05}>
                    <Sparkles size={22} />
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="kaggle-grid">
              {kaggleCompetitions.map((competition, index) => (
                <Reveal
                  key={competition.title}
                  className={`kaggle-card ${competition.highlight ? "is-highlight" : ""}`}
                  delay={index * 0.03}
                >
                  <div className="kaggle-card-head">
                    <span>{competition.type}</span>
                    <strong>{competition.result}</strong>
                  </div>
                  <h3>{competition.title}</h3>
                  <p>{competition.detail}</p>
                  <small>{competition.teams}</small>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="evidence" className="section evidence-section">
            <SectionTitle kicker="Public">Evidence</SectionTitle>
            <div className="link-grid">
              {linkCards.map(([label, href], index) => (
                <Reveal key={label} className="evidence-link" delay={index * 0.04}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <PackageCheck size={20} />
                    {label}
                    <ArrowUpRight size={18} />
                  </a>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="thoughts" className="section">
            <SectionTitle kicker="Design">Thoughts</SectionTitle>
            <div className="thought-list">
              {notes.map((note, index) => (
                <Reveal key={note.title} className="thought-card" delay={index * 0.06}>
                  <a href="#contact">
                    <div>
                      <span>{note.date}</span>
                      <h3>{note.title}</h3>
                      <p>{note.copy}</p>
                    </div>
                    <ArrowUpRight size={24} />
                  </a>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="contact" className="section contact-section">
            <SectionTitle kicker="Let's Work">Together</SectionTitle>
            <div className="contact-layout">
              <Reveal className="contact-copy">
                <h3>Have a GenAI, RAG, ML evaluation, automation, or cloud-native engineering role?</h3>
                <p>
                  I'm interested in teams that care about reliable AI systems, testable behavior,
                  and production engineering discipline.
                </p>
                <div className="contact-lines">
                  <a href={`mailto:${profile.email}`}>
                    <Mail size={18} /> {profile.email}
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <Github size={18} /> GitHub
                  </a>
                  <span>
                    <MapPin size={18} /> {profile.location}
                  </span>
                </div>
              </Reveal>
              <Reveal className="contact-form" delay={0.08}>
                <form action={`mailto:${profile.email}`} method="post" encType="text/plain">
                  <label>
                    Name
                    <input name="name" type="text" />
                  </label>
                  <label>
                    Email
                    <input name="email" type="email" />
                  </label>
                  <label>
                    Role / Budget
                    <select name="role">
                      <option>AI/ML Engineer</option>
                      <option>GenAI / RAG Engineer</option>
                      <option>LLM Evaluation Engineer</option>
                      <option>MLOps / Automation Engineer</option>
                    </select>
                  </label>
                  <label>
                    Message
                    <textarea name="message" rows="5" />
                  </label>
                  <button type="submit">
                    Submit <MessageSquare size={18} />
                  </button>
                </form>
              </Reveal>
            </div>
          </section>
        </main>

        <footer>
          <p>Made for {profile.name} | Built with React, Framer Motion, and Vite</p>
          <a href="#home">Back to top</a>
        </footer>
      </div>
    </>
  );
}

export default App;
