import React, { useState } from 'react';
import { LineChart, Briefcase, TrendingUp, AlertTriangle, ShieldCheck, CheckCircle2, Calculator, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BusinessAndMarketsSection: React.FC = () => {
  const { businessAndMarkets } = portfolioData;

  // Educational Risk Calculator State
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [lossStreaks, setLossStreaks] = useState<number>(5);

  // Calculation for educational demonstration of capital preservation
  const calculateDrawdown = (risk: number, streaks: number) => {
    let balance = 100;
    for (let i = 0; i < streaks; i++) {
      balance = balance * (1 - risk / 100);
    }
    const drawdown = 100 - balance;
    // Recovery required to return to 100: (100 - balance) / balance * 100
    const recoveryNeeded = balance > 0 ? ((100 - balance) / balance) * 100 : 0;
    return {
      finalBalance: balance.toFixed(1),
      drawdown: drawdown.toFixed(1),
      recoveryNeeded: recoveryNeeded.toFixed(1),
    };
  };

  const simulation = calculateDrawdown(riskPercent, lossStreaks);

  return (
    <section id="business-markets" className="py-24 bg-[#060B14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-teal-400 tracking-wider">
              SECTION 05 · DOMAIN INTERSECTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Where Data Meets Business
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-slate-300 max-w-md">
            <p>
              Exploring how information empowers people to evaluate opportunities, analyse performance, and make evidence-backed choices.
            </p>
          </div>
        </div>

        {/* 3 Core Visual Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {businessAndMarkets.themes.map((theme) => {
            const icons = {
              bi: <LineChart className="w-5 h-5 text-teal-400" />,
              entrepreneurship: <Briefcase className="w-5 h-5 text-amber-400" />,
              markets: <TrendingUp className="w-5 h-5 text-emerald-400" />,
            };

            return (
              <div
                key={theme.id}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      {icons[theme.id as keyof typeof icons]}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {theme.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mb-2">
                    {theme.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {theme.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Key Areas of Inquiry:
                    </span>
                    {theme.aspirations.map((asp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-teal-400 font-mono text-[11px] shrink-0">·</span>
                        <span>{asp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-500">
                  Curiosity &amp; Future Development
                </div>
              </div>
            );
          })}
        </div>

        {/* Subsection: Learning the Markets, One Step at a Time */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0B132B]/90 border border-slate-800 p-8 sm:p-10 lg:p-12 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono text-amber-400 tracking-wider">
              SPECIAL FOCUS · FINANCIAL EDUCATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-display">
              {businessAndMarkets.tradingSubsection.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              {businessAndMarkets.tradingSubsection.statement}
            </p>

            {/* Mandatory Educational & Ethical Disclaimer */}
            <div className="mt-4 p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200/90 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">Educational Transparency:</strong>{' '}
                {businessAndMarkets.tradingSubsection.disclaimer}
              </div>
            </div>
          </div>

          {/* 5-Step Learning Roadmap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {businessAndMarkets.tradingSubsection.roadmap.map((step) => (
              <div
                key={step.step}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-teal-400 font-bold">
                      STEP 0{step.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-teal-300/90 italic">
                  "{step.keyPrinciple}"
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Educational Tool: Risk Management & Drawdown Math Explorer */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-teal-400" />
                <h4 className="text-sm font-bold text-white">
                  Educational Sandbox: The Mathematics of Capital Preservation
                </h4>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                Why Risk Control Precedes Trading
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-6 max-w-2xl">
              In financial analytics, losing capital reduces your mathematical ability to compound. Test below how risking 1% versus larger percentages protects capital across consecutive losses:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Controls (6 cols) */}
              <div className="md:col-span-6 space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                    <span>Risk Per Trade:</span>
                    <span className="font-mono text-teal-400 font-bold">{riskPercent}% of account</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={riskPercent}
                    onChange={(e) => setRiskPercent(Number(e.target.value))}
                    className="w-full accent-teal-400 cursor-pointer bg-slate-800 rounded-lg h-2"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>1% (Prudent)</span>
                    <span>2% (Moderate)</span>
                    <span>5%+ (High Risk)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1.5">
                    <span>Consecutive Losses:</span>
                    <span className="font-mono text-amber-400 font-bold">{lossStreaks} trades</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={lossStreaks}
                    onChange={(e) => setLossStreaks(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer bg-slate-800 rounded-lg h-2"
                  />
                </div>
              </div>

              {/* Math Output Display (6 cols) */}
              <div className="md:col-span-6 grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block">REMAINING BALANCE</span>
                  <span className="text-base font-mono font-bold text-white tabular-nums mt-1 block">
                    ${simulation.finalBalance}
                  </span>
                  <span className="text-[10px] text-slate-500">From $100 base</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block">TOTAL DRAWDOWN</span>
                  <span className={`text-base font-mono font-bold tabular-nums mt-1 block ${
                    Number(simulation.drawdown) > 20 ? 'text-rose-400' : 'text-amber-400'
                  }`}>
                    -{simulation.drawdown}%
                  </span>
                  <span className="text-[10px] text-slate-500">Loss of capital</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block">GAIN TO BREAK EVEN</span>
                  <span className="text-base font-mono font-bold text-teal-400 tabular-nums mt-1 block">
                    +{simulation.recoveryNeeded}%
                  </span>
                  <span className="text-[10px] text-slate-500">Required return</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>
                Key Takeaway: Keeping risk small (1–2%) guarantees that even a string of unavoidable losses leaves capital intact for recovery.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
