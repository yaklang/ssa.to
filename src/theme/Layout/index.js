import React from "react";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Navbar from "@theme/Navbar";
import Footer from "@theme/Footer";
import LayoutProvider from "@theme/Layout/Provider";
import ErrorPageContent from "@theme/ErrorPageContent";
import styles from "./styles.module.css";
import { useLocation } from "@docusaurus/router";
import AcademicFooter from "@site/src/components/docs/AcademicFooter";
import "@site/src/css/academic-docs.scss";
export default function Layout(props) {
  const { pathname } = useLocation();
  const academic = !/^\/(en\/?)?$/.test(pathname);
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;
  return (
    <LayoutProvider>
      <PageMetadata title={title} description={description} />

      <div className={academic ? "academic-site" : "legacy-site"}>
        <SkipToContent />

        <AnnouncementBar />

        <Navbar />

        <div
          id={SkipToContentFallbackId}
          className={clsx(
            ThemeClassNames.wrapper.main,
            styles.mainWrapper,
            wrapperClassName,
          )}
        >
          <ErrorBoundary
            fallback={(params) => <ErrorPageContent {...params} />}
          >
            {children}
          </ErrorBoundary>
        </div>

        {!noFooter && (academic ? <AcademicFooter /> : <Footer />)}
      </div>
    </LayoutProvider>
  );
}
