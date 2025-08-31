"use client";

import { motion } from "framer-motion";

type FeatureArtProps = {
  kind: "gaps" | "ab" | "scale";
  className?: string;
  delay?: number;
};

const spring = { type: "spring", stiffness: 260, damping: 22 } as const;

export function FeatureArt({ kind, className = "", delay = 0.1 }: FeatureArtProps) {
  if (kind === "gaps") {
    // Magnifying glass sweeping over tiles to reveal gaps
    return (
      <div className={`relative w-full h-full rounded-md overflow-hidden bg-white/5 ring-1 ring-white/10 ${className}`}>
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-1 p-2">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              className="rounded bg-white/10"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: delay + i * 0.02 }}
            />
          ))}
        </div>
        {/* magnifier with internal magnified grid */}
        <motion.div
          className="absolute rounded-full border border-white/50 backdrop-blur-sm overflow-hidden"
          style={{ width: 112, height: 112, boxShadow: "0 6px 24px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.25)" }}
          initial={{ x: 8, y: 10, scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, x: [8, 116, 42, 90, 24, 8], y: [10, 26, 50, 22, 48, 10] }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 6, ease: "easeInOut", delay, repeat: Infinity }}
        >
          {/* magnified grid texture */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 28px)",
            }}
          />
          {/* lens sheen */}
          <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.22), transparent 70%)" }} />
          {/* highlight gaps (red pips) larger inside lens */}
          {[{ x: 24, y: 26 }, { x: 60, y: 40 }, { x: 38, y: 66 }].map((p, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{ left: p.x, top: p.y, width: 8, height: 8, background: "#ef4444", boxShadow: "0 0 0 6px rgba(239,68,68,0.12)" }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: [0, 1, 1.18, 1], opacity: [0, 1, 0.9, 1] }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: delay + 0.4 + i * 0.12, duration: 1.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  if (kind === "ab") {
    // Two columns labeled A and B with bars rising; winner ring pulse
    return (
      <div className={`relative w-full h-full rounded-md overflow-hidden bg-white/5 ring-1 ring-white/10 ${className}`}>
        <div className="absolute inset-0 flex gap-3 p-3">
          {["A", "B"].map((label, col) => (
            <div key={label} className="flex-1 flex flex-col justify-end gap-1">
              {[10, 16, 6, 12, 8].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-full rounded bg-white/15"
                  style={{ height: 4 + (i % 2 ? 1 : 0) }}
                  initial={{ scaleX: 0, opacity: 0, transformOrigin: "left" }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ ...spring, delay: delay + (col * 0.12) + i * 0.05 }}
                />
              ))}
              <motion.div
                className="rounded bg-white/25"
                initial={{ height: 0, opacity: 0 }}
                whileInView={{
                  height: col === 1 ? [0, 54, 62, 54] : [0, 40, 38, 40],
                  opacity: 1
                }}
                viewport={{ amount: 0.3 }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  delay: delay + 0.35 + col * 0.12,
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 0.6
                }}
              />
              <span className="mt-1 text-[10px] text-white/70">{label}</span>
            </div>
          ))}
        </div>
        {/* winner pulse around B */}
        <motion.div
          className="absolute inset-y-2 right-2 w-[46%] rounded-md"
          initial={{ boxShadow: "0 0 0 0 rgba(52,211,153,0.0)" }}
          whileInView={{
            boxShadow: [
              "0 0 0 0 rgba(52,211,153,0.0)",
              "0 0 0 6px rgba(52,211,153,0.18)",
              "0 0 0 10px rgba(52,211,153,0.10)",
              "0 0 0 0 rgba(52,211,153,0.0)"
            ]
          }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 2, ease: "easeInOut", delay: delay + 0.6, repeat: Infinity, repeatDelay: 0.6 }}
        />

        {/* winner badge */}
        <motion.div
          className="absolute right-3 top-3 px-2 py-0.5 text-[10px] rounded-full bg-white/10 text-white/90"
          initial={{ opacity: 0, y: -4 }}
          whileInView={{ opacity: [0, 1, 0.8, 1], y: [ -4, 0, 0, 0 ] }}
          viewport={{ amount: 0.3 }}
          transition={{ delay: delay + 0.8, duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          Best performer
        </motion.div>

        {/* rising uplift dots in B */}
        {[0,1,2].map((i) => (
          <motion.span
            key={i}
            className="absolute right-10 rounded-full"
            style={{ width: 4, height: 4, background: "linear-gradient(180deg,#22d3ee,#a78bfa)" }}
            initial={{ opacity: 0, y: 56, x: 0 }}
            whileInView={{ opacity: [0, 1, 0], y: [56, 18, 10], x: [0, -4, 0] }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: delay + 0.7 + i * 0.25, repeat: Infinity, repeatDelay: 0.8 }}
          />
        ))}
      </div>
    );
  }

  // kind === "scale": Stacked blocks that continuously build and a looping arrow + pattern replication
  return (
    <div className={`relative w-full h-full rounded-md overflow-hidden bg-white/5 ring-1 ring-white/10 ${className}`}>
      {/* breathing staircase */}
      <div className="absolute bottom-2 left-2 right-2 flex items-end gap-2">
        {[10, 16, 24, 34].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded bg-white/20"
            initial={{ height: 6, opacity: 0.9 }}
            whileInView={{ height: [6, h, h + 6, h] }}
            viewport={{ amount: 0.3 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 2.4, delay: delay + i * 0.12, repeat: Infinity, repeatDelay: 0.4 }}
          />
        ))}
      </div>

      {/* arrow growth loop */}
      <motion.svg
        className="absolute right-3 top-3 h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ type: "tween", ease: "easeOut", delay: delay + 0.3 }}
      >
        <motion.path
          d="M4 16 L10 10 L14 14 L20 8"
          stroke="url(#grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: [0, 1, 1, 0] }}
          viewport={{ amount: 0.3 }}
          transition={{ type: "tween", ease: "easeInOut", duration: 2, delay: delay + 0.4, repeat: Infinity, repeatDelay: 0.3 }}
        />
        <motion.path
          d="M20 8 L20 13 M20 8 L15 8"
          stroke="url(#grad)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: [0, 1, 1, 0] }}
          viewport={{ amount: 0.3 }}
          transition={{ type: "tween", ease: "easeInOut", duration: 1.6, delay: delay + 0.5, repeat: Infinity, repeatDelay: 0.3 }}
        />
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* pattern replication: small squares appearing from right to left */}
      <div className="absolute top-2 right-2 flex gap-1.5">
        {[0,1,2].map((i) => (
          <motion.span
            key={i}
            className="h-3 w-3 rounded-sm"
            style={{ background: "linear-gradient(120deg, rgba(34,211,238,0.6), rgba(167,139,250,0.6))" }}
            initial={{ opacity: 0, scale: 0.6, y: -2 }}
            whileInView={{ opacity: [0, 1, 1, 0], scale: [0.6, 1, 1, 0.6], y: [-2, 0, 0, -2] }}
            viewport={{ amount: 0.3 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 2.2, delay: delay + 0.6 + i * 0.2, repeat: Infinity, repeatDelay: 0.4 }}
          />
        ))}
      </div>
    </div>
  );
}

export default FeatureArt;


