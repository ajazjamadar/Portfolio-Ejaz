import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FadeUp from "../components/FadeUp";

import {
  SiTerraform, SiGithubactions, SiDocker, SiKubernetes, SiPrometheus,
  SiGrafana, SiGithub, SiJenkins, SiApachemaven, SiAnsible, SiReact,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJsonwebtokens, SiTailwindcss,
  SiJavascript, SiPostgresql, SiPython, SiSpringboot, SiLinux, SiFlask,
  SiTypescript, SiHtml5, SiCss,
} from "react-icons/si";

import { FaAws, FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

import {
  LuCheck, LuArrowLeft, LuArrowUpRight, LuBox, LuCalendar, LuBellRing,
  LuBrain, LuWebhook, LuShieldCheck,
} from "react-icons/lu";

/* ================= TECHNOLOGIES ================= */

const TECH = {
  Terraform: [SiTerraform, "#a26ee0"],
  AWS: [FaAws, "#ff9900"],
  "GitHub Actions": [SiGithubactions, "#2088ff"],
  Docker: [SiDocker, "#2496ed"],
  Kubernetes: [SiKubernetes, "#4f83f1"],
  Prometheus: [SiPrometheus, "#e6522c"],
  Grafana: [SiGrafana, "#f46800"],
  Jenkins: [SiJenkins, "#d24939"],
  Maven: [SiApachemaven, "#e0304f"],
  Ansible: [SiAnsible, "#ee3b3b"],
  Alertmanager: [LuBellRing, "#e6522c"],
  React: [SiReact, "#61dafb"],
  "Node.js": [SiNodedotjs, "#68a063"],
  Express: [SiExpress, "#ffffff"],
  MongoDB: [SiMongodb, "#47a248"],
  MySQL: [SiMysql, "#4a9fd0"],
  JWT: [SiJsonwebtokens, "#ffffff"],
  Tailwind: [SiTailwindcss, "#06b6d4"],
  JavaScript: [SiJavascript, "#f7df1e"],
  TypeScript: [SiTypescript, "#3178c6"],
  Java: [FaJava, "#f89820"],
  "Spring Boot": [SiSpringboot, "#6db33f"],
  Python: [SiPython, "#4b8bbe"],
  Flask: [SiFlask, "#ffffff"],
  Linux: [SiLinux, "#fcc624"],
  "Machine Learning": [LuBrain, "#a78bfa"],
  "Scikit-Learn": [SiPython, "#f7931e"],
  PostgreSQL: [SiPostgresql, "#4169e1"],
  "REST API": [LuWebhook, "#a78bfa"],
  "Bash Scripting": [SiLinux, "#4eaa25"],
  "JUnit 5": [LuCheck, "#25a162"],
  SOLID: [LuShieldCheck, "#e5af3a"],
  SQL: [TbSql, "#38bdf8"],
  HTML5: [SiHtml5, "#e34f26"],
  CSS3: [SiCss, "#3d9be9"],
};

const tech = (name) => TECH[name] || [LuBox, "#9ca3af"];

/* ================= PROJECT DATA ================= */

const projects = {
  devops: [
    {
      id: "cloudforge",
      year: "2026",
      title: "CloudForge — Terraform Cloud & GitHub IaC Pipeline",
      tag: "Infrastructure as Code",
      summary:
        "Automated Infrastructure-as-Code pipeline integrating GitHub webhooks with Terraform Cloud workspaces for speculative plans, state locking, drift detection, and multi-environment AWS provisioning.",
      highlights: [
        "Automated speculative plans on pull requests via GitHub Actions and Terraform Cloud",
        "Remote state management with automated concurrency locking and audit trail",
        "Modular AWS infrastructure provisioning (VPC, compute, security groups, storage)",
        "Drift detection and automated policy-as-code enforcement",
      ],
      stack: ["Terraform", "AWS", "GitHub Actions", "Docker", "Linux"],
      repo: "https://github.com/ajazjamadar/Terraform-cloud-GitHub",
      live: "",
      featured: true,
    },
    {
      id: "ansibleflow",
      year: "2026",
      title: "AnsibleFlow — Configuration Management & CI/CD Pipeline",
      tag: "Ansible & Server Automation",
      summary:
        "Continuous configuration management and deployment automation pipeline utilizing modular Ansible playbooks. Provisions Linux server nodes, orchestrates package dependencies, automates firewall/security configs, and deploys containerized applications with zero downtime.",
      highlights: [
        "Modular Ansible playbooks for repeatable OS hardening and environment provisioning",
        "Automated web server configuration with Nginx reverse proxy and SSL certificates",
        "Integration with Jenkins and Docker for continuous application delivery",
        "Idempotent deployment scripts eliminating manual server configuration drift",
      ],
      stack: ["Ansible", "Linux", "Docker", "Bash Scripting", "Jenkins"],
      repo: "https://github.com/ajazjamadar/ansible-ci-cd",
      live: "",
      featured: true,
    },
    {
      id: "auditx",
      year: "2026",
      title: "AuditX — Automated Security & Web Audit Platform",
      tag: "Security & Performance Scanner",
      summary:
        "Automated website audit engine featuring modular scanners for OWASP top-10 security vulnerabilities, Core Web Vitals performance benchmarks, SEO health, and WCAG accessibility compliance with automated report generation.",
      highlights: [
        "Modular vulnerability auditing detecting OWASP top-10 risks and misconfigurations",
        "Core Web Vitals real-time metrics capture and performance diagnostics",
        "WCAG accessibility and search engine optimization (SEO) scoring",
        "Containerized microservice architecture using Docker and Express backend",
      ],
      stack: ["TypeScript", "Node.js", "Express", "Docker", "Linux"],
      repo: "https://github.com/ajazjamadar/AuditX",
      live: "",
      featured: true,
    },
  ],

  development: [
    {
      id: "nexthire",
      year: "2026",
      title: "NextHire — Enterprise Job Portal & Recruitment Platform",
      tag: "Java 21, Spring Boot & React 19",
      summary:
        "A production-grade full-stack job portal and recruitment platform built with Java 21, Spring Boot 3.2.5, MongoDB, and React 19. Features JWT authentication with OTP support, role-based access control, intelligent job search, applicant tracking, and comprehensive REST API documentation.",
      highlights: [
        "Java 21 & Spring Boot 3 backend with JWT authentication and secure OTP verification",
        "React 19 responsive interface with intelligent multi-filter job search",
        "Role-based access control (RBAC) separating candidate and recruiter permissions",
        "Resume management, application status tracking, and automated email notifications",
      ],
      stack: ["Java", "Spring Boot", "React", "MongoDB", "JWT", "Docker"],
      repo: "https://github.com/ajazjamadar/NextHire",
      live: "",
      featured: true,
    },
    {
      id: "fintrack",
      year: "2026",
      title: "FinTrack — Personal Finance & Mini-Banking Engine",
      tag: "Enterprise Java & Banking",
      summary:
        "FinTrack is an enterprise mini-banking proof-of-concept that enables users to manage multi-currency bank accounts, record income and expenses, transfer funds across accounts or to UPI/mobile numbers, and view financial auditing reports.",
      highlights: [
        "Layered enterprise architecture: Controller, Service Interface, Service Implementation, Repository",
        "Fund transfers, ledger audits, and UPI/mobile transaction processing",
        "Database schema migrations and relational consistency with MySQL",
        "Spring Data JPA query optimization and RESTful API endpoints",
      ],
      stack: ["Java", "Spring Boot", "MySQL", "Docker", "REST API"],
      repo: "https://github.com/ajazjamadar/Personal-Finance-Tracker",
      live: "",
      featured: true,
    },
    {
      id: "talentpulse",
      year: "2026",
      title: "TalentPulse — Enterprise Employee Management System",
      tag: "Java 21 & SOLID Architecture",
      summary:
        "An enterprise-grade employee and organizational management system achieving 100% SOLID principle compliance and production-ready code quality. Features Dependency Injection, custom validation annotations, Jenkinsfile CI/CD automation, and SLF4J centralized logging.",
      highlights: [
        "100% SOLID principle compliance and interface-based design throughout",
        "Automated Jenkinsfile CI/CD pipeline and Apache Maven multi-phase build lifecycle",
        "Custom declarative annotation validation and robust exception handling",
        "JaCoCo unit test coverage with Mockito and JUnit 5",
      ],
      stack: ["Java", "Maven", "Jenkins", "SQL", "JUnit 5", "SOLID"],
      repo: "https://github.com/ajazjamadar/Employee-Management-System",
      live: "",
      featured: true,
    },
    {
      id: "mindpulse",
      year: "2026",
      title: "MindPulse — Workplace Stress Prediction & Analytics Engine",
      tag: "Machine Learning & Analytics",
      summary:
        "Predictive machine learning pipeline analyzing workplace stressors (workload, hours, job satisfaction, mental health indicators) using Scikit-learn Random Forest and Logistic Regression classifiers.",
      highlights: [
        "Multi-classifier machine learning architecture achieving 85% predictive accuracy",
        "Feature engineering and correlation analysis on workplace stress drivers",
        "Interactive data visualization dashboard with Python and Pandas",
        "REST API inference endpoint packaged for deployment",
      ],
      stack: ["Machine Learning", "Python", "Scikit-Learn", "Flask"],
      repo: "https://github.com/ajazjamadar/Employee-Stress-Prediction",
      live: "",
      featured: true,
    },
    {
      id: "pulsechat",
      year: "2026",
      title: "PulseChat — Real-Time WebSocket Communication Platform",
      tag: "Real-Time Networking",
      summary:
        "Low-latency full-duplex communication platform utilizing Socket.IO and WebSockets in modern JavaScript (ES6). Allows multiple users to engage in private 1-on-1 chats and shared public discussion rooms with instant delivery state.",
      highlights: [
        "Bi-directional WebSocket protocol using Socket.IO for low-latency transmission",
        "Private direct messaging and multi-user broadcast room channels",
        "Online presence detection, typing indicators, and message timestamp telemetry",
        "Clean modern frontend styling with responsive UI across mobile and desktop",
      ],
      stack: ["JavaScript", "Node.js", "Express", "REST API", "Tailwind"],
      repo: "https://github.com/ajazjamadar/REAL-TIME-CHAT-APPLICATION-ONLINE",
      live: "",
      featured: false,
    },
    {
      id: "trackify",
      year: "2026",
      title: "Trackify — Job Application Intelligence Tracker",
      tag: "Python Web Services",
      summary:
        "Flask-based web application helping engineers manage and monitor their career application lifecycle. Offers secure authentication, complete CRUD operations, REST API support, and automated email reminders.",
      highlights: [
        "End-to-end recruitment pipeline tracking across application stages",
        "JWT user session authentication and password encryption",
        "Automated email notifications and interview reminders",
        "Production-ready Docker configuration for cloud platform deployments",
      ],
      stack: ["Python", "Flask", "REST API", "SQL", "Docker"],
      repo: "https://github.com/ajazjamadar/Job-Tracker-Application",
      live: "",
      featured: false,
    },
    {
      id: "cubiq",
      year: "2025",
      title: "Cubiq — Smart Attendance Management System",
      tag: "TypeScript & Enterprise Web",
      summary:
        "Institutional attendance tracking system featuring real-time attendance logging, role-based administration dashboard, reporting modules, and automated absence alerts.",
      highlights: [
        "TypeScript frontend and backend ensuring end-to-end type safety",
        "Role-based administrative control with detailed attendance summaries",
        "Automated attendance tracking and discrepancy alerting",
        "Exportable analytics for administrative review and reporting",
      ],
      stack: ["TypeScript", "React", "Node.js", "REST API", "Tailwind"],
      repo: "https://github.com/ajazjamadar/cubiq-attendance-management-system",
      live: "",
      featured: false,
    },
    {
      id: "focusflow",
      year: "2025",
      title: "FocusFlow — Productivity Management Extension",
      tag: "Browser Tools & JavaScript",
      summary:
        "Custom Chrome extension engineered to enhance browser functionality and improve developer productivity through content manipulation, quick access tools, and seamless web page integration.",
      highlights: [
        "Dynamic DOM content injection and distraction blocking algorithms",
        "Quick-access shortcut bar and developer utilities",
        "Persistent local session storage with privacy-first architecture",
        "Lightweight memory footprint and zero external tracking",
      ],
      stack: ["JavaScript", "HTML5", "CSS3"],
      repo: "https://github.com/ajazjamadar/Chrome-Extension-for-Productivity-Management",
      live: "",
      featured: false,
    },
    {
      id: "skycast",
      year: "2025",
      title: "SkyCast — Real-Time Meteorological Intelligence App",
      tag: "Frontend & API Integration",
      summary:
        "Dynamic weather forecasting application built with vanilla JavaScript, HTML5, and CSS3. Features asynchronous API integration, responsive visual layouts, and detailed climate telemetry.",
      highlights: [
        "Asynchronous REST API consumption with real-time weather metrics",
        "Responsive interface with adaptive CSS layout architecture",
        "Geospatial search and dynamic weather visual states",
        "Interactive forecast cards for multi-day predictions",
      ],
      stack: ["JavaScript", "HTML5", "CSS3", "REST API"],
      repo: "https://github.com/ajazjamadar/Advanced-Weather-App",
      live: "",
      featured: false,
    },
    {
      id: "alphapulse",
      year: "2025",
      title: "AlphaPulse — Quantitative Financial & Market Analytics",
      tag: "Data Science & Machine Learning",
      summary:
        "Financial market analytics platform applying machine learning models (Logistic Regression, Random Forest) achieving 85% accuracy to extract financial drivers and predictive trend signals.",
      highlights: [
        "Applied Machine Learning algorithms (Random Forest, Logistic Regression)",
        "Quantitative feature extraction and data cleansing pipelines",
        "Statistical validation and exploratory financial visualizations",
        "Jupyter computational notebook with documented methodology",
      ],
      stack: ["Python", "Machine Learning", "Scikit-Learn", "Pandas"],
      repo: "https://github.com/ajazjamadar/StocksDashboard",
      live: "",
      featured: false,
    },
  ],
};

const ProjectCard = ({ project, index }) => (
  <FadeUp delay={index * 0.05}>
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-md transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.035] sm:p-7">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-neutral-300">
            {project.tag}
          </span>
          <span className="flex items-center gap-1 font-mono text-xs text-neutral-500">
            <LuCalendar size={12} className="text-[#e5af3a]" />
            {project.year}
          </span>
        </div>

        <h3 className="mt-4 font-editorial text-xl font-medium leading-snug text-white sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          {project.summary}
        </p>

        <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 sm:text-[13px]">
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e5af3a]/15 text-[#e5af3a]">
                <LuCheck size={11} />
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-5 border-t border-white/[0.08]">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((item) => {
            const [Icon, color] = tech(item);
            return (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-xs font-medium text-neutral-300"
              >
                <Icon size={12} style={{ color }} />
                <span>{item}</span>
              </span>
            );
          })}
        </div>

        <div className="flex items-center justify-between">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 transition-colors duration-300 hover:text-white"
            >
              <SiGithub size={15} />
              <span>Source Repository</span>
              <LuArrowUpRight size={13} />
            </a>
          ) : (
            <span className="text-xs text-neutral-500">Internal Codebase</span>
          )}

          {project.featured && (
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#e5af3a]">
              ★ Featured
            </span>
          )}
        </div>
      </div>
    </article>
  </FadeUp>
);

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");

  const allProjects = useMemo(() => {
    return [...projects.devops, ...projects.development];
  }, []);

  const displayedProjects = useMemo(() => {
    if (filter === "all") return allProjects;
    return projects[filter] || allProjects;
  }, [filter, allProjects]);

  return (
    <div className="min-h-screen bg-[#060709] px-3 py-6 text-white sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#0c0e14] px-5 py-12 sm:rounded-[28px] sm:px-12 sm:py-16 lg:px-16 lg:py-20 2xl:max-w-[1600px]">
        {/* Back navigation */}
        <FadeUp>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-neutral-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <LuArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>

          <div className="mt-8 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              Project Archive
            </span>
          </div>

          <h1 className="mt-4 font-editorial text-3xl font-medium leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
            Complete Project &amp;
            <br />
            <span className="font-normal italic text-neutral-400">Repository Catalog</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-[15px] sm:leading-7">
            A comprehensive catalog of enterprise platforms, cloud infrastructure pipelines, full-stack microservices, and predictive machine learning models built by Md Ejazuddin Jamadar.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { id: "all", label: `All Projects (${allProjects.length})` },
              { id: "development", label: `Software & Systems (${projects.development.length})` },
              { id: "devops", label: `Platform & DevOps (${projects.devops.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${
                  filter === tab.id
                    ? "bg-[#e5af3a] text-black shadow-sm"
                    : "border border-white/[0.08] bg-white/[0.02] text-neutral-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {displayedProjects.map((proj, idx) => (
            <ProjectCard key={proj.id} project={proj} index={idx} />
          ))}
        </div>

        {/* GitHub External Banner */}
        <FadeUp delay={0.2}>
          <div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="font-editorial text-xl font-medium text-white sm:text-2xl">
                Looking for more source code?
              </p>
              <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
                Explore commit histories, active branches, and experimental prototypes on GitHub.
              </p>
            </div>
            <a
              href="https://github.com/ajazjamadar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold text-black transition-all duration-300 hover:bg-neutral-200"
            >
              <SiGithub size={16} />
              <span>Visit GitHub Profile</span>
              <LuArrowUpRight size={14} />
            </a>
          </div>
        </FadeUp>

      </div>
    </div>
  );
};

export default ProjectsPage;