"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Network,
  Code2,
  Activity,
  Workflow,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { SelectedProject } from "@/types/portfolio";

function ProjectVisual({ project }: { project: SelectedProject }) {
  const [copiedCode, setCopiedCode] = useState(false);

  if (project.visualType === "code" && project.visualMeta?.codeSnippet) {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(project.visualMeta?.codeSnippet || "");
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      } catch (e) {
        console.error(e);
      }
    };

    return (
      <div className="rounded-xl border border-zinc-800 bg-[#07090e] p-3.5 font-mono text-[11px] text-zinc-300 overflow-x-auto shadow-inner">
        {/* Editor window top bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/90 pb-2.5 mb-2.5 text-[10px] text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-zinc-400 font-medium ml-1">app/api/metrics.py</span>
          </div>

          <button
            onClick={handleCopy}
            type="button"
            aria-label="Copy code snippet"
            className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] text-zinc-400 hover:text-zinc-100 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            {copiedCode ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Syntax highlighted lines */}
        <pre className="text-zinc-300 font-mono text-[11px] leading-relaxed whitespace-pre pl-1">
          <span className="text-cyan-400">@app.get</span>
          <span className="text-zinc-400">(</span>
          <span className="text-emerald-300">&quot;/api/v1/metrics/stream&quot;</span>
          <span className="text-zinc-400">)</span>
          {"\n"}
          <span className="text-sky-400">async def </span>
          <span className="text-amber-300">stream_telemetry</span>
          <span className="text-zinc-400">(session: AsyncSession = Depends(get_db)):</span>
          {"\n"}
          <span className="text-zinc-500">    # Tier-1 Redis sliding cache with fallback</span>
          {"\n"}
          <span className="text-zinc-300">    cached = </span>
          <span className="text-sky-400">await </span>
          <span className="text-zinc-300">redis_client.get(</span>
          <span className="text-emerald-300">&quot;metrics:summary&quot;</span>
          <span className="text-zinc-300">)</span>
          {"\n"}
          <span className="text-sky-400">    if </span>
          <span className="text-zinc-300">cached: </span>
          <span className="text-sky-400">return </span>
          <span className="text-zinc-300">orjson.loads(cached)</span>
        </pre>
      </div>
    );
  }

  if (project.visualType === "diagram" && project.visualMeta?.diagramSteps) {
    return (
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-[#07090e] p-4 space-y-3 shadow-inner">
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400 pb-1.5 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-1.5">
            <Network className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-zinc-800 dark:text-zinc-200 font-semibold">
              SERVERLESS INGESTION TOPOLOGY
            </span>
          </div>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            &gt;10k RPS
          </span>
        </div>

        {/* Pipeline Stage Nodes with Connectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
          {project.visualMeta.diagramSteps.slice(0, 4).map((step, idx) => (
            <div
              key={step}
              className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between gap-1.5 shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="w-4 h-4 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 flex items-center justify-center text-[9px] font-bold">
                  {idx + 1}
                </span>
                {idx === 2 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </div>
              <span className="text-zinc-800 dark:text-zinc-200 font-medium text-[11px] leading-tight">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.visualType === "dashboard" && project.visualMeta?.metrics) {
    return (
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-[#07090e] p-4 space-y-3 shadow-inner">
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-1.5">
          <span className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200 font-semibold">
            <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>CLUSTER HEALTH & TELEMETRY</span>
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            99.98% HEALTH
          </span>
        </div>

        {/* Sparkline curve visual */}
        <div className="h-12 w-full rounded-lg bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 p-1.5 flex items-end justify-between px-3 gap-1">
          <svg className="w-full h-full" viewBox="0 0 200 35" preserveAspectRatio="none">
            <defs>
              <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0,28 Q25,20 50,24 T100,16 T150,22 T200,12 L200,35 L0,35 Z"
              fill="url(#latencyGradient)"
            />
            <path
              d="M0,28 Q25,20 50,24 T100,16 T150,22 T200,12"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {project.visualMeta.metrics.map((m) => (
            <div
              key={m.label}
              className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 text-center shadow-2xs"
            >
              <div className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100">
                {m.value}
              </div>
              <div className="text-[10px] font-mono text-zinc-500">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.visualType === "agent" && project.visualMeta?.workflowNodes) {
    return (
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-[#07090e] p-4 space-y-3 shadow-inner">
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400 pb-1.5 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-1.5">
            <Workflow className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span className="text-zinc-800 dark:text-zinc-200 font-semibold">
              EVAL HARNESS SUITE
            </span>
          </div>
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
            100% PASS
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
          {project.visualMeta.workflowNodes.map((node, i) => (
            <div
              key={node.title}
              className="p-2.5 rounded-lg bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800/90 shadow-2xs space-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
                  {node.title}
                </span>
                <span className="text-[8px] px-1 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
                  {i === 1 ? "ASYNC" : "OK"}
                </span>
              </div>
              <div className="text-zinc-500 text-[9px] truncate">
                {node.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<string>("All");

  const filterCategories = ["All", "Cloud & Infrastructure", "Backend & Systems", "Full-Stack Application", "AI & Experimental"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 border-t border-zinc-200 dark:border-zinc-800/60"
    >
      <Container>
        <SectionHeading
          tag="02 // WORK"
          title="Selected Work"
          subtitle="A curated selection of systems, cloud architectures, and applied AI applications I have built and benchmarked."
        />

        {/* Featured Project Showcase */}
        <FeaturedProject />

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs">
          <span className="text-zinc-500 mr-1 hidden sm:inline">Filter by domain:</span>
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              type="button"
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                filter === cat
                  ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 border-zinc-900 dark:border-zinc-100 font-medium shadow-xs"
                  : "bg-white dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              {cat === "All" ? "All Selected Work" : cat}
            </button>
          ))}
        </div>

        {/* Selected Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-900/40 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/70 transition-all shadow-xs dark:shadow-md"
            >
              <div className="space-y-4">
                {/* Top Category and Placeholder Badge */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-700 dark:text-cyan-400 font-medium">
                    {project.category}
                  </span>
                  {project.isPlaceholder && (
                    <Badge variant="placeholder">Template</Badge>
                  )}
                </div>

                {/* Project Title & One Liner */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {project.oneLiner}
                  </p>
                </div>

                {/* Detailed Narrative */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400/90 leading-relaxed">
                  {project.description}
                </p>

                {/* Distinct Technical Visual Preview for this card */}
                <div className="pt-2">
                  <ProjectVisual project={project} />
                </div>
              </div>

              {/* Card Footer: Tech Stack and Links */}
              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/60 mt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="tech">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Preview</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
