exports.id = 9048;
exports.ids = [9048];
exports.modules = {

/***/ 41871:
/***/ ((module) => {

// Exports
module.exports = {
	"backToTopButton": `backToTopButton_sjWU`,
	"backToTopButtonShow": `backToTopButtonShow_xfvO`
};


/***/ }),

/***/ 33685:
/***/ ((module) => {

// Exports
module.exports = {
	"docMainContainer": `docMainContainer_TBSr`,
	"docMainContainerEnhanced": `docMainContainerEnhanced_lQrH`,
	"docItemWrapperEnhanced": `docItemWrapperEnhanced_JWYK`
};


/***/ }),

/***/ 28721:
/***/ ((module) => {

// Exports
module.exports = {
	"expandButton": `expandButton_TmdG`,
	"expandButtonIcon": `expandButtonIcon_i1dp`
};


/***/ }),

/***/ 35710:
/***/ ((module) => {

// Exports
module.exports = {
	"docSidebarContainer": `docSidebarContainer_YfHR`,
	"docSidebarContainerHidden": `docSidebarContainerHidden_DPk8`,
	"sidebarViewport": `sidebarViewport_aRkj`
};


/***/ }),

/***/ 82607:
/***/ ((module) => {

// Exports
module.exports = {
	"docRoot": `docRoot_UBD9`,
	"docsWrapper": `docsWrapper_hBAB`
};


/***/ }),

/***/ 55599:
/***/ ((module) => {

// Exports
module.exports = {
	"collapseSidebarButton": `collapseSidebarButton_PEFL`,
	"collapseSidebarButtonIcon": `collapseSidebarButtonIcon_kv0_`
};


/***/ }),

/***/ 91733:
/***/ ((module) => {

// Exports
module.exports = {
	"menu": `menu_SIkG`,
	"menuWithAnnouncementBar": `menuWithAnnouncementBar_GW3s`
};


/***/ }),

/***/ 36263:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": `sidebar_njMd`,
	"sidebarWithHideableNavbar": `sidebarWithHideableNavbar_wUlq`,
	"sidebarHidden": `sidebarHidden_VK0M`,
	"sidebarLogo": `sidebarLogo_isFc`
};


/***/ }),

/***/ 82105:
/***/ ((module) => {

// Exports
module.exports = {
	"menuHtmlItem": `menuHtmlItem_M9Kj`
};


/***/ }),

/***/ 61398:
/***/ ((module) => {

// Exports
module.exports = {
	"menuExternalLink": `menuExternalLink_NmtK`
};


/***/ }),

/***/ 31465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BackToTopButton_exports = {};
__export(BackToTopButton_exports, {
  default: () => BackToTopButton
});
module.exports = __toCommonJS(BackToTopButton_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_Translate = __webpack_require__(91096);
var import_theme_common = __webpack_require__(92662);
var import_internal = __webpack_require__(33689);
var import_styles = __toESM(__webpack_require__(41871));
function BackToTopButton() {
  const { shown, scrollToTop } = (0, import_internal.useBackToTopButton)({ threshold: 300 });
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      "aria-label": (0, import_Translate.translate)({
        id: "theme.BackToTopButton.buttonAriaLabel",
        message: "Scroll back to top",
        description: "The ARIA label for the back to top button"
      }),
      className: (0, import_clsx.default)(
        "clean-btn",
        import_theme_common.ThemeClassNames.common.backToTopButton,
        import_styles.default.backToTopButton,
        shown && import_styles.default.backToTopButtonShow
      ),
      type: "button",
      onClick: scrollToTop
    }
  );
}


/***/ }),

/***/ 91055:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Main_exports = {};
__export(Main_exports, {
  default: () => DocRootLayoutMain
});
module.exports = __toCommonJS(Main_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_client = __webpack_require__(95730);
var import_styles = __toESM(__webpack_require__(33685));
function DocRootLayoutMain({ hiddenSidebarContainer, children }) {
  const sidebar = (0, import_client.useDocsSidebar)();
  return /* @__PURE__ */ import_react.default.createElement(
    "main",
    {
      className: (0, import_clsx.default)(
        import_styles.default.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && import_styles.default.docMainContainerEnhanced
      )
    },
    /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: (0, import_clsx.default)(
          "container padding-top--md padding-bottom--lg",
          import_styles.default.docItemWrapper,
          hiddenSidebarContainer && import_styles.default.docItemWrapperEnhanced
        )
      },
      children
    )
  );
}


