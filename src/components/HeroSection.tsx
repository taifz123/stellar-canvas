import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Shield, Clock, Award } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-8 inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 backdrop-blur-md"
          >
            <Zap className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Licensed & Certified Electricians
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
          >
            <span className="text-foreground">POWER YOUR</span>
            <br />
            <span className="text-gradient-cyan">FUTURE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mx-auto mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground"
          >
            Premium electrical solutions for residential and commercial properties. 
            Expert installation, maintenance, and repairs with cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="btn-primary-glow text-lg inline-flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/projects" className="btn-outline-glow text-lg inline-flex">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
          >
            <div className="card-glass rounded-2xl p-4 md:p-6">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">8+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="card-glass rounded-2xl p-4 md:p-6">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Projects Done</div>
            </div>
            <div className="card-glass rounded-2xl p-4 md:p-6">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground">Emergency Service</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
