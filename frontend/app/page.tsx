import { HeroSection } from "@/sections/hero-section";
import { ServicesSection } from "@/sections/services-section";
import { AboutSection } from "@/sections/about-section";
import { HowWeWorkSection } from "@/sections/how-we-work-section";
import { TechnologiesSection } from "@/sections/technologies-section";
import { WhySenseSection } from "@/sections/why-sense-section";
import { EngagementModelsSection } from "@/sections/engagement-models-section";
import { ContactCTASection } from "@/sections/contact-cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowWeWorkSection />
      <TechnologiesSection />
      <WhySenseSection />
      <EngagementModelsSection />
      <ContactCTASection />
    </>
  );
}
