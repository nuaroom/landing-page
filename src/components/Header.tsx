"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";

export function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0b0b]/70 backdrop-blur">
      <motion.div style={{ scaleX }} className="progress-bar" />
      <div className="container-page flex items-center justify-between h-14">
        <Link href="/" className="font-semibold tracking-tight">
          Heurica.ai
        </Link>
        <nav className="hidden sm:flex items-center gap-2">
          <motion.a
            href="#waitlist"
            whileHover={{ y: -1 }}
            className="btn btn-secondary h-9"
          >
            Join Waitlist
          </motion.a>
          <motion.a
            href="#example-audit"
            whileHover={{ y: -1 }}
            className="btn btn-primary h-9"
          >
            See Example Audit
          </motion.a>
        </nav>
      </div>
    </header>
  );
}


