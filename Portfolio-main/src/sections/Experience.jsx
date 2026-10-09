import FadeUp from "../components/FadeUp";
import {
  LuBriefcase,
  LuCalendar,
  LuMapPin,
  LuAward,
  LuCloud,
  LuServer,
  LuCodeXml,
  LuTerminal,
  LuWorkflow,
  LuShieldCheck,
  LuCpu,
} from "react-icons/lu";

/* ------------------------------------------------------------------
   Ejaz's Real Experience & Career Roles
------------------------------------------------------------------- */
const experience = [
  {
    role: "Software & Platform Engineer",
    company: "Desisle — Global SaaS Design Agency",
    location: "Bengaluru, India (Remote / Hybrid)",
    period: "Sep 2026 – Present",
    current: true,
    points: [
      {
        icon: LuCloud,
        text: "Architected and managed multi-region AWS cloud infrastructure (EC2, S3, IAM, Route 53, CloudWatch), ensuring 99.9% uptime for client SaaS applications.",
      },
      {
        icon: LuServer,
        text: "Engineered automated CI/CD pipelines with GitHub Actions, Jenkins, and Docker, cutting deployment cycle times by 40% and eliminating release bottlenecks.",
      },
      {
        icon: LuTerminal,
        text: "Standardized Infrastructure-as-Code (Terraform) and server configurations across production, staging, and preview environments.",
      },
      {
        icon: LuCodeXml,
        text: "Configured centralized logging and Prometheus/Grafana observability dashboards for real-time latency and reliability monitoring.",
      },
    ],
  },
  {
    role: "DevOps & Cloud Engineer Intern",
    company: "DevOps Academy Pvt Ltd",
    location: "Bengaluru, Karnataka",
    period: "Jun 2026 – Sep 2026",
    current: false,
    points: [
      {
        icon: LuCloud,
        text: "Provisioned resilient AWS environments using Terraform (VPC, Subnets, EC2, ALB, Auto Scaling Groups, S3) with remote state management.",
      },
      {
        icon: LuTerminal,
        text: "Built complete CI/CD pipelines in Jenkins and GitHub Actions featuring Maven automated builds, SonarQube code scanning, and Docker containerization.",
      },
      {
        icon: LuServer,
        text: "Deployed microservices into Kubernetes clusters, authoring production manifests (Deployments, Services, ConfigMaps, Ingress controllers).",
      },
      {
        icon: LuAward,
        text: "Configured Prometheus metrics scraping and Grafana health dashboards for cluster resource optimization.",
      },
    ],
  },
  {
    role: "AI Research & Development Intern",
    company: "Learners Byte",
    location: "Hyderabad, India",
    period: "Jan 2026 – Jun 2026",
    current: false,
    points: [
      {
        icon: LuCodeXml,
        text: "Engineered predictive machine learning pipelines using Python, Scikit-learn, and Pandas for automated analytical workflows.",
      },
      {
        icon: LuServer,
        text: "Optimized model evaluation and inference latency, containerized models using Docker, and served predictions via Flask REST APIs.",
      },
    ],
  },
  {
    role: "Software Development Intern",
    company: "QBurst Technologies Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    period: "Jan 2026 – Apr 2026",
    current: false,
    points: [
      {
        icon: LuCodeXml,
        text: "Developed high-throughput REST APIs using Java 21, Spring Boot, Spring Security, and Maven following clean modular architecture.",
      },
      {
        icon: LuServer,
        text: "Implemented JWT authentication and Role-Based Access Control (RBAC); architected relational schemas with PostgreSQL, MySQL, and Flyway.",
      },
    ],
  },
  {
    role: "Application Support & Deployment Intern",
    company: "CODTECH IT Solutions",
    location: "Hyderabad, India",
    period: "Aug 2025 – Sep 2025",
    current: false,
    points: [
      {
        icon: LuTerminal,
        text: "Managed staging web application deployments on Ubuntu/Linux servers with Nginx reverse proxy configuration and SSL certificate provisioning.",
      },
      {
        icon: LuBriefcase,
        text: "Troubleshot server logs and network configurations to resolve staging environment issues and streamline version control release branches.",
      },
    ],
  },
];

const impactHighlights = [
  {
    metric: "99.9%",
    label: "Infrastructure Uptime",
    detail: "Maintained multi-region AWS cloud infrastructure across agency web applications.",
  },
  {
    metric: "40%",
    label: "Release Time Reduction",
    detail: "Automated CI/CD pipelines with GitHub Actions, Jenkins, and Docker containers.",
  },
  {
    metric: "150+",
    label: "Students Mentored",
    detail: "Organized technical symposiums, coding workshops, and IEEE university events as Department VP.",
  },
];

