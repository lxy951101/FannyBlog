---
title: Swiper 中文手册
date: 2019-04-01 10:42:15
categories: 前端 # 分类只能有1个
top: 1
tags:
- js
---
+ 个人的一个 Swiper 全属性集
<!-- more -->

# Swiper 运作原理

Swiper运作原理
Swiper常用运作方式有两种：手动触摸切换或者导航切换（前进后退按钮，键盘控制，分页器，内置方法slideTo等）
1. 手动触摸切换拖动阶段Swiper根据手势位置实时设定wrapper的位移（setTranslate），释放拖动时Swiper会设定一次wrapper自由过渡（setTranslate、setTransition、transitionStart、slideChangeTransitionStart）。速度为speed直到过渡结束（transitionEnd、slideChangeTransitionEnd）。
2. 导航切换可参考手动触摸释放阶段

# Layout 布局
```
<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>
```

# 初始化 Swiper

new Swiper(swiperContainer, parameters)
+ swiperContainer: {HTMLElement|String} HTMLElement 或者 字符串（CSS选择器）
+ parameters: {Object} swiper的配置参数

# Swiper 参数 (parameters)
参数|类型|默认值|描述|
---|---|---|---|
init|boolean|true|Swiper 是否自动初始化。如果填false，则你需要手动调用 *mySwiper.init()*| 
initialSlide|number|0|设定初始化时slide的索引
direction|string|'horizontal'|Slides的滑动方向，可选值为'horizontal'（水平），'vertical'（垂直）
speed|number|300|切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间
setWrapperSize|boolean|false|开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到
virtualTranslate|boolean|false|虚拟位移。当你启用这个参数，Swiper除了不会移动外其他的都像平时一样运行，<br>仅仅是不会在Wrapper上设置位移。<br>当你想自定义一些slide切换效果时可以用
width|number||强制Swiper的宽度(px)，当你的Swiper在隐藏状态下初始化时有效。这个参数会使自适应失效|
height|number||强制Swiper的高度(px)，当你的Swiper在隐藏状态下初始化时有效。这个参数会使自适应失效|
autoHeight|boolean|false|自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化|
roundLengths|boolean|false|如果设置为true，则将slide的宽和高取整(四舍五入)，<br>以防止某些分辨率的屏幕上文字或边界(border)模糊|
nested|boolean|false|嵌套相同方向的swiper时，当切换到子swiper时停止父swiper的切换|
uniqueNavElements|booean|true|独立分页元素，当启用（默认）并且分页元素的传入值为字符串时，swiper会优先查找子元素匹配这些元素。<br>可应用于分页器，按钮和滚动条（pagination, prev/next buttons and scrollbar elements）|
effect|string|'slide'|独立分页元素，当启用（默认）并且分页元素的传入值为字符串时，swiper会优先查找子元素匹配这些元素。<br>可应用于分页器，按钮和滚动条（pagination, prev/next buttons and scrollbar elements）|
runCallbacksOnInit|boolean|true|如果你的初始化slide不是第一个(例initialSlide:2)或者设置了loop: true，<br>那么初始化时会触发一次 [Transition/SlideChange] [Start/End] 回调函数，如果不想触发，设置为false|
watchOverflow|boolean|false|当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航等。默认不开启这个功能|
on|object||注册事件
spaceBetween|number|0|滑块间距离|
slidesPerView|number/'auto'|1|每行显示滑块数，auto自动填充|
slidesPerColumn|number|1|每列显示滑块数|
slidesPerColumnFill|string|'column'|填充次序按照行开始还是列开始|
slidesPerGroup|number|1|每组多少个滑块|
centeredSlides|boolean|false|设定为true时，active slide会居中，而不是默认状态下的居左|
slidesOffsetBefore|number|0|设定slide与左边框的预设偏移量|
slidesOffsetAfter|number|0|设定slide与右边框的预设偏移量|
normalizeSlideIndex|boolean|true|使你的活动块指示为最左边的那个slide|
centerInsufficientSlides|boolean|false|开启这个参数，当slides的总数小于slidesPerView时，slides居中|
grabCursor|boolean|false|设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状|
touchEventsTarget|string|'container'|接受touch事件的目标，可以设为container或者wrapper|
touchRatio|number|1|触摸比例。触摸距离与slide滑动距离的比率,利用复数可以反向滑动|
touchAngle|number|45|允许触发拖动的角度值。默认45度，即使触摸方向不是完全水平也能拖动slide|
simulateTouch|boolean|true|鼠标模拟手机触摸|
shortSwipes|boolean|true|默认允许短切换。设置为false时，只能长切换，进行快速且短距离的滑动无法触发切换|
longSwipes|boolean|true|设置为false时，进行长时间长距离的拖动无法触发Swiper|
longSwipesRatio|number|0.5|进行longSwipes时触发swiper所需要的最小拖动距离比例，即定义longSwipes距离比例。<br>值越大触发Swiper所需距离越大。最大值0.5|
longSwipesMs|number|300|定义longSwipes的时间（单位ms），超过则属于longSwipes
followFinger|boolean|true|跟随手指。如设置为false，手指滑动时slide不会动，当你释放时slide才会切换|
allowTouchMove|boolean|true|允许触摸滑动。<br>设为false时，slide无法滑动，只能使用扩展API函数例如slideNext() 或slidePrev()或slideTo()等改变slides滑动|
threshold|number|0|拖动的临界值（单位为px），如果触摸距离小于该值滑块不会被拖动|
touchStartPreventDefault|boolean|true|阻止`touchstart` (`mousedown`)的默认事件，设置为false则不阻止|
touchStartForcePreventDefault|boolean|true|是否强制阻止`touchstart` (`mousedown`)的默认事件，即使Swiper不允许滑动(allowTouchMove:false)|
touchMoveStopPropagation|boolean|true|true时阻止touchmove冒泡事件|
iOSEdgeSwipeDetection|boolean|false|设置为true开启IOS的UIWebView环境下的边缘探测。如果拖动是从屏幕边缘开始则不触发swiper。<br>这样当你在屏幕边缘滑动Swiper时，则可以返回上一页（history.back）或切换至下一页|
iOSEdgeSwipeThreshold|number|20|IOS的UIWebView环境下的边缘探测距离。如果拖动小于边缘探测距离则不触发swiper|
touchReleaseOnEdges|boolean|false|当滑动到Swiper的边缘时释放滑动，可以用于同向Swiper的嵌套（移动端触摸有效）|
passiveListeners|boolean|true|用来提升swiper在移动设备的中的scroll表现（Passive Event Listeners），但是会和e.preventDefault冲突，所以有时候你需要关掉它|
resistance|boolean|true|边缘抵抗。当swiper已经处于第一个或最后一个slide时，继续拖动Swiper会离开边界，释放后弹回。<br>边缘抵抗就是拖离边界时的抵抗力。值为false时禁用，将slide拖离边缘时完全没有抗力|
resistanceRatio|number|0.85|抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离|
preventInteractionOnTransition|boolean|false|如果开启这个选项，当你的Swiper在过渡时将无法滑动|
allowSlidePrev|boolean|true|设为false可禁止向左或上滑动|
allowSlideNext|boolean|true|设为false可禁止向右或下滑动|
noSwiping|boolean|true|设为true时，可以在slide上（或其他元素）增加类名'swiper-no-swiping'，使该slide无法拖动，<br>希望文字被选中时可以考虑使用.该类名可通过noSwipingClass修改|
noSwipingClass|string|'swiper-no-swiping'|不可拖动块的类名，当noSwiping设置为true时，并且在slide（或其他元素）加上此类名，<br>目标将无法触摸拖动|
noSwipingSelector|string||设置不可触摸滑动的元素(如input)|
swipeHandler|string / HTMLElement|null|CSS选择器或者HTML元素。你只能拖动它进行swiping|
preventClicks|boolean|true|当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转|
preventClicksPropagation|boolean|true|阻止click冒泡。拖动Swiper时阻止click事件|
slideToClickedSlide|boolean|false|设置为true则点击slide会过渡到这个slide|
freeMode|boolean|false|默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，<br>slide会根据惯性滑动可能不止一格且不会贴合|
freeModeMomentum|boolean|true|free模式动量。free模式下，若设置为false则关闭动量，释放slide之后立即停止不会滑动|
freeModeMomentumRatio|number|1|free模式动量值（移动惯量）。设置的值越大，当释放slide时的滑动时间越长。默认1s|
freeModeMomentumVelocityRatio|number|1|free模式惯性速度，设置越大，释放后滑得越快|
freeModeMomentumBounce|boolean|true|动量反弹。false时禁用free模式下的动量反弹，slides通过惯性滑动到边缘时，无法反弹。<br>注意与resistance（手动抵抗）区分|
freeModeMomentumBounceRatio|number|1|值越大产生的边界反弹效果越明显，反弹距离越大|
freeModeMinimumVelocity|number|0.02|触发FreeMode惯性的最小触摸速度（px/ms），低于这个值不会惯性滑动|
freeModeSticky|boolean|false|使得freeMode也能自动贴合|
watchSlidesProgress|boolean|false|开启这个参数来计算每个slide的progress(进度、进程)，对于slide的progress属性，活动的那个为0，其他的依次减1。<br>例：如果一共有6个slide，活动的是第三个，从第一个到第六个的progress属性分别是：2、1、0、-1、-2、-3，对于swiper的progress属性，活动的slide在最左（上）边时为0，活动的slide在最右（下）边时为1，其他情况平分。<br>例：有6个slide，当活动的是第三个时swiper的progress属性是0.4，当活动的是第五个时swiper的progress属性是0.8<br>swiper的progress其实就是wrapper的translate值的百分值，与activeIndex等属性不同，progress是随着swiper的切换而不停的变化，而不是在某个时间点突变|
watchSlidesVisibility|boolean|false|开启watchSlidesVisibility选项前需要先开启watchSlidesProgress，如果开启了watchSlidesVisibility，<br>则会在每个可见slide增加一个classname，默认为'swiper-slide-visible'|
preloadImages|boolean|true|默认为true，Swiper会强制加载所有图片|
updateOnImagesReady|boolean|true|当所有的内嵌图像（img标签）加载完成后Swiper会重新初始化。<br>使用此选项需要先开启preloadImages: true|
loop|boolean|false|loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的。 <br>loop模式在与free模式同用时会产生抖动，因为free模式下没有复制slide的时间点|
loopAdditionalSlides|number|0|loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数<br>默认为0，前后各复制1个。0,1,2 --> 2,0,1,2,0<br>例：取值为1，0,1,2 --> 1,2,0,1,2,0,1<br>例：取值为2或以上，0,1,2 --> 0,1,2,0,1,2,0,1,2|
loopedSlides|number|1|在loop模式下使用slidesPerview:'auto'，还需使用该参数设置所要用到的loop个数(一般设置大于可视slide个数2个即可)|
loopFillGroupWithBlank|boolean|false|在loop模式下，为group填充空白slide|
breakpoints|object||断点设定：根据屏幕宽度设置某参数为不同的值，类似于响应式布局的media only screen and (max-width: 480px)<br>只有部分不需要变换布局方式和逻辑结构的参数支持断点设定，<br>如slidesPerView、slidesPerGroup、 spaceBetween，而像slidesPerColumn、loop、direction、effect等则无效|
breakpointsInverse|boolean|false|开启后，breakpoints将以反方向计算，类似于media only screen and (min-width: 480px)|
observer|boolean|false|启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。<br>默认false，不开启，可以使用update()方法更新|
observeParents|boolean|false|将observe应用于Swiper的父元素。<br>当Swiper的父元素变化时，例如window.resize，Swiper更新|
observeSlideChildren|boolean|false|子slide更新时，swiper是否更新。默认为false不更新|
containerModifierClass|string|'swiper-container-'|可以修改某些以swiper-container-为开头的类名|
slideClass|string|'swiper-slide'|设置slide的类名|
slideActiveClass|string|'swiper-slide-active'|设置活动块的类名|
slideDuplicateActiveClass|string|swiper-slide-duplicate-active|loop模式下活动块对应复制块的类名，或者相反|
slideVisibleClass|string|swiper-slide-visible|设置可视块的类名|
slideDuplicateClass|string|'swiper-slide-duplicate'|loop模式下被复制的slide的类名|
slideNextClass|string|'swiper-slide-next'|active slide的下一个slide的类名|
slideDuplicateNextClass|string|'swiper-slide-duplicate-next'|loop模式下，下一个slide对应复制块的类名，或者相反|
slidePrevClass|string|'swiper-slide-prev'|active slide的前一个slide的类名|
slideDuplicatePrevClass|string|'swiper-slide-duplicate-prev'|loop下，前一个slide对应复制块的类名，或者相反|
wrapperClass|string|'swiper-wrapper'|设置wrapper的css类名|

