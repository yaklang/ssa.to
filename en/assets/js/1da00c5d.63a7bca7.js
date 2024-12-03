"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[2547],{30722:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"deep-dive-into-ssa-oop","title":"\u7b2c\u4e94\u7ae0\uff1aSSA \u6df1\u6c34\u533a - OOP\u4e0e\u65e0\u7c7b","description":"\u95ed\u5305\u8bdd\u9898\u6211\u4eec\u5728\u524d\u9762\u8fdb\u884c\u4e86\u975e\u5e38\u6df1\u5165\u7684\u8ba8\u8bba\uff0c\u5728\u8fd9\u4e00\u7ae0\uff0c\u6211\u4eec\u9700\u8981\u91cd\u70b9\u8ba8\u8bba OOP \u7684 SSA \u5f62\u6001\u3002","source":"@site/static-analysis-guide/deep-dive-into-ssa-oop.mdx","sourceDirName":".","slug":"/deep-dive-into-ssa-oop","permalink":"/en/static-analysis-guide/deep-dive-into-ssa-oop","draft":false,"unlisted":false,"editUrl":"https://github.com/yaklang/ssa.to/tree/main/static-analysis-guide/static-analysis-guide/deep-dive-into-ssa-oop.mdx","tags":[],"version":"current","lastUpdatedBy":"v1ll4n","lastUpdatedAt":1733220219000,"frontMatter":{},"sidebar":"staticAnalysisGuideSidebar","previous":{"title":"\u7b2c\u56db\u7ae0\uff1aSSA \u6df1\u6c34\u533a - \u5206\u6790\u95ed\u5305\u51fd\u6570","permalink":"/en/static-analysis-guide/deep-dive-into-ssa-closure"},"next":{"title":"\u7b2c\u516d\u7ae0\uff1aSSA \u6df1\u6c34\u533a - \u6570\u636e\u6d41\u5206\u6790","permalink":"/en/static-analysis-guide/deep-dive-into-ssa-use-def-chain"}}');var t=s(74848),r=s(28453),l=s(14252),a=s(97015);const o={},d="\u7b2c\u4e94\u7ae0\uff1aSSA \u6df1\u6c34\u533a - OOP\u4e0e\u65e0\u7c7b",c={},p=[{value:"\u65e0\u7c7b\u7cfb\u7edf",id:"\u65e0\u7c7b\u7cfb\u7edf",level:2},{value:"\u65e0\u7c7b\u7cfb\u7edf\u6982\u5ff5",id:"\u65e0\u7c7b\u7cfb\u7edf\u6982\u5ff5",level:3},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u65e0\u7c7b\u7cfb\u7edf",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u65e0\u7c7b\u7cfb\u7edf",level:3},{value:"\u65e0\u7c7b\u7cfb\u7edf\u7684\u5f62\u5f0f\u5316\u8868\u8fbe",id:"\u65e0\u7c7b\u7cfb\u7edf\u7684\u5f62\u5f0f\u5316\u8868\u8fbe",level:3}];function x(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u7b2c\u4e94\u7ae0ssa-\u6df1\u6c34\u533a---oop\u4e0e\u65e0\u7c7b",children:"\u7b2c\u4e94\u7ae0\uff1aSSA \u6df1\u6c34\u533a - OOP\u4e0e\u65e0\u7c7b"})}),"\n",(0,t.jsx)(n.p,{children:"\u95ed\u5305\u8bdd\u9898\u6211\u4eec\u5728\u524d\u9762\u8fdb\u884c\u4e86\u975e\u5e38\u6df1\u5165\u7684\u8ba8\u8bba\uff0c\u5728\u8fd9\u4e00\u7ae0\uff0c\u6211\u4eec\u9700\u8981\u91cd\u70b9\u8ba8\u8bba OOP \u7684 SSA \u5f62\u6001\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u8bdd\u9898\u975e\u5e38\u9700\u8981\u4f9d\u8d56\u8bfb\u8005\u5bf9\u95ed\u5305\u7684\u7406\u89e3\uff0c\u6211\u4eec\u5728\u65e0\u7c7b\uff08Classless\uff09\u7cfb\u7edf\u6784\u5efa\u7684\u65f6\u5019\uff0c\u9700\u8981\u7528\u5230\u95ed\u5305\u7684\u5404\u79cd\u6982\u5ff5\u6765\u8f85\u52a9\u7406\u89e3\u4fee\u6539\u81ea\u8eab\u6210\u5458\u548c\u4e0d\u540c\u5bb9\u5668\u7684\u503c\u3002"}),"\n","\n",(0,t.jsx)(l.A,{toc:p}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\u65e0\u7c7b\u7cfb\u7edf",children:"\u65e0\u7c7b\u7cfb\u7edf"}),"\n",(0,t.jsx)(n.h3,{id:"\u65e0\u7c7b\u7cfb\u7edf\u6982\u5ff5",children:"\u65e0\u7c7b\u7cfb\u7edf\u6982\u5ff5"}),"\n",(0,t.jsx)(n.p,{children:"\u65e0\u7c7b\u7cfb\u7edf\uff08Classless System\uff09\u662f\u4e00\u79cd\u4e0d\u4f9d\u8d56\u4f20\u7edf\u7c7b\uff08Class\uff09\u6982\u5ff5\u7684\u5bf9\u8c61\u7cfb\u7edf\uff0c\u5b83\u901a\u8fc7\u7ec4\u5408\u539f\u8bed\u64cd\u4f5c\uff08\u5982\u95ed\u5305\u3001\u59d4\u6258\u3001\u539f\u578b\uff09\u6765\u5b9e\u73b0\u5bf9\u8c61\u884c\u4e3a\u548c\u72b6\u6001\u7ba1\u7406\u3002\u5728\u8fd9\u79cd\u7cfb\u7edf\u4e2d\uff0c\u5bf9\u8c61\u662f\u7531\u4e00\u7ec4\u5c5e\u6027\u548c\u884c\u4e3a\u76f4\u63a5\u7ec4\u5408\u800c\u6210\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u7c7b\u7684\u5b9e\u4f8b\u5316\u6765\u521b\u5efa\u3002"}),"\n",(0,t.jsx)(n.admonition,{title:"\u6838\u5fc3\u7279\u5f81",type:"tip",children:(0,t.jsx)(n.p,{children:"\u65e0\u7c7b\u7cfb\u7edf\u7684\u6838\u5fc3\u5728\u4e8e\uff1a\u5b83\u5c06\u5bf9\u8c61\u89c6\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684\u5b9e\u4f53\uff0c\u800c\u4e0d\u662f\u67d0\u4e2a\u7c7b\u7684\u5b9e\u4f8b\u3002\u8fd9\u79cd\u8bbe\u8ba1\u601d\u60f3\u4e0e SSA \u7684\u7406\u5ff5\u9ad8\u5ea6\u5951\u5408\uff0c\u56e0\u4e3a\u5b83\u4eec\u90fd\u81f4\u529b\u4e8e\u7b80\u5316\u548c\u660e\u786e\u5316\u6570\u636e\u6d41\u52a8\u3002"})}),"\n",(0,t.jsxs)(n.admonition,{title:"\u5f15\u7528\u8d44\u6599",type:"note",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u6838\u5fc3\u4e66\u7c4d"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u300aPrototype-based Programming: Concepts, Languages, and Applications\u300b"})," (1999)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f5c\u8005\uff1aJames Noble, Antero Taivalsaari, Ivan Moore"}),"\n",(0,t.jsx)(n.li,{children:"\u51fa\u7248\u793e\uff1aSpringer"}),"\n",(0,t.jsx)(n.li,{children:"\u8fd9\u662f\u4e00\u672c\u4e13\u95e8\u8ba8\u8bba\u539f\u578b\u7f16\u7a0b\u7684\u91cd\u8981\u8457\u4f5c\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u65e0\u7c7b\u7cfb\u7edf\u7684\u6982\u5ff5\u3001\u8bed\u8a00\u5b9e\u73b0\u548c\u5e94\u7528\u6848\u4f8b\u3002"}),"\n"]}),"\n"]}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u91cd\u8981\u8bba\u6587\u548c\u7814\u7a76"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u300aSelf: The Power of Simplicity\u300b"})," (1987)"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f5c\u8005\uff1aDavid Ungar, Randall B. Smith"}),"\n",(0,t.jsx)(n.li,{children:"\u53d1\u8868\u4e8e\uff1aOOPSLA '87"}),"\n",(0,t.jsx)(n.li,{children:"\u8fd9\u7bc7\u8bba\u6587\u4ecb\u7ecd\u4e86 Self \u8bed\u8a00\uff0c\u8fd9\u662f\u6700\u65e9\u7684\u539f\u578b\u7f16\u7a0b\u8bed\u8a00\u4e4b\u4e00\uff0c\u5bf9\u540e\u7eed\u7684\u65e0\u7c7b\u7cfb\u7edf\u7814\u7a76\u4ea7\u751f\u4e86\u6df1\u8fdc\u5f71\u54cd\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u300aPrototypes with Multiple Dispatch: An Expressive and Dynamic Object Model\u300b"})," (2005)"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f5c\u8005\uff1aCraig Chambers"}),"\n",(0,t.jsx)(n.li,{children:"\u8fd9\u7bc7\u8bba\u6587\u63a2\u8ba8\u4e86\u5728\u65e0\u7c7b\u7cfb\u7edf\u4e2d\u4f7f\u7528\u591a\u91cd\u5206\u6d3e\u7684\u53ef\u80fd\u6027\u3002"}),"\n"]}),"\n"]}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7406\u8bba\u57fa\u7840"})}),(0,t.jsx)(n.p,{children:"\u65e0\u7c7b\u7cfb\u7edf\u7684\u7406\u8bba\u57fa\u7840\u4e3b\u8981\u5efa\u7acb\u5728\u4ee5\u4e0b\u51e0\u4e2a\u6982\u5ff5\u4e4b\u4e0a\uff1a"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u539f\u578b\u59d4\u6258\uff08Prototype Delegation\uff09"}),"\n\u53ef\u4ee5\u7528\u4ee5\u4e0b\u6570\u5b66\u8868\u8fbe\u5f0f\u6765\u8868\u793a\uff1a"]}),"\n"]}),(0,t.jsx)(a.OO,{math:"O_1 \\rightarrow O_2 \\rightarrow O_3 \\rightarrow \\text{null}"}),(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c",(0,t.jsx)(a.GP,{math:"O_1"})," \u59d4\u6258\u7ed9 ",(0,t.jsx)(a.GP,{math:"O_2"}),"\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"]}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5bf9\u8c61\u7ec4\u5408\uff08Object Composition\uff09"}),"\n\u8868\u793a\u4e3a\uff1a"]}),"\n"]}),(0,t.jsx)(a.OO,{math:"O = \\{p_1, p_2, ..., p_n\\} \\cup \\{m_1, m_2, ..., m_k\\}"}),(0,t.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c",(0,t.jsx)(a.GP,{math:"p_i"})," \u662f\u5c5e\u6027\uff0c",(0,t.jsx)(a.GP,{math:"m_j"})," \u662f\u65b9\u6cd5\u3002"]})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u65e0\u7c7b\u7cfb\u7edf",children:"\u4e3a\u4ec0\u4e48\u9700\u8981\u65e0\u7c7b\u7cfb\u7edf"}),"\n",(0,t.jsx)(n.h3,{id:"\u65e0\u7c7b\u7cfb\u7edf\u7684\u5f62\u5f0f\u5316\u8868\u8fbe",children:"\u65e0\u7c7b\u7cfb\u7edf\u7684\u5f62\u5f0f\u5316\u8868\u8fbe"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},97015:(e,n,s)=>{s.d(n,{Ay:()=>c,GP:()=>p,OO:()=>x});var i=s(96540),t=s(22130),r=s(20354),l=s.n(r),a=s(74848);const o={throwOnError:!1,strict:!1,trust:!1,macros:{"\\RR":"\\mathbb{R}","\\NN":"\\mathbb{N}","\\ZZ":"\\mathbb{Z}"}},d=e=>{let{math:n,inline:s=!1,onError:r,options:d={},className:c=""}=e;const p=(0,i.useRef)(null),[x,h]=(0,i.useState)(!1),[u,j]=(0,i.useState)(!1),[m,g]=(0,i.useState)(!1),[f,b]=(0,i.useState)(!1),[y,v]=(0,i.useState)({message:"",visible:!1});(0,i.useEffect)((()=>{if(p.current)try{t.default.render(n,p.current,{...o,...d,displayMode:!s})}catch(e){r?r(e):(console.error("KaTeX Error:",e),p.current&&(p.current.textContent=n))}}),[n,s,d,r]);const S=e=>{v({message:e,visible:!0}),setTimeout((()=>{v({message:"",visible:!1})}),2e3)};return(0,a.jsxs)("div",{className:"katex-wrapper "+(x?"hovered":""),onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),style:{position:"relative",padding:"8px",border:x?"2px solid #4a90e2":"1px solid transparent",borderRadius:"4px",display:s?"inline-block":"block",transition:"all 0.3s ease",boxShadow:x?"0 0 8px rgba(74, 144, 226, 0.3)":"none"},children:[y.visible&&(0,a.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0, 0, 0, 0.7)",color:"#fff",padding:"8px 16px",borderRadius:"4px",fontSize:"14px",zIndex:1e3,pointerEvents:"none"},children:y.message}),x&&(0,a.jsxs)("div",{style:{position:"absolute",top:"4px",right:"4px",display:"flex",gap:"8px",zIndex:1},children:[(0,a.jsx)("button",{onClick:async()=>{p.current&&(b(!0),setTimeout((async()=>{try{const e=document.createElement("div");e.style.padding="12px 0";const n=p.current?.cloneNode(!0);if(!n)throw new Error("\u65e0\u6cd5\u514b\u9686\u8282\u70b9");e.appendChild(n),document.body.appendChild(e);const s=await l()(e,{backgroundColor:null,scale:2});document.body.removeChild(e),s.toBlob((async e=>{if(e)try{await navigator.clipboard.write([new ClipboardItem({"image/png":e})]),g(!0),S("\u56fe\u7247\u5df2\u590d\u5236\u5230\u526a\u8d34\u677f"),setTimeout((()=>{g(!1)}),2e3)}catch(n){console.error("\u590d\u5236\u56fe\u7247\u5931\u8d25:",n),S("\u590d\u5236\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}}),"image/png")}catch(e){console.error("\u751f\u6210\u56fe\u7247\u5931\u8d25:",e),S("\u751f\u6210\u56fe\u7247\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5")}finally{b(!1)}}),500))},disabled:f,style:{padding:"4px 12px",background:m?"#52c41a":f?"#d9d9d9":"#f5f5f5",border:"1px solid "+(m?"#52c41a":f?"#d9d9d9":"#e0e0e0"),borderRadius:"4px",cursor:f?"not-allowed":"pointer",fontSize:"12px",color:m?"#fff":f?"#999":"#666",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"4px",opacity:f?.7:1},children:m?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{style:{fontSize:"14px"},children:"\u2713"}),"\u5df2\u590d\u5236\u56fe\u7247"]}):f?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{style:{display:"inline-block",animation:"spin 1s linear infinite"},children:"\u27f3"}),"\u5bfc\u51fa\u4e2d..."]}):"\u590d\u5236\u4e3a\u56fe\u7247"}),(0,a.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(n),j(!0),setTimeout((()=>{j(!1)}),2e3)},style:{padding:"4px 12px",background:u?"#52c41a":"#f5f5f5",border:"1px solid "+(u?"#52c41a":"#e0e0e0"),borderRadius:"4px",cursor:"pointer",fontSize:"12px",color:u?"#fff":"#666",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"4px"},children:u?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{style:{fontSize:"14px"},children:"\u2713"}),"\u5df2\u590d\u5236"]}):"\u590d\u5236"})]}),(0,a.jsx)("div",{ref:p,className:`katex-container ${s?"inline":"block"} ${c}`})]})},c=d,p=e=>(0,a.jsx)(d,{...e,inline:!0}),x=e=>(0,a.jsx)(d,{...e,inline:!1})}}]);