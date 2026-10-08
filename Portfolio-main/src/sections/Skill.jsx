import { useEffect, useRef, useState } from "react";
import FadeUp from "../components/FadeUp";

import {
  SiLinux, SiGnubash, SiGit, SiGithub, SiDocker, SiKubernetes,
  SiTerraform, SiAnsible, SiJenkins, SiApachemaven,
  SiPrometheus, SiGrafana, SiReact, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiPython, SiC, SiMongodb, SiMysql, SiPostgresql,
  SiSpringboot, SiNginx, SiGitlab,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbLambda, TbSql } from "react-icons/tb";
import {
  LuWorkflow, LuCloud, LuLayoutDashboard, LuServerCog, LuCode, LuDatabase,
  LuServer, LuNetwork, LuSplit, LuMaximize, LuArchive, LuRoute,
  LuKeyRound, LuActivity, LuWebhook, LuRadio,
} from "react-icons/lu";

/* name, icon, brand color (tuned to read on dark editorial background) */
const s = (name, icon, color) => ({ name, icon, color });

// AWS category colours
const AWS = {
  orange: "#ff9900",
  compute: "#ed7100",
  network: "#8c4fff",
  storage: "#7aa116",
  db: "#527fff",
  security: "#dd344c",
  mgmt: "#e7157b",
};

const skillCategories = [
  {
    title: "DevOps",
    description: "Automation, containers, orchestration & CI/CD",
    icon: LuWorkflow,
    skills: [
      s("Linux", SiLinux, "#fcc624"),
      s("Shell Scripting", SiGnubash, "#4eaa25"),
      s("Git", SiGit, "#f05032"),
      s("GitHub", SiGithub, "#ffffff"),
      s("GitLab", SiGitlab, "#fc6d26"),
      s("Docker", SiDocker, "#2496ed"),
      s("Docker Swarm", SiDocker, "#2496ed"),
      s("Kubernetes", SiKubernetes, "#4f83f1"),
      s("Terraform", SiTerraform, "#a26ee0"),
      s("Ansible", SiAnsible, "#ee3b3b"),
      s("Jenkins", SiJenkins, "#d24939"),
      s("Maven", SiApachemaven, "#e0304f"),
      s("Nginx", SiNginx, "#009639"),
      s("Prometheus", SiPrometheus, "#e6522c"),
      s("Grafana", SiGrafana, "#f46800"),
      s("PagerDuty", LuRadio, "#00ad43"),
    ],
  },
  {
    title: "Cloud",
    description: "Cloud infrastructure & AWS services",
    icon: LuCloud,
    skills: [
      s("AWS", FaAws, AWS.orange),
      s("EC2", LuServer, AWS.compute),
      s("VPC", LuNetwork, AWS.network),
      s("ALB", LuSplit, AWS.network),
      s("Auto Scaling", LuMaximize, AWS.compute),
      s("S3", LuArchive, AWS.storage),
      s("IAM", LuKeyRound, AWS.security),
      s("Route 53", LuRoute, AWS.network),
      s("CloudWatch", LuActivity, AWS.mgmt),
      s("Azure", LuCloud, "#0078d4"),
      s("Lambda", TbLambda, AWS.compute),
      s("RDS", LuDatabase, AWS.db),
    ],
  },
  {
    title: "Frontend",
    description: "Modern responsive web interfaces",
    icon: LuLayoutDashboard,
    skills: [
      s("React.js", SiReact, "#61dafb"),
      s("JavaScript", SiJavascript, "#f7df1e"),
      s("HTML5", SiHtml5, "#e34f26"),
      s("CSS3", SiCss, "#3d9be9"),
      s("Tailwind CSS", SiTailwindcss, "#06b6d4"),
    ],
  },
  {
    title: "Backend",
    description: "Enterprise Java & Spring Boot microservices",
    icon: LuServerCog,
    skills: [
      s("Java 21", FaJava, "#f89820"),
      s("Spring Boot", SiSpringboot, "#6db33f"),
      s("Spring Security", SiSpringboot, "#6db33f"),
      s("Python", SiPython, "#4b8bbe"),
      s("Flask", LuServerCog, "#ffffff"),
      s("RESTful APIs", LuWebhook, "#a78bfa"),
      s("Tomcat", LuServer, "#f89820"),
    ],
  },
  {
    title: "Programming",
    description: "Languages & scripting",
    icon: LuCode,
    skills: [
      s("Java", FaJava, "#f89820"),
      s("Python", SiPython, "#4b8bbe"),
      s("Bash Scripting", SiGnubash, "#4eaa25"),
      s("C", SiC, "#a8b9cc"),
    ],
  },
  {
    title: "Database",
    description: "Data storage & migration management",
    icon: LuDatabase,
    skills: [
      s("MySQL", SiMysql, "#4a9fd0"),
      s("PostgreSQL", SiPostgresql, "#4169e1"),
      s("MongoDB", SiMongodb, "#47a248"),
      s("Flyway", LuDatabase, "#cc0000"),
      s("SQL", TbSql, "#38bdf8"),
    ],
  },
];

