import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode, useState, useEffect } from "react";
import { audioStore } from "@/lib/audio-store";

export interface Slide {
  title: string;
  subtitle: string;
  body: string;
}

interface ChapterProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  videoSrc?: string;
  poster?: string;
  imageAlt: string;
  slides: Slide[];
  tone?: "calm" | "playful" | "energy" | "aspire" | "warm";
  reverse?: boolean;
  originalRatio?: boolean;
  decoration?: ReactNode;
}

const toneClasses: Record<NonNullable<ChapterProps["tone"]>, string> = {
  calm: "from-deep-blue via-background to-background",
  playful: "from-background via-deep-blue to-background",
  energy: "from-background via-background to-deep-blue",
  aspire: "from-deep-blue via-background to-background",
  warm: "from-background via-deep-blue/60 to-background",
};

export function Chapter({
  id,
  index,
  eyebrow,
  title,
  intro,
  image,
  videoSrc,
  poster,
  imageAlt,
  slides,
  tone = "calm",
  reverse = false,
  originalRatio = false,
  decoration,
}: ChapterProps) {
  const ref = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yImg = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const [isHovered, setIsHovered] = useState(false);
  const [isUnmuted, setIsUnmuted] = useState(false);

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

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuteState = !isUnmuted;
    setIsUnmuted(newMuteState);
    if (videoRef.current) videoRef.current.muted = !newMuteState;
    if (newMuteState) {
      audioStore.setActiveVideo(id);
    } else if (audioStore.getActiveVideo() === id) {
      audioStore.setActiveVideo(null);
    }
  };

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoRef.current?.play().catch(() => {});
            } else {
              videoRef.current?.pause();
            }
          });
        },
        { threshold: 0.1 },
      );
      observer.observe(ref.current!);
      return () => observer.disconnect();
    }
  }, [videoSrc]);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative overflow-hidden bg-gradient-to-b ${toneClasses[tone]} py-4 md:py-6`}
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -left-24 top-20 h-[30rem] w-[30rem] rounded-full bg-sky-blue/10 blur-[140px]"
      />
      <motion.div
        style={{ y: yImg }}
        className="pointer-events-none absolute -right-24 bottom-20 h-[30rem] w-[30rem] rounded-full bg-lilac/10 blur-[140px]"
      />
      {decoration}

      <div className="container relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 max-w-4xl"
        >
          <div className="mb-8 flex items-center gap-6">
            <span className="block-3d flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-blue font-display text-xl font-bold text-deep-blue shadow-lg">
              {index}
            </span>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-sky-blue/40" />
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-blue/70">
                {eyebrow}
              </span>
            </div>
          </div>
          <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-foreground/70 md:text-xl">
            {intro}
          </p>
        </motion.div>

        <div
          className={`grid gap-16 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotate }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative mx-auto w-full max-w-[280px]"
          >
            <div
              className={`relative rounded-[1.5rem] glass-strong p-2 shadow-2xl transition-all duration-700 group-hover:shadow-sky-blue/20 ${originalRatio ? "" : "aspect-video"}`}
            >
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/5 to-transparent" />
              <div
                className={`relative overflow-hidden rounded-[1.25rem] ${originalRatio ? "" : "aspect-video"}`}
              >
                {videoSrc ? (
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    poster={poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className={`h-full w-full ${originalRatio ? "object-contain" : "object-cover"} transition-transform duration-[2000ms] group-hover:scale-110`}
                  />
                ) : (
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    className={`h-full w-full ${originalRatio ? "object-contain" : "object-cover"} transition-transform duration-[2000ms] group-hover:scale-110`}
                  />
                )}

                {videoSrc && (
                  <button
                    onClick={toggleSound}
                    className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full glass-strong shadow-lg transition-transform hover:scale-110 active:scale-95"
                  >
                    {isUnmuted ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="h-4 w-4 text-sky-blue"
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
                        className="h-4 w-4 text-white/60"
                      >
                        <path
                          d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                )}

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-deep-blue/40 via-transparent to-transparent transition-opacity duration-700 ${isHovered ? "opacity-30" : "opacity-60"}`}
                />

                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-sky-blue animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                    {isHovered ? "Immersive Discovery" : "Cinematic Moment"}
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="block-3d absolute -bottom-6 -right-4 h-16 w-16 rounded-2xl bg-warm/80 backdrop-blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -8, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="block-3d absolute -top-4 -left-4 h-10 w-10 rounded-xl bg-lilac/80 backdrop-blur-xl"
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            {slides.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: reverse ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl glass p-7 transition-all duration-500 hover:scale-[1.03] hover:bg-white/10 hover:shadow-xl"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-blue">
                      {s.subtitle}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-sky-blue">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-foreground/60">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
