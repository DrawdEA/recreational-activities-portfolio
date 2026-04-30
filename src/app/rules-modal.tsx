"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

type RulesModalProps = Readonly<{
  title: string;
  eyebrow: string;
  rules: readonly string[];
  tone: "warm" | "electric";
}>;

export default function RulesModal({ title, eyebrow, rules, tone }: RulesModalProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const modal = (
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className={`rules-modal rules-modal-${tone}`}
      role="dialog"
    >
      <button
        aria-label="Close details"
        className="rules-modal-backdrop"
        onClick={() => setOpen(false)}
        type="button"
      />
      <div className="rules-modal-panel">
        <div className="rules-modal-header">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 id={titleId}>{title}</h2>
          </div>
          <button
            aria-label="Close details"
            className="rules-modal-close"
            onClick={() => setOpen(false)}
            type="button"
          >
            Close
          </button>
        </div>
        <ul>
          {rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <button className="more-details-button" onClick={() => setOpen(true)} type="button">
        More details
      </button>

      {open && typeof document !== "undefined" ? createPortal(modal, document.body) : null}
    </>
  );
}