# Slider 的方法和属性

属性或方法|描述|
---|---|
params|重要参数，获取Swiper对象初始化参数，或者重写该参数，<br>如： mySwiper.params.speed = 200。<br>*不是所有参数都可以重写| 
$el|swiper的container的Dom7/jQuery对象。可以通过mySwiper.el得到container的HTML元素|
$wrapperEl|获取swiper的wrapper的Dom7对象。<br>可以通过mySwiper.wrapperEl得到wrapper的HTML元素。<br>如需拿到slides的总宽度，需要设置wrapper的setWrapperSize|
slides|获取Swiper的slides的Dom7/jQuery对象。<br>通过mySwiper.slides[1]获取特定的slide。<br>如需拿到slides的总宽度，需要设置wrapper的setWrapperSize|
width|获取swiper容器的宽度|
height|获取swiper容器的高度|
translate|这个属性可以获取到wrapper的位移，过渡中得到的则是过渡完成时的位移。<br>如需实时位移可以使用 swiper.getTranslate()|
progress|获取Swiper的progress值|
activeIndex|返回当前活动块(激活块)的索引。loop模式下注意该值会被加上复制的slide数|
realIndex|当前活动块的索引，与activeIndex不同的是，在loop模式下不会将复制的块的数量计算在内|
previousIndex|返回上一个活动块的索引，切换前的索引|
isBegining|如果Swiper位于最左/上，这个值为true|
isEnd|如果Swiper位于最右/下，这个值为true|
animating|如果Swiper正在过渡（自由滑动），这个值为true|
touches|返回包含触控信息的对象数组，就是这5个。<br>mySwiper.touches.startX    触摸开始点的X值<br>mySwiper.touches.startY    触摸开始点的Y值<br>mySwiper.touches.currentX    触摸当前点的X值<br>mySwiper.touches.currentY    触摸当前点的Y值<br>mySwiper.touches.diff    当前滑动方向的触摸滑动距离
clickedIndex|返回最后点击Slide的索引|
clickedSlide|返回最后点击（非拖动）的Slide的HTML元素|
allowSlideNext|提示或设置是否允许切换至下一个slide|
allowSlidePrev|设置/提示是否允许切换至前一个slide|
allowTouchMove|设置/查看是否禁止触摸滑动|
slideNext(speed, runCallbacks)|滑动到下一个滑块。<br>speed：可选，切换速度<br>runCallbacks：可选，设为false不触发transition回调函数|
slidePrev(speed, runCallbacks)|滑动到上一个滑块。<br>speed：可选，切换速度<br>runCallbacks：可选，设为false不触发transition回调函数|
slideTo(index, speed, runCallbacks)|滑动到指定索引滑块。<br>index:必选，num，指定将要切换到的slide的索引。<br>speed：可选，切换速度<br>runCallbacks：可选，设为false不触发transition回调函数|
slideToLoop(index, speed, runCallbacks)|在Loop模式下Swiper切换到指定slide。切换到的是slide索引是realIndex<br>index:必选，num，指定将要切换到的slide的索引。<br>speed:可选，num(单位ms)，切换速度<br>runCallbacks: 可选，boolean，设置为false时不会触发transition回调函数
slideReset(speed, runCallbacks)|将滑块位置重置为当前滑块|
slideToClosest(speed, runCallbacks)|使得Swiper贴合边缘，当你使用freeMode时可能会需要<br>speed:number 贴合速度ms(可选)<br>runCallbacks:boolean 贴合时是否产生transition事件，默认true|
updateAutoHeight(speed)|当autoHeight为启用状态，设置更新swiper高度的时间。<br>speed:number 速度ms(可选)|
update()|更新Swiper，这个方法包含了updateContainerSize，updateSlidesSize，updateProgress，updateClasses方法。<br>可选参数：updateTranslate，默认false，设置为true则重新计算Wrapper的位移| 
changeDirection(direction)|动态改变切换方向。<br>可选择方向direction: horizontal或vertical，留空则自动改变|
detachEvents()|移除所有监听事件|
attachEvents()|重新绑定所有监听事件|
destroy(deleteInstance, cleanStyles)|销毁Swiper。销毁所有绑定的监听事件，移除鼠标键盘事件，释放浏览器内存。<br>deleteInstance:可选，设为false则不销毁Swiper对象，默认为true。<br>cleanupStyles:可选，设为true则清除所有swiper设定选项和样式，比如direction等，默认为false。|
appendSlide(slides)|添加slide到slides的结尾。可以是HTML元素或slide数组，例<br>mySwiper.appendSlide('<div class="swiper-slide"\>Slide 10</div\>')<br>mySwiper.appendSlide([ '<div class="swiper-slide"\>Slide 10</div\>', '<div class="swiper-slide"\>Slide 11</div\>' ])|
prependSlide(slides)|添加slide到slides的第一个位置。可以是HTML元素或slide数组|
addSlide(index, slides)|在指定位置增加slide。可以是HTML元素或slide数组|
removeSlide(slideIndex)|移除索引为index的slide|
removeAllSlides()|移除所有slides|
setTranslate(translate)|手动设置wrapper的位移。在其他非位移的切换时则表现为相应的效果，例如3D切换时改变的是角度。<br>translate：必选，位移值（单位px）。<br>例：swiper宽度为500，设置translate为-250。<br>在默认的effect: slide时，swiper会向左滑动250px，如果设置了切换效果effect: cube，swiper会旋转45度。|
getTranslate()|返回实时的wrapper位移（translate）|
on(event, handler)|添加回调函数或者事件句柄|
once(event, handler)|添加回调函数或者事件句柄，这些事件只会执行一次|
off(event, handler)|移除某个回调/事件|
off(event)|移除事件的所有句柄|
unsetGrabCursor()|关闭鼠标的抓手形状|
setGrabCursor()|开启鼠标的抓手形状，相当于开启grabCursor|

