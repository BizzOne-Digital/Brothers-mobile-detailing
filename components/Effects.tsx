"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Scroll reveal (.reveal / .step) and parallax ([data-parallax]) — re-binds on every route change */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal, .step").forEach((el) => io.observe(el));

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const layers = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    let ticking = false;
    const update = () => {
      layers.forEach((el) => {
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        el.style.transform = `translate3d(0, ${(-r.top * Number(el.dataset.parallax)).toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };
    if (!reduce) { update(); window.addEventListener("scroll", onScroll, { passive: true }); }

    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, [pathname]);

  return null;
}
