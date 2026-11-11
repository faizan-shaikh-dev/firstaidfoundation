import { useEffect, useRef, useState, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, initPageAnimations } from '../utils/animations';

const SmoothScrollContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize Lenis & synchronize with GSAP Ticker
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.3,
      infinite: false,
      autoRaf: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      setScrollProgress(e.progress || 0);
    });

    // Synchronize Lenis with GSAP's central RAF ticker
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Global listener for smooth anchor navigation (#bank-transfer, etc.)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (href && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, { offset: -88, duration: 1.1 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handle route transitions: scroll to top & initialize page entrance animations
  useEffect(() => {
    let cleanupAnimations = null;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Let the new route render into the DOM before initializing animations
    const timer = setTimeout(() => {
      // Clean up previous triggers to avoid stale references
      ScrollTrigger.getAll().forEach((t) => t.kill());

      cleanupAnimations = initPageAnimations(document);

      // Force ScrollTrigger to compute accurate element offsets
      ScrollTrigger.refresh();
    }, 70);

    return () => {
      clearTimeout(timer);
      if (typeof cleanupAnimations === 'function') {
        cleanupAnimations();
      }
    };
  }, [location.pathname]);

  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -88, duration: 1.1, ...options });
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo, scrollProgress }}>
      {/* Discreet reading progress bar at the very top of viewport */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none origin-left bg-gradient-to-r from-teal-500 via-coral-500 to-forest-800 transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
      {children}
    </SmoothScrollContext.Provider>
  );
}
