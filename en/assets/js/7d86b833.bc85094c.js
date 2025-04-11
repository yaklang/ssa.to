"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[1956],{64612:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>j,frontMatter:()=>c,metadata:()=>l,toc:()=>x});const l=JSON.parse('{"id":"statements/sf-variable","title":"\u53d8\u91cf\uff1a\u5b58\u50a8\u548c\u8ffd\u8e2a\u5ba1\u8ba1\u7ed3\u679c","description":"\u5728\u8fdb\u884c\u4ee3\u7801\u5ba1\u8ba1\u548c\u5b89\u5168\u5206\u6790\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5ba1\u8ba1\u4e2d\u95f4\u7ed3\u679c\u7684\u6682\u5b58\u662f\u63d0\u5347\u5206\u6790\u6548\u7387\u548c\u51c6\u786e\u6027\u7684\u91cd\u8981\u624b\u6bb5\u3002SyntaxFlow \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u4f7f\u5f97\u5ba1\u8ba1\u5458\u80fd\u591f\u5c06\u5ba1\u8ba1\u8fc7\u7a0b\u4e2d\u6355\u83b7\u7684\u4e2d\u95f4\u7ed3\u679c\u5b58\u50a8\u4e3a\u53d8\u91cf\uff0c\u65b9\u4fbf\u540e\u7eed\u7684\u5f15\u7528\u548c\u8fdb\u4e00\u6b65\u5206\u6790\u3002\u672c\u8282\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5728 SyntaxFlow \u4e2d\u5ba1\u8ba1\u4e2d\u95f4\u53d8\u91cf\u7684\u6682\u5b58\uff0c\u5305\u62ec\u8bed\u6cd5\u5b9a\u4e49\u3001\u4f7f\u7528\u65b9\u6cd5\u3001\u5b9e\u9645\u6848\u4f8b\u4ee5\u53ca\u5176\u91cd\u8981\u6027\u3002","source":"@site/syntaxflow-guide/statements/sf-variable.mdx","sourceDirName":"statements","slug":"/statements/sf-variable","permalink":"/en/syntaxflow-guide/statements/sf-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/yaklang/ssa.to/tree/main/syntaxflow-guide/syntaxflow-guide/statements/sf-variable.mdx","tags":[],"version":"current","lastUpdatedBy":"wlz","lastUpdatedAt":1744358145000,"frontMatter":{},"sidebar":"syntaxflowGuideSidebar","previous":{"title":"\u51fd\u6570\u8c03\u7528\uff1a\u5ba1\u8ba1\u8c03\u7528\u548c\u53c2\u6570","permalink":"/en/syntaxflow-guide/statements/sf-func-call"},"next":{"title":"\u94fe\u5f0f\u8c03\u7528\uff1a\u9012\u5f52\u68c0\u67e5\u6210\u5458\u548c\u8c03\u7528","permalink":"/en/syntaxflow-guide/statements/sf-dot-call-chain"}}');var r=s(74848),i=s(28453),d=s(14252);const c={},a="\u53d8\u91cf\uff1a\u5b58\u50a8\u548c\u8ffd\u8e2a\u5ba1\u8ba1\u7ed3\u679c",t={},x=[{value:"\u5ba1\u8ba1\u4e2d\u95f4\u7ed3\u679c\u6682\u5b58\u7b80\u4ecb",id:"\u5ba1\u8ba1\u4e2d\u95f4\u7ed3\u679c\u6682\u5b58\u7b80\u4ecb",level:2},{value:"\u8bed\u6cd5\u7ed3\u6784",id:"\u8bed\u6cd5\u7ed3\u6784",level:2},{value:"RefFilterExpr",id:"reffilterexpr",level:3},{value:"PureFilterExpr",id:"purefilterexpr",level:3},{value:"\u4f7f\u7528 <code>as</code> \u5173\u952e\u5b57",id:"\u4f7f\u7528-as-\u5173\u952e\u5b57",level:2},{value:"\u8bed\u6cd5\u5b9a\u4e49",id:"\u8bed\u6cd5\u5b9a\u4e49",level:3},{value:"\u793a\u4f8b\u8bf4\u660e",id:"\u793a\u4f8b\u8bf4\u660e",level:2},{value:"\u793a\u4f8b 1\uff1a\u6355\u83b7\u51fd\u6570\u8c03\u7528\u53c2\u6570",id:"\u793a\u4f8b-1\u6355\u83b7\u51fd\u6570\u8c03\u7528\u53c2\u6570",level:3},{value:"\u793a\u4f8b 2\uff1a\u8ffd\u8e2a\u6570\u636e\u5e93\u67e5\u8be2\u8bed\u53e5",id:"\u793a\u4f8b-2\u8ffd\u8e2a\u6570\u636e\u5e93\u67e5\u8be2\u8bed\u53e5",level:3},{value:"\u5b9e\u6218\u5e94\u7528",id:"\u5b9e\u6218\u5e94\u7528",level:2},{value:"\u6848\u4f8b 1\uff1a\u5ba1\u8ba1\u654f\u611f\u51fd\u6570\u7684\u591a\u6b65\u9aa4\u8c03\u7528",id:"\u6848\u4f8b-1\u5ba1\u8ba1\u654f\u611f\u51fd\u6570\u7684\u591a\u6b65\u9aa4\u8c03\u7528",level:3},{value:"\u6848\u4f8b 2\uff1a\u5206\u6790\u6570\u636e\u6d41\u4e2d\u7684\u4e2d\u95f4\u53d8\u91cf",id:"\u6848\u4f8b-2\u5206\u6790\u6570\u636e\u6d41\u4e2d\u7684\u4e2d\u95f4\u53d8\u91cf",level:3},{value:"\u91cd\u8981\u6027\u4e0e\u4f18\u52bf",id:"\u91cd\u8981\u6027\u4e0e\u4f18\u52bf",level:2},{value:"1. \u6a21\u5757\u5316",id:"1-\u6a21\u5757\u5316",level:3},{value:"2. \u91cd\u7528\u6027",id:"2-\u91cd\u7528\u6027",level:3},{value:"3. \u6e05\u6670\u6027",id:"3-\u6e05\u6670\u6027",level:3},{value:"4. \u6570\u636e\u6d41\u8ffd\u8e2a",id:"4-\u6570\u636e\u6d41\u8ffd\u8e2a",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"1. \u4f7f\u7528\u6709\u610f\u4e49\u7684\u53d8\u91cf\u540d",id:"1-\u4f7f\u7528\u6709\u610f\u4e49\u7684\u53d8\u91cf\u540d",level:3},{value:"2. \u9650\u5236\u53d8\u91cf\u7684\u4f5c\u7528\u57df",id:"2-\u9650\u5236\u53d8\u91cf\u7684\u4f5c\u7528\u57df",level:3},{value:"3. \u7ed3\u5408\u6b63\u5219\u8868\u8fbe\u5f0f\u548c\u901a\u914d\u7b26",id:"3-\u7ed3\u5408\u6b63\u5219\u8868\u8fbe\u5f0f\u548c\u901a\u914d\u7b26",level:3},{value:"4. \u5206\u6b65\u9aa4\u5ba1\u8ba1",id:"4-\u5206\u6b65\u9aa4\u5ba1\u8ba1",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u53d8\u91cf\u5b58\u50a8\u548c\u8ffd\u8e2a\u5ba1\u8ba1\u7ed3\u679c",children:"\u53d8\u91cf\uff1a\u5b58\u50a8\u548c\u8ffd\u8e2a\u5ba1\u8ba1\u7ed3\u679c"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8fdb\u884c\u4ee3\u7801\u5ba1\u8ba1\u548c\u5b89\u5168\u5206\u6790\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5ba1\u8ba1\u4e2d\u95f4\u7ed3\u679c\u7684\u6682\u5b58\u662f\u63d0\u5347\u5206\u6790\u6548\u7387\u548c\u51c6\u786e\u6027\u7684\u91cd\u8981\u624b\u6bb5\u3002",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u4f7f\u5f97\u5ba1\u8ba1\u5458\u80fd\u591f\u5c06\u5ba1\u8ba1\u8fc7\u7a0b\u4e2d\u6355\u83b7\u7684\u4e2d\u95f4\u7ed3\u679c\u5b58\u50a8\u4e3a\u53d8\u91cf\uff0c\u65b9\u4fbf\u540e\u7eed\u7684\u5f15\u7528\u548c\u8fdb\u4e00\u6b65\u5206\u6790\u3002\u672c\u8282\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5728 ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u4e2d\u5ba1\u8ba1\u4e2d\u95f4\u53d8\u91cf\u7684\u6682\u5b58\uff0c\u5305\u62ec\u8bed\u6cd5\u5b9a\u4e49\u3001\u4f7f\u7528\u65b9\u6cd5\u3001\u5b9e\u9645\u6848\u4f8b\u4ee5\u53ca\u5176\u91cd\u8981\u6027\u3002"]}),"\n","\n",(0,r.jsx)(d.A,{toc:x}),"\n",(0,r.jsx)(n.h2,{id:"\u5ba1\u8ba1\u4e2d\u95f4\u7ed3\u679c\u6682\u5b58\u7b80\u4ecb",children:"\u5ba1\u8ba1\u4e2d\u95f4\u7ed3\u679c\u6682\u5b58\u7b80\u4ecb"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u590d\u6742\u7684\u4ee3\u7801\u5ba1\u8ba1\u8fc7\u7a0b\u4e2d\uff0c\u5ba1\u8ba1\u5458\u5f80\u5f80\u9700\u8981\u8ffd\u8e2a\u548c\u5206\u6790\u591a\u4e2a\u6b65\u9aa4\u4e2d\u7684\u4e2d\u95f4\u7ed3\u679c\u3002\u901a\u8fc7\u5c06\u8fd9\u4e9b\u4e2d\u95f4\u7ed3\u679c\u6682\u5b58\u4e3a\u53d8\u91cf\uff0c\u53ef\u4ee5\u5927\u5927\u7b80\u5316\u5206\u6790\u8fc7\u7a0b\uff0c\u63d0\u9ad8\u5ba1\u8ba1\u89c4\u5219\u7684\u7075\u6d3b\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u63d0\u4f9b\u4e86\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"as"})," \u5173\u952e\u5b57\u5c06\u5ba1\u8ba1\u7ed3\u679c\u5b58\u50a8\u4e3a\u53d8\u91cf\u7684\u529f\u80fd\uff0c\u5141\u8bb8\u7528\u6237\u5728\u5ba1\u8ba1\u8868\u8fbe\u5f0f\u4e2d\u5f15\u7528\u8fd9\u4e9b\u53d8\u91cf\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u5206\u6790\u548c\u8fc7\u6ee4\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5\u7ed3\u6784",children:"\u8bed\u6cd5\u7ed3\u6784"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u4e2d\uff0c\u5ba1\u8ba1\u4e2d\u95f4\u7ed3\u679c\u7684\u6682\u5b58\u57fa\u4e8e\u4ee5\u4e0b\u4e24\u79cd\u57fa\u672c\u7684\u8868\u8fbe\u5f0f\uff1a"]}),"\n",(0,r.jsx)(n.h3,{id:"reffilterexpr",children:"RefFilterExpr"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-antlr",children:"filterStatement\n    : refVariable filterItem*  (As refVariable)? # RefFilterExpr\n    | filterExpr  (As refVariable)?              # PureFilterExpr\n    ;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5f62\u5f0f"}),": ",(0,r.jsx)(n.code,{children:"refVariable filterItem* (as refVariable)?"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u63cf\u8ff0"}),": \u8fd9\u79cd\u5f62\u5f0f\u5141\u8bb8\u4ece\u4e00\u4e2a\u5f15\u7528\u53d8\u91cf\u5f00\u59cb\uff0c\u7ecf\u8fc7\u4e00\u7cfb\u5217\u7684\u8fc7\u6ee4\u64cd\u4f5c\uff0c\u6700\u7ec8\u53ef\u9009\u5730\u5c06\u7ed3\u679c\u518d\u6b21\u5b58\u50a8\u5230\u65b0\u7684\u5f15\u7528\u53d8\u91cf\u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"purefilterexpr",children:"PureFilterExpr"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-antlr",children:"filterStatement\n    : refVariable filterItem*  (As refVariable)? # RefFilterExpr\n    | filterExpr  (As refVariable)?              # PureFilterExpr\n    ;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5f62\u5f0f"}),": ",(0,r.jsx)(n.code,{children:"filterExpr (as refVariable)?"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u63cf\u8ff0"}),": \u8fd9\u79cd\u5f62\u5f0f\u76f4\u63a5\u4ece\u4e00\u4e2a\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u5f00\u59cb\uff0c\u5e76\u53ef\u9009\u5730\u5c06\u7ed3\u679c\u5b58\u50a8\u5230\u4e00\u4e2a\u5f15\u7528\u53d8\u91cf\u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u4f7f\u7528-as-\u5173\u952e\u5b57",children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"as"})," \u5173\u952e\u5b57"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"as"})," \u5173\u952e\u5b57\u7528\u4e8e\u5c06\u67d0\u4e2a\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u6216\u64cd\u4f5c\u7684\u7ed3\u679c\u5b58\u50a8\u5230\u4e00\u4e2a\u53d8\u91cf\u4e2d\uff0c\u4fbf\u4e8e\u540e\u7eed\u7684\u5f15\u7528\u548c\u64cd\u4f5c\u3002\u8fd9\u5728\u5904\u7406\u590d\u6742\u7684\u6570\u636e\u6d41\u6216\u591a\u6b65\u9aa4\u7684\u4ee3\u7801\u5ba1\u8ba1\u4e2d\u5c24\u4e3a\u91cd\u8981\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bed\u6cd5\u5b9a\u4e49",children:"\u8bed\u6cd5\u5b9a\u4e49"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-antlr",children:"filterStatement\n    : refVariable filterItem*  (As refVariable)? # RefFilterExpr\n    | filterExpr  (As refVariable)?              # PureFilterExpr\n    ;\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"refVariable"})}),": \u7528\u4e8e\u5f15\u7528\u5df2\u5b58\u50a8\u7684\u53d8\u91cf\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"filterItem"})}),": \u5305\u542b\u8fc7\u6ee4\u64cd\u4f5c\uff0c\u5982\u51fd\u6570\u8c03\u7528\u3001\u65b9\u6cd5\u94fe\u7b49\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"As refVariable"})}),": \u53ef\u9009\u90e8\u5206\uff0c\u5c06\u5f53\u524d\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u5b58\u50a8\u5230\u6307\u5b9a\u7684\u53d8\u91cf\u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793a\u4f8b\u8bf4\u660e",children:"\u793a\u4f8b\u8bf4\u660e"}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b-1\u6355\u83b7\u51fd\u6570\u8c03\u7528\u53c2\u6570",children:"\u793a\u4f8b 1\uff1a\u6355\u83b7\u51fd\u6570\u8c03\u7528\u53c2\u6570"}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u8bbe\u6211\u4eec\u9700\u8981\u8ffd\u8e2a\u51fd\u6570 ",(0,r.jsx)(n.code,{children:"parse"})," \u88ab\u8c03\u7528\u65f6\u4f20\u9012\u7684\u53c2\u6570\uff0c\u5e76\u5e0c\u671b\u8fdb\u4e00\u6b65\u5206\u6790\u8fd9\u4e9b\u53c2\u6570\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u67e5\u8be2\u793a\u4f8b:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:".parse(* as $params);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u89e3\u91ca:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"*"}),"\uff1a\u5339\u914d ",(0,r.jsx)(n.code,{children:"parse"})," \u65b9\u6cd5\u7684\u6240\u6709\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"as $params"}),"\uff1a\u5c06\u5339\u914d\u5230\u7684\u53c2\u6570\u5b58\u50a8\u5230\u53d8\u91cf ",(0,r.jsx)(n.code,{children:"$params"})," \u4e2d\uff0c\u4fbf\u4e8e\u540e\u7eed\u5f15\u7528\u548c\u5206\u6790\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b-2\u8ffd\u8e2a\u6570\u636e\u5e93\u67e5\u8be2\u8bed\u53e5",children:"\u793a\u4f8b 2\uff1a\u8ffd\u8e2a\u6570\u636e\u5e93\u67e5\u8be2\u8bed\u53e5"}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u8bbe\u9700\u8981\u5ba1\u8ba1\u6570\u636e\u5e93\u67e5\u8be2\u51fd\u6570 ",(0,r.jsx)(n.code,{children:"executeQuery"})," \u7684\u53c2\u6570\uff0c\u4ee5\u68c0\u6d4b\u53ef\u80fd\u7684 SQL \u6ce8\u5165\u98ce\u9669\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u67e5\u8be2\u793a\u4f8b:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:".createStatement().executeQuery(* as $sql);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u89e3\u91ca:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".createStatement()"}),"\uff1a\u5b9a\u4f4d\u521b\u5efa\u6570\u636e\u5e93\u8bed\u53e5\u7684\u8c03\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".executeQuery(* as $sql)"}),"\uff1a\u6355\u83b7 ",(0,r.jsx)(n.code,{children:"executeQuery"})," \u65b9\u6cd5\u7684\u6240\u6709\u53c2\u6570\uff0c\u5e76\u5c06\u5176\u5b58\u50a8\u5230\u53d8\u91cf ",(0,r.jsx)(n.code,{children:"$sql"})," \u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9e\u6218\u5e94\u7528",children:"\u5b9e\u6218\u5e94\u7528"}),"\n",(0,r.jsx)(n.h3,{id:"\u6848\u4f8b-1\u5ba1\u8ba1\u654f\u611f\u51fd\u6570\u7684\u591a\u6b65\u9aa4\u8c03\u7528",children:"\u6848\u4f8b 1\uff1a\u5ba1\u8ba1\u654f\u611f\u51fd\u6570\u7684\u591a\u6b65\u9aa4\u8c03\u7528"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u76ee\u6807"}),"\uff1a\u5ba1\u8ba1 ",(0,r.jsx)(n.code,{children:"DocumentBuilderFactory"})," \u7684\u914d\u7f6e\u548c\u4f7f\u7528\uff0c\u786e\u4fdd XML \u89e3\u6790\u5668\u7684\u5b89\u5168\u914d\u7f6e\uff0c\u4ee5\u9632\u6b62 XXE \u653b\u51fb\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u89e3\u6790\u6b65\u9aa4"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5b9a\u4f4d\u5b9e\u4f8b\u5316\u8fc7\u7a0b"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:"DocumentBuilderFactory.newInstance() as $factory;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06 ",(0,r.jsx)(n.code,{children:"DocumentBuilderFactory.newInstance()"})," \u7684\u7ed3\u679c\u5b58\u50a8\u5230\u53d8\u91cf ",(0,r.jsx)(n.code,{children:"$factory"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u914d\u7f6e\u89e3\u6790\u5668"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:"$factory.setFeature(* as $features);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6355\u83b7 ",(0,r.jsx)(n.code,{children:"setFeature"})," \u65b9\u6cd5\u7684\u53c2\u6570\uff0c\u5e76\u5b58\u50a8\u5230 ",(0,r.jsx)(n.code,{children:"$features"})," \u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:["\u521b\u5efa\u89e3\u6790\u5668\u5e76\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"parse"})]}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:"$factory.newDocumentBuilder().parse(* as $source);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6355\u83b7 ",(0,r.jsx)(n.code,{children:"parse"})," \u65b9\u6cd5\u7684\u53c2\u6570\uff0c\u5e76\u5b58\u50a8\u5230 ",(0,r.jsx)(n.code,{children:"$source"})," \u4e2d\uff0c\u4fbf\u4e8e\u8fdb\u4e00\u6b65\u5206\u6790\u662f\u5426\u5b58\u5728\u5b89\u5168\u9690\u60a3\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5b8c\u6574\u67e5\u8be2"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:"DocumentBuilderFactory.newInstance() as $factory;\n$factory.setFeature(* as $features);\n$factory.newDocumentBuilder().parse(* as $source);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6848\u4f8b-2\u5206\u6790\u6570\u636e\u6d41\u4e2d\u7684\u4e2d\u95f4\u53d8\u91cf",children:"\u6848\u4f8b 2\uff1a\u5206\u6790\u6570\u636e\u6d41\u4e2d\u7684\u4e2d\u95f4\u53d8\u91cf"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u76ee\u6807"}),"\uff1a\u8ffd\u8e2a\u7528\u6237\u8f93\u5165\u901a\u8fc7\u591a\u4e2a\u51fd\u6570\u8c03\u7528\u540e\u7684\u6700\u7ec8\u4f7f\u7528\u60c5\u51b5\uff0c\u4ee5\u68c0\u6d4b\u6f5c\u5728\u7684\u672a\u7ecf\u9a8c\u8bc1\u7684\u8f93\u5165\u5904\u7406\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u89e3\u6790\u6b65\u9aa4"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6355\u83b7\u7528\u6237\u8f93\u5165"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:"request.getParameter(* as $input);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u7528\u6237\u8f93\u5165\u53c2\u6570\u5b58\u50a8\u5230 ",(0,r.jsx)(n.code,{children:"$input"})," \u4e2d\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6570\u636e\u5904\u7406"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:"$input?{<string>?{have: filter}} as $safeInput;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9 ",(0,r.jsx)(n.code,{children:"$input"})," \u8fdb\u884c\u6e05\u7406\uff0c\u5e76\u5c06\u7ed3\u679c\u5b58\u50a8\u5230 ",(0,r.jsx)(n.code,{children:"$safeInput"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6700\u7ec8\u4f7f\u7528"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:'alert $safeInput for {msg: "user safe input"};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u6e05\u7406\u540e\u7684\u7528\u6237\u8f93\u5165 ",(0,r.jsx)(n.code,{children:"$safeInput"})," \u6253\u5370\u51fa\u6765\uff0c\u4fbf\u4e8e\u8fdb\u4e00\u6b65\u5206\u6790\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u5b8c\u6574\u67e5\u8be2"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:'request.getParameter(* as $input);\n$input?{<string>?{have: filter}} as $safeInput;\nalert $safeInput for {msg: "user safe input"};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u91cd\u8981\u6027\u4e0e\u4f18\u52bf",children:"\u91cd\u8981\u6027\u4e0e\u4f18\u52bf"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"as"})," \u5173\u952e\u5b57\u5c06\u4e2d\u95f4\u7ed3\u679c\u5b58\u50a8\u4e3a\u53d8\u91cf\uff0c\u4e3a\u7f16\u5199\u9ad8\u6548\u4e14\u6613\u4e8e\u7ba1\u7406\u7684\u5ba1\u8ba1\u89c4\u5219\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u4f18\u52bf\uff1a"]}),"\n",(0,r.jsx)(n.h3,{id:"1-\u6a21\u5757\u5316",children:"1. \u6a21\u5757\u5316"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u590d\u6742\u7684\u5ba1\u8ba1\u4efb\u52a1\u5206\u89e3\u6210\u591a\u4e2a\u7b80\u5355\u3001\u6a21\u5757\u5316\u7684\u6b65\u9aa4\uff0c\u6bcf\u4e2a\u6b65\u9aa4\u5b58\u50a8\u4e2d\u95f4\u7ed3\u679c\uff0c\u4fbf\u4e8e\u72ec\u7acb\u5206\u6790\u548c\u8c03\u8bd5\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"2-\u91cd\u7528\u6027",children:"2. \u91cd\u7528\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u5b58\u50a8\u7684\u53d8\u91cf\u53ef\u4ee5\u5728\u591a\u4e2a\u4e0d\u540c\u7684\u5ba1\u8ba1\u8868\u8fbe\u5f0f\u4e2d\u91cd\u590d\u4f7f\u7528\uff0c\u907f\u514d\u4e86\u91cd\u590d\u7f16\u5199\u76f8\u540c\u7684\u8fc7\u6ee4\u903b\u8f91\uff0c\u63d0\u9ad8\u4e86\u89c4\u5219\u7684\u53ef\u7ef4\u62a4\u6027\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"3-\u6e05\u6670\u6027",children:"3. \u6e05\u6670\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u660e\u786e\u6807\u8bb0\u548c\u5b58\u50a8\u5173\u952e\u5ba1\u8ba1\u70b9\u7684\u7ed3\u679c\uff0c\u4f7f\u5f97\u5ba1\u8ba1\u8fc7\u7a0b\u66f4\u52a0\u900f\u660e\u548c\u6613\u4e8e\u7406\u89e3\uff0c\u65b9\u4fbf\u5176\u4ed6\u5ba1\u8ba1\u5458\u6216\u5f00\u53d1\u8005\u5feb\u901f\u638c\u63e1\u5ba1\u8ba1\u89c4\u5219\u7684\u903b\u8f91\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"4-\u6570\u636e\u6d41\u8ffd\u8e2a",children:"4. \u6570\u636e\u6d41\u8ffd\u8e2a"}),"\n",(0,r.jsxs)(n.p,{children:["\u5229\u7528 ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u7684 SSA\uff08\u9759\u6001\u5355\u8d4b\u503c\uff09\u67b6\u6784\uff0c\u6bcf\u4e2a\u53d8\u91cf\u5728\u751f\u547d\u5468\u671f\u5185\u53ea\u88ab\u8d4b\u503c\u4e00\u6b21\uff0c\u786e\u4fdd\u6570\u636e\u6d41\u8ffd\u8e2a\u7684\u51c6\u786e\u6027\uff0c\u5373\u4f7f\u5728\u590d\u6742\u7684\u94fe\u5f0f\u8c03\u7528\u548c\u591a\u6b21\u8d4b\u503c\u7684\u60c5\u51b5\u4e0b\uff0c\u4e5f\u80fd\u6709\u6548\u5730\u8ddf\u8e2a\u53d8\u91cf\u7684\u53d8\u5316\u548c\u4f7f\u7528\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,r.jsx)(n.h3,{id:"1-\u4f7f\u7528\u6709\u610f\u4e49\u7684\u53d8\u91cf\u540d",children:"1. \u4f7f\u7528\u6709\u610f\u4e49\u7684\u53d8\u91cf\u540d"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u5b58\u50a8\u7684\u53d8\u91cf\u9009\u62e9\u6709\u610f\u4e49\u7684\u540d\u79f0\uff0c\u5982 ",(0,r.jsx)(n.code,{children:"$params"}),"\u3001",(0,r.jsx)(n.code,{children:"$sql"})," \u7b49\uff0c\u4fbf\u4e8e\u540e\u7eed\u7684\u5f15\u7528\u548c\u7406\u89e3\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"2-\u9650\u5236\u53d8\u91cf\u7684\u4f5c\u7528\u57df",children:"2. \u9650\u5236\u53d8\u91cf\u7684\u4f5c\u7528\u57df"}),"\n",(0,r.jsx)(n.p,{children:"\u4ec5\u5728\u5fc5\u8981\u7684\u5ba1\u8ba1\u6b65\u9aa4\u4e2d\u5b58\u50a8\u4e2d\u95f4\u7ed3\u679c\uff0c\u907f\u514d\u8fc7\u5ea6\u4f7f\u7528\u53d8\u91cf\u5bfc\u81f4\u89c4\u5219\u590d\u6742\u5316\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"3-\u7ed3\u5408\u6b63\u5219\u8868\u8fbe\u5f0f\u548c\u901a\u914d\u7b26",children:"3. \u7ed3\u5408\u6b63\u5219\u8868\u8fbe\u5f0f\u548c\u901a\u914d\u7b26"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5b9a\u4e49\u8fc7\u6ee4\u6761\u4ef6\u65f6\uff0c\u7ed3\u5408\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u548c\u901a\u914d\u7b26\u4ee5\u63d0\u9ad8\u5339\u914d\u7684\u7cbe\u786e\u6027\u548c\u7075\u6d3b\u6027\uff0c\u540c\u65f6\u5c06\u5339\u914d\u7ed3\u679c\u5b58\u50a8\u5230\u53d8\u91cf\u4e2d\u4ee5\u4fbf\u8fdb\u4e00\u6b65\u5206\u6790\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"4-\u5206\u6b65\u9aa4\u5ba1\u8ba1",children:"4. \u5206\u6b65\u9aa4\u5ba1\u8ba1"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u590d\u6742\u7684\u5ba1\u8ba1\u4efb\u52a1\u5206\u89e3\u4e3a\u591a\u4e2a\u6b65\u9aa4\uff0c\u6bcf\u4e00\u6b65\u90fd\u5b58\u50a8\u5173\u952e\u7684\u4e2d\u95f4\u7ed3\u679c\uff0c\u4fbf\u4e8e\u9010\u6b65\u5206\u6790\u548c\u9a8c\u8bc1\u3002"})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);