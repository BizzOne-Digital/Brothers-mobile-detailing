/* Shared form validation rules (contact form + booking wizard).
   Rules return the failing rule name; the form shows the translated
   message from dict.form.errors[rule]. */
export type Rule = "required" | "name" | "email" | "phone" | "future";

const RULES: Record<Rule, (v: string) => boolean> = {
  required: (v) => v.trim() !== "",
  name: (v) => v.trim().length >= 2,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  phone: (v) => v.replace(/\D/g, "").length >= 10,
  future: (v) => !v || new Date(v + "T23:59") >= new Date(),
};

/** Returns the first failing rule, or "" when valid. Optional fields skip checks when empty. */
export function validate(value: string, rules: Rule[]): Rule | "" {
  if (!value && !rules.includes("required")) return "";
  for (const r of rules) if (!RULES[r](value)) return r;
  return "";
}

export function validateAll<T extends string>(values: Record<T, string>, schema: Partial<Record<T, Rule[]>>) {
  const errors: Partial<Record<T, Rule>> = {};
  (Object.keys(schema) as T[]).forEach((k) => {
    const err = validate(values[k] ?? "", schema[k]!);
    if (err) errors[k] = err;
  });
  return errors;
}

export const today = () => new Date().toISOString().split("T")[0];
