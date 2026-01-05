import React from "react";
import PulsarGridBackground from "@/components/ui/pulsar-grid-background";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const About: React.FC = () => {
  return (
    <PulsarGridBackground
      backgroundColor="#020010"
      dotColor="rgba(0, 255, 255, 1)"
      gridSpacing={30}
    >
      <Navbar />
      <main className="pt-20">
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </PulsarGridBackground>
  );
};

export default About;
