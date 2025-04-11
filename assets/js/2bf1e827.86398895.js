"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[7418],{84846:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"deep-dive-into-ssa-dataflow-and-cross-procedure","title":"\u7b2c\u516d\u7ae0\uff1aSSA \u6570\u636e\u6d41\u4e0e\u8de8\u8fc7\u7a0b\u5206\u6790","description":"\u5728\u5bf9\u95ed\u5305\u548c OOP \u7684\u8ba8\u8bba\u7ed3\u675f\u540e\uff0c\u6211\u4eec\u57fa\u672c\u53ef\u4ee5\u77e5\u9053\u73b0\u4ee3\u7f16\u7a0b\u8bed\u8a00\u7684\u5927\u90e8\u5206\u8bed\u6cd5\u548c\u7279\u6027\u90fd\u662f\u53ef\u4ee5\u7528 SSA \u6765\u8868\u793a\u7684\u3002\u524d\u9762\u7684\u6240\u6709\u5185\u5bb9\u5171\u540c\u6784\u6210\u4e86\u6211\u4eec\u540e\u7eed\u8ba8\u8bba\u7684\u57fa\u7840\u3002","source":"@site/static-analysis-guide/deep-dive-into-ssa-dataflow-and-cross-procedure.mdx","sourceDirName":".","slug":"/deep-dive-into-ssa-dataflow-and-cross-procedure","permalink":"/static-analysis-guide/deep-dive-into-ssa-dataflow-and-cross-procedure","draft":false,"unlisted":false,"editUrl":"https://github.com/yaklang/ssa.to/tree/main/static-analysis-guide/static-analysis-guide/deep-dive-into-ssa-dataflow-and-cross-procedure.mdx","tags":[],"version":"current","lastUpdatedBy":"wlz","lastUpdatedAt":1744358145000,"frontMatter":{},"sidebar":"staticAnalysisGuideSidebar","previous":{"title":"\u7b2c\u4e94\u7ae0\uff1aSSA \u4e2d\u7684 OOP \u5b9e\u73b0\uff1a\u65e0\u7c7b\u7cfb\u7edf\u4e0e\u539f\u578b\u59d4\u6258","permalink":"/static-analysis-guide/deep-dive-into-ssa-oop"},"next":{"title":"\u7b2c\u516b\u7ae0\uff1a\u63a7\u5236\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb\u4e0e SSA Phi \u6307\u4ee4","permalink":"/static-analysis-guide/deep-dive-cfg"}}');var l=s(74848),d=s(28453),r=s(14252),t=s(97015);const a={},c="\u7b2c\u516d\u7ae0\uff1aSSA \u6570\u636e\u6d41\u4e0e\u8de8\u8fc7\u7a0b\u5206\u6790",o={},x=[{value:"\u6570\u636e\u6d41\u57fa\u672c\u6982\u5ff5",id:"\u6570\u636e\u6d41\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u6570\u636e\u6d41\u4e0e\u63a7\u5236\u6d41\u5206\u79bb",id:"\u6570\u636e\u6d41\u4e0e\u63a7\u5236\u6d41\u5206\u79bb",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:4},{value:"\u6570\u636e\u6d41\u4e0e UD(DU) \u94fe",id:"\u6570\u636e\u6d41\u4e0e-uddu-\u94fe",level:3},{value:"\u5b9a\u4e49\u8de8\u8fc7\u7a0b\u5206\u6790",id:"\u5b9a\u4e49\u8de8\u8fc7\u7a0b\u5206\u6790",level:3},{value:"\u6570\u636e\u6d41\u7684\u8de8\u8fc7\u7a0b\u5206\u6790",id:"\u6570\u636e\u6d41\u7684\u8de8\u8fc7\u7a0b\u5206\u6790",level:2},{value:"\u57fa\u7840\u8bdd\u9898\uff1a\u901a\u8fc7\u51fd\u6570\u8c03\u7528\u8de8\u8fc7\u7a0b",id:"\u57fa\u7840\u8bdd\u9898\u901a\u8fc7\u51fd\u6570\u8c03\u7528\u8de8\u8fc7\u7a0b",level:3},{value:"\u8fdb\u9636\u8bdd\u9898\uff1a\u901a\u8fc7\u95ed\u5305\u8de8\u8fc7\u7a0b",id:"\u8fdb\u9636\u8bdd\u9898\u901a\u8fc7\u95ed\u5305\u8de8\u8fc7\u7a0b",level:3},{value:"\u8fdb\u9636\u8bdd\u9898\uff1a\u5e7f\u4e49\u8de8\u8fc7\u7a0b\u5b9a\u4e49",id:"\u8fdb\u9636\u8bdd\u9898\u5e7f\u4e49\u8de8\u8fc7\u7a0b\u5b9a\u4e49",level:3},{value:"\u904d\u5386\u6570\u636e\u6d41",id:"\u904d\u5386\u6570\u636e\u6d41",level:2},{value:"UD(DU) \u94fe\u4e0e\u5206\u6790\u65b9\u5411",id:"uddu-\u94fe\u4e0e\u5206\u6790\u65b9\u5411",level:3},{value:"\u81ea\u9876\u5411\u4e0b\uff1a\u4ece\u5b9a\u4e49(Def)\u5230\u4f7f\u7528(Use)",id:"\u81ea\u9876\u5411\u4e0b\u4ece\u5b9a\u4e49def\u5230\u4f7f\u7528use",level:3},{value:"\u81ea\u5e95\u5411\u4e0a\uff1a\u4ece\u4f7f\u7528(Use)\u5230\u5b9a\u4e49(Def)",id:"\u81ea\u5e95\u5411\u4e0a\u4ece\u4f7f\u7528use\u5230\u5b9a\u4e49def",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u7b2c\u516d\u7ae0ssa-\u6570\u636e\u6d41\u4e0e\u8de8\u8fc7\u7a0b\u5206\u6790",children:"\u7b2c\u516d\u7ae0\uff1aSSA \u6570\u636e\u6d41\u4e0e\u8de8\u8fc7\u7a0b\u5206\u6790"})}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u5bf9\u95ed\u5305\u548c OOP \u7684\u8ba8\u8bba\u7ed3\u675f\u540e\uff0c\u6211\u4eec\u57fa\u672c\u53ef\u4ee5\u77e5\u9053\u73b0\u4ee3\u7f16\u7a0b\u8bed\u8a00\u7684\u5927\u90e8\u5206\u8bed\u6cd5\u548c\u7279\u6027\u90fd\u662f\u53ef\u4ee5\u7528 SSA \u6765\u8868\u793a\u7684\u3002\u524d\u9762\u7684\u6240\u6709\u5185\u5bb9\u5171\u540c\u6784\u6210\u4e86\u6211\u4eec\u540e\u7eed\u8ba8\u8bba\u7684\u57fa\u7840\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u90a3\u4e48\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u4f1a\u8fdb\u4e00\u6b65\u8ba8\u8bba\u9759\u6001\u5206\u6790\u5728 SSA \u89c6\u89d2\u4e0b\u5c06\u4f1a\u53d8\u7684\u591a\u7b80\u5355\u3002"}),"\n",(0,l.jsxs)(n.admonition,{title:"\u672c\u7ae0\u76ee\u6807",type:"tip",children:[(0,l.jsx)(n.p,{children:"\u57fa\u672c\u4e86\u89e3 SSA \u89c6\u89d2\u4e0b\u7684\u6570\u636e\u6d41\u5206\u6790\u548c\u8de8\u8fc7\u7a0b\u5206\u6790\u3002"}),(0,l.jsx)(n.p,{children:"\u77e5\u9053 Yak SSA \u7cfb\u7edf\u662f\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u6d41\u5206\u6790\u548c\u8de8\u8fc7\u7a0b\u5206\u6790\uff0c\u4ed6\u4eec\u7684\u8868\u73b0\u5982\u4f55\u3002"})]}),"\n","\n",(0,l.jsx)(r.A,{toc:x}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u6570\u636e\u6d41\u57fa\u672c\u6982\u5ff5",children:"\u6570\u636e\u6d41\u57fa\u672c\u6982\u5ff5"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u672c\u7ae0\u5f00\u59cb\uff0c\u6211\u4eec\u9700\u8981\u91cd\u6e29\u9759\u6001\u5206\u6790\u4e2d\u7684\u4e24\u4e2a\u91cd\u8981\u4e14\u4ee4\u4eba\u5934\u75bc\u7684\u8bdd\u9898\uff0c\u6570\u636e\u6d41\u548c\u8de8\u8fc7\u7a0b\u5206\u6790\u3002\u5e76\u4e14\u7ed3\u5408\u6211\u4eec\u524d\u9762\u8ba8\u8bba\u7684 SSA \u7cfb\u7edf\uff0c\u6765\u8ba8\u8bba\u8fd9\u4e24\u4e2a\u8bdd\u9898\u3002\u8bfb\u8005\u53ef\u4ee5\u5f88\u5bb9\u6613\u53d1\u73b0\u8fd9\u4e24\u4e2a\u8bdd\u9898\u5728 SSA \u7cfb\u7edf\u5c06\u53d8\u7684\u975e\u5e38\u5177\u8c61\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u6570\u636e\u6d41\u4e0e\u63a7\u5236\u6d41\u5206\u79bb",children:"\u6570\u636e\u6d41\u4e0e\u63a7\u5236\u6d41\u5206\u79bb"}),"\n",(0,l.jsx)(n.h4,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"}),"\n",(0,l.jsx)(n.p,{children:"\u9996\u5148\u662f\u6570\u636e\u6d41\u4e0e\u63a7\u5236\u6d41\u95ee\u9898\uff0c\u4e00\u822c\u6765\u8bf4\u6570\u636e\u6d41\u5b9a\u4e49\u4e3a\u53d8\u91cf\u548c\u6570\u636e\u4f9d\u8d56\u8fb9\u7684\u7ec4\u5408\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6570\u636e\u6d41(Data Flow)"}),": \u63cf\u8ff0\u6570\u636e\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u6d41\u52a8\u548c\u8f6c\u6362"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u53ef\u4ee5\u8868\u793a\u4e3a: ",(0,l.jsx)(t.GP,{math:"DF = (V, E)"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5176\u4e2d ",(0,l.jsx)(t.GP,{math:"V"})," \u662f\u53d8\u91cf\u96c6\u5408"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(t.GP,{math:"E"})," \u662f\u6570\u636e\u4f9d\u8d56\u8fb9\u96c6\u5408"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u63a7\u5236\u6d41(Control Flow)"}),": \u63cf\u8ff0\u7a0b\u5e8f\u6267\u884c\u7684\u8def\u5f84\u548c\u987a\u5e8f"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u53ef\u4ee5\u8868\u793a\u4e3a: ",(0,l.jsx)(t.GP,{math:"CF = (B, T)"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5176\u4e2d ",(0,l.jsx)(t.GP,{math:"B"})," \u662f\u57fa\u672c\u5757\u96c6\u5408"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(t.GP,{math:"T"})," \u662f\u8f6c\u79fb\u8fb9\u96c6\u5408"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u4e0a\u8ff0\u6848\u4f8b\u7ed3\u5408\u4e0b\u9762\u4ee3\u7801\u5927\u5bb6\u53ef\u4ee5\u66f4\u5bb9\u6613\u7406\u89e3\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-go",children:"a = 1;\nb = a + 1;\nc = b + 1;\nif (a > 1) {\n    c = c + 1;\n}\ne = a + b;\nf = e + c;\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6211\u4eec\u628a\u4e0a\u8ff0\u4ee3\u7801\u6848\u4f8b\u5236\u4f5c\u4e00\u4e2a\u6d41\u7a0b\u56fe\uff0c\u6765\u540c\u65f6\u5305\u542b\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\uff0c\u4e5f\u6700\u63a5\u8fd1\u4eba\u7c7b\u7406\u89e3\u7684\u4ee3\u7801\u6267\u884c\u6d41\u7a0b\u3002"}),"\n",(0,l.jsx)(n.mermaid,{value:'graph LR\n  A[a = 1] --\x3e B[b = a + 1]\n  B --\x3e C[c = b + 1]\n  C --\x3e D{"if (a > 1)"}\n  D --\x3e|true| E[c = c + 1]\n  D --\x3e|false| F[e = a + b]\n  E --\x3e F\n  F --\x3e G[f = e + c]\n  \n  %% Data flow edges (using different style)\n  A -.->|a| B\n  A -.->|a| D\n  A -.->|a| F\n  B -.->|b| C\n  B -.->|b| F\n  C -.->|c| E\n  C -.->|c| G\n  E -.->|c| G\n  F -.->|e| G\n  \n  classDef control fill:#f9f,stroke:#333,stroke-width:2px\n  classDef data fill:#bbf,stroke:#333,stroke-width:2px\n  class A,B,C,D,E,F,G control'}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u56fe\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\uff0c\u6570\u636e\u6d41\u548c\u63a7\u5236\u6d41\u662f\u6df7\u5408\u5728\u4e00\u8d77\u7684\uff0c\u901a\u8fc7\u68f1\u578b\u6765\u533a\u5206 ",(0,l.jsx)(n.code,{children:"IF"})," \u5206\u652f\u3002"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5b9e\u7ebf\u8868\u793a\u63a7\u5236\u6d41"}),"\n",(0,l.jsx)(n.li,{children:"\u865a\u7ebf\u8868\u793a\u6570\u636e\u6d41\uff08\u53d8\u91cf\u4e4b\u95f4\u76f4\u63a5\u8fde\u63a5\uff09"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c1d\u8bd5\u5206\u79bb\u4e0a\u8ff0\u56fe\u4e2d\u7684\u6570\u636e\u6d41\u548c\u63a7\u5236\u6d41\uff0c\u628a\u5b83\u5206\u6210\u4e24\u4e2a\u56fe\u3002"}),"\n",(0,l.jsx)(n.mermaid,{value:'graph BT\n  subgraph \u63a7\u5236\u6d41 Control Flow\n      B1["Block1\n      a = 1\n      b = a + 1\n      c = b + 1"] --\x3e D1{if a > 1}\n      D1 --\x3e|true| E1["Block2\n      c = c + 1"]\n      D1 --\x3e|false| F1["Block3\n      e = a + b\n      f = e + c"]\n      E1 --\x3e F1\n  end\n  \n  subgraph \u6570\u636e\u6d41 Data Flow\n      A2[a] --\x3e B2[b]\n      B2 --\x3e C2[c]\n      C2 --\x3e E2[c\']\n      A2 --\x3e F2[e]\n      B2 --\x3e F2\n      E2 --\x3e G2[f]\n      C2 --\x3e G2\n      F2 --\x3e G2\n  end\n  \n  classDef control fill:#f9f,stroke:#333,stroke-width:2px\n  classDef data fill:#bbf,stroke:#333,stroke-width:2px\n  class B1,D1,E1,F1 control\n  class A2,B2,C2,D2,E2,F2,G2 data'}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u7528\u6237\u9605\u8bfb\u5b8c\u5206\u79bb\u56fe\u4e4b\u540e\uff1a"}),"\n",(0,l.jsx)(n.admonition,{title:"\u63a7\u5236\u6d41\u4e0e\u6570\u636e\u6d41\u7684\u533a\u522b",type:"note",children:(0,l.jsx)(n.p,{children:'\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\u662f\u7a0b\u5e8f\u5206\u6790\u4e2d\u4e24\u4e2a\u57fa\u672c\u4f46\u622a\u7136\u4e0d\u540c\u7684\u6982\u5ff5\u3002\u5b83\u4eec\u5206\u522b\u63cf\u8ff0\u4e86\u7a0b\u5e8f\u7684\u4e0d\u540c\u65b9\u9762\uff1a\u63a7\u5236\u6d41\u5173\u6ce8"\u7a0b\u5e8f\u6267\u884c\u7684\u8def\u5f84"\uff0c\u800c\u6570\u636e\u6d41\u5173\u6ce8"\u6570\u636e\u7684\u4f20\u64ad\u548c\u8f6c\u6362"\u3002'})}),"\n",(0,l.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u4ece\u5f62\u5f0f\u5316\u7684\u89d2\u5ea6\u6765\u8be6\u7ec6\u89e3\u91ca\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u63a7\u5236\u6d41\u56fe (Control Flow Graph, CFG)"})}),"\n"]}),"\n",(0,l.jsx)(t.OO,{math:"\nCFG = (B, T) \\\\\n\u5176\u4e2d\uff1a\\\\\nB = \\{b_1, b_2, ..., b_n\\} \\text{ \u662f\u57fa\u672c\u5757\u7684\u96c6\u5408} \\\\\nT \\subseteq B \\times B \\text{ \u662f\u57fa\u672c\u5757\u4e4b\u95f4\u7684\u8f6c\u79fb\u8fb9\u96c6\u5408}\n"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u793a\u4f8b\u4ee3\u7801\u4e2d\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(t.GP,{math:"b_1"})," \u5305\u542b\u4e86 ",(0,l.jsx)(n.code,{children:"a = 1; b = a + 1; c = b + 1"})," \u8fd9\u4e9b\u987a\u5e8f\u6267\u884c\u7684\u8bed\u53e5"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(t.GP,{math:"b_2"})," \u5305\u542b\u4e86 ",(0,l.jsx)(n.code,{children:"c = c + 1"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(t.GP,{math:"b_3"})," \u5305\u542b\u4e86 ",(0,l.jsx)(n.code,{children:"e = a + b; f = e + c"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u8f6c\u79fb\u8fb9 ",(0,l.jsx)(t.GP,{math:"T"})," \u5305\u542b\u4e86\u6761\u4ef6\u8df3\u8f6c\u548c\u987a\u5e8f\u6267\u884c\u7684\u8fb9"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u6570\u636e\u6d41\u56fe (Data Flow Graph, DFG)"})}),"\n"]}),"\n",(0,l.jsx)(t.OO,{math:"\nDFG = (V, E) \\\\\n\u5176\u4e2d\uff1a\\\\\nV = \\{v_1, v_2, ..., v_m\\} \\text{ \u662f\u53d8\u91cf\u7684\u96c6\u5408} \\\\\nE \\subseteq V \\times V \\text{ \u662f\u6570\u636e\u4f9d\u8d56\u8fb9\u7684\u96c6\u5408}\n"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u793a\u4f8b\u4ee3\u7801\u4e2d\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(t.GP,{math:"V"})," \u5305\u542b\u4e86\u53d8\u91cf ",(0,l.jsx)(n.code,{children:"{a, b, c, e, f}"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u6570\u636e\u4f9d\u8d56\u8fb9 ",(0,l.jsx)(t.GP,{math:"E"})," \u8868\u793a\u53d8\u91cf\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5982 ",(0,l.jsx)(n.code,{children:"a \u2192 b"})," \u8868\u793a ",(0,l.jsx)(n.code,{children:"b"})," \u7684\u8ba1\u7b97\u4f9d\u8d56\u4e8e ",(0,l.jsx)(n.code,{children:"a"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u89c2\u5bdf\u5230\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u53d8\u91cf ",(0,l.jsx)(n.code,{children:"c"})," \u5728\u63a7\u5236\u6d41\u7684\u4e0d\u540c\u8def\u5f84\u4e0a\u6709\u4e0d\u540c\u7684\u5b9a\u503c\uff08",(0,l.jsx)(n.code,{children:"c = b + 1"})," \u548c ",(0,l.jsx)(n.code,{children:"c = c + 1"}),"\uff09"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6700\u7ec8\u7684\u53d8\u91cf ",(0,l.jsx)(n.code,{children:"f"})," \u4f9d\u8d56\u4e8e\u591a\u4e2a\u53d8\u91cf\uff08",(0,l.jsx)(n.code,{children:"a"}),"\u3001",(0,l.jsx)(n.code,{children:"b"}),"\u3001",(0,l.jsx)(n.code,{children:"c"}),"\u3001",(0,l.jsx)(n.code,{children:"e"}),"\uff09\u7684\u503c"]}),"\n",(0,l.jsxs)(n.li,{children:["\u63a7\u5236\u6d41\u51b3\u5b9a\u4e86 ",(0,l.jsx)(n.code,{children:"c"})," \u7684\u5b9e\u9645\u503c\uff0c\u8fdb\u800c\u5f71\u54cd\u5230 ",(0,l.jsx)(n.code,{children:"f"})," \u7684\u8ba1\u7b97\u7ed3\u679c"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u79cd\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\u7684\u4ea4\u7ec7\u5173\u7cfb\uff0c\u6b63\u662f\u540e\u7eed\u6211\u4eec\u8981\u8ba8\u8bba\u7684 SSA \u91cd\u8981\u8bdd\u9898\u3002"}),"\n",(0,l.jsxs)(n.admonition,{title:"\u91cd\u8981\u63d0\u793a",type:"danger",children:[(0,l.jsx)(n.p,{children:"\u5728\u5f88\u591a\u4e0d\u719f\u6089\u9759\u6001\u4ee3\u7801\u5206\u6790\u7684\u8bfb\u8005\u773c\u91cc\uff0c\u4ed6\u5176\u5b9e\u5e76\u4e0d\u77e5\u9053\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\u662f\u4e24\u4e2a\u5b8c\u5168\u4e0d\u540c\u7684\u6982\u5ff5\uff0c\u800c\u662f\u4e60\u60ef\u6027\u7684\u628a\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\u6df7\u4e3a\u4e00\u8c08\u3002"}),(0,l.jsx)(n.p,{children:"\u5f53\u7136\u4e5f\u5e76\u4e0d\u662f\u8bf4\u5fc5\u987b\u53bb\u5206\u79bb\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\uff0c\u6bd5\u7adf\u5728 \u201c\u4ee3\u7801\u5c5e\u6027\u56fe\u201d \u6216 \u201c\u8282\u70b9\u4e4b\u6d77\u201d \u4e2d\uff0c\u63a7\u5236\u5173\u7cfb\u548c\u6570\u636e\u5173\u7cfb\u53c8\u88ab\u653e\u5728\u4e86\u4e00\u8d77\u3002"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u6570\u636e\u6d41\u4e0e-uddu-\u94fe",children:"\u6570\u636e\u6d41\u4e0e UD(DU) \u94fe"}),"\n",(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.p,{children:"\u7531\u4e8e\u672c\u7ae0\u4e3b\u8981\u8ba8\u8bba\u6570\u636e\u4f9d\u8d56\u76f8\u5173\u5185\u5bb9\uff0c\u6240\u4ee5\u5173\u4e8e\u63a7\u5236\u6d41\u7684\u8ba8\u8bba\uff0c\u6211\u4eec\u5c31\u6682\u65f6\u4e0d\u5728\u8fd9\u91cc\u7ee7\u7eed\u6df1\u5165\u4e86\u3002"}),(0,l.jsx)(n.p,{children:"\u5728\u63a7\u5236\u6d41\u4e2d\uff0c\u6211\u4eec\u4e00\u822c\u8ba8\u8bba\u652f\u914d\u5173\u7cfb\uff0c\u4f46\u662f\u5728\u6570\u636e\u6d41\u4e2d\uff0c\u5e76\u4e0d\u9002\u5408\u5957\u7528\u652f\u914d\u7684\u6982\u5ff5\uff0c\u4e00\u822c\u8ba8\u8bba SSA \u5f62\u5f0f\u4e0b\u7684\u4f7f\u7528-\u5b9a\u4e49\u94fe\uff08Use-Def Chain\uff09\u540e\u9762\u7edf\u79f0\u4e3a Use-Def \u94fe\u3002"}),(0,l.jsx)(n.admonition,{title:"\u4f7f\u7528-\u5b9a\u4e49\u94fe",type:"tip",children:(0,l.jsx)(n.p,{children:"\u4f7f\u7528-\u5b9a\u4e49\u94fe\uff08Use-Def Chain\uff09\uff0c\u7b80\u79f0 UD \u94fe\uff0c\u662f SSA \u5f62\u5f0f\u4e0b\uff0c\u53d8\u91cf\u4f7f\u7528\u70b9\u548c\u5176\u5b9a\u4e49\u70b9\u4e4b\u95f4\u7684\u8fde\u63a5\u5173\u7cfb\u3002"})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u5b9a\u4e49\u8de8\u8fc7\u7a0b\u5206\u6790",children:"\u5b9a\u4e49\u8de8\u8fc7\u7a0b\u5206\u6790"}),"\n",(0,l.jsx)(n.h2,{id:"\u6570\u636e\u6d41\u7684\u8de8\u8fc7\u7a0b\u5206\u6790",children:"\u6570\u636e\u6d41\u7684\u8de8\u8fc7\u7a0b\u5206\u6790"}),"\n",(0,l.jsx)(n.h3,{id:"\u57fa\u7840\u8bdd\u9898\u901a\u8fc7\u51fd\u6570\u8c03\u7528\u8de8\u8fc7\u7a0b",children:"\u57fa\u7840\u8bdd\u9898\uff1a\u901a\u8fc7\u51fd\u6570\u8c03\u7528\u8de8\u8fc7\u7a0b"}),"\n",(0,l.jsx)(n.h3,{id:"\u8fdb\u9636\u8bdd\u9898\u901a\u8fc7\u95ed\u5305\u8de8\u8fc7\u7a0b",children:"\u8fdb\u9636\u8bdd\u9898\uff1a\u901a\u8fc7\u95ed\u5305\u8de8\u8fc7\u7a0b"}),"\n",(0,l.jsx)(n.h3,{id:"\u8fdb\u9636\u8bdd\u9898\u5e7f\u4e49\u8de8\u8fc7\u7a0b\u5b9a\u4e49",children:"\u8fdb\u9636\u8bdd\u9898\uff1a\u5e7f\u4e49\u8de8\u8fc7\u7a0b\u5b9a\u4e49"}),"\n",(0,l.jsx)(n.h2,{id:"\u904d\u5386\u6570\u636e\u6d41",children:"\u904d\u5386\u6570\u636e\u6d41"}),"\n",(0,l.jsx)(n.h3,{id:"uddu-\u94fe\u4e0e\u5206\u6790\u65b9\u5411",children:"UD(DU) \u94fe\u4e0e\u5206\u6790\u65b9\u5411"}),"\n",(0,l.jsx)(n.h3,{id:"\u81ea\u9876\u5411\u4e0b\u4ece\u5b9a\u4e49def\u5230\u4f7f\u7528use",children:"\u81ea\u9876\u5411\u4e0b\uff1a\u4ece\u5b9a\u4e49(Def)\u5230\u4f7f\u7528(Use)"}),"\n",(0,l.jsx)(n.h3,{id:"\u81ea\u5e95\u5411\u4e0a\u4ece\u4f7f\u7528use\u5230\u5b9a\u4e49def",children:"\u81ea\u5e95\u5411\u4e0a\uff1a\u4ece\u4f7f\u7528(Use)\u5230\u5b9a\u4e49(Def)"})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},97015:(e,n,s)=>{s.d(n,{Ay:()=>o,GP:()=>x,OO:()=>h});var i=s(96540),l=s(22130),d=s(20354),r=s.n(d),t=s(74848);const a={throwOnError:!1,strict:!1,trust:!1,macros:{"\\RR":"\\mathbb{R}","\\NN":"\\mathbb{N}","\\ZZ":"\\mathbb{Z}"}},c=e=>{let{math:n,inline:s=!1,onError:d,options:c={},className:o=""}=e;const x=(0,i.useRef)(null),[h,p]=(0,i.useState)(!1),[j,u]=(0,i.useState)(!1),[f,b]=(0,i.useState)(!1),[m,g]=(0,i.useState)(!1),[v,S]=(0,i.useState)({message:"",visible:!1});(0,i.useEffect)((()=>{if(x.current)try{l.default.render(n,x.current,{...a,...c,displayMode:!s})}catch(e){d?d(e):(console.error("KaTeX Error:",e),x.current&&(x.current.textContent=n))}}),[n,s,c,d]);const y=e=>{S({message:e,visible:!0}),setTimeout((()=>{S({message:"",visible:!1})}),2e3)};return(0,t.jsxs)("div",{className:"katex-wrapper "+(h?"hovered":""),onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),style:{position:"relative",padding:s?"4px":"8px",margin:s?"0":"0 8px",border:h?"2px solid #4a90e2":"1px solid transparent",borderRadius:"4px",display:s?"inline-block":"block",transition:"all 0.3s ease",boxShadow:h?"0 0 8px rgba(74, 144, 226, 0.3)":"none"},children:[v.visible&&(0,t.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0, 0, 0, 0.7)",color:"#fff",padding:"8px 16px",borderRadius:"4px",fontSize:"14px",zIndex:1e3,pointerEvents:"none"},children:v.message}),h&&(0,t.jsxs)("div",{style:{position:"absolute",top:"4px",right:"4px",display:"flex",gap:"8px",zIndex:1},children:[(0,t.jsx)("button",{onClick:async()=>{x.current&&(g(!0),setTimeout((async()=>{try{const e=document.createElement("div");e.style.padding="12px 0";const n=x.current?.cloneNode(!0);if(!n)throw new Error("\u65e0\u6cd5\u514b\u9686\u8282\u70b9");e.appendChild(n),document.body.appendChild(e);const s=await r()(e,{backgroundColor:null,scale:2});document.body.removeChild(e),s.toBlob((async e=>{if(e)try{await navigator.clipboard.write([new ClipboardItem({"image/png":e})]),b(!0),y("\u56fe\u7247\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f"),setTimeout((()=>{b(!1)}),2e3)}catch(n){console.error("\u590d\u5236\u56fe\u7247\u5931\u8d25:",n),y("\u590d\u5236\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}}),"image/png")}catch(e){console.error("\u751f\u6210\u56fe\u7247\u5931\u8d25:",e),y("\u751f\u6210\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}finally{g(!1)}}),500))},disabled:m,style:{padding:"4px 12px",background:f?"#52c41a":m?"#d9d9d9":"#f5f5f5",border:"1px solid "+(f?"#52c41a":m?"#d9d9d9":"#e0e0e0"),borderRadius:"4px",cursor:m?"not-allowed":"pointer",fontSize:"12px",color:f?"#fff":m?"#999":"#666",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"4px",opacity:m?.7:1},children:f?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{style:{fontSize:"14px"},children:"\u2713"}),"\u5df2\u590d\u5236\u56fe\u7247"]}):m?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{style:{display:"inline-block",animation:"spin 1s linear infinite"},children:"\u27f3"}),"\u5bfc\u51fa\u4e2d..."]}):"\u590d\u5236\u4e3a\u56fe\u7247"}),(0,t.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(n),u(!0),setTimeout((()=>{u(!1)}),2e3)},style:{padding:"4px 12px",background:j?"#52c41a":"#f5f5f5",border:"1px solid "+(j?"#52c41a":"#e0e0e0"),borderRadius:"4px",cursor:"pointer",fontSize:"12px",color:j?"#fff":"#666",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"4px"},children:j?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{style:{fontSize:"14px"},children:"\u2713"}),"\u5df2\u590d\u5236"]}):"\u590d\u5236"})]}),(0,t.jsx)("div",{ref:x,className:`katex-container ${s?"inline":"block"} ${o}`})]})},o=c,x=e=>(0,t.jsx)(c,{...e,inline:!0}),h=e=>(0,t.jsx)(c,{...e,inline:!1})}}]);