/***/ }),

/***/ 29791:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ExpandButton_exports = {};
__export(ExpandButton_exports, {
  default: () => DocRootLayoutSidebarExpandButton
});
module.exports = __toCommonJS(ExpandButton_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_Translate = __webpack_require__(91096);
var import_Arrow = __toESM(__webpack_require__(3823));
var import_styles = __toESM(__webpack_require__(28721));
function DocRootLayoutSidebarExpandButton({ toggleSidebar }) {
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: import_styles.default.expandButton,
      title: (0, import_Translate.translate)({
        id: "theme.docs.sidebar.expandButtonTitle",
        message: "Expand sidebar",
        description: "The ARIA label and title attribute for expand button of doc sidebar"
      }),
      "aria-label": (0, import_Translate.translate)({
        id: "theme.docs.sidebar.expandButtonAriaLabel",
        message: "Expand sidebar",
        description: "The ARIA label and title attribute for expand button of doc sidebar"
      }),
      tabIndex: 0,
      role: "button",
      onKeyDown: toggleSidebar,
      onClick: toggleSidebar
    },
    /* @__PURE__ */ import_react.default.createElement(import_Arrow.default, { className: import_styles.default.expandButtonIcon })
  );
}


/***/ }),

/***/ 57570:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Sidebar_exports = {};
__export(Sidebar_exports, {
  default: () => DocRootLayoutSidebar
});
module.exports = __toCommonJS(Sidebar_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_theme_common = __webpack_require__(92662);
var import_client = __webpack_require__(95730);
var import_router = __webpack_require__(78513);
var import_DocSidebar = __toESM(__webpack_require__(8786));
var import_ExpandButton = __toESM(__webpack_require__(29791));
var import_styles = __toESM(__webpack_require__(35710));
function ResetOnSidebarChange({ children }) {
  var _a;
  const sidebar = (0, import_client.useDocsSidebar)();
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, { key: (_a = sidebar == null ? void 0 : sidebar.name) != null ? _a : "noSidebar" }, children);
}
function DocRootLayoutSidebar({
  sidebar,
  hiddenSidebarContainer,
  setHiddenSidebarContainer
}) {
  const { pathname } = (0, import_router.useLocation)();
  const [hiddenSidebar, setHiddenSidebar] = (0, import_react.useState)(false);
  const toggleSidebar = (0, import_react.useCallback)(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false);
    }
    if (!hiddenSidebar && (0, import_theme_common.prefersReducedMotion)()) {
      setHiddenSidebar(true);
    }
    setHiddenSidebarContainer((value) => !value);
  }, [setHiddenSidebarContainer, hiddenSidebar]);
  return /* @__PURE__ */ import_react.default.createElement(
    "aside",
    {
      className: (0, import_clsx.default)(
        import_theme_common.ThemeClassNames.docs.docSidebarContainer,
        import_styles.default.docSidebarContainer,
        hiddenSidebarContainer && import_styles.default.docSidebarContainerHidden
      ),
      onTransitionEnd: (e) => {
        if (!e.currentTarget.classList.contains(import_styles.default.docSidebarContainer)) {
          return;
        }
        if (hiddenSidebarContainer) {
          setHiddenSidebar(true);
        }
      }
    },
    /* @__PURE__ */ import_react.default.createElement(ResetOnSidebarChange, null, /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: (0, import_clsx.default)(
          import_styles.default.sidebarViewport,
          hiddenSidebar && import_styles.default.sidebarViewportHidden
        )
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_DocSidebar.default,
        {
          sidebar,
          path: pathname,
          onCollapse: toggleSidebar,
          isHidden: hiddenSidebar
        }
      ),
      hiddenSidebar && /* @__PURE__ */ import_react.default.createElement(import_ExpandButton.default, { toggleSidebar })
    ))
  );
}


