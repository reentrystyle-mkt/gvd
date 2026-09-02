import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
        <Pillars />
        <ServicesCarousel />
        <Savings />
        <FeaturedServicesSection />
        <About />
        <Backing />
        <Contact />
      </main>
      <footer className="bg-navy-dark px-5 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} GVD Gas GNC · Av. Don Bosco 5226 esq.
        Albarracín, Rafael Castillo
      </footer>
      <WhatsappFloat />
    </>
  );
}
