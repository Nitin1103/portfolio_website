import React from "react";
import { Compass, Sparkles, Network, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const topicIcons: Record<string, React.ReactNode> = {
  agents: <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
  "distributed-systems": <Network className="w-4 h-4 text-sky-600 dark:text-sky-400" />,
  "cloud-patterns": <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
};

const topicStatus: Record<string, string> = {
  agents: "Prototyping",
  "distributed-systems": "Reading Papers & Benchmarking",
  "cloud-patterns": "Architecture Audits",
};

export function CurrentlyLearning() {
  const { currentlyExploring } = portfolioData;

  return (
    <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/60 bg-tech-grid">
      <Container>
        <SectionHeading
          tag="05 // ACTIVE INQUIRY"
          title="Currently Exploring & Prototyping"
          subtitle="Emerging systems architecture paradigms, agent coordination frameworks, and distributed primitives I am actively researching."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentlyExploring.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-900/40 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/60 transition-all group shadow-xs"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    {topicIcons[item.id] || (
                      <Compass className="w-4 h-4 text-zinc-400" />
                    )}
                    <span className="text-cyan-700 dark:text-cyan-400 font-medium">
                      {item.area}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                    {topicStatus[item.id] || "In Progress"}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