/***/ }),

/***/ 5337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Layout_exports = {};
__export(Layout_exports, {
  default: () => DocRootLayout
});
module.exports = __toCommonJS(Layout_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_client = __webpack_require__(95730);
var import_BackToTopButton = __toESM(__webpack_require__(31465));
var import_Sidebar = __toESM(__webpack_require__(57570));
var import_Main = __toESM(__webpack_require__(91055));
var import_styles = __toESM(__webpack_require__(82607));
function DocRootLayout({ children }) {
  const sidebar = (0, import_client.useDocsSidebar)();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0, import_react.useState)(false);
  return /* @__PURE__ */ import_react.default.createElement("div", { className: import_styles.default.docsWrapper }, /* @__PURE__ */ import_react.default.createElement(import_BackToTopButton.default, null), /* @__PURE__ */ import_react.default.createElement("div", { className: import_styles.default.docRoot }, sidebar && /* @__PURE__ */ import_react.default.createElement(
    import_Sidebar.default,
    {
      sidebar: sidebar.items,
      hiddenSidebarContainer,
      setHiddenSidebarContainer
    }
  ), /* @__PURE__ */ import_react.default.createElement(import_Main.default, { hiddenSidebarContainer }, children)));
}


/***/ }),

/***/ 71306:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var DocRoot_exports = {};
__export(DocRoot_exports, {
  default: () => DocRoot
});
module.exports = __toCommonJS(DocRoot_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_theme_common = __webpack_require__(92662);
var import_client = __webpack_require__(95730);
var import_Layout = __toESM(__webpack_require__(5337));
var import_Content = __toESM(__webpack_require__(41893));
function DocRoot(props) {
  const currentDocRouteMetadata = (0, import_client.useDocRootMetadata)(props);
  if (!currentDocRouteMetadata) {
    return /* @__PURE__ */ import_react.default.createElement(import_Content.default, null);
  }
  const { docElement, sidebarName, sidebarItems } = currentDocRouteMetadata;
  return /* @__PURE__ */ import_react.default.createElement(import_theme_common.HtmlClassNameProvider, { className: (0, import_clsx.default)(import_theme_common.ThemeClassNames.page.docsDocPage) }, /* @__PURE__ */ import_react.default.createElement(import_client.DocsSidebarProvider, { name: sidebarName, items: sidebarItems }, /* @__PURE__ */ import_react.default.createElement(import_Layout.default, null, docElement)));
}


/***/ }),

/***/ 33537:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var CollapseButton_exports = {};
__export(CollapseButton_exports, {
  default: () => CollapseButton
});
module.exports = __toCommonJS(CollapseButton_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_Translate = __webpack_require__(91096);
var import_Arrow = __toESM(__webpack_require__(3823));
var import_styles = __toESM(__webpack_require__(55599));
function CollapseButton({ onClick }) {
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type: "button",
      title: (0, import_Translate.translate)({
        id: "theme.docs.sidebar.collapseButtonTitle",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar"
      }),
      "aria-label": (0, import_Translate.translate)({
        id: "theme.docs.sidebar.collapseButtonAriaLabel",
        message: "Collapse sidebar",
        description: "The title attribute for collapse button of doc sidebar"
      }),
      className: (0, import_clsx.default)(
        "button button--secondary button--outline",
        import_styles.default.collapseSidebarButton
      ),
      onClick
    },
    /* @__PURE__ */ import_react.default.createElement(import_Arrow.default, { className: import_styles.default.collapseSidebarButtonIcon })
  );
}


/***/ }),

