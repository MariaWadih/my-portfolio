import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import coffeeOpsDashboardImage from './assets/coffeeops-dashboard.png';
import eduGateDashboardImage from './assets/edugate-dashboard.png';
import heroDeveloperImage from './assets/hero-developer-soft.png';
import knightLabDashboardImage from './assets/knightlab-dashboard.png';
import luxeDriveDashboardImage from './assets/luxedrive-dashboard.png';
import merchantOsDashboardImage from './assets/merchantos-dashboard.png';
import signalBoardDashboardImage from './assets/signalboard-dashboard.png';
import xpertBotCertificate from './assets/xpertbot-certificate.jpeg';
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Send,
  Server,
  ShieldCheck,
  X,
} from 'lucide-react';

const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Work', 'work'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
];

const services = [
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'NestJS', 'Laravel'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'SQLite'],
  },
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: Phone,
    title: 'Mobile',
    skills: ['Kotlin', 'Android Studio', 'Firebase', '.NET MAUI'],
  },
  {
    icon: GitBranch,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
];

const projects = [
  {
    title: 'EduGate - School Management Platform',
    type: 'Full-stack platform',
    image: eduGateDashboardImage,
    summary: 'A role-based school management platform for admins, teachers, students, and parents with academic operations, communication, and analytics modules.',
    tags: ['React.js', 'Vite', 'Laravel', 'PHP', 'SQLite'],
    details: [
      'Built role-based dashboards for admins, teachers, students, and parents.',
      'Implemented secure login and role-based access control.',
      'Created modules for students, teachers, parents, classes, subjects, academic years, attendance, grades, homework, exams, announcements, materials, and analytics.',
      'Included parent and student views for academic progress, schedules, and school updates.',
    ],
    links: [
      ['Frontend', 'https://github.com/MariaWadih/EduGate-Frontend'],
      ['Backend', 'https://github.com/MariaWadih/EduGate-Backend'],
    ],
  },
  {
    title: 'LuxeDrive - Car Rental Platform',
    type: 'Mobile and backend platform',
    featured: true,
    image: luxeDriveDashboardImage,
    summary: 'A full-stack luxury car rental and reservation system with a native Android client, PHP backend API, MySQL automation, and an administrative web dashboard.',
    tags: ['Kotlin', 'Android', 'PHP', 'MySQL', 'Firebase'],
    details: [
      'Built a native Android app using Kotlin, MVVM architecture, Room Database, and Retrofit for browsing vehicles, managing bookings, and tracking reservation status.',
      'Developed a custom PHP REST API with separated business logic and data access layers for authentication, fleet availability, and transactional booking workflows.',
      'Engineered reservation states including pending, ongoing, completed, cancelled, and extension requests.',
      'Implemented MySQL triggers for automated pricing adjustments and date reversions during rental extension flows.',
      'Created an admin dashboard for analytics, vehicle inventory CRUD, extension approvals, and maintenance tracking.',
      'Integrated Firebase Cloud Messaging for real-time push notifications.',
    ],
  },
  {
    title: 'SignalBoard BI Suite',
    type: 'Data intelligence',
    image: signalBoardDashboardImage,
    summary: 'A Power BI analytics system for 30k+ social posts with forecasting, audience signals, and executive summaries.',
    tags: ['Power BI', 'Data Modeling', 'Forecasting'],
  },
  {
    title: 'MerchantOS Marketplace',
    type: 'Web systems',
    image: merchantOsDashboardImage,
    summary: 'A scalable e-commerce platform with seller dashboards, secure REST APIs, RBAC, and operational reporting.',
    tags: ['Laravel', 'MySQL', 'RBAC'],
    links: [
      ['GitHub', 'https://github.com/MariaWadih/laravel_backend_intern'],
    ],
  },
  {
    title: 'KnightLab Chess Engine',
    type: 'Software and AI',
    image: knightLabDashboardImage,
    summary: 'A polished chess interface using Minimax, alpha-beta pruning, and clear interaction feedback for move evaluation.',
    tags: ['Python', 'AI', 'Pygame'],
  },
  {
    title: 'CoffeeOps POS',
    type: 'Desktop software',
    image: coffeeOpsDashboardImage,
    summary: 'A C# point-of-sale system for inventory, sales reports, permissions, and daily retail operations.',
    tags: ['C#', '.NET', 'SQL Server'],
  },
];

