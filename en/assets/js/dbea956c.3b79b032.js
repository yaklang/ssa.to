"use strict";
exports.id = 6776;
exports.ids = [6776];
exports.modules = {

/***/ 99079:
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
var cookbook_exports = {};
__export(cookbook_exports, {
  default: () => Cookbook
});
module.exports = __toCommonJS(cookbook_exports);
var import_jsx_runtime = __webpack_require__(74848);
var import_Layout = __toESM(__webpack_require__(7414));
function Cookbook() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_Layout.default,
    {
      title: "SyntaxFlow \u8BED\u8A00\u624B\u518C",
      description: "SyntaxFlow \u8BED\u8A00\u7684\u8BE6\u7EC6\u4F7F\u7528\u6307\u5357",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "container margin-vert--lg", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "row", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "col col--12", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "pdf-viewer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: "text-center",
            style: {
              marginBottom: "30px",
              display: "flex",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "a",
              {
                href: "/pdf/syntaxflow-cookbook.pdf",
                download: true,
                className: "button button--primary button--lg",
                style: {
                  fontSize: "1.2rem",
                  padding: "12px 36px"
                },
                children: "\u4E0B\u8F7D\u5B8C\u6574\u624B\u518C PDF"
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "iframe",
          {
            src: "/pdf/syntaxflow-cookbook.pdf",
            style: {
              width: "calc(100% - 96px)",
              // 左右各留48px
              height: "calc(100vh - 160px)",
              // 减少头部和按钮占用的空间
              border: "1px solid #eee",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              padding: "24px",
              margin: "0 48px",
              backgroundColor: "#fff"
            },
            title: "SyntaxFlow \u8BED\u8A00\u624B\u518C"
          }
        )
      ] }) }) }) })
    }
  );
}


/***/ })

};
;