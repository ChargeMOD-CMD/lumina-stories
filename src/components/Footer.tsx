import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-9 rotate-45 border border-gold/50 grid place-items-center">
                <span className="-rotate-45 font-display text-gold text-lg">L</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl">Lumina Studio</span>
                <span className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase mt-0.5">Cinematic Storytelling</span>
              </div>
            </div>
            <p className="font-display italic text-2xl text-silk/80 max-w-md text-pretty">
              Crafting emotions into timeless stories &mdash; for couples and brands shaping history.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="eyebrow block">Studio</span>
            <ul className="space-y-2 text-sm text-silk/70">
              <li><Link to="/weddings" className="hover:text-gold">Weddings</Link></li>
              <li><Link to="/commercial" className="hover:text-gold">Commercial</Link></li>
              <li><Link to="/marketing" className="hover:text-gold">Marketing</Link></li>
              <li><Link to="/events" className="hover:text-gold">Events</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <span className="eyebrow block">Connect</span>
            <ul className="space-y-2 text-sm text-silk/70">
              <li><a href="https://wa.me/" className="hover:text-gold">WhatsApp Studio</a></li>
              <li><a href="https://instagram.com" className="hover:text-gold">Instagram</a></li>
              <li><a href="mailto:hello@lumina.studio" className="hover:text-gold">hello@lumina.studio</a></li>
              <li className="text-silk/50">Mumbai &middot; Como &middot; Dubai</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-silk/40">© {new Date().getFullYear()} Lumina Studio</span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-silk/40">Crafting Emotions Into Timeless Stories</span>
        </div>
      </div>
    </footer>
  );
}
