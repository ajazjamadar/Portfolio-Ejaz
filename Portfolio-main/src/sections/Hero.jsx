import FadeUp from "../components/FadeUp";
import image from "../assets/portfolio-image.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen overflow-x-hidden bg-[#060709] px-2 py-2 text-white min-[400px]:px-3 min-[400px]:py-3 sm:px-6 sm:py-6"
    >
      {/* Rounded editorial hero card */}
      <div className="relative mx-auto flex min-h-[calc(100dvh-1rem)] max-w-7xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0e14] min-[400px]:min-h-[calc(100dvh-1.5rem)] sm:min-h-[calc(100dvh-3rem)] sm:rounded-[28px] 2xl:max-w-[1600px]">

        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#e5af3a]/[0.035] blur-[100px]"
        />

        {/* =========================
            RIGHT PORTRAIT PANEL
        ========================== */}
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden lg:w-[56%] lg:rounded-tl-[28px]">
          <img
            src={image}
            alt="Md Ejazuddin Jamadar"
            className="h-full w-full origin-top-left scale-[1.08] object-cover object-[60%_top] opacity-35 md:opacity-50 lg:object-[60%_top] lg:opacity-90 transition-opacity duration-700"
          />

          {/* Vignette gradients to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e14] via-[#0c0e14]/75 to-transparent lg:via-[#0c0e14]/30" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/60 to-transparent" />
        </div>

        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="relative z-10 flex w-full items-center px-5 py-12 min-[400px]:px-7 sm:px-12 sm:py-16 md:pb-48 lg:w-1/2 lg:px-14 lg:pb-16 xl:px-16">
          <div className="w-full max-w-xl">

            {/* Availability Pill */}
            <FadeUp delay={0.05}>
              <a
                href="/contact"
                className="group mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs text-neutral-300 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-medium tracking-wide">Bengaluru, India · Open to opportunities</span>
                <span className="text-neutral-500 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            </FadeUp>

            {/* Display Headline */}
            <FadeUp delay={0.1}>
              <h1 className="font-editorial text-4xl font-medium leading-[1.06] tracking-tight text-white min-[420px]:text-5xl sm:text-6xl lg:text-5xl xl:text-[60px] 2xl:text-[66px]">
                Software &amp;
                <br />
                <span className="font-normal italic text-neutral-400">Platform</span>{" "}
                <span className="text-neutral-300">Engineer</span>
              </h1>
            </FadeUp>

            {/* Bio */}
            <FadeUp delay={0.18}>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-300/90 sm:mt-6 sm:text-[15px] sm:leading-7">
                I'm <span className="font-medium text-white">Md Ejazuddin Jamadar</span>, a Software &amp; Platform Engineer at Desisle, specializing in cloud infrastructure, Kubernetes, Terraform, automated CI/CD pipelines, and high-performance backend systems.
              </p>
            </FadeUp>

            {/* CTA Buttons */}
            <FadeUp delay={0.25}>
              <div className="mt-7 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_8px_20px_-6px_rgba(255,255,255,0.3)] sm:py-2.5"
                >
                  View my work
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-center text-sm font-medium text-neutral-200 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white sm:py-2.5"
                >
                  Get in touch
                </a>
              </div>
            </FadeUp>

          </div>
        </div>

        {/* =========================
            FLOATING STATUS CARD (bottom right, md and up)
        ========================== */}
        <FadeUp
          delay={0.35}
          className="absolute bottom-6 right-6 z-20 hidden w-[310px] md:block lg:bottom-8 lg:right-8 lg:w-[350px]"
        >
          <div className="flex items-end justify-between gap-4 rounded-2xl border border-white/12 bg-[#0d0f14]/85 p-5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:border-white/20">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400">
                  Current Role
                </p>
              </div>
              <p className="mt-1.5 font-editorial text-lg font-medium text-white">
                Software &amp; Platform Engineer
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-neutral-400">
                Desisle · Ex QBurst SDE Intern · Ex AI R&amp;D Intern
              </p>
            </div>

            <a
              href="/contact"
              aria-label="Get in touch"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
};

export default Hero;