import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Activities from "@/components/Activities";
import Dock from "@/components/Dock";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <Hero />
      <Projects />
      <Education />
      <Skills />
      <Timeline />
      <Activities />
      <Dock />
      <Resume />
      <Contact />
    </main>
  );
}
