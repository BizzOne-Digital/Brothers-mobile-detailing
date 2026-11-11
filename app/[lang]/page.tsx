import Image from "@/components/Photo";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import { Brush, PriceNote, SectionHead } from "@/components/ui";
import { BusinessHours, CtaBanner, FeatureGrid, OfferBlock, PricingCards, ProcessSteps, SelfSufficient, ServiceCard, Stats, Testimonials } from "@/components/sections";
import { SITE } from "@/lib/site";
import { photo } from "@/lib/photo";
import { getDict, localizedServices } from "@/lib/i18n";
import { href } from "@/lib/i18n/config";

const WHY_ICONS: IconName[] = ["truck", "droplet", "bolt", "zoom", "bottle", "award"];
const HIGHLIGHT: { icon: IconName; id: string }[] = [{ icon: "sparkle", id: "limpieza" }, { icon: "car", id: "profunda" }, { icon: "layers", id: "pintura" }];
const TRUST: IconName[] = ["home", "shield", "clock"];

export default async function HomePage() {
  const { lang, t } = await getDict();
  const h = t.home;
  const services = localizedServices(t).filter((s) => s.home);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__media" data-parallax="0.2">
          <Image src={photo("hero", "hero", 2000)} alt={h.heroAlt} fill priority sizes="(max-width: 860px) 100vw, 72vw" />
        </div>
        <div className="container">
          <div className="hero__content">
            <span className="eyebrow eyebrow--light fade-up">{h.hero.eyebrow}</span>
            <h1 className="hero__title heading-xl">
              <span>{h.hero.l1}</span>
              <span>{h.hero.l2}</span>
              <span>{h.hero.l3}</span>
            </h1>
            <Brush />
            <p className="hero__text fade-up d1">{h.hero.text}</p>
            <div className="trust fade-up d2">
              {h.hero.trust.map(([a, b], i) => (
                <div key={a} className="trust__item"><Icon name={TRUST[i]} /><span>{a}<br />{b}</span></div>
              ))}
            </div>
            <div className="btn-row fade-up d3">
              <Link href={href(lang, "/book")} className="btn btn--primary btn--glow"><Icon name="calendar" /> {t.nav.book}</Link>
              <Link href={href(lang, "/services")} className="btn btn--outline">{h.hero.ctaServices} <Icon name="arrow" className="icon-arrow" /></Link>
            </div>
          </div>
        </div>
        <div className="glass-badge fade-up d4">
          <span className="glass-badge__icon"><Icon name="tag" /></span>
          <div><small>{h.badges.from}</small><strong>${SITE.startingPrice}</strong></div>
        </div>
        <div className="glass-badge glass-badge--2 fade-up d4">
          <span className="glass-badge__icon"><Icon name="droplet" /></span>
          <div><small>{h.badges.waterSmall}</small><strong>{h.badges.waterBig}</strong></div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHT BAR */}
      <div className="container highlight-wrap">
        <div className="highlight fade-up d4">
          {HIGHLIGHT.map((it, i) => (
            <Link key={it.id} href={href(lang, `/services#${it.id}`)} className="highlight__item">
              <Icon name={it.icon} /><div><h3>{h.highlight[i][0]}</h3><p>{h.highlight[i][1]}</p></div>
            </Link>
          ))}
        </div>
      </div>

      {/* FILTERED WATER + OWN POWER */}
      <SelfSufficient />

      {/* OUR SERVICES */}
      <section className="section">
        <div className="container services-split">
          <div className="reveal">
            <h2 className="heading-lg">{h.services.title} <span className="text-red">{h.services.highlight}</span></h2>
            <Brush />
            <p className="lead" style={{ margin: "22px 0 30px" }}>{h.services.lead}</p>
            <Link href={href(lang, "/services")} className="btn btn--primary">{h.services.cta} <Icon name="arrow" className="icon-arrow" /></Link>
          </div>
          <div className="cards-3">
            {services.map((s, i) => <ServiceCard key={s.id} s={s} i={i} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">{h.why.eyebrow}</span>
            <h2 className="heading-lg">{h.why.title} <span className="text-red">{h.why.highlight}</span></h2>
            <Brush />
          </div>
          <FeatureGrid items={h.why.items.map((it, i) => ({ ...it, icon: WHY_ICONS[i] }))} />
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow={h.ba.eyebrow} title={h.ba.title} highlight={h.ba.highlight} lead={h.ba.lead} />
          {/* Pass before="..." with a real photo of the same vehicle when available */}
          <BeforeAfter after="garage" t={t.ba} />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={h.process.eyebrow} title={h.process.title} highlight={h.process.highlight} />
          <ProcessSteps steps={h.process.steps} icons={["calendar", "truck", "sparkle"]} />
        </div>
      </section>

      {/* PRICING */}
      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow={h.pricing.eyebrow} title={h.pricing.title} highlight={h.pricing.highlight} />
          <PricingCards />
          <PriceNote text={t.common.priceNote} />
        </div>
      </section>

      {/* OFFER */}
      <section className="section--tight">
        <div className="container"><OfferBlock /></div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={h.gallery.eyebrow} title={h.gallery.title} highlight={h.gallery.highlight} />
          <Gallery t={t.gallery} variant="home" limit={6} />
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href={href(lang, "/gallery")} className="btn btn--outline-dark">{h.gallery.cta} <Icon name="arrow" className="icon-arrow" /></Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section--gray">
        <div className="container about">
          <div className="about__media reveal">
            <div className="img-frame main"><Image src={photo("about-main", "handWash", 900)} alt={h.about.altMain} fill sizes="(max-width: 860px) 90vw, 520px" /></div>
            <div className="img-frame sub"><Image src={photo("about-secondary", "interior", 600)} alt={h.about.altSub} fill sizes="300px" /></div>
            <span className="tag"><Icon name="truck" /> {h.about.tag}</span>
          </div>
          <div className="reveal reveal-d1">
            <span className="eyebrow">{h.about.eyebrow}</span>
            <h2 className="heading-lg">{h.about.title} <span className="text-red">{h.about.highlight}</span></h2>
            <Brush />
            <p className="lead" style={{ marginTop: 20 }}>{h.about.text}</p>
            <Stats />
            <Link href={href(lang, "/about")} className="btn btn--dark">{h.about.cta} <Icon name="arrow" className="icon-arrow" /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow={h.testimonials.eyebrow} title={h.testimonials.title} highlight={h.testimonials.highlight} />
          <Testimonials />
        </div>
      </section>

      <CtaBanner />

      {/* CONTACT PREVIEW */}
      <section className="section section--gray">
        <div className="container contact">
          <div className="info-card reveal">
            <span className="eyebrow eyebrow--light">{h.contact.eyebrow}</span>
            <h2>{h.contact.title}</h2>
            <p>{h.contact.text}</p>
            <ul className="info-list">
              <li><a href={SITE.phoneHref}><span className="ic"><Icon name="phone" /></span><span><small>{t.contactPage.info.phone}</small><strong>{SITE.phone}</strong></span></a></li>
              <li><a href={SITE.phone2Href}><span className="ic"><Icon name="phone" /></span><span><small>{t.contactPage.info.phone2}</small><strong>{SITE.phone2}</strong></span></a></li>
              <li><a href={`mailto:${SITE.email}`}><span className="ic"><Icon name="mail" /></span><span><small>{t.contactPage.info.email}</small><strong>{SITE.email}</strong></span></a></li>
            </ul>
            <BusinessHours />
          </div>
          <div className="form-card reveal reveal-d1">
            <h2 className="heading-md">{h.contact.readyTitle}</h2>
            <p className="muted">{h.contact.readyText}</p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <Link href={href(lang, "/book")} className="btn btn--primary"><Icon name="calendar" /> {t.nav.book}</Link>
              <Link href={href(lang, "/contact")} className="btn btn--outline-dark">{h.contact.message} <Icon name="arrow" className="icon-arrow" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
