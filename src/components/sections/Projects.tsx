import React from "react";
import {
  ExternalLink,
  Network,
  Code2,
  Activity,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { SelectedProject } from "@/types/portfolio";

function ProjectVisual({ project }: { project: SelectedProject }) {
  if (project.visualType === "code" && project.visualMeta?.codeSnippet) {
    return (
      <div className="rounded-lg border border-zinc-800 bg-[#090b10] p-3 font-mono text-[11px] text-zinc-300 overflow-x-auto shadow-inner">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 text-[10px] text-zinc-500">
          <span className="flex items-center gap-1 text-cyan-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>main.py</span>
          </span>
          <span>{project.visualMeta.codeLanguage || "python"}</span>
        </div>
        <pre className="text-zinc-300 font-mono text-[11px] leading-relaxed whitespace-pre">
          {project.visualMeta.codeSnippet}
        </pre>
      </div>
    );
  }

  if (project.visualType === "diagram" && project.visualMeta?.diagramSteps) {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#06070a] p-3.5 space-y-2">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 pb-1 border-b border-zinc-200 dark:border-zinc-800/80">
          <Network className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
          <span>PIPELINE TOPOLOGY</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
          {project.visualMeta.diagramSteps.map((step, idx) => (
            <React.Fragment key={step}>
              <span className="px-2 py-1 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 shadow-2xs">
                {step}
              </span>
              {idx < (project.visualMeta?.diagramSteps?.length ?? 0) - 1 && (
                <span className="text-zinc-400 dark:text-zinc-600 text-xs">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  if (project.visualType === "dashboard" && project.visualMeta?.metrics) {
    return (
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#06070a] p-3.5 space-y-3">
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800/80 pb-1.5">
          <span className="flex items-center gap-1.5 text-zinc-800 dark:text-zinc-200">
            <Activity className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>SYSTEM TELEMETRY CONSOLE</span>
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            99.98% HEALTH
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {project.visualMeta.metrics.map((m) => (
            <div
              key={m.label}
              className="p-2 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 text-center shadow-2xs"
            >
              <div className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100">
                {m.value}
              </div>
              <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-500">
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
      <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#06070a] p-3.5 space-y-2">
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 pb-1 border-b border-zinc-200 dark:border-zinc-800/80">
          <Workflow className="w-3 h-3 text-sky-600 dark:text-sky-400" />
          <span>EVALUATION SUITE PIPELINE</span>
        </div>
        <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
          {project.visualMeta.workflowNodes.map((node) => (
            <div
              key={node.title}
              className="p-2 rounded bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800/90 shadow-2xs"
            >
              <div className="text-zinc-800 dark:text-zinc-200 font-semibold">
                {node.title}
              </div>
              <div className="text-zinc-500 dark:text-zinc-500 text-[9px] truncate">
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

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 border-t border-zinc-200 dark:border-zinc-800/60"
    >
      <Container>
        <SectionHeading
          tag="02 // WORK"
          title="Selected Work"
          subtitle="A selection of systems, cloud services, and AI architectures I've built, explored, and learned from."
        />

        {/* Featured Project Showcase */}
        <FeaturedProject />

        {/* Other Selected Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-900/40 p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/70 transition-all shadow-xs dark:shadow-md"
            >
              <div className="space-y-4">
                {/* Card Top Category & Placeholder Badge */}
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

                <div className="flex items-center gap-3 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors focus-visible:outline-2 focus-visible:outline-cyan-400"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
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
                      <span>Demo</span>
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
