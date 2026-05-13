import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import heroImg from "@/assets/hero-wedding.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Cinematic Wedding Films & Photography — Lumina Studio" },
      { name: "description", content: "Luxury cinematic wedding photography, films, destination coverage and hand-bound albums." },
      { property: "og:title", content: "Cinematic Wedding Films & Photography — Lumina Studio" },
      { property: "og:description", content: "Luxury cinematic wedding photography, films and destination coverage." },
    ],
  }),
  component: WeddingsPage,
});

const galleries = [
  { src: heroImg, title: "Eliza & Theo", place: "Cathedral Vows · Florence" },
  { src: portfolio1, title: "Aria & Julian", place: "Lake Como, Italy" },
  { src: portfolio3, title: "Whispers of the Coast", place: "St. Barts" },
  { src: heroImg, title: "Naomi & Arjun", place: "Udaipur · India" },
  { src: portfolio1, title: "Sofia & Lucca", place: "Amalfi Coast" },
  { src: portfolio3, title: "Coastal Vows", place: "Big Sur · California" },
];

const offerings = [
  "Cinematic Wedding Films",
  "Luxury Wedding Photography",
  "Pre-Wedding Editorials",
  "Destination Coverage",
  "Drone Cinematography",
  "Hand-Bound Albums",
];

function WeddingsPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Weddings"
            title={<>Cinematic films for the <span className="italic">most important</span> day.</>}
            description="We document destination weddings, intimate ceremonies and multi-day celebrations as feature-length cinema. Limited availability per season."
          />
          <div className="mt-12 flex flex-wrap gap-2">
            {offerings.map((o) => (
              <span key={o} className="font-mono text-[10px] tracking-[0.25em] uppercase border border-border px-4 py-2 text-silk/70">
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {galleries.map((g, i) => (
            <div key={i} className="group relative overflow-hidden cursor-pointer">
              <img
                src={g.src}
                alt={g.title}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="eyebrow block mb-2">{g.place}</span>
                <h3 className="font-display text-2xl">{g.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-obsidian px-8 py-4 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-silk transition-colors">
            Reserve Your Date <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
