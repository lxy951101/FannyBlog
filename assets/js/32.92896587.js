(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{530:function(s,t,_){"use strict";_.r(t);var e=_(11),i=Object(e.a)({},(function(){var s=this,t=s.$createElement,_=s._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("p",[_("em",[s._v("前端安全性问题")]),s._v("\nXSS 与 CSRF\n")]),s._v(" "),_("h1",{attrs:{id:"_1-xss-跨站请求攻击"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-xss-跨站请求攻击"}},[s._v("#")]),s._v(" 1.  XSS 跨站请求攻击")]),s._v(" "),_("p",[s._v("跨站脚本（Cross-site scripting，通常简称为XSS）是一种网站应用程序的安全漏洞攻击，是代码注入的一种。它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。这类攻击通常包含了HTML以及用户端脚本语言。")]),s._v(" "),_("ul",[_("li",[s._v("在博客里可以写文章，同时偷偷插入一段"),_("code",[s._v("<script\\>")]),s._v("代码。")]),s._v(" "),_("li",[s._v("发布博客，有人查看博客内容")]),s._v(" "),_("li",[s._v("打开博客时，就会执行插入的js攻击代码")]),s._v(" "),_("li",[s._v("在攻击代码中，获取cookie(其中可能包含敏感信息)，发送到攻击者的服务+ 器，攻击者就得到了博客阅读者的信息。")])]),s._v(" "),_("h1",{attrs:{id:"_2-csrf-跨站请求伪造"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-csrf-跨站请求伪造"}},[s._v("#")]),s._v(" 2.  CSRF 跨站请求伪造")]),s._v(" "),_("p",[s._v("跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。")]),s._v(" "),_("ul",[_("li",[s._v("你已经登陆了购物网站，正在浏览商品")]),s._v(" "),_("li",[s._v("该网站的付费接口是xxx.com/pay?id=100，但是没有任何验证")]),s._v(" "),_("li",[s._v("然后你收到一封邮件，隐藏着"),_("code",[s._v('<img src="是xxx.com/pay?id=100"\\>')])]),s._v(" "),_("li",[s._v("你查看邮件的时候已经悄悄付费购买了")])])])}),[],!1,null,null,null);t.default=i.exports}}]);