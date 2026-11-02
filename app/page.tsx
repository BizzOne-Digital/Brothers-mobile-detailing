import Image from "@/components/Photo";
import Link from "next/link";
import Icon from "@/components/Icon";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import { Brush, PriceNote, SectionHead } from "@/components/ui";
import { CtaBanner, FeatureGrid, OfferBlock, PricingCards, ProcessSteps, ServiceCard, Stats, Testimonials } from "@/components/sections";
import { SERVICES, SITE } from "@/lib/site";
import { photo } from "@/lib/photo";

const WHY = [
  { icon: "truck" as const, title: "Servicio a Domicilio", text: "Vamos directamente a tu casa u oficina. Tú sigues con tu día, nosotros cuidamos tu auto." },
  { icon: "zoom" as const, title: "Atención al Detalle", text: "Limpieza profesional con cuidado en cada rincón, superficie y acabado del vehículo." },
  { icon: "bottle" as const, title: "Productos Profesionales", text: "Usamos productos de calidad diseñados específicamente para el detailing automotriz." },
  { icon: "award" as const, title: "Resultados que Hablan por Sí Solos", text: "Resultados profesionales que devuelven a tu vehículo su mejor apariencia." },
];

const PROCESS = [
  { icon: "calendar" as const, title: "Agenda", text: "Elige el servicio de detailing y la fecha que mejor te funcione." },
  { icon: "truck" as const, title: "Vamos a Ti", text: "Nuestro equipo móvil llega a tu ubicación con todo lo necesario." },
  { icon: "sparkle" as const, title: "Disfruta el Resultado", text: "Tu vehículo queda limpio, detallado y listo para lucir." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__media" data-parallax="0.2">
          <Image src={photo("hero", "hero", 2000)} alt="Auto negro de lujo siendo lavado con espuma" fill priority sizes="(max-width: 860px) 100vw, 72vw" />
        </div>
        <div className="container">
          <div className="hero__content">
            <span className="eyebrow eyebrow--light fade-up">Brothers Mobile Detailing</span>
            <h1 className="hero__title heading-xl">
              <span>Limpieza Profesional</span>
              <span>de Autos</span>
              <span>Servicio a Domicilio</span>
            </h1>
            <Brush />
            <p className="hero__text fade-up d1">Detailing profesional directamente en tu casa u oficina, con productos de alta calidad y atención cuidadosa a cada detalle de tu vehículo.</p>
            <div className="trust fade-up d2">
              <div className="trust__item"><Icon name="home" /><span>Vamos<br />a tu Ubicación</span></div>
              <div className="trust__item"><Icon name="shield" /><span>Calidad<br />Profesional</span></div>
              <div className="trust__item"><Icon name="clock" /><span>Servicio<br />Confiable</span></div>
            </div>
            <div className="btn-row fade-up d3">
              <Link href="/reservar" className="btn btn--primary btn--glow"><Icon name="calendar" /> Agenda tu Cita</Link>
              <Link href="/servicios" className="btn btn--outline">Ver Servicios <Icon name="arrow" className="icon-arrow" /></Link>
            </div>
          </div>
        </div>
        <div className="glass-badge fade-up d4">
          <span className="glass-badge__icon"><Icon name="tag" /></span>
          <div><small>Servicios desde</small><strong>${SITE.startingPrice}</strong></div>
        </div>
        <div className="glass-badge glass-badge--2 fade-up d4">
          <span className="glass-badge__icon"><Icon name="pin" /></span>
          <div><small>Vamos a ti</small><strong>A Domicilio</strong></div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHT BAR */}
      <div className="container highlight-wrap">
        <div className="highlight fade-up d4">
          <Link href="/servicios#limpieza" className="highlight__item"><Icon name="sparkle" /><div><h3>Limpieza de Carros</h3><p>Interiores y Exteriores</p></div></Link>
          <Link href="/servicios#profunda" className="highlight__item"><Icon name="car" /><div><h3>Limpieza Profunda</h3><p>Detailing Completo</p></div></Link>
          <Link href="/servicios#pintura" className="highlight__item"><Icon name="layers" /><div><h3>Restauración de Pintura</h3><p>Brillo y Protección Duradera</p></div></Link>
        </div>
      </div>

      {/* OUR SERVICES */}
      <section className="section">
        <div className="container services-split">
          <div className="reveal">
            <h2 className="heading-lg">Nuestros <span className="text-red">Servicios</span></h2>
            <Brush />
            <p className="lead" style={{ margin: "22px 0 30px" }}>Cuidado profesional para tu vehículo, con la comodidad de nuestro servicio a domicilio.</p>
            <Link href="/servicios" className="btn btn--primary">Ver Todos los Servicios <Icon name="arrow" className="icon-arrow" /></Link>
          </div>
          <div className="cards-3">
            {SERVICES.filter((s) => s.home).map((s, i) => <ServiceCard key={s.id} s={s} i={i} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow">Por qué nosotros</span>
            <h2 className="heading-lg">¿Por qué elegir <span className="text-red">Brothers Mobile Detailing?</span></h2>
            <Brush />
          </div>
          <FeatureGrid items={WHY} />
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow="Antes y Después" title="Resultados" highlight="Reales" lead="Desliza para ver la diferencia que hace un detailing profesional." />
          {/* Pass before="..." with a real photo of the same vehicle when available */}
          <BeforeAfter after="garage" />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Fácil y rápido" title="Así" highlight="Funciona" />
          <ProcessSteps steps={PROCESS} />
        </div>
      </section>

      {/* PRICING */}
      <section className="section section--gray">
        <div className="container">
          <SectionHead eyebrow="Precios" title="Precios" highlight="Claros" />
          <PricingCards />
          <PriceNote />
        </div>
      </section>

      {/* OFFER */}
      <section className="section--tight">
        <div className="container"><OfferBlock /></div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Galería" title="Nuestro" highlight="Trabajo" />
          <Gallery variant="home" limit={6} />
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/galeria" className="btn btn--outline-dark">Ver Galería Completa <Icon name="arrow" className="icon-arrow" /></Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section section--gray">
        <div className="container about">
          <div className="about__media reveal">
            <div className="img-frame main"><Image src={photo("about-main", "handWash", 900)} alt="Detallador lavando un auto a mano" fill sizes="(max-width: 860px) 90vw, 520px" /></div>
            <div className="img-frame sub"><Image src={photo("about-secondary", "interior", 600)} alt="Interior limpio de un vehículo" fill sizes="300px" /></div>
            <span className="tag"><Icon name="truck" /> Vamos a ti</span>
          </div>
          <div className="reveal reveal-d1">
            <span className="eyebrow">Nosotros</span>
            <h2 className="heading-lg">Cuidamos tu Auto Como Si Fuera <span className="text-red">Nuestro</span></h2>
            <Brush />
            <p className="lead" style={{ marginTop: 20 }}>En Brothers Mobile Detailing llevamos el detailing profesional hasta tu ubicación. Sin filas, sin traslados y sin perder tu tiempo: llegamos con el equipo y los productos para dejar tu vehículo impecable.</p>
            <Stats />
            <Link href="/nosotros" className="btn btn--dark">Conócenos <Icon name="arrow" className="icon-arrow" /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Testimonios" title="Lo que Dicen Nuestros" highlight="Clientes" />
          <Testimonials />
        </div>
      </section>

      <CtaBanner />

      {/* CONTACT PREVIEW */}
      <section className="section section--gray">
        <div className="container contact">
          <div className="info-card reveal">
            <span className="eyebrow eyebrow--light">Contacto</span>
            <h2>Hablemos de tu vehículo</h2>
            <p>Llámanos o envíanos un mensaje y te respondemos lo antes posible.</p>
            <ul className="info-list">
              <li><a href={SITE.phoneHref}><span className="ic"><Icon name="phone" /></span><span><small>Teléfono</small><strong>{SITE.phone}</strong></span></a></li>
              <li><a href={SITE.phone2Href}><span className="ic"><Icon name="phone" /></span><span><small>Teléfono 2</small><strong>{SITE.phone2}</strong></span></a></li>
              <li><a href={`mailto:${SITE.email}`}><span className="ic"><Icon name="mail" /></span><span><small>Email</small><strong>{SITE.email}</strong></span></a></li>
            </ul>
          </div>
          <div className="form-card reveal reveal-d1">
            <h2 className="heading-md">¿Listo para reservar?</h2>
            <p className="muted">Agenda tu cita en línea en menos de 2 minutos, o envíanos un mensaje con tus preguntas.</p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <Link href="/reservar" className="btn btn--primary"><Icon name="calendar" /> Agenda tu Cita</Link>
              <Link href="/contacto" className="btn btn--outline-dark">Enviar Mensaje <Icon name="arrow" className="icon-arrow" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
