import React from 'react';
import { User, ShieldCheck, Phone } from 'lucide-react';

export default function TeamCard({ member }) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft hover:shadow-xl transition-all duration-300 text-center group flex flex-col items-center justify-between h-full relative overflow-hidden">
      
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-[#EB1F23] to-[#184E82] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="w-full">
        {/* Photo Container */}
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-50 to-slate-100 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center mx-auto mb-5 text-[#184E82] group-hover:scale-105 group-hover:border-[#EB1F23] transition-all duration-300 relative">
          {member.image ? (
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <User className="w-14 h-14 text-[#184E82]/60 group-hover:text-[#EB1F23] transition-colors" />
          )}
        </div>

        {/* Member Name */}
        <h3 className="text-lg sm:text-xl font-bold text-[#184E82] mb-1 group-hover:text-[#EB1F23] transition-colors">
          {member.name}
        </h3>

        {/* Designation */}
        <div className="mb-3">
          <span className="text-xs font-semibold text-[#EB1F23] bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
            {member.designation}
          </span>
        </div>

        {/* Phone Contact */}
        {member.phone && (
          <a
            href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#184E82] hover:text-[#EB1F23] transition-colors bg-slate-50 px-3 py-1 rounded-full border border-slate-200/80 mb-2"
          >
            <Phone className="w-3 h-3 text-[#EB1F23]" />
            <span>{member.phone}</span>
          </a>
        )}
      </div>

      {/* Footer Tag */}
      <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-[#5F5F5F]">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>{member.badge || 'Trustee & Board Member'}</span>
      </div>

    </div>
  );
}
