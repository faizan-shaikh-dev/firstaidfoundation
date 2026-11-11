import { Link } from 'react-router-dom';
import {
  Heart,
  ArrowRight,
  HeartHandshake,
  Stethoscope,
  Users,
  BookOpen,
  CheckCircle2,
  Camera,
  Building2,
  Sparkles,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  BRAND_CONTENT,
  MAJOR_PROJECTS,
  GROUND_IMPACTS,
} from '../data/foundationContent';
import ImpactStatsSection from '../components/ImpactStatsSection';
import {
  ServicesGridSection,
  CancerSupportSection,
  CommunityInterventionsSection,
  TestimonialsSection,
} from '../components/ServicesAndCancerSection';
import KhandeshHouseShowcase from '../components/KhandeshHouseShowcase';
import { BankTransferCard, UpiQrCard } from '../components/DonationWidgets';
import { ARTICLES_DATA } from '../data/articles';

export default function Home() {
  return (
    <div className="space-y-0">
      <SEOHead
        title="Humanitarian Healthcare Foundation — Helping Grow Humanity"
        description="First Aid Foundation (Reg. No. F-16650/Jal) is a humanitarian healthcare organization in India providing emergency medical aid, free hospital stay at Khandesh House in Mumbai, cancer care packages, and essential medicines."
        canonicalPath="/"
      />

      {/* 1. Editorial Hero Section */}
      <section className="relative bg-ivory bg-editorial-grid pt-6 pb-14 sm:pt-14 sm:pb-24 border-b border-ivory-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Editorial Copy */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 gsap-hero-group">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 text-ivory text-xs sm:text-sm font-bold tracking-wide shadow-sm gsap-hero-item">
                <span className="w-2 h-2 rounded-full bg-coral-400 animate-pulse" />
                <span>{BRAND_CONTENT.organizationType}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-bold text-navy-900 tracking-tight leading-[1.08] gsap-hero-item">
                Helping Grow{' '}
                <span className="text-forest-800 underline decoration-coral-500/70 decoration-4 underline-offset-8">
                  Humanity
                </span>
              </h1>

              <p className="text-base sm:text-xl text-navy-700 leading-relaxed max-w-2xl font-normal gsap-hero-item">
                {BRAND_CONTENT.missionStatement}
              </p>

              {/* Primary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 gsap-hero-item">
                <Link
                  to="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-base shadow-coral-glow transition-all duration-200 active:scale-[0.99]"
                >
                  <Heart className="w-5 h-5 fill-current" />
                  <span>Donate Now</span>
                </Link>
                <Link
                  to="/activities"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-ivory-warm text-forest-900 border-2 border-forest-800/80 font-bold text-base transition-all duration-200"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-5 h-5 text-coral-600" />
                </Link>
              </div>

              {/* Three Quick Highlights: Direct Aid, Free Care, Community */}
              <div className="pt-6 border-t border-ivory-border grid grid-cols-1 sm:grid-cols-3 gap-4 gsap-hero-item">
                <div className="p-4 rounded-2xl bg-white border border-ivory-border shadow-2xs flex items-start gap-3 card-hover-editorial">
                  <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                      Direct Aid
                    </h2>
                    <p className="text-xs text-navy-600 mt-0.5 leading-snug">
                      Patient Relief & Hospital Navigation
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-ivory-border shadow-2xs flex items-start gap-3 card-hover-editorial">
                  <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                      Free Care
                    </h2>
                    <p className="text-xs text-navy-600 mt-0.5 leading-snug">
                      Medicines, Meals & Patient Stay
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-ivory-border shadow-2xs flex items-start gap-3 card-hover-editorial">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wide">
                      Community
                    </h2>
                    <p className="text-xs text-navy-600 mt-0.5 leading-snug">
                      Grassroots Welfare & Clean Air
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Documentary Frame + Featured Khandesh House Callout */}
            <div className="lg:col-span-5 space-y-4 gsap-hero-visual">
              <div className="bg-white p-3 sm:p-4 rounded-3xl border border-ivory-border shadow-editorial-lg space-y-4 card-hover-editorial">
                <figure className="relative rounded-2xl overflow-hidden bg-forest-950 gsap-photo-reveal">
                  <img
                    src="/images/hero-healthcare.jpg"
                    alt="Documentary photograph of physician and foundation volunteer reviewing treatment records with elderly patient"
                    className="w-full h-72 sm:h-80 object-cover object-center"
                    width={640}
                    height={440}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-forest-900/90 text-emerald-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs border border-forest-700">
                      Jalgaon & Mumbai Relief
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-navy-950/75 text-ivory text-[10px] font-medium inline-flex items-center gap-1 backdrop-blur-xs">
                      <Camera className="w-3 h-3 text-coral-400" />
                      <span>Documentary Photo</span>
                    </span>
                  </div>

                  <figcaption className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="font-serif text-base sm:text-lg font-bold leading-snug">
                      Standing Beside Underprivileged Families at Every Step of Hospital Care
                    </p>
                    <p className="text-xs text-ivory/85 mt-0.5">
                      Facilitating surgeries, medicines & government welfare access across major public hospitals.
                    </p>
                  </figcaption>
                </figure>

                {/* Flagship Khandesh House Quick Highlight Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-forest-900 text-white space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-coral-300">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Featured Flagship Project</span>
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-300">
                      Target: ₹30,00,000
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    Khandesh House Free Shelter, Mumbai
                  </h3>
                  <p className="text-xs text-forest-100 leading-relaxed">
                    A dedicated 2-storey, 15-bed stay facility with 2 bathrooms and a community
                    kitchen for outstation patients and families visiting Mumbai’s government hospitals.
                  </p>
                  <div className="pt-1 flex flex-wrap items-center justify-between gap-2">
                    <Link
                      to="/activities/khandesh-house"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white transition-colors"
                    >
                      <span>View Project Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/donate"
                      className="px-3 py-1.5 rounded-lg bg-coral-600 hover:bg-coral-700 text-white text-xs font-bold transition-colors"
                    >
                      Sponsor Shelter
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Major Initiatives Trio */}
      <section
        aria-labelledby="major-initiatives-heading"
        className="py-20 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 gsap-fade-up">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
                <span>Core Foundation Pillars</span>
              </span>
              <h2
                id="major-initiatives-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900"
              >
                Featured Humanitarian Initiatives
              </h2>
            </div>
            <p className="text-navy-700 text-base sm:text-lg max-w-xl leading-relaxed">
              Transforming healthcare accessibility, patient shelter, and environmental public
              health through sustained grassroots action.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gsap-card-group">
            {MAJOR_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="bg-ivory rounded-3xl overflow-hidden border border-ivory-border shadow-editorial hover:shadow-editorial-lg card-hover-editorial transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <figure className="relative h-56 overflow-hidden bg-forest-950">
                    <img
                      src={project.image}
                      alt={project.imageCaption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest-900/95 text-white text-[11px] font-bold uppercase tracking-wider">
                      {project.badge}
                    </span>
                    <figcaption className="absolute bottom-2.5 left-3 right-3 text-[10px] text-ivory/90 flex items-center gap-1">
                      <Camera className="w-3 h-3 text-coral-400 shrink-0" />
                      <span className="truncate">{project.imageCaption}</span>
                    </figcaption>
                  </figure>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                        {project.tagline}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-navy-900 mt-1 group-hover:text-forest-800 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-navy-700 leading-relaxed">{project.description}</p>

                    <ul className="space-y-2 pt-2 border-t border-ivory-border">
                      {project.highlights.map((hl) => (
                        <li
                          key={hl}
                          className="flex items-center gap-2 text-xs font-semibold text-navy-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2">
                  <Link
                    to={project.linkTo}
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white hover:bg-forest-900 text-forest-900 hover:text-white border border-ivory-border font-bold text-xs sm:text-sm transition-colors group/btn"
                  >
                    <span>{project.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 text-coral-600 group-hover/btn:text-coral-300 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Verified Impact Statistics */}
      <ImpactStatsSection />

      {/* 4. Guiding Values & Quranic References */}
      <section
        aria-labelledby="guiding-values-heading"
        className="py-20 lg:py-24 bg-teal-950 text-white relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3 gsap-fade-up">
            <div className="w-12 h-12 rounded-2xl bg-teal-900 border border-teal-700 text-emerald-300 flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-coral-300 block">
              Guiding Values & Universal Inspiration
            </span>
            <h2
              id="guiding-values-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Compassion in Action for Every Human Soul
            </h2>
            <p className="text-sm sm:text-base text-teal-100 leading-relaxed">
              Inspired by timeless principles of mercy and mutual aid, our healthcare services are
              extended unconditionally to all human beings in distress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gsap-card-group">
            {BRAND_CONTENT.quranicReferences.map((item) => (
              <blockquote
                key={item.id}
                className="bg-teal-900/70 backdrop-blur-xs rounded-3xl p-5 sm:p-8 lg:p-10 border border-teal-800 shadow-editorial-lg card-hover-editorial flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-950/80 border border-teal-700 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    {item.principle}
                  </span>
                  <p className="font-serif text-2xl sm:text-3xl font-normal italic text-white leading-snug">
                    “{item.quote}”
                  </p>
                  <p className="text-xs sm:text-sm text-teal-200 leading-relaxed">
                    {item.context}
                  </p>
                </div>

                <footer className="mt-6 pt-4 border-t border-teal-800/80 flex items-center justify-between">
                  <cite className="not-italic font-serif font-bold text-base text-coral-300">
                    — {item.reference}
                  </cite>
                  <span className="text-xs text-teal-300 font-medium">Foundational Ethos</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 9 Healthcare & Relief Services Grid */}
      <ServicesGridSection />

      {/* 6. Cancer Support Initiative with 8 Care-Package Details */}
      <CancerSupportSection />

      {/* 7. Sadaqah & Donation Explanation + Official UPI QR */}
      <section
        aria-labelledby="sadaqah-heading"
        className="py-20 lg:py-24 bg-ivory border-b border-ivory-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* Left Sadaqah & Humanitarian Giving Explanation */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-8 lg:p-10 border border-ivory-border shadow-editorial flex flex-col justify-between space-y-6 gsap-fade-up">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
                  <Sparkles className="w-3.5 h-3.5 text-coral-600" />
                  <span>Humanitarian Charity & Sadaqah</span>
                </div>

                <h2
                  id="sadaqah-heading"
                  className="font-serif text-2xl sm:text-4xl font-bold text-navy-900 leading-tight"
                >
                  Heal Yourself with Charity (Sadaqah)
                </h2>

                <p className="text-base text-navy-700 leading-relaxed">
                  Countless patients arriving at public hospitals face overwhelming financial
                  distress and lack of medical guidance when critical illnesses strike. When a
                  breadwinner falls ill, the entire family’s survival is threatened. Your Sadaqah
                  and humanitarian donations act as a direct shield of healing, nourishment, and
                  hope.
                </p>

                <div className="p-5 rounded-2xl bg-coral-50/70 border-l-4 border-coral-600 space-y-2">
                  <h3 className="text-sm font-bold text-navy-900">
                    100% Direct Utilization for Patient Welfare
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                    First Aid Foundation ensures that your contributions are transparently utilized
                    for direct patient care, emergency surgical supplies, free stay facilities, and
                    nutritional aid across government hospitals.
                  </p>
                </div>

                <ul className="space-y-3 pt-2">
                  {[
                    'Direct emergency surgical and ICU funds for hospital patients without resources',
                    'Sponsoring continuous free nutritious meals for admitted patients and families',
                    'Procuring reusable medical equipment (wheelchairs, water beds, walkers) for home care',
                    'Building permanent free patient lodging through the Khandesh House Shelter Project',
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm font-medium text-navy-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-ivory-border flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
                <Link
                  to="/donate"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-sm shadow-coral-glow transition-all"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Give Sadaqah / Donate Now</span>
                </Link>
                <span className="text-xs text-navy-600 font-medium inline-flex items-center justify-center gap-1.5 py-1">
                  <ShieldCheck className="w-4 h-4 text-forest-700" />
                  <span>Verified Foundation Account</span>
                </span>
              </div>
            </div>

            {/* Right UPI QR Section */}
            <div className="lg:col-span-5 gsap-fade-up">
              <UpiQrCard />
            </div>

          </div>
        </div>
      </section>

      {/* REAL ON-GROUND RELIEF GALLERY (Documentary Proof of Impact) */}
      <section className="py-20 lg:py-24 bg-white border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 gsap-fade-up">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
                <Camera className="w-3.5 h-3.5 text-coral-600" />
                <span>Ground Reality & Verification</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900">
                Real Relief Work in Pictures
              </h2>
            </div>
            <p className="text-navy-700 text-base sm:text-lg max-w-xl leading-relaxed">
              Photographic documentation of our medical camps, hospital bedside relief, state awards,
              and environmental welfare initiatives across Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gsap-card-group">
            {GROUND_IMPACTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-ivory rounded-3xl overflow-hidden border border-ivory-border shadow-editorial hover:shadow-editorial-lg card-hover-editorial transition-all duration-300 group flex flex-col"
              >
                <div className="h-60 overflow-hidden relative bg-forest-950">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-coral-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy-900 group-hover:text-forest-900 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-navy-600 leading-relaxed mt-1.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm transition-all"
            >
              <span>View All Activities & Relief Works</span>
              <ArrowRight className="w-4 h-4 text-coral-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Community Interventions Numbered List (11 Interventions) */}
      <CommunityInterventionsSection />

      {/* 9. Khandesh House Project Funding & Specifications */}
      <section
        aria-labelledby="home-khandesh-heading"
        className="py-20 lg:py-24 bg-ivory border-b border-ivory-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-50 text-coral-700 text-xs font-bold uppercase tracking-widest border border-coral-200">
                <span>Priority Infrastructure Target</span>
              </span>
              <h2
                id="home-khandesh-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-navy-900"
              >
                Khandesh House: Free Stay Facility in Mumbai
              </h2>
            </div>
            <p className="text-sm sm:text-base text-navy-700 max-w-xl leading-relaxed">
              Help us establish a permanent 2-storey, 15-bed patient family shelter near Mumbai’s
              major government hospitals so no patient sleeps on a footpath during treatment.
            </p>
          </div>

          <KhandeshHouseShowcase detailed={false} />
        </div>
      </section>

      {/* 10. Testimonials */}
      <TestimonialsSection />

      {/* Latest News & Articles Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 gsap-fade-up">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
                <BookOpen className="w-3.5 h-3.5 text-coral-600" />
                <span>Foundation Dispatches & News</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
                Latest Articles & Cultural Initiatives
              </h2>
            </div>
            <Link
              to="/articles"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-600 hover:text-coral-700 transition-colors uppercase tracking-wider"
            >
              <span>Explore All Articles ({ARTICLES_DATA.length}) →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 gsap-card-group">
            {ARTICLES_DATA.slice(0, 3).map((article) => (
              <article
                key={article.id}
                className="card-hover-editorial bg-ivory rounded-3xl overflow-hidden border border-ivory-border shadow-editorial flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
                    <img
                      src={article.coverImage}
                      alt={article.titleEn}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-forest-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {article.category}
                    </span>
                    <span className="absolute bottom-2.5 right-3 text-ivory text-[11px] font-semibold">
                      {article.dateDisplayEn}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2.5">
                    <h3 className="font-serif text-lg font-bold text-navy-900 leading-snug line-clamp-2">
                      {article.titleEn}
                    </h3>
                    <p className="text-xs text-navy-600 leading-relaxed line-clamp-2">
                      {article.summaryEn}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-ivory-border/70 mt-2">
                  <Link
                    to={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-coral-600 hover:text-coral-700 transition-colors"
                  >
                    <span>Read Full Story →</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Official Bank Details Card */}
      <section
        aria-labelledby="home-bank-heading"
        className="py-20 lg:py-24 bg-ivory"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <span>Transparent Financial Remittance</span>
            </span>
            <h2
              id="home-bank-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-navy-900"
            >
              Official Foundation Bank Account Details
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              Every rupee contributed is accounted for and directed toward verified medical relief,
              cancer support, and patient shelter.
            </p>
          </div>

          <BankTransferCard />
        </div>
      </section>

      {/* 12. Final Strong Call to Action */}
      <section className="py-20 bg-gradient-to-br from-forest-900 via-forest-950 to-teal-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-editorial-dots pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 gsap-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-white/15">
            <Heart className="w-3.5 h-3.5 fill-current text-coral-400" />
            <span>Every Contribution Protects a Life</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Be the Reason a Patient Receives Timely Treatment Today.
          </h2>
          <p className="text-base sm:text-lg text-forest-100 max-w-2xl mx-auto leading-relaxed">
            Whether you sponsor a cancer patient’s nutritional package, fund an emergency operation,
            or contribute toward a bed at Khandesh House in Mumbai, your generosity brings immediate
            relief.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-base shadow-coral-glow transition-all"
            >
              <Heart className="w-5 h-5 fill-current" />
              <span>Proceed to Donation Page</span>
            </Link>
            <a
              href={`tel:${BRAND_CONTENT.contact.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-base transition-all"
            >
              <Phone className="w-4 h-4 text-coral-400" />
              <span>Call Helpline: {BRAND_CONTENT.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
