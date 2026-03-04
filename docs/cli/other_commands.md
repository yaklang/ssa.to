---
sidebar_position: 5
---

# 其他命令

这个页面先讲 3 个高频辅助命令：

- `yak ssa-program`
- `yak ssa-remove`
- `yak ssa-risk`

它们主要解决的是“编译和扫描之后”的管理问题：Program 管理、历史清理、结果复盘。

> 实测说明（2026-03-04）：本页命令和输出示例已在 `syntaxflow-zero-to-hero` 项目实测。

## 1. `yak ssa-program`

### 1.1 解决什么问题

- 我刚 `ssa-compile` 完，不确定 Program 有没有真的写进数据库
- 数据库里 Program 很多，不知道名字该怎么填给 `ssa-query -p` 或 `code-scan -p`
- 想用正则快速筛选 Program

### 1.2 怎么使用

查看全部 Program：

```bash
yak ssa-program
```

按名称/正则筛选：

```bash
yak ssa-program lesson1
yak ssa-program "lesson.*"
```

输出示例：

```text
All Programs in database:
Program match: .*
  [  java]: lesson1
  [  java]: lesson1-inline
  [  java]: lesson-1-hello-world(2026-03-04 14:55:18)
```

### 1.3 参数说明

- `--database <path>`：指定 SSA 数据库
- 位置参数：Program 名称或正则表达式（可多个）

### 1.4 和前面命令怎么联动

- 在 `ssa-compile` 之后，用它确认 Program 是否成功生成
- 在 `ssa-query` 之前，用它确认 `-p` 应该填哪个 Program
- 在 `code-scan -p` 模式之前，用它挑选要扫描的 Program

## 2. `yak ssa-remove`

### 2.1 解决什么问题

- 历史 Program 太多，需要清理
- 某个 Program 编错了，想删掉后重新编译
- 想清空数据库里的 Program 重新开始

### 2.2 怎么使用

删除一个 Program：

```bash
yak ssa-remove lesson1_program_only
```

删除多个 Program：

```bash
yak ssa-remove lesson1 lesson2 lesson3
```

删除全部 Program（高风险操作）：

```bash
yak ssa-remove '*'
```

输出示例：

```text
[INFO] Start to delete program: lesson1_program_only
```

删除后可立即验证：

```bash
yak ssa-program lesson1_program_only
```

会看到：

```text
Program match: lesson1_program_only
  no program found
```

### 2.3 参数说明

- 这个命令没有额外 flags
- 位置参数：要删除的 Program 名称
- 特殊值 `'*'`：删除全部 Program

### 2.4 和前面命令怎么联动

- 先 `ssa-program` 看有哪些 Program，再精准删除
- 删除后重新 `ssa-compile`，避免旧数据干扰测试

## 3. `yak ssa-risk`

### 3.1 解决什么问题

- `code-scan --format irify` 生成的 JSON 报告很大，不方便直接阅读
- 需要在终端里快速看扫描摘要和风险详情

### 3.2 怎么使用

先生成 JSON 报告：

```bash
yak code-scan \
  -t ./lesson-1-hello-world \
  -l java \
  --rule-keyword java \
  --format irify \
  -o lesson1-irify \
  --memory
```

再读取报告：

```bash
yak ssa-risk -i ./lesson1-irify.json
```

按严重等级和规则关键字过滤（推荐）：

```bash
yak ssa-risk -i ./lesson1-irify.json --severity high --rule java
```

输出示例（节选）：

```text
=== Scan Report Summary ===
Program: lesson-1-hello-world(2026-03-04 14:56:01)
Language: java
Risks Found: 1

=== Risk Details ===
Risk ID: 3ec71f55eec8ef4cd1e8ef1d270d93d4c892f22d
Title: 检测到Java命令注入漏洞
Severity: high
Location: /lesson-1-hello-world(2026-03-04 14:56:01)/HelloWorld.java:5
```

### 3.3 参数说明

- `--input, -i <file>`：输入风险报告 JSON（最常用）
- `--program, -p <name>`：按 Program 读取（当前更推荐 `--input` 直接读取报告文件）
- `--severity <level>`：按等级过滤（`critical/high/middle/low`）
- `--rule <keyword>`：按规则名关键字过滤
- `--with-code`：输出中带代码片段

### 3.4 和前面命令怎么联动

- 和 `code-scan --format irify` 直接联动，做终端结果复盘
- 适合在 CI 里先产出 JSON，再由 `ssa-risk` 做人类可读输出

## 4. 推荐串联流程

```bash
# 1) 编译
yak ssa-compile -t ./project -p myproj -l java --re-compile

# 2) 确认 Program
yak ssa-program myproj

# 3) 查询或扫描
yak ssa-query -p myproj --sf rules/demo.sf
yak code-scan -p myproj --format irify -o result

# 4) 复盘 JSON 风险报告
yak ssa-risk -i ./result.json

# 5) 清理旧 Program（可选）
yak ssa-remove myproj
```
