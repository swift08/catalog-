import { motion } from "framer-motion";
import { FloatingBlocks } from "./FloatingBlocks";
import { useEffect, useRef, useState } from "react";
import { audioStore } from "@/lib/audio-store";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isUnmuted, setIsUnmuted] = useState(false);
  const id = "hero-video";

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
    <section
      id="top"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-cosmic"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="/videos/Pony Tail Girl.webm"
          poster="/thumbnails/hero.webp"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-20 grayscale transition-opacity duration-1000 group-hover:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/80 via-deep-blue/40 to-background" />

        <button
          onClick={toggleSound}
          className="absolute bottom-10 right-10 z-20 flex h-12 w-12 items-center justify-center rounded-full glass-strong shadow-2xl transition-all hover:scale-110 active:scale-95"
        >
          {isUnmuted ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-6 w-6 text-sky-blue"
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
              className="h-6 w-6 text-white/40"
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

      <div className="pointer-events-none absolute -top-40 left-1/4 h-[40rem] w-[40rem] rounded-full bg-lilac/20 blur-[150px] animate-pulse-glow" />
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[40rem] w-[40rem] rounded-full bg-sky-blue/20 blur-[150px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <FloatingBlocks />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <span className="rounded-full glass px-6 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-sky-blue/90 shadow-xl">
            Blue Blocks Montessori · Hyderabad
          </span>
        </motion.div>

        <h1 className="text-balance font-display text-5xl font-black leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl">
          {"A child's journey".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mr-4 inline-block"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block bg-gradient-to-r from-sky-blue via-warm to-lilac bg-clip-text text-transparent"
          >
            unfolding.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mx-auto mt-12 max-w-3xl text-balance text-xl font-medium leading-relaxed text-foreground/60 md:text-2xl"
        >
          Witness the blossoming of potential in an environment designed for wonder. A cinematic
          scroll through the future of learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <a
            href="#chapter-1"
            className="group relative flex h-20 w-20 items-center justify-center rounded-full glass-strong shadow-block transition-all duration-500 hover:scale-110 hover:bg-sky-blue/20"
          >
            <div className="absolute inset-0 rounded-full bg-sky-blue opacity-10 blur-md animate-pulse" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-8 w-8 text-sky-blue animate-bounce"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40">
            scroll to begin
          </span>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </section>
  );
}