/***/ 92015:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Content_exports = {};
__export(Content_exports, {
  default: () => DocSidebarDesktopContent
});
module.exports = __toCommonJS(Content_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_theme_common = __webpack_require__(92662);
var import_internal = __webpack_require__(33689);
var import_Translate = __webpack_require__(91096);
var import_DocSidebarItems = __toESM(__webpack_require__(78102));
var import_styles = __toESM(__webpack_require__(91733));
function useShowAnnouncementBar() {
  const { isActive } = (0, import_internal.useAnnouncementBar)();
  const [showAnnouncementBar, setShowAnnouncementBar] = (0, import_react.useState)(isActive);
  (0, import_internal.useScrollPosition)(
    ({ scrollY }) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive]
  );
  return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent({ path, sidebar, className }) {
  const showAnnouncementBar = useShowAnnouncementBar();
  return /* @__PURE__ */ import_react.default.createElement(
    "nav",
    {
      "aria-label": (0, import_Translate.translate)({
        id: "theme.docs.sidebar.navAriaLabel",
        message: "Docs sidebar",
        description: "The ARIA label for the sidebar navigation"
      }),
      className: (0, import_clsx.default)(
        "menu thin-scrollbar",
        import_styles.default.menu,
        showAnnouncementBar && import_styles.default.menuWithAnnouncementBar,
        className
      )
    },
    /* @__PURE__ */ import_react.default.createElement("ul", { className: (0, import_clsx.default)(import_theme_common.ThemeClassNames.docs.docSidebarMenu, "menu__list") }, /* @__PURE__ */ import_react.default.createElement(import_DocSidebarItems.default, { items: sidebar, activePath: path, level: 1 }))
  );
}


/***/ }),

/***/ 77953:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Desktop_exports = {};
__export(Desktop_exports, {
  default: () => Desktop_default
});
module.exports = __toCommonJS(Desktop_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_theme_common = __webpack_require__(92662);
var import_Logo = __toESM(__webpack_require__(23247));
var import_CollapseButton = __toESM(__webpack_require__(33537));
var import_Content = __toESM(__webpack_require__(92015));
var import_styles = __toESM(__webpack_require__(36263));
function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const {
    navbar: { hideOnScroll },
    docs: {
      sidebar: { hideable }
    }
  } = (0, import_theme_common.useThemeConfig)();
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: (0, import_clsx.default)(
        import_styles.default.sidebar,
        hideOnScroll && import_styles.default.sidebarWithHideableNavbar,
        isHidden && import_styles.default.sidebarHidden
      )
    },
    hideOnScroll && /* @__PURE__ */ import_react.default.createElement(import_Logo.default, { tabIndex: -1, className: import_styles.default.sidebarLogo }),
    /* @__PURE__ */ import_react.default.createElement(import_Content.default, { path, sidebar }),
    hideable && /* @__PURE__ */ import_react.default.createElement(import_CollapseButton.default, { onClick: onCollapse })
  );
}
var Desktop_default = import_react.default.memo(DocSidebarDesktop);


/***/ }),

/***/ 32069:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Mobile_exports = {};
__export(Mobile_exports, {
  default: () => Mobile_default
});
module.exports = __toCommonJS(Mobile_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_theme_common = __webpack_require__(92662);
var import_internal = __webpack_require__(33689);
var import_DocSidebarItems = __toESM(__webpack_require__(78102));
const DocSidebarMobileSecondaryMenu = ({ sidebar, path }) => {
  const mobileSidebar = (0, import_internal.useNavbarMobileSidebar)();
  return /* @__PURE__ */ import_react.default.createElement("ul", { className: (0, import_clsx.default)(import_theme_common.ThemeClassNames.docs.docSidebarMenu, "menu__list") }, /* @__PURE__ */ import_react.default.createElement(
    import_DocSidebarItems.default,
    {
      items: sidebar,
      activePath: path,
      onItemClick: (item) => {
        if (item.type === "category" && item.href) {
          mobileSidebar.toggle();
        }
        if (item.type === "link") {
          mobileSidebar.toggle();
        }
      },
      level: 1
    }
  ));
};
function DocSidebarMobile(props) {
  return /* @__PURE__ */ import_react.default.createElement(
    import_theme_common.NavbarSecondaryMenuFiller,
    {
      component: DocSidebarMobileSecondaryMenu,
      props
    }
  );
}
var Mobile_default = import_react.default.memo(DocSidebarMobile);


/***/ }),

