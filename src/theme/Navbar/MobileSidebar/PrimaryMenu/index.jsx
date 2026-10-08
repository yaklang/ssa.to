import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useThemeConfig } from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import { academicNavbarItems } from "@site/src/components/docs/navigation";

export default function NavbarMobilePrimaryMenu() {
  const { i18n } = useDocusaurusContext();
  const mobileSidebar = useNavbarMobileSidebar();
  const configuredItems = useThemeConfig().navbar.items;
  const zh = i18n.currentLocale === "zh";
  const items = [
    { to: "/#rules", label: zh ? "规则库" : "Rules" },
    ...academicNavbarItems(configuredItems, zh),
  ];
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
