import { useEffect, useRef, useState } from "react";
import FadeUp from "../components/FadeUp";

import {
  SiGithubactions, SiDocker, SiKubernetes, SiTerraform, SiPrometheus,
  SiGrafana, SiJenkins, SiApachemaven, SiAnsible, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiJavascript, SiVite,
  SiJsonwebtokens, SiGithub, SiPostgresql, SiPython, SiSpringboot,
  SiLinux, SiFlask, SiTypescript, SiHtml5, SiCss,
} from "react-icons/si";

import { FaAws, FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

import {
  LuServer, LuNetwork, LuSplit, LuDatabase, LuBellRing, LuWebhook, LuBox,
  LuArrowLeft, LuArrowRight, LuArrowUpRight, LuBrain, LuShieldCheck, LuCheck,
  LuPlay, LuPause,
} from "react-icons/lu";
import { Link } from "react-router-dom";

/* ================= TECHNOLOGIES ================= */

const TECH = {
  "GitHub Actions": [SiGithubactions, "#2088ff"],
  Docker: [SiDocker, "#2496ed"],
  Kubernetes: [SiKubernetes, "#4f83f1"],
  Terraform: [SiTerraform, "#a26ee0"],
  AWS: [FaAws, "#ff9900"],
  EC2: [LuServer, "#ed7100"],
  VPC: [LuNetwork, "#8c4fff"],
  ALB: [LuSplit, "#8c4fff"],
  RDS: [LuDatabase, "#527fff"],
  PostgreSQL: [SiPostgresql, "#4169e1"],
  Prometheus: [SiPrometheus, "#e6522c"],
  Grafana: [SiGrafana, "#f46800"],
  Alertmanager: [LuBellRing, "#e6522c"],
  Jenkins: [SiJenkins, "#d24939"],
  Maven: [SiApachemaven, "#e0304f"],
  Ansible: [SiAnsible, "#ee3b3b"],
  React: [SiReact, "#61dafb"],
  Tailwind: [SiTailwindcss, "#06b6d4"],
  "Node.js": [SiNodedotjs, "#68a063"],
  Express: [SiExpress, "#ffffff"],
  MongoDB: [SiMongodb, "#47a248"],
  MySQL: [SiMysql, "#4a9fd0"],
  JavaScript: [SiJavascript, "#f7df1e"],
  TypeScript: [SiTypescript, "#3178c6"],
  Vite: [SiVite, "#a78bfa"],
  JWT: [SiJsonwebtokens, "#ffffff"],
  Java: [FaJava, "#f89820"],
  "Spring Boot": [SiSpringboot, "#6db33f"],
  Python: [SiPython, "#4b8bbe"],
  Flask: [SiFlask, "#ffffff"],
  Linux: [SiLinux, "#fcc624"],
  "Machine Learning": [LuBrain, "#a78bfa"],
  "Scikit-Learn": [SiPython, "#f7931e"],
  "REST API": [LuWebhook, "#a78bfa"],
  "Bash Scripting": [SiLinux, "#4eaa25"],
  "JUnit 5": [LuCheck, "#25a162"],
  SOLID: [LuShieldCheck, "#e5af3a"],
  SQL: [TbSql, "#38bdf8"],
  HTML5: [SiHtml5, "#e34f26"],
  CSS3: [SiCss, "#3d9be9"],
};

const tech = (name) => TECH[name] || [LuBox, "#ffffff"];

/* ================= PROJECTS ================= */

const projects = {
  devops: {
    label: "Platform & DevOps",
    blurb:
      "Infrastructure automation, continuous delivery pipelines, container platforms, and security auditing tools.",
    items: [
      {
        id: "cloudforge-terraform",
        title: "CloudForge — Infrastructure Pipeline",
        tag: "Cloud Infrastructure",
        description:
          "Automated cloud provisioning platform that executes speculative plan validation, manages state concurrency locking, and detects configuration drift to reliably maintain multi-tier cloud environments without manual intervention.",
        stack: ["Terraform", "AWS", "GitHub Actions", "Docker", "Linux"],
        art: ["#a26ee0", "#ff9900", "#2088ff"],
        repo: "https://github.com/ajazjamadar/Terraform-cloud-GitHub",
        live: "",
      },
      {
        id: "ansibleflow-cicd",
        title: "AnsibleFlow — Configuration Orchestrator",
        tag: "Server Automation",
        description:
          "Centralized server management and deployment framework that automates remote host provisioning, orchestrates software dependencies, and hardens production nodes with zero downtime.",
        stack: ["Ansible", "Linux", "Docker", "Bash Scripting", "Jenkins"],
        art: ["#ee3b3b", "#fcc624", "#2496ed"],
        repo: "https://github.com/ajazjamadar/ansible-ci-cd",
        live: "",
      },
      {
        id: "auditx-scanner",
        title: "AuditX — Web Vulnerability & Quality Scanner",
        tag: "Security & Auditing",
        description:
          "Automated website inspection engine that analyzes web endpoints for OWASP Top 10 vulnerabilities, diagnoses Core Web Vitals performance regressions, and scores accessibility compliance.",
        stack: ["TypeScript", "Node.js", "Express", "Docker", "Linux"],
        art: ["#3178c6", "#68a063", "#2496ed"],
        repo: "https://github.com/ajazjamadar/AuditX",
        live: "",
      },
    ],
  },

  development: {
    label: "Software & Systems",
    blurb:
      "Enterprise full-stack platforms, personal finance engines, real-time communications, and predictive analytics systems.",
    items: [
      {
        id: "nexthire",
        title: "NextHire — Job Portal & Recruitment Platform",
        tag: "Recruitment Portal",
        description:
          "Full-cycle hiring marketplace connecting job seekers with recruiters, featuring multi-criteria candidate search, resume document indexing, two-factor OTP authentication, and application stage tracking.",
        stack: ["Java", "Spring Boot", "React", "MongoDB", "JWT", "Docker"],
        art: ["#f89820", "#6db33f", "#61dafb"],
        repo: "https://github.com/ajazjamadar/NextHire",
        live: "",
      },
      {
        id: "fintrack",
        title: "FinTrack — Personal Finance & Banking Platform",
        tag: "Banking & Ledger",
        description:
          "Personal finance and mini-banking solution enabling users to maintain multi-account balances, process internal and external fund transfers, audit ledger transactions, and track expense trends.",
        stack: ["Java", "Spring Boot", "MySQL", "REST API", "Docker"],
        art: ["#f89820", "#6db33f", "#4a9fd0"],
        repo: "https://github.com/ajazjamadar/Personal-Finance-Tracker",
        live: "",
      },
      {
        id: "talentpulse-ems",
        title: "TalentPulse — Employee Management Platform",
        tag: "Enterprise HRMS",
        description:
          "Enterprise workforce management system built on strict SOLID design patterns, providing department hierarchy organization, annotation-based employee record validation, and automated reporting.",
        stack: ["Java", "Maven", "Jenkins", "SQL", "JUnit 5"],
        art: ["#f89820", "#e0304f", "#d24939"],
        repo: "https://github.com/ajazjamadar/Employee-Management-System",
        live: "",
      },
      {
        id: "mindpulse-stress",
        title: "MindPulse — Workplace Stress Prediction Engine",
        tag: "Predictive Analytics",
        description:
          "Predictive organizational health platform that evaluates workplace stress indicators across workload, scheduling, and job satisfaction to forecast burnout risks and surface proactive insights.",
        stack: ["Python", "Machine Learning", "Scikit-Learn", "Flask"],
        art: ["#4b8bbe", "#a78bfa", "#f7931e"],
        repo: "https://github.com/ajazjamadar/Employee-Stress-Prediction",
        live: "",
      },
      {
        id: "pulsechat",
        title: "PulseChat — Real-Time Messaging Platform",
        tag: "Instant Communication",
        description:
          "Full-duplex real-time chat application facilitating low-latency one-on-one direct messaging, public topic rooms, live typing presence, and instant message delivery notifications.",
        stack: ["JavaScript", "Node.js", "Express", "REST API", "Tailwind"],
        art: ["#f7df1e", "#68a063", "#06b6d4"],
        repo: "https://github.com/ajazjamadar/REAL-TIME-CHAT-APPLICATION-ONLINE",
        live: "",
      },
      {
        id: "trackify-jobs",
        title: "Trackify — Job Application Intelligence Tracker",
        tag: "Application Workflow",
        description:
          "Personal recruitment pipeline manager designed to log interview milestones, track offer stages, schedule follow-up reminders, and organize correspondence for career opportunities.",
        stack: ["Python", "Flask", "REST API", "SQL", "Docker"],
        art: ["#4b8bbe", "#ffffff", "#38bdf8"],
        repo: "https://github.com/ajazjamadar/Job-Tracker-Application",
        live: "",
      },
    ],
  },
};

/* ================= COMPONENT ================= */

const Projects = () => {
  const [tab, setTab] = useState("development");
  const [index, setIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);
  const dragStart = useRef(0);
  const isDragging = useRef(false);

  const active = projects[tab];
  const list = active.items;
  const count = list.length;
  const curr = list[index] || list[0];

  const switchTab = (t) => {
    setTab(t);
    setIndex(0);
  };

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  // Auto-scroll effect: advances every 3.8s, pauses on hover or user drag
  useEffect(() => {
    if (!isAutoScrolling || isHovered) return;

    const timer = setInterval(() => {
      if (!isDragging.current) {
        setIndex((prevIndex) => (prevIndex + 1) % count);
      }
    }, 3800);

    return () => clearInterval(timer);
  }, [isAutoScrolling, isHovered, count]);

  // drag / swipe
  const onDown = (e) => {
    isDragging.current = true;
    dragStart.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };
  const onUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const end = e.clientX ?? e.changedTouches?.[0]?.clientX ?? 0;
    const diff = end - dragStart.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) next();
      else prev();
    }
  };

  // 3D positioning
  const getStyle = (i) => {
    const d = (i - index + count) % count;
    const offset = d > count / 2 ? d - count : d;

    const visible = Math.abs(offset) <= 2;
    const tx = offset * 210;
    const tz = -Math.abs(offset) * 170;
    const ry = offset * -18;
    const opacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.45 : 0.15;
    const scale = offset === 0 ? 1 : 0.88;

    return {
      transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
      opacity: visible ? opacity : 0,
      pointerEvents: offset === 0 ? "auto" : "none",
      zIndex: 10 - Math.abs(offset),
      transition: "all 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)",
    };
  };

  return (
    <section
      id="projects"
      className="overflow-x-hidden bg-[#060709] px-2 py-2 text-white min-[400px]:px-3 min-[400px]:py-3 sm:px-6 sm:py-3"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0e14] px-4 py-10 min-[400px]:px-5 sm:rounded-[28px] sm:px-10 sm:py-16 lg:px-16 lg:py-20 2xl:max-w-[1600px]">

        {/* Ambient subtle glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{
            background: `radial-gradient(circle, ${curr.art[0]}22 0%, transparent 70%)`,
            transition: "background 0.8s ease",
          }}
        />

        {/* Header */}
        <FadeUp>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                  Featured Work
                </span>
              </div>

              <h2 className="mt-4 font-editorial text-3xl font-medium leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]">
                Architected &amp;
                <br />
                <span className="font-normal italic text-neutral-400">Deployed</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:mt-5 sm:text-[15px] sm:leading-7">
                {active.blurb}
              </p>
            </div>

            {/* Pill Tab Switcher + Auto Scroll Toggle */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                aria-label={isAutoScrolling ? "Pause auto-scroll" : "Resume auto-scroll"}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                  isAutoScrolling
                    ? "border-[#e5af3a]/40 bg-[#e5af3a]/10 text-[#e5af3a]"
                    : "border-white/10 bg-white/[0.03] text-neutral-400 hover:text-white"
                }`}
                title={isAutoScrolling ? "Click to pause auto-scroll" : "Click to resume auto-scroll"}
              >
                {isAutoScrolling ? <LuPause size={12} /> : <LuPlay size={12} />}
                <span>{isAutoScrolling ? "Auto-Scroll: On" : "Auto-Scroll: Off"}</span>
              </button>

              <div className="flex w-fit items-center rounded-full border border-white/[0.08] bg-white/[0.02] p-1 shadow-sm">
                {Object.entries(projects).map(([k, v]) => {
                  const isCur = tab === k;
                  return (
                    <button
                      key={k}
                      onClick={() => switchTab(k)}
                      className={`relative rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 ${
                        isCur
                          ? "bg-[#e5af3a] text-black shadow-sm"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {v.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* 3D Stage with Hover Pause */}
        <div
          className="relative mt-8 sm:mt-12 lg:mt-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={containerRef}
            onMouseDown={onDown}
            onMouseUp={onUp}
            onTouchStart={onDown}
            onTouchEnd={onUp}
            className="relative flex h-[360px] cursor-grab items-center justify-center active:cursor-grabbing min-[400px]:h-[400px] sm:h-[460px] lg:h-[490px]"
            style={{ perspective: 1200 }}
          >
            {list.map((p, i) => {
              const isCenter = i === index;
              // Ensure skills are unique and mentioned only once
              const uniqueStack = Array.from(new Set(p.stack));

              return (
                <div
                  key={p.id}
                  style={getStyle(i)}
                  className="absolute w-[86%] max-w-[340px] select-none min-[400px]:max-w-[380px] sm:max-w-[430px] lg:max-w-[460px]"
                >
                  <div
                    className={`group relative overflow-hidden rounded-2xl border bg-[#0d0f15] p-5 shadow-2xl transition-colors duration-300 sm:rounded-[24px] sm:p-7 ${
                      isCenter
                        ? "border-white/[0.16] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
                        : "border-white/[0.06]"
                    }`}
                  >
                    {/* Atmospheric color sheen */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
                      style={{
                        background: `radial-gradient(circle, ${p.art[0]}33 0%, transparent 70%)`,
                      }}
                    />

                    {/* Top row */}
                    <div className="relative flex items-center justify-between gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium tracking-wider text-neutral-300">
                        {p.tag}
                      </span>
                      <span className="font-mono text-xs text-neutral-500">
                        0{i + 1} / 0{count}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="relative mt-4 min-h-[52px] font-editorial text-lg font-medium leading-snug text-white min-[400px]:text-xl sm:min-h-[58px] sm:text-2xl">
                      {p.title}
                    </h3>

                    {/* Description: Defines what the project is about */}
                    <p className="relative mt-2 line-clamp-3 text-xs leading-relaxed text-neutral-400 sm:text-[13px] sm:leading-6">
                      {p.description}
                    </p>

                    {/* Stack chips: Technologies mentioned only once */}
                    <div className="relative mt-5 flex flex-wrap gap-1.5 sm:mt-6">
                      {uniqueStack.map((name) => {
                        const [Icon, color] = tech(name);
                        return (
                          <span
                            key={name}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.025] px-2 py-1 text-[11px] font-medium text-neutral-300"
                          >
                            <Icon size={12} style={{ color }} />
                            <span>{name}</span>
                          </span>
                        );
                      })}
                    </div>

                    {/* Actions */}
                    <div className="relative mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
                      {p.repo ? (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 transition-colors duration-300 hover:text-white"
                        >
                          <SiGithub size={14} />
                          <span>View Repository</span>
                          <LuArrowUpRight size={13} />
                        </a>
                      ) : (
                        <span className="text-xs text-neutral-500">Private Repository</span>
                      )}

                      <Link
                        to="/project"
                        className="text-xs font-mono text-[#e5af3a] transition-colors duration-300 hover:underline"
                      >
                        All details →
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <div className="mt-4 flex items-center justify-between sm:mt-6">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-7 bg-[#e5af3a]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-neutral-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <LuArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-neutral-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <LuArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* View all projects footer banner */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="font-editorial text-lg font-medium text-white sm:text-xl">
              Explore the full repository catalog
            </p>
            <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
              Discover NextHire, FinTrack, TalentPulse, AuditX, PulseChat, and more projects on GitHub.
            </p>
          </div>
          <Link
            to="/project"
            className="inline-flex items-center gap-2 rounded-full bg-[#e5af3a] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#f3c256]"
          >
            <span>View Full Archive</span>
            <LuArrowUpRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;