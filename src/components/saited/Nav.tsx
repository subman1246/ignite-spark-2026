import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "events", label: "Events" },
  { id: "register", label: "Register" },
  { id: "past", label: "Archive" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div
          className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <span className="font-display text-sm font-bold tracking-wider text-white">
            SAITED <span className="text-cyan-300">2026</span>
          </span>
        </div>
        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-white/70 transition-all hover:bg-white/5 hover:text-cyan-200"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => go("register")}
          className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#04121a] transition-transform hover:scale-105"
        >
          Register
        </button>
      </div>
    </header>
  );
}
