import Link from "next/link";
import Icon from "./Icon";
import { Logo, Socials } from "./ui";
import { NAV, SERVICES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Logo />
            <p>Detailing profesional a domicilio. Llevamos el cuidado de tu vehículo hasta tu casa u oficina, con productos de calidad y atención a cada detalle.</p>
            <Socials />
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              {NAV.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}
              <li><Link href="/reservar">Reservar</Link></li>
            </ul>
          </div>
          <div>
            <h4>Servicios</h4>
            <ul>{SERVICES.slice(0, 6).map((s) => <li key={s.id}><Link href={`/servicios#${s.id}`}>{s.name}</Link></li>)}</ul>
          </div>
          <div className="footer__contact">
            <h4>Contacto</h4>
            <ul>
              <li><a href={SITE.phoneHref}><Icon name="phone" /> {SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`}><Icon name="mail" /> {SITE.email}</a></li>
              <li><span><Icon name="globe" /> {SITE.website}</span></li>
              <li><span><Icon name="pin" /> Servicio a domicilio</span></li>
            </ul>
            <Link href="/reservar" className="btn btn--primary btn--sm" style={{ marginTop: 22 }}><Icon name="calendar" /> Agenda tu Cita</Link>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>&copy; {SITE.year} {SITE.name}. Todos los derechos reservados.</span>
        <span>Mobile Car Detailing &middot; Servicio a Domicilio</span>
      </div>
    </footer>
  );
}
