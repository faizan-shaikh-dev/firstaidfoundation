import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import TeamCard from '../components/TeamCard';
import Button from '../components/Button';
import { teamDescription, teamMembersData } from '../data/team';
import { Heart, Users, ShieldCheck } from 'lucide-react';

export default function Team() {
  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        title="Our Dedicated Team"
        subtitle={teamDescription.paragraphs[0]}
        badge="Foundation Leadership & Volunteers"
      />

      {/* Mission Narrative Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#EB1F23] flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Users className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#184E82]">
            {teamDescription.headline}
          </h2>

          <div className="h-1.5 w-20 bg-[#EB1F23] rounded-full mx-auto" />

          <div className="space-y-4 text-base sm:text-lg text-[#5F5F5F] leading-relaxed max-w-3xl mx-auto font-normal">
            {teamDescription.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Team Cards Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Data-Driven Roster"
            title="Team Members & Coordinators"
            subtitle="Working relentlessly on the ground to assist admitted patients and their accompanying families."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembersData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-[#5F5F5F] italic mb-6">
              * Official names and photographs will be updated upon final verification.
            </p>
            <Button to="/donate" variant="primary" size="lg" icon={Heart}>
              Support Our Team & Work
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
