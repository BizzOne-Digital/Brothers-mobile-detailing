import Link from "next/link";
import Icon from "./Icon";
import { Logo, Socials } from "./ui";
import { NAV, SERVICE_DATA, SITE } from "@/lib/site";
import { getDict } from "@/lib/i18n";
import { BusinessHours } from "./sections";
import { href } from "@/lib/i18n/config";

export default async function Footer() {
  const { lang, t } = await getDict();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Logo homeHref={href(lang, "/")} label={t.nav.home} />
            <p>{t.footer.about}</p>
            <Socials />
          </div>
          <div>
            <h4>{t.footer.nav}</h4>
            <ul>
              {NAV.map((n) => <li key={n.href}><Link href={href(lang, n.href)}>{t.nav[n.key]}</Link></li>)}
              <li><Link href={href(lang, "/book")}>{t.footer.book}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.footer.services}</h4>
            <ul>{SERVICE_DATA.slice(0, 6).map((s) => <li key={s.id}><Link href={href(lang, `/services#${s.id}`)}>{t.services[s.id].name}</Link></li>)}</ul>
          </div>
          <div className="footer__contact">
            <h4>{t.footer.contact}</h4>
            <ul>
              <li><a href={SITE.phoneHref}><Icon name="phone" /> {SITE.phone}</a></li>
              <li><a href={SITE.phone2Href}><Icon name="phone" /> {SITE.phone2}</a></li>
              <li><a href={`mailto:${SITE.email}`}><Icon name="mail" /> {SITE.email}</a></li>
              <li><span><Icon name="globe" /> {SITE.website}</span></li>
              <li><span><Icon name="pin" /> {t.footer.mobile}</span></li>
              <li><span><Icon name="droplet" /> {t.selfSufficient.short}</span></li>
            </ul>
            <BusinessHours />
            <Link href={href(lang, "/book")} className="btn btn--primary btn--sm" style={{ marginTop: 22 }}><Icon name="calendar" /> {t.nav.book}</Link>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>&copy; {SITE.year} {SITE.name}. {t.footer.rights}</span>
        <span>{t.footer.tagline}</span>
      </div>
    </footer>
  );
}
