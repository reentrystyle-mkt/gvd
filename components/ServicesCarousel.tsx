"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  FileCheck,
  Gauge,
  Search,
  Settings,
  ScanLine,
  Wrench,
  Package,
  Handshake,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/content";
import Reveal from "@/components/Reveal";

const ICONS: Record<string, LucideIcon> = {
  flame: Flame,
  "file-check": FileCheck,
  gauge: Gauge,
  search: Search,
  settings: Settings,
  "scan-line": ScanLine,
  wrench: Wrench,
  package: Package,
  handshake: Handshake,
};

const PER_SLIDE = 2;
const AUTO_ADVANCE_MS = 4000;

export default function ServicesCarousel() {
  const pages = useMemo(() => {
    const chunks: (typeof SERVICES[number])[][] = [];
    for (let i = 0; i < SERVICES.length; i += PER_SLIDE) {
      chunks.push(SERVICES.slice(i, i + PER_SLIDE));
    }
    return chunks;
  }, []);

  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setPage((p) => (p + 1) % pages.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(interval);
  }, [paused, pages.length]);

  function go(direction: 1 | -1) {
    setPage((p) => (p + direction + pages.length) % pages.length);
  }

  return (
    <section
      id="servicios"
      className="scroll-mt-24 bg-navy px-5 py-12 text-white sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-4xl font-extrabold leading-[0.95] tracking-tighter sm:text-5xl">
            Servicios
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-8">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            className="flex items-center gap-2 sm:gap-4"
          >
            <motion.button
              type="button"
              onClick={() => go(-1)}
              aria-label="Servicio anterior"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              className="shrink-0 rounded-full bg-gold p-2 text-navy"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            <div className="min-w-0 flex-1 overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${page * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 32 }}
              >
                {pages.map((group, i) => (
                  <div
                    key={i}
                    className="grid w-full shrink-0 grid-cols-2 gap-3 sm:gap-4"
                  >
                    {group.map((s) => {
                      const Icon = ICONS[s.icon];
                      const isHighlight = "highlight" in s && s.highlight;
                      return (
                        <div
                          key={s.title}
                          className={`relative flex flex-col items-center gap-2 rounded-[28px] border-2 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold sm:gap-2.5 sm:p-5 ${
                            isHighlight
                              ? "border-gold bg-white"
                              : "border-transparent bg-white"
                          }`}
                        >
                          {isHighlight && (
                            <span className="whitespace-nowrap rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-navy">
                              Destacado
                            </span>
                          )}
                          <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy sm:h-11 sm:w-11">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.25} />
                          </span>
                          <h3 className="text-sm font-bold leading-snug tracking-tight text-navy sm:text-base">
                            {s.title}
                          </h3>
                          <p className="text-xs text-navy/60 sm:text-sm">
                            {s.body}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.button
              type="button"
              onClick={() => go(1)}
              aria-label="Siguiente servicio"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              className="shrink-0 rounded-full bg-gold p-2 text-navy"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all hover:bg-gold/70 ${
                  i === page ? "w-6 bg-gold" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
