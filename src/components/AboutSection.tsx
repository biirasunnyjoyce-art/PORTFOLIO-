import React from 'react';
import { Database, Briefcase, Compass, Award, BookOpen, Sparkles, Camera } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useProfilePhoto } from '../context/PhotoContext';

export const AboutSection: React.FC = () => {
  const { photo, openModal: openPhotoModal } = useProfilePhoto();
  return (
    <section id="about" className="py-24 bg-[#080E1A] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-teal-400 tracking-wider">
              SECTION 01 · ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Curious by Nature. Analytical by Training. Business-Minded by Interest.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-slate-400 max-w-md">
            Connecting mathematical foundations with real-world enterprise reasoning.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Biography Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-lg text-slate-200 font-medium leading-relaxed">
              {portfolioData.aboutBio.paragraphs[0]}
            </div>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed font-normal">
              <p>{portfolioData.aboutBio.paragraphs[1]}</p>

              {/* Highlight callout for leadership & science fair */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 my-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      Leadership Beyond the Lecture Hall
                    </h4>
                    <p className="text-sm text-slate-300 mt-1">
                      {portfolioData.aboutBio.paragraphs[2]}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                      <span>Mount St. Mary's College Namagunga</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-teal-400">2nd Place School Award</span>
                    </div>
                  </div>
                </div>
              </div>

              <p>{portfolioData.aboutBio.paragraphs[3]}</p>
            </div>

            {/* Quick Profile Summary Box */}
            <div className="pt-6 border-t border-slate-800/80">
              <h3 className="text-xs font-mono text-slate-400 tracking-wider mb-4">
                ACADEMIC PROFILE SNAPSHOT
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.aboutBio.quickFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60"
                  >
                    <div className="text-[11px] text-slate-400 font-medium">{fact.label}</div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Three Connected Pillars Column & Portrait (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Portrait Spotlight Card */}
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B132B] border border-slate-800 p-5 shadow-xl flex items-center gap-4">
              <button
                type="button"
                onClick={openPhotoModal}
                title="Click to view or upload your unedited photo"
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-teal-500/40 shadow-lg shrink-0 bg-slate-950 flex items-center justify-center hover:border-teal-400 transition-colors group text-left"
              >
                {photo ? (
                  <img
                    src={photo}
                    alt={portfolioData.personal.fullName}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-2 text-center">
                    <Camera className="w-5 h-5 text-teal-400 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] text-teal-300 font-semibold">Add Photo</span>
                  </div>
                )}
              </button>
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-teal-400 font-semibold">
                  BIIRA JOYCE
                </span>
                <h4 className="text-base font-bold text-white font-display">
                  Data Science Student
                </h4>
                <p className="text-xs text-slate-300 mt-0.5 leading-snug italic">
                  "{portfolioData.personal.philosophy}"
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-slate-400 font-mono">
                    Uganda Christian University
                  </span>
                  <button
                    type="button"
                    onClick={openPhotoModal}
                    className="text-[10px] text-teal-400 hover:text-white underline font-mono"
                  >
                    {photo ? 'Change' : 'Upload'}
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B132B] border border-slate-800 shadow-xl">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2 font-display">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>The Three Core Pillars of My Positioning</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                How I channel my curiosity, academic coursework, and career aspirations.
              </p>

              <div className="space-y-4">
                {portfolioData.pillars.map((pillar, idx) => {
                  const icons = [
                    <Database className="w-5 h-5 text-teal-400" key="db" />,
                    <Briefcase className="w-5 h-5 text-amber-400" key="bc" />,
                    <Compass className="w-5 h-5 text-emerald-400" key="cp" />,
                  ];

                  return (
                    <div
                      key={pillar.id}
                      className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                          {icons[idx]}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-slate-400">
                            0{idx + 1}. {pillar.title}
                          </span>
                          <h4 className="text-sm font-semibold text-white">
                            {pillar.headline}
                          </h4>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed pl-11">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* University & Secondary School Trust Callout */}
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-teal-400" />
                <span>Uganda Christian University</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="text-right">
                <span>Mount St. Mary's Namagunga Alumna</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
