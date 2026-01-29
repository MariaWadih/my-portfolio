import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[var(--surface-glass)] backdrop-blur-xl border-b border-[var(--glass-border)]' : 'py-8 bg-transparent'}`}>
            <div className="container flex justify-between items-center">
                <motion.a
                    href="#"
                    className="text-2xl font-black tracking-tighter"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="gradient-text">Maria Wadih</span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-12 items-center">
                    <ul className="flex gap-10 items-center">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a href={link.href} className="text-sm font-semibold text-[var(--text-secondary)] hover:text-white transition-all hover:tracking-wider">
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                    <div className="h-4 w-[1px] bg-[var(--border-color)]"></div>
                    <motion.a
                        href="#contact"
                        className="btn-primary py-3 px-7 rounded-full text-sm font-bold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Let's Talk
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <motion.button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-[var(--surface-color)] border-b border-[var(--glass-border)] overflow-hidden"
                    >
                        <ul className="flex flex-col p-8 gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-2xl font-bold text-[var(--text-secondary)] hover:text-white transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-[var(--border-color)]">
                                <a
                                    href="#contact"
                                    className="btn-primary w-full justify-center py-4 text-center rounded-2xl"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get in Touch
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