# Events

Swiper的事件可以以两种方式监听

1.用swiper初始化参数的方式
```
var mySwiper = new Swiper('.swiper-container', {
  // ...
  on: {
    init: function () {
      console.log('swiper initialized');
    },
  },
};
```
2.在swiper初始化后使用监听方法
```
var mySwiper = new Swiper('.swiper-container', {
  // ...
};
mySwiper.on('slideChange', function () {
  console.log('slide changed');
});
```
* *注：this 关键字在 event 事件句柄中总是表示 swiper 实例*

事件名称|参数|描述|
---|---|---|
init||事件函数，初始化后执行|
beforeDestory||回调函数，销毁Swiper时执行|
slideChange||当当前Slide切换时执行(activeIndex发生改变)|
slideChangeTransitionStart||回调函数，swiper从当前slide开始过渡到另一个slide时执行|
slideChangeTransitionEnd||回调函数，swiper从一个slide过渡到另一个slide结束时执行|
slideNextTransitionStart||回调函数，滑块释放时如果触发slider向前(右、下)切换则执行。<br>类似于slideChangeTransitionStart，但规定了方向|
slideNextTransitionEnd||回调函数，slider向前(右、下)切换结束时执行。<br>类似于slideChangeTransitionEnd，但规定了方向|
slidePrevTransitionStart||回调函数，滑块释放时如果触发slider向后(左、上)切换则执行。<br>类似于slideChangeTransitionStart，但规定了方向|
slidePrevTransitionEnd||回调函数，slider向后(左、上)切换结束时执行。<br>类似于slideChangeTransitionEnd，但规定了方向|
transitionStart||回调函数，过渡开始时触发|
transitionEnd||回调函数，过渡结束时触发|
touchStart|event|回调函数，当碰触到slider时执行。可选touchstart事件作为参数|
touchMove|event|手指触碰Swiper并滑动（手指）时执行，接受touchmove事件作为参数。<br>此时slide不一定会发生移动，比如你手指的移动方向和swiper的切换方向垂直时。对比sliderMove|
touchMoveOpposite|event|回调函数。当手指触碰Swiper并且没有按照direction设定的方向移动时执行。<br>此时slide没有被拖动，这与sliderMove事件相反。可选touchmove事件作为参数。|
sliderMove|event|回调函数，手指触碰Swiper并拖动slide时执行。接受touchmove事件作为参数|
touchEnd|event|回调函数，触摸释放时执行，接受 touchend事件作为参数。（释放即执行）|
click|event|回调函数，当你点击或轻触Swiper 300ms后执行,接受touchend事件作为参数|
tap|event|回调函数，当你轻触(tap)Swiper后执行。在移动端，click会有 200~300 ms延迟，所以请用tap代替click作为点击事件。<br>接受touchend事件作为参数|
doubleTap|event|回调函数，当你两次轻触Swiper 时执行，类似于双击。<br>接受touchend事件作为参数|
imagesReady||回调函数，所有内置图像加载完成后执行，同时“updateOnImagesReady”需设置为“true’|
progress|progress|回调函数，当Swiper的progress被改变时执行。<br>接受Swiper的progress作为参数（0-1）|
reachBeginning||回调函数，Swiper切换到初始化位置时执行|
reachEnd||回调函数，当Swiper切换到最后一个Slide时执行|
fromEdge||当Swiper是从第一个或最后一个Slide切换时执行|
setTranslate|translate|回调函数，每当设置Swiper开始过渡动画时执行。transtion获取到的是Swiper的speed值|
setTranslation|transition|回调函数。当设置wrapper的偏移量时执行。可选swiper对象和wrapper的偏移量作为参数|
resize||当你的浏览器尺寸发生变化时执行|
observerUpdate||观察者模式，swiper内部dom结构变化时触发|

