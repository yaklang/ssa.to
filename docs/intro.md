---
sidebar_position: 1
title: "文档导读"
sidebar_label: "文档导读"
description: "选择扫描、规则编写、图形界面审计或静态分析原理的阅读路径。"
read_minutes: 3
---

# 文档导读

SSA.to 的文档围绕同一个问题展开：如何从程序的语义结构出发，描述并验证一个安全分析问题。Yak SSA 将源程序编译为统一的中间表示，SyntaxFlow 在其上表达查询、过滤与数据流追踪，IRify 则提供图形化的分析工作环境。

## 选择你的阅读路径

| 你的目标 | 从这里开始 | 接下来阅读 |
| --- | --- | --- |
| 对一个项目执行扫描并导出报告 | [CLI 总览](./cli/overview) | [代码扫描与报告](./cli/scan) |
| 编写规则并检查命中位置 | [SyntaxFlow 快速入门](/syntaxflow-guide/quick-start) | [规则文件结构](/syntaxflow-guide/rule-intro) |
| 在图形界面中追踪分析结果 | [图形界面代码审计](./code_audit) | [图形界面代码扫描](./code_scan) |
| 理解分析引擎的理论基础 | [编译与静态分析](/static-analysis-guide/intro) | [静态单赋值形式](/static-analysis-guide/compile-ssa-form) |

初次使用时，建议先完成一次“编译 → 查询 → 复核”的闭环，再按实际遇到的问题查阅语言参考与原理章节。已有规则可以在[规则库](/#rules)中检索和阅读。

## 从源程序到分析结果

1. **编译。** 将项目编译为 SSA IR，并以 Program 名称保存。后续查询使用同一个 Program。
2. **查询。** 用 SyntaxFlow 定位调用、参数或成员，并沿定义链与使用链追踪值的关系。
3. **复核。** 把结果映射回源码，检查输入来源、路径约束与相关防护逻辑。
4. **记录。** 为需要关注的结果编写 `alert`，或使用扫描命令导出报告。

查询匹配到的是分析模型中的证据。是否构成可利用的漏洞，还需要结合代码上下文与业务条件判断；没有匹配结果也不等于程序不存在风险。

## 三组文档的分工

### 工具与实践

[CLI 指南](./cli/overview)介绍项目编译、规则执行、扫描报告与 Program 管理。[图形界面指南](./code_audit)介绍项目打开、查询结果和数据流图的阅读方式。图形界面中的历史截图用于解释操作流程，界面名称和位置可能随版本变化。

### SyntaxFlow 语言参考

从[快速入门](/syntaxflow-guide/quick-start)进入，再按需查阅搜索、函数调用、变量、过滤、集合运算、数据流、NativeCall 与 SCA。每个专题围绕语法、例子与适用边界组织。

### 静态分析原理

从 SSA、基本块与控制流开始，逐步讨论高级语言结构、闭包、对象、过程间数据流和支配关系。这里区分通用编译理论与 Yak SSA 的具体建模方式，避免把某个实现的选择当作所有 SSA 系统的共同约束。

## 资料与项目

- [SyntaxFlow 示例与规则仓库](https://github.com/yaklang/syntaxflow)
- [由浅入深的练习项目](https://github.com/yaklang/syntaxflow-zero-to-hero)
- [Yaklang 源码](https://github.com/yaklang/yaklang)
- [SyntaxFlow 离线手册](/cookbook)
- [社区与联系方式](./community)

## 使用与授权

SyntaxFlow 技术目前仅供技术交流使用。商业合作与授权二次开发请联系 Yak Project；具体版本的能力与使用条件，以项目说明及实际发行版本为准。

如需企业版咨询，可以通过[社区渠道](./community)联系，或填写[咨询表单](https://feishu-4dogs.feishu.cn/share/base/form/shrcnOEt7X4HQ12OvQOmDCnKocb)。
