"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/content";
import { assetPath } from "@/lib/asset-path";
import CtaButton from "@/components/CtaButton";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Respaldo", href: "#respaldo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-3 z-40 px-3 sm:top-4 sm:px-6"
    >
      <div
        className={`mx-auto max-w-5xl border border-navy/10 bg-white transition-[border-radius] duration-300 ${
          open ? "rounded-[28px]" : "rounded-full"
        }`}
      >
        <div className="flex items-center justify-between px-3 py-1.5 sm:px-5">
          <a href="#" aria-label="Ir al inicio">
            <Image
              src={assetPath("/logo-gvd.png")}
              alt="GVD Gas GNC"
              width={64}
              height={96}
              className="h-16 w-auto"
              priority
            />
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy/70 transition hover:text-navy"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <CtaButton
              href={WHATSAPP_LINK(
                "Hola! Quiero pedir un presupuesto sin cargo."
              )}
              className="px-5 py-2.5 text-sm"
            >
              Cotizá gratis
            </CtaButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-6 rounded-full bg-navy"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 w-6 rounded-full bg-navy"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-6 rounded-full bg-navy"
            />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-1 border-t border-navy/10 px-4 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-full px-3 py-2.5 text-sm font-medium text-navy/80 transition hover:bg-navy/5"
                  >
                    {link.label}
                  </a>
                ))}
                <CtaButton
                  href={WHATSAPP_LINK(
                    "Hola! Quiero pedir un presupuesto sin cargo."
                  )}
                  className="mt-2 px-5 py-2.5 text-center text-sm"
                >
                  Cotizá gratis
                </CtaButton>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
