"use client";
import type { ReactNode } from "react";
import Icon from "./Icon";

/** Form field wrapper with label, required marker and validation states */
export default function Field({ id, label, required, error, valid, full, children }: {
  id: string; label: string; required?: boolean; error?: string; valid?: boolean; full?: boolean; children: ReactNode;
}) {
  return (
    <div className={`field ${full ? "field--full" : ""} ${error ? "is-invalid" : valid ? "is-valid" : ""}`}>
      <label htmlFor={id}>{label} {required && <span className="req">*</span>}</label>
      {children}
      {error && <span className="field__error" role="alert" style={{ display: "flex" }}><Icon name="alert" />{error}</span>}
    </div>
  );
}
