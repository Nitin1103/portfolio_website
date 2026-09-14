import React from "react";
import { ExternalLink, Database, Cpu, Search, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";

export function FeaturedProject() {
  const { featuredProject } = portfolioData;

  return (
    <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/70 overflow-hidden shadow-md shadow-zinc-950/5 dark:shadow-xl mb-12">
      {/* Subtle top header strip */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold uppercase tracking-wider">
            FEATURED PROJECT
          </span>
          <span className="text-zinc-400 dark:text-zinc-600 hidden sm:inline">•</span>
          <span className="text-zinc-500 dark:text-zinc-400 hidden sm:inline">AI & SYSTEMS</span>
        </div>
        {featuredProject.isPlaceholder && (
          <Badge variant="placeholder">Customizable Template</Badge>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
        {/* Left Column: Project Information */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {featuredProject.title}
            </h3>
            <p className="text-sm sm:text-base text-cyan-700 dark:text-cyan-300 font-medium leading-relaxed">
              {featuredProject.tagline}
            </p>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-3.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80">
              <span className="font-mono text-zinc-500 dark:text-zinc-400 font-semibold block mb-1 text-xs">
                CHALLENGE / PROBLEM
              </span>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {featuredProject.problem}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80">
              <span className="font-mono text-cyan-700 dark:text-cyan-400 font-semibold block mb-1 text-xs">
                ENGINEERED SOLUTION
              </span>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {featuredProject.solution}
              </p>
            </div>

            {featuredProject.outcome && (
              <div className="p-3.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
                <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold block mb-1 text-xs">
                  MEASURABLE OUTCOME
                </span>
                <p className="text-emerald-900 dark:text-emerald-200/90 leading-relaxed">
                  {featuredProject.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Metrics bar */}
          <div className="grid grid-cols-3 gap-3 pt-1">
            {featuredProject.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/30 text-center"
              >
                <div className="text-base sm:text-lg font-bold font-mono text-zinc-900 dark:text-zinc-100">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {featuredProject.technologies.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>

          {/* External Action Links */}
          <div className="flex items-center gap-3 pt-2">
            {featuredProject.githubUrl && (
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-all focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
                <span>Source Code</span>
              </a>
            )}
            {featuredProject.liveUrl && (
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-white dark:text-zinc-900 bg-cyan-600 dark:bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-300 transition-all focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Architectural Pipeline Diagram Visual */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-[#090b10] p-5 sm:p-6 shadow-inner space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800/80 pb-3">
              <span className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200">
                <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>RETRIEVAL & EXECUTION FLOW</span>
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
                HYBRID MODE
              </span>
            </div>

            {/* Architecture Node Flow Diagram */}
            <div className="space-y-3 font-mono text-xs">
              {/* Step 1 */}
              <div className="p-3 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700/60 text-cyan-800 dark:text-cyan-300 flex items-center justify-center text-[10px] font-bold">
                    1
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200">
                    Query Router & Decomposer
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500">FastAPI</span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-zinc-400 dark:text-zinc-600 -my-1 text-xs">
                ↓
              </div>

              {/* Step 2 */}
              <div className="p-3 rounded-lg bg-white dark:bg-zinc-900/80 border border-cyan-300 dark:border-cyan-900/50 flex items-center justify-between shadow-sm shadow-cyan-500/5 dark:shadow-cyan-950/50">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700/60 text-cyan-800 dark:text-cyan-300 flex items-center justify-center text-[10px] font-bold">
                    2
                  </span>
                  <div className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-zinc-900 dark:text-zinc-100 font-medium">
                      Dense + Sparse Vector Search
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-cyan-700 dark:text-cyan-400 font-semibold">
                  Qdrant + Cohere
                </span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-zinc-400 dark:text-zinc-600 -my-1 text-xs">
                ↓
              </div>

              {/* Step 3 */}
              <div className="p-3 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700/60 text-cyan-800 dark:text-cyan-300 flex items-center justify-center text-[10px] font-bold">
                    3
                  </span>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span className="text-zinc-800 dark:text-zinc-200">
                      Citation Verification & Synthesis
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-zinc-500">LangGraph</span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-zinc-400 dark:text-zinc-600 -my-1 text-xs">
                ↓
              </div>

              {/* Step 4 */}
              <div className="p-3 rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-700/60 text-cyan-800 dark:text-cyan-300 flex items-center justify-center text-[10px] font-bold">
                    4
                  </span>
                  <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-zinc-800 dark:text-zinc-200">
                      Grounded Answer Stream
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">
                  SSE Latency &lt;750ms
                </span>
              </div>
            </div>

            {/* Architecture Footer Status */}
            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500 border-t border-zinc-200 dark:border-zinc-800/60">
              <span>SECURITY: ISOLATED VPC</span>
              <span>TEST SUITE: 100% PASSING</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
