---
sidebar_position: 2
---

# 编译与查询

这个页面对应“手动测试和规则编写测试”场景。

目标很简单：先把项目编译成 Program，再执行你自己的 SyntaxFlow 规则，看到明确的命中位置和数据流变量。

> 实测说明（2026-03-04）：本页命令和输出示例已在 `syntaxflow-zero-to-hero/lesson-1-hello-world` 跑通。

## 1. 从零开始（Hello World）

### 1.1 克隆示例项目

```bash
git clone https://github.com/yaklang/syntaxflow-zero-to-hero
cd syntaxflow-zero-to-hero/lesson-1-hello-world/
```

这个目录里有两份关键文件：

- `HelloWorld.java`：待分析代码
- `lesson-1.sf`：示例规则

### 1.2 编译项目

```bash
yak ssa-compile -t . -p lesson1 -l java --re-compile
```

参数含义：

- `-t .`：当前目录作为分析目标
- `-p lesson1`：Program 名称，后续查询时要复用
- `-l java`：指定语言
- `--re-compile`：同名 Program 允许重编译

### 1.3 你会看到什么输出

正常情况下会看到类似日志（节选）：

```text
[INFO] [ssa-compile] compile stage: target="." program="lesson1" language="java"
[INFO] start to compile file: .
[INFO] compile save to database with program name: lesson1
...
[INFO] program lesson1 finish: 1.000000
[INFO] finished compiling..., results: 1
```

你可以这样判断是否成功：

- 出现 `finished compiling..., results: 1`
- 没有 `parse project failed` 或 `no program compiled` 这类错误

## 2. 执行 SyntaxFlow 查询

### 2.1 使用 `ssa-query`

```bash
yak ssa-query -p lesson1 --sf lesson-1.sf
```

等价命令：

```bash
yak sf -p lesson1 --sf lesson-1.sf
```

### 2.2 查询输出示例（节选）

```text
[INFO] [ssa-query] mode: query existing program(s) via SyntaxFlowQuery
[INFO] syntax flow query result:
rule md5 hash: 389009d4257afd3ee509af4749936a3b
Result Vars:
  $source:
    t41: Parameter-cmd
        /lesson1/HelloWorld.java:5:31 - 5:63
  $sink:
    t77: Undefined-runtimeInstance.exec(...),Parameter-cmd)
        /lesson1/HelloWorld.java:12:44 - 12:53
```

重点看三块：

- `Result Vars`
- `$source`（输入源）
- `$sink`（敏感调用点）

这三块基本就能确认规则是否命中，命中了哪一行。

## 3. 一步完成（编译后立即查询）

如果你只是临时验证规则，不想分两条命令：

```bash
yak ssa-compile -t . -p lesson1-inline -l java --sf lesson-1.sf
```

## 4. 配置文件模式

如果你希望把参数固定下来（AI 接入时尤其常见）：

先在当前目录创建 `compile-config.json`（示例）：

```json
{
  "Mode": 127,
  "BaseInfo": {
    "program_names": ["lesson1-config"],
    "project_name": "lesson-1-hello-world",
    "language": "java"
  },
  "CodeSource": {
    "kind": "local",
    "local_file": "."
  },
  "SSACompile": {
    "re_compile": true,
    "memory_compile": false,
    "strict_mode": false,
    "exclude_files": [],
    "entry_files": []
  }
}
```

再执行：

```bash
yak ssa-compile --config ./compile-config.json
```

说明：

- `program_names[0]` 是编译后 Program 名称（这里是 `lesson1-config`）
- `CodeSource.local_file` 建议写 `.`，表示当前目录
- `SSACompile.re_compile=true` 允许同名 Program 重编译

## 5. 参数详细说明

### 5.1 `yak ssa-compile`

基础参数：

- `--target, -t <path>`：待编译目录或文件
- `--program, -p <name>`：Program 名称
- `--language, -l <lang>`：编译语言
- `--config, -c <file>`：JSON 配置文件
- `--entry <file>`：指定入口文件
- `--log <level>`：日志级别

编译控制：

- `--re-compile`：允许重编译同名 Program
- `--no-override`：不主动覆盖同名 Program
- `--exclude-file <glob[,glob...]>`：排除文件/目录
- `--file-perf-log`：文件级编译性能日志

联动查询：

- `--syntaxflow, --sf <path-or-rule>`：编译后执行规则
- `--dot`：输出 DOT 图
- `--with-code, --code`：输出代码上下文
- `--database-debug, --dbdebug`：数据库调试日志
- `--syntaxflow-debug, --sfdebug`：SyntaxFlow 调试日志

数据库：

- `--database, --db <path>`：数据库路径
- `--database-dialect, --db-dialect <sqlite3|mysql>`：数据库类型
- `--no-frontend`：禁用前端联动

### 5.2 `yak ssa-query` / `yak sf`

关键参数：

- `--program, -p <name>`：目标 Program
- `--syntaxflow, --sf <path-or-rule>`：规则文件/目录/内联规则
- `--save, -s`：保存结果到数据库
- `--log <level>`：日志级别

输出相关：

- `--sarif, --sarif-export, -o <file>`：导出 SARIF
- `--dot`：输出 DOT 图
- `--with-code, --code`：输出代码上下文

数据库与调试：

- `--database, --db <path>`
- `--database-dialect, --db-dialect <sqlite3|mysql>`
- `--database-debug, --dbdebug`
- `--syntaxflow-debug, --sfdebug`
