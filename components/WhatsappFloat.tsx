"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/content";

export default function WhatsappFloat() {
  return (
    <motion.a
      href={WHATSAPP_LINK("Hola! Quiero pedir un presupuesto sin cargo.")}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white"
      aria-label="Escribinos por WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2 22l5.37-1.41a9.9 9.9 0 0 0 4.67 1.19h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.19.84.85-3.11-.2-.32a8.22 8.22 0 1 1 6.99 3.92Zm4.52-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.92.92 0 0 0-.67.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">
        Escribinos
      </span>
    </motion.a>
  );
}
