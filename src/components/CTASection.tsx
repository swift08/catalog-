import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { audioStore } from "@/lib/audio-store";

export function CTASection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isUnmuted, setIsUnmuted] = useState(false);
  const id = "cta-video";

  useEffect(() => {
    const unsubscribe = audioStore.subscribe((activeId) => {
      if (activeId !== id) {
        setIsUnmuted(false);
        if (videoRef.current) videoRef.current.muted = true;
      }
    });
    return () => {
      unsubscribe();
    };
  }, [id]);

  const toggleSound = () => {
    const newMuteState = !isUnmuted;
    setIsUnmuted(newMuteState);
    if (videoRef.current) videoRef.current.muted = !newMuteState;
    if (newMuteState) {
      audioStore.setActiveVideo(id);
    } else if (audioStore.getActiveVideo() === id) {
      audioStore.setActiveVideo(null);
    }
  };

  return (
    <section id="visit" className="relative overflow-hidden py-12 md:py-16">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/videos/Safe Transport.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-20 grayscale transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-deep-blue/40" />

        <button
          onClick={toggleSound}
          className="absolute bottom-10 right-10 z-20 flex h-10 w-10 items-center justify-center rounded-full glass-strong shadow-2xl transition-all hover:scale-110 active:scale-95"
        >
          {isUnmuted ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-5 w-5 text-sky-blue"
            >
              <path
                d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-5 w-5 text-white/40"
            >
              <path
                d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-left"
          >
            <span className="mb-8 inline-block rounded-full glass-strong px-6 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-sky-blue/90 shadow-xl">
              🛡️ The Blue Blocks Promise
            </span>
            <h2 className="text-balance font-display text-5xl font-black leading-[0.95] tracking-tighter text-white md:text-7xl">
              Join the <br />
              <span className="bg-gradient-to-r from-sky-blue to-warm bg-clip-text text-transparent">
                Journey.
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-foreground/60 md:text-xl">
              Experience the future of learning first-hand. Our campuses in Gachibowli & Tellapur
              are ready to welcome you.
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <a
                href="#"
                className="group relative overflow-hidden rounded-full bg-sky-blue px-10 py-4 text-sm font-black uppercase tracking-widest text-deep-blue shadow-block transition-all hover:scale-105"
              >
                <div className="absolute inset-0 translate-y-full bg-white opacity-20 transition-transform group-hover:translate-y-0" />
                <span className="relative">Schedule a Tour</span>
              </a>
              <a
                href="#"
                className="rounded-full glass-strong px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-white/10"
              >
                Get Brochure
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {[
              { city: "Gachibowli", line: "The Original Campus", icon: "🏛️" },
              { city: "Tellapur", line: "Our Future-Forward Hub", icon: "🚀" },
            ].map((c) => (
              <div
                key={c.city}
                className="group relative rounded-[2rem] glass-strong p-6 text-left transition-all duration-500 hover:scale-105 hover:bg-white/10 shadow-2xl"
              >
                <div className="mb-3 text-2xl opacity-80 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  {c.icon}
                </div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-sky-blue">
                  Hyderabad
                </p>
                <p className="mt-1 font-display text-xl font-bold text-white tracking-tight">
                  {c.city}
                </p>
                <p className="mt-1 text-[11px] font-medium text-foreground/50">{c.line}</p>
                <div className="absolute bottom-6 right-8 opacity-0 transition-opacity group-hover:opacity-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 text-sky-blue"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}

            <div className="sm:col-span-2 rounded-[2.5rem] glass-strong p-8 flex items-center justify-between shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-warm/20 flex items-center justify-center text-xl">
                  📞
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/40">
                    Inquiry Line
                  </p>
                  <p className="font-display font-bold text-white">+91 9000 955 022</p>
                </div>
              </div>
              <div className="h-2 w-2 rounded-full bg-sky-blue animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
