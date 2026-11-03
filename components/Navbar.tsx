"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { Logo, Socials } from "./ui";
import { NAV, SITE } from "@/lib/site";
import { barePath, href, switchPath, type Locale } from "@/lib/i18n/config";
import type { Dict } from "@/lib/i18n/en";

/** EN | ES toggle — goes to the same page in the other language */
function LangSwitch({ lang, pathname, label, onPick }: { lang: Locale; pathname: string; label: string; onPick?: () => void }) {
  return (
    <div className="lang-switch" role="group" aria-label={label}>
      {(["en", "es"] as const).map((l) => (
        <Link key={l} href={switchPath(pathname, l)} hrefLang={l} className={l === lang ? "is-active" : ""}
          aria-current={l === lang ? "true" : undefined} onClick={onPick} prefetch={false}>
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar({ lang, t }: { lang: Locale; t: Dict["nav"] }) {
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

  const bare = barePath(pathname);
  const isActive = (p: string) => (p === "/" ? bare === "/" : bare.startsWith(p));
  const close = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav__inner">
          <Logo homeHref={href(lang, "/")} label={t.home} />
          <nav aria-label={t.main}>
            <ul className="nav__links">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={href(lang, n.href)} className={isActive(n.href) ? "is-active" : ""} aria-current={isActive(n.href) ? "page" : undefined}>{t[n.key]}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav__actions">
            <LangSwitch lang={lang} pathname={pathname} label={t.switchLabel} />
            <Socials />
            <a href={SITE.phoneHref} className="btn btn--sm nav__phone"><Icon name="phone" /> {SITE.phone}</a>
            <Link href={href(lang, "/book")} className="btn btn--primary btn--sm nav__cta"><Icon name="calendar" /> {t.book}</Link>
            <button className="nav__toggle" aria-label={t.openMenu} aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(true)}>
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${open ? "is-open" : ""}`} id="drawer" aria-hidden={!open}>
        <div className="drawer__top">
          <Logo homeHref={href(lang, "/")} label={t.home} />
          <button className="nav__toggle" style={{ display: "grid" }} aria-label={t.closeMenu} onClick={close}><Icon name="close" /></button>
        </div>
        <ul className="drawer__links">
          {NAV.map((n, i) => (
            <li key={n.href} style={{ transitionDelay: `${0.08 + i * 0.05}s` }}>
              <Link href={href(lang, n.href)} className={isActive(n.href) ? "is-active" : ""} onClick={close}>{t[n.key]} <Icon name="chevron" /></Link>
            </li>
          ))}
        </ul>
        <div className="drawer__bottom">
          <LangSwitch lang={lang} pathname={pathname} label={t.switchLabel} onPick={close} />
          <Link href={href(lang, "/book")} className="btn btn--primary btn--block" onClick={close}><Icon name="calendar" /> {t.book}</Link>
          <a href={SITE.phoneHref} className="btn btn--outline btn--block"><Icon name="phone" /> {SITE.phone}</a>
          <a href={SITE.phone2Href} className="btn btn--outline btn--block"><Icon name="phone" /> {SITE.phone2}</a>
          <Socials />
        </div>
      </div>

      <div className="mobile-bar">
        <a href={SITE.phoneHref} className="btn btn--outline"><Icon name="phone" /> {t.call}</a>
        <Link href={href(lang, "/book")} className="btn btn--primary"><Icon name="calendar" /> {t.book}</Link>
      </div>
    </>
  );
}
