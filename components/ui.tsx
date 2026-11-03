import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./Icon";
import { SITE } from "@/lib/site";

export function Logo({ homeHref = "/", label = "Home" }: { homeHref?: string; label?: string }) {
  return (
    <Link href={homeHref} className="logo" aria-label={`${SITE.name} — ${label}`}>
      <svg viewBox="0 0 240 70" aria-hidden="true">
        <path d="M20 26c18-12 52-20 88-20 34 0 62 7 84 18 10 1 20 3 28 6" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <path d="M78 14c22-4 52-3 70 2l-16 8H70z" fill="#e3141b" opacity=".95" />
        <path d="M150 17c18 2 36 6 50 12" fill="none" stroke="#e3141b" strokeWidth="3" strokeLinecap="round" />
        <text x="120" y="52" textAnchor="middle" fill="#fff" fontFamily="var(--font-exo), sans-serif" fontWeight="900" fontStyle="italic" fontSize="31" letterSpacing="1">BROTHERS</text>
        <text x="120" y="66" textAnchor="middle" fill="#e3141b" fontFamily="var(--font-exo), sans-serif" fontWeight="700" fontStyle="italic" fontSize="10.5" letterSpacing="5">MOBILE DETAILING</text>
      </svg>
    </Link>
  );
}

/** Hand-drawn red underline under headings */
export function Brush() {
  return (
    <svg className="brush" viewBox="0 0 320 16" fill="none" aria-hidden="true">
      <path d="M3 11C70 4 170 2 317 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 13c60-4 140-6 230-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".5" />
    </svg>
  );
}

export function Socials() {
  return (
    <div className="social">
      <a href={SITE.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Icon name="instagram" /></a>
      <a href={SITE.facebook} target="_blank" rel="noopener" aria-label="Facebook"><Icon name="facebook" /></a>
    </div>
  );
}

/** Centered section heading: eyebrow + title with red highlight + brush + optional lead */
export function SectionHead({ eyebrow, title, highlight, lead }: { eyebrow: string; title: string; highlight: string; lead?: string }) {
  return (
    <div className="section-head section-head--center reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-lg">{title} <span className="text-red">{highlight}</span></h2>
      <Brush />
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export function PriceNote({ text }: { text: string }) {
  return <p className="note"><Icon name="info" /> {text}</p>;
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="check-list">
      {items.map((it, i) => <li key={i}><Icon name="checkCircle" /><span>{it}</span></li>)}
    </ul>
  );
}
