"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[8393],{77502:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"deep-dive-cfg","title":"\u7b2c\u516b\u7ae0\uff1a\u63a7\u5236\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb\u4e0e SSA Phi \u6307\u4ee4","description":"\u672c\u7ae0\u662f\u4e00\u4e2a\u672a\u5b8c\u6210\u7684\u7ae0\u8282\uff0c\u5c06\u4f1a\u57fa\u672c\u4ecb\u7ecd\u63a7\u5236\u6d41\u548c\u652f\u914d\u7684\u5173\u7cfb\uff0c\u5e76\u4e14\u4f1a\u4ecb\u7ecd SSA \u7684 Phi \u8282\u70b9\u95ee\u9898\u3002","source":"@site/static-analysis-guide/deep-dive-cfg.mdx","sourceDirName":".","slug":"/deep-dive-cfg","permalink":"/en/static-analysis-guide/deep-dive-cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/yaklang/ssa.to/tree/main/static-analysis-guide/static-analysis-guide/deep-dive-cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"VillanCh","lastUpdatedAt":1734613305000,"frontMatter":{},"sidebar":"staticAnalysisGuideSidebar","previous":{"title":"\u7b2c\u516d\u7ae0\uff1aSSA \u6570\u636e\u6d41\u4e0e\u8de8\u8fc7\u7a0b\u5206\u6790","permalink":"/en/static-analysis-guide/deep-dive-into-ssa-dataflow-and-cross-procedure"}}');var t=s(74848),d=s(28453),r=(s(14252),s(97015));const l={},c="\u7b2c\u516b\u7ae0\uff1a\u63a7\u5236\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb\u4e0e SSA Phi \u6307\u4ee4",a={},x=[{value:"\u63a7\u5236\u6d41\u4e0e\u57fa\u672c\u5757",id:"\u63a7\u5236\u6d41\u4e0e\u57fa\u672c\u5757",level:2},{value:"\u63a7\u5236\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb",id:"\u63a7\u5236\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb",level:2},{value:"CFG \u4e2d\u7684\u57fa\u672c\u5757\u652f\u914d\u8fb9\u754c",id:"cfg-\u4e2d\u7684\u57fa\u672c\u5757\u652f\u914d\u8fb9\u754c",level:3}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u7b2c\u516b\u7ae0\u63a7\u5236\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb\u4e0e-ssa-phi-\u6307\u4ee4",children:"\u7b2c\u516b\u7ae0\uff1a\u63a7\u5236\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb\u4e0e SSA Phi \u6307\u4ee4"})}),"\n",(0,t.jsx)(n.admonition,{title:"\u672a\u5b8c\u6210\u7684\u7ae0\u8282",type:"danger",children:(0,t.jsx)(n.p,{children:"\u672c\u7ae0\u662f\u4e00\u4e2a\u672a\u5b8c\u6210\u7684\u7ae0\u8282\uff0c\u5c06\u4f1a\u57fa\u672c\u4ecb\u7ecd\u63a7\u5236\u6d41\u548c\u652f\u914d\u7684\u5173\u7cfb\uff0c\u5e76\u4e14\u4f1a\u4ecb\u7ecd SSA \u7684 Phi \u8282\u70b9\u95ee\u9898\u3002"})}),"\n",(0,t.jsx)(n.h2,{id:"\u63a7\u5236\u6d41\u4e0e\u57fa\u672c\u5757",children:"\u63a7\u5236\u6d41\u4e0e\u57fa\u672c\u5757"}),"\n",(0,t.jsx)(n.h2,{id:"\u63a7\u5236\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb",children:"\u63a7\u5236\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb"}),"\n","\n",(0,t.jsx)(n.p,{children:"\u5728\u63a5\u4e0b\u6765\u7684\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u91cd\u70b9\u5c06\u4f1a\u8ba8\u8bba\u63a7\u5236\u6d41\u4e2d\u57fa\u672c\u5757\u4e4b\u95f4\u7684\u652f\u914d\u95ee\u9898\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u63a7\u5236\u6d41\u5206\u6790\u4e2d\uff0c\u652f\u914d\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u4ed6\u63cf\u8ff0\u4e86\u57fa\u672c\u5757\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u6211\u4eec\u4ee5 ",(0,t.jsx)(r.GP,{math:"Dom(x, y)"})," \u6765\u8868\u793a\u57fa\u672c\u5757 ",(0,t.jsx)(r.GP,{math:"x"})," \u652f\u914d\u57fa\u672c\u5757 ",(0,t.jsx)(r.GP,{math:"y"}),"\u3002"]}),"\n",(0,t.jsx)(r.OO,{math:"\n\u5bf9\u4e8e\u57fa\u672c\u5757\\ x\\ \u548c\\ y\uff0c\u5982\u679c\uff1a\\\\\nDom(x,\\ y)\\ \\iff\\ \\text{\u6240\u6709\u5230\u8fbe\\ y\\ \u7684\u8def\u5f84\u90fd\u5fc5\u987b\u7ecf\u8fc7\\ x}\n"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5f62\u5f0f\u5316\u5b9a\u4e49\u652f\u914d\u5173\u7cfb\uff1a"}),"\n",(0,t.jsx)(r.OO,{math:"\nDom(x,\\ y)\\ =\\ \\begin{cases}\ntrue\\ &\\ \\text{\u82e5\\ x\\ \u652f\u914d\\ y}\\ \\\\\nfalse\\ &\\ \\text{\u5176\u4ed6\u60c5\u51b5}\n\\end{cases}\n"}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(r.GP,{math:"x"})," \u662f\u652f\u914d\u8005(dominator)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(r.GP,{math:"y"})," \u662f\u88ab\u652f\u914d\u8005(dominee)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"cfg-\u4e2d\u7684\u57fa\u672c\u5757\u652f\u914d\u8fb9\u754c",children:"CFG \u4e2d\u7684\u57fa\u672c\u5757\u652f\u914d\u8fb9\u754c"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u7528\u6237\u4e86\u89e3\u5b8c\u652f\u914d\u95ee\u9898\u4e4b\u540e\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u63d0\u51fa\u4e00\u4e2a\u95ee\u9898\uff0c\u201c\u4e00\u4e2a\u6570\u636e\u8282\u70b9\u7684\u652f\u914d\u7684\u8303\u56f4\u6709\u591a\u5927\uff1f\u201d"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u56de\u7b54\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u6982\u5ff5\u53eb\u652f\u914d\u8fb9\u754c\u3002\u8003\u8651\u4efb\u4f55\u79bb\u5f00\u5757 B \u7684\u8def\u5f84\u3002\u6700\u521d\u8def\u5f84\u4e0a\u7684\u5757\u7531 B \u652f\u914d\u3002\u6700\u7ec8\u5230\u8fbe\u4e00\u4e2a\u4e0d\u7531 B \u652f\u914d\u7684\u5757\u3002\u9664\u975e\u8def\u5f84\u8fd4\u56de\u5230 B\uff0c\u5426\u5219\u4e4b\u540e\u7684\u6240\u6709\u5757\u90fd\u4e0d\u53d7 B \u652f\u914d\u3002\u4e0d\u88ab B \u652f\u914d\u7684\u7b2c\u4e00\u4e2a\u5757\u662f\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u5b83\u6307\u793a\u4e86 B \u652f\u914d\u7684\u5757\u7684\u8303\u56f4\uff0c\u5e76\u4f7f\u7528\u6709\u5173 B \u4e2d\u7684\u8ba1\u7b97\u7684\u4fe1\u606f\u6307\u793a\u4e86\u4f18\u5316\u7684\u9650\u5236\u3002\u8003\u8651\u5230\u6240\u6709\u8def\u5f84\uff0c\u62e5\u6709\u8be5\u7279\u5f81\u7684\u5757\u7684\u96c6\u5408\u79f0\u4e3a\u652f\u914d B \u7684\u8fb9\u754c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u9996\u5148\u7ed9\u51fa\u652f\u914d\u8fb9\u754c\u7684\u5f62\u5f0f\u5316\u5b9a\u4e49\uff1a"}),"\n",(0,t.jsx)(r.OO,{math:"\nDF(X) = \\{Y | \\exists Z \\in Dom(X) \\text{ such that } Y \\text{ is an immediate successor of } Z \\text{ and } X \\not\\in Dom(Y)\\}\n"}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(r.GP,{math:"DF(X)"})," \u8868\u793a\u8282\u70b9X\u7684\u652f\u914d\u8fb9\u754c"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(r.GP,{math:"Dom(X)"})," \u8868\u793a\u88abX\u652f\u914d\u7684\u8282\u70b9\u96c6\u5408"]}),"\n",(0,t.jsx)(n.li,{children:"Y\u662fX\u7684\u652f\u914d\u8fb9\u754c\u4e2d\u7684\u4e00\u4e2a\u8282\u70b9"}),"\n",(0,t.jsx)(n.li,{children:"Z\u662f\u88abX\u652f\u914d\u7684\u67d0\u4e2a\u8282\u70b9"}),"\n",(0,t.jsx)(n.li,{children:"Y\u662fZ\u7684\u76f4\u63a5\u540e\u7ee7\u8282\u70b9"}),"\n",(0,t.jsx)(n.li,{children:"X\u4e0d\u652f\u914dY"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u7528\u4e00\u4e2a\u5177\u4f53\u7684\u4f8b\u5b50\u6765\u8bf4\u660e\uff1a"}),"\n",(0,t.jsx)(n.mermaid,{value:'graph LR\n  subgraph cluster [" "]\n      style cluster fill:#E8E8E8,stroke:#CCCCCC\n      5 --\x3e 6\n      6 --\x3e 8\n      6 --\x3e 7\n      7 --\x3e 8\n  end\n  1 --\x3e 2\n  2 --\x3e 3\n  3 --\x3e 4\n  4 --\x3e 13\n  1 --\x3e 5\n  8 --\x3e 13\n  6 --\x3e 4\n  7 --\x3e 12\n  12 --\x3e 13\n  1 --\x3e 9\n  9 --\x3e 10\n  10 --\x3e 12\n  9 --\x3e 11\n  11 --\x3e 12'}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u7ed9\u51fa\u56fe\u4e2d\u5404\u8282\u70b9\u7684\u652f\u914d\u8fb9\u754c\u5206\u6790\u8868\u683c\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u8282\u70b9"}),(0,t.jsx)(n.th,{children:"\u652f\u914d\u7684\u8282\u70b9\u96c6\u5408 Dom(X)"}),(0,t.jsx)(n.th,{children:"\u76f4\u63a5\u540e\u7ee7\u8282\u70b9"}),(0,t.jsx)(n.th,{children:"\u652f\u914d\u8fb9\u754c DF(X)"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"{1,2,3,4,5,6,7,8,9,10,11,12,13}"}),(0,t.jsx)(n.td,{children:"{2,5,9}"}),(0,t.jsx)(n.td,{children:"\u2205"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"{2,3}"}),(0,t.jsx)(n.td,{children:"{3}"}),(0,t.jsx)(n.td,{children:"{4}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"{3}"}),(0,t.jsx)(n.td,{children:"{4}"}),(0,t.jsx)(n.td,{children:"{4}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"{4}"}),(0,t.jsx)(n.td,{children:"{13}"}),(0,t.jsx)(n.td,{children:"{13}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"{5,6,7,8}"}),(0,t.jsx)(n.td,{children:"{6}"}),(0,t.jsx)(n.td,{children:"{4,12,13}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"{6,7,8}"}),(0,t.jsx)(n.td,{children:"{4,7,8}"}),(0,t.jsx)(n.td,{children:"{4,12,13}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"{7}"}),(0,t.jsx)(n.td,{children:"{8,12}"}),(0,t.jsx)(n.td,{children:"{8,12}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"{8}"}),(0,t.jsx)(n.td,{children:"{13}"}),(0,t.jsx)(n.td,{children:"{13}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"9"}),(0,t.jsx)(n.td,{children:"{9,10,11}"}),(0,t.jsx)(n.td,{children:"{10,11}"}),(0,t.jsx)(n.td,{children:"{12}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"{10}"}),(0,t.jsx)(n.td,{children:"{12}"}),(0,t.jsx)(n.td,{children:"{12}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"11"}),(0,t.jsx)(n.td,{children:"{11}"}),(0,t.jsx)(n.td,{children:"{12}"}),(0,t.jsx)(n.td,{children:"{12}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"12"}),(0,t.jsx)(n.td,{children:"{12}"}),(0,t.jsx)(n.td,{children:"{13}"}),(0,t.jsx)(n.td,{children:"{13}"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"13"}),(0,t.jsx)(n.td,{children:"{13}"}),(0,t.jsx)(n.td,{children:"\u2205"}),(0,t.jsx)(n.td,{children:"\u2205"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u7ed9\u51fa\u652f\u914d\u8fb9\u754c\u8ba1\u7b97\u7b97\u6cd5\u7684\u5f62\u5f0f\u5316\u8868\u793a\uff1a"}),"\n",(0,t.jsx)(r.OO,{math:"\n\\begin{aligned}\nDF_{local}(X) &= \\{Y \\in succ(X) \\mid X \\not\\in Dom(Y)\\} \\\\\nDF_{up}(X) &= \\bigcup_{Z \\in DomTree_{children}(X)} \\{Y \\in DF(Z) \\mid X \\not\\in Dom(Y)\\} \\\\\nDF(X) &= DF_{local}(X) \\cup DF_{up}(X)\n\\end{aligned}\n"}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(r.GP,{math:"DF_{local}(X)"})," \u8868\u793a\u8282\u70b9X\u7684\u5c40\u90e8\u652f\u914d\u8fb9\u754c"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(r.GP,{math:"DF_{up}(X)"})," \u8868\u793a\u4eceX\u7684\u652f\u914d\u6811\u5b50\u8282\u70b9\u4e0a\u4f20\u9012\u6765\u7684\u652f\u914d\u8fb9\u754c"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(r.GP,{math:"succ(X)"})," \u8868\u793aX\u7684\u76f4\u63a5\u540e\u7ee7\u8282\u70b9\u96c6\u5408"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(r.GP,{math:"DomTree_{children}(X)"})," \u8868\u793aX\u5728\u652f\u914d\u6811\u4e2d\u7684\u76f4\u63a5\u5b50\u8282\u70b9\u96c6\u5408"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u8ba1\u7b97\u652f\u914d\u8fb9\u754c\u7684\u5b8c\u6574\u7b97\u6cd5\u4f2a\u4ee3\u7801\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \u8ba1\u7b97\u6240\u6709\u8282\u70b9\u7684\u652f\u914d\u8fb9\u754c\nfunction computeDominanceFrontiers(cfg) {\n    let DF = new Map()  // \u5b58\u50a8\u6bcf\u4e2a\u8282\u70b9\u7684\u652f\u914d\u8fb9\u754c\n    \n    // \u6309\u7167\u652f\u914d\u6811\u7684\u540e\u5e8f\u904d\u5386\u8282\u70b9\n    for (let X of postorderTraversal(cfg.domTree)) {\n        DF.set(X, new Set())  // \u521d\u59cb\u5316\u7a7a\u96c6\n        \n        // \u8ba1\u7b97\u5c40\u90e8\u652f\u914d\u8fb9\u754c\n        for (let Y of X.successors) {\n            if (X.immediateDominator !== Y.immediateDominator) {\n                DF.get(X).add(Y)\n            }\n        }\n        \n        // \u8ba1\u7b97\u6765\u81ea\u5b50\u8282\u70b9\u7684\u652f\u914d\u8fb9\u754c\n        for (let Z of X.domTreeChildren) {\n            for (let Y of DF.get(Z)) {\n                if (!dominates(X, Y) || X === Y) {\n                    DF.get(X).add(Y)\n                }\n            }\n        }\n    }\n    return DF\n}\n\n// \u5224\u65adX\u662f\u5426\u652f\u914dY\nfunction dominates(X, Y) {\n    return Y.dominators.has(X)\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},97015:(e,n,s)=>{s.d(n,{Ay:()=>x,GP:()=>o,OO:()=>h});var i=s(96540),t=s(22130),d=s(20354),r=s.n(d),l=s(74848);const c={throwOnError:!1,strict:!1,trust:!1,macros:{"\\RR":"\\mathbb{R}","\\NN":"\\mathbb{N}","\\ZZ":"\\mathbb{Z}"}},a=e=>{let{math:n,inline:s=!1,onError:d,options:a={},className:x=""}=e;const o=(0,i.useRef)(null),[h,j]=(0,i.useState)(!1),[p,m]=(0,i.useState)(!1),[u,f]=(0,i.useState)(!1),[g,b]=(0,i.useState)(!1),[y,X]=(0,i.useState)({message:"",visible:!1});(0,i.useEffect)((()=>{if(o.current)try{t.default.render(n,o.current,{...c,...a,displayMode:!s})}catch(e){d?d(e):(console.error("KaTeX Error:",e),o.current&&(o.current.textContent=n))}}),[n,s,a,d]);const v=e=>{X({message:e,visible:!0}),setTimeout((()=>{X({message:"",visible:!1})}),2e3)};return(0,l.jsxs)("div",{className:"katex-wrapper "+(h?"hovered":""),onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),style:{position:"relative",padding:"8px",border:h?"2px solid #4a90e2":"1px solid transparent",borderRadius:"4px",display:s?"inline-block":"block",transition:"all 0.3s ease",boxShadow:h?"0 0 8px rgba(74, 144, 226, 0.3)":"none"},children:[y.visible&&(0,l.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0, 0, 0, 0.7)",color:"#fff",padding:"8px 16px",borderRadius:"4px",fontSize:"14px",zIndex:1e3,pointerEvents:"none"},children:y.message}),h&&(0,l.jsxs)("div",{style:{position:"absolute",top:"4px",right:"4px",display:"flex",gap:"8px",zIndex:1},children:[(0,l.jsx)("button",{onClick:async()=>{o.current&&(b(!0),setTimeout((async()=>{try{const e=document.createElement("div");e.style.padding="12px 0";const n=o.current?.cloneNode(!0);if(!n)throw new Error("\u65e0\u6cd5\u514b\u9686\u8282\u70b9");e.appendChild(n),document.body.appendChild(e);const s=await r()(e,{backgroundColor:null,scale:2});document.body.removeChild(e),s.toBlob((async e=>{if(e)try{await navigator.clipboard.write([new ClipboardItem({"image/png":e})]),f(!0),v("\u56fe\u7247\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f"),setTimeout((()=>{f(!1)}),2e3)}catch(n){console.error("\u590d\u5236\u56fe\u7247\u5931\u8d25:",n),v("\u590d\u5236\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}}),"image/png")}catch(e){console.error("\u751f\u6210\u56fe\u7247\u5931\u8d25:",e),v("\u751f\u6210\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}finally{b(!1)}}),500))},disabled:g,style:{padding:"4px 12px",background:u?"#52c41a":g?"#d9d9d9":"#f5f5f5",border:"1px solid "+(u?"#52c41a":g?"#d9d9d9":"#e0e0e0"),borderRadius:"4px",cursor:g?"not-allowed":"pointer",fontSize:"12px",color:u?"#fff":g?"#999":"#666",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"4px",opacity:g?.7:1},children:u?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{style:{fontSize:"14px"},children:"\u2713"}),"\u5df2\u590d\u5236\u56fe\u7247"]}):g?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{style:{display:"inline-block",animation:"spin 1s linear infinite"},children:"\u27f3"}),"\u5bfc\u51fa\u4e2d..."]}):"\u590d\u5236\u4e3a\u56fe\u7247"}),(0,l.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(n),m(!0),setTimeout((()=>{m(!1)}),2e3)},style:{padding:"4px 12px",background:p?"#52c41a":"#f5f5f5",border:"1px solid "+(p?"#52c41a":"#e0e0e0"),borderRadius:"4px",cursor:"pointer",fontSize:"12px",color:p?"#fff":"#666",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"4px"},children:p?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{style:{fontSize:"14px"},children:"\u2713"}),"\u5df2\u590d\u5236"]}):"\u590d\u5236"})]}),(0,l.jsx)("div",{ref:o,className:`katex-container ${s?"inline":"block"} ${x}`})]})},x=a,o=e=>(0,l.jsx)(a,{...e,inline:!0}),h=e=>(0,l.jsx)(a,{...e,inline:!1})}}]);