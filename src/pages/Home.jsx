import React from 'react';
import HeroSection from '../components/HeroSection';
import ImpactStats from '../components/ImpactStats';
import SectionHeading from '../components/SectionHeading';
import InitiativeCard from '../components/InitiativeCard';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import QuranSection from '../components/QuranSection';
import CancerSupportSection from '../components/CancerSupportSection';
import SadaqahSection from '../components/SadaqahSection';
import TestimonialSlider from '../components/TestimonialSlider';
import BankDetails from '../components/BankDetails';
import Button from '../components/Button';
import { featuredInitiatives, communityWorkList } from '../data/initiatives';
import { servicesData } from '../data/services';
import { CheckCircle2, Heart, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-0">
      
      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* SECTION 2 — FEATURED INITIATIVES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Programs"
            title="Featured Initiatives"
            subtitle="Transforming healthcare accessibility through direct grassroots projects and community partnerships."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInitiatives.map((initiative) => (
              <InitiativeCard key={initiative.id} initiative={initiative} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — IMPACT STATISTICS */}
      <ImpactStats />

      {/* SECTION 4 — QURANIC INSPIRATION */}
      <QuranSection />

      {/* SECTION 5 — OUR SERVICES */}
      <section className="py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Comprehensive Aid"
            title="Our Healthcare & Relief Services"
            subtitle="Bridging the gap between vulnerable patients and essential medical care across government healthcare institutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CANCER SUPPORT */}
      <CancerSupportSection />

      {/* SECTION 7 — SADAQAH / CHARITY */}
      <SadaqahSection />

      {/* SECTION 8 — OUR INITIATIVES (11 WORK ITEMS) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Grassroots Action"
            title="Our Community Interventions"
            subtitle="How First Aid Foundation makes a tangible difference every day in major hospitals and districts."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityWorkList.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft flex items-start gap-4 hover:border-blue-200 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 text-[#EB1F23] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FEATURED PROJECT (KHANDESH HOUSE) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Priority Infrastructure"
            title="Featured Project: Khandesh House"
            subtitle="Free stay facility in Mumbai for patient families visiting central government hospitals for long-term treatment."
          />

          <ProjectCard detailed={false} />
        </div>
      </section>

      {/* SECTION 12 — TESTIMONIALS */}
      <TestimonialSlider />

      {/* SECTION 9 — DONATION DETAILS */}
      <section className="py-20 bg-gradient-to-b from-blue-50/40 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Transparent Funding"
            title="Official Bank Account Details"
            subtitle="Every rupee contributed is accounted for and directed towards verified medical relief and patient support."
          />

          <div className="max-w-4xl mx-auto">
            <BankDetails />

            <div className="mt-8 text-center">
              <Button to="/donate" variant="primary" size="lg" icon={Heart}>
                Go to Full Donation Page
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
