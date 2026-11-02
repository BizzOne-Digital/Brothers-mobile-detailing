import type { Metadata } from "next";
import Image from "@/components/Photo";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CheckList, SectionHead } from "@/components/ui";
import { CtaBanner, PageHero, ServiceCard } from "@/components/sections";
import { SERVICES } from "@/lib/site";
import { photo } from "@/lib/photo";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Lavado exterior, detallado interior, detailing completo, limpieza profunda, restauración y pulido de pintura, llantas y tapicería. A domicilio.",
};

const COMPARE: [string, boolean, boolean, boolean][] = [
  ["Lavado exterior a mano", true, true, true],
  ["Aspirado interior", true, true, false],
  ["Shampoo de asientos y alfombras", false, true, false],
  ["Tratamiento de olores", false, true, false],
  ["Pulido a máquina", false, false, true],
  ["Sellado protector", false, true, true],
];

const FAQ = [
  ["¿Necesito tener agua o electricidad?", "Confírmalo con nosotros al reservar. Te indicaremos lo necesario según el servicio y la ubicación."],
  ["¿Cuánto tiempo toma el servicio?", "Depende del servicio, el tamaño y la condición del vehículo. Te damos un tiempo estimado al confirmar tu cita."],
  ["¿A qué zonas dan servicio?", "Somos un servicio móvil. Escríbenos tu zona en el formulario de reserva y confirmamos disponibilidad."],
  ["¿Por qué el precio puede variar?", "El precio final depende del tamaño del vehículo (sedán, SUV, camioneta) y de su condición. Siempre te confirmamos el precio antes de empezar."],
];

export default function ServiciosPage() {
  return (
    <>
      <PageHero crumb="Servicios" eyebrow="Nuestros Servicios" title="Detailing Profesional" highlight="a Domicilio" image="wheelFoam"
        text="Desde un lavado exterior hasta la restauración completa de la pintura. Elige el servicio que tu vehículo necesita y nosotros vamos a ti." />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Catálogo" title="Todos los" highlight="Servicios" lead="Cada servicio se realiza en tu ubicación con productos profesionales." />
          <div className="cards-3 stack-mobile">
            {SERVICES.map((s, i) => <ServiceCard key={s.id} s={s} i={i} detailed />)}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container feature-row">
          <div className="img-frame feature-img reveal"><Image src={photo("services/feature-interior", "interior", 1000)} alt="Interior de vehículo detallado" fill sizes="(max-width: 860px) 100vw, 600px" /></div>
          <div className="reveal reveal-d1">
            <span className="eyebrow">Interior</span>
            <h2 className="heading-lg">Una cabina limpia, <span className="text-red">fresca</span> y protegida</h2>
            <CheckList items={[
              <><strong>Aspirado profundo</strong> de asientos, alfombras, cajuela y rincones.</>,
              <><strong>Shampoo y extracción</strong> de manchas en tela y alfombra.</>,
              <><strong>Limpieza y acondicionado</strong> de piel, vinil y plásticos.</>,
              <><strong>Tratamiento de olores</strong> para un interior fresco.</>,
            ]} />
            <Link href="/reservar?servicio=interior" className="btn btn--primary"><Icon name="calendar" /> Reservar Interior</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-row feature-row--rev">
          <div className="reveal">
            <span className="eyebrow">Pintura</span>
            <h2 className="heading-lg">Recupera el <span className="text-red">brillo</span> original</h2>
            <CheckList items={[
              <><strong>Evaluación</strong> del estado de la pintura antes de empezar.</>,
              <><strong>Descontaminación</strong> para remover residuos adheridos.</>,
              <><strong>Pulido a máquina</strong> para reducir marcas y opacidad.</>,
              <><strong>Sellado protector</strong> para un brillo más duradero.</>,
            ]} />
            <Link href="/reservar?servicio=pintura" className="btn btn--primary"><Icon name="calendar" /> Solicitar Cotización</Link>
          </div>
          <div className="img-frame feature-img reveal reveal-d1"><Image src={photo("services/feature-pintura", "glossGray", 1000)} alt="Pintura pulida con brillo profundo" fill sizes="(max-width: 860px) 100vw, 600px" /></div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow="Compara" title="¿Qué incluye" highlight="cada paquete?" />
          <div className="table-wrap reveal">
            <table className="compare">
              <thead><tr><th>Incluye</th><th>Limpieza Básica</th><th>Detailing Completo</th><th>Restauración</th></tr></thead>
              <tbody>
                {COMPARE.map(([label, ...cols]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    {cols.map((yes, i) => (
                      <td key={i}>{yes ? <Icon name="check" /> : <Icon name="close" className="no" />}<span className="sr-only">{yes ? "Incluido" : "No incluido"}</span></td>
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
          <SectionHead eyebrow="Preguntas" title="Preguntas" highlight="Frecuentes" />
          <div className="faq reveal">
            {FAQ.map(([q, a]) => (
              <details key={q}><summary>{q}<Icon name="plus" /></summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner image="glossBlack" />
    </>
  );
}
