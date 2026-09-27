import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import BankDetails from '../components/BankDetails';
import QRDonation from '../components/QRDonation';
import Button from '../components/Button';
import { khandeshHouseData } from '../data/projects';
import { Heart, Building2, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';

export default function KhandeshHouse() {
  return (
    <div className="space-y-0">
      
      {/* Page Hero Banner */}
      <PageHero
        title={`${khandeshHouseData.title} — Free Shelter Project`}
        subtitle="Creating a safe, hygienic, and dignified stay facility in Mumbai for patient families visiting government hospitals."
        badge="Flagship Infrastructure Project"
      />

      {/* Main Specs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectCard detailed={true} />
        </div>
      </section>

      {/* Comprehensive Narrative Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-soft border border-slate-100 space-y-8">
            
            <div className="border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EB1F23] bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block mb-3">
                Project Purpose & Need
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#184E82]">
                Why Khandesh House Is Essential for Mumbai Hospital Patients
              </h2>
            </div>

            <div className="space-y-4 text-base text-[#5F5F5F] leading-relaxed">
              <p>
                Every day, hundreds of families from rural Maharashtra and distant states travel to Mumbai to seek treatment for life-threatening illnesses at premier public hospitals such as JJ Hospital, Tata Memorial Hospital, and KEM Hospital.
              </p>
              <p>
                Medical treatments like chemotherapy, complex surgeries, and organ care often require weeks or months of continuous hospital visits. Commercial lodging in Mumbai is prohibitively expensive for low-income families. As a result, family members—including elderly parents and young children—are forced to sleep on open footpaths, under flyovers, or in crowded hospital waiting areas.
              </p>
              <p className="font-semibold text-[#184E82]">
                Khandesh House will directly solve this humanitarian challenge by offering a clean, safe, and supportive home environment.
              </p>
            </div>

            {/* Infrastructure Highlights */}
            <div className="bg-blue-50/70 p-6 rounded-2xl border border-blue-100">
              <h4 className="text-base font-bold text-[#184E82] mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#EB1F23]" />
                <span>Key Facility Specifications</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-[#334155]">
                {khandeshHouseData.specs.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#EB1F23] shrink-0" />
                    <span><strong>{item.label}:</strong> {item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note on Verification */}
            <div className="p-4 bg-slate-100 rounded-xl text-xs text-[#5F5F5F] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#184E82] shrink-0" />
              <span>{khandeshHouseData.note}</span>
            </div>

          </div>

        </div>
      </section>

      {/* Direct Donation for Khandesh House */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Fund Khandesh House"
            title="Sponsor Beds & Building Construction"
            subtitle="Your financial contributions directly fund the acquisition, renovation, and operational setup of Khandesh House."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <BankDetails />
            </div>
            <div className="lg:col-span-5">
              <QRDonation />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
