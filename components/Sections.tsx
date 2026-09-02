"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Reveal from "@/components/Reveal";
import CtaButton from "@/components/CtaButton";
import { assetPath } from "@/lib/asset-path";
import {
  PILLARS,
  FEATURED_SERVICES,
  FINANCING_NOTE,
  FINANCING_DETAIL,
  ABOUT_PARAGRAPHS,
  BACKING,
  CONTACT,
  WHATSAPP_LINK,
} from "@/lib/content";

function SectionTitle({
  children,
  invert = false,
}: {
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <h2
      className={`text-4xl font-extrabold leading-[0.95] tracking-tighter sm:text-5xl ${
        invert ? "text-white" : "text-navy"
      }`}
    >
      {children}
    </h2>
  );
}

export function Pillars() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className="rounded-[32px] border-2 border-navy/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold"
            >
              <div className="mb-3 h-1.5 w-10 rounded-full bg-gold" />
              <h3 className="text-lg font-bold tracking-tight text-navy">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-navy/70">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Savings() {
  return (
    <section className="bg-gold px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-4xl font-extrabold leading-[0.95] tracking-tighter text-navy sm:text-5xl">
            ¿Cuánto podés ahorrar?
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Reveal
            delay={0.1}
            className="rounded-[32px] border-2 border-navy/10 bg-white p-7"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-navy/50">
              Ahorro de un
            </p>
            <p className="mt-1 text-5xl font-extrabold tracking-tighter text-navy">
              60%
            </p>
            <p className="mt-2 text-sm text-navy/70">
              Pagás hasta un 60% menos que la nafta en cada carga.
            </p>
          </Reveal>
          <Reveal
            delay={0.2}
            className="rounded-[32px] border-2 border-navy/10 bg-white p-7"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-navy/50">
              Recupero de tu inversión
            </p>
            <p className="mt-1 text-5xl font-extrabold tracking-tighter text-navy">
              3-6 meses
            </p>
            <p className="mt-2 text-sm text-navy/70">
              Lo que ahorrás cada mes cubre la conversión en poco tiempo.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.3} className="mt-10">
          <a
            href={WHATSAPP_LINK(
              "Hola! Quiero empezar a ahorrar con mi auto."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-navy px-7 py-3.5 text-center text-base font-extrabold tracking-tight text-white transition hover:bg-navy-dark"
          >
            Quiero empezar a ahorrar, escribinos
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function FeaturedServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openService =
    openIndex !== null ? FEATURED_SERVICES[openIndex] : null;

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURED_SERVICES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.1}
              className="flex items-center justify-between gap-3 rounded-[32px] border-2 border-navy/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold"
            >
              <span className="font-bold tracking-tight text-navy">
                {f.title}
              </span>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="shrink-0 rounded-full bg-navy px-3 py-1 text-xs font-bold text-white transition hover:bg-navy-dark"
              >
                + Info
              </button>
            </Reveal>
          ))}
        </div>
        <Reveal
          delay={0.3}
          className="mt-6 flex flex-col items-center justify-between gap-4 rounded-[28px] border-2 border-gold bg-white p-5 sm:flex-row"
        >
          <div>
            <p className="font-extrabold tracking-tight text-navy">
              {FINANCING_NOTE}
            </p>
            <p className="text-sm text-navy/60">{FINANCING_DETAIL}</p>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={assetPath("/logo-visa.svg")}
              alt="Visa"
              width={62}
              height={20}
              className="object-contain"
              style={{ height: "20px", width: "auto" }}
            />
            <Image
              src={assetPath("/logo-mastercard.svg")}
              alt="Mastercard"
              width={45}
              height={28}
              className="object-contain"
              style={{ height: "28px", width: "auto" }}
            />
            <Image
              src={assetPath("/logo-americanexpress.svg")}
              alt="American Express"
              width={28}
              height={28}
              className="object-contain"
              style={{ height: "28px", width: "auto" }}
            />
            <span className="text-sm font-medium text-navy/50">y más</span>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {openService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 px-5"
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm rounded-[32px] bg-white p-7"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Cerrar"
                className="absolute right-5 top-5 text-navy/50 transition hover:text-navy"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="pr-6 text-xl font-extrabold tracking-tight text-navy">
                {openService.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {openService.info}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function About() {
  return (
    <section
      id="quienes-somos"
      className="scroll-mt-24 bg-navy px-5 py-16 text-white sm:px-8 sm:py-20"
    >
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 sm:items-center">
        <Reveal>
          <SectionTitle invert>Quiénes somos</SectionTitle>
          <div className="mt-6 max-w-[520px] space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
            {ABOUT_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15} className="overflow-hidden rounded-[32px]">
          <Image
            src={assetPath("/foto-equipo.jpg")}
            alt="Equipo de GVD Gas GNC"
            width={700}
            height={1050}
            className="h-auto w-full object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function Backing() {
  return (
    <section
      id="respaldo"
      className="scroll-mt-24 bg-gold px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-4xl font-extrabold leading-[0.95] tracking-tighter text-navy sm:text-5xl">
            Respaldo y habilitaciones
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:items-center">
          <div className="grid gap-4">
            {BACKING.map((b, i) => (
              <Reveal
                key={b.caption}
                delay={i * 0.08}
                className="flex items-center gap-4 rounded-[32px] bg-navy p-5 text-white transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex shrink-0 items-center justify-center">
                  {b.type === "logo" ? (
                    <Image
                      src={assetPath(b.src)}
                      alt={b.alt}
                      width={140}
                      height={72}
                      className="h-10 w-auto object-contain brightness-0 invert"
                    />
                  ) : (
                    <span className="rounded-full bg-gold px-4 py-1.5 text-lg font-extrabold tracking-tight text-navy">
                      {b.label}
                    </span>
                  )}
                </span>
                <p className="text-sm font-medium leading-snug text-white/80">
                  {b.caption}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="overflow-hidden rounded-[32px]">
            <Image
              src={assetPath("/foto-elevador.jpg")}
              alt="Mecánico de GVD Gas trabajando en un auto elevado"
              width={700}
              height={1050}
              className="h-80 w-full object-cover sm:h-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-navy px-5 py-16 text-white sm:px-8 sm:py-20"
    >
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
        <Reveal>
          <SectionTitle invert>Contacto y ubicación</SectionTitle>
          <div className="mt-6 max-w-[520px] space-y-3 text-white/85">
            <p>{CONTACT.address}</p>
            <p>{CONTACT.phones.join(" / ")}</p>
            <p>{CONTACT.instagram}</p>
          </div>
          <CtaButton
            href={WHATSAPP_LINK("Hola! Quiero pedir mi turno o presupuesto.")}
            className="mt-6 px-7 py-3.5 text-center text-base"
          >
            Coordinemos tu turno, sin cargo
          </CtaButton>
        </Reveal>
        <Reveal delay={0.15} className="overflow-hidden rounded-[32px]">
          <iframe
            title="Ubicación GVD Gas GNC"
            src={CONTACT.mapEmbedSrc}
            className="h-72 w-full border-0 sm:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
