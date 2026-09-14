import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 border-t border-zinc-200 dark:border-zinc-800/60 bg-tech-grid"
    >
      <Container>
        <SectionHeading
          tag="03 // CAREER"
          title="Work Experience"
          subtitle="A track record of shipping software, optimizing system reliability, and working with modern cloud backends."
        />

        <div className="relative border-l border-zinc-300 dark:border-zinc-800 ml-3 sm:ml-6 space-y-12">
          {experience.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-10">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-cyan-600 dark:border-cyan-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
              </div>

              {/* Experience Card */}
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/50 p-6 sm:p-7 space-y-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-xs">
                {/* Header: Role, Company & Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.role}
                      </h3>
                      {item.isPlaceholder && (
                        <Badge variant="placeholder">Template</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-cyan-700 dark:text-cyan-300 font-medium mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                      <span>{item.period}</span>
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-600">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Achievements Bullet Points */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
                    Key Impact & Highlights
                  </span>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400/80 shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="pt-2 flex flex-wrap gap-1.5 border-t border-zinc-200 dark:border-zinc-800/60">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="tech">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
