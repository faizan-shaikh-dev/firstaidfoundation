import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { navLinks, socialLinks } from '../data/navigation';
import { contactData } from '../data/contact';
import { FacebookIcon, TwitterIcon, YoutubeIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F3356] text-white pt-16 pb-8 border-t-4 border-[#EB1F23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-blue-800/60">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <img src="/logo.png" alt="First Aid Foundation Logo" className="h-10 w-auto" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight leading-none">
                  FIRST AID
                </span>
                <span className="font-bold text-xs text-[#EB1F23] tracking-widest leading-none mt-1">
                  FOUNDATION
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed pt-2">
              We strive to provide essential medical services, support and awareness through strategic collaborations, community outreach and impactful interventions.
            </p>

            {/* Social Icons Placeholder */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href={socialLinks.facebook || "#"} 
                className="w-10 h-10 rounded-full bg-blue-900/60 hover:bg-[#EB1F23] text-white flex items-center justify-center transition-colors duration-300 border border-blue-700/50"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href={socialLinks.twitter || "#"} 
                className="w-10 h-10 rounded-full bg-blue-900/60 hover:bg-[#EB1F23] text-white flex items-center justify-center transition-colors duration-300 border border-blue-700/50"
                aria-label="Twitter X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a 
                href={socialLinks.youtube || "#"} 
                className="w-10 h-10 rounded-full bg-blue-900/60 hover:bg-[#EB1F23] text-white flex items-center justify-center transition-colors duration-300 border border-blue-700/50"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b-2 border-[#EB1F23] inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 text-sm flex items-center gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#EB1F23]" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/activities/khandesh-house"
                  className="text-slate-300 hover:text-white hover:translate-x-1.5 transition-all duration-200 text-sm flex items-center gap-2"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#EB1F23]" />
                  Khandesh House Shelter
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 pb-2 border-b-2 border-[#EB1F23] inline-block">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EB1F23] shrink-0 mt-0.5" />
                <span>{contactData.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#EB1F23] shrink-0" />
                <a href={`tel:${contactData.phone}`} className="hover:text-white transition-colors font-medium">
                  +91 {contactData.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 min-w-0">
                <Mail className="w-5 h-5 text-[#EB1F23] shrink-0" />
                <span className="break-all">{contactData.emailPlaceholder}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Donate CTA Card */}
          <div className="bg-blue-900/50 p-6 rounded-2xl border border-blue-700/50 text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#EB1F23] rounded-full flex items-center justify-center mx-auto mb-3 text-white shadow-lg">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Support Human Health</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Every contribution helps save lives and provides critical hospital support for families in need.
              </p>
            </div>
            <Link
              to="/donate"
              className="w-full bg-[#EB1F23] hover:bg-[#B91417] text-white text-sm font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2"
            >
              Donate Now
              <Heart className="w-4 h-4 fill-current" />
            </Link>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p>© {currentYear} First Aid Foundation. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span>Humanitarian & Healthcare Organization</span>
            <span className="hidden sm:inline">•</span>
            <Link to="/contact" className="hover:text-white transition-colors underline sm:no-underline">
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
