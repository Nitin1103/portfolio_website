"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  isCore?: boolean;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate node topology representing engineering systems
    const labels = [
      "api-gw",
      "auth",
      "cache",
      "db",
      "queue",
      "worker",
      "rag-core",
      "vector-idx",
    ];
    const nodeCount = Math.min(12, Math.max(7, Math.floor(width / 45)));

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * (width - 60) + 30,
        y: Math.random() * (height - 60) + 30,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: i < 3 ? 3.5 : 2.5,
        label: labels[i % labels.length],
        isCore: i === 0 || i === 4,
      });
    }

    // Packets moving along links
    const packets: Packet[] = [];
    for (let i = 0; i < 4; i++) {
      packets.push({
        fromNode: Math.floor(Math.random() * nodeCount),
        toNode: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.006,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      const isDark = document.documentElement.classList.contains("dark");
      ctx.clearRect(0, 0, width, height);

      // Subtle architecture background grid inside visual
      ctx.strokeStyle = isDark
        ? "rgba(255, 255, 255, 0.02)"
        : "rgba(0, 0, 0, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw links
      const maxDistance = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isDark ? 0.22 : 0.3);
            ctx.strokeStyle = isDark
              ? `rgba(6, 182, 212, ${alpha})`
              : `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw data packets traveling between connections
      if (!prefersReducedMotion) {
        packets.forEach((p) => {
          p.progress += p.speed;
          if (p.progress >= 1) {
            p.progress = 0;
            p.fromNode = p.toNode;
            p.toNode = Math.floor(Math.random() * nodes.length);
          }

          const n1 = nodes[p.fromNode];
          const n2 = nodes[p.toNode];
          if (n1 && n2) {
            const px = n1.x + (n2.x - n1.x) * p.progress;
            const py = n1.y + (n2.y - n1.y) * p.progress;

            ctx.fillStyle = isDark
              ? "rgba(56, 189, 248, 0.85)"
              : "rgba(2, 132, 199, 0.85)";
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Boundary bounce with padding
          if (node.x <= 20 || node.x >= width - 20) node.vx *= -1;
          if (node.y <= 20 || node.y >= height - 20) node.vy *= -1;

          // Gentle mouse repulsion
          const mdx = node.x - mouseX;
          const mdy = node.y - mouseY;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 80 && mDist > 0) {
            node.x += (mdx / mDist) * 0.8;
            node.y += (mdy / mDist) * 0.8;
          }
        }

        // Draw node glow if core
        if (node.isCore) {
          ctx.fillStyle = isDark
            ? "rgba(6, 182, 212, 0.12)"
            : "rgba(2, 132, 199, 0.15)";
          ctx.beginPath();
          ctx.arc(node.x, node.y, 14, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw node point
        ctx.fillStyle = node.isCore
          ? isDark
            ? "#06b6d4"
            : "#0284c7"
          : isDark
          ? "#94a3b8"
          : "#64748b";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Technical node label
        if (node.label && width > 400) {
          ctx.fillStyle = isDark
            ? "rgba(148, 163, 184, 0.45)"
            : "rgba(71, 85, 105, 0.7)";
          ctx.font = "9px monospace";
          ctx.fillText(node.label, node.x + 6, node.y + 3);
        }
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    // Force re-render on theme change
    const onThemeChange = () => {
      render();
    };
    window.addEventListener("themechange", onThemeChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("themechange", onThemeChange);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/60 overflow-hidden shadow-lg shadow-zinc-950/5 dark:shadow-2xl backdrop-blur-sm group">
      {/* Decorative top header bar resembling a monitoring console */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200 dark:border-zinc-800/70 bg-zinc-50/90 dark:bg-zinc-900/40 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-600 dark:bg-cyan-400/80" />
          <span className="text-zinc-800 dark:text-zinc-300">
            SYSTEM ARCHITECTURE // TOPOLOGY
          </span>
        </div>
        <div className="flex items-center gap-3 text-zinc-500">
          <span className="hidden sm:inline">NODES: ACTIVE</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
            ONLINE
          </span>
        </div>
      </div>

      {/* Interactive canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-[calc(100%-38px)] block cursor-crosshair"
      />

      {/* Bottom status strip */}
      <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-zinc-500 pointer-events-none">
        <span>LATENCY: &lt;1ms</span>
        <span className="hidden sm:inline">STATE: DETERMINISTIC</span>
        <span>STREAM: SYNCHRONIZED</span>
      </div>
    </div>
  );
}
