import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Zap } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const quickLinks: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-primary/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Exotic Electrical" className="h-14 w-14 object-contain" />
              <div>
                <span className="font-display text-lg font-bold text-foreground tracking-wider">
                  EXOTIC
                </span>
                <span className="font-display text-lg font-bold text-primary tracking-wider ml-1">
                  ELECTRICAL
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Exotic Electrical PTY Ltd - Premium electrical solutions for industrial, 
              commercial, and domestic properties. Licensed, insured, and available 24/7.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              ABN: 24 680 056 455 | License: 452424C
            </p>
            <div className="flex gap-4 mt-6">
              <motion.a
                href="https://www.instagram.com/exotic.electrical/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Residential Electrical",
                "Commercial Electrical",
                "LED Lighting",
                "Smart Home Systems",
                "Emergency Repairs",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Sydney Wide Service Area</li>
              <li>
                <a href="tel:0415054695" className="hover:text-primary transition-colors">
                  0415 054 695
                </a>
              </li>
              <li>
                <a href="mailto:info@exoticelectrical.com.au" className="hover:text-primary transition-colors">
                  info@exoticelectrical.com.au
                </a>
              </li>
              <li className="pt-2">
                <span className="text-primary font-medium flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  24/7 Emergency Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Exotic Electrical. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
