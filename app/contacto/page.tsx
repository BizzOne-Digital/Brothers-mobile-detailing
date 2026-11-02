import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { Socials } from "@/components/ui";
import { CtaBanner, PageHero } from "@/components/sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a Brothers Mobile Detailing. Llama al 702-722-7601 o envía tu solicitud en línea.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero crumb="Contacto" eyebrow="Contacto" title="Hablemos de" highlight="tu Vehículo" image="blackAudi"
        text="Escríbenos o llámanos. Te ayudamos a elegir el servicio correcto y confirmamos tu cita." />

      <section className="section section--gray">
        <div className="container contact">
          <aside className="info-card reveal">
            <span className="eyebrow eyebrow--light">Información</span>
            <h2>Estamos para ayudarte</h2>
            <p>Respondemos lo antes posible. Para una atención más rápida, llámanos directamente.</p>
            <ul className="info-list">
              <li><a href={SITE.phoneHref}><span className="ic"><Icon name="phone" /></span><span><small>Teléfono</small><strong>{SITE.phone}</strong></span></a></li>
              <li><a href={`mailto:${SITE.email}`}><span className="ic"><Icon name="mail" /></span><span><small>Email</small><strong>{SITE.email}</strong></span></a></li>
              <li><div><span className="ic"><Icon name="globe" /></span><span><small>Sitio web</small><strong>{SITE.website}</strong></span></div></li>
              <li><div><span className="ic"><Icon name="pin" /></span><span><small>Servicio</small><strong>A domicilio — vamos a ti</strong></span></div></li>
            </ul>
            <Socials />
          </aside>
          <ContactForm />
        </div>
      </section>

      <CtaBanner title="¿Prefieres reservar directamente?" text="Elige servicio, fecha y hora en menos de 2 minutos." />
    </>
  );
}
