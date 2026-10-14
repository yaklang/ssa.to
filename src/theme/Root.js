import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "@docusaurus/router";
import { UiLocaleContext } from "@site/src/components/docs/UiLocale";

function stripLocalePrefix(pathname) {
  const stripped = pathname.replace(/^(?:\/(?:en|zh))+(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export default function Root({ children }) {
  const history = useHistory();
  const location = useLocation();
  const [locale, setLocaleState] = useState("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("ssa-ui-locale");
    if (saved === "en" || saved === "zh") setLocaleState(saved);
  }, []);

  useEffect(() => {
    const next = stripLocalePrefix(location.pathname);
    if (next !== location.pathname) {
      history.replace(next + location.search + location.hash);
    }
  }, [history, location.hash, location.pathname, location.search]);

  const setLocale = useCallback((next) => {
    setLocaleState(next);
    window.localStorage.setItem("ssa-ui-locale", next);
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return (
    <UiLocaleContext.Provider value={value}>{children}</UiLocaleContext.Provider>
  );
}
