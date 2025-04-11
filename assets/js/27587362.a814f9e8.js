"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[7851],{77455:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>t,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"statements/sf-dot-call-chain","title":"\u94fe\u5f0f\u8c03\u7528\uff1a\u9012\u5f52\u68c0\u67e5\u6210\u5458\u548c\u8c03\u7528","description":"\u5728\u73b0\u4ee3\u7f16\u7a0b\u4e2d\uff0c\u94fe\u5f0f\u8c03\u7528\uff08Chained Invocation\uff09\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5404\u7c7b\u6846\u67b6\u548c\u5e93\u4e2d\uff0c\u7279\u522b\u662f\u5728 Java \u4e2d\u7684\u6784\u9020\u5668\u548c\u5de5\u5382\u65b9\u6cd5\u4e2d\u3002\u6df1\u5ea6\u904d\u5386\u94fe\u5f0f\u8c03\u7528\uff08Deep Chain Invocation Tracing\uff09\u662f\u4e00\u79cd\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\u7684\u6280\u672f\uff0c\u5141\u8bb8\u5206\u6790\u5de5\u5177\u6216\u7a0b\u5e8f\u5458\u5feb\u901f\u8ffd\u8e2a\u5230\u67d0\u4e2a\u7279\u5b9a\u65b9\u6cd5\u8c03\u7528\uff0c\u65e0\u8bba\u8fd9\u4e2a\u8c03\u7528\u662f\u76f4\u63a5\u53d1\u751f\u8fd8\u662f\u901a\u8fc7\u591a\u5c42\u94fe\u5f0f\u65b9\u6cd5\u8c03\u7528\u95f4\u63a5\u53d1\u751f\u7684\u3002\u8fd9\u79cd\u6280\u672f\u5728\u590d\u6742\u4ee3\u7801\u5ba1\u8ba1\u548c\u5b89\u5168\u5206\u6790\u4e2d\u5177\u6709\u91cd\u8981\u610f\u4e49\uff0c\u80fd\u591f\u5927\u5e45\u63d0\u5347\u5ba1\u8ba1\u6548\u7387\u548c\u51c6\u786e\u6027\u3002","source":"@site/syntaxflow-guide/statements/sf-dot-call-chain.mdx","sourceDirName":"statements","slug":"/statements/sf-dot-call-chain","permalink":"/syntaxflow-guide/statements/sf-dot-call-chain","draft":false,"unlisted":false,"editUrl":"https://github.com/yaklang/ssa.to/tree/main/syntaxflow-guide/syntaxflow-guide/statements/sf-dot-call-chain.mdx","tags":[],"version":"current","lastUpdatedBy":"wlz","lastUpdatedAt":1744358145000,"frontMatter":{},"sidebar":"syntaxflowGuideSidebar","previous":{"title":"\u53d8\u91cf\uff1a\u5b58\u50a8\u548c\u8ffd\u8e2a\u5ba1\u8ba1\u7ed3\u679c","permalink":"/syntaxflow-guide/statements/sf-variable"},"next":{"title":"\u6570\u636e\u6d41\u8fd0\u7b97\uff1a\u8ffd\u8e2a\u5b9a\u4e49\u548c\u4f7f\u7528","permalink":"/syntaxflow-guide/statements/sf-dataflow"}}');var r=s(74848),i=s(28453),d=s(14252);const c={},t="\u94fe\u5f0f\u8c03\u7528\uff1a\u9012\u5f52\u68c0\u67e5\u6210\u5458\u548c\u8c03\u7528",a={},h=[{value:"\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\u7b80\u4ecb",id:"\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\u7b80\u4ecb",level:2},{value:"\u8bed\u6cd5\u5b9a\u4e49",id:"\u8bed\u6cd5\u5b9a\u4e49",level:2},{value:"\u793a\u4f8b\u8bf4\u660e",id:"\u793a\u4f8b\u8bf4\u660e",level:2},{value:"\u6848\u4f8b\u5206\u6790\u4e0e\u8bed\u6cd5\u5e94\u7528",id:"\u6848\u4f8b\u5206\u6790\u4e0e\u8bed\u6cd5\u5e94\u7528",level:3},{value:"\u5b9e\u6218\u5e94\u7528",id:"\u5b9e\u6218\u5e94\u7528",level:2},{value:"\u6848\u4f8b\uff1a\u8ffd\u8e2a XML \u89e3\u6790\u5668\u7684\u914d\u7f6e\u548c\u4f7f\u7528",id:"\u6848\u4f8b\u8ffd\u8e2a-xml-\u89e3\u6790\u5668\u7684\u914d\u7f6e\u548c\u4f7f\u7528",level:3},{value:"\u91cd\u8981\u6027\u4e0e\u4f18\u52bf",id:"\u91cd\u8981\u6027\u4e0e\u4f18\u52bf",level:2},{value:"1. <strong>\u7b80\u5316\u89c4\u5219\u7f16\u5199</strong>",id:"1-\u7b80\u5316\u89c4\u5219\u7f16\u5199",level:3},{value:"2. <strong>\u63d0\u5347\u5ba1\u8ba1\u6548\u7387</strong>",id:"2-\u63d0\u5347\u5ba1\u8ba1\u6548\u7387",level:3},{value:"3. <strong>\u589e\u5f3a\u89c4\u5219\u7684\u53ef\u7ef4\u62a4\u6027</strong>",id:"3-\u589e\u5f3a\u89c4\u5219\u7684\u53ef\u7ef4\u62a4\u6027",level:3},{value:"4. <strong>\u63d0\u9ad8\u5ba1\u8ba1\u8986\u76d6\u7387</strong>",id:"4-\u63d0\u9ad8\u5ba1\u8ba1\u8986\u76d6\u7387",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"1. <strong>\u660e\u786e\u76ee\u6807\u65b9\u6cd5</strong>",id:"1-\u660e\u786e\u76ee\u6807\u65b9\u6cd5",level:3},{value:"2. <strong>\u5408\u7406\u4f7f\u7528\u53d8\u91cf</strong>",id:"2-\u5408\u7406\u4f7f\u7528\u53d8\u91cf",level:3},{value:"3. <strong>\u7ed3\u5408\u5176\u4ed6\u8fc7\u6ee4\u6761\u4ef6</strong>",id:"3-\u7ed3\u5408\u5176\u4ed6\u8fc7\u6ee4\u6761\u4ef6",level:3},{value:"4. <strong>\u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219</strong>",id:"4-\u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219",level:3},{value:"5. <strong>\u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219</strong>",id:"5-\u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"\u94fe\u5f0f\u8c03\u7528\u9012\u5f52\u68c0\u67e5\u6210\u5458\u548c\u8c03\u7528",children:"\u94fe\u5f0f\u8c03\u7528\uff1a\u9012\u5f52\u68c0\u67e5\u6210\u5458\u548c\u8c03\u7528"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u73b0\u4ee3\u7f16\u7a0b\u4e2d\uff0c\u94fe\u5f0f\u8c03\u7528\uff08Chained Invocation\uff09\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5404\u7c7b\u6846\u67b6\u548c\u5e93\u4e2d\uff0c\u7279\u522b\u662f\u5728 Java \u4e2d\u7684\u6784\u9020\u5668\u548c\u5de5\u5382\u65b9\u6cd5\u4e2d\u3002",(0,r.jsx)(e.strong,{children:"\u6df1\u5ea6\u904d\u5386\u94fe\u5f0f\u8c03\u7528"}),"\uff08Deep Chain Invocation Tracing\uff09\u662f\u4e00\u79cd\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\u7684\u6280\u672f\uff0c\u5141\u8bb8\u5206\u6790\u5de5\u5177\u6216\u7a0b\u5e8f\u5458\u5feb\u901f\u8ffd\u8e2a\u5230\u67d0\u4e2a\u7279\u5b9a\u65b9\u6cd5\u8c03\u7528\uff0c\u65e0\u8bba\u8fd9\u4e2a\u8c03\u7528\u662f\u76f4\u63a5\u53d1\u751f\u8fd8\u662f\u901a\u8fc7\u591a\u5c42\u94fe\u5f0f\u65b9\u6cd5\u8c03\u7528\u95f4\u63a5\u53d1\u751f\u7684\u3002\u8fd9\u79cd\u6280\u672f\u5728\u590d\u6742\u4ee3\u7801\u5ba1\u8ba1\u548c\u5b89\u5168\u5206\u6790\u4e2d\u5177\u6709\u91cd\u8981\u610f\u4e49\uff0c\u80fd\u591f\u5927\u5e45\u63d0\u5347\u5ba1\u8ba1\u6548\u7387\u548c\u51c6\u786e\u6027\u3002"]}),"\n","\n",(0,r.jsx)(d.A,{toc:h}),"\n",(0,r.jsx)(e.h2,{id:"\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\u7b80\u4ecb",children:"\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\u7b80\u4ecb"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u590d\u6742\u7684\u4ee3\u7801\u5e93\u4e2d\uff0c\u65b9\u6cd5\u8c03\u7528\u5f80\u5f80\u901a\u8fc7\u591a\u5c42\u94fe\u5f0f\u8c03\u7528\u5b9e\u73b0\uff0c\u76f4\u63a5\u5b9a\u4f4d\u7279\u5b9a\u65b9\u6cd5\u53d8\u5f97\u76f8\u5bf9\u56f0\u96be\u3002",(0,r.jsx)(e.strong,{children:"\u6df1\u5ea6\u904d\u5386\u94fe\u5f0f\u8c03\u7528"}),"\u6280\u672f\u901a\u8fc7\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\uff0c\u80fd\u591f\u9ad8\u6548\u5730\u8ffd\u8e2a\u5230\u76ee\u6807\u65b9\u6cd5\uff0c\u65e0\u9700\u660e\u786e\u6bcf\u4e00\u7ea7\u8c03\u7528\u7684\u7ec6\u8282\u3002\u8fd9\u4f7f\u5f97\u5ba1\u8ba1\u5458\u80fd\u591f\u4e13\u6ce8\u4e8e\u5173\u952e\u65b9\u6cd5\u7684\u5b89\u5168\u6027\u548c\u6b63\u786e\u6027\u5206\u6790\uff0c\u800c\u4e0d\u5fc5\u88ab\u4e2d\u95f4\u5c42\u7684\u5b9e\u73b0\u7ec6\u8282\u6240\u56f0\u6270\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8bed\u6cd5\u5b9a\u4e49",children:"\u8bed\u6cd5\u5b9a\u4e49"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728 ",(0,r.jsx)(e.strong,{children:"SyntaxFlow"})," \u4e2d\uff0c\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\u901a\u8fc7\u7279\u5b9a\u7684\u8bed\u6cd5\u89c4\u5219\u5b9e\u73b0\u3002\u4ee5\u4e0b\u662f\u76f8\u5173\u7684\u8bed\u6cd5\u5b9a\u4e49\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-antlr",children:"filterItem\n    : ...\n    | '...' lines? nameFilter                    # DeepChainFilter\n    ...\n    ;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"'...'"}),"\uff1a\u8868\u793a\u4ece\u5f53\u524d\u4f4d\u7f6e\u5f00\u59cb\uff0c\u5411\u4e0b\u9012\u5f52\u8ffd\u8e2a\uff0c\u76f4\u5230\u627e\u5230\u6307\u5b9a\u7684\u65b9\u6cd5\u6216\u51fd\u6570\uff08\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"nameFilter"})," \u6307\u5b9a\uff09\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"nameFilter"}),"\uff1a\u6307\u5b9a\u76ee\u6807\u65b9\u6cd5\u6216\u51fd\u6570\u7684\u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u79cd\u8bed\u6cd5\u5141\u8bb8\u5f00\u53d1\u8005\u4ee5\u7b80\u6d01\u7684\u65b9\u5f0f\u5b9a\u4e49\u9012\u5f52\u94fe\u5f0f\u8c03\u7528\u7684\u5339\u914d\u89c4\u5219\uff0c\u51cf\u5c11\u4e86\u4e66\u5199\u5b8c\u6574\u65b9\u6cd5\u94fe\u7684\u7e41\u7410\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u793a\u4f8b\u8bf4\u660e",children:"\u793a\u4f8b\u8bf4\u660e"}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u5177\u4f53\u7684\u4ee3\u7801\u6848\u4f8b\uff0c\u7ed3\u5408\u8bed\u6cd5\u8fdb\u884c\u8bf4\u660e\uff0c\u80fd\u591f\u66f4\u76f4\u89c2\u5730\u7406\u89e3 ",(0,r.jsx)(e.strong,{children:"Deep Chain Invocation Tracing"})," \u7684\u5e94\u7528\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"\u6848\u4f8b\u5206\u6790\u4e0e\u8bed\u6cd5\u5e94\u7528",children:"\u6848\u4f8b\u5206\u6790\u4e0e\u8bed\u6cd5\u5e94\u7528"}),"\n",(0,r.jsx)(e.p,{children:"\u5047\u8bbe\u6211\u4eec\u6709\u4ee5\u4e0b Java \u4ee3\u7801\u7247\u6bb5\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'DocumentBuilder documentBuilder = DocumentBuilderFactory.newInstance().newDocumentBuilder();\nInputStream stream = new ByteArrayInputStream(xmlStr.getBytes("UTF-8"));\norg.w3c.dom.Document doc = documentBuilder.parse(stream);\ndoc.getDocumentElement().normalize();\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,r.jsx)(e.code,{children:"parse"})," \u65b9\u6cd5\u901a\u8fc7\u94fe\u5f0f\u8c03\u7528\u95f4\u63a5\u8c03\u7528\u4e86\u591a\u4e2a\u65b9\u6cd5\u3002\u82e5\u5e0c\u671b\u5feb\u901f\u5b9a\u4f4d ",(0,r.jsx)(e.code,{children:"parse()"})," \u65b9\u6cd5\u7684\u8c03\u7528\uff0c\u800c\u4e0d\u5fc5\u8be6\u7ec6\u4e66\u5199\u5b8c\u6574\u7684\u8c03\u7528\u94fe\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(e.strong,{children:"\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528"})," \u7684\u8bed\u6cd5\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u76ee\u6807"}),"\uff1a\u5b9a\u4f4d ",(0,r.jsx)(e.code,{children:"parse()"})," \u65b9\u6cd5\u7684\u6240\u6709\u8c03\u7528\u4f4d\u7f6e\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4f20\u7edf\u65b9\u6cd5"}),"\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-syntaxflow",children:"DocumentBuilderFactory.newInstance().newDocumentBuilder().parse();\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u79cd\u65b9\u6cd5\u9700\u8981\u5b8c\u6574\u5730\u4e66\u5199\u8c03\u7528\u94fe\uff0c\u663e\u5f97\u5197\u957f\u4e14\u4e0d\u591f\u4f18\u96c5\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u9012\u5f52\u94fe\u5f0f\u8c03\u7528\u65b9\u6cd5"}),"\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-syntaxflow",children:"DocumentBuilderFactory...parse();\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u89e3\u91ca"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"DocumentBuilderFactory"}),"\uff1a\u8d77\u59cb\u7c7b\u540d\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"..."}),"\uff1a\u8868\u793a\u4ece ",(0,r.jsx)(e.code,{children:"DocumentBuilderFactory"})," \u5f00\u59cb\uff0c\u9012\u5f52\u8ffd\u8e2a\u6240\u6709\u53ef\u80fd\u7684\u94fe\u5f0f\u8c03\u7528\uff0c\u76f4\u5230\u627e\u5230 ",(0,r.jsx)(e.code,{children:"parse()"})," \u65b9\u6cd5\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"parse()"}),"\uff1a\u76ee\u6807\u65b9\u6cd5\u540d\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c",(0,r.jsx)(e.strong,{children:"SyntaxFlow"})," \u5c06\u81ea\u52a8\u5ffd\u7565\u4e2d\u95f4\u7684 ",(0,r.jsx)(e.code,{children:"newInstance()"})," \u548c ",(0,r.jsx)(e.code,{children:"newDocumentBuilder()"})," \u8c03\u7528\uff0c\u76f4\u63a5\u5b9a\u4f4d\u5230 ",(0,r.jsx)(e.code,{children:"parse()"})," \u65b9\u6cd5\uff0c\u5927\u5927\u7b80\u5316\u4e86\u89c4\u5219\u7684\u4e66\u5199\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5b9e\u6218\u5e94\u7528",children:"\u5b9e\u6218\u5e94\u7528"}),"\n",(0,r.jsx)(e.h3,{id:"\u6848\u4f8b\u8ffd\u8e2a-xml-\u89e3\u6790\u5668\u7684\u914d\u7f6e\u548c\u4f7f\u7528",children:"\u6848\u4f8b\uff1a\u8ffd\u8e2a XML \u89e3\u6790\u5668\u7684\u914d\u7f6e\u548c\u4f7f\u7528"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u76ee\u6807"}),"\uff1a\u5ba1\u8ba1 ",(0,r.jsx)(e.code,{children:"DocumentBuilderFactory"})," \u7684\u914d\u7f6e\u548c\u4f7f\u7528\uff0c\u786e\u4fdd XML \u89e3\u6790\u5668\u7684\u5b89\u5168\u914d\u7f6e\uff0c\u4ee5\u9632\u6b62 XXE \u653b\u51fb\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u89e3\u6790\u6b65\u9aa4"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5b9a\u4f4d\u5b9e\u4f8b\u5316\u8fc7\u7a0b"}),"\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-syntaxflow",children:"DocumentBuilderFactory...newInstance() as $factory;\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u6355\u83b7 ",(0,r.jsx)(e.code,{children:"DocumentBuilderFactory.newInstance()"})," \u7684\u8c03\u7528\uff0c\u5e76\u5c06\u7ed3\u679c\u5b58\u50a8\u5728\u53d8\u91cf ",(0,r.jsx)(e.code,{children:"$factory"})," \u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u914d\u7f6e\u89e3\u6790\u5668"}),"\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-syntaxflow",children:"$factory.setFeature(* as $features);\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u6355\u83b7 ",(0,r.jsx)(e.code,{children:"setFeature"})," \u65b9\u6cd5\u7684\u6240\u6709\u53c2\u6570\uff0c\u5e76\u5b58\u50a8\u5230 ",(0,r.jsx)(e.code,{children:"$features"})," \u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsxs)(e.strong,{children:["\u521b\u5efa\u89e3\u6790\u5668\u5e76\u8c03\u7528 ",(0,r.jsx)(e.code,{children:"parse"})]}),"\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-syntaxflow",children:"$factory...parse(* as $source);\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u901a\u8fc7\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\uff0c\u6355\u83b7 ",(0,r.jsx)(e.code,{children:"parse"})," \u65b9\u6cd5\u7684\u6240\u6709\u53c2\u6570\uff0c\u5e76\u5c06\u5176\u5b58\u50a8\u5728 ",(0,r.jsx)(e.code,{children:"$source"})," \u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5b8c\u6574\u67e5\u8be2"}),"\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-syntaxflow",children:"DocumentBuilderFactory...newInstance() as $factory;\n$factory.setFeature(* as $features);\n$factory...parse(* as $source);\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u89e3\u91ca"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u901a\u8fc7\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\uff0c\u5206\u522b\u6355\u83b7\u5de5\u5382\u5b9e\u4f8b\u5316\u3001\u914d\u7f6e\u8bbe\u7f6e\u53ca\u89e3\u6790\u8c03\u7528\u7684\u53c2\u6570\uff0c\u65b9\u4fbf\u540e\u7eed\u7684\u5b89\u5168\u6027\u5206\u6790\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u91cd\u8981\u6027\u4e0e\u4f18\u52bf",children:"\u91cd\u8981\u6027\u4e0e\u4f18\u52bf"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6df1\u5ea6\u904d\u5386\u94fe\u5f0f\u8c03\u7528"}),"\u5728\u4ee3\u7801\u5ba1\u8ba1\u548c\u5b89\u5168\u5206\u6790\u4e2d\u5177\u6709\u8bf8\u591a\u4f18\u52bf\uff1a"]}),"\n",(0,r.jsxs)(e.h3,{id:"1-\u7b80\u5316\u89c4\u5219\u7f16\u5199",children:["1. ",(0,r.jsx)(e.strong,{children:"\u7b80\u5316\u89c4\u5219\u7f16\u5199"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u901a\u8fc7\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"..."})," \u7b26\u53f7\uff0c\u80fd\u591f\u7701\u7565\u4e2d\u95f4\u5c42\u7684\u8c03\u7528\u7ec6\u8282\uff0c\u7b80\u5316\u5ba1\u8ba1\u89c4\u5219\u7684\u7f16\u5199\u8fc7\u7a0b\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"2-\u63d0\u5347\u5ba1\u8ba1\u6548\u7387",children:["2. ",(0,r.jsx)(e.strong,{children:"\u63d0\u5347\u5ba1\u8ba1\u6548\u7387"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\u80fd\u591f\u5feb\u901f\u5b9a\u4f4d\u76ee\u6807\u65b9\u6cd5\uff0c\u51cf\u5c11\u4e86\u624b\u52a8\u8ffd\u8e2a\u591a\u5c42\u8c03\u7528\u7684\u65f6\u95f4\u548c\u7cbe\u529b\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"3-\u589e\u5f3a\u89c4\u5219\u7684\u53ef\u7ef4\u62a4\u6027",children:["3. ",(0,r.jsx)(e.strong,{children:"\u589e\u5f3a\u89c4\u5219\u7684\u53ef\u7ef4\u62a4\u6027"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u89c4\u5219\u66f4\u52a0\u7b80\u6d01\u660e\u4e86\uff0c\u4fbf\u4e8e\u540e\u7eed\u7684\u7ef4\u62a4\u548c\u66f4\u65b0\uff0c\u5c24\u5176\u5728\u9762\u5bf9\u590d\u6742\u548c\u52a8\u6001\u53d8\u5316\u7684\u4ee3\u7801\u5e93\u65f6\u5c24\u4e3a\u91cd\u8981\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"4-\u63d0\u9ad8\u5ba1\u8ba1\u8986\u76d6\u7387",children:["4. ",(0,r.jsx)(e.strong,{children:"\u63d0\u9ad8\u5ba1\u8ba1\u8986\u76d6\u7387"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u9012\u5f52\u68c0\u67e5\u786e\u4fdd\u4e86\u65e0\u8bba\u76ee\u6807\u65b9\u6cd5\u901a\u8fc7\u591a\u5c11\u5c42\u94fe\u5f0f\u8c03\u7528\u88ab\u8c03\u7528\uff0c\u90fd\u80fd\u88ab\u51c6\u786e\u6355\u6349\u5230\uff0c\u63d0\u5347\u4e86\u5ba1\u8ba1\u7684\u5168\u9762\u6027\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e3a\u5145\u5206\u53d1\u6325 ",(0,r.jsx)(e.strong,{children:"\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528"})," \u7684\u4f18\u52bf\uff0c\u5efa\u8bae\u9075\u5faa\u4ee5\u4e0b\u6700\u4f73\u5b9e\u8df5\uff1a"]}),"\n",(0,r.jsxs)(e.h3,{id:"1-\u660e\u786e\u76ee\u6807\u65b9\u6cd5",children:["1. ",(0,r.jsx)(e.strong,{children:"\u660e\u786e\u76ee\u6807\u65b9\u6cd5"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u786e\u4fdd\u76ee\u6807\u65b9\u6cd5\u540d\u51c6\u786e\u65e0\u8bef\uff0c\u4ee5\u907f\u514d\u8bef\u5339\u914d\u548c\u6f0f\u5339\u914d\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"2-\u5408\u7406\u4f7f\u7528\u53d8\u91cf",children:["2. ",(0,r.jsx)(e.strong,{children:"\u5408\u7406\u4f7f\u7528\u53d8\u91cf"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5728\u9700\u8981\u8fdb\u4e00\u6b65\u5206\u6790\u65f6\uff0c\u7ed3\u5408 ",(0,r.jsx)(e.code,{children:"as"})," \u5173\u952e\u5b57\u5c06\u5339\u914d\u7ed3\u679c\u5b58\u50a8\u4e3a\u53d8\u91cf\uff0c\u4fbf\u4e8e\u540e\u7eed\u5f15\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"3-\u7ed3\u5408\u5176\u4ed6\u8fc7\u6ee4\u6761\u4ef6",children:["3. ",(0,r.jsx)(e.strong,{children:"\u7ed3\u5408\u5176\u4ed6\u8fc7\u6ee4\u6761\u4ef6"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\u53ef\u4ee5\u4e0e\u5176\u4ed6\u8fc7\u6ee4\u6761\u4ef6\uff08\u5982\u53c2\u6570\u7c7b\u578b\u3001\u8fd4\u56de\u503c\u7b49\uff09\u7ed3\u5408\u4f7f\u7528\uff0c\u63d0\u5347\u89c4\u5219\u7684\u7cbe\u51c6\u5ea6\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"4-\u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219",children:["4. ",(0,r.jsx)(e.strong,{children:"\u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5c06\u590d\u6742\u7684\u5ba1\u8ba1\u4efb\u52a1\u5206\u89e3\u4e3a\u591a\u4e2a\u6a21\u5757\uff0c\u6bcf\u4e2a\u6a21\u5757\u4e13\u6ce8\u4e8e\u7279\u5b9a\u7684\u94fe\u5f0f\u8c03\u7528\u5c42\u7ea7\uff0c\u63d0\u5347\u89c4\u5219\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"5-\u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219",children:["5. ",(0,r.jsx)(e.strong,{children:"\u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u968f\u7740\u4ee3\u7801\u5e93\u7684\u6f14\u8fdb\uff0c\u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u5ba1\u8ba1\u89c4\u5219\uff0c\u786e\u4fdd\u5176\u59cb\u7ec8\u9002\u7528\u4e8e\u6700\u65b0\u7684\u4ee3\u7801\u7ed3\u6784\u548c\u8c03\u7528\u6a21\u5f0f\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6df1\u5ea6\u904d\u5386\u94fe\u5f0f\u8c03\u7528"}),"\u901a\u8fc7\u9012\u5f52\u68c0\u67e5\u94fe\u5f0f\u8c03\u7528\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u9ad8\u6548\u3001\u7b80\u6d01\u7684\u65b9\u5f0f\u6765\u5b9a\u4f4d\u548c\u5ba1\u8ba1\u7279\u5b9a\u65b9\u6cd5\u7684\u8c03\u7528\u3002\u7ed3\u5408 ",(0,r.jsx)(e.strong,{children:"SyntaxFlow"})," \u7684\u5f3a\u5927\u529f\u80fd\uff0c\u5ba1\u8ba1\u5458\u80fd\u591f\u8f7b\u677e\u8ffd\u8e2a\u590d\u6742\u7684\u94fe\u5f0f\u8c03\u7528\uff0c\u65e0\u9700\u8be6\u7ec6\u4e66\u5199\u6bcf\u4e00\u7ea7\u7684\u8c03\u7528\u7ec6\u8282\u3002\u8fd9\u4e0d\u4ec5\u7b80\u5316\u4e86\u5ba1\u8ba1\u89c4\u5219\u7684\u7f16\u5199\u8fc7\u7a0b\uff0c\u8fd8\u663e\u8457\u63d0\u5347\u4e86\u5ba1\u8ba1\u7684\u6548\u7387\u548c\u8986\u76d6\u7387\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u638c\u63e1\u548c\u5e94\u7528\u672c\u8282\u5185\u5bb9\u4e2d\u7684\u8bed\u6cd5\u548c\u6700\u4f73\u5b9e\u8df5\uff0c\u60a8\u5c06\u80fd\u591f\u5728\u5b9e\u9645\u7684\u4ee3\u7801\u5ba1\u8ba1\u548c\u5b89\u5168\u5206\u6790\u4e2d\u66f4\u9ad8\u6548\u5730\u5229\u7528 ",(0,r.jsx)(e.strong,{children:"SyntaxFlow"}),"\uff0c\u5feb\u901f\u5b9a\u4f4d\u5173\u952e\u65b9\u6cd5\u8c03\u7528\uff0c\u6df1\u5165\u5206\u6790\u5176\u5b89\u5168\u6027\u548c\u6b63\u786e\u6027\uff0c\u786e\u4fdd\u4ee3\u7801\u7684\u6574\u4f53\u5b89\u5168\u6027\u4e0e\u7a33\u5b9a\u6027\u3002"]})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}}}]);