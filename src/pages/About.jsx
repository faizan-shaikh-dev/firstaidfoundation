import { Link } from 'react-router-dom';
import {
  Heart,
  ShieldCheck,
  Target,
  Eye,
  Compass,
  Users,
  Sparkles,
  Camera,
  BookOpen,
  MapPin,
  CheckCircle2,
  Phone,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  BRAND_CONTENT,
  GROUND_IMPACTS,
} from '../data/foundationContent';
import { presidentProfile } from '../data/team';

export default function About() {
  return (
    <div className="space-y-0">
      <SEOHead
        title="About Us — Mission, Vision & Core Humanitarian Values"
        description="Learn about First Aid Foundation (Reg. No. F-16650/Jal), our mission, vision, grassroots hospital coordination approach, and core values of compassion, transparency, community collaboration, and sustainability."
        canonicalPath="/about"
      />

      {/* Page Hero */}
      <section className="bg-forest-950 text-white py-16 lg:py-22 relative overflow-hidden border-b border-forest-800">
        <div className="absolute inset-0 bg-editorial-dots pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-700 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-coral-400" />
              <span>Organization Overview • {BRAND_CONTENT.registrationNo}</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              About First Aid Foundation
            </h1>
            <p className="text-base sm:text-xl text-forest-100 leading-relaxed">
              Dedicated to building a healthier, more compassionate society through accessible
              medical support, hospital navigation, and emergency relief.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Organization Overview & Documentary Photography */}
      <section className="py-20 lg:py-24 bg-white border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
                <span>Who We Are</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
                Bridging Emergency Medical Needs with Life-Saving Care
              </h2>
              <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
                {BRAND_CONTENT.aboutOverview}
              </p>
              <p className="text-base text-navy-700 leading-relaxed">
                Headquartered in <strong>Jalgaon, Maharashtra</strong> ({BRAND_CONTENT.contact.address}),
                with active hospital liaison and patient support operations in{' '}
                <strong>Mumbai, Nagpur, and Aurangabad</strong>, First Aid Foundation stands beside
                families who travel far from home seeking critical care at premier public
                institutions such as JJ Hospital, Tata Memorial Hospital, and KEM Hospital.
              </p>

              <div className="p-5 rounded-2xl bg-ivory border border-ivory-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="First Aid Foundation Official Logo"
                    className="w-12 h-12 object-contain bg-white p-1 rounded-xl border border-ivory-border"
                  />
                  <div>
                    <span className="font-serif font-bold text-navy-900 block">
                      {BRAND_CONTENT.name}
                    </span>
                    <span className="text-xs text-teal-800 font-semibold">
                      {BRAND_CONTENT.registrationNo} • Jalgaon, Maharashtra
                    </span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-600 hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Visit Our Jalgaon Office →</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="rounded-3xl overflow-hidden border border-ivory-border shadow-editorial-lg bg-forest-950">
                <img
                  src="/images/hero-healthcare.jpg"
                  alt="Doctor and patient consultation supported by foundation"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
                <figcaption className="p-3.5 bg-forest-950 text-forest-200 text-xs flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Camera className="w-3.5 h-3.5 text-coral-400 shrink-0" />
                    <span>Hospital Bedside Coordination</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold text-emerald-300">
                    Jalgaon & Mumbai
                  </span>
                </figcaption>
              </figure>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mission, Vision, and Ground Approach */}
      <section className="py-20 lg:py-24 bg-ivory border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <span>Organizational Foundation</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Mission, Vision & Ground Approach
            </h2>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              Our framework ensures that compassion is matched with practical, efficient on-ground execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-ivory-border shadow-editorial space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-coral-50 border border-coral-200 text-coral-600 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  Our Mission
                </h3>
                <p className="text-sm text-navy-700 leading-relaxed">
                  {BRAND_CONTENT.missionDetailed}
                </p>
              </div>
              <div className="pt-4 border-t border-ivory-border text-xs font-bold text-coral-700">
                Action-Oriented Relief
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-ivory-border shadow-editorial space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  Our Vision
                </h3>
                <p className="text-sm text-navy-700 leading-relaxed">
                  {BRAND_CONTENT.visionDetailed}
                </p>
              </div>
              <div className="pt-4 border-t border-ivory-border text-xs font-bold text-teal-800">
                Universal Health Equity
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-ivory-border shadow-editorial space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-forest-50 border border-forest-200 text-forest-800 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-900">
                  Ground Approach
                </h3>
                <p className="text-sm text-navy-700 leading-relaxed">
                  {BRAND_CONTENT.approachDetailed}
                </p>
              </div>
              <div className="pt-4 border-t border-ivory-border text-xs font-bold text-forest-800">
                Zero Intermediary Leakage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 Core Values: Compassion, Transparency, Community Collaboration, Sustainability */}
      <section className="py-20 lg:py-24 bg-white border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <Sparkles className="w-3.5 h-3.5 text-coral-600" />
              <span>Ethical Pillars</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Our Four Core Principles
            </h2>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              Every decision, initiative, and expenditure at First Aid Foundation is governed by four immutable values.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_CONTENT.coreValues.map((val, idx) => (
              <div
                key={val.id}
                className="p-6 rounded-2xl bg-ivory border border-ivory-border hover:border-forest-400 transition-all space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-coral-600 block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Scriptural Inspiration (Quran 5:32 & 5:2) */}
      <section className="py-20 bg-teal-950 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <BookOpen className="w-8 h-8 text-emerald-300 mx-auto" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Guiding Ethos & Universal Humanitarian Duty
            </h2>
            <p className="text-teal-200 text-sm sm:text-base leading-relaxed">
              We draw inspiration from universal principles that teach that serving humanity is the highest form of virtue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BRAND_CONTENT.quranicReferences.map((ref) => (
              <blockquote
                key={ref.id}
                className="bg-teal-900/60 rounded-3xl p-8 border border-teal-800 shadow-editorial-lg flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-teal-950 text-emerald-300 text-xs font-bold uppercase tracking-wider inline-block">
                    {ref.principle}
                  </span>
                  <p className="font-serif text-2xl font-normal italic text-white leading-snug">
                    “{ref.quote}”
                  </p>
                  <p className="text-xs sm:text-sm text-teal-200 leading-relaxed">
                    {ref.context}
                  </p>
                </div>
                <footer className="pt-3 border-t border-teal-800/80 font-serif font-bold text-coral-300 text-sm">
                  — {ref.reference}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Founding Leadership Profile */}
      <section className="py-20 lg:py-24 bg-white border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-forest-900/10 shadow-editorial-lg bg-forest-950">
                  <img
                    src={presidentProfile.image}
                    alt={presidentProfile.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-coral-600 text-white px-3.5 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Founder & President</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
                <Sparkles className="w-3.5 h-3.5 text-coral-600" />
                <span>Founding Leadership</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
                Led by Shakil Ahmed (Shakeel Hannan)
              </h2>

              <p className="font-serif text-lg italic text-forest-800 leading-relaxed">
                "{presidentProfile.quote}"
              </p>

              <div className="space-y-2 pt-2">
                {presidentProfile.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <a
                  href={`tel:${presidentProfile.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest-900 text-white hover:bg-forest-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-coral-400" />
                  <span>Call President: {presidentProfile.phone}</span>
                </a>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-ivory text-navy-900 border border-ivory-border hover:bg-ivory-warm transition-colors"
                >
                  <Users className="w-3.5 h-3.5 text-coral-600" />
                  <span>Meet Full Board of Trustees →</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Real Relief Work Gallery */}
      <section className="py-20 lg:py-24 bg-ivory border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <Camera className="w-3.5 h-3.5 text-coral-600" />
              <span>Verifiable Field History</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Grassroots Welfare Milestones
            </h2>
            <p className="text-base text-navy-700 leading-relaxed">
              Every initiative documented below reflects real, verified assistance provided on the ground across hospitals and districts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GROUND_IMPACTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-ivory-border shadow-editorial hover:shadow-editorial-lg transition-all flex flex-col"
              >
                <div className="h-52 overflow-hidden relative bg-forest-950">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-coral-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <h4 className="font-serif font-bold text-base text-navy-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-navy-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Support CTA */}
      <section className="py-16 bg-forest-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Join Our Mission of Mercy & Healing
          </h2>
          <p className="text-forest-200 text-base max-w-2xl mx-auto leading-relaxed">
            Whether through financial donations, medical sponsorship, or grassroots volunteering, your support changes lives.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-base shadow-coral-glow transition-all"
            >
              <Heart className="w-5 h-5 fill-current" />
              <span>Donate Now</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-forest-900 hover:bg-forest-800 text-white border border-forest-700 font-semibold text-base transition-all"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
