import React from 'react';
import { Heart, QrCode, ShieldAlert, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import QRDonation from './QRDonation';

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

          {/* QR Donation Widget */}
          <div className="lg:col-span-5">
            <QRDonation />
          </div>

        </div>

      </div>
    </section>
  );
}
