/* Server-side dictionary access — reads the current language from the [lang] route */
import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import en, { type Dict } from "./en";
import es from "./es";
import { hasLocale, type Locale } from "./config";
import { SERVICE_DATA } from "@/lib/site";

const DICTS: Record<Locale, Dict> = { en, es };

export async function getLocale(): Promise<Locale> {
  const l = await lang();
  if (!hasLocale(l)) notFound();
  return l;
}

export async function getDict() {
  const l = await getLocale();
  return { lang: l, t: DICTS[l] };
}

/** Service data merged with its translated text */
export function localizedServices(t: Dict) {
  return SERVICE_DATA.map((s) => ({ ...s, ...t.services[s.id] }));
}
export type Service = ReturnType<typeof localizedServices>[number];

export type { Dict, Locale };
