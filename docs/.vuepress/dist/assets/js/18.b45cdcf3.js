(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{431:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("p",[t._v("事件循环是指浏览器处理各种事件（如用户输入、网络请求、定时器等）的机制。它是浏览器中的一个重要组成部分，负责管理和调度各种异步任务的执行顺序。")]),t._v(" "),s("h2",{attrs:{id:"组成部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组成部分"}},[t._v("#")]),t._v(" 组成部分")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("主线程（Main Thread）")]),t._v("：负责执行 JavaScript 代码、处理 DOM 操作和渲染等任务。所有的 JavaScript 代码都是在主线程上执行的。")]),t._v(" "),s("li",[s("strong",[t._v("任务队列（Task Queue）")]),t._v("：用于存放各种异步任务的回调函数。主线程执行完同步任务后，会不断地从任务队列中取出任务执行，直到任务队列为空。")]),t._v(" "),s("li",[s("strong",[t._v("微任务队列（Microtask Queue）")]),t._v("：用于存放微任务，微任务队列的优先级高于任务队列，在主线程执行完当前任务后，会首先清空微任务队列中的任务。\n"),s("ul",[s("li",[t._v("MutationObserver")]),t._v(" "),s("li",[t._v("Promise 的 "),s("code",[t._v("then()")]),t._v(" 或 "),s("code",[t._v("catch()")])]),t._v(" "),s("li",[t._v("V8 引擎的垃圾回收过程")]),t._v(" "),s("li",[t._v("Node.js 的 "),s("code",[t._v("process.nextTick")])])])]),t._v(" "),s("li",[s("strong",[t._v("宏任务队列（Macro Task Queue）")]),t._v("：存放在任务队列（Task Queue）中，宏任务队列的优先级低于微任务队列。\n"),s("ul",[s("li",[t._v("script")]),t._v(" "),s("li",[t._v("setTimeout")]),t._v(" "),s("li",[t._v("setInterval")]),t._v(" "),s("li",[t._v("setImmediate")]),t._v(" "),s("li",[t._v("I/O")]),t._v(" "),s("li",[t._v("UI 渲染")])])])]),t._v(" "),s("h2",{attrs:{id:"事件循环执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环执行顺序"}},[t._v("#")]),t._v(" 事件循环执行顺序")]),t._v(" "),s("ol",[s("li",[t._v("JavaScript 开始执行时，整个脚本作为一个宏任务执行，对于同步代码直接压入执行栈进行执行。")]),t._v(" "),s("li",[t._v("执行过程中，同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列。")]),t._v(" "),s("li",[t._v("当前宏任务执行完毕出队，然后检查微任务队列，如果存在微任务，则依次执行微任务，直到微任务队列为空。")]),t._v(" "),s("li",[t._v("执行浏览器 UI 渲染工作。")]),t._v(" "),s("li",[t._v("检查是否有 Web Worker 任务需要执行，如果有，则执行。")]),t._v(" "),s("li",[t._v("执行完当前轮次的宏任务后，回到步骤 2，依此循环，直到宏任务队列和微任务队列都为空。")])]),t._v(" "),s("blockquote",[s("p",[t._v("Web Worker 任务：在浏览器中运行的 JavaScript 脚本，可以在后台运行，独立于主线程用于执行一些耗时的计算或处理大量数据的任务，以提高页面的响应速度和性能。Web Worker 可以在不阻塞主线程的情况下执行，并且可以与主线程进行通信。它可以用于大量计算、大量数据处理、后台数据加载、长时间运行的任务等场景。")])]),t._v(" "),s("h2",{attrs:{id:"示例题解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例题解析"}},[t._v("#")]),t._v(" 示例题解析")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPromise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("first")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("ul",[s("li",[s("code",[t._v("console.log(1);")]),t._v("：同步任务，输出 1。")]),t._v(" "),s("li",[s("code",[t._v("async function first() { console.log(2); }")]),t._v("：定义了一个异步函数 "),s("code",[t._v("first")]),t._v("，但不会立即执行。")]),t._v(" "),s("li",[s("code",[t._v("setTimeout(() => { console.log(3); }, 0);")]),t._v("：通过 "),s("code",[t._v("setTimeout")]),t._v(" 注册了一个定时器，但因为时间设为 0，所以会被放入任务队列中，不会立即执行。")]),t._v(" "),s("li",[s("code",[t._v("Promise.resolve().then(() => { console.log(4); });")]),t._v("："),s("code",[t._v("Promise")]),t._v(" 的 "),s("code",[t._v("then")]),t._v(" 方法是微任务，会在当前任务执行完成后立即执行，输出 4。")]),t._v(" "),s("li",[s("code",[t._v("new Promise((resolve, reject) => { console.log(5); resolve(); }).then((res) => { console.log(6); });")]),t._v("：创建了一个 Promise 实例，因为 "),s("code",[t._v("Promise")]),t._v(" 的执行是立即的，所以会输出 5，而后面的 "),s("code",[t._v("then")]),t._v(" 方法是微任务，输出 6。")]),t._v(" "),s("li",[s("code",[t._v("first();")]),t._v("：调用异步函数 "),s("code",[t._v("first()")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("console.log(7);")]),t._v("：同步任务，输出 7。")])]),t._v(" "),s("h2",{attrs:{id:"注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),s("ol",[s("li",[t._v("如果"),s("code",[t._v("async")]),t._v("函数中没有await执行体，则相当于返回一个"),s("code",[t._v("Promise")]),t._v("实例，直接执行")]),t._v(" "),s("li",[t._v("如"),s("code",[t._v("async")]),t._v("函数体存在"),s("code",[t._v("await")]),t._v("执行体，先执行"),s("code",[t._v("await")]),t._v("里的异步函数，等待执行完后再执行回原来函数的后续操作，可以当作"),s("code",[t._v("await")]),t._v("后面的内容是放到了"),s("code",[t._v("Promise.then")]),t._v("的里面")]),t._v(" "),s("li",[s("code",[t._v("Promise")]),t._v("的状态一旦改变就无法改变")]),t._v(" "),s("li",[s("code",[t._v("async")]),t._v("函数中"),s("code",[t._v("await")]),t._v("的"),s("code",[t._v("new Promise")]),t._v("要是没有返回值的话则不执行后面的内容\n5."),s("code",[t._v("Promise.then")]),t._v("函数中的参数期待的是函数，如果不是函数的话会发生透传")])])])}),[],!1,null,null,null);s.default=e.exports}}]);