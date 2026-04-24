import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Zap } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Projects", to: "/projects" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
              <img src={logo} alt="Exotic Electrical" className="h-14 w-14 object-contain" />
              <div className="hidden sm:block">
                <span className="font-display text-lg font-bold text-foreground tracking-wider">
                  EXOTIC
                </span>
                <span className="font-display text-lg font-bold text-primary tracking-wider ml-1">
                  ELECTRICAL
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`nav-link text-sm font-medium uppercase tracking-wider ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0415054695"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">0415 054 695</span>
            </a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn-primary-glow text-sm">
                <Zap className="w-4 h-4 inline mr-2" />
                Get Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-primary/20"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.to;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className={`block text-lg font-medium transition-colors py-2 border-b border-primary/10 ${
                          isActive ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="flex flex-col gap-3 pt-4">
                  <a
                    href="tel:0415054695"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>0415 054 695</span>
                  </a>
                  <a
                    href="mailto:info@exoticelectrical.com.au"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary-glow text-center mt-2"
                  >
                    <Zap className="w-4 h-4 inline mr-2" />
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
