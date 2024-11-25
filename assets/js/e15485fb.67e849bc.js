"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[1167],{84312:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"ssa-for-advanced-language-2","title":"\u7b2c\u4e09\u7ae0\uff1a\u9ad8\u7ea7\u8bed\u8a00\u7684 SSA \u6784\u5efa\uff08\u4e8c\uff09","description":"\u5728\u300a\u7b2c\u4e09\u7ae0\uff1a\u9ad8\u7ea7\u8bed\u8a00\u7684 SSA \u6784\u5efa\uff08\u4e00\uff09\u300b\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86 SSA \u7684\u57fa\u672c\u6982\u5ff5\u548c\u57fa\u672c\u7f16\u8bd1\u6280\u672f\uff0c\u5e76\u4e14\u8be6\u7ec6\u5206\u6790\u548c\u8ba8\u8bba\u4e86\u5206\u652f\u7684 SSA \u6784\u5efa\uff0c\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4f1a\u7ee7\u7eed\u672a\u7adf\u7684\u8bdd\u9898\uff0c\u8ba8\u8bba\u5faa\u73af\u7684 SSA \u6784\u5efa\u548c\u51fd\u6570\u6784\u5efa\u3002","source":"@site/static-analysis-guide/ssa-for-advanced-language-2.mdx","sourceDirName":".","slug":"/ssa-for-advanced-language-2","permalink":"/static-analysis-guide/ssa-for-advanced-language-2","draft":false,"unlisted":false,"editUrl":"https://github.com/yaklang/ssa.to/tree/main/static-analysis-guide/static-analysis-guide/ssa-for-advanced-language-2.mdx","tags":[],"version":"current","lastUpdatedBy":"v1ll4n","lastUpdatedAt":1732506050000,"frontMatter":{},"sidebar":"staticAnalysisGuideSidebar","previous":{"title":"\u7b2c\u4e09\u7ae0\uff1a\u9ad8\u7ea7\u8bed\u8a00\u7684 SSA \u6784\u5efa\uff08\u4e00\uff09","permalink":"/static-analysis-guide/ssa-for-advanced-language"},"next":{"title":"\u7b2c\u56db\u7ae0\uff1aOOP \u7684 SSA \u6784\u5efa","permalink":"/static-analysis-guide/deep-dive-into-ssa-oop"}}');var i=l(74848),a=l(28453),t=l(14252);l(97015);const r={},d="\u7b2c\u4e09\u7ae0\uff1a\u9ad8\u7ea7\u8bed\u8a00\u7684 SSA \u6784\u5efa\uff08\u4e8c\uff09",o={},c=[{value:"SSA \u6784\u5efa\u6d41\u7a0b\u63a7\u5236\uff1a\u5faa\u73af",id:"ssa-\u6784\u5efa\u6d41\u7a0b\u63a7\u5236\u5faa\u73af",level:2},{value:"\u89c4\u7ea6\u5faa\u73af\u4e0e\u975e\u89c4\u7ea6\u5faa\u73af",id:"\u89c4\u7ea6\u5faa\u73af\u4e0e\u975e\u89c4\u7ea6\u5faa\u73af",level:3},{value:"\u591a\u5165\u53e3\u5faa\u73af",id:"\u591a\u5165\u53e3\u5faa\u73af",level:4},{value:"\u4ea4\u53c9\u5faa\u73af",id:"\u4ea4\u53c9\u5faa\u73af",level:4},{value:"SSA \u6784\u5efa\uff1a\u51fd\u6570\u4e0e\u65b9\u6cd5",id:"ssa-\u6784\u5efa\u51fd\u6570\u4e0e\u65b9\u6cd5",level:2},{value:"\u51fd\u6570\u5185\uff08\u8fc7\u7a0b\u5185\uff09 SSA \u6784\u5efa",id:"\u51fd\u6570\u5185\u8fc7\u7a0b\u5185-ssa-\u6784\u5efa",level:3},{value:"\u51fd\u6570\u672c\u8eab\u7684 SSA \u6784\u5efa",id:"\u51fd\u6570\u672c\u8eab\u7684-ssa-\u6784\u5efa",level:3},{value:"\u9ad8\u7ea7\u8bed\u8a00\u7279\u6027\u6784\u5efa",id:"\u9ad8\u7ea7\u8bed\u8a00\u7279\u6027\u6784\u5efa",level:2},{value:"\u95ed\u5305\u51fd\u6570\u4e2d\u7684 SSA \u95ee\u9898",id:"\u95ed\u5305\u51fd\u6570\u4e2d\u7684-ssa-\u95ee\u9898",level:3},{value:"OOP \u4e2d\u7684 SSA \u95ee\u9898",id:"oop-\u4e2d\u7684-ssa-\u95ee\u9898",level:3}];function h(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u7b2c\u4e09\u7ae0\u9ad8\u7ea7\u8bed\u8a00\u7684-ssa-\u6784\u5efa\u4e8c",children:"\u7b2c\u4e09\u7ae0\uff1a\u9ad8\u7ea7\u8bed\u8a00\u7684 SSA \u6784\u5efa\uff08\u4e8c\uff09"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u300a\u7b2c\u4e09\u7ae0\uff1a\u9ad8\u7ea7\u8bed\u8a00\u7684 SSA \u6784\u5efa\uff08\u4e00\uff09\u300b\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86 SSA \u7684\u57fa\u672c\u6982\u5ff5\u548c\u57fa\u672c\u7f16\u8bd1\u6280\u672f\uff0c\u5e76\u4e14\u8be6\u7ec6\u5206\u6790\u548c\u8ba8\u8bba\u4e86\u5206\u652f\u7684 SSA \u6784\u5efa\uff0c\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4f1a\u7ee7\u7eed\u672a\u7adf\u7684\u8bdd\u9898\uff0c\u8ba8\u8bba\u5faa\u73af\u7684 SSA \u6784\u5efa\u548c\u51fd\u6570\u6784\u5efa\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n","\n",(0,i.jsx)(t.A,{toc:c}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"ssa-\u6784\u5efa\u6d41\u7a0b\u63a7\u5236\u5faa\u73af",children:"SSA \u6784\u5efa\u6d41\u7a0b\u63a7\u5236\uff1a\u5faa\u73af"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5f00\u59cb\u4e86\u89e3 SSA \u6784\u5efa\u5faa\u73af\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u5148\u4e86\u89e3\u5faa\u73af\u672c\u8eab\u7684\u57fa\u672c\u6982\u5ff5\uff1a"}),"\n",(0,i.jsx)(n.h3,{id:"\u89c4\u7ea6\u5faa\u73af\u4e0e\u975e\u89c4\u7ea6\u5faa\u73af",children:"\u89c4\u7ea6\u5faa\u73af\u4e0e\u975e\u89c4\u7ea6\u5faa\u73af"}),"\n",(0,i.jsx)(n.p,{children:"\u89c4\u7ea6\u5faa\u73af\uff08Reducible Loop\uff09\uff1a\u89c4\u7ea6\u5faa\u73af\u662f\u4e00\u4e2a\u975e\u5e38\u597d\u7684\u5faa\u73af\uff0c\u4ed6\u7684\u7279\u70b9\u662f\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5165\u53e3\u552f\u4e00"}),"\n",(0,i.jsx)(n.li,{children:"\u6240\u6709\u56de\u8fb9\u90fd\u6307\u5411\u5165\u53e3\uff08\u5faa\u73af\u5934\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u5faa\u73af\u5934\u652f\u914d\u6240\u6709\u5faa\u73af\u4f53\u7684\u8282\u70b9"}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:'graph LR\n    A["Entry"] --\x3e B["Loop Header"]\n    B --\x3e C["Loop Body 1"]\n    C --\x3e D["Loop Body 2"]\n    D --\x3e B\n    D --\x3e E["Exit"]\n    \n    style B fill:#f96,stroke:#333\n    style A fill:#9f6,stroke:#333\n    style E fill:#9f6,stroke:#333\n'}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u89c4\u7ea6\u5faa\u73af\u662f\u6700\u5e38\u89c1\u7684\u5faa\u73af\u5f62\u5f0f\uff0c\u5927\u591a\u6570\u9ad8\u7ea7\u8bed\u8a00\u4e0d\u4f7f\u7528 Goto \u6784\u6210\u7684\u5faa\u73af\u7ed3\u6784\uff08\u5982 for\u3001while\uff09\u90fd\u4f1a\u751f\u6210\u89c4\u7ea6\u5faa\u73af\u3002"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0e\u4e4b\u76f8\u5bf9\u7684\u6982\u5ff5\u662f\u975e\u89c4\u7ea6\u5faa\u73af\uff08Irreducible Loop\uff09\uff0c\u975e\u89c4\u7ea6\u5faa\u73af\u7684\u7279\u70b9\u662f\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5165\u53e3\u70b9\u53ef\u80fd\u6709\u591a\u4e2a\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u56de\u8fb9\u53ef\u4ee5\u6307\u5411\u5faa\u73af\u5185\u4efb\u610f\u8282\u70b9\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u5faa\u73af\u5934\u6709\u53ef\u80fd\u65e0\u6cd5\u652f\u914d\u6240\u6709\u5faa\u73af\u4f53\u8282\u70b9\uff1b"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u4e3e\u51fa\u5f88\u591a\u4e2a\u975e\u89c4\u7ea6\u5faa\u73af\u7684\u6848\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.h4,{id:"\u591a\u5165\u53e3\u5faa\u73af",children:"\u591a\u5165\u53e3\u5faa\u73af"}),"\n",(0,i.jsx)(n.mermaid,{value:'graph LR\n    A["[A] Entry 1"] --\x3e B["[B] Loop Node 1"]\n    C["[C] Entry 2"] --\x3e D["[D] Loop Node 2"]\n    B --\x3e D\n    D --\x3e B\n    B --\x3e E["[E] Exit"]\n    \n    style B fill:#f96,stroke:#333\n    style D fill:#f96,stroke:#333\n    style A fill:#9f6,stroke:#333\n    style C fill:#9f6,stroke:#333\n    style E fill:#9f6,stroke:#333'}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u5faa\u73af\u662f\u975e\u89c4\u7ea6\u7684\uff0c\u539f\u56e0\u5728\u4e8e\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b58\u5728\u4e24\u4e2a\u5165\u53e3\u70b9\uff08Entry 1 \u548c Entry 2\uff09\u53ef\u4ee5\u8fdb\u5165\u5faa\u73af"}),"\n",(0,i.jsx)(n.li,{children:"\u5faa\u73af\u6ca1\u6709\u552f\u4e00\u7684\u5faa\u73af\u5934\uff08B \u548c D \u90fd\u53ef\u4ee5\u4f5c\u4e3a\u5165\u53e3\u70b9\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u65e2\u4e0d\u662f B \u652f\u914d D\uff0c\u4e5f\u4e0d\u662f D \u652f\u914d B"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u4ea4\u53c9\u5faa\u73af",children:"\u4ea4\u53c9\u5faa\u73af"}),"\n",(0,i.jsx)(n.mermaid,{value:'graph LR\n    A["[A] Entry"] --\x3e B["[B] Node 1"]\n    B --\x3e C["[C] Node 2"]\n    C --\x3e D["[D] Node 3"]\n    D --\x3e B\n    C --\x3e E["[E] Node 4"]\n    E --\x3e C\n    B --\x3e F["[F] Exit"]\n    \n    style B fill:#f96,stroke:#333\n    style C fill:#f96,stroke:#333\n    style D fill:#f96,stroke:#333\n    style E fill:#f96,stroke:#333\n    style A fill:#9f6,stroke:#333\n    style F fill:#9f6,stroke:#333\n'}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u5c55\u793a\u4e86\u4e24\u4e2a\u76f8\u4e92\u4ea4\u53c9\u7684\u5faa\u73af\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"B-C-D \u5f62\u6210\u4e00\u4e2a\u5faa\u73af"}),"\n",(0,i.jsx)(n.li,{children:"C-E \u5f62\u6210\u53e6\u4e00\u4e2a\u5faa\u73af"}),"\n",(0,i.jsx)(n.li,{children:"\u5faa\u73af C-E \u548c\u5faa\u73af B-C-D \u5171\u4eab\u8282\u70b9 C"}),"\n",(0,i.jsx)(n.li,{children:"\u6ca1\u6709\u552f\u4e00\u7684\u5faa\u73af\u5934\uff0c\u56e0\u4e3a C \u65e2\u5c5e\u4e8e\u4e00\u4e2a\u5faa\u73af\u53c8\u5c5e\u4e8e\u53e6\u4e00\u4e2a\u5faa\u73af"}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsx)(n.p,{children:"\u6211\u4eec\u73b0\u5728\u8ba8\u8bba\u7684\u5faa\u73af\uff0c\u90fd\u662f\u89c4\u7ea6\u5faa\u73af\u3002"}),(0,i.jsx)(n.p,{children:"\u5728\u540e\u9762\u7684\u5185\u5bb9\uff0c\u4f1a\u5c3d\u91cf\u5c11\u7684\u8ba8\u8bba\u975e\u89c4\u7ea6\u5faa\u73af\uff0c\u56e0\u4e3a\u975e\u89c4\u7ea6\u5faa\u73af\u7684\u6784\u5efa\u4e00\u822c\u9700\u8981\u7528\u5230\u4e00\u4e9b GOTO \u4e4b\u7c7b\u7684\u63a7\u5236\u6307\u4ee4\uff0c\u6216\u8005\u5728\u66f4\u4f4e\u7ea7\u8bed\u8a00\u4e2d\u65e0\u6761\u4ef6\u8df3\u8f6c\uff0c\u8fc7\u65e9\u5730\u63a5\u89e6\u8fd9\u4e9b\u5185\u5bb9\u4f1a\u8ba9\u8bfb\u8005\u5fc3\u751f\u6050\u60e7\u3002"}),(0,i.jsx)(n.p,{children:"\u975e\u89c4\u7ea6\u5faa\u73af\u7684\u5904\u7406\u4e00\u822c\u4f1a\u60f3\u529e\u6cd5\u8f6c\u79fb\u5230\u73b0\u6709\u7684\u89c4\u7ea6\u5faa\u73af\u4e2d\uff0c\u6216\u8005\u76f4\u63a5\u4f7f\u7528 GOTO + Label \u6765\u7ec4\u5408\uff0c\u4f18\u5316\u4e5f\u4f1a\u53d8\u5f97\u66f4\u52a0\u590d\u6742\u3002"})]}),"\n",(0,i.jsx)(n.h2,{id:"ssa-\u6784\u5efa\u51fd\u6570\u4e0e\u65b9\u6cd5",children:"SSA \u6784\u5efa\uff1a\u51fd\u6570\u4e0e\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.h3,{id:"\u51fd\u6570\u5185\u8fc7\u7a0b\u5185-ssa-\u6784\u5efa",children:"\u51fd\u6570\u5185\uff08\u8fc7\u7a0b\u5185\uff09 SSA \u6784\u5efa"}),"\n",(0,i.jsx)(n.h3,{id:"\u51fd\u6570\u672c\u8eab\u7684-ssa-\u6784\u5efa",children:"\u51fd\u6570\u672c\u8eab\u7684 SSA \u6784\u5efa"}),"\n",(0,i.jsx)(n.h2,{id:"\u9ad8\u7ea7\u8bed\u8a00\u7279\u6027\u6784\u5efa",children:"\u9ad8\u7ea7\u8bed\u8a00\u7279\u6027\u6784\u5efa"}),"\n",(0,i.jsx)(n.h3,{id:"\u95ed\u5305\u51fd\u6570\u4e2d\u7684-ssa-\u95ee\u9898",children:"\u95ed\u5305\u51fd\u6570\u4e2d\u7684 SSA \u95ee\u9898"}),"\n",(0,i.jsx)(n.h3,{id:"oop-\u4e2d\u7684-ssa-\u95ee\u9898",children:"OOP \u4e2d\u7684 SSA \u95ee\u9898"})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},14252:(e,n,l)=>{l.d(n,{A:()=>t});l(96540);var s=l(65195);const i={tableOfContentsInline:"tableOfContentsInline_prmo"};var a=l(74848);function t(e){let{toc:n,minHeadingLevel:l,maxHeadingLevel:t}=e;return(0,a.jsx)("div",{className:i.tableOfContentsInline,children:(0,a.jsx)(s.A,{toc:n,minHeadingLevel:l,maxHeadingLevel:t,className:"table-of-contents",linkClassName:null})})}},97015:(e,n,l)=>{l.d(n,{Ay:()=>d,GP:()=>o,OO:()=>c});var s=l(96540),i=l(22130),a=l(74848);const t={throwOnError:!1,strict:!1,trust:!1,macros:{"\\RR":"\\mathbb{R}","\\NN":"\\mathbb{N}","\\ZZ":"\\mathbb{Z}"}},r=e=>{let{math:n,inline:l=!1,onError:r,options:d={},className:o=""}=e;const c=(0,s.useRef)(null);return(0,s.useEffect)((()=>{if(c.current)try{i.default.render(n,c.current,{...t,...d,displayMode:!l})}catch(e){r?r(e):(console.error("KaTeX Error:",e),c.current&&(c.current.textContent=n))}}),[n,l,d,r]),(0,a.jsx)("div",{ref:c,className:`katex-container ${l?"inline":"block"} ${o}`,style:{display:l?"inline-block":"block"}})},d=r,o=e=>(0,a.jsx)(r,{...e,inline:!0}),c=e=>(0,a.jsx)(r,{...e,inline:!1})}}]);