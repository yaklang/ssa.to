import React, { useEffect, useState } from "react";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import { yakLang } from "./yakLang.js";
import { syntaxflowLang } from "./syntaxflowLang.js";
import { defineMonacoTheme } from "./monacoCustomTheme.js";
import { useResizeDetector } from "react-resize-detector";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useColorMode } from "@docusaurus/theme-common";

interface SSAEditorProps {
  value: string;
  onSetValue: (value: string) => void;
  language?: string;
  readOnly?: boolean;
  wordWrap?: boolean;
  editorOptions?: monacoEditor.editor.IStandaloneEditorConstructionOptions;
}
const SSAEditor: React.FC<SSAEditorProps> = (props) => {
  const {
    value: editorVal,
    onSetValue,
    language = "javascript",
    readOnly = false,
    wordWrap = true,
    editorOptions,
  } = props;
  const { colorMode, setColorMode } = useColorMode();
  const [editor, setEditor] =
    useState<monacoEditor.editor.IStandaloneCodeEditor>();

  // 编辑器尺寸自动调整
  const {
    width: editorWidth = 0,
    height: editorHeight = 0,
    ref: editorContainerRef,
  } = useResizeDetector({ refreshMode: "throttle", refreshRate: 30 });
  useEffect(() => {
    if (editor) {
      editor.layout({ height: editorHeight, width: editorWidth });
    }
  }, [editor, editorWidth, editorHeight]);

  useEffect(() => {
    if (editor) {
      const model = editor.getModel();
      if (!model) {
        return;
      }

      const disposable = model.onDidChangeContent(() => {});

      return () => {
        disposable.dispose();
      };
    }
  }, [editor]);

  const editorDidMount = (
    editor: monacoEditor.editor.IStandaloneCodeEditor,
    monaco: typeof monacoEditor
  ) => {
    setEditor(editor);

    // 自定义主题
    defineMonacoTheme(monaco);

    // yak语言高亮
    yakLang(monaco);
    syntaxflowLang(monaco);

    // 阻止浏览器默认的右键菜单
    // editor.getContainerDomNode().addEventListener("contextmenu", (event) => {
    //   event.preventDefault();
    // });
  };

  return (
    <BrowserOnly fallback={<div>Loading editor...</div>}>
      {() => {
        require("monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js");
        require("monaco-editor/esm/vs/basic-languages/java/java.contribution.js");
        require("monaco-editor/esm/vs/basic-languages/php/php.contribution.js");
        require("monaco-editor/esm/vs/basic-languages/go/go.contribution.js");
        const MonacoEditor = require("react-monaco-editor").default;

        return (
          <div
            ref={editorContainerRef}
            style={{ height: "100%", width: "100%" }}
          >
            <MonacoEditor
              language={language}
              theme={colorMode === "dark" ? "vs-dark" : "kurior"} // 设置主题为 'kurior'
              value={editorVal}
              options={{
                selectOnLineNumbers: false, // 在行号上点击时选中行
                automaticLayout: true, // 自动布局
                readOnly: readOnly,
                fontWeight: "500",
                fontSize: 12,
                showFoldingControls: "always",
                showUnused: true,
                wordWrap: wordWrap ? "on" : "off",
                renderLineHighlight: "line",
                lineNumbers: "on",
                renderWhitespace: "all",
                bracketPairColorization: {
                  enabled: true,
                  independentColorPoolPerBracketType: true,
                },
                fixedOverflowWidgets: true,
                contextmenu: true,
                ...editorOptions,
              }}
              onChange={onSetValue}
              editorDidMount={editorDidMount}
            />
          </div>
        );
      }}
    </BrowserOnly>
  );
};

export default SSAEditor;
