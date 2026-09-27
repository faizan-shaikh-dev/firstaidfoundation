import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import BankDetails from '../components/BankDetails';
import QRDonation from '../components/QRDonation';
import Button from '../components/Button';
import { donationContent } from '../data/donation';
import { Heart, ShieldCheck, CreditCard, Lock, CheckCircle2, Sparkles } from 'lucide-react';

export default function Donate() {
  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        title={donationContent.title}
        subtitle={donationContent.subtitle}
        badge="Direct Medical Relief Fund"
        showDonate={false}
      />

      {/* Cause Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="w-16 h-16 rounded-full bg-red-50 text-[#EB1F23] flex items-center justify-center mx-auto shadow-md">
            <Heart className="w-8 h-8 fill-current" />
          </div>

          <h2 className="text-3xl font-extrabold text-[#184E82]">
            Where Your Support Makes an Immediate Difference
          </h2>

          <div className="h-1.5 w-20 bg-[#EB1F23] rounded-full mx-auto" />

          {/* Causes List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left pt-4">
            {donationContent.causes.map((cause, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-soft flex items-start gap-3 hover:border-blue-200 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#EB1F23] shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-[#184E82] leading-snug">
                  {cause}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main Donation Options Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Verified Payment Options"
            title="Choose Your Preferred Donation Method"
            subtitle="Transparent, direct-to-foundation payment methods for immediate emergency relief."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Bank Details & Online Payment Placeholder */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Online Payment Gateway Integration Placeholder */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[#EB1F23] flex items-center justify-center">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#184E82]">Online Payment Gateway</h4>
                      <p className="text-xs text-[#5F5F5F]">Credit Card / Debit Card / NetBanking Integration</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#184E82] px-2.5 py-1 rounded-full border border-blue-100">
                    Integration Ready
                  </span>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 text-center space-y-3">
                  <Lock className="w-8 h-8 text-[#184E82] mx-auto opacity-70" />
                  <p className="text-sm font-bold text-[#184E82]">
                    Online Card & NetBanking Payment Gateway
                  </p>
                  <p className="text-xs text-[#5F5F5F] max-w-md mx-auto">
                    Direct card & netbanking gateway integration coming soon. For instant donations without transaction fees, please use Direct Bank Transfer or UPI QR code below.
                  </p>
                </div>
              </div>

              {/* Direct Bank Details Component */}
              <BankDetails />

            </div>

            {/* Right Column: QR Code & Direct UPI */}
            <div className="lg:col-span-5 space-y-8">
              <QRDonation />

              <div className="bg-white rounded-3xl p-6 shadow-soft border border-slate-100 text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-[#184E82] font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>100% Verified Foundation Relief Fund</span>
                </div>
                <p className="text-xs text-[#5F5F5F]">
                  For donation receipts or tax exemption queries, please reach out with your payment transaction screenshot to <strong className="text-[#184E82]">+91 9970809946</strong>.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
