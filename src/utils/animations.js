import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initializes visible, fluid, dignified scroll-triggered animations across the page.
 * Uses GSAP & ScrollTrigger directly on elements for reliable entry transitions.
 */
export function initPageAnimations(container = document) {
  if (typeof window === 'undefined') return () => {};

  const triggers = [];

  // 1. Hero Reveal Stagger (runs smoothly when page loads / routes change)
  const heroGroup = container.querySelector('.gsap-hero-group');
  if (heroGroup) {
    const heroElements = heroGroup.querySelectorAll('.gsap-hero-item');
    if (heroElements.length > 0) {
      const tween = gsap.fromTo(
        heroElements,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        }
      );
      triggers.push(tween);
    }
  }

  // Hero visual frame (right column image)
  const heroVisual = container.querySelector('.gsap-hero-visual');
  if (heroVisual) {
    const visualTween = gsap.fromTo(
      heroVisual,
      { opacity: 0, y: 28, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        delay: 0.15,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
      }
    );
    triggers.push(visualTween);
  }

  // 2. Card Groups Stagger (e.g., services, pillars, cancer kits, stats, trustees)
  const cardGroups = container.querySelectorAll('.gsap-card-group');
  cardGroups.forEach((group) => {
    const cards = Array.from(group.children);
    if (cards && cards.length > 0) {
      const tween = gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 36,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            once: true,
          },
        }
      );
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
      triggers.push(tween);
    }
  });

  // 3. Standalone Fade-Up elements (e.g. section headings, highlight boxes)
  const fadeUpElements = container.querySelectorAll('.gsap-fade-up');
  fadeUpElements.forEach((el) => {
    const tween = gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      }
    );
    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    triggers.push(tween);
  });

  // 4. Documentary Photo & Visual reveals
  const photoFrames = container.querySelectorAll('.gsap-photo-reveal');
  photoFrames.forEach((frame) => {
    const tween = gsap.fromTo(
      frame,
      {
        opacity: 0,
        y: 28,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: frame,
          start: 'top 85%',
          once: true,
        },
      }
    );
    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    triggers.push(tween);
  });

  // Cleanup callback to kill active triggers and tweens when component unmounts
  return () => {
    triggers.forEach((item) => {
      if (item && typeof item.kill === 'function') {
        item.kill();
      }
    });
  };
}

export { gsap, ScrollTrigger };


