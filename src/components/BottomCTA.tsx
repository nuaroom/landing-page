"use client";

import { motion } from "framer-motion";

export function BottomCTA() {
  return (
    <section className="container-page py-20 text-center">
      <motion.h3
        className="text-2xl sm:text-3xl font-semibold mb-6"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Don’t duct tape UX. <span className="text-gradient">Scale it.</span>
      </motion.h3>
      <div className="flex items-center justify-center gap-3">
        <a href="#waitlist" className="btn btn-primary h-11 px-6">Join Waitlist</a>
        <a href="#example-audit" className="btn btn-secondary h-11 px-6">See Example Audit</a>
      </div>
    </section>
  );
}


