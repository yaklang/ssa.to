import React from "react";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useThemeConfig } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import {
  academicNavbarItems,
  isAcademicPath,
} from "@site/src/components/docs/navigation";

export default function NavbarMobilePrimaryMenu() {
  const { pathname } = useLocation();
  const { i18n } = useDocusaurusContext();
  const mobileSidebar = useNavbarMobileSidebar();
  const configuredItems = useThemeConfig().navbar.items;
  const academic = isAcademicPath(pathname);
  const zh = i18n.currentLocale === "zh";
  const items = academic
    ? [
        { to: "/next#rules", label: zh ? "规则库" : "Rules" },
        ...academicNavbarItems(configuredItems, zh),
      ]
    : configuredItems;
  return (
    <ul className="menu__list">
      {items.map((item, i) => (
        <NavbarItem
          mobile
          {...item}
          key={i}
          onClick={() => mobileSidebar.toggle()}
        />
      ))}
    </ul>
  );
}
