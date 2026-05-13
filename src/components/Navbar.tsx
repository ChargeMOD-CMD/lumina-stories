import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/weddings", label: "Weddings" },
  { to: "/commercial", label: "Commercial" },
  { to: "/marketing", label: "Marketing" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-obsidian/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-9 rotate-45 border border-gold/50 grid place-items-center transition-transform group-hover:rotate-[225deg] duration-700">
            <span className="-rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700 font-display text-gold text-lg">L</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl text-silk">Lumina</span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase mt-0.5">Studio</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono text-[10px] tracking-[0.25em] uppercase text-silk/70 hover:text-gold transition-colors"
              activeProps={{ className: "font-mono text-[10px] tracking-[0.25em] uppercase text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-obsidian bg-gold px-5 py-3 hover:bg-silk transition-colors"
        >
          Book Consultation
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-silk"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-silk transition-transform ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-px w-6 bg-silk transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-silk transition-transform ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-obsidian border-t border-border px-6 py-8 space-y-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block font-display text-2xl text-silk hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
