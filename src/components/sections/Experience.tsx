import React from "react";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
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
          subtitle="A track record of engineering backend services, optimizing distributed workloads, and shipping reliable cloud infrastructure."
        />

        <div className="relative border-l border-zinc-300 dark:border-zinc-800 ml-3 sm:ml-6 space-y-12 pb-2">
          {experience.map((item, index) => (
            <div key={item.id} className="relative pl-6 sm:pl-10">
              {/* Timeline dot with glowing ring */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-cyan-600 dark:border-cyan-400 flex items-center justify-center shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/50 p-6 sm:p-8 space-y-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs dark:shadow-md">
                {/* Header: Role, Company & Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        {item.role}
                      </h3>
                      {item.isPlaceholder && (
                        <Badge variant="placeholder">Customizable Role</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-cyan-700 dark:text-cyan-300 font-medium mt-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                      <span>{item.period}</span>
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-600">•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Key Achievements Bullet Points */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-semibold">
                    Measurable Impact & Scope
                  </span>
                  <ul className="space-y-2.5">
                    {item.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 shrink-0" />
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
