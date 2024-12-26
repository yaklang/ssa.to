"use strict";(self.webpackChunkssa_to=self.webpackChunkssa_to||[]).push([[6424],{85465:e=>{e.exports=JSON.parse('{"version":{"pluginId":"static-analysis-guide","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"staticAnalysisGuideSidebar":[{"type":"link","label":"\u7b2c\u4e00\u7ae0\uff1a\u7f16\u8bd1\u4e0e\u9759\u6001\u4ee3\u7801\u5206\u6790\u6982\u8bba","href":"/static-analysis-guide/intro","docId":"intro","unlisted":false},{"type":"link","label":"\u8bae\u9898\uff1a\u7f16\u8bd1\u6280\u672f\u9a71\u52a8\u9759\u6001\u5206\u6790\u9769\u65b0","href":"/static-analysis-guide/topic-compiler-for-static-analysis","docId":"topic-compiler-for-static-analysis","unlisted":false},{"type":"link","label":"\u7b2c\u4e8c\u7ae0\uff1a\u8be6\u89e3\u9759\u6001\u5355\u8d4b\u503c\u5f62\u5f0f","href":"/static-analysis-guide/compile-ssa-form","docId":"compile-ssa-form","unlisted":false},{"type":"link","label":"\u7b2c\u4e09\u7ae0\uff1a\u9ad8\u7ea7\u8bed\u8a00\u7684 SSA \u6784\u5efa\uff08\u4e00\uff09","href":"/static-analysis-guide/ssa-for-advanced-language","docId":"ssa-for-advanced-language","unlisted":false},{"type":"link","label":"\u7b2c\u4e09\u7ae0\uff1a\u9ad8\u7ea7\u8bed\u8a00\u7684 SSA \u6784\u5efa\uff08\u4e8c\uff09","href":"/static-analysis-guide/ssa-for-advanced-language-2","docId":"ssa-for-advanced-language-2","unlisted":false},{"type":"link","label":"\u7b2c\u56db\u7ae0\uff1aSSA \u6df1\u6c34\u533a - \u5206\u6790\u95ed\u5305\u51fd\u6570","href":"/static-analysis-guide/deep-dive-into-ssa-closure","docId":"deep-dive-into-ssa-closure","unlisted":false},{"type":"link","label":"\u7b2c\u4e94\u7ae0\uff1aSSA \u4e2d\u7684 OOP \u5b9e\u73b0\uff1a\u65e0\u7c7b\u7cfb\u7edf\u4e0e\u539f\u578b\u59d4\u6258","href":"/static-analysis-guide/deep-dive-into-ssa-oop","docId":"deep-dive-into-ssa-oop","unlisted":false},{"type":"link","label":"\u7b2c\u516d\u7ae0\uff1aSSA \u6570\u636e\u6d41\u4e0e\u8de8\u8fc7\u7a0b\u5206\u6790","href":"/static-analysis-guide/deep-dive-into-ssa-dataflow-and-cross-procedure","docId":"deep-dive-into-ssa-dataflow-and-cross-procedure","unlisted":false},{"type":"link","label":"\u7b2c\u516b\u7ae0\uff1a\u63a7\u5236\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb\u4e0e SSA Phi \u6307\u4ee4","href":"/static-analysis-guide/deep-dive-cfg","docId":"deep-dive-cfg","unlisted":false}]},"docs":{"compile-ssa-form":{"id":"compile-ssa-form","title":"\u7b2c\u4e8c\u7ae0\uff1a\u8be6\u89e3\u9759\u6001\u5355\u8d4b\u503c\u5f62\u5f0f","description":"\u6211\u4eec\u5728\u524d\u9762\u7ae0\u8282\u5df2\u7ecf\u8ba8\u8bba\u4e86 SSA \u5f62\u5f0f\u5728\u7f16\u8bd1\u5668\u6280\u672f\u4e2d\u7684\u91cd\u8981\u6027\uff0c\u4ee5\u53ca SSA \u5f62\u5f0f\u5728\u73b0\u4ee3\u7f16\u8bd1\u5668\u6280\u672f\u4e2d\u7684\u5e94\u7528\u3002","sidebar":"staticAnalysisGuideSidebar"},"deep-dive-cfg":{"id":"deep-dive-cfg","title":"\u7b2c\u516b\u7ae0\uff1a\u63a7\u5236\u6d41\u4e2d\u7684\u652f\u914d\u5173\u7cfb\u4e0e SSA Phi \u6307\u4ee4","description":"\u672c\u7ae0\u662f\u4e00\u4e2a\u672a\u5b8c\u6210\u7684\u7ae0\u8282\uff0c\u5c06\u4f1a\u57fa\u672c\u4ecb\u7ecd\u63a7\u5236\u6d41\u548c\u652f\u914d\u7684\u5173\u7cfb\uff0c\u5e76\u4e14\u4f1a\u4ecb\u7ecd SSA \u7684 Phi \u8282\u70b9\u95ee\u9898\u3002","sidebar":"staticAnalysisGuideSidebar"},"deep-dive-into-ssa-closure":{"id":"deep-dive-into-ssa-closure","title":"\u7b2c\u56db\u7ae0\uff1aSSA \u6df1\u6c34\u533a - \u5206\u6790\u95ed\u5305\u51fd\u6570","description":"\u867d\u7136\u6709\u4e00\u4e9b\u8bed\u8a00\u5bf9\u95ed\u5305\u7684\u652f\u6301\u5e76\u4e0d\u597d\uff0c\u4f46\u662f\u4f5c\u4e3a \u201c\u901a\u7528\u9759\u6001\u201d \u7f16\u8bd1\u6280\u672f\uff0c\u95ed\u5305\u51fd\u6570\u662f\u65e0\u8bba\u5982\u4f55\u90fd\u7ed5\u4e0d\u8fc7\u53bb\u7684\u4e00\u4e2a\u8bdd\u9898\u3002\u5728\u66f4\u8d34\u8fd1\u7528\u6237\u7684\u9ad8\u7ea7\u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u95ed\u5305\u548c\u4f7f\u7528\u548c\u6df1\u5165\u4e86\u89e3\u5728\u7f16\u7a0b\u4e2d\u7684\u610f\u4e49\u5de8\u5927\uff08\u867d\u7136\u5b83\u672c\u8eab\u5bf9\u7f16\u8bd1\u5668\u6765\u8bf4\u975e\u5e38\u4e0d\u53cb\u597d\uff0c\u4f1a\u6781\u5927\u589e\u52a0\u7f16\u8bd1\u5668\u7684\u8bbe\u8ba1\u590d\u6742\u5ea6\uff09","sidebar":"staticAnalysisGuideSidebar"},"deep-dive-into-ssa-dataflow-and-cross-procedure":{"id":"deep-dive-into-ssa-dataflow-and-cross-procedure","title":"\u7b2c\u516d\u7ae0\uff1aSSA \u6570\u636e\u6d41\u4e0e\u8de8\u8fc7\u7a0b\u5206\u6790","description":"\u5728\u5bf9\u95ed\u5305\u548c OOP \u7684\u8ba8\u8bba\u7ed3\u675f\u540e\uff0c\u6211\u4eec\u57fa\u672c\u53ef\u4ee5\u77e5\u9053\u73b0\u4ee3\u7f16\u7a0b\u8bed\u8a00\u7684\u5927\u90e8\u5206\u8bed\u6cd5\u548c\u7279\u6027\u90fd\u662f\u53ef\u4ee5\u7528 SSA \u6765\u8868\u793a\u7684\u3002\u524d\u9762\u7684\u6240\u6709\u5185\u5bb9\u5171\u540c\u6784\u6210\u4e86\u6211\u4eec\u540e\u7eed\u8ba8\u8bba\u7684\u57fa\u7840\u3002","sidebar":"staticAnalysisGuideSidebar"},"deep-dive-into-ssa-oop":{"id":"deep-dive-into-ssa-oop","title":"\u7b2c\u4e94\u7ae0\uff1aSSA \u4e2d\u7684 OOP \u5b9e\u73b0\uff1a\u65e0\u7c7b\u7cfb\u7edf\u4e0e\u539f\u578b\u59d4\u6258","description":"\u95ed\u5305\u8bdd\u9898\u6211\u4eec\u5728\u524d\u9762\u8fdb\u884c\u4e86\u975e\u5e38\u6df1\u5165\u7684\u8ba8\u8bba\uff0c\u5728\u8fd9\u4e00\u7ae0\uff0c\u672c\u7ae0\u5c06\u63a2\u8ba8\u5982\u4f55\u5728 SSA \u6846\u67b6\u4e0b\uff0c\u901a\u8fc7\u65e0\u7c7b\u7cfb\u7edf\u548c\u539f\u578b\u59d4\u6258\u6765\u5efa\u6a21 OOP \u7684\u6838\u5fc3\u6982\u5ff5\uff0c\u5e76\u6700\u7ec8\u5b9e\u73b0 OOP \u4ee3\u7801\u7684\u7f16\u8bd1\u548c\u9759\u6001\u5206\u6790\u3002","sidebar":"staticAnalysisGuideSidebar"},"intro":{"id":"intro","title":"\u7b2c\u4e00\u7ae0\uff1a\u7f16\u8bd1\u4e0e\u9759\u6001\u4ee3\u7801\u5206\u6790\u6982\u8bba","description":"\u5728\u6211\u4eec\u81f4\u529b\u4e8e\u6253\u9020\u4e00\u4e2a\u201c\u6709\u4eba\u7528\u201d\u7684\u7f16\u7a0b\u8bed\u8a00\u548c\u7f16\u8bd1\u5668\u6280\u672f\u4f53\u7cfb\u7684\u8fc7\u7a0b\u4e2d\uff0c\u968f\u7740\u9010\u6b65\u8fdb\u5165\u201c\u7f16\u8bd1\u4e0e\u9759\u6001\u5206\u6790\u201d\u7684\u6df1\u6c34\u533a\uff0c\u53d1\u73b0\u4e86\u5f88\u591a\u7f3a\u4e4f\u5b9e\u8df5\u5bfc\u81f4\u7406\u8bba\u50f5\u5316\u7684\u95ee\u9898\u3002\u867d\u7136\u6211\u4eec\u4f7f\u7528\u201c\u4ee3\u7801\u548c\u9879\u76ee\u201d\u53bb\u586b\u8865\u4e86\u5f88\u591a\u7f16\u8bd1\u4e0e\u5206\u6790\u6df1\u6c34\u533a\u7684\u7a7a\u767d\uff0c\u4f46\u662f\u6211\u4eec\u4ecd\u7136\u5e0c\u671b\u8fd9\u4e9b\u50f5\u5316\u7684\u7406\u8bba\u53ef\u4ee5\u83b7\u5f97\u66f4\u65b0\uff0c\u8ba9\u73b0\u4ee3\u5316\u7684\u9759\u6001\u4ee3\u7801\u5206\u6790\u91cd\u65b0\u83b7\u5f97\u751f\u547d\u529b\u3002","sidebar":"staticAnalysisGuideSidebar"},"ssa-for-advanced-language":{"id":"ssa-for-advanced-language","title":"\u7b2c\u4e09\u7ae0\uff1a\u9ad8\u7ea7\u8bed\u8a00\u7684 SSA \u6784\u5efa\uff08\u4e00\uff09","description":"---","sidebar":"staticAnalysisGuideSidebar"},"ssa-for-advanced-language-2":{"id":"ssa-for-advanced-language-2","title":"\u7b2c\u4e09\u7ae0\uff1a\u9ad8\u7ea7\u8bed\u8a00\u7684 SSA \u6784\u5efa\uff08\u4e8c\uff09","description":"\u5728\u300a\u7b2c\u4e09\u7ae0\uff1a\u9ad8\u7ea7\u8bed\u8a00\u7684 SSA \u6784\u5efa\uff08\u4e00\uff09\u300b\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86 SSA \u7684\u57fa\u672c\u6982\u5ff5\u548c\u57fa\u672c\u7f16\u8bd1\u6280\u672f\uff0c\u5e76\u4e14\u8be6\u7ec6\u5206\u6790\u548c\u8ba8\u8bba\u4e86\u5206\u652f\u7684 SSA \u6784\u5efa\uff0c\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4f1a\u7ee7\u7eed\u672a\u7adf\u7684\u8bdd\u9898\uff0c\u8ba8\u8bba\u5faa\u73af\u7684 SSA \u6784\u5efa\u548c\u51fd\u6570\u6784\u5efa\u3002","sidebar":"staticAnalysisGuideSidebar"},"topic-compiler-for-static-analysis":{"id":"topic-compiler-for-static-analysis","title":"\u8bae\u9898\uff1a\u7f16\u8bd1\u6280\u672f\u9a71\u52a8\u9759\u6001\u5206\u6790\u9769\u65b0","description":"\u672c\u8bae\u9898\u63a2\u8ba8\u7f16\u8bd1\u6280\u672f\u9a71\u52a8\u7684\u9759\u6001\u4ee3\u7801\u5206\u6790\u9769\u65b0\u3002\u805a\u7126\u4e8e\u4e24\u65b9\u9762\uff1a\u4e00\u662f SSA\uff08\u9759\u6001\u5355\u8d4b\u503c\u5f62\u5f0f\uff09\u5982\u4f55\u901a\u8fc7\u7cbe\u786e\u7684 Use-Def \u94fe\u548c Phi \u6307\u4ee4\uff0c\u4e3a\u9759\u6001\u5206\u6790\u63d0\u4f9b\u66f4\u575a\u5b9e\u7684\u7406\u8bba\u57fa\u7840\uff0c\u5e76\u5e94\u5bf9\u95ed\u5305\u5e26\u6765\u7684\u8de8\u8fc7\u7a0b\u5206\u6790\u6311\u6218\uff1b\u4e8c\u662f\u63a2\u8ba8\u5982\u4f55\u5c06\u4ee3\u7801\u8868\u793a\u6301\u4e45\u5316\u5230\u6570\u636e\u5e93\u4e2d\uff0c\u5229\u7528 DSL\uff08\u9886\u57df\u7279\u5b9a\u8bed\u8a00\uff09\u5b9e\u73b0\u9ad8\u6548\u67e5\u8be2\u548c\u5206\u6790\uff0c\u4ece\u800c\u6784\u5efa\u57fa\u4e8e\u6570\u636e\u5e93\u7684\u65b0\u5206\u6790\u8303\u5f0f\u3002\u8bae\u9898\u65e8\u5728\u5f3a\u8c03\uff0c\u9759\u6001\u4ee3\u7801\u5206\u6790\u7684\u8fdb\u6b65\u79bb\u4e0d\u5f00\u5e95\u5c42\u7f16\u8bd1\u6280\u672f\u7684\u652f\u6491\uff0c\u5e76\u5c06\u7406\u8bba\u521b\u65b0\u4e0e\u5b9e\u9645\u5e94\u7528\u7d27\u5bc6\u7ed3\u5408\u3002","sidebar":"staticAnalysisGuideSidebar"}}}}')}}]);