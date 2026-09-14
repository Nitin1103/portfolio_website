"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

export function CopyEmailButton({
  email,
  className = "",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      aria-label="Copy email address to clipboard"
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-zinc-100 transition-all active:scale-95 focus-visible:outline-2 focus-visible:outline-cyan-400 ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
            Copied to clipboard!
          </span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
          <span>{email}</span>
        </>
      )}
    </button>
  );
}
