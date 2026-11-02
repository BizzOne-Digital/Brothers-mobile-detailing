"use client";
import Image from "@/components/Photo";
import { useEffect, useState } from "react";
import Icon, { type IconName } from "./Icon";
import { GALLERY, GALLERY_LABELS, img, type GalleryCat } from "@/lib/site";

const FILTERS: { id: GalleryCat | "all"; label: string; icon: IconName }[] = [
  { id: "all", label: "Todo", icon: "grid" },
  { id: "exterior", label: "Exterior", icon: "car" },
  { id: "interior", label: "Interior", icon: "seat" },
  { id: "pintura", label: "Restauración de Pintura", icon: "sparkle" },
  { id: "antes", label: "Antes y Después", icon: "split" },
];

/** variant "home" = compact bento grid preview; "full" = masonry with filters */
export default function Gallery({ variant = "full", limit }: { variant?: "home" | "full"; limit?: number }) {
  const [filter, setFilter] = useState<GalleryCat | "all">("all");
  const [open, setOpen] = useState<number | null>(null);

  const items = GALLERY.slice(0, limit).filter((g) => filter === "all" || g.cat === filter);

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
        <div className="filters" role="group" aria-label="Filtrar galería">
          {FILTERS.map((f) => (
            <button key={f.id} className={`filter ${filter === f.id ? "is-active" : ""}`} aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              <Icon name={f.icon} /> {f.label}
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
              <span><small>{GALLERY_LABELS[g.cat]}</small><strong>{g.title}</strong></span>
              <Icon name="zoom" />
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div className="lightbox is-open" role="dialog" aria-modal="true" aria-label="Imagen ampliada" onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
          <button className="lb-btn lb-close" aria-label="Cerrar" onClick={() => setOpen(null)} autoFocus><Icon name="close" /></button>
          <button className="lb-btn lb-prev" aria-label="Anterior" onClick={() => setOpen((open! - 1 + items.length) % items.length)}><Icon name="arrowLeft" /></button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img(current.img, 1800)} alt={current.title} />
          <button className="lb-btn lb-next" aria-label="Siguiente" onClick={() => setOpen((open! + 1) % items.length)}><Icon name="arrow" /></button>
          <div className="lightbox__cap">{current.title}</div>
        </div>
      )}
    </>
  );
}
