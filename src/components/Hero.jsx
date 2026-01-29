import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Briefcase, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
            {/* Background Blobs - Keep these as they are non-obstructive visuals */}
            <div className="bg-blobs pointer-events-none">
                <motion.div
                    className="blob blob-1"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="blob blob-2"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container relative z-10 flex flex-col items-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12 md:mb-14"
                >
                    <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--surface-color)] border border-[var(--glass-border)] text-xs md:text-sm font-bold text-[var(--accent-primary)] backdrop-blur-md hover:border-[var(--accent-primary)] hover:border-opacity-50 transition-all duration-300">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        Available for internship & roles
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="text-center mb-6 md:mb-10"
                >
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1] md:leading-[0.95] tracking-tighter mb-2">
                        <span className="block text-white">MARIA</span>
                        <span className="block gradient-text">WADIH</span>
                    </h1>
                </motion.div>

                <motion.p
                    className="text-base md:text-lg lg:text-xl text-[var(--text-secondary)] mb-10 md:mb-14 max-w-2xl text-center font-medium leading-relaxed px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    Senior CS student building <span className="text-[var(--text-primary)] font-bold">scalable systems</span> and <span className="text-[var(--text-primary)] font-bold">data solutions</span>.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto justify-center px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                >
                    <motion.a
                        href="#projects"
                        className="btn-primary py-4 px-8 md:px-10 rounded-xl text-sm md:text-base font-bold flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
                        whileHover={{ scale: 1.05, boxShadow: "0 12px 35px rgba(59, 130, 246, 0.35)" }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Briefcase size={20} />
                        View Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn-secondary py-4 px-8 md:px-10 rounded-xl text-sm md:text-base font-bold flex items-center justify-center gap-2 whitespace-nowrap hover:shadow-lg"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Get in Touch
                        <ArrowRight size={20} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
