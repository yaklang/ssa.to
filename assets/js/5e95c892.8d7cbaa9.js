exports.id = 9647;
exports.ids = [9647];
exports.modules = {

/***/ 2267:
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
var DocsRoot_exports = {};
__export(DocsRoot_exports, {
  default: () => DocsRoot
});
module.exports = __toCommonJS(DocsRoot_exports);
var import_react = __toESM(__webpack_require__(96540));
var import_clsx = __toESM(__webpack_require__(71508));
var import_theme_common = __webpack_require__(92662);
var import_renderRoutes = __toESM(__webpack_require__(47534));
var import_Layout = __toESM(__webpack_require__(7414));
function DocsRoot(props) {
  return /* @__PURE__ */ import_react.default.createElement(import_theme_common.HtmlClassNameProvider, { className: (0, import_clsx.default)(import_theme_common.ThemeClassNames.wrapper.docsPages) }, /* @__PURE__ */ import_react.default.createElement(import_Layout.default, null, (0, import_renderRoutes.default)(props.route.routes)));
}


/***/ })

};
;