import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Industrial Lighting",
    category: "Commercial",
    description: "Complete LED lighting installation for a manufacturing facility.",
  },
  {
    id: 2,
    image: project2,
    title: "Smart Meter Installation",
    category: "Residential",
    description: "Modern switchboard and meter upgrade for residential property.",
  },
  {
    id: 3,
    image: project3,
    title: "Ambient Lighting Design",
    category: "Residential",
    description: "Custom ambient lighting with ceiling fan and smart controls.",
  },
  {
    id: 4,
    image: project4,
    title: "Luxury Bathroom",
    category: "Residential",
    description: "LED backlit mirror and feature lighting installation.",
  },
  {
    id: 5,
    image: project5,
    title: "Premium Bathroom",
    category: "Commercial",
    description: "High-end bathroom with LED strip lighting and dark marble finishes.",
  },
  {
    id: 6,
    image: project6,
    title: "Modern Kitchen",
    category: "Residential",
    description: "Complete electrical and lighting for luxury kitchen renovation.",
  },
];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedProject(index);
  const closeLightbox = () => setSelectedProject(null);

  const nextProject = () => {
    if (selectedProject !== null) {
      setSelectedProject((selectedProject + 1) % projects.length);
    }
  };

  const prevProject = () => {
    if (selectedProject !== null) {
      setSelectedProject((selectedProject - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Portfolio
          </span>
          <h2 className="section-title mt-4 text-foreground">
            Recent <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Take a look at some of our recent electrical installations and see the 
            quality of work we deliver.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer border border-primary/20 aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevProject();
              }}
              className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors z-10"
            >
              <ArrowLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextProject();
              }}
              className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors z-10"
            >
              <ArrowRight className="w-8 h-8" />
            </button>

            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
              />
              <div className="text-center mt-6">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {projects[selectedProject].category}
                </span>
                <h3 className="font-display text-2xl font-semibold text-foreground mt-2">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-muted-foreground mt-2">
                  {projects[selectedProject].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
