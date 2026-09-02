"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FINANCING_NOTE, FINANCING_DETAIL } from "@/lib/content";
import { assetPath } from "@/lib/asset-path";

export default function FinancingBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-3 bg-gold px-5 py-4 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left"
    >
      <div>
        <p className="font-extrabold tracking-tight text-navy">
          {FINANCING_NOTE}
        </p>
        <p className="text-sm text-navy/70">{FINANCING_DETAIL}</p>
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
        <span className="text-sm font-medium text-navy/60">y más</span>
      </div>
    </motion.div>
  );
}
