import React from 'react';
import { User, ShieldCheck } from 'lucide-react';

export default function TeamCard({ member }) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-hover transition-all duration-300 text-center group flex flex-col items-center justify-between h-full">
      
      <div className="w-full">
        {/* Photo Placeholder */}
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-50 to-slate-100 border-4 border-white shadow-md flex items-center justify-center mx-auto mb-6 text-[#184E82] group-hover:scale-105 group-hover:border-[#EB1F23] transition-all duration-300">
          <User className="w-14 h-14 text-[#184E82]/70 group-hover:text-[#EB1F23] transition-colors" />
        </div>

        {/* Member Name */}
        <h3 className="text-xl font-bold text-[#184E82] mb-1 group-hover:text-[#EB1F23] transition-colors">
          {member.name}
        </h3>

        {/* Designation */}
        <span className="text-xs font-semibold text-[#EB1F23] bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block mb-4">
          {member.designation}
        </span>
      </div>

      {/* Footer Tag */}
      <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-[#5F5F5F]">
        <ShieldCheck className="w-4 h-4 text-[#184E82]" />
        <span>First Aid Foundation Member</span>
      </div>

    </div>
  );
}
