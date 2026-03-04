---
sidebar_position: 4
---

# Skill（AI Agent 工作）

这个页面专门讲：怎么把 Yak 的 SSA/SyntaxFlow 能力接进 AI Agent，让 Agent 自动做代码扫描与审计。

参考仓库：

- https://github.com/yaklang/irify-sast-skill

## 1. 先决条件

1. 机器上可直接执行 `yak`（`yak version` 能看到版本）
2. Agent 支持 Skill/MCP（如 Codex、Claude Code、Cursor）

## 2. 安装 Skill

### 2.1 通过 `npx skills` 安装（推荐）

```bash
npx skills add yaklang/irify-sast-skill
```

### 2.2 手动安装

把 `irify-sast-skill` 仓库里的 `skills/irify-sast/SKILL.md` 放到对应目录：

- Claude Code：`.claude/skills/irify-sast/`
- Codex：`.agents/skills/irify-sast/`
- Cursor：`.agents/skills/irify-sast/`

## 3. 配置 MCP（关键步骤）

Skill 本身会调用 SSA MCP 服务，所以要先配置：

```bash
yak mcp -t ssa
```

### 3.1 Codex 配置示例（`~/.codex/config.toml`）

```toml
[mcp_servers.yaklang-ssa]
command = "yak"
args = ["mcp", "-t", "ssa"]
```

### 3.2 Claude Code / Cursor 配置示例

```json
{ "command": "yak", "args": ["mcp", "-t", "ssa"] }
```

## 4. Agent 工作流（建议直接照这个走）

### 4.1 第一步：编译项目

让 Agent 先执行 `ssa_compile`，并固定 `program_name`（便于缓存与增量编译）。

### 4.2 第二步：执行 `ssa_query`

让 Agent 用 SyntaxFlow 规则进行查询，不要先用 grep 在源码里盲找“候选点”。

### 4.3 第三步：阅读命中上下文

命中后，再让 Agent 读取命中行附近代码，判断是否真实风险。

### 4.4 代码变更后：增量编译

优先用 `base_program_name` 做增量编译，只重编译变更部分。

## 5. 给 Agent 的常用任务指令

你可以直接用下面这类任务描述。

### 5.1 手动规则验证

```text
请先编译这个 Java 项目，然后执行 lesson-1.sf，告诉我 source/sink 命中行号。
```

### 5.2 漏洞检测

```text
请检查这个项目是否存在命令执行和 SQL 注入，输出每个风险的文件、行号和触发规则。
```

### 5.3 回归审计

```text
这个分支刚改完，请基于已有 program 做增量编译，然后只看新增风险。
```

## 6. 常见问题

### 6.1 Agent 找不到 `yak`

先确认本机终端能运行：

```bash
yak version
```

再确认 Agent 运行环境和你当前 shell 的 PATH 一致。

### 6.2 Skill 装了但不会调用 SSA 工具

优先检查 MCP 配置是否生效，尤其是 `yak mcp -t ssa` 的 command/args 是否完全一致。

### 6.3 扫描太慢

优先做三件事：

- 先小范围规则验证，再全量
- 使用增量编译（`base_program_name`）
- 扫描时启用 `--memory`（如果不需要保留中间数据）
