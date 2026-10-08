import React from "react";
import Link from "@docusaurus/Link";

export default function NavbarLogo() {
  return (
    <Link to="/" className="navbar__brand academic-brand" title="SSA.to">
      <span className="academic-wordmark">ssa.to</span>
    </Link>
  );
}
