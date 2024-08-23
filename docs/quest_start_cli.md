---
sidebar_position: 2
---
# SyntaxFlow 快速使用 (cli版本)

## 0x00 先决条件

在使用 SyntaxFlow 之前，需要你准备好 Yaklang 的环境，最简单的方式是使用 Yaklang 预编译环境：

```bash
bash <(curl -sS -L http://oss.yaklang.io/install-latest-yak.sh)
```

通过这种安装方式，你可以使用 `yak version` 来检查版本

为了保持 SyntaxFlow 新特性的追加支持，请尽量保持在 `1.3.4-beta3` 之后的版本。

除了安装最基础的执行环境之外，你还需要事先对 “程序” 有一些基本认知，当然，如果你有 PHP / JS / Java 的一点点基础是最好的，方便我们在后面进行案例讲解具体实战案例。

## 0x01 从零开始

假设现在的你现在并不知道 SSA 是什么，也不知道 SyntaxFlow 的基础语法，那么我们就从真的 “Zero” 开始吧！

### 0x01.1 Clone 本项目到本地

```bash
git clone https://github.com/yaklang/syntaxflow-zero-to-hero
cd syntaxflow-zero-to-hero/lesson-1-hello-world/
```

### 0x01.2 编译 Hello World 程序

当然，SyntaxFlow 并不能被证明是图灵完备的，也并不适合像其他语言一样 `Println("Hello World")`。所以 Yaklang SyntaxFlow 的 Hello World 要相对特殊很多。

我们要先把要审计的代码编译成特定的 SSA 格式，才能开始执行 SyntaxFlow。编译命令非常简单，在确保你 clone 到本地之后，进入 `lession-1-hello-world` 仓库，执行如下命令：

```bash
yak ssa -t . --program lesson1
```

> 注意，你设置 --program lesson1 之后，在后续使用中，都需要使用到这个程序名称，分析其才知道你要分析到底是哪个程序。

执行完应该会看到

```bash
➜  lesson-1-hello-world git:(main) ✗ yak ssa -t . --program lesson1
[INFO] 2024-06-25 22:57:36 [ssacli:131] start to compile file: .
[INFO] 2024-06-25 22:57:36 [ssacli:147] compile save to database with program name: lesson1
[INFO] 2024-06-25 22:57:36 [ssa:42] init ssa database: /Users/v1ll4n/yakit-projects/default-yakssa.db
...
...
...
...
[INFO] 2024-06-25 22:57:37 [language_parser:68] compile HelloWorld.java cost: 309.695625ms
[INFO] 2024-06-25 22:57:37 [language_parser:72] program include files: 2 will not be as the entry from project
[INFO] 2024-06-25 22:57:37 [ssacli:162] finished compiling..., results: 1
```

当你看到 `finished compiling..., results: ...` 的时候，说明编译完成了。

不要害怕，其实源码非常简单，作为 Hello World 来讲，我们努力在一个简单案例中展示 SyntaxFlow 的特性，尽可能让有任何基础的人都可以学习到如何审计：

这段代码甚至连 `import` 和 `package` 都不会写，这虽然表面看起来是不完整的 Java 类，但是实际上这样的代码仍然可以被 Yaklang SSA 编译。XDD

```java
@Controller
@RequestMapping("/home/rce")
public class RuntimeExec {
    @RequestMapping("/runtime")
    public String RuntimeExec(@GetParam(value="id") String cmd, Model model) {
        StringBuilder sb = new StringBuilder();
        String line;


        try {
            var runtimeInstance = Runtime.getRuntime();
            Process proc = runtimeInstance.exec(cmd);
        } catch (IOException e) {

        }
        return "basevul/rce/runtime";
    }
}
```

接下来我们要执行一个 SyntaxFlow 规则来进行代码审计了

## 0x02 执行一个 SyntaxFlow 规则

区别于之前的内容，我们这次在同名目录中编写了 `lesson-1.sf` 文件，其内容如下：

```log
desc(title: "This is Hello World for SyntaxFlow, simple but great!")

Runtime.getRuntime().exec(* #-> * as $source) as $sink;

check $source then "找到系统命令执行参数位置（依赖）" else  "没有找到参数"
check $sink then "找到系统命令执行位置" else "没有执行命令";
```

我们的示例规则使用了 SyntaxFlow 的查询语言来检测 Java 中的命令执行。规则主要包含两部分：一个用于寻找命令执行的源头（用户输入），另一个用于寻找命令执行发生的位置。实际上生效的最核心的代码只有一行

`Runtime.getRuntime().exec(* #-> * as $source) as $sink;`

### 新知识：追踪一个值的顶级支配者

特殊符号 #-> 的用途就是追踪一个值的顶级支配，我们可以简单理解为：**某一个值究竟受谁影响？**，`#->` 是一个操作符，用于追踪 Use-Def 链。它帮助分析代码中一个值的定义和使用，确定一个变量的“顶级定义”是什么。这对于理解数据流和潜在的安全漏洞非常关键。

文件已经保存在 `lesson-1-hello-world` 中了，用户直接在那个目录下执行：

```bash
yak sf --program lesson1 lesson-1.sf
```

执行命令的时候要注意 `--program` 的参数是 `lesson1`，这是我们编译的时候设置的程序名称，在编译的时候设置为什么名称，在这里就要使用什么名称。

就可以的到结果：

```
[INFO] 2024-06-25 23:35:24 [ssacli:221] start to use SyntaxFlow rule: lesson-1.sf
[INFO] 2024-06-25 23:35:24 [ssa:42] init ssa database: /Users/v1ll4n/yakit-projects/default-yakssa.db
[INFO] 2024-06-25 23:35:24 [ssacli:272] syntax flow query result:
rule md5 hash: 389009d4257afd3ee509af4749936a3b
rule preview: desc(title: "This is Hello World...then "找到系统命令执行位置" else "没有执行命令";
description: {title: "title", $source: "找到系统命令执行参数位置（依赖）", $sink: "找到系统命令执行位置"}
Result Vars:
  source:
    t2612544: Parameter-cmd
        HelloWorld.java:5:30 - 5:62
  sink:
    t2612569: Undefined-runtimeInstance.exec(valid)
        HelloWorld.java:12:43 - 12:52

```

## 0x03 分析 SyntaxFlow 结果

结果中显示了如下内容：

1. `description: { ... }` 找到系统命令执行参数位置（依赖）...
1. source 和 sink 的具体位置和类型，这有助于开发者理解和修复潜在的安全问题

我们回忆源码中有两行：

```bash
check $source then "找到系统命令执行参数位置（依赖）" else  "没有找到参数"
check $sink then "找到系统命令执行位置" else "没有执行命令"; 
```

在 source 存在的时候，将会输出 “找到..参数”，在 sink 存在的时候，将会输出 "找到命令执行位置"。

这两个条件基本我们就可以判定这个漏洞是存在的。

## 0x04 快速使用的总结

在几分钟之内你应该已经走完了 SyntaxFlow 审计代码的几个要素

1. 编译 `yak ssa -t ./project-path --program name`
1. 编写 SyntaxFlow 规则文件 `rule.sf`
1. 执行 SyntaxFlow 规则文件 `yak sf --program name rule.sf`

并且在完成快速开始之后，你还学会了一个新的用法 `#->` 这个运算符可以寻找最顶级的支配者。尽管旅程结束的很快，但是不得不承认，你可能已经迫不及待开始新的 SyntaxFlow 学习之旅了！
