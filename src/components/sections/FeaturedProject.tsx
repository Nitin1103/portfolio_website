"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Cpu,
  Search,
  Sparkles,
  Database,
  BarChart3,
  GitFork,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";

export function FeaturedProject() {
  const { featuredProject } = portfolioData;
  const [activeTab, setActiveTab] = useState<"pipeline" | "benchmarks">("pipeline");
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const pipelineStages = [
    {
      id: 1,
      title: "Query Router & Decomposer",
      desc: "FastAPI • Hierarchical intent classification & multi-query expansion",
      latency: "12ms",
      status: "Verified",
      icon: <Cpu className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      id: 2,
      title: "Hybrid Dense + Sparse Retrieval",
      desc: "Qdrant + Cohere • Cross-encoder reranking over 1M+ chunk indices",
      latency: "45ms",
      status: "Optimal",
      icon: <Search className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />,
    },
    {
      id: 3,
      title: "Citation Reflection & Guardrails",
      desc: "LangGraph • Deterministic hallucination verification loops",
      latency: "85ms",
      status: "Grounded",
      icon: <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      id: 4,
      title: "Asynchronous Synthesized Stream",
      desc: "SSE Output • Low-latency chunk streaming with referenced footnotes",
      latency: "18ms",
      status: "Streaming",
      icon: <Database className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />,
    },
  ];

  return (
    <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/70 overflow-hidden shadow-md shadow-zinc-950/5 dark:shadow-xl mb-12">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400" />
          <span className="text-zinc-800 dark:text-zinc-200 font-semibold uppercase tracking-wider">
            FEATURED PROJECT
          </span>
          <span className="text-zinc-400 dark:text-zinc-600 hidden sm:inline">•</span>
          <span className="text-zinc-500 dark:text-zinc-400 hidden sm:inline">
            DISTRIBUTED AI & SYSTEMS
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* View Tab Switcher */}
          <div className="inline-flex rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-0.5 text-[11px]">
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === "pipeline"
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                  : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              Pipeline View
            </button>
            <button
              onClick={() => setActiveTab("benchmarks")}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                activeTab === "benchmarks"
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                  : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              Benchmarks
            </button>
          </div>
          {featuredProject.isPlaceholder && (
            <Badge variant="placeholder">Template</Badge>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-start">
        {/* Left Column: Project Narrative & Metrics */}
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
          <div className="space-y-3.5 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80">
              <span className="font-mono text-zinc-500 dark:text-zinc-400 font-semibold block mb-1 text-xs tracking-wider">
                CHALLENGE
              </span>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {featuredProject.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80">
              <span className="font-mono text-cyan-700 dark:text-cyan-400 font-semibold block mb-1 text-xs tracking-wider">
                ENGINEERED SOLUTION
              </span>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {featuredProject.solution}
              </p>
            </div>

            {featuredProject.outcome && (
              <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
                <span className="font-mono text-emerald-700 dark:text-emerald-400 font-semibold block mb-1 text-xs tracking-wider">
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
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/30 text-center shadow-2xs"
              >
                <div className="text-base sm:text-lg font-bold font-mono text-zinc-900 dark:text-zinc-100">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {featuredProject.technologies.map((tech) => (
              <Badge key={tech} variant="tech">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-1">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-white dark:text-zinc-900 bg-cyan-600 dark:bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-300 transition-all focus-visible:outline-2 focus-visible:outline-cyan-400 shadow-xs"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Pipeline & Telemetry Visual */}
        <div className="lg:col-span-6 w-full">
          {activeTab === "pipeline" ? (
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-[#090b10] p-5 sm:p-6 shadow-inner space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800/80 pb-3">
                <span className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200 font-medium">
                  <GitFork className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>EXECUTION STAGES // SUB-SECOND PIPELINE</span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
                  ACTIVE
                </span>
              </div>

              {/* Interactive stages */}
              <div className="space-y-2.5">
                {pipelineStages.map((stage) => {
                  const isHovered = hoveredNode === stage.id;
                  return (
                    <div
                      key={stage.id}
                      onMouseEnter={() => setHoveredNode(stage.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={`group p-3 rounded-lg border transition-all cursor-default ${
                        isHovered
                          ? "bg-cyan-50/70 dark:bg-cyan-950/30 border-cyan-300 dark:border-cyan-800/80 shadow-xs"
                          : "bg-white dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-colors ${
                              isHovered
                                ? "bg-cyan-600 text-white dark:bg-cyan-400 dark:text-zinc-950"
                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                            }`}
                          >
                            {stage.id}
                          </span>
                          <div className="flex items-center gap-1.5">
                            {stage.icon}
                            <span className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              {stage.title}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 font-mono text-[11px]">
                          <span className="text-zinc-500 dark:text-zinc-400">
                            {stage.latency}
                          </span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold hidden sm:inline">
                            {stage.status}
                          </span>
                        </div>
                      </div>

                      <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-1.5 pl-7">
                        {stage.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Status footer strip */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500 border-t border-zinc-200 dark:border-zinc-800/60">
                <span>BENCHMARK DATASET: HOTPOT-QA</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                  E2E: ~159ms AVG
                </span>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/90 dark:bg-[#090b10] p-5 sm:p-6 shadow-inner space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800/80 pb-3">
                <span className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200 font-medium">
                  <BarChart3 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>BENCHMARK RESULTS // COMPARISON</span>
                </span>
                <span className="text-cyan-600 dark:text-cyan-400">v1.2</span>
              </div>

              <div className="space-y-4">
                {/* Metric 1 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-zinc-700 dark:text-zinc-300">
                      Multi-hop Retrieval Precision
                    </span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">
                      94.2% vs 68.1% (Standard)
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <div className="h-full rounded-full bg-cyan-500 w-[94.2%]" />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-zinc-700 dark:text-zinc-300">
                      Citation Hallucination Rate
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      0.9% vs 14.5% (Baseline)
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <div className="h-full rounded-full bg-emerald-500 w-[99.1%]" />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-zinc-700 dark:text-zinc-300">
                      Throughput Scaling (Requests/Sec)
                    </span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                      480 RPS (Asynchronous)
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                    <div className="h-full rounded-full bg-indigo-500 w-[88%]" />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Evaluated against 1,000 synthetic multi-document queries. Speculative chunk prefetching reduced tail latency spikes by 42% on warm caches.
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500 border-t border-zinc-200 dark:border-zinc-800/60">
                <span>TARGET: PRODUCTION RAG</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  AUDITED & GROUNDED
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
