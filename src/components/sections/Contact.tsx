import React from "react";
import { Mail, ArrowRight, Clock, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Contact() {
  const { personal } = portfolioData;

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 border-t border-zinc-200 dark:border-zinc-800/80 bg-radial-gradient"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <SectionHeading
            tag="07 // GET IN TOUCH"
            title="Let's build something reliable and useful."
            subtitle="Whether you are hiring for a software engineering role, architecting a high-throughput backend, or exploring applied AI integrations — I would love to connect."
            className="text-center [&>div]:justify-center [&>p]:mx-auto"
          />

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${personal.socials.email}`}
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-medium text-white dark:text-zinc-950 bg-cyan-600 dark:bg-cyan-400 hover:bg-cyan-500 dark:hover:bg-cyan-300 transition-all shadow-md shadow-cyan-600/20 dark:shadow-cyan-950/40 active:scale-95 focus-visible:outline-2 focus-visible:outline-cyan-400 font-mono"
            >
              <Mail className="w-4 h-4" />
              <span>Say hello</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Interactive One-Click Copy */}
            <CopyEmailButton email={personal.socials.email} />
          </div>

          {/* Availability & Location Metadata */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-2">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>Response time: &lt;24 hours</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-zinc-400" />
              <span>Based in India (UTC+5:30) • Remote friendly</span>
            </span>
          </div>

          {/* Direct Social Links Bar */}
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-center gap-6">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub (Nitin1103)</span>
            </a>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
