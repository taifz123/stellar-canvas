import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-card/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            See Us In Action
          </span>
          <h2 className="section-title mt-4 text-foreground">
            Our <span className="text-gradient-cyan">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Watch our team in action delivering professional electrical solutions
            with precision and expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-glass rounded-3xl overflow-hidden glow-cyan">
            <div className="relative aspect-video bg-black/50">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%2302010' width='1920' height='1080'/%3E%3C/svg%3E"
              >
                <source
                  src={`${import.meta.env.BASE_URL}videos/hero-video-2.mp4`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;