/***/ 8786:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var DocSidebar_exports = {};
__export(DocSidebar_exports, {
  default: () => DocSidebar
});
module.exports = __toCommonJS(DocSidebar_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_theme_common = __webpack_require__(92662);
var import_Desktop = __toESM(__webpack_require__(77953));
var import_Mobile = __toESM(__webpack_require__(32069));
function DocSidebar(props) {
  const windowSize = (0, import_theme_common.useWindowSize)();
  const shouldRenderSidebarDesktop = windowSize === "desktop" || windowSize === "ssr";
  const shouldRenderSidebarMobile = windowSize === "mobile";
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, shouldRenderSidebarDesktop && /* @__PURE__ */ import_react.default.createElement(import_Desktop.default, { ...props }), shouldRenderSidebarMobile && /* @__PURE__ */ import_react.default.createElement(import_Mobile.default, { ...props }));
}


/***/ }),

/***/ 93674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Category_exports = {};
__export(Category_exports, {
  default: () => DocSidebarItemCategory
});
module.exports = __toCommonJS(Category_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_theme_common = __webpack_require__(92662);
var import_internal = __webpack_require__(33689);
var import_client = __webpack_require__(95730);
var import_Link = __toESM(__webpack_require__(46100));
var import_Translate = __webpack_require__(91096);
var import_useIsBrowser = __toESM(__webpack_require__(42517));
var import_DocSidebarItems = __toESM(__webpack_require__(78102));
function useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed }) {
  const wasActive = (0, import_theme_common.usePrevious)(isActive);
  (0, import_react.useEffect)(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}
function useCategoryHrefWithSSRFallback(item) {
  const isBrowser = (0, import_useIsBrowser.default)();
  return (0, import_react.useMemo)(() => {
    if (item.href && !item.linkUnlisted) {
      return item.href;
    }
    if (isBrowser || !item.collapsible) {
      return void 0;
    }
    return (0, import_client.findFirstSidebarItemLink)(item);
  }, [item, isBrowser]);
}
function CollapseButton({ collapsed, categoryLabel, onClick }) {
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      "aria-label": collapsed ? (0, import_Translate.translate)(
        {
          id: "theme.DocSidebarItem.expandCategoryAriaLabel",
          message: "Expand sidebar category '{label}'",
          description: "The ARIA label to expand the sidebar category"
        },
        { label: categoryLabel }
      ) : (0, import_Translate.translate)(
        {
          id: "theme.DocSidebarItem.collapseCategoryAriaLabel",
          message: "Collapse sidebar category '{label}'",
          description: "The ARIA label to collapse the sidebar category"
        },
        { label: categoryLabel }
      ),
      "aria-expanded": !collapsed,
      type: "button",
      className: "clean-btn menu__caret",
      onClick
    }
  );
}
function DocSidebarItemCategory({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { items, label, collapsible, className, href } = item;
  const {
    docs: {
      sidebar: { autoCollapseCategories }
    }
  } = (0, import_theme_common.useThemeConfig)();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
  const isActive = (0, import_client.isActiveSidebarItem)(item, activePath);
  const isCurrentPage = (0, import_internal.isSamePath)(href, activePath);
  const { collapsed, setCollapsed } = (0, import_theme_common.useCollapsible)({
    // Active categories are always initialized as expanded. The default
    // (`item.collapsed`) is only used for non-active categories.
    initialState: () => {
      if (!collapsible) {
        return false;
      }
      return isActive ? false : item.collapsed;
    }
  });
  const { expandedItem, setExpandedItem } = (0, import_client.useDocSidebarItemsExpandedState)();
  const updateCollapsed = (toCollapsed = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index);
    setCollapsed(toCollapsed);
  };
  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });
  (0, import_react.useEffect)(() => {
    if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
      setCollapsed(true);
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);
  return /* @__PURE__ */ import_react.default.createElement(
    "li",
    {
      className: (0, import_clsx.default)(
        import_theme_common.ThemeClassNames.docs.docSidebarItemCategory,
        import_theme_common.ThemeClassNames.docs.docSidebarItemCategoryLevel(level),
        "menu__list-item",
        {
          "menu__list-item--collapsed": collapsed
        },
        className
      )
    },
    /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: (0, import_clsx.default)("menu__list-item-collapsible", {
          "menu__list-item-collapsible--active": isCurrentPage
        })
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_Link.default,
        {
          className: (0, import_clsx.default)("menu__link", {
            "menu__link--sublist": collapsible,
            "menu__link--sublist-caret": !href && collapsible,
            "menu__link--active": isActive
          }),
          onClick: collapsible ? (e) => {
            onItemClick == null ? void 0 : onItemClick(item);
            if (href) {
              updateCollapsed(false);
            } else {
              e.preventDefault();
              updateCollapsed();
            }
          } : () => {
            onItemClick == null ? void 0 : onItemClick(item);
          },
          "aria-current": isCurrentPage ? "page" : void 0,
          role: collapsible && !href ? "button" : void 0,
          "aria-expanded": collapsible && !href ? !collapsed : void 0,
          href: collapsible ? hrefWithSSRFallback != null ? hrefWithSSRFallback : "#" : hrefWithSSRFallback,
          ...props
        },
        label
      ),
      href && collapsible && /* @__PURE__ */ import_react.default.createElement(
        CollapseButton,
        {
          collapsed,
          categoryLabel: label,
          onClick: (e) => {
            e.preventDefault();
            updateCollapsed();
          }
        }
      )
    ),
    /* @__PURE__ */ import_react.default.createElement(import_theme_common.Collapsible, { lazy: true, as: "ul", className: "menu__list", collapsed }, /* @__PURE__ */ import_react.default.createElement(
      import_DocSidebarItems.default,
      {
        items,
        tabIndex: collapsed ? -1 : 0,
        onItemClick,
        activePath,
        level: level + 1
      }
    ))
  );
}


