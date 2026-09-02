import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GVD Gas GNC — Taller de GNC en Rafael Castillo, Zona Oeste",
  description:
    "Instalamos, renovamos y mantenemos tu equipo de GNC. Taller PEC con más de 24 años en Rafael Castillo, Zona Oeste. Presupuesto sin cargo por WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black font-sans">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
