"use client";
import { useState, type FormEvent } from "react";
import Field from "./Field";
import Icon from "./Icon";
import type { Dict } from "@/lib/i18n/en";
import { SERVICE_DATA } from "@/lib/site";
import { validate, validateAll, type Rule } from "@/lib/validation";
import { useToday } from "@/lib/useToday";

type Key = "name" | "phone" | "email" | "area" | "date" | "vehicle" | "service" | "message";
const SCHEMA: Partial<Record<Key, Rule[]>> = {
  name: ["required", "name"], phone: ["required", "phone"], email: ["required", "email"],
  area: ["required"], date: ["future"], vehicle: ["required"], service: ["required"],
};
const EMPTY: Record<Key, string> = { name: "", phone: "", email: "", area: "", date: "", vehicle: "", service: "", message: "" };

export default function ContactForm({ t }: { t: Dict }) {
  const f = t.form;
  const minDate = useToday();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Key, Rule | "">>>({});
  const [touched, setTouched] = useState<Partial<Record<Key, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "error" | "sending" | "sent">("idle");

  const set = (k: Key, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: validate(v, SCHEMA[k] ?? []) }));
  };
  const blur = (k: Key) => {
    setTouched((tt) => ({ ...tt, [k]: true }));
    setErrors((e) => ({ ...e, [k]: validate(values[k], SCHEMA[k] ?? []) }));
  };
  const bind = (k: Key) => ({
    id: `c-${k}`, name: k, className: "input", value: values[k],
    onChange: (e: { target: { value: string } }) => set(k, e.target.value), onBlur: () => blur(k),
  });
  const state = (k: Key) => {
    const err = errors[k];
    return { error: err ? f.errors[err] : undefined, valid: touched[k] && !err && values[k] !== "" };
  };

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
      <h2 className="heading-md">{f.title}</h2>
      <p style={{ color: "var(--gray-500)" }}>{f.requiredNote} <span className="text-red">*</span> {f.requiredNote2}</p>

      {status === "sent" && (
        <div className="alert alert--ok is-show" role="status"><Icon name="checkCircle" /><div><strong>{f.okTitle}</strong><br />{f.okText}</div></div>
      )}
      {status === "error" && (
        <div className="alert alert--err is-show" role="alert"><Icon name="alert" /><div><strong>{f.errTitle}</strong><br />{f.errText}</div></div>
      )}

      <div className="form-grid">
        <Field id="c-name" label={f.name} required {...state("name")}><input {...bind("name")} autoComplete="name" /></Field>
        <Field id="c-phone" label={f.phone} required {...state("phone")}><input {...bind("phone")} type="tel" autoComplete="tel" /></Field>
        <Field id="c-email" label={f.email} required {...state("email")}><input {...bind("email")} type="email" autoComplete="email" /></Field>
        <Field id="c-area" label={f.area} required {...state("area")}><input {...bind("area")} placeholder={f.areaPh} /></Field>
        <Field id="c-date" label={f.date} {...state("date")}><input {...bind("date")} type="date" min={minDate} /></Field>
        <Field id="c-vehicle" label={f.vehicle} required {...state("vehicle")}>
          <select {...bind("vehicle")}>
            <option value="">{f.select}</option>
            {t.vehicles.map((v) => <option key={v.name}>{v.name}</option>)}
          </select>
        </Field>
        <Field id="c-service" label={f.service} required full {...state("service")}>
          <select {...bind("service")}>
            <option value="">{f.select}</option>
            {SERVICE_DATA.map((s) => <option key={s.id} value={s.id}>{t.services[s.id].name}</option>)}
            <option value="otro">{f.other}</option>
          </select>
        </Field>
        <Field id="c-message" label={f.message} full>
          <textarea {...bind("message")} placeholder={f.messagePh} />
        </Field>
      </div>
      <button type="submit" className={`btn btn--primary btn--block ${status === "sending" ? "is-loading" : ""}`} style={{ marginTop: 24 }}>
        {status !== "sending" && <Icon name="send" />} {status === "sending" ? f.sending : f.send}
      </button>
    </form>
  );
}
