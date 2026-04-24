import React from "react";
import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import ReviewSection from "@/components/ReviewSection";

const About: React.FC = () => (
  <PageLayout>
    <AboutSection />
    <ReviewSection />
  </PageLayout>
);

export default About;
