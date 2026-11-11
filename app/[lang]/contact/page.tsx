import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { Socials } from "@/components/ui";
import { BusinessHours, CtaBanner, PageHero } from "@/components/sections";
import { SITE } from "@/lib/site";
import { getDict } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return t.contactPage.meta;
}

export default async function ContactPage() {
  const { t } = await getDict();
  const p = t.contactPage;
  const i = p.info;
  return (
    <>
      <PageHero hero={p.hero} image="blackAudi" />

      <section className="section section--gray">
        <div className="container contact">
          <aside className="info-card reveal">
            <span className="eyebrow eyebrow--light">{i.eyebrow}</span>
            <h2>{i.title}</h2>
            <p>{i.text}</p>
            <ul className="info-list">
              <li><a href={SITE.phoneHref}><span className="ic"><Icon name="phone" /></span><span><small>{i.phone}</small><strong>{SITE.phone}</strong></span></a></li>
              <li><a href={SITE.phone2Href}><span className="ic"><Icon name="phone" /></span><span><small>{i.phone2}</small><strong>{SITE.phone2}</strong></span></a></li>
              <li><a href={`mailto:${SITE.email}`}><span className="ic"><Icon name="mail" /></span><span><small>{i.email}</small><strong>{SITE.email}</strong></span></a></li>
              <li><div><span className="ic"><Icon name="globe" /></span><span><small>{i.website}</small><strong>{SITE.website}</strong></span></div></li>
              <li><div><span className="ic"><Icon name="pin" /></span><span><small>{i.service}</small><strong>{i.serviceValue}</strong></span></div></li>
              <li><div><span className="ic"><Icon name="droplet" /></span><span><small>{t.selfSufficient.eyebrow}</small><strong>{t.selfSufficient.short}</strong></span></div></li>
            </ul>
            <BusinessHours />
            <Socials />
          </aside>
          <ContactForm t={t} />
        </div>
      </section>

      <CtaBanner title={p.cta.title} text={p.cta.text} />
    </>
  );
}