/* Fires once when the element scrolls into view */
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
};

const SkillCard = ({ category, className = "", delay = 0 }) => {
  const [ref, visible] = useInView(0.05);
  const Icon = category.icon;

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      className={`group/card relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6 ${
        visible ? "card-in" : "opacity-0"
      } ${className}`}
    >
      {/* Subtle cursor spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.06), transparent 65%)",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition-all duration-300 group-hover/card:border-white/20 group-hover/card:bg-white/[0.08] sm:h-11 sm:w-11">
              <Icon size={20} />
            </span>

            <div className="min-w-0">
              <h3 className="text-base font-medium tracking-tight text-white sm:text-lg">
                {category.title}
              </h3>
              <p className="mt-0.5 text-xs text-neutral-400 sm:text-[13px]">
                {category.description}
              </p>
            </div>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-neutral-400">
            {category.skills.length}
          </span>
        </div>

        {/* Skill chips */}
        <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
          {category.skills.map((skill, i) => {
            const SkillIcon = skill.icon;
            return (
              <span
                key={skill.name}
                style={{
                  "--c": skill.color,
                  animationDelay: `${delay + 150 + i * 35}ms`,
                }}
                className={`group inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--c)_50%,transparent)] hover:bg-[color-mix(in_srgb,var(--c)_12%,transparent)] hover:text-white hover:shadow-[0_8px_20px_-10px_var(--c)] sm:gap-2 sm:px-3 sm:py-2 sm:text-[13px] ${
                  visible ? "chip-in" : "opacity-0"
                }`}
              >
                <SkillIcon
                  size={15}
                  style={{ color: skill.color }}
                  className="shrink-0 transition-transform duration-300 group-hover:scale-115"
                />
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [devops, cloud, frontend, backend, programming, database] =
    skillCategories;

  return (
    <section
      id="skills"
      className="overflow-x-hidden bg-[#060709] px-2 py-2 text-white min-[400px]:px-3 min-[400px]:py-3 sm:px-6 sm:py-3"
    >
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#0c0e14] px-5 py-10 min-[400px]:px-7 sm:rounded-[28px] sm:px-10 sm:py-16 lg:px-16 lg:py-20 2xl:max-w-[1600px]">

        {/* Header */}
        <FadeUp>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              Toolkit &amp; Expertise
            </span>
          </div>

          <h2 className="mt-4 font-editorial text-3xl font-medium leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]">
            Technologies
            <br />
            <span className="font-normal italic text-neutral-400">I work with</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:mt-5 sm:text-[15px] sm:leading-7">
            Tools I use across software development, cloud infrastructure,
            automation, CI/CD, and deployment.
          </p>
        </FadeUp>

        {/* Bento grid */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          <SkillCard category={devops} className="md:col-span-2 lg:col-span-4" />

          <div className="flex min-w-0 flex-col gap-3 sm:gap-4 md:col-span-2 md:flex-row lg:col-span-2 lg:flex-col">
            <SkillCard category={frontend} delay={100} className="flex-1" />
            <SkillCard category={backend} delay={200} className="flex-1" />
          </div>

          <SkillCard category={cloud} delay={100} className="md:col-span-2 lg:col-span-4" />

          <div className="flex min-w-0 flex-col gap-3 sm:gap-4 md:col-span-2 md:flex-row lg:col-span-2 lg:flex-col">
            <SkillCard category={programming} delay={100} className="flex-1" />
            <SkillCard category={database} delay={200} className="flex-1" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;