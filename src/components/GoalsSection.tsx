import React from 'react';
import { Target, CheckCircle2, Compass, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const GoalsSection: React.FC = () => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Technical':
        return 'text-teal-400 bg-teal-950/40 border-teal-800/40';
      case 'Business':
        return 'text-amber-400 bg-amber-950/40 border-amber-800/40';
      case 'Academic':
        return 'text-sky-400 bg-sky-950/40 border-sky-800/40';
      case 'Career':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40';
      default:
        return 'text-slate-300 bg-slate-900 border-slate-800';
    }
  };

  return (
    <section id="goals" className="py-24 bg-[#060B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-teal-400 tracking-wider">
              SECTION 07 · PROFESSIONAL AMBITIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              What I Am Working Towards
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-slate-300 max-w-md">
            <p>
              A focused set of learning milestones and professional directions guiding my university years and personal development.
            </p>
          </div>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.professionalGoals.map((goal, index) => (
            <div
              key={goal.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-500">
                    MILESTONE 0{index + 1}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getCategoryColor(
                      goal.category
                    )}`}
                  >
                    {goal.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors font-display mb-2">
                  {goal.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                <Target className="w-3.5 h-3.5 text-teal-400" />
                <span>Continuous Focus</span>
              </div>
            </div>
          ))}
        </div>

        {/* Motivation Quote Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B132B] to-slate-900 border border-slate-800 text-center max-w-3xl mx-auto">
          <Sparkles className="w-5 h-5 text-amber-400 mx-auto mb-2" />
          <p className="text-sm sm:text-base font-medium text-slate-200 italic font-display">
            "I am building the skills to turn data into insights and insights into better decisions."
          </p>
          <span className="text-xs text-teal-400 font-mono mt-2 block">
            — Biira Joyce · Personal Positioning
          </span>
        </div>
      </div>
    </section>
  );
};
