/* Language config — safe to import from client and server code */
export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const hasLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v);

/** Build a link for a language: English uses clean URLs, Spanish adds /es */
export function href(lang: Locale, path: string) {
  if (lang === DEFAULT_LOCALE) return path;
  return path === "/" ? "/es" : `/es${path}`;
}

/** Path without its language prefix: "/es/services" or "/en/services" → "/services".
    (English pages are rewritten to /en internally, so usePathname can report either form.) */
export function barePath(pathname: string) {
  const m = pathname.match(/^\/(en|es)(\/.*)?$/);
  return m ? m[2] || "/" : pathname;
}

/** Same page in the other language (used by the EN | ES switcher) */
export function switchPath(pathname: string, to: Locale) {
  return href(to, barePath(pathname));
}
