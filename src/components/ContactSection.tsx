import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "0415 054 695",
    href: "tel:0415054695",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@exoticelectrical.com.au",
    href: "mailto:info@exoticelectrical.com.au",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: "Sydney Wide",
    href: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7 Emergency Service",
    href: "#",
  },
];

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const ContactSection: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = { "form-name": "contact" };
    formData.forEach((value, key) => {
      payload[key] = value.toString();
    });

    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      toast.success("Message sent! We'll be in touch shortly.");
      setSubmitted(true);
      form.reset();
    } catch (err) {
      toast.error("Something went wrong. Please call us on 0415 054 695.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30">
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
            Get In Touch
          </span>
          <h2 className="section-title mt-4 text-foreground">
            Contact <span className="text-gradient-cyan">Us</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to power up your project? Get in touch for a free quote or 
            emergency assistance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-glass rounded-2xl p-6 flex items-center gap-4 hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-muted-foreground text-sm">{item.title}</h4>
                  <p className="text-foreground font-medium mt-1">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="card-glass rounded-2xl p-6 glow-cyan"
            >
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h4 className="font-display font-semibold text-foreground">
                  Emergency Service
                </h4>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Need urgent electrical assistance? Our team is available 24/7 for 
                emergency repairs.
              </p>
              <a
                href="tel:0415054695"
                className="btn-primary-glow inline-flex text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="card-glass rounded-2xl p-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Request a Quote
              </h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-sm text-muted-foreground mb-2 block">
                      Full Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="bg-background/50 border-primary/20 focus:border-primary text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="text-sm text-muted-foreground mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+61 xxx xxx xxx"
                      className="bg-background/50 border-primary/20 focus:border-primary text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="text-sm text-muted-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="bg-background/50 border-primary/20 focus:border-primary text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="text-sm text-muted-foreground mb-2 block">
                    Service Required
                  </label>
                  <Input
                    id="contact-service"
                    name="service"
                    type="text"
                    placeholder="e.g., Residential Wiring, LED Installation"
                    className="bg-background/50 border-primary/20 focus:border-primary text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-sm text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-background/50 border-primary/20 focus:border-primary text-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting || submitted}
                  className="w-full btn-primary-glow border-0 mt-2 disabled:opacity-70"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Message Sent
                    </>
                  ) : submitting ? (
                    <>
                      <Send className="w-4 h-4 mr-2 animate-pulse" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
