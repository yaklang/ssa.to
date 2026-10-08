import React from "react";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import IconHome from "@theme/Icon/Home";

export default function HomeBreadcrumbItem() {
  return (
    <li className="breadcrumbs__item">
      <Link
        to="/next"
        className="breadcrumbs__link"
        aria-label={translate({
          id: "theme.docs.breadcrumbs.home",
          message: "Home page",
          description: "The ARIA label for the home page in the breadcrumbs",
        })}
      >
        <IconHome style={{ width: 14, height: 14 }} />
      </Link>
    </li>
  );
}
