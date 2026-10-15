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
import { CheckCircle2, Heart, ArrowRight, ShieldCheck, Award, Phone, MapPin, Sparkles } from 'lucide-react';
import { presidentProfile } from '../data/team';

export default function Home() {
  const groundImpacts = [
    {
      img: '/images/img11.jpeg',
      title: 'Free Diagnostic & Medical Camp',
      tag: 'Medical Relief',
      desc: 'Free checkups, doctor consultations, and vital tests provided to underprivileged patients.'
    },
    {
      img: '/images/img16.jpeg',
      title: 'Bedside Surgical & ICU Assistance',
      tag: 'Hospital Relief',
      desc: 'Direct hospital visits ensuring emergency medicines and surgical supplies reach patients.'
    },
    {
      img: '/images/img24.jpeg',
      title: 'NGO Leadership & Healthcare Advocacy',
      tag: 'Leadership',
      desc: 'President Shakil Ahmed presenting healthcare accessibility initiatives at State NGO conferences.'
    },
    {
      img: '/images/award2.jpeg',
      title: 'Pallavi Blood Centre Certificate of Honour',
      tag: 'Recognition',
      desc: 'Honored for voluntary blood donation drives and emergency patient support in Mumbai.'
    },
    {
      img: '/images/img9.jpeg',
      title: 'Tree Plantation for Clean Air',
      tag: 'Environment',
      desc: 'Tree plantation drives under Majhi Vasundhara and National Clean Air Programme.'
    },
    {
      img: '/images/img26.jpeg',
      title: 'National Health Mission Collaboration',
      tag: 'Public Health',
      desc: 'Joining hands with health department officers for tobacco awareness & community welfare.'
    }
  ];

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

      {/* FOUNDER & PRESIDENT LEADERSHIP STRIP */}
      <section className="py-16 bg-gradient-to-r from-[#0F3356] via-[#184E82] to-[#0A2540] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src={presidentProfile.image} 
                    alt={presidentProfile.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#EB1F23] text-white px-3.5 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Founder & President</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider border border-red-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Founding Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                Led by Shakil Ahmed (Shakeel Hannan)
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                "Every human life is precious. First Aid Foundation was born to ensure no patient is left without medicine, shelter, or food while fighting for their health in government hospitals."
              </p>
              
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs">
                <a 
                  href={`tel:${presidentProfile.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors border border-white/20"
                >
                  <Phone className="w-3.5 h-3.5 text-red-400" />
                  <span>Call: {presidentProfile.phone}</span>
                </a>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 text-blue-200 font-semibold border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Reg. No. F-16650/Jal (Bombay Public Trust Act 1950)</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

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

      {/* SECTION 7 — SADAQAH / CHARITY WITH REAL QR */}
      <SadaqahSection />

      {/* REAL ON-GROUND RELIEF GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Ground Reality"
            title="Real Relief Work in Pictures"
            subtitle="Explore real photos of our medical camps, hospital bedside relief, state awards, and community interventions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {groundImpacts.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="h-60 overflow-hidden relative bg-slate-100">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#EB1F23] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-[#184E82] group-hover:text-[#EB1F23] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/activities" variant="outline" size="lg" icon={ArrowRight}>
              View All Activities & Relief Works
            </Button>
          </div>
        </div>
      </section>

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
