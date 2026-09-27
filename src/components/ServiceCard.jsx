import React from 'react';
import { 
  HeartHandshake, 
  Pill, 
  Activity, 
  Cross, 
  Utensils, 
  Stethoscope, 
  ShieldAlert, 
  Truck, 
  BadgeIndianRupee,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  HeartHandshake,
  Pill,
  Activity,
  Cross,
  Utensils,
  Stethoscope,
  ShieldAlert,
  Truck,
  BadgeIndianRupee
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Stethoscope;
  const isRed = service.color === 'red';

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-slate-100 shadow-hover group flex flex-col justify-between h-full relative overflow-hidden">
      
      {/* Decorative top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 transition-colors ${
        isRed ? 'bg-[#EB1F23]' : 'bg-[#184E82]'
      }`} />

      <div>
        {/* Icon & Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
            isRed 
              ? 'bg-red-50 text-[#EB1F23] group-hover:bg-[#EB1F23] group-hover:text-white' 
              : 'bg-blue-50 text-[#184E82] group-hover:bg-[#184E82] group-hover:text-white'
          }`}>
            <IconComponent className="w-7 h-7" />
          </div>
          
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#184E82] transition-colors">
            Free Service
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#184E82] mb-3 group-hover:text-[#EB1F23] transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#5F5F5F] leading-relaxed font-normal">
          {service.description}
        </p>
      </div>

      {/* Card Footer Tag */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#184E82]">
        <CheckCircle2 className="w-4 h-4 text-[#EB1F23]" />
        <span>Direct Patient Aid Program</span>
      </div>

    </div>
  );
}
