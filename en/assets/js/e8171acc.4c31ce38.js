"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[2936],{88305:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"statements/sf-filter","title":"\u8fc7\u6ee4\u5668\uff1a?{...} \u7b5b\u9009\u5ba1\u8ba1\u7ed3\u679c","description":"\u7ecf\u8fc7\u524d\u9762\u7684\u5b66\u4e60\uff0c\u60a8\u5df2\u7ecf\u57fa\u672c\u638c\u63e1\u4e86 SyntaxFlow \u7684\u6267\u884c\u539f\u7406\u548c\u57fa\u672c\u89c4\u5219\u7684\u7f16\u5199\u65b9\u6cd5\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u4e00\u4e2a\u5f3a\u5927\u7684\u529f\u80fd\u2014\u2014\u5206\u6790\u503c\u7684\u7b5b\u9009\u8fc7\u6ee4\u3002\u901a\u8fc7\u4f7f\u7528 ?{...} \u7ed3\u6784\uff0c\u60a8\u53ef\u4ee5\u8fc7\u6ee4\u6389\u4e0d\u9700\u8981\u7684\u5ba1\u8ba1\u503c\u6216\u6392\u9664\u90a3\u4e9b\u6ca1\u6709\u6f0f\u6d1e\u7684\u503c\uff0c\u4ece\u800c\u63d0\u5347\u5ba1\u8ba1\u7684\u7cbe\u51c6\u5ea6\u548c\u6548\u7387\u3002","source":"@site/syntaxflow-guide/statements/sf-filter.mdx","sourceDirName":"statements","slug":"/statements/sf-filter","permalink":"/en/syntaxflow-guide/statements/sf-filter","draft":false,"unlisted":false,"editUrl":"https://github.com/yaklang/ssa.to/tree/main/syntaxflow-guide/syntaxflow-guide/statements/sf-filter.mdx","tags":[],"version":"current","lastUpdatedBy":"VillanCh","lastUpdatedAt":1731548453000,"frontMatter":{},"sidebar":"syntaxflowGuideSidebar","previous":{"title":"\u6570\u636e\u6d41\u8fd0\u7b97\uff1a\u8ffd\u8e2a\u5b9a\u4e49\u548c\u4f7f\u7528","permalink":"/en/syntaxflow-guide/statements/sf-dataflow"},"next":{"title":"\u96c6\u5408\u8fd0\u7b97\uff1a\u4ea4\u96c6 &\uff0c\u5dee\u96c6 -\uff0c\u5e76\u96c6 +","permalink":"/en/syntaxflow-guide/statements/sf-calc"}}');var i=s(74848),t=s(28453),l=s(14252);const d={},c="\u8fc7\u6ee4\u5668\uff1a?{...} \u7b5b\u9009\u5ba1\u8ba1\u7ed3\u679c",o={},a=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5206\u6790\u503c\u7b5b\u9009\u8fc7\u6ee4\u8bed\u6cd5\u5b9a\u4e49",id:"\u5206\u6790\u503c\u7b5b\u9009\u8fc7\u6ee4\u8bed\u6cd5\u5b9a\u4e49",level:2},{value:"\u8fd0\u7b97\u7b26\u6982\u89c8",id:"\u8fd0\u7b97\u7b26\u6982\u89c8",level:3},{value:"\u8bed\u6cd5\u7ed3\u6784",id:"\u8bed\u6cd5\u7ed3\u6784",level:3},{value:"\u4f7f\u7528\u5b9e\u4f8b\u4e0e\u89e3\u91ca",id:"\u4f7f\u7528\u5b9e\u4f8b\u4e0e\u89e3\u91ca",level:2},{value:"\u6848\u4f8b\u4e00\uff1a\u5ba1\u8ba1 DocumentBuilderFactory \u7684\u914d\u7f6e\u4ee5\u9632\u6b62 XXE \u6f0f\u6d1e",id:"\u6848\u4f8b\u4e00\u5ba1\u8ba1-documentbuilderfactory-\u7684\u914d\u7f6e\u4ee5\u9632\u6b62-xxe-\u6f0f\u6d1e",level:3},{value:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b",id:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b",level:4},{value:"SyntaxFlow \u89c4\u5219\u6848\u4f8b",id:"syntaxflow-\u89c4\u5219\u6848\u4f8b",level:4},{value:"\u6267\u884c\u6548\u679c",id:"\u6267\u884c\u6548\u679c",level:4},{value:"\u89e3\u91ca",id:"\u89e3\u91ca",level:4},{value:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",level:2},{value:"1. \u4e0a\u4e0b\u6587\u654f\u611f",id:"1-\u4e0a\u4e0b\u6587\u654f\u611f",level:3},{value:"2. \u6027\u80fd\u8003\u8651",id:"2-\u6027\u80fd\u8003\u8651",level:3},{value:"3. \u8ffd\u8e2a\u7684\u7cbe\u786e\u6027",id:"3-\u8ffd\u8e2a\u7684\u7cbe\u786e\u6027",level:3},{value:"4. \u5904\u7406\u9012\u5f52\u548c\u5faa\u73af",id:"4-\u5904\u7406\u9012\u5f52\u548c\u5faa\u73af",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"1. \u660e\u786e\u76ee\u6807\u65b9\u6cd5\u6216\u53d8\u91cf",id:"1-\u660e\u786e\u76ee\u6807\u65b9\u6cd5\u6216\u53d8\u91cf",level:3},{value:"2. \u5408\u7406\u8bbe\u7f6e\u8ffd\u8e2a\u6df1\u5ea6",id:"2-\u5408\u7406\u8bbe\u7f6e\u8ffd\u8e2a\u6df1\u5ea6",level:3},{value:"3. \u7ed3\u5408\u5176\u4ed6\u8fc7\u6ee4\u6761\u4ef6",id:"3-\u7ed3\u5408\u5176\u4ed6\u8fc7\u6ee4\u6761\u4ef6",level:3},{value:"4. \u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219",id:"4-\u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219",level:3},{value:"5. \u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219",id:"5-\u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function x(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"\u8fc7\u6ee4\u5668-\u7b5b\u9009\u5ba1\u8ba1\u7ed3\u679c",children:["\u8fc7\u6ee4\u5668\uff1a",(0,i.jsx)(n.code,{children:"?{...}"})," \u7b5b\u9009\u5ba1\u8ba1\u7ed3\u679c"]})}),"\n",(0,i.jsxs)(n.p,{children:["\u7ecf\u8fc7\u524d\u9762\u7684\u5b66\u4e60\uff0c\u60a8\u5df2\u7ecf\u57fa\u672c\u638c\u63e1\u4e86 ",(0,i.jsx)(n.strong,{children:"SyntaxFlow"})," \u7684\u6267\u884c\u539f\u7406\u548c\u57fa\u672c\u89c4\u5219\u7684\u7f16\u5199\u65b9\u6cd5\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u4e00\u4e2a\u5f3a\u5927\u7684\u529f\u80fd\u2014\u2014",(0,i.jsx)(n.strong,{children:"\u5206\u6790\u503c\u7684\u7b5b\u9009\u8fc7\u6ee4"}),"\u3002\u901a\u8fc7\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"?{...}"})," \u7ed3\u6784\uff0c\u60a8\u53ef\u4ee5\u8fc7\u6ee4\u6389\u4e0d\u9700\u8981\u7684\u5ba1\u8ba1\u503c\u6216\u6392\u9664\u90a3\u4e9b\u6ca1\u6709\u6f0f\u6d1e\u7684\u503c\uff0c\u4ece\u800c\u63d0\u5347\u5ba1\u8ba1\u7684\u7cbe\u51c6\u5ea6\u548c\u6548\u7387\u3002"]}),"\n","\n",(0,i.jsx)(l.A,{toc:a}),"\n",(0,i.jsx)(n.h2,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u9759\u6001\u4ee3\u7801\u5206\u6790\u548c\u5b89\u5168\u5ba1\u8ba1\u8fc7\u7a0b\u4e2d\uff0c",(0,i.jsx)(n.strong,{children:"\u5206\u6790\u503c\u7684\u7b5b\u9009\u8fc7\u6ee4"}),"\uff08Analysis Value Filtering\uff09\u662f\u4e00\u4e2a\u81f3\u5173\u91cd\u8981\u7684\u6280\u672f\u3002\u5b83\u5141\u8bb8\u5ba1\u8ba1\u5458\u901a\u8fc7\u6761\u4ef6\u8868\u8fbe\u5f0f\u7cbe\u786e\u63a7\u5236\u54ea\u4e9b\u6570\u636e\u6d41\u7ee7\u7eed\u53c2\u4e0e\u8fdb\u4e00\u6b65\u7684\u5ba1\u8ba1\u5206\u6790\uff0c\u4ece\u800c\u805a\u7126\u4e8e\u771f\u6b63\u6f5c\u5728\u7684\u5b89\u5168\u98ce\u9669\u3002",(0,i.jsx)(n.strong,{children:"SyntaxFlow"})," \u63d0\u4f9b\u4e86 ",(0,i.jsx)(n.code,{children:"?{...}"})," \u7ed3\u6784\uff0c\u4f7f\u5f97\u8fd9\u79cd\u7b5b\u9009\u53d8\u5f97\u7b80\u5355\u800c\u5f3a\u5927\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.strong,{children:"\u5206\u6790\u503c\u7b5b\u9009\u8fc7\u6ee4"}),"\uff0c\u60a8\u53ef\u4ee5\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6392\u9664\u4e0d\u76f8\u5173\u7684\u7ed3\u679c"}),"\uff0c\u51cf\u5c11\u566a\u97f3\uff0c\u63d0\u5347\u5ba1\u8ba1\u6548\u7387\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u805a\u7126\u6f5c\u5728\u7684\u5b89\u5168\u6f0f\u6d1e"}),"\uff0c\u786e\u4fdd\u5ba1\u8ba1\u8fc7\u7a0b\u66f4\u52a0\u7cbe\u51c6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u81ea\u5b9a\u4e49\u8fc7\u6ee4\u6761\u4ef6"}),"\uff0c\u9002\u5e94\u4e0d\u540c\u7684\u5ba1\u8ba1\u9700\u6c42\u548c\u573a\u666f\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5206\u6790\u503c\u7b5b\u9009\u8fc7\u6ee4\u8bed\u6cd5\u5b9a\u4e49",children:"\u5206\u6790\u503c\u7b5b\u9009\u8fc7\u6ee4\u8bed\u6cd5\u5b9a\u4e49"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.strong,{children:"SyntaxFlow"})," \u4e2d\uff0c",(0,i.jsx)(n.code,{children:"?{...}"})," \u7ed3\u6784\u7528\u4e8e\u5b9a\u4e49\u8fc7\u6ee4\u6761\u4ef6\u3002\u901a\u8fc7\u6761\u4ef6\u8868\u8fbe\u5f0f\uff0c\u60a8\u53ef\u4ee5\u6307\u5b9a\u590d\u6742\u7684\u903b\u8f91\u6765\u7b5b\u9009\u9700\u8981\u5173\u6ce8\u7684\u5ba1\u8ba1\u503c\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u8fd0\u7b97\u7b26\u6982\u89c8",children:"\u8fd0\u7b97\u7b26\u6982\u89c8"}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f ",(0,i.jsx)(n.strong,{children:"SyntaxFlow"})," \u4e2d\u53ef\u7528\u7684\u8fc7\u6ee4\u8fd0\u7b97\u7b26\u53ca\u5176\u8bf4\u660e\uff1a"]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"\u8fd0\u7b97\u7b26\u7c7b\u578b"}),(0,i.jsx)("th",{children:"\u63cf\u8ff0"}),(0,i.jsx)("th",{children:"\u793a\u4f8b"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"\u5d4c\u5957\u8bed\u53e5"})}),(0,i.jsx)("td",{children:"\u786e\u5b9a\u65b9\u6cd5\u6210\u5458\u6216\u5c5e\u6027\u7b49\u5d4c\u5957\u8bed\u53e5\u7684\u6267\u884c\u662f\u5426\u5b58\u5728"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"$vars?{.setFeature} as $new"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)("strong",{children:["\u903b\u8f91\u975e ",(0,i.jsx)("code",{children:"!"})]})}),(0,i.jsx)("td",{children:"\u6392\u9664\u7279\u5b9a\u64cd\u4f5c\uff0c\u7528\u4e8e\u5426\u5b9a\u6761\u4ef6"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"$vars?{!((.setFeature) || (.setXIncludeAware))} as $new"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)("strong",{children:["\u903b\u8f91\u4e0e ",(0,i.jsx)("code",{children:"&&"})]})}),(0,i.jsx)("td",{children:"\u540c\u65f6\u6ee1\u8db3\u591a\u4e2a\u6761\u4ef6"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"$vars?{(.setFeature) && (.setXIncludeAware)} as $new"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)("strong",{children:["\u903b\u8f91\u6216 ",(0,i.jsx)("code",{children:"||"})]})}),(0,i.jsx)("td",{children:"\u6ee1\u8db3\u4efb\u4e00\u6761\u4ef6"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"$vars?{(.setFeature) || (.setXIncludeAware)} as $new"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Opcode :"})}),(0,i.jsx)("td",{children:"\u68c0\u67e5\u7279\u5b9a\u7c7b\u578b\u7684\u64cd\u4f5c\uff0c\u5e38\u7528\u4e8e\u64cd\u4f5c\u7801\u8fc7\u6ee4"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"$vars?{opcode: 'call', 'phi'} as $new"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"Have :"})}),(0,i.jsx)("td",{children:"\u68c0\u67e5\u662f\u5426\u5305\u542b\u6307\u5b9a\u5b57\u7b26\u4e32\uff08\u65e0\u901a\u914d\u7b26\uff09"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"$vars?{have: 'abc'} as $new"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"HaveAny :"})}),(0,i.jsx)("td",{children:"\u68c0\u67e5\u662f\u5426\u5305\u542b\u4efb\u4e00\u6307\u5b9a\u5b57\u7b26\u4e32\uff08\u65e0\u901a\u914d\u7b26\uff09"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"$vars?{any: 'abc', 'def'} as $new"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"VersionIn :"})}),(0,i.jsxs)("td",{children:["\u68c0\u67e5\u4f9d\u8d56\u7248\u672c\u662f\u5426\u5728\u67d0\u4e2a\u7248\u672c\u533a\u95f4\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)("code",{children:"||"})," \u8868\u793a\u533a\u95f4\u5e76\u96c6"]}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"$vars?{version_in:(1.2.3,2.3.4]} as $vulnVersion"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("strong",{children:"\u7ec4\u5408\u6761\u4ef6"})}),(0,i.jsx)("td",{children:"\u7ed3\u5408\u591a\u79cd\u6761\u4ef6\u8fdb\u884c\u590d\u6742\u7684\u903b\u8f91\u8fc7\u6ee4"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"$vars?{(.setFeature) && !(.setXIncludeAware)} as $new"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"\u8bed\u6cd5\u7ed3\u6784",children:"\u8bed\u6cd5\u7ed3\u6784"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-antlr",children:"filterItem\n    : filterItemFirst                            #First\n    ...\n    | '->'                                       # NextFilter\n    | '#>'                                       # DefFilter\n    | '--\x3e'                                      # DeepNextFilter\n    | '-{' (recursiveConfig)? '}->'             # DeepNextConfigFilter\n    | '#->'                                      # TopDefFilter\n    | '#{' (recursiveConfig)? '}->'             # TopDefConfigFilter\n    | '?{' conditionExpression '}'              # OptionalFilter\n    ...\n    ;\n\nconditionExpression\n    : '(' conditionExpression ')'                     # ParenCondition\n    | filterExpr                                       # FilterCondition        // filter dot(.)Member and fields\n    | Opcode ':' opcodes (',' opcodes)* ','?          # OpcodeTypeCondition    // something like .(call, phi)\n    | Have ':' stringLiteralWithoutStarGroup           # StringContainHaveCondition // something like have: 'a', 'b'\n    | HaveAny ':' stringLiteralWithoutStarGroup        # StringContainAnyCondition // something like any: 'a', 'b'\n    | VersionIn ':' versionInExpression                # VersionInCondition\n    | negativeCondition conditionExpression           # NotCondition\n    | conditionExpression '&&' conditionExpression    # FilterExpressionAnd\n    | conditionExpression '||' conditionExpression    # FilterExpressionOr\n    ;\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"?{conditionExpression}"})}),"\uff1a\u7528\u4e8e\u5b9a\u4e49\u8fc7\u6ee4\u6761\u4ef6\uff0c\u5305\u542b\u5728 ",(0,i.jsx)(n.code,{children:"{}"})," \u5185\u7684\u6761\u4ef6\u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"conditionExpression"})}),"\uff1a\u652f\u6301\u591a\u79cd\u6761\u4ef6\u903b\u8f91\uff0c\u5305\u62ec\u5d4c\u5957\u3001\u64cd\u4f5c\u7801\u68c0\u67e5\u3001\u5b57\u7b26\u4e32\u5305\u542b\u7b49\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u5b9e\u4f8b\u4e0e\u89e3\u91ca",children:"\u4f7f\u7528\u5b9e\u4f8b\u4e0e\u89e3\u91ca"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u5177\u4f53\u7684\u4ee3\u7801\u6848\u4f8b\uff0c\u7ed3\u5408 ",(0,i.jsx)(n.strong,{children:"SyntaxFlow"})," \u7684\u8bed\u6cd5\u89c4\u5219\uff0c\u53ef\u4ee5\u66f4\u76f4\u89c2\u5730\u7406\u89e3 ",(0,i.jsx)(n.strong,{children:"\u5206\u6790\u503c\u7b5b\u9009\u8fc7\u6ee4"})," \u7684\u5e94\u7528\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u6848\u4f8b\u4e00\u5ba1\u8ba1-documentbuilderfactory-\u7684\u914d\u7f6e\u4ee5\u9632\u6b62-xxe-\u6f0f\u6d1e",children:"\u6848\u4f8b\u4e00\uff1a\u5ba1\u8ba1 DocumentBuilderFactory \u7684\u914d\u7f6e\u4ee5\u9632\u6b62 XXE \u6f0f\u6d1e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u80cc\u666f"}),"\uff1aXML \u5916\u90e8\u5b9e\u4f53\uff08XXE\uff09\u653b\u51fb\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u5b89\u5168\u6f0f\u6d1e\uff0c\u901a\u8fc7\u672a\u6b63\u786e\u914d\u7f6e\u7684 XML \u89e3\u6790\u5668\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u8bfb\u53d6\u6216\u4fee\u6539\u670d\u52a1\u5668\u4e0a\u7684\u654f\u611f\u6570\u636e\u3002",(0,i.jsx)(n.code,{children:"DocumentBuilderFactory"})," \u7c7b\u5728\u89e3\u6790 XML \u65f6\u82e5\u672a\u6b63\u786e\u8bbe\u7f6e\u5b89\u5168\u5c5e\u6027\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 XXE \u6f0f\u6d1e\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b",children:"\u5ba1\u8ba1\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import javax.xml.parsers.DocumentBuilder;\nimport javax.xml.parsers.DocumentBuilderFactory;\nimport java.io.ByteArrayInputStream;\nimport java.io.InputStream;\n\npublic class TestXXE {\n    public static void main(String[] args) throws Exception {\n        String xmlStr = "<!DOCTYPE foo [ <!ENTITY xxe SYSTEM \\"file:///etc/passwd\\" >]><foo>&xxe;</foo>";\n\n        // \u8fd9\u884c\u4ee3\u7801\u5c06\u88ab\u4e0b\u9762\u7684\u89c4\u5219\u6355\u83b7\n        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();\n        DocumentBuilder builder = factory.newDocumentBuilder();\n        InputStream stream = new ByteArrayInputStream(xmlStr.getBytes("UTF-8"));\n        org.w3c.dom.Document doc = builder.parse(stream);\n        doc.getDocumentElement().normalize();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"syntaxflow-\u89c4\u5219\u6848\u4f8b",children:"SyntaxFlow \u89c4\u5219\u6848\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-syntaxflow",children:'// \u5ba1\u8ba1\u56e0\u4e3a\u672a\u8bbe\u7f6e setFeature \u7b49\u5b89\u5168\u7b56\u7565\u9020\u6210\u7684 XXE \u6f0f\u6d1e\ndesc(\n    "Title": "\u5ba1\u8ba1\u56e0\u4e3a\u672a\u8bbe\u7f6e setFeature \u7b49\u5b89\u5168\u7b56\u7565\u9020\u6210\u7684XXE\u6f0f\u6d1e",\n    "Fix": "\u4fee\u590d\u65b9\u6848\uff1a\u9700\u8981\u7528\u6237\u8bbe\u7f6e setFeature / setXIncludeAware / setExpandEntityReferences \u7b49\u5b89\u5168\u914d\u7f6e"\n)\n\n// \u6355\u83b7\u521b\u5efa DocumentBuilderFactory \u5bf9\u8c61\u65f6\u7684\u5b9e\u4f8b\n$factories = DocumentBuilderFactory.newInstance();\n\n// \u8fc7\u6ee4\u51fa\u672a\u8bbe\u7f6e\u5b89\u5168\u5c5e\u6027\u7684 DocumentBuilderFactory \u5b9e\u4f8b\n$unsafeFactories = $factories?{!((.setFeature) || (.setXIncludeAware) || (.setExpandEntityReferences))} as $entry;\n\n// \u8ffd\u8e2a $entry \u4e2d\u6240\u6709 Builder \u5bf9\u8c61\u7684 parse \u65b9\u6cd5\u8c03\u7528\n$entry.*Builder().parse(* #-> as $source;\n\n// \u68c0\u67e5 parse \u65b9\u6cd5\u7684\u8c03\u7528\u6e90\u662f\u5426\u5b89\u5168\ncheck $source then "XXE Attack" else "XXE Safe";\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u6267\u884c\u6548\u679c",children:"\u6267\u884c\u6548\u679c"}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06\u4e0a\u8ff0\u89c4\u5219\u4fdd\u5b58\u4e3a ",(0,i.jsx)(n.code,{children:"xxe.sf"}),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5ba1\u8ba1\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yak ssa -t . --program xxe && yak sf --program xxe xxe.sf\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u8f93\u51fa\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[INFO] 2024-06-26 14:58:24 [ssacli:272] syntax flow query result:\nrule md5 hash: f3dde2cbbb200606c3361adb0f276c0e\nrule preview: desc(     "Title": "\u5ba1\u8ba1\u56e0\u4e3a\u672a\u8bbe\u7f6e setF...en "XXE Attack" else "XXE Safe";\ndescription: {Title: "\u5ba1\u8ba1\u56e0\u4e3a\u672a\u8bbe\u7f6e setFeature \u7b49\u5b89\u5168\u7b56\u7565\u9020\u6210\u7684XXE\u6f0f\u6d1e", Fix: "\u4fee\u590d\u65b9\u6848\uff1a\u9700\u8981\u7528\u6237\u8bbe\u7f6e setFeature / setXIncludeAware / setExpandEntityReferences \u7b49\u5b89\u5168\u914d\u7f6e", $source: "XXE Attack"}\nResult Vars:\n  factories:\n    t1325817: Undefined-DocumentBuilderFactory.newInstance(valid)()\n        XXE.java:17:65 - 17:78\n  entry:\n    t1325817: Undefined-DocumentBuilderFactory.newInstance(valid)()\n        XXE.java:17:65 - 17:78\n  source:\n    t1325822: Undefined-ByteArrayInputStream\n        XXE.java:18:33 - 18:79\n    ...\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u89e3\u91ca",children:"\u89e3\u91ca"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"$factories = DocumentBuilderFactory.newInstance();"})}),"\uff1a\u6355\u83b7 ",(0,i.jsx)(n.code,{children:"DocumentBuilderFactory"})," \u5b9e\u4f8b\u7684\u521b\u5efa\uff0c\u5e76\u5b58\u50a8\u5728 ",(0,i.jsx)(n.code,{children:"$factories"})," \u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"$unsafeFactories = $factories?{!((.setFeature) || (.setXIncludeAware) || (.setExpandEntityReferences))} as $entry;"})}),"\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"?{...}"})," \u7ed3\u6784\u8fc7\u6ee4\u51fa\u672a\u8c03\u7528 ",(0,i.jsx)(n.code,{children:".setFeature"}),"\u3001",(0,i.jsx)(n.code,{children:".setXIncludeAware"})," \u6216 ",(0,i.jsx)(n.code,{children:".setExpandEntityReferences"})," \u65b9\u6cd5\u7684 ",(0,i.jsx)(n.code,{children:"DocumentBuilderFactory"})," \u5b9e\u4f8b\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5c06\u8fc7\u6ee4\u540e\u7684\u7ed3\u679c\u5b58\u50a8\u5728 ",(0,i.jsx)(n.code,{children:"$entry"})," \u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"$entry.*Builder().parse(* #-> as $source;"})}),"\uff1a\u8ffd\u8e2a ",(0,i.jsx)(n.code,{children:"$entry"})," \u4e2d\u6240\u6709 ",(0,i.jsx)(n.code,{children:"Builder"})," \u5bf9\u8c61\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"parse"})," \u65b9\u6cd5\uff0c\u5e76\u5c06\u5176\u53c2\u6570\u5b58\u50a8\u5728 ",(0,i.jsx)(n.code,{children:"$source"})," \u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:'check $source then "XXE Attack" else "XXE Safe";'})}),"\uff1a\u68c0\u67e5 ",(0,i.jsx)(n.code,{children:"parse"}),' \u65b9\u6cd5\u7684\u8c03\u7528\u6e90\uff0c\u82e5\u6e90\u5934\u672a\u88ab\u5b89\u5168\u914d\u7f6e\u4fdd\u62a4\uff0c\u5219\u6807\u8bb0\u4e3a "XXE Attack"\uff0c\u5426\u5219\u6807\u8bb0\u4e3a\u5b89\u5168\u3002']}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c",(0,i.jsx)(n.strong,{children:"SyntaxFlow"})," \u80fd\u591f\u7cbe\u51c6\u5730\u5b9a\u4f4d\u672a\u6b63\u786e\u914d\u7f6e ",(0,i.jsx)(n.code,{children:"DocumentBuilderFactory"})," \u5b9e\u4f8b\u7684 ",(0,i.jsx)(n.code,{children:"parse"})," \u65b9\u6cd5\u8c03\u7528\uff0c\u5e2e\u52a9\u5f00\u53d1\u548c\u5b89\u5168\u56e2\u961f\u53ca\u65f6\u53d1\u73b0\u548c\u4fee\u590d\u6f5c\u5728\u7684 XXE \u6f0f\u6d1e\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879",children:"\u5b9e\u6218\u4e2d\u7684\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u4f7f\u7528 ",(0,i.jsx)(n.strong,{children:"\u5206\u6790\u503c\u7684\u7b5b\u9009\u8fc7\u6ee4"})," \u65f6\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a"]}),"\n",(0,i.jsx)(n.h3,{id:"1-\u4e0a\u4e0b\u6587\u654f\u611f",children:"1. \u4e0a\u4e0b\u6587\u654f\u611f"}),"\n",(0,i.jsxs)(n.p,{children:["\u7406\u89e3\u5f53\u524d\u4ee3\u7801\u7684\u4e0a\u4e0b\u6587\u975e\u5e38\u91cd\u8981\uff0c\u5c24\u5176\u662f\u5728\u5904\u7406\u590d\u6742\u903b\u8f91\u6216\u5927\u578b\u4ee3\u7801\u5e93\u65f6\u3002\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"-{}->"})," \u8fd0\u7b97\u7b26\u6765\u8bbe\u7f6e\u9002\u5f53\u7684\u8ffd\u8e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u5e2e\u52a9\u7ef4\u6301\u8ffd\u8e2a\u7684\u53ef\u7ba1\u7406\u6027\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"2-\u6027\u80fd\u8003\u8651",children:"2. \u6027\u80fd\u8003\u8651"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5927\u578b\u9879\u76ee\u4e2d\uff0c\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"--\x3e"})," \u6216 ",(0,i.jsx)(n.code,{children:"#->"})," \u53ef\u80fd\u4f1a\u5bfc\u81f4\u6027\u80fd\u5f00\u9500\u3002\u5efa\u8bae\u5728\u53ef\u80fd\u7684\u60c5\u51b5\u4e0b\uff0c\u9650\u5236\u8ffd\u8e2a\u7684\u6df1\u5ea6\u6216\u660e\u786e\u8ffd\u8e2a\u7684\u8d77\u59cb\u70b9\u548c\u7ec8\u70b9\uff0c\u4ee5\u63d0\u9ad8\u5ba1\u8ba1\u6548\u7387\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"3-\u8ffd\u8e2a\u7684\u7cbe\u786e\u6027",children:"3. \u8ffd\u8e2a\u7684\u7cbe\u786e\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u8fd0\u7b97\u7b26\u65f6\uff0c\u9700\u8981\u786e\u4fdd\u7406\u89e3\u6bcf\u4e2a\u7b26\u53f7\u7684\u5177\u4f53\u542b\u4e49\uff0c\u4ee5\u4fbf\u7cbe\u786e\u5730\u6355\u6349\u5230\u6240\u9700\u7684\u6570\u636e\u6d41\u548c\u5b9a\u4e49\u70b9\u3002\u907f\u514d\u8bef\u5339\u914d\u548c\u6f0f\u5339\u914d\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"4-\u5904\u7406\u9012\u5f52\u548c\u5faa\u73af",children:"4. \u5904\u7406\u9012\u5f52\u548c\u5faa\u73af"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u9047\u5230\u9012\u5f52\u51fd\u6570\u6216\u5faa\u73af\u7ed3\u6784\u65f6\uff0c\u9700\u8c28\u614e\u8bbe\u7f6e\u8ffd\u8e2a\u6df1\u5ea6\u548c\u6761\u4ef6\uff0c\u4ee5\u9632\u6b62\u65e0\u9650\u8ffd\u8e2a\u6216\u9057\u6f0f\u91cd\u8981\u7684\u8ffd\u8e2a\u70b9\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u5145\u5206\u53d1\u6325 ",(0,i.jsx)(n.strong,{children:"\u5206\u6790\u503c\u7684\u7b5b\u9009\u8fc7\u6ee4"})," \u7684\u4f18\u52bf\uff0c\u5efa\u8bae\u9075\u5faa\u4ee5\u4e0b\u6700\u4f73\u5b9e\u8df5\uff1a"]}),"\n",(0,i.jsx)(n.h3,{id:"1-\u660e\u786e\u76ee\u6807\u65b9\u6cd5\u6216\u53d8\u91cf",children:"1. \u660e\u786e\u76ee\u6807\u65b9\u6cd5\u6216\u53d8\u91cf"}),"\n",(0,i.jsx)(n.p,{children:"\u786e\u4fdd\u76ee\u6807\u65b9\u6cd5\u6216\u53d8\u91cf\u540d\u51c6\u786e\u65e0\u8bef\uff0c\u4ee5\u907f\u514d\u8bef\u5339\u914d\u548c\u6f0f\u5339\u914d\u3002\u4f8b\u5982\uff0c\u5728\u5b9a\u4e49\u89c4\u5219\u65f6\uff0c\u4ed4\u7ec6\u68c0\u67e5\u65b9\u6cd5\u540d\u548c\u53d8\u91cf\u540d\u7684\u62fc\u5199\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"2-\u5408\u7406\u8bbe\u7f6e\u8ffd\u8e2a\u6df1\u5ea6",children:"2. \u5408\u7406\u8bbe\u7f6e\u8ffd\u8e2a\u6df1\u5ea6"}),"\n",(0,i.jsx)(n.p,{children:"\u6839\u636e\u4ee3\u7801\u7684\u590d\u6742\u5ea6\u548c\u5b9e\u9645\u9700\u6c42\uff0c\u5408\u7406\u8bbe\u7f6e\u8ffd\u8e2a\u6df1\u5ea6\u6216\u4f7f\u7528\u9650\u5b9a\u6761\u4ef6\uff0c\u907f\u514d\u8fc7\u5ea6\u8ffd\u8e2a\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"3-\u7ed3\u5408\u5176\u4ed6\u8fc7\u6ee4\u6761\u4ef6",children:"3. \u7ed3\u5408\u5176\u4ed6\u8fc7\u6ee4\u6761\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5206\u6790\u503c\u7684\u7b5b\u9009\u8fc7\u6ee4"})," \u53ef\u4ee5\u4e0e\u5176\u4ed6\u8fc7\u6ee4\u6761\u4ef6\uff08\u5982\u53c2\u6570\u7c7b\u578b\u3001\u8fd4\u56de\u503c\u7b49\uff09\u7ed3\u5408\u4f7f\u7528\uff0c\u63d0\u5347\u89c4\u5219\u7684\u7cbe\u51c6\u5ea6\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u7ed3\u5408\u65b9\u6cd5\u53c2\u6570\u7684\u7c7b\u578b\u6216\u8c03\u7528\u73af\u5883\uff0c\u8fdb\u4e00\u6b65\u7b5b\u9009\u6f5c\u5728\u7684\u98ce\u9669\u70b9\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"4-\u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219",children:"4. \u6a21\u5757\u5316\u7f16\u5199\u89c4\u5219"}),"\n",(0,i.jsx)(n.p,{children:"\u5c06\u590d\u6742\u7684\u5ba1\u8ba1\u4efb\u52a1\u5206\u89e3\u4e3a\u591a\u4e2a\u6a21\u5757\uff0c\u6bcf\u4e2a\u6a21\u5757\u4e13\u6ce8\u4e8e\u7279\u5b9a\u7684\u94fe\u5f0f\u8c03\u7528\u5c42\u7ea7\uff0c\u63d0\u5347\u89c4\u5219\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"5-\u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219",children:"5. \u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u89c4\u5219"}),"\n",(0,i.jsx)(n.p,{children:"\u968f\u7740\u4ee3\u7801\u5e93\u7684\u6f14\u8fdb\uff0c\u5b9a\u671f\u5ba1\u67e5\u548c\u66f4\u65b0\u5ba1\u8ba1\u89c4\u5219\uff0c\u786e\u4fdd\u5176\u59cb\u7ec8\u9002\u7528\u4e8e\u6700\u65b0\u7684\u4ee3\u7801\u7ed3\u6784\u548c\u8c03\u7528\u6a21\u5f0f\uff0c\u4fdd\u6301\u5ba1\u8ba1\u7684\u6709\u6548\u6027\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u5206\u6790\u503c\u7684\u7b5b\u9009\u8fc7\u6ee4"})," \u901a\u8fc7\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"?{...}"})," \u7ed3\u6784\uff0c\u8d4b\u4e88\u4e86 ",(0,i.jsx)(n.strong,{children:"SyntaxFlow"})," \u66f4\u5f3a\u5927\u7684\u6570\u636e\u6d41\u63a7\u5236\u80fd\u529b\u3002\u5b83\u5141\u8bb8\u5ba1\u8ba1\u5458\u6839\u636e\u590d\u6742\u7684\u6761\u4ef6\u8868\u8fbe\u5f0f\uff0c\u7cbe\u51c6\u5730\u7b5b\u9009\u51fa\u9700\u8981\u5173\u6ce8\u7684\u5ba1\u8ba1\u503c\uff0c\u4ece\u800c\u805a\u7126\u4e8e\u6f5c\u5728\u7684\u5b89\u5168\u98ce\u9669\uff0c\u63d0\u5347\u5ba1\u8ba1\u7684\u6548\u7387\u548c\u51c6\u786e\u6027\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7ed3\u5408\u5b9e\u9645\u6848\u4f8b\u7684\u5e94\u7528\uff0c\u672c\u6587\u5c55\u793a\u4e86\u5982\u4f55\u5229\u7528 ",(0,i.jsx)(n.strong,{children:"SyntaxFlow"})," \u7684\u8fc7\u6ee4\u529f\u80fd\uff0c\u53d1\u73b0\u548c\u9632\u8303 XXE \u6f0f\u6d1e\u7b49\u5b89\u5168\u98ce\u9669\u3002\u901a\u8fc7\u638c\u63e1\u8fd9\u4e9b\u9ad8\u7ea7\u529f\u80fd\uff0c\u60a8\u5c06\u80fd\u591f\u66f4\u9ad8\u6548\u5730\u8fdb\u884c\u4ee3\u7801\u5ba1\u8ba1\u548c\u5b89\u5168\u5206\u6790\uff0c\u786e\u4fdd\u4ee3\u7801\u7684\u6574\u4f53\u5b89\u5168\u6027\u4e0e\u7a33\u5b9a\u6027\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},14252:(e,n,s)=>{s.d(n,{A:()=>l});s(96540);var r=s(65195);const i={tableOfContentsInline:"tableOfContentsInline_prmo"};var t=s(74848);function l(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:l}=e;return(0,t.jsx)("div",{className:i.tableOfContentsInline,children:(0,t.jsx)(r.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null})})}},65195:(e,n,s)=>{s.d(n,{A:()=>m});var r=s(96540),i=s(6342);function t(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),s=Array(7).fill(-1);n.forEach(((e,n)=>{const r=s.slice(2,e.level);e.parentIndex=Math.max(...r),s[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:s,...i}=e;s>=0?n[s].children.push(i):r.push(i)})),r}function l(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:s,maxHeadingLevel:r});return function(e){return e.level>=s&&e.level<=r}(e)?[{...e,children:n}]:n}))}function d(e){const n=e.getBoundingClientRect();return n.top===n.bottom?d(e.parentNode):n}function c(e,n){let{anchorTopOffset:s}=n;const r=e.find((e=>d(e).top>=s));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function o(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function a(e){const n=(0,r.useRef)(void 0),s=o();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:i,minHeadingLevel:t,maxHeadingLevel:l}=e;function d(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),d=function(e){let{minHeadingLevel:n,maxHeadingLevel:s}=e;const r=[];for(let i=n;i<=s;i+=1)r.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:t,maxHeadingLevel:l}),o=c(d,{anchorTopOffset:s.current}),a=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,s){s?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===a)}))}return document.addEventListener("scroll",d),document.addEventListener("resize",d),d(),()=>{document.removeEventListener("scroll",d),document.removeEventListener("resize",d)}}),[e,s])}var x=s(28774),h=s(74848);function u(e){let{toc:n,className:s,linkClassName:r,isChild:i}=e;return n.length?(0,h.jsx)("ul",{className:i?void 0:s,children:n.map((e=>(0,h.jsxs)("li",{children:[(0,h.jsx)(x.A,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(u,{isChild:!0,toc:e.children,className:s,linkClassName:r})]},e.id)))}):null}const j=r.memo(u);function m(e){let{toc:n,className:s="table-of-contents table-of-contents__left-border",linkClassName:d="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:x,...u}=e;const m=(0,i.p)(),f=o??m.tableOfContents.minHeadingLevel,v=x??m.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:i}=e;return(0,r.useMemo)((()=>l({toc:t(n),minHeadingLevel:s,maxHeadingLevel:i})),[n,s,i])}({toc:n,minHeadingLevel:f,maxHeadingLevel:v});return a((0,r.useMemo)((()=>{if(d&&c)return{linkClassName:d,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:v}}),[d,c,f,v])),(0,h.jsx)(j,{toc:p,className:s,linkClassName:d,...u})}}}]);