import FadeUp from "../components/FadeUp";
import { LuBadgeCheck } from "react-icons/lu";
import { FaAws, FaJava } from "react-icons/fa";
import { SiSpringboot, SiPython, SiHtml5 } from "react-icons/si";

const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Skill Builder",
    date: "Certified",
    icon: FaAws,
    color: "#ff9900",
    skills: ["AWS EC2", "VPC Networking", "S3 Storage", "IAM Security", "Cloud Architecture"],
    detail:
      "Core cloud fundamentals, security models, global AWS infrastructure, compute, storage, databases, and billing strategies.",
  },
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Udemy Coursework",
    date: "Completed Coursework",
    icon: FaAws,
    color: "#ff9900",
    skills: ["High Availability", "Decoupled Systems", "Auto Scaling", "Route 53", "Multi-Tier"],
    detail:
      "Architecting highly available, cost-efficient, fault-tolerant, and scalable distributed systems on Amazon Web Services.",
  },
  {
    title: "Java 21 & Spring Boot 3 Deep Dive",
    issuer: "Udemy",
    date: "Certified",
    icon: FaJava,
    color: "#f89820",
    skills: ["Java 21", "Spring Boot 3", "Spring Data JPA", "Hibernate", "REST APIs"],
    detail:
      "Production-grade enterprise backend engineering with modern Java 21 features, Spring Data persistence, and RESTful architectures.",
  },
  {
    title: "Spring Security 6 & JWT Masterclass",
    issuer: "Udemy",
    date: "Certified",
    icon: SiSpringboot,
    color: "#6db33f",
    skills: ["Spring Security 6", "JWT Auth", "OAuth2", "RBAC", "API Security"],
    detail:
      "Token-based stateless authentication, custom security filter chains, role-based access control (RBAC), and endpoint hardening.",
  },
  {
    title: "REST APIs with Flask and Python",
    issuer: "Udemy",
    date: "Certified",
    icon: SiPython,
    color: "#4b8bbe",
    skills: ["Python", "Flask", "SQLAlchemy", "Marshmallow", "Docker"],
    detail:
      "Designing lightweight RESTful microservices, ORM database modeling, error handling, and Docker container packaging.",
  },
  {
    title: "Web Development (HTML5, CSS3, JS)",
    issuer: "Infosys Springboard",
    date: "Certified",
    icon: SiHtml5,
    color: "#e34f26",
    skills: ["HTML5", "CSS3", "JavaScript ES6", "Responsive Design", "DOM APIs"],
    detail:
      "Modern semantic markup, responsive CSS architectures, asynchronous JavaScript, and interactive browser applications.",
  },
];

const Certification = () => {
  return (
    <section
      id="certifications"
      className="overflow-x-hidden bg-[#060709] px-3 py-8 text-white min-[400px]:px-4 min-[400px]:py-10 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#0c0e14] px-5 py-12 min-[400px]:px-7 sm:rounded-[28px] sm:px-12 sm:py-20 lg:px-16 lg:py-24 2xl:max-w-[1600px]">

        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              Verified Credentials
            </span>
          </div>

          <h2 className="mt-4 max-w-2xl font-editorial text-3xl font-medium leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]">
            Certifications &amp;
            <br />
            <span className="font-normal italic text-neutral-400">Professional Training</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:mt-5 sm:text-[15px] sm:leading-7">
            Industry credentials and specialized courses completed across AWS cloud architecture, modern Java 21, Spring Boot microservices, security, and backend engineering.
          </p>
        </FadeUp>

        {/* Certifications Grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <FadeUp key={cert.title} delay={0.08 + idx * 0.06}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-md transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.035] sm:p-7">
                  {/* Sheen on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle, ${cert.color}22 0%, transparent 70%)`,
                    }}
                  />

                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-transform duration-300 group-hover:scale-105"
                        style={{ color: cert.color }}
                      >
                        <Icon size={20} />
                      </span>

                      <span className="inline-flex items-center gap-1 rounded-full border border-[#e5af3a]/25 bg-[#e5af3a]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#e5af3a]">
                        <LuBadgeCheck size={12} />
                        {cert.date}
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <h3 className="mt-4 font-editorial text-lg font-medium leading-snug text-white sm:text-xl">
                      {cert.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[#e5af3a]/90">
                      {cert.issuer}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-neutral-400 sm:text-[13px] sm:leading-6">
                      {cert.detail}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[11px] font-medium text-neutral-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certification;
