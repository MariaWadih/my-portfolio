import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Server, Terminal, Zap, Layers } from 'lucide-react';

const Internship = () => {
    return (
        <section id="experience" className="section-padding bg-[var(--surface-color)] bg-opacity-20 relative overflow-hidden">
            {/* Subtle ambient gradient (simplified for clarity) */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 10% 10%, rgba(59,130,246,0.03), transparent), radial-gradient(circle at 90% 90%, rgba(139,92,246,0.03), transparent)' }}
            />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-[var(--text-dim)] font-black tracking-[0.4em] uppercase text-xs">Work Experience</span>
                    <h2 className="mt-4 text-center">Professional <span className="gradient-text">Experience</span></h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="glass-card overflow-hidden border border-[var(--glass-border)] relative">

                        <div className="p-8 md:p-12 lg:p-16 relative z-10">
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-8">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--accent-primary)] bg-opacity-10 border border-[var(--accent-primary)] border-opacity-20 text-[var(--accent-primary)] text-xs font-bold uppercase tracking-widest">
                                        Internship
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">XpertBot</h3>
                                    <div className="flex flex-wrap items-center gap-6 text-[var(--text-secondary)]">
                                        <div className="flex items-center gap-2">
                                            <Server size={20} className="text-[var(--accent-primary)]" />
                                            <span className="font-bold text-lg">Laravel Developer Intern</span>
                                        </div>
                                        <div className="h-4 w-[1px] bg-[var(--border-color)] hidden md:block"></div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={20} className="text-[var(--accent-secondary)]" />
                                            <span className="font-bold text-lg">October – March</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-[var(--bg-color)] rounded-2xl border border-[var(--glass-border)] flex flex-col items-center justify-center text-center min-w-[140px] relative z-20 shrink-0" aria-hidden="true">
                                    <span className="text-2xl font-black gradient-text">6 months</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] flex items-center gap-3">
                                            <Zap size={16} className="text-yellow-400" /> Core Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2 md:gap-3">
                                            {['Laravel', 'PHP', 'MySQL', 'Eloquent ORM', 'Git', 'Postman'].map((tech, idx) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.04 }}
                                                    className="px-3 py-1 bg-[#0e0e0e] border border-[var(--glass-border)] rounded-lg text-[10px] font-bold text-[var(--text-secondary)] hover:border-[var(--accent-primary)] transition-colors"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 bg-gradient-to-br from-[#0c0c0c] to-[#121212] rounded-2xl border border-[rgba(255,255,255,0.03)] relative z-20">
                                        <p className="text-[var(--text-secondary)] italic text-sm leading-relaxed">
                                            "Developed backend features using MVC architecture and clean coding standards, while optimizing relational database performance."
                                        </p>
                                    </div>
                                        <div className="mt-6">
                                            <motion.a
                                                href="#projects"
                                                aria-label="View related projects"
                                                className="btn-secondary inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold"
                                                whileHover={{ y: -3 }}
                                            >
                                                View projects
                                            </motion.a>
                                        </div>
                                    </div>

                                <div className="space-y-6 relative z-20">
                                    <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] flex items-center gap-3">
                                        <Terminal size={16} className="text-[var(--accent-primary)]" /> Key Impact
                                    </h4>
                                    <ul className="space-y-5">
                                        {[
                                            "Built backend features using Laravel MVC architecture with clean code standards.",
                                            "Designed and optimized relational database schemas using Eloquent ORM.",
                                            "Developed and tested RESTful APIs with Postman and Git version control.",
                                            "Optimized database queries to improve system performance and reliability."
                                        ].map((point, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex gap-4 group"
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                            >
                                                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-primary)] bg-opacity-10 border border-[var(--accent-primary)] border-opacity-30 flex items-center justify-center group-hover:bg-opacity-100 group-hover:scale-110 transition-all duration-300">
                                                    <CheckCircle2 size={12} className="text-[var(--accent-primary)] group-hover:text-white transition-colors" />
                                                </div>
                                                <p className="text-[var(--text-secondary)] text-sm font-medium leading-relaxed group-hover:text-white transition-colors">
                                                    {point}
                                                </p>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Internship;
