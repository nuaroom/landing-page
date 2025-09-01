"use client";

import { motion, Variants } from "framer-motion";

type PanelDemoProps = {
  className?: string;
  delay?: number;
  lines?: number;
};

const container = {
  hidden: { opacity: 0, y: 8 },
  show: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: customDelay, staggerChildren: 0.06 }
  })
};

const item: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 240, damping: 20 } }
};

export function PanelDemo({ className = "", delay = 0.05, lines = 3 }: PanelDemoProps) {
  return (
    <motion.div
      className={`relative w-full rounded-md overflow-hidden bg-white/5 ring-1 ring-white/10 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20%" }}
      variants={container}
      custom={delay}
    >
      {/* soft gradient wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(120deg, rgba(167,139,250,0.25), rgba(34,211,238,0.20) 40%, rgba(52,211,153,0.18))"
        }}
      />

      {/* header bar */}
      <div className="relative z-10 flex items-center gap-2 px-3 pt-2">
        {["#ef4444", "#eab308", "#10b981"].map((c) => (
          <motion.span
            key={c}
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: c }}
            variants={item}
          />
        ))}
        <motion.div variants={item} className="ml-auto h-2 w-10 rounded bg-white/20" />
      </div>

      {/* content area */}
      <div className="relative z-10 px-3 py-2">
        <motion.div variants={item} className="h-4 w-28 rounded bg-white/30 mb-2" />
        <motion.div variants={item} className="h-2 w-40 rounded bg-white/15 mb-1.5" />
        <motion.div variants={item} className="h-2 w-36 rounded bg-white/15 mb-3" />

        {/* animated mini chart / blocks */}
        <div className="flex items-end gap-1.5 mt-1">
          {[8, 14, 10, 18, 12, 16].slice(0, Math.max(3, lines)).map((h, i) => (
            <motion.div
              key={i}
              className="w-4 rounded bg-white/20"
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: h, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.15 + i * 0.05, type: "spring", stiffness: 240, damping: 22 }}
            />
          ))}
        </div>
      </div>

      {/* shimmer sweep */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={{ x: "-120%" }}
        whileInView={{ x: ["-120%", "120%"] }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut", delay }}
        style={{
          background:
            "linear-gradient(100deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)"
        }}
      />
    </motion.div>
  );
}

export default PanelDemo;