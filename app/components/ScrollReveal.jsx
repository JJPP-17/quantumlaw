"use client";
import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, className = "" }) {
  const root = useRef(null);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const items = Array.from(root.current.children);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.animate([
          { opacity: 0, transform: "translateY(30px)" },
          { opacity: 1, transform: "translateY(0)" }
        ], { duration: 650, delay: (items.indexOf(entry.target) % 3) * 100, easing: "cubic-bezier(.2,.7,.2,1)", fill: "backwards" });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
    const stop = () => { if (motion.matches) { observer.disconnect(); items.forEach(item => item.getAnimations().forEach(animation => animation.cancel())); } };
    motion.addEventListener("change", stop);
    return () => { observer.disconnect(); items.forEach(item => item.getAnimations().forEach(animation => animation.cancel())); motion.removeEventListener("change", stop); };
  }, []);
  return <div ref={root} className={className}>{children}</div>;
}
