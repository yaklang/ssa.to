"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[8804],{86539:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"statements/sf-sca","title":"SCA: \u4f9d\u8d56\u7248\u672c\u4fe1\u606f\u68c0\u6d4b","description":"SyntaxFlow \u80fd\u591f\u89e3\u6790\u4f9d\u8d56\u5305\u7684\u7248\u672c\u4fe1\u606f\uff0c\u540c\u65f6\u4e5f\u5141\u8bb8\u7528\u6237\u7f16\u5199\u89c4\u5219\u6765\u5206\u6790\u8fd9\u4e9b\u7248\u672c\u4fe1\u606f\u3002\u901a\u8fc7\u5bf9\u4f9d\u8d56\u7248\u672c\u7684\u68c0\u6d4b\uff0c\u53ef\u4ee5\u6709\u6548\u8bc6\u522b\u9879\u76ee\u4e2d\u5b58\u5728\u5df2\u77e5\u6f0f\u6d1e\u7684\u4f9d\u8d56\u5305\uff0c\u4ece\u800c\u63d0\u5347\u4ee3\u7801\u7684\u5b89\u5168\u6027\u548c\u7a33\u5b9a\u6027\u3002\u672c\u8282\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5728 SyntaxFlow \u4e2d\u83b7\u53d6\u548c\u7b5b\u9009\u4f9d\u8d56\u7248\u672c\u4fe1\u606f\uff0c\u5e76\u901a\u8fc7\u5b9e\u4f8b\u6f14\u793a\u5982\u4f55\u68c0\u6d4b\u5177\u6709\u6f0f\u6d1e\u7684\u4f9d\u8d56\u5305\u7248\u672c\u3002","source":"@site/syntaxflow-guide/statements/sf-sca.mdx","sourceDirName":"statements","slug":"/statements/sf-sca","permalink":"/syntaxflow-guide/statements/sf-sca","draft":false,"unlisted":false,"editUrl":"https://github.com/yaklang/ssa.to/tree/main/syntaxflow-guide/syntaxflow-guide/statements/sf-sca.mdx","tags":[],"version":"current","lastUpdatedBy":"VillanCh","lastUpdatedAt":1731548453000,"frontMatter":{},"sidebar":"syntaxflowGuideSidebar","previous":{"title":"\u539f\u751f\u6269\u5c55\uff1a\u91cd\u8981\u7684 NativeCall \u673a\u5236","permalink":"/syntaxflow-guide/statements/sf-nativecall"}}');var l=s(74848),r=s(28453),d=s(14252);const o={},c="SCA: \u4f9d\u8d56\u7248\u672c\u4fe1\u606f\u68c0\u6d4b",t={},a=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f",id:"\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f",level:2},{value:"\u7b5b\u9009\u4f9d\u8d56\u7248\u672c",id:"\u7b5b\u9009\u4f9d\u8d56\u7248\u672c",level:2},{value:"version_in \u8bed\u6cd5\u5b9a\u4e49",id:"version_in-\u8bed\u6cd5\u5b9a\u4e49",level:3},{value:"version_in \u8bed\u6cd5\u793a\u4f8b",id:"version_in-\u8bed\u6cd5\u793a\u4f8b",level:3},{value:"\u5b9e\u6218\u6848\u4f8b\uff1a\u5206\u6790\u5177\u6709\u6f0f\u6d1e\u7248\u672c\u7684 fastjson",id:"\u5b9e\u6218\u6848\u4f8b\u5206\u6790\u5177\u6709\u6f0f\u6d1e\u7248\u672c\u7684-fastjson",level:2},{value:"\u4f9d\u8d56\u4fe1\u606f\u793a\u4f8b\uff08Maven\uff09",id:"\u4f9d\u8d56\u4fe1\u606f\u793a\u4f8bmaven",level:3},{value:"\u89c4\u5219\u7f16\u5199",id:"\u89c4\u5219\u7f16\u5199",level:3},{value:"\u89c4\u5219\u89e3\u91ca",id:"\u89c4\u5219\u89e3\u91ca",level:4},{value:"\u6267\u884c\u6548\u679c",id:"\u6267\u884c\u6548\u679c",level:3},{value:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",level:2},{value:"1. \u786e\u4fdd\u4f9d\u8d56\u4fe1\u606f\u7684\u51c6\u786e\u6027",id:"1-\u786e\u4fdd\u4f9d\u8d56\u4fe1\u606f\u7684\u51c6\u786e\u6027",level:3},{value:"2. \u7248\u672c\u533a\u95f4\u7684\u51c6\u786e\u6027",id:"2-\u7248\u672c\u533a\u95f4\u7684\u51c6\u786e\u6027",level:3},{value:"3. \u6027\u80fd\u4f18\u5316",id:"3-\u6027\u80fd\u4f18\u5316",level:3},{value:"4. \u5b9a\u671f\u66f4\u65b0\u6f0f\u6d1e\u4fe1\u606f",id:"4-\u5b9a\u671f\u66f4\u65b0\u6f0f\u6d1e\u4fe1\u606f",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"1. \u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219",id:"1-\u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219",level:3},{value:"2. \u7ed3\u5408\u81ea\u52a8\u5316\u5de5\u5177",id:"2-\u7ed3\u5408\u81ea\u52a8\u5316\u5de5\u5177",level:3},{value:"3. \u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219",id:"3-\u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219",level:3},{value:"4. \u4f7f\u7528\u8be6\u7ec6\u7684\u63cf\u8ff0\u548c\u4fee\u590d\u5efa\u8bae",id:"4-\u4f7f\u7528\u8be6\u7ec6\u7684\u63cf\u8ff0\u548c\u4fee\u590d\u5efa\u8bae",level:3},{value:"5. \u6d4b\u8bd5\u89c4\u5219\u7684\u6709\u6548\u6027",id:"5-\u6d4b\u8bd5\u89c4\u5219\u7684\u6709\u6548\u6027",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"sca-\u4f9d\u8d56\u7248\u672c\u4fe1\u606f\u68c0\u6d4b",children:"SCA: \u4f9d\u8d56\u7248\u672c\u4fe1\u606f\u68c0\u6d4b"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u80fd\u591f\u89e3\u6790\u4f9d\u8d56\u5305\u7684\u7248\u672c\u4fe1\u606f\uff0c\u540c\u65f6\u4e5f\u5141\u8bb8\u7528\u6237\u7f16\u5199\u89c4\u5219\u6765\u5206\u6790\u8fd9\u4e9b\u7248\u672c\u4fe1\u606f\u3002\u901a\u8fc7\u5bf9\u4f9d\u8d56\u7248\u672c\u7684\u68c0\u6d4b\uff0c\u53ef\u4ee5\u6709\u6548\u8bc6\u522b\u9879\u76ee\u4e2d\u5b58\u5728\u5df2\u77e5\u6f0f\u6d1e\u7684\u4f9d\u8d56\u5305\uff0c\u4ece\u800c\u63d0\u5347\u4ee3\u7801\u7684\u5b89\u5168\u6027\u548c\u7a33\u5b9a\u6027\u3002\u672c\u8282\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5728 ",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u4e2d\u83b7\u53d6\u548c\u7b5b\u9009\u4f9d\u8d56\u7248\u672c\u4fe1\u606f\uff0c\u5e76\u901a\u8fc7\u5b9e\u4f8b\u6f14\u793a\u5982\u4f55\u68c0\u6d4b\u5177\u6709\u6f0f\u6d1e\u7684\u4f9d\u8d56\u5305\u7248\u672c\u3002"]}),"\n","\n",(0,l.jsx)(d.A,{toc:a}),"\n",(0,l.jsx)(e.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u73b0\u4ee3\u8f6f\u4ef6\u5f00\u53d1\u4e2d\uff0c\u4f9d\u8d56\u7ba1\u7406\u662f\u4e00\u4e2a\u5173\u952e\u73af\u8282\u3002\u9879\u76ee\u901a\u5e38\u4f9d\u8d56\u591a\u4e2a\u7b2c\u4e09\u65b9\u5e93\u548c\u6846\u67b6\uff0c\u800c\u8fd9\u4e9b\u4f9d\u8d56\u5305\u7684\u7248\u672c\u76f4\u63a5\u5f71\u54cd\u9879\u76ee\u7684\u5b89\u5168\u6027\u548c\u7a33\u5b9a\u6027\u3002",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u529f\u80fd\u6765\u89e3\u6790\u548c\u5206\u6790\u4f9d\u8d56\u5305\u7684\u7248\u672c\u4fe1\u606f\uff0c\u4f7f\u5f00\u53d1\u8005\u80fd\u591f\u8f7b\u677e\u68c0\u6d4b\u51fa\u5b58\u5728\u5df2\u77e5\u6f0f\u6d1e\u7684\u4f9d\u8d56\u7248\u672c\uff0c\u4ece\u800c\u53ca\u65f6\u91c7\u53d6\u63aa\u65bd\u8fdb\u884c\u66f4\u65b0\u6216\u66ff\u6362\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f",children:"\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u901a\u8fc7\u5185\u7f6e\u53d8\u91cf ",(0,l.jsx)(e.code,{children:"__dependency__"})," \u5b58\u50a8\u89e3\u6790\u540e\u7684\u4f9d\u8d56\u4fe1\u606f\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7b5b\u9009\u4f9d\u8d56\u540d\u79f0\u7684\u65b9\u5f0f\u83b7\u53d6\u7279\u5b9a\u4f9d\u8d56\u7684\u7248\u672c\u4fe1\u606f\u6216\u6587\u4ef6\u4fe1\u606f\u3002\u4ee5\u4e0b\u662f\u83b7\u53d6\u4f9d\u8d56\u4fe1\u606f\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-syntaxflow",children:"// \u83b7\u53d6\u4f9d\u8d56\u540d\u4ee5 fastjson \u7ed3\u5c3e\u7684\u4f9d\u8d56\u7248\u672c\n__dependency__.*fastjson.version as $ver;\n\n// \u83b7\u53d6\u4f9d\u8d56\u540d\u4ee5 fastjson \u7ed3\u5c3e\u6240\u5728\u7684\u4f9d\u8d56\u6587\u4ef6\n__dependency__.*fastjson.filename as $file;\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"__dependency__.*fastjson.version as $ver;"})}),"\uff1a\u7b5b\u9009\u4f9d\u8d56\u540d\u79f0\u4ee5 ",(0,l.jsx)(e.code,{children:"fastjson"})," \u7ed3\u5c3e\u7684\u4f9d\u8d56\u7248\u672c\uff0c\u5e76\u5c06\u7ed3\u679c\u5b58\u50a8\u5728\u53d8\u91cf ",(0,l.jsx)(e.code,{children:"$ver"})," \u4e2d\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"__dependency__.*fastjson.filename as $file;"})}),"\uff1a\u7b5b\u9009\u4f9d\u8d56\u540d\u79f0\u4ee5 ",(0,l.jsx)(e.code,{children:"fastjson"})," \u7ed3\u5c3e\u7684\u4f9d\u8d56\u6587\u4ef6\uff0c\u5e76\u5c06\u7ed3\u679c\u5b58\u50a8\u5728\u53d8\u91cf ",(0,l.jsx)(e.code,{children:"$file"})," \u4e2d\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7b5b\u9009\u4f9d\u8d56\u7248\u672c",children:"\u7b5b\u9009\u4f9d\u8d56\u7248\u672c"}),"\n",(0,l.jsxs)(e.p,{children:["\u83b7\u53d6\u5230\u4f9d\u8d56\u7684\u7248\u672c\u4fe1\u606f\u540e\uff0c\u4e0b\u4e00\u6b65\u901a\u5e38\u662f\u7b5b\u9009\u51fa\u5b58\u5728\u5df2\u77e5\u6f0f\u6d1e\u7684\u7248\u672c\u3002",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u63d0\u4f9b\u4e86 ",(0,l.jsx)(e.code,{children:"version_in"})," \u8bed\u6cd5\u6765\u5b9a\u4e49\u7248\u672c\u533a\u95f4\uff0c\u4ee5\u4fbf\u68c0\u6d4b\u4f9d\u8d56\u7248\u672c\u662f\u5426\u843d\u5728\u7279\u5b9a\u7684\u6f0f\u6d1e\u7248\u672c\u8303\u56f4\u5185\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"version_in-\u8bed\u6cd5\u5b9a\u4e49",children:"version_in \u8bed\u6cd5\u5b9a\u4e49"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u4e2d ",(0,l.jsx)(e.code,{children:"version_in"})," \u7684\u8bed\u6cd5\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"filterItem\n    ...\n    | In versionInExpression                     # VersionInFilter\n    ;\n\nversionInExpression: versionInterval ('||' versionInterval)*;\nversionInterval: ( '[' | '(') vstart? ',' vend? (   ']'| ')' ) ;\nvstart: versionString;\nvend: versionString;\n// unless ',' ']' ')'\nversionBlockElement: Number versionSuffix* ;\nversionSuffix: '-' | Identifier;\nversionBlock:  versionBlockElement ('.' versionBlockElement )*;\nversionString\n    : stringLiteral\n    | versionBlock\n    ;\n\nIn: 'in';\nconditionExpression\n    ...\n    |  VersionIn ':' versionInExpression              # VersionInCondition\n    ;\n\nVersionIn: 'version_in';\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"version_in"})}),"\uff1a\u5173\u952e\u5b57\uff0c\u7528\u4e8e\u8868\u793a\u7248\u672c\u533a\u95f4\u7b5b\u9009\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"versionInterval"})}),"\uff1a\u5b9a\u4e49\u4e00\u4e2a\u7248\u672c\u533a\u95f4\uff0c\u4f7f\u7528\u5706\u62ec\u53f7 ",(0,l.jsx)(e.code,{children:"()"})," \u8868\u793a\u4e0d\u5305\u62ec\u8fb9\u754c\uff0c\u65b9\u62ec\u53f7 ",(0,l.jsx)(e.code,{children:"[]"})," \u8868\u793a\u5305\u62ec\u8fb9\u754c\u3002\u591a\u4e2a\u533a\u95f4\u53ef\u4ee5\u7528 ",(0,l.jsx)(e.code,{children:"||"})," \u8fde\u63a5\uff0c\u8868\u793a\u5e76\u96c6\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"versionString"})}),"\uff1a\u7248\u672c\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u662f\u7b80\u5355\u7684\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u6216\u7531\u6570\u5b57\u548c\u540e\u7f00\u7ec4\u6210\u7684\u7248\u672c\u5757\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"version_in-\u8bed\u6cd5\u793a\u4f8b",children:"version_in \u8bed\u6cd5\u793a\u4f8b"}),"\n",(0,l.jsxs)(e.p,{children:["\u4ee5\u4e0b\u662f ",(0,l.jsx)(e.code,{children:"version_in"})," \u8bed\u6cd5\u7684\u4f7f\u7528\u793a\u4f8b\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-syntaxflow",children:"// \u68c0\u67e5\u7248\u672c\u662f\u5426\u5728 1 < version <= 2 \u8303\u56f4\u5185\n$version in (1,2]\n\n// \u68c0\u67e5\u7248\u672c\u662f\u5426\u5728 1.0.0 < version <= 2.0.0 \u8303\u56f4\u5185\n$version in (1.0.0,2.0.0]\n\n// \u68c0\u67e5\u7248\u672c\u662f\u5426\u5728 1.2.3-beta < version <= 2.2.1-beta \u8303\u56f4\u5185\n$version in (1.2.3-beta,2.2.1-beta]\n\n// \u68c0\u67e5\u7248\u672c\u662f\u5426\u5728 [1.1,1.3] \u6216 [2.2,2.3] \u6216 [3.2,3.3] \u8303\u56f4\u5185\n$version in [1.1,1.3] || [2.2,2.3] || [3.2,3.3]\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5206\u6790\u503c\u7b5b\u9009\u8fc7\u6ee4\u7684\u8bed\u6cd5\u8fdb\u884c\u7248\u672c\u7b5b\u9009\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-syntaxflow",children:"$version ?{version_in:(1,2]} // \u7248\u672c\u53f7\u662f\u5426\u5728 1 < version <= 2 \u8303\u56f4\u5185\n$version ?{version_in:(1.0.0,2.0.0]} // \u7248\u672c\u53f7\u662f\u5426\u5728 1.0.0 < version <= 2.0.0 \u8303\u56f4\u5185\n$version ?{version_in:(1.2.3-beta,2.2.1-beta]} // \u7248\u672c\u53f7\u662f\u5426\u5728 1.2.3-beta < version <= 2.2.1-beta \u8303\u56f4\u5185\n$version ?{version_in:[1.1,1.3] || [2.2,2.3] || [3.2,3.3]} // \u7248\u672c\u53f7\u662f\u5426\u5728\u591a\u4e2a\u8303\u56f4\u5185\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5b9e\u6218\u6848\u4f8b\u5206\u6790\u5177\u6709\u6f0f\u6d1e\u7248\u672c\u7684-fastjson",children:"\u5b9e\u6218\u6848\u4f8b\uff1a\u5206\u6790\u5177\u6709\u6f0f\u6d1e\u7248\u672c\u7684 fastjson"}),"\n",(0,l.jsxs)(e.p,{children:["\u4ee5\u4e0b\u5c06\u901a\u8fc7\u4e00\u4e2a\u5b9e\u9645\u6848\u4f8b\uff0c\u6f14\u793a\u5982\u4f55\u4f7f\u7528 ",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u68c0\u6d4b\u9879\u76ee\u4e2d\u662f\u5426\u5b58\u5728\u5177\u6709\u5df2\u77e5\u6f0f\u6d1e\u7684 ",(0,l.jsx)(e.code,{children:"fastjson"})," \u7248\u672c\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4f9d\u8d56\u4fe1\u606f\u793a\u4f8bmaven",children:"\u4f9d\u8d56\u4fe1\u606f\u793a\u4f8b\uff08Maven\uff09"}),"\n",(0,l.jsxs)(e.p,{children:["\u5047\u8bbe\u9879\u76ee\u4f7f\u7528 Maven \u8fdb\u884c\u4f9d\u8d56\u7ba1\u7406\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e2a\u542b\u6709 ",(0,l.jsx)(e.code,{children:"fastjson"})," \u4f9d\u8d56\u7684 ",(0,l.jsx)(e.code,{children:"pom.xml"})," \u6587\u4ef6\u793a\u4f8b\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0\n                             http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>vulnerable-fastjson-app</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <dependencies>\n        \x3c!-- Fastjson dependency with known vulnerabilities --\x3e\n        <dependency>\n            <groupId>com.alibaba</groupId>\n            <artifactId>fastjson</artifactId>\n            \x3c!-- An example version with known vulnerabilities, make sure to check for specific vulnerable versions --\x3e\n            <version>1.2.24</version>\n        </dependency>\n    </dependencies>\n</project>\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\u89c4\u5219\u7f16\u5199",children:"\u89c4\u5219\u7f16\u5199"}),"\n",(0,l.jsxs)(e.p,{children:["\u57fa\u4e8e\u4e0a\u8ff0\u4f9d\u8d56\u4fe1\u606f\uff0c\u7f16\u5199 ",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u89c4\u5219\u4ee5\u68c0\u6d4b ",(0,l.jsx)(e.code,{children:"fastjson"})," \u7684\u7248\u672c\u662f\u5426\u5b58\u5728\u5df2\u77e5\u6f0f\u6d1e\u3002\u4ee5\u4e0b\u662f\u5177\u4f53\u7684\u89c4\u5219\u793a\u4f8b\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-syntaxflow",children:'// \u5b9a\u4e49\u89c4\u5219\u63cf\u8ff0\ndesc(\n    "Title": "\u68c0\u6d4b\u5b58\u5728\u6f0f\u6d1e\u7684 fastjson \u7248\u672c",\n    "Description": "\u8bc6\u522b\u9879\u76ee\u4e2d\u4f7f\u7528\u7684 fastjson \u7248\u672c\u662f\u5426\u5728\u5df2\u77e5\u6f0f\u6d1e\u8303\u56f4\u5185\u3002",\n    "Fix": "\u5347\u7ea7 fastjson \u5230\u6700\u65b0\u5b89\u5168\u7248\u672c"\n)\n\n// \u83b7\u53d6\u4f9d\u8d56\u540d\u4ee5 fastjson \u7ed3\u5c3e\u7684\u4f9d\u8d56\u7248\u672c\n__dependency__.*fastjson.version as $ver;\n\n// \u7b5b\u9009\u51fa\u5b58\u5728\u6f0f\u6d1e\u7684 fastjson \u7248\u672c\n$vulnVersion = $ver ?{version_in:(1.2.3,2.3.4]};\n\n// \u5b9a\u4e49\u8b66\u544a\u4fe1\u606f\nalert $vulnVersion for {\n    "title": "\u5b58\u5728 fastjson 1.2.3-2.3.4 \u7248\u672c\u6f0f\u6d1e",\n    "description": "\u9879\u76ee\u4e2d\u4f7f\u7528\u7684 fastjson \u7248\u672c\u5728 1.2.3 \u5230 2.3.4 \u4e4b\u95f4\uff0c\u5b58\u5728\u5df2\u77e5\u6f0f\u6d1e\uff0c\u5efa\u8bae\u5347\u7ea7\u3002",\n    "severity": "High",\n    "fix": "\u5347\u7ea7 fastjson \u5230\u6700\u65b0\u5b89\u5168\u7248\u672c\u3002"\n};\n'})}),"\n",(0,l.jsx)(e.h4,{id:"\u89c4\u5219\u89e3\u91ca",children:"\u89c4\u5219\u89e3\u91ca"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u63cf\u8ff0\u4fe1\u606f"}),"\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"desc"})}),"\uff1a\u5b9a\u4e49\u89c4\u5219\u7684\u6807\u9898\u3001\u63cf\u8ff0\u548c\u4fee\u590d\u5efa\u8bae\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u83b7\u53d6\u4f9d\u8d56\u7248\u672c"}),"\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"__dependency__.*fastjson.version as $ver;"})}),"\uff1a\u7b5b\u9009\u4f9d\u8d56\u540d\u79f0\u4ee5 ",(0,l.jsx)(e.code,{children:"fastjson"})," \u7ed3\u5c3e\u7684\u4f9d\u8d56\u7248\u672c\uff0c\u5e76\u5c06\u7ed3\u679c\u5b58\u50a8\u5728 ",(0,l.jsx)(e.code,{children:"$ver"})," \u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7b5b\u9009\u6f0f\u6d1e\u7248\u672c"}),"\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"$vulnVersion = $ver ?{version_in:(1.2.3,2.3.4]};"})}),"\uff1a\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"version_in"})," \u8bed\u6cd5\uff0c\u7b5b\u9009\u51fa\u7248\u672c\u53f7\u5728 ",(0,l.jsx)(e.code,{children:"(1.2.3,2.3.4]"})," \u8303\u56f4\u5185\u7684 ",(0,l.jsx)(e.code,{children:"fastjson"})," \u7248\u672c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u5b9a\u4e49\u8b66\u544a"}),"\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"alert $vulnVersion for { ... };"})}),"\uff1a\u9488\u5bf9\u7b5b\u9009\u51fa\u7684\u6f0f\u6d1e\u7248\u672c\uff0c\u5b9a\u4e49\u8b66\u544a\u4fe1\u606f\uff0c\u5305\u62ec\u6807\u9898\u3001\u63cf\u8ff0\u3001\u4e25\u91cd\u6027\u7b49\u7ea7\u4ee5\u53ca\u4fee\u590d\u5efa\u8bae\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u6267\u884c\u6548\u679c",children:"\u6267\u884c\u6548\u679c"}),"\n",(0,l.jsxs)(e.p,{children:["\u4fdd\u5b58\u4e0a\u8ff0\u89c4\u5219\u4e3a ",(0,l.jsx)(e.code,{children:"fastjson_vuln.sf"}),"\uff0c\u5e76\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5ba1\u8ba1\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"yak ssa -t . --program fastjson_app\nyak sf --program fastjson_app fastjson_vuln.sf\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u9884\u671f\u8f93\u51fa\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'[INFO] 2024-07-10 14:20:30 [ssacli:272] syntax flow query result:\nrule md5 hash: f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1\nrule preview: desc(    "Title": "\u68c0\u6d4b\u5b58\u5728\u6f0f\u6d1e\u7684 fastjson \u7248\u672c",...\ndescription: {Title: "\u68c0\u6d4b\u5b58\u5728\u6f0f\u6d1e\u7684 fastjson \u7248\u672c", Description: "\u8bc6\u522b\u9879\u76ee\u4e2d\u4f7f\u7528\u7684 fastjson \u7248\u672c\u662f\u5426\u5728\u5df2\u77e5\u6f0f\u6d1e\u8303\u56f4\u5185\u3002", Fix: "\u5347\u7ea7 fastjson \u5230\u6700\u65b0\u5b89\u5168\u7248\u672c", $vulnVersion: "\u5b58\u5728 fastjson 1.2.3-2.3.4 \u7248\u672c\u6f0f\u6d1e"}\nResult Vars:\n  vulnVersion:\n    t1329001: 1.2.24\n        pom.xml:17:20 - 17:27\n'})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u7ed3\u679c\u89e3\u91ca"}),"\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:(0,l.jsx)(e.code,{children:"$vulnVersion"})}),"\uff1a\u68c0\u6d4b\u5230 ",(0,l.jsx)(e.code,{children:"fastjson"})," \u7248\u672c ",(0,l.jsx)(e.code,{children:"1.2.24"})," \u843d\u5728 ",(0,l.jsx)(e.code,{children:"(1.2.3,2.3.4]"})," \u7684\u6f0f\u6d1e\u8303\u56f4\u5185\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u8b66\u544a\u4fe1\u606f"}),"\uff1a\u6839\u636e\u89c4\u5219\u5b9a\u4e49\uff0c\u8f93\u51fa\u5b58\u5728\u6f0f\u6d1e\u7684 ",(0,l.jsx)(e.code,{children:"fastjson"})," \u7248\u672c\uff0c\u5e76\u63d0\u4f9b\u76f8\u5e94\u7684\u4fee\u590d\u5efa\u8bae\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",children:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u5b9e\u9645\u5e94\u7528 ",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u8fdb\u884c\u4f9d\u8d56\u7248\u672c\u4fe1\u606f\u68c0\u6d4b\u65f6\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"]}),"\n",(0,l.jsx)(e.h3,{id:"1-\u786e\u4fdd\u4f9d\u8d56\u4fe1\u606f\u7684\u51c6\u786e\u6027",children:"1. \u786e\u4fdd\u4f9d\u8d56\u4fe1\u606f\u7684\u51c6\u786e\u6027"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u4f9d\u8d56\u683c\u5f0f"}),"\uff1a\u786e\u4fdd\u9879\u76ee\u7684\u4f9d\u8d56\u7ba1\u7406\u5de5\u5177\uff08\u5982 Maven\u3001Gradle\uff09\u7684\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f\u6b63\u786e\uff0c\u4ee5\u4fbf ",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u80fd\u591f\u51c6\u786e\u89e3\u6790\u4f9d\u8d56\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u4f9d\u8d56\u540d\u79f0\u5339\u914d"}),"\uff1a\u5728\u7b5b\u9009\u4f9d\u8d56\u65f6\uff0c\u4f7f\u7528\u6b63\u786e\u7684\u540d\u79f0\u5339\u914d\u6a21\u5f0f\uff0c\u907f\u514d\u56e0\u540d\u79f0\u4e0d\u5339\u914d\u5bfc\u81f4\u672a\u80fd\u68c0\u6d4b\u5230\u76ee\u6807\u4f9d\u8d56\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"2-\u7248\u672c\u533a\u95f4\u7684\u51c6\u786e\u6027",children:"2. \u7248\u672c\u533a\u95f4\u7684\u51c6\u786e\u6027"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u8fb9\u754c\u7b26\u53f7"}),"\uff1a\u5706\u62ec\u53f7 ",(0,l.jsx)(e.code,{children:"()"})," \u8868\u793a\u4e0d\u5305\u62ec\u8fb9\u754c\uff0c\u65b9\u62ec\u53f7 ",(0,l.jsx)(e.code,{children:"[]"})," \u8868\u793a\u5305\u62ec\u8fb9\u754c\u3002\u6839\u636e\u6f0f\u6d1e\u516c\u544a\uff0c\u51c6\u786e\u8bbe\u7f6e\u7248\u672c\u533a\u95f4\u7684\u5305\u542b\u4e0e\u5426\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u591a\u533a\u95f4\u7684\u4f7f\u7528"}),"\uff1a\u5f53\u6f0f\u6d1e\u5f71\u54cd\u591a\u4e2a\u4e0d\u8fde\u7eed\u7684\u7248\u672c\u533a\u95f4\u65f6\uff0c\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"||"})," \u8fde\u63a5\u591a\u4e2a\u533a\u95f4\u8fdb\u884c\u5e76\u96c6\u5339\u914d\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"3-\u6027\u80fd\u4f18\u5316",children:"3. \u6027\u80fd\u4f18\u5316"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u7b5b\u9009\u8303\u56f4"}),"\uff1a\u5c3d\u91cf\u7f29\u5c0f\u7b5b\u9009\u7684\u4f9d\u8d56\u8303\u56f4\uff0c\u907f\u514d\u5bf9\u4e0d\u76f8\u5173\u7684\u4f9d\u8d56\u8fdb\u884c\u4e0d\u5fc5\u8981\u7684\u7248\u672c\u68c0\u6d4b\uff0c\u63d0\u5347\u5ba1\u8ba1\u6027\u80fd\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u89c4\u5219\u6a21\u5757\u5316"}),"\uff1a\u5c06\u4e0d\u540c\u4f9d\u8d56\u7684\u7248\u672c\u68c0\u6d4b\u89c4\u5219\u5206\u6a21\u5757\u7f16\u5199\uff0c\u4fbf\u4e8e\u7ba1\u7406\u548c\u4f18\u5316\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"4-\u5b9a\u671f\u66f4\u65b0\u6f0f\u6d1e\u4fe1\u606f",children:"4. \u5b9a\u671f\u66f4\u65b0\u6f0f\u6d1e\u4fe1\u606f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6f0f\u6d1e\u6570\u636e\u5e93"}),"\uff1a\u53ca\u65f6\u66f4\u65b0\u5df2\u77e5\u6f0f\u6d1e\u7684\u7248\u672c\u8303\u56f4\uff0c\u786e\u4fdd ",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u89c4\u5219\u80fd\u591f\u8986\u76d6\u6700\u65b0\u7684\u6f0f\u6d1e\u4fe1\u606f\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u81ea\u52a8\u5316\u811a\u672c"}),"\uff1a\u8003\u8651\u4f7f\u7528\u81ea\u52a8\u5316\u811a\u672c\u5b9a\u671f\u66f4\u65b0\u548c\u9a8c\u8bc1\u89c4\u5219\u4e2d\u7684\u6f0f\u6d1e\u7248\u672c\u4fe1\u606f\uff0c\u4fdd\u6301\u89c4\u5219\u7684\u65f6\u6548\u6027\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,l.jsxs)(e.p,{children:["\u4e3a\u4e86\u5145\u5206\u53d1\u6325 ",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u5728\u4f9d\u8d56\u7248\u672c\u4fe1\u606f\u68c0\u6d4b\u4e2d\u7684\u4f18\u52bf\uff0c\u5efa\u8bae\u9075\u5faa\u4ee5\u4e0b\u6700\u4f73\u5b9e\u8df5\uff1a"]}),"\n",(0,l.jsx)(e.h3,{id:"1-\u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219",children:"1. \u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219"}),"\n",(0,l.jsxs)(e.p,{children:["\u5c06\u4e0d\u540c\u4f9d\u8d56\u7684\u7248\u672c\u68c0\u6d4b\u89c4\u5219\u5206\u6a21\u5757\u7f16\u5199\uff0c\u6bcf\u4e2a\u6a21\u5757\u4e13\u6ce8\u4e8e\u7279\u5b9a\u4f9d\u8d56\u7684\u6f0f\u6d1e\u68c0\u6d4b\u3002\u4f8b\u5982\uff0c\u4e3a ",(0,l.jsx)(e.code,{children:"fastjson"}),"\u3001",(0,l.jsx)(e.code,{children:"commons-io"})," \u7b49\u5e38\u89c1\u4f9d\u8d56\u5305\u5206\u522b\u7f16\u5199\u72ec\u7acb\u7684\u89c4\u5219\u6587\u4ef6\uff0c\u63d0\u5347\u89c4\u5219\u7684\u53ef\u7ef4\u62a4\u6027\u548c\u53ef\u8bfb\u6027\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"2-\u7ed3\u5408\u81ea\u52a8\u5316\u5de5\u5177",children:"2. \u7ed3\u5408\u81ea\u52a8\u5316\u5de5\u5177"}),"\n",(0,l.jsxs)(e.p,{children:["\u5229\u7528\u81ea\u52a8\u5316\u5de5\u5177\uff08\u5982 CI/CD \u7ba1\u9053\uff09\u96c6\u6210 ",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u5ba1\u8ba1\uff0c\u786e\u4fdd\u6bcf\u6b21\u4ee3\u7801\u63d0\u4ea4\u6216\u4f9d\u8d56\u66f4\u65b0\u65f6\uff0c\u81ea\u52a8\u89e6\u53d1\u7248\u672c\u4fe1\u606f\u68c0\u6d4b\uff0c\u53ca\u65f6\u53d1\u73b0\u5e76\u5904\u7406\u6f5c\u5728\u6f0f\u6d1e\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"3-\u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219",children:"3. \u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219"}),"\n",(0,l.jsxs)(e.p,{children:["\u968f\u7740\u9879\u76ee\u4f9d\u8d56\u7684\u53d8\u5316\u548c\u65b0\u6f0f\u6d1e\u7684\u53d1\u73b0\uff0c\u5b9a\u671f\u5ba1\u67e5\u5e76\u66f4\u65b0 ",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u7684\u89c4\u5219\uff0c\u786e\u4fdd\u89c4\u5219\u80fd\u591f\u8986\u76d6\u6700\u65b0\u7684\u4f9d\u8d56\u7248\u672c\u4fe1\u606f\u548c\u6f0f\u6d1e\u8303\u56f4\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"4-\u4f7f\u7528\u8be6\u7ec6\u7684\u63cf\u8ff0\u548c\u4fee\u590d\u5efa\u8bae",children:"4. \u4f7f\u7528\u8be6\u7ec6\u7684\u63cf\u8ff0\u548c\u4fee\u590d\u5efa\u8bae"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u89c4\u5219\u4e2d\u63d0\u4f9b\u8be6\u7ec6\u7684\u63cf\u8ff0\u4fe1\u606f\u548c\u660e\u786e\u7684\u4fee\u590d\u5efa\u8bae\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u7406\u89e3\u95ee\u9898\u5e76\u91c7\u53d6\u76f8\u5e94\u63aa\u65bd\u3002\u4f8b\u5982\uff0c\u63d0\u793a\u5177\u4f53\u9700\u8981\u5347\u7ea7\u5230\u7684\u5b89\u5168\u7248\u672c\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"5-\u6d4b\u8bd5\u89c4\u5219\u7684\u6709\u6548\u6027",children:"5. \u6d4b\u8bd5\u89c4\u5219\u7684\u6709\u6548\u6027"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u5927\u89c4\u6a21\u5e94\u7528\u89c4\u5219\u4e4b\u524d\uff0c\u5148\u5728\u5c0f\u8303\u56f4\u5185\u6d4b\u8bd5\uff0c\u786e\u4fdd\u89c4\u5219\u80fd\u591f\u51c6\u786e\u68c0\u6d4b\u51fa\u76ee\u6807\u4f9d\u8d56\u7684\u6f0f\u6d1e\u7248\u672c\uff0c\u907f\u514d\u8bef\u62a5\u6216\u6f0f\u62a5\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,l.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,l.jsx)(e.strong,{children:"SyntaxFlow"})," \u7684\u4f9d\u8d56\u7248\u672c\u4fe1\u606f\u68c0\u6d4b\u529f\u80fd\uff0c\u5f00\u53d1\u8005\u80fd\u591f\u8f7b\u677e\u8bc6\u522b\u9879\u76ee\u4e2d\u5b58\u5728\u5df2\u77e5\u6f0f\u6d1e\u7684\u4f9d\u8d56\u5305\u7248\u672c\uff0c\u4ece\u800c\u53ca\u65f6\u91c7\u53d6\u63aa\u65bd\u8fdb\u884c\u5347\u7ea7\u6216\u66ff\u6362\uff0c\u63d0\u5347\u9879\u76ee\u7684\u5b89\u5168\u6027\u548c\u7a33\u5b9a\u6027\u3002\u638c\u63e1 ",(0,l.jsx)(e.code,{children:"version_in"})," \u8bed\u6cd5\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u7ed3\u5408\u5b9e\u9645\u9879\u76ee\u9700\u6c42\u7f16\u5199\u6709\u6548\u7684\u89c4\u5219\uff0c\u662f\u786e\u4fdd\u4ee3\u7801\u5b89\u5168\u7684\u91cd\u8981\u4e00\u73af\u3002\u9075\u5faa\u6700\u4f73\u5b9e\u8df5\uff0c\u5b9a\u671f\u66f4\u65b0\u548c\u4f18\u5316\u89c4\u5219\uff0c\u5c06\u663e\u8457\u63d0\u9ad8\u4f9d\u8d56\u7ba1\u7406\u548c\u6f0f\u6d1e\u68c0\u6d4b\u7684\u6548\u7387\u4e0e\u51c6\u786e\u6027\u3002"]})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}}}]);