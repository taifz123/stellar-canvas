import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Target } from "lucide-react";

const features = [
  "Licensed & Insured Electricians",
  "24/7 Emergency Services",
  "Free Estimates & Consultations",
  "Quality Workmanship Guaranteed",
  "Latest Technology & Equipment",
  "Competitive & Transparent Pricing",
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="section-title mt-4 text-foreground">
              Powering Homes & Businesses{" "}
              <span className="text-gradient-cyan">Since 2017</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Exotic Electrical PTY Ltd is a premier electrical services company dedicated to 
              providing exceptional quality and safety for all your electrical needs. 
              With 8 years of experience serving Sydney wide, our team of certified electricians 
              delivers professional solutions for industrial, commercial, and 
              domestic projects.
            </p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p><span className="text-primary font-medium">ABN:</span> 24 680 056 455</p>
              <p><span className="text-primary font-medium">Electrical License No:</span> 452424C</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="btn-primary-glow inline-flex mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.a>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="card-glass rounded-2xl p-6 md:p-8"
            >
              <Award className="w-10 h-10 text-primary mb-4" />
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                8+
              </div>
              <div className="text-muted-foreground mt-1">Years Experience</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card-glass rounded-2xl p-6 md:p-8 mt-8"
            >
              <Users className="w-10 h-10 text-primary mb-4" />
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                1000+
              </div>
              <div className="text-muted-foreground mt-1">Happy Clients</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card-glass rounded-2xl p-6 md:p-8"
            >
              <Target className="w-10 h-10 text-primary mb-4" />
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                500+
              </div>
              <div className="text-muted-foreground mt-1">Projects Done</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card-glass rounded-2xl p-6 md:p-8 mt-8"
            >
              <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                100%
              </div>
              <div className="text-muted-foreground mt-1">Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
