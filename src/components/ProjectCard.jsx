import React from 'react';
import { Home, Bed, Bath, UtensilsCrossed, Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import { khandeshHouseData } from '../data/projects';
import Button from './Button';

export default function ProjectCard({ detailed = false }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 shadow-hover">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Visual Banner with Real Shelter Photo */}
        <div className="lg:col-span-5 relative p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between overflow-hidden group">
          <img 
            src="/images/khandesh-shelter.jpg" 
            alt="Khandesh House Shelter Dormitory for Hospital Patients and Families" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-[#184E82]/85 to-slate-900/70" />
          
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-[#EB1F23] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 shadow-sm">
              Featured Flagship Project
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 leading-tight">
              {khandeshHouseData.title}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-red-300 mb-4 sm:mb-6">
              {khandeshHouseData.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal mb-6">
              {khandeshHouseData.purpose}
            </p>
          </div>

          {/* Cost Badge Box */}
          <div className="relative z-10 bg-black/40 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 mt-4 sm:mt-6 shadow-lg">
            <span className="text-xs text-slate-300 font-medium uppercase tracking-wider block">
              Estimated Total Project Cost
            </span>
            <div className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              {khandeshHouseData.estimatedCost.formatted}
            </div>
            <span className="text-xs text-red-300 font-bold block mt-0.5">
              ({khandeshHouseData.estimatedCost.words})
            </span>
          </div>

        </div>

        {/* Right Project Details */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold text-[#184E82] mb-4">
              Project Infrastructure Requirements
            </h4>
            
            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100/80">
                <Home className="w-6 h-6 text-[#184E82] mb-2" />
                <span className="text-xs text-[#5F5F5F] block font-medium">Building</span>
                <span className="text-sm font-bold text-[#184E82]">2-Storey</span>
              </div>

              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100/80">
                <Bed className="w-6 h-6 text-[#EB1F23] mb-2" />
                <span className="text-xs text-[#5F5F5F] block font-medium">Capacity</span>
                <span className="text-sm font-bold text-[#184E82]">15 Beds</span>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100/80">
                <Bath className="w-6 h-6 text-[#184E82] mb-2" />
                <span className="text-xs text-[#5F5F5F] block font-medium">Facilities</span>
                <span className="text-sm font-bold text-[#184E82]">2 Bathrooms</span>
              </div>

              <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100/80">
                <UtensilsCrossed className="w-6 h-6 text-[#EB1F23] mb-2" />
                <span className="text-xs text-[#5F5F5F] block font-medium">Kitchen</span>
                <span className="text-sm font-bold text-[#184E82]">1 Community Kitchen</span>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100/80 col-span-2 sm:col-span-2">
                <ShieldCheck className="w-6 h-6 text-[#184E82] mb-2" />
                <span className="text-xs text-[#5F5F5F] block font-medium">Beneficiaries</span>
                <span className="text-sm font-bold text-[#184E82]">Hospital Patients & Families</span>
              </div>
            </div>

            {detailed && (
              <div className="mb-8">
                <h5 className="text-base font-bold text-[#184E82] mb-2">Why This Facility Is Crucial</h5>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  {khandeshHouseData.whyNeeded}
                </p>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
            <Button to="/donate" variant="primary" size="md" icon={Heart} className="w-full sm:w-auto">
              Donate for Free Shelter Project
            </Button>
            
            {!detailed && (
              <Button to="/activities/khandesh-house" variant="outline" size="md" icon={ArrowRight} className="w-full sm:w-auto">
                View Full Details
              </Button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
