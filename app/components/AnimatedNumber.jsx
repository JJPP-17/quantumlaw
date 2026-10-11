"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ value, currency = false }) {
  const element = useRef(null);
  const [display, setDisplay] = useState(null);
  const target = Number(String(value ?? "").replace(/[$,]/g, ""));
  const valid = value !== null && value !== undefined && value !== "" && Number.isFinite(target);
  const format = number => `${currency ? "$" : ""}${new Intl.NumberFormat("en-AU", { maximumFractionDigits: 0 }).format(number)}`;

  useEffect(() => {
    if (!valid) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    let frame;
    let started = false;
    setDisplay(0);
    const observer = new IntersectionObserver(entries => {
      if (started || !entries.some(entry => entry.isIntersecting)) return;
      started = true;
      observer.disconnect();
      const start = performance.now();
      const tick = now => {
        const progress = Math.max(0, Math.min((now - start) / 700, 1));
        setDisplay(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.25 });
    observer.observe(element.current);
    const stop = () => { if (motion.matches) { observer.disconnect(); cancelAnimationFrame(frame); setDisplay(target); } };
    motion.addEventListener("change", stop);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); motion.removeEventListener("change", stop); };
  }, [target, valid]);

  return <strong ref={element} aria-label={valid ? format(target) : String(value || "—")}><span aria-hidden="true">{valid ? format(display ?? target) : value || "—"}</span></strong>;
}
