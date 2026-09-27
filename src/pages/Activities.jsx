import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import InitiativeCard from '../components/InitiativeCard';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { servicesData } from '../data/services';
import { featuredInitiatives, communityWorkList } from '../data/initiatives';
import { Heart, Activity, ShieldCheck, HelpingHand } from 'lucide-react';

export default function Activities() {
  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        title="Ultimately, Your Support Empowers Lives"
        subtitle="Medical emergencies, sudden accidents, and critical health challenges destroy families financially and emotionally. Timely assistance, shelter, and medical relief restore dignity and life."
        badge="Our Activities & Relief Work"
      />

      {/* Intro Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-[#7xl] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-blue-50/70 border border-blue-100 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#184E82] text-white flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#184E82]">Emergency Intervention</h3>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Providing urgent surgery funds, ICU equipment, and emergency medicines to critical patients admitted in government hospitals.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-red-50/70 border border-red-100 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EB1F23] text-white flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#184E82]">Shelter & Food Aid</h3>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Arranging accommodation and daily meals for patient families who travel long distances to Mumbai for medical treatments.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-blue-50/70 border border-blue-100 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#184E82] text-white flex items-center justify-center">
                <HelpingHand className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#184E82]">Government Scheme Guidance</h3>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Guiding eligible families through government welfare schemes and NGO networks to secure 100% free healthcare.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Flagship Project Spotlight */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Flagship Shelter Initiative"
            title="Khandesh House Free Stay Facility"
            subtitle="Providing a dignified home away from home for families visiting Mumbai government hospitals."
          />

          <ProjectCard detailed={true} />
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Ongoing Programs"
            title="Major Foundation Initiatives"
            subtitle="Explore our key active projects across healthcare, environmental clean air, and hospital assistance."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInitiatives.map((initiative) => (
              <InitiativeCard key={initiative.id} initiative={initiative} />
            ))}
          </div>
        </div>
      </section>

      {/* All Healthcare Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Services Grid"
            title="Medical Relief & Support Services"
            subtitle="Available free of cost to eligible patients and families."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/donate" variant="primary" size="lg" icon={Heart}>
              Take My Contribution
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
