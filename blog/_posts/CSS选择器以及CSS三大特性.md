---
title: CSS基本功
date: 2019-04-01 10:42:15
categories: 前端 # 分类只能有1个
top: 2
tags:
- css
---
+ *1. CSS选择器*
+ *2. CSS三大特性*
+ *3. BFC机制*
+ *4. 盒模型*
+ *5. CSS模块化开发（封装）；SCSS和LESS的使用*
+ *6. 屏幕适配以及页面自适应*
+ *7. CSS3中新增的属性*
<!-- more -->
# 1. CSS 选择器
在 CSS 中，选择器是一种模式，用于选择需要添加样式的元素。
HTML页面中的元素就是通过CSS选择器进行控制的。

选择器类型|语法|描述|示例|
---|:--:|:--:|:--:|---
标签选择器|标签名称{属性:属性值;...}|| p{color: skyblue;font-size: 16px;} |
id选择器|#ID名称{属性:属性值;...}|ID选择器命名需要有唯一性|#header{color: skyblue;font-size: 16px;}|
类选择器|.类别名称{属性:属性值;...}||.header{color: skyblue;font-size: 16px;}|
交集选择器|选择器1选择器2{属性:属性值;...}|由多个选择器构成，多个选择器之间不能有空格|header.header{color: skyblue;font-size: 16px;}|
并集选择器|选择器1,选择器2{属性:属性值;...}|由多个选择器构成，多个选择器之间以,隔开|.header,h3{color: skyblue;font-size: 16px;}|
后代选择器|选择器1 选择器2 ...{属性:属性值;...}|后代选择器用来选择元素或元素组的后代，其写法就是把外层标记写在前面，内层标记写在后面，中间用空格分隔。当标记发生嵌套时，内层标记就成为外层标记的后代。|.header p a{color: skyblue;font-size: 16px;}|
子元素选择器|父元素>子元素{属性:属性值;...}||.header>p{color: skyblue;font-size: 16px;}|
属性选择器|\[attr\]{属性:属性值;...}|用于选取带有指定属性的元素|[word]|
属性选择器|\[attr = value\]{属性:属性值;...}|用于选取带有指定属性值的元素|[word = hello]|
属性选择器|\[attr ~= value\]{属性:属性值;...}|用于选取属性值中包含指定词汇的元素|[word ~= hello]|
属性选择器|\[attribute ｜= value\]{属性:属性值;...}|用于选取带有指定值value-开头的或者值为value的元素|[word ｜= hello] // ｜在表格中无法显示故使用了其他符号代替，注意替换|
属性选择器|\[attr ^= value\]{属性:属性值;...}|用于选取属性值以value开头的元素|[word ^= hello]|
属性选择器|\[attr $= value\]{属性:属性值;...}|用于选取属性值以value结尾的元素|[word $= hello]|
属性选择器|\[attr *= value\]{属性:属性值;...}|用于选取属性值中包含value的元素|[word *= hello]|
伪类选择器|:link{属性:属性值;...}|未被访问的链接|a:link{ color: #ff6600 }|
伪类选择器|:visited{属性:属性值;...}|已被访问的链接|a:visited{ color: #ff6600 }|
伪类选择器|:hover{属性:属性值;...}|选择器被用来指定当鼠标指针移动到元素上时元素所使用的样式|a:hover{ color: #ff6600 }|
伪类选择器|:active{属性:属性值;...}|选择器被用来指定元素被激活时使用的样式|a:active{ color: #ff6600 }|
伪类选择器|:focus{属性:属性值;...}|选择器被用来指定元素获得光标聚焦点使用的样式，在文本框控件获得聚焦点并进行文字输入时使用|a:focus{ color: #ff6600 }|
伪类选择器|:enabled{属性:属性值;...}|选择器被用来指定当元素处于可用状态时的样式|a:enabled{ color: #ff6600 }|
伪类选择器|:disabled{属性:属性值;...}|选择器被用来指定当元素处于不可用状态时的样式|a:disabled{ color: #ff6600 }|
伪类选择器|:read-only{属性:属性值;...}|选择器被用来指定当元素处于只读状态时的样式|a:read-only{ color: #ff6600 }|
伪类选择器|:write-only{属性:属性值;...}|选择器被用来指定当元素处于非只读状态时的样式|a:write-only{ color: #ff6600 }|
伪类选择器|:checked{属性:属性值;...}|伪类选择器用来指定当表单中的radio单选框或者是checkbox复选框处于选取状态时的样式|a:checked{ color: #ff6600 }|
伪类选择器|:default{属性:属性值;...}|选择器用来指定当页面打开时默认处于选取状态的单选框或复选框的控件的样式|a:default{ color: #ff6600 }|
伪类选择器|:indeterminate{属性:属性值;...}|选择器用来指定当页面打开时，一组单选框中没有任何一个单选框被设定为选中状态时，整组单选框的样式|a:indeterminate{ color: #ff6600 }|
伪类选择器|:invalid{属性:属性值;...}|伪类选择器用来指定，当元素内容不能通过HTML5通过使用的元素的诸如requirde等属性所指定的检查或元素内容不符合元素规定的格式时的样式|a:invalid{ color: #ff6600 }|
伪类选择器|:valid{属性:属性值;...}|伪类选择器用来指定，当元素内容能通过HTML5通过使用的元素的诸如requirde等属性所指定的检查或元素内容符合元素规定的格式时的样式|a:valid{ color: #ff6600 }|
伪类选择器|:required{属性:属性值;...}|伪类选择器用来指定允许使用required属性，而且已经指定了required属性的input元素、select元素以及textarea元素的样式|a:required{ color: #ff6600 }|
伪类选择器|:optional{属性:属性值;...}|伪类选择器用来指定允许使用required属性，而且未指定了required属性的input元素、select元素以及textarea元素的样式|a:optional{ color: #ff6600 }|
伪类选择器|:in-range{属性:属性值;...}|伪类选择器用来指定当元素的有效值被限定在一段范围之内，且实际的输入值在该范围之内时的样式|a:in-range{ color: #ff6600 }|
伪类选择器|:out-of-range{属性:属性值;...}|伪类选择器用来指定当元素的有效值被限定在一段范围之内，但实际输入值在超过时使用的样式|a:out-of-range{ color: #ff6600 }|
伪元素选择器|:first-line{属性:属性值;...}|用于向某个元素中的第一行文字使用样式|div:first-line{ color: #ff6600 }|
伪元素选择器|:first-letter{属性:属性值;...}|用于向某个元素中的文字的首字母（欧美文字）或第一个字（中文或者是日文等汉字）使用样式|div:first-letter{ color: #ff6600 }|
伪元素选择器|:before{属性:属性值;...}|用于在某个元素之前插入一些内容|div:before{ color: #ff6600 }|
伪元素选择器|:after{属性:属性值;...}|用于在某个元素之后插入内容|div:after{ color: #ff6600 }|
伪元素选择器|:first-child{属性:属性值;...}|单独指定第一个子元素的的样式|div:first-child{ color: #ff6600 }|
伪元素选择器|:last-child{属性:属性值;...}|单独指定最后一个子元素的的样式|div:first-child{ color: #ff6600 }|
伪元素选择器|:nth-child(n){属性:属性值;...}|选择器匹配正数下来第 N 个子元素|div:nth-child(n){ color: #ff6600 }|
伪元素选择器|:nth-child(odd){属性:属性值;...}|选择器匹配正数下来第奇数个子元素|div:nth-child(odd){ color: #ff6600 }|
伪元素选择器|:nth-child(even){属性:属性值;...}|选择器匹配正数下来第偶数个子元素|div:nth-child(even){ color: #ff6600 }|
伪元素选择器|:nth-last-child(n){属性:属性值;...}|选择器匹配倒数数下来第 N 个子元素|div:nth-last-child(n){ color: #ff6600 }|
伪元素选择器|:nth-last-child(odd){属性:属性值;...}|选择器匹配倒数数下来第奇数个子元素|div:nth-last-child(odd){ color: #ff6600 }|
伪元素选择器|:nth-last-child(even){属性:属性值;...}|选择器匹配倒数下来第偶数个子元素|div:nth-last-child(even){ color: #ff6600 }|
伪元素选择器|:only-child{属性:属性值;...}|选择器，只对唯一的子元素起作用|div:only-child{ color: #ff6600 }|
伪元素选择器|:empty{属性:属性值;...}|内部无任何元素|div:empty{ background-color: #ff6600 }|
伪元素选择器|:first-of-type{属性:属性值;...}|找第一个同类型的|div:first-of-type{ color: #ff6600 }|
伪元素选择器|:last-of-type{属性:属性值;...}|找第一个同类型的|div:last-of-type{ color: #ff6600 }|
伪元素选择器|:nth-of-type(n){属性:属性值;...}|选择器所在父元素中同类型第n个位置匹配的子元素|div:nth-of-type(n){ color: #ff6600 }|
伪元素选择器|:nth-of-type(odd){属性:属性值;...}|选择器所在父元素中同类型奇数位置匹配的子元素|div:nth-of-type(odd){ color: #ff6600 }|
伪元素选择器|:nth-of-type(even){属性:属性值;...}|选择器所在父元素中同类型偶数位置匹配的子元素|div:nth-of-type(even){ color: #ff6600 }|
伪元素选择器|:nth-last-of-type(n){属性:属性值;...}|选择器所在父元素中同类型倒数第n个位置匹配的子元素|div:nth-last-of-type(n){ color: #ff6600 }|
伪元素选择器|:nth-last-of-type(odd){属性:属性值;...}|选择器所在父元素中同类型倒数奇数位置匹配的子元素|div:nth-last-of-type(odd){ color: #ff6600 }|
伪元素选择器|:nth-last-of-type(even){属性:属性值;...}|选择器所在父元素中同类型倒数偶数位置匹配的子元素|div:nth-last-of-type(even){ color: #ff6600 }|
伪元素选择器|:only-of-type{属性:属性值;...}|选择父元素只包含一个类型子元素的元素|div:only-of-type(even){ color: #ff6600 }|
兄弟选择器|<子元素>~<子元素之后的同级兄弟元素>{属性:属性值;...}|通用兄弟元素选择器：它是用来指定位于同一个父元素之中的某个元素之后的所有其他某个种类的兄弟元素所使用的样式|span~p{ background: skyblue; }|
通配符选择器（*）|*{属性:属性值;...}|全局选择器|*{margin:0;}|

# 2. CSS的三大特性
## 2.1 层叠性
浏览器解析CSS是从上至下，当CSS冲突时以最后定义的CSS为准。层叠性是指多种CSS样式的叠加
## 2.2 继承性
继承就是子标签继承了上级标签的CSS样式的属性。继承性是指书写CSS样式表时，子标记会继承父标记的某些样式
## 2.3 优先级
权重会叠加
+ 继承样式的权重为0
+ 行内样式优先
+ 权重相同时，就近原则：声明靠后优先级大
+ CSS定义了!important命令：最大优先级

样式|权值|
---|---|
内联样式|1000|
ID选择器|0100|
类、伪类、属性选择器|0010|
类型选择器、伪元素选择器|0001|
通配符、子选择器、相邻选择器(*>+)|0000|

!important>行内样式>ID选择器>伪类|类|属性选择>标签>伪对象>通配符>继承>浏览器默认属性

# 3. BFC机制
> 块格式化上下文（block formatting context） 是Web页面的可视CSS渲染的一部分。它是块盒子的布局发生及浮动体彼此交互的区域。
——[MDN - 块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

## 3.1 视觉格式化模型
> CSS 视觉格式化模型(visual formatting model)是用来处理文档并将它显示在视觉媒体上的机制。这是 CSS 的一个基础概念。 视觉格式化模型根据 CSS 盒模型为文档的每个元素生成 0，1 或多个盒。
盒尺寸：明确指定，受限或没有指定
盒类型：行内(inline), 行内级别(inline-level), 原子行内级别(atomic inline-level), 块(block)盒；
定位方案(positioning scheme): 常规流，浮动或绝对定位；
树中的其它元素: 它的子代与同代；
视口(viewport) 尺寸与位置；
内含图片的固定尺寸；
其它信息。
CSS 视觉格式化模型的一部分工作是从文档元素生成盒。生成的盒拥有不同类型，并对视觉格式化模型的处理产生影响。生成盒的类型取决于 CSS 属性 display 
—— [MDN - 视觉格式化模型](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model)

## 3.2 BFC特性&创建条件
特性：
> + 内部的Box会在垂直方向，从顶部开始一个接一个地放置
+ Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生叠加
+ 每个元素的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此
+ BFC的区域不会与float box叠加
+ BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然
+ 计算BFC的高度时，浮动元素也参与计算  
—— [CSS之BFC详解](http://www.html-js.com/article/1866)

创建条件：
> 块格式化上下文由以下之一创建：
+ 根元素或其它包含它的元素
+ 浮动 (元素的 float 不是 none)
+ 绝对定位的元素 (元素具有 position 为 absolute 或 fixed)
+ 内联块 inline-blocks (元素具有 display: inline-block)
+ 表格单元格 (元素具有 display: table-cell，HTML表格单元格默认属性)
+ 表格标题 (元素具有 display: table-caption, HTML表格标题默认属性)
+ 块元素具有overflow ，且值不是 visible

## 3.3 BFC 可以用来做什么？
代码示例：[Demo](https://github.com/FiggerDancer/BFC_Demo)
### 3.3.1 解决margin重叠的问题
根据BFC的特性，同一个BFC下的两个相邻的盒子会出现垂直margin重叠的问题，这个问题会影响我们对页面布局的控制，通常我们可以为其中一个盒子添加一个父元素，并使其触发BFC，即可解决这个问题
```
<!-- html -->
<div class="bfc">
    <p>js</p>
</div>
<p>js</p>
/* CSS */
p{
    margin: 30px;
    height: 30px;
    background: #ddd;
    text-align: center;
}
.bfc{
    /* overflow: auto; */
}
```

### 3.3.2 浮动带来的布局问题
根据前面其他作者总结的BFC特性的第三条和第四条，我们知道在同一个BFC下即使有元素浮动，BFC下元素的最左边边缘总是会与包含它的盒子左边相接触，那么就会出现浮动元素遮盖了其他元素的情况。BFC还有一条重要特性：BFC的区域不会与float box 重叠。试想，在一个BFC，如果存在一个float元素，和一个div，浮动元素会遮盖住div，此时，如果给这个div构建一个新的BFC，由于BFC特性，内外不相互影响，此时div会被float元素挤开
```
<!-- html -->
<div>绿色浮动盒子</div>
<div>红色盒子</div>
/* CSS */
.green{
    height: 80px;
    width: 80px;
    background: green;
    float: left;
    opacity: 0.7;
}
.red{
    height: 100px;
    width: 100px;
    background: red;
    overflow: hidden;
}
```

# 4. 盒模型
由里向外content,padding,border,margin

*标准盒模型*
![标准盒模型](http://lc-fytWPWwa.cn-n1.lcfile.com/2572a6e62fcaad09b689.jpg)

*IE盒模型*
![IE盒模型](http://lc-fytWPWwa.cn-n1.lcfile.com/a78cf1dc2d1cb4ad341d.jpg)

从上面两图不难看出在标准模型中，盒模型的宽高只是内容（content）的宽高，
而在IE模型中盒模型的宽高是内容(content)+填充(padding)+边框(border)的总宽高。
css如何设置两种模型
这里用到了CSS3 的属性 box-sizing
```
/* 标准模型 */
box-sizing:content-box;

 /*IE模型*/
box-sizing:border-box;
```

**通过JS获取盒模型对应的宽和高的方法**

方法|描述|
---|---|
*dom.style.width/height*|这种方式只能取到dom元素内联样式所设置的宽高|
*dom.currentStyle.width/height*|这种方式获取的是在页面渲染完成后的结果，但这种方式只有IE浏览器支持|
*window.getComputedStyle(dom).width/height*|这种方式获取的是在页面渲染完成后的结果，兼容更多浏览器，通用性好些|
*dom.getBoundingClientRect().width/height*|这种方式是根据元素在视窗中的绝对位置来获取宽高的|
*dom.offsetWidth/offsetHeight*|最常用的，也是兼容最好的|

# 5. CSS模块化 【封装-继承-多态】SASS
+ 1. [SASS官方文档](https://sass-lang.com/)
+ 2. [SASS中文文档](https://www.sass.hk/)

# 6. 屏幕适配以及页面自适应

+ 1. rem 页面根元素字体设置
通过CSS设置

```
/* CSS */
html { font-size : 20px; }
通过JS设置
document.documentElement.style.fontSize = '20px';
```

+ 2. 媒体查询 @media

```
@media only screen and (min-width: 481px){
    font-size: 20px;
}
```

# 7. CSS3中新增的属性
代码示例：[Demo](https://github.com/FiggerDancer/CSS3NewAttribute)

## 7.1 text-overflow
```
text-overflow: clip|ellipsis
```
+ clip: 文字溢出部分截取
+ ellipsis: 文字溢出部分转为省略号

## 7.2 text-decoration
```
text-fill-color: 文字内部填充颜色
text-stroke-color: 文字边界填充颜色
text-stroke-width: 文字边界宽度
```

## 7.3 CSS3 多列布局
```
column-count: 表示布局几列
column-rule: 表示列与列之间的间隔条的样式
column-gap: 表示列与列之间的距离
```

## 7.4 HSL 色彩模式(现在一般使用rgba模式)
H 色调 最大值 360
S 饱和度 0~100%
L 亮度 0~100%
```
color: hsla(112, 72%, 33%, .68)
```

## 7.5 CSS3 的渐变效果
### 7.5.1 线性渐变
background: linear-gradient(to direction, color-stop1, color-stop2, ...);

#### 7.5.1.1 线性渐变 - 从上到下（默认情况下）
```
background-image: linear-gradient(to right, red, blue);
```

#### 7.5.1.2 线性渐变 - 从左到右
```
background-image: linear-gradient(to right, red, blue);
```

#### 7.5.1.3 线性渐变 - 对角
```
background-image: linear-gradient(to bottom right, red, blue);
```

### 7.5.1.4 线性渐变 - 使用角度
background-image: linear-gradient(angle, red, blue);
```
background-image: linear-gradient(60deg, red, blue);
```

### 7.5.1.5 线性渐变 - 多颜色
```
background-image: linear-gradient(30deg, red, orange, yellow, green, blue, indigo, violet);
```

### 7.5.1.6 线性渐变 - 重复的线性渐变
```
background-image: repeating-linear-gradient(to right, yellow 10%, green 20%);
```

### 7.5.1.7 线性渐变 - 用渐变实现虚线下划线
```
background: linear-gradient(90deg, black 50%, white 50%) repeat-x left bottom/8px 1px;
```

### 7.5.2 复杂线性渐变
background: radial-gradient(length at position, shape, size, start-color, ..., last-color);
+ length: 半径宽高 （width, height） 
+ position: 渐变的中心 （如：55% 60%、0 0、top left）
+ shape size: 渐变的形状 ellipse表示椭圆形，circle表示圆形
+ color[]: 颜色

#### 7.5.2.1 径向渐变 - 颜色结点均匀分布（默认情况下）
```
background: radial-gradient(red, green, blue); 
```

#### 7.5.2.2 不同尺寸大小关键字的使用
+ 1. closest-side
```
background: -webkit-radial-gradient(60% 55%, closest-side,blue,green,yellow,black); 
background: radial-gradient(60%, 55%, closest-side, blue, green, yellow, black); /* 标准语法 */
```
+ 2. farthest-side
```
background-image: -webkit-radial-gradient(60% 55%, farthest-side, blue, green, yellow, black);
background-image: radial-gradient(60% 55%, farthest-side, blue, green, yellow, black); /* 标准语法 */
```
+ 3. closest-corner
```
background-image: -webkit-radial-gradient(60% 55%, closest-corner, blue, green, yellow, black);
background-image: radial-gradient(60% 55%, closest-corner, blue, green, yellow, black); /* 标准语法 */
```
+ 4. farthest-corner
```
background-image: -webkit-radial-gradient(60% 55%, farthest-corner, blue, green, yellow, black);
background-image: radial-gradient(60% 55%, farthest-corner, blue, green, yellow, black); /* 标准语法 */
```

#### 7.5.2.3 重复的径向渐变
```
background-image: repeating-radial-gradient(red, yellow 10%, green 15%); /* 标准语法 */
```

#### 7.5.2.4 径向渐变（目标圆圆心偏移）球体
```
width: 100px;
height: 100px;
border-radius: 50px;
background:radial-gradient(at 35px 35px,#FFF,#CCC,#FFF);
```

### 7.5.3
[CSS 渐变的应用](https://figgerdancer.github.io/undefined/CSS-GRADIENT/)

## 7.6 反射
*box-reflect: none| <direction> <offset>? <mask-box-image\>?*
+ direction: above, below, left, right
+ offset: 长度单位或者百分比
+ mask-box-image: 用来设置倒影的遮罩效果

参考 -- [使用CSS3制作倒影](https://www.w3cplus.com/css3/css3-box-reflect.html)

## 7.7 CSS3 的 Transitions, Transforms, Animation
### 7.7.1 transitions
*transition: property duration timing-function delay;*
+ property: 指定过度的属性
+ duration: 用于指定这个过渡的持续时间
+ timing-function: 用于指定过渡类型，有 ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier
+ delay: 用于制定延迟过渡的时间

### 7.7.2 transform
值|描述|
---|---|
none|定义不进行转换|
matrix(n,n,n,n,n,n)|定义 2D 转换，使用六个值的矩阵|
matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)|定义 3D 转换，使用 16 个值的 4x4 矩阵|	
translate(x,y)|定义 2D 转换|
translate3d(x,y,z)|定义 3D 转换|	
translateX(x)|定义转换，只是用 X 轴的值|
translateY(y)|定义转换，只是用 Y 轴的值|
translateZ(z)|定义 3D 转换，只是用 Z 轴的值|	
scale(x,y)|定义 2D 缩放转换|
scale3d(x,y,z)|定义 3D 缩放转换|	
scaleX(x)|通过设置 X 轴的值来定义缩放转换|
scaleY(y)|通过设置 Y 轴的值来定义缩放转换|
scaleZ(z)|通过设置 Z 轴的值来定义 3D 缩放转换|	
rotate(angle)|定义 2D 旋转，在参数中规定角度|
rotate3d(x,y,z,angle)|定义 3D 旋转|
rotateX(angle)|定义沿着 X 轴的 3D 旋转|
rotateY(angle)|定义沿着 Y 轴的 3D 旋转|
rotateZ(angle)|定义沿着 Z 轴的 3D 旋转|
skew(x-angle,y-angle)|定义沿着 X 和 Y 轴的 2D 倾斜转换|
skewX(angle)|定义沿着 X 轴的 2D 倾斜转换|
skewY(angle)|定义沿着 Y 轴的 2D 倾斜转换|
perspective(n)|为 3D 转换元素定义透视视图|

### 7.7.3 animation
*animation: name duration timing-function delay iteration-count direction;*
+ 1. animation-name: 规定需要绑定到选择器的 keyframe 名称。。
+ 2. animation-duration: 规定完成动画所花费的时间，以秒或毫秒计。
+ 3. animation-timing-function: 规定动画的速度曲线。
+ 4. animation-delay: 规定在动画开始之前的延迟。
+ 5. animation-iteration-count: 规定动画应该播放的次数。
+ 6. animation-direction: 规定是否应该轮流反向播放动画。