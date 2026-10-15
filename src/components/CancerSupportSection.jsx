import React from 'react';
import { Heart, Pill, Shirt, Utensils, Milk, ShoppingBag, Accessibility, HelpCircle, Waves, CheckCircle2, ShieldAlert } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';

const supportItems = [
  { icon: Pill, title: 'Free Medicines', desc: 'Chemotherapy and supportive drugs' },
  { icon: Shirt, title: 'Clean Clothes', desc: 'Dignified apparel for hospital stays' },
  { icon: Utensils, title: 'Utensils & Kits', desc: 'Hygiene and dining essentials' },
  { icon: Milk, title: 'Horlicks & Nutrition', desc: 'High-protein nutritional supplements' },
  { icon: ShoppingBag, title: 'Food & Ration Supplies', desc: 'Monthly groceries for families' },
  { icon: Accessibility, title: 'Wheelchairs', desc: 'Mobility support equipment' },
  { icon: HelpCircle, title: 'Walking Supports', desc: 'Crutches & walking frames' },
  { icon: Waves, title: 'Water Beds', desc: 'Pressure ulcer prevention beds' },
];

export default function CancerSupportSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Specialized Patient Care"
          title="Cancer Support Initiative"
          subtitle="Cancer Is Not an Incurable Disease — With timely medical intervention, proper nutrition, and emotional support, fighting cancer is possible."
        />

        {/* Hospitalized Patient Disease Care Spotlight Card */}
        <div className="mb-14 bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Real Hospitalized Patient Image */}
          <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[340px] overflow-hidden group">
            <img 
              src="/images/cancer-patient-care.jpg" 
              alt="Hospitalized cancer patient receiving medical care and support" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Hospital Inpatient Relief
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-semibold text-white/90">
                Bedside Medical & Nutritional Assistance
              </p>
              <p className="text-xs text-blue-200">
                Supporting patients undergoing chemotherapy at major public hospitals
              </p>
            </div>
          </div>

          {/* Clinical & Humanitarian Overview */}
          <div className="lg:col-span-6 p-6 sm:p-10 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EB1F23]">
                <ShieldAlert className="w-4 h-4" />
                <span>Empowering Cancer Warriors</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#184E82] leading-tight">
                Holistic Bedside Care for Underprivileged Patients
              </h3>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Cancer treatment places an extraordinary financial burden on vulnerable families. Our on-ground volunteers work directly inside hospital wards to ensure no patient drops out of chemotherapy due to lack of medicines, nutrition, or medical mobility aids.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#184E82] bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                <CheckCircle2 className="w-4 h-4 text-[#EB1F23] shrink-0" />
                <span>Free Chemotherapy Drugs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#184E82] bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                <CheckCircle2 className="w-4 h-4 text-[#EB1F23] shrink-0" />
                <span>Bedside Nutrition & Horlicks</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#184E82] bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                <CheckCircle2 className="w-4 h-4 text-[#EB1F23] shrink-0" />
                <span>Water Beds & Wheelchairs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#184E82] bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                <CheckCircle2 className="w-4 h-4 text-[#EB1F23] shrink-0" />
                <span>Family Food & Ration Kits</span>
              </div>
            </div>

            <div className="pt-2">
              <Button to="/donate" variant="primary" size="md" icon={Heart}>
                Support a Hospitalized Patient
              </Button>
            </div>
          </div>

        </div>

        {/* Support items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {supportItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#EB1F23] group-hover:bg-[#EB1F23] group-hover:text-white flex items-center justify-center mx-auto mb-4 transition-colors duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#184E82] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5F5F5F]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout Card */}
        <div className="bg-gradient-to-r from-[#184E82] to-[#0F3356] rounded-3xl p-8 lg:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Sponsor a Cancer Patient's Care Package
            </h3>
            <p className="text-sm text-blue-100 max-w-2xl font-normal">
              Your contribution helps provide essential nutrition, medicines, and medical equipment to cancer patients battling financial hardship in government hospitals.
            </p>
          </div>

          <Button to="/donate" variant="primary" size="lg" icon={Heart} className="shrink-0">
            Donate for Cancer Support
          </Button>
        </div>

      </div>
    </section>
  );
}
