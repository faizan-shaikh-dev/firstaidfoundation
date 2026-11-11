import { Link } from 'react-router-dom';
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Building2,
  Stethoscope,
  ArrowRight,
} from 'lucide-react';
import { BRAND_CONTENT } from '../data/foundationContent';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-ivory border-t-4 border-coral-600">
      {/* Upper Editorial Banner */}
      <div className="border-b border-forest-800/70">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-coral-400">
                <Stethoscope className="w-4 h-4" />
                <span>{BRAND_CONTENT.organizationType}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Stand With Vulnerable Patients in Their Crucial Hour.
              </h2>
              <p className="text-forest-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                From emergency surgery facilitation at Mumbai’s government hospitals to our upcoming
                15-bed Khandesh House free shelter, your Sadaqah and donations restore health and human dignity.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-3">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-sm shadow-coral-glow transition-all"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Donate Now</span>
              </Link>
              <Link
                to="/activities/khandesh-house"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white border border-forest-700 font-semibold text-sm transition-all"
              >
                <Building2 className="w-4 h-4 text-coral-400" />
                <span>Khandesh House</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-white p-1.5 shadow-md flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="First Aid Foundation Logo"
                  className="w-full h-full object-contain"
                  width={44}
                  height={44}
                />
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white block leading-none">
                  First Aid Foundation
                </span>
                <span className="text-xs font-semibold text-coral-400 tracking-wider uppercase block mt-1">
                  {BRAND_CONTENT.tagline}
                </span>
              </div>
            </Link>

            <p className="text-forest-200 text-sm leading-relaxed">
              {BRAND_CONTENT.footerSummary}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forest-900/90 border border-forest-800 text-xs text-emerald-300 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Registered Nonprofit • {BRAND_CONTENT.registrationNo}</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif font-bold text-base text-white border-b border-forest-800 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-forest-200">
              <li>
                <Link to="/" className="hover:text-coral-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-coral-400" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-coral-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-coral-400" />
                  <span>Activities</span>
                </Link>
              </li>
              <li>
                <Link to="/activities/khandesh-house" className="hover:text-coral-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-coral-400" />
                  <span>Khandesh House</span>
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-coral-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-coral-400" />
                  <span>Articles & Reports</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-coral-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-coral-400" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-coral-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-coral-400" />
                  <span>Our Team</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-coral-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-coral-400" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-coral-400 font-bold hover:underline flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>Donate Now</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Services & Relief */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif font-bold text-base text-white border-b border-forest-800 pb-2">
              Humanitarian Programs
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-forest-200">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
                <span>Emergency Surgery & ICU Relief</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
                <span>Cancer Patient Care Packages</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
                <span>Khandesh House 15-Bed Shelter</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
                <span>Free Daily Nutritious Meals</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
                <span>Wheelchairs & Equipment Bank</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
                <span>Free & Discounted Medicines</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-400" />
                <span>Tree Bank for Clean Air (NCAP)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif font-bold text-base text-white border-b border-forest-800 pb-2">
              Contact & Helpline
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-forest-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-coral-400 shrink-0 mt-0.5" />
                <span>{BRAND_CONTENT.contact.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-coral-400 shrink-0" />
                <a
                  href={`tel:${BRAND_CONTENT.contact.phoneRaw}`}
                  className="hover:text-white font-semibold transition-colors"
                >
                  {BRAND_CONTENT.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-coral-400 shrink-0" />
                <a
                  href={`mailto:${BRAND_CONTENT.contact.email}`}
                  className="hover:text-white font-semibold transition-colors"
                >
                  {BRAND_CONTENT.contact.email}
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-forest-900 border border-forest-800 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">
                  Hospital Coordination
                </span>
                <p className="text-[11px] text-forest-200 leading-relaxed">
                  Field volunteers active across Mumbai public hospitals: Sir J.J. Hospital, Tata Memorial Hospital, and KEM Hospital.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-900 bg-forest-950/95 py-6 text-xs text-forest-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>© {currentYear} First Aid Foundation. All Rights Reserved. Reg. No. F-16650/Jal.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1 text-forest-400 text-center sm:text-right">
            <span>Humanitarian Healthcare Organization</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">100% Patient Relief Allocation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
