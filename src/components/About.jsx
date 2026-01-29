import React from 'react';
import { motion } from 'framer-motion';
import { Binary, Cpu, Rocket, Layers } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Cpu size={24} />,
            title: "Backend Development",
            desc: "Strong expertise in building scalable systems with PHP Laravel, C#, and Python. MVC architecture and clean code fundamentals.",
            color: "var(--accent-primary)"
        },
        {
            icon: <Binary size={24} />,
            title: "Data & Analytics",
            desc: "Power BI and Excel specialist. Skilled in diagnostic and predictive analytics for business intelligence.",
            color: "var(--accent-secondary)"
        },
        {
            icon: <Rocket size={24} />,
            title: "Full-Stack Systems",
            desc: "End-to-end web applications from database design to frontend. RBAC, RESTful APIs, and N-tier architecture.",
            color: "var(--accent-tertiary)"
        }
    ];

    return (
        <section id="about" className="section-padding relative overflow-hidden">

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block text-[var(--accent-primary)] font-bold tracking-[0.2em] uppercase text-xs mb-4">
                            About Me
                        </span>
                        <h2 className="text-left mb-12 leading-tight">
                            Building <span className="gradient-text">Scalable</span> <br />
                            Systems.
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] mb-8 font-medium leading-relaxed">
                            I'm Maria Wadih, a senior Computer Science student at AUT specializing in backend development and data analytics. Focused on building efficient, maintainable systems with clean architecture.
                        </p>
                        <p className="text-base text-[var(--text-dim)] mb-10 leading-relaxed">
                            Skilled in Laravel, C#, Python, and Power BI. Seeking roles where I can contribute to meaningful projects and solve complex technical problems.
                        </p>

                        <motion.div
                            className="inline-flex flex-wrap items-center gap-6 p-6 glass-card bg-[var(--surface-color)] border-[var(--accent-primary)] border-opacity-20"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-dim)]">GPA 3.65 / 4.0</span>
                            </div>
                            <div className="h-10 w-[1px] bg-[var(--border-color)] hidden sm:block"></div>
                            <div>
                                <div className="font-bold text-white text-sm">Last Semester</div>
                                <div className="text-xs text-[var(--text-secondary)]">Computer Science • AUT</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <div className="space-y-6 lg:mt-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-8 md:p-10 flex flex-col sm:flex-row gap-6 items-start relative overflow-hidden group"
                            >
                                <div
                                    className="p-4 bg-[var(--bg-color)] rounded-2xl border border-[var(--glass-border)] group-hover:border-[var(--accent-primary)] transition-all duration-300 relative z-10 shrink-0"
                                    style={{ color: item.color }}
                                >
                                    {item.icon}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black mb-3 text-white group-hover:text-[var(--accent-primary)] transition-colors">{item.title}</h3>
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
