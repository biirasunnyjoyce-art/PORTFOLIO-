import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, AlertCircle, FileText, Lightbulb, Users, ArrowUpRight } from 'lucide-react';
import { FeaturedProject, PlannedProject } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project?: FeaturedProject;
  plannedProject?: PlannedProject;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  plannedProject,
  onClose,
}) => {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project && !plannedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#090F1C] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl shadow-black/80 z-10 my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Featured Project Case Study Details */}
        {project && (
          <div className="space-y-6">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs text-teal-400 font-mono mb-2">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-400">{project.achievement}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {project.institution} · Role: <span className="text-teal-300 font-semibold">{project.role}</span>
              </p>
            </div>

            {/* Credibility statement */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <span className="font-semibold text-teal-300">Context &amp; Transparency:</span> This was an interdisciplinary school science fair project focusing on clean technology and team coordination. It demonstrates early project management, cross-functional teamwork, and leadership prior to beginning university data science coursework.
            </div>

            {/* Core Narrative Sections */}
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-1">
                  1. The Environmental Challenge
                </h4>
                <p>{project.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                  2. The Core Concept &amp; Dual Conversion Architecture
                </h4>
                <p>{project.concept}</p>

                {/* Dual Mechanism Cards in Modal */}
                {project.mechanisms && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30">
                      <span className="text-[10px] font-mono text-amber-400 block mb-1">
                        SOLAR CHANNEL (LIGHT → ELECTRICITY)
                      </span>
                      <h5 className="text-xs font-bold text-white mb-1">
                        {project.mechanisms.solar.title}
                      </h5>
                      <p className="text-xs text-slate-300">
                        {project.mechanisms.solar.description}
                      </p>
                      <span className="text-[10px] font-mono text-amber-300/80 mt-2 block">
                        Physics Principle: {project.mechanisms.solar.principle}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-teal-500/30">
                      <span className="text-[10px] font-mono text-teal-400 block mb-1">
                        THERMAL CHANNEL (HEAT → ELECTRICITY)
                      </span>
                      <h5 className="text-xs font-bold text-white mb-1">
                        {project.mechanisms.thermocouple.title}
                      </h5>
                      <p className="text-xs text-slate-300">
                        {project.mechanisms.thermocouple.description}
                      </p>
                      <span className="text-[10px] font-mono text-teal-300/80 mt-2 block">
                        Physics Principle: {project.mechanisms.thermocouple.principle}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                  3. My Role as Project Manager
                </h4>
                <p>{project.myRole}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                  4. The Outcome &amp; Recognition
                </h4>
                <p>{project.outcome}</p>
              </div>
            </div>

            {/* Learnings & Reflections */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Key Professional Learnings
              </h4>
              <ul className="space-y-2">
                {project.learnings.map((learning, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Future customizable field note */}
            <div className="p-4 rounded-xl bg-slate-950 border border-dashed border-slate-800 text-xs text-slate-400">
              <p className="italic">
                Note for Biira Joyce: You can add further scientific methodology parameters, team member acknowledgements, or photo links inside <code className="text-teal-300 font-mono">src/data/portfolioData.ts</code> at any time.
              </p>
            </div>
          </div>
        )}

        {/* Planned Project Blueprint Details */}
        {plannedProject && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-teal-400 font-mono mb-2">
                <span className="text-amber-400">{plannedProject.statusTag}</span>
                <span aria-hidden="true">·</span>
                <span>Curriculum Learning Plan</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {plannedProject.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Planned technical project being developed as practical coursework skills evolve.
              </p>
            </div>

            {/* Core Research Question */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-[11px] font-mono text-teal-400 block mb-1">
                CENTRAL RESEARCH QUESTION
              </span>
              <p className="text-sm font-semibold text-white">
                "{plannedProject.researchQuestion}"
              </p>
            </div>

            {/* Educational disclaimer if applicable */}
            {plannedProject.educationalDisclaimer && (
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200/90 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{plannedProject.educationalDisclaimer}</span>
              </div>
            )}

            {/* Planned Learning Activities */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Planned Learning Activities
              </h4>
              <ul className="space-y-2.5">
                {plannedProject.learningActivities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-teal-400 flex items-center justify-center text-[10px] font-mono shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Potential Skills to Develop */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Potential Skills &amp; Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {plannedProject.potentialSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-slate-300 font-medium py-1 px-2.5 rounded-lg bg-slate-900 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Future Repository & Report Placeholder Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-dashed border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center justify-between text-slate-300 font-semibold">
                <span>Deliverables &amp; Code Links</span>
                <span className="text-[11px] font-mono text-amber-400">Under Construction</span>
              </div>
              <p>
                When this project is executed and analyzed in Python, links to the GitHub repository, Jupyter Notebook, and analytical write-up will appear right here.
              </p>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
