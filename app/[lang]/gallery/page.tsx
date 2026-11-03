import type { Metadata } from "next";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import { SectionHead } from "@/components/ui";
import { CtaBanner, PageHero } from "@/components/sections";
import { getDict } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return t.galleryPage.meta;
}

export default async function GalleryPage() {
  const { t } = await getDict();
  const p = t.galleryPage;
  return (
    <>
      <PageHero hero={p.hero} image="glossGray" />

      <section className="section">
        <div className="container"><Gallery t={t.gallery} /></div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow={p.ba.eyebrow} title={p.ba.title} highlight={p.ba.highlight} />
          <BeforeAfter after="glossGray" t={t.ba} />
        </div>
      </section>

      <CtaBanner image="blackSuv" title={p.cta} />
    </>
  );
}
