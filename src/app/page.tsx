import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CoreSpecializations from "@/components/sections/CoreSpecializations";
import SteeringInnovation from "@/components/sections/SteeringInnovation";
import ContactTransmission from "@/components/sections/ContactTransmission";

export default function Home() {
  return (
    <div className="mx-auto font-sans text-pm-navy bg-white 3xl:w-[1280px]">
      <Header />
      <HeroSection />
      <CoreSpecializations />
      <SteeringInnovation />
      <ContactTransmission />
      <Footer />
    </div>
  );
}
