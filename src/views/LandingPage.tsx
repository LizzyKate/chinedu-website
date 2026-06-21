import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/landing/HeroSection";
import CoreSpecializations from "@/components/sections/landing/CoreSpecializations";
import SteeringInnovation from "@/components/sections/landing/SteeringInnovation";
import ContactTransmission from "@/components/sections/landing/ContactTransmission";

export default function LandingPage() {
  return (
    <div className="mx-auto font-sans text-pm-navy bg-white 3xl:w-7xl">
      <Header activeLink="inventory" />
      <HeroSection />
      <CoreSpecializations />
      <SteeringInnovation />
      <ContactTransmission />
      <Footer />
    </div>
  );
}
