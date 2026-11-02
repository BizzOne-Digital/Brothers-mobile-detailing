"use client";
import { useState, type FormEvent } from "react";
import Field from "./Field";
import Icon from "./Icon";
import { SERVICES, VEHICLES } from "@/lib/site";
import { validate, validateAll, type Rule } from "@/lib/validation";
import { useToday } from "@/lib/useToday";

type Key = "name" | "phone" | "email" | "area" | "date" | "vehicle" | "service" | "message";
const SCHEMA: Partial<Record<Key, Rule[]>> = {
  name: ["required", "name"], phone: ["required", "phone"], email: ["required", "email"],
  area: ["required"], date: ["future"], vehicle: ["required"], service: ["required"],
};
const EMPTY: Record<Key, string> = { name: "", phone: "", email: "", area: "", date: "", vehicle: "", service: "", message: "" };

export default function ContactForm() {
  const minDate = useToday();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Key, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<Key, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "error" | "sending" | "sent">("idle");

  const set = (k: Key, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: validate(v, SCHEMA[k] ?? []) }));
  };
  const blur = (k: Key) => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors((e) => ({ ...e, [k]: validate(values[k], SCHEMA[k] ?? []) }));
  };
  const bind = (k: Key) => ({
    id: `c-${k}`, name: k, className: "input", value: values[k],
    onChange: (e: { target: { value: string } }) => set(k, e.target.value), onBlur: () => blur(k),
  });
  const f = (k: Key) => ({ error: errors[k], valid: touched[k] && !errors[k] && values[k] !== "" });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validateAll(values, SCHEMA);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus("error");
      document.getElementById(`c-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    // TODO: connect to the CRM / email service (API route, webhook or form endpoint)
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("sent");
    setValues(EMPTY);
    setTouched({});
  };

  return (
    <form className="form-card reveal reveal-d1" onSubmit={submit} noValidate>
      <h2 className="heading-md">Envíanos un mensaje</h2>
      <p style={{ color: "var(--gray-500)" }}>Los campos con <span className="text-red">*</span> son obligatorios.</p>

      {status === "sent" && (
        <div className="alert alert--ok is-show" role="status"><Icon name="checkCircle" /><div><strong>¡Mensaje enviado!</strong><br />Gracias por contactarnos. Te responderemos pronto.</div></div>
      )}
      {status === "error" && (
        <div className="alert alert--err is-show" role="alert"><Icon name="alert" /><div><strong>Revisa el formulario.</strong><br />Algunos campos necesitan corrección.</div></div>
      )}

      <div className="form-grid">
        <Field id="c-name" label="Nombre" required {...f("name")}><input {...bind("name")} autoComplete="name" /></Field>
        <Field id="c-phone" label="Teléfono" required {...f("phone")}><input {...bind("phone")} type="tel" autoComplete="tel" /></Field>
        <Field id="c-email" label="Email" required {...f("email")}><input {...bind("email")} type="email" autoComplete="email" /></Field>
        <Field id="c-area" label="Zona de servicio" required {...f("area")}><input {...bind("area")} placeholder="Ciudad o código postal" /></Field>
        <Field id="c-date" label="Fecha preferida" {...f("date")}><input {...bind("date")} type="date" min={minDate} /></Field>
        <Field id="c-vehicle" label="Tipo de vehículo" required {...f("vehicle")}>
          <select {...bind("vehicle")}>
            <option value="">Selecciona…</option>
            {VEHICLES.map((v) => <option key={v.value}>{v.value}</option>)}
          </select>
        </Field>
        <Field id="c-service" label="Servicio" required full {...f("service")}>
          <select {...bind("service")}>
            <option value="">Selecciona…</option>
            {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
            <option value="otro">Otro / No estoy seguro</option>
          </select>
        </Field>
        <Field id="c-message" label="Mensaje" full>
          <textarea {...bind("message")} placeholder="Cuéntanos sobre tu vehículo y lo que necesitas" />
        </Field>
      </div>
      <button type="submit" className={`btn btn--primary btn--block ${status === "sending" ? "is-loading" : ""}`} style={{ marginTop: 24 }}>
        {status !== "sending" && <Icon name="send" />} {status === "sending" ? "Enviando…" : "Enviar Mensaje"}
      </button>
    </form>
  );
}
