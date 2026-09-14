import React from "react";
import { Code, Server, Cloud, Sparkles, Layout } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categoryIcons: Record<string, React.ReactNode> = {
  languages: <Code className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
  backend: <Server className="w-4 h-4 text-sky-600 dark:text-sky-400" />,
  cloud: <Cloud className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
  ai: <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  frontend: <Layout className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
};

export function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 border-t border-zinc-200 dark:border-zinc-800/60"
    >
      <Container>
        <SectionHeading
          tag="04 // EXPERTISE"
          title="Technical Skills"
          subtitle="A structured overview of the tools, frameworks, and system capabilities I use to deliver production software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/40 p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/60 transition-all shadow-xs"
            >
              <div className="space-y-3">
                {/* Category Header with Icon */}
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
                    {categoryIcons[category.id] || (
                      <Code className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {category.description && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {category.description}
                  </p>
                )}
              </div>

              {/* Skill Pills */}
              <div className="pt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/90 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
                  >
                    {skill}
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
