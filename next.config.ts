import type { NextConfig } from "next";

// Old Spanish URLs (before the English/Spanish split) → new Spanish pages
const OLD_SLUGS: [string, string][] = [
  ["servicios", "services"], ["precios", "pricing"], ["galeria", "gallery"],
  ["nosotros", "about"], ["contacto", "contact"], ["reservar", "book"],
];

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
  },
  async redirects() {
    return OLD_SLUGS.map(([from, to]) => ({ source: `/${from}`, destination: `/es/${to}`, permanent: true }));
  },
};

export default nextConfig;
