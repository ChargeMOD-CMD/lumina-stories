import { createFileRoute, Link } from "@tanstack/react-router";
import { Particles } from "@/components/Particles";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, Play, Quote, Star } from "lucide-react";

import heroImg from "@/assets/hero-wedding.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import aboutDetail from "@/assets/about-detail.jpg";
import eventImg from "@/assets/event-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumina Studio — Crafting Emotions Into Timeless Stories" },
      { name: "description", content: "Luxury cinematic wedding photography, films & premium brand campaigns by Lumina Studio." },
      { property: "og:title", content: "Lumina Studio — Cinematic Wedding & Brand Storytelling" },
      { property: "og:description", content: "Luxury cinematic wedding photography, films & premium brand campaigns." },
    ],
  }),
  component: Home,
});

const portfolio = [
  { src: portfolio1, location: "Lake Como, Italy", title: "Aria & Julian", kind: "Wedding Cinema" },
  { src: portfolio2, location: "Brand Film", title: "Maison Noire", kind: "Commercial" },
  { src: portfolio3, location: "St. Barts", title: "Whispers of the Coast", kind: "Destination Wedding" },
];

const services = [
  { num: "01", title: "Cinematic Wedding Films", text: "Feature-length wedding stories shot on cinema cameras." },
  { num: "02", title: "Luxury Photography", text: "Editorial bridal portraiture & destination coverage." },
  { num: "03", title: "Brand Campaigns", text: "Commercial direction, advertising films & product editorials." },
  { num: "04", title: "Digital Marketing", text: "Strategy, influencer collaborations & content production." },
  { num: "05", title: "Event Planning", text: "End-to-end luxury weddings, decor & celebrity events." },
  { num: "06", title: "Albums & Heirlooms", text: "Hand-bound luxury albums and curated print archives." },
];

const stats = [
  { n: "180+", l: "Weddings Filmed" },
  { n: "42", l: "Brand Campaigns" },
  { n: "26", l: "Countries" },
  { n: "11yrs", l: "Behind the Lens" },
];

