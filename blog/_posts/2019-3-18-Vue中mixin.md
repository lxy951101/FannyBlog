---
title: Vue中mixin
date: 2019-03-18 14:11:11
categories: 前端 # 分类只能有1个
top: 1
tags: 
- Vue
- JS
---
*mixin是为了让可复用的功能灵活的混入到当前组件中，混合的对象可以包含任意组件选项（生命周期，指令之类等等）, mixin翻译过来叫混合,高级的词汇可以叫插件入侵*
<!-- more -->
# 1. 简单使用
```
// 定义一个混合对象
const myMixin = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('JS 每日一题')
        }
    }
}
// 定义一个使用混合对象的组件
const Component = Vue.extend({
    mixins: [myMixin]
})
var component = new Component() // JS 每日一题
```
# 2. 选项合并(优先级)

当组件和混合对象含有同名选项时,选项会按照规则进行合并

代码理解
```
const mixin = {
    created: function () {
        console.log('混合对象的钩子被调用')
    }
}
new Vue({
    mixins: [mixin],
    created: function() {
        console.log('组件钩子被调用')
    }
})
// => "混合对象的钩子被调用"
// => "组件钩子被调用"
// 从上面的代码我们可以看出来混合对象的生命周期会被先调用
```

值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对,Vue.extend() 也使用同样的策略进行合并。

代码理解
```
const mixin = {
    methods: {
        foo: function () {
            console.log('foo')
        },
        conflicting: function () {
            console.log('from mixin')
        }
    }
}
const vm = new Vue({
    mixins: [mixin],
    methods: {
        bar: function () {
            console.log('bar')
        },
        conflicting: function () {
            console.log('from self')
        }
    }
})
vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from self"
```

# 3. 全局混合

也可以全局注册混合对象。注意使用！ 一旦使用全局混合对象，将会影响到 所有 之后创建的 Vue 实例

```
// 为自定义的选项 'myOption' 注入一个处理器
Vue.mixin({
    created: function () {
        var myOption = this.$options.myOption
        if (myOption) {
            console.log(myOption)
        }
    }
})
new Vue({
    myOption: 'hello!'
})
// => "hello!"
```

再了解了基本用法后再简单过一遍源码加深印象
源码地址 https://github.com/vuejs/vue/blob/52719ccab8fccffbdf497b96d3731dc86f04c1ce/src/core/util/options.js#L365

# 4. 总结

mixin就是采取一定规则将一个功能(组件)的属性混合到另一个组件或者全局当中，优点就是灵活度高，耦合度低，便于维护