/***/ }),

/***/ 33751:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Html_exports = {};
__export(Html_exports, {
  default: () => DocSidebarItemHtml
});
module.exports = __toCommonJS(Html_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_theme_common = __webpack_require__(92662);
var import_styles = __toESM(__webpack_require__(82105));
function DocSidebarItemHtml({ item, level, index }) {
  const { value, defaultStyle, className } = item;
  return /* @__PURE__ */ import_react.default.createElement(
    "li",
    {
      className: (0, import_clsx.default)(
        import_theme_common.ThemeClassNames.docs.docSidebarItemLink,
        import_theme_common.ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        defaultStyle && [import_styles.default.menuHtmlItem, "menu__list-item"],
        className
      ),
      key: index,
      dangerouslySetInnerHTML: { __html: value }
    }
  );
}


/***/ }),

/***/ 29226:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Link_exports = {};
__export(Link_exports, {
  default: () => DocSidebarItemLink
});
module.exports = __toCommonJS(Link_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_theme_common = __webpack_require__(92662);
var import_client = __webpack_require__(95730);
var import_Link = __toESM(__webpack_require__(46100));
var import_isInternalUrl = __toESM(__webpack_require__(75068));
var import_ExternalLink = __toESM(__webpack_require__(78473));
var import_styles = __toESM(__webpack_require__(61398));
function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = (0, import_client.isActiveSidebarItem)(item, activePath);
  const isInternalLink = (0, import_isInternalUrl.default)(href);
  return /* @__PURE__ */ import_react.default.createElement(
    "li",
    {
      className: (0, import_clsx.default)(
        import_theme_common.ThemeClassNames.docs.docSidebarItemLink,
        import_theme_common.ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        "menu__list-item",
        className
      ),
      key: label
    },
    /* @__PURE__ */ import_react.default.createElement(
      import_Link.default,
      {
        className: (0, import_clsx.default)(
          "menu__link",
          !isInternalLink && import_styles.default.menuExternalLink,
          {
            "menu__link--active": isActive
          }
        ),
        autoAddBaseUrl,
        "aria-current": isActive ? "page" : void 0,
        to: href,
        ...isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : void 0
        },
        ...props
      },
      label,
      !isInternalLink && /* @__PURE__ */ import_react.default.createElement(import_ExternalLink.default, null)
    )
  );
}