*注： 点击事件触发时机*
* 如果没有触发touchMove()，则释放触摸/鼠标时：
* 1.立即执行tap()
* 2.如果触摸/鼠标按压时间小于300ms，并且两次触摸/点击间隔大于300ms，延迟300ms执行onClick
* 3.如果触摸/鼠标按压时间小于300ms，并且两次触摸/点击间隔小于300ms，立即执行doubleTap

# Components 组件

## 1. Navigation(导航组件)
### Navigation 参数

```
var mySwiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
```
参数|类型|默认|描述|
---|---|---|---|
nextEl|string/HTMLElement|null|前进按钮的css选择器或HTML元素|
prevEl|string/HTMLElement|null|后退按钮的css选择器或HTML元素|
hideOnClick|boolean|false|点击slide时显示/隐藏按钮|
disabledClass|string|'swiper-button-disabled'|前进后退按钮不可用时的类名|
hiddenClass|string|'swiper-button-hidden'|按钮隐藏时的Class|

### Navigation 方法和属性

方法或属性|描述|
---|---|
mySwiper.navigation.nextEl|获取前进按钮的HTML元素|
mySwiper.navigation.prevEl|获取后退按钮的HTML元素。通过$prevEl获取DOM7|
mySwiper.navigation.update()|更新前进后退导航按钮|

### 事件
事件|描述|
---|---|
navigationHide|事件函数，navigation隐藏时执行|
navigationShow|事件函数，navigation显示时执行|

## 2. Pagination(分页组件)

```
var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});
```

### Pagination 参数

参数|类型|默认|描述|
---|---|---|---|
el|string|null|前进按钮的css选择器或HTML元素|
type|string|'bullets'|分页器样式类型，可选<br>‘bullets’  圆点（默认）<br>‘fraction’  分式 <br>‘progressbar’  进度条<br>‘custom’ 自定义|
bulletElement|string|'span'|设定分页器指示器（小点）的HTML标签|
dynamicBullets|boolean|false|动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏|
dynamicMainBullets|number|1|动态分页器的主指示点的数量|
hideOnClick|boolean|true|默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器|
clickable|boolean|false|此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换|
progressbarOpposite|boolean|false|使进度条分页器与Swiper的direction参数相反，<br>也就是说水平方向切换的swiper显示的是垂直进度条而垂直方向切换的swiper显示水平进度条|
formatFractionCurrent|function(number)|number => number|格式化分式分页器的当前指示数值，接受当前数值作为参数，必须返回一个自定义的数值|
formatFractionTotal|function(number)|number => number|格式化分式分页器的总指示数值，接受总数值作为参数，必须返回一个自定义的数值|
renderBullet|function(index, className)|null|渲染分页器小点。这个参数允许完全自定义分页器的指示点。<br>接受指示点索引和指示点类名作为参数|
renderFraction|function(currentClass, totalClass)|null|自定义分式类型分页器，当分页器类型设置为分式时可用|
renderProgressbar|function(progressbarFillClass)|null|自定义进度条类型分页器，当分页器类型设置为进度条时可用|
renderCustom|function(swiper, current, total)|null|自定义特殊类型分页器，当分页器类型设置为自定义时可用|
bulletClass|string|'swiper-pagination-bullet'|pagination分页器内元素的类名|
bulletActiveClass|string|'swiper-pagination-bullet-active'|pagination分页器内活动(active)元素的类名|
modifierClass|string|'swiper-pagination-'|修改以swiper-pagination-为前缀的类名|
currentClass|string|'swiper-pagination-current'|分式类型分页器的当前索引的类名|
totalClass|string|'swiper-pagination-hidden'|分式类型分页器总数的类名|
hiddenClass|string|'swiper-pagination-hidden'|分页器隐藏时的类名|
progressbarFillClass|string|'swiper-pagination-progressbar-fill'|进度条型分页器的指示条的类名|
clickableClass|string|'swiper-pagination-clickable'|可点击的pagination的类名|
lockClass|string|'swiper-pagination-lock'|禁止的pagination的类名|

