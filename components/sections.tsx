/* Reusable page sections (server components — they read the language from the route) */
import Image from "@/components/Photo";
import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import { Brush } from "./ui";
import { img, PRICING_DATA, SITE, VETERAN_DISCOUNT, veteranPrice, type ImgKey } from "@/lib/site";
import { photo } from "@/lib/photo";
import { getDict, type Dict, type Service } from "@/lib/i18n";
import { href } from "@/lib/i18n/config";

export async function PageHero({ hero, image }: { hero: { crumb: string; eyebrow: string; title: string; highlight: string; text: string }; image: ImgKey }) {
  const { lang, t } = await getDict();
  return (
    <section className="page-hero">
      <div className="page-hero__bg" data-parallax="0.25">
        <Image src={img(image, 1800)} alt="" fill priority sizes="100vw" />
      </div>
      <div className="container">
        <nav className="crumbs fade-up" aria-label="Breadcrumb"><Link href={href(lang, "/")}>{t.common.home}</Link><Icon name="chevron" /><span>{hero.crumb}</span></nav>
        <span className="eyebrow eyebrow--light fade-up d1">{hero.eyebrow}</span>
        <h1 className="fade-up d1">{hero.title} <span className="text-red">{hero.highlight}</span></h1>
        <Brush />
        <p className="fade-up d2">{hero.text}</p>
      </div>
    </section>
  );
}

