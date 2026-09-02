import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FinancingBar from "@/components/FinancingBar";
import WhatsappFloat from "@/components/WhatsappFloat";
import ServicesCarousel from "@/components/ServicesCarousel";
import {
  Pillars,
  Savings,
  FeaturedServicesSection,
  About,
  Backing,
  Contact,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FinancingBar />
        <Pillars />
        <ServicesCarousel />
        <Savings />
        <FeaturedServicesSection />
        <About />
        <Backing />
        <Contact />
      </main>
      <footer className="flex flex-col items-center gap-2 bg-navy-dark px-5 py-6 text-center text-xs text-white/50">
        <p>
          © {new Date().getFullYear()} GVD Gas GNC · Av. Don Bosco 6700 esq.
          Albarracín, Rafael Castillo
        </p>
        <p className="flex items-center gap-1.5">
          Hecho por{" "}
          <a
            href="https://reentrystyle.com.ar"
            target="_blank"
            rel="noopener"
            className="text-white/70 underline-offset-2 hover:underline"
          >
            Reentry Style
          </a>
          <a
            href="https://www.instagram.com/reentrystyle/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram de Reentry Style"
            className="text-white/70 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" />
            </svg>
          </a>
        </p>
      </footer>
      <WhatsappFloat />
    </>
  );
}
