import React, { useState } from 'react';
import { Award, Sun, Flame, Zap, ArrowRight, ShieldCheck, CheckCircle2, Cpu, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

export const FeaturedProjectSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState<'both' | 'solar' | 'thermocouple'>('both');
  const project = portfolioData.featuredProject;

  return (
    <section id="featured-project" className="py-24 bg-[#080E1A] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-teal-400 tracking-wider">
              SECTION 03 · FEATURED SCIENCE FAIR INNOVATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Turning Solid Waste into Electricity
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-slate-300 max-w-md">
            Dual clean-energy generation combining solar photovoltaics (light to electricity) with a thermocouple (heat to electricity).
          </p>
        </div>

        {/* Featured Case Study Container */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#0B132B] to-[#071324] border border-slate-800 p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-[110px] pointer-events-none" />

          {/* Top Metadata Row (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80">
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400">
              <span className="font-semibold text-teal-400">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.institution}</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-400 font-medium">Second Place Award</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-300">
                Leadership: <span className="text-teal-300 font-bold">{project.role}</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs text-amber-300 flex items-center gap-1 font-semibold">
                <Award className="w-4 h-4" />
                <span>{project.achievement}</span>
              </span>
            </div>
          </div>

          {/* Core Grid: Left Column (Text & Architecture) vs Right Column (Schematic Diagram) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                  Hybrid Energy Engineering
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display leading-tight">
                  Dual-Mechanism Energy Transformation
                </h3>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.summary}
              </p>

              {/* The Two Distinct Conversion Mechanisms (Solar + Thermocouple) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Channel 1: Solar */}
                <div
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    activeChannel === 'solar' || activeChannel === 'both'
                      ? 'bg-amber-950/20 border-amber-500/40 shadow-lg shadow-amber-500/5'
                      : 'bg-slate-950/60 border-slate-800 opacity-60'
                  }`}
                  onClick={() => setActiveChannel(activeChannel === 'solar' ? 'both' : 'solar')}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                        <Sun className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white">
                        {project.mechanisms.solar.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                      Light → Electricity
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-2">
                    {project.mechanisms.solar.description}
                  </p>
                  <div className="text-[11px] font-mono text-amber-400/90 flex items-center gap-1">
                    <span>Principle:</span>
                    <span className="font-semibold">{project.mechanisms.solar.principle}</span>
                  </div>
                </div>

                {/* Channel 2: Thermocouple */}
                <div
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    activeChannel === 'thermocouple' || activeChannel === 'both'
                      ? 'bg-teal-950/20 border-teal-500/40 shadow-lg shadow-teal-500/5'
                      : 'bg-slate-950/60 border-slate-800 opacity-60'
                  }`}
                  onClick={() => setActiveChannel(activeChannel === 'thermocouple' ? 'both' : 'thermocouple')}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                        <Flame className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white">
                        {project.mechanisms.thermocouple.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/40">
                      Heat → Electricity
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-2">
                    {project.mechanisms.thermocouple.description}
                  </p>
                  <div className="text-[11px] font-mono text-teal-400/90 flex items-center gap-1">
                    <span>Principle:</span>
                    <span className="font-semibold">{project.mechanisms.thermocouple.principle}</span>
                  </div>
                </div>
              </div>

              {/* Challenge vs Concept */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    THE ENVIRONMENTAL CHALLENGE
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    MY LEADERSHIP ROLE
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.myRole}
                  </p>
                </div>
              </div>

              {/* Key Takeaways Strip */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.keyTakeaways.map((item, i) => (
                  <div key={i} className="text-left">
                    <span className="text-[10px] text-slate-400 font-mono block uppercase">
                      {item.label}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 mt-0.5 block">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3.5 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-xl transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-400/30 flex items-center gap-2 group active:scale-95"
                >
                  <span>View Full Project Story &amp; Learnings</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Graphic: SVG Dual-Conversion Schematic Layout (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md p-6 rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl relative overflow-hidden">
                {/* Header with channel filter buttons */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-semibold text-white">
                      Dual Energy Circuit
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveChannel('both')}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeChannel === 'both' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Dual
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveChannel('solar')}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeChannel === 'solar' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Solar
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveChannel('thermocouple')}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeChannel === 'thermocouple' ? 'bg-teal-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Thermo
                    </button>
                  </div>
                </div>

                {/* Conceptual Dual-Conversion Schematic SVG */}
                <svg
                  className="w-full h-80"
                  viewBox="0 0 320 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle Grid dots */}
                  <pattern id="schematicGrid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.8" fill="#1E293B" />
                  </pattern>
                  <rect width="320" height="280" fill="url(#schematicGrid)" />

                  {/* ================= CHANNEL 1: SOLAR (Light to Electricity) ================= */}
                  <g opacity={activeChannel === 'both' || activeChannel === 'solar' ? 1 : 0.25} className="transition-opacity">
                    {/* Solar Source Node */}
                    <rect x="15" y="25" width="85" height="55" rx="8" fill="#161208" stroke="#F59E0B" strokeWidth="1.5" />
                    <circle cx="35" cy="45" r="7" fill="#F59E0B" opacity="0.3" />
                    <circle cx="35" cy="45" r="4" fill="#FCD34D" />
                    <text x="58" y="45" fill="#FDE68A" fontSize="9" fontWeight="bold">
                      Solar Light
                    </text>
                    <text x="58" y="58" fill="#94A3B8" fontSize="7.5">
                      Photons / Lux
                    </text>

                    {/* Arrow 1: Light to Solar PV Panel */}
                    <path d="M100 52 L135 52" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
                    <polygon points="135,49 141,52 135,55" fill="#F59E0B" />

                    {/* Solar PV Cell Chamber */}
                    <rect x="142" y="25" width="85" height="55" rx="8" fill="#0C1A24" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="184" y="45" fill="#FCD34D" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                      Solar PV Cell
                    </text>
                    <text x="184" y="58" fill="#38BDF8" fontSize="7.5" textAnchor="middle">
                      Light → Current
                    </text>

                    {/* Stream to Aggregator */}
                    <path d="M227 52 L260 52 L260 110" stroke="#F59E0B" strokeWidth="2" />
                  </g>

                  {/* ================= CHANNEL 2: THERMOCOUPLE (Heat to Electricity) ================= */}
                  <g opacity={activeChannel === 'both' || activeChannel === 'thermocouple' ? 1 : 0.25} className="transition-opacity">
                    {/* Solid Waste Source Node */}
                    <rect x="15" y="195" width="85" height="55" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                    <text x="57" y="218" fill="#E2E8F0" fontSize="9" fontWeight="bold" textAnchor="middle">
                      Solid Waste
                    </text>
                    <text x="57" y="232" fill="#F87171" fontSize="7.5" textAnchor="middle">
                      Thermal Heat (Q)
                    </text>

                    {/* Heat Wave indicator */}
                    <path d="M100 222 Q115 216 125 222 T140 222" stroke="#EF4444" strokeWidth="2" fill="none" strokeDasharray="2 2" />
                    <polygon points="138,219 144,222 138,225" fill="#EF4444" />

                    {/* Thermocouple Unit Chamber */}
                    <rect x="142" y="195" width="85" height="55" rx="8" fill="#0A1E1D" stroke="#14B8A6" strokeWidth="1.5" />
                    <text x="184" y="218" fill="#2DD4BF" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                      Thermocouple
                    </text>
                    <text x="184" y="232" fill="#94A3B8" fontSize="7.5" textAnchor="middle">
                      Heat → Voltage
                    </text>
                    <text x="184" y="243" fill="#6EE7B7" fontSize="7" textAnchor="middle">
                      (Seebeck Effect)
                    </text>

                    {/* Stream to Aggregator */}
                    <path d="M227 222 L260 222 L260 170" stroke="#14B8A6" strokeWidth="2" />
                  </g>

                  {/* ================= CENTRAL POWER AGGREGATION & CIRCUIT ================= */}
                  <g>
                    {/* Central Aggregator Box */}
                    <rect x="235" y="110" width="70" height="60" rx="8" fill="#022C22" stroke="#10B981" strokeWidth="2" />
                    <circle cx="270" cy="130" r="10" fill="#059669" opacity="0.3" />
                    <path d="M270 123 L266 130 L270 130 L269 137 L274 129 L270 129 Z" fill="#34D399" />
                    <text x="270" y="152" fill="#A7F3D0" fontSize="8" fontWeight="bold" textAnchor="middle">
                      Clean Power
                    </text>
                    <text x="270" y="162" fill="#6EE7B7" fontSize="7" textAnchor="middle">
                      Dual Output
                    </text>
                  </g>

                  {/* Flow label notes */}
                  <text x="110" y="96" fill="#FCD34D" fontSize="7.5" fontStyle="italic">
                    Channel A: Solar (Light)
                  </text>
                  <text x="110" y="180" fill="#2DD4BF" fontSize="7.5" fontStyle="italic">
                    Channel B: Thermocouple (Heat)
                  </text>
                </svg>

                {/* Explanatory takeaway box under diagram */}
                <div className="mt-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-[11px] text-slate-300">
                      Hybrid Design: Photons (Solar) + Thermal Gradient (Thermocouple)
                    </span>
                  </div>
                  <span className="text-amber-400 font-mono text-[11px] font-bold shrink-0">
                    2nd Place
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {modalOpen && (
        <ProjectDetailModal
          project={project}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
};
