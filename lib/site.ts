/* =========================================================
   SITE CONTENT — edit this file to update the whole website.
   ========================================================= */
import type { IconName } from "@/components/Icon";

export const SITE = {
  name: "Brothers Mobile Detailing",
  phone: "702-722-7601",
  phoneHref: "tel:+17027227601",
  email: "ramonmoises12@gmail.com",
  website: "Brothersmobile.com",
  instagram: "https://www.instagram.com/", // TODO: replace with real profile URL
  facebook: "https://www.facebook.com/", // TODO: replace with real page URL
  startingPrice: 79,
  offerAmount: 50,
  year: 2026,
};

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/precios", label: "Precios" },
  { href: "/galeria", label: "Galería" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

// Unsplash photo IDs
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

export type Service = {
  id: string; name: string; short: string; price: number | null;
  icon: IconName; img: ImgKey; home?: boolean; features: string[];
};

// `home: true` shows the card on the homepage. price: null = "Cotizar"
export const SERVICES: Service[] = [
  { id: "limpieza", name: "Limpieza de Carros", short: "Interior y exterior impecable.", price: 79, icon: "seat", img: "interior", home: true,
    features: ["Lavado exterior a mano", "Aspirado completo", "Limpieza de tablero y paneles", "Vidrios sin manchas"] },
  { id: "profunda", name: "Limpieza Profunda", short: "Elimina suciedad, manchas y olores.", price: 79, icon: "drops", img: "handWash", home: true,
    features: ["Shampoo de alfombras y asientos", "Eliminación de manchas", "Tratamiento de olores", "Detalle de rincones y rejillas"] },
  { id: "pintura", name: "Restauración de Pintura", short: "Recupera el brillo y la apariencia original.", price: 79, icon: "sparkle", img: "polish", home: true,
    features: ["Descontaminación de pintura", "Corrección de rayones leves", "Pulido a máquina", "Sellado y protección"] },
  { id: "exterior", name: "Lavado Exterior", short: "Lavado a mano con espuma y secado sin rayas.", price: null, icon: "car", img: "wheelFoam",
    features: ["Prelavado con espuma", "Lavado a mano, método de dos cubetas", "Secado con microfibra", "Llantas y rines"] },
  { id: "interior", name: "Detallado Interior", short: "Cabina limpia, fresca y protegida.", price: null, icon: "seat", img: "interior",
    features: ["Aspirado profundo", "Limpieza de plásticos y vinil", "Acondicionador de piel", "Vidrios interiores"] },
  { id: "completo", name: "Detailing Completo", short: "Interior y exterior al máximo nivel.", price: 79, icon: "layers", img: "glossBlack",
    features: ["Todo el lavado exterior", "Todo el detallado interior", "Protección de pintura", "Acabado de llantas"] },
  { id: "pulido", name: "Pulido de Pintura", short: "Brillo profundo tipo espejo.", price: null, icon: "polisher", img: "glossGray",
    features: ["Pulido de una o varias etapas", "Elimina opacidad y marcas", "Realza el color", "Acabado con protección"] },
  { id: "llantas", name: "Llantas y Rines", short: "Rines brillantes y llantas renovadas.", price: null, icon: "wheel", img: "wheel",
    features: ["Descontaminación de rines", "Limpieza de pasos de rueda", "Abrillantador de llantas", "Detalle de birlos"] },
  { id: "tapiceria", name: "Limpieza de Tapicería", short: "Asientos y alfombras como nuevos.", price: null, icon: "drops", img: "tire",
    features: ["Shampoo y extracción", "Tela, piel o vinil", "Eliminación de manchas", "Secado rápido"] },
];

export const PRICING = [
  { name: "Limpieza Básica", desc: "Ideal para el mantenimiento regular de tu vehículo.", price: 79, icon: "car" as IconName, service: "limpieza", featured: false,
    features: ["Lavado exterior a mano", "Aspirado interior", "Limpieza de vidrios", "Llantas y rines"] },
  { name: "Detailing Completo", desc: "Limpieza profunda interior y exterior.", price: 79, icon: "layers" as IconName, service: "completo", featured: true,
    features: ["Todo lo de Limpieza Básica", "Shampoo de asientos y alfombras", "Tratamiento de olores", "Protección de pintura"] },
  { name: "Restauración de Pintura", desc: "Recupera el brillo original de tu pintura.", price: null, icon: "sparkle" as IconName, service: "pintura", featured: false,
    features: ["Evaluación de la pintura", "Descontaminación", "Pulido a máquina", "Sellado protector"] },
];

export type GalleryCat = "exterior" | "interior" | "pintura" | "antes";
export const GALLERY_LABELS: Record<GalleryCat, string> = {
  exterior: "Exterior", interior: "Interior", pintura: "Restauración de Pintura", antes: "Antes y Después",
};
// ratio controls masonry tile shape
export const GALLERY: { img: ImgKey; cat: GalleryCat; title: string; ratio: string }[] = [
  { img: "hero", cat: "exterior", title: "Lavado con espuma", ratio: "4/5" },
  { img: "interior", cat: "interior", title: "Interior impecable", ratio: "4/3" },
  { img: "polish", cat: "pintura", title: "Cuidado de faros y pintura", ratio: "1/1" },
  { img: "glossBlack", cat: "exterior", title: "Acabado brillante", ratio: "4/3" },
  { img: "wheelFoam", cat: "exterior", title: "Rines y llantas", ratio: "4/5" },
  { img: "glossRed", cat: "pintura", title: "Brillo profundo", ratio: "4/3" },
  { img: "handWash", cat: "antes", title: "Proceso de lavado a mano", ratio: "1/1" },
  { img: "glossGray", cat: "pintura", title: "Pintura restaurada", ratio: "4/3" },
  { img: "wheel", cat: "exterior", title: "Detalle de rines", ratio: "4/5" },
  { img: "garage", cat: "antes", title: "Resultado final", ratio: "4/3" },
  { img: "redHeadlight", cat: "pintura", title: "Corrección de pintura", ratio: "1/1" },
  { img: "blackSuv", cat: "exterior", title: "SUV detallada", ratio: "4/3" },
];

// Placeholder testimonials — replace with real customer reviews
export const TESTIMONIALS = [
  { name: "Cliente 1", service: "Detailing Completo", text: "Excelente servicio. Llegaron a mi casa a tiempo y dejaron mi carro como nuevo por dentro y por fuera." },
  { name: "Cliente 2", service: "Limpieza Profunda", text: "Quitaron manchas de los asientos que pensé que eran permanentes. Muy profesionales y cuidadosos." },
  { name: "Cliente 3", service: "Restauración de Pintura", text: "La pintura recuperó su brillo. Se nota la atención al detalle. Los recomiendo totalmente." },
];

export const VEHICLES = [
  { value: "Sedán / Coupé", note: "Autos compactos y medianos", icon: "car" as IconName },
  { value: "SUV", note: "Crossovers y SUVs", icon: "suv" as IconName },
  { value: "Camioneta / Pickup", note: "Trucks de cabina doble", icon: "truck" as IconName },
  { value: "Van / Minivan", note: "Vehículos de 3 filas", icon: "suv" as IconName },
];

// Booking time slots — edit to match real availability
export const TIMES = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
