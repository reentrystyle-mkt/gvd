"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { WHATSAPP_LINK, FINANCING_NOTE, FINANCING_DETAIL } from "@/lib/content";
import { assetPath } from "@/lib/asset-path";
import CtaButton from "@/components/CtaButton";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-16 text-white sm:px-8 sm:py-24">
      <Image
        src={assetPath("/foto-hero.jpg")}
        alt="Instalación de equipo de GNC en el taller GVD Gas"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-5xl flex-col items-start gap-4"
      >
        <motion.p
          variants={item}
          className="whitespace-nowrap text-sm font-bold uppercase tracking-widest text-white sm:text-base"
        >
          GVD Gas GNC
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-extrabold leading-[0.95] tracking-tighter text-gold sm:text-6xl"
        >
          Convertí tu auto
          <br />a GNC en el día
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-md text-base text-white/85 sm:text-lg"
        >
          Cuidamos tu auto como si fuera nuestro: instalamos, renovamos y
          mantenemos tu equipo de GNC con la garantía de un taller PEC
          oficial.
        </motion.p>

        <motion.div variants={item}>
          <CtaButton
            href={WHATSAPP_LINK("Hola! Quiero pedir un presupuesto sin cargo.")}
            className="whitespace-nowrap px-6 py-3 text-sm sm:text-base"
          >
            Escribinos y te cotizamos sin cargo
          </CtaButton>
        </motion.div>

        <motion.p variants={item} className="text-xs text-white/70 sm:text-sm">
          {FINANCING_NOTE} · {FINANCING_DETAIL}
        </motion.p>
      </motion.div>
    </section>
  );
}
