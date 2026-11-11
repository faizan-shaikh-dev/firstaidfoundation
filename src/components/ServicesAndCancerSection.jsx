import { Link } from 'react-router-dom';
import {
  HeartHandshake,
  Pill,
  Activity,
  Cross,
  Utensils,
  Stethoscope,
  ShieldAlert,
  Truck,
  BadgeIndianRupee,
  Shirt,
  GlassWater,
  PackageCheck,
  Accessibility,
  Footprints,
  BedDouble,
  Heart,
  CheckCircle2,
  Camera,
  Quote,
  ShieldCheck,
} from 'lucide-react';
import {
  MEDICAL_SERVICES,
  CANCER_SUPPORT_PACKAGE,
  COMMUNITY_INTERVENTIONS,
  TESTIMONIALS,
} from '../data/foundationContent';

const serviceIconMap = {
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Pill: <Pill className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Cross: <Cross className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  BadgeIndianRupee: <BadgeIndianRupee className="w-6 h-6" />,
};

const cancerIconMap = {
  Pill: <Pill className="w-5 h-5" />,
  Shirt: <Shirt className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  GlassWater: <GlassWater className="w-5 h-5" />,
  PackageCheck: <PackageCheck className="w-5 h-5" />,
  Accessibility: <Accessibility className="w-5 h-5" />,
  Footprints: <Footprints className="w-5 h-5" />,
  BedDouble: <BedDouble className="w-5 h-5" />,
};

