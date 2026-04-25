import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

export function GrowthBlocks() {
  const { scrollYProgress } = useScroll();

  const blocks = Array.from({ length: 12 });

  return (
    <div className="pointer-events-none fixed left-10 bottom-20 z-40 hidden flex-col-reverse gap-1.5 lg:flex">
      {blocks.map((_, i) => (
        <GrowthBlock key={i} index={i} scrollYProgress={scrollYProgress} />
      ))}
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-blue/40 mt-4 -rotate-90 origin-left translate-x-4">
        Journey Progress
      </span>
    </div>
  );
}

function GrowthBlock({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const threshold = index / 12;
  const end = Math.min(1, threshold + 0.05);
  const opacity = useTransform(scrollYProgress, [threshold, end], [0, 1]);
  const scale = useTransform(scrollYProgress, [threshold, end], [0.5, 1]);
  const y = useTransform(scrollYProgress, [threshold, end], [20, 0]);

  return (
    <motion.div
      style={{ opacity, scale, y }}
      className="block-3d h-10 w-10 rounded-lg bg-sky-blue/20 backdrop-blur-md border border-white/10"
    >
      <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-sky-blue/40">
        0{index + 1}
      </div>
    </motion.div>
  );
}
