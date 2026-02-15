"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Spotlight que segue o mouse (suave, com spring)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });
  const spotlightStyle = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(circle 420px at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(255,255,255,0.04) 0%, transparent 60%)`
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }, [mouseX, mouseY]);

  // Parallax no scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const orbsY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background: gradient + subtle glow (parallax) */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,var(--glow),transparent_50%)]"
        style={{ y: bgY }}
        aria-hidden
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,rgba(63,63,70,0.15),transparent_60%)]"
        style={{ y: bgY }}
        aria-hidden
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--gradient-start),var(--gradient-end))]"
        style={{ y: bgY }}
        aria-hidden
      />

      {/* Spotlight que segue o mouse (suave) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
        style={{ background: spotlightStyle }}
      />

      {/* Noise overlay - textura cinematográfica */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      {/* Parallax / ambient glow orbs */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl"
        style={{ y: orbsY }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-zinc-500/[0.03] blur-3xl"
        style={{ y: orbsY }}
        animate={{
          x: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      />

      {/* Content (parallax + fade ao rolar) */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Desenvolvedor Frontend & UI
        </motion.p>
        <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Criando experiências
          </motion.span>
          <motion.span
            className="block text-gradient-animated sm:mt-1"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            digitais memoráveis
          </motion.span>
        </h1>
        {/* Linha decorativa animada */}
        <motion.div
          className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.75, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: "center" }}
        />
        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 sm:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          Desenvolvemos sistemas e websites sob medida para você. Aplicativos nativos Android com design minimalista, código limpo e foco total em performance. Especialista em Next.js, React e interfaces que encantam.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              className={cn(
                "inline-flex h-12 min-w-[160px] items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black",
                "transition-all duration-300 hover:bg-zinc-200",
                "shadow-[0_0_0_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_0_rgba(255,255,255,0.12)]"
              )}
            >
              Ver projetos
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className={cn(
                "inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border border-zinc-600 bg-transparent px-8 text-base font-medium text-white",
                "transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-800/50",
                "hover:shadow-[0_0_30px_0_rgba(255,255,255,0.06)]"
              )}
            >
              Contato
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="h-10 w-6 rounded-full border-2 border-zinc-600"
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="mx-auto mt-2 h-2 w-1.5 rounded-full bg-zinc-500"
            layout
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
