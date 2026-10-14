import React from 'react';
import { Mail, Linkedin, Github, ArrowUp, Sparkles, Camera } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useProfilePhoto } from '../context/PhotoContext';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const { photo, openModal: openPhotoModal } = useProfilePhoto();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050912] border-t border-slate-900 py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-slate-800/80">
          {/* Brand & Persona Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={openPhotoModal}
                title="View or update your unedited photo"
                className="w-8 h-8 rounded-lg overflow-hidden border border-teal-500/40 shrink-0 bg-slate-900 flex items-center justify-center hover:scale-105 transition-transform"
              >
                {photo ? (
                  <img
                    src={photo}
                    alt={portfolioData.personal.fullName}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="text-xs font-bold text-teal-400 font-display">
                    {portfolioData.personal.monogram}
                  </span>
                )}
              </button>
              <span className="text-base font-bold text-white font-display">
                {portfolioData.personal.fullName}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {portfolioData.personal.subHeadline}
            </p>
            <p className="text-xs text-teal-400/90 font-medium italic pt-1">
              "Learning continuously. Analysing thoughtfully. Building towards impact."
            </p>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 block mb-3">
              Section Index
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-teal-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-teal-400 transition-colors">Planned Projects</a>
              <a href="#journey" className="hover:text-teal-400 transition-colors">Learning Journey</a>
              <a href="#business-markets" className="hover:text-teal-400 transition-colors">Data &amp; Business</a>
              <a href="#education" className="hover:text-teal-400 transition-colors">Education (UCU)</a>
              <a href="#goals" className="hover:text-teal-400 transition-colors">Goals</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors">Connect</a>
            </div>
          </div>

          {/* Connect & Developer Guide Trigger (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 block mb-3">
              Channels &amp; Tools
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenGuide}
              className="mt-3 flex items-center gap-1.5 px-3 py-1.5 text-xs text-amber-300 hover:text-amber-200 bg-amber-950/20 hover:bg-amber-950/40 border border-amber-800/40 rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>How to Update This Site</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Dynamic Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} Biira Joyce. Built with care for academic &amp; career growth.
          </div>

          <div className="flex items-center gap-4">
            <span>Uganda Christian University · Namagunga Alumna</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
