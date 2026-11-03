import type { Metadata } from "next";
import { Suspense } from "react";
import BookingWizard from "@/components/BookingWizard";
import { PageHero } from "@/components/sections";
import { getDict } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return t.booking.meta;
}

export default async function BookPage() {
  const { lang, t } = await getDict();
  return (
    <>
      <PageHero hero={t.booking.hero} image="hero" />
      <section className="booking-wrap">
        <div className="container">
          {/* useSearchParams (preselected service) requires a Suspense boundary */}
          <Suspense fallback={<div className="wizard" style={{ minHeight: 480 }} />}>
            <BookingWizard t={t} lang={lang} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
