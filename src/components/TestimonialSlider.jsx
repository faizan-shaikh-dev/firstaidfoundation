import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Community Testimonials"
          title="Inspiring Experiences"
          subtitle="Unwavering Dedication to Make a Real Difference in Our Community"
        />

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 relative">
          
          <div className="w-14 h-14 bg-red-50 text-[#EB1F23] rounded-2xl flex items-center justify-center mb-8 shadow-sm">
            <Quote className="w-7 h-7" />
          </div>

          <p className="text-xl sm:text-2xl text-[#184E82] font-medium leading-relaxed italic mb-8">
            "{current.quote}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-100 pt-6 gap-4">
            <div>
              <h4 className="text-lg font-bold text-[#184E82]">{current.name}</h4>
              <div className="flex items-center gap-2 text-xs text-[#EB1F23] font-semibold mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{current.location}</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#5F5F5F] font-normal">{current.role}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-slate-200 hover:bg-[#184E82] hover:text-white hover:border-[#184E82] text-[#184E82] flex items-center justify-center transition-all duration-300 focus:outline-none shadow-xs"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="text-xs font-bold text-[#5F5F5F] px-2">
                {currentIndex + 1} / {testimonialsData.length}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-slate-200 hover:bg-[#184E82] hover:text-white hover:border-[#184E82] text-[#184E82] flex items-center justify-center transition-all duration-300 focus:outline-none shadow-xs"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

        </div>

        {/* Small preview grid below */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                idx === currentIndex
                  ? 'bg-blue-50 border-[#184E82] shadow-sm'
                  : 'bg-white border-slate-100 opacity-70 hover:opacity-100'
              }`}
            >
              <h5 className="text-xs font-bold text-[#184E82] truncate">{item.name}</h5>
              <p className="text-[11px] text-[#EB1F23] truncate">{item.location}</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
