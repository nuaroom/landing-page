"use client";

import { motion } from "framer-motion";
import PanelDemo from "@/components/PanelDemo";

export function Principles() {
  return (
    <section className="container-page py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Make every design decision UX principle-backed.
          </h2>
          <p className="text-zinc-400 max-w-prose">
            Lean teams move fast, but vibe-coded UX piles up design debt. Heurica scales UX principles, clarifies trade-offs, and builds reusable design systems so your product scales smoothly.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {["UX Design Audit", "Clear Design Trade-offs", "Reusable UX Library"].map(
            (title, i) => (
              <motion.div
                key={title}
                className="card card-glow p-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <PanelDemo className="h-40 mb-4" delay={0.1 + i * 0.04} lines={5} />
                <h3 className="font-medium mb-1">{title}</h3>
                <p className="text-zinc-400 text-sm">
                  Design options, principles, and reusable patterns turned into assets.
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}


