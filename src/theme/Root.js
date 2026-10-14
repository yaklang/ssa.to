import React, { useEffect } from "react";
import { useHistory, useLocation } from "@docusaurus/router";
import { stripLocalePrefix } from "@site/src/components/docs/UiLocale";

export default function Root({ children }) {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const next = stripLocalePrefix(location.pathname);
    if (next !== location.pathname) {
      history.replace(next + location.search + location.hash);
    }
  }, [history, location.hash, location.pathname, location.search]);

  return <>{children}</>;
}
