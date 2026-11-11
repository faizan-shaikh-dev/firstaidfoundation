import { Link } from 'react-router-dom';
import {
  Heart,
  TreePine,
  Stethoscope,
  CheckCircle2,
  Camera,
  Building2,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  ACTIVITIES_PILLARS,
} from '../data/foundationContent';
import KhandeshHouseShowcase from '../components/KhandeshHouseShowcase';
import {
  ServicesGridSection,
  CancerSupportSection,
  CommunityInterventionsSection,
} from '../components/ServicesAndCancerSection';

export default function Activities() {
  return (
    <div className="space-y-0">
      <SEOHead
        title="Activities & Medical Relief Programs"
        description="Explore First Aid Foundation's medical relief activities: Emergency Intervention, Shelter & Food Aid, Government Scheme Guidance, Khandesh House Free Stay Facility, Tree Bank for Clean Air, and 9 free healthcare support services."
        canonicalPath="/activities"
      />

      {/* Page Hero */}
      <section className="bg-forest-950 text-white py-14 lg:py-22 relative overflow-hidden border-b border-forest-800">
        <div className="absolute inset-0 bg-editorial-dots pointer-events-none" />
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-700 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <Stethoscope className="w-3.5 h-3.5 text-coral-400" />
              <span>Our Activities & Humanitarian Relief Work</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ultimately, Your Support Empowers Lives
            </h1>
            <p className="text-base sm:text-xl text-forest-100 leading-relaxed">
              Medical emergencies, sudden accidents, and critical health challenges devastate
              low-income families financially and emotionally. Timely assistance, hospital guidance,
              free shelter, and medical relief restore dignity and life.
            </p>
            <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
              <Link
                to="/donate"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-sm shadow-coral-glow transition-all"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Support Medical Relief</span>
              </Link>
              <Link
                to="/activities/khandesh-house"
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white border border-forest-700 font-semibold text-sm transition-all"
              >
                <Building2 className="w-4 h-4 text-coral-400" />
                <span>Khandesh House Shelter</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Three Core Operational Pillars */}
      <section
        aria-labelledby="operational-pillars-heading"
        className="py-20 lg:py-24 bg-white border-b border-ivory-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <span>Immediate Response Framework</span>
            </span>
            <h2
              id="operational-pillars-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-navy-900"
            >
              Three Pillars of Hospital & Patient Support
            </h2>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              When a vulnerable family arrives at a major government hospital, our field team
              mobilizes across three critical dimensions simultaneously.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ACTIVITIES_PILLARS.map((pillar) => (
              <article
                key={pillar.id}
                className="bg-ivory rounded-3xl overflow-hidden border border-ivory-border shadow-editorial flex flex-col justify-between"
              >
                <div>
                  <figure className="relative h-52 overflow-hidden bg-forest-950">
                    <img
                      src={pillar.image}
                      alt={pillar.imageCaption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-2.5 left-3 right-3 text-[10px] text-ivory flex items-center gap-1">
                      <Camera className="w-3 h-3 text-coral-400 shrink-0" />
                      <span className="truncate">{pillar.imageCaption}</span>
                    </figcaption>
                  </figure>

                  <div className="p-6 sm:p-7 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-navy-900">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-navy-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-forest-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Free Humanitarian Relief</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Tree Bank for Clean Air Feature */}
      <section
        id="tree-bank"
        aria-labelledby="tree-bank-heading"
        className="py-20 lg:py-24 bg-forest-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-editorial-dots pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-800 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-forest-700">
                <TreePine className="w-3.5 h-3.5 text-coral-400" />
                <span>Environmental & Preventive Public Health</span>
              </div>

              <h2
                id="tree-bank-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Tree Bank for Clean Air:{' '}
                <span className="text-emerald-300 italic font-normal">
                  Breathing Life into Tomorrow
                </span>
              </h2>

              <p className="text-base sm:text-lg text-forest-100 leading-relaxed">
                Health begins with the air we breathe. In direct support of the{' '}
                <strong>National Clean Air Programme (NCAP)</strong> and Maharashtra’s{' '}
                <strong>Majhi Vasundhara 4.0</strong> campaign, First Aid Foundation actively drives
                large-scale urban and semi-urban sapling plantation drives. By restoring green cover,
                we combat chronic respiratory illnesses and enhance community longevity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-forest-950/80 border border-forest-800 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-coral-300 block">
                    National Clean Air Programme (NCAP)
                  </span>
                  <p className="text-xs text-forest-200">
                    Targeted reduction of particulate matter through strategic tree belts in industrial zones.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-forest-950/80 border border-forest-800 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block">
                    Majhi Vasundhara 4.0
                  </span>
                  <p className="text-xs text-forest-200">
                    Community mobilization for biodiversity protection, water conservation, and soil enrichment.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
                <Link
                  to="/donate"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-sm shadow-coral-glow transition-all"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Sponsor a Sapling Drive</span>
                </Link>
                <Link
                  to="/contact"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white border border-forest-600 font-semibold text-sm transition-all"
                >
                  <span>Join as Volunteer</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="rounded-3xl overflow-hidden border border-forest-700 shadow-editorial-lg bg-forest-950">
                <img
                  src="/images/tree-bank.jpg"
                  alt="Community sapling plantation drive under Majhi Vasundhara and National Clean Air Programme"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
                <figcaption className="p-3.5 bg-forest-950 text-forest-200 text-xs flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Camera className="w-3.5 h-3.5 text-coral-400 shrink-0" />
                    <span>Tree Bank Sapling Plantation Drive</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold text-emerald-300">
                    Clean Air
                  </span>
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </section>

      {/* 3. All 9 Healthcare & Relief Services Grid */}
      <ServicesGridSection />

      {/* 4. Cancer Support Initiative */}
      <CancerSupportSection />

      {/* 5. 11 Community Interventions */}
      <CommunityInterventionsSection />

      {/* 6. Khandesh House Project Showcase */}
      <section
        aria-labelledby="activities-khandesh-heading"
        className="py-20 lg:py-24 bg-ivory"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-50 text-coral-700 text-xs font-bold uppercase tracking-widest border border-coral-200">
                <span>Flagship Patient Shelter</span>
              </span>
              <h2
                id="activities-khandesh-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-navy-900"
              >
                Khandesh House Free Stay Facility in Mumbai
              </h2>
            </div>
            <p className="text-sm sm:text-base text-navy-700 max-w-xl leading-relaxed">
              Discover the full specifications of our 15-bed shelter project designed to protect outstation families from sleeping on footpaths outside Mumbai hospitals.
            </p>
          </div>

          <KhandeshHouseShowcase detailed={false} />
        </div>
      </section>

      {/* 7. Final Action Banner */}
      <section className="py-16 bg-forest-950 text-white border-t border-forest-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Support Our Medical Relief Initiatives Today
          </h2>
          <p className="text-forest-200 text-base max-w-2xl mx-auto leading-relaxed">
            Your contributions directly fund surgeries, cancer nutritional kits, and free patient lodging.
          </p>
          <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/donate"
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-base shadow-coral-glow transition-all"
            >
              <Heart className="w-5 h-5 fill-current" />
              <span>Donate Now</span>
            </Link>
            <Link
              to="/contact"
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-forest-900 hover:bg-forest-800 text-white border border-forest-700 font-semibold text-base transition-all"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
