import FadeUp from "../components/FadeUp";
import speechImg1 from "../assets/leadership-speaking-1.jpg";
import speechImg2 from "../assets/leadership-speaking-2.jpg";
import speechImg3 from "../assets/leadership-speaking-3.jpg";
import {
  LuTrophy,
  LuUsers,
  LuMic,
  LuAward,
  LuSparkles,
} from "react-icons/lu";

const honorsAndLeadership = [
  {
    icon: LuTrophy,
    title: "Best Outgoing Student Award",
    period: "2022–2026",
    issuer: "Dept. of Information Science & Engineering, SDIT",
    highlight: "Highest Departmental Honor",
    detail:
      "Conferred for outstanding academic performance, sustained technical contributions, and distinguished departmental leadership across all four academic years.",
  },
  {
    icon: LuUsers,
    title: "Vice President — Dept. of ISE",
    period: "2025–2026",
    issuer: "Shree Devi Institute of Technology",
    highlight: "Executive Governance",
    detail:
      "Led the departmental student council, coordinated technical symposiums, organized collegiate hackathons, and conducted peer programming workshops.",
  },
  {
    icon: LuUsers,
    title: "General Secretary & Joint Secretary",
    period: "2023–2025",
    issuer: "Dept. of ISE · SDIT",
    highlight: "2 Consecutive Terms",
    detail:
      "Spearheaded student outreach, managed academic seminar logistics, and facilitated industry expert connect sessions for two consecutive tenures.",
  },
  {
    icon: LuMic,
    title: "Media & Publicity Head",
    period: "2024–2026",
    issuer: "SDIT IEEE Student Chapter",
    highlight: "IEEE Chapter",
    detail:
      "Managed publicity campaigns, public technical communications, and conference marketing initiatives for university-wide IEEE activities.",
  },
  {
    icon: LuAward,
    title: "Hack Yugma Hackathon Finalist",
    period: "2025",
    issuer: "Cybersecurity Solution Track",
    highlight: "Competition Finalist",
    detail:
      "Architected and demonstrated an automated security vulnerability scanner and auditing engine under strict hackathon sprint constraints.",
  },
  {
    icon: LuTrophy,
    title: "2nd Place — Intra-College Technical Quiz",
    period: "Sankalp 2025",
    issuer: "Mind Matrix · SDIT",
    highlight: "Silver Laureate",
    detail:
      "Recognized among top competitors in systems architecture, computer networks, algorithmic problem solving, and operating systems.",
  },
];

const speechGallery = [
  {
    src: speechImg1,
    title: "Inaugural Address & Department Welcome",
    subtitle:
      "Addressing first-year engineering cohorts and faculty guests during the academic session commencement.",
  },
  {
    src: speechImg2,
    title: "Technical Orientation & Leadership",
    subtitle:
      "Sharing technical development roadmaps and departmental club initiatives as Vice President of ISE.",
  },
  {
    src: speechImg3,
    title: "Valedictory & Peer Mentorship",
    subtitle:
      "Delivering valedictory remarks and mentoring junior engineering students on technical career planning.",
  },
];

const HonorsLeadership = () => {
  return (
    <section
      id="leadership"
      className="overflow-x-hidden bg-[#060709] px-3 py-8 text-white min-[400px]:px-4 min-[400px]:py-10 sm:px-6 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#0c0e14] px-5 py-12 min-[400px]:px-7 sm:rounded-[28px] sm:px-12 sm:py-20 lg:px-16 lg:py-24 2xl:max-w-[1600px]">
        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5af3a]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              Recognition &amp; Governance
            </span>
          </div>

          <h2 className="mt-4 max-w-2xl font-editorial text-3xl font-medium leading-[1.08] tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-[56px]">
            Honors &amp;
            <br />
            <span className="font-normal italic text-neutral-400">
              Department Leadership
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:mt-5 sm:text-[15px] sm:leading-7">
            Distinctions awarded for academic excellence, elected student governance tenures, and keynote public speaking at Shree Devi Institute of Technology.
          </p>
        </FadeUp>

        {/* Honors & Leadership Cards Grid */}
        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {honorsAndLeadership.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delay={0.06 * i}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-[#e5af3a]/40 hover:bg-white/[0.04]">
                  {/* Top Header */}
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#e5af3a] transition-all duration-300 group-hover:scale-105 group-hover:border-[#e5af3a]/30 group-hover:bg-[#e5af3a]/10">
                        <Icon size={20} />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-neutral-400">
                        {item.period}
                      </span>
                    </div>

                    <div className="mt-5">
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#e5af3a]/90">
                        <LuSparkles size={11} />
                        {item.highlight}
                      </div>

                      <h3 className="mt-1 text-base font-medium leading-snug text-white sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-neutral-400 font-mono">
                        {item.issuer}
                      </p>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-neutral-300">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Campus Speaking & Public Addresses Gallery */}
        <div className="mt-20 border-t border-white/[0.08] pt-14 sm:mt-24 sm:pt-16 lg:mt-28 lg:pt-20">
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
                  Campus Speaking &amp;{" "}
                  <span className="italic text-neutral-400">
                    Public Addresses
                  </span>
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {speechGallery.map((photo, idx) => (
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

export default HonorsLeadership;
