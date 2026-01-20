import { useState, useEffect, useRef } from 'react';
import TitleSlide from './slides/TitleSlide';
import WhoAmI from './slides/WhoAmI';
import Agenda from './slides/Agenda';
import WhyOnlineTeaching from './slides/WhyOnlineTeaching';
import MindsetBasics from './slides/MindsetBasics';
import HardwareEssentials from './slides/HardwareEssentials';
import PlatformsToFindStudents from './slides/PlatformsToFindStudents';
import AudienceProfessionals from './slides/AudienceProfessionals';
import AudienceChildren from './slides/AudienceChildren';
import SupportingTools from './slides/SupportingTools';
import ExtraCourses from './slides/ExtraCourses';
import QAndA from './slides/QAndA';
import ContactProfile from './slides/ContactProfile';

const slides = [
  { Component: TitleSlide, id: 'title' },
  { Component: WhoAmI, id: 'who-am-i' },
  { Component: Agenda, id: 'agenda' },
  { Component: WhyOnlineTeaching, id: 'why-online' },
  { Component: MindsetBasics, id: 'mindset' },
  { Component: HardwareEssentials, id: 'hardware' },
  { Component: PlatformsToFindStudents, id: 'platforms' },
  { Component: AudienceProfessionals, id: 'professionals' },
  { Component: AudienceChildren, id: 'children' },
  { Component: SupportingTools, id: 'tools' },
  { Component: ExtraCourses, id: 'courses' },
  { Component: QAndA, id: 'qa' },
  { Component: ContactProfile, id: 'contact' },
];

export default function Presentation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState<Set<number>>(new Set([0]));
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      slideRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const slideMiddle = rect.top + rect.height / 2;
          if (slideMiddle >= 0 && slideMiddle <= windowHeight) {
            setActiveSlide(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = slideRefs.current.findIndex((ref) => ref === entry.target);
        if (entry.isIntersecting && index !== -1) {
          setVisibleSlides((prev) => new Set(prev).add(index));
        }
      });
    }, observerOptions);

    slideRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex items-center gap-4">
        <div className="flex flex-col items-center gap-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'bg-teal-400 scale-150'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative w-1 h-96 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-teal-400 to-teal-600 transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => (slideRefs.current[index] = el)}
          className={`min-h-screen flex items-center justify-center p-8 transition-all duration-1000 ease-out ${
            visibleSlides.has(index)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
          }`}
        >
          <slide.Component />
        </div>
      ))}
    </div>
  );
}
