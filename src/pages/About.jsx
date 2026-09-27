import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Heart, FileText, Target, Eye, Compass, ShieldAlert } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        title="About First Aid Foundation"
        subtitle="Dedicated to building a healthier, more compassionate society through accessible medical support and emergency relief."
        badge="Organization Overview"
      />

      {/* Main Content Placeholders */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* About Overview */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 space-y-4">
            <div className="flex items-center gap-3 text-[#184E82] font-bold text-xl">
              <FileText className="w-6 h-6 text-[#EB1F23]" />
              <h2>About First Aid Foundation</h2>
            </div>
            <div className="h-1 w-16 bg-[#EB1F23] rounded-full" />
            
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed bg-white p-6 rounded-2xl border border-slate-200/80">
              First Aid Foundation is a non-profit humanitarian organization committed to extending critical healthcare assistance, emergency medical aid, and shelter to underprivileged patients and vulnerable families. Operating with transparency and empathy, we bridge the gap between emergency medical needs and life-saving treatments.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-3 text-[#184E82] font-bold text-xl">
                <Target className="w-6 h-6 text-[#EB1F23]" />
                <h3>Our Mission</h3>
              </div>
              <div className="h-1 w-16 bg-[#EB1F23] rounded-full" />
              
              <p className="text-sm text-[#5F5F5F] leading-relaxed bg-white p-6 rounded-2xl border border-slate-200/80">
                To provide timely, dignified, and comprehensive healthcare support, free shelter, essential medicines, and emergency relief to economically disadvantaged families fighting severe health crises.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-3 text-[#184E82] font-bold text-xl">
                <Eye className="w-6 h-6 text-[#EB1F23]" />
                <h3>Our Vision</h3>
              </div>
              <div className="h-1 w-16 bg-[#EB1F23] rounded-full" />
              
              <p className="text-sm text-[#5F5F5F] leading-relaxed bg-white p-6 rounded-2xl border border-slate-200/80">
                A compassionate society where no individual is deprived of vital medical treatment, shelter, or nutrition due to financial poverty.
              </p>
            </div>

          </div>

          {/* Our Approach */}
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 space-y-4">
            <div className="flex items-center gap-3 text-[#184E82] font-bold text-xl">
              <Compass className="w-6 h-6 text-[#EB1F23]" />
              <h2>Our Approach & Core Values</h2>
            </div>
            <div className="h-1 w-16 bg-[#EB1F23] rounded-full" />
            
            <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed bg-white p-6 rounded-2xl border border-slate-200/80">
              We work directly on the ground in close coordination with major government hospitals, medical professionals, and local volunteers to identify patients requiring urgent care, ensuring every rupee donated reaches those in genuine need.
            </p>
          </div>

          <div className="pt-6 text-center">
            <Button to="/donate" variant="primary" size="lg" icon={Heart}>
              Support Our Work
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
