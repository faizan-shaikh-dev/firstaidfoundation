import React from 'react';
import { Home, Trees, Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const placeholderIcons = {
  shelter: Home,
  treebank: Trees,
  medical: Stethoscope
};

export default function InitiativeCard({ initiative }) {
  const IconComp = placeholderIcons[initiative.imagePlaceholder] || Stethoscope;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-soft border border-slate-100 shadow-hover flex flex-col h-full group">
      
      {/* Banner / Visual Card with Image */}
      <div className="relative h-60 text-white flex flex-col justify-between overflow-hidden">
        {initiative.image ? (
          <img 
            src={initiative.image} 
            alt={initiative.title} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-900/30" />
        
        <div className="flex items-center justify-between relative z-10 p-6 pb-0">
          <span className="bg-[#EB1F23] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
            {initiative.badge}
          </span>
          <div className="p-2.5 bg-black/40 backdrop-blur-md rounded-xl text-white border border-white/20">
            <IconComp className="w-5 h-5" />
          </div>
        </div>

        <div className="relative z-10 p-6 pt-0">
          <span className="text-xs text-red-300 font-semibold uppercase tracking-wider block mb-1 drop-shadow-sm">
            {initiative.tagline}
          </span>
          <h3 className="text-xl font-extrabold text-white group-hover:text-red-200 transition-colors leading-tight drop-shadow-sm">
            {initiative.title}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
        <p className="text-sm text-[#5F5F5F] leading-relaxed mb-6 font-normal">
          {initiative.description}
        </p>

        {initiative.id === 'free-food-shelter' ? (
          <Link
            to="/activities/khandesh-house"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#184E82] hover:text-[#EB1F23] transition-colors group/link"
          >
            <span>Learn About Khandesh House</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-[#EB1F23]" />
          </Link>
        ) : (
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#184E82] hover:text-[#EB1F23] transition-colors group/link"
          >
            <span>Read Initiative Details</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-[#EB1F23]" />
          </Link>
        )}
      </div>

    </div>
  );
}