### Pagination 方法和属性

方法或属性|描述|
---|---|
mySwiper.pagination.el|获取分页器导航的容器元素|
mySwiper.pagination.bullets|获取Swiper的分页器的小点bullets的Dom7对象数组。<br>通过类似mySwiper.pagination.bullets[1]获取其中某个|
mySwiper.pagination.render()|渲染分页器|
mySwiper.pagination.update()|更新分页器|

### Pagination 事件

事件名称|参数|描述|
---|---|---|
paginationRender|swiper, paginationEl|分页器渲染时触发事件|
paginationUpdate|swiper, paginationEl|分页器更新时触发事件|
paginationHide||事件函数，隐藏分页器时执行|
paginationShow||事件函数，分页器显示时执行|

## 3. Scrollbar(滚动条组件)

```
var mySwiper = new Swiper('.swiper-container', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});
```

### Scrollbar 参数

参数|类型|默认|描述|
---|---|---|---|
el|string/HTMLElement|null|Scrollbar容器的css选择器或HTML元素|
hide|boolean|true|滚动条是否自动隐藏。默认：false，不会自动隐藏|
draggable|boolean|false|该参数设置为true时允许拖动滚动条|
snapOnRelease|boolean|true|如果设置为false，释放滚动条时slide不会自动贴合|
dragSize|string/number|'auto'|设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)|
lockClass|string|'swiper-scrollbar-lock'|禁止的滚动条类名|
dragClass|string|'swiper-scrollbar-drag'|可拖拽的滚动条类名|

### Scrollbar 方法和属性

方法或属性|描述|
---|---|
mySwiper.scrollbar.el|获取滚动条的HTML元素，还可通过$el获取DOM7|
mySwiper.scrollbar.dragEl|获取滚动条指示条的HTML元素，还可通过$dragEl获取DOM7|
mySwiper.scrollbar.updateSize()|更新滚动条|

## 4. Autoplay

autoplay: {boolean|object}

```
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 5000,
    },
});
```

### Autoplay 参数

参数|类型|默认|描述|
---|---|---|---|
delay|number|3000|自动切换的时间间隔，单位ms<br>你还可以在某个slide上设置单独的停留时间，<br>例<div class="swiper-slide" data-swiper-autoplay="2000"\>|
stopOnLastSlide|boolean|false|如果设置为true，当切换到最后一个slide时停止自动切换|
disableOnInteraction|boolean|true|用户操作swiper之后，是否禁止autoplay。默认为true：停止。<br>如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。<br>操作包括触碰，拖动，点击pagination等|
reverseDirection|boolean|false|开启反向自动轮播|
waitForTransition|boolean|true|等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。<br>虚拟位移状态下自动切换（virtualTranslate）可能需要关闭此选项|

### Autoplay 方法和属性

方法或属性|描述|
---|---|
mySwiper.autoplay.running|如果Swiper开启了autoplay，这个值为true|
mySwiper.autoplay.start()|开始自动切换。一般用来做“Play”按钮|
mySwiper.autoplay.stop()|停止自动切换。一般用来制作“pause”按钮|

### Autoplay 事件

事件名称|参数|描述|
---|---|---|
autoplayStart||开始自动切换时触发事件|
autoplayStop||停止自动切换时触发事件|
autoplay||autoplay状态改变时触发事件|

## 5. Parallax

### Parallax 参数

参数|类型|默认|描述|
---|---|---|---|
parallax|boolean|false|设置为true开启视差效果。<br>效果可以应用于container或slide的子元素。当应用于container的子元素（常用于视差背景图），每次切换时视差效果仅有设定值的slide个数-1分之1|

* 1.视差位移变化
在所需要的元素上增加data-swiper-parallax属性（与Swiper切换方向相同）或data-swiper-parallax-x （x方向） data-swiper-parallax-y（y方向）

data-swiper-parallax接受两种类型的参数。
          number（单位：px），如-300，从右边300px进入左边出去。
          percentage（百分比），移动距离=该元素宽度 * percentage。

* 2.视差透明度变化
在所需要的元素上增加data-swiper-parallax-opacity属性。可选值0-1，如0.5，从半透明进入半透明出去

* 3.视差缩放变化
在所需要的元素上增加data-swiper-parallax-scale属性。可选值如0.5，从一半大小进入一半大小出去

还可通过data-swiper-parallax-duration设定视差动画持续时间（ms）。默认值是Swiper的speed，与切换时间同步。

*设定透明度或缩放必须同时设定位移，否则无效(4.0.5) <div data-swiper-parallax="0" data-swiper-parallax-opacity="0.5"\>透明度变化</div\>* 

```
<div class="swiper-container">
<div style="background-image:url(/img/Parallax.jpg)" data-swiper-parallax="-23%" data-swiper-parallax-duration="3000"></div>
    <div class="swiper-wrapper">
       <div class="swiper-slide">
            <div class="title" data-swiper-parallax="-100">从右边100px开始进入</div>
            <div class="subtitle" data-swiper-parallax="-200">从右边200px开始进入</div>
            <div class="text" data-swiper-parallax="-300" data-swiper-parallax-duration="600">
              <p>从右边300px开始进入，时间600ms</p>
            </div>
            <div data-swiper-parallax="0" data-swiper-parallax-opacity="0.5" >透明度变化</div>
            <div data-swiper-parallax-scale="0.15" >缩放变化</div>
        </div>
    </div>
</div>
<script language="javascript"> 
    var mySwiper = new Swiper('.swiper-container',{
        parallax : true,
    })
</script>
```

