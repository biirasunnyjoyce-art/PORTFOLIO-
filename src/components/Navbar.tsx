import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Camera } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useProfilePhoto } from '../context/PhotoContext';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const { photo, openModal: openPhotoModal } = useProfilePhoto();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'business-markets', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Interests', href: '#business-markets' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060B14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-7 nav links) - Zone 3 (1 Primary Action) */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Element with Real Portrait or Monogram */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openPhotoModal}
              title="Click to view or upload unedited photo"
              className="w-10 h-10 rounded-xl overflow-hidden border border-teal-500/50 shadow-md shadow-teal-500/20 hover:scale-105 transition-transform shrink-0 bg-slate-900 flex items-center justify-center group"
            >
              {photo ? (
                <img
                  src={photo}
                  alt={portfolioData.personal.fullName}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="font-display text-sm font-extrabold text-teal-300">
                  {portfolioData.personal.monogram}
                </span>
              )}
            </button>
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex flex-col group whitespace-nowrap shrink-0"
              aria-label="Biira Joyce Home"
            >
              <span className="text-base font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors">
                {portfolioData.personal.fullName}
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:block tracking-wide">
                Data Science &amp; Analytics · UCU
              </span>
            </a>
          </div>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 text-[13px] ${
                    isActive
                      ? 'text-teal-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Photo Button + 1 Primary CTA Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={openPhotoModal}
              title="Add or change your unedited photo"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-teal-300 hover:text-white border border-teal-500/30 hover:border-teal-500/60 rounded-lg transition-colors bg-teal-950/30"
            >
              <Camera className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline">{photo ? 'Photo' : 'Add Photo'}</span>
            </button>
            <button
              onClick={onOpenGuide}
              title="How to customize this portfolio"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-teal-300 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors bg-slate-900/60"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Customize Guide</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-all shadow-md shadow-teal-500/20 hover:shadow-teal-400/30 flex items-center gap-1.5 whitespace-nowrap shrink-0 group active:scale-95"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#070D18]/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl p-6 transition-all animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-slate-200 hover:text-teal-400 py-2 border-b border-slate-800/60 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-500 font-mono">→</span>
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="w-full py-2.5 px-4 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>How to Edit Portfolio Data</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-md"
              >
                Let's Connect Directly
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
