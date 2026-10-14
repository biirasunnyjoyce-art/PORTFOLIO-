import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, TrendingUp, BarChart3, Binary, ShieldCheck, Sparkles, Camera } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useProfilePhoto } from '../context/PhotoContext';

export const Hero: React.FC = () => {
  const { photo, openModal: openPhotoModal } = useProfilePhoto();
  const [activeLens, setActiveLens] = useState<'data' | 'business' | 'growth'>('data');

  const lensDetails = {
    data: {
      badge: 'Data Lens',
      label: 'Quantitative Reasoning',
      focus: 'Python · Probability & Statistics · Computing Logic',
      metric: 'Structured Inquiry',
      quote: 'Extracting patterns from raw numbers with mathematical honesty.',
      color: 'teal',
    },
    business: {
      badge: 'Business Lens',
      label: 'Strategic Alignment',
      focus: 'Business Intelligence · Market Gaps · Value Creation',
      metric: 'Informed Decisions',
      quote: 'Data is only as valuable as the strategic decision it illuminates.',
      color: 'amber',
    },
    growth: {
      badge: 'Growth Lens',
      label: 'Continuous Discipline',
      focus: 'Market Literacy · Project Execution · Long-Term Ambition',
      metric: 'Skill Compounding',
      quote: 'Consistent, curious daily practice turning fundamentals into impact.',
      color: 'emerald',
    },
  };

  const currentLens = lensDetails[activeLens];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#060B14]">
      {/* Background ambient light - restrained dark navy & teal glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[450px] h-[350px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle analytical grid background overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #14B8A6 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2-Column Split: Typographic Column (Left) & Analytical Graphic (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Portrait Photo Lockup */}
            <div className="flex items-center gap-4 mb-6">
              <button
                type="button"
                onClick={openPhotoModal}
                title="Click to view or upload your unedited photo"
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-teal-500/50 shadow-xl shadow-teal-500/20 shrink-0 bg-slate-900 group hover:border-teal-400 transition-all text-left focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                {photo ? (
                  <img
                    src={photo}
                    alt={portfolioData.personal.fullName}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-slate-900 hover:bg-slate-800 transition-colors">
                    <Camera className="w-6 h-6 text-teal-400 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-teal-300 font-semibold leading-tight">
                      Add Photo
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </button>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1">
                  <span className="text-teal-400 font-semibold tracking-wide">
                    {portfolioData.personal.university}
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-slate-300">Undergraduate Year 1</span>
                </div>
                <span className="text-xs font-mono text-amber-400">
                  BSc Data Science &amp; Analytics
                </span>
                {!photo && (
                  <button
                    type="button"
                    onClick={openPhotoModal}
                    className="mt-1.5 text-[11px] text-teal-300 hover:text-white underline text-left flex items-center gap-1 font-medium"
                  >
                    <span>Click to place Screenshot 2026-10-13 171623.png</span>
                  </button>
                )}
              </div>
            </div>

            {/* Prominent Full Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 font-display">
              <span className="block text-slate-300 text-lg sm:text-xl font-medium tracking-normal mb-1">
                Hello, I am
              </span>
              <span className="text-white drop-shadow-sm">
                {portfolioData.personal.fullName}
              </span>
            </h1>

            {/* Headline */}
            <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-100 to-amber-200 mb-6 font-display max-w-2xl leading-snug">
              {portfolioData.personal.roleHeadline}
            </p>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 max-w-2xl font-normal">
              "{portfolioData.personal.supportingStatement}"
            </p>

            {/* Secondary Statement */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl border-l border-teal-500/30 pl-4 py-1 italic">
              {portfolioData.personal.secondaryStatement}
            </p>

            {/* Two Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-400/30 flex items-center gap-2 group active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-teal-500/50 rounded-xl transition-all flex items-center gap-2 group active:scale-95"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-teal-400" />
              </a>
            </div>

            {/* Personal Brand Philosophy Pill-free note */}
            <div className="mt-8 flex items-center gap-3 text-xs text-slate-400">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-medium text-slate-300">
                "{portfolioData.personal.philosophy}"
              </span>
            </div>
          </div>

          {/* Right Column: Visual Analytical Graphic & Interactive Data Canvas */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0B132B]/90 border border-slate-800 p-6 shadow-2xl shadow-black/60 overflow-hidden">
              {/* Card Header: Perspective Switcher */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                  <span className="text-xs font-semibold text-slate-200 tracking-wide">
                    Analytical Exploration Matrix
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 tabular-nums">
                  UCU · Year 1 Foundation
                </span>
              </div>

              {/* Interactive Lens Filter Tabs (Zero-pill compliant: functional button tabs) */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-lg border border-slate-800/80 mb-5">
                {(['data', 'business', 'growth'] as const).map((lens) => (
                  <button
                    key={lens}
                    type="button"
                    onClick={() => setActiveLens(lens)}
                    className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap text-center ${
                      activeLens === lens
                        ? 'bg-slate-800 text-teal-300 shadow-sm border border-slate-700'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {lens === 'data' ? '1. Data' : lens === 'business' ? '2. Business' : '3. Growth'}
                  </button>
                ))}
              </div>

              {/* Dynamic Lens Graphic Content */}
              <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/60 mb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-300">
                    {currentLens.label}
                  </span>
                  <span className="text-[11px] font-mono text-teal-400">
                    {currentLens.metric}
                  </span>
                </div>

                {/* SVG Analytical Data Motif (Distribution curve + Data Points + Trend) */}
                <div className="w-full h-32 relative bg-slate-900/60 rounded-lg p-2 flex items-center justify-center overflow-hidden border border-slate-800/40">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 320 100" fill="none">
                    {/* Grid lines */}
                    <line x1="10" y1="20" x2="310" y2="20" stroke="#1E293B" strokeDasharray="3 3" />
                    <line x1="10" y1="50" x2="310" y2="50" stroke="#1E293B" strokeDasharray="3 3" />
                    <line x1="10" y1="80" x2="310" y2="80" stroke="#1E293B" strokeDasharray="3 3" />

                    {/* Dynamic Trend Curves based on activeLens */}
                    {activeLens === 'data' && (
                      <>
                        {/* Normal distribution bell curve */}
                        <path
                          d="M10,85 C60,85 100,82 130,50 C145,30 160,15 175,15 C190,15 205,30 220,50 C250,82 280,85 310,85"
                          stroke="#14B8A6"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M10,85 C60,85 100,82 130,50 C145,30 160,15 175,15 C190,15 205,30 220,50 C250,82 280,85 310,85 L310,95 L10,95 Z"
                          fill="url(#tealGlow)"
                          opacity="0.15"
                        />
                        {/* Discrete data scatter markers */}
                        <circle cx="175" cy="15" r="4" fill="#F59E0B" />
                        <circle cx="145" cy="30" r="3" fill="#14B8A6" />
                        <circle cx="205" cy="30" r="3" fill="#14B8A6" />
                        <circle cx="110" cy="70" r="3" fill="#14B8A6" opacity="0.6" />
                        <circle cx="240" cy="70" r="3" fill="#14B8A6" opacity="0.6" />
                      </>
                    )}

                    {activeLens === 'business' && (
                      <>
                        {/* Stepped value generation & trend */}
                        <path
                          d="M15,80 L70,72 L120,75 L170,52 L220,58 L270,30 L310,22"
                          stroke="#F59E0B"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M15,80 L70,72 L120,75 L170,52 L220,58 L270,30 L310,22 L310,95 L15,95 Z"
                          fill="url(#amberGlow)"
                          opacity="0.15"
                        />
                        <circle cx="170" cy="52" r="4" fill="#14B8A6" />
                        <circle cx="310" cy="22" r="4.5" fill="#F59E0B" />
                      </>
                    )}

                    {activeLens === 'growth' && (
                      <>
                        {/* Compounding learning trajectory */}
                        <path
                          d="M10,88 Q150,85 220,55 T310,18"
                          stroke="#10B981"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M10,88 Q150,85 220,55 T310,18 L310,95 L10,95 Z"
                          fill="url(#greenGlow)"
                          opacity="0.15"
                        />
                        <circle cx="220" cy="55" r="3.5" fill="#14B8A6" />
                        <circle cx="310" cy="18" r="4.5" fill="#10B981" />
                      </>
                    )}

                    <defs>
                      <linearGradient id="tealGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#14B8A6" />
                        <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="amberGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="greenGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Subtext description of active perspective */}
                <div className="mt-3 text-xs text-slate-300 font-medium">
                  {currentLens.quote}
                </div>
                <div className="mt-1 text-[11px] text-slate-400 font-mono">
                  Focus: {currentLens.focus}
                </div>
              </div>

              {/* Foundational Pillars preview */}
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 mb-0.5">
                    <Binary className="w-3.5 h-3.5 text-teal-400" />
                    <span>Python &amp; Code</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Structured Programming</p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 mb-0.5">
                    <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Stats &amp; Probability</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Analytical Foundations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width proof & academic context strip below 2-column split (Frontend Design Constitution rule) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <span className="text-[11px] font-mono text-teal-400 tracking-wider">ACADEMIC PROGRAMME</span>
            <p className="text-sm font-semibold text-white mt-1">BSc Data Science &amp; Analytics</p>
            <p className="text-xs text-slate-400">Uganda Christian University (Year 1)</p>
          </div>

          <div>
            <span className="text-[11px] font-mono text-teal-400 tracking-wider">SECONDARY EDUCATION</span>
            <p className="text-sm font-semibold text-white mt-1">Mount St. Mary's Namagunga</p>
            <p className="text-xs text-slate-400">Completed O-Level &amp; A-Level</p>
          </div>

          <div>
            <span className="text-[11px] font-mono text-teal-400 tracking-wider">CURRENT COURSEWORK</span>
            <p className="text-sm font-semibold text-white mt-1">Python, Computing &amp; Stats</p>
            <p className="text-xs text-slate-400">4 foundational technical units</p>
          </div>

          <div>
            <span className="text-[11px] font-mono text-teal-400 tracking-wider">LEADERSHIP RECOGNITION</span>
            <p className="text-sm font-semibold text-white mt-1">Science Fair 2nd Place</p>
            <p className="text-xs text-slate-400">Project Manager · Clean Energy</p>
          </div>
        </div>
      </div>
    </section>
  );
};
