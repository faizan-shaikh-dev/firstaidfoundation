import {
  Heart,
  ShieldCheck,
  Pill,
  Cross,
  Activity,
  Utensils,
  Building2,
  Stethoscope,
  Smartphone,
  Phone,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { BRAND_CONTENT, DONATION_PURPOSES } from '../data/foundationContent';
import { BankTransferCard, UpiQrCard } from '../components/DonationWidgets';

export default function Donate() {
  const purposeIcons = {
    medicines: <Pill className="w-6 h-6 text-forest-800" />,
    surgery: <Cross className="w-6 h-6 text-coral-600" />,
    'cancer-care': <Activity className="w-6 h-6 text-coral-600" />,
    meals: <Utensils className="w-6 h-6 text-teal-800" />,
    shelter: <Building2 className="w-6 h-6 text-forest-800" />,
    equipment: <Stethoscope className="w-6 h-6 text-teal-800" />,
  };

  const mobileSteps = [
    {
      step: '01',
      title: 'Open Banking / UPI App',
      description: 'Open Google Pay, PhonePe, Paytm, BHIM, or your bank’s official mobile app.',
    },
    {
      step: '02',
      title: 'Scan QR or Enter Bank Details',
      description: 'Scan our official UPI QR code or copy the NEFT/RTGS Account Number and IFSC Code.',
    },
    {
      step: '03',
      title: 'Confirm Transfer Amount',
      description: 'Enter your donation or Sadaqah amount with note: "Medical Aid" or "Khandesh House".',
    },
    {
      step: '04',
      title: 'Share Screenshot for 80G / Receipt',
      description: 'WhatsApp your transfer screenshot with your name and PAN to +91 9970809946.',
    },
  ];

  return (
    <div className="space-y-0">
      <SEOHead
        title="Donate & Give Sadaqah — Support Timely Medical Assistance"
        description="Support First Aid Foundation through Direct Bank Transfer (HDFC Bank A/C 50200018098095) or UPI. Fund emergency surgeries, medicines, cancer care packages, hospital meals, and the Khandesh House shelter in Mumbai."
        canonicalPath="/donate"
      />

      {/* Page Hero */}
      <section className="bg-forest-950 text-white py-16 lg:py-20 relative overflow-hidden border-b border-forest-800">
        <div className="absolute inset-0 bg-editorial-dots pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral-600/20 border border-coral-500/40 text-coral-300 text-xs font-bold uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Direct Medical Relief & Sadaqah Fund</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Donate for Timely Medical Assistance
            </h1>
            <p className="text-base sm:text-xl text-forest-100 leading-relaxed">
              Your contribution saves lives by providing urgent healthcare, free shelter at Khandesh
              House, life-saving medicines, and compassionate support to families enduring medical
              emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Bank Transfer & Official UPI QR Slot (Primary Action Section) */}
      <section className="py-16 lg:py-22 bg-ivory border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Direct Remittance Channels</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              Verified Foundation Bank Account & UPI Slot
            </h2>
            <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
              Contribute directly to First Aid Foundation’s institutional bank account with zero
              third-party gateway deductions. Use the one-click copy buttons below to paste details
              into your banking app.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7">
              <BankTransferCard />
            </div>
            <div className="lg:col-span-5">
              <UpiQrCard />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Six Core Donation Purposes */}
      <section
        aria-labelledby="donation-purposes-heading"
        className="py-20 lg:py-24 bg-white border-b border-ivory-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-50 text-coral-700 text-xs font-bold uppercase tracking-widest border border-coral-200">
              <span>Where Your Contribution Goes</span>
            </span>
            <h2
              id="donation-purposes-heading"
              className="font-serif text-3xl sm:text-4xl font-bold text-navy-900"
            >
              Choose How Your Sadaqah or Donation Heals
            </h2>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              You can allocate your contribution toward any of our six core patient welfare funds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DONATION_PURPOSES.map((purpose) => (
              <div
                key={purpose.id}
                className="bg-ivory rounded-3xl p-7 border border-ivory-border shadow-editorial hover:shadow-editorial-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-ivory-border flex items-center justify-center shadow-2xs">
                    {purposeIcons[purpose.id]}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy-900">
                    {purpose.title}
                  </h3>

                  <p className="text-sm text-navy-700 leading-relaxed">
                    {purpose.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-ivory-border flex items-center justify-between text-xs font-bold text-coral-600">
                  <span>Direct Allocation</span>
                  <a href="#bank-transfer" className="hover:underline">
                    Remit Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sadaqah & Humanitarian Giving Philosophy */}
      <section className="py-20 lg:py-24 bg-ivory border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
                <Sparkles className="w-3.5 h-3.5 text-coral-600" />
                <span>Humanitarian Charity & Sadaqah</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
                Heal Yourself with Charity (Sadaqah)
              </h2>

              <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
                In times of distress or illness, giving charity shields families from calamity and brings healing. Countless outstation patients arrive in Mumbai with exhausted savings. Your donation ensures they receive life-saving medicines, nutritious food, and dignified shelter.
              </p>

              <div className="p-5 rounded-2xl bg-coral-50/80 border-l-4 border-coral-600 space-y-2">
                <h3 className="text-sm font-bold text-navy-900">
                  100% Policy for Patient Care
                </h3>
                <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                  First Aid Foundation directs donor contributions directly to hospital vendors, medicine suppliers, and shelter setup. No administrative cuts or broker commissions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-ivory-border shadow-editorial space-y-4">
              <h3 className="font-serif text-xl font-bold text-navy-900">
                Donation Impact Guarantee
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-navy-800">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Verified government hospital patient assistance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Legitimate institutional HDFC bank account</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct donation receipt upon sharing transfer details</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Registered with Maharashtra Charity Commissioner</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Step-by-Step Mobile Giving Instructions */}
      <section className="py-20 lg:py-24 bg-white border-b border-ivory-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-900 text-xs font-bold uppercase tracking-widest border border-forest-200">
              <Smartphone className="w-3.5 h-3.5 text-coral-600" />
              <span>Easy 4-Step Guide</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
              How to Donate via UPI / Bank App
            </h2>
            <p className="text-base sm:text-lg text-navy-700 leading-relaxed">
              Complete your transfer in under 60 seconds with your preferred payment application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileSteps.map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-ivory border border-ivory-border space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-coral-600 block mb-2">
                    STEP {s.step}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-navy-900 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-700 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Helpline Reassurance Banner */}
      <section className="py-16 bg-forest-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Need Assistance with Your Remittance?
          </h2>
          <p className="text-forest-200 text-sm sm:text-base leading-relaxed">
            Our finance and donor coordinator is available to assist you with bank confirmation, RTGS queries, and receipt generation.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${BRAND_CONTENT.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-sm shadow-coral-glow transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: {BRAND_CONTENT.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
