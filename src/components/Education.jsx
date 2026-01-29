import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="section-padding relative overflow-hidden">
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-[var(--text-dim)] font-black tracking-[0.4em] uppercase text-xs">Academic Foundation</span>
                    <h2 className="mt-4 text-center">Scholastic <span className="gradient-text">Journey</span></h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto glass-card flex flex-col lg:flex-row overflow-hidden border border-[var(--glass-border)]"
                >
                    <div className="p-8 md:p-12 lg:p-16 lg:w-2/3 space-y-8">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            <div className="p-4 bg-[var(--accent-primary)] bg-opacity-10 rounded-2xl text-[var(--accent-primary)] border border-[var(--accent-primary)] border-opacity-20 shrink-0">
                                <GraduationCap size={36} strokeWidth={2} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">Senior Computer Science Student</h3>
                                <div className="flex items-center gap-2 text-[var(--accent-primary)] font-black text-sm uppercase tracking-widest">
                                    <BookOpen size={16} />
                                    American University of Technology (AUT)
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-[var(--text-secondary)] font-medium leading-relaxed">
                                Focused on the intersection of Data Analysis and Systems Engineering. Core coursework includes:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Business Intelligence (Power BI)",
                                    "Algorithms & Data Structures",
                                    "Database Systems",
                                    "Modern Web Development",
                                    "Excel Analytics",
                                    "Software Architecture"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-[var(--text-dim)] font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-6 border-t border-[var(--glass-border)]">
                            {[
                                { label: "GPA", val: "3.65 / 4" },
                                { label: "Major", val: "CompSci" },
                                { label: "Status", val: "Last Semester" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-dim)]">{stat.label}</div>
                                    <div className="text-xl font-black text-white">{stat.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-10 lg:w-1/3 bg-gradient-to-br from-[rgba(59,130,246,0.05)] to-[rgba(139,92,246,0.05)] border-t lg:border-t-0 lg:border-l border-[var(--glass-border)] flex flex-col justify-center items-center text-center relative overflow-hidden">
                        {/* Background Decorative Icon */}
                        <div className="absolute -top-10 -right-10 opacity-[0.05] pointer-events-none -z-10">
                            <Star size={180} strokeWidth={1} />
                        </div>

                        <div className="space-y-8 relative z-10">
                            <div className="space-y-3">
                                <div className="text-[10px] font-black text-[var(--text-dim)] uppercase tracking-[0.3em]">Timeline Sequence</div>
                                <div className="text-5xl font-black text-white tracking-tighter">FEB 2023</div>
                                <div className="text-xs font-black uppercase tracking-widest text-[var(--text-dim)] opacity-50">— TO —</div>
                                <div className="text-3xl font-black gradient-text uppercase tracking-tighter">PRESENT</div>
                            </div>

                            <motion.div
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white bg-opacity-5 rounded-xl border border-[var(--accent-primary)] border-opacity-30 text-[var(--accent-primary)] text-[10px] font-black uppercase tracking-[0.2em]"
                                whileHover={{ scale: 1.05 }}
                            >
                                Senior Year Portfolio
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Grid Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-20 select-none">
                <div className="grid grid-cols-12 h-full w-full">
                    {Array.from({ length: 96 }).map((_, i) => (
                        <div key={i} className="border-[0.5px] border-[rgba(255,255,255,0.1)]"></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
