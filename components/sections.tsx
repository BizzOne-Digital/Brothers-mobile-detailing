/* Reusable page sections (server components) */
import Image from "@/components/Photo";
import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import { Brush } from "./ui";
import { img, PRICING, SITE, TESTIMONIALS, type ImgKey, type Service } from "@/lib/site";
import { photo } from "@/lib/photo";

export function PageHero({ crumb, eyebrow, title, highlight, text, image }: {
  crumb: string; eyebrow: string; title: string; highlight: string; text: string; image: ImgKey;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" data-parallax="0.25">
        <Image src={img(image, 1800)} alt="" fill priority sizes="100vw" />
      </div>
      <div className="container">
        <nav className="crumbs fade-up" aria-label="Breadcrumb"><Link href="/">Inicio</Link><Icon name="chevron" /><span>{crumb}</span></nav>
        <span className="eyebrow eyebrow--light fade-up d1">{eyebrow}</span>
        <h1 className="fade-up d1">{title} <span className="text-red">{highlight}</span></h1>
        <Brush />
        <p className="fade-up d2">{text}</p>
      </div>
    </section>
  );
}

export function CtaBanner({ image = "garage", title = "¿Listo para darle a tu auto el cuidado que merece?", text = "Agenda tu servicio de detailing a domicilio hoy." }: {
  image?: ImgKey; title?: string; text?: string;
}) {
  return (
    <section className="cta-banner">
      <div className="cta-banner__bg" data-parallax="0.15"><Image src={img(image, 1800)} alt="" fill sizes="100vw" /></div>
      <div className="container reveal">
        <span className="eyebrow eyebrow--light">Reserva hoy</span>
        <h2 className="heading-lg">{title}</h2>
        <p>{text}</p>
        <div className="btn-row">
          <Link href="/reservar" className="btn btn--primary btn--glow"><Icon name="calendar" /> Agenda tu Cita</Link>
          <a href={SITE.phoneHref} className="btn btn--outline"><Icon name="phone" /> Llámanos: {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ s, i, detailed }: { s: Service; i: number; detailed?: boolean }) {
  return (
    <article className={`s-card reveal reveal-d${i % 3}`} id={detailed ? s.id : undefined}>
      <div className="s-card__top">
        <div className="s-card__media">
          <Image src={photo(`services/${s.id}`, s.img, 800)} alt={s.name} fill sizes="(max-width: 860px) 85vw, 400px" />
        </div>
        <span className="s-card__icon"><Icon name={s.icon} /></span>
      </div>
      <div className="s-card__body">
        <h3>{s.name}</h3>
        <p>{s.short}</p>
        {detailed && <ul className="s-card__list">{s.features.map((f) => <li key={f}><Icon name="check" />{f}</li>)}</ul>}
        <div className="s-card__foot">
          {s.price != null
            ? <span className="price-tag"><i>Desde</i> <b>${s.price}</b></span>
            : <span className="price-tag price-tag--quote"><b>Cotizar</b></span>}
          <Link href={`/reservar?servicio=${s.id}`} className="link-arrow" aria-label={`Reservar ${s.name}`}>Reservar <Icon name="arrow" /></Link>
        </div>
      </div>
    </article>
  );
}

export function PricingCards() {
  return (
    <div className="pricing">
      {PRICING.map((p, i) => (
        <article key={p.name} className={`p-card ${p.featured ? "p-card--featured" : ""} reveal reveal-d${i % 3}`}>
          {p.featured && <span className="p-card__badge">Más popular</span>}
          <div className="p-card__icon"><Icon name={p.icon} /></div>
          <h3>{p.name}</h3>
          <p className="p-card__desc">{p.desc}</p>
          <div className="p-card__price">
            {p.price != null ? <><small>Desde</small><strong>${p.price}</strong></> : <strong className="quote">Solicitar Cotización</strong>}
          </div>
          <ul className="s-card__list">{p.features.map((f) => <li key={f}><Icon name="check" />{f}</li>)}</ul>
          <Link href={`/reservar?servicio=${p.service}`} className={`btn ${p.featured ? "btn--primary" : "btn--dark"} btn--block`}>
            <Icon name="calendar" /> {p.price != null ? "Reservar" : "Pedir Cotización"}
          </Link>
        </article>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="t-grid">
      {TESTIMONIALS.map((t, i) => (
        <article key={t.name} className={`t-card reveal reveal-d${i % 3}`}>
          <Icon name="quote" className="t-card__quote" />
          <div className="stars" aria-label="5 de 5 estrellas">{[0, 1, 2, 3, 4].map((k) => <Icon key={k} name="star" />)}</div>
          <p>&ldquo;{t.text}&rdquo;</p>
          <div className="t-card__who">
            <span className="avatar">{t.name.charAt(0)}</span>
            <div><strong>{t.name}</strong><small>{t.service}</small></div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FeatureGrid({ items }: { items: { icon: IconName; title: string; text: string }[] }) {
  return (
    <div className="why-grid">
      {items.map((it, i) => (
        <div key={it.title} className={`why-card reveal reveal-d${i % 4}`}>
          <div className="why-card__icon"><Icon name={it.icon} /></div>
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </div>
      ))}
    </div>
  );
}

export function ProcessSteps({ steps }: { steps: { icon: IconName; title: string; text: string }[] }) {
  return (
    <div className="steps">
      {steps.map((s, i) => (
        <div key={s.title} className="step">
          <div className="step__icon"><Icon name={s.icon} /><span className="step__num">0{i + 1}</span></div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
}

export function OfferBlock() {
  return (
    <div className="offer reveal">
      <div className="offer__img"><Image src={img("glossRed", 1200)} alt="" fill sizes="50vw" /></div>
      <div>
        <span className="eyebrow">Promoción</span>
        <h2>Oferta Especial</h2>
        {/* TODO: replace with the real offer conditions */}
        <span className="placeholder-note">Texto editable: agrega aquí las condiciones reales de la oferta</span>
        <p>Aprovecha nuestra promoción especial en servicios seleccionados. Contáctanos para conocer los detalles y la disponibilidad.</p>
        <div className="btn-row"><Link href="/reservar?oferta=1" className="btn btn--white"><Icon name="tag" /> Aprovechar Oferta</Link></div>
      </div>
      <div className="offer__amount"><span>Oferta</span><strong>${SITE.offerAmount}</strong><span>Especial</span></div>
    </div>
  );
}

export function Stats() {
  const items: [IconName, string, string][] = [
    ["truck", "Servicio Móvil", "En tu casa u oficina"],
    ["sparkle", "Detailing Profesional", "Interior y exterior"],
    ["calendar", "Reserva Fácil", "En pocos pasos"],
    ["award", "Resultados de Calidad", "Atención al detalle"],
  ];
  return (
    <div className="stats">
      {items.map(([ic, t, s]) => <div key={t} className="stat"><Icon name={ic} /><div><strong>{t}</strong><small>{s}</small></div></div>)}
    </div>
  );
}
