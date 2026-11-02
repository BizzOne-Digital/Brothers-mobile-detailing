"use client";
import Image from "@/components/Photo";
import { useRef, useState } from "react";
import Icon from "./Icon";
import { img, type ImgKey } from "@/lib/site";

/**
 * Draggable before/after comparison.
 * Pass a real `before` photo when available; until then the "after" image
 * is shown with a dull/grimy filter on the before side.
 */
export default function BeforeAfter({ after, before }: { after: ImgKey; before?: ImgKey }) {
  const [pct, setPct] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const fromX = (clientX: number) => {
    const r = ref.current!.getBoundingClientRect();
    setPct(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="ba reveal"
      onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); fromX(e.clientX); }}
      onPointerMove={(e) => dragging.current && fromX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Image src={img(after, 1600)} alt="Después: vehículo limpio y brillante" fill sizes="(max-width: 1240px) 100vw, 1200px" />
      <div className={`ba__before ${before ? "is-real" : ""}`} style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        <Image src={img(before ?? after, 1600)} alt="Antes: vehículo sucio y opaco" fill sizes="(max-width: 1240px) 100vw, 1200px" />
      </div>
      <span className="ba__label ba__label--before">Antes</span>
      <span className="ba__label ba__label--after">Después</span>
      <div className="ba__handle" style={{ left: `${pct}%` }}>
        <button
          type="button" className="ba__knob" role="slider" aria-label="Comparar antes y después"
          aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pct)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") { setPct((p) => Math.max(0, p - 5)); e.preventDefault(); }
            if (e.key === "ArrowRight") { setPct((p) => Math.min(100, p + 5)); e.preventDefault(); }
          }}
        >
          <Icon name="drag" />
        </button>
      </div>
    </div>
  );
}
