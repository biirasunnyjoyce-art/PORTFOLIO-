import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, AlertCircle, BarChart3, GraduationCap, TrendingUp, LayoutDashboard, FileCode2 } from 'lucide-react';
import { portfolioData, PlannedProject } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

export const PlannedProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<PlannedProject | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'project-sales-analysis':
        return <BarChart3 className="w-5 h-5 text-teal-400" />;
      case 'project-student-performance':
        return <GraduationCap className="w-5 h-5 text-sky-400" />;
      case 'project-market-data':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'project-insights-dashboard':
        return <LayoutDashboard className="w-5 h-5 text-emerald-400" />;
      default:
        return <FileCode2 className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#060B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-teal-400 tracking-wider">
              SECTION 03 · TECHNICAL PORTFOLIO IN PROGRESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Building My Analytical Portfolio
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-slate-300 max-w-lg leading-relaxed">
            <p>
              "I am currently developing my technical foundation and working towards projects that connect programming, data analysis, and business questions. This section will grow as I turn what I learn into practical work."
            </p>
          </div>
        </div>

        {/* Project Cards Grid (2x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioData.plannedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-slate-700/80 transition-all p-6 sm:p-7 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header: Status Tag (Zero-pill text) & Icon */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                      {getProjectIcon(project.id)}
                    </div>
                    <div className="text-xs font-medium text-slate-400">
                      <span className="text-amber-400 font-mono font-semibold">
                        {project.statusTag}
                      </span>
                      <span aria-hidden="true" className="mx-1.5 text-slate-600">·</span>
                      <span>Concept Stage</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 tabular-nums">
                    Python &amp; Analytics
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-display group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>

                {/* Central Question */}
                <div className="my-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <span className="text-[10px] font-mono text-teal-400 block uppercase tracking-wider mb-1">
                    Analytical Question:
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 italic">
                    "{project.researchQuestion}"
                  </p>
                </div>

                {/* Educational Disclaimer for Financial Project */}
                {project.educationalDisclaimer && (
                  <div className="mb-4 p-3 rounded-xl bg-amber-950/20 border border-amber-800/30 text-[11px] text-amber-300/90 flex items-start gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{project.educationalDisclaimer}</span>
                  </div>
                )}

                {/* Key Planned Activities (Preview of 2 items) */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Planned Learning Activities:
                  </span>
                  {project.learningActivities.slice(0, 2).map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-teal-400 font-mono text-[11px] shrink-0">→</span>
                      <span>{act}</span>
                    </div>
                  ))}
                  {project.learningActivities.length > 2 && (
                    <div className="text-[11px] text-slate-500 italic pl-3">
                      +{project.learningActivities.length - 2} additional planned inquiry steps...
                    </div>
                  )}
                </div>

                {/* Potential Skills Unboxed Text */}
                <div className="mb-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                    Target Skills:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.potentialSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-slate-300 bg-slate-950 px-2 py-0.5 rounded border border-slate-800/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action to view full blueprint and placeholders */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>Repo: Coming Soon</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-teal-400 hover:text-white bg-teal-950/40 hover:bg-teal-900/60 border border-teal-800/40 rounded-lg transition-all flex items-center gap-1"
                >
                  <span>View Project Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Future expansion note for Biira Joyce */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
            <p>
              <strong className="text-slate-200">Continuous Evolution:</strong> As you write Python scripts and complete these analyses, replace "Planned Project" with live GitHub repository links and notebooks inside <code className="text-teal-300 font-mono">portfolioData.ts</code>.
            </p>
          </div>
          <span className="text-[11px] font-mono text-teal-400 whitespace-nowrap">
            Zero Mock Data Guarantee
          </span>
        </div>
      </div>

      {/* Planned Project Blueprint Modal */}
      {activeModalProject && (
        <ProjectDetailModal
          plannedProject={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
