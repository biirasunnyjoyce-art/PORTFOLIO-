import React, { useState } from 'react';
import { Code2, BarChart2, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { portfolioData, SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? portfolioData.skillCategories
      : portfolioData.skillCategories.filter((c) => c.id === selectedCategory);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Currently Learning':
      case 'Currently Studying':
        return 'text-teal-400 border-teal-500/30 bg-teal-950/30';
      case 'Academic Foundation':
        return 'text-sky-400 border-sky-500/30 bg-sky-950/30';
      case 'Developing Skills':
      case 'Learning and Exploring':
      case 'Developing Perspective':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/30';
      case 'Area of Interest':
      case 'Professional Interest':
        return 'text-amber-400 border-amber-500/30 bg-amber-950/30';
      case 'School Project Experience':
      case 'Academic and Project Experience':
        return 'text-purple-400 border-purple-500/30 bg-purple-950/30';
      default:
        return 'text-slate-300 border-slate-700 bg-slate-900';
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-5 h-5 text-teal-400" />;
      case 'data':
        return <BarChart2 className="w-5 h-5 text-sky-400" />;
      case 'business':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'leadership':
        return <Users className="w-5 h-5 text-purple-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#060B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-teal-400 tracking-wider">
              SECTION 02 · SKILLS &amp; CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Grounded Foundations &amp; Active Learning
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md">
            <p>
              An honest record of what I am currently learning at UCU, my academic coursework, and emerging areas of curiosity. No inflated skill bars.
            </p>
          </div>
        </div>

        {/* Filter Tabs (Interactive Segmented Control - Button Elements) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-teal-400 text-slate-950 font-semibold shadow-md shadow-teal-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            All Competencies ({portfolioData.skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {portfolioData.skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-teal-400 text-slate-950 font-semibold shadow-md shadow-teal-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Display Grid */}
        <div className="space-y-12">
          {filteredCategories.map((categoryGroup: SkillCategory) => (
            <div
              key={categoryGroup.id}
              className="rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8"
            >
              {/* Category Subheading */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getCategoryIcon(categoryGroup.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      {categoryGroup.category}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {categoryGroup.subtitle}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
                  {categoryGroup.skills.length} Capabilities
                </span>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryGroup.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Row: Skill Name + Status */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                          {skill.name}
                        </h4>
                      </div>

                      {/* Status indicator as quiet unboxed text or subtle border */}
                      <div className="mb-3 text-[11px] font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        <span className="text-teal-300 font-mono tracking-tight">
                          {skill.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {skill.description}
                      </p>
                    </div>

                    {/* Footer highlight */}
                    {skill.highlight && (
                      <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 font-mono flex items-center justify-between">
                        <span>{skill.highlight}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Anti-Inflation Statement */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-center text-xs text-slate-400">
          <span>
            Integrity First: Technical proficiencies will expand as I progress through Python libraries, statistical computing, and database systems in upcoming semesters.
          </span>
        </div>
      </div>
    </section>
  );
};