export async function CtaBanner({ image = "garage", title, text }: { image?: ImgKey; title?: string; text?: string }) {
  const { lang, t } = await getDict();
  return (
    <section className="cta-banner">
      <div className="cta-banner__bg" data-parallax="0.15"><Image src={img(image, 1800)} alt="" fill sizes="100vw" /></div>
      <div className="container reveal">
        <span className="eyebrow eyebrow--light">{t.cta.eyebrow}</span>
        <h2 className="heading-lg">{title ?? t.cta.title}</h2>
        <p>{text ?? t.cta.text}</p>
        <div className="btn-row">
          <Link href={href(lang, "/book")} className="btn btn--primary btn--glow"><Icon name="calendar" /> {t.nav.book}</Link>
          <a href={SITE.phoneHref} className="btn btn--outline"><Icon name="phone" /> {t.cta.call}: {SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}

/** "15% off for military veterans: $127.50" */
export function VeteranNote({ price, t }: { price: number; t: Dict }) {
  return (
    <p className="veteran-note">
      <Icon name="shield" />
      <span><strong>{VETERAN_DISCOUNT}% {t.common.discount}</strong> {t.common.veteran} <strong>${veteranPrice(price).toFixed(2)}</strong></span>
    </p>
  );
}

export async function ServiceCard({ s, i, detailed }: { s: Service; i: number; detailed?: boolean }) {
  const { lang, t } = await getDict();
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
          {s.addon
            ? <span className="price-tag"><i>{t.common.addon}</i> <b>+${s.addon}</b></span>
            : s.price != null
            ? <span className="price-tag">{s.regular ? <s>${s.regular}</s> : <i>{t.common.from}</i>} <b>${s.price}</b></span>
            : <span className="price-tag price-tag--quote"><b>{t.common.quote}</b></span>}
          <Link href={href(lang, `/book?servicio=${s.id}`)} className="link-arrow" aria-label={`${t.common.book} ${s.name}`}>{t.common.book} <Icon name="arrow" /></Link>
        </div>
        {s.veteran && s.price != null && <VeteranNote price={s.price} t={t} />}
      </div>
    </article>
  );
}

export async function PricingCards() {
  const { lang, t } = await getDict();
  return (
    <div className="pricing">
      {PRICING_DATA.map((p, i) => {
        const text = t.pricing[p.service];
        return (
          <article key={p.service} className={`p-card ${p.featured ? "p-card--featured" : ""} reveal reveal-d${i % 3}`}>
            {p.featured && <span className="p-card__badge">{p.regular ? t.common.specialPrice : t.common.mostPopular}</span>}
            <div className="p-card__icon"><Icon name={p.icon} /></div>
            <h3>{text.name}</h3>
            <p className="p-card__desc">{text.desc}</p>
            <div className="p-card__price">
              {p.price != null
                ? <>{p.regular ? <s>${p.regular}</s> : <small>{t.common.from}</small>}<strong>${p.price}</strong></>
                : <strong className="quote">{t.common.requestQuote}</strong>}
            </div>
            {p.veteran && p.price != null && <VeteranNote price={p.price} t={t} />}
            <ul className="s-card__list">{text.features.map((f) => <li key={f}><Icon name="check" />{f}</li>)}</ul>
            <Link href={href(lang, `/book?servicio=${p.service}`)} className={`btn ${p.featured ? "btn--primary" : "btn--dark"} btn--block`}>
              <Icon name="calendar" /> {p.price != null ? t.common.book : t.common.getQuote}
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export async function Testimonials() {
  const { t } = await getDict();
  return (
    <div className="t-grid">
      {t.testimonials.map((r, i) => (
        <article key={r.name} className={`t-card reveal reveal-d${i % 3}`}>
          <Icon name="quote" className="t-card__quote" />
          <div className="stars" aria-label={t.common.stars}>{[0, 1, 2, 3, 4].map((k) => <Icon key={k} name="star" />)}</div>
          <p>&ldquo;{r.text}&rdquo;</p>
          <div className="t-card__who">
            <span className="avatar">{r.name.charAt(0)}</span>
            <div><strong>{r.name}</strong><small>{r.service}</small></div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FeatureGrid({ items }: { items: { icon: IconName; title: string; text: string }[] }) {
  return (
    <div className={`why-grid ${items.length === 6 ? "why-grid--6" : ""}`}>
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

export function ProcessSteps({ steps, icons }: { steps: { title: string; text: string }[]; icons: IconName[] }) {
  return (
    <div className="steps">
      {steps.map((s, i) => (
        <div key={s.title} className="step">
          <div className="step__icon"><Icon name={icons[i]} /><span className="step__num">0{i + 1}</span></div>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
}

/** Filtered water + own power — two prominent cards */
export async function SelfSufficient({ dark }: { dark?: boolean }) {
  const { t } = await getDict();
  const s = t.selfSufficient;
  return (
    <section className={`self ${dark ? "self--dark" : ""}`}>
      <div className="container">
        <div className="self__grid">
          <div className="self__intro reveal">
            <span className="eyebrow">{s.eyebrow}</span>
            <h2 className="heading-lg">{s.title} <span className="text-red">{s.highlight}</span></h2>
            <Brush />
            <p className="lead">{s.lead}</p>
          </div>
          <div className="self__card reveal reveal-d1">
            <span className="self__icon"><Icon name="droplet" /></span>
            <h3>{s.water.title}</h3>
            <p>{s.water.text}</p>
          </div>
          <div className="self__card reveal reveal-d2">
            <span className="self__icon"><Icon name="bolt" /></span>
            <h3>{s.power.title}</h3>
            <p>{s.power.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function OfferBlock() {
  const { lang, t } = await getDict();
  return (
    <div className="offer reveal">
      <div className="offer__img"><Image src={img("glossRed", 1200)} alt="" fill sizes="50vw" /></div>
      <div>
        <span className="eyebrow">{t.offer.eyebrow}</span>
        <h2>{t.offer.title}</h2>
        {/* TODO: replace with the real offer conditions */}
        <span className="placeholder-note">{t.offer.placeholder}</span>
        <p>{t.offer.text}</p>
        <div className="btn-row"><Link href={href(lang, "/book?oferta=1")} className="btn btn--white"><Icon name="tag" /> {t.offer.cta}</Link></div>
      </div>
      <div className="offer__amount"><span>{t.offer.label}</span><strong>${SITE.offerAmount}</strong><span>{t.offer.special}</span></div>
    </div>
  );
}

export async function Stats() {
  const { t } = await getDict();
  const icons: IconName[] = ["truck", "droplet", "bolt", "calendar"];
  return (
    <div className="stats">
      {t.stats.map((s, i) => <div key={s.title} className="stat"><Icon name={icons[i]} /><div><strong>{s.title}</strong><small>{s.sub}</small></div></div>)}
    </div>
  );
}
