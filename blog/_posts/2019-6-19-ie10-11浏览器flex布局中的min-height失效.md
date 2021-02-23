---
title: ie10-11浏览器flex布局中的min-height失效
date: 2019-06-19 15:08:10
categories: 前端 # 分类只能有1个
top: 1
tags:
- css
---
在ie10-11浏览器中，弹性布局下的min-height存在失效的问题，导致子元素使用的flex-grow失效
<!-- more -->
在容器外部包裹一层容器可以解决该问题。

```css
.wrapper {
    display: flex;
    flex-direction: column;
}
.parent {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 100px);
}
.child {
    flex: 1;
    background: #00f;
}
```

```html
<div class="wrapper">
    <div class="parent">
        <div class="child"></div>
    </div>
</div>
```
