import { useMemo } from "react";

interface Props {
  count?: number;
  className?: string;
}

export function Particles({ count = 18, className = "" }: Props) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        gold: Math.random() > 0.4,
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full blur-[1px]"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.gold ? "var(--gold)" : "var(--silk)",
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}
