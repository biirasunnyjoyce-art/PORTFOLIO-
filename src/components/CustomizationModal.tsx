import React, { useEffect } from 'react';
import { X, FileCode, CheckCircle2, ArrowRight, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

interface CustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationModal: React.FC<CustomizationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative bg-[#090F1C] border border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto text-slate-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close Guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 text-xs text-amber-400 font-mono mb-2">
          <Sparkles className="w-4 h-4" />
          <span>PORTFOLIO MAINTENANCE &amp; GROWTH GUIDE</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
          How to Update &amp; Expand Your Portfolio
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 mb-6">
          Everything is organized into simple, well-structured configuration objects so you can keep this site up-to-date throughout your university journey.
        </p>

        {/* Step-by-Step Sections */}
        <div className="space-y-6 text-xs sm:text-sm">
          {/* Step 1: Central Data Store */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
              <FileCode className="w-4 h-4" />
              <span>1. Single Source of Truth: src/data/portfolioData.ts</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              All your text, bio, courses, skills, and links are kept in one single file: <code className="bg-slate-950 px-2 py-0.5 rounded text-teal-300 font-mono">src/data/portfolioData.ts</code>. You never need to touch complex React layout code to update your profile.
            </p>
          </div>

          {/* Photo Management */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>2. Your Authentic Photograph (Unedited)</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Click the photo avatar in the top bar or Hero section to select your original <code className="text-teal-300 font-mono">Screenshot 2026-10-13 171623.png</code>. It renders 100% untouched—preserving your natural expression, lighting, and background without any AI alteration or filters.
            </p>
          </div>

          {/* Step 2: Adding a New Completed Project */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>2. How to Add a Real Project (When Built)</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              When you complete your first real Python analysis (e.g. Sales Analysis with Pandas):
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-slate-400 text-xs">
              <li>Open <code className="text-teal-300 font-mono">src/data/portfolioData.ts</code>.</li>
              <li>Find the <code className="text-teal-300 font-mono">plannedProjects</code> array.</li>
              <li>Change <code className="text-teal-300 font-mono">statusTag: 'Planned Project'</code> to <code className="text-teal-300 font-mono">'Completed Project'</code>.</li>
              <li>Add your real GitHub URL to <code className="text-teal-300 font-mono">futureRepoUrl: "https://github.com/..."</code> and findings.</li>
            </ol>
          </div>

          {/* Step 3: Updating Socials & Email */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>3. Updating Course Units &amp; Social Links</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              In Semester 2 and Year 2, simply edit the <code className="text-teal-300 font-mono">courseUnits</code> array to add your new courses (e.g. Object-Oriented Programming, Linear Algebra, Database Systems). Update your real LinkedIn profile URL in <code className="text-teal-300 font-mono">personal.linkedin</code>.
            </p>
          </div>

          {/* Step 4: Connecting the Contact Form to Live Email */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <ExternalLink className="w-4 h-4" />
              <span>4. Connecting Real Email Delivery</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              The contact form is wired with client validation. To forward submissions directly to your inbox (<code className="text-white font-mono">{`biirasunnyjoyce@gmail.com`}</code>):
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400 text-xs">
              <li>Create a free account at <strong>formspree.io</strong>.</li>
              <li>Create a new form and get your endpoint (e.g. <code className="text-teal-300 font-mono">https://formspree.io/f/xyz...</code>).</li>
              <li>Set the form action in <code className="text-teal-300 font-mono">src/components/ContactSection.tsx</code> to post to that endpoint!</li>
            </ul>
          </div>

          {/* Step 5: Deploying Online */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>5. Free Deployment Options</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              You can deploy this site free in seconds by connecting your GitHub repo to <strong>Vercel</strong>, <strong>Netlify</strong>, or <strong>GitHub Pages</strong> using the standard build command <code className="text-teal-300 font-mono">npm run build</code>.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all"
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
};
