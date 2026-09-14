import React from "react";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-2 mb-10 sm:mb-12 ${className}`}>
      {tag && (
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-600/80 dark:bg-cyan-400/80" />
          <span>{tag}</span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
