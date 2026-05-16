import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, Trash2 } from "lucide-react";
import { askSAIBot, type GroqMessage } from "../../lib/groq";

type Msg = { from: "bot" | "user"; text: string };

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is SAITED?",
    a: "SAITED is SAI International Technology & Entrepreneurship Day — one of India's largest school-based, student-led K-12 STEM fests, hosted by SAI International School, Bhubaneswar.",
  },
  {
    q: "When is SAITED 2026?",
    a: "Tuesday, 25 November 2026, from 9:00 AM to 7:00 PM IST — at SAI International School Campus, Bhubaneswar.",
  },
  {
    q: "How do I register?",
    a: "Scroll to the Registration section on this page and fill the form — you'll get a confirmation right away.",
  },
  {
    q: "Which events can I participate in?",
    a: "Tech Fair, Aeromodelling, CODEx Gaming Lab, Start-Up Park, Med Talk, ENERGIZE, Crime Forensics, Math Maze, Minute Matters, Science Serenade, Science Spell Bee and Eureka.",
  },
  {
    q: "Is it free?",
    a: "Registration details will be announced soon. Keep an eye on this page.",
  },
  {
    q: "Who can participate?",
    a: "Students from Class 1 to Class 12 from any school are welcome.",
  },
  {
    q: "Where is the venue?",
    a: "SAI International School Campus, Bhubaneswar, Odisha.",
  },
];

const INITIAL_MSG: Msg = {
  from: "bot",
  text: "Hi! I'm SAI-Bot 🤖 — ask me anything about SAITED 2026.",
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([INITIAL_MSG]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing, open]);

  const addFaqReply = (q: string) => {
    const found = FAQS.find((f) => f.q === q);
    if (!found) return;
    setMsgs((m) => [...m, { from: "user", text: q }]);
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: "bot", text: found.a }]);
      setTyping(false);
    }, 900);
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    setInput("");
    const updated: Msg[] = [...msgs, { from: "user", text: trimmed }];
    setMsgs(updated);
    setTyping(true);

    const context: GroqMessage[] = updated
      .slice(-6)
      .map((m) => ({ role: m.from === "user" ? "user" : "assistant", content: m.text }));

    try {
      const reply = await askSAIBot(context);
      setMsgs((m) => [...m, { from: "bot", text: reply }]);
    } catch {
      setMsgs((m) => [
        ...m,
        { from: "bot", text: "Oops! I'm having a moment. Try again shortly 😅" },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage(input);
  };

  const clearChat = () => setMsgs([INITIAL_MSG]);

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open SAI-Bot"
        className="pulse-glow fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-[#04121a] shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-transform hover:scale-110"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="glass-strong fixed bottom-24 right-6 z-50 flex h-[560px] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-cyan-400/15 bg-[#070a1f]/80 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500">
                <Bot className="h-5 w-5 text-[#04121a]" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-white">SAI-Bot</div>
                <div className="flex items-center gap-1.5 text-[10px] text-cyan-300/80">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Online · usually replies instantly
                </div>
              </div>
              <button
                onClick={clearChat}
                title="Clear chat"
                className="rounded-lg p-1.5 text-white/40 transition-colors hover:bg-white/5 hover:text-white/70"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm ${
                      m.from === "user"
                        ? "rounded-br-sm bg-gradient-to-br from-cyan-400 to-blue-500 text-[#04121a]"
                        : "rounded-bl-sm border border-cyan-400/20 bg-white/5 text-white/90"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-cyan-400/20 bg-white/5 px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                        className="h-1.5 w-1.5 rounded-full bg-cyan-300"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Bottom area */}
            <div className="border-t border-cyan-400/15 bg-[#070a1f]/80 p-3">
              {/* FAQ quick-replies */}
              <div className="mb-2 text-[10px] uppercase tracking-widest text-white/40">
                Quick questions
              </div>
              <div className="flex flex-wrap gap-1.5">
                {FAQS.map((f) => (
                  <button
                    key={f.q}
                    onClick={() => addFaqReply(f.q)}
                    className="rounded-full border border-cyan-400/20 bg-white/5 px-3 py-1.5 text-[11px] text-cyan-100 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/10"
                  >
                    {f.q}
                  </button>
                ))}
              </div>

              {/* Free-text input */}
              <div className="mt-3 flex items-center gap-2 rounded-full border border-cyan-400/25 bg-[#05060f] px-3 py-1.5 transition-all focus-within:border-cyan-400/70 focus-within:shadow-[0_0_0_2px_rgba(34,211,238,0.12)]">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a question…"
                  disabled={typing}
                  className="flex-1 bg-transparent text-xs text-white outline-none placeholder-white/30 disabled:opacity-50"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || typing}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-[#04121a] transition-all hover:bg-cyan-300 disabled:opacity-30"
                >
                  <Send className="h-3 w-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