/***/ }),

/***/ 29909:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var DocSidebarItem_exports = {};
__export(DocSidebarItem_exports, {
  default: () => DocSidebarItem
});
module.exports = __toCommonJS(DocSidebarItem_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_Category = __toESM(__webpack_require__(93674));
var import_Link = __toESM(__webpack_require__(29226));
var import_Html = __toESM(__webpack_require__(33751));
function DocSidebarItem({ item, ...props }) {
  switch (item.type) {
    case "category":
      return /* @__PURE__ */ import_react.default.createElement(import_Category.default, { item, ...props });
    case "html":
      return /* @__PURE__ */ import_react.default.createElement(import_Html.default, { item, ...props });
    case "link":
    default:
      return /* @__PURE__ */ import_react.default.createElement(import_Link.default, { item, ...props });
  }
}


/***/ }),

/***/ 78102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var DocSidebarItems_exports = {};
__export(DocSidebarItems_exports, {
  default: () => DocSidebarItems_default
});
module.exports = __toCommonJS(DocSidebarItems_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_client = __webpack_require__(95730);
var import_DocSidebarItem = __toESM(__webpack_require__(29909));
function DocSidebarItems({ items, ...props }) {
  const visibleItems = (0, import_client.useVisibleSidebarItems)(items, props.activePath);
  return /* @__PURE__ */ import_react.default.createElement(import_client.DocSidebarItemsExpandedStateProvider, null, visibleItems.map((item, index) => /* @__PURE__ */ import_react.default.createElement(import_DocSidebarItem.default, { key: index, item, index, ...props })));
}
var DocSidebarItems_default = (0, import_react.memo)(DocSidebarItems);


/***/ }),

/***/ 3823:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Arrow_exports = {};
__export(Arrow_exports, {
  default: () => IconArrow
});
module.exports = __toCommonJS(Arrow_exports);
var import_react = __toESM(__webpack_require__(96540));
function IconArrow(props) {
  return /* @__PURE__ */ import_react.default.createElement("svg", { width: "20", height: "20", "aria-hidden": "true", ...props }, /* @__PURE__ */ import_react.default.createElement("g", { fill: "#7a7a7a" }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0" }), /* @__PURE__ */ import_react.default.createElement("path", { d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0" })));
}


/***/ }),

/***/ 41893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Content_exports = {};
__export(Content_exports, {
  default: () => NotFoundContent
});
module.exports = __toCommonJS(Content_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_Translate = __toESM(__webpack_require__(91096));
var import_Heading = __toESM(__webpack_require__(80358));
function NotFoundContent({ className }) {
  return /* @__PURE__ */ import_react.default.createElement("main", { className: (0, import_clsx.default)("container margin-vert--xl", className) }, /* @__PURE__ */ import_react.default.createElement("div", { className: "row" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "col col--6 col--offset-3" }, /* @__PURE__ */ import_react.default.createElement(import_Heading.default, { as: "h1", className: "hero__title" }, /* @__PURE__ */ import_react.default.createElement(
    import_Translate.default,
    {
      id: "theme.NotFound.title",
      description: "The title of the 404 page"
    },
    "Page Not Found"
  )), /* @__PURE__ */ import_react.default.createElement("p", null, /* @__PURE__ */ import_react.default.createElement(
    import_Translate.default,
    {
      id: "theme.NotFound.p1",
      description: "The first paragraph of the 404 page"
    },
    "We could not find what you were looking for."
  )), /* @__PURE__ */ import_react.default.createElement("p", null, /* @__PURE__ */ import_react.default.createElement(
    import_Translate.default,
    {
      id: "theme.NotFound.p2",
      description: "The 2nd paragraph of the 404 page"
    },
    "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."
  )))));
}


/***/ })

};
;