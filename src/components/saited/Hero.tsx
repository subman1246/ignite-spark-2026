import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Starfield } from "./Starfield";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060f] via-[#070a1f] to-[#05060f]" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <Starfield />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-cyan-300"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          25 November 2026 · Bhubaneswar
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl"
        >
          <span className="gradient-text neon-text">SAITED</span>
          <span className="ml-3 text-white/90">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl text-sm uppercase tracking-[0.3em] text-cyan-200/70 md:text-base"
        >
          SAI International Technology &amp; Entrepreneurship Day
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-8 max-w-3xl text-xl text-white/80 md:text-3xl"
        >
          Innovation Beyond Boundaries
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("register")}
            className="pulse-glow rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-sm font-semibold text-[#04121a] transition-transform hover:scale-105"
          >
            Register Now
          </button>
          <button
            onClick={() => scrollTo("events")}
            className="rounded-full border border-cyan-400/40 bg-white/5 px-8 py-3.5 text-sm font-semibold text-cyan-200 backdrop-blur transition-all hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            Explore Events
          </button>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("countdown")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cyan-300/80"
        aria-label="Scroll down"
      >
        <ChevronDown className="scroll-hint h-7 w-7" />
      </button>
    </section>
  );
}
