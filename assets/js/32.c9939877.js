(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{442:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"几种渲染方式比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#几种渲染方式比较"}},[t._v("#")]),t._v(" 几种渲染方式比较")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("SSG（Static Site Generation 静态站点生成）：")]),t._v(" 在构建时生成页面的静态 HTML 文件，并将其预先存储在服务器上。这样，当用户请求页面时，服务器可以立即提供预先生成的 HTML 内容，而无需动态地生成页面。SSG 可以大大提高网站的性能和加载速度，并且非常适用于内容不经常更改的静态页面。在 Next.js 中，可以通过 "),s("code",[t._v("getStaticProps")]),t._v(" 函数实现静态站点生成。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("SSR（Server-Side Rendering 服务器端渲染）：")]),t._v(" 每次用户请求页面时，服务器都会动态地生成页面的 HTML 内容，并将其发送给客户端。这种方式可以确保每次用户访问页面时都能获取最新的内容，并且有助于提高页面的首次加载性能和 SEO。在 Next.js 中，可以通过 "),s("code",[t._v("getServerSideProps")]),t._v(" 函数实现服务器端渲染。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("ISR（Incremental Static Regeneration 增量静态再生）：")]),t._v(" 在构建时生成页面的静态 HTML 文件，但允许在后续的请求中，根据需要动态地重新生成和更新页面内容。这种方式结合了 SSG 和 SSR 的优点，既可以提供快速的静态页面加载，又可以在需要时动态地更新页面内容。在 Next.js 中，可以通过 "),s("code",[t._v("getStaticProps")]),t._v(" 函数结合 "),s("code",[t._v("revalidate")]),t._v(" 选项来实现增量静态再生。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("CSR（Client-Side Rendering 客户端渲染）：")]),t._v(" 页面的 HTML 内容由客户端的 JavaScript 动态生成和渲染。当用户访问页面时，浏览器会下载并执行 JavaScript 代码，并使用 JavaScript 操作 DOM 元素来渲染页面。这种方式适用于需要实现复杂交互和动态内容更新的应用程序。在 Next.js 中，页面可以在客户端渲染，而无需使用 "),s("code",[t._v("getStaticProps")]),t._v(" 或 "),s("code",[t._v("getServerSideProps")]),t._v(" 函数。")])])]),t._v(" "),s("h2",{attrs:{id:"ssg-静态站点生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssg-静态站点生成"}},[t._v("#")]),t._v(" SSG（静态站点生成）")]),t._v(" "),s("blockquote",[s("p",[t._v("它在构建时生成整个页面，并在每个请求间重用相同的 HTML。这意味着页面在构建时就已经准备好，不需要在每个请求时动态生成内容，因此具有非常高的性能和稳定性。")])]),t._v(" "),s("h3",{attrs:{id:"实现步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤"}},[t._v("#")]),t._v(" 实现步骤")]),t._v(" "),s("ol",[s("li",[t._v("使用 getStaticProps 函数获取数据：\n在页面组件中，导出一个异步函数 getStaticProps，该函数会在构建时调用，用于获取页面所需的数据。这个函数应该返回一个包含页面数据的对象，并且必须是异步的。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStaticProps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在此处获取页面数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取数据的逻辑")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("2.将数据传递给页面组件：\ngetStaticProps 函数返回的数据将作为 props 传递给页面组件，在组件中可以直接使用。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MyPage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在页面组件中使用获取到的数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" MyPage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("如果每个页面都使用SSG会出现什么问题呢？")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("数据时效性问题： 静态生成的页面在构建时预先生成，因此页面中包含的数据可能在用户访问时已经过期。这可能会导致用户看到过时的内容。可以通过定期重新构建页面来解决此问题，或者在页面中使用客户端渲染（CSR）来获取动态数据。")])]),t._v(" "),s("li",[s("p",[t._v("大量数据问题： 如果静态生成的页面包含大量动态数据或需要大量计算的内容，可能会导致构建时间过长或生成的页面文件过大，影响性能和用户体验。在这种情况下，需要考虑优化数据获取和页面生成的方式，或者使用其他渲染方式。")])]),t._v(" "),s("li",[s("p",[t._v("页面更新问题： 当网站内容更新时，需要重新构建整个页面以更新静态文件。如果网站内容更新频繁，可能需要频繁地重新构建页面，这会增加服务器负担和构建时间。")])]),t._v(" "),s("li",[s("p",[t._v("动态路由问题： 对于具有动态路由的页面，如带有参数的页面，静态生成可能需要为每个可能的参数组合生成静态页面，这会导致构建时间增加和生成的页面数量增加。")])]),t._v(" "),s("li",[s("p",[t._v("安全性问题： 如果页面包含敏感信息或需要动态权限验证，静态生成的页面可能无法提供足够的安全性保障。在这种情况下，需要考虑使用服务器端渲染（SSR）或客户端渲染（CSR）来处理敏感数据或动态权限验证。")])])]),t._v(" "),s("h2",{attrs:{id:"isr-增量静态再生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isr-增量静态再生"}},[t._v("#")]),t._v(" ISR（增量静态再生）")]),t._v(" "),s("blockquote",[s("p",[t._v("结合了静态生成（SSG）和服务器端渲染（SSR）的优点，用于处理动态数据的更新和页面的重新生成。")])]),t._v(" "),s("h3",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("ol",[s("li",[t._v("首次请求： 当用户首次访问页面时，Next.js 将根据 ISR 配置在服务器上生成页面，并将生成的静态页面提供给用户。")]),t._v(" "),s("li",[t._v("缓存页面： 生成的页面会被缓存起来，供后续的用户请求使用，从而提高页面的访问速度。")]),t._v(" "),s("li",[t._v("后续请求： 在页面过期之前，当有新的请求到达时，Next.js 会在后台异步重新生成页面，并将更新后的页面缓存起来，同时提供旧版本的页面给用户。这样，用户在访问页面时可以立即获得旧版本的页面内容，而后台则会异步更新页面内容。")]),t._v(" "),s("li",[t._v("页面更新： 当页面被更新时，Next.js 会再次触发页面的重新生成，并将更新后的页面内容缓存起来，从而保证后续用户访问页面时能够获得最新的内容。")])]),t._v(" "),s("h3",{attrs:{id:"实现步骤-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤-2"}},[t._v("#")]),t._v(" 实现步骤")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pages/index.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" GetStaticProps "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'next'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Home")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("首页"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ul"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("li"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ul"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("getStaticProps")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("GetStaticProps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模拟获取动态数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'文章1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'文章2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'文章3'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定页面过期之后重新生成的时间间隔（单位：秒）")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("revalidate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每隔60秒重新生成页面")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("我们在首页组件中获取了动态数据 data，并展示在页面上。")]),t._v(" "),s("ul",[s("li",[t._v("使用 getStaticProps 函数来获取页面所需的动态数据，并返回给页面。")]),t._v(" "),s("li",[t._v("在 getStaticProps 函数中设置了 revalidate 参数为 60，表示页面过期之后每隔 60 秒重新生成页面。")]),t._v(" "),s("li",[t._v("当用户首次访问页面时，Next.js 会在服务器上生成页面，并将页面缓存起来。过期之后，Next.js 会在后台异步重新生成页面，并将更新后的页面缓存起来，同时提供旧版本的页面给用户。")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("revalidate")]),t._v(" 参数的作用是指定了页面重新生成的时间间隔。在指定的时间间隔内，即使有新的请求访问了这个页面，Next.js 也会返回之前生成的静态页面，而不会重新生成新的页面。只有在过了指定的时间间隔后，才会在后台重新生成页面，并在下一次的访问中返回更新后的页面。")])]),t._v(" "),s("h2",{attrs:{id:"ssr-服务器渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssr-服务器渲染"}},[t._v("#")]),t._v(" SSR（服务器渲染）")]),t._v(" "),s("blockquote",[s("p",[t._v("将页面的 HTML 内容在服务器端生成并发送给客户端的渲染方式。与传统的客户端渲染（CSR）相比，SSR 的主要区别在于页面的 HTML 内容是在服务器端动态生成的，而不是在客户端浏览器中通过 JavaScript 动态生成的。")])]),t._v(" "),s("h3",{attrs:{id:"原理-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理-2"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[t._v("1.服务器端生成页面： 当用户发起请求访问网站时，服务器端接收到请求，根据请求的 URL 和参数动态生成页面的 HTML 内容。这个过程可以涉及到从数据库或其他数据源获取数据，并将数据与页面模板结合生成完整的 HTML 页面。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("返回 HTML 内容： 生成好的 HTML 内容被发送到客户端浏览器，客户端浏览器接收到 HTML 后直接进行解析和渲染，用户可以立即看到页面的内容。")])]),t._v(" "),s("li",[s("p",[t._v("激活客户端交互： 一旦页面加载完成，客户端浏览器会激活 JavaScript 代码，使页面具有交互性。这意味着一些功能，如页面的事件处理、动态数据加载等，可以在客户端浏览器中进行，而不需要重新加载整个页面。")])])]),t._v(" "),s("h3",{attrs:{id:"实现步骤-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤-3"}},[t._v("#")]),t._v(" 实现步骤")]),t._v(" "),s("p",[t._v("在 Next.js 中实现 SSR 非常简单，因为 Next.js 默认支持 SSR。只需在页面组件中导出 getServerSideProps 函数即可实现 SSR。这个函数会在每次请求时在服务器端执行，可以用来获取页面所需的数据，并将数据传递给页面组件。页面组件会接收到这些数据作为 props，并将其用于渲染页面内容。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pages/index.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" GetServerSideProps "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'next'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("HomePage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("getServerSideProps")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("GetServerSideProps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从外部 API 获取数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchDataFromExternalAPI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将数据作为 props 传递给页面组件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" HomePage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"预渲染的好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预渲染的好处"}},[t._v("#")]),t._v(" 预渲染的好处")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("更快的加载速度：")]),t._v(" 预渲染可以将页面的 HTML 内容提前生成好，并存储在服务器上或者 CDN 上。这样，当用户访问页面时，可以直接获取到静态 HTML，而无需等待服务器动态生成页面，从而大大缩短了页面加载时间。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("更好的 SEO：")]),t._v(" 预渲染可以生成完整的静态 HTML 页面，包括内容、链接等信息，这样搜索引擎可以更容易地抓取和索引页面内容，提高网站的搜索引擎排名。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("更低的服务器压力：")]),t._v(" 预渲染可以在构建时生成静态 HTML 页面，不需要在用户请求时动态生成页面内容，减少了服务器的负载，降低了服务器的压力。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("更好的用户体验：")]),t._v(" 预渲染可以确保用户在访问页面时能够立即看到内容，而不需要等待页面加载完成。这样可以提升用户体验，降低用户的流失率。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);