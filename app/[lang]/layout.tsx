import type { Metadata, Viewport } from "next";
import { Exo_2, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import { getDict } from "@/lib/i18n";
import { LOCALES } from "@/lib/i18n/config";
import "../globals.css";

const exo = Exo_2({ subsets: ["latin"], weight: ["600", "700", "800", "900"], style: ["normal", "italic"], variable: "--font-exo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getDict();
  return {
    title: { default: t.meta.title, template: "%s | Brothers Mobile Detailing" },
    description: t.meta.description,
  };
}

export const viewport: Viewport = { themeColor: "#0a0a0b" };

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { lang, t } = await getDict();
  return (
    <html lang={lang} className={`${exo.variable} ${inter.variable}`}>
      <body>
        <Navbar lang={lang} t={t.nav} />
        <main id="main">{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
