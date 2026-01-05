import React from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Home, 
  Building2, 
  Wrench, 
  Cpu, 
  Zap,
  ShieldCheck,
  Cable,
  Factory
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential",
    description: "Complete electrical solutions for homes including wiring, lighting, and smart home integration.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Industrial-grade electrical systems for offices, warehouses, and retail spaces.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Heavy-duty electrical installations and maintenance for industrial facilities.",
  },
  {
    icon: Lightbulb,
    title: "LED Lighting",
    description: "Energy-efficient LED installations with custom designs and ambient lighting solutions.",
  },
  {
    icon: Cpu,
    title: "Smart Systems",
    description: "Automation, security systems, and IoT device integration for modern living.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Regular inspections, upgrades, and preventive maintenance to ensure safety.",
  },
  {
    icon: Cable,
    title: "Rewiring",
    description: "Complete rewiring services for older properties to meet modern standards.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Audits",
    description: "Comprehensive electrical safety inspections and compliance certifications.",
  },
  {
    icon: Zap,
    title: "Emergency",
    description: "24/7 emergency electrical services for urgent repairs and power restoration.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32">
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
            What We Offer
          </span>
          <h2 className="section-title mt-4 text-foreground">
            Our <span className="text-gradient-cyan">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From residential to commercial, we provide comprehensive electrical solutions 
            tailored to your specific needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group card-glass rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-primary/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
