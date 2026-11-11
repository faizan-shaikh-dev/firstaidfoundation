import { Link } from 'react-router-dom';
import {
  Building2,
  BedDouble,
  Bath,
  Utensils,
  Users,
  MapPin,
  Heart,
  ArrowRight,
  Info,
  Camera,
} from 'lucide-react';
import { KHANDESH_HOUSE_DETAILS } from '../data/foundationContent';

export default function KhandeshHouseShowcase({ detailed = false }) {
  const iconMap = {
    structure: <Building2 className="w-5 h-5 text-forest-800" />,
    capacity: <BedDouble className="w-5 h-5 text-coral-600" />,
    bathrooms: <Bath className="w-5 h-5 text-teal-800" />,
    kitchen: <Utensils className="w-5 h-5 text-coral-600" />,
    beneficiaries: <Users className="w-5 h-5 text-forest-800" />,
    location: <MapPin className="w-5 h-5 text-teal-800" />,
  };

  return (
    <div className="bg-white rounded-3xl border border-ivory-border shadow-editorial-lg overflow-hidden gsap-fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Visual & Target Column */}
        <div className="lg:col-span-5 bg-forest-950 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Documentary Shelter Photography */}
          <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden gsap-photo-reveal">
            <img
              src="/images/khandesh-shelter.jpg"
              alt="Illustrative architectural representation of the proposed 15-bed Khandesh House patient shelter in Mumbai"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/35 to-transparent" />

            <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full bg-coral-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                Flagship Shelter Project
              </span>
              <span className="px-2.5 py-1 rounded-md bg-navy-950/80 backdrop-blur-xs text-ivory text-[10px] font-medium inline-flex items-center gap-1 border border-white/15">
                <Camera className="w-3 h-3 text-coral-400" />
                <span>Illustrative Architectural Vision</span>
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 block">
                Mumbai Hospital Corridor Initiative
              </span>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-0.5">
                {KHANDESH_HOUSE_DETAILS.title} — Free Stay Facility
              </h3>
            </div>
          </div>

          {/* Target Funding Box */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between">
            <p className="text-sm text-forest-100 leading-relaxed">
              {KHANDESH_HOUSE_DETAILS.purpose}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-forest-900/90 border border-forest-700/80 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                  Estimated Project Funding Target
                </span>
                <span className="px-2 py-0.5 rounded bg-coral-600/30 text-coral-300 border border-coral-500/30 text-[10px] font-bold uppercase">
                  Project Target
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {KHANDESH_HOUSE_DETAILS.targetCostFormatted}
                </span>
                <span className="text-xs text-forest-200 font-medium break-words">
                  ({KHANDESH_HOUSE_DETAILS.targetCostWords})
                </span>
              </div>

              <div className="pt-2 border-t border-forest-800 flex items-start gap-2 text-[11px] text-forest-200 leading-normal">
                <Info className="w-3.5 h-3.5 text-coral-400 shrink-0 mt-0.5" />
                <span>{KHANDESH_HOUSE_DETAILS.targetDisclaimer}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Specifications & Narrative Column */}
        <div className="lg:col-span-7 p-4 sm:p-6 lg:p-10 flex flex-col justify-between bg-white">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-800 block mb-1">
                Planned Infrastructure & Capacity
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-navy-900">
                Built for Patient Recovery, Hygiene & Family Dignity
              </h4>
            </div>

            {/* 6 Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gsap-card-group">
              {KHANDESH_HOUSE_DETAILS.specs.map((spec) => (
                <div
                  key={spec.id}
                  className="p-4 rounded-2xl bg-ivory border border-ivory-border hover:border-forest-300 card-hover-editorial transition-colors flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-ivory-border flex items-center justify-center shrink-0 shadow-2xs">
                    {iconMap[spec.id]}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-navy-600 block">
                      {spec.label}
                    </span>
                    <span className="text-base font-bold text-navy-900 block mt-0.5">
                      {spec.value}
                    </span>
                    <p className="text-xs text-navy-600 mt-1 leading-relaxed">{spec.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-forest-50 border border-forest-200 text-xs text-forest-900 leading-relaxed">
              <strong>Humanitarian Purpose:</strong> {KHANDESH_HOUSE_DETAILS.note}
            </div>
          </div>

          <div className="pt-6 sm:pt-8 mt-6 border-t border-ivory-border">
            {!detailed ? (
              <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <Link
                  to="/activities/khandesh-house"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-forest-900 hover:text-coral-600 transition-colors"
                >
                  <span>Explore Full Khandesh House Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-coral-600 shrink-0" />
                </Link>
                <Link
                  to="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-sm shadow-coral-glow transition-all"
                >
                  <Heart className="w-4 h-4 fill-current shrink-0" />
                  <span>Sponsor Khandesh House</span>
                </Link>
              </div>
            ) : (
              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-navy-600">
                  Direct contributions are allocated toward Mumbai facility procurement & setup.
                </span>
                <Link
                  to="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-sm shadow-coral-glow transition-all"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Sponsor a Bed or Room Today</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
