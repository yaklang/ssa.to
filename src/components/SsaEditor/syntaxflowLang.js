export const syntaxflowLang = (monaco) => {
  monaco.languages.register({
    id: "syntaxflow",
    extensions: [".sf"],
    aliases: ["syntaxflow", "SyntaxFlow"],
  });

  monaco.languages.setLanguageConfiguration("syntaxflow", {
    comments: {
      lineComment: "//",
    },
    autoClosingPairs: [
      { open: "{", close: "}", notIn: ["string"] },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: "'", close: "'", notIn: ["string", "comment"] },
      { open: '"', close: '"', notIn: ["string"] },
      { open: "`", close: "`", notIn: ["string", "comment"] },
    ],
    brackets: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
    ],
    autoCloseBefore: ";:.,=}])>` \n\t",
  });

  monaco.languages.setMonarchTokensProvider("syntaxflow", {
    defaultToken: "",
    tokenPostfix: ".syntaxflow",
    keywords: [
      "as",
      "alert",
      "for",
      "check",
      "else",
      "then",
      "desc",
      "title",
      "risk",
      "level",
      "in",
      "have",
      "haveany",
      "call",
      "const",
      "constant",
      "dict",
      "float",
      "func",
      "function",
      "if",
      "int",
      "list",
      "note",
      "param",
      "phi",
      "ret",
      "return",
      "str",
      "type",
      "version_in",
      "opcode",
      "not",
      "formal_param",
      "formalparam",
      "true",
      "false",
      "bool",
      "any",
    ],
    operators: [
      "==>",
      "-->",
      "}->",
      "#->",
      "#>",
      "#{",
      "-{",
      "=>",
      "==",
      "...",
      "%%",
      "..",
      "<=",
      ">=",
      "=~",
      "!~",
      "&&",
      "||",
      "!=",
      "->",
      ">",
      "<",
      "=",
      "+",
      "-",
      "*",
      "/",
      "!",
      "?",
      "#",
      "$",
      ":",
      "%",
      "&",
      ",",
      ";",
      ".",
    ],
    symbols: /[=>!~?:&|+\-*\/\^%#$.]+/,
    tokenizer: {
      root: [
        [/\/\/.*$/, "comment"],
        [/\s+/, ""],

        [/<<<\s*([A-Za-z_][\w]*)/, { token: "string.heredoc.delimiter", next: "@heredoc.$1" }],

        [/[<]/, { token: "support.function", next: "@native_call" }],

        [/\$[a-zA-Z_][\w]*/, "variable"],

        [/0x[0-9a-fA-F]+/, "number.hex"],
        [/0b[01]+/, "number.binary"],
        [/0o[0-7]+/, "number.octal"],
        [/\d+/, "number"],

        [/"([^"\\]|\\.)*$/, "string.invalid"],
        [/'([^'\\]|\\.)*$/, "string.invalid"],
        [/`([^`\\]|\\.)*$/, "string.invalid"],
        [/"([^"\\]|\\.)*"/, "string"],
        [/'([^'\\]|\\.)*'/, "string"],
        [/`([^`\\]|\\.)*`/, "string"],

        [/\/(\\\/|[^\/\n])*\//, "regexp"],

        [/[a-zA-Z_][\w]*/, {
          cases: {
            "@keywords": "keyword",
            "@default": "identifier",
          },
        }],

        [/@symbols/, {
          cases: {
            "@operators": "operator",
            "@default": "operator",
          },
        }],

        [/[{}()\[\]]/, "@brackets"],
        [/[;,.]/, "delimiter"],
      ],

      native_call: [
        [/[(]/, { token: "delimiter.parenthesis", next: "@native_call_params" }],
        [/[{]/, { token: "delimiter.curly", next: "@native_call_params" }],
        [/[>]/, { token: "support.function", next: "@pop" }],
        [/[^>({]+/, "support.function"],
      ],

      native_call_params: [
        [/\s+/, ""],
        [/\)/, { token: "delimiter.parenthesis", next: "@pop" }],
        [/\}/, { token: "delimiter.curly", next: "@pop" }],
        [/,/, "delimiter"],
        [/[:=]/, "delimiter"],
        [/"([^"\\]|\\.)*"/, "string"],
        [/'([^'\\]|\\.)*'/, "string"],
        [/`([^`\\]|\\.)*`/, "string"],
        [/\$[a-zA-Z_][\w]*/, "variable"],
        [/\/(\\\/|[^\/\n])*\//, "regexp"],
        [/0x[0-9a-fA-F]+/, "number.hex"],
        [/0b[01]+/, "number.binary"],
        [/0o[0-7]+/, "number.octal"],
        [/\d+/, "number"],
        [/[a-zA-Z_][\w]*/, {
          cases: {
            "@keywords": "keyword",
            "@default": "identifier",
          },
        }],
      ],

      heredoc: [
        [/^\s*[A-Za-z_][\w]*\s*$/, {
          cases: {
            "$0==$S2": { token: "string.heredoc.delimiter", next: "@pop" },
            "@default": "string",
          },
        }],
        [/./, "string"],
      ],
    },
  });
};