import { motion } from "motion/react";

export const EVENTS = [
  { emoji: "🔬", title: "Tech Fair", desc: "Showcase student-built tech projects and prototypes." },
  { emoji: "✈️", title: "Aeromodelling", desc: "Design and fly your own model aircraft." },
  { emoji: "💻", title: "CODEx Gaming Lab", desc: "Competitive coding and gaming challenges." },
  { emoji: "🚀", title: "Start-Up Park", desc: "Pitch your business idea to a live panel." },
  { emoji: "🏥", title: "Med Talk", desc: "Explore the intersection of science and medicine." },
  { emoji: "⚡", title: "ENERGIZE", desc: "Energy science workshops and experiments." },
  { emoji: "🔍", title: "Crime Forensics", desc: "Real-world forensic investigation workshop." },
  { emoji: "🧮", title: "Math Maze", desc: "High-speed mathematical problem-solving competition." },
  { emoji: "🎤", title: "Minute Matters", desc: "Fast-paced public speaking challenge." },
  { emoji: "🎵", title: "Science Serenade", desc: "Where science meets art and music." },
  { emoji: "🐝", title: "Science Spell Bee", desc: "Science-themed spelling and knowledge bee." },
  { emoji: "🌟", title: "Eureka", desc: "Open innovation challenge for wild ideas." },
];

export function Events() {
  return (
    <section id="events" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">Programme</p>
          <h2 className="mt-3 text-4xl font-bold md:text-6xl">
            Twelve arenas. <span className="gradient-text">One festival.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/30" />
              <div className="text-4xl">{e.emoji}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{e.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-cyan-300/70 transition-all group-hover:text-cyan-300">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
