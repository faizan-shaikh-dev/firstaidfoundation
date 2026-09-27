import React from 'react';
import { Heart, QrCode, ShieldAlert, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';

export default function SadaqahSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Humanitarian Charity"
          title="Heal Yourself with Charity (Sadaqah)"
          subtitle="Countless patients face overwhelming financial distress and lack of medical guidance when critical illnesses strike. Your Sadaqah acts as a shield of healing and hope."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Explanation Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-red-50/70 border-l-4 border-[#EB1F23] p-6 rounded-r-2xl space-y-3">
              <div className="flex items-center gap-2 text-[#EB1F23] font-bold text-base">
                <Sparkles className="w-5 h-5" />
                <span>The Blessing of Medical Sadaqah</span>
              </div>
              <p className="text-sm text-[#334155] leading-relaxed">
                Many underprivileged patients coming to government hospitals are unable to afford basic medicines, lab tests, or daily meals. In times of health crises, your charity brings direct physical relief and divine comfort.
              </p>
            </div>

            <div className="space-y-4 text-[#5F5F5F] text-base leading-relaxed">
              <p>
                First Aid Foundation ensures that 100% of your Sadaqah funds are transparently utilized for direct patient care, emergency surgical supplies, free stay facilities, and nutritional aid.
              </p>
              <ul className="space-y-2.5 text-sm font-medium text-[#184E82]">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#EB1F23]" />
                  <span>Direct emergency aid for hospital patients without funds</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#EB1F23]" />
                  <span>Sponsoring free meals for patient families at hospitals</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#EB1F23]" />
                  <span>Purchasing re-usable medical equipment for home care</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <Button to="/donate" variant="primary" size="lg" icon={Heart}>
                Give Sadaqah / Donate Now
              </Button>
            </div>
          </div>

          {/* QR Donation Widget Placeholder */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#184E82] to-[#0F3356] rounded-3xl p-8 text-white text-center shadow-xl relative overflow-hidden border border-blue-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md text-red-300">
                <QrCode className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Scan & Donate via UPI</h3>
              <p className="text-xs text-blue-200 mb-6">
                Official First Aid Foundation UPI QR Code
              </p>

              {/* QR Code Container Placeholder */}
              <div className="bg-white p-6 rounded-2xl max-w-[220px] mx-auto shadow-inner text-slate-700 mb-6 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center min-h-[200px]">
                <QrCode className="w-20 h-20 text-slate-400 mb-2" />
                <span className="text-xs font-bold text-[#184E82]">Donation QR Code</span>
                <span className="text-[10px] text-[#5F5F5F] text-center mt-1">
                  Scan with GPay, PhonePe, Paytm or BHIM
                </span>
              </div>

              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-xs text-xs text-blue-100 flex items-center justify-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-300" />
                <span>Verified Foundation Account</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
