import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Lumina Studio" },
      { name: "description", content: "Reserve your wedding date or brief us on a brand campaign. WhatsApp, Instagram and email available." },
      { property: "og:title", content: "Book a Consultation — Lumina Studio" },
      { property: "og:description", content: "Reserve your wedding date or brief us on a brand campaign." },
    ],
  }),
  component: ContactPage,
});

const services = ["Wedding Film", "Wedding Photography", "Brand Campaign", "Influencer Marketing", "Event Planning", "Other"] as const;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState<typeof services[number]>("Wedding Film");

  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Begin the Conversation"
            title={<>Reserve a date or <span className="italic">brief</span> the studio.</>}
            description="We respond to every inquiry personally within 24 hours. Limited commissions available each season."
          />
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-gold/40 bg-midnight/40 p-12 text-center space-y-4">
                <h3 className="font-display text-3xl gold-shimmer">Thank you.</h3>
                <p className="text-silk/70">Your inquiry has reached the studio. We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Full Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone / WhatsApp" name="phone" />
                  <Field label="Event Date" name="date" type="date" />
                </div>

                <div>
                  <label className="eyebrow block mb-3">Service</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setService(s)}
                        className={`font-mono text-[10px] tracking-[0.25em] uppercase px-4 py-2 border transition-colors ${
                          service === s ? "bg-gold text-obsidian border-gold" : "border-border text-silk/70 hover:border-gold/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="eyebrow block mb-3" htmlFor="message">Tell us about your story</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-transparent border border-border focus:border-gold focus:outline-none px-4 py-3 text-silk placeholder:text-silk/30 transition-colors"
                    placeholder="Where, when, and what you're imagining..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 bg-gold text-obsidian px-8 py-4 font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-silk transition-colors"
                >
                  Send Inquiry <Send className="size-3.5" />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-10">
            <div className="bg-midnight/60 border border-border p-10 space-y-6">
              <h3 className="font-display text-2xl">Direct Channels</h3>
              <ul className="space-y-5 text-sm">
                <ContactRow icon={MessageCircle} label="WhatsApp" value="+91 98765 43210" href="https://wa.me/" />
                <ContactRow icon={Phone} label="Studio Line" value="+91 22 2345 6789" href="tel:+912223456789" />
                <ContactRow icon={Mail} label="Email" value="hello@lumina.studio" href="mailto:hello@lumina.studio" />
                <ContactRow icon={Instagram} label="Instagram" value="@lumina.studio" href="https://instagram.com" />
              </ul>
            </div>

            <div className="bg-midnight/60 border border-border p-10 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="size-4 text-gold mt-1" />
                <div>
                  <div className="font-display text-xl">Studio Locations</div>
                  <p className="text-silk/60 text-sm mt-2 leading-relaxed">
                    Mumbai · India<br />
                    Lake Como · Italy<br />
                    Dubai · UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow block mb-3" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-gold focus:outline-none py-3 text-silk transition-colors"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href: string }) {
  return (
    <li>
      <a href={href} className="flex items-start gap-4 group">
        <Icon className="size-4 text-gold mt-1" />
        <div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-silk/50">{label}</div>
          <div className="text-silk group-hover:text-gold transition-colors">{value}</div>
        </div>
      </a>
    </li>
  );
}
