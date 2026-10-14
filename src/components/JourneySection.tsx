import React from 'react';
import { CheckCircle2, Clock, Target, Sparkles, BookOpen, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-[#080E1A] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-teal-400 tracking-wider">
              SECTION 04 · LEARNING TRAJECTORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              From Learning the Fundamentals to Creating Real-World Impact
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md">
            <p>
              A transparent three-stage roadmap detailing where I stand today, what I am actively working on next, and my long-term ambitions.
            </p>
          </div>
        </div>

        {/* Visual 3-Stage Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {portfolioData.journeyStages.map((stage) => {
            const isCurrent = stage.status === 'Current';
            const isNext = stage.status === 'Future Learning Goals';

            return (
              <div
                key={stage.stageNumber}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                  isCurrent
                    ? 'bg-gradient-to-b from-slate-900 via-[#0B132B] to-[#071324] border-2 border-teal-500/50 shadow-2xl shadow-teal-500/10'
                    : 'bg-slate-900/40 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Active indicator top bar */}
                {isCurrent && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-teal-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider shadow-md">
                    Active Present Stage
                  </div>
                )}

                <div>
                  {/* Top Stage Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-500">
                      STAGE 0{stage.stageNumber}
                    </span>
                    <span
                      className={`text-xs font-mono font-medium ${
                        isCurrent
                          ? 'text-teal-400'
                          : isNext
                          ? 'text-amber-400'
                          : 'text-sky-400'
                      }`}
                    >
                      {stage.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white font-display mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 font-medium">
                    {stage.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  {/* Focus Points List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      {isCurrent ? 'Current Daily Focus:' : 'Core Milestones:'}
                    </span>
                    {stage.focusPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300">
                        {isCurrent ? (
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        ) : isNext ? (
                          <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        ) : (
                          <Target className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        )}
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer contextual badge */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>
                    {isCurrent ? 'Undergraduate Year 1' : isNext ? 'Year 2 & Beyond' : 'Industry Integration'}
                  </span>
                  <span className="text-slate-500">UCU Pathway</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grounding note */}
        <div className="mt-12 text-center text-xs text-slate-400">
          <p>
            Stages 2 and 3 represent forward-looking educational aspirations. As goals are achieved, they will naturally move into completed project records.
          </p>
        </div>
      </div>
    </section>
  );
};
