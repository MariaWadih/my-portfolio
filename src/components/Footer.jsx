import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 md:py-14 border-t border-[var(--glass-border)] bg-[var(--surface-color)] relative overflow-hidden">
      <div className="container relative z-10">
        {/* Top row: brand + short line + socials */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
          </div>
        </div>

        {/* Bottom row: tiny copyright + back to top */}
        <div className="mt-10 pt-6 border-t border-[var(--glass-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[11px] font-semibold text-[var(--text-dim)] text-center md:text-left">
            © {new Date().getFullYear()} Maria Wadih. All rights reserved.
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-[var(--bg-color)] border border-[var(--glass-border)] rounded-xl text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-primary)] transition-all group"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Subtle radial glow behind content */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[var(--accent-primary)] opacity-[0.08] blur-[120px] pointer-events-none -z-10"></div>
    </footer>
  );
};

export default Footer;
