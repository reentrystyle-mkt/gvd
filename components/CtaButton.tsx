"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function CtaButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`inline-block rounded-full bg-gold font-extrabold tracking-tight text-navy transition-colors hover:bg-gold-dark ${className}`}
    >
      {children}
    </motion.a>
  );
}
