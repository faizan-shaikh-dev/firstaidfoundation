import React from 'react';
import { Heart } from 'lucide-react';
import Button from './Button';

export default function PageHero({
  title,
  subtitle,
  badge = 'First Aid Foundation',
  showDonate = true,
  bgImage
}) {
  return (
    <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden min-h-[420px] md:min-h-[500px] flex items-center justify-center">
      
      {/* Background Hero Banner Image - Clear, Bright & Fully Visible */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle balanced overlay to keep the photo bright & clear while ensuring text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/30 to-slate-950/45" />
        </div>
      )}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/50 text-white border border-white/30 mb-6 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#EB1F23]"></span>
            {badge}
          </div>
        )}

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          {title}
        </h1>

        <div className="h-1.5 w-24 bg-[#EB1F23] rounded-full mx-auto mb-6 shadow-md" />

        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-3xl mx-auto font-normal leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {subtitle}
          </p>
        )}

        {showDonate && (
          <div className="pt-2">
            <Button to="/donate" variant="primary" size="lg" icon={Heart} className="shadow-2xl shadow-red-600/40">
              Take My Contribution
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
