import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AutosSection from "@/components/AutosSection";
import LogisticsSection from "@/components/LogisticsSection";
import TrustSection from "@/components/TrustSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Swiftee Autos & Logistics - Your Trusted Partner for Car Sales & Smart Logistics",
  description: "Buy your next car with confidence. Move your packages with speed. Reliability is our culture at Swiftee Autos & Logistics.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <AutosSection />
      <TrustSection />
      <LogisticsSection />
      <Gallery />
      <Testimonials />
      <ServiceAreas />
      <Footer />
    </main>
  );
}
