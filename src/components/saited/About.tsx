import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 5000, suffix: "+", label: "Student Participants" },
  { value: 10, suffix: "+", label: "Years of Innovation" },
  { value: 22, suffix: "+", label: "Schools Participate" },
  { value: 0, suffix: "NASA · ISRO", label: "Distinguished Guests", custom: true },
];

const timeline = [
  { year: "2016", note: "Inception — Student-led STEM fest begins" },
  { year: "2017", note: "NASA Astronaut Jack D. Fischer joins" },
  { year: "2019", note: "Crosses 2,000 participants" },
  { year: "2023", note: "Expands to 18+ schools" },
  { year: "2024", note: "Tech Fair & CODEx Lab introduced" },
  { year: "2025", note: "5,000+ participants · CM Majhi · Astronaut Shukla" },
  { year: "2026", note: "Innovation Beyond Boundaries" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">About</p>
          <h2 className="mt-3 text-4xl font-bold md:text-6xl">
            A decade of <span className="gradient-text">young innovators</span>.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
            SAITED is one of India's largest school-based, student-led K-12 STEM
            fests, envisioned by{" "}
            <span className="text-cyan-200">Late Dr. Bijaya Kumar Sahoo</span>,
            Founder of SAI International Education Group. Since its inception,
            SAITED has inspired thousands of young minds to explore science,
            technology, entrepreneurship and design — welcoming NASA Astronauts,
            ISRO Gaganyatris, Chief Ministers and over 5,000 student participants.
            SAITED 2026 continues this legacy — bigger, bolder, more innovative.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
            >
              <div className="font-display text-3xl font-bold text-cyan-200 md:text-5xl">
                {s.custom ? (
                  <span className="text-xl md:text-2xl">{s.suffix}</span>
                ) : (
                  <Counter to={s.value} suffix={s.suffix} />
                )}
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/60 md:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="mb-6 text-lg uppercase tracking-[0.3em] text-white/60">
            Timeline
          </h3>
          <div className="no-scrollbar -mx-6 overflow-x-auto px-6">
            <div className="relative flex min-w-max gap-6 pb-4">
              <div className="absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-cyan-400/10 via-cyan-400/50 to-purple-500/30" />
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative w-56 shrink-0 pt-10"
                >
                  <div className="absolute left-3 top-1.5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                  <div className="glass rounded-xl p-4">
                    <div className="font-display text-2xl font-bold text-cyan-200">
                      {t.year}
                    </div>
                    <p className="mt-1 text-sm text-white/70">{t.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
