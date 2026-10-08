import FadeUp from "../components/FadeUp";
import speechImg1 from "../assets/leadership-speaking-1.jpg";
import speechImg2 from "../assets/leadership-speaking-2.jpg";
import speechImg3 from "../assets/leadership-speaking-3.jpg";
import {
  LuBriefcase,
  LuCalendar,
  LuMapPin,
  LuAward,
  LuGraduationCap,
  LuTrophy,
  LuUsers,
  LuBadgeCheck,
  LuCloud,
  LuServer,
  LuCodeXml,
  LuTerminal,
  LuMic,
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

const certifications = [
  {
    icon: LuBadgeCheck,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Skill Builder",
    detail: "Core AWS architecture, IAM security, compute (EC2), VPC networking, S3 storage, and billing.",
  },
  {
    icon: LuBadgeCheck,
    title: "AWS Solutions Architect Associate",
    issuer: "Udemy Coursework",
    detail: "High availability architecture, decoupled systems, serverless, and multi-tier cloud infrastructure.",
  },
  {
    icon: LuBadgeCheck,
    title: "Java 21 & Spring Boot 3 Deep Dive",
    issuer: "Udemy",
    detail: "Enterprise backend development, Spring Data JPA, Hibernate, RESTful APIs, and Maven.",
  },
  {
    icon: LuBadgeCheck,
    title: "Spring Security 6 & JWT Masterclass",
    issuer: "Udemy",
    detail: "Token-based stateless authentication, RBAC authorization filters, and secure API gateways.",
  },
  {
    icon: LuBadgeCheck,
    title: "REST APIs with Flask and Python",
    issuer: "Udemy",
    detail: "Lightweight microservice APIs, SQLAlchemy ORM, and Docker deployment.",
  },
  {
    icon: LuBadgeCheck,
    title: "Web Development (HTML5, CSS3, JS)",
    issuer: "Infosys Springboard",
    detail: "Modern semantic frontend development, responsive design, and asynchronous JavaScript.",
  },
];

const leadershipHonors = [
  {
    icon: LuTrophy,
    title: "Best Outgoing Student Award (2022–2026)",
    issuer: "Dept. of Information Science & Engineering, SDIT",
    detail: "Awarded for exceptional academic excellence, technical contributions, and departmental leadership.",
  },
  {
    icon: LuUsers,
    title: "Vice President — Dept. of ISE (2025–2026)",
    issuer: "Shree Devi Institute of Technology",
    detail: "Led departmental technical symposiums, hackathons, and student coding workshops across the college.",
  },
  {
    icon: LuUsers,
    title: "General Secretary & Joint Secretary — Dept. of ISE",
    issuer: "SDIT (2023–2025)",
    detail: "Spearheaded student outreach, guest lectures, and industry connect sessions for 2 consecutive terms.",
  },
  {
    icon: LuMic,
    title: "Media & Publicity Head — SDIT IEEE Student Chapter",
    issuer: "IEEE Chapter (2024–2026)",
    detail: "Managed publicity campaigns, technical conference promotions, and digital outreach for university events.",
  },
  {
    icon: LuAward,
    title: "Hack Yugma Hackathon (2025) Finalist",
    issuer: "Cybersecurity Solution Track",
    detail: "Built and demonstrated an automated vulnerability and auditing solution under competition constraints.",
  },
  {
    icon: LuTrophy,
    title: "2nd Place — Intra-College Technical Quiz & Mind Matrix",
    issuer: "Sankalp 2025",
    detail: "Recognized among top teams in computer architecture, networking, and algorithms.",
  },
];

const education = {
  degree: "B.E. in Information Science and Engineering",
  school: "Shree Devi Institute of Technology (SDIT), Mangalore",
  period: "2022 – 2026",
  detail: "CGPA: 8.23 / 10 · Visvesvaraya Technological University (VTU)",
};

const leadershipPhotos = [
  {
    src: speechImg1,
    title: "Department Leadership Address",
    subtitle: "Addressing students and faculty at SDIT symposium",
  },
  {
    src: speechImg2,
    title: "Technical Conference & Stage Speech",
    subtitle: "Delivering welcome and technical keynote address",
  },
  {
    src: speechImg3,
    title: "Student Mentorship & Event Coordination",
    subtitle: "Coordinating technical sessions and panel discussions",
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

const SideCard = ({ heading, entries, delay }) => (
  <FadeUp delay={delay}>
    <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-md transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.035] sm:p-7 md:p-8">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
          {heading}
        </p>
      </div>

      <div className="mt-6 space-y-5 sm:space-y-6">
        {entries.map((entry, i) => {
          const Icon = entry.icon;
          return (
            <div key={i} className="flex gap-3.5 border-b border-white/[0.04] pb-4 sm:pb-5 last:border-0 last:pb-0">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-[#e5af3a]">
                <Icon size={15} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="break-words text-sm font-medium leading-5 text-white">
                  {entry.title}
                </p>
                {entry.issuer && (
                  <p className="mt-0.5 font-mono text-[11px] text-[#e5af3a]/80">
                    {entry.issuer}
                  </p>
                )}
                <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                  {entry.detail}
                </p>
              </div>
            </div>
          );
        })}
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

        {/* Header */}
        <FadeUp>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              Career &amp; Leadership
            </span>
          </div>

          <h2 className="mt-4 max-w-2xl font-editorial text-3xl font-medium leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]">
            Where I've
            <br />
            <span className="font-normal italic text-neutral-400">engineered, led & delivered</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:mt-5 sm:text-[15px] sm:leading-7">
            From deploying scalable cloud infrastructure at Desisle and DevOps Academy to building Java Spring Boot backends, alongside extensive university leadership as Vice President and Best Outgoing Student.
          </p>
        </FadeUp>

        {/* Body: stacked below lg, timeline + side column from lg */}
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

          {/* Right Column: Education, Certs, Leadership */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
            {/* Education */}
            <FadeUp delay={0.15}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-md transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.035] sm:p-7 md:p-8">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                    Education
                  </p>
                </div>

                <div className="mt-5 flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-[#e5af3a]">
                    <LuGraduationCap size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="break-words font-editorial text-lg font-medium text-white sm:text-xl">
                      {education.degree}
                    </p>
                    <p className="mt-1 text-sm text-neutral-300">
                      {education.school}
                    </p>
                    <p className="mt-2 font-mono text-xs text-[#e5af3a]">
                      {education.period} · {education.detail}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Certifications */}
            <SideCard
              heading="Certifications & Coursework"
              entries={certifications}
              delay={0.2}
            />

            {/* Leadership & Honors */}
            <SideCard
              heading="Honors & Leadership Roles"
              entries={leadershipHonors}
              delay={0.25}
            />
          </div>

        </div>

        {/* Leadership & Speaking Highlights Photo Section */}
        <div className="mt-24 border-t border-white/[0.08] pt-16 sm:mt-32 sm:pt-20 lg:mt-36 lg:pt-24">
          <FadeUp>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                Leadership In Action
              </span>
            </div>
            <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h3 className="font-editorial text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
                  Campus Speaking &amp; <span className="italic text-neutral-400">Public Addresses</span>
                </h3>
                <p className="mt-2 max-w-xl text-sm text-neutral-400">
                  Keynote addresses, department inauguration speeches, and technical coordination at Shree Devi Institute of Technology.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs text-neutral-300 md:self-auto">
                <LuMic size={14} className="text-[#e5af3a]" />
                VP · Department of ISE
              </span>
            </div>
          </FadeUp>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipPhotos.map((photo, idx) => (
              <FadeUp key={idx} delay={0.1 + idx * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.04]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="font-editorial text-base font-medium text-white sm:text-lg">
                      {photo.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;