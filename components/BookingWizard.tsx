"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import Field from "./Field";
import Icon from "./Icon";
import { SERVICE_DATA, SITE, TIMES, VEHICLE_ICONS, VETERAN_DISCOUNT, veteranPrice } from "@/lib/site";
import type { Dict } from "@/lib/i18n/en";
import { href, type Locale } from "@/lib/i18n/config";
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

export default function BookingWizard({ t, lang }: { t: Dict; lang: Locale }) {
  const b = t.booking;
  const params = useSearchParams();
  const preset = params.get("servicio");
  const offer = params.get("oferta");
  const minDate = useToday();
  const [step, setStep] = useState(1);
  const [stepError, setStepError] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof Data, Rule | "">>>({});
  const [d, setD] = useState<Data>({
    service: SERVICE_DATA.some((s) => s.id === preset) ? preset! : "", vehicle: "", date: "", time: "",
    name: "", phone: "", email: "", area: "", address: "", notes: "",
  });
  const top = useRef<HTMLFormElement>(null);
  const errText = (k: keyof Data) => (errors[k] ? t.form.errors[errors[k] as Rule] : undefined);

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

  const svc = SERVICE_DATA.find((s) => s.id === d.service);
  const s = b.summary;
  const summary: [string, string][] = [
    [s.service, svc ? t.services[svc.id].name : ""],
    [s.price, svc?.price != null ? `${svc.regular ? `$${svc.regular} → ` : `${t.common.from} `}$${svc.price}` : b.byQuote],
    ...(svc?.veteran && svc.price != null ? [[s.veteran, `${VETERAN_DISCOUNT}% ${t.common.discount}: $${veteranPrice(svc.price).toFixed(2)}`] as [string, string]] : []),
    [s.vehicle, d.vehicle],
    [s.date, d.date ? new Date(d.date + "T12:00").toLocaleDateString(t.dateLocale, { weekday: "long", day: "numeric", month: "long", year: "numeric" }) : ""],
    [s.time, d.time],
    [s.name, d.name],
    [s.phone, d.phone],
    [s.email, d.email],
    [s.address, `${d.address}, ${d.area}`],
    ...(d.notes ? [[s.notes, d.notes] as [string, string]] : []),
    ...(offer ? [[s.promo, `${b.promoValue} $${SITE.offerAmount}`] as [string, string]] : []),
  ];

  const text = (k: DetailKey, label: string, props: Record<string, string> = {}, full = false) => (
    <Field id={`b-${k}`} label={label} required error={errText(k)} full={full}>
      <input id={`b-${k}`} className="input" value={d[k]} onChange={(e) => set(k, e.target.value)}
        onBlur={() => setErrors((er) => ({ ...er, [k]: validate(d[k], DETAILS[k]) }))} {...props} />
    </Field>
  );
  const renderStepError = (msg: string) =>
    stepError ? <p className="w-error is-show" role="alert"><Icon name="alert" /> {msg}</p> : null;

  return (
    <form className="wizard" ref={top} noValidate onSubmit={(e) => { e.preventDefault(); next(); }}>
      <ol className="progress" aria-label={b.progress}>
        {b.steps.map((label, i) => (
          <li key={label} className={i + 1 < step ? "is-done" : i + 1 === step ? "is-current" : ""}>
            <span>{i + 1 < step ? <Icon name="check" /> : i + 1}</span>{label}
          </li>
        ))}
      </ol>

      {step === 1 && (
        <div className="w-step is-active">
          <h2>{b.s1.title}</h2>
          <p>{b.s1.text}</p>
          <div className="options">
            {SERVICE_DATA.map((sv) => (
              <div className="option" key={sv.id}>
                <input type="radio" name="service" id={`s-${sv.id}`} checked={d.service === sv.id} onChange={() => set("service", sv.id)} />
                <label htmlFor={`s-${sv.id}`}><Icon name={sv.icon} /><strong>{t.services[sv.id].name}</strong>
                  <small>{sv.price != null ? `${sv.regular ? `$${sv.regular} → ` : `${t.common.from} `}$${sv.price}` : t.common.quote}</small></label>
              </div>
            ))}
          </div>
          {renderStepError(b.s1.err)}
        </div>
      )}

      {step === 2 && (
        <div className="w-step is-active">
          <h2>{b.s2.title}</h2>
          <p>{b.s2.text}</p>
          <div className="options">
            {t.vehicles.map((v, i) => (
              <div className="option" key={v.name}>
                <input type="radio" name="vehicle" id={`v${i}`} checked={d.vehicle === v.name} onChange={() => set("vehicle", v.name)} />
                <label htmlFor={`v${i}`}><Icon name={VEHICLE_ICONS[i]} /><strong>{v.name}</strong><small>{v.note}</small></label>
              </div>
            ))}
          </div>
          {renderStepError(b.s2.err)}
        </div>
      )}

      {step === 3 && (
        <div className="w-step is-active">
          <h2>{b.s3.title}</h2>
          <p>{b.s3.text}</p>
          <div style={{ maxWidth: 320, margin: "20px 0" }}>
            <Field id="b-date" label={b.s3.date} required error={errText("date")}>
              <input id="b-date" type="date" className="input" min={minDate} value={d.date} onChange={(e) => set("date", e.target.value)} />
            </Field>
          </div>
          <span style={{ fontWeight: 600, fontSize: ".92rem" }}>{b.s3.time} <span className="text-red">*</span></span>
          <div className="times options" style={{ marginTop: 8 }}>
            {TIMES.map((tm, i) => (
              <div className="option" key={tm}>
                <input type="radio" name="time" id={`t${i}`} checked={d.time === tm} onChange={() => set("time", tm)} />
                <label htmlFor={`t${i}`}>{tm}</label>
              </div>
            ))}
          </div>
          {renderStepError(b.s3.err)}
        </div>
      )}

      {step === 4 && (
        <div className="w-step is-active">
          <h2>{b.s4.title}</h2>
          <p>{b.s4.text}</p>
          <div className="form-grid" style={{ marginTop: 20 }}>
            {text("name", t.form.name, { autoComplete: "name" })}
            {text("phone", t.form.phone, { type: "tel", autoComplete: "tel" })}
            {text("email", t.form.email, { type: "email", autoComplete: "email" })}
            {text("area", t.form.area, { placeholder: t.form.areaPh })}
            {text("address", b.s4.address, { autoComplete: "street-address" }, true)}
            <Field id="b-notes" label={b.s4.notes} full>
              <textarea id="b-notes" className="input" value={d.notes} onChange={(e) => set("notes", e.target.value)} placeholder={b.s4.notesPh} />
            </Field>
          </div>
          <p className="self-note"><Icon name="droplet" /> {b.selfNote}</p>
        </div>
      )}

      {step === 5 && (
        <div className="w-step is-active">
          <h2>{b.s5.title}</h2>
          <p>{b.s5.text}</p>
          <dl className="summary">{summary.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <p className="self-note"><Icon name="droplet" /> {b.selfNote}</p>
          <p className="note" style={{ justifyContent: "flex-start", textAlign: "left", marginTop: 12 }}><Icon name="info" /> {t.common.priceNote}</p>
        </div>
      )}

      {step === 6 && (
        <div className="w-step is-active">
          <div className="success">
            <div className="success__icon"><Icon name="check" /></div>
            <h2>{b.done.title}</h2>
            <p style={{ color: "var(--gray-500)", maxWidth: 480, margin: "0 auto 26px" }}>
              {b.done.text}{" "}
              <a href={SITE.phoneHref} className="text-red" style={{ fontWeight: 700 }}>{SITE.phone}</a> {b.done.or}{" "}
              <a href={SITE.phone2Href} className="text-red" style={{ fontWeight: 700 }}>{SITE.phone2}</a>.
            </p>
            <Link href={href(lang, "/")} className="btn btn--dark">{b.done.back}</Link>
          </div>
        </div>
      )}

      {step <= 5 && (
        <div className="w-nav">
          <button type="button" className="btn btn--outline-dark" style={{ visibility: step > 1 ? "visible" : "hidden" }} onClick={() => go(step - 1)}>
            <Icon name="arrowLeft" /> {b.nav.back}
          </button>
          <button type="submit" className={`btn btn--primary ${sending ? "is-loading" : ""}`}>
            {step === 5 ? <><Icon name="checkCircle" /> {b.nav.confirm}</> : <>{b.nav.next} <Icon name="arrow" className="icon-arrow" /></>}
          </button>
        </div>
      )}
    </form>
  );
}
