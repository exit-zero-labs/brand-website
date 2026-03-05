"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PEOPLE = [
  { id: "you", label: "You", x: 50, y: 50, category: "self", size: "lg" },
  { id: "mom", label: "Mom", x: 22, y: 25, category: "family", size: "sm" },
  { id: "dad", label: "Dad", x: 75, y: 22, category: "family", size: "sm" },
  {
    id: "sarah",
    label: "Sarah",
    x: 82,
    y: 62,
    category: "friends",
    size: "sm",
  },
  { id: "raj", label: "Raj", x: 18, y: 72, category: "work", size: "sm" },
  { id: "emma", label: "Emma", x: 60, y: 80, category: "friends", size: "sm" },
  { id: "mike", label: "Mike", x: 35, y: 82, category: "work", size: "sm" },
] as const;

const CONNECTIONS = [
  ["you", "mom"],
  ["you", "dad"],
  ["you", "sarah"],
  ["you", "raj"],
  ["you", "emma"],
  ["you", "mike"],
  ["mom", "dad"],
  ["sarah", "emma"],
] as const;

const CATEGORY_COLORS: Record<string, string> = {
  self: "#F97316",
  family: "#F97316",
  friends: "#00D97E",
  work: "#94A3B8",
};

const CATEGORY_DOT_COLORS: Record<string, string> = {
  family: "bg-ember",
  friends: "bg-signal",
  work: "bg-mist",
  self: "bg-ember",
};

// Slow floating offsets for each person (different phases)
const FLOAT_PHASES = [0, 0.7, 1.4, 2.1, 2.8, 3.5, 4.2];
const FLOAT_AMP = 2; // px amplitude

type RelationshipGraphProps = {
  className?: string;
};

export function RelationshipGraph({ className }: RelationshipGraphProps) {
  const [tick, setTick] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Animate floating on a slow interval
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 50);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const getFloatY = (idx: number) => {
    if (prefersReducedMotion) return 0;
    return Math.sin((tick * 0.04 + FLOAT_PHASES[idx]) * 1) * FLOAT_AMP;
  };

  const getNodePos = (id: string) => {
    const person = PEOPLE.find((p) => p.id === id);
    if (!person) return { x: 0, y: 0 };
    const idx = PEOPLE.findIndex((p) => p.id === id);
    return {
      x: person.x,
      y: person.y + (person.id === "you" ? 0 : getFloatY(idx)),
    };
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-ember/20 bg-dusk/60 ${className ?? ""}`}
      style={{ aspectRatio: "4/3" }}
      aria-hidden="true"
      role="presentation"
    >
      {/* SVG connections */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {CONNECTIONS.map(([from, to]) => {
          const fromPos = getNodePos(from);
          const toPos = getNodePos(to);
          const isFromYou = from === ("you" as string) || to === ("you" as string);
          return (
            <line
              key={`${from}-${to}`}
              x1={`${fromPos.x}%`}
              y1={`${fromPos.y}%`}
              x2={`${toPos.x}%`}
              y2={`${toPos.y}%`}
              stroke={
                isFromYou ? "rgba(249,115,22,0.2)" : "rgba(255,255,255,0.08)"
              }
              strokeWidth="0.5"
            />
          );
        })}
      </svg>

      {/* Person nodes */}
      {PEOPLE.map((person, idx) => {
        const floatY = getFloatY(idx);
        const isYou = person.id === "you";
        return (
          <div
            key={person.id}
            className="absolute flex flex-col items-center"
            style={{
              left: `${person.x}%`,
              top: `${person.y + (isYou ? 0 : floatY)}%`,
              transform: "translate(-50%, -50%)",
              transition: prefersReducedMotion ? "none" : "top 0.05s linear",
            }}
          >
            {/* Node circle */}
            <motion.div
              className={`flex items-center justify-center rounded-full border font-mono font-bold text-white`}
              style={{
                width: isYou ? 44 : 32,
                height: isYou ? 44 : 32,
                fontSize: isYou ? 11 : 9,
                background: isYou
                  ? "rgba(249,115,22,0.15)"
                  : "rgba(30,41,59,0.9)",
                borderColor: isYou
                  ? "rgba(249,115,22,0.6)"
                  : `${CATEGORY_COLORS[person.category]}30`,
                boxShadow: isYou ? "0 0 16px rgba(249,115,22,0.25)" : "none",
              }}
              animate={
                isYou && !prefersReducedMotion ? { scale: [1, 1.06, 1] } : {}
              }
              transition={
                isYou
                  ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  : {}
              }
            >
              {person.label.slice(0, 2)}
            </motion.div>

            {/* Label */}
            <span
              className="mt-1 font-body text-[9px] text-white/60"
              style={{ whiteSpace: "nowrap" }}
            >
              {person.label}
            </span>

            {/* Category dot */}
            {!isYou && (
              <span
                className={`absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full ${CATEGORY_DOT_COLORS[person.category]}`}
              />
            )}
          </div>
        );
      })}

      {/* Encryption badge */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-signal/20 bg-zero/80 px-2.5 py-1 backdrop-blur-sm">
        <svg
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="1"
            y="5"
            width="8"
            height="7"
            rx="1.5"
            stroke="#00D97E"
            strokeWidth="1.2"
          />
          <path
            d="M3 5V3.5a2 2 0 0 1 4 0V5"
            stroke="#00D97E"
            strokeWidth="1.2"
          />
        </svg>
        <span className="font-mono text-[9px] text-signal/80">
          E2E Encrypted
        </span>
      </div>

      {/* Legend */}
      <div className="absolute top-3 left-3 space-y-1">
        {[
          { color: "bg-ember", label: "Family" },
          { color: "bg-signal", label: "Friends" },
          { color: "bg-mist", label: "Work" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
            <span className="font-mono text-[9px] text-mist/50">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
