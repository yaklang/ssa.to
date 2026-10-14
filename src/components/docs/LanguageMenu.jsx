import React, { useEffect, useId, useRef, useState } from "react";
import { useHistory, useLocation } from "@docusaurus/router";
import { ChevronDown } from "lucide-react";
import { stripLocalePrefix, useUiLocale } from "./UiLocale";

const OPTIONS = [
  { value: "zh", label: "中文" },
  { value: "en", label: "English" },
];

export default function LanguageMenu({ onChange }) {
  const { locale, setLocale } = useUiLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const menuId = useId();
  const history = useHistory();
  const location = useLocation();
  const current = OPTIONS.find((option) => option.value === locale) || OPTIONS[0];

  useEffect(() => {
    const next = stripLocalePrefix(location.pathname);
    if (next !== location.pathname) {
      history.replace(next + location.search + location.hash);
    }
  }, [history, location.hash, location.pathname, location.search]);

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="academic-locale" ref={rootRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{current.label}</span>
        <ChevronDown size={14} strokeWidth={1.75} aria-hidden="true" />
      </button>
      {open && (
        <ul id={menuId} role="listbox" aria-label="Language">
          {OPTIONS.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={option.value === locale}
                onClick={() => {
                  setLocale(option.value);
                  setOpen(false);
                  onChange?.(option.value);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
