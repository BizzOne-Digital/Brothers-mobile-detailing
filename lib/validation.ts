/* Shared form validation rules (contact form + booking wizard) */
export type Rule = "required" | "name" | "email" | "phone" | "future";

const RULES: Record<Rule, (v: string) => true | string> = {
  required: (v) => v.trim() !== "" || "Este campo es obligatorio.",
  name: (v) => v.trim().length >= 2 || "Ingresa tu nombre completo.",
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Ingresa un correo válido.",
  phone: (v) => v.replace(/\D/g, "").length >= 10 || "Ingresa un teléfono válido (10 dígitos).",
  future: (v) => !v || new Date(v + "T23:59") >= new Date() || "Elige una fecha a partir de hoy.",
};

/** Returns an error message, or "" when valid. Optional fields skip checks when empty. */
export function validate(value: string, rules: Rule[]): string {
  if (!value && !rules.includes("required")) return "";
  for (const r of rules) {
    const res = RULES[r](value);
    if (res !== true) return res;
  }
  return "";
}

export function validateAll<T extends string>(values: Record<T, string>, schema: Partial<Record<T, Rule[]>>) {
  const errors: Partial<Record<T, string>> = {};
  (Object.keys(schema) as T[]).forEach((k) => {
    const msg = validate(values[k] ?? "", schema[k]!);
    if (msg) errors[k] = msg;
  });
  return errors;
}

export const today = () => new Date().toISOString().split("T")[0];
