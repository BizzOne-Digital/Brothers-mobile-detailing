import type { Metadata } from "next";
import Icon, { type IconName } from "@/components/Icon";
import { PriceNote, SectionHead } from "@/components/ui";
import { CtaBanner, OfferBlock, PageHero, PricingCards, SelfSufficient } from "@/components/sections";
import { getDict } from "@/lib/i18n";

const FACTOR_ICONS: IconName[] = ["car", "drops", "sparkle", "layers"];

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return t.pricingPage.meta;
}

export default async function PricingPage() {
  const { t } = await getDict();
  const p = t.pricingPage;
  return (
    <>
      <PageHero hero={p.hero} image="glossBlack" />

      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow={p.packages.eyebrow} title={p.packages.title} highlight={p.packages.highlight} />
          <PricingCards />
          <PriceNote text={t.common.priceNote} />
        </div>
      </section>

      <SelfSufficient />

      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow={p.factors.eyebrow} title={p.factors.title} highlight={p.factors.highlight} />
          <div className="why-grid">
            {p.factors.items.map(([title, sub], i) => (
              <div key={title} className={`factor reveal reveal-d${i}`}><Icon name={FACTOR_ICONS[i]} /><div><strong>{title}</strong><small>{sub}</small></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight" style={{ paddingBottom: 110 }}>
        <div className="container"><OfferBlock /></div>
      </section>

      <CtaBanner title={p.cta.title} text={p.cta.text} />
    </>
  );
}
