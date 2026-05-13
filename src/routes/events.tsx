import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import eventImg from "@/assets/event-1.jpg";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Luxury Event & Wedding Planning — Lumina Studio" },
      { name: "description", content: "End-to-end luxury wedding planning, decor direction, and celebrity event coordination." },
      { property: "og:title", content: "Luxury Event & Wedding Planning — Lumina Studio" },
      { property: "og:description", content: "End-to-end luxury wedding planning and celebrity event coordination." },
    ],
  }),
  component: EventsPage,
});

const inclusions = [
  "Creative direction & design language",
  "Decor curation & floral storytelling",
  "Stage and lighting design coordination",
  "Vendor curation across continents",
  "Guest experience choreography",
  "Celebrity and talent coordination",
];

function EventsPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Event Planning"
            title={<>Evenings <span className="italic">choreographed</span> like cinema.</>}
            description="From intimate ceremonies to multi-day celebrations, we direct the entire experience — design, vendors, talent, flow."
          />
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={eventImg}
            alt="Luxury event tablescape"
            loading="lazy"
            className="w-full aspect-[5/4] object-cover ring-1 ring-border"
          />
          <div className="space-y-8">
            <h3 className="font-display text-3xl md:text-4xl">Full-service luxury production.</h3>
            <ul className="space-y-4">
              {inclusions.map((i) => (
                <li key={i} className="flex items-start gap-4 text-silk/80">
                  <Check className="size-4 text-gold mt-1 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-obsidian px-8 py-4 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-silk transition-colors">
              Plan My Event <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
