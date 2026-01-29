import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = 'service_nut06lo';
    const TEMPLATE_ID = 'template_bbxmagp';
    const PUBLIC_KEY = 'vXPIDyOV0CwoL4Iq7';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--text-dim)] font-black tracking-[0.4em] uppercase text-xs">
              Get In Touch
            </span>

            <h2 className="text-left mt-4 mb-8">
              Let's <span className="gradient-text">Collaborate</span>
            </h2>

            <p className="text-xl mb-12 text-[var(--text-secondary)] font-medium leading-relaxed">
              I'm currently scouting for professional roles and internships where I can apply my development expertise and data intelligence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Email</span>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[var(--surface-color)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-110 transition-all">
                    <Mail size={18} />
                  </div>
                  <span className="text-white font-bold text-sm break-all">
                    mariawadih1@hotmail.com
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Phone</span>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[var(--surface-color)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--accent-secondary)] group-hover:scale-110 transition-all">
                    <Phone size={18} />
                  </div>
                  <span className="text-white font-bold text-sm">
                    +961 70 079 269
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:col-span-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Location</span>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-[var(--surface-color)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--accent-tertiary)] group-hover:scale-110 transition-all">
                    <MapPin size={18} />
                  </div>
                  <span className="text-white font-bold text-sm">
                    KfarHaoura, North Lebanon
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/maria-wadih"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                className="w-14 h-14 rounded-2xl bg-[var(--surface-color)] border border-[var(--glass-border)] flex items-center justify-center text-white hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all"
              >
                <Github size={24} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/maria-wadih"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.05 }}
                className="w-14 h-14 rounded-2xl bg-[var(--surface-color)] border border-[var(--glass-border)] flex items-center justify-center text-white hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)] transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card relative overflow-hidden"
          >
            <div className="p-8 md:p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-2">
                  Send a Message
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  I'll get back to you within 24 hours
                </p>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* NAME */}
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.15em] text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      disabled={status === 'sending'}
                      placeholder="Maria Wadih"
                      className="w-full bg-[rgba(255,255,255,0.02)]
                        border-2 border-[var(--glass-border)]
                        rounded-xl
                        py-6 px-9 leading-relaxed
                        text-base text-white font-medium
                        focus:border-[var(--accent-primary)]
                        focus:bg-[rgba(255,255,255,0.05)]
                        outline-none transition-all
                        placeholder:text-[var(--text-dim)]
                        disabled:opacity-50"
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="space-y-3">
                    <label className="text-[11px] font-black uppercase tracking-[0.15em] text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      disabled={status === 'sending'}
                      placeholder="email@example.com"
                      className="w-full bg-[rgba(255,255,255,0.02)]
                        border-2 border-[var(--glass-border)]
                        rounded-xl
                        py-6 px-9 leading-relaxed
                        text-base text-white font-medium
                        focus:border-[var(--accent-secondary)]
                        focus:bg-[rgba(255,255,255,0.05)]
                        outline-none transition-all
                        placeholder:text-[var(--text-dim)]
                        disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-[0.15em] text-white">
                    Message
                  </label>
                  <textarea
                    rows="8"
                    name="message"
                    required
                    disabled={status === 'sending'}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-[rgba(255,255,255,0.02)]
                      border-2 border-[var(--glass-border)]
                      rounded-xl
                      py-7 px-9 leading-relaxed
                      text-base text-white font-medium
                      focus:border-[var(--accent-tertiary)]
                      focus:bg-[rgba(255,255,255,0.05)]
                      outline-none transition-all
                      resize-none
                      placeholder:text-[var(--text-dim)]
                      min-h-[220px]
                      disabled:opacity-50"
                  />
                </div>

                {/* SUBMIT */}
                <motion.button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="btn-primary w-full py-4 rounded-xl flex justify-center items-center gap-3 font-bold uppercase tracking-wider"
                  whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                >
                  {status === 'sending' && <Loader2 className="animate-spin" />}
                  {status === 'success' && <CheckCircle2 />}
                  {status === 'error' && <AlertCircle />}
                  {status === 'idle' && <Send />}
                  {status === 'idle' ? 'Send Message' : ''}
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
