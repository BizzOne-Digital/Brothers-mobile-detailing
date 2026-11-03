import type { Metadata } from "next";
import Image from "@/components/Photo";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CheckList, SectionHead } from "@/components/ui";
import { CtaBanner, PageHero, SelfSufficient, ServiceCard } from "@/components/sections";
import { photo } from "@/lib/photo";
import { getDict, localizedServices } from "@/lib/i18n";
import { href } from "@/lib/i18n/config";

// Which package includes each comparison row: [Basic, Full Detail, Restoration]
const COMPARE: [boolean, boolean, boolean][] = [
  [true, true, true], [true, true, false], [false, true, false], [false, true, false], [false, false, true], [false, true, true],
];

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return t.servicesPage.meta;
}

export default async function ServicesPage() {
  const { lang, t } = await getDict();
  const p = t.servicesPage;
  const items = (list: string[][]) => list.map(([bold, rest]) => <><strong>{bold}</strong> {rest}</>);

  return (
    <>
      <PageHero hero={p.hero} image="wheelFoam" />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={p.catalog.eyebrow} title={p.catalog.title} highlight={p.catalog.highlight} lead={p.catalog.lead} />
          <div className="cards-3 stack-mobile">
            {localizedServices(t).map((s, i) => <ServiceCard key={s.id} s={s} i={i} detailed />)}
          </div>
        </div>
      </section>

      <SelfSufficient dark />

      <section className="section section--gray">
        <div className="container feature-row">
          <div className="img-frame feature-img reveal"><Image src={photo("services/feature-interior", "interior", 1000)} alt={p.interior.alt} fill sizes="(max-width: 860px) 100vw, 600px" /></div>
          <div className="reveal reveal-d1">
            <span className="eyebrow">{p.interior.eyebrow}</span>
            <h2 className="heading-lg">{p.interior.before} <span className="text-red">{p.interior.highlight}</span> {p.interior.after}</h2>
            <CheckList items={items(p.interior.items)} />
            <Link href={href(lang, "/book?servicio=interior")} className="btn btn--primary"><Icon name="calendar" /> {p.interior.cta}</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-row feature-row--rev">
          <div className="reveal">
            <span className="eyebrow">{p.paint.eyebrow}</span>
            <h2 className="heading-lg">{p.paint.before} <span className="text-red">{p.paint.highlight}</span> {p.paint.after}</h2>
            <CheckList items={items(p.paint.items)} />
            <Link href={href(lang, "/book?servicio=pintura")} className="btn btn--primary"><Icon name="calendar" /> {p.paint.cta}</Link>
          </div>
          <div className="img-frame feature-img reveal reveal-d1"><Image src={photo("services/feature-pintura", "glossGray", 1000)} alt={p.paint.alt} fill sizes="(max-width: 860px) 100vw, 600px" /></div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow={p.compare.eyebrow} title={p.compare.title} highlight={p.compare.highlight} />
          <div className="table-wrap reveal">
            <table className="compare">
              <thead><tr>{p.compare.cols.map((c) => <th key={c}>{c}</th>)}</tr></thead>
              <tbody>
                {p.compare.rows.map((label, r) => (
                  <tr key={label}>
                    <td>{label}</td>
                    {COMPARE[r].map((yes, i) => (
                      <td key={i}>{yes ? <Icon name="check" /> : <Icon name="close" className="no" />}<span className="sr-only">{yes ? t.common.included : t.common.notIncluded}</span></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={p.faq.eyebrow} title={p.faq.title} highlight={p.faq.highlight} />
          <div className="faq reveal">
            {p.faq.items.map(([q, a]) => (
              <details key={q}><summary>{q}<Icon name="plus" /></summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner image="glossBlack" />
    </>
  );
}
