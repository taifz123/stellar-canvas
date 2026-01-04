import React from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const ReviewSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-glass rounded-3xl p-8 md:p-12 text-center glow-cyan max-w-3xl mx-auto"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-primary fill-primary" />
            ))}
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Love Our Work?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Your feedback helps us serve you better. Leave us a review on Google and 
            let others know about your experience with Exotic Electrical.
          </p>
          
          <motion.a
            href="https://share.google/wpO0NZQXfxAt5Q3NP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-glow inline-flex items-center gap-2 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Leave a Google Review
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewSection;
