### 1. 立即执行函数表达式是什么？有什么作用？
下面的代码就是 立即执行函数表达式 
英文**immediately invoked function expression** 缩写  **IIFE**
```
(function() {
    // ...
})();
```
变种写法

```
//圆括号 紧跟在函数后面
(function() {
    // ...
}());

//实名 IIFE 
(function iife() {
    // ...
})();

//避免有人少写;  加添 防御性分号
;(function() {
    // ...
})();
```
**功能**：
1. 在解释器经过它时执行一次。
2. 因为他本质上是一个函数，所以作用域独立，可以预防变量名冲突。
**使用 IIFE 的时机**
用于任务中只需执行一次的地方，而非脚本中需在多处反复调用的情况。 如：
1. 当函数被调用时作为实参（为此函数计算出一个值）。
2. 用于对象的属性赋值。
3. 用于处理程序和监听器，以在事件发生时执行。
4. 用于防止在两段脚本中因使用相同的变量名产生的冲突。

[揭秘 IIFE 语法](https://github.com/xitu/gold-miner/blob/master/TODO/disassembling-javascripts-iife-syntax.md)
### 2. 求n!，用递归来实现。

```
function digui(n){
    var sum = n;
    if(sum>1){
        sum*=digui(sum-1);
    }
    return sum;
}
```
### 3. 以下代码输出什么？
```
function getInfo(name, age, sex){
        console.log('name:',name);
        console.log('age:', age);
        console.log('sex:', sex);
        console.log(arguments);
        arguments[0] = 'valley';
        console.log('name', name);
    }

    getInfo('饥人谷', 2, '男');
    getInfo('小谷', 3);
    getInfo('男');
```

[代码](https://github.com/ComicParty/resume/tree/master/projects/U20/函数参数与默认的argument研究.js)

[图片](https://github.com/ComicParty/resume/tree/master/projects/U20/配套图片-函数参数与%20默认的argument研究.jpg)
### 4. 写一个函数，返回参数的平方和？

```
 function sumOfSquares(){
   }
   var result = sumOfSquares(2,3,4)
   var result2 = sumOfSquares(1,3)
   console.log(result)  //29
   console.log(result2)  //10
```
如下代码的输出？为什么？

```
console.log(a);
    var a = 1;
    console.log(b);
```
如下代码的输出？为什么？

```
sayName('world');
    sayAge(10);
    function sayName(name){
        console.log('hello ', name);
    }
    var sayAge = function(age){
        console.log(age);
    };
```
写一个函数squireArr，其参数是一个数组，作用是把数组中的每一项变为原值的平方

```
var arr = [3, 4, 6]
function squireArr( arr ){
  //补全
}
squireArr(arr)
console.log(arr)  // [9, 16, 36]
```
如下代码的输出？为什么？

```
var x = 10
bar() 
function foo() {
  console.log(x)
}
function bar(){
  var x = 30
  foo()
}
```
写一个函数squireArr，其参数是一个数组，返回一个新的数组，新数组中的每一项是原数组对应值的平方，原数组不变

```
var arr = [3, 4, 6]
function squireArr( arr ){
  //补全
}
var arr2 = squireArr(arr)
console.log(arr)  // [3, 4, 6]
console.log(arr2)  // [9, 16, 36]
```
如下代码的输出？为什么？
```
var x = 10;
bar() 
function bar(){
  var x = 30;
  function foo(){
    console.log(x) 
  }
  foo();
}  
```
11.如下代码的输出？为什么？

```
var a = 1
function fn1(){
  function fn2(){
    console.log(a)
  }
  function fn3(){
    var a = 4
    fn2()
  }
  var a = 2
  return fn3
}
var fn = fn1()
fn() //输出多少
```
12.如下代码的输出？为什么？

```
var a = 1
function fn1(){
  function fn3(){
    var a = 4
    fn2()
  }
  var a = 2
  return fn3
}
function fn2(){
  console.log(a)
}
var fn = fn1()
fn() //输出多少
```
13.如下代码的输出？为什么？

```var a = 1
function fn1(){

  function fn3(){
    function fn2(){
      console.log(a)
    }
    fn2()
    var a = 4
  }
  var a = 2
  return fn3
}
var fn = fn1()
fn() //输出多少
```
14.如下代码的输出？为什么？

```var obj1 = {a:1, b:2};
var obj2 = {a:1, b:2};
console.log(obj1 == obj2);
console.log(obj1 = obj2);
console.log(obj1 == obj2);
```
15.如下代码的输出？为什么？

```var a = 1
var c = { name: 'jirengu', age: 2 }

function f1(n){
  ++n
}
function f2(obj){
  ++obj.age
}

f1(a) 
f2(c) 
f1(c.age) 
console.log(a) 
console.log(c) 
```
16.写一篇关于作用域链的博客，不少于200字，附上博客链接
[]()
17.写一个深拷贝函数。

