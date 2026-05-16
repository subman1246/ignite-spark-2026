import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Loader2 } from "lucide-react";
import { EVENTS } from "./Events";

type FormData = {
  name: string;
  email: string;
  phone: string;
  school: string;
  grade: string;
  events: string[];
  source: string;
};

const GRADES = Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`);
const SOURCES = ["Social Media", "School", "Friend", "Other"];

export function Register() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
    events: [],
    source: "",
  });
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleEvent = (title: string) => {
    setForm((f) => ({
      ...f,
      events: f.events.includes(title)
        ? f.events.filter((e) => e !== title)
        : [...f.events, title],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
      const { db } = await import("../../firebase/config.js");
      await addDoc(collection(db, "registrations"), {
        name: form.name,
        email: form.email,
        phone: form.phone,
        school: form.school,
        grade: form.grade,
        events: form.events,
        source: form.source,
        timestamp: serverTimestamp(),
      });
      setSuccess(true);
    } catch (error) {
      console.error("Registration error:", error);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const input =
    "w-full rounded-lg border border-cyan-400/20 bg-[#070a1f]/80 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all focus:border-cyan-400/80 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]";

  return (
    <section id="register" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80">Register</p>
          <h2 className="mt-3 text-4xl font-bold md:text-6xl">
            Save your <span className="gradient-text">seat</span>.
          </h2>
          <p className="mt-4 text-white/60">
            Tuesday, 25 November 2026 · 9:00 AM – 7:00 PM IST
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-strong neon-border mt-12 rounded-2xl p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              >
                <Check className="h-8 w-8 text-[#04121a]" strokeWidth={3} />
              </motion.div>
              <h3 className="mt-6 text-3xl font-bold text-white md:text-4xl">
                You're registered! 🚀
              </h3>
              <p className="mt-3 text-white/70">
                See you on 25th November at SAI International School, Bhubaneswar.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onSubmit={handleSubmit}
              className="glass-strong mt-12 space-y-6 rounded-2xl p-6 md:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={input}
                    placeholder="Aarav Mishra"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={input}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={input}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">
                    School Name
                  </label>
                  <input
                    required
                    type="text"
                    value={form.school}
                    onChange={(e) => setForm({ ...form, school: e.target.value })}
                    className={input}
                    placeholder="SAI International School"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">
                    Grade / Class
                  </label>
                  <select
                    required
                    value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    className={input}
                  >
                    <option value="">Select…</option>
                    {GRADES.map((g) => (
                      <option key={g} value={g} className="bg-[#070a1f]">
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">
                    How did you hear about SAITED?
                  </label>
                  <select
                    required
                    value={form.source}
                    onChange={(e) => setForm({ ...form, source: e.target.value })}
                    className={input}
                  >
                    <option value="">Select…</option>
                    {SOURCES.map((s) => (
                      <option key={s} value={s} className="bg-[#070a1f]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-wider text-white/60">
                  Event(s) of Interest
                </label>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                  {EVENTS.map((e) => {
                    const active = form.events.includes(e.title);
                    return (
                      <button
                        key={e.title}
                        type="button"
                        onClick={() => toggleEvent(e.title)}
                        className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-sm transition-all ${
                          active
                            ? "border-cyan-400 bg-cyan-400/10 text-white shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                            : "border-cyan-400/15 bg-[#070a1f]/60 text-white/70 hover:border-cyan-400/40"
                        }`}
                      >
                        <span>{e.emoji}</span>
                        <span className="truncate">{e.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {submitError && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-300"
                >
                  {submitError}
                </motion.p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="pulse-glow flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 py-4 text-sm font-semibold uppercase tracking-widest text-[#04121a] transition-transform hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Confirm Registration"
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
