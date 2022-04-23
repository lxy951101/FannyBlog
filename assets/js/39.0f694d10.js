(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{542:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("em",[t._v("浏览器相关知识")])]),t._v(" "),a("h2",{attrs:{id:"一、cookie-session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、cookie-session"}},[t._v("#")]),t._v(" 一、Cookie Session")]),t._v(" "),a("h3",{attrs:{id:"cookie-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-简介"}},[t._v("#")]),t._v(" Cookie 简介")]),t._v(" "),a("p",[t._v("HTTP是一个无状态协议，每次http请求都是独立、无关的，默认不需要保留状态信息。")]),t._v(" "),a("p",[t._v("Cookie设计出来是为了弥补HTTP状态管理上不足的")]),t._v(" "),a("p",[t._v("HTTP为此引入Cookie。Cookie本质是浏览器里面存储的一个很小的文本文件，内部以键值对方式存储")]),t._v(" "),a("p",[t._v("同域名下发送请求，都会携带相同Cookie，服务器拿到Cookie进行解析，便能拿到客户端状态。服务端可以通过响应头中的 "),a("code",[t._v("Set-Cookie")]),t._v(" 字段来对客户端写入Cookie")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求头")]),t._v("\nCookie"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 响应头")]),t._v("\nSet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Cookie"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx\nSet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx\n")])])]),a("h3",{attrs:{id:"cookie-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie-属性"}},[t._v("#")]),t._v(" Cookie 属性")]),t._v(" "),a("h4",{attrs:{id:"生存周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生存周期"}},[t._v("#")]),t._v(" 生存周期")]),t._v(" "),a("p",[t._v("Cookie有效期可通过Expires和Max-Age两个属性来设置。")]),t._v(" "),a("ul",[a("li",[t._v("Expires 过期时间")]),t._v(" "),a("li",[t._v("Max-Age 时间间隔，单位是秒，从浏览器收到报文开始计算。若Cookie过期，则Cookie会被清除，并不会发送给服务端")])]),t._v(" "),a("p",[t._v("若Cookie过期，则这个Cookie会被清除，不发送给服务端")]),t._v(" "),a("h4",{attrs:{id:"作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),a("p",[t._v("关于作用域也有两个属性：")]),t._v(" "),a("p",[a("code",[t._v("Domain")]),t._v(" "),a("code",[t._v("path")])]),t._v(" "),a("p",[t._v("给Cookie绑定了域名和路径，在发送请求之前，发现域名或者路径和这两个属性不匹配，那么就不会带上Cookie。值得注意的是，对于路径来说,"),a("code",[t._v("/")]),t._v("表示域名下的任意路径都允许是哟经Cookie")]),t._v(" "),a("h4",{attrs:{id:"安全相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全相关"}},[t._v("#")]),t._v(" 安全相关")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果带上 "),a("code",[t._v("Secure")]),t._v("， 说明只能通过 HTTPS 传输 cookie。如果一个cookie被设置了Secure=true，那么这个cookie只能用https协议发送给服务器，用http协议是不发送的")])]),t._v(" "),a("li",[a("p",[t._v("如果cookie字段带上 "),a("code",[t._v("HttpOnly")]),t._v(",那么说明只能通过 HTTP 协议传输，不能通过JS访问，这也是预防XSS攻击的重要手段。")])]),t._v(" "),a("li",[a("p",[t._v("相应的，对于CSRF攻击的预防，也有 "),a("code",[t._v("SameSite")]),t._v(" 属性。SameSite可以设置为三个值，Strict、Lax和None。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Strict")]),t._v(" 模式下，浏览器完全禁止第三方请求携带的Cookie。比如请求baidu.com网站只能在baidu.com域名当中请求才能携带Cookie，在其他网站请求都不能。")]),t._v(" "),a("li",[a("code",[t._v("Lax")]),t._v(" 模式下就相对宽松一点，但是只能在get方法提交表单况或者a标签发送get请求的情况下可以携带Cookie，其他情况均不能。")]),t._v(" "),a("li",[a("code",[t._v("None")]),t._v(" 模式下，也就是默认模式，请求会自动带上Cookie")])])])]),t._v(" "),a("h4",{attrs:{id:"cookie的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie的缺点"}},[t._v("#")]),t._v(" Cookie的缺点")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("容量缺陷")]),t._v(" Cookie的体积上限只有 "),a("code",[t._v("4KB")]),t._v("，只能用来存储少量信息。")]),t._v(" "),a("li",[a("code",[t._v("性能缺陷")]),t._v(" Cookie紧跟域名，不管域名下面的某一个地址需不需要这个Cookie，请求都会携带上完整的Cookie")]),t._v(" "),a("li",[a("code",[t._v("安全缺陷")]),t._v(" 由于Cookie以纯文本的形式在浏览器和服务器中传递，很容易被非法用户截获，然后进行一系列的篡改，在Cookie有效期内重新发送给服务器，这是相当危险的。另外，在HttpOnly为false的情况下，Cookie信息能直接通过JS脚本获取")])]),t._v(" "),a("h3",{attrs:{id:"跨域请求传递cookie问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求传递cookie问题"}},[t._v("#")]),t._v(" 跨域请求传递cookie问题")]),t._v(" "),a("h4",{attrs:{id:"_1、服务器需要设置-access-control-allow-origin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、服务器需要设置-access-control-allow-origin"}},[t._v("#")]),t._v(" 1、服务器需要设置 Access-Control-Allow-Origin")]),t._v(" "),a("p",[t._v("该字段表明服务端接收哪些域名的跨域请求，如果值为*号，表示接收任意域名的跨域请求")]),t._v(" "),a("p",[t._v("当需要传递cookie时，Access-Control-Allow-Origin 不能设置为*号，必须为具体的一个域名")]),t._v(" "),a("p",[t._v("服务端需要设置Access-Control-Allow-Credentials为true。表示服务端同意发送cookie")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tool "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./tool.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nhttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pathName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请求地址'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v("（pathName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/getMessage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// res.setHeader('Access-Control-Allow-Origin', '*')")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:3000'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Credentials'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"_2、客户端需要设置ajax请求属性withcredentials-true-让ajax请求都带上cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、客户端需要设置ajax请求属性withcredentials-true-让ajax请求都带上cookie"}},[t._v("#")]),t._v(" 2、客户端需要设置Ajax请求属性withCredentials=true，让Ajax请求都带上Cookie")]),t._v(" "),a("p",[t._v("对于XMLHttpRequest的Ajax请求")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withCredentials "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 携带跨域Cookie")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("对于JQuery的Ajax请求")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  xhrFields"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    withCredentials"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 携带跨域Cookie")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  processDta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("对于axios的Ajax请求")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("withCredentials "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 让ajax携带cookie")]),t._v("\n")])])]),a("p",[t._v("当使用fetch发送请求时，需要设置 credentials 为 include")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080/getMessage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  credentials"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'include'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),a("p",[t._v("免广告")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app-installed=1;expires='")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toGMTString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setYear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2028")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("正则获取Cookie")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCookie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var res = document.cookie.match(/bcsrf_token=([^;]*)\\b/);")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\b'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=([^;]*)\\\\b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("二、Web Storage")]),t._v(" "),a("p",[a("code",[t._v("web storage")]),t._v(" 的出现是为了克服 "),a("code",[t._v("Cookie")]),t._v(" 的限制（"),a("code",[t._v("占用带宽")]),t._v(" "),a("code",[t._v("存储小")]),t._v(") 它的主要目标是：")]),t._v(" "),a("ul",[a("li",[t._v("提供一种在Cookie之外存储会话数据的途径")]),t._v(" "),a("li",[t._v("提供一种存储大量可以跨会话存在的数据的机制")])]),t._v(" "),a("p",[t._v("在讲它们之前我们解释一个概念：文统一资源定位器（URL）")]),t._v(" "),a("p",[t._v("URL 通过协议，主机名，端口来确定的，用来定位万维网上的文档")]),t._v(" "),a("p",[t._v("语法规则：比如 [http://www.taobao.com.cn/html/index.asp]")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("scheme://host.domain:port/path/filename\n")])])]),a("ul",[a("li",[a("code",[t._v("scheme")]),t._v(" 定义因特网服务的类型。最常见的类型是 http")]),t._v(" "),a("li",[a("code",[t._v("host")]),t._v(" 定义域主机（http的默认主机时www)")]),t._v(" "),a("li",[a("code",[t._v("domain")]),t._v(" 定义因特网域名，比如 taobao.com.cn")]),t._v(" "),a("li",[a("code",[t._v("post")]),t._v(" 定义主机上的端口号（http的默认端口号是80）")]),t._v(" "),a("li",[a("code",[t._v("path")]),t._v(" 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）")]),t._v(" "),a("li",[a("code",[t._v("filename")]),t._v(" 定义文档/资源的名称")])]),t._v(" "),a("p",[t._v("⚠️注意："),a("code",[t._v("URL")]),t._v(" 的英文全称是 "),a("code",[t._v("Uniform Resource Locator")]),t._v(" 中文也译为 "),a("code",[t._v("统一资源定位符")])]),t._v(" "),a("h3",{attrs:{id:"storage-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-方法"}},[t._v("#")]),t._v(" Storage 方法")]),t._v(" "),a("p",[t._v("|方法名|描述|\n|||\n|setItem(name, value)|为指定的name设置一个对应的值|\n|getItem(name)|根据指定的name获取对应的值|\n|key(index)|获取index位置处的值名字|\n|removeItem(name)|移除指定的name对应的值|")]),t._v(" "),a("h3",{attrs:{id:"storage事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage事件"}},[t._v("#")]),t._v(" Storage事件")]),t._v(" "),a("p",[t._v("对Storage对象进行任何修改，都会触发storage事件。该事件的event对象有以下属性")]),t._v(" "),a("p",[t._v("|属性名|描述|\n|||\n|domain|发生变化的存储空间域名|\n|key|设置或删除键名|\n|newValue|如果设置值，则是新值，如果删除值，则是null|\n|oldValue|值被修改前的值|")]),t._v(" "),a("h2",{attrs:{id:"web-storage有两种实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-storage有两种实现"}},[t._v("#")]),t._v(" Web Storage有两种实现")]),t._v(" "),a("ul",[a("li",[t._v("localStorage")]),t._v(" "),a("li",[t._v("sessionStorage")])]),t._v(" "),a("h3",{attrs:{id:"localstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[t._v("#")]),t._v(" localStorage")]),t._v(" "),a("p",[a("code",[t._v("localStorage")]),t._v(" 有一点跟Cookie一样，就是针对一个域名，即在同一域名下，会存储相同的一段localStorage。不过它相对Cookie还是有相当多的区别的。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("容量")]),t._v(" localStorage 的容量上限为5M，相比于Cookie的4K大大增加。当然这个5M是针对一个域名的，因此对于一个域名是持久存储的。")]),t._v(" "),a("li",[a("code",[t._v("只存在客户端")]),t._v(" 默认不参与与服务器的通信。这样能很好地避免Cookie带来的性能问题和安全问题。")]),t._v(" "),a("li",[a("code",[t._v("接口封装")]),t._v(" 通过localStorage暴露在全局，并通过它的setItem和getItem等方法进行操作，非常方便。")]),t._v(" "),a("li",[a("code",[t._v("应用场景")]),t._v(" 利用localStorage的较大容量和持久特性，可以利用localStorage存储一些内容稳定的资源，比如官网logo，存储Base64格式的图片资源，因此利用localStorage")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sanyuan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sanyuan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'info'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("接着进入相同域名可以拿到相应的值")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'info'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("从这里看出，localStorage其实存储的是字符串")]),t._v(" "),a("h3",{attrs:{id:"sessionstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[t._v("#")]),t._v(" sessionStorage")]),t._v(" "),a("p",[t._v("sessionStorage 和 localStorage在以下方面一致")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("容量")]),t._v(" 容量上限也为5M")]),t._v(" "),a("li",[a("code",[t._v("只存在客户端")]),t._v(" 默认不参与服务器的通信")]),t._v(" "),a("li",[a("code",[t._v("接口封装")]),t._v(" 除了sessionStorage名字有所变化，存储方式、操作方式均和localStorage一样")]),t._v(" "),a("li",[a("code",[t._v("应用场景")]),t._v(" 可以用它对表单信息进行维护，将表单信息存储在里面，可以保证页面即使刷新也不会让之前的表单信息丢失。可以用它来存储本次浏览记录。如果关闭页面后不需要这些记录，用sessionStorage就再合适不过了。事实上微博就采取了这样的存储方式。")]),t._v(" "),a("li",[a("code",[t._v("区别")]),t._v(" 但sessionStorage和localStorage有一个本质的区别，那就是前者只是会话级别的存储，并不是持久化的存储。会话结束，也就是页面关闭，这部分sessionStorage就不复存在了。")])]),t._v(" "),a("h2",{attrs:{id:"三、-indexeddb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、-indexeddb"}},[t._v("#")]),t._v(" 三、 IndexedDB")]),t._v(" "),a("p",[a("code",[t._v("IndexDB")]),t._v(" 是运行在浏览器中的 "),a("code",[t._v("非关系型数据库")]),t._v(" ,本质上是数据库，绝不是和刚才WebStorage的 "),a("code",[t._v("5M")]),t._v(" 一个量级，理论上这个容量是没有上限的。")]),t._v(" "),a("p",[t._v("关于它的使用，本文侧重原理，而且 MDN 上的教程文档已经非常详尽，这里就不做赘述了，感兴趣可以看一下 使用文档。")]),t._v(" "),a("p",[t._v("接着我们来分析一下IndexDB的一些重要特性，除了拥有数据库本身的特性，比如支持事务，存储二进制数据，还有这样一些特性需要格外注意：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("键值对存储")]),t._v(" 内部采用对象仓库存放数据，在这个对象仓库中数据采用键值对的方式来存储。")]),t._v(" "),a("li",[a("code",[t._v("异步操作")]),t._v(" 数据库的读写属于 I/O 操作, 浏览器中对异步 I/O 提供了支持。")]),t._v(" "),a("li",[a("code",[t._v("受同源策略限制")]),t._v(" 即无法访问跨域的数据库。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);