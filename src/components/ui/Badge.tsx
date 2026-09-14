import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "tech" | "status" | "placeholder" | "outline" | "cyan";
  className?: string;
}

export function Badge({
  children,
  variant = "tech",
  className = "",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center text-xs font-mono font-medium rounded-md px-2.5 py-1 transition-colors";

  const variants = {
    tech: "bg-zinc-100 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100",
    status:
      "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1.5",
    placeholder:
      "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300/90 border border-amber-200 dark:border-amber-800/40 text-[11px]",
    outline:
      "border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200",
    cyan: "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

export function StatusIndicator({
  text = "Open to opportunities",
  available = true,
}: {
  text?: string;
  available?: boolean;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 px-3 py-1 text-xs font-mono text-zinc-700 dark:text-zinc-300 shadow-xs backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        {available && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            available ? "bg-emerald-500" : "bg-zinc-400"
          }`}
        />
      </span>
      <span>{text}</span>
    </div>
  );
}
