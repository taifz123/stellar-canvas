import React from "react";
import PulsarGridBackground from "@/components/ui/pulsar-grid-background";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ReviewSection from "@/components/ReviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <PulsarGridBackground
      backgroundColor="#020010"
      dotColor="rgba(0, 255, 255, 1)"
      gridSpacing={30}
    >
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ReviewSection />
        <ContactSection />
      </main>
      <Footer />
    </PulsarGridBackground>
  );
};

export default Index;
