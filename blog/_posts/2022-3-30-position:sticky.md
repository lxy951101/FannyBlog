---
title: "position-sticky"
date: 2022-3-30
categories: 前端 # 分类只能有1个
top: 1
tags: # 标签可以有多个
- CSS
- 学习笔记
---

sticky是相对定位的延伸和固定定位没有关系

|布局|relative|sticky|
|---|---|---|
|偏移时是否保留原始位置|支持|支持|
|是否创建了新的绝对定位包含块|支持|支持|
|是否支持z-index改变元素层叠顺序|支持|支持|
|偏移计算元素|父元素|层级最近的可滚动元素|
|偏移计算规则|简单|复杂，设计多个粘性定位专有概念|
|重叠表现|相对定位元素彼此独立，表现为堆叠|特定结构下，重叠并不堆叠，A会推开B|

如果黏性定位的某个祖先元素的overflow属性值不是visible，那么窗体滚动就不会有黏性定位效果

黏性定位中有一个“流盒”（flow box）的概念，指的是黏性定位元素最近的可滚动元素的尺寸盒子，如果没有可滚动元素，则表示浏览器视窗盒子。

黏性定位中还有一个名为“黏性约束矩形”的概念，指的是黏性定位元素的包含块（通常是父元素）在文档流中呈现的矩形区域和流盒的4个边缘在应用黏性定位元素的left、top、right和 bottom属性的偏移计算值后的新矩形的交集。由于滚动的时候流盒不变，而黏性定位元素的包含块跟着滚动，因此黏性约束矩形随着滚动的进行是实时变化的。假设我们的黏性定位元素只设置了top属性值，则黏性定位元素碰到黏性约束矩形的顶部时就开始向下移动，直到它完全被包含在黏性约束矩形中。

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/figgerdancer/embed/XWVaMLr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/figgerdancer/pen/XWVaMLr">
  Untitled</a> by FiggerDancer (<a href="https://codepen.io/figgerdancer">@figgerdancer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

当我们的黏性定位元素分布在不同容器的时候，就会有多个不同的黏性约束矩形。这些黏性约束矩形正好一个一个排列得很整齐，于是在视觉上就表现为上一个黏性定位元素被滚走，下一个黏性定位元素正好开始有黏性效果。当我们的黏性定位元素都在一个容器里的时候，大家都共用一个巨大的黏性约束矩形，因此，滚动的时候元素会一个一个不断往上重叠。
