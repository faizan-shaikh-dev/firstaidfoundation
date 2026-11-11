import { Link } from 'react-router-dom';
import {
  Building2,
  Heart,
  ArrowLeft,
  Info,
  Camera,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { KHANDESH_HOUSE_DETAILS } from '../data/foundationContent';
import { BankTransferCard, UpiQrCard } from '../components/DonationWidgets';

export default function KhandeshHouse() {
  const sponsorshipTiers = [
    {
      id: 'bed',
      title: 'Sponsor a Dedicated Patient Bed',
      target: '₹50,000',
      description:
        'Sponsors one complete hospital bed setup with medical-grade mattress, fresh linens, pillow set, and patient locker at Khandesh House.',
      badge: 'High Impact',
    },
    {
      id: 'meals',
      title: 'Sponsor 1 Month of Community Meals',
      target: '₹25,000',
      description:
        'Covers wholesome, hygienic, doctor-recommended daily meals for 15 recovering patients and attendants in our community kitchen.',
      badge: 'Nutritional Aid',
    },
    {
      id: 'sanitation',
      title: 'Sponsor Patient Sanitation & Bathroom Fitting',
      target: '₹75,000',
      description:
        'Funds anti-slip flooring, handicap-accessible hygiene grab bars, and continuous water heaters for recovering patients.',
      badge: 'Dignified Hygiene',
    },
    {
      id: 'construction',
      title: 'Sponsor Construction / Renovation Milestone',
      target: '₹1,00,000+',
      description:
        'Contributes directly to structural renovations, electrical rewiring, ventilation, and fire safety systems for the 2-storey facility.',
      badge: 'Permanent Asset',
    },
  ];

  return (
    <div className="space-y-0">
      <SEOHead
        title="Khandesh House — Free Shelter Project in Mumbai (₹30,00,000 Target)"
        description="Khandesh House is First Aid Foundation's flagship free stay facility project in Mumbai for hospital patients and their families. Estimated project target: ₹30,00,000 for a 2-storey, 15-bed shelter with 2 bathrooms and 1 community kitchen."
        canonicalPath="/activities/khandesh-house"
      />

      {/* Breadcrumb & Hero */}
      <section className="bg-forest-950 text-white py-14 lg:py-20 relative overflow-hidden border-b border-forest-800">
        <div className="absolute inset-0 bg-editorial-dots pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Activities</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-600/20 border border-coral-500/40 text-coral-300 text-xs font-bold uppercase tracking-widest">
                <Building2 className="w-3.5 h-3.5" />
                <span>Flagship Infrastructure Project • Mumbai</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {KHANDESH_HOUSE_DETAILS.title}
              </h1>
              <p className="text-lg sm:text-2xl text-emerald-300 font-serif italic">
                {KHANDESH_HOUSE_DETAILS.subtitle}
              </p>
              <p className="text-base sm:text-lg text-forest-100 leading-relaxed max-w-2xl">
                {KHANDESH_HOUSE_DETAILS.purpose}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#sponsor-khandesh-house"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-sm sm:text-base shadow-coral-glow transition-all"
                >
                  <Heart className="w-5 h-5 fill-current" />
                  <span>Contribute to Project Target</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-forest-900 hover:bg-forest-800 text-white border border-forest-700 font-bold text-sm sm:text-base transition-all"
                >
                  <span>Inquire About Sponsorship</span>
                </Link>
              </div>
            </div>

            {/* Project Target Card */}
            <div className="lg:col-span-5">
              <div className="bg-forest-900/95 rounded-3xl p-6 sm:p-8 border border-forest-700 shadow-editorial-lg space-y-6">
                <div className="flex items-center justify-between border-b border-forest-800 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                    Project Funding Target
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30 text-[11px] font-bold">
                    Target Estimate
                  </span>
                </div>

                <div>
                  <span className="text-xs text-forest-200 block mb-1">
                    Estimated Total Project Cost:
                  </span>
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {KHANDESH_HOUSE_DETAILS.targetCostFormatted}
                  </div>
                  <span className="text-sm font-semibold text-coral-300 block mt-1">
                    {KHANDESH_HOUSE_DETAILS.targetCostWords}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-forest-950/80 border border-forest-800">
                    <span className="text-[10px] uppercase font-bold text-forest-300 block">
                      Target Capacity
                    </span>
                    <span className="font-serif text-lg font-bold text-white block mt-0.5">
                      15 Beds
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-forest-950/80 border border-forest-800">
                    <span className="text-[10px] uppercase font-bold text-forest-300 block">
                      Building Plan
                    </span>
                    <span className="font-serif text-lg font-bold text-white block mt-0.5">
                      2-Storey
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-forest-950/90 border border-forest-800 flex items-start gap-2.5 text-xs text-forest-200 leading-relaxed">
                  <Info className="w-4 h-4 text-coral-400 shrink-0 mt-0.5" />
                  <span>{KHANDESH_HOUSE_DETAILS.targetDisclaimer}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 1. Why Khandesh House Is Urgently Needed in Mumbai */}
      <section className="py-20 lg:py-24 bg-white border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <figure className="rounded-3xl overflow-hidden border border-ivory-border shadow-editorial-lg bg-forest-950">
                <img
                  src="/images/khandesh-shelter.jpg"
                  alt="Architectural representation of the proposed Khandesh House patient shelter in Mumbai"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
                <figcaption className="p-3.5 bg-forest-950 text-forest-200 text-xs flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Camera className="w-3.5 h-3.5 text-coral-400 shrink-0" />
                    <span>Proposed 15-Bed Facility Vision • Mumbai Hospital Corridor</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold text-emerald-300">
                    Permanent Relief
                  </span>
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-50 text-coral-700 text-xs font-bold uppercase tracking-widest border border-coral-200">
                <span>The Human Reality in Mumbai</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
                Why Khandesh House Is Desperately Needed
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-navy-700 leading-relaxed">
                {KHANDESH_HOUSE_DETAILS.whyNeededParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-ivory border border-ivory-border flex items-center gap-3">
                <MapPin className="w-5 h-5 text-coral-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-navy-800">
                  Target Proximity: Convenient transit to JJ Hospital, Tata Memorial Hospital & KEM Hospital.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Full Architectural Specifications & Blueprint */}
      <section className="py-20 lg:py-24 bg-ivory border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <span>Facility Blueprint & Standards</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Infrastructure Engineered for Infection Prevention & Comfort
            </h2>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              Every detail is planned in consultation with hospital social welfare officers to meet
              the unique hygiene, dietary, and psychological needs of recovering patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KHANDESH_HOUSE_DETAILS.specs.map((spec) => (
              <div
                key={spec.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-ivory-border shadow-editorial space-y-3 hover:border-forest-300 transition-colors"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                  {spec.label}
                </span>
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  {spec.value}
                </h3>
                <p className="text-sm text-navy-700 leading-relaxed">
                  {spec.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Direct Sponsorship Opportunities */}
      <section
        id="sponsor-khandesh-house"
        className="py-20 lg:py-24 bg-white border-b border-ivory-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-50 text-coral-700 text-xs font-bold uppercase tracking-widest border border-coral-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Target Sponsorship Tiers</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Sponsorship Pathways for Individuals, Families & Trusts
            </h2>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              Join hands with First Aid Foundation to turn this vision into physical shelter.
              Sponsors will be permanently acknowledged on the Khandesh House Founder’s Plaque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipTiers.map((tier) => (
              <div
                key={tier.id}
                className="bg-ivory rounded-3xl p-6 sm:p-7 border border-ivory-border shadow-editorial hover:shadow-editorial-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-forest-900 text-white text-[10px] font-bold uppercase tracking-wider">
                      {tier.badge}
                    </span>
                    <span className="font-serif text-xl font-bold text-coral-600 font-mono">
                      {tier.target}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-navy-900 leading-snug">
                    {tier.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-ivory-border">
                  <Link
                    to="/donate"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white text-xs font-bold transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>Sponsor This Area</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bank Transfer & Official UPI QR Code Widgets */}
      <section className="py-20 lg:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Project Remittance Channels</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Remit Contributions for Khandesh House
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              Kindly mention <strong>"Khandesh House Shelter Fund"</strong> in your transfer remarks
              or send your receipt screenshot to our helpline so your donation is tagged for shelter construction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7">
              <BankTransferCard />
            </div>
            <div className="lg:col-span-5">
              <UpiQrCard />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
