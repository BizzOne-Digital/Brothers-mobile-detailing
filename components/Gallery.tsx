"use client";
import Image from "@/components/Photo";
import { useEffect, useState } from "react";
import Icon, { type IconName } from "./Icon";
import { GALLERY_DATA, img, type GalleryCat } from "@/lib/site";
import type { Dict } from "@/lib/i18n/en";

const FILTERS: { id: GalleryCat | "all"; icon: IconName }[] = [
  { id: "all", icon: "grid" },
  { id: "exterior", icon: "car" },
  { id: "interior", icon: "seat" },
  { id: "pintura", icon: "sparkle" },
  { id: "antes", icon: "split" },
];

/** variant "home" = compact bento grid preview; "full" = masonry with filters */
export default function Gallery({ t, variant = "full", limit }: { t: Dict["gallery"]; variant?: "home" | "full"; limit?: number }) {
  const [filter, setFilter] = useState<GalleryCat | "all">("all");
  const [open, setOpen] = useState<number | null>(null);

  const items = GALLERY_DATA.map((g, i) => ({ ...g, title: t.items[i] }))
    .slice(0, limit)
    .filter((g) => filter === "all" || g.cat === filter);

  useEffect(() => {
    if (open === null) return;
    document.body.classList.add("no-scroll");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i! + 1) % items.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.classList.remove("no-scroll"); window.removeEventListener("keydown", onKey); };
  }, [open, items.length]);

  const current = open !== null ? items[open] : null;

  return (
    <>
      {variant === "full" && (
        <div className="filters" role="group" aria-label={t.aria}>
          {FILTERS.map((f) => (
            <button key={f.id} className={`filter ${filter === f.id ? "is-active" : ""}`} aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              <Icon name={f.icon} /> {t.filters[f.id]}
            </button>
          ))}
        </div>
      )}

      <div className={variant === "home" ? "gallery-home" : "masonry"}>
        {items.map((g, i) => (
          <button key={g.img + filter} className="g-item" onClick={() => setOpen(i)}
            style={variant === "full" ? { aspectRatio: g.ratio } : undefined}>
            <Image src={img(g.img, 900)} alt={g.title} fill sizes="(max-width: 860px) 50vw, 33vw" />
            <span className="g-item__cap">
              <span><small>{t.filters[g.cat]}</small><strong>{g.title}</strong></span>
              <Icon name="zoom" />
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div className="lightbox is-open" role="dialog" aria-modal="true" aria-label={t.dialog} onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
          <button className="lb-btn lb-close" aria-label={t.close} onClick={() => setOpen(null)} autoFocus><Icon name="close" /></button>
          <button className="lb-btn lb-prev" aria-label={t.prev} onClick={() => setOpen((open! - 1 + items.length) % items.length)}><Icon name="arrowLeft" /></button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img(current.img, 1800)} alt={current.title} />
          <button className="lb-btn lb-next" aria-label={t.next} onClick={() => setOpen((open! + 1) % items.length)}><Icon name="arrow" /></button>
          <div className="lightbox__cap">{current.title}</div>
        </div>
      )}
    </>
  );
}
