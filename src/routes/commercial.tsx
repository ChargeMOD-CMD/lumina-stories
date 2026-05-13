import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import portfolio2 from "@/assets/portfolio-2.jpg";
import aboutDetail from "@/assets/about-detail.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Brand Films & Commercial Campaigns — Lumina Studio" },
      { name: "description", content: "Cinematic brand films, advertisement direction, fashion and product editorials." },
      { property: "og:title", content: "Brand Films & Commercial Campaigns — Lumina Studio" },
      { property: "og:description", content: "Cinematic brand films, advertisement direction, fashion and product editorials." },
    ],
  }),
  component: CommercialPage,
});

const projects = [
  { title: "Maison Noire — Origin", kind: "Fragrance Film", src: portfolio2, year: "2025" },
  { title: "Atelier P — FW Editorial", kind: "Fashion Campaign", src: aboutDetail, year: "2024" },
  { title: "Verde Hotels — Aman Series", kind: "Hospitality Brand Film", src: portfolio2, year: "2024" },
  { title: "Solis Watches — Time Stilled", kind: "Product Cinema", src: aboutDetail, year: "2023" },
];

function CommercialPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <SectionHeading
            eyebrow="Commercial & Brands"
            title={<>Films and editorials for <span className="italic">heritage-bound</span> brands.</>}
            description="From global campaigns to founder-led launches, we handle creative direction, production and post — everything between the brief and the final cut."
          />
          <div className="grid grid-cols-2 gap-8 text-sm text-silk/70">
            <div><div className="eyebrow mb-2">01.</div>Campaign Direction</div>
            <div><div className="eyebrow mb-2">02.</div>Advertisement Films</div>
            <div><div className="eyebrow mb-2">03.</div>Fashion & Product</div>
            <div><div className="eyebrow mb-2">04.</div>Corporate Brand Films</div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-7xl mx-auto space-y-24">
          {projects.map((p, i) => (
            <div key={p.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>img]:order-2" : ""}`}>
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover ring-1 ring-border"
              />
              <div className="space-y-6">
                <span className="eyebrow block">{p.year} &middot; {p.kind}</span>
                <h3 className="font-display text-4xl md:text-5xl">{p.title}</h3>
                <p className="text-silk/60 max-w-md">A cinematic exploration of brand soul — produced end-to-end across direction, film, edit and grade.</p>
                <button className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold border-b border-gold/30 pb-1 inline-flex items-center gap-2 hover:border-gold">
                  View Case Study <ArrowRight className="size-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-obsidian px-8 py-4 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-silk transition-colors">
            Brief the Studio <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
