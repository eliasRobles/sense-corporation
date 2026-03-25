import { HeroSection } from "@/sections/hero-section";
import { ServicesSection } from "@/sections/services-section";
import { AboutSection } from "@/sections/about-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
