import type { Metadata } from "next";
import { Suspense } from "react";
import BookingWizard from "@/components/BookingWizard";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Agenda tu Cita",
  description: "Reserva tu servicio de detailing a domicilio en pocos pasos.",
};

export default function ReservarPage() {
  return (
    <>
      <PageHero crumb="Reservar" eyebrow="Reservar" title="Agenda tu" highlight="Cita" image="hero"
        text="Elige tu servicio, tu vehículo y el horario. Nosotros vamos a ti." />
      <section className="booking-wrap">
        <div className="container">
          {/* useSearchParams (preselected service) requires a Suspense boundary */}
          <Suspense fallback={<div className="wizard" style={{ minHeight: 480 }} />}>
            <BookingWizard />
          </Suspense>
        </div>
      </section>
    </>
  );
}
