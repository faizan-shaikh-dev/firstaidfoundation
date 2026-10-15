import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Heart, 
  Phone, 
  Mail, 
  Home, 
  Activity, 
  Building2, 
  Info, 
  Users, 
  PhoneCall, 
  ChevronRight, 
  ShieldCheck 
} from 'lucide-react';
import { navLinks } from '../data/navigation';

const iconMap = {
  '/': Home,
  '/activities': Activity,
  '/activities/khandesh-house': Building2,
  '/about': Info,
  '/team': Users,
  '/contact': PhoneCall,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Fixed Navbar Container (Always stays pinned at top on desktop and mobile) */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* Top Utility Bar for Desktop */}
        <div className={`hidden lg:block bg-[#184E82] text-white text-xs px-4 sm:px-6 lg:px-8 border-b border-blue-900/40 transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100'
        }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-blue-100 font-medium">
                <Phone className="w-3.5 h-3.5 text-red-300" />
                <span>Helpline: <a href="tel:9970809946" className="text-white font-bold hover:underline">+91 9970809946</a> / <a href="tel:8668333602" className="text-white font-bold hover:underline">8668333602</a></span>
              </div>
              <div className="flex items-center gap-2 text-blue-100 font-medium">
                <Mail className="w-3.5 h-3.5 text-red-300" />
                <a href="mailto:firstaid2015@yahoo.com" className="text-white hover:underline">firstaid2015@yahoo.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-blue-200">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Reg. No. F-16650/Jal (Bombay Public Trust Act)
              </span>
              <span>•</span>
              <span className="text-white font-semibold">Jalgaon & Mumbai Medical Relief</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md' 
            : 'bg-white border-b border-slate-100 shadow-xs'
        }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0 pr-2">
              <img 
                src="/logo.png" 
                alt="First Aid Foundation Logo" 
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-300 shrink-0" 
              />
              <div className="flex flex-col min-w-0">
                <span className="font-extrabold text-sm sm:text-lg md:text-xl text-[#184E82] tracking-tight leading-none truncate">
                  FIRST AID
                </span>
                <span className="font-bold text-[9px] sm:text-[11px] md:text-xs text-[#EB1F23] tracking-widest leading-none mt-0.5 sm:mt-1 truncate">
                  FOUNDATION
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm xl:text-base font-semibold transition-colors duration-200 py-1 relative ${
                      isActive 
                        ? 'text-[#184E82] font-bold' 
                        : 'text-[#5F5F5F] hover:text-[#184E82]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#EB1F23] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Donate CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EB1F23] hover:bg-[#B91417] text-white text-sm font-bold shadow-md shadow-red-500/20 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Donate</span>
              </Link>
            </div>

            {/* Mobile Actions: Compact Donate + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <Link 
                to="/donate" 
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#EB1F23] text-white text-xs font-bold hover:bg-[#B91417] transition-all shadow-xs"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Donate</span>
              </Link>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-[#184E82] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#184E82]/20"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto bg-white border-b border-slate-200 shadow-2xl p-4 sm:p-6 rounded-b-3xl lg:hidden animate-fadeIn">
            <div className="flex flex-col space-y-3">
              
              {/* Links List */}
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  const IconComponent = iconMap[link.path] || Activity;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-[#184E82] font-bold border-l-4 border-[#EB1F23]'
                          : 'text-[#5F5F5F] hover:bg-slate-50 hover:text-[#184E82]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#EB1F23]' : 'text-[#184E82]/70'}`} />
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#EB1F23]' : 'text-slate-300'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Helpline Call Card */}
              <a 
                href="tel:9970809946" 
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-[#184E82] hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100/70 text-[#184E82] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] text-[#5F5F5F] block font-medium">Emergency Patient Helpline</span>
                    <span className="text-xs font-bold text-[#184E82]">+91 9970809946</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full shrink-0">
                  24/7 Call
                </span>
              </a>

              {/* Donate Action Button */}
              <div className="pt-2">
                <Link 
                  to="/donate" 
                  className="w-full bg-[#EB1F23] hover:bg-[#B91417] text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-red-500/25 flex items-center justify-center gap-2 text-sm transition-transform active:scale-95"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Donate for Patient Relief</span>
                </Link>
              </div>

              {/* Trust Footer Notice */}
              <div className="text-center pt-3 border-t border-slate-100">
                <p className="text-[11px] text-[#5F5F5F] flex items-center justify-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Reg. No. F-16650/Jal (Bombay Public Trust Act)</span>
                </p>
              </div>

            </div>
          </div>
        )}
      </div>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Spacer to preserve document flow underneath fixed header */}
      <div className="h-16 sm:h-20 lg:h-[116px] w-full shrink-0 pointer-events-none" aria-hidden="true" />
    </>
  );
}
