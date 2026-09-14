import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { CurrentlyLearning } from "@/components/sections/CurrentlyLearning";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:text-cyan-200 transition-colors duration-200">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <CurrentlyLearning />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
