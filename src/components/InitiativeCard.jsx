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
      
      {/* Banner / Visual Placeholder */}
      <div className="relative bg-gradient-to-br from-[#184E82] via-[#0F3356] to-slate-900 p-8 text-white min-h-[200px] flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />
        
        <div className="flex items-center justify-between relative z-10">
          <span className="bg-[#EB1F23] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
            {initiative.badge}
          </span>
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm text-white">
            <IconComp className="w-6 h-6" />
          </div>
        </div>

        <div className="relative z-10 pt-6">
          <span className="text-xs text-blue-200 font-medium uppercase tracking-wider block mb-1">
            {initiative.tagline}
          </span>
          <h3 className="text-2xl font-extrabold text-white group-hover:text-red-300 transition-colors leading-tight">
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
