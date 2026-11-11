import {
  Users,
  Building,
  Home,
  Stethoscope,
  Clock,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { IMPACT_STATS } from '../data/foundationContent';

export default function ImpactStatsSection() {
  const iconMap = {
    patients: <Users className="w-6 h-6" />,
    collaborations: <Building className="w-6 h-6" />,
    sheltered: <Home className="w-6 h-6" />,
    services: <Stethoscope className="w-6 h-6" />,
  };

  return (
    <section
      aria-labelledby="impact-stats-heading"
      className="py-14 sm:py-16 lg:py-20 bg-forest-950 text-white relative overflow-hidden border-y border-forest-800"
    >
      <div className="absolute inset-0 bg-editorial-dots pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-forest-700 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Humanitarian Impact & Data Integrity</span>
            </div>
            <h2
              id="impact-stats-heading"
              className="font-serif text-2xl sm:text-4xl font-bold text-white"
            >
              Verified Humanitarian Footprint
            </h2>
            <p className="text-xs sm:text-base text-forest-200 leading-relaxed">
              In commitment to complete donor transparency, First Aid Foundation publishes only
              audited, verified relief figures. Metrics undergoing documentation review are clearly
              marked as being updated.
            </p>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {IMPACT_STATS.map((stat) => {
            const isVerifiedNumber =
              stat.verified && stat.value !== null && Number(stat.value) > 0;

            return (
              <div
                key={stat.id}
                className="bg-forest-900/90 backdrop-blur-xs rounded-2xl p-4 sm:p-6 lg:p-7 border border-forest-800 flex flex-col justify-between hover:border-forest-600 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-forest-800 text-emerald-300 flex items-center justify-center border border-forest-700">
                      {iconMap[stat.id] || <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6" />}
                    </div>

                    {isVerifiedNumber ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-700/70 text-emerald-300 text-[10px] sm:text-[11px] font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-600/60 text-amber-300 text-[10px] sm:text-[11px] font-medium">
                        <Clock className="w-3 h-3" />
                        <span>Audit in progress</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 mb-3">
                    {isVerifiedNumber ? (
                      <div className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
                        {stat.value}
                        <span className="text-coral-400 font-sans">{stat.suffix}</span>
                      </div>
                    ) : (
                      <div className="font-serif text-xl sm:text-3xl font-semibold text-forest-200 tracking-tight italic">
                        Data being updated
                      </div>
                    )}
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {stat.label}
                    </h3>
                  </div>

                  <p className="text-xs text-forest-200 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-forest-800/80 flex items-center justify-between text-[10px] sm:text-[11px] text-forest-400">
                  <span>Standard: Formal Audit</span>
                  <span className="text-emerald-400 font-medium">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
