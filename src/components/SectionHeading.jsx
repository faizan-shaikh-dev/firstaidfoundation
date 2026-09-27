import React from 'react';

export default function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
  light = false
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#EB1F23] border border-red-100 mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#EB1F23] animate-pulse"></span>
          {badge}
        </div>
      )}

      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-[#184E82]'}`}>
        {title}
      </h2>

      <div className={`h-1.5 w-20 bg-[#EB1F23] rounded-full my-4 ${centered ? 'mx-auto' : ''}`} />

      {subtitle && (
        <p className={`text-lg md:text-xl font-normal leading-relaxed ${light ? 'text-slate-200' : 'text-[#5F5F5F]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
