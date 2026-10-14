import { createContext, useContext } from "react";

export const UiLocaleContext = createContext({
  locale: "zh",
  setLocale: () => {},
});

export function useUiLocale() {
  return useContext(UiLocaleContext);
}

export function useUiZh() {
  return useUiLocale().locale !== "en";
}
