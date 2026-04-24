import React, { useEffect } from "react";
import PulsarGridBackground from "@/components/ui/pulsar-grid-background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <PulsarGridBackground
      backgroundColor="#020010"
      dotColor="rgba(0, 255, 255, 1)"
      gridSpacing={30}
    >
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </PulsarGridBackground>
  );
};

export default PageLayout;