const experiences = [
  {
    year: '2026',
    title: 'XpertBot Academy',
    text: 'Laravel Backend Development Internship focused on building backend features using Laravel, RESTful APIs, Postman, and Git/GitHub.',
    certificateSubtitle: 'Backend Development',
    certificateHref: xpertBotCertificate,
  },
  {
    year: '2026',
    title: 'Eurisko Academy',
    text: 'Backend engineering academy work focused on modern JavaScript server stacks, REST APIs, MongoDB data modeling, Express services, and NestJS structure.',
    certificateSubtitle: 'Backend Engineering',
  },
  {
    year: '2026',
    title: 'Bachelor of Science in Computer Science',
    text: 'Bachelor of Science in Computer Science from the American University of Technology.',
    certificateSubtitle: 'AUT',
  },

];

const testimonials = [
  {
    quote: 'Maria brings a rare balance of structured technical thinking and refined presentation. Her systems are clear, usable, and well reasoned.',
    name: 'Academic Project Review',
  },
  {
    quote: 'She turns ambiguous requirements into organized product flows, then follows through with careful implementation details.',
    name: 'Team Collaboration Feedback',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardHover = {
  y: -8,
  scale: 1.012,
  transition: { type: 'spring', stiffness: 300, damping: 22 },
};

function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div className="section-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function Navbar({ route, navigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header className={`site-header${scrolled ? ' scrolled' : ''}`} initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <a href="#/" className="brand" aria-label="Maria Wadih home" onClick={(event) => navigate(event, '/')}>
        <span>MW</span>
        <strong>Maria Wadih</strong>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, id]) => (
          <a key={id} href={`#/${id}`} className={route === `/${id}` ? 'active' : ''} onClick={(event) => navigate(event, `/${id}`)}>{label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="icon-button mobile-menu-button" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={19} />
        </button>
      </div>
      {createPortal(
        <AnimatePresence>
          {open && (
          <motion.div className="mobile-nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="icon-button close-button" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={20} />
            </button>
            {navItems.map(([label, id]) => (
              <a key={id} href={`#/${id}`} onClick={(event) => {
                setOpen(false);
                navigate(event, `/${id}`);
              }}>{label}</a>
            ))}
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.header>
  );
}

function Hero({ navigate }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 56]);

  return (
    <section id="home" ref={heroRef} className="hero">
      <div className="container">
        <div className="hero-card">
          <motion.div className="hero-bg" style={{ y }} aria-hidden="true" />
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.span className="eyebrow" variants={fadeUp}>Maria Wadih</motion.span>
            <motion.h1 variants={fadeUp}>
              Backend Developer
              <span>Computer</span>
              <span>Science Graduate</span>
            </motion.h1>
            <motion.p variants={fadeUp}>
              I build secure APIs, database-backed systems, dashboards, and full-stack platforms with clean architecture and polished user experiences.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <MagneticButton href="#/contact" path="/contact" className="button primary" navigate={navigate}>Contact me <ArrowRight size={16} /></MagneticButton>
              <MagneticButton href="#/work" path="/work" className="button secondary" navigate={navigate}>See my work <ArrowRight size={16} /></MagneticButton>
            </motion.div>
          </motion.div>
          <motion.aside className="hero-panel" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.25 }}>
            <div className="hero-orbit" aria-hidden="true" />
            <img className="hero-image" src={heroDeveloperImage} alt="Developer working on a laptop in a purple-lit workspace" />
            <div className="mini-widget">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function MagneticButton({ href, path, className, children, navigate }) {
  return (
    <motion.a
      href={href}
      className={className}
      onClick={navigate ? (event) => navigate(event, path) : undefined}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 380, damping: 24 }}
    >
      {children}
    </motion.a>
  );
}

