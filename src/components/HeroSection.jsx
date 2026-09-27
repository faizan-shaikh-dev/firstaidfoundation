import React from 'react';
import { Heart, ArrowRight, ShieldCheck, Activity, Users } from 'lucide-react';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-blue-50/30 pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      
      {/* Decorative ambient background elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-100/40 via-red-50/30 to-blue-50/50 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 text-[#184E82] border border-blue-100 font-bold text-xs md:text-sm uppercase tracking-wider shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EB1F23] animate-ping" />
              Humanitarian Healthcare Foundation
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#184E82] tracking-tight leading-[1.1]">
              Helping Grow <span className="text-[#EB1F23] relative inline-block">
                Humanity
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#EB1F23]/15 -z-10 rounded-full" />
              </span>
            </h1>

            {/* Supporting Vision */}
            <p className="text-lg sm:text-xl text-[#5F5F5F] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              To create a healthier and more compassionate society where every individual has access to essential healthcare, emergency support, and a dignified quality of life.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button to="/donate" variant="primary" size="lg" icon={Heart} className="w-full sm:w-auto shadow-lg shadow-red-500/25">
                Donate Now
              </Button>
              <Button to="/activities" variant="outline" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                Explore Our Work
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100 sm:bg-transparent sm:p-0 sm:border-0">
                <div className="p-2 rounded-lg bg-blue-100/60 text-[#184E82] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#184E82] uppercase">Direct Aid</h4>
                  <p className="text-[11px] text-[#5F5F5F]">Patient Relief</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100 sm:bg-transparent sm:p-0 sm:border-0">
                <div className="p-2 rounded-lg bg-red-100/60 text-[#EB1F23] shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#184E82] uppercase">Free Care</h4>
                  <p className="text-[11px] text-[#5F5F5F]">Medicines & Stay</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100 sm:bg-transparent sm:p-0 sm:border-0">
                <div className="p-2 rounded-lg bg-slate-100 text-[#5F5F5F] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#184E82] uppercase">Community</h4>
                  <p className="text-[11px] text-[#5F5F5F]">Grassroots Support</p>
                </div>
              </div>
            </div>

          </div>

          {/* Graphic / Visual Card Right Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card container */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group">
                
                {/* Header branding in card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="First Aid Foundation Logo" className="h-12 w-auto" />
                    <div>
                      <h3 className="font-extrabold text-[#184E82] text-lg leading-tight">First Aid Foundation</h3>
                      <p className="text-xs text-[#EB1F23] font-bold">Healthcare & Emergency Relief</p>
                    </div>
                  </div>
                </div>

                {/* Visual Medical / Shelter Graphic Card */}
                <div className="relative bg-gradient-to-br from-[#184E82] to-[#0F3356] rounded-2xl p-6 text-white overflow-hidden shadow-inner mb-6">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative z-10 space-y-3">
                    <div className="inline-block px-3 py-1 rounded-md bg-red-600/90 text-white text-xs font-bold uppercase tracking-wide">
                      Flagship Initiative
                    </div>
                    <h4 className="text-xl font-bold text-white">Khandesh House Free Shelter</h4>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      Providing free stay, meals, and dignity for families visiting Mumbai for crucial treatments at major government hospitals.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs text-slate-200 border-t border-blue-700/50">
                      <span>Target Facility: 15 Beds</span>
                      <span className="font-bold text-white">Mumbai, MS</span>
                    </div>
                  </div>
                </div>

                {/* Quick Callout box */}
                <div className="bg-red-50/80 border border-red-100 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EB1F23] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#184E82]">Save Lives Today</h5>
                    <p className="text-xs text-[#5F5F5F]">Your Sadaqah & Donation directly funds medical care.</p>
                  </div>
                </div>

              </div>

              {/* Floating Pill Accent */}
              <div className="absolute -bottom-6 -left-6 bg-white py-3 px-5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#184E82]">Active Medical Relief Support</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
