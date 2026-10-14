import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, Check, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'client_validated'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitStatus('submitting');

    // Simulate reliable client-side processing & validation
    setTimeout(() => {
      setSubmitStatus('client_validated');
    }, 700);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitStatus('idle');
  };

  return (
    <section id="contact" className="py-24 bg-[#080E1A] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-teal-400 tracking-wider">
              SECTION 08 · CONNECT &amp; COLLABORATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Let's Connect
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-slate-300 max-w-md">
            <p>
              I welcome internship inquiries, academic discussions, study collaborations, and feedback on my data science journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Opportunities Welcomed (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B132B] border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Opportunities &amp; Discussions Welcomed
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Open to productive conversations across these areas:
                </p>
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Student internships &amp; analytical apprenticeship opportunities.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Academic study groups &amp; coursework collaboration at UCU.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Discussions on business intelligence &amp; financial markets data.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Constructive advice, mentorship, and book recommendations.</span>
                </li>
              </ul>

              {/* Verified Contact Details with Copy Buttons */}
              <div className="space-y-3 pt-6 border-t border-slate-800">
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-slate-400 block">DIRECT EMAIL</span>
                      <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="text-xs font-semibold text-white hover:text-teal-300 transition-colors truncate block"
                      >
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800 shrink-0"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-teal-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* LinkedIn Placeholder Item */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-slate-400 block">LINKEDIN PROFILE</span>
                      <span className="text-xs font-medium text-slate-300 truncate block">
                        biira-joyce (Placeholder)
                      </span>
                    </div>
                  </div>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800 shrink-0"
                    title="View LinkedIn Profile"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* GitHub Placeholder Item */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-slate-400 block">GITHUB REPOSITORY</span>
                      <span className="text-xs font-medium text-slate-300 truncate block">
                        biira-joyce (Placeholder)
                      </span>
                    </div>
                  </div>
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800 shrink-0"
                    title="View GitHub Profile"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">LOCATION</span>
                    <span className="text-xs font-medium text-slate-300">
                      {portfolioData.personal.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form with Validation (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below. This form features real client-side validation and demonstrates clean interaction handling.
              </p>

              {/* Status Message Display */}
              {submitStatus === 'client_validated' ? (
                <div className="p-6 rounded-xl bg-slate-950 border border-teal-500/40 space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-3 text-teal-300">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Form Validated Successfully</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Thank you, {formData.name}! Your message details have passed validation checks.
                      </p>
                    </div>
                  </div>

                  {/* Honest Credibility Explanation of Email Delivery */}
                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2">
                    <div className="flex items-center gap-2 text-amber-300 font-semibold">
                      <Info className="w-4 h-4" />
                      <span>Production Deployment Note:</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      In this static preview, messages are validated on the client side without sending to a live mail server. To receive real emails to <strong className="text-white">{portfolioData.personal.email}</strong>, you can plug in a free service like <strong className="text-teal-300">Formspree</strong>, <strong className="text-teal-300">EmailJS</strong>, or an Express server route in just a couple minutes (see the customization guide below).
                    </p>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                        Your Full Name <span className="text-teal-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah K."
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors ${
                          errors.name ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address <span className="text-teal-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors ${
                          errors.email ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1">
                      Subject <span className="text-teal-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Opportunity / Academic Discussion"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors ${
                        errors.subject ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                      Message <span className="text-teal-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note, question, or project inquiry here..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors resize-none ${
                        errors.message ? 'border-rose-500/80 focus:ring-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      * All fields required
                    </span>
                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="px-6 py-3 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow-md shadow-teal-500/20 hover:shadow-teal-400/30 flex items-center gap-2 active:scale-95 disabled:opacity-50"
                    >
                      {submitStatus === 'submitting' ? (
                        <span>Validating...</span>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
