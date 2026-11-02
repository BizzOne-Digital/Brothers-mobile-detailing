import type { Metadata, Viewport } from "next";
import { Exo_2, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import "./globals.css";

const exo = Exo_2({ subsets: ["latin"], weight: ["600", "700", "800", "900"], style: ["normal", "italic"], variable: "--font-exo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Brothers Mobile Detailing | Limpieza Profesional de Autos a Domicilio",
    template: "%s | Brothers Mobile Detailing",
  },
  description: "Detailing profesional a domicilio. Limpieza de carros, limpieza profunda y restauración de pintura desde $150. Llama al 702-722-7601.",
};

export const viewport: Viewport = { themeColor: "#0a0a0b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${exo.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
