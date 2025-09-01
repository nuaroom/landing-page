"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
};

export function Hero() {
  return (
    <section className="container-page pt-24 pb-16 text-center relative overflow-hidden">
      {/* Decorative hero blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(167,139,250,0.35), transparent 70%)",
        }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-10 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(34,211,238,0.3), transparent 70%)",
        }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 relative">
        <motion.div variants={item} className="mx-auto inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
          Get limited early access — join the waitlist now
        </motion.div>
        <div className="space-y-3">
          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Don&apos;t {" "}
            <motion.span
              className="tape-label tape-crease inline-block align-baseline"
              initial={{ rotate: -8, y: -8, opacity: 0, scaleX: 0.7 }}
              animate={{ rotate: -2, y: 0, opacity: 1, scaleX: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
            >
              duct tape
            </motion.span>{" "}
            UX.
            <br />
            <span className="relative inline-block align-baseline pl-8">
              {/* Animated ladder graphic to emphasize 'Scale' */}
              <motion.svg
                aria-hidden
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[1.5em] w-[1.1em]"
                viewBox="0 0 14 40"
                fill="none"
                initial="hidden"
                animate="show"
              >
                <motion.path
                  d="M3 2 L3 38"
                  stroke="url(#rail)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0.6 }, show: { pathLength: 1, opacity: 1, transition: { duration: 0.7, delay: 0.15 } } }}
                />
                <motion.path
                  d="M11 2 L11 38"
                  stroke="url(#rail)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0.6 }, show: { pathLength: 1, opacity: 1, transition: { duration: 0.7, delay: 0.15 } } }}
                />
                {([6, 12, 18, 24, 30, 36] as number[]).map((y, i) => (
                  <motion.line
                    key={y}
                    x1="4.2"
                    x2="9.8"
                    y1={y}
                    y2={y}
                    stroke="url(#rung)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    initial={{ scaleX: 0, opacity: 0, transformOrigin: "left center" }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.25 + i * 0.05, type: "spring", stiffness: 240, damping: 20 }}
                  />
                ))}
                {/* Climbing accent dot */}
                <motion.circle
                  r="1.6"
                  cx="7"
                  cy="36"
                  fill="url(#dot)"
                  initial={{ opacity: 0, cy: 36 }}
                  animate={{ opacity: 1, cy: 8 }}
                  transition={{ delay: 0.35, duration: 1.2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="rail" x1="0" x2="0" y1="0" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#22d3ee" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#a78bfa" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="rung" x1="0" x2="14" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#34d399" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#22d3ee" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="dot" x1="0" x2="0" y1="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </motion.svg>
              <motion.span
                className="text-gradient inline-block"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.3 }}
              >
                Scale
              </motion.span>
            </span>{" "}
            <span className="text-zinc-300">with principles.</span>
          </motion.h1>
          <motion.p variants={item} className="max-w-xl mx-auto text-zinc-400">
            UX Designer AI agent that scales your design with human-centered, UX best practices.
          </motion.p>
        </div>
        <motion.div variants={item} className="flex items-center justify-center gap-3">
          <a href="#waitlist" className="btn btn-primary h-11 px-6">Join Waitlist</a>
          <a href="#example-audit" className="btn btn-secondary h-11 px-6">See Example Audit</a>
        </motion.div>
      </motion.div>
    </section>
  );
}