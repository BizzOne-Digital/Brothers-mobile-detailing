"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { Logo, Socials } from "./ui";
import { NAV, SITE } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);


  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav__inner">
          <Logo />
          <nav aria-label="Principal">
            <ul className="nav__links">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={isActive(n.href) ? "is-active" : ""} aria-current={isActive(n.href) ? "page" : undefined}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav__actions">
            <Socials />
            <a href={SITE.phoneHref} className="btn btn--sm nav__phone"><Icon name="phone" /> {SITE.phone}</a>
            <Link href="/reservar" className="btn btn--primary btn--sm nav__cta"><Icon name="calendar" /> Agenda tu Cita</Link>
            <button className="nav__toggle" aria-label="Abrir menú" aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(true)}>
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${open ? "is-open" : ""}`} id="drawer" aria-hidden={!open}>
        <div className="drawer__top">
          <Logo />
          <button className="nav__toggle" style={{ display: "grid" }} aria-label="Cerrar menú" onClick={() => setOpen(false)}><Icon name="close" /></button>
        </div>
        <ul className="drawer__links">
          {NAV.map((n, i) => (
            <li key={n.href} style={{ transitionDelay: `${0.08 + i * 0.05}s` }}>
              <Link href={n.href} className={isActive(n.href) ? "is-active" : ""} onClick={() => setOpen(false)}>{n.label} <Icon name="chevron" /></Link>
            </li>
          ))}
        </ul>
        <div className="drawer__bottom">
          <Link href="/reservar" className="btn btn--primary btn--block" onClick={() => setOpen(false)}><Icon name="calendar" /> Agenda tu Cita</Link>
          <a href={SITE.phoneHref} className="btn btn--outline btn--block"><Icon name="phone" /> {SITE.phone}</a>
          <Socials />
        </div>
      </div>

      <div className="mobile-bar">
        <a href={SITE.phoneHref} className="btn btn--outline"><Icon name="phone" /> Llamar</a>
        <Link href="/reservar" className="btn btn--primary"><Icon name="calendar" /> Agenda tu Cita</Link>
      </div>
    </>
  );
}
