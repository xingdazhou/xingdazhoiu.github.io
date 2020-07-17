(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{420:function(s,t,n){"use strict";n.r(t);var a=n(42),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"事件循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[s._v("#")]),s._v(" 事件循环")]),s._v(" "),n("p",[s._v("异步：某些函数不会立即执行，需要等到某个时机成熟后才会执行，该函数叫做异步函数\nnode.js选择js作为其开发语言，主要是js支持异步，java都不支持异步")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出 1 3 2 ")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h1",{attrs:{id:"浏览器的线程（五个线程）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的线程（五个线程）"}},[s._v("#")]),s._v(" 浏览器的线程（五个线程）")]),s._v(" "),n("p",[n("strong",[s._v("1、JS执行引擎：负责执行js代码（单线程，平时看到的）")]),s._v(" "),n("strong",[s._v("2、渲染线程：负责渲染页面")]),s._v(" "),n("strong",[s._v("3、计时器线程：负责计时")]),s._v(" "),n("strong",[s._v("4、事件监听线程：负责监听事件")]),s._v(" "),n("strong",[s._v("5、http网络线程：负责网络通信")])]),s._v(" "),n("p",[n("strong",[s._v("事件队列")]),s._v("：一块内存空间，用于存放执行时机到达的异步函数。"),n("strong",[s._v("当js引擎空闲（执行栈没有可执行的上下文）")]),s._v("，它才会从事件队列中拿出第一个函数来执行\n（执行过程是这样的，首先js按执行栈顺序执行代码，遇到异步代码就放到宿主环境中，等执行时机到达的异步函数就会被放到事件对列，等到js把同步代码都执行完了之后，执行栈里面没有可执行的函数等，才会去把事件对列里面的函数给执行了。这就构成了事件循环）")]),s._v(" "),n("p",[s._v("事件循环:是指函数在执行栈，宿主线程，事件队列中的循环移动（执行）")]),s._v(" "),n("p",[s._v("js在执行一个函数时，当触发了某个事件时，这不会打断这个函数的执行，它会等到执行栈空了才会去执行这个函数。")])])}),[],!1,null,null,null);t.default=e.exports}}]);