import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Monitor,
  Globe,
  BarChart,
  ShieldCheck,
  Heart,
  Code2
} from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { label: 'All', color: '#3b82f6' },
    { label: 'Web Systems', color: '#10b981' },
    { label: 'Software & AI', color: '#ec4899' },
    { label: 'Data & BI', color: '#8b5cf6' }
  ];

  const projects = [
    {
      title: "Instagram Analytics BI",
      internalCategory: "Data & BI",
      category: "Data Intelligence",
      desc: "Power BI dashboard analyzing 30k+ Instagram posts with engagement forecasting and predictive insights.",
      tech: ["Power BI", "Data Modeling", "Predictive Analytics"],
      icon: <BarChart size={20} />,
      color: "#8b5cf6",
      status: "Featured"
    },
    {
      title: "Full-Stack Marketplace",
      internalCategory: "Web Systems",
      category: "Laravel Systems",
      desc: "Scalable e-commerce platform with RBAC, secure REST APIs, and dashboards for admins and sellers.",
      tech: ["Laravel 12", "PHP 8.2", "RBAC", "MySQL"],
      icon: <Globe size={20} />,
      color: "var(--accent-primary)",
      status: "Production"
    },
    {
      title: "AI Chess Interface",
      internalCategory: "Software & AI",
      category: "Python Engineering",
      desc: "2.5D chess application with Minimax and alpha-beta pruning with strong move evaluations.",
      tech: ["Python", "AI Algorithms", "Pygame"],
      icon: <Monitor size={20} />,
      color: "var(--accent-tertiary)",
      status: "Experimental"
    },
    {
      title: "CoffeeOps POS Engine",
      internalCategory: "Software & AI",
      category: "Windows Desktop",
      desc: "C# WinForms POS system with inventory tracking, sales reports, and role-based permissions.",
      tech: ["C#", ".NET", "SQL Server", "WinForms"],
      icon: <ShieldCheck size={20} />,
      color: "#0ea5e9",
      status: "Completed"
    },
    {
      title: "Memory Multi-Page Game",
      internalCategory: "Software & AI",
      category: "Desktop Gaming",
      desc: "Customizable memory game with UI settings, sound integration, and polished UX flows.",
      tech: ["C#", "WinForms", "UI/UX", "Multimedia"],
      icon: <Heart size={20} />,
      color: "var(--accent-secondary)",
      status: "MVP"
    },
    {
      title: "Online Bookstore OOP",
      internalCategory: "Web Systems",
      category: "N-Tier Systems",
      desc: "PHP bookstore system using layered architecture with analytics and low-stock alerts.",
      tech: ["PHP OOP", "MySQL", "N-Tier", "BLL/DAL"],
      icon: <Globe size={20} />,
      color: "#10b981",
      status: "Production"
    },
    {
      title: "Social Media Analytics",
      internalCategory: "Web Systems",
      category: "Database Systems",
      desc: "Full-stack app using PHP + MongoDB with schemas for posts, comments, and relationships.",
      tech: ["PHP", "MongoDB", "NoSQL", "Auth"],
      icon: <Code2 size={20} />,
      color: "#f59e0b",
      status: "Experimental"
    }
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(p => p.internalCategory === activeCategory);

  return (
    <section id="projects" className="section-padding bg-[var(--surface-color)] bg-opacity-30 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-left">
            Selected <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* FILTER TABS ONLY (PILLS) */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;

            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className="inline-flex items-center justify-center font-bold uppercase transition-all duration-300"
                style={{
                  padding: '14px 30px',
                  lineHeight: 1,
                  borderRadius: '9999px',
                  borderWidth: '2px',
                  backgroundColor: isActive ? cat.color : 'transparent',
                  borderColor: cat.color,
                  color: isActive ? '#fff' : cat.color,
                  boxShadow: isActive ? `0 10px 30px ${cat.color}55` : 'none',
                  letterSpacing: '0.18em'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* PROJECT CARDS */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group glass-card p-1 overflow-hidden h-full flex flex-col"
              >
                <div className="p-8 relative flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-10 shrink-0">
                    <div
                      className="p-4 rounded-2xl border border-opacity-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        backgroundColor: `${project.color}10`,
                        borderColor: project.color,
                        color: project.color
                      }}
                    >
                      {project.icon}
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-full text-[9px] font-black uppercase tracking-widest text-[var(--text-dim)]">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: project.color }}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black mb-5 text-white group-hover:text-[var(--accent-primary)] transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-[var(--text-secondary)] text-sm mb-8 leading-relaxed flex-grow">
                    {project.desc}
                  </p>

                  {/* TECH TAGS (KEEP SMALL CHIPS) */}
                  <div className="flex flex-wrap gap-2 mb-10 shrink-0">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#0e0e0e] border border-[var(--glass-border)] rounded-lg text-[10px] font-bold text-[var(--text-dim)] group-hover:text-[var(--text-secondary)] transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-6 border-t border-[rgba(255,255,255,0.05)] shrink-0">
                    <motion.a
                      href="#"
                      className="flex items-center gap-2 text-sm font-black text-white hover:text-[var(--accent-primary)] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={18} /> Code
                    </motion.a>
                    <motion.a
                      href="#"
                      className="flex items-center gap-2 text-sm font-black text-white hover:text-[var(--accent-secondary)] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={18} /> Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