const corePractices = [
  {
    icon: LuCloud,
    title: "Infrastructure as Code",
    detail: "Declarative cloud provisioning with Terraform and automated AWS state management.",
  },
  {
    icon: LuWorkflow,
    title: "Continuous Delivery",
    detail: "Automated test-build-deploy pipelines using GitHub Actions, Jenkins, and container images.",
  },
  {
    icon: LuCpu,
    title: "Resilient Microservices",
    detail: "Modular backend services built with Java 21, Spring Boot 3, Python Flask, and secure RBAC.",
  },
  {
    icon: LuShieldCheck,
    title: "Production Observability",
    detail: "Full-stack monitoring, telemetry metrics, and centralized logging across cloud environments.",
  },
];

const TimelineItem = ({ item, delay }) => (
  <FadeUp delay={delay}>
    <div className="relative pl-12 sm:pl-16">
      {/* Node centered over the rail */}
      <span className="absolute left-0 top-1.5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#e5af3a]/60 bg-[#0c0e14] text-[#e5af3a] shadow-[0_0_15px_rgba(229,175,58,0.25)] sm:h-10 sm:w-10">
        <LuBriefcase size={16} />
      </span>

      {/* Card */}
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 shadow-lg transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.04] min-[400px]:p-6 sm:p-7 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div className="min-w-0">
            <h3 className="font-editorial text-lg font-medium text-white min-[400px]:text-xl sm:text-2xl">
              {item.role}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#e5af3a]">{item.company}</p>
          </div>

          {item.current && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e5af3a]/30 bg-[#e5af3a]/10 px-3.5 py-1 text-[11px] font-medium text-[#e5af3a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
              Current Role
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-400">
          <span className="inline-flex items-center gap-1.5 font-mono">
            <LuCalendar size={13} className="text-[#e5af3a]" />
            {item.period}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LuMapPin size={13} className="text-neutral-400" />
            {item.location}
          </span>
        </div>

        <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-3.5">
          {item.points.map((point, i) => {
            const Icon = point.icon;
            return (
              <li key={i} className="flex items-start gap-3.5 sm:gap-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04] text-[#e5af3a]">
                  <Icon size={13} />
                </span>
                <span className="min-w-0 break-words text-[13px] leading-relaxed text-neutral-300 sm:text-sm">
                  {point.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </FadeUp>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="overflow-x-hidden bg-[#060709] px-3 py-8 text-white min-[400px]:px-4 min-[400px]:py-10 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#0c0e14] px-5 py-12 min-[400px]:px-7 sm:rounded-[28px] sm:px-12 sm:py-20 lg:px-16 lg:py-24 2xl:max-w-[1600px]">

        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              Career Journey
            </span>
          </div>

          <h2 className="mt-4 max-w-2xl font-editorial text-3xl font-medium leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]">
            Where I've
            <br />
            <span className="font-normal italic text-neutral-400">engineered, deployed & scaled</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:mt-5 sm:text-[15px] sm:leading-7">
            Hands-on work experience in cloud platform architecture, DevOps automation, and backend development across production agency systems.
          </p>
        </FadeUp>

        {/* Body: 2 columns */}
        <div className="mt-12 grid gap-12 sm:mt-16 sm:gap-14 lg:mt-20 lg:grid-cols-[1.3fr_1fr] lg:gap-16 xl:gap-20">

          {/* Left Column: Timeline with continuous rail and flex gap */}
          <div className="relative min-w-0">
            <div className="mb-8 flex items-center gap-2 sm:mb-10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300">
                Work Experience &amp; Internships
              </h3>
            </div>

            {/* Continuous Vertical Rail passing through nodes */}
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-8 left-[17px] top-16 w-px bg-gradient-to-b from-[#e5af3a]/60 via-white/[0.12] to-white/[0.02] sm:left-[19px] sm:top-18"
            />

            {/* List with generous flex gap */}
            <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
              {experience.map((item, i) => (
                <TimelineItem
                  key={`${item.company}-${i}`}
                  item={item}
                  delay={0.08 + i * 0.08}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Key Impact + Core Engineering Focus */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">

            {/* Impact Highlights */}
            <FadeUp delay={0.15}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-md transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.035] sm:p-7 md:p-8">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                    Engineering Impact
                  </p>
                </div>

                <div className="mt-6 grid gap-4">
                  {impactHighlights.map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/[0.06] bg-black/40 p-4 transition-all duration-200 hover:border-[#e5af3a]/30"
                    >
                      <div className="flex items-baseline gap-2">
                        <span className="font-editorial text-2xl font-medium text-[#e5af3a]">
                          {stat.metric}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-white">
                          {stat.label}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                        {stat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Core Platform Practices */}
            <FadeUp delay={0.25}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-md transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.035] sm:p-7 md:p-8">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                    Platform Engineering Tenets
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  {corePractices.map((practice, i) => {
                    const Icon = practice.icon;
                    return (
                      <div
                        key={i}
                        className="flex gap-3.5 border-b border-white/[0.04] pb-4 sm:pb-4.5 last:border-0 last:pb-0"
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-[#e5af3a]">
                          <Icon size={15} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium leading-5 text-white">
                            {practice.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                            {practice.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeUp>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;