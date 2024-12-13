"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[7418],{84846:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>x,default:()=>j,frontMatter:()=>t,metadata:()=>d,toc:()=>h});const d=JSON.parse('{"id":"deep-dive-into-ssa-dataflow-and-cross-procedure","title":"\u7b2c\u516d\u7ae0\uff1aSSA \u6570\u636e\u6d41\u4e0e\u8de8\u8fc7\u7a0b\u5206\u6790","description":"\u5728\u5bf9\u95ed\u5305\u548c OOP \u7684\u8ba8\u8bba\u7ed3\u675f\u540e\uff0c\u6211\u4eec\u57fa\u672c\u53ef\u4ee5\u77e5\u9053\u73b0\u4ee3\u7f16\u7a0b\u8bed\u8a00\u7684\u5927\u90e8\u5206\u8bed\u6cd5\u548c\u7279\u6027\u90fd\u662f\u53ef\u4ee5\u7528 SSA \u6765\u8868\u793a\u7684\u3002\u524d\u9762\u7684\u6240\u6709\u5185\u5bb9\u5171\u540c\u6784\u6210\u4e86\u6211\u4eec\u540e\u7eed\u8ba8\u8bba\u7684\u57fa\u7840\u3002","source":"@site/static-analysis-guide/deep-dive-into-ssa-dataflow-and-cross-procedure.mdx","sourceDirName":".","slug":"/deep-dive-into-ssa-dataflow-and-cross-procedure","permalink":"/static-analysis-guide/deep-dive-into-ssa-dataflow-and-cross-procedure","draft":false,"unlisted":false,"editUrl":"https://github.com/yaklang/ssa.to/tree/main/static-analysis-guide/static-analysis-guide/deep-dive-into-ssa-dataflow-and-cross-procedure.mdx","tags":[],"version":"current","lastUpdatedBy":"v1ll4n","lastUpdatedAt":1734071536000,"frontMatter":{},"sidebar":"staticAnalysisGuideSidebar","previous":{"title":"\u7b2c\u4e94\u7ae0\uff1aSSA \u6df1\u6c34\u533a - OOP\u4e0e\u65e0\u7c7b","permalink":"/static-analysis-guide/deep-dive-into-ssa-oop"}}');var i=s(74848),l=s(28453),r=s(14252),c=s(97015);const t={},x="\u7b2c\u516d\u7ae0\uff1aSSA \u6570\u636e\u6d41\u4e0e\u8de8\u8fc7\u7a0b\u5206\u6790",a={},h=[{value:"\u6570\u636e\u6d41\u57fa\u672c\u6982\u5ff5",id:"\u6570\u636e\u6d41\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u6570\u636e\u6d41\u4e0e\u63a7\u5236\u6d41\u5206\u79bb",id:"\u6570\u636e\u6d41\u4e0e\u63a7\u5236\u6d41\u5206\u79bb",level:3},{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:4},{value:"\u6570\u636e\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb",id:"\u6570\u636e\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb",level:3},{value:"\u6570\u636e\u8282\u70b9\uff08\u53d8\u91cf\uff09\u652f\u914d\u8fb9\u754c",id:"\u6570\u636e\u8282\u70b9\u53d8\u91cf\u652f\u914d\u8fb9\u754c",level:3},{value:"\u6570\u636e\u6d41\u4e0e UD(DU) \u94fe",id:"\u6570\u636e\u6d41\u4e0e-uddu-\u94fe",level:3},{value:"\u5b9a\u4e49\u8de8\u8fc7\u7a0b\u5206\u6790",id:"\u5b9a\u4e49\u8de8\u8fc7\u7a0b\u5206\u6790",level:3},{value:"\u6570\u636e\u6d41\u7684\u8de8\u8fc7\u7a0b\u5206\u6790",id:"\u6570\u636e\u6d41\u7684\u8de8\u8fc7\u7a0b\u5206\u6790",level:2},{value:"\u57fa\u7840\u8bdd\u9898\uff1a\u901a\u8fc7\u51fd\u6570\u8c03\u7528\u8de8\u8fc7\u7a0b",id:"\u57fa\u7840\u8bdd\u9898\u901a\u8fc7\u51fd\u6570\u8c03\u7528\u8de8\u8fc7\u7a0b",level:3},{value:"\u8fdb\u9636\u8bdd\u9898\uff1a\u901a\u8fc7\u95ed\u5305\u8de8\u8fc7\u7a0b",id:"\u8fdb\u9636\u8bdd\u9898\u901a\u8fc7\u95ed\u5305\u8de8\u8fc7\u7a0b",level:3},{value:"\u8fdb\u9636\u8bdd\u9898\uff1a\u5e7f\u4e49\u8de8\u8fc7\u7a0b\u5b9a\u4e49",id:"\u8fdb\u9636\u8bdd\u9898\u5e7f\u4e49\u8de8\u8fc7\u7a0b\u5b9a\u4e49",level:3},{value:"\u904d\u5386\u6570\u636e\u6d41",id:"\u904d\u5386\u6570\u636e\u6d41",level:2},{value:"UD(DU) \u94fe\u4e0e\u5206\u6790\u65b9\u5411",id:"uddu-\u94fe\u4e0e\u5206\u6790\u65b9\u5411",level:3},{value:"\u81ea\u9876\u5411\u4e0b\uff1a\u4ece\u5b9a\u4e49(Def)\u5230\u4f7f\u7528(Use)",id:"\u81ea\u9876\u5411\u4e0b\u4ece\u5b9a\u4e49def\u5230\u4f7f\u7528use",level:3},{value:"\u81ea\u5e95\u5411\u4e0a\uff1a\u4ece\u4f7f\u7528(Use)\u5230\u5b9a\u4e49(Def)",id:"\u81ea\u5e95\u5411\u4e0a\u4ece\u4f7f\u7528use\u5230\u5b9a\u4e49def",level:3}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u7b2c\u516d\u7ae0ssa-\u6570\u636e\u6d41\u4e0e\u8de8\u8fc7\u7a0b\u5206\u6790",children:"\u7b2c\u516d\u7ae0\uff1aSSA \u6570\u636e\u6d41\u4e0e\u8de8\u8fc7\u7a0b\u5206\u6790"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5bf9\u95ed\u5305\u548c OOP \u7684\u8ba8\u8bba\u7ed3\u675f\u540e\uff0c\u6211\u4eec\u57fa\u672c\u53ef\u4ee5\u77e5\u9053\u73b0\u4ee3\u7f16\u7a0b\u8bed\u8a00\u7684\u5927\u90e8\u5206\u8bed\u6cd5\u548c\u7279\u6027\u90fd\u662f\u53ef\u4ee5\u7528 SSA \u6765\u8868\u793a\u7684\u3002\u524d\u9762\u7684\u6240\u6709\u5185\u5bb9\u5171\u540c\u6784\u6210\u4e86\u6211\u4eec\u540e\u7eed\u8ba8\u8bba\u7684\u57fa\u7840\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u90a3\u4e48\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u4f1a\u8fdb\u4e00\u6b65\u8ba8\u8bba\u9759\u6001\u5206\u6790\u5728 SSA \u89c6\u89d2\u4e0b\u5c06\u4f1a\u53d8\u7684\u591a\u7b80\u5355\u3002"}),"\n",(0,i.jsxs)(n.admonition,{title:"\u672c\u7ae0\u76ee\u6807",type:"tip",children:[(0,i.jsx)(n.p,{children:"\u57fa\u672c\u4e86\u89e3 SSA \u89c6\u89d2\u4e0b\u7684\u6570\u636e\u6d41\u5206\u6790\u548c\u8de8\u8fc7\u7a0b\u5206\u6790\u3002"}),(0,i.jsx)(n.p,{children:"\u77e5\u9053 Yak SSA \u7cfb\u7edf\u662f\u5982\u4f55\u5b9e\u73b0\u6570\u636e\u6d41\u5206\u6790\u548c\u8de8\u8fc7\u7a0b\u5206\u6790\uff0c\u4ed6\u4eec\u7684\u8868\u73b0\u5982\u4f55\u3002"})]}),"\n","\n",(0,i.jsx)(r.A,{toc:h}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"\u6570\u636e\u6d41\u57fa\u672c\u6982\u5ff5",children:"\u6570\u636e\u6d41\u57fa\u672c\u6982\u5ff5"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672c\u7ae0\u5f00\u59cb\uff0c\u6211\u4eec\u9700\u8981\u91cd\u6e29\u9759\u6001\u5206\u6790\u4e2d\u7684\u4e24\u4e2a\u91cd\u8981\u4e14\u4ee4\u4eba\u5934\u75bc\u7684\u8bdd\u9898\uff0c\u6570\u636e\u6d41\u548c\u8de8\u8fc7\u7a0b\u5206\u6790\u3002\u5e76\u4e14\u7ed3\u5408\u6211\u4eec\u524d\u9762\u8ba8\u8bba\u7684 SSA \u7cfb\u7edf\uff0c\u6765\u8ba8\u8bba\u8fd9\u4e24\u4e2a\u8bdd\u9898\u3002\u8bfb\u8005\u53ef\u4ee5\u5f88\u5bb9\u6613\u53d1\u73b0\u8fd9\u4e24\u4e2a\u8bdd\u9898\u5728 SSA \u7cfb\u7edf\u5c06\u53d8\u7684\u975e\u5e38\u5177\u8c61\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6570\u636e\u6d41\u4e0e\u63a7\u5236\u6d41\u5206\u79bb",children:"\u6570\u636e\u6d41\u4e0e\u63a7\u5236\u6d41\u5206\u79bb"}),"\n",(0,i.jsx)(n.h4,{id:"\u5b9a\u4e49",children:"\u5b9a\u4e49"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u662f\u6570\u636e\u6d41\u4e0e\u63a7\u5236\u6d41\u95ee\u9898\uff0c\u4e00\u822c\u6765\u8bf4\u6570\u636e\u6d41\u5b9a\u4e49\u4e3a\u53d8\u91cf\u548c\u6570\u636e\u4f9d\u8d56\u8fb9\u7684\u7ec4\u5408\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6570\u636e\u6d41(Data Flow)"}),": \u63cf\u8ff0\u6570\u636e\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u6d41\u52a8\u548c\u8f6c\u6362"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53ef\u4ee5\u8868\u793a\u4e3a: ",(0,i.jsx)(c.GP,{math:"DF = (V, E)"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5176\u4e2d ",(0,i.jsx)(c.GP,{math:"V"})," \u662f\u53d8\u91cf\u96c6\u5408"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"E"})," \u662f\u6570\u636e\u4f9d\u8d56\u8fb9\u96c6\u5408"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u63a7\u5236\u6d41(Control Flow)"}),": \u63cf\u8ff0\u7a0b\u5e8f\u6267\u884c\u7684\u8def\u5f84\u548c\u987a\u5e8f"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53ef\u4ee5\u8868\u793a\u4e3a: ",(0,i.jsx)(c.GP,{math:"CF = (B, T)"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5176\u4e2d ",(0,i.jsx)(c.GP,{math:"B"})," \u662f\u57fa\u672c\u5757\u96c6\u5408"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"T"})," \u662f\u8f6c\u79fb\u8fb9\u96c6\u5408"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u8ff0\u6848\u4f8b\u7ed3\u5408\u4e0b\u9762\u4ee3\u7801\u5927\u5bb6\u53ef\u4ee5\u66f4\u5bb9\u6613\u7406\u89e3\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"a = 1;\nb = a + 1;\nc = b + 1;\nif (a > 1) {\n    c = c + 1;\n}\ne = a + b;\nf = e + c;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u628a\u4e0a\u8ff0\u4ee3\u7801\u6848\u4f8b\u5236\u4f5c\u4e00\u4e2a\u6d41\u7a0b\u56fe\uff0c\u6765\u540c\u65f6\u5305\u542b\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\uff0c\u4e5f\u6700\u63a5\u8fd1\u4eba\u7c7b\u7406\u89e3\u7684\u4ee3\u7801\u6267\u884c\u6d41\u7a0b\u3002"}),"\n",(0,i.jsx)(n.mermaid,{value:'graph LR\n  A[a = 1] --\x3e B[b = a + 1]\n  B --\x3e C[c = b + 1]\n  C --\x3e D{"if (a > 1)"}\n  D --\x3e|true| E[c = c + 1]\n  D --\x3e|false| F[e = a + b]\n  E --\x3e F\n  F --\x3e G[f = e + c]\n  \n  %% Data flow edges (using different style)\n  A -.->|a| B\n  A -.->|a| D\n  A -.->|a| F\n  B -.->|b| C\n  B -.->|b| F\n  C -.->|c| E\n  C -.->|c| G\n  E -.->|c| G\n  F -.->|e| G\n  \n  classDef control fill:#f9f,stroke:#333,stroke-width:2px\n  classDef data fill:#bbf,stroke:#333,stroke-width:2px\n  class A,B,C,D,E,F,G control'}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u56fe\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\uff0c\u6570\u636e\u6d41\u548c\u63a7\u5236\u6d41\u662f\u6df7\u5408\u5728\u4e00\u8d77\u7684\uff0c\u901a\u8fc7\u68f1\u578b\u6765\u533a\u5206 ",(0,i.jsx)(n.code,{children:"IF"})," \u5206\u652f\u3002"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b9e\u7ebf\u8868\u793a\u63a7\u5236\u6d41"}),"\n",(0,i.jsx)(n.li,{children:"\u865a\u7ebf\u8868\u793a\u6570\u636e\u6d41\uff08\u53d8\u91cf\u4e4b\u95f4\u76f4\u63a5\u8fde\u63a5\uff09"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c1d\u8bd5\u5206\u79bb\u4e0a\u8ff0\u56fe\u4e2d\u7684\u6570\u636e\u6d41\u548c\u63a7\u5236\u6d41\uff0c\u628a\u5b83\u5206\u6210\u4e24\u4e2a\u56fe\u3002"}),"\n",(0,i.jsx)(n.mermaid,{value:'graph BT\n  subgraph \u63a7\u5236\u6d41 Control Flow\n      B1["Block1\n      a = 1\n      b = a + 1\n      c = b + 1"] --\x3e D1{if a > 1}\n      D1 --\x3e|true| E1["Block2\n      c = c + 1"]\n      D1 --\x3e|false| F1["Block3\n      e = a + b\n      f = e + c"]\n      E1 --\x3e F1\n  end\n  \n  subgraph \u6570\u636e\u6d41 Data Flow\n      A2[a] --\x3e B2[b]\n      B2 --\x3e C2[c]\n      C2 --\x3e E2[c\']\n      A2 --\x3e F2[e]\n      B2 --\x3e F2\n      E2 --\x3e G2[f]\n      C2 --\x3e G2\n      F2 --\x3e G2\n  end\n  \n  classDef control fill:#f9f,stroke:#333,stroke-width:2px\n  classDef data fill:#bbf,stroke:#333,stroke-width:2px\n  class B1,D1,E1,F1 control\n  class A2,B2,C2,D2,E2,F2,G2 data'}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u7528\u6237\u9605\u8bfb\u5b8c\u5206\u79bb\u56fe\u4e4b\u540e\uff1a"}),"\n",(0,i.jsx)(n.admonition,{title:"\u63a7\u5236\u6d41\u4e0e\u6570\u636e\u6d41\u7684\u533a\u522b",type:"note",children:(0,i.jsx)(n.p,{children:'\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\u662f\u7a0b\u5e8f\u5206\u6790\u4e2d\u4e24\u4e2a\u57fa\u672c\u4f46\u622a\u7136\u4e0d\u540c\u7684\u6982\u5ff5\u3002\u5b83\u4eec\u5206\u522b\u63cf\u8ff0\u4e86\u7a0b\u5e8f\u7684\u4e0d\u540c\u65b9\u9762\uff1a\u63a7\u5236\u6d41\u5173\u6ce8"\u7a0b\u5e8f\u6267\u884c\u7684\u8def\u5f84"\uff0c\u800c\u6570\u636e\u6d41\u5173\u6ce8"\u6570\u636e\u7684\u4f20\u64ad\u548c\u8f6c\u6362"\u3002'})}),"\n",(0,i.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u4ece\u5f62\u5f0f\u5316\u7684\u89d2\u5ea6\u6765\u8be6\u7ec6\u89e3\u91ca\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u63a7\u5236\u6d41\u56fe (Control Flow Graph, CFG)"})}),"\n"]}),"\n",(0,i.jsx)(c.OO,{math:"\nCFG = (B, T) \\\\\n\u5176\u4e2d\uff1a\\\\\nB = \\{b_1, b_2, ..., b_n\\} \\text{ \u662f\u57fa\u672c\u5757\u7684\u96c6\u5408} \\\\\nT \\subseteq B \\times B \\text{ \u662f\u57fa\u672c\u5757\u4e4b\u95f4\u7684\u8f6c\u79fb\u8fb9\u96c6\u5408}\n"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u793a\u4f8b\u4ee3\u7801\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"b_1"})," \u5305\u542b\u4e86 ",(0,i.jsx)(n.code,{children:"a = 1; b = a + 1; c = b + 1"})," \u8fd9\u4e9b\u987a\u5e8f\u6267\u884c\u7684\u8bed\u53e5"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"b_2"})," \u5305\u542b\u4e86 ",(0,i.jsx)(n.code,{children:"c = c + 1"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"b_3"})," \u5305\u542b\u4e86 ",(0,i.jsx)(n.code,{children:"e = a + b; f = e + c"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u8f6c\u79fb\u8fb9 ",(0,i.jsx)(c.GP,{math:"T"})," \u5305\u542b\u4e86\u6761\u4ef6\u8df3\u8f6c\u548c\u987a\u5e8f\u6267\u884c\u7684\u8fb9"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u6570\u636e\u6d41\u56fe (Data Flow Graph, DFG)"})}),"\n"]}),"\n",(0,i.jsx)(c.OO,{math:"\nDFG = (V, E) \\\\\n\u5176\u4e2d\uff1a\\\\\nV = \\{v_1, v_2, ..., v_m\\} \\text{ \u662f\u53d8\u91cf\u7684\u96c6\u5408} \\\\\nE \\subseteq V \\times V \\text{ \u662f\u6570\u636e\u4f9d\u8d56\u8fb9\u7684\u96c6\u5408}\n"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u793a\u4f8b\u4ee3\u7801\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"V"})," \u5305\u542b\u4e86\u53d8\u91cf ",(0,i.jsx)(n.code,{children:"{a, b, c, e, f}"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u6570\u636e\u4f9d\u8d56\u8fb9 ",(0,i.jsx)(c.GP,{math:"E"})," \u8868\u793a\u53d8\u91cf\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5982 ",(0,i.jsx)(n.code,{children:"a \u2192 b"})," \u8868\u793a ",(0,i.jsx)(n.code,{children:"b"})," \u7684\u8ba1\u7b97\u4f9d\u8d56\u4e8e ",(0,i.jsx)(n.code,{children:"a"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u89c2\u5bdf\u5230\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53d8\u91cf ",(0,i.jsx)(n.code,{children:"c"})," \u5728\u63a7\u5236\u6d41\u7684\u4e0d\u540c\u8def\u5f84\u4e0a\u6709\u4e0d\u540c\u7684\u5b9a\u503c\uff08",(0,i.jsx)(n.code,{children:"c = b + 1"})," \u548c ",(0,i.jsx)(n.code,{children:"c = c + 1"}),"\uff09"]}),"\n",(0,i.jsxs)(n.li,{children:["\u6700\u7ec8\u7684\u53d8\u91cf ",(0,i.jsx)(n.code,{children:"f"})," \u4f9d\u8d56\u4e8e\u591a\u4e2a\u53d8\u91cf\uff08",(0,i.jsx)(n.code,{children:"a"}),"\u3001",(0,i.jsx)(n.code,{children:"b"}),"\u3001",(0,i.jsx)(n.code,{children:"c"}),"\u3001",(0,i.jsx)(n.code,{children:"e"}),"\uff09\u7684\u503c"]}),"\n",(0,i.jsxs)(n.li,{children:["\u63a7\u5236\u6d41\u51b3\u5b9a\u4e86 ",(0,i.jsx)(n.code,{children:"c"})," \u7684\u5b9e\u9645\u503c\uff0c\u8fdb\u800c\u5f71\u54cd\u5230 ",(0,i.jsx)(n.code,{children:"f"})," \u7684\u8ba1\u7b97\u7ed3\u679c"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u79cd\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\u7684\u4ea4\u7ec7\u5173\u7cfb\uff0c\u6b63\u662f\u540e\u7eed\u6211\u4eec\u8981\u8ba8\u8bba\u7684 SSA \u91cd\u8981\u8bdd\u9898\u3002"}),"\n",(0,i.jsxs)(n.admonition,{title:"\u91cd\u8981\u63d0\u793a",type:"danger",children:[(0,i.jsx)(n.p,{children:"\u5728\u5f88\u591a\u4e0d\u719f\u6089\u9759\u6001\u4ee3\u7801\u5206\u6790\u7684\u8bfb\u8005\u773c\u91cc\uff0c\u4ed6\u5176\u5b9e\u5e76\u4e0d\u77e5\u9053\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\u662f\u4e24\u4e2a\u5b8c\u5168\u4e0d\u540c\u7684\u6982\u5ff5\uff0c\u800c\u662f\u4e60\u60ef\u6027\u7684\u628a\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\u6df7\u4e3a\u4e00\u8c08\u3002"}),(0,i.jsx)(n.p,{children:"\u5f53\u7136\u4e5f\u5e76\u4e0d\u662f\u8bf4\u5fc5\u987b\u53bb\u5206\u79bb\u63a7\u5236\u6d41\u548c\u6570\u636e\u6d41\uff0c\u6bd5\u7adf\u5728 \u201c\u4ee3\u7801\u5c5e\u6027\u56fe\u201d \u6216 \u201c\u8282\u70b9\u4e4b\u6d77\u201d \u4e2d\uff0c\u63a7\u5236\u5173\u7cfb\u548c\u6570\u636e\u5173\u7cfb\u53c8\u88ab\u653e\u5728\u4e86\u4e00\u8d77\u3002"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u6570\u636e\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb",children:"\u6570\u636e\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u63a5\u4e0b\u6765\u7684\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u91cd\u70b9\u5c06\u4f1a\u8ba8\u8bba\u6570\u636e\u8282\u70b9\uff08\u53d8\u91cf\uff09\u7684\u652f\u914d\u95ee\u9898\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u6570\u636e\u6d41\u5206\u6790\u4e2d\uff0c\u53d8\u91cf\u652f\u914d\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u4ed6\u63cf\u8ff0\u4e86\u53d8\u91cf\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u6211\u4eec\u4ee5 ",(0,i.jsx)(c.GP,{math:"Dom(x, y)"})," \u6765\u8868\u793a\u53d8\u91cf ",(0,i.jsx)(c.GP,{math:"x"})," \u652f\u914d\u53d8\u91cf ",(0,i.jsx)(c.GP,{math:"y"}),"\u3002"]}),"\n",(0,i.jsx)(c.OO,{math:"\n\u5bf9\u4e8e\u53d8\u91cf\\ x\\ \u548c\\ y\uff0c\u5982\u679c\uff1a\\\\\nDom(x,\\ y)\\ \\iff\\ \\text{\u6240\u6709\u5230\u8fbe\\ y\\ \u7684\u8def\u5f84\u90fd\u5fc5\u987b\u7ecf\u8fc7\\ x}\n"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5f62\u5f0f\u5316\u5b9a\u4e49\u652f\u914d\u5173\u7cfb\uff1a"}),"\n",(0,i.jsx)(c.OO,{math:"\nDom(x,\\ y)\\ =\\ \\begin{cases}\ntrue\\ &\\ \\text{\u82e5\\ x\\ \u652f\u914d\\ y}\\ \\\\\nfalse\\ &\\ \\text{\u5176\u4ed6\u60c5\u51b5}\n\\end{cases}\n"}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"x"})," \u662f\u652f\u914d\u8005(dominator)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"y"})," \u662f\u88ab\u652f\u914d\u8005(dominee)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u6df1\u5165\u601d\u8003\uff0c\u6211\u4eec\u8ba4\u4e3a\u652f\u914d\u5e94\u8be5\u5305\u542b\u76f4\u63a5\u652f\u914d\u548c\u95f4\u63a5\u652f\u914d\u4e24\u79cd\uff0c\u56e0\u6b64\u6211\u4eec\u5b9a\u4e49\u4e86\u4e09\u79cd\u652f\u914d\u5173\u7cfb\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u4e00\u822c\u652f\u914d\u5173\u7cfb"})}),"\n"]}),"\n",(0,i.jsx)(c.OO,{math:"\nDom(x, y) \\iff \\text{\u6240\u6709\u5230\u8fbe y \u7684\u8def\u5f84\u90fd\u5fc5\u987b\u7ecf\u8fc7 x}\n"}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u76f4\u63a5\u652f\u914d\u5173\u7cfb"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u76f4\u63a5\u652f\u914d\u5173\u7cfb\u63cf\u8ff0\u4e86\u4e24\u4e2a\u53d8\u91cf\u4e4b\u95f4\u6700\u76f4\u63a5\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u6ca1\u6709\u4efb\u4f55\u4e2d\u95f4\u53d8\u91cf\u3002\u5f62\u5f0f\u5316\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(c.OO,{math:"\niDom(x, y) \\iff \\begin{cases}\nDom(x, y) \\land \\\\\n\\neg\\exists z(Dom(x, z) \\land Dom(z, y)) \\land \\\\\nConnected(x, y)\n\\end{cases}\n"}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"Dom(x, y)"})," \u8868\u793a x \u652f\u914d y"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"\\neg\\exists z(Dom(x, z) \\land Dom(z, y))"})," \u8868\u793a\u4e0d\u5b58\u5728\u4e2d\u95f4\u8282\u70b9 z \u540c\u65f6\u88ab x \u652f\u914d\u4e14\u652f\u914d y"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"Connected(x, y)"})," \u8868\u793a x \u548c y \u5728\u6570\u636e\u6d41\u56fe\u4e2d\u76f4\u63a5\u76f8\u8fde"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"\u95f4\u63a5\u652f\u914d\u5173\u7cfb"})}),"\n"]}),"\n",(0,i.jsx)(c.OO,{math:"\nindirectDom(x, y) \\iff \\begin{cases}\nDom(x, y) \\land \\\\\n\\exists z(Dom(x, z) \\land Dom(z, y))\n\\end{cases}\n"}),"\n",(0,i.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u5177\u4f53\u7684\u4ee3\u7801\u793a\u4f8b\u6765\u7406\u89e3\u4e0a\u8ff0\u7684\u5185\u5bb9\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"a = input()      // 1\nb = a + 1        // 2\nif a > 0 {       // 3\n    c = b + 2    // 4\n} else {\n    c = b - 2    // 5\n}\nd = c * 2        // 6\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u7ed8\u5236\u8fd9\u6bb5\u4ee3\u7801\u7684\u6570\u636e\u6d41\u56fe\u548c\u652f\u914d\u5173\u7cfb\uff1a"}),"\n",(0,i.jsx)(n.mermaid,{value:'graph LR\n    A["a (1)"] --\x3e|"\u76f4\u63a5\u652f\u914d"| B["b (2)"]\n    B --\x3e C1["c (4: b + 2)"]\n    B --\x3e C2["c (5: b - 2)"]\n    C1 --\x3e D["d (6)"]\n    C2 --\x3e D\n    B -.->|"\u95f4\u63a5\u652f\u914d"| D\n    A -.->|"\u95f4\u63a5\u652f\u914d"| D\n    \n    %% \u4f7f\u7528\u4e0d\u540c\u7684\u6837\u5f0f\u6765\u7a81\u51fa\u652f\u914d\u5173\u7cfb\n    classDef default fill:#f9f,stroke:#333,stroke-width:2px;\n    linkStyle default stroke:#666,stroke-width:2px;\n'}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u8ff0\u652f\u914d\u5173\u7cfb\u6709\u70b9\u5947\u602a\uff0c\u56e0\u4e3a IF \u5206\u652f\u7684\u5b58\u5728\uff0c\u5bfc\u81f4\u6709\u4e24\u4e2a ",(0,i.jsx)(n.code,{children:"C"})," \u8282\u70b9\u3002\u4f46\u662f\u5728 \u201c\u53d8\u91cf\u201d \u7684\u89d2\u5ea6\u6765\u8bf4\uff0c\u6211\u4eec\u5e94\u8be5\u5408\u5e76 C\uff0c\u6211\u4eec\u4f1a\u53ea\u51fa\u6765\u7684\u652f\u914d\u5173\u7cfb\u5e94\u8be5\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.mermaid,{value:'graph LR\n    A["a"] --\x3e B["b"]\n    B --\x3e C["c"]\n    C --\x3e D["d"]\n    \n    classDef default fill:#bbf,stroke:#333,stroke-width:2px;'}),"\n",(0,i.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,i.jsx)(n.p,{children:"\u4e0a\u8ff0\u56fe\u793a\u4e2d\uff0c\u6211\u4eec\u53ea\u4fdd\u7559\u4e86\u53d8\u91cf C\uff0c\u8fd9\u663e\u7136\u662f\u770b\u7740\u975e\u5e38\u522b\u626d\u7684\uff0c\u6211\u4eec\u4e60\u60ef\u4e86 SSA \u601d\u8def\u4e4b\u540e\uff0c\u4e0a\u8ff0\u56fe\u663e\u7136\u662f\u4e0d\u5408\u9002\u7684\uff0c\u6211\u4eec\u540e\u7eed\u5c31\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898"})}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u518d\u6765\u8ba8\u8bba\u53e6\u4e00\u4e2a\u6848\u4f8b\uff0c\u8fd9\u662f\u4e00\u4e2a\u6613\u9519\u70b9\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"a = input()\nb = input()\nc = a + b\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53d8\u91cf ",(0,i.jsx)(n.code,{children:"c"})," \u540c\u65f6\u4f9d\u8d56\u4e8e ",(0,i.jsx)(n.code,{children:"a"})," \u548c ",(0,i.jsx)(n.code,{children:"b"}),"\uff0c\u4f46\u662f\u5e76\u4e0d\u80fd\u8bf4 ",(0,i.jsx)(n.code,{children:"a"})," \u652f\u914d ",(0,i.jsx)(n.code,{children:"c"}),"\uff0c\u6216\u8005\u4e5f\u4e0d\u80fd\u8bf4 ",(0,i.jsx)(n.code,{children:"b"})," \u652f\u914d ",(0,i.jsx)(n.code,{children:"c"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"a"})," \u548c ",(0,i.jsx)(n.code,{children:"b"})," \u4ec5\u4ec5\u662f ",(0,i.jsx)(n.code,{children:"c"})," \u7684\u524d\u7ee7\u8282\u70b9\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u6570\u636e\u8282\u70b9\u53d8\u91cf\u652f\u914d\u8fb9\u754c",children:"\u6570\u636e\u8282\u70b9\uff08\u53d8\u91cf\uff09\u652f\u914d\u8fb9\u754c"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u7528\u6237\u4e86\u89e3\u5b8c\u652f\u914d\u95ee\u9898\u4e4b\u540e\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u63d0\u51fa\u4e00\u4e2a\u95ee\u9898\uff0c\u201c\u4e00\u4e2a\u6570\u636e\u8282\u70b9\u7684\u652f\u914d\u7684\u8303\u56f4\u6709\u591a\u5927\uff1f\u201d"}),"\n",(0,i.jsx)(n.p,{children:"\u8981\u56de\u7b54\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u6982\u5ff5\u53eb\u652f\u914d\u8fb9\u754c\u3002\u8003\u8651\u4efb\u4f55\u79bb\u5f00\u5757 B \u7684\u8def\u5f84\u3002\u6700\u521d\u8def\u5f84\u4e0a\u7684\u5757\u7531 B \u652f\u914d\u3002\u6700\u7ec8\u5230\u8fbe\u4e00\u4e2a\u4e0d\u7531 B \u652f\u914d\u7684\u5757\u3002\u9664\u975e\u8def\u5f84\u8fd4\u56de\u5230 B\uff0c\u5426\u5219\u4e4b\u540e\u7684\u6240\u6709\u5757\u90fd\u4e0d\u53d7 B \u652f\u914d\u3002\u4e0d\u88ab B \u652f\u914d\u7684\u7b2c\u4e00\u4e2a\u5757\u662f\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u5b83\u6307\u793a\u4e86 B \u652f\u914d\u7684\u5757\u7684\u8303\u56f4\uff0c\u5e76\u4f7f\u7528\u6709\u5173 B \u4e2d\u7684\u8ba1\u7b97\u7684\u4fe1\u606f\u6307\u793a\u4e86\u4f18\u5316\u7684\u9650\u5236\u3002\u8003\u8651\u5230\u6240\u6709\u8def\u5f84\uff0c\u62e5\u6709\u8be5\u7279\u5f81\u7684\u5757\u7684\u96c6\u5408\u79f0\u4e3a\u652f\u914d B \u7684\u8fb9\u754c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u9996\u5148\u7ed9\u51fa\u652f\u914d\u8fb9\u754c\u7684\u5f62\u5f0f\u5316\u5b9a\u4e49\uff1a"}),"\n",(0,i.jsx)(c.OO,{math:"\nDF(X) = \\{Y | \\exists Z \\in Dom(X) \\text{ such that } Y \\text{ is an immediate successor of } Z \\text{ and } X \\not\\in Dom(Y)\\}\n"}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"DF(X)"})," \u8868\u793a\u8282\u70b9X\u7684\u652f\u914d\u8fb9\u754c"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(c.GP,{math:"Dom(X)"})," \u8868\u793a\u88abX\u652f\u914d\u7684\u8282\u70b9\u96c6\u5408"]}),"\n",(0,i.jsx)(n.li,{children:"Y\u662fX\u7684\u652f\u914d\u8fb9\u754c\u4e2d\u7684\u4e00\u4e2a\u8282\u70b9"}),"\n",(0,i.jsx)(n.li,{children:"Z\u662f\u88abX\u652f\u914d\u7684\u67d0\u4e2a\u8282\u70b9"}),"\n",(0,i.jsx)(n.li,{children:"Y\u662fZ\u7684\u76f4\u63a5\u540e\u7ee7\u8282\u70b9"}),"\n",(0,i.jsx)(n.li,{children:"X\u4e0d\u652f\u914dY"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u7528\u4e00\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\u6765\u8bf4\u660e\uff1a"}),"\n",(0,i.jsx)(n.mermaid,{value:'graph LR\n  subgraph cluster [" "]\n      style cluster fill:#E8E8E8,stroke:#CCCCCC\n      5 --\x3e 6\n      6 --\x3e 8\n      6 --\x3e 7\n      7 --\x3e 8\n  end\n  1 --\x3e 2\n  2 --\x3e 3\n  3 --\x3e 4\n  4 --\x3e 13\n  1 --\x3e 5\n  8 --\x3e 13\n  6 --\x3e 4\n  7 --\x3e 12\n  12 --\x3e 13\n  1 --\x3e 9\n  9 --\x3e 10\n  10 --\x3e 12\n  9 --\x3e 11\n  11 --\x3e 12'}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u7ed9\u51fa\u56fe\u4e2d\u5404\u8282\u70b9\u7684\u652f\u914d\u8fb9\u754c\u5206\u6790\u8868\u683c\uff1a"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u8282\u70b9"}),(0,i.jsx)(n.th,{children:"\u652f\u914d\u7684\u8282\u70b9\u96c6\u5408 Dom(X)"}),(0,i.jsx)(n.th,{children:"\u76f4\u63a5\u540e\u7ee7\u8282\u70b9"}),(0,i.jsx)(n.th,{children:"\u652f\u914d\u8fb9\u754c DF(X)"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"{1,2,3,4,5,6,7,8,9,10,11,12,13}"}),(0,i.jsx)(n.td,{children:"{2,5,9}"}),(0,i.jsx)(n.td,{children:"\u2205"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"{2,3}"}),(0,i.jsx)(n.td,{children:"{3}"}),(0,i.jsx)(n.td,{children:"{4}"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"{3}"}),(0,i.jsx)(n.td,{children:"{4}"}),(0,i.jsx)(n.td,{children:"{4}"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"4"}),(0,i.jsx)(n.td,{children:"{4}"}),(0,i.jsx)(n.td,{children:"{13}"}),(0,i.jsx)(n.td,{children:"{13}"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"5"}),(0,i.jsx)(n.td,{children:"{5,6,7,8}"}),(0,i.jsx)(n.td,{children:"{6}"}),(0,i.jsx)(n.td,{children:"{4,12,13}"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"6"}),(0,i.jsx)(n.td,{children:"{6,7,8}"}),(0,i.jsx)(n.td,{children:"{4,7,8}"}),(0,i.jsx)(n.td,{children:"{4,12,13}"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"7"}),(0,i.jsx)(n.td,{children:"{7}"}),(0,i.jsx)(n.td,{children:"{8,12}"}),(0,i.jsx)(n.td,{children:"{8,12}"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"8"}),(0,i.jsx)(n.td,{children:"{8}"}),(0,i.jsx)(n.td,{children:"{13}"}),(0,i.jsx)(n.td,{children:"{13}"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:"{9,10,11}"}),(0,i.jsx)(n.td,{children:"{10,11}"}),(0,i.jsx)(n.td,{children:"{12}"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"10"}),(0,i.jsx)(n.td,{children:"{10}"}),(0,i.jsx)(n.td,{children:"{12}"}),(0,i.jsx)(n.td,{children:"{12}"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"11"}),(0,i.jsx)(n.td,{children:"{11}"}),(0,i.jsx)(n.td,{children:"{12}"}),(0,i.jsx)(n.td,{children:"{12}"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"12"}),(0,i.jsx)(n.td,{children:"{12}"}),(0,i.jsx)(n.td,{children:"{13}"}),(0,i.jsx)(n.td,{children:"{13}"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"13"}),(0,i.jsx)(n.td,{children:"{13}"}),(0,i.jsx)(n.td,{children:"\u2205"}),(0,i.jsx)(n.td,{children:"\u2205"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u6570\u636e\u6d41\u4e0e-uddu-\u94fe",children:"\u6570\u636e\u6d41\u4e0e UD(DU) \u94fe"}),"\n",(0,i.jsx)(n.h3,{id:"\u5b9a\u4e49\u8de8\u8fc7\u7a0b\u5206\u6790",children:"\u5b9a\u4e49\u8de8\u8fc7\u7a0b\u5206\u6790"}),"\n",(0,i.jsx)(n.h2,{id:"\u6570\u636e\u6d41\u7684\u8de8\u8fc7\u7a0b\u5206\u6790",children:"\u6570\u636e\u6d41\u7684\u8de8\u8fc7\u7a0b\u5206\u6790"}),"\n",(0,i.jsx)(n.h3,{id:"\u57fa\u7840\u8bdd\u9898\u901a\u8fc7\u51fd\u6570\u8c03\u7528\u8de8\u8fc7\u7a0b",children:"\u57fa\u7840\u8bdd\u9898\uff1a\u901a\u8fc7\u51fd\u6570\u8c03\u7528\u8de8\u8fc7\u7a0b"}),"\n",(0,i.jsx)(n.h3,{id:"\u8fdb\u9636\u8bdd\u9898\u901a\u8fc7\u95ed\u5305\u8de8\u8fc7\u7a0b",children:"\u8fdb\u9636\u8bdd\u9898\uff1a\u901a\u8fc7\u95ed\u5305\u8de8\u8fc7\u7a0b"}),"\n",(0,i.jsx)(n.h3,{id:"\u8fdb\u9636\u8bdd\u9898\u5e7f\u4e49\u8de8\u8fc7\u7a0b\u5b9a\u4e49",children:"\u8fdb\u9636\u8bdd\u9898\uff1a\u5e7f\u4e49\u8de8\u8fc7\u7a0b\u5b9a\u4e49"}),"\n",(0,i.jsx)(n.h2,{id:"\u904d\u5386\u6570\u636e\u6d41",children:"\u904d\u5386\u6570\u636e\u6d41"}),"\n",(0,i.jsx)(n.h3,{id:"uddu-\u94fe\u4e0e\u5206\u6790\u65b9\u5411",children:"UD(DU) \u94fe\u4e0e\u5206\u6790\u65b9\u5411"}),"\n",(0,i.jsx)(n.h3,{id:"\u81ea\u9876\u5411\u4e0b\u4ece\u5b9a\u4e49def\u5230\u4f7f\u7528use",children:"\u81ea\u9876\u5411\u4e0b\uff1a\u4ece\u5b9a\u4e49(Def)\u5230\u4f7f\u7528(Use)"}),"\n",(0,i.jsx)(n.h3,{id:"\u81ea\u5e95\u5411\u4e0a\u4ece\u4f7f\u7528use\u5230\u5b9a\u4e49def",children:"\u81ea\u5e95\u5411\u4e0a\uff1a\u4ece\u4f7f\u7528(Use)\u5230\u5b9a\u4e49(Def)"})]})}function j(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},97015:(e,n,s)=>{s.d(n,{Ay:()=>a,GP:()=>h,OO:()=>o});var d=s(96540),i=s(22130),l=s(20354),r=s.n(l),c=s(74848);const t={throwOnError:!1,strict:!1,trust:!1,macros:{"\\RR":"\\mathbb{R}","\\NN":"\\mathbb{N}","\\ZZ":"\\mathbb{Z}"}},x=e=>{let{math:n,inline:s=!1,onError:l,options:x={},className:a=""}=e;const h=(0,d.useRef)(null),[o,j]=(0,d.useState)(!1),[p,u]=(0,d.useState)(!1),[m,f]=(0,d.useState)(!1),[b,g]=(0,d.useState)(!1),[y,v]=(0,d.useState)({message:"",visible:!1});(0,d.useEffect)((()=>{if(h.current)try{i.default.render(n,h.current,{...t,...x,displayMode:!s})}catch(e){l?l(e):(console.error("KaTeX Error:",e),h.current&&(h.current.textContent=n))}}),[n,s,x,l]);const D=e=>{v({message:e,visible:!0}),setTimeout((()=>{v({message:"",visible:!1})}),2e3)};return(0,c.jsxs)("div",{className:"katex-wrapper "+(o?"hovered":""),onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),style:{position:"relative",padding:"8px",border:o?"2px solid #4a90e2":"1px solid transparent",borderRadius:"4px",display:s?"inline-block":"block",transition:"all 0.3s ease",boxShadow:o?"0 0 8px rgba(74, 144, 226, 0.3)":"none"},children:[y.visible&&(0,c.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0, 0, 0, 0.7)",color:"#fff",padding:"8px 16px",borderRadius:"4px",fontSize:"14px",zIndex:1e3,pointerEvents:"none"},children:y.message}),o&&(0,c.jsxs)("div",{style:{position:"absolute",top:"4px",right:"4px",display:"flex",gap:"8px",zIndex:1},children:[(0,c.jsx)("button",{onClick:async()=>{h.current&&(g(!0),setTimeout((async()=>{try{const e=document.createElement("div");e.style.padding="12px 0";const n=h.current?.cloneNode(!0);if(!n)throw new Error("\u65e0\u6cd5\u514b\u9686\u8282\u70b9");e.appendChild(n),document.body.appendChild(e);const s=await r()(e,{backgroundColor:null,scale:2});document.body.removeChild(e),s.toBlob((async e=>{if(e)try{await navigator.clipboard.write([new ClipboardItem({"image/png":e})]),f(!0),D("\u56fe\u7247\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f"),setTimeout((()=>{f(!1)}),2e3)}catch(n){console.error("\u590d\u5236\u56fe\u7247\u5931\u8d25:",n),D("\u590d\u5236\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}}),"image/png")}catch(e){console.error("\u751f\u6210\u56fe\u7247\u5931\u8d25:",e),D("\u751f\u6210\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}finally{g(!1)}}),500))},disabled:b,style:{padding:"4px 12px",background:m?"#52c41a":b?"#d9d9d9":"#f5f5f5",border:"1px solid "+(m?"#52c41a":b?"#d9d9d9":"#e0e0e0"),borderRadius:"4px",cursor:b?"not-allowed":"pointer",fontSize:"12px",color:m?"#fff":b?"#999":"#666",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"4px",opacity:b?.7:1},children:m?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{style:{fontSize:"14px"},children:"\u2713"}),"\u5df2\u590d\u5236\u56fe\u7247"]}):b?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{style:{display:"inline-block",animation:"spin 1s linear infinite"},children:"\u27f3"}),"\u5bfc\u51fa\u4e2d..."]}):"\u590d\u5236\u4e3a\u56fe\u7247"}),(0,c.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(n),u(!0),setTimeout((()=>{u(!1)}),2e3)},style:{padding:"4px 12px",background:p?"#52c41a":"#f5f5f5",border:"1px solid "+(p?"#52c41a":"#e0e0e0"),borderRadius:"4px",cursor:"pointer",fontSize:"12px",color:p?"#fff":"#666",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"4px"},children:p?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{style:{fontSize:"14px"},children:"\u2713"}),"\u5df2\u590d\u5236"]}):"\u590d\u5236"})]}),(0,c.jsx)("div",{ref:h,className:`katex-container ${s?"inline":"block"} ${a}`})]})},a=x,h=e=>(0,c.jsx)(x,{...e,inline:!0}),o=e=>(0,c.jsx)(x,{...e,inline:!1})}}]);