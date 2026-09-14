import React from "react";
import { Compass } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CurrentlyLearning() {
  const { currentlyExploring } = portfolioData;

  return (
    <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/60 bg-tech-grid">
      <Container>
        <SectionHeading
          tag="05 // ACTIVE INQUIRY"
          title="Currently Exploring"
          subtitle="Emerging technologies, systems architecture paradigms, and research areas I am actively studying and prototyping."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentlyExploring.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-900/40 p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/60 transition-all group shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-700 dark:text-cyan-400">{item.area}</span>
                  <Compass className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 group-hover:rotate-45 transition-transform" />
                </div>

                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-5 flex flex-wrap gap-1.5 border-t border-zinc-200 dark:border-zinc-800/50 mt-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
