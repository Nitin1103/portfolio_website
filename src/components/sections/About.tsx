import React from "react";
import { Terminal, Cpu, Lightbulb } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const principleIcons = [
  <Terminal key="terminal" className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
  <Cpu key="cpu" className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
  <Lightbulb key="bulb" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
];

export function About() {
  const { principles } = portfolioData;

  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-t border-zinc-200 dark:border-zinc-800/60 bg-tech-grid"
    >
      <Container>
        <SectionHeading
          tag="01 // BACKGROUND"
          title="About & Engineering Principles"
          subtitle="A pragmatic approach to software development focused on correctness, system architecture, and real-world utility."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Summary */}
          <div className="lg:col-span-5 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-base">
            <p>
              I am a software engineer focused on designing robust backend services, scalable cloud systems, and applied AI applications. I value clear system boundaries, thoughtful database modeling, and observable code over unnecessary complexity.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
              Whether architecting asynchronous event pipelines on AWS, optimizing database query access patterns, or integrating agentic LLM retrieval systems, I focus on building practical tools that remain easy to maintain and scale.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
              <div
                key={principle.id}
                className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-900/40 p-5 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/70 transition-all shadow-xs"
              >
                <div className="mb-4 inline-flex p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/50">
                  {principleIcons[index % principleIcons.length]}
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
