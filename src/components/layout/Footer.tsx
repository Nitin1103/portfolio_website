import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { portfolioData } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-[#06070a] py-12 text-sm text-zinc-500">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-medium text-zinc-800 dark:text-zinc-300">
            {personal.name}
          </span>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
          <span className="text-xs font-mono text-zinc-500">
            Built with Next.js & Tailwind CSS
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.socials.email}`}
            aria-label="Send Email"
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 ml-2">
            © {currentYear}
          </span>
        </div>
      </Container>
    </footer>
  );
}