function About() {
  const reduceMotion = useReducedMotion();
  const aboutFade = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0 } } }
    : fadeUp;
  const aboutParagraphs = [
    "I'm Maria Wadih, a Computer Science graduate from the American University of Technology and software developer focused on building scalable, user-centered digital products.",
    "My work combines clean code, backend systems, responsive interfaces, dashboards, and practical solutions built with reliability and long-term growth in mind.",
  ];
  const aboutAchievements = [
    [GraduationCap, '3.67/4.0', 'University GPA'],
    [Award, '18.1/20', 'French Baccalaureate'],
    [BookOpen, "Dean's List", 'Academic performance'],
    [Server, 'Backend', 'API and database focus'],
    [Brain, 'Fast Learner', 'Structured problem solving'],
  ];

  return (
    <section id="about" className="about-page">
      <div className="about-orb about-orb-one" aria-hidden="true" />
      <div className="about-orb about-orb-two" aria-hidden="true" />
      <div className="about-ring" aria-hidden="true" />
      <div className="container">
        <motion.div className="about-content-grid premium-about-grid" variants={staggerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.article className="about-story-card" variants={aboutFade} whileHover={reduceMotion ? undefined : { y: -4 }}>
            <span className="eyebrow">About</span>
            <h2>Clean systems, practical thinking, and steady execution.</h2>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 42)}>{paragraph}</p>
            ))}
          </motion.article>
          <aside className="about-proof-column" aria-label="Achievements, code mindset, and personal quote">
            <motion.div className="about-achievement-grid premium-achievements" variants={staggerReveal}>
              {aboutAchievements.map(([Icon, value, label]) => (
                <motion.article className="about-achievement-card" variants={aboutFade} whileHover={reduceMotion ? undefined : { y: -4 }} key={label}>
                  <Icon size={19} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </motion.article>
              ))}
            </motion.div>
            <motion.div className="about-proof-grid" variants={staggerReveal}>
              <motion.div className="mini-code-card" variants={aboutFade} whileHover={reduceMotion ? undefined : { y: -4 }}>
                <div className="code-card-top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre className="typewriter-code" aria-label="Mindset code snippet">
                  {[
                    'const mindset = {',
                    '  learn: true,',
                    '  improve: true,',
                    '  build: "meaningful",',
                    '  focus: "clean code"',
                    '};',
                  ].map((line, index) => (
                    <code className="typewriter-line" style={{ '--chars': line.length, '--delay': `${index * 0.72}s` }} key={line}>{line}</code>
                  ))}
                </pre>
              </motion.div>
              <motion.blockquote className="about-quote-card" variants={aboutFade} whileHover={reduceMotion ? undefined : { y: -4 }}>
                "I see every project as an opportunity to learn, improve, and build something meaningful."
              </motion.blockquote>
            </motion.div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section tinted">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Backend-centered stack with full product awareness." text="Grouped tools I use to build APIs, data models, dashboards, and clean application interfaces." />
        <motion.div className="service-grid" variants={staggerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          {services.map(({ icon: Icon, title, skills }, index) => (
            <motion.article className="service-card skill-card" key={title} variants={fadeUp} whileHover={cardHover} transition={{ delay: index * 0.04 }}>
              <Icon size={24} />
              <h3>{title}</h3>
              <div className="skill-badges">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Project worlds built around clarity and execution." />
        <motion.div className="project-grid" variants={staggerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          {projects.map((project, index) => (
            <motion.article className={`project-card${project.featured ? ' featured' : ''}`} key={project.title} variants={fadeUp} whileHover={cardHover} transition={{ delay: index * 0.04 }}>
              <div className="project-media" aria-hidden="true">
                {project.image ? (
                  <img src={project.image} alt="" />
                ) : (
                  <>
                    <div className="project-window">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="project-visual-grid">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </>
                )}
              </div>
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              {project.details && (
                <ul className="project-details">
                  {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              )}
              <div className="tag-row">
                {project.tags.map((tag) => <small key={tag}>{tag}</small>)}
              </div>
              {project.links && (
                <div className="project-link-row">
                  {project.links.map(([label, href]) => (
                    <a key={href} href={href} target="_blank" rel="noreferrer">
                      <Github size={16} />
                      {label}
                    </a>
                  ))}
                </div>
              )}
              <div className="card-overlay">
                <ArrowRight size={22} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section tinted">
      <div className="container experience-layout">
        <SectionHeading eyebrow="Experience" title="A clear progression from foundations to working systems." />
        <motion.div className="timeline" variants={staggerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          {experiences.map(({ year, title, text, certificateSubtitle, certificateHref }) => (
            <motion.article key={`${year}-${title}`} className="timeline-item" variants={fadeUp}>
              <time>{year}</time>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-copy">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <a
                className={`experience-certificate-card${certificateHref ? '' : ' disabled'}`}
                href={certificateHref || '#/experience'}
                target={certificateHref ? '_blank' : undefined}
                rel={certificateHref ? 'noreferrer' : undefined}
                aria-disabled={certificateHref ? undefined : 'true'}
                onClick={certificateHref ? undefined : (event) => event.preventDefault()}
              >
                <span className="certificate-icon"><ShieldCheck size={18} /></span>
                <span className="certificate-meta">
                  <small>Certificate</small>
                  <strong>{title}</strong>
                  <em>{certificateSubtitle}</em>
                </span>
                <span className="certificate-action">View Certificate <ArrowRight size={14} /></span>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section compact">
      <div className="container testimonial-grid">
        {testimonials.map((item, index) => (
          <motion.blockquote key={item.name} className="testimonial" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={cardHover} transition={{ delay: index * 0.08 }}>
            <p>"{item.quote}"</p>
            <footer>{item.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState('idle');

  const sendEmail = (event) => {
    event.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm('service_nut06lo', 'template_bbxmagp', form.current, 'vXPIDyOV0CwoL4Iq7')
      .then(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <SectionHeading eyebrow="Contact" title="Start a conversation." text="Share a message and I will get back to you as soon as I can." />
        <motion.form ref={form} className="contact-form" onSubmit={sendEmail} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label>
            Name
            <input name="user_name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="user_email" type="email" placeholder="email@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="6" placeholder="Tell me about the opportunity..." required />
          </label>
          <button className="button primary form-button" type="submit" disabled={status === 'sending'}>
            {status === 'success' ? <CheckCircle2 size={18} /> : <Send size={18} />}
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message sent' : 'Send message'}
          </button>
          <a className="email-link" href="mailto:mariawadih1@hotmail.com"><Mail size={16} /> mariawadih1@hotmail.com</a>
        </motion.form>
      </div>
    </section>
  );
}

function PageShell({ eyebrow, title, text, children }) {
  return (
    <motion.section
      className="page-shell"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
    >
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} text={text} />
        {children}
      </div>
    </motion.section>
  );
}

function PageView({ route }) {
  if (route === '/about') {
    return (
      <About />
    );
  }

  if (route === '/skills') {
    return (
      <PageShell eyebrow="Skills" title="Technical stack for backend products and polished interfaces.">
        <Skills />
      </PageShell>
    );
  }

  if (route === '/work') {
    return (
      <PageShell eyebrow="Work" title="Selected projects with real product structure and technical depth.">
        <Projects />
      </PageShell>
    );
  }

  if (route === '/experience') {
    return (
      <PageShell eyebrow="Experience" title="Academy training and applied development experience.">
        <Experience />
      </PageShell>
    );
  }

  if (route === '/contact') {
    return (
      <PageShell eyebrow="Contact" title="Start a conversation.">
        <Contact />
      </PageShell>
    );
  }

  return null;
}

function Home({ navigate }) {
  const homeHighlights = [
    [Server, 'Backend APIs', 'Secure REST services, authentication, and clean business logic.'],
    [Database, 'Data systems', 'Relational and document databases designed for practical workflows.'],
    [Layers3, 'Product dashboards', 'Readable interfaces for operations, analytics, and admin tools.'],
  ];
  const featuredProject = projects.find((project) => project.featured) || projects[0];

  return (
    <>
      <Hero navigate={navigate} />
      <section className="home-intro">
        <div className="container home-intro-grid">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="eyebrow">Portfolio</span>
            <h2>Focused pages for the work, skills, and experience behind the interface.</h2>
          </motion.div>
          <motion.div className="home-link-grid" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {navItems.map(([label, id]) => (
              <a key={id} href={`#/${id}`} onClick={(event) => navigate(event, `/${id}`)}>
                {label}
                <ArrowRight size={18} />
              </a>
            ))}
          </motion.div>
        </div>
        <div className="container home-showcase">
          <motion.div className="home-highlight-grid" variants={staggerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {homeHighlights.map(([Icon, title, text]) => (
              <motion.article className="home-highlight-card" variants={fadeUp} whileHover={cardHover} key={title}>
                <Icon size={20} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </motion.div>
          <motion.article className="home-featured-work" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            <div className="home-featured-copy">
              <span className="eyebrow">Featured project</span>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.summary}</p>
              <div className="tag-row home-featured-tags">
                {featuredProject.tags.slice(0, 5).map((tag) => <small key={tag}>{tag}</small>)}
              </div>
              <MagneticButton href="#/work" path="/work" className="button secondary" navigate={navigate}>View case studies <ArrowRight size={16} /></MagneticButton>
            </div>
            <div className="home-featured-media" aria-hidden="true">
              <img src={featuredProject.image} alt="" />
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <motion.footer className="footer" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
      <div className="container footer-grid">
        <div>
          <strong>Maria Wadih</strong>
          <p>Full-stack development, data intelligence, and refined product interfaces.</p>
        </div>
        <div className="footer-links">
          <a href="tel:+96170079269"><Phone size={17} /> Phone</a>
          <a href="https://github.com/MariaWadih" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          <a href="https://linkedin.com/in/maria-wadih" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
        </div>
      </div>
    </motion.footer>
  );
}

export default function App() {
  const [route, setRoute] = useState(() => {
    const hashRoute = window.location.hash.replace('#', '');
    return hashRoute.startsWith('/') ? hashRoute : '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hashRoute = window.location.hash.replace('#', '');
      setRoute(hashRoute.startsWith('/') ? hashRoute : '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (event, path) => {
    if (event) {
      event.preventDefault();
    }
    if (window.location.hash !== `#${path}`) {
      window.location.hash = path;
    }
    setRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <CustomCursor />
      <Navbar route={route} navigate={navigate} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            {route === '/' ? <Home navigate={navigate} /> : <PageView route={route} />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <motion.div className="custom-cursor" animate={position} transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.3 }} aria-hidden="true" />;
}
