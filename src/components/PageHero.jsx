import React from 'react';
import { Heart } from 'lucide-react';
import Button from './Button';

export default function PageHero({
  title,
  subtitle,
  badge = 'First Aid Foundation',
  showDonate = true
}) {
  return (
    <section className="relative bg-gradient-to-br from-[#0F3356] via-[#184E82] to-[#0A2540] text-white py-16 md:py-20 overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 mb-6 backdrop-blur-sm shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#EB1F23]"></span>
            {badge}
          </div>
        )}

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto">
          {title}
        </h1>

        <div className="h-1.5 w-24 bg-[#EB1F23] rounded-full mx-auto mb-6" />

        {subtitle && (
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
            {subtitle}
          </p>
        )}

        {showDonate && (
          <div className="pt-2">
            <Button to="/donate" variant="primary" size="lg" icon={Heart}>
              Take My Contribution
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
