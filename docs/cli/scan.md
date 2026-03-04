---
sidebar_position: 3
---

# 扫描（code-scan）

`yak code-scan` 适合“我现在就要一份扫描报告”的场景。

它会把“编译 + 扫描 + 报告导出”串成一条命令。

> 实测说明（2026-03-04）：本页命令和输出示例已在 `syntaxflow-zero-to-hero` 项目实测。

## 1. 快速开始（syntaxflow-zero-to-hero）

### 1.1 克隆示例项目

```bash
git clone https://github.com/yaklang/syntaxflow-zero-to-hero
cd syntaxflow-zero-to-hero
```

### 1.2 执行扫描

```bash
yak code-scan \
  -t ./lesson-1-hello-world \
  -l java \
  --rule-keyword java \
  --format sarif \
  -o lesson1-keyword \
  --memory
```

参数说明：

- `-t ./lesson-1-hello-world`：扫描示例目录
- `--rule-keyword java`：筛选 Java 相关规则
- `--format sarif -o lesson1-keyword`：输出 SARIF 报告
- `--memory`：内存模式，运行更轻量

### 1.3 你会看到什么输出

执行过程中会看到规则进度和汇总（节选）：

```text
[INFO] [code-scan] mode: compile + scan via syntaxflow_scan.StartScan
[Task ...]
status=done progress=100.00%
Failed=0 Skipped=13 Success=126 Finished=139 Total=139 Risk=3
...
Scan Summary
| Failed Rules  | 0   |
| Risk Count    | 3   |
| Success Rules | 126 |
| Total Rules   | 139 |
```

首次运行时还会出现大量 `sync embed rule` 日志，这是内置规则同步过程，属于正常现象。

你可以这样判断：

- `status=done progress=100.00%`：本次扫描结束
- `Risk Count`：命中的风险数量
- 输出文件会自动补全后缀，示例里会生成 `lesson1-keyword.sarif`

### 1.4 快速查看报告文件

```bash
ls -lh lesson1-keyword.sarif
```

## 2. 其他常用扫描方式

### 2.1 扫描已编译 Program

如果你想复用已编译 Program，建议先用一个“唯一名称”编译，避免名称模糊匹配：

```bash
yak ssa-compile -t ./lesson-1-hello-world -p lesson1_program_only -l java --re-compile
```

```bash
yak code-scan -p lesson1_program_only -o result.sarif --format sarif
```

输出示例（节选）：

```text
status=done progress=100.00%
Failed=0 Skipped=100 Success=127 Finished=227 Total=227 Risk=3
...
Scan Summary
| Risk Count  | 3   |
| Total Rules | 227 |
```

### 2.2 指定规则文件或目录

```bash
yak code-scan -t ./your-project -l java --sf ./rules/ -o result.sarif
```

### 2.3 使用规则组筛选

```bash
yak code-scan \
  -t ./your-project \
  -l java \
  --rule-keyword sql \
  --rule-group default \
  -o result.sarif
```

## 3. 配置文件模式（AI Agent / 自动化推荐）

### 3.1 使用配置文件

```bash
yak code-scan --config ./scan-config.json
```

### 3.2 CLI 覆盖配置

```bash
yak code-scan --config ./scan-config.json -o override.sarif --format sarif
```

这个模式适合 AI Agent、工作流引擎、CI pipeline 固定参数执行。

## 4. 输出格式

### 4.1 SARIF（默认）

```bash
yak code-scan -t ./your-project -o result.sarif --format sarif
```

适合接入 GitHub/GitLab 等平台，以及通用安全平台。

### 4.2 IRify / IRify-Full

```bash
yak code-scan \
  -t ./your-project \
  -o result.json \
  --format irify \
  --with-file-content \
  --with-dataflow-path
```

`irify` 适合结构化消费结果；`irify-full` 常用于内部平台或 CI 产物归档。

IRify Schema：

- https://github.com/yaklang/yaklang/blob/main/common/yak/ssaapi/sfreport/irify_report_schema.json

## 5. CI 批量扫描（参考现有流水线）

参考示例：

- https://github.com/yaklang/yaklang/blob/main/.github/workflows/diff-code-check.yml

常见做法是“先生成差异文件快照，再扫描快照”。

### 5.1 增量扫描模板（PR Diff）

```bash
yak sync-rule
yak gitefs --start "$MERGE_BASE" --end "$HEAD_SHA" --output ./fs.zip

yak code-scan \
  -t ./fs.zip \
  -l golang \
  --rule-keyword golang \
  --format irify-full \
  -o risk \
  --memory \
  --file-perf-log \
  --rule-perf-log \
  --exclude-file "**/vendor/**,vendor/**,**/classes/**,**/target/**,**include/**,**caches/**,**cache/**,**tmp/**,**alipay/**,**includes/**,**temp/**,**zh_cn/**,**zh_en/**,**plugins/**,**PHPExcel/**,*.pb.go,*_test.go,**vulinbox/**"
```

### 5.2 在 CI 里建议固定的点

- 规则同步步骤固定化（`yak sync-rule`）
- 排除目录模式固定化（`--exclude-file`）
- 输出格式固定化（SARIF 或 IRify）
- 扫描结果作为构建产物保存，便于后续平台或 AI 二次处理

## 6. 参数详细说明

输入与编译：

- `--config, -c <file>`：JSON 配置文件
- `--target, -t <path>`：扫描目标路径
- `--program, -p <name>`：已编译 Program 名称
- `--language, -l <lang>`：目标语言
- `--memory, --mem`：内存模式
- `--database, --db <path>`：数据库路径
- `--exclude-file <glob[,glob...]>`：排除文件/目录
- `--file-perf-log`：文件级编译性能日志

规则筛选：

- `--rule-keyword, --rk, --kw <keyword>`：关键词筛选规则
- `--rule-group, --rg <name>`：按规则组筛选（可多次）
- `--syntaxflow, --sf <path-or-rule>`：指定规则文件/目录/内联规则
- `--rule-perf-log`：规则级性能日志

输出：

- `--output, -o <file>`：输出文件
- `--format <sarif|irify|irify-full>`：输出格式（建议显式指定）
- `--with-file-content`：IRify 包含文件内容
- `--with-dataflow-path`：IRify 包含数据流路径

运行：

- `--pprof <file>`：pprof 文件
- `--log-level, --loglevel <debug|info|warn|error>`：日志等级
