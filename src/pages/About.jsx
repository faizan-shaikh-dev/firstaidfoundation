import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Heart, FileText, Target, Eye, Compass, ShieldCheck, Award, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { presidentProfile } from '../data/team';

export default function About() {
  return (
    <div className="space-y-0">
      
      {/* Page Hero with AI Banner */}
      <PageHero
        title="About First Aid Foundation"
        subtitle="Dedicated to building a healthier, more compassionate society through accessible medical support, cancer care, and free patient shelter."
        badge="Organization Overview"
        bgImage="/images/emergency-surgery.jpg"
      />

      {/* Main Content & Registration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* About Overview */}
          <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100 space-y-8">
            <div className="flex items-center gap-3 text-[#184E82] font-bold text-2xl">
              <FileText className="w-7 h-7 text-[#EB1F23]" />
              <h2>Who We Are & What Drives Us</h2>
            </div>
            <div className="h-1.5 w-20 bg-[#EB1F23] rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-base text-[#5F5F5F] leading-relaxed bg-white p-6 rounded-2xl border border-slate-200/80">
                  <strong className="text-[#184E82]">First Aid Foundation</strong> is a registered non-profit humanitarian organization (Reg. No. F-16650/Jal under Bombay Public Trust Act 1950) founded and led by <strong className="text-[#184E82]">Shakil Ahmed (Shakeel Hannan)</strong>. We are committed to extending critical healthcare assistance, emergency surgical funding, free accommodation, and nutritional aid to economically distressed patients and families.
                </p>
                <p className="text-base text-[#5F5F5F] leading-relaxed bg-white p-6 rounded-2xl border border-slate-200/80">
                  We coordinate directly with major government tertiary hospitals such as Sir J.J. Group of Hospitals and Tata Memorial Hospital in Mumbai, ensuring life-saving medicines, chemotherapy support, and surgical funds reach patients with zero administrative friction.
                </p>
              </div>

              <div className="lg:col-span-5 h-80 rounded-3xl overflow-hidden shadow-xl relative group border-2 border-white">
                <img 
                  src="/images/doctor-consultation-care.jpg" 
                  alt="First Aid Foundation medical care and doctor consultation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#EB1F23] px-2.5 py-1 rounded-md mb-1 inline-block">
                    On-Ground Compassion
                  </span>
                  <h4 className="font-bold text-sm sm:text-base leading-snug">Compassionate Patient Care & Bedside Outreach</h4>
                  <p className="text-xs text-blue-100">Serving hundreds of distressed patients across Maharashtra.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-3 text-[#184E82] font-bold text-xl">
                <Target className="w-6 h-6 text-[#EB1F23]" />
                <h3>Our Mission</h3>
              </div>
              <div className="h-1 w-16 bg-[#EB1F23] rounded-full" />
              
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed bg-white p-6 rounded-2xl border border-slate-200/80">
                To provide timely, dignified, and comprehensive healthcare support, free shelter, essential medicines, and emergency surgical relief to economically disadvantaged families fighting severe health crises.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-3 text-[#184E82] font-bold text-xl">
                <Eye className="w-6 h-6 text-[#EB1F23]" />
                <h3>Our Vision</h3>
              </div>
              <div className="h-1 w-16 bg-[#EB1F23] rounded-full" />
              
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed bg-white p-6 rounded-2xl border border-slate-200/80">
                A compassionate society where no human being is deprived of vital medical treatment, shelter, or nourishment due to poverty, despair, or lack of guidance.
              </p>
            </div>

          </div>

          {/* FOUNDER & PRESIDENT SPOTLIGHT */}
          <div className="bg-gradient-to-br from-slate-900 via-[#0F3356] to-[#184E82] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-blue-900">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl mb-4">
                  <img 
                    src={presidentProfile.image} 
                    alt={presidentProfile.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{presidentProfile.name}</h3>
                <p className="text-xs font-semibold text-red-300">Founder & President</p>
                <a 
                  href={`tel:${presidentProfile.phone.replace(/[^0-9+]/g, '')}`} 
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-blue-200 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-red-400" />
                  <span>{presidentProfile.phone}</span>
                </a>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Founding Leadership</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Founded on Grassroots Compassion
                </h3>
                <blockquote className="border-l-4 border-[#EB1F23] pl-4 italic text-slate-200 text-sm sm:text-base leading-relaxed bg-white/5 p-3 rounded-r-xl">
                  "{presidentProfile.quote}"
                </blockquote>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Under Shakil Ahmed's guidance, the foundation operates on the core belief that direct hospital presence is what saves lives. From guiding illiterate families through hospital corridors to securing immediate ICU medication and chemotherapy, our leadership is hands-on and transparent.
                </p>
              </div>
            </div>
          </div>

          {/* OFFICIAL REGISTRATION & TRUST VERIFICATION CARD */}
          <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-100">
            <SectionHeading
              badge="Official Legal Entity"
              title="Registered Public Charitable Trust"
              subtitle="First Aid Foundation is registered under Bombay Public Trust Act 1950 (Reg. No. F-16650/Jal)."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              
              {/* Cropped Digital Trust Card */}
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-200/80 group hover:shadow-2xl transition-all">
                <div className="rounded-2xl overflow-hidden border border-slate-100">
                  <img 
                    src="/images/foundation-card.png" 
                    alt="First Aid Foundation Official Trust Registration Card" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="mt-3 text-center text-xs text-[#5F5F5F]">
                  <span className="font-bold text-[#184E82]">Official Trust ID Card & Bank Identifier</span>
                </div>
              </div>

              {/* Registered Office & Legitimacy Info */}
              <div className="space-y-5">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-soft space-y-3">
                  <div className="flex items-center gap-2 text-[#184E82] font-bold text-base">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Government Registered Body</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#5F5F5F]">
                    <li><strong>Trust Name:</strong> First Aid Foundation</li>
                    <li><strong>Registration Act:</strong> Bombay Public Trust Act, 1950</li>
                    <li><strong>Registration No:</strong> F-16650/Jal</li>
                    <li><strong>Registered Office:</strong> Near Bombay Bakery, Mehrun, Jalgaon-425001 (MH)</li>
                    <li><strong>Official Email:</strong> firstaid2015@yahoo.com</li>
                  </ul>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-soft border border-slate-200/80 group">
                  <div className="h-44 overflow-hidden relative">
                    <img 
                      src="/images/img23.jpeg" 
                      alt="First Aid Foundation Office Jalgaon" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-3 text-white text-xs font-bold">
                      Jalgaon Headquarters & Medical Relief Office
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* AWARDS & RECOGNITIONS SHOWCASE */}
          <div>
            <SectionHeading
              badge="Accolades & Honors"
              title="Recognized for Community Impact"
              subtitle="State-level awards and certificates of honour received by First Aid Foundation and Shakil Ahmed."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Award 1 */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden group hover:shadow-xl transition-all flex flex-col">
                <div className="h-64 overflow-hidden relative bg-slate-100">
                  <img 
                    src="/images/award2.jpeg" 
                    alt="Certificate of Honour Pallavi Blood Centre" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                    Certificate of Honour
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#184E82] text-lg mb-1">Pallavi Blood Centre</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">
                      Awarded to First Aid Foundation Chandivali, Mumbai for organizing voluntary blood donation camps at Shatabdi Hospital, Govandi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Award 2 */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden group hover:shadow-xl transition-all flex flex-col">
                <div className="h-64 overflow-hidden relative bg-slate-100">
                  <img 
                    src="/images/award4.jpeg" 
                    alt="State Level Award Maharashtra Minority NGO Forum" 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#184E82] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                    State Level Trophy
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#184E82] text-lg mb-1">Maharashtra Minority NGO Forum</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">
                      Conferred upon Shaikh Shakil Ahmad at the 2nd State Level NGO Conference in Pune for exemplary leadership in healthcare empowerment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Award 3 */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-soft overflow-hidden group hover:shadow-xl transition-all flex flex-col">
                <div className="h-64 overflow-hidden relative bg-slate-100">
                  <img 
                    src="/images/award1.jpeg" 
                    alt="Blood Donation Camp Award First Aid Foundation" 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                    Mumbai Community Camp
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#184E82] text-lg mb-1">Blood Donation Camp Powai</h4>
                    <p className="text-xs text-[#5F5F5F] leading-relaxed">
                      Memento honoring First Aid Foundation leadership for community blood drives at Gausiya Maidan, Powai, Mumbai.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="pt-6 text-center">
            <Button to="/donate" variant="primary" size="lg" icon={Heart}>
              Support Our Mission
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
