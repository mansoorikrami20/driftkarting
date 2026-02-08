import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CarsSection from "@/components/CarsSection";
import PricingSection from "@/components/PricingSection";
import ConditionsSection from "@/components/ConditionsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <CarsSection />
      <PricingSection />
      <ConditionsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
