"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "This saved us 4 weeks of UX/UI design iteration.",
    author: "CEO & Founder @Name",
  },
  {
    quote: "This saved us 4 weeks of UX/UI design iteration.",
    author: "CEO & Founder @Name",
  },
];

export function Testimonials() {
  return (
    <section className="container-page py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="card card-glow p-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <p className="text-sm font-medium mb-2">“{t.quote}”</p>
            <p className="text-xs text-zinc-400">{t.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


