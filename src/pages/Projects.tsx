import React from "react";
import PulsarGridBackground from "@/components/ui/pulsar-grid-background";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Projects: React.FC = () => {
  return (
    <PulsarGridBackground
      backgroundColor="#020010"
      dotColor="rgba(0, 255, 255, 1)"
      gridSpacing={30}
    >
      <Navbar />
      <main className="pt-20">
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </PulsarGridBackground>
  );
};

export default Projects;
