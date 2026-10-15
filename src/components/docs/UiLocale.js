import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "ssa-ui-locale";
const listeners = new Set();
let locale = "zh";

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function stripLocalePrefix(pathname) {
  const stripped = pathname.replace(/^(?:\/(?:en|zh))+(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export function setUiLocale(next) {
  const value = next === "en" ? "en" : "zh";
  if (value === locale) return;
  locale = value;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Storage can be unavailable in private browsing.
  }
  emit();
}

export function useUiLocale() {
  const value = useSyncExternalStore(
    subscribe,
    () => locale,
    () => "zh",
  );
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "zh") setUiLocale(saved);
    } catch {
      // Ignore unavailable storage and keep the default locale.
    }
  }, []);
  return { locale: value, setLocale: setUiLocale };
}

export function useUiZh() {
  return useUiLocale().locale !== "en";
}