export function ServicesGridSection() {
  return (
    <section
      id="services-grid"
      aria-labelledby="services-grid-heading"
      className="py-16 sm:py-20 lg:py-24 bg-ivory relative"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <span>9 Core Humanitarian Services</span>
            </span>
            <h2
              id="services-grid-heading"
              className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
            >
              Healthcare & Patient Relief Services
            </h2>
          </div>
          <p className="text-navy-700 text-sm sm:text-lg max-w-xl leading-relaxed">
            Bridging the gap between vulnerable patients and essential medical care across
            government healthcare institutions—provided free of cost to eligible families.
          </p>
        </div>

        {/* 9 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {MEDICAL_SERVICES.map((service) => {
            const accentStyles =
              service.accent === 'coral'
                ? 'border-t-coral-600 group-hover:bg-coral-600 text-coral-700 bg-coral-50'
                : service.accent === 'teal'
                ? 'border-t-teal-700 group-hover:bg-teal-800 text-teal-800 bg-teal-50'
                : 'border-t-forest-800 group-hover:bg-forest-900 text-forest-800 bg-forest-50';

            const topBorderColor =
              service.accent === 'coral'
                ? 'bg-coral-600'
                : service.accent === 'teal'
                ? 'bg-teal-700'
                : 'bg-forest-800';

            return (
              <article
                key={service.id}
                className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-ivory-border shadow-editorial hover:shadow-editorial-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${topBorderColor}`} />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-colors duration-200 group-hover:text-white ${accentStyles}`}
                    >
                      {serviceIconMap[service.iconName] || <Activity className="w-5 h-5 sm:w-6 sm:h-6" />}
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[11px] sm:text-xs font-bold text-navy-400 block">
                        SERVICE {service.number}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-teal-800">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-900 mb-2 group-hover:text-forest-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">{service.description}</p>
                </div>

                <div className="pt-4 sm:pt-5 mt-5 sm:mt-6 border-t border-ivory-border flex items-center justify-between text-xs font-semibold text-forest-900">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct Patient Aid</span>
                  </span>
                  <Link
                    to="/donate"
                    className="text-coral-600 hover:underline font-bold"
                    aria-label={`Support ${service.title}`}
                  >
                    Sponsor →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CancerSupportSection() {
  return (
    <section
      id="cancer-support"
      aria-labelledby="cancer-support-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white border-y border-ivory-border"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-50 border border-coral-200 text-coral-700 text-xs font-bold uppercase tracking-widest">
              <Activity className="w-3.5 h-3.5" />
              <span>Specialized Oncology Care Program</span>
            </div>

            <h2
              id="cancer-support-heading"
              className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
            >
              Cancer Support Initiative:{' '}
              <span className="text-forest-800 italic font-normal">
                “Cancer Is Not an Incurable Disease”
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-navy-700 leading-relaxed">
              With timely medical intervention, proper high-protein nutrition, procedural guidance,
              and compassionate emotional support, fighting cancer is possible. First Aid Foundation
              equips underprivileged oncology patients and their caregivers at government hospitals
              with comprehensive 8-part care packages and reusable home-recovery equipment.
            </p>

            <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
              <Link
                to="/donate"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-sm shadow-coral-glow transition-all"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Sponsor a Cancer Care Package</span>
              </Link>
              <Link
                to="/contact"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-ivory hover:bg-ivory-warm text-forest-900 border border-ivory-border font-bold text-sm transition-all"
              >
                <span>Request Oncology Guidance</span>
              </Link>
            </div>
          </div>

          {/* Right Documentary Image */}
          <div className="lg:col-span-5">
            <figure className="relative rounded-2xl overflow-hidden border border-ivory-border shadow-editorial-lg bg-forest-950">
              <img
                src="/images/cancer-care.jpg"
                alt="Documentary photograph of healthcare coordinator providing nutritional and medicine care kit to a patient caregiver"
                className="w-full h-72 sm:h-80 object-cover"
                loading="lazy"
              />
              <figcaption className="p-3.5 bg-forest-950 text-forest-100 text-xs flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Camera className="w-3.5 h-3.5 text-coral-400 shrink-0" />
                  <span>Oncology Patient Care Kit Distribution</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-bold">
                  Free Aid
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 8-Item Care Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CANCER_SUPPORT_PACKAGE.map((item, idx) => (
            <div
              key={item.id}
              className="p-4 sm:p-6 rounded-2xl bg-ivory border border-ivory-border hover:border-forest-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-ivory-border text-coral-600 flex items-center justify-center shadow-2xs">
                    {cancerIconMap[item.iconName] || <Pill className="w-5 h-5" />}
                  </div>
                  <span className="font-mono text-xs font-bold text-navy-400">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-navy-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommunityInterventionsSection() {
  return (
    <section
      aria-labelledby="interventions-heading"
      className="py-16 sm:py-20 lg:py-24 bg-ivory-warm border-b border-ivory-border"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/10 text-teal-900 text-xs font-bold uppercase tracking-widest border border-teal-800/20">
            <span>11 Grassroots Action Pillars</span>
          </span>
          <h2
            id="interventions-heading"
            className="font-serif text-2xl sm:text-4xl font-bold text-navy-900"
          >
            How Our Community Interventions Work on the Ground
          </h2>
          <p className="text-sm sm:text-lg text-navy-700 leading-relaxed">
            Every day across Mumbai, Jalgaon, Nagpur, and Aurangabad, First Aid Foundation executes
            eleven coordinated interventions to ensure no patient is abandoned due to poverty.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {COMMUNITY_INTERVENTIONS.map((intervention, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            return (
              <li
                key={num}
                className="bg-white rounded-2xl p-4 sm:p-6 border border-ivory-border shadow-editorial flex items-start gap-3 sm:gap-4 hover:border-forest-400 transition-colors"
              >
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-forest-900 text-white font-mono text-xs sm:text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {num}
                </span>
                <p className="text-xs sm:text-sm text-navy-800 leading-relaxed font-medium">
                  {intervention}
                </p>
              </li>
            );
          })}

          {/* 12th Card: Direct Action CTA */}
          <li className="bg-forest-900 text-white rounded-2xl p-4 sm:p-6 border border-forest-800 shadow-editorial flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-300">
                Partner With Us
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                Help Us Expand Grassroots Medical Reach
              </h3>
              <p className="text-xs text-forest-100 leading-relaxed">
                Your contribution directly sustains hospital coordinators, medicine distribution,
                and surgical equipment support.
              </p>
            </div>
            <div className="pt-4">
              <Link
                to="/donate"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white text-xs font-bold transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Support Our Interventions</span>
              </Link>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-ivory-border"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
            <Quote className="w-3.5 h-3.5 text-coral-600" />
            <span>Voices of Hope & Dignity</span>
          </span>
          <h2
            id="testimonials-heading"
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-navy-900"
          >
            Beneficiary Testimonials
          </h2>
          <p className="text-sm sm:text-lg text-navy-700 leading-relaxed">
            Real experiences from families and patients who received emergency treatment,
            shelter, and medicine assistance during their most challenging hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-ivory rounded-3xl p-5 sm:p-7 border border-ivory-border shadow-editorial flex flex-col justify-between hover:shadow-editorial-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-coral-500/40" />
                <p className="text-xs sm:text-base text-navy-800 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-ivory-border flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-navy-900 text-sm sm:text-base">
                    {t.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-navy-600">
                    {t.role} • {t.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
