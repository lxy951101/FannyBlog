---
title: chaijs
date: 2019-04-02 14:18:51
categories: 前端 # 分类只能有1个
top: 1
tags:
  - js
  - 单元测试
---

- chaijs 一个单元测试的函数库
  <!-- more -->
<!-- TOC -->

- [BDD](#bdd)
    - [语言链](#语言链)
    - [.not](#not)
    - [.deep](#deep)
    - [.nested](#nested)
    - [.own](#own)
    - [.ordered](#ordered)
    - [.any](#any)
    - [.all](#all)
    - [.a(type[,msg])](#atypemsg)
    - [.include(val[,msg])](#includevalmsg)
    - [.ok](#ok)
    - [.true](#true)
    - [.false](#false)
    - [.null](#null)
    - [.undefined](#undefined)
    - [.NaN](#nan)
    - [.exist](#exist)
    - [.empty](#empty)
    - [.arguments](#arguments)
    - [.equal(val[,msg])](#equalvalmsg)
    - [.eql(obj[,msg])](#eqlobjmsg)
    - [.above(n[,msg])](#abovenmsg)
    - [.least(n[,msg])](#leastnmsg)
    - [.below(n[, msg])](#belown-msg)
    - [.most(n[, msg])](#mostn-msg)
    - [.within(start, finish[, msg])](#withinstart-finish-msg)
    - [.instanceof(constructor[, msg])](#instanceofconstructor-msg)
    - [.property(name[, val[, msg]])](#propertyname-val-msg)
    - [.ownPropertyDescriptor(name[, descriptor[, msg]])](#ownpropertydescriptorname-descriptor-msg)
    - [.lengthOf(n[, msg])](#lengthofn-msg)
    - [.match(re[, msg])](#matchre-msg)
    - [.string(str[, msg])](#stringstr-msg)
    - [.keys(key1[, key2[, …]])](#keyskey1-key2-)
    - [.throw([errorLike], [errMsgMatcher], [msg])](#throwerrorlike-errmsgmatcher-msg)
    - [.respondTo(method[, msg])](#respondtomethod-msg)
    - [.itself](#itself)
    - [.satisfy(matcher[, msg])](#satisfymatcher-msg)
    - [.closeTo(expected, delta[, msg])](#closetoexpected-delta-msg)
    - [.members(set[, msg])](#membersset-msg)
    - [.oneOf(list[, msg])](#oneoflist-msg)
    - [.change(subject[, prop[, msg]])](#changesubject-prop-msg)
    - [.increase(subject[, prop[, msg]])](#increasesubject-prop-msg)
    - [.decrease(subject[, prop[, msg]])](#decreasesubject-prop-msg)
    - [.by(delta[, msg])](#bydelta-msg)
    - [.extensible](#extensible)
    - [.sealed](#sealed)
    - [.frozen](#frozen)
    - [.finite](#finite)
    - [.fail([message])](#failmessage)
    - [.fail(actual, expected, [message], [operator])](#failactual-expected-message-operator)

<!-- /TOC -->
# BDD

> BDD 模式使用 except 与 should。它们都使用相同的可链接语言来构造断言，但是它们在最初构造断言的方式上有所不同。

## 语言链

下面的这些语言链可以提高断言的可读性

.to
.be
.been
.is
.that
.which
.and
.has
.have
.with
.at
.of
.same
.but
.does
.still

## .not

否定链中的所有断言。

```
expect(function () {}).to.not.throw(); // 该方法不抛错
expect({a: 1}).to.not.have.property('b'); // 属性中不包含属性b
expect([1, 2]).to.be.an('array').that.does.not.include(3); // 是数组且不包含3
```

> 仅仅因为您可以用.not 否定任何断言，并不意味着您应该这样做。能力越大，责任越大。通常，最好是断言产生了一个预期的输出，而不是断言没有产生无数个意外输出中的一个。

```
expect(2).to.equal(2); // 建议
expect(2).to.not.equal(1); // 不建议
```

## .deep

使链中的所有.equal、.include、.members、.keys 和.property 断言使用深度相等而不是严格相等(===)

```
// Target object deeply (but not strictly) equals `{a: 1}`
expect({a: 1}).to.deep.equal({a: 1});
expect({a: 1}).to.not.equal({a: 1});

// Target array deeply (but not strictly) includes `{a: 1}`
expect([{a: 1}]).to.deep.include({a: 1});
expect([{a: 1}]).to.not.include({a: 1});

// Target object deeply (but not strictly) includes `x: {a: 1}`
expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
expect({x: {a: 1}}).to.not.include({x: {a: 1}});

// Target array deeply (but not strictly) has member `{a: 1}`
expect([{a: 1}]).to.have.deep.members([{a: 1}]);
expect([{a: 1}]).to.not.have.members([{a: 1}]);

// Target set deeply (but not strictly) has key `{a: 1}`
expect(new Set([{a: 1}])).to.have.deep.keys([{a: 1}]);
expect(new Set([{a: 1}])).to.not.have.keys([{a: 1}]);

// Target object deeply (but not strictly) has property `x: {a: 1}`
expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
expect({x: {a: 1}}).to.not.have.property('x', {a: 1});
```

## .nested

在链中跟随的所有.property 和.include 断言中启用点和括号符号

```
expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
```

如果.或[]是实际属性名称的一部分，可以通过在它们前面添加两个反斜杠来转义它们

```
expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
expect({'.a': {'[b]': 'x'}}).to.nested.include({'\\.a.\\[b\\]': 'x'});
```

.nested 不能结合 .own 使用

## .own

导致链中跟随的所有.property 和.include 断言忽略继承的属性

```
Object.prototype.b = 2;

expect({a: 1}).to.have.own.property('a');
expect({a: 1}).to.have.property('b');
expect({a: 1}).to.not.have.own.property('b');

expect({a: 1}).to.own.include({a: 1});
expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
```

.own 不可以与 .nested 结合使用

## .ordered

导致链中跟随的所有.members 断言要求成员具有相同的顺序

```
expect([1, 2]).to.have.ordered.members([1, 2])
  .but.not.have.ordered.members([2, 1]);
```

当.include 和.ordered 组合在一起时，顺序从两个数组的开头开始

```
expect([1, 2, 3]).to.include.ordered.members([1, 2])
  .but.not.include.ordered.members([2, 3]);
```

## .any

导致链中跟随的所有.keys 断言只要求目标具有至少一个给定的键。这与.all 相反，.all 要求目标拥有所有给定的键

```
expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
```

## .all

导致链中跟随的所有.keys 断言要求目标具有所有给定的密钥。这与.any 相反，.any 只要求目标具有至少一个给定键

```
expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
```

> 注意，当在链的前面添加.all 和.any 时，默认情况下使用.all。不过，通常最好还是添加.all，因为它提高了可读性

## .a(type[,msg])

- @param { String } type
- @param { String } msg _option_
  断言目标的类型

```
expect('foo').to.be.a('string');
expect({a: 1}).to.be.an('object');
expect(null).to.be.a('null');
expect(undefined).to.be.an('undefined');
expect(new Error).to.be.an('error');
expect(Promise.resolve()).to.be.a('promise');
expect(new Float32Array).to.be.a('float32array');
expect(Symbol()).to.be.a('symbol');
```

.a 支持通过 Symbol.toStringTag 设置自定义类型的对象

```
var myObj = {
  [Symbol.toStringTag]: 'myCustomType'
};

expect(myObj).to.be.a('myCustomType').but.not.an('object');
```

在对同一个目标进行更多断言之前，最好使用.a 检查目标的类型。这样，您就可以避免任何基于目标类型执行不同操作的断言的意外行为

```
expect([1, 2, 3]).to.be.an('array').that.includes(2);
expect([]).to.be.an('array').that.is.empty;
```

在链的前面加上 .not。然而，通常最好断言目标是预期的类型，而不是断言它不是许多意外类型之一

```
expect('foo').to.be.a('string'); // Recommended
expect('foo').to.not.be.an('array'); // Not recommended
```

.a 接受一个可选的 msg 参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect(1).to.be.a('string', 'nooo why fail??');
expect(1, 'nooo why fail??').to.be.a('string');
```

.a 也可以用作语言链，以提高断言的可读性

```
expect({b: 2}).to.have.a.property('b');
```

别名.an 可以与.a 互换使用

## .include(val[,msg])

- @param { Mixed } val
- @param { String } msg _optional_

当目标是一个字符串时，.include 断言给定的字符串 val 是目标的子字符串

```
expect('foobar').to.include('foo');
```

当目标是一个数组时，.include 断言给定的 val 是目标的成员

```
expect([1, 2, 3]).to.include(2);
```

当目标是一个对象时，.include 断言给定对象 val 的属性是目标属性的子集

```
expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2});
```

当目标是一个集或弱集时，.include 断言给定的 val 是目标的成员。采用 SameValueZero 等同性算法

```
expect(new Set([1, 2])).to.include(2);
```

当目标是映射时，.include 断言给定的 val 是目标的值之一。采用 SameValueZero 等同性算法

```
expect(new Map([['a', 1], ['b', 2]])).to.include(2);
```

因为.include 根据目标的类型执行不同的操作，所以在使用.include 之前检查目标的类型非常重要

```
expect([1, 2, 3]).to.be.an('array').that.includes(2)
```

默认情况下，使用 strict(===)等式比较数组成员和对象属性。在链的早期添加.deep 来使用 deep 等式(不支持 WeakSet 目标)

```
// Target array deeply (but not strictly) includes `{a: 1}`
expect([{a: 1}]).to.deep.include({a: 1});
expect([{a: 1}]).to.not.include({a: 1});

// Target object deeply (but not strictly) includes `x: {a: 1}`
expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
expect({x: {a: 1}}).to.not.include({x: {a: 1}});
```

默认情况下，在处理对象时搜索目标的所有属性。这包括继承的和/或不可枚举的属性。在链的前面添加.own，以从搜索中排除目标的继承属性

```
Object.prototype.b = 2;

expect({a: 1}).to.own.include({a: 1});
expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
```

> 注意，目标对象始终只搜索 val 自己的可枚举属性

.deep 与 .own 可以结合使用

```
expect({a: {b: 2}}).to.deep.own.include({a: {b: 2}});
```

在链的前面添加.nested，以便在引用嵌套属性时启用点符号和括号符号

```
expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
```

如果.或[]是实际属性名称的一部分，可以通过在它们前面添加两个反斜杠来转义它们

```
expect({'.a': {'[b]': 2}}).to.nested.include({'\\.a.\\[b\\]': 2});
```

.deep 与 .nested 可以结合使用

```
expect({a: {b: [{c: 3}]}}).to.deep.nested.include({'a.b[0]': {c: 3}});
```

> .own 与 .nested 不可以结合使用

添加 .not 在链接中否定 .include

```
expect('foobar').to.not.include('taco');
expect([1, 2, 3]).to.not.include(4);
```

然而，当目标是对象时，否定.include 是很危险的。问题是，它断言目标对象没有 val 的所有键/值对，但可能有也可能没有，从而产生了不确定的预期。通常，最好确定预期的确切输出，然后编写只接受该确切输出的断言

当目标对象甚至不期望具有 val 的键时，最好准确地断言它

```
expect({c: 3}).to.not.have.any.keys('a', 'b'); // Recommended
expect({c: 3}).to.not.include({a: 1, b: 2}); // Not recommended
```

当预期目标对象具有 val 的键时，通常最好断言每个属性都有其期望值，而不是断言每个属性没有许多未预料到的值之一

```
expect({a: 3, b: 4}).to.include({a: 3, b: 4}); // Recommended
expect({a: 3, b: 4}).to.not.include({a: 1, b: 2}); // Not recommended
```

.include 接受一个可选的 msg 参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect([1, 2, 3]).to.include(4, 'nooo why fail??');
expect([1, 2, 3], 'nooo why fail??').to.include(4);
```

.include 也可以用作语言链，导致链中所有.members 和.keys 断言都要求目标是预期集的超集，而不是相同的集

```
// Target object's keys are a superset of ['a', 'b'] but not identical
expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');

// Target array is a superset of [1, 2] but not identical
expect([1, 2, 3]).to.include.members([1, 2]);
expect([1, 2, 3]).to.not.have.members([1, 2]);

// Duplicates in the subset are ignored
expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);
```

> 注意，在链的前面添加.any 会导致.keys 断言忽略.include

```
// Both assertions are identical
expect({a: 1}).to.include.any.keys('a', 'b');
expect({a: 1}).to.have.any.keys('a', 'b');
```

> 别名.includes,.contain,.contains 可以与.include 互换使用

## .ok

断言目标是一个 true 值(在布尔上下文中被认为是 true)。然而，通常最好断言目标是严格地(===)或完全等于它的期望值

```
expect(1).to.equal(1); // Recommended
expect(1).to.be.ok; // Not recommended

expect(true).to.be.true; // Recommended
expect(true).to.be.ok; // Not recommended
```

在链上 .ok 前添加 .not 否定 .ok

```
expect(0).to.equal(0); // Recommended
expect(0).to.not.be.ok; // Not recommended

expect(false).to.be.false; // Recommended
expect(false).to.not.be.ok; // Not recommended

expect(null).to.be.null; // Recommended
expect(null).to.not.be.ok; // Not recommended

expect(undefined).to.be.undefined; // Recommended
expect(undefined).to.not.be.ok; // Not recommended
```

自定义错误消息可以作为第二个参数给出

```
expect(false, 'nooo why fail??').to.be.ok;
```

## .true

断言目标严格地(===)等于true

```
expect(true).to.be.true;
```

在.true前添加.not。然而，通常最好断言目标等于它的期望值，而不是不等于true

```
expect(false).to.be.false; // Recommended
expect(false).to.not.be.true; // Not recommended

expect(1).to.equal(1); // Recommended
expect(1).to.not.be.true; // Not recommended
```

自定义错误消息可以作为第二个参数给出

```
expect(false, 'nooo why fail??').to.be.true;
```

## .false

断言目标严格地(===)等于false

```
expect(false).to.be.false;
```

在 .false 前添加 .not 。然而，通常最好断言目标等于它的期望值，而不是不等于 false

```
expect(true).to.be.true; // Recommended
expect(true).to.not.be.false; // Not recommended

expect(1).to.equal(1); // Recommended
expect(1).to.not.be.false; // Not recommended
```

自定义错误消息可以作为第二个参数给出

```
expect(true, 'nooo why fail??').to.be.false;
```

## .null

断言目标严格地(===)等于null

```
expect(null).to.be.null;
```

在 .null 前添加 .not 。然而，通常最好断言目标等于它的期望值，而不是不等于 null

```
expect(1).to.equal(1); // Recommended
expect(1).to.not.be.null; // Not recommended
```

自定义错误消息可以作为第二个参数给出

```
expect(42, 'nooo why fail??').to.be.null;
```

## .undefined

断言目标严格地(===)等于undefined

```
expect(undefined).to.be.undefined;
```

在 .undefined 前添加 .not 。然而，通常最好断言目标等于它的期望值，而不是不等于 undefined

```
expect(1).to.equal(1); // Recommended
expect(1).to.not.be.undefined; // Not recommended
```

自定义错误消息可以作为第二个参数给出

```
expect(42, 'nooo why fail??').to.be.undefined;
```

## .NaN

断言目标严格地(===)等于NaN

```
expect(NaN).to.be.NaN;
```

在 .NaN 前添加 .not 。然而，通常最好断言目标等于它的期望值，而不是不等于 NaN

```
expect('foo').to.equal('foo'); // Recommended
expect('foo').to.not.be.NaN; // Not recommended
```

自定义错误消息可以作为第二个参数给出

```
expect(42, 'nooo why fail??').to.be.NaN;
```

## .exist

断言目标严格地(===)不等于null或undefined。然而，通常最好断言目标等于它的期望值

```
expect(1).to.equal(1); // Recommended
expect(1).to.exist; // Not recommended

expect(0).to.equal(0); // Recommended
expect(0).to.exist; // Not recommended
```

在 .exist 前添加 .not

```
expect(null).to.be.null; // Recommended
expect(null).to.not.exist; // Not recommended

expect(undefined).to.be.undefined; // Recommended
expect(undefined).to.not.exist; // Not recommended
```

自定义错误消息可以作为第二个参数给出

```
expect(null, 'nooo why fail??').to.be.exist;
```

## .empty

当目标是字符串或数组时，.empty断言目标的length属性严格地(===)等于0

```
expect([]).to.be.empty;
expect('').to.be.empty;
```

当目标是映射或集合时，.empty断言目标的size属性严格等于0

```
expect(new Set()).to.be.empty;
expect(new Map()).to.be.empty;
```

当目标是非函数对象时，.empty断言目标没有任何自己的可枚举属性。基于符号键的属性将被排除在计数之外

```
expect({}).to.be.empty;
```

因为.empty根据目标的类型执行不同的操作，所以在使用.empty之前检查目标的类型非常重要

```
expect([]).to.be.an('array').that.is.empty;
```

在链的前面添加.not来否定.empty。然而，通常最好是断言目标包含预期值的数量，而不是断言它不是空的

```
expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
expect([1, 2, 3]).to.not.be.empty; // Not recommended

expect(new Set([1, 2, 3])).to.have.property('size', 3); // Recommended
expect(new Set([1, 2, 3])).to.not.be.empty; // Not recommended

expect(Object.keys({a: 1})).to.have.lengthOf(1); // Recommended
expect({a: 1}).to.not.be.empty; // Not recommended
```

自定义错误消息可以作为第二个参数给出

```
expect([1, 2, 3], 'nooo why fail??').to.be.empty;
```

## .arguments

断言目标是arguments对象

```
function test () {
  expect(arguments).to.be.arguments;
}

test();
```

在链的前面添加.not来否定.arguments。然而，通常最好是断言预期的目标类型，而不是断言它不是arguments对象

```
expect('foo').to.be.a('string'); // Recommended
expect('foo').to.not.be.arguments; // Not recommended
```

自定义错误消息可以作为第二个参数给出

```
expect({}, 'nooo why fail??').to.be.arguments;
```

别名.Arguments可以与.Arguments互换使用

## .equal(val[,msg])

- @param { Mixed } val
- @param { String } msg _optional_

断言目标严格地(===)等于给定的val

```
expect(1).to.equal(1);
expect('foo').to.equal('foo');
```

在链的前面添加.deep来使用deep等式

```
// Target object deeply (but not strictly) equals `{a: 1}`
expect({a: 1}).to.deep.equal({a: 1});
expect({a: 1}).to.not.equal({a: 1});

// Target array deeply (but not strictly) equals `[1, 2]`
expect([1, 2]).to.deep.equal([1, 2]);
expect([1, 2]).to.not.equal([1, 2]);
```

在链的前面加上。而不是减去。等号。然而，通常最好断言目标等于它的期望值，而不是不等于无数个意外值中的一个

```
expect(1).to.equal(1); // Recommended
expect(1).to.not.equal(2); // Not recommended
```

.equal接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect(1).to.equal(2, 'nooo why fail??');
expect(1, 'nooo why fail??').to.equal(2);
```

别名.equals和eq可以与.equal互换使用

## .eql(obj[,msg])

- @param { Mixed } obj
- @param { String } msg _optional_

断言目标与给定的obj深度相等

```
// Target object is deeply (but not strictly) equal to {a: 1}
expect({a: 1}).to.eql({a: 1}).but.not.equal({a: 1});

// Target array is deeply (but not strictly) equal to [1, 2]
expect([1, 2]).to.eql([1, 2]).but.not.equal([1, 2]);
```

在链的前面添加.not来否定.eql。然而，通常最好是断言目标与它的期望值相当，而不是与无数个意想不到的值之一相当

```
expect({a: 1}).to.eql({a: 1}); // Recommended
expect({a: 1}).to.not.eql({b: 2}); // Not recommended
```

.eql接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect({a: 1}).to.eql({b: 2}, 'nooo why fail??');
expect({a: 1}, 'nooo why fail??').to.eql({b: 2});
```

别名.eqls可以与.eql互换使用

.deep.equal断言几乎与.eql相同，但有一个不同之处:.deep.equal会导致对链中随后的任何其他断言也使用深度相等比较

## .above(n[,msg])

- @param { Number } n
- @param { String } msg _optional_

断言目标是一个数字或一个日期，分别大于给定的数字或日期n。然而，通常最好断言目标等于它的期望值

```
expect(2).to.equal(2); // Recommended
expect(2).to.be.above(1); // Not recommended
```

在链的前面添加.lengthOf，以断言目标的长度或大小大于给定的数字n

```
expect('foo').to.have.lengthOf(3); // Recommended
expect('foo').to.have.lengthOf.above(2); // Not recommended

expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
expect([1, 2, 3]).to.have.lengthOf.above(2); // Not recommended
```

在链的前面添加.not来抵消.above

```
expect(2).to.equal(2); // Recommended
expect(1).to.not.be.above(2); // Not recommended
```

.above接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect(1).to.be.above(2, 'nooo why fail??');
expect(1, 'nooo why fail??').to.be.above(2);
```

别名.gt和.greaterThan可以与.above互换使用

## .least(n[,msg])

- @param { Number } n
- @param { String } msg _optional_

断言目标是一个数字或日期，大于或等于给定的数字或日期n。然而，通常最好断言目标等于它的期望值

```
expect(2).to.equal(2); // Recommended
expect(2).to.be.at.least(1); // Not recommended
expect(2).to.be.at.least(2); // Not recommended
```

在链的前面添加.lengthOf，以断言目标的长度或大小大于或等于给定的数字n

```
expect('foo').to.have.lengthOf(3); // Recommended
expect('foo').to.have.lengthOf.at.least(2); // Not recommended

expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
expect([1, 2, 3]).to.have.lengthOf.at.least(2); // Not recommended
```

在链的前面加上.not来抵消.least

```
expect(1).to.equal(1); // Recommended
expect(1).to.not.be.at.least(2); // Not recommended
```

.least接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect(1).to.be.at.least(2, 'nooo why fail??');
expect(1, 'nooo why fail??').to.be.at.least(2);
```

别名.gte可以与.least互换使用

## .below(n[, msg])

- @param { Number } n
- @param { String } msg _optional_

断言目标是一个数字或一个日期，分别小于给定的数字或日期n。然而，通常最好断言目标等于它的期望值

```
expect(1).to.equal(1); // Recommended
expect(1).to.be.below(2); // Not recommended
```

在链的前面添加. lengthof，以断言目标的长度或大小小于给定的数字n

```
expect('foo').to.have.lengthOf(3); // Recommended
expect('foo').to.have.lengthOf.below(4); // Not recommended

expect([1, 2, 3]).to.have.length(3); // Recommended
expect([1, 2, 3]).to.have.lengthOf.below(4); // Not recommended
```

在链的前面加上.not来抵消.below

```
expect(2).to.equal(2); // Recommended
expect(2).to.not.be.below(1); // Not recommended
```

.下面接受一个可选的msg参数，它是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect(2).to.be.below(1, 'nooo why fail??');
expect(2, 'nooo why fail??').to.be.below(1);
```

别名.lt和.lessThan可以与下面的.互换使用

## .most(n[, msg])

- @param { Number } n
- @param { String } msg _optional_

断言目标是一个数字或日期，分别小于或等于给定的数字或日期n。然而，通常最好断言目标等于它的期望值

```
expect(1).to.equal(1); // Recommended
expect(1).to.be.at.most(2); // Not recommended
expect(1).to.be.at.most(1); // Not recommended
```

在链的前面添加.lengthOf，以断言目标的长度或大小小于或等于给定的数字n

```
expect('foo').to.have.lengthOf(3); // Recommended
expect('foo').to.have.lengthOf.at.most(4); // Not recommended

expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
expect([1, 2, 3]).to.have.lengthOf.at.most(4); // Not recommended
```

在链的前面加上.not来抵消.most

```
expect(2).to.equal(2); // Recommended
expect(2).to.not.be.at.most(1); // Not recommended
```

.most大多数情况下接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect(2).to.be.at.most(1, 'nooo why fail??');
expect(2, 'nooo why fail??').to.be.at.most(1);
```

别名.lte可以与.most互换使用

## .within(start, finish[, msg])

- @param { Number } start lower bound inclusive
- @param { Number } finish upper bound inclusive
- @param { String } msg _optional_

断言目标是一个数字或日期，大于或等于给定的数字或日期开始，小于或等于给定的数字或日期结束。然而，通常最好断言目标等于它的期望值

```
expect(2).to.equal(2); // Recommended
expect(2).to.be.within(1, 3); // Not recommended
expect(2).to.be.within(2, 3); // Not recommended
expect(2).to.be.within(1, 2); // Not recommended
```

在链的前面添加.lengthOf，以断言目标的长度或大小大于或等于给定的数字start，小于或等于给定的数字finish

```
expect('foo').to.have.lengthOf(3); // Recommended
expect('foo').to.have.lengthOf.within(2, 4); // Not recommended

expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
expect([1, 2, 3]).to.have.lengthOf.within(2, 4); // Not recommended
```

在链的前面添加.not来否定.within

```
expect(1).to.equal(1); // Recommended
expect(1).to.not.be.within(2, 4); // Not recommended
```
 
.within接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect(4).to.be.within(1, 3, 'nooo why fail??');
expect(4, 'nooo why fail??').to.be.within(1, 3);
```

## .instanceof(constructor[, msg])

- @param { Constructor } constructor
- @param { String } msg _optional_

断言目标是给定构造函数的实例

```
function Cat () { }

expect(new Cat()).to.be.an.instanceof(Cat);
expect([1, 2]).to.be.an.instanceof(Array);
```

在链的前面添加.not来否定.instanceof

```
expect({a: 1}).to.not.be.an.instanceof(Array);
```

.instanceof接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect(1).to.be.an.instanceof(Array, 'nooo why fail??');
expect(1, 'nooo why fail??').to.be.an.instanceof(Array);
```

由于ES5中的限制，.instanceof在使用Babel或TypeScript之类的换行器时可能并不总是像预期的那样工作。特别是，当子类化内置对象(如Array、Error和Map)时，可能会产生意想不到的结果

别名.instanceOf可以与.instanceOf互换使用

## .property(name[, val[, msg]]) 

- @param { String } name
- @param { Mixed } val (optional)
- @param { String } msg _optional_

断言目标具有具有给定键名的属性

```
expect({a: 1}).to.have.property('a');
```

当提供val时，.property还断言属性的值等于给定的val

```
expect({a: 1}).to.have.property('a', 1);
```

默认情况下，使用strict(===)等式。在链的前面添加.deep来使用deep等式

```
// Target object deeply (but not strictly) has property `x: {a: 1}`
expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
expect({x: {a: 1}}).to.not.have.property('x', {a: 1});
```

搜索中始终包含目标的可枚举和不可枚举属性。默认情况下，包括own和inherit属性。在链的前面添加.own，以从搜索中排除继承的属性

```
Object.prototype.b = 2;

expect({a: 1}).to.have.own.property('a');
expect({a: 1}).to.have.own.property('a', 1);
expect({a: 1}).to.have.property('b');
expect({a: 1}).to.not.have.own.property('b');
```

.deep和.own可以组合在一起

```
expect({x: {a: 1}}).to.have.deep.own.property('x', {a: 1});
```

在链的前面添加.nested，以便在引用嵌套属性时启用点符号和括号符号

```
expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]', 'y');
```

如果.或[]是实际属性名称的一部分，可以通过在它们前面添加两个反斜杠来转义它们

```
expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
```

.deep和.nested 可以结合使用

```
expect({a: {b: [{c: 3}]}})
  .to.have.deep.nested.property('a.b[0]', {c: 3});
```

.own 与 .nested 不可以结合使用

使用 .not 否定 .property

```
expect({a: 1}).to.not.have.property('b');
```

然而,当提供val否定.property是很危险的。问题是,它创造了不确定性预期通过断言目标没有一个属性与给定的键名,或者它有一个属性与给定键的名字,但它的价值不等于给定的val。它通常是最好的选择来确定的预期的输出,然后写一个断言,只有承认准确输出

当预期目标不具有具有给定键名的属性时，通常最好准确地断言该属性

```
expect({b: 2}).to.not.have.property('a'); // Recommended
expect({b: 2}).to.not.have.property('a', 1); // Not recommended
```

当预期目标具有具有给定键名的属性时，通常最好断言该属性具有其期望值，而不是断言它没有许多未预料到的值之一

```
expect({a: 3}).to.have.property('a', 3); // Recommended
expect({a: 3}).to.not.have.property('a', 1); // Not recommended
```

属性将链中随后的任何断言的目标更改为原始目标对象的属性值

```
expect({a: 1}).to.have.property('a').that.is.a('number');
```

属性接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出。当不提供val时，只使用第二种形式

```
// Recommended
expect({a: 1}).to.have.property('a', 2, 'nooo why fail??');
expect({a: 1}, 'nooo why fail??').to.have.property('a', 2);
expect({a: 1}, 'nooo why fail??').to.have.property('b');

// Not recommended
expect({a: 1}).to.have.property('b', undefined, 'nooo why fail??');
```

上面的断言与不提供val不是一回事，相反，它断言目标对象有一个b属性，它等于undefined。
断言.ownProperty和. has ownproperty可以与.own.property互换使用

## .ownPropertyDescriptor(name[, descriptor[, msg]])

- @param { String } name
- @param { Object } descriptor _optional_
- @param { String } msg _optional_

断言目标具有自己的具有给定键名的属性描述符。搜索中包括可枚举和不可枚举属性

```
expect({a: 1}).to.have.ownPropertyDescriptor('a');
```

当提供描述符时，. ownpropertydescriptor还断言属性的描述符与给定的描述符深度相等

```
expect({a: 1}).to.have.ownPropertyDescriptor('a', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 1,
});
```

在链的前面添加.not来否定.ownPropertyDescriptor

```
expect({a: 1}).to.not.have.ownPropertyDescriptor('b');
```

但是，在提供描述符时否定. ownpropertydescriptor是很危险的。问题是，它通过断言目标没有具有给定键名的属性描述符，或者它确实具有具有给定键名的属性描述符，但它并不完全等于给定的描述符，从而产生了不确定的预期。通常，最好确定预期的确切输出，然后编写只接受该确切输出的断言。
当目标不期望具有具有给定键名的属性描述符时，通常最好准确地断言该属性描述符。

```
// Recommended
expect({b: 2}).to.not.have.ownPropertyDescriptor('a');

// Not recommended
expect({b: 2}).to.not.have.ownPropertyDescriptor('a', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 1,
});
```

当预期目标具有具有给定键名的属性描述符时，通常最好断言该属性具有其预期的描述符，而不是断言它没有许多未预料到的描述符之一

```
// Recommended
expect({a: 3}).to.have.ownPropertyDescriptor('a', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 3,
});

// Not recommended
expect({a: 3}).to.not.have.ownPropertyDescriptor('a', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 1,
});
```

ownpropertydescriptor将链中跟随的任何断言的目标更改为原始目标对象的属性描述符的值

```
expect({a: 1}).to.have.ownPropertyDescriptor('a')
  .that.has.property('enumerable', true);
```

ownpropertydescriptor接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出。当不提供描述符时，只使用第二种形式

```
// Recommended
expect({a: 1}).to.have.ownPropertyDescriptor('a', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 2,
}, 'nooo why fail??');

// Recommended
expect({a: 1}, 'nooo why fail??').to.have.ownPropertyDescriptor('a', {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 2,
});

// Recommended
expect({a: 1}, 'nooo why fail??').to.have.ownPropertyDescriptor('b');

// Not recommended
expect({a: 1})
  .to.have.ownPropertyDescriptor('b', undefined, 'nooo why fail??');
```

上面的断言与不提供描述符不是一回事。相反，它断言目标对象有一个深度等于undefined的b属性描述符。
别名.haveOwnPropertyDescriptor可以与.ownPropertyDescriptor互换使用

## .lengthOf(n[, msg])

- @param { Number } n
- @param { String } msg _optional_

断言目标的长度或大小等于给定的数字n

```
expect([1, 2, 3]).to.have.lengthOf(3);
expect('foo').to.have.lengthOf(3);
expect(new Set([1, 2, 3])).to.have.lengthOf(3);
expect(new Map([['a', 1], ['b', 2], ['c', 3]])).to.have.lengthOf(3);
```

在链的前面加上 .not 否定 .lengthOf。然而，通常最好断言目标的length属性等于它的期望值，而不是不等于许多未预料到的值之一

```
expect('foo').to.have.lengthOf(3); // Recommended
expect('foo').to.not.have.lengthOf(4); // Not recommended
```

.lengthof接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect([1, 2, 3]).to.have.lengthOf(2, 'nooo why fail??');
expect([1, 2, 3], 'nooo why fail??').to.have.lengthOf(2);
```

lengthof也可以用作一个语言链，导致链中的所有.above、.below、.least、.most和.within断言都使用目标的length属性作为目标。但是，通常最好是断言目标的length属性等于它的预期长度，而不是断言它的length属性在某个值范围内

```
// Recommended
expect([1, 2, 3]).to.have.lengthOf(3);

// Not recommended
expect([1, 2, 3]).to.have.lengthOf.above(2);
expect([1, 2, 3]).to.have.lengthOf.below(4);
expect([1, 2, 3]).to.have.lengthOf.at.least(3);
expect([1, 2, 3]).to.have.lengthOf.at.most(3);
expect([1, 2, 3]).to.have.lengthOf.within(2,4);
```

由于兼容性问题，别名.length不能直接链接到未调用的方法，如.a。因此，.length在任何情况下都不能和.length互换使用。建议总是使用.lengthOf而不是.length

## .match(re[, msg])

- @param { RegExp } re
- @param { String } msg _optional_

断言目标匹配给定的正则表达式re

```
expect('foobar').to.match(/^foo/);
```

在链的前面添加.not来否定.match

```
expect('foobar').to.not.match(/taco/);
```

.match接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect('foobar').to.match(/taco/, 'nooo why fail??');
expect('foobar', 'nooo why fail??').to.match(/taco/);
```

别名.matches可以与.match互换使用

## .string(str[, msg])

- @param { String } str
- @param { String } msg _optional_

断言目标字符串包含给定的子字符串str

```
expect('foobar').to.have.string('bar');
```

在链的前面添加.not来否定.string

```
expect('foobar').to.not.have.string('taco');
```

.string接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect('foobar').to.have.string('taco', 'nooo why fail??');
expect('foobar', 'nooo why fail??').to.have.string('taco');
```

## .keys(key1[, key2[, …]])

- @param { String | Array | Object } keys

断言目标对象、数组、映射或集合具有给定的键。搜索中只包含目标自身的继承属性。
当目标是对象或数组时，键可以作为一个或多个字符串参数、一个数组参数或一个对象参数提供。在后一种情况下，只有给定对象中的键起作用;这些值将被忽略

```
expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
expect(['x', 'y']).to.have.all.keys(0, 1);

expect({a: 1, b: 2}).to.have.all.keys(['a', 'b']);
expect(['x', 'y']).to.have.all.keys([0, 1]);

expect({a: 1, b: 2}).to.have.all.keys({a: 4, b: 5}); // ignore 4 and 5
expect(['x', 'y']).to.have.all.keys({0: 4, 1: 5}); // ignore 4 and 5
```

当目标是映射或设置时，必须将每个键作为单独的参数提供

```
expect(new Map([['a', 1], ['b', 2]])).to.have.all.keys('a', 'b');
expect(new Set(['a', 'b'])).to.have.all.keys('a', 'b');
```

因为.keys根据目标的类型执行不同的操作，所以在使用.keys之前检查目标的类型非常重要

```
expect({a: 1, b: 2}).to.be.an('object').that.has.all.keys('a', 'b');
```

默认情况下，使用strict(===)等式比较映射和集合的键。在链的前面添加.deep来使用deep等式

```
// Target set deeply (but not strictly) has key `{a: 1}`
expect(new Set([{a: 1}])).to.have.all.deep.keys([{a: 1}]);
expect(new Set([{a: 1}])).to.not.have.all.keys([{a: 1}]);
```

默认情况下，目标必须拥有所有给定的键，不能有更多。在链的前面添加.any，以只要求目标具有至少一个给定键。另外，在链的前面添加.not来否定.keys。通常，最好在否定.keys时添加.any，在断言.keys时使用.all而不进行否定。
在否定.keys时，首选.any，因为.not.any。keys断言输出的确切期望，而.not.all。钥匙会产生不确定的预期

```
// Recommended; asserts that target doesn't have any of the given keys
expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');

// Not recommended; asserts that target doesn't have all of the given
// keys but may or may not have some of them
expect({a: 1, b: 2}).to.not.have.all.keys('c', 'd');
```

在没有否定的情况下断言.keys时，.all是首选，因为.all.keys断言输出的确切内容，而.any。钥匙会产生不确定的预期
在否定.keys时，首选.any，因为.not.any.keys断言输出的确切期望，而.not.all。钥匙会产生不确定的预期

```
// Recommended; asserts that target has all the given keys
expect({a: 1, b: 2}).to.have.all.keys('a', 'b');

// Not recommended; asserts that target has at least one of the given
// keys but may or may not have more of them
expect({a: 1, b: 2}).to.have.any.keys('a', 'b');
```

注意，当.all和.any都没有出现在链的前面时，默认情况下使用.all。不过，通常最好还是添加.all，因为它提高了可读性

```
// Both assertions are identical
expect({a: 1, b: 2}).to.have.all.keys('a', 'b'); // Recommended
expect({a: 1, b: 2}).to.have.keys('a', 'b'); // Not recommended
```

在链的前面添加.include，要求目标的键是预期键的超集，而不是相同的键集

```
// Target object's keys are a superset of ['a', 'b'] but not identical
expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');
```

但是，如果.any和.include组合在一起，则只有.any生效。在本例中，.include被忽略

```
// Both assertions are identical
expect({a: 1}).to.have.any.keys('a', 'b');
expect({a: 1}).to.include.any.keys('a', 'b');
```

自定义错误消息可以作为第二个参数给出

```
expect({a: 1}, 'nooo why fail??').to.have.key('b');
```

别名.key可以与.keys互换使用

## .throw([errorLike], [errMsgMatcher], [msg])

- @param { Error | ErrorConstructor } errorLike
- @param { String | RegExp } errMsgMatcher error message
- @param { String } msg _optional_
- @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types

当没有提供参数时，.throw调用目标函数并断言抛出了错误

```
var badFn = function () { throw new TypeError('Illegal salmon!'); };

expect(badFn).to.throw();
```

当提供了一个参数，它是一个错误构造函数时，.throw调用目标函数并断言抛出了一个错误，该错误是该错误构造函数的一个实例

```
var badFn = function () { throw new TypeError('Illegal salmon!'); };

expect(badFn).to.throw(TypeError);
```

当提供了一个参数，它是一个错误构造函数时，.throw调用目标函数并断言抛出了一个错误，该错误是这个错误构造函数的一个实例

```
var err = new TypeError('Illegal salmon!');
var badFn = function () { throw err; };

expect(badFn).to.throw(err);
```

当提供了一个参数(它是一个字符串)时，.throw调用目标函数并断言抛出了一个包含该字符串的消息的错误

```
var badFn = function () { throw new TypeError('Illegal salmon!'); };

expect(badFn).to.throw('salmon');
```

当提供了一个参数(它是一个正则表达式)时，.throw调用目标函数并断言抛出了一个错误，该错误带有一条匹配该正则表达式的消息

```
var badFn = function () { throw new TypeError('Illegal salmon!'); };

expect(badFn).to.throw(/salmon/);
```

当提供两个参数时，第一个参数是一个错误实例或构造函数，第二个参数是一个字符串或正则表达式，.throw调用该函数并断言抛出的错误满足了上述两种条件

```
var err = new TypeError('Illegal salmon!');
var badFn = function () { throw err; };

expect(badFn).to.throw(TypeError, 'salmon');
expect(badFn).to.throw(TypeError, /salmon/);
expect(badFn).to.throw(err, 'salmon');
expect(badFn).to.throw(err, /salmon/);
```

在链的前面添加.not来否定.throw

```
var goodFn = function () {};

expect(goodFn).to.not.throw();
```

然而，在提供任何参数时否定.throw是危险的。问题是,它创造了不确定性预期通过断言目标不会抛出错误,或者它将抛出一个错误但比给定的类型,不同类型的给定类型的或它将抛出一个错误,但不包括给定字符串的消息。通常，最好确定预期的确切输出，然后编写只接受该确切输出的断言。
当预期目标不会抛出错误时，最好准确地断言错误

```
var goodFn = function () {};

expect(goodFn).to.not.throw(); // Recommended
expect(goodFn).to.not.throw(ReferenceError, 'x'); // Not recommended
```

当目标预计将抛出一个错误,最好经常声称其预期类型的错误,和有一个消息,包括预期的字符串,而不是声称它没有许多意想不到的类型之一,和没有消息,包括一些stringoutput。
当预期目标不会抛出错误时，最好准确地断言错误

```
var badFn = function () { throw new TypeError('Illegal salmon!'); };

expect(badFn).to.throw(TypeError, 'salmon'); // Recommended
expect(badFn).to.not.throw(ReferenceError, 'x'); // Not recommended
```

.throw将链中随后的任何断言的目标更改为抛出的错误对象
当预期目标不会抛出错误时，最好准确地断言错误

```
var err = new TypeError('Illegal salmon!');
err.code = 42;
var badFn = function () { throw err; };

expect(badFn).to.throw(TypeError).with.property('code', 42);
```

.throw接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出。当不提供两个参数时，始终使用第二种形式

```
var goodFn = function () {};

expect(goodFn).to.throw(TypeError, 'x', 'nooo why fail??');
expect(goodFn, 'nooo why fail??').to.throw();
```

由于ES5中的限制，.throw在使用Babel或TypeScript等转换程序时，可能并不总是像预期的那样工作。特别是，当子类化内置错误对象，然后将子类化的构造函数传递给.throw时，可能会产生意想不到的结果
使用抛出断言时要注意一些常见的错误。一个常见的错误是意外地自己调用函数，而不是让抛出断言为您调用函数。例如，当测试一个名为fn的函数是否抛出时，提供fn而不是fn()作为断言的目标

```
expect(fn).to.throw();     // Good! Tests `fn` as desired
expect(fn()).to.throw();   // Bad! Tests result of `fn()`, not `fn`
```

如果需要断言函数fn在传递某些参数时抛出，则在另一个函数中封装对fn的调用

```
expect(function () { fn(42); }).to.throw();  // Function expression
expect(() => fn(42)).to.throw();             // ES6 arrow function
```

另一个常见错误是将对象方法(或依赖于此方法的任何独立函数)作为断言的目标。这样做是有问题的，因为当.throw调用函数时，这个上下文将会丢失;它不可能知道这是什么。有两种方法可以解决这个问题。一种解决方案是将方法或函数调用封装在另一个函数中。另一个解决方案是使用bind

```
expect(function () { cat.meow(); }).to.throw();  // Function expression
expect(() => cat.meow()).to.throw();             // ES6 arrow function
expect(cat.meow.bind(cat)).to.throw();           // Bind
```

最后，值得一提的是，JavaScript中的最佳实践是只抛出错误和派生错误，如ReferenceError、TypeError和扩展错误的用户定义对象。初始化时，没有其他类型的值会生成堆栈跟踪。尽管如此，抛出断言在技术上支持抛出任何类型的值，而不仅仅是错误及其派生。
别名.Throw和.Throw可以与.Throw互换使用

## .respondTo(method[, msg])

- @param { String } method
- @param { String } msg _optional_

当目标是非函数对象时，.respondto断言目标具有具有给定名称方法的方法。方法可以是自己的或继承的，也可以是可枚举的或不可枚举的

```
function Cat () {}
Cat.prototype.meow = function () {};

expect(new Cat()).to.respondTo('meow');
```

当目标是一个函数时，.respondto断言目标的prototype属性有一个具有给定name方法的方法。同样，方法可以是自己的或继承的，也可以是可枚举的或不可枚举的

```
function Cat () {}
Cat.prototype.meow = function () {};

expect(Cat).to.respondTo('meow');
```

在链的前面添加.self来强制.respondto将目标视为一个非函数对象，即使它是一个函数。因此，它断言目标具有具有给定名称方法的方法，而不是断言目标的prototype属性具有具有给定名称方法的方法

```
function Cat () {}
Cat.prototype.meow = function () {};
Cat.hiss = function () {};

expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow');
```

当不添加.self时，在使用.respondto之前检查目标的类型是很重要的

```
function Cat () {}
Cat.prototype.meow = function () {};

expect(new Cat()).to.be.an('object').that.respondsTo('meow');
```

在链的前面添加.not来否定.respondTo

```
function Dog () {}
Dog.prototype.bark = function () {};

expect(new Dog()).to.not.respondTo('meow');
```

.respondto接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect({}).to.respondTo('meow', 'nooo why fail??');
expect({}, 'nooo why fail??').to.respondTo('meow');
```

别名.respondsTo可以与.respondTo互换使用

## .itself

强制链中跟随的所有.respondto断言表现得好像目标是一个非函数对象，即使它是一个函数。因此，它导致.respondTo断言目标具有具有给定名称的方法，而不是断言目标的prototype属性具有具有给定名称的方法

```
function Cat () {}
Cat.prototype.meow = function () {};
Cat.hiss = function () {};

expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow');
```

## .satisfy(matcher[, msg])

- @param { Function } matcher
- @param { String } msg _optional_

调用给定的matcher函数，将目标作为第一个参数传递，并断言返回的值是真实的

```
expect(1).to.satisfy(function(num) {
  return num > 0;
});
```

在.satisfy前添加.not否定.satisfy

```
expect(1).to.not.satisfy(function(num) {
  return num > 2;
});
```

.satisfy接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect(1).to.satisfy(function(num) {
  return num > 2;
}, 'nooo why fail??');

expect(1, 'nooo why fail??').to.satisfy(function(num) {
  return num > 2;
});
```

别名.satisfy可以与.satisfy互换使用

## .closeTo(expected, delta[, msg])

- @param { Number } expected
- @param { Number } delta
- @param { String } msg _optional_

断言目标是一个给定值的正负范围内的数字。然而，通常最好断言目标等于它的期望值

```
// Recommended
expect(1.5).to.equal(1.5);

// Not recommended
expect(1.5).to.be.closeTo(1, 0.5);
expect(1.5).to.be.closeTo(2, 0.5);
expect(1.5).to.be.closeTo(1, 1);
```

在.closeTo前添加.not否定.closeTo

```
expect(1.5).to.equal(1.5); // Recommended
expect(1.5).to.not.be.closeTo(3, 1); // Not recommended
```

.close to接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect(1.5).to.be.closeTo(3, 1, 'nooo why fail??');
expect(1.5, 'nooo why fail??').to.be.closeTo(3, 1);
```

别名.nearly可以与.close互换使用

## .members(set[, msg])

- @param { Array } set
- @param { String } msg _optional_

断言目标数组具有与给定数组集相同的成员

```
expect([1, 2, 3]).to.have.members([2, 1, 3]);
expect([1, 2, 2]).to.have.members([2, 1, 2]);
```

默认情况下，使用strict(===)等式比较成员。在链的前面添加.deep来使用deep等式

```
// Target array deeply (but not strictly) has member `{a: 1}`
expect([{a: 1}]).to.have.deep.members([{a: 1}]);
expect([{a: 1}]).to.not.have.members([{a: 1}]);
```

默认情况下，顺序并不重要。在链的前面添加.ordered，以要求成员以相同的顺序出现

```
expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);
expect([1, 2, 3]).to.have.members([2, 1, 3])
  .but.not.ordered.members([2, 1, 3]);
```

默认情况下，两个数组的大小必须相同。在链的前面添加.include，以要求目标成员是预期成员的超集。注意，当添加.include时，在子集中会忽略重复项

```
// Target array is a superset of [1, 2] but not identical
expect([1, 2, 3]).to.include.members([1, 2]);
expect([1, 2, 3]).to.not.have.members([1, 2]);

// Duplicates in the subset are ignored
expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);
```

.deep、.ordered和.include都可以组合。但是，如果.include和.ordered组合在一起，则从两个数组的开头开始排序

```
expect([{a: 1}, {b: 2}, {c: 3}])
  .to.include.deep.ordered.members([{a: 1}, {b: 2}])
  .but.not.include.deep.ordered.members([{b: 2}, {c: 3}]);
```

在链的前面添加.not以否定.members。然而，这样做是危险的。问题是，它断言目标数组不具有与给定数组集合相同的所有成员，但可能有也可能没有其中一些成员，从而产生了不确定的预期。通常，最好确定预期的确切输出，然后编写只接受该确切输出的断言

```
expect([1, 2]).to.not.include(3).and.not.include(4); // Recommended
expect([1, 2]).to.not.have.members([3, 4]); // Not recommended
```

.members接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect([1, 2]).to.have.members([1, 2, 3], 'nooo why fail??');
expect([1, 2], 'nooo why fail??').to.have.members([1, 2, 3]);
```

## .oneOf(list[, msg])

- @param { Array.<\*> } list
- @param { String } msg _optional_

断言目标是给定数组列表的成员。然而，通常最好断言目标等于它的期望值

```
expect(1).to.equal(1); // Recommended
expect(1).to.be.oneOf([1, 2, 3]); // Not recommended
```

比较使用严格的等式(===)执行

在.oneOf前添加.not否定.oneOf

```
expect(1).to.equal(1); // Recommended
expect(1).to.not.be.oneOf([2, 3, 4]); // Not recommended
```

.one接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
expect(1).to.be.oneOf([2, 3, 4], 'nooo why fail??');
expect(1, 'nooo why fail??').to.be.oneOf([2, 3, 4]);
```

## .change(subject[, prop[, msg]])

- @param { String } subject
- @param { String } prop name _optional_
- @param { String } msg _optional_

当提供一个参数时，.change断言给定的函数subject在调用目标函数之前返回的值与在调用目标函数之后返回的值不同。然而，通常最好是断言subject等于它的期望值

```
var dots = ''
  , addDot = function () { dots += '.'; }
  , getDots = function () { return dots; };

// Recommended
expect(getDots()).to.equal('');
addDot();
expect(getDots()).to.equal('.');

// Not recommended
expect(addDot).to.change(getDots);
```

当提供两个参数时，.change断言给定对象主体的prop属性的值在调用目标函数之前与调用之后是不同的

```
var myObj = {dots: ''}
  , addDot = function () { myObj.dots += '.'; };

// Recommended
expect(myObj).to.have.property('dots', '');
addDot();
expect(myObj).to.have.property('dots', '.');

// Not recommended
expect(addDot).to.change(myObj, 'dots');
```

Strict(===)等式用于比较前后值

在.change前添加.not否定.change

```
var dots = ''
  , noop = function () {}
  , getDots = function () { return dots; };

expect(noop).to.not.change(getDots);

var myObj = {dots: ''}
  , noop = function () {};

expect(noop).to.not.change(myObj, 'dots');
```

.change接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出。当不提供两个参数时，始终使用第二种形式

```
var myObj = {dots: ''}
  , addDot = function () { myObj.dots += '.'; };

expect(addDot).to.not.change(myObj, 'dots', 'nooo why fail??');

var dots = ''
  , addDot = function () { dots += '.'; }
  , getDots = function () { return dots; };

expect(addDot, 'nooo why fail??').to.not.change(getDots);
```

.change还通过链中的所有.by断言断言一个数字主题增加或减少了多少。但是，使用.change.by是很危险的。问题是，它通过断言主体要么增加给定的增量，要么减少给定的增量，从而产生不确定的预期。通常，最好确定预期的确切输出，然后编写只接受该确切输出的断言

```
var myObj = {val: 1}
  , addTwo = function () { myObj.val += 2; }
  , subtractTwo = function () { myObj.val -= 2; };

expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
expect(addTwo).to.change(myObj, 'val').by(2); // Not recommended

expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
expect(subtractTwo).to.change(myObj, 'val').by(2); // Not recommended
```

别名.changes可以与.change互换使用

## .increase(subject[, prop[, msg]])

- @param { String | Function } subject
- @param { String } prop name _optional_
- @param { String } msg _optional_

提供一个参数时,.increase断言给定的函数对象返回更多的时候调用在调用目标函数相对于事先的时候调用。.increase也导致链中的基本观点断言遵循断言返回的数字是大多少。通常，最好是断言返回值增加了预期的数量，而不是断言它增加了任何数量

```
var val = 1
  , addTwo = function () { val += 2; }
  , getVal = function () { return val; };

expect(addTwo).to.increase(getVal).by(2); // Recommended
expect(addTwo).to.increase(getVal); // Not recommended
```

当提供两个参数时，.increase断言在调用目标函数后，给定对象主体的prop属性的值要比调用前大

```
var myObj = {val: 1}
  , addTwo = function () { myObj.val += 2; };

expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
expect(addTwo).to.increase(myObj, 'val'); // Not recommended
```

在链的前面添加.not来抵消.increase。然而，这样做是危险的。问题在于，它通过断言主题要么减少，要么保持不变，从而产生了不确定的预期。通常，最好确定预期的确切输出，然后编写只接受该确切输出的断言。
当预期主题减少时，通常最好断言它减少了预期的数量

```
var myObj = {val: 1}
  , subtractTwo = function () { myObj.val -= 2; };

expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
expect(subtractTwo).to.not.increase(myObj, 'val'); // Not recommended
```

当主题被期望保持不变时，最好准确地断言这一点
当预期主题减少时，通常最好断言它减少了预期的数量

```
var myObj = {val: 1}
  , noop = function () {};

expect(noop).to.not.change(myObj, 'val'); // Recommended
expect(noop).to.not.increase(myObj, 'val'); // Not recommended
```

.increase接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出。当不提供两个参数时，始终使用第二种形式

```
var myObj = {val: 1}
  , noop = function () {};

expect(noop).to.increase(myObj, 'val', 'nooo why fail??');

var val = 1
  , noop = function () {}
  , getVal = function () { return val; };

expect(noop, 'nooo why fail??').to.increase(getVal);
```

别名.increase可以与.increase互换使用

## .decrease(subject[, prop[, msg]])

- @param { String | Function } subject
- @param { String } prop name _optional_
- @param { String } msg _optional_

提供一个参数时,.decrease断言给定的函数对象返回一个较小的数量的时候调用在调用目标函数相对于事先的时候调用。.decrease也导致链中的基本观点断言遵循坚持返回小数量的多少。通常，最好是断言返回值减少了预期的数量，而不是断言它减少了任何数量

```
var val = 1
  , subtractTwo = function () { val -= 2; }
  , getVal = function () { return val; };

expect(subtractTwo).to.decrease(getVal).by(2); // Recommended
expect(subtractTwo).to.decrease(getVal); // Not recommended
```

当提供两个参数时，. reduce断言在调用目标函数之后，给定对象主体的prop属性的值比调用之前的值要小

```
var myObj = {val: 1}
  , subtractTwo = function () { myObj.val -= 2; };

expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
expect(subtractTwo).to.decrease(myObj, 'val'); // Not recommended
```

在链的前面加上.not否定.reduce。然而，这样做是危险的。问题在于，它通过断言主题要么增加，要么保持不变，从而产生了不确定的预期。通常，最好确定预期的确切输出，然后编写只接受该确切输出的断言。
当预期主题会增加时，通常最好断言它增加了预期的数量

```
var myObj = {val: 1}
  , addTwo = function () { myObj.val += 2; };

expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
expect(addTwo).to.not.decrease(myObj, 'val'); // Not recommended
```

当主题被期望保持不变时，最好准确地断言这一点
当预期主题会增加时，通常最好断言它增加了预期的数量

```
var myObj = {val: 1}
  , noop = function () {};

expect(noop).to.not.change(myObj, 'val'); // Recommended
expect(noop).to.not.decrease(myObj, 'val'); // Not recommended
```

reduce接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出。当不提供两个参数时，始终使用第二种形式

```
var myObj = {val: 1}
  , noop = function () {};

expect(noop).to.decrease(myObj, 'val', 'nooo why fail??');

var val = 1
  , noop = function () {}
  , getVal = function () { return val; };

expect(noop, 'nooo why fail??').to.decrease(getVal);
```

别名.reduction可以与.reduction互换使用

## .by(delta[, msg])

- @param { Number } delta
- @param { String } msg _optional_

当在链中跟随.increase断言时，.by断言.increase断言的主题增加了给定的增量

```
var myObj = {val: 1}
  , addTwo = function () { myObj.val += 2; };

expect(addTwo).to.increase(myObj, 'val').by(2);
```

当在链中跟随.reduce断言时，.by断言.reduce断言的主语减少了给定的增量

```
var myObj = {val: 1}
  , subtractTwo = function () { myObj.val -= 2; };

expect(subtractTwo).to.decrease(myObj, 'val').by(2);
```

当在链中跟随.change断言时，.by断言.change断言的主题增加或减少了给定的增量。但是，使用.change.by是很危险的。问题在于，它带来了不确定的预期。通常，最好确定预期的确切输出，然后编写只接受该确切输出的断言

```
var myObj = {val: 1}
  , addTwo = function () { myObj.val += 2; }
  , subtractTwo = function () { myObj.val -= 2; };

expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
expect(addTwo).to.change(myObj, 'val').by(2); // Not recommended

expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
expect(subtractTwo).to.change(myObj, 'val').by(2); // Not recommended
```

添加.not在.by前否定.by。然而，通常最好是断言主题根据预期的增量进行了更改，而不是断言它没有通过无数个意外增量中的一个进行更改

```
var myObj = {val: 1}
  , addTwo = function () { myObj.val += 2; };

// Recommended
expect(addTwo).to.increase(myObj, 'val').by(2);

// Not recommended
expect(addTwo).to.increase(myObj, 'val').but.not.by(3);
```

.by接受一个可选的msg参数，该参数是一个自定义错误消息，用于在断言失败时显示。消息也可以作为第二个参数给出

```
var myObj = {val: 1}
  , addTwo = function () { myObj.val += 2; };

expect(addTwo).to.increase(myObj, 'val').by(3, 'nooo why fail??');
expect(addTwo, 'nooo why fail??').to.increase(myObj, 'val').by(3);
```

## .extensible

断言目标是可扩展的，这意味着可以向其添加新属性。原语是不可扩展的

```
expect({a: 1}).to.be.extensible;
```

添加.not在.extensible前否定.extensible

```
var nonExtensibleObject = Object.preventExtensions({})
  , sealedObject = Object.seal({})
  , frozenObject = Object.freeze({});

expect(nonExtensibleObject).to.not.be.extensible;
expect(sealedObject).to.not.be.extensible;
expect(frozenObject).to.not.be.extensible;
expect(1).to.not.be.extensible;
```

自定义错误消息可以作为第二个参数给出

```
expect(1, 'nooo why fail??').to.be.extensible;
.sealed
```

## .sealed

断言目标是密封的，这意味着不能向其添加新属性，也不能重新配置或删除其现有属性。但是，它现有的属性仍然可以重新分配到不同的值。原语总是密封的

```
var sealedObject = Object.seal({});
var frozenObject = Object.freeze({});

expect(sealedObject).to.be.sealed;
expect(frozenObject).to.be.sealed;
expect(1).to.be.sealed;
```

添加.not在.sealed前否定.sealed

```
expect({a: 1}).to.not.be.sealed;
```

自定义错误消息可以作为第二个参数给出

```
expect({a: 1}, 'nooo why fail??').to.be.sealed;
```

## .frozen

断言目标被冻结，这意味着不能向其添加新属性，并且不能将其现有属性重新分配到不同的值、重新配置或删除。原语总是被冻结的

```
var frozenObject = Object.freeze({});

expect(frozenObject).to.be.frozen;
expect(1).to.be.frozen;
```

添加.not在.frozen前否定.frozen

```
expect({a: 1}).to.not.be.frozen;
```

自定义错误消息可以作为第二个参数给出

```
expect({a: 1}, 'nooo why fail??').to.be.frozen;
```

## .finite

断言目标是一个数字，而不是NaN或正/负无穷大

```
expect(1).to.be.finite;
```

在链的前面加上。而不是减去。limited。然而，这样做是危险的。问题是，它通过断言主语不是一个数字，或者是NaN，或者是正无穷，或者是负无穷，来产生不确定的预期。通常，最好确定预期的确切输出，然后编写只接受该确切输出的断言。
当预期目标不是一个数字时，通常最好断言它是预期的类型，而不是断言它不是许多意外类型之一

```
expect('foo').to.be.a('string'); // Recommended
expect('foo').to.not.be.finite; // Not recommended
```

当预期目标是NaN时，通常最好准确地断言这一点

```
expect(NaN).to.be.NaN; // Recommended
expect(NaN).to.not.be.finite; // Not recommended
```

当目标被期望为正无穷时，最好准确地断言

```
expect(Infinity).to.equal(Infinity); // Recommended
expect(Infinity).to.not.be.finite; // Not recommended
```

当目标被期望为负无穷时，最好准确地断言

```
expect(-Infinity).to.equal(-Infinity); // Recommended
expect(-Infinity).to.not.be.finite; // Not recommended
```

自定义错误消息可以作为第二个参数给出

```
expect('foo', 'nooo why fail??').to.be.finite;
```

## .fail([message])

## .fail(actual, expected, [message], [operator])

- @param { Mixed } actual
- @param { Mixed } expected
- @param { String } message
- @param { String } operator

抛出一个失败

```
expect.fail();
expect.fail("custom error message");
expect.fail(1, 2);
expect.fail(1, 2, "custom error message");
expect.fail(1, 2, "custom error message", ">");
expect.fail(1, 2, undefined, ">");
```