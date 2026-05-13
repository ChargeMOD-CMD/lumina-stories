import { useEffect, useRef, useState } from "react";

/**
 * Lumina Studio cinematic cursor.
 * Desktop: a gold "lens" ring that follows the mouse with smooth easing,
 *          a tiny aperture dot, an aim-reticle that snaps onto interactive elements,
 *          and a fading gold trail. Hides on touch devices.
 * Mobile/touch: tap ripple — a gold concentric ring blooms at the touch point.
 */
export function CinematicCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);

  const [isTouch, setIsTouch] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    setIsTouch(touch);
  }, []);

  // ---------- Touch: tap ripple ----------
  useEffect(() => {
    if (!isTouch) return;
    let id = 0;
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0] ?? e.changedTouches[0];
      if (!t) return;
      const r = { id: id++, x: t.clientX, y: t.clientY };
      setRipples((prev) => [...prev, r]);
      setTimeout(() => setRipples((prev) => prev.filter((p) => p.id !== r.id)), 900);
    };
    window.addEventListener("touchstart", onTouch, { passive: true });
    return () => window.removeEventListener("touchstart", onTouch);
  }, [isTouch]);

  // ---------- Desktop: lens cursor ----------
  useEffect(() => {
    if (isTouch) return;

    const ring = ringRef.current!;
    const dot = dotRef.current!;
    const label = labelRef.current!;
    const canvas = trailRef.current!;
    const ctx = canvas.getContext("2d")!;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let dx = mx;
    let dy = my;

    const trail: { x: number; y: number; a: number }[] = [];

    let hoverTarget: Element | null = null;
    let hoverRect: DOMRect | null = null;
    let hoverLabel = "";

    const interactiveSel = "a, button, [role='button'], input, textarea, select, label, [data-cursor]";

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      trail.push({ x: mx, y: my, a: 1 });
      if (trail.length > 22) trail.shift();

      const el = (e.target as Element)?.closest(interactiveSel);
      if (el !== hoverTarget) {
        hoverTarget = el;
        hoverRect = el ? (el as HTMLElement).getBoundingClientRect() : null;
        hoverLabel =
          (el?.getAttribute("data-cursor") as string) ||
          (el?.tagName === "A" ? "Open" : el?.tagName === "BUTTON" ? "Click" : "");
      } else if (el) {
        hoverRect = (el as HTMLElement).getBoundingClientRect();
      }
    };

    const onDown = () => ring.classList.add("lumina-cursor--press");
    const onUp = () => ring.classList.remove("lumina-cursor--press");
    const onLeave = () => ring.classList.add("lumina-cursor--hidden");
    const onEnter = () => ring.classList.remove("lumina-cursor--hidden");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    let raf = 0;
    const tick = () => {
      // Easing for ring (lens) and faster dot (aperture)
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dx += (mx - dx) * 0.55;
      dy += (my - dy) * 0.55;

      let tx = rx;
      let ty = ry;
      let scale = 1;
      let snap = false;

      if (hoverRect) {
        // Snap to element bounds (reticle)
        snap = true;
        const cx = hoverRect.left + hoverRect.width / 2;
        const cy = hoverRect.top + hoverRect.height / 2;
        tx = cx;
        ty = cy;
        const size = Math.max(hoverRect.width, hoverRect.height) + 18;
        scale = Math.min(3.6, size / 32);
      }

      ring.style.transform = `translate3d(${tx - 16}px, ${ty - 16}px, 0) scale(${scale})`;
      ring.classList.toggle("lumina-cursor--snap", snap);

      dot.style.transform = `translate3d(${dx - 2}px, ${dy - 2}px, 0)`;

      if (hoverLabel && snap) {
        label.style.opacity = "1";
        label.style.transform = `translate3d(${tx + 18}px, ${ty + 18}px, 0)`;
        label.textContent = hoverLabel;
      } else {
        label.style.opacity = "0";
      }

      // Trail
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < trail.length; i++) {
        const p = trail[i];
        p.a *= 0.9;
        const radius = 1.5 + (i / trail.length) * 2.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(0.78 0.13 85 / ${p.a * 0.55})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Hide native cursor
    document.documentElement.classList.add("lumina-cursor-active");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("lumina-cursor-active");
    };
  }, [isTouch]);

  if (isTouch) {
    return (
      <div className="pointer-events-none fixed inset-0 z-[9999]">
        {ripples.map((r) => (
          <span
            key={r.id}
            className="lumina-ripple"
            style={{ left: r.x, top: r.y }}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <canvas ref={trailRef} className="pointer-events-none fixed inset-0 z-[9998]" />
      <div ref={ringRef} className="lumina-cursor lumina-cursor--ring" aria-hidden />
      <div ref={dotRef} className="lumina-cursor lumina-cursor--dot" aria-hidden />
      <div ref={labelRef} className="lumina-cursor lumina-cursor--label" aria-hidden />
    </>
  );
}
