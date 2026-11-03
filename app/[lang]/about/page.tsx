import type { Metadata } from "next";
import Image from "@/components/Photo";
import Icon, { type IconName } from "@/components/Icon";
import { Brush, SectionHead } from "@/components/ui";
import { CtaBanner, FeatureGrid, PageHero, ProcessSteps, SelfSufficient, Stats, Testimonials } from "@/components/sections";
import { photo } from "@/lib/photo";
import { getDict } from "@/lib/i18n";

const VALUE_ICONS: IconName[] = ["clock", "zoom", "shield", "thumb"];

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return t.aboutPage.meta;
}

export default async function AboutPage() {
  const { t } = await getDict();
  const p = t.aboutPage;
  return (
    <>
      <PageHero hero={p.hero} image="handWash" />

      <section className="section">
        <div className="container about">
          <div className="about__media reveal">
            <div className="img-frame main"><Image src={photo("about-main", "polish", 900)} alt={p.story.altMain} fill sizes="(max-width: 860px) 90vw, 520px" /></div>
            <div className="img-frame sub"><Image src={photo("about-secondary", "wheelFoam", 600)} alt={p.story.altSub} fill sizes="300px" /></div>
            <span className="tag"><Icon name="shield" /> {p.story.tag}</span>
          </div>
          <div className="reveal reveal-d1">
            <span className="eyebrow">{p.story.eyebrow}</span>
            <h2 className="heading-lg">{p.story.title} <span className="text-red">{p.story.highlight}</span></h2>
            <Brush />
            <p className="lead" style={{ marginTop: 20 }}>{p.story.lead}</p>
            <p className="muted">{p.story.text}</p>
            <Stats />
          </div>
        </div>
      </section>

      <SelfSufficient dark />

      <section className="section section--gray">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">{p.values.eyebrow}</span>
            <h2 className="heading-lg">{p.values.title} <span className="text-red">{p.values.highlight}</span></h2>
            <Brush />
          </div>
          <FeatureGrid items={p.values.items.map((it, i) => ({ ...it, icon: VALUE_ICONS[i] }))} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={p.process.eyebrow} title={p.process.title} highlight={p.process.highlight} />
          <ProcessSteps steps={p.process.steps} icons={["calendar", "truck", "sparkle"]} />
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow={p.testimonials.eyebrow} title={p.testimonials.title} highlight={p.testimonials.highlight} />
          <Testimonials />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