## 6. Lazy Loading

lazy: {object|boolean}
```
var mySwiper = new Swiper('.swiper-container', {
    lazy: {
        loadPrevNext: true,
    },
});
```

设为true开启图片延迟加载默认值，使preloadImages无效。或者设置延迟加载选项。

图片延迟加载：需要将图片img标签的src改写成data-src，并且增加类名swiper-lazy。
背景图延迟加载：载体增加属性data-background，并且增加类名swiper-lazy。

还可以加一个预加载，<div class="swiper-lazy-preloader"\></div\>
或者白色的<div class="swiper-lazy-preloader swiper-lazy-preloader-white"\></div\>

当你设置了slidesPerView:'auto' 或者 slidesPerView > 1，还需要开启watchSlidesVisibility

### Lazy Loading 参数

参数|类型|默认|描述|
---|---|---|---|
loadPrevNext|boolean|false|设置为true允许将延迟加载应用到最接近的slide的图片（前一个和后一个slide）|
loadPrevNextAmount|number|1|设置在延迟加载图片时提前多少个slide。个数不可少于slidesPerView的数量。<br>默认为1，提前1个slide加载图片，例如切换到第三个slide时加载第四个slide里面的图片|
loadOnTransitionStart|boolean|false|默认当过渡到slide后开始加载图片，如果你想在过渡一开始就加载，设置为true|
elementClass|string|'swiper-lazy'|延迟加载的图片的类名|
loadingClass|string|'swiper-lazy-loading'|正在进行懒加载的元素的类名|
loadedClass|string|'swiper-lazy-loaded'|懒加载完成的元素的类名|
preloaderClass|string|'swiper-lazy-preloader'|延时加载时预加载元素（preloader）的类名|

### Lazy Loading 方法和属性

方法或属性|描述|
---|---|
mySwiper.lazy.load()|加载可视区域内（或前后）的图片。<br>swiper在初始化、切换、拖动滚动条时会自动使用这个方法来加载图片。<br>但是有时候你可能需要手动运行这个方法，例如你自定义了一个奇异的切换方式|
mySwiper.lazy.loadInSlide(index)|根据slide的索引加载图片|

### Lazy Loading 事件

事件名称|参数|描述|
---|---|---|
lazyImageLoad|slideEl, imageEl|回调函数，图片延迟加载开始时执行。slide中每有一张图片被延迟加载就执行一次。<br>接受延迟加载的slide，延迟加载的img作为参数（可选）|
lazyImageReady|slideEl, imageEl|回调函数，图片延迟加载结束时执行。slide中每有一张图片被延迟加载就执行一次。<br>接受延迟加载的slide，延迟加载的img作为参数（可选）|

## 7. Fade Effect

```
var mySwiper = new Swiper('.swiper-container', {
    fadeEffect: {
        crossFade: true
    },
});
```

### Fade Effect 参数

参数|类型|默认|描述|
---|---|---|---|
crossFade|boolean|false|fade效果参数。可选参数：crossFade。<br>默认：false。关闭淡出。<br>过渡时，原slide透明度为1（不淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。<br>可选值：true。开启淡出。<br>过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。<br>当你的slide中图片大小不同时可以用到。|

## 8. Coverflow Effect

```
var mySwiper = new Swiper('.swiper-container', {
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
});
```

### Coverflow Effect 参数

参数|类型|默认|描述|
---|---|---|---|
slideShadows|boolean|true|开启slide阴影|
rotate|number|50|slide做3d旋转时Y轴的旋转角度|
stretch|number|0|每个slide之间的拉伸值，越大slide靠得越紧|
depth|number|100|slide的位置深度。值越大z轴距离越远，看起来越小|
modifier|number|1|depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显|

## 9. Flip Effect

```
var mySwiper = new Swiper('.swiper-container', {
    flipEffect: {
        rotate: 30,
        slideShadows: false,
    },
});
```

### Flip Effect 参数

参数|类型|默认|描述|
---|---|---|---|
slideShadows|boolean|true|slides的阴影|
limitRotation|boolean|true|限制最大旋转角度为180度|

## 10. Cube Effect

```
var mySwiper = new Swiper('.swiper-container', {
    cubeEffect: {
        slideShadows: false,
    },
});
```

### Cube Effect 参数

参数|类型|默认|描述|
---|---|---|---|
slideShadows|boolean|true|开启slide阴影|
shadow|boolean|true|开启投影|
shadowOffset|number|20|投影距离,单位px|
shadowScale|number|0.94|投影缩放比例|

## 11. Thumbs 

设置作为缩略图的swiper对象。有两种方式：
1.先初始化缩略图Swiper，再初始化banner Swiper
```
var thumbsSwiper = new Swiper('.swiper-container-thumbs', {
    slidesPerView: 5,
});

var mySwiper = new Swiper('.swiper-container', {
    ...
    thumbs: {
        swiper: thumbsSwiper
    }
});
```
2.初始化banner Swiper的时候初始化缩略图Swiper
```
var mySwiper = new Swiper('.swiper-container', {
    ...
    thumbs: {
        swiper: {
            el: '.swiper-container-thumbs',
            slidesPerView: 5,
            ...
        }
    }
});
```

### Thumbs 参数

thumbs组件专门用于制作带缩略图的swiper，比使用controller组件更为简便

参数|类型|默认|描述|
---|---|---|---|
swiper|object Swiper|||
slideThumbActiveClass|string|'swiper-slide-thumb-active'|设置缩略图Swiper的活动块的附加类名。<br>banner Swiper切换时，缩略图Swiper的原活动块类名swiper-slide-active不会切换，<br>而缩略图Swiper的附加类名swiper-slide-thumb-active会切换|
thumbsContainerClass|string|'swiper-container-thumbs'|设置缩略图Swiper的container的附加类名|

### Thumbs 方法和属性

方法或属性|描述|
---|---|
mySwiper.thumbs.swiper|获取缩略图Swiper的实例|

## 12. Zoom (缩放)

zoom: {object|boolean}

开启焦距功能：双击slide会放大/缩小，并且在手机端可双指触摸缩放。可设置缩放选项或设为true使用默认值。

需要在slide中增加类名swiper-zoom-container，结构如下：
```
<div class="swiper-slide"> <div class="swiper-zoom-container"> <img src="path/to/image"> </div> </div>
```

