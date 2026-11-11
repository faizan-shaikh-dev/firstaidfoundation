import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Heart,
  Menu,
  X,
  Phone,
  MapPin,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { BRAND_CONTENT } from '../data/foundationContent';

const NAV_ROUTES = [
  { name: 'Home', path: '/' },
  { name: 'Activities', path: '/activities' },
  { name: 'Khandesh House', path: '/activities/khandesh-house', badge: 'Shelter' },
  { name: 'Articles', path: '/articles', badge: 'New' },
  { name: 'About Us', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const isRouteActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/activities') return location.pathname === '/activities';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-forest-900 focus:text-white focus:px-5 focus:py-3 focus:rounded-xl focus:shadow-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Top Humanitarian Trust Bar */}
      <div className="bg-forest-950 text-forest-100 border-b border-forest-800/80 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>{BRAND_CONTENT.registrationNo}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-forest-200">
              <MapPin className="w-3.5 h-3.5 text-coral-400 shrink-0" />
              <span>Mehrun, Jalgaon, Maharashtra – 425001</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href={`tel:${BRAND_CONTENT.contact.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-coral-300 transition-colors"
              aria-label="Call First Aid Foundation emergency helpline"
            >
              <Phone className="w-3.5 h-3.5 text-coral-400 shrink-0" />
              <span>Helpline: {BRAND_CONTENT.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-editorial border-b border-ivory-border'
            : 'bg-white border-b border-ivory-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 lg:gap-3 xl:gap-4">
            
            {/* Brand Logo & Identity */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 group shrink-0"
              aria-label="First Aid Foundation Home"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-ivory-warm p-1 sm:p-1.5 border border-ivory-border shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="First Aid Foundation Official Emblem"
                  className="w-full h-full object-contain"
                  width={44}
                  height={44}
                />
              </div>
              <div className="flex flex-col shrink-0">
                <span className="font-serif font-bold text-xs xs:text-sm sm:text-base lg:text-base xl:text-xl text-navy-900 group-hover:text-forest-900 transition-colors leading-tight whitespace-nowrap">
                  First Aid Foundation
                </span>
                <span className="text-[9px] sm:text-[10px] xl:text-[11px] font-bold text-coral-600 tracking-wider uppercase whitespace-nowrap hidden xs:block">
                  {BRAND_CONTENT.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2 shrink min-w-0"
            >
              {NAV_ROUTES.map((route) => {
                const active = isRouteActive(route.path);
                return (
                  <Link
                    key={route.path}
                    to={route.path}
                    aria-current={active ? 'page' : undefined}
                    className={`relative whitespace-nowrap px-2 py-1.5 xl:px-2.5 2xl:px-3.5 xl:py-2 text-xs xl:text-sm font-semibold transition-all duration-150 inline-flex items-center gap-1 xl:gap-1.5 shrink-0 rounded-xl ${
                      active
                        ? 'text-forest-900 bg-forest-50/90 font-bold'
                        : 'text-navy-700 hover:text-forest-900 hover:bg-ivory-warm'
                    }`}
                  >
                    <span>{route.name}</span>
                    {route.badge && (
                      <span className="hidden xl:inline-block text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-teal-800 text-white leading-none">
                        {route.badge}
                      </span>
                    )}
                    {active && (
                      <span
                        className="absolute bottom-0.5 left-2 right-2 xl:left-2.5 xl:right-2.5 2xl:left-3.5 2xl:right-3.5 h-0.5 bg-coral-500 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-1.5 xl:gap-2 px-3.5 py-2 xl:px-5 xl:py-2.5 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-xs xl:text-sm shadow-coral-glow transition-all duration-200 active:scale-[0.98] whitespace-nowrap shrink-0"
              >
                <Heart className="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-current shrink-0" />
                <span>Donate Now</span>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-coral-600 hover:bg-coral-700 text-white font-bold text-xs shadow-xs shrink-0 whitespace-nowrap"
              >
                <Heart className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>Donate</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-forest-900 bg-ivory-warm hover:bg-forest-100 border border-ivory-border transition-colors cursor-pointer shrink-0"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          {mobileMenuOpen && (
            <nav
              id="mobile-navigation-drawer"
              aria-label="Mobile Navigation"
              className="lg:hidden mt-2 pt-3 pb-5 border-t border-ivory-border bg-white rounded-2xl shadow-editorial-lg px-3 sm:px-4 space-y-1.5 animate-fade-up"
            >
              {NAV_ROUTES.map((route) => {
                const active = isRouteActive(route.path);
                return (
                  <Link
                    key={route.path}
                    to={route.path}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-colors ${
                      active
                        ? 'bg-forest-900 text-white font-bold'
                        : 'text-navy-800 hover:bg-ivory-warm'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {route.path === '/activities/khandesh-house' && (
                        <Building2 className="w-4 h-4 text-coral-500 shrink-0" />
                      )}
                      <span>{route.name}</span>
                    </span>
                    {route.badge && (
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          active ? 'bg-coral-500 text-white' : 'bg-forest-100 text-forest-900'
                        }`}
                      >
                        {route.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-ivory-border flex flex-col gap-2.5">
                <Link
                  to="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-coral-600 hover:bg-coral-700 text-white font-bold text-sm sm:text-base shadow-md"
                >
                  <Heart className="w-4 h-4 fill-current shrink-0" />
                  <span>Donate Now — Save a Life</span>
                </Link>
                <div className="flex items-center justify-center px-2 pt-1 text-xs text-navy-600">
                  <span>Helpline: {BRAND_CONTENT.contact.phoneDisplay}</span>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
