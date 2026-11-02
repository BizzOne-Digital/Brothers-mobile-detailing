"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import Field from "./Field";
import Icon from "./Icon";
import { SERVICES, SITE, TIMES, VEHICLES, VETERAN_DISCOUNT, veteranPrice } from "@/lib/site";
import { validate, validateAll, type Rule } from "@/lib/validation";
import { useToday } from "@/lib/useToday";

type Data = {
  service: string; vehicle: string; date: string; time: string;
  name: string; phone: string; email: string; area: string; address: string; notes: string;
};
type DetailKey = "name" | "phone" | "email" | "area" | "address";
const DETAILS: Record<DetailKey, Rule[]> = {
  name: ["required", "name"], phone: ["required", "phone"], email: ["required", "email"], area: ["required"], address: ["required"],
};
const STEPS = ["Servicio", "Vehículo", "Fecha", "Tus datos", "Confirmar"];

export default function BookingWizard() {
  const params = useSearchParams();
  const preset = params.get("servicio");
  const offer = params.get("oferta");
  const minDate = useToday();
  const [step, setStep] = useState(1);
  const [stepError, setStepError] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({});
  const [d, setD] = useState<Data>({
    service: SERVICES.some((s) => s.id === preset) ? preset! : "", vehicle: "", date: "", time: "",
    name: "", phone: "", email: "", area: "", address: "", notes: "",
  });
  const top = useRef<HTMLFormElement>(null);

  const set = (k: keyof Data, v: string) => {
    setD((s) => ({ ...s, [k]: v }));
    setStepError(false);
    if (errors[k]) setErrors((e) => ({ ...e, [k]: k in DETAILS ? validate(v, DETAILS[k as DetailKey]) : "" }));
  };

  const valid = (): boolean => {
    if (step === 1) return !!d.service;
    if (step === 2) return !!d.vehicle;
    if (step === 3) {
      const dateErr = validate(d.date, ["required", "future"]);
      setErrors((e) => ({ ...e, date: dateErr }));
      return !dateErr && !!d.time;
    }
    if (step === 4) {
      const errs = validateAll<DetailKey>(d, DETAILS);
      setErrors(errs);
      return Object.keys(errs).length === 0;
    }
    return true;
  };

  const go = (n: number) => { setStep(n); top.current?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  const next = async () => {
    if (!valid()) { setStepError(true); return; }
    setStepError(false);
    if (step === 5) {
      setSending(true);
      // TODO: send booking to CRM / calendar / email (API route or webhook)
      await new Promise((r) => setTimeout(r, 1100));
      setSending(false);
    }
    go(step + 1);
  };

  const svc = SERVICES.find((s) => s.id === d.service);
  const summary: [string, string][] = [
    ["Servicio", svc?.name ?? ""],
    ["Precio", svc?.price != null ? `${svc.regular ? `$${svc.regular} → ` : "Desde "}$${svc.price}` : "Por cotizar"],
    ...(svc?.veteran && svc.price != null ? [["Veteranos militares", `${VETERAN_DISCOUNT}% de descuento: $${veteranPrice(svc.price).toFixed(2)}`] as [string, string]] : []),
    ["Vehículo", d.vehicle],
    ["Fecha", d.date ? new Date(d.date + "T12:00").toLocaleDateString("es-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) : ""],
    ["Hora", d.time],
    ["Nombre", d.name],
    ["Teléfono", d.phone],
    ["Email", d.email],
    ["Dirección", `${d.address}, ${d.area}`],
    ...(d.notes ? [["Notas", d.notes] as [string, string]] : []),
    ...(offer ? [["Promoción", `Oferta Especial $${SITE.offerAmount}`] as [string, string]] : []),
  ];

  const text = (k: DetailKey, label: string, props: Record<string, string> = {}, full = false) => (
    <Field id={`b-${k}`} label={label} required error={errors[k]} full={full}>
      <input id={`b-${k}`} className="input" value={d[k]} onChange={(e) => set(k, e.target.value)}
        onBlur={() => setErrors((er) => ({ ...er, [k]: validate(d[k], DETAILS[k]) }))} {...props} />
    </Field>
  );
  const renderStepError = (msg: string) =>
    stepError ? <p className="w-error is-show" role="alert"><Icon name="alert" /> {msg}</p> : null;

  return (
    <form className="wizard" ref={top} noValidate onSubmit={(e) => { e.preventDefault(); next(); }}>
      <ol className="progress" aria-label="Progreso de la reserva">
        {STEPS.map((label, i) => (
          <li key={label} className={i + 1 < step ? "is-done" : i + 1 === step ? "is-current" : ""}>
            <span>{i + 1 < step ? <Icon name="check" /> : i + 1}</span>{label}
          </li>
        ))}
      </ol>

      {step === 1 && (
        <div className="w-step is-active">
          <h2>¿Qué servicio necesitas?</h2>
          <p>Puedes agregar detalles adicionales más adelante.</p>
          <div className="options">
            {SERVICES.map((s) => (
              <div className="option" key={s.id}>
                <input type="radio" name="service" id={`s-${s.id}`} checked={d.service === s.id} onChange={() => set("service", s.id)} />
                <label htmlFor={`s-${s.id}`}><Icon name={s.icon} /><strong>{s.name}</strong><small>{s.price != null ? `Desde $${s.price}` : "Cotización"}</small></label>
              </div>
            ))}
          </div>
          {renderStepError("Selecciona un servicio para continuar.")}
        </div>
      )}

      {step === 2 && (
        <div className="w-step is-active">
          <h2>Tipo de vehículo</h2>
          <p>El precio final puede variar según el tamaño y la condición.</p>
          <div className="options">
            {VEHICLES.map((v, i) => (
              <div className="option" key={v.value}>
                <input type="radio" name="vehicle" id={`v${i}`} checked={d.vehicle === v.value} onChange={() => set("vehicle", v.value)} />
                <label htmlFor={`v${i}`}><Icon name={v.icon} /><strong>{v.value}</strong><small>{v.note}</small></label>
              </div>
            ))}
          </div>
          {renderStepError("Selecciona el tipo de vehículo.")}
        </div>
      )}

      {step === 3 && (
        <div className="w-step is-active">
          <h2>Fecha y hora</h2>
          <p>Elige el día y el horario que prefieras. Te confirmaremos la disponibilidad.</p>
          <div style={{ maxWidth: 320, margin: "20px 0" }}>
            <Field id="b-date" label="Fecha" required error={errors.date}>
              <input id="b-date" type="date" className="input" min={minDate} value={d.date} onChange={(e) => set("date", e.target.value)} />
            </Field>
          </div>
          <span style={{ fontWeight: 600, fontSize: ".92rem" }}>Horario <span className="text-red">*</span></span>
          <div className="times options" style={{ marginTop: 8 }}>
            {TIMES.map((t, i) => (
              <div className="option" key={t}>
                <input type="radio" name="time" id={`t${i}`} checked={d.time === t} onChange={() => set("time", t)} />
                <label htmlFor={`t${i}`}>{t}</label>
              </div>
            ))}
          </div>
          {renderStepError("Selecciona una fecha válida y un horario.")}
        </div>
      )}

      {step === 4 && (
        <div className="w-step is-active">
          <h2>Tus datos</h2>
          <p>Los usamos solo para confirmar tu cita.</p>
          <div className="form-grid" style={{ marginTop: 20 }}>
            {text("name", "Nombre", { autoComplete: "name" })}
            {text("phone", "Teléfono", { type: "tel", autoComplete: "tel" })}
            {text("email", "Email", { type: "email", autoComplete: "email" })}
            {text("area", "Zona de servicio", { placeholder: "Ciudad o código postal" })}
            {text("address", "Dirección del servicio", { autoComplete: "street-address" }, true)}
            <Field id="b-notes" label="Notas (opcional)" full>
              <textarea id="b-notes" className="input" value={d.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Condición del vehículo, acceso, mascotas, etc." />
            </Field>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="w-step is-active">
          <h2>Confirma tu reserva</h2>
          <p>Revisa los datos antes de enviar.</p>
          <dl className="summary">{summary.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <p className="note" style={{ justifyContent: "flex-start", textAlign: "left", marginTop: 0 }}><Icon name="info" /> Los precios pueden variar dependiendo del tamaño y condición del vehículo.</p>
        </div>
      )}

      {step === 6 && (
        <div className="w-step is-active">
          <div className="success">
            <div className="success__icon"><Icon name="check" /></div>
            <h2>¡Solicitud recibida!</h2>
            <p style={{ color: "var(--gray-500)", maxWidth: 480, margin: "0 auto 26px" }}>
              Gracias por elegir {SITE.name}. Te contactaremos pronto para confirmar tu cita. Si es urgente, llámanos al{" "}
              <a href={SITE.phoneHref} className="text-red" style={{ fontWeight: 700 }}>{SITE.phone}</a> o al{" "}
              <a href={SITE.phone2Href} className="text-red" style={{ fontWeight: 700 }}>{SITE.phone2}</a>.
            </p>
            <Link href="/" className="btn btn--dark">Volver al Inicio</Link>
          </div>
        </div>
      )}

      {step <= 5 && (
        <div className="w-nav">
          <button type="button" className="btn btn--outline-dark" style={{ visibility: step > 1 ? "visible" : "hidden" }} onClick={() => go(step - 1)}>
            <Icon name="arrowLeft" /> Atrás
          </button>
          <button type="submit" className={`btn btn--primary ${sending ? "is-loading" : ""}`}>
            {step === 5 ? <><Icon name="checkCircle" /> Confirmar Reserva</> : <>Continuar <Icon name="arrow" className="icon-arrow" /></>}
          </button>
        </div>
      )}
    </form>
  );
}
