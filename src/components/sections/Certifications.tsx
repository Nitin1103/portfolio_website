import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800/60">
      <Container>
        <SectionHeading
          tag="06 // CREDENTIALS"
          title="Certifications & Continuous Education"
          subtitle="Formal certifications, verified coursework, and foundational specializations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/40 p-5 sm:p-6 flex items-start justify-between gap-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-xs"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700/60 shrink-0">
                  <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {cert.name}
                    </h3>
                    {cert.isPlaceholder && (
                      <Badge variant="placeholder">Template</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span>{cert.issuer}</span>
                    <span className="text-zinc-300 dark:text-zinc-600">•</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate for ${cert.name}`}
                  className="p-2 text-zinc-500 hover:text-cyan-600 dark:text-zinc-400 dark:hover:text-cyan-300 rounded-lg border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
