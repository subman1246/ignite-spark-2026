import { motion } from "motion/react";

const editions = [
  {
    year: "2025",
    theme: "Infinite Possibilities",
    guest: "CM Mohan Charan Majhi · Astronaut Shubhanshu Shukla",
    participants: "5,000+",
    accent: "from-cyan-500/30 to-blue-600/20",
  },
  {
    year: "2024",
    theme: "Future Forward",
    guest: "Renowned scientists & innovators",
    participants: "4,200+",
    accent: "from-purple-500/30 to-pink-500/20",
  },
  {
    year: "2023",
    theme: "Imagine · Invent · Inspire",
    guest: "ISRO scientists & entrepreneurs",
    participants: "3,500+",
    accent: "from-emerald-500/30 to-cyan-500/20",
  },
  {
    year: "2017",
    theme: "Reach for the Stars",
    guest: "NASA Astronaut Jack D. Fischer",
    participants: "1,800+",
    accent: "from-amber-500/30 to-rose-500/20",
  },
];

export function PastEditions() {
  return (
    <section id="past" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">Archive</p>
          <h2 className="mt-3 text-4xl font-bold md:text-6xl">
            Past <span className="gradient-text">editions</span>.
          </h2>
        </motion.div>

        <div className="no-scrollbar mt-12 -mx-6 flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory">
          {editions.map((e, i) => (
            <motion.div
              key={e.year}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl glass p-7 transition-all hover:border-cyan-400/50"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${e.accent} opacity-50 transition-opacity group-hover:opacity-80`}
              />
              <div className="relative">
                <div className="font-display text-6xl font-bold text-white/90">
                  {e.year}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                  SAITED
                </div>
                <div className="mt-6 space-y-2">
                  <p className="text-xs uppercase tracking-wider text-white/50">Theme</p>
                  <p className="text-lg font-medium text-white">{e.theme}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-xs uppercase tracking-wider text-white/50">Key Guest</p>
                  <p className="text-sm text-white/80">{e.guest}</p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-xs text-cyan-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  {e.participants} participants
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
