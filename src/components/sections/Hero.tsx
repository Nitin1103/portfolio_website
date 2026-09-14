import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { StatusIndicator } from "@/components/ui/Badge";
import { HeroVisual } from "@/components/sections/HeroVisual";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-radial-gradient">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status Pill */}
            <div>
              <StatusIndicator
                text={personal.status.text}
                available={personal.status.available}
              />
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {personal.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-zinc-700 dark:text-zinc-300 tracking-tight">
                {personal.positioning}
              </p>
            </div>

            {/* Supporting Human Bio */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-normal">
              {personal.supportingBio}
            </p>

            {/* Dual CTAs and Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white dark:text-zinc-950 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm active:scale-95 focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <span>View my work</span>
                <ArrowRight className="w-4 h-4 text-zinc-300 dark:text-zinc-800 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-800 dark:text-zinc-300 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-all active:scale-95 focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <Mail className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                <span>Get in touch</span>
              </a>

              {/* Social Quick Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 rounded-lg transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 rounded-lg transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Engineering Topology Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
