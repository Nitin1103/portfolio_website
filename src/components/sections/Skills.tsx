"use client";

import React, { useState } from "react";
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
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 border-t border-zinc-200 dark:border-zinc-800/60"
    >
      <Container>
        <SectionHeading
          tag="04 // EXPERTISE"
          title="Technical Skills & Ecosystem"
          subtitle="A structured overview of the programming languages, cloud frameworks, and AI paradigms I utilize to build production software."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              activeCategory === "all"
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 border-zinc-900 dark:border-zinc-100 font-medium"
                : "bg-white dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:text-zinc-950 dark:hover:text-zinc-100"
            }`}
          >
            All Disciplines ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 border-zinc-900 dark:border-zinc-100 font-medium"
                  : "bg-white dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:text-zinc-950 dark:hover:text-zinc-100"
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/40 p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/60 transition-all shadow-xs group"
            >
              <div className="space-y-3">
                {/* Category Header with Icon */}
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 group-hover:scale-105 transition-transform">
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
              <div className="pt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/90 text-zinc-700 dark:text-zinc-300 hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
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
