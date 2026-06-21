import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DirectorySidebar from "@/components/sections/directory/DirectorySidebar";
import DirectoryHero from "@/components/sections/directory/DirectoryHero";
import DrillingCard from "@/components/sections/directory/DrillingCard";
import SustenanceCard from "@/components/sections/directory/SustenanceCard";
import PipelineServices from "@/components/sections/directory/PipelineServices";
import MarineBottomCards from "@/components/sections/directory/MarineBottomCards";

export default function DirectoryPage() {
  return (
    <div className="mx-auto font-sans text-pm-navy bg-[#f7f8fa] 3xl:w-7xl">
      <Header activeLink="marine-tech" />

      <div
        className="grid gap-10 px-14 py-12 pb-16 items-start"
        style={{ gridTemplateColumns: "288px 1fr" }}
      >
        <DirectorySidebar />
        <main className="min-w-0">
          <DirectoryHero />
          <DrillingCard />
          <SustenanceCard />
          <PipelineServices />
          <MarineBottomCards />
        </main>
      </div>

      <Footer />
    </div>
  );
}
