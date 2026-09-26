import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { Mail, Phone, Send } from 'lucide-react';
import { FaDiscord as Discord } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import AnimatedCursor from './components/AnimatedCursor';
import ScrollProgress from './components/ScrollProgress';
import CyanBorder from './components/CyanBorder';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const updateFooterVisibility = () => {
      const heroSection = document.querySelector('main > section:first-of-type');
      const sections = Array.from(document.querySelectorAll('main > section'));

      if (!heroSection || sections.length === 0) return;

      const viewportMidpoint = window.scrollY + window.innerHeight / 2;
      const heroTop = heroSection.offsetTop;
      const heroBottom = heroTop + heroSection.offsetHeight;

      const isInHero = viewportMidpoint >= heroTop && viewportMidpoint <= heroBottom;
      const isBelowHero = window.scrollY > heroBottom - 80;

      setShowFooter(!isInHero && isBelowHero && sections.length > 1);
    };

    updateFooterVisibility();
    window.addEventListener('scroll', updateFooterVisibility);
    window.addEventListener('resize', updateFooterVisibility);

    return () => {
      window.removeEventListener('scroll', updateFooterVisibility);
      window.removeEventListener('resize', updateFooterVisibility);
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Preloader />
      <AnimatedCursor />
      <ScrollProgress />
      {/* 👉 Border container - do not remove */}
      <CyanBorder />
      <Navbar />

      <main className="min-h-screen pb-24">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
      </main>

      {showFooter && (
        <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/80 bg-white/80 text-slate-700 backdrop-blur-md shadow-[0_-8px_30px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-200">
          <div className="container relative mx-auto flex flex-col gap-3 px-3 py-3 md:flex-row md:items-center md:justify-between md:gap-4 lg:px-4">
            <p className="pointer-events-none text-left text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
              © 2026 Michael Kao. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end md:gap-3">

              <span className="flex items-center gap-2 rounded-full bg-primary/10 px-2 py-1.5 text-primary sm:px-3 sm:py-2" aria-label="Email">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-10 sm:w-10">
                  <Mail size={16} className="sm:h-[18px] sm:w-[18px]" />
                </span>
                <span className="text-[10px] font-medium sm:text-sm lg:text-base">michaelkao1998@gmail.com</span>
              </span>

              <span className="flex items-center gap-2 rounded-full bg-primary/10 px-2 py-1.5 text-primary sm:px-3 sm:py-2" aria-label="Phone">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-10 sm:w-10">
                  <Phone size={16} className="sm:h-[18px] sm:w-[18px]" />
                </span>
                <span className="text-[10px] font-medium sm:text-sm lg:text-base">+1 708 392 0847</span>
              </span>

              <span className="flex items-center gap-2 rounded-full bg-primary/10 px-2 py-1.5 text-primary sm:px-3 sm:py-2" aria-label="Telegram">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-10 sm:w-10">
                  <Send size={16} className="sm:h-[18px] sm:w-[18px]" />
                </span>
                <span className="text-[10px] font-medium sm:text-sm lg:text-base">@spicy906</span>
              </span>

              <span className="flex items-center gap-2 rounded-full bg-primary/10 px-2 py-1.5 text-primary sm:px-3 sm:py-2" aria-label="Discord">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-10 sm:w-10">
                  <Discord size={16} className="sm:h-[18px] sm:w-[18px]" />
                </span>
                <span className="text-[10px] font-medium sm:text-sm lg:text-base">@freshman_0903</span>
              </span>

            </div>
          </div>
        </footer>
      )}
    </ThemeProvider>
  );
}

export default App;