const testimonials = [
  {
    quote: "They didn't film our wedding — they bottled the feeling. Watching the reel still makes my mother cry.",
    name: "Aria Sehgal",
    role: "Bride · Lake Como",
  },
  {
    quote: "The campaign film outperformed every paid asset we'd produced in five years. Pure cinematic intent.",
    name: "Marcus Vale",
    role: "CMO · Maison Noire",
  },
  {
    quote: "Quiet on set, loud on screen. Lumina is the only team we now trust with brand storytelling.",
    name: "Priya Anand",
    role: "Founder · Atelier P",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Bride bathed in cathedral light"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-70"
        />
        <div className="absolute inset-0 cinematic-vignette" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian" />
        <Particles count={22} />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="eyebrow inline-block animate-reveal">Cinematic Wedding & Brand Studio</span>
          <h1 className="mt-8 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance animate-reveal [animation-delay:150ms]">
            Crafting <span className="italic gold-shimmer">Emotions</span><br />
            Into Timeless Stories.
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-silk/70 text-pretty animate-reveal [animation-delay:300ms]">
            A premium production house for couples and brands shaping history &mdash; through cinematic light, hushed atmosphere, and unrepeatable moments.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-reveal [animation-delay:450ms]">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-gold text-obsidian px-8 py-4 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-silk transition-colors"
            >
              Book Consultation <ArrowRight className="size-3.5" />
            </Link>
            <button className="inline-flex items-center justify-center gap-3 border border-silk/20 text-silk px-8 py-4 font-mono text-[10px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors">
              <Play className="size-3.5 fill-current" /> Watch Showreel
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.5em] text-silk/40 uppercase">
          Scroll · Sc.001
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-32 md:py-40 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-10">
            <SectionHeading
              eyebrow="The Philosophy"
              title={<>We capture the <span className="italic">silence</span> between the moments.</>}
              description="Inspired by the atmospheric stillness of modern cinema, we approach each wedding and brand campaign as a feature-length narrative. No staged poses. No artificial brightness. Just the raw, textured truth of human connection under the right light."
            />
            <div className="grid grid-cols-2 gap-8 max-w-lg">
              <div>
                <span className="eyebrow block mb-3">01. Artistry</span>
                <p className="text-sm text-silk/60">Custom cinematic look development for every project, every couple.</p>
              </div>
              <div>
                <span className="eyebrow block mb-3">02. Excellence</span>
                <p className="text-sm text-silk/60">Cinema-grade 8K production and hand-bound luxury album curation.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <img
              src={aboutDetail}
              alt="Vintage cinema camera"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover ring-1 ring-border"
            />
            <div className="hidden md:block absolute -bottom-10 -left-10 bg-obsidian border border-border p-10 max-w-xs">
              <Quote className="size-4 text-gold mb-4" />
              <p className="font-display italic text-xl text-silk">"Every frame is a heartbeat."</p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-32 bg-midnight/60 border-y border-border">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeading eyebrow="Selected Works" title={<>Portfolios.</>} />
            <Link to="/weddings" className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold border-b border-gold/30 pb-1 inline-flex items-center gap-2 hover:border-gold w-fit">
              Explore Archive <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {portfolio.map((p, i) => (
              <Link
                to="/weddings"
                key={p.title}
                className="group relative overflow-hidden block"
                style={{ marginTop: i === 1 ? "3rem" : 0 }}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-90 md:opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="eyebrow block mb-3">{p.location}</span>
                  <h3 className="font-display text-2xl md:text-3xl text-silk">{p.title}</h3>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-silk/50 mt-2">{p.kind}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What We Build"
            title={<>A studio for the <span className="italic">whole</span> story.</>}
            description="From the first whispered yes to the global campaign launch &mdash; we craft visuals that move people."
          />
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 border-t border-border">
            {services.map((s) => (
              <div
                key={s.num}
                className="group p-10 border-b border-r border-border lg:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(2n)]:lg:border-r [&:last-child]:border-b-0 hover:bg-midnight/60 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-gold">{s.num}</span>
                  <ArrowRight className="size-4 text-silk/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-silk/60 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-midnight/60 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-5xl md:text-6xl text-gold">{s.n}</div>
              <div className="mt-3 font-mono text-[10px] tracking-[0.3em] uppercase text-silk/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENT FEATURE */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={eventImg}
            alt="Luxury event tablescape"
            width={1280}
            height={1024}
            loading="lazy"
            className="w-full aspect-[5/4] object-cover ring-1 ring-border"
          />
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Luxury Event Planning"
              title={<>The whole evening, <span className="italic">choreographed</span>.</>}
              description="From decor direction and stage design to celebrity coordination &mdash; our planning arm produces the kind of evenings worth filming."
            />
            <Link to="/events" className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-gold border-b border-gold/30 pb-1 hover:border-gold">
              Explore Event Planning <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-midnight/60 border-y border-border px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Client Love Stories" title={<>What they <span className="italic">whisper</span> after the credits roll.</>} align="center" />
          <div className="mt-20 grid md:grid-cols-3 gap-1">
            {testimonials.map((t) => (
              <div key={t.name} className="p-10 bg-obsidian border border-border space-y-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display italic text-xl leading-snug text-silk text-pretty">"{t.quote}"</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-mono text-sm text-silk">{t.name}</div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold/80 mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 px-6 md:px-10 overflow-hidden">
        <Particles count={14} />
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="font-display text-5xl md:text-7xl text-balance leading-[1.05]">
            Let's tell <span className="italic gold-shimmer">your story</span> to the world.
          </h2>
          <p className="text-silk/60 max-w-xl mx-auto text-pretty">
            We accept a limited number of commissions per year. Reach out to secure your date or schedule a creative consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-gold text-obsidian px-8 py-4 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-silk transition-colors">
              Begin the Conversation <ArrowRight className="size-3.5" />
            </Link>
            <a href="https://wa.me/" className="inline-flex items-center justify-center gap-3 border border-silk/20 px-8 py-4 font-mono text-[10px] tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors">
              WhatsApp Studio
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
