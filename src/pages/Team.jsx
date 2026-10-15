import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import TeamCard from '../components/TeamCard';
import Button from '../components/Button';
import { teamDescription, teamMembersData, presidentProfile } from '../data/team';
import { Heart, Users, ShieldCheck, Phone, Mail, Award, CheckCircle2, MapPin } from 'lucide-react';

export default function Team() {
  return (
    <div className="space-y-0">
      
      {/* Page Hero with AI Banner */}
      <PageHero
        title="Leadership & Dedicated Team"
        subtitle={teamDescription.paragraphs[0]}
        badge="First Aid Foundation Leadership"
        bgImage="/images/tree-bank-clean-air.jpg"
      />

      {/* FOUNDER & PRESIDENT SPOTLIGHT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-slate-900 via-[#0F3356] to-[#184E82] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-blue-900">
            
            {/* Ambient background glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              {/* Leader Photo Column */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative group">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl group-hover:border-red-500 transition-all duration-300">
                    <img 
                      src={presidentProfile.image} 
                      alt={presidentProfile.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-4 bg-[#EB1F23] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Founder & President</span>
                  </div>
                </div>

                <div className="mt-8 text-center space-y-2">
                  <h3 className="text-2xl font-extrabold text-white">{presidentProfile.name}</h3>
                  <p className="text-sm font-semibold text-red-300">{presidentProfile.title} — {presidentProfile.organization}</p>
                  
                  <div className="pt-2 flex flex-wrap justify-center gap-3 text-xs">
                    <a 
                      href={`tel:${presidentProfile.phone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-400" />
                      <span>{presidentProfile.phone}</span>
                    </a>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-slate-200 font-medium border border-white/20">
                      <MapPin className="w-3.5 h-3.5 text-blue-300" />
                      <span>{presidentProfile.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Leader Vision & Bio Column */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Founding Visionary</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Leading with Empathy, Action & Devotion
                </h2>

                <blockquote className="border-l-4 border-[#EB1F23] pl-4 italic text-base sm:text-lg text-slate-200 leading-relaxed bg-white/5 py-3 pr-4 rounded-r-xl">
                  "{presidentProfile.quote}"
                </blockquote>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Under the dedicated leadership of Shakil Ahmed (Shakeel Hannan), First Aid Foundation has grown from a localized humanitarian effort in Jalgaon into an essential lifeline for hundreds of patients traveling to Mumbai for major surgeries, cancer therapy, and critical treatments.
                </p>

                {/* Key Achievements */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold text-red-300 uppercase tracking-wider">Key Pillars of Action</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                    {presidentProfile.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Board of Trustees Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Trustees & Coordinators"
            title="Board of Trustees & Operations Team"
            subtitle="Working tirelessly on the ground to assist admitted patients, verify genuine cases, and distribute relief."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembersData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button to="/donate" variant="primary" size="lg" icon={Heart}>
              Support Our Medical Team
            </Button>
          </div>

        </div>
      </section>

      {/* Ground Leadership in Action Visuals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership In Action"
            title="Field Work & Public Forums"
            subtitle="Authentic moments of our leadership engaging with hospitals, conferences, and community welfare programs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-soft group border border-slate-100 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/img24.jpeg" 
                  alt="Shakil Ahmed address at NGO Conference 2025" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#EB1F23] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                  Keynote Speech
                </span>
              </div>
              <div className="p-4 bg-slate-50 flex-1">
                <h4 className="font-bold text-[#184E82] text-sm">NGO Conference 2025</h4>
                <p className="text-xs text-[#5F5F5F] mt-1">
                  President Shakil Ahmed addressing leadership delegates on patient welfare & healthcare access.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-soft group border border-slate-100 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/img22.jpeg" 
                  alt="State Level NGO Conference Mumbai" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-[#184E82] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                  State Forum
                </span>
              </div>
              <div className="p-4 bg-slate-50 flex-1">
                <h4 className="font-bold text-[#184E82] text-sm">Maharashtra NGO Forum</h4>
                <p className="text-xs text-[#5F5F5F] mt-1">
                  Engaging with healthcare policymakers and media in Byculla, Mumbai for healthcare advocacy.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-soft group border border-slate-100 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/img18.jpeg" 
                  alt="Bedside patient examination" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                  Hospital Bedside
                </span>
              </div>
              <div className="p-4 bg-slate-50 flex-1">
                <h4 className="font-bold text-[#184E82] text-sm">Direct Bedside Assistance</h4>
                <p className="text-xs text-[#5F5F5F] mt-1">
                  Personally examining and counseling admitted patients needing surgical and post-operative care.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
