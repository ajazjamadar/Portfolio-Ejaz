import FadeUp from "../components/FadeUp";
import {
  LuGraduationCap,
  LuCalendar,
  LuMapPin,
  LuBookOpen,
  LuAward,
  LuSparkles,
} from "react-icons/lu";

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (Java)",
  "Database Management Systems (SQL)",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering & Architecture",
  "Cloud Computing & Virtualization",
  "Web Technologies",
];

const highlights = [
  {
    icon: LuAward,
    title: "Best Outgoing Student Award (2022–2026)",
    detail: "Awarded for exceptional academic performance, technical initiatives, and department leadership.",
  },
  {
    icon: LuSparkles,
    title: "Department Vice President (2025–2026)",
    detail: "Led technical symposiums, coding hackathons, and student workshops for the ISE department.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="overflow-x-hidden bg-[#060709] px-3 py-8 text-white min-[400px]:px-4 min-[400px]:py-10 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#0c0e14] px-5 py-12 min-[400px]:px-7 sm:rounded-[28px] sm:px-12 sm:py-20 lg:px-16 lg:py-24 2xl:max-w-[1600px]">

        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              Academic Background
            </span>
          </div>

          <h2 className="mt-4 max-w-2xl font-editorial text-3xl font-medium leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]">
            Education &amp;
            <br />
            <span className="font-normal italic text-neutral-400">Qualifications</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:mt-5 sm:text-[15px] sm:leading-7">
            Undergraduate engineering degree in Information Science and Engineering from Shree Devi Institute of Technology, affiliated with Visvesvaraya Technological University (VTU).
          </p>
        </FadeUp>

        {/* Main Education Grid */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1.3fr_1fr] lg:gap-12 xl:gap-16">

          {/* Primary Degree Card */}
          <FadeUp delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-xl transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.035] sm:p-8 md:p-10">
              {/* Subtle ambient light */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(229,175,58,0.12) 0%, transparent 70%)",
                }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#e5af3a] shadow-inner sm:h-14 sm:w-14">
                  <LuGraduationCap size={26} />
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e5af3a]/30 bg-[#e5af3a]/10 px-3.5 py-1 text-xs font-semibold text-[#e5af3a]">
                  CGPA: 8.23 / 10
                </span>
              </div>

              <div className="relative mt-6">
                <h3 className="font-editorial text-2xl font-medium text-white sm:text-3xl">
                  Bachelor of Engineering
                </h3>
                <p className="mt-1 font-editorial text-lg text-neutral-300">
                  Information Science &amp; Engineering (ISE)
                </p>

                <p className="mt-3 text-sm font-medium text-[#e5af3a]">
                  Shree Devi Institute of Technology (SDIT), Mangalore
                </p>
                <p className="mt-0.5 text-xs text-neutral-400">
                  Affiliated with Visvesvaraya Technological University (VTU), Belagavi
                </p>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-b border-white/[0.06] pb-6 text-xs text-neutral-400">
                  <span className="inline-flex items-center gap-1.5 font-mono">
                    <LuCalendar size={13} className="text-[#e5af3a]" />
                    2022 – 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <LuMapPin size={13} className="text-neutral-400" />
                    Mangalore, Karnataka, India
                  </span>
                </div>
              </div>

              {/* Coursework list */}
              <div className="relative mt-6">
                <div className="flex items-center gap-2">
                  <LuBookOpen size={14} className="text-[#e5af3a]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-300">
                    Core Coursework &amp; Foundations
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-neutral-300 transition-colors duration-200 hover:border-white/20 hover:text-white"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </FadeUp>

          {/* Academic Highlights & Honors Card */}
          <FadeUp delay={0.2}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-xl transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.035] sm:p-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                    Academic Milestones
                  </p>
                </div>

                <h3 className="mt-4 font-editorial text-xl font-medium text-white sm:text-2xl">
                  Key Honors &amp; Department Roles
                </h3>

                <div className="mt-6 space-y-6">
                  {highlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex gap-4 border-b border-white/[0.06] pb-6 last:border-0 last:pb-0"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-[#e5af3a]">
                          <Icon size={16} />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-neutral-400">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Institution badge */}
              <div className="mt-8 rounded-xl border border-white/[0.06] bg-black/40 p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-[#e5af3a]">
                  VTU Affiliated Engineering Program
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  Four-year professional engineering curriculum focusing on systems engineering, software development, algorithms, and distributed computing.
                </p>
              </div>

            </div>
          </FadeUp>

        </div>

      </div>
    </section>
  );
};

export default Education;
