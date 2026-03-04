---
sidebar_position: 1
---

# CLI 总览

这组文档是给命令行用户准备的。

如果你第一次用 Yak 做静态分析，先记住这三条命令：

- `yak ssa-compile`：把项目编译成可查询的 Program
- `yak ssa-query`（或 `yak sf`）：对 Program 跑 SyntaxFlow 查询
- `yak code-scan`：一条命令完成编译 + 扫描 + 报告导出

## 1. 先安装 Yak

推荐安装方式：

```bash
bash <(curl -sS -L http://oss.yaklang.io/install-latest-yak.sh)
```

安装后检查：

```bash
yak version
```

## 2. 使用方式

### 2.1 手动测试和规则编写测试

适合你想明确看到“规则到底匹配了哪里”，典型流程：

1. `yak ssa-compile`
2. `yak ssa-query` / `yak sf`

对应文档：

- [编译与查询](./compile_query)

### 2.2 代码批量扫描和结果获取

适合你想快速出结果、导出报告、挂到 CI 里跑，典型流程：

1. `yak code-scan`
2. 输出 `sarif` / `irify` 报告

对应文档：

- [扫描](./scan)

### 2.3 AI Agent 兼容模式

适合你用 Codex / Claude Code / Cursor 这类支持 skill 的工具，让 Agent 自动编译、自动写规则、自动审计和追踪数据流。

对应文档：

- [Skill（AI Agent 工作）](./skill)

## 3. 你该先看哪篇

- 想先学规则、验证命中：先看 [编译与查询](./compile_query)
- 想直接拿扫描结果：先看 [扫描](./scan)
- 想让 AI Agent 自动完成以上流程：看 [Skill（AI Agent 工作）](./skill)
- 想管理 Program、清理历史数据、复盘 JSON 报告：看 [其他命令](./other_commands)
