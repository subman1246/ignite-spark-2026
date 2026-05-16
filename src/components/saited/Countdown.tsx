import { useEffect, useState } from "react";
import { motion } from "motion/react";

const TARGET = new Date("2026-11-25T09:00:00+05:30").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms / 3600000) % 24);
  const minutes = Math.floor((ms / 60000) % 60);
  const seconds = Math.floor((ms / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [t, setT] = useState(diff);
  useEffect(() => {
    const i = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(i);
  }, []);

  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <section id="countdown" className="relative z-10 -mt-20 px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl"
      >
        <div className="glass-strong neon-border rounded-2xl p-6 md:p-10">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.4em] text-cyan-300/80">
            Countdown to Launch
          </p>
          <div className="grid grid-cols-4 gap-3 md:gap-6">
            {items.map((it) => (
              <div key={it.label} className="text-center">
                <div className="relative overflow-hidden rounded-xl border border-cyan-400/20 bg-[#070a1f]/80 py-5 md:py-8">
                  <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-cyan-400/20" />
                  <motion.div
                    key={it.value}
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="font-display text-4xl font-bold tabular-nums text-cyan-200 md:text-7xl"
                    style={{
                      textShadow:
                        "0 0 20px rgba(34,211,238,0.6), 0 0 40px rgba(34,211,238,0.25)",
                    }}
                  >
                    {String(it.value).padStart(2, "0")}
                  </motion.div>
                </div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/60 md:text-xs">
                  {it.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