```
var mySwiper = new Swiper('.swiper-container', {
    zoom: {
        maxRatio: 5,
    },
});
```

### Zoom 参数

参数|类型|默认|描述|
---|---|---|---|
maxRatio|number|3|最大缩放焦距（放大倍率）。<br>如果要在单个slide上设置，可以使用data-swiper-zoom|
minRatio|number|1|最小缩放焦距（缩小倍率）|
toggle|boolean|true|是否允许双击缩放<br>设置为false，不允许双击缩放，只允许手机端触摸缩放|
containerClass|string|'swiper-zoom-container'|zoom container的类名|
zoomedSlideClass|string|'swiper-slide-zoomed'|被缩放的slide的类名|

### Zoom 方法和属性

方法或属性|描述|
---|---|
mySwiper.zoom.enabled|判断zoom是否开启|
mySwiper.zoom.scale|获取当前缩放的图片的比例|
mySwiper.zoom.enable()|开启zoom|
mySwiper.zoom.disable()|禁止zoom模式|
mySwiper.zoom.in()|zoom模式下，当前的图片放大|
mySwiper.zoom.out()|zoom模式下，当前的图片缩小|
mySwiper.zoom.toggle()|zoom模式下，当前的图片放大/缩小|

### Zoom 事件

事件名称|参数|描述|
---|---|---|
zoomChange|scale, imageEl, slideEl|当zoom变化时，触发此回调函数，接受scale, imageEl 和slideEl作为参数。<br>scale：缩放的倍数<br>imageEl：缩放的图片的HTML<br>slideEl：缩放的slide的HTML|

## 13. Keyboard Control

是否开启键盘控制Swiper切换。设置为true时，能使用键盘的方向键控制slide切换


```
var mySwiper = new Swiper('.swiper-container', {
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});
```

### Keyboard Control 参数

参数|类型|默认|描述|
---|---|---|---|
enabled|boolean|false|开启后可以使用键盘切换|
onlyInViewport|boolean|true|默认仅控制当前窗口内的swiper切换。当swiper离开可视区域则无法切换|

### Keyboard Control 方法和属性

方法或属性|描述|
---|---|
mySwiper.keyboard.enabled|获取键盘状态|
mySwiper.keyboard.enable()|开启键盘控制|
mySwiper.keyboard.disable()|禁止键盘控制|

## 14. Mousewheel Control

开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值

```
var mySwiper = new Swiper('.swiper-container', {
    mousewheel: {
        invert: true,
    },
});
```

### Mousewheel Control 参数

参数|类型|默认|描述|
---|---|---|---|
forceToAxis|boolean|false|当值为true让鼠标滚轮固定于轴向。<br>当水平mode时的鼠标滚轮只有水平滚动才会起效，当垂直mode时的鼠标滚轮只有垂直滚动才会起效。<br>普通家用鼠标只有垂直方向的滚动|
releaseOnEdges|boolean|false|如果开启这个参数，当Swiper处于边缘位置时（第一个或最后一个slide），<br>Swiper释放鼠标滚轮事件，鼠标可以控制页面滚动|
invert|boolean|false|这个参数会使鼠标滚轮控制方向反转|
sensitivity|number|1|鼠标滚轮的灵敏度，值越大鼠标滚轮滚动时swiper位移越大|
eventsTarged|string / HTMLElement|'container'|鼠标滚轮事件的接收目标(handle)，可以是css选择器或者HTML元素|

### Mousewheel Control 方法和属性

方法或属性|描述|
---|---|
mySwiper.mousewheel.enabled|获取鼠标控制状态，true/false。|
mySwiper.mousewheel.enable()|开启鼠标滑轮控制|
mySwiper.mousewheel.disable()|禁止鼠标滑轮控制|

## 15. Virtual Slides (虚拟Slide)

开启虚拟Slide功能，可设置选项或设置为true则使用默认值。

虚拟Slide会在Dom结构中保持尽量少的Slide，只渲染当前可见的slide和前后的slide，而隐藏其他不可见的Slide，每次切换时就渲染新的Slide。当你的Slide很多的时候，尤其是Slide中有复杂的Dom树结构时，性能会有很大的提升

virtual: {object|boolean}

```
var mySwiper = new Swiper('.swiper-container', {
    virtual: {
        slides: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'],
    },
});
```

### Virtual Slides 参数

参数|类型|默认|描述|
---|---|---|---|
slides|array|[]|需要添加的虚拟slide的内容|
cache|boolean|true|开启虚拟Slide的DOM缓存（默认值）。<br>虚拟的Slide被渲染后，会存入到缓存中，也可以从缓存中重新获得该Slide|
renderSlide|function(slide, index)|null|此函数设置以何种形式渲染虚拟Slide，接受当前渲染Slide的内容和Index作为参数。<br>必须返回一个slide的HTML结构。即必须包含<div class="swiper-slide"\></div\>|
renderExternal|function(data)|null|外部渲染函数（比如你使用了其他库，vue或react等），这个函数接受以下四个参数<br>offset Slides左/上的偏移量<br>from - 第一个需要渲染的Slide的索引<br>to - 最后一个需要渲染的Slide的索引<br>slides - 被渲染的Slide数组|
addSlidesBefore|number|0|一般情况下，virtual swiper只会提前渲染可见slide前后一个（组）slide，<br>如果你想提前渲染前面多个slide，可以设置这个选项|
addSlidesAfter|number|0|一般情况下，virtual swiper只会提前渲染可见slide前后一个（组）slide，<br>如果你想提前渲染后面多个slide，可以设置这个选项|

### Virtual Slides 方法和属性

方法或属性|描述|
---|---|
mySwiper.virtual.cache|获取或设置缓存的（已经渲染的）Slide的HTML|
mySwiper.virtual.from|获取正在渲染的第一个虚拟Slide的序号|
mySwiper.virtual.to|获取正在渲染的最后一个虚拟Slide的序号|
mySwiper.virtual.slides|获取全部的虚拟slide数组无论其是否被渲染了。<br>或设置虚拟slide。|
mySwiper.virtual.appendSlide(slides)|在全部虚拟Slide的后面插入Slide或Slide的数组|
mySwiper.virtual.prependSlide(slides)|在虚拟Slide的前面添加新的Slide或Slide的数组|
mySwiper.virtual.removeSlide(slideIndexes)|移除索引为index的虚拟slide。例如：<br>mySwiper.virtual.removeSlide(0); //移除第一个<br>mySwiper.virtual.removeSlide([0, 1]); //移除第一个和第二个|
mySwiper.virtual.removeAllSlides()|移除所有虚拟slides|
mySwiper.virtual.update()|更新虚拟Slide的状态|

