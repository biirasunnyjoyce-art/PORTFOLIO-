import React from 'react';
import { GraduationCap, BookOpen, CheckCircle, School } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#080E1A] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-teal-400 tracking-wider">
              SECTION 06 · ACADEMIC CREDENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Formal Education
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md">
            <p>
              Academic progression from secondary school excellence at Namagunga to undergraduate Data Science &amp; Analytics at UCU.
            </p>
          </div>
        </div>

        {/* Timeline / Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* UCU Card (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B132B] border border-slate-800 p-7 sm:p-8 shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    Uganda Christian University (UCU)
                  </h3>
                  <p className="text-xs text-teal-400 font-mono mt-0.5">
                    Bachelor of Science in Data Science and Analytics
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-amber-400 font-semibold bg-amber-950/40 px-2.5 py-1 rounded-md border border-amber-800/40 whitespace-nowrap">
                First Year · Active
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Establishing mathematical, statistical, and programming foundations designed to bridge computation with data interpretation.
            </p>

            {/* Course Units Detailed Breakdown */}
            <div className="pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                Current Semester Course Units:
              </h4>

              <div className="space-y-3">
                {portfolioData.courseUnits.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">
                        {course.name}
                      </span>
                      <span className="text-[10px] font-mono text-teal-400">Core Unit</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {course.focus.map((item, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mount St. Mary's Namagunga Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/40 border border-slate-800 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 text-sky-400 border border-slate-800">
                    <School className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      Mount St. Mary's College Namagunga
                    </h3>
                    <p className="text-xs text-sky-400 font-mono mt-0.5">
                      Secondary Education
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 my-6">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 block">QUALIFICATION</span>
                  <span className="text-sm font-semibold text-white mt-0.5 block">
                    Completed O-Level and A-Level Education
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 block">LOCATION</span>
                  <span className="text-sm font-semibold text-slate-300 mt-0.5 block">
                    Lugazi / Namagunga, Uganda
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 block">KEY HIGHLIGHT</span>
                  <span className="text-xs text-slate-300 mt-1 block leading-relaxed">
                    Rigorous academic discipline, character formation, and student leadership as Project Manager for the Science Fair Innovation Project (2nd Place Award).
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-500 italic">
              Academic history presented strictly with truthful, verified credentials.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
