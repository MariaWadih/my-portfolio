import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Zap, BarChart2 } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Zap size={20} />,
            color: "var(--accent-primary)",
            skills: ["Python", "C#", "JavaScript", "PHP", "C"]
        },
        {
            title: "Backend & Web",
            icon: <Layout size={20} />,
            color: "var(--accent-secondary)",
            skills: ["Laravel", "React", "Bootstrap", "HTML5", "CSS3"]
        },
        {
            title: "Databases & Tools",
            icon: <Database size={20} />,
            color: "var(--accent-tertiary)",
            skills: ["MySQL", "MongoDB", "Git", "Postman", "API Design"]
        },
        {
            title: "Data & Analytics",
            icon: <BarChart2 size={20} />,
            color: "#10b981",
            skills: ["Power BI", "Excel", "Data Visualization", "Analytics", "Reporting"]
        }
    ];

    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-[var(--text-dim)] font-black tracking-[0.4em] uppercase text-xs">TECHNICAL SKILLS</span>
                    <h2 className="mt-4 text-center"><span className="gradient-text">Skills</span> & Technologies</h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card group p-1 relative flex flex-col h-full overflow-hidden border border-[var(--glass-border)]"
                        >

                            <div className="p-8 relative z-10 flex flex-col h-full">
                                <div
                                    className="w-12 h-12 rounded-2xl mb-8 flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: `${cat.color}10`,
                                        borderColor: `${cat.color}30`,
                                        color: cat.color
                                    }}
                                >
                                    {cat.icon}
                                </div>

                                <h3 className="text-2xl font-black mb-6 text-white group-hover:translate-x-2 transition-transform duration-300">
                                    {cat.title}
                                </h3>

                                <ul className="space-y-4 flex-grow">
                                    {cat.skills.map((skill, sIdx) => (
                                        <motion.li
                                            key={sIdx}
                                            className="flex items-center gap-3 text-[var(--text-secondary)] group-hover:text-white transition-colors duration-300"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.2 + (sIdx * 0.05) }}
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }}></div>
                                            <span className="text-sm font-bold tracking-tight">{skill}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div
                                    className="mt-8 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                    style={{ backgroundColor: cat.color }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
