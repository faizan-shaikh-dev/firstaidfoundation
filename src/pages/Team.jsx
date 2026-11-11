import { Link } from 'react-router-dom';
import {
  Users,
  ShieldCheck,
  Phone,
  Mail,
  Heart,
  CheckCircle2,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { presidentProfile, teamMembersData, teamDescription } from '../data/team';

export default function Team() {
  const trustees = teamMembersData.filter((m) => m.id !== 1);

  const committeeMembers = [
    {
      id: 'vol-1',
      name: 'Mumbai Hospital Patient Intake Coordinator',
      role: 'Hospital Operations Liaison',
      focus: 'Bedside intake at Sir J.J. Hospital, Tata Memorial & KEM Hospital',
      location: 'Mumbai Corridor',
    },
    {
      id: 'vol-2',
      name: 'Khandesh House Shelter Supervisor',
      role: 'Shelter & Logistics Coordinator',
      focus: 'Patient family bed allotment, sanitation supervision & daily nutrition',
      location: 'Mumbai Shelter',
    },
    {
      id: 'vol-3',
      name: 'District Medicine Aid Coordinator',
      role: 'Pharmaceutical Aid Liaison',
      focus: 'Distributing critical medicines across Jalgaon, Nagpur & Aurangabad',
      location: 'Jalgaon HQ',
    },
    {
      id: 'vol-4',
      name: 'Environmental Clean Air Project Lead',
      role: 'Tree Bank Community Lead',
      focus: 'Driving tree sapling drives under NCAP & Majhi Vasundhara 4.0',
      location: 'Maharashtra Region',
    },
  ];

  return (
    <div className="space-y-0">
      <SEOHead
        title="Our Team — Leadership, Trustees & Healthcare Coordinators"
        description="Meet the dedicated leadership of First Aid Foundation led by Founder & President Shakil Ahmed (Shakeel Hannan), alongside our Board of Trustees and grassroots hospital coordinators across Jalgaon and Mumbai."
        canonicalPath="/team"
      />

      {/* Page Hero */}
      <section className="bg-forest-950 text-white py-16 lg:py-22 relative overflow-hidden border-b border-forest-800">
        <div className="absolute inset-0 bg-editorial-dots pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-700 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <Users className="w-3.5 h-3.5 text-coral-400" />
              <span>Dedicated Leadership & Trust Governance</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {teamDescription.headline}
            </h1>
            <p className="text-base sm:text-xl text-forest-100 leading-relaxed">
              {teamDescription.paragraphs[0]}
            </p>
          </div>
        </div>
      </section>

      {/* 1. Founder & President Spotlight Card */}
      <section className="py-20 lg:py-24 bg-white border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <Sparkles className="w-3.5 h-3.5 text-coral-600" />
              <span>Founding Vision</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Foundation President
            </h2>
          </div>

          <div className="bg-ivory rounded-3xl p-8 sm:p-12 border border-ivory-border shadow-editorial-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative">
                  <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-forest-950">
                    <img
                      src={presidentProfile.image}
                      alt={presidentProfile.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-coral-600 text-white px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-md flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Founder & President</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                    Chief Humanitarian Officer & Founder
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 mt-1">
                    {presidentProfile.name}
                  </h3>
                  <span className="text-xs text-navy-600 font-semibold block mt-1">
                    {presidentProfile.location} • Reg. No. F-16650/Jal
                  </span>
                </div>

                <blockquote className="p-4 rounded-2xl bg-white border-l-4 border-coral-600 shadow-2xs font-serif italic text-navy-800 text-base leading-relaxed">
                  "{presidentProfile.quote}"
                </blockquote>

                <div className="space-y-2 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest-900 block">
                    Key Leadership Contributions:
                  </span>
                  {presidentProfile.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-ivory-border flex flex-wrap items-center gap-4 text-xs font-semibold">
                  <a
                    href={`tel:${presidentProfile.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-coral-600 hover:bg-coral-700 text-white transition-colors shadow-coral-glow"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Direct Helpline: {presidentProfile.phone}</span>
                  </a>
                  <a
                    href={`mailto:${presidentProfile.email}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-navy-900 border border-ivory-border hover:bg-ivory-warm transition-colors"
                  >
                    <Mail className="w-4 h-4 text-coral-600" />
                    <span>{presidentProfile.email}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Board of Trustees */}
      <section className="py-20 lg:py-24 bg-ivory border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <ShieldCheck className="w-3.5 h-3.5 text-coral-600" />
              <span>Trust Governance</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Board of Trustees & Operations Leads
            </h2>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              Our trustees supervise hospital admissions, relief fund distributions, and medicine procurement to maintain zero administrative leakage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustees.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-ivory-border shadow-editorial hover:shadow-editorial-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-forest-50 border border-forest-200 text-forest-800 flex items-center justify-center font-serif text-xl font-bold">
                    {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-coral-600 bg-coral-50 px-2 py-0.5 rounded-full inline-block mb-1.5 border border-coral-200">
                      {member.badge}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-navy-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-teal-800 mt-0.5">
                      {member.designation}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-ivory-border">
                  <a
                    href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest-900 hover:text-coral-600 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-coral-600" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Operational & Field Committee */}
      <section className="py-20 lg:py-24 bg-white border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <UserCheck className="w-3.5 h-3.5 text-coral-600" />
              <span>Ground Field Force</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Active Hospital & Community Coordinators
            </h2>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              Serving round the clock at hospital bedside, community food distribution, and clean air planting drives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {committeeMembers.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-ivory border border-ivory-border shadow-editorial flex flex-col justify-between space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy-900">
                      {item.name}
                    </h3>
                    <span className="text-xs font-bold text-forest-800 uppercase tracking-wider block mt-0.5">
                      {item.role}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200 shrink-0">
                    {item.location}
                  </span>
                </div>
                <p className="text-xs text-navy-700 leading-relaxed">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Volunteer CTA */}
      <section className="py-20 bg-forest-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900 border border-forest-700 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 text-coral-400 fill-current" />
            <span>Join Our Volunteer Network</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            Want to Serve as a Hospital Volunteer?
          </h2>

          <p className="text-forest-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We are always looking for compassionate individuals in Mumbai, Jalgaon, and surrounding districts to guide arriving patients, distribute daily nutrition, or coordinate medicine aid.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-base shadow-coral-glow transition-all"
            >
              <span>Apply as a Volunteer</span>
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-forest-900 hover:bg-forest-800 text-white border border-forest-700 font-semibold text-base transition-all"
            >
              <Heart className="w-4 h-4 fill-current text-coral-400" />
              <span>Support Our Field Staff</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