### renderExternal 例子

With Vue.js

```
<template>
    <!-- ... -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!-- It is important to set "left" style prop on every slide -->
            <div class="swiper-slide"
                v-for="(slide, index) in virtualData.slides"
                :key="index"
                :style="{left: `${virtualData.offset}px`}"
            >{{slide}}</div>
        </div>
    </div>
    <!-- ... -->
</template>
<script>
    import Swiper from 'swiper/dist/js/swiper.esm.bundle';

    export default {
        data() {
            return {
                // dummy slides data
                slides: (function () {
                    var slides = [];
                    for (var i = 0; i < 600; i += 1) {
                        slides.push('Slide ' + (i + 1));
                    }
                    return slides;
                }()),
                // virtual data
                virtualData: {
                    slides: [],
                },
            }
        },
        mounted() {
            const self = this;
            const swiper = new Swiper('.swiper-container', {
                // ...
                virtual: {
                    slides: self.slides,
                    renderExternal(data) {
                        // assign virtual slides data
                        self.virtualData = data;
                    },
                },
            });
        },
    };
</script>
```

With React.js

```
import React from 'react';
import Swiper from 'swiper/dist/js/swiper.esm.bundle';

export default class extends React.Component {
    constructor() {
        this.state = {
            // dummy slides data
            slides: (function () {
                var slides = [];
                for (var i = 0; i < 600; i += 1) {
                    slides.push('Slide ' + (i + 1));
                }
                return slides;
            }()),
            // virtual data
            virtualData: {
                slides: [],
            },
        }
    }
    componentDidMount() {
        const self = this;
        const swiper = new Swiper('.swiper-container', {
            // ...
            virtual: {
                slides: self.state.slides,
                renderExternal(data) {
                    // assign virtual slides data
                    self.setState({
                        virtualData: data,
                    });
                }
            },
        });
    }
    render() {
        {/* ... */}
        <div className="swiper-container">
            <div className="swiper-wrapper">
            {/* It is important to set "left" style prop on every slide */}
            {this.state.virtualData.slides.map((slide, index) => (
                <div className="swiper-slide"
                    key={index}
                    style={{left: `${virtualData.offset}px`}}
                >{slide}</div>
            ))}
            </div>
        </div>
        {/* ... */}
    }
}
```

## 16. Hash Navigation

设置散列导航选项，或true使用默认值。为每个slide增加散列导航（有点像锚链接）。
还需要在每个slide处增加data-hash属性。
这样当你的swiper切换时你的页面url就会加上这个属性的值了，你也可以通过进入页面时修改页面url让swiper在初始化时切换到指定的slide。

你可以直接跳转到指定的slide。比如这样：直接跳到第三个slide。

如果需要浏览器的前进后退按钮配合控制，需要加上watchState


```
var swiper = new Swiper('.swiper-container', {
    //enable hash navigation
    hashNavigation: true
})
```

### Hash Navigation 参数

参数|类型|默认|描述|
---|---|---|---|
watchState|boolean|false|开启后观察浏览器窗口的的hashchange状态变化。<br>可通过浏览器历史记录（页面前进后退按钮）或者URL的锚链接改变控制slide切换|
replaceState|boolean|false|使用replaceState（window.history.replaceState）代替hashnav的hash（document.location.hash）|

## 17. History Navigation

设置为true开启history导航，或者自定义history导航选项。
在slide切换时可无刷新更换URL和浏览器的history.state(pushState)。这样每个slide都会拥有一个自己的URL。
使用history还必需在slide上增加一个属性data-history，例<div class="swiper-slide" data-history="slide1"\></div\>
开启history会取消hashnav

```
var mySwiper = new Swiper('.swiper-container', {
    hashNavigation: {
        replaceState: true,
    },
});
```

### History Navigation 参数

参数|类型|默认|描述|
---|---|---|---|
replaceState|boolean|false|使用history.replaceState方法替换history.pushState方法|
key|string|'slides'|URL中的接续词|

## 18. Controller (双向控制)

```
var mySwiper = new Swiper('.swiper-container', {
    controller: {
        inverse: true,
    },
});
```

### Controller 参数

设置双向控制的参数，或者true使用默认设置<br>还需要设置control为swiper实例，控制该swiper，而不是被该swiper控制

参数|类型|默认|描述|
---|---|---|---|
control|[Swiper Instance]|undefined|设置为另外一个Swiper实例开始控制该Swiper|
inverse|boolean|false|设置为true时控制方向倒转|
by|string|'slide'|设定Swiper相互控制时的控制方式。当两个swiper的slide数量不一致时可用。<br>默认为'slide'，自身切换一个slide时，被控制方也切换一个slide。<br>可选：'container'，按自身slide在container中的位置比例进行控制。<br>例：有4个slide的swiper1控制有7个slide的swiper2，<br>设定'slide', swiper1的1, 2, 3, 4对应控制的swiper2为1, 2, 3, 7。<br>设定by: 'container'，swiper1的1, 2, 3, 4对应控制的swiper2为1, 3, 5, 7|

## 19. Accessibility(a11y) (无障碍阅读)

```
var mySwiper = new Swiper('.swiper-container', {
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
});
```

### Accessibility 参数

参数|类型|默认|描述|
---|---|---|---|
enabled|boolean|true|辅助，无障碍阅读。开启本参数为屏幕阅读器添加语音提示等信息，方便视觉障碍者。基于ARIA标准|
prevSlideMessage|string|'Previous slide'|在屏幕阅读器为上一页按钮添加信息|
nextSlideMessage|string|'Next slide'|在屏幕阅读器为下一页按钮添加信息|
firstSlideMessage|string|'This is the first slide'|在屏幕阅读器当处于第一个slide为上一页按钮添加信息|
lastSlideMessage|string|'This is the last slide'|在屏幕阅读器当处于最后一个slide为下一页按钮添加信息|
paginationBulletMessage|string|'Go to slide {{index}}'|在屏幕阅读器为分页器小点添加信息|
notificationClass|string|'swiper-notification'|A11y公告部分的类名| 
 