"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[8941],{27439:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"statements/sf-nativecall","title":"\u539f\u751f\u6269\u5c55\uff1a\u91cd\u8981\u7684 NativeCall \u673a\u5236","description":"SyntaxFlow \u7684\u9ad8\u7ea7\u5173\u952e\u7279\u6027\u4e4b\u4e00\u662f\u4f7f\u7528 NativeCall \u51fd\u6570\u3002\u8fd9\u4e9b\u51fd\u6570\u662f\u9884\u5148\u5b9a\u4e49\u7684\uff0c\u53ef\u5728\u8bed\u8a00\u5185\u90e8\u63d0\u4f9b\u5404\u79cd\u5b9e\u7528\u529f\u80fd\u3002\u672c\u6559\u7a0b\u5c06\u4ecb\u7ecd NativeCall \u51fd\u6570\u7684\u6982\u5ff5\uff0c\u89e3\u91ca\u5176\u7528\u6cd5\uff0c\u5e76\u63d0\u4f9b\u53ef\u7528\u51fd\u6570\u7684\u5b8c\u6574\u5217\u8868\u53ca\u5176\u63cf\u8ff0\u3002","source":"@site/syntaxflow-guide/statements/sf-nativecall.mdx","sourceDirName":"statements","slug":"/statements/sf-nativecall","permalink":"/en/syntaxflow-guide/statements/sf-nativecall","draft":false,"unlisted":false,"editUrl":"https://github.com/yaklang/ssa.to/tree/main/syntaxflow-guide/syntaxflow-guide/statements/sf-nativecall.mdx","tags":[],"version":"current","lastUpdatedBy":"VillanCh","lastUpdatedAt":1731548453000,"frontMatter":{},"sidebar":"syntaxflowGuideSidebar","previous":{"title":"\u96c6\u5408\u8fd0\u7b97\uff1a\u4ea4\u96c6 &\uff0c\u5dee\u96c6 -\uff0c\u5e76\u96c6 +","permalink":"/en/syntaxflow-guide/statements/sf-calc"},"next":{"title":"SCA: \u4f9d\u8d56\u7248\u672c\u4fe1\u606f\u68c0\u6d4b","permalink":"/en/syntaxflow-guide/statements/sf-sca"}}');var r=l(74848),i=l(28453),t=l(14252);const d={},c="\u539f\u751f\u6269\u5c55\uff1a\u91cd\u8981\u7684 NativeCall \u673a\u5236",a={},h=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"NativeCall \u8bed\u6cd5\u5b9a\u4e49",id:"nativecall-\u8bed\u6cd5\u5b9a\u4e49",level:2},{value:"\u5b8c\u6574\u7684 eBNF \u63cf\u8ff0",id:"\u5b8c\u6574\u7684-ebnf-\u63cf\u8ff0",level:3},{value:"NativeCall \u51fd\u6570\u5217\u8868",id:"nativecall-\u51fd\u6570\u5217\u8868",level:2},{value:"\u4f7f\u7528\u5b9e\u4f8b\u4e0e\u89e3\u91ca",id:"\u4f7f\u7528\u5b9e\u4f8b\u4e0e\u89e3\u91ca",level:2},{value:"\u6848\u4f8b\u4e00\uff1a\u83b7\u53d6\u51fd\u6570\u7684\u8fd4\u56de\u503c",id:"\u6848\u4f8b\u4e00\u83b7\u53d6\u51fd\u6570\u7684\u8fd4\u56de\u503c",level:3},{value:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b",id:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b",level:4},{value:"SyntaxFlow \u89c4\u5219\u6848\u4f8b",id:"syntaxflow-\u89c4\u5219\u6848\u4f8b",level:4},{value:"\u6267\u884c\u6548\u679c",id:"\u6267\u884c\u6548\u679c",level:4},{value:"\u89e3\u91ca",id:"\u89e3\u91ca",level:4},{value:"\u6848\u4f8b\u4e8c\uff1a\u5b57\u7b26\u4e32\u8f6c\u6362\u4e0e\u6b63\u5219\u5339\u914d",id:"\u6848\u4f8b\u4e8c\u5b57\u7b26\u4e32\u8f6c\u6362\u4e0e\u6b63\u5219\u5339\u914d",level:3},{value:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b",id:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b-1",level:4},{value:"SyntaxFlow \u89c4\u5219\u6848\u4f8b",id:"syntaxflow-\u89c4\u5219\u6848\u4f8b-1",level:4},{value:"\u6267\u884c\u6548\u679c",id:"\u6267\u884c\u6548\u679c-1",level:4},{value:"\u89e3\u91ca",id:"\u89e3\u91ca-1",level:4},{value:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",level:2},{value:"1. \u7406\u89e3\u51fd\u6570\u529f\u80fd",id:"1-\u7406\u89e3\u51fd\u6570\u529f\u80fd",level:3},{value:"2. \u53c2\u6570\u6b63\u786e\u6027",id:"2-\u53c2\u6570\u6b63\u786e\u6027",level:3},{value:"3. \u6027\u80fd\u8003\u8651",id:"3-\u6027\u80fd\u8003\u8651",level:3},{value:"4. \u8c03\u8bd5\u4e0e\u9a8c\u8bc1",id:"4-\u8c03\u8bd5\u4e0e\u9a8c\u8bc1",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"1. \u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219",id:"1-\u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219",level:3},{value:"2. \u7ed3\u5408\u4f7f\u7528\u591a\u79cd\u51fd\u6570",id:"2-\u7ed3\u5408\u4f7f\u7528\u591a\u79cd\u51fd\u6570",level:3},{value:"3. \u5b9a\u671f\u66f4\u65b0\u4e0e\u4f18\u5316",id:"3-\u5b9a\u671f\u66f4\u65b0\u4e0e\u4f18\u5316",level:3},{value:"4. \u5229\u7528\u8c03\u8bd5\u529f\u80fd",id:"4-\u5229\u7528\u8c03\u8bd5\u529f\u80fd",level:3},{value:"5. \u53c2\u8003\u5b98\u65b9\u6587\u6863\u4e0e\u6e90\u7801",id:"5-\u53c2\u8003\u5b98\u65b9\u6587\u6863\u4e0e\u6e90\u7801",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function x(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u539f\u751f\u6269\u5c55\u91cd\u8981\u7684-nativecall-\u673a\u5236",children:"\u539f\u751f\u6269\u5c55\uff1a\u91cd\u8981\u7684 NativeCall \u673a\u5236"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u7684\u9ad8\u7ea7\u5173\u952e\u7279\u6027\u4e4b\u4e00\u662f\u4f7f\u7528 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\u3002\u8fd9\u4e9b\u51fd\u6570\u662f\u9884\u5148\u5b9a\u4e49\u7684\uff0c\u53ef\u5728\u8bed\u8a00\u5185\u90e8\u63d0\u4f9b\u5404\u79cd\u5b9e\u7528\u529f\u80fd\u3002\u672c\u6559\u7a0b\u5c06\u4ecb\u7ecd ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\u7684\u6982\u5ff5\uff0c\u89e3\u91ca\u5176\u7528\u6cd5\uff0c\u5e76\u63d0\u4f9b\u53ef\u7528\u51fd\u6570\u7684\u5b8c\u6574\u5217\u8868\u53ca\u5176\u63cf\u8ff0\u3002"]}),"\n","\n",(0,r.jsx)(t.A,{toc:h}),"\n",(0,r.jsx)(n.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u4e2d\uff0c",(0,r.jsx)(n.strong,{children:"NativeCall"}),"\uff08\u539f\u751f\u8c03\u7528\uff09\u662f\u9884\u5c01\u88c5\u7684\u51fd\u6570\uff0c\u5141\u8bb8\u7528\u6237\u5728\u89c4\u5219\u4e2d\u6267\u884c\u5404\u79cd\u9ad8\u7ea7\u64cd\u4f5c\u3002\u8fd9\u4e9b\u51fd\u6570\u7528\u4e8e\u64cd\u4f5c\u3001\u68c0\u67e5\u548c\u8f6c\u6362\u6570\u636e\u7ed3\u6784\uff0c\u4fc3\u8fdb\u9ad8\u7ea7\u4ee3\u7801\u5206\u6790\u548c\u8f6c\u6362\u4efb\u52a1\u3002\u901a\u8fc7 ",(0,r.jsx)(n.strong,{children:"NativeCall"}),"\uff0c\u7528\u6237\u65e0\u9700\u7f16\u5199\u590d\u6742\u7684\u903b\u8f91\u5373\u53ef\u5b9e\u73b0\u590d\u6742\u7684\u6570\u636e\u5904\u7406\u9700\u6c42\uff0c\u5927\u5927\u63d0\u5347\u4e86 ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u7684\u7075\u6d3b\u6027\u548c\u529f\u80fd\u6027\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"nativecall-\u8bed\u6cd5\u5b9a\u4e49",children:"NativeCall \u8bed\u6cd5\u5b9a\u4e49"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NativeCall"})," \u7684\u8bed\u6cd5\u7ed3\u6784\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<nativeCallName(arg1, argName="value", ...)>\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<"}),"\uff1a\u6807\u8bb0 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u7684\u5f00\u59cb\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nativeCallName"}),"\uff1a\u8981\u4f7f\u7528\u7684 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\u540d\u79f0\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"(...)"}),"\uff1a\u5305\u542b\u51fd\u6570\u53c2\u6570\u7684\u5706\u62ec\u53f7\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:">"}),"\uff1a\u6807\u8bb0 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u7684\u7ed3\u675f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5b8c\u6574\u7684-ebnf-\u63cf\u8ff0",children:"\u5b8c\u6574\u7684 eBNF \u63cf\u8ff0"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-antlr",children:"nativeCall\n    : '<' useNativeCall '>'\n    ;\n\nuseNativeCall\n    : identifier useDefCalcParams?\n    ;\n\nuseDefCalcParams\n    : '{' nativeCallActualParams? '}'\n    | '(' nativeCallActualParams? ')'\n    ;\n\nnativeCallActualParams\n    : lines? nativeCallActualParam (',' lines? nativeCallActualParam)* ','? lines?\n    ;\n\nnativeCallActualParam\n    : (nativeCallActualParamKey (':' | '='))?  nativeCallActualParamValue\n    ;\n\nnativeCallActualParamKey\n    : identifier\n    ;\n\nnativeCallActualParamValue\n    : identifier | numberLiteral | '`' ~'`'* '`' | '$' identifier | hereDoc\n    ;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"nativecall-\u51fd\u6570\u5217\u8868",children:"NativeCall \u51fd\u6570\u5217\u8868"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0b\u8868\u5217\u51fa\u4e86 ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u4e2d\u6240\u6709\u53ef\u7528\u7684 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\uff0c\u4ee5\u53ca\u5b83\u4eec\u7684\u63cf\u8ff0\uff1a"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u51fd\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<getReturns>"})}),(0,r.jsx)(n.td,{children:"\u83b7\u53d6\u51fd\u6570\u6216\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<getFormalParams>"})}),(0,r.jsx)(n.td,{children:"\u68c0\u7d22\u51fd\u6570\u6216\u65b9\u6cd5\u7684\u5f62\u5f0f\u53c2\u6570\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<getFunc>"})}),(0,r.jsx)(n.td,{children:"\u67e5\u627e\u5305\u542b\u7279\u5b9a\u6307\u4ee4\u6216\u503c\u7684\u5f53\u524d\u51fd\u6570\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<getCall>"})}),(0,r.jsx)(n.td,{children:"\u83b7\u53d6\u4e00\u4e2a\u503c\u7684\u8c03\u7528\uff0c\u901a\u5e38\u7528\u4e8e\u83b7\u53d6\u4e0e\u64cd\u4f5c\u7801\u76f8\u5173\u7684\u8c03\u7528\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<getCaller>"})}),(0,r.jsx)(n.td,{children:"\u67e5\u627e\u5305\u542b\u7279\u5b9a\u503c\u7684\u8c03\u7528\u6307\u4ee4\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<searchFunc>"})}),(0,r.jsx)(n.td,{children:"\u5728\u6574\u4e2a\u7a0b\u5e8f\u4e2d\u641c\u7d22\u5bf9\u67d0\u4e2a\u51fd\u6570\u7684\u8c03\u7528\u3002\u5982\u679c\u8f93\u5165\u5df2\u7ecf\u662f\u8c03\u7528\uff0c\u5219\u641c\u7d22\u8be5\u65b9\u6cd5\uff08\u51fd\u6570\uff09\u7684\u5176\u4ed6\u8c03\u7528\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<getObject>"})}),(0,r.jsx)(n.td,{children:"\u83b7\u53d6\u4e0e\u503c\u5173\u8054\u7684\u5bf9\u8c61\uff0c\u901a\u5e38\u7528\u4e8e\u9762\u5411\u5bf9\u8c61\u7684\u4e0a\u4e0b\u6587\u4e2d\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<getMembers>"})}),(0,r.jsx)(n.td,{children:"\u83b7\u53d6\u5bf9\u8c61\u6216\u7c7b\u7684\u6210\u5458\u53d8\u91cf\u6216\u65b9\u6cd5\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<getSiblings>"})}),(0,r.jsx)(n.td,{children:"\u68c0\u7d22\u4ee3\u7801\u7ed3\u6784\u4e2d\u5144\u5f1f\u8282\u70b9\u6216\u503c\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<typeName>"})}),(0,r.jsx)(n.td,{children:"\u83b7\u53d6\u503c\u7684\u7c7b\u578b\u540d\u79f0\uff08\u4e0d\u542b\u5305\u8def\u5f84\uff09\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<fullTypeName>"})}),(0,r.jsx)(n.td,{children:"\u83b7\u53d6\u503c\u7684\u5b8c\u6574\u7c7b\u578b\u540d\u79f0\uff08\u5305\u62ec\u5305\u8def\u5f84\uff09\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<name>"})}),(0,r.jsx)(n.td,{children:"\u83b7\u53d6\u51fd\u6570\u3001\u65b9\u6cd5\u3001\u53d8\u91cf\u6216\u7c7b\u578b\u7684\u540d\u79f0\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<string>"})}),(0,r.jsx)(n.td,{children:"\u5c06\u503c\u8f6c\u6362\u4e3a\u5176\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<include>"})}),(0,r.jsxs)(n.td,{children:["\u5305\u542b\u4e00\u4e2a\u5916\u90e8\u6587\u4ef6\u6216\u8d44\u6e90\u4e2d\u7684 ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u89c4\u5219\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<eval>"})}),(0,r.jsxs)(n.td,{children:["\u8bc4\u4f30\u4e00\u4e2a\u4f5c\u4e3a\u5b57\u7b26\u4e32\u63d0\u4f9b\u7684\u65b0 ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u89c4\u5219\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<fuzztag>"})}),(0,r.jsxs)(n.td,{children:["\u8bc4\u4f30\u4e00\u4e2a ",(0,r.jsx)(n.strong,{children:"Yaklang"})," \u7684 fuzztag \u6a21\u677f\uff0c\u5229\u7528 ",(0,r.jsx)(n.strong,{children:"SFFrameResult"})," \u4e2d\u7684\u53d8\u91cf\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<show>"})}),(0,r.jsx)(n.td,{children:"\u8f93\u51fa\u503c\u800c\u4e0d\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\uff08\u7528\u4e8e\u8c03\u8bd5\uff09\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<slice>"})}),(0,r.jsxs)(n.td,{children:["\u4ece\u503c\u4e2d\u63d0\u53d6\u4e00\u4e2a\u5207\u7247\uff0c\u7c7b\u4f3c\u4e8e\u6570\u7ec4\u6216\u5b57\u7b26\u4e32\u7684\u5207\u7247\u64cd\u4f5c\u3002\u4f7f\u7528\u793a\u4f8b\uff1a",(0,r.jsx)(n.code,{children:"<slice(start=0)>"}),"\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<regexp>"})}),(0,r.jsxs)(n.td,{children:["\u5bf9\u5b57\u7b26\u4e32\u6267\u884c\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u6216\u63d0\u53d6\u3002\u652f\u6301\u6355\u83b7\u7ec4\u3002\u793a\u4f8b\uff1a",(0,r.jsx)(n.code,{children:'<regexp(pattern="\\d+", group=1)>'}),"\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<strlower>"})}),(0,r.jsx)(n.td,{children:"\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5c0f\u5199\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<strupper>"})}),(0,r.jsx)(n.td,{children:"\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5927\u5199\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<var>"})}),(0,r.jsx)(n.td,{children:"\u5c06\u503c\u8d4b\u7ed9\u53d8\u91cf\u4ee5\u4f9b\u540e\u7eed\u4f7f\u7528\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<mybatisSink>"})}),(0,r.jsxs)(n.td,{children:["\u5728\u4ee3\u7801\u5206\u6790\u4e2d\u8bc6\u522b ",(0,r.jsx)(n.strong,{children:"MyBatis"})," \u7684 Sink\uff08\u7279\u5b9a\u4e8e Java ",(0,r.jsx)(n.strong,{children:"MyBatis"})," \u6846\u67b6\uff09\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<freeMarkerSink>"})}),(0,r.jsxs)(n.td,{children:["\u8bc6\u522b ",(0,r.jsx)(n.strong,{children:"FreeMarker"})," \u7684 Sink\uff08\u7279\u5b9a\u4e8e ",(0,r.jsx)(n.strong,{children:"FreeMarker"})," \u6a21\u677f\u5f15\u64ce\uff09\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<opcodes>"})}),(0,r.jsx)(n.td,{children:"\u83b7\u53d6\u4e0e\u503c\u5173\u8054\u7684\u64cd\u4f5c\u7801\uff08opcode\uff09\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<sourceCode>"})}),(0,r.jsx)(n.td,{children:"\u83b7\u53d6\u503c\u7684\u6e90\u4ee3\u7801\u8868\u793a\u5f62\u5f0f\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<scanPrevious>"})}),(0,r.jsx)(n.td,{children:"\u626b\u63cf\u76f8\u5bf9\u4e8e\u7ed9\u5b9a\u503c\u7684\u524d\u4e00\u4e2a\u64cd\u4f5c\u7801\u6216\u6307\u4ee4\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<scanNext>"})}),(0,r.jsx)(n.td,{children:"\u626b\u63cf\u7ed9\u5b9a\u503c\u4e4b\u540e\u7684\u4e0b\u4e00\u4e2a\u64cd\u4f5c\u7801\u6216\u6307\u4ee4\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<delete>"})}),(0,r.jsx)(n.td,{children:"\u4ece\u5f53\u524d\u4e0a\u4e0b\u6587\u4e2d\u5220\u9664\u53d8\u91cf\u6216\u503c\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<forbid>"})}),(0,r.jsx)(n.td,{children:"\u5c06\u503c\u6807\u8bb0\u4e3a\u7981\u6b62\uff1b\u5982\u679c\u8be5\u503c\u5b58\u5728\uff0c\u5c06\u62a5\u544a\u4e25\u91cd\u9519\u8bef\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<self>"})}),(0,r.jsx)(n.td,{children:"\u83b7\u53d6\u5f53\u524d\u503c\u672c\u8eab\uff08\u7528\u4e8e\u94fe\u5f0f\u64cd\u4f5c\u4e2d\uff09\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<dataflow>"})}),(0,r.jsxs)(n.td,{children:["\u83b7\u53d6\u4e0e\u503c\u76f8\u5173\u7684\u6570\u636e\u6d41\u4fe1\u606f\u3002\u5728\u6d41\u64cd\u4f5c\u7b26 ",(0,r.jsx)(n.code,{children:"--\x3e"})," \u6216 ",(0,r.jsx)(n.code,{children:"#->"})," \u4e4b\u540e\u4f7f\u7528\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<const>"})}),(0,r.jsx)(n.td,{children:"\u5728\u4ee3\u7801\u4e2d\u641c\u7d22\u5e38\u91cf\u503c\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<versionIn>"})}),(0,r.jsx)(n.td,{children:"\u5224\u65ad\u4f9d\u8d56\u7248\u672c\u662f\u5426\u5728\u67d0\u4e2a\u7248\u672c\u533a\u95f4\u3002"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u4e0a\u8ff0\u51fd\u6570\u5217\u8868\u662f\u9010\u6b65\u6f14\u8fdb\u7684\uff0c\u53ef\u80fd\u5e76\u4e0d\u5305\u542b\u5168\u90e8\u7684 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\u3002\u7528\u6237\u53ef\u4ee5\u53c2\u8003\u6e90\u7801\u548c\u76f8\u5173\u89c4\u5219\u4e86\u89e3\u66f4\u591a\u672a\u8986\u76d6\u7684 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u4f7f\u7528\u65b9\u6cd5\u3002\u5728\u540e\u7eed\u7684\u6848\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f1a\u9010\u6b65\u4e3a\u5927\u5bb6\u8bb2\u89e3 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u4e2d\u7684\u5185\u5bb9\u7a76\u7adf\u90fd\u662f\u5982\u4f55\u4f7f\u7528\u7684\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u5b9e\u4f8b\u4e0e\u89e3\u91ca",children:"\u4f7f\u7528\u5b9e\u4f8b\u4e0e\u89e3\u91ca"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u5177\u4f53\u7684\u4ee3\u7801\u6848\u4f8b\uff0c\u7ed3\u5408 ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u7684 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\uff0c\u53ef\u4ee5\u66f4\u76f4\u89c2\u5730\u7406\u89e3\u5176\u5e94\u7528\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6848\u4f8b\u4e00\u83b7\u53d6\u51fd\u6570\u7684\u8fd4\u56de\u503c",children:"\u6848\u4f8b\u4e00\uff1a\u83b7\u53d6\u51fd\u6570\u7684\u8fd4\u56de\u503c"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u80cc\u666f"}),"\uff1a\u5728\u4ee3\u7801\u5ba1\u8ba1\u8fc7\u7a0b\u4e2d\uff0c\u4e86\u89e3\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u548c\u5177\u4f53\u8fd4\u56de\u503c\u5bf9\u4e8e\u8bc6\u522b\u6f5c\u5728\u6f0f\u6d1e\u81f3\u5173\u91cd\u8981\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b",children:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class ReturnExample {\n    public String getUserInput() {\n        // \u83b7\u53d6\u7528\u6237\u8f93\u5165\n        return System.getProperty("user.input");\n    }\n\n    public void process() {\n        String input = getUserInput();\n        // \u8fdb\u4e00\u6b65\u5904\u7406\u8f93\u5165\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"syntaxflow-\u89c4\u5219\u6848\u4f8b",children:"SyntaxFlow \u89c4\u5219\u6848\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:'// \u5b9a\u4e49\u63cf\u8ff0\u4fe1\u606f\ndesc(\n    "Title": "\u83b7\u53d6\u51fd\u6570\u8fd4\u56de\u503c\u793a\u4f8b",\n    "Fix": "\u786e\u4fdd\u8fd4\u56de\u503c\u5728\u4f7f\u7528\u524d\u7ecf\u8fc7\u9002\u5f53\u7684\u9a8c\u8bc1\u548c\u5904\u7406"\n)\n\n// \u6355\u83b7\u6240\u6709\u51fd\u6570\u7684\u8fd4\u56de\u503c\n$returns = <getReturns()> as $ret;\n\n// \u68c0\u67e5\u8fd4\u56de\u503c\u662f\u5426\u76f4\u63a5\u7528\u4e8e\u654f\u611f\u64cd\u4f5c\n$vulnerable = $ret .*SensitiveOperation() as $vuln;\n\n// \u6807\u8bb0\u6f5c\u5728\u7684\u6f0f\u6d1e\ncheck $vuln then "\u8fd4\u56de\u503c\u672a\u7ecf\u9a8c\u8bc1\u76f4\u63a5\u7528\u4e8e\u654f\u611f\u64cd\u4f5c" else "\u8fd4\u56de\u503c\u4f7f\u7528\u5b89\u5168";\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u6267\u884c\u6548\u679c",children:"\u6267\u884c\u6548\u679c"}),"\n",(0,r.jsxs)(n.p,{children:["\u4fdd\u5b58\u4e0a\u8ff0\u89c4\u5219\u4e3a ",(0,r.jsx)(n.code,{children:"return_example.sf"})," \u5e76\u6267\u884c\u5ba1\u8ba1\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yak ssa -t . --program return_example && yak sf --program return_example return_example.sf\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u8f93\u51fa\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[INFO] 2024-07-01 10:15:30 [ssacli:272] syntax flow query result:\nrule md5 hash: d4e5f6789012abcdef3456789abcdef3\nrule preview: desc(     "Title": "\u83b7\u53d6\u51fd\u6570\u8fd4\u56de\u503c\u793a\u4f8b",...\ndescription: {Title: "\u83b7\u53d6\u51fd\u6570\u8fd4\u56de\u503c\u793a\u4f8b", Fix: "\u786e\u4fdd\u8fd4\u56de\u503c\u5728\u4f7f\u7528\u524d\u7ecf\u8fc7\u9002\u5f53\u7684\u9a8c\u8bc1\u548c\u5904\u7406", $vuln: "\u8fd4\u56de\u503c\u672a\u7ecf\u9a8c\u8bc1\u76f4\u63a5\u7528\u4e8e\u654f\u611f\u64cd\u4f5c"}\nResult Vars:\n  vuln:\n    t1327001: getUserInput().SensitiveOperation()\n        ReturnExample.java:10:25 - 10:50\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u89e3\u91ca",children:"\u89e3\u91ca"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"<getReturns()>"})}),"\uff1a\u8c03\u7528 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570 ",(0,r.jsx)(n.code,{children:"getReturns"}),"\uff0c\u83b7\u53d6\u6240\u6709\u51fd\u6570\u7684\u8fd4\u56de\u503c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"$ret .*SensitiveOperation() as $vuln;"})}),"\uff1a\u68c0\u67e5\u8fd4\u56de\u503c\u662f\u5426\u88ab\u76f4\u63a5\u7528\u4e8e ",(0,r.jsx)(n.code,{children:"SensitiveOperation"})," \u8fd9\u4e00\u654f\u611f\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:'check $vuln then "\u8fd4\u56de\u503c\u672a\u7ecf\u9a8c\u8bc1\u76f4\u63a5\u7528\u4e8e\u654f\u611f\u64cd\u4f5c" else "\u8fd4\u56de\u503c\u4f7f\u7528\u5b89\u5168";'})}),"\uff1a\u6807\u8bb0\u5e76\u62a5\u544a\u6f5c\u5728\u7684\u6f0f\u6d1e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6848\u4f8b\u4e8c\u5b57\u7b26\u4e32\u8f6c\u6362\u4e0e\u6b63\u5219\u5339\u914d",children:"\u6848\u4f8b\u4e8c\uff1a\u5b57\u7b26\u4e32\u8f6c\u6362\u4e0e\u6b63\u5219\u5339\u914d"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u80cc\u666f"}),"\uff1a\u6709\u65f6\u9700\u8981\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u8f6c\u6362\u64cd\u4f5c\uff0c\u6216\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u63d0\u53d6\u7279\u5b9a\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b-1",children:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class StringExample {\n    public void processInput(String input) {\n        // \u8f6c\u6362\u4e3a\u5c0f\u5199\n        String lowerInput = input.toLowerCase();\n        // \u6267\u884c\u6b63\u5219\u5339\u914d\n        if (lowerInput.matches("\\\\d+")) {\n            // \u5904\u7406\u6570\u5b57\u5b57\u7b26\u4e32\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"syntaxflow-\u89c4\u5219\u6848\u4f8b-1",children:"SyntaxFlow \u89c4\u5219\u6848\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-syntaxflow",children:'// \u5b9a\u4e49\u63cf\u8ff0\u4fe1\u606f\ndesc(\n    "Title": "\u5b57\u7b26\u4e32\u8f6c\u6362\u4e0e\u6b63\u5219\u5339\u914d\u793a\u4f8b",\n    "Fix": "\u786e\u4fdd\u5b57\u7b26\u4e32\u8f6c\u6362\u548c\u6b63\u5219\u5339\u914d\u903b\u8f91\u7684\u6b63\u786e\u6027\uff0c\u9632\u6b62\u4e0d\u5f53\u5904\u7406\u5bfc\u81f4\u7684\u6f0f\u6d1e"\n)\n\n// \u6355\u83b7\u6240\u6709\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5c0f\u5199\u7684\u64cd\u4f5c\n$lowerStrings = <strlower()> as $lower;\n\n// \u5bf9\u8f6c\u6362\u540e\u7684\u5b57\u7b26\u4e32\u6267\u884c\u6b63\u5219\u5339\u914d\n$matches = $lower .*<regexp(pattern="\\\\d+", group=0)> as $match;\n\n// \u68c0\u67e5\u5339\u914d\u7ed3\u679c\ncheck $match then "\u5b57\u7b26\u4e32\u5305\u542b\u4ec5\u6570\u5b57" else "\u5b57\u7b26\u4e32\u4e0d\u7b26\u5408\u6570\u5b57\u683c\u5f0f";\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u6267\u884c\u6548\u679c-1",children:"\u6267\u884c\u6548\u679c"}),"\n",(0,r.jsxs)(n.p,{children:["\u4fdd\u5b58\u89c4\u5219\u4e3a ",(0,r.jsx)(n.code,{children:"string_example.sf"})," \u5e76\u6267\u884c\u5ba1\u8ba1\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yak ssa -t . --program string_example && yak sf --program string_example string_example.sf\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u8f93\u51fa\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[INFO] 2024-07-01 11:30:45 [ssacli:272] syntax flow query result:\nrule md5 hash: e5f6789012abcdef3456789abcdef4\nrule preview: desc(     "Title": "\u5b57\u7b26\u4e32\u8f6c\u6362\u4e0e\u6b63\u5219\u5339\u914d\u793a\u4f8b",...\ndescription: {Title: "\u5b57\u7b26\u4e32\u8f6c\u6362\u4e0e\u6b63\u5219\u5339\u914d\u793a\u4f8b", Fix: "\u786e\u4fdd\u5b57\u7b26\u4e32\u8f6c\u6362\u548c\u6b63\u5219\u5339\u914d\u903b\u8f91\u7684\u6b63\u786e\u6027\uff0c\u9632\u6b62\u4e0d\u5f53\u5904\u7406\u5bfc\u81f4\u7684\u6f0f\u6d1e", $match: "\u5b57\u7b26\u4e32\u5305\u542b\u4ec5\u6570\u5b57"}\nResult Vars:\n  match:\n    t1328001: input.toLowerCase().matches("\\\\d+")\n        StringExample.java:6:25 - 6:55\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u89e3\u91ca-1",children:"\u89e3\u91ca"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"<strlower()>"})}),"\uff1a\u8c03\u7528 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570 ",(0,r.jsx)(n.code,{children:"strlower"}),"\uff0c\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5c0f\u5199\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:'<regexp(pattern="\\\\d+", group=0)>'})}),"\uff1a\u8c03\u7528 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570 ",(0,r.jsx)(n.code,{children:"regexp"}),"\uff0c\u6267\u884c\u5339\u914d\u4ec5\u5305\u542b\u6570\u5b57\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:'check $match then "\u5b57\u7b26\u4e32\u5305\u542b\u4ec5\u6570\u5b57" else "\u5b57\u7b26\u4e32\u4e0d\u7b26\u5408\u6570\u5b57\u683c\u5f0f";'})}),"\uff1a\u6839\u636e\u5339\u914d\u7ed3\u679c\u8f93\u51fa\u76f8\u5e94\u7684\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",children:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u4f7f\u7528 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\u65f6\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"]}),"\n",(0,r.jsx)(n.h3,{id:"1-\u7406\u89e3\u51fd\u6570\u529f\u80fd",children:"1. \u7406\u89e3\u51fd\u6570\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u6bcf\u4e2a ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\u90fd\u6709\u5176\u7279\u5b9a\u7684\u529f\u80fd\u548c\u7528\u9014\u3002\u4f7f\u7528\u524d\uff0c\u52a1\u5fc5\u8be6\u7ec6\u9605\u8bfb\u51fd\u6570\u63cf\u8ff0\uff0c\u786e\u4fdd\u5176\u9002\u7528\u4e8e\u5f53\u524d\u7684\u5206\u6790\u9700\u6c42\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"2-\u53c2\u6570\u6b63\u786e\u6027",children:"2. \u53c2\u6570\u6b63\u786e\u6027"}),"\n",(0,r.jsxs)(n.p,{children:["\u786e\u4fdd\u4f20\u9012\u7ed9 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\u7684\u53c2\u6570\u6b63\u786e\u4e14\u7b26\u5408\u9884\u671f\u3002\u4f8b\u5982\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u8bed\u6cd5\u9519\u8bef\u53ef\u80fd\u5bfc\u81f4\u89c4\u5219\u5931\u6548\u6216\u4ea7\u751f\u9519\u8bef\u7ed3\u679c\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"3-\u6027\u80fd\u8003\u8651",children:"3. \u6027\u80fd\u8003\u8651"}),"\n",(0,r.jsxs)(n.p,{children:["\u67d0\u4e9b ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\u53ef\u80fd\u6d89\u53ca\u590d\u6742\u7684\u8ba1\u7b97\u6216\u5927\u91cf\u7684\u6570\u636e\u5904\u7406\u3002\u5728\u5904\u7406\u5927\u578b\u9879\u76ee\u65f6\uff0c\u6ce8\u610f\u53ef\u80fd\u7684\u6027\u80fd\u5f00\u9500\uff0c\u5fc5\u8981\u65f6\u4f18\u5316\u89c4\u5219\u6216\u9650\u5236\u51fd\u6570\u7684\u4f7f\u7528\u8303\u56f4\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"4-\u8c03\u8bd5\u4e0e\u9a8c\u8bc1",children:"4. \u8c03\u8bd5\u4e0e\u9a8c\u8bc1"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u7f16\u5199\u548c\u8c03\u6574 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u89c4\u5219\u65f6\uff0c\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"<show>"})," \u51fd\u6570\u7b49\u8c03\u8bd5\u624b\u6bb5\u8f93\u51fa\u4e2d\u95f4\u7ed3\u679c\uff0c\u4ee5\u9a8c\u8bc1\u89c4\u5219\u7684\u6b63\u786e\u6027\u548c\u6548\u679c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u5145\u5206\u53d1\u6325 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u673a\u5236\u7684\u4f18\u52bf\uff0c\u5efa\u8bae\u9075\u5faa\u4ee5\u4e0b\u6700\u4f73\u5b9e\u8df5\uff1a"]}),"\n",(0,r.jsx)(n.h3,{id:"1-\u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219",children:"1. \u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u590d\u6742\u7684\u5206\u6790\u4efb\u52a1\u5206\u89e3\u4e3a\u591a\u4e2a\u6a21\u5757\uff0c\u6bcf\u4e2a\u6a21\u5757\u4f7f\u7528\u4e0d\u540c\u7684 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\u5904\u7406\u7279\u5b9a\u7684\u9700\u6c42\uff0c\u63d0\u5347\u89c4\u5219\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"2-\u7ed3\u5408\u4f7f\u7528\u591a\u79cd\u51fd\u6570",children:"2. \u7ed3\u5408\u4f7f\u7528\u591a\u79cd\u51fd\u6570"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\uff0c\u4ee5\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u5206\u6790\u3002\u4f8b\u5982\uff0c\u5148\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"<getReturns>"})," \u83b7\u53d6\u8fd4\u56de\u503c\uff0c\u518d\u7528 ",(0,r.jsx)(n.code,{children:"<regexp>"})," \u63d0\u53d6\u7279\u5b9a\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"3-\u5b9a\u671f\u66f4\u65b0\u4e0e\u4f18\u5316",children:"3. \u5b9a\u671f\u66f4\u65b0\u4e0e\u4f18\u5316"}),"\n",(0,r.jsxs)(n.p,{children:["\u968f\u7740 ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u7684\u53d1\u5c55\u548c\u9879\u76ee\u4ee3\u7801\u7684\u53d8\u5316\uff0c\u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u89c4\u5219\uff0c\u786e\u4fdd\u5176\u9002\u5e94\u6700\u65b0\u7684\u4ee3\u7801\u7ed3\u6784\u548c\u5206\u6790\u9700\u6c42\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"4-\u5229\u7528\u8c03\u8bd5\u529f\u80fd",children:"4. \u5229\u7528\u8c03\u8bd5\u529f\u80fd"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"<show>"})," \u7b49\u8c03\u8bd5\u51fd\u6570\u8f93\u51fa\u4e2d\u95f4\u53d8\u91cf\u548c\u7ed3\u679c\uff0c\u5e2e\u52a9\u8bc6\u522b\u548c\u89e3\u51b3\u89c4\u5219\u4e2d\u7684\u95ee\u9898\uff0c\u786e\u4fdd\u89c4\u5219\u7684\u51c6\u786e\u6027\u548c\u6709\u6548\u6027\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"5-\u53c2\u8003\u5b98\u65b9\u6587\u6863\u4e0e\u6e90\u7801",children:"5. \u53c2\u8003\u5b98\u65b9\u6587\u6863\u4e0e\u6e90\u7801"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u9047\u5230\u672a\u8986\u76d6\u7684 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\u6216\u590d\u6742\u7684\u4f7f\u7528\u573a\u666f\u65f6\uff0c\u53c2\u8003 ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u7684\u5b98\u65b9\u6587\u6863\u548c\u6e90\u7801\uff0c\u6df1\u5165\u4e86\u89e3\u51fd\u6570\u7684\u5b9e\u73b0\u548c\u4f7f\u7528\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NativeCall"})," \u673a\u5236\u4e3a ",(0,r.jsx)(n.strong,{children:"SyntaxFlow"})," \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\uff0c\u4f7f\u7528\u6237\u80fd\u591f\u5728\u89c4\u5219\u4e2d\u6267\u884c\u591a\u79cd\u9ad8\u7ea7\u64cd\u4f5c\u3002\u901a\u8fc7\u9884\u5b9a\u4e49\u7684 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u51fd\u6570\uff0c\u7528\u6237\u53ef\u4ee5\u9ad8\u6548\u5730\u64cd\u4f5c\u3001\u68c0\u67e5\u548c\u8f6c\u6362\u6570\u636e\u7ed3\u6784\uff0c\u5b8c\u6210\u590d\u6742\u7684\u4ee3\u7801\u5206\u6790\u4efb\u52a1\u3002\u638c\u63e1 ",(0,r.jsx)(n.strong,{children:"NativeCall"})," \u7684\u4f7f\u7528\u65b9\u6cd5\u548c\u6700\u4f73\u5b9e\u8df5\uff0c\u5c06\u663e\u8457\u63d0\u5347\u4ee3\u7801\u5ba1\u8ba1\u548c\u5b89\u5168\u5206\u6790\u7684\u6548\u7387\u4e0e\u51c6\u786e\u6027\u3002"]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},14252:(e,n,l)=>{l.d(n,{A:()=>t});l(96540);var s=l(65195);const r={tableOfContentsInline:"tableOfContentsInline_prmo"};var i=l(74848);function t(e){let{toc:n,minHeadingLevel:l,maxHeadingLevel:t}=e;return(0,i.jsx)("div",{className:r.tableOfContentsInline,children:(0,i.jsx)(s.A,{toc:n,minHeadingLevel:l,maxHeadingLevel:t,className:"table-of-contents",linkClassName:null})})}},65195:(e,n,l)=>{l.d(n,{A:()=>v});var s=l(96540),r=l(6342);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),l=Array(7).fill(-1);n.forEach(((e,n)=>{const s=l.slice(2,e.level);e.parentIndex=Math.max(...s),l[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:l,...r}=e;l>=0?n[l].children.push(r):s.push(r)})),s}function t(e){let{toc:n,minHeadingLevel:l,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=t({toc:e.children,minHeadingLevel:l,maxHeadingLevel:s});return function(e){return e.level>=l&&e.level<=s}(e)?[{...e,children:n}]:n}))}function d(e){const n=e.getBoundingClientRect();return n.top===n.bottom?d(e.parentNode):n}function c(e,n){let{anchorTopOffset:l}=n;const s=e.find((e=>d(e).top>=l));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function a(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function h(e){const n=(0,s.useRef)(void 0),l=a();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:t}=e;function d(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),d=function(e){let{minHeadingLevel:n,maxHeadingLevel:l}=e;const s=[];for(let r=n;r<=l;r+=1)s.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:t}),a=c(d,{anchorTopOffset:l.current}),h=e.find((e=>a&&a.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,l){l?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===h)}))}return document.addEventListener("scroll",d),document.addEventListener("resize",d),d(),()=>{document.removeEventListener("scroll",d),document.removeEventListener("resize",d)}}),[e,l])}var x=l(28774),o=l(74848);function j(e){let{toc:n,className:l,linkClassName:s,isChild:r}=e;return n.length?(0,o.jsx)("ul",{className:r?void 0:l,children:n.map((e=>(0,o.jsxs)("li",{children:[(0,o.jsx)(x.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,o.jsx)(j,{isChild:!0,toc:e.children,className:l,linkClassName:s})]},e.id)))}):null}const u=s.memo(j);function v(e){let{toc:n,className:l="table-of-contents table-of-contents__left-border",linkClassName:d="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:a,maxHeadingLevel:x,...j}=e;const v=(0,r.p)(),g=a??v.tableOfContents.minHeadingLevel,m=x??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:l,maxHeadingLevel:r}=e;return(0,s.useMemo)((()=>t({toc:i(n),minHeadingLevel:l,maxHeadingLevel:r})),[n,l,r])}({toc:n,minHeadingLevel:g,maxHeadingLevel:m});return h((0,s.useMemo)((()=>{if(d&&c)return{linkClassName:d,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:m}}),[d,c,g,m])),(0,o.jsx)(u,{toc:p,className:l,linkClassName:d,...j})}}}]);