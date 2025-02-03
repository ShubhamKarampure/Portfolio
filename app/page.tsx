import Encryption from "@/components/main/ProblemSolving";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { TimelineDemo } from "@/components/main/Timeline";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <TimelineDemo />
       
      </div>
    </main>
  );
}
