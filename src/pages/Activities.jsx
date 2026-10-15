import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import InitiativeCard from '../components/InitiativeCard';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { servicesData } from '../data/services';
import { featuredInitiatives } from '../data/initiatives';
import { Heart, Activity, ShieldCheck, HelpingHand, Camera, Sparkles } from 'lucide-react';

export default function Activities() {
  const fieldGallery = [
    {
      img: '/images/img11.jpeg',
      title: 'Free Medical Checkup & Blood Test Camp',
      category: 'Medical Camp',
      desc: 'Free health screening, diagnostic blood tests, and doctor consultations for underprivileged families.'
    },
    {
      img: '/images/img16.jpeg',
      title: 'Bedside Relief & Patient Counseling',
      category: 'Hospital Care',
      desc: 'Shakil Ahmed and team providing bedside encouragement, medicines, and surgical care funds.'
    },
    {
      img: '/images/img9.jpeg',
      title: 'Tree Plantation & Clean Air Campaign',
      category: 'Environmental Aid',
      desc: 'Planting fruit and shade trees across Jalgaon rural belts under the prophetic Hadith of continuous charity (Sadaqah Jariyah).'
    },
    {
      img: '/images/img26.jpeg',
      title: 'National Health Mission Collaboration',
      category: 'Public Health',
      desc: 'First Aid Foundation delegates collaborating with NHM Maharashtra officers in tobacco control and health education.'
    },
    {
      img: '/images/img17.jpeg',
      title: 'Patient Hospital Guidance',
      category: 'JJ Hospital Support',
      desc: 'Guiding admitted patients with brochures, legal scheme assistance, and free dietary support.'
    },
    {
      img: '/images/img10.jpeg',
      title: 'Community Education & Child Support',
      category: 'Social Upliftment',
      desc: 'Supporting maktabs and underprivileged students with educational materials and care.'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Page Hero with AI Banner */}
      <PageHero
        title="Ultimately, Your Support Empowers Lives"
        subtitle="Medical emergencies, sudden accidents, and critical health challenges destroy families financially and emotionally. Timely assistance, shelter, and medical relief restore dignity and life."
        badge="Our Activities & Relief Work"
        bgImage="/images/patient-mobility-wheelchair.jpg"
      />

      {/* Intro Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="rounded-3xl bg-blue-50/40 border border-blue-100 overflow-hidden shadow-soft hover:shadow-md transition-all duration-300 group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/emergency-surgery.jpg" 
                  alt="Emergency surgery and critical care intervention" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                  <div className="w-8 h-8 rounded-lg bg-[#184E82] text-white flex items-center justify-center shadow-sm">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">Critical Care</span>
                </div>
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#184E82] mb-1">Emergency Intervention</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    Providing urgent surgery funds, ICU equipment, and emergency medicines to critical patients admitted in government hospitals.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-red-50/40 border border-red-100 overflow-hidden shadow-soft hover:shadow-md transition-all duration-300 group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/khandesh-shelter.jpg" 
                  alt="Shelter dormitory and meals for patient families" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                  <div className="w-8 h-8 rounded-lg bg-[#EB1F23] text-white flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">Free Stay & Meals</span>
                </div>
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#184E82] mb-1">Shelter & Food Aid</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    Arranging accommodation and daily meals for patient families who travel long distances to Mumbai for medical treatments.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-blue-50/40 border border-blue-100 overflow-hidden shadow-soft hover:shadow-md transition-all duration-300 group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/images/doctor-consultation-care.jpg" 
                  alt="Doctor guidance and government healthcare scheme assistance" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                  <div className="w-8 h-8 rounded-lg bg-[#184E82] text-white flex items-center justify-center shadow-sm">
                    <HelpingHand className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">Scheme Guidance</span>
                </div>
              </div>
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#184E82] mb-1">Government Scheme Guidance</h3>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    Guiding eligible families through government welfare schemes and NGO networks to secure 100% free healthcare.
                  </p>
                </div>
              </div>
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
        </div>
      </section>

      {/* ON-GROUND RELIEF GALLERY (REAL AUTHENTIC PHOTOS) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Ground Reality"
            title="Field Relief & Activities In Action"
            subtitle="Authentic photos from our free medical camps, hospital bedside relief, and environmental programs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fieldGallery.map((item, idx) => (
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
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
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

          <div className="mt-14 text-center">
            <Button to="/donate" variant="primary" size="lg" icon={Heart}>
              Support Our On-Ground Activities
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
