import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { navLinks } from '../data/navigation';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
        : 'bg-white border-b border-slate-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink">
            <img 
              src="/logo.png" 
              alt="First Aid Foundation Logo" 
              className="h-9 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-300" 
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-xl md:text-2xl text-[#184E82] tracking-tight leading-none">
                FIRST AID
              </span>
              <span className="font-bold text-[10px] sm:text-xs md:text-sm text-[#EB1F23] tracking-widest leading-none mt-0.5 sm:mt-1">
                FOUNDATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-semibold transition-colors duration-200 py-1 relative ${
                    isActive 
                      ? 'text-[#184E82] font-bold' 
                      : 'text-[#5F5F5F] hover:text-[#184E82]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EB1F23] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Donate CTA */}
          <div className="hidden lg:flex items-center">
            <Button to="/donate" variant="primary" size="md" icon={Heart}>
              Donate
            </Button>
          </div>

          {/* Mobile Hamburger Button & Action */}
          <div className="flex items-center gap-1.5 sm:gap-3 lg:hidden shrink-0">
            <Button to="/donate" variant="primary" size="sm" icon={Heart} className="px-2.5 py-1.5 text-xs sm:text-sm">
              Donate
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-[#184E82] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-slate-100 bg-white rounded-b-2xl shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3 px-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-[#184E82] font-bold border-l-4 border-[#EB1F23]'
                        : 'text-[#5F5F5F] hover:bg-slate-50 hover:text-[#184E82]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-2 px-2">
                <Button to="/donate" variant="primary" size="lg" icon={Heart} className="w-full">
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
