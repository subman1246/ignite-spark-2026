import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Lightbulb, Users, Target } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { EventDetail } from "../../data/eventDetails";
import { Nav } from "./Nav";

type Props = { event: EventDetail };

export function EventPage({ event }: Props) {
  const imgSrc = `https://source.unsplash.com/1200x600/?${encodeURIComponent(event.unsplashKeyword)}`;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#05060f] text-white">
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060f] via-[#070a1f] to-[#05060f]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />

        {/* Faded hero background image */}
        <div className="absolute inset-0 z-0">
          <img src={imgSrc} alt="" className="h-full w-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05060f] via-[#05060f]/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <Link
              to="/"
              hash="events"
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-widest text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Events
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-7xl"
          >
            {event.emoji}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold tracking-tight md:text-7xl"
          >
            <span className="gradient-text neon-text">{event.title}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/70 md:text-xl"
          >
            {event.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-cyan-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            SAITED 2026 · 25 November · Bhubaneswar
          </motion.div>
        </div>
      </section>

      {/* Showcase image */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.2)]"
          >
            <img
              src={imgSrc}
              alt={event.title}
              className="w-full object-cover opacity-80"
              style={{ maxHeight: "400px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05060f]/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <div className="mx-auto max-w-4xl px-6 pb-24">

        {/* What is this event */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass mt-6 rounded-2xl p-8"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">Overview</p>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">What is this event?</h2>
          <div className="mt-5 space-y-4">
            {event.description.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/70 md:text-base">
                {para}
              </p>
            ))}
          </div>
        </motion.section>

        {/* What to expect */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass mt-6 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-cyan-400" />
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">Programme</p>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">What to expect</h2>
          <ul className="mt-5 space-y-3">
            {event.whatToExpect.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                <span className="text-sm leading-relaxed text-white/75 md:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Eligibility */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass mt-6 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-cyan-400" />
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">Who can join</p>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Eligibility</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
            {event.eligibility}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            Class 1 – 12 · Any school · Any city
          </div>
        </motion.section>

        {/* Tips */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass mt-6 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3">
            <Lightbulb className="h-5 w-5 text-cyan-400" />
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">Preparation</p>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Tips to prepare</h2>
          <ul className="mt-5 space-y-3">
            {event.tips.map((tip, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-[10px] font-bold text-cyan-300">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-white/75 md:text-base">{tip}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center"
        >
          <p className="mb-4 text-sm text-white/50">
            SAITED 2026 · 25 November · SAI International School, Bhubaneswar
          </p>
          <a
            href="/#register"
            className="pulse-glow inline-block rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-[#04121a] transition-transform hover:scale-105"
          >
            Register for this event
          </a>
          <div className="mt-5">
            <Link
              to="/"
              hash="events"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-cyan-300/60 transition-all hover:text-cyan-300"
            >
              <ArrowLeft className="h-3 w-3" />
              Back to all events
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
