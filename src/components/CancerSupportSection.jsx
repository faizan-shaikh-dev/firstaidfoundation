import React from 'react';
import { Heart, Pill, Shirt, Utensils, Milk, ShoppingBag, Accessibility, HelpCircle, Waves } from 'lucide-react';
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
