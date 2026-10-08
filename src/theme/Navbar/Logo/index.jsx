import React from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import OriginalLogo from "@theme-original/Navbar/Logo";
import { isAcademicPath } from "@site/src/components/docs/navigation";

export default function NavbarLogo(props) {
  const { pathname } = useLocation();
  if (!isAcademicPath(pathname)) return <OriginalLogo {...props} />;
  return (
    <Link to="/next" className="navbar__brand academic-brand" title="SSA.to">
      <span className="academic-wordmark">ssa.to</span>
    </Link>
  );
}
