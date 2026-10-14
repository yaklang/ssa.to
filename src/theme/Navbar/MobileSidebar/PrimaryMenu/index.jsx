import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import { useUiZh } from "@site/src/components/docs/UiLocale";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import { academicNavbarItems } from "@site/src/components/docs/navigation";
import LanguageMenu from "@site/src/components/docs/LanguageMenu";

export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  const configuredItems = useThemeConfig().navbar.items;
  const zh = useUiZh();
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
      <li className="menu__list-item academic-locale-mobile">
        <LanguageMenu onChange={() => mobileSidebar.toggle()} />
      </li>
    </ul>
  );
}
