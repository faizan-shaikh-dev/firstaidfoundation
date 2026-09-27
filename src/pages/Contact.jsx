import React from 'react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { contactData } from '../data/contact';
import { socialLinks } from '../data/navigation';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FacebookIcon, TwitterIcon, YoutubeIcon } from '../components/SocialIcons';

export default function Contact() {
  return (
    <div className="space-y-0">
      
      {/* Page Hero */}
      <PageHero
        title={contactData.heading}
        subtitle={contactData.subheading}
        badge="Reach Out to Us"
      />

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contact Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#EB1F23] bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block mb-3">
                  Direct Contact Info
                </span>
                <h2 className="text-3xl font-extrabold text-[#184E82]">
                  We Are Here to Support You
                </h2>
              </div>

              {/* Address Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#184E82] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#184E82] mb-1">Visit Our Office</h4>
                  <p className="text-sm text-[#5F5F5F] leading-relaxed">
                    {contactData.address.full}
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#EB1F23] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#184E82] mb-1">Dial Us Directly</h4>
                  <a href={`tel:${contactData.phone}`} className="text-lg font-bold text-[#EB1F23] hover:underline block">
                    +91 {contactData.phone}
                  </a>
                  <p className="text-xs text-[#5F5F5F] mt-1">Available for emergency medical support inquiries</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#184E82] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#184E82] mb-1">Email Inquiry</h4>
                  <p className="text-sm text-[#5F5F5F]">
                    {contactData.emailPlaceholder}
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-soft space-y-3">
                <h4 className="text-base font-bold text-[#184E82]">Social Media Handles</h4>
                <p className="text-xs text-[#5F5F5F]">Connect with First Aid Foundation on official channels</p>
                
                <div className="flex items-center gap-3 pt-2">
                  <a 
                    href={socialLinks.facebook || "#"} 
                    className="w-10 h-10 rounded-full bg-blue-50 hover:bg-[#184E82] text-[#184E82] hover:text-white flex items-center justify-center transition-colors border border-blue-100"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href={socialLinks.twitter || "#"} 
                    className="w-10 h-10 rounded-full bg-blue-50 hover:bg-[#184E82] text-[#184E82] hover:text-white flex items-center justify-center transition-colors border border-blue-100"
                    aria-label="Twitter X"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href={socialLinks.youtube || "#"} 
                    className="w-10 h-10 rounded-full bg-red-50 hover:bg-[#EB1F23] text-[#EB1F23] hover:text-white flex items-center justify-center transition-colors border border-red-100"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Find Us Here"
            title="Location Map"
            subtitle="Jalgaon Headquarters, Maharashtra"
          />

          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-96 relative bg-slate-100">
            <iframe
              title="First Aid Foundation Location"
              src={contactData.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
