import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import Projects from "../sections/Project";
import Skills from "../sections/Skill";
import Education from "../sections/Education";
import Certification from "../sections/Certification";
import HonorsLeadership from "../sections/HonorsLeadership";
import About from "../sections/About";

export default function Home() {
  return (
    <>
      {/* 1st: Hero section */}
      <Hero />

      {/* 2nd: Experience section */}
      <Experience />

      {/* 3rd: Projects section (with auto-scroll) */}
      <Projects />

      {/* 4th: Skills section (after experience & projects) */}
      <Skills />

      {/* 5th: Education section (separate card before about) */}
      <Education />

      {/* 6th: Certifications section (separate card before about) */}
      <Certification />

      {/* 7th: Honors & Department Leadership section (separate card before about) */}
      <HonorsLeadership />

      {/* 8th: About section */}
      <About />
    </>
  );
}