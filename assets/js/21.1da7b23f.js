(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{527:function(t,s,e){"use strict";e.r(s);var a=e(6),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"markdown内部链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown内部链接"}},[t._v("#")]),t._v(" Markdown内部链接")]),t._v(" "),e("p",[t._v("网站内部的链接，将会被转换成 "),e("code",[t._v("<router-link>")]),t._v(" 用于 SPA 导航。同时，站内的每一个文件夹下的 "),e("code",[t._v("README.md")]),t._v(" 或者 "),e("code",[t._v("index.md")]),t._v(" 文件都会被自动编译为 "),e("code",[t._v("index.html")]),t._v("，对应的链接将被视为 "),e("code",[t._v("/")]),t._v("。")]),t._v(" "),e("p",[t._v("以如下的文件结构为例：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".\n├─ README.md\n├─ foo\n│  ├─ README.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ README.md\n   ├─ three.md\n   └─ four.md\n")])])]),e("p",[t._v("假设你现在在 "),e("code",[t._v("foo/one.md")]),t._v(" 中：")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[t._v("Home")]),t._v("]("),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("/")]),t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到根部的 README.md --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo")]),t._v("]("),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("/foo/")]),t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo 文件夹的 index.html --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[t._v("foo heading")]),t._v("]("),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("./#heading")]),t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 跳转到 foo/index.html 的特定标题位置 --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[t._v("bar - three")]),t._v("]("),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("../bar/three.md")]),t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 具体文件可以使用 .md 结尾（推荐） --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[t._v("bar - four")]),t._v("]("),e("span",{pre:!0,attrs:{class:"token url"}},[t._v("../bar/four.html")]),t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 也可以用 .html --\x3e")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);