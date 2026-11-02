import type { Metadata } from "next";
import Image from "@/components/Photo";
import Icon from "@/components/Icon";
import { Brush, SectionHead } from "@/components/ui";
import { CtaBanner, FeatureGrid, PageHero, ProcessSteps, Stats, Testimonials } from "@/components/sections";
import { photo } from "@/lib/photo";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce a Brothers Mobile Detailing: detailing profesional a domicilio con atención a cada detalle.",
};

const VALUES = [
  { icon: "clock" as const, title: "Puntualidad", text: "Respetamos tu tiempo. Llegamos en el horario acordado." },
  { icon: "zoom" as const, title: "Detalle", text: "Cada rincón cuenta: rejillas, costuras, rines y vidrios." },
  { icon: "shield" as const, title: "Confianza", text: "Trato respetuoso y cuidado total con tu vehículo y tu propiedad." },
  { icon: "thumb" as const, title: "Honestidad", text: "Precios claros, confirmados antes de comenzar el trabajo." },
];

const STEPS = [
  { icon: "calendar" as const, title: "Agenda", text: "Elige el servicio y el horario que prefieras." },
  { icon: "truck" as const, title: "Vamos a Ti", text: "Llegamos a tu ubicación con todo el equipo." },
  { icon: "sparkle" as const, title: "Disfruta el Resultado", text: "Revisamos el trabajo contigo antes de irnos." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero crumb="Nosotros" eyebrow="Nosotros" title="Cuidamos tu Auto" highlight="Como Si Fuera Nuestro" image="handWash"
        text="Un servicio de detailing móvil creado para darte resultados profesionales sin que tengas que salir de casa." />

      <section className="section">
        <div className="container about">
          <div className="about__media reveal">
            <div className="img-frame main"><Image src={photo("about-main", "polish", 900)} alt="Detallador cuidando la pintura de un auto" fill sizes="(max-width: 860px) 90vw, 520px" /></div>
            <div className="img-frame sub"><Image src={photo("about-secondary", "wheelFoam", 600)} alt="Lavado de rines con espuma" fill sizes="300px" /></div>
            <span className="tag"><Icon name="shield" /> Calidad Profesional</span>
          </div>
          <div className="reveal reveal-d1">
            <span className="eyebrow">Nuestra historia</span>
            <h2 className="heading-lg">Detailing profesional, <span className="text-red">donde estés</span></h2>
            <Brush />
            <p className="lead" style={{ marginTop: 20 }}>Brothers Mobile Detailing nació con una idea simple: que cuidar tu vehículo no te quite tiempo. Llegamos a tu casa, oficina o donde lo necesites, con el equipo y los productos para hacer un trabajo profesional.</p>
            <p className="muted">Tratamos cada auto con el mismo cuidado que le daríamos al nuestro: revisamos cada superficie, usamos productos adecuados para cada material y no terminamos hasta que el resultado se ve bien.</p>
            <Stats />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Nuestros valores</span>
            <h2 className="heading-lg">Lo que nos <span className="text-red">define</span></h2>
            <Brush />
          </div>
          <FeatureGrid items={VALUES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Proceso" title="Así" highlight="Trabajamos" />
          <ProcessSteps steps={STEPS} />
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow="Testimonios" title="Clientes" highlight="Satisfechos" />
          <Testimonials />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
