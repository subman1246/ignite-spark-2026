import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-cyan-400/15 bg-[#04060f] px-6 py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-bold">
            <span className="gradient-text">SAITED</span> 2026
          </div>
          <p className="mt-2 text-sm text-white/60">
            SAI International School<br />
            Bhubaneswar, Odisha · India
          </p>
          <p className="mt-4 text-xs italic text-cyan-200/70">
            Inspiring Young Innovators Since 2016
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Connect</p>
          <div className="mt-4 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Twitter, label: "Twitter / X" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-white/5 text-cyan-200 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Event</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>25 November 2026</li>
            <li>9:00 AM – 7:00 PM IST</li>
            <li>SAI International School Campus</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/5 pt-6 text-center text-xs text-white/40">
        © 2026 SAI International School. All rights reserved.
      </div>
    </footer>
  );
}
