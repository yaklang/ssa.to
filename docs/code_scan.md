---
sidebar_position: 3
---

# 代码扫描
原创 Yak  Yak Project   2024-11-01 17:30  
  
<!-- ![](./quest_start_gui_auditstatic/wechat2md-57d4b38fb5fac67b077017855ed50c43.gif)  
  
朋友，你还在苦苦寻觅代码审计更便捷的方式么？  
  
![](./quest_start_gui_auditstatic/wechat2md-7fe779cc6a661bc8a40d988ea655889c.png)  
  
本周不仅有  
**Yakit SyntaxFlow界面上新**  
  
更有全新  
**网页端代码扫描小工具**  
  
一键启动代码审计！  
  
谁说这代码审计老啊？这代码审计可太棒了！  
   -->
  
<!-- ![](./quest_start_gui_auditstatic/wechat2md-3ef8a0cfe654499ea76424d7c463e36d.png)   -->
  

## 代码审计功能
  
**代码审计功能：项目管理**  
  
点击代码审计功能会进入到项目管理页面， 在此页面将会展示已编译的所有项目，可以在操作中选择跳转到代码扫描页面或代码审计页面。  
  
![](./quest_start_gui_auditstatic/wechat2md-394168d6468ddc047d1363d20c56c78a.png)  
  
在此页面也可以在右上角开始编译新的项目，将会在编译完成以后自动跳转到代码审计页面：  
  
代码审计页面如下：  
  
![](./quest_start_gui_auditstatic/wechat2md-22a6b0c582cb79bb91e2ef91b3880f92.png)  
  
可以看到类似之前的yakRunner内的代码扫描功能，调整了下文件系统和代码审计框的布局。  
  

## 代码扫描页面
  
点击代码扫描功能，可以使用内置规则对已编译项目进行代码扫描：  
  
### 开始扫描

- 在页面左侧为规则选择页面，目前支持内置规则和内置规则分组。  
  
> 内置规则正在持续更新。接下来也会开放用户自定义规则、自定义规则分组的功能。  
  
- 在页面中间可以通过下拉框选择已编译的项目，也可以通过右上角添加项目进行编译。  
  
![](./quest_start_gui_auditstatic/wechat2md-561416c5867c942b9e3caf6ae3a904e7.png)  
  
<!-- ![](./quest_start_gui_auditstatic/wechat2md-3bcdfa94d9f8d89f6942b084b7709612.png)   -->
### 扫描进度
  
在选中规则以及项目以后可以开始扫描：  
  
将会显示以下信息：  
- **执行进度：**  
  
- 已经执行结束的规则和总规则数  
  
- 规则和项目都是会指定编程语言的，语言不匹配将会跳过该规则，将会展示跳过的规则数量。  
  
- 当前执行规则的规则名  
  
- **执行状态：**  
  
- 执行成功个数和失败个数。  
  
- 一般失败是因为执行或执行结果的保存失败，可以在日志中观察到失败的规则和其原因  
  
![](./quest_start_gui_auditstatic/wechat2md-cc59ae6415624c912ad88dd8ec738f8f.png)  
  
在表格中，将会展示审计结果和漏洞风险。  
  
### 审计结果
  
审计结果默认仅展示风险个数大于0的审计结果。在扫描执行结束以后可以手动取消选中查看全部的规则，也可以对表内的等级等信息进行筛选。  
  
![](./quest_start_gui_auditstatic/wechat2md-4d4dcc9d5a38de1d23edd7912c9962d7.png)  
  
表中的每一项都是一次审计的结果。其中出现风险个数的是有意义的审计结果。其中的每一项都可以查看信息：  
- 操作中的终端图标将可以直接跳转到代码审计页面打开整个项目查看相关信息。  
  
- 操作中的➡️图标将会用侧边栏打开并展示相关信息，此时也可以跳转到代码审计页面查看项目。  
  
![](./quest_start_gui_auditstatic/wechat2md-e42c940c641f19f1a7facaa5846656b5.png)  
  
相关的操作与代码审计页面一致，查看审计的结果，审计的路径以及过程图。  
  
值得注意的是如果当前展示的审计结果有相关漏洞与风险信息的话将会标注漏洞风险的bug图标，点击可以查看对应的漏洞风险信息。  
  
![](./quest_start_gui_auditstatic/wechat2md-681b8919fcc35c255b10a2cb576c2d23.png)  
  

### 漏洞与风险
  
漏洞与风险的数据展示如下：  
  
![](./quest_start_gui_auditstatic/wechat2md-d269b9395db4c0d6ccaf51aae15d6256.png)  
  
和之前的漏洞与风险同样的操作逻辑，点击将会显示漏洞与风险信息。  
  
但同时，右侧将会显示该漏洞与风险的对应代码。点击相关代码段可以展开显示代码内容，点击右侧终端图标将会跳转到代码审计页面自动打开对应的代码查看详情。  
  
代码扫描产生的漏洞与风险同样被保存在全局，如下图所示，将会在yakit顶栏出现通知，并且可以在全局数据库内看到：  
  
![](./quest_start_gui_auditstatic/wechat2md-c7258f2de9aa6a345e1b6d85b0b672d5.png)  
  


****  
  
<!--   
 **YAK官方资源**  
  
Yak 语言官方教程：  
https://yaklang.com/./intro/Yakit 视频教程：  
https://space.bilibili.com/437503777Github下载地址：  
https://github.com/yaklang/yakitYakit官网下载地址：  
https://yaklang.com/Yakit安装文档：  
https://yaklang.com/products/download_and_installYakit使用文档：  
https://yaklang.com/products/intro/常见问题速查：  
https://yaklang.com/products/FAQ  
  
![](./quest_start_gui_auditstatic/wechat2md-382b711760574d429c6c8742ecfc1d9b.png)  
  
![](./quest_start_gui_auditstatic/wechat2md-304b45488320344b4c7cdbd5759ee4e8.gif)  
  
   -->
