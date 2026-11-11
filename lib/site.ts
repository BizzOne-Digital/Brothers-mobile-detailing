/* =========================================================
   SITE DATA — language-neutral settings (prices, contact, images).
   All visible text lives in lib/i18n/en.ts and lib/i18n/es.ts.
   ========================================================= */
import type { IconName } from "@/components/Icon";

export const SITE = {
  name: "Brothers Mobile Detailing",
  phone: "702-722-7601",
  phoneHref: "tel:+17027227601",
  phone2: "702-722-8392",
  phone2Href: "tel:+17027228392",
  email: "ramonmoises12@gmail.com",
  website: "Brothersmobile.com",
  instagram: "https://www.instagram.com/", // TODO: replace with real profile URL
  facebook: "https://www.facebook.com/", // TODO: replace with real page URL
  startingPrice: 150,
  offerAmount: 50,
  year: 2026,
};

/** Route slugs — the same for every language (Spanish adds the /es prefix) */
export const NAV = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/pricing", key: "pricing" },
  { href: "/gallery", key: "gallery" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;
export type NavKey = (typeof NAV)[number]["key"];

// Unsplash photo IDs (stock fallbacks)
export const IMG = {
  hero: "photo-1520340356584-f9917d1eea6f",
  handWash: "photo-1607860108855-64acf2078ed9",
  wheelFoam: "photo-1608506375591-b90e1f955e4b",
  interior: "photo-1610647752706-3bb12232b3ab",
  polish: "photo-1632823469850-2f77dd9c7f93",
  wheel: "photo-1613214149922-f1809c99b414",
  tire: "photo-1645445522156-9ac06bc7a767",
  glossBlack: "photo-1617814076367-b759c7d7e738",
  glossGray: "photo-1580273916550-e323be2ae537",
  glossRed: "photo-1606577924006-27d39b132ae2",
  redHeadlight: "photo-1554744512-d6c603f27c54",
  garage: "photo-1626668893632-6f3a4466d22f",
  blackSuv: "photo-1563720223185-11003d516935",
  blackAudi: "photo-1621939514649-280e2ee25f60",
} as const;
export type ImgKey = keyof typeof IMG;
export const img = (key: ImgKey, w = 1200) =>
  `https://images.unsplash.com/${IMG[key]}?auto=format&fit=crop&w=${w}&q=80`;

/** Military veteran discount (percent) — applies to services marked `veteran: true` */
export const VETERAN_DISCOUNT = 15;
export const veteranPrice = (price: number) => Math.round(price * (100 - VETERAN_DISCOUNT)) / 100;

/** Leather seat cleaning & conditioning: included in Full Detail with Shampoo, optional add-on for other services */
export const LEATHER_ADDON = 30;
export const ADDON_EXCLUDED: string[] = ["completo", "piel"];

export type ServiceId = "limpieza" | "profunda" | "pintura" | "exterior" | "interior" | "completo" | "pulido" | "llantas" | "tapiceria" | "piel" | "molduras" | "ozono";

// price: null = "Get a Quote"; regular = crossed-out original price; home = shown on the homepage
export const SERVICE_DATA: {
  id: ServiceId; price: number | null; priceMax?: number; regular?: number; veteran?: boolean; addon?: number; icon: IconName; img: ImgKey; home?: boolean;
}[] = [
  { id: "limpieza", price: 150, veteran: true, icon: "seat", img: "interior", home: true },
  { id: "profunda", price: null, icon: "drops", img: "handWash", home: true },
  { id: "pintura", price: 40, priceMax: 80, icon: "sparkle", img: "polish", home: true },
  { id: "exterior", price: null, icon: "car", img: "wheelFoam" },
  { id: "interior", price: null, icon: "seat", img: "interior" },
  { id: "completo", price: 200, regular: 280, icon: "layers", img: "glossBlack" },
  { id: "pulido", price: null, icon: "polisher", img: "glossGray" },
  { id: "llantas", price: null, icon: "wheel", img: "wheel" },
  { id: "tapiceria", price: null, icon: "drops", img: "tire" },
  { id: "piel", price: null, addon: LEATHER_ADDON, icon: "seat", img: "interior" },
  { id: "molduras", price: null, icon: "car", img: "glossBlack" },
  { id: "ozono", price: null, icon: "wind", img: "interior" },
];

// Pricing cards (text in the dictionaries under `pricing.<service>`)
export const PRICING_DATA: {
  service: "limpieza" | "completo" | "pintura"; price: number | null; priceMax?: number; regular?: number; veteran?: boolean; icon: IconName; featured: boolean;
}[] = [
  { service: "limpieza", price: 150, veteran: true, icon: "car", featured: false },
  { service: "completo", price: 200, regular: 280, icon: "layers", featured: true },
  { service: "pintura", price: 40, priceMax: 80, icon: "sparkle", featured: false },
];

export type GalleryCat = "exterior" | "interior" | "pintura" | "antes";
// ratio controls masonry tile shape; titles are in the dictionaries (same order)
export const GALLERY_DATA: { img: ImgKey; cat: GalleryCat; ratio: string }[] = [
  { img: "hero", cat: "exterior", ratio: "4/5" },
  { img: "interior", cat: "interior", ratio: "4/3" },
  { img: "polish", cat: "pintura", ratio: "1/1" },
  { img: "glossBlack", cat: "exterior", ratio: "4/3" },
  { img: "wheelFoam", cat: "exterior", ratio: "4/5" },
  { img: "glossRed", cat: "pintura", ratio: "4/3" },
  { img: "handWash", cat: "antes", ratio: "1/1" },
  { img: "glossGray", cat: "pintura", ratio: "4/3" },
  { img: "wheel", cat: "exterior", ratio: "4/5" },
  { img: "garage", cat: "antes", ratio: "4/3" },
  { img: "redHeadlight", cat: "pintura", ratio: "1/1" },
  { img: "blackSuv", cat: "exterior", ratio: "4/3" },
];

// Vehicle types (labels in the dictionaries, same order)
export const VEHICLE_ICONS: IconName[] = ["car", "suv", "truck", "suv"];

// Business hours: Monday–Saturday.
// Fall & winter (standard time, it gets dark earlier): 8 AM–4 PM. Spring & summer (daylight saving time): 8 AM–6 PM.
export const HOURS = { winter: { open: 8, close: 16 }, summer: { open: 8, close: 18 } };
export type Season = keyof typeof HOURS;

/** US daylight saving time: 2nd Sunday of March → 1st Sunday of November */
export function seasonFor(date: Date): Season {
  const y = date.getFullYear();
  const nthSunday = (month: number, n: number) => {
    const d = new Date(y, month, 1);
    d.setDate(1 + ((7 - d.getDay()) % 7) + (n - 1) * 7);
    return d;
  };
  return date >= nthSunday(2, 2) && date < nthSunday(10, 1) ? "summer" : "winter";
}

const fmtHour = (h: number) => `${h > 12 ? h - 12 : h}:00 ${h >= 12 ? "PM" : "AM"}`;
export const hoursLabel = (s: Season) => `${fmtHour(HOURS[s].open)} – ${fmtHour(HOURS[s].close)}`;

/** Bookable start times for a date ("YYYY-MM-DD"); the last slot starts 1 hour before closing */
export function timeSlots(isoDate: string) {
  if (!isoDate) return [];
  const { open, close } = HOURS[seasonFor(new Date(isoDate + "T12:00"))];
  return Array.from({ length: close - open }, (_, i) => fmtHour(open + i));
}
