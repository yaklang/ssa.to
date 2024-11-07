exports.id = 7098;
exports.ids = [7098];
exports.modules = {

/***/ 302:
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
var DocVersionRoot_exports = {};
__export(DocVersionRoot_exports, {
  default: () => DocVersionRoot
});
module.exports = __toCommonJS(DocVersionRoot_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_theme_common = __webpack_require__(92662);
var import_client = __webpack_require__(95730);
var import_renderRoutes = __toESM(__webpack_require__(47534));
var import_SearchMetadata = __toESM(__webpack_require__(18389));
function DocVersionRootMetadata(props) {
  const { version } = props;
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
    import_SearchMetadata.default,
    {
      version: version.version,
      tag: (0, import_client.getDocsVersionSearchTag)(version.pluginId, version.version)
    }
  ), /* @__PURE__ */ import_react.default.createElement(import_theme_common.PageMetadata, null, version.noIndex && /* @__PURE__ */ import_react.default.createElement("meta", { name: "robots", content: "noindex, nofollow" })));
}
function DocVersionRootContent(props) {
  const { version, route } = props;
  return /* @__PURE__ */ import_react.default.createElement(import_theme_common.HtmlClassNameProvider, { className: version.className }, /* @__PURE__ */ import_react.default.createElement(import_client.DocsVersionProvider, { version }, (0, import_renderRoutes.default)(route.routes)));
}
function DocVersionRoot(props) {
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(DocVersionRootMetadata, { ...props }), /* @__PURE__ */ import_react.default.createElement(DocVersionRootContent, { ...props }));
}


/***/ })

};
;