"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[3384],{15078:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>x});const l=JSON.parse('{"id":"rule-intro","title":"SyntaxFlow \u89c4\u5219\u6587\u4ef6\u4ecb\u7ecd","description":"\u5728\u4f7f\u7528 SyntaxFlow \u6280\u672f\u8fc7\u7a0b\u4e2d\uff0c\u7406\u89e3\u89c4\u5219\u6587\u4ef6\uff08.sf \u6587\u4ef6\uff09\u7684\u7ed3\u6784\u81f3\u5173\u91cd\u8981\u3002\u8fd9\u4e9b\u6587\u4ef6\u5305\u542b\u7279\u5b9a\u7684\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f\uff0c\u7528\u4e8e\u5b9a\u4e49\u5982\u4f55\u5728\u4ee3\u7801\u4e2d\u641c\u7d22\u7279\u5b9a\u6a21\u5f0f\u548c\u884c\u4e3a\u3002\u672c\u7ae0\u8282\u5c06\u901a\u8fc7\u51e0\u4e2a\u5b9e\u9645\u6848\u4f8b\u6765\u5c55\u793a\u89c4\u5219\u6587\u4ef6\u7684\u7f16\u5199\u65b9\u6cd5\uff0c\u5e76\u89e3\u91ca\u6bcf\u4e2a\u7ec4\u6210\u90e8\u5206\u7684\u529f\u80fd\u548c\u4f5c\u7528\u3002","source":"@site/syntaxflow-guide/rule-intro.mdx","sourceDirName":".","slug":"/rule-intro","permalink":"/en/syntaxflow-guide/rule-intro","draft":false,"unlisted":false,"editUrl":"https://github.com/yaklang/ssa.to/tree/main/syntaxflow-guide/syntaxflow-guide/rule-intro.mdx","tags":[],"version":"current","lastUpdatedBy":"VillanCh","lastUpdatedAt":1731548616000,"frontMatter":{},"sidebar":"syntaxflowGuideSidebar","previous":{"title":"SyntaxFlow \u5feb\u901f\u5165\u95e8\u6307\u5357","permalink":"/en/syntaxflow-guide/quick-start"},"next":{"title":"SytanxFlow \u89c4\u5219\u4ecb\u7ecd","permalink":"/en/syntaxflow-guide/rule-intro"}}');var r=s(74848),i=s(28453),c=s(14252);const d={},t="SyntaxFlow \u89c4\u5219\u6587\u4ef6\u4ecb\u7ecd",o={},x=[{value:"1. \u901a\u7528\u7684\u89c4\u5219\u6587\u4ef6\u67b6\u6784",id:"1-\u901a\u7528\u7684\u89c4\u5219\u6587\u4ef6\u67b6\u6784",level:3},{value:"2. \u89c4\u5219\u6587\u4ef6\u6848\u4f8b\u4e0e\u89e3\u8bfb",id:"2-\u89c4\u5219\u6587\u4ef6\u6848\u4f8b\u4e0e\u89e3\u8bfb",level:3},{value:"<strong>XXE \u6f0f\u6d1e\u68c0\u6d4b\u89c4\u5219 (<code>xxe.sf</code>)</strong>",id:"xxe-\u6f0f\u6d1e\u68c0\u6d4b\u89c4\u5219-xxesf",level:4},{value:"<strong>URL \u8bf7\u6c42\u68c0\u6d4b\u89c4\u5219 (<code>url-open-connection.sf</code>)</strong>",id:"url-\u8bf7\u6c42\u68c0\u6d4b\u89c4\u5219-url-open-connectionsf",level:4},{value:"<strong>\u672c\u5730\u6587\u4ef6\u5199\u5165\u68c0\u6d4b\u89c4\u5219 (<code>local-file-write.sf</code>)</strong>",id:"\u672c\u5730\u6587\u4ef6\u5199\u5165\u68c0\u6d4b\u89c4\u5219-local-file-writesf",level:4},{value:"\u5e38\u7528\u8fd0\u7b97\u7b26\u548c\u8bed\u6cd5",id:"\u5e38\u7528\u8fd0\u7b97\u7b26\u548c\u8bed\u6cd5",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"syntaxflow-\u89c4\u5219\u6587\u4ef6\u4ecb\u7ecd",children:"SyntaxFlow \u89c4\u5219\u6587\u4ef6\u4ecb\u7ecd"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 SyntaxFlow \u6280\u672f\u8fc7\u7a0b\u4e2d\uff0c\u7406\u89e3\u89c4\u5219\u6587\u4ef6\uff08",(0,r.jsx)(n.code,{children:".sf"})," \u6587\u4ef6\uff09\u7684\u7ed3\u6784\u81f3\u5173\u91cd\u8981\u3002\u8fd9\u4e9b\u6587\u4ef6\u5305\u542b\u7279\u5b9a\u7684\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f\uff0c\u7528\u4e8e\u5b9a\u4e49\u5982\u4f55\u5728\u4ee3\u7801\u4e2d\u641c\u7d22\u7279\u5b9a\u6a21\u5f0f\u548c\u884c\u4e3a\u3002\u672c\u7ae0\u8282\u5c06\u901a\u8fc7\u51e0\u4e2a\u5b9e\u9645\u6848\u4f8b\u6765\u5c55\u793a\u89c4\u5219\u6587\u4ef6\u7684\u7f16\u5199\u65b9\u6cd5\uff0c\u5e76\u89e3\u91ca\u6bcf\u4e2a\u7ec4\u6210\u90e8\u5206\u7684\u529f\u80fd\u548c\u4f5c\u7528\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u540e\u9762\u7684\u53d9\u8ff0\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u5c06 SyntaxFlow \u89c4\u5219\u7b80\u79f0\u4e3a ",(0,r.jsx)(n.strong,{children:"SF \u6587\u4ef6"})," \u6216 ",(0,r.jsx)(n.strong,{children:"SF \u89c4\u5219"}),"\u3002"]}),"\n","\n",(0,r.jsx)(c.A,{toc:x}),"\n",(0,r.jsx)(n.h3,{id:"1-\u901a\u7528\u7684\u89c4\u5219\u6587\u4ef6\u67b6\u6784",children:"1. \u901a\u7528\u7684\u89c4\u5219\u6587\u4ef6\u67b6\u6784"}),"\n",(0,r.jsx)(n.p,{children:"SF \u89c4\u5219\u6587\u4ef6\u7684\u7ed3\u6784\u901a\u5e38\u9075\u5faa\u4ee5\u4e0b\u6a21\u5f0f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["\u63cf\u8ff0\u6027\u8bf4\u660e ",(0,r.jsx)(n.code,{children:"desc"})]}),"\uff1a\u63d0\u4f9b\u89c4\u5219\u7684\u6982\u89c8\u548c\u76ee\u7684\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5ba1\u8ba1\u8bed\u53e5"}),"\uff1a\u5b9a\u4e49\u7279\u5b9a\u7684\u4ee3\u7801\u6a21\u5f0f\u6216\u884c\u4e3a\u6765\u6355\u6349\u548c\u5206\u6790\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u8fc7\u6ee4\u5668"}),"\uff1a\u901a\u8fc7\u6761\u4ef6\u8868\u8fbe\u5f0f\u8fc7\u6ee4\u548c\u9009\u62e9\u4ee3\u7801\u7684\u7279\u5b9a\u90e8\u5206\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["\u53d8\u91cf\u547d\u540d ",(0,r.jsx)(n.code,{children:"as"})]}),"\uff1a\u7528\u4e8e\u540e\u7eed\u5f15\u7528\u7684\u7ed3\u679c\u547d\u540d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["\u6761\u4ef6\u68c0\u67e5 ",(0,r.jsx)(n.code,{children:"check"})]}),"\uff1a\u6839\u636e\u5ba1\u8ba1\u8bed\u53e5\u7684\u7ed3\u679c\u6765\u65ad\u8a00\u548c\u8f93\u51fa\u76f8\u5e94\u7684\u4fe1\u606f\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5f53\u7136\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"alert"})," \u6765\u901a\u77e5\u62a5\u544a\u751f\u6210\u5668\u9700\u8981\u91cd\u70b9\u5173\u6ce8\u7684\u6216\u8005\u5b58\u5728\u6f0f\u6d1e\u7684\u53d8\u91cf\u4fe1\u606f\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u867d\u7136 ",(0,r.jsx)(n.code,{children:"desc"})," \u548c ",(0,r.jsx)(n.code,{children:"check"})," \u5e76\u975e\u5fc5\u987b\uff0c\u4f46\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u5728\u7f16\u5199\u89c4\u5219\u65f6\u5305\u542b\u8fd9\u4e24\u4e2a\u8bed\u53e5\uff0c\u4ee5\u4fbf\u8ba9\u89c4\u5219\u7684\u8f93\u51fa\u66f4\u6613\u4e8e\u7406\u89e3\u3002\u5728\u4e0a\u8ff0\u6240\u6709\u7684\u5185\u5bb9\u4e2d\uff0c",(0,r.jsx)(n.strong,{children:"\u5ba1\u8ba1\u8bed\u53e5"})," \u662f\u6700\u6838\u5fc3\u7684\u90e8\u5206\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u7ed3\u6784\u5316\u7684\u65b9\u5f0f\uff0cSyntaxFlow \u89c4\u5219\u6587\u4ef6\u80fd\u591f\u9ad8\u6548\u5730\u6307\u5bfc\u5f00\u53d1\u8005\u8bc6\u522b\u548c\u89e3\u51b3\u4ee3\u7801\u4e2d\u7684\u6f5c\u5728\u95ee\u9898\u3002\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u662f\u6784\u5efa\u9ad8\u6548\u3001\u51c6\u786e\u7684\u9759\u6001\u5206\u6790\u89c4\u5219\u4e0d\u53ef\u6216\u7f3a\u7684\u4e00\u90e8\u5206\u3002\u5728\u64b0\u5199\u89c4\u5219\u65f6\uff0c\u6e05\u6670\u5730\u5b9a\u4e49\u6bcf\u4e2a\u90e8\u5206\u7684\u4f5c\u7528\u548c\u903b\u8f91\u5173\u7cfb\uff0c\u5c06\u6709\u52a9\u4e8e\u63d0\u9ad8\u89c4\u5219\u7684\u53ef\u8bfb\u6027\u548c\u7ef4\u62a4\u6027\u3002"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"2-\u89c4\u5219\u6587\u4ef6\u6848\u4f8b\u4e0e\u89e3\u8bfb",children:"2. \u89c4\u5219\u6587\u4ef6\u6848\u4f8b\u4e0e\u89e3\u8bfb"}),"\n",(0,r.jsx)(n.h4,{id:"xxe-\u6f0f\u6d1e\u68c0\u6d4b\u89c4\u5219-xxesf",children:(0,r.jsxs)(n.strong,{children:["XXE \u6f0f\u6d1e\u68c0\u6d4b\u89c4\u5219 (",(0,r.jsx)(n.code,{children:"xxe.sf"}),")"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'desc("Description": \'checking setFeature/setXIncludeAware/setExpandEntityReferences in DocumentBuilderFactory.newInstance()\')\n\nDocumentBuilderFactory.newInstance()?{!((.setFeature) || (.setXIncludeAware) || (.setExpandEntityReferences))} as $entry;\n$entry.*Builder().parse(* #-> as $source);\n\ncheck $source then "XXE Attack" else "XXE Safe";\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u89e3\u8bfb\uff1a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"desc \u8bed\u53e5"})," \u63cf\u8ff0\u4e86\u89c4\u5219\u7684\u76ee\u7684\uff0c\u5373\u68c0\u67e5\u5728 ",(0,r.jsx)(n.code,{children:"DocumentBuilderFactory.newInstance()"})," \u65b9\u6cd5\u8c03\u7528\u4e2d\uff0c\u662f\u5426\u907f\u514d\u4e86\u8bbe\u7f6e\u67d0\u4e9b\u53ef\u80fd\u5bfc\u81f4 XXE \u6f0f\u6d1e\u7684\u7279\u6027\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5ba1\u8ba1\u8868\u8fbe\u5f0f"})," \u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"?{}"})," \u7ed3\u6784\u7528\u4e8e\u786e\u4fdd\u6ca1\u6709\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"setFeature"}),"\u3001",(0,r.jsx)(n.code,{children:"setXIncludeAware"})," \u6216 ",(0,r.jsx)(n.code,{children:"setExpandEntityReferences"})," \u65b9\u6cd5\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"#->"})," \u8fd0\u7b97\u7b26\u8ffd\u8e2a\u4ece ",(0,r.jsx)(n.code,{children:"parse"})," \u65b9\u6cd5\u4f20\u5165\u7684\u53c2\u6570\u7684\u9876\u7ea7\u5b9a\u4e49\uff0c\u4ee5\u8bc6\u522b\u53ef\u80fd\u7684\u653b\u51fb\u8f7d\u4f53\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"check \u8bed\u53e5"})," \u57fa\u4e8e ",(0,r.jsx)(n.code,{children:"$source"})," \u7684\u5b58\u5728\u4e0e\u5426\u6765\u5224\u5b9a\u662f\u5426\u53ef\u80fd\u5b58\u5728 XXE \u653b\u51fb\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"url-\u8bf7\u6c42\u68c0\u6d4b\u89c4\u5219-url-open-connectionsf",children:(0,r.jsxs)(n.strong,{children:["URL \u8bf7\u6c42\u68c0\u6d4b\u89c4\u5219 (",(0,r.jsx)(n.code,{children:"url-open-connection.sf"}),")"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'URL(* #-> * as $source).openConnection().getResponseMessage() as $sink;\n\ncheck $sink then "Request From URL" else "No Response From URL";\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u89e3\u8bfb\uff1a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6b64\u89c4\u5219\u8ffd\u8e2a ",(0,r.jsx)(n.code,{children:"URL"})," \u5bf9\u8c61\u521b\u5efa\u5230\u53d1\u8d77\u7f51\u7edc\u8bf7\u6c42\u7684\u5b8c\u6574\u6d41\u7a0b\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"$source"})})," \u8868\u793a ",(0,r.jsx)(n.code,{children:"URL"})," \u7684\u6765\u6e90\uff0c\u800c ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"$sink"})})," \u8868\u793a\u4ece\u8be5 ",(0,r.jsx)(n.code,{children:"URL"})," \u83b7\u5f97\u7684\u54cd\u5e94\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.strong,{children:"check \u8bed\u53e5"})," \u6765\u786e\u5b9a\u662f\u5426\u6210\u529f\u4ece ",(0,r.jsx)(n.code,{children:"URL"})," \u83b7\u53d6\u4e86\u54cd\u5e94\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"\u672c\u5730\u6587\u4ef6\u5199\u5165\u68c0\u6d4b\u89c4\u5219-local-file-writesf",children:(0,r.jsxs)(n.strong,{children:["\u672c\u5730\u6587\u4ef6\u5199\u5165\u68c0\u6d4b\u89c4\u5219 (",(0,r.jsx)(n.code,{children:"local-file-write.sf"}),")"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'Files.write(, * #-> as $params) as $sink;\n$params?{.getBytes()} as $source;\n\ncheck $source then "Local Files Writer" else "No Files Written";\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u89e3\u8bfb\uff1a"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6b64\u89c4\u5219\u68c0\u67e5 ",(0,r.jsx)(n.code,{children:"Files.write"})," \u65b9\u6cd5\u7684\u8c03\u7528\uff0c\u5e76\u8ffd\u8e2a\u5199\u5165\u64cd\u4f5c\u4e2d\u4f7f\u7528\u7684\u53c2\u6570\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u901a\u8fc7\u68c0\u67e5\u662f\u5426\u8c03\u7528\u4e86 ",(0,r.jsx)(n.code,{children:"getBytes"})," \u65b9\u6cd5\u6765\u786e\u8ba4\u662f\u5426\u6709\u6570\u636e\u88ab\u5199\u5165\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u8ff0\u793a\u4f8b\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230 SyntaxFlow \u89c4\u5219\u6587\u4ef6\u662f\u5982\u4f55\u6784\u5efa\u7684\uff0c\u4ee5\u53ca\u5982\u4f55\u5229\u7528\u8fd9\u4e9b\u89c4\u5219\u6765\u8fdb\u884c\u4ee3\u7801\u7684\u9759\u6001\u5206\u6790\u548c\u6f0f\u6d1e\u68c0\u6d4b\u3002\u5728\u7f16\u5199\u89c4\u5219\u65f6\uff0c\u91cd\u8981\u7684\u662f\u7406\u89e3\u4ee3\u7801\u7684\u8fd0\u884c\u673a\u5236\u548c\u53ef\u80fd\u7684\u5b89\u5168\u9690\u60a3\uff0c\u7136\u540e\u4f7f\u7528 SyntaxFlow \u63d0\u4f9b\u7684\u8bed\u6cd5\u548c\u5de5\u5177\u6765\u8fdb\u884c\u7ec6\u81f4\u7684\u5206\u6790\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5236\u5b9a\u5b8c\u5584\u7684\u89c4\u5219\u6587\u4ef6\uff0c\u4e0d\u4ec5\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u53d1\u73b0\u4ee3\u7801\u4e2d\u7684\u95ee\u9898\uff0c\u8fd8\u80fd\u63d0\u5347\u6574\u4e2a\u9879\u76ee\u7684\u5b89\u5168\u6027\u548c\u53ef\u9760\u6027\u3002"}),"\n",(0,r.jsx)(n.h1,{id:"\u4e0b\u4e00\u6b65",children:"\u4e0b\u4e00\u6b65"}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u60a8\u5df2\u7ecf\u4e86\u89e3\u4e86 SyntaxFlow \u7684\u57fa\u672c\u4f7f\u7528\u548c\u89c4\u5219\u6587\u4ef6\u7684\u7ed3\u6784\uff0c\u5efa\u8bae\u60a8\u7ee7\u7eed\u63a2\u7d22\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u6df1\u5165\u5b66\u4e60 SyntaxFlow \u7684\u8bed\u6cd5\u548c\u529f\u80fd"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u5c1d\u8bd5\u7f16\u5199\u81ea\u5df1\u7684\u89c4\u5219\u6765\u68c0\u6d4b\u7279\u5b9a\u7684\u5b89\u5168\u6f0f\u6d1e"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u5206\u6790\u66f4\u590d\u6742\u7684\u4ee3\u7801\uff0c\u4ee5\u83b7\u5f97\u66f4\u6df1\u5165\u7684\u5b9e\u8df5\u7ecf\u9a8c"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"\u53c2\u8003 SyntaxFlow \u5b98\u65b9\u6587\u6863\uff0c\u4e86\u89e3\u9ad8\u7ea7\u7528\u6cd5\u548c\u6700\u4f73\u5b9e\u8df5"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4e0d\u65ad\u7684\u5b66\u4e60\u548c\u5b9e\u8df5\uff0c\u60a8\u5c06\u80fd\u591f\u5145\u5206\u5229\u7528 SyntaxFlow \u7684\u5f3a\u5927\u529f\u80fd\uff0c\u63d0\u9ad8\u4ee3\u7801\u5ba1\u8ba1\u548c\u9759\u6001\u5206\u6790\u7684\u6548\u7387\u548c\u51c6\u786e\u6027\u3002"}),"\n",(0,r.jsx)(n.h1,{id:"\u9644\u5f55",children:"\u9644\u5f55"}),"\n",(0,r.jsx)(n.h2,{id:"\u5e38\u7528\u8fd0\u7b97\u7b26\u548c\u8bed\u6cd5",children:"\u5e38\u7528\u8fd0\u7b97\u7b26\u548c\u8bed\u6cd5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"#->"})}),"\uff1a\u8ffd\u8e2a\u53d8\u91cf\u7684\u5b9a\u4e49\uff08Use-Def \u94fe\uff09\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"?{}"})}),"\uff1a\u6761\u4ef6\u8fc7\u6ee4\uff0c\u786e\u4fdd\u6ee1\u8db3\u7279\u5b9a\u7684\u6761\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"as"})}),"\uff1a\u4e3a\u5339\u914d\u7684\u7ed3\u679c\u547d\u540d\uff0c\u4fbf\u4e8e\u540e\u7eed\u5f15\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.yaklang.io/",children:"Yaklang \u5b98\u65b9\u7f51\u7ad9"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.yaklang.io/syntaxflow",children:"SyntaxFlow \u6587\u6863"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},14252:(e,n,s)=>{s.d(n,{A:()=>c});s(96540);var l=s(65195);const r={tableOfContentsInline:"tableOfContentsInline_prmo"};var i=s(74848);function c(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:c}=e;return(0,i.jsx)("div",{className:r.tableOfContentsInline,children:(0,i.jsx)(l.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:c,className:"table-of-contents",linkClassName:null})})}}}]);