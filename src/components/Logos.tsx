"use client";

import { motion } from "framer-motion";

const logos: { alt: string; src: string }[] = [
  { alt: "University of Maryland", src: "/logos-primary.png" },
  { alt: "HCIL", src: "/hcil_logo.png" },
];

export function Logos() {
  return (
    <section className="container-page py-8">
      <p className="text-center text-sm text-zinc-400 mb-6">
        We are trusted by top UX and HCI organizations.
      </p>
      <div className="flex items-center justify-center gap-10 sm:gap-14 opacity-90">
        {logos.map((logo, i) => (
          <motion.img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-6 sm:h-7 md:h-8 object-contain"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.04 }}
          />
        ))}
      </div>
    </section>
  );
}


