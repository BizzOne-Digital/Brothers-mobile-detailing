import type { Metadata } from "next";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import { SectionHead } from "@/components/ui";
import { CtaBanner, PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Galería",
  description: "Galería de trabajos de detailing: exteriores, interiores, restauración de pintura y antes y después.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero crumb="Galería" eyebrow="Galería" title="Nuestro Trabajo" highlight="Habla por Sí Solo" image="glossGray"
        text="Una muestra del cuidado y la atención al detalle que ponemos en cada vehículo." />

      <section className="section">
        <div className="container"><Gallery /></div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow="Antes y Después" title="Compara el" highlight="Resultado" />
          <BeforeAfter after="glossGray" />
        </div>
      </section>

      <CtaBanner image="blackSuv" title="¿Quieres que tu auto sea el próximo?" />
    </>
  );
}
