"use strict";
exports.id = 3992;
exports.ids = [3992];
exports.modules = {

/***/ 92647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = '命令行使用';
const metadata = {
  "id": "cli_usage",
  "title": "命令行使用",
  "description": "0x00 先决条件",
  "source": "@site/docs/cli_usage.md",
  "sourceDirName": ".",
  "slug": "/cli_usage",
  "permalink": "/en/docs/cli_usage",
  "draft": false,
  "unlisted": false,
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "sidebar_position": 2
  },
  "sidebar": "tutorialSidebar",
  "previous": {
    "title": "欢迎使用 SyntaxFlow",
    "permalink": "/en/docs/intro"
  },
  "next": {
    "title": "代码扫描",
    "permalink": "/en/docs/code_scan"
  }
};
const assets = {

};



const toc = [{
  "value": "0x00 先决条件",
  "id": "0x00-先决条件",
  "level": 2
}, {
  "value": "0x01 从零开始",
  "id": "0x01-从零开始",
  "level": 2
}, {
  "value": "0x01.1 Clone 本项目到本地",
  "id": "0x011-clone-本项目到本地",
  "level": 3
}, {
  "value": "0x01.2 编译 Hello World 程序",
  "id": "0x012-编译-hello-world-程序",
  "level": 3
}, {
  "value": "0x02 执行一个 SyntaxFlow 规则",
  "id": "0x02-执行一个-syntaxflow-规则",
  "level": 2
}, {
  "value": "新知识：追踪一个值的顶级支配者",
  "id": "新知识追踪一个值的顶级支配者",
  "level": 3
}, {
  "value": "0x03 分析 SyntaxFlow 结果",
  "id": "0x03-分析-syntaxflow-结果",
  "level": 2
}, {
  "value": "0x04 快速使用的总结",
  "id": "0x04-快速使用的总结",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.header, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
        id: "命令行使用",
        children: "命令行使用"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "0x00-先决条件",
      children: "0x00 先决条件"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在使用 SyntaxFlow 之前，需要你准备好 Yaklang 的环境，最简单的方式是使用 Yaklang 预编译环境："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "bash <(curl -sS -L http://oss.yaklang.io/install-latest-yak.sh)\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["通过这种安装方式，你可以使用 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "yak version"
      }), " 来检查版本"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["为了保持 SyntaxFlow 新特性的追加支持，请尽量保持在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "1.3.4-beta3"
      }), " 之后的版本。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "除了安装最基础的执行环境之外，你还需要事先对 “程序” 有一些基本认知，当然，如果你有 PHP / JS / Java 的一点点基础是最好的，方便我们在后面进行案例讲解具体实战案例。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "0x01-从零开始",
      children: "0x01 从零开始"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "假设现在的你现在并不知道 SSA 是什么，也不知道 SyntaxFlow 的基础语法，那么我们就从真的 “Zero” 开始吧！"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "0x011-clone-本项目到本地",
      children: "0x01.1 Clone 本项目到本地"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone https://github.com/yaklang/syntaxflow-zero-to-hero\ncd syntaxflow-zero-to-hero/lesson-1-hello-world/\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "0x012-编译-hello-world-程序",
      children: "0x01.2 编译 Hello World 程序"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["当然，SyntaxFlow 并不能被证明是图灵完备的，也并不适合像其他语言一样 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Println(\"Hello World\")"
      }), "。所以 Yaklang SyntaxFlow 的 Hello World 要相对特殊很多。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["我们要先把要审计的代码编译成特定的 SSA 格式，才能开始执行 SyntaxFlow。编译命令非常简单，在确保你 clone 到本地之后，进入 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "lession-1-hello-world"
      }), " 仓库，执行如下命令："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "yak ssa -t . --program lesson1\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "注意，你设置 --program lesson1 之后，在后续使用中，都需要使用到这个程序名称，分析其才知道你要分析到底是哪个程序。"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "执行完应该会看到"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "➜  lesson-1-hello-world git:(main) ✗ yak ssa -t . --program lesson1\n[INFO] 2024-06-25 22:57:36 [ssacli:131] start to compile file: .\n[INFO] 2024-06-25 22:57:36 [ssacli:147] compile save to database with program name: lesson1\n[INFO] 2024-06-25 22:57:36 [ssa:42] init ssa database: /Users/v1ll4n/yakit-projects/default-yakssa.db\n...\n...\n...\n...\n[INFO] 2024-06-25 22:57:37 [language_parser:68] compile HelloWorld.java cost: 309.695625ms\n[INFO] 2024-06-25 22:57:37 [language_parser:72] program include files: 2 will not be as the entry from project\n[INFO] 2024-06-25 22:57:37 [ssacli:162] finished compiling..., results: 1\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["当你看到 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "finished compiling..., results: ..."
      }), " 的时候，说明编译完成了。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "不要害怕，其实源码非常简单，作为 Hello World 来讲，我们努力在一个简单案例中展示 SyntaxFlow 的特性，尽可能让有任何基础的人都可以学习到如何审计："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["这段代码甚至连 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "import"
      }), " 和 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "package"
      }), " 都不会写，这虽然表面看起来是不完整的 Java 类，但是实际上这样的代码仍然可以被 Yaklang SSA 编译。XDD"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-java",
        children: "@Controller\n@RequestMapping(\"/home/rce\")\npublic class RuntimeExec {\n    @RequestMapping(\"/runtime\")\n    public String RuntimeExec(@GetParam(value=\"id\") String cmd, Model model) {\n        StringBuilder sb = new StringBuilder();\n        String line;\n\n\n        try {\n            var runtimeInstance = Runtime.getRuntime();\n            Process proc = runtimeInstance.exec(cmd);\n        } catch (IOException e) {\n\n        }\n        return \"basevul/rce/runtime\";\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "接下来我们要执行一个 SyntaxFlow 规则来进行代码审计了"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "0x02-执行一个-syntaxflow-规则",
      children: "0x02 执行一个 SyntaxFlow 规则"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["区别于之前的内容，我们这次在同名目录中编写了 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "lesson-1.sf"
      }), " 文件，其内容如下："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-log",
        children: "desc(title: \"This is Hello World for SyntaxFlow, simple but great!\")\n\nRuntime.getRuntime().exec(* #-> * as $source) as $sink;\n\ncheck $source then \"找到系统命令执行参数位置（依赖）\" else  \"没有找到参数\"\ncheck $sink then \"找到系统命令执行位置\" else \"没有执行命令\";\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们的示例规则使用了 SyntaxFlow 的查询语言来检测 Java 中的命令执行。规则主要包含两部分：一个用于寻找命令执行的源头（用户输入），另一个用于寻找命令执行发生的位置。实际上生效的最核心的代码只有一行"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Runtime.getRuntime().exec(* #-> * as $source) as $sink;"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "新知识追踪一个值的顶级支配者",
      children: "新知识：追踪一个值的顶级支配者"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["特殊符号 #-> 的用途就是追踪一个值的顶级支配，我们可以简单理解为：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "某一个值究竟受谁影响？"
      }), "，", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "#->"
      }), " 是一个操作符，用于追踪 Use-Def 链。它帮助分析代码中一个值的定义和使用，确定一个变量的“顶级定义”是什么。这对于理解数据流和潜在的安全漏洞非常关键。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["文件已经保存在 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "lesson-1-hello-world"
      }), " 中了，用户直接在那个目录下执行："]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "yak sf --program lesson1 lesson-1.sf\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["执行命令的时候要注意 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "--program"
      }), " 的参数是 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "lesson1"
      }), "，这是我们编译的时候设置的程序名称，在编译的时候设置为什么名称，在这里就要使用什么名称。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "就可以的到结果："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "[INFO] 2024-06-25 23:35:24 [ssacli:221] start to use SyntaxFlow rule: lesson-1.sf\n[INFO] 2024-06-25 23:35:24 [ssa:42] init ssa database: /Users/v1ll4n/yakit-projects/default-yakssa.db\n[INFO] 2024-06-25 23:35:24 [ssacli:272] syntax flow query result:\nrule md5 hash: 389009d4257afd3ee509af4749936a3b\nrule preview: desc(title: \"This is Hello World...then \"找到系统命令执行位置\" else \"没有执行命令\";\ndescription: {title: \"title\", $source: \"找到系统命令执行参数位置（依赖）\", $sink: \"找到系统命令执行位置\"}\nResult Vars:\n  source:\n    t2612544: Parameter-cmd\n        HelloWorld.java:5:30 - 5:62\n  sink:\n    t2612569: Undefined-runtimeInstance.exec(valid)\n        HelloWorld.java:12:43 - 12:52\n\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "0x03-分析-syntaxflow-结果",
      children: "0x03 分析 SyntaxFlow 结果"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "结果中显示了如下内容："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "description: { ... }"
        }), " 找到系统命令执行参数位置（依赖）..."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "source 和 sink 的具体位置和类型，这有助于开发者理解和修复潜在的安全问题"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "我们回忆源码中有两行："
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "check $source then \"找到系统命令执行参数位置（依赖）\" else  \"没有找到参数\"\ncheck $sink then \"找到系统命令执行位置\" else \"没有执行命令\"; \n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在 source 存在的时候，将会输出 “找到..参数”，在 sink 存在的时候，将会输出 \"找到命令执行位置\"。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "这两个条件基本我们就可以判定这个漏洞是存在的。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "0x04-快速使用的总结",
      children: "0x04 快速使用的总结"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "在几分钟之内你应该已经走完了 SyntaxFlow 审计代码的几个要素"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["编译 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "yak ssa -t ./project-path --program name"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["编写 SyntaxFlow 规则文件 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "rule.sf"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["执行 SyntaxFlow 规则文件 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "yak sf --program name rule.sf"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["并且在完成快速开始之后，你还学会了一个新的用法 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "#->"
      }), " 这个运算符可以寻找最顶级的支配者。尽管旅程结束的很快，但是不得不承认，你可能已经迫不及待开始新的 SyntaxFlow 学习之旅了！"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

};
;