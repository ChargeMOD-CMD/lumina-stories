import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, TrendingUp, Users, Megaphone, Sparkles } from "lucide-react";

export const Route = createFileRoute("/marketing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing & Influencer Campaigns — Lumina Studio" },
      { name: "description", content: "Brand strategy, social campaigns, influencer collaborations and performance marketing." },
      { property: "og:title", content: "Digital Marketing & Influencer Campaigns — Lumina Studio" },
      { property: "og:description", content: "Brand strategy, social campaigns and influencer collaborations." },
    ],
  }),
  component: MarketingPage,
});

const services = [
  { icon: Sparkles, title: "Brand Strategy", text: "Positioning, narrative, and visual identity systems built for the long arc." },
  { icon: Megaphone, title: "Campaign Production", text: "Concept-to-launch creative campaigns across film, photo and copy." },
  { icon: Users, title: "Influencer Marketing", text: "Curated collaborations with talent that match brand soul, not follower count." },
  { icon: TrendingUp, title: "Performance Marketing", text: "Paid social, search and creator-led funnels measured against revenue." },
];

const metrics = [
  { n: "12.4M", l: "Combined Reach" },
  { n: "8.2x", l: "ROAS Avg." },
  { n: "94%", l: "Repeat Clients" },
];

function MarketingPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Digital & Influencer"
            title={<>Strategy and storytelling that <span className="italic">earns</span> attention.</>}
            description="We build brand worlds people choose to live inside — through cinematic content, considered strategy, and the right creators."
          />
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-1 border-t border-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className={`p-12 border-b border-border ${i % 2 === 0 ? "md:border-r" : ""}`}>
                <Icon className="size-5 text-gold mb-8" />
                <h3 className="font-display text-3xl mb-4">{s.title}</h3>
                <p className="text-silk/60 max-w-md">{s.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 bg-midnight/60 border-y border-border px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
          {metrics.map((m) => (
            <div key={m.l} className="text-center">
              <div className="font-display text-5xl md:text-6xl text-gold">{m.n}</div>
              <div className="mt-3 font-mono text-[10px] tracking-[0.3em] uppercase text-silk/60">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-display text-4xl md:text-5xl">Ready to launch the next chapter?</h2>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-gold text-obsidian px-8 py-4 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-silk transition-colors">
            Start a Project <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
