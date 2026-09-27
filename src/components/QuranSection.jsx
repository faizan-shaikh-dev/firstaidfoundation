import React from 'react';
import { Quote } from 'lucide-react';

export default function QuranSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0F3356] via-[#184E82] to-[#0A2540] text-white relative overflow-hidden">
      
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-red-300 flex items-center justify-center mx-auto mb-6 border border-white/15">
          <Quote className="w-6 h-6" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-red-300 block mb-3">
          Guiding Values & Universal Inspiration
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-12 max-w-3xl mx-auto leading-tight">
          Compassion in Action for Every Human Soul
        </h2>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Quote 1 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/15 shadow-xl relative group hover:bg-white/15 transition-all duration-300">
            <p className="text-lg md:text-xl font-medium text-white italic leading-relaxed mb-6">
              "Whoever saves a life, it will be as if they saved all of humanity."
            </p>
            <div className="flex items-center justify-between border-t border-white/20 pt-4">
              <span className="text-sm font-bold text-red-300 tracking-wider">
                Al Quran 5:32
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Sanctity of Human Life
              </span>
            </div>
          </div>

          {/* Quote 2 */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/15 shadow-xl relative group hover:bg-white/15 transition-all duration-300">
            <p className="text-lg md:text-xl font-medium text-white italic leading-relaxed mb-6">
              "Cooperate with one another in goodness and righteousness."
            </p>
            <div className="flex items-center justify-between border-t border-white/20 pt-4">
              <span className="text-sm font-bold text-red-300 tracking-wider">
                Al Quran 5:2
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Unity in Benevolence
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
