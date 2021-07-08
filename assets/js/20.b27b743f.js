(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{528:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#前记"}},[s._v("前记")])]),a("li",[a("a",{attrs:{href:"#安装"}},[s._v("安装")])]),a("li",[a("a",{attrs:{href:"#初步上手"}},[s._v("初步上手")]),a("ul",[a("li",[a("a",{attrs:{href:"#package配置"}},[s._v("package配置")])]),a("li",[a("a",{attrs:{href:"#添加主页"}},[s._v("添加主页")])]),a("li",[a("a",{attrs:{href:"#运行"}},[s._v("运行")])])])]),a("li",[a("a",{attrs:{href:"#进阶配置"}},[s._v("进阶配置")]),a("ul",[a("li",[a("a",{attrs:{href:"#目录结构"}},[s._v("目录结构")])]),a("li",[a("a",{attrs:{href:"#config-js-配置"}},[s._v("config.js 配置")])]),a("li",[a("a",{attrs:{href:"#front-matter"}},[s._v("Front Matter")])])])]),a("li",[a("a",{attrs:{href:"#vuepress-主题"}},[s._v("VuePress 主题")]),a("ul",[a("li",[a("a",{attrs:{href:"#front-matter"}},[s._v("Front Matter")])]),a("li",[a("a",{attrs:{href:"#config-js-配置"}},[s._v("Config.js 配置")])]),a("li",[a("a",{attrs:{href:"#文章加密"}},[s._v("文章加密")])])])]),a("li",[a("a",{attrs:{href:"#服务器部署"}},[s._v("服务器部署")]),a("ul",[a("li",[a("a",{attrs:{href:"#迁移"}},[s._v("迁移")])]),a("li",[a("a",{attrs:{href:"#运行"}},[s._v("运行")])]),a("li",[a("a",{attrs:{href:"#终止运行"}},[s._v("终止运行")])]),a("li",[a("a",{attrs:{href:"#域名"}},[s._v("域名")])])])]),a("li",[a("a",{attrs:{href:"#更新博客"}},[s._v("更新博客")]),a("ul",[a("li",[a("a",{attrs:{href:"#目录"}},[s._v("目录")])]),a("li",[a("a",{attrs:{href:"#更新文章"}},[s._v("更新文章")])])])]),a("li",[a("a",{attrs:{href:"#后记"}},[s._v("后记")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"前记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前记"}},[s._v("#")]),s._v(" 前记")]),s._v(" "),a("p",[s._v("这几天突然对服务器学习感了兴趣，主要还是来源于之前对Linux的学习吧哈哈哈哈。然后就去Linux上白嫖了两个月的服务器，熟悉了一下CentOS的基本操作，便想着在服务器上部署一个网站，查来查去，就选择采用vuepress构建一个博客。")]),s._v(" "),a("p",[s._v("但是完成这么几项任务也耗费了很长（大概一天半的时间），可能是我比较菜😂，也踩了不少坑，姑且写一下，供自己查看。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("安装node.js框架")]),s._v(" "),a("p",[s._v("直接去"),a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("node.js官网"),a("OutboundLink")],1),s._v("下载就好")]),s._v(" "),a("p",[a("strong",[s._v("Windows")])]),s._v(" "),a("p",[s._v("直接安装应用程序就好。")]),s._v(" "),a("p",[s._v("安装完毕可以在命令行检查，输入以下指令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("node -v\n")])])]),a("p",[s._v("若有版本号出现，则安装成功")]),s._v(" "),a("p",[a("strong",[s._v("Linux")])]),s._v(" "),a("p",[s._v("对于Linux是一个压缩包。")]),s._v(" "),a("p",[s._v("先解压文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf node-v0.10.24.tar.gz\n")])])]),a("p",[s._v("编译安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" node-v0.10.24\n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/node/0.10.24\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("p",[s._v("配置环境变量")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n")])])]),a("p",[s._v("在 "),a("em",[a("strong",[s._v("export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL")])]),s._v(" 一行的上面添加如下内容:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#set for nodejs")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/node/0.10.24\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODE_HOME")]),s._v("/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])])]),a("p",[s._v(":wq保存并退出，编译/etc/profile 使配置生效")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])])]),a("p",[s._v("验证是否安装配置成功")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("node -v\n")])])]),a("p",[s._v("输出 v0.10.24 表示配置成功")]),s._v(" "),a("p",[s._v("npm模块安装路径")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/usr/local/node/0.10.24/lib/node_modules/\n")])])])]),s._v(" "),a("li",[a("p",[s._v("安装yarn")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("安装vuepress")]),s._v(" "),a("p",[s._v("在一个地方创建一个文件夹，用包管理器进行初始化")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm init")]),s._v("\n")])])]),a("p",[s._v("将 VuePress 安装为本地依赖")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -D vuepress")]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"初步上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初步上手"}},[s._v("#")]),s._v(" 初步上手")]),s._v(" "),a("p",[s._v("安装了以上所需包，就可以进行初步上手了，在构造一个静态网页之前，还要进行以下工作。")]),s._v(" "),a("h3",{attrs:{id:"package配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package配置"}},[s._v("#")]),s._v(" package配置")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("package.json")]),s._v(" 中添加一些 scripts")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("推荐做此项工作，这是把命令"),a("code",[s._v("vuepress dev docs")]),s._v("编译成一个脚本，这样使用包管理器npm或yarn使项目运行时，只需输入")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run dev")]),s._v("\n")])])]),a("h3",{attrs:{id:"添加主页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加主页"}},[s._v("#")]),s._v(" 添加主页")]),s._v(" "),a("p",[s._v("在目录下创建docs文件夹，在其中添加"),a("code",[s._v("README.md")]),s._v("文件，可以输入"),a("code",[s._v("# Hello VuePress")])]),s._v(" "),a("h3",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("p",[s._v("输入上文中运行指定，便可在 "),a("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080 (opens new window) "),a("OutboundLink")],1),s._v("启动一个热重载的开发服务器。")]),s._v(" "),a("h2",{attrs:{id:"进阶配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶配置"}},[s._v("#")]),s._v(" 进阶配置")]),s._v(" "),a("p",[s._v("以上是完成一个VuePress项目需要的最基本的操作，如果得到更进一步的功能需要进行以下配置。")]),s._v(" "),a("h3",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("p",[s._v("VuePress 遵循 "),a("strong",[s._v("“约定优于配置”")]),s._v(" 的原则，推荐的目录结构如下：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates (可选的, 谨慎配置)\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js (可选的)\n│   │   └── enhanceApp.js (可选的)\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])])]),a("ul",[a("li",[a("code",[s._v("docs/.vuepress")]),s._v(": 用于存放全局的配置、组件、静态资源等。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/components")]),s._v(": 该目录中的 Vue 组件将会被自动注册为全局组件。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/theme")]),s._v(": 用于存放本地主题。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/styles")]),s._v(": 用于存放样式相关的文件。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/styles/index.styl")]),s._v(": 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/styles/palette.styl")]),s._v(": 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/public")]),s._v(": 静态资源目录。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/templates")]),s._v(": 存储 HTML 模板文件。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/templates/dev.html")]),s._v(": 用于开发环境的 HTML 模板文件。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/templates/ssr.html")]),s._v(": 构建时基于 Vue SSR 的 HTML 模板文件。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/config.js")]),s._v(": 配置文件的入口文件，也可以是 "),a("code",[s._v("YML")]),s._v(" 或 "),a("code",[s._v("toml")]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/enhanceApp.js")]),s._v(": 客户端应用的增强。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("docs文件夹在改名时，需对package.json文件script中对应名字更改。")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("只定位到文件夹时，打开的网页为"),a("code",[s._v("文件夹名.md")]),s._v("或者文件夹内的"),a("code",[s._v("README.md")]),s._v("，切忌不能同时出现！！")])]),a("h3",{attrs:{id:"config-js-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-js-配置"}},[s._v("#")]),s._v(" config.js 配置")]),s._v(" "),a("p",[s._v("如下")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello VuePress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Just playing around'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("title")]),s._v("为网页名称")]),s._v(" "),a("li",[a("code",[s._v("description")]),s._v("为网页介绍")])]),s._v(" "),a("p",[s._v("以下为官方默认主题常用配置")]),s._v(" "),a("p",[a("strong",[s._v("导航栏链接")])]),s._v(" "),a("p",[s._v("你可以通过 "),a("code",[s._v("themeConfig.nav")]),s._v(" 增加一些导航栏链接:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Guide'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/guide/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'External'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://google.com'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Languages'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        ariaLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Language Menu'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        items"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Chinese'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/language/chinese/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Japanese'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/language/japanese/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[a("code",[s._v("item")]),s._v("可以提供一个下拉链接")])]),s._v(" "),a("p",[s._v("其余配置可以见"),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1),s._v("和"),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/theme/option-api.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方默认主题配置文档"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"front-matter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-matter"}},[s._v("#")]),s._v(" Front Matter")]),s._v(" "),a("p",[s._v("front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。规定了md文件的基本配置，常用可见下：")]),s._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('---\n{\n  "title": "Blogging Like a Hacker", # 本页面的标题\n  "lang": "en-US", # 本页面的语言\n  "description": , # 本页面的描述\n  "navbar": false, # 禁用导航栏\n  "sidebar": false, # 禁用标题栏\n}\n---\n')])])]),a("p",[s._v("其余可见"),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E7%9A%84%E9%A2%84%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"vuepress-主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-主题"}},[s._v("#")]),s._v(" VuePress 主题")]),s._v(" "),a("p",[s._v("利用主题可以方便地建立一些网站，比如blog，主题也加入了不少功能便于调用。为了搭建一个博客，我尝试了以下主题：")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://vuepress-theme-blog.ulivz.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方博客主题"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("这个主题增加了文章分类功能，个人觉得这个文章分类比较合理，但是功能较少，主页不好看，故没有选择。")])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://vuepress-theme-hope.gitee.io/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-hope"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("老实说这个主题比较合我意，但是配置时总是出错🙃，不知道是什么原因")])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("最后选用的这个主题，但是这个主题的文章分类是通过front matter中的一个categories参数确定的，不是官方博客主题中的按照文件夹分类，可能这种分类方式比较简便，毕竟只需要改变每个文档中的front matter，但是个人的逻辑还是喜欢按照文件夹。")])])]),s._v(" "),a("p",[s._v("以下记录一下自己常用的配置，具体可去官方文档中查询。")]),s._v(" "),a("h3",{attrs:{id:"front-matter-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-matter-2"}},[s._v("#")]),s._v(" Front Matter")]),s._v(" "),a("p",[s._v("一个完整的 "),a("code",[s._v("Front Matter")]),s._v(" 案例：")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 烤鸭的做法\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2019-08-08 08:00:00'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sidebar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'auto'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("categories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 烹饪\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 爱好\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 烤\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 鸭子\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n")])])]),a("h3",{attrs:{id:"config-js-配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-js-配置-2"}},[s._v("#")]),s._v(" Config.js 配置")]),s._v(" "),a("h4",{attrs:{id:"图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标"}},[s._v("#")]),s._v(" 图标")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Tags'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/tags/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco-tag'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("具体图标参数参见"),a("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("此网页"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"头像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头像"}},[s._v("#")]),s._v(" 头像")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    authorAvatar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/avatar.png'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[s._v("图片的路径为"),a("code",[s._v("./docs/.vuepress/public/")])])]),a("h3",{attrs:{id:"文章加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文章加密"}},[s._v("#")]),s._v(" 文章加密")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" vuepress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("reco\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("2019-04-09")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("author")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" reco_luan\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'32位的 md5 加密密文'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n")])])]),a("p",[s._v("需要将原密码转化为32位的 md5 加密密文，可以通过"),a("a",{attrs:{href:"https://www.cmd5.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("此网页"),a("OutboundLink")],1),s._v("转化。")]),s._v(" "),a("h2",{attrs:{id:"服务器部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器部署"}},[s._v("#")]),s._v(" 服务器部署")]),s._v(" "),a("h3",{attrs:{id:"迁移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迁移"}},[s._v("#")]),s._v(" 迁移")]),s._v(" "),a("p",[s._v("可以先在服务器上建立环境，再将本地上文件利用Xftp迁移过去，或者使用github或gitee仓库进行代码更新。")]),s._v(" "),a("p",[a("strong",[s._v("建立环境")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" my_blog\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my_blog\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress-theme-reco\n")])])]),a("ul",[a("li",[s._v("按道理只用add主题就够了，自身就包含了vuepress，但是只add主题启动后会报错，原因未知。")])]),s._v(" "),a("h3",{attrs:{id:"运行-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行-2"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("p",[s._v("运行前最好build一下，生成静态网页文件（好处未知，正在查阅资料）")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev\n")])])]),a("p",[s._v("然后在http://公网IP：8080中便可建立博客。")]),s._v(" "),a("p",[a("strong",[s._v("注意")])]),s._v(" "),a("p",[s._v("使用ssh连接服务器时，如果断开ssh连接，网页运行会自动停止，因此需要使用以下指令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" test.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])])]),a("ul",[a("li",[s._v("按道理"),a("code",[s._v("yarn dev")]),s._v("也可以，但是用yarn会报错，原因未知。")]),s._v(" "),a("li",[a("code",[s._v("test.log")]),s._v("是指令输出的日志。")]),s._v(" "),a("li",[s._v("nohup英文全称 no hang up（不挂起），后加&指让命令在后台执行，终端退出后命令仍旧执行。exit退出ssh连接。")])]),s._v(" "),a("h3",{attrs:{id:"终止运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#终止运行"}},[s._v("#")]),s._v(" 终止运行")]),s._v(" "),a("p",[s._v("终止运行可以用以下指令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux\n")])])]),a("p",[s._v("然后找到网页运行的程序，输入")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 进程号PID\n")])])]),a("h3",{attrs:{id:"域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[s._v("#")]),s._v(" 域名")]),s._v(" "),a("p",[s._v("在阿里云上购买了一个一年的域名：foragony.xyz，但是发现使用域名必须备案，并且备案的条件之一是有三个月的服务器，所以，这个域名暂时用不了💀")]),s._v(" "),a("p",[s._v("在阿里云服务器到期后，准备买腾讯云服务器，mark一下。")]),s._v(" "),a("h2",{attrs:{id:"更新博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新博客"}},[s._v("#")]),s._v(" 更新博客")]),s._v(" "),a("p",[s._v("主要是给自己写的，怕被忘记😂")]),s._v(" "),a("h3",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[s._v("#")]),s._v(" 目录")]),s._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├─ README.md\n├─ daily\n│  ├─ README.md\n│  └─ ...\n├─ note\n|  ├─ README.md\n│  └─ ...\n├─ private\n|  ├─ README.md\n│  └─ ...\n├─ interview\n|  ├─ README.md\n│  └─ ...\n├─ pic\n│  └─ ...\n└─ .vuepress\n   ├─ config.js\n   ├─ public/\n   └─ dist/\n")])])]),a("ul",[a("li",[a("p",[a("code",[s._v("/daily/")]),s._v("为生活日常文件夹")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("/note/")]),s._v("为学习日志文件夹")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("/private/")]),s._v("为个人感悟随笔文件夹")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("/interview/")]),s._v("为个人介绍文件夹，即在导航栏中的About项")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("/pic/")]),s._v("为文中的照片存储，期望在里面也进行文件分类")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("/.vuepress/config.js")]),s._v("为项目配置文件")]),s._v(" "),a("p",[a("code",[s._v("/.vuepress/public")]),s._v("为推送照片存储，一般为头像")]),s._v(" "),a("p",[a("code",[s._v("/.vuepress/dist")]),s._v("为静态网页文件")])])]),s._v(" "),a("h3",{attrs:{id:"更新文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新文章"}},[s._v("#")]),s._v(" 更新文章")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("如果更新的为生活日常或感悟随笔，直接在front matter中加入")]),s._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("categories:\n - 生活日记\n - 感悟随笔\ntag:\n - 随便写（不写也行，建议不写）\n")])])])]),s._v(" "),a("li",[a("p",[s._v("如果更新学习日记，如果想引入导航栏中的Note除去改变categories，还需对侧边栏进行修改。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\nsidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/note/'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'TODO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'加入'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这里写路径及文件名")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'二级笔记'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          collapsable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          children"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1-1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1-2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1-3'")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])])])])]),s._v(" "),a("ul",[a("li",[s._v("更新个人介绍也是一样，需要修改config.js中侧边栏中对应内容。")]),s._v(" "),a("li",[s._v("4/25更新 md文件名不能有中文，原因未知")])]),s._v(" "),a("h2",{attrs:{id:"后记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[s._v("#")]),s._v(" 后记")]),s._v(" "),a("p",[s._v("身为考研人，居然还在这时间宝贵的时候搞这个没用的东西😂，我也是有点佩服我自己。")]),s._v(" "),a("p",[s._v("入门上手之后就好多了，希望不会辜负这一天半搞这个blog的时间，好好利用起来，框架就搭好了，以后有心思可以搞搞插件什么的。")])])}),[],!1,null,null,null);t.default=n.exports}}]);