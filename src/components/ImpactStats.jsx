import React, { useState, useEffect, useRef } from 'react';
import { impactStatsData } from '../data/stats';
import { Users, Building2, Home, Stethoscope } from 'lucide-react';

const iconMap = {
  patients: Users,
  collaborations: Building2,
  sheltered: Home,
  services: Stethoscope
};

function CountUpNumber({ targetValue, suffix }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    let animationFrameId;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const duration = 1200; // 1.2 seconds

          const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease out quad formula for smooth decelerating count
            const easedProgress = 1 - (1 - progress) * (1 - progress);
            const currentCount = Math.floor(easedProgress * targetValue);

            setCount(currentCount);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              setCount(targetValue);
            }
          };

          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [targetValue]);

  return (
    <span ref={elementRef} className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#184E82] tracking-tight block">
      {count}{suffix}
    </span>
  );
}

export default function ImpactStats() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header tag */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EB1F23] bg-red-50 px-4 py-1.5 rounded-full border border-red-100 inline-block mb-3">
            Our Humanitarian Footprint
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#184E82]">
            Quantifiable Care & Community Impact
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {impactStatsData.map((stat) => {
            const IconComponent = iconMap[stat.id] || Users;
            return (
              <div 
                key={stat.id}
                className="bg-white p-5 sm:p-8 rounded-2xl shadow-soft border border-slate-100 text-center shadow-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full blur-xl group-hover:bg-red-50 transition-colors pointer-events-none" />
                
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#184E82] group-hover:bg-[#EB1F23] group-hover:text-white flex items-center justify-center mx-auto mb-4 transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>

                <CountUpNumber targetValue={stat.value} suffix={stat.suffix} />

                <h4 className="text-base sm:text-lg font-bold text-[#184E82] mt-2 mb-1">
                  {stat.label}
                </h4>

                <p className="text-xs text-[#5F5F5F] font-normal">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Note tag */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#5F5F5F] italic">
            * Verified relief and patient assistance statistics updated regularly.
          </p>
        </div>

      </div>
    </section>
  );
}
