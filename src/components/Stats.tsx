"use client";

import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="container-page py-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Every $1 invested in UX brings $100 ROI.
        </h2>
        <p className="text-xs text-zinc-500">— Forrester, 2017</p>
      </motion.div>
    </section>
  );
}


