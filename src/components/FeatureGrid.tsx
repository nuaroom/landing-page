"use client";

import { motion } from "framer-motion";
import PanelDemo from "@/components/PanelDemo";
import FeatureArt from "@/components/FeatureArt";

const features = [
  {
    title: "Spot usability gaps",
    desc: "Ship without blind spots. Avoid costly design debt.",
  },
  {
    title: "Accelerate A/B insights",
    desc: "Get reliable UX-backed answers aligned with business goals.",
  },
  {
    title: "Scale without duct taping",
    desc: "Turn every decision into a reusable UX pattern.",
  },
];

export function FeatureGrid() {
  return (
    <section className="container-page py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Fast-moving teams</h2>
        <p className="text-2xl sm:text-3xl text-zinc-300">deserve UX that keeps up.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            className="card card-glow p-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -4 }}
          >
            {idx === 0 && <FeatureArt kind="gaps" className="h-28 mb-4" delay={0.06} />}
            {idx === 1 && <FeatureArt kind="ab" className="h-28 mb-4" delay={0.06} />}
            {idx === 2 && <FeatureArt kind="scale" className="h-28 mb-4" delay={0.06} />}
            <h3 className="font-medium mb-1">{f.title}</h3>
            <p className="text-zinc-400 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


