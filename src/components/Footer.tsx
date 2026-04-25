import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background py-20 overflow-hidden">
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-blue/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:items-start">
            <div className="flex items-center gap-5">
              <img
                src={logo}
                alt="Blue Blocks"
                className="h-14 w-14 rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="flex flex-col">
                <p className="font-display text-2xl font-black tracking-tighter text-white">
                  BLUE BLOCKS
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40">
                  Montessori School · Hyderabad
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-foreground/40 md:text-left">
              India's largest team of AMI-certified educators, nurturing potential since 2009.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40">
            <a href="#chapter-1" className="transition hover:text-sky-blue">
              Journey
            </a>
            <a href="#chapter-2" className="transition hover:text-sky-blue">
              Discovery
            </a>
            <a href="#chapter-4" className="transition hover:text-sky-blue">
              Future
            </a>
            <a href="#visit" className="transition hover:text-sky-blue">
              Visit
            </a>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex gap-4">
              {["FB", "IG", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass-strong text-[10px] font-black transition-all hover:scale-110 hover:bg-sky-blue hover:text-deep-blue shadow-lg"
                >
                  {s}
                </a>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">
              © {new Date().getFullYear()} Blue Blocks. Crafted for Wonder.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
