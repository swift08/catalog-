import { useEffect, useState } from "react";
import logo from "@/assets/logo.webp";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6">
        <nav
          className={`flex items-center justify-between rounded-3xl px-6 py-3 transition-all duration-700 border border-white/5 ${
            scrolled ? "glass-strong shadow-2xl scale-[1.01]" : "bg-white/5 backdrop-blur-md"
          }`}
        >
          <a href="#top" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-sky-blue blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
              <img
                src={logo}
                alt="Blue Blocks Montessori"
                className="relative h-11 w-11 rounded-xl shadow-lg border border-white/10"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tighter text-white">
                BLUE BLOCKS
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold leading-none">
                Hyderabad
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-10 text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/60 md:flex">
            <a
              href="#chapter-1"
              className="transition-all hover:text-sky-blue hover:tracking-[0.35em]"
            >
              Journey
            </a>
            <a
              href="#chapter-2"
              className="transition-all hover:text-sky-blue hover:tracking-[0.35em]"
            >
              Discovery
            </a>
            <a
              href="#chapter-4"
              className="transition-all hover:text-sky-blue hover:tracking-[0.35em]"
            >
              Future
            </a>
            <a href="#visit" className="transition-all hover:text-sky-blue hover:tracking-[0.35em]">
              Trust
            </a>
          </div>

          <a
            href="#visit"
            className="group relative overflow-hidden rounded-full bg-sky-blue px-7 py-2.5 text-[11px] font-black uppercase tracking-widest text-deep-blue shadow-block transition-all hover:scale-105"
          >
            <div className="absolute inset-0 translate-y-full bg-white opacity-20 transition-transform group-hover:translate-y-0" />
            <span className="relative">Schedule a Tour</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
