import type { Metadata } from "next";
import Icon, { type IconName } from "@/components/Icon";
import { PriceNote, SectionHead } from "@/components/ui";
import { CtaBanner, OfferBlock, PageHero, PricingCards } from "@/components/sections";

export const metadata: Metadata = {
  title: "Precios",
  description: "Precios de detailing a domicilio desde $79. Limpieza básica, detailing completo y restauración de pintura.",
};

const FACTORS: [IconName, string, string][] = [
  ["car", "Tamaño del vehículo", "Sedán, SUV, camioneta o van."],
  ["drops", "Nivel de suciedad", "Manchas, pelo de mascota, lodo."],
  ["sparkle", "Estado de la pintura", "Opacidad, marcas o rayones."],
  ["layers", "Servicios adicionales", "Extras que quieras agregar."],
];

export default function PreciosPage() {
  return (
    <>
      <PageHero crumb="Precios" eyebrow="Precios" title="Precios Claros," highlight="Sin Sorpresas" image="glossBlack"
        text="Servicios desde $79. Te confirmamos el precio final antes de empezar, según el tamaño y la condición de tu vehículo." />

      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow="Paquetes" title="Elige tu" highlight="Paquete" />
          <PricingCards />
          <PriceNote />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Transparencia" title="¿Qué influye en el" highlight="precio?" />
          <div className="why-grid">
            {FACTORS.map(([ic, t, s], i) => (
              <div key={t} className={`factor reveal reveal-d${i}`}><Icon name={ic} /><div><strong>{t}</strong><small>{s}</small></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight" style={{ paddingBottom: 110 }}>
        <div className="container"><OfferBlock /></div>
      </section>

      <CtaBanner title="¿Necesitas una cotización personalizada?" text="Llámanos o reserva en línea y te confirmamos el precio de tu vehículo." />
    </>
  );
}
