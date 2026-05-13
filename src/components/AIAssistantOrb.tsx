import { useEffect, useRef, useState } from "react";
import { MessageSquareHeart, Send, X, Sparkles } from "lucide-react";

const suggestions = [
  "Tell me about wedding packages",
  "I need a brand campaign",
  "Plan a destination wedding",
  "Book a consultation",
];

type Msg = { role: "user" | "assistant"; content: string };

const cannedReply = (q: string) => {
  const t = q.toLowerCase();
  if (t.includes("wedding")) return "Our cinematic wedding films start at a bespoke consultation. Share your date and venue and I'll route you to a director.";
  if (t.includes("brand") || t.includes("campaign") || t.includes("commercial")) return "We craft brand films and editorial campaigns for premium labels. Tell me your brand and timeline.";
  if (t.includes("price") || t.includes("package") || t.includes("cost")) return "Each commission is tailored. A typical wedding film begins at ₹4.5L; brand campaigns at ₹2L/day.";
  if (t.includes("book") || t.includes("consult") || t.includes("contact")) return "Lovely. Tap 'Chat on WhatsApp' below or visit /contact to reserve a slot.";
  return "Noted. A creative producer will follow up — meanwhile, share your date, location, and the feeling you want captured.";
};

export function AIAssistantOrb() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Greetings. Shall I curate a custom wedding film, draft a brand campaign, or share our destination availability?" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", content: q }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: cannedReply(q) }]);
    }, 450);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {open && (
        <div className="absolute bottom-20 right-0 w-[min(380px,calc(100vw-3rem))] bg-midnight border border-gold/20 rounded-sm shadow-cinematic overflow-hidden animate-reveal flex flex-col max-h-[min(560px,calc(100vh-8rem))]">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-obsidian">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-gradient-to-tr from-iris/40 to-gold/40 grid place-items-center">
                <Sparkles className="size-3.5 text-gold" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-sm">Elysia</div>
                <div className="font-mono text-[9px] tracking-[0.25em] text-gold/80 uppercase">Creative Assistant</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-silk/60 hover:text-silk" aria-label="Close">
              <X className="size-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-gold/15 text-silk border border-gold/30"
                      : "bg-obsidian/60 text-silk/85 border border-border font-display italic"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1.5 border border-border hover:border-gold/50 hover:text-gold transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex items-center gap-2 border-t border-border bg-obsidian px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 bg-transparent text-sm text-silk placeholder:text-silk/40 focus:outline-none px-2 py-2"
            />
            <button
              type="submit"
              aria-label="Send"
              className="size-9 grid place-items-center bg-gold text-obsidian hover:bg-silk transition-colors"
            >
              <Send className="size-3.5" />
            </button>
          </form>

          <a
            href="https://wa.me/"
            className="flex items-center justify-between gap-2 px-4 py-3 bg-obsidian border-t border-border font-mono text-[10px] tracking-[0.25em] uppercase text-gold hover:text-silk transition-colors"
          >
            Chat on WhatsApp
            <Send className="size-3.5" />
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="AI assistant"
        className="group relative"
      >
        <div className="absolute -inset-3 bg-gold/20 rounded-full blur-2xl group-hover:bg-gold/40 transition-colors" />
        <div className="relative size-16 rounded-full bg-obsidian border border-gold/40 grid place-items-center overflow-hidden animate-orb-pulse">
          <div className="absolute inset-0 bg-gradient-to-tr from-iris/30 via-transparent to-gold/40 opacity-70" />
          <MessageSquareHeart className="relative size-5 text-gold" />
        </div>
      </button>
    </div>
  );
}
