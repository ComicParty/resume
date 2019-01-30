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

参考文件：[揭秘 IIFE 语法](https://github.com/xitu/gold-miner/blob/master/TODO/disassembling-javascripts-iife-syntax.md)
### 2. 求n!，用递归来实现。
代码如下：
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

[代码](https://github.com/ComicParty/resume/tree/master/projects/U20/函数参数与%20默认的argument研究.js)

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
补全函数:（思路：利用arguments数组 与 for循环！）
```
 function sumOfSquares() {
     var leng = arguments.length;
     var sum = 0;
     for (var i = 0; i < arguments.length; i++) {
         sum += arguments[i] * arguments[i];
     }
     return sum;
 }
```
### 5.如下代码的输出？为什么？
```
console.log(a);
    var a = 1;
    console.log(b);
```
上方代码在运行的时候，不能很直观的显示，下面我 改进一下：
```
console.log('a:',a);
    var a = 1;
    console.log('b:',b);
```
运行结果：
```
a: undefined  //因为var a 变量声明提升，所以 a被定义了，但是没赋值
VM82267:3 Uncaught ReferenceError: b is not defined  
//b根本没有声明，所以是 is not defined
```

### 6.如下代码的输出？为什么？

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
输出：
```
hello  world   
//sayName函数使用的函数 声明，存在声明提前，所以声名写在后面也可以正常使用。
Uncaught TypeError: sayAge is not a function
//sayAge函数 使用的函数表达式（将一个匿名函数赋值给 变量sayAge）
//函数表达式没有 声明提前 这一特性，所以无法在 函数表达式前使用，因而报错！
```
### 7.写一个函数squireArr，其参数是一个数组，作用是把数组中的每一项变为原值的平方
```
var arr = [3, 4, 6]
function squireArr( arr ){
  //补全
}
squireArr(arr)
console.log(arr)  // [9, 16, 36]
```
补全代码如下：

```
function squireArr( arr ){
    for(var i = 0; i < arr.length;i ++){
        arr[i] *= arr[i];
    }
}
```
### 8.如下代码的输出？为什么？

```
var x = 10;
bar() ;
function foo() {
  console.log(x);
}
function bar(){
  var x = 30;
  foo();
}
```
输出
```
10
```
1. 声明提升

```
var x;
function foo() {
  console.log(x);
}
function bar(){
  var x = 30;
  foo();
}

x=10;
bar();
``` 
2. 运行 `bar();`
3. `bar();`里面调用了`foo();`,`foo();`要`console.log(x);`
4. 变量`x`遵循
    1.  函数在执行的过程中，先从自己内部找变量 //`foo();`没有定义 变量`x`
    2.  如果找不到，再从创建当前函数所在的作用域去找, 以此往上 //找到了 x=10
    3.  注意找的是变量的当前的状态
5. 输出10
### 9.写一个函数squireArr，其参数是一个数组，返回一个新的数组，新数组中的每一项是原数组对应值的平方，原数组不变

```
var arr = [3, 4, 6]
function squireArr( arr ){
  //补全
}
var arr2 = squireArr(arr)
console.log(arr)  // [3, 4, 6]
console.log(arr2)  // [9, 16, 36]
```
补全:

```
function squireArr( arr ){
  var arrCopy = new Array(arr.length);
  for( var i = 0; i< arr.length; ++i){
    arrCopy[i] = arr[i]* arr[i];
  }
  return arrCopy;
}
```
### 10.如下代码的输出？为什么？
```
var x = 10;
bar(); 
function bar(){
  var x = 30;
  function foo(){
    console.log(x) 
  }
  foo();
}  
```
输出：`30`
记住三句真言：
1.  函数在执行的过程中，先从自己内部找变量 //`foo();`没有定义 变量`x`
2.  如果找不到，再从创建当前函数所在的作用域去找, 以此往上 //找到了 x=10
3.  注意找的是变量的当前的状态
foo函数里面虽然没有 变量x，但是他的 父函数里面定义了变量`x=30;`，所以输出 `30`.
### 11.如下代码的输出？为什么？

```
var a = 1;
function fn1(){
  function fn2(){
    console.log(a)
  };
  function fn3(){
    var a = 4;
    fn2();
  }
  var a = 2;
  return fn3;
}
var fn = fn1();
fn(); //输出多少
```
输出`2`,因为：
简单情况下 fn()会抱错，然而这里却执行了！为什么呢？
因为`var fn = fn1();` 这里面的 `fn1()`函数 return 了一个函数 fn3()
所以 fn()相当于运行了 fn3函数!
fn3()又㕛叒叕调用了 fn2(),fn2()里面没有 变量a，根据

> 记住三句真言：
> 1.  函数在执行的过程中，先从自己内部找变量 //`foo();`没有定义 变量`x`
> 2.  如果找不到，再从创建当前函数所在的作用域去找, 以此往上 //找到了 x=10
> 3.  注意找的是变量的当前的状态

找到了 父函数 fn1()里面的 `var a =2;`，所以输出 `2`;

### 12.如下代码的输出？为什么？

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
输出`1`,步骤与 11题一样，但是这里的 fn2()没有在函数中，所以他找的 变量a是和他同一环境中的`var a = 1;`

13.如下代码的输出？为什么？

```
var a = 1;
function fn1(){

  function fn3(){
    function fn2(){
      console.log(a);
    }
    fn2();
    var a = 4;
  }
  var a = 2;
  return fn3;
}
var fn = fn1();
fn(); //输出多少
```
输出`undefined`
解题步骤和11、12题差不多，但是这里重新用 声明提升 的方式 写一下 fn3()函数

```
function fn3(){
    function fn2(){
        console.log(a);
    }
    var a;
    fn2();
    a = 4;
}
```
可以看到 在 声明提升的 情况下， a被 声明了，但是没有赋值 就被 fn2();函数 输出了！
所以值为 `undefined`

### 14.如下代码的输出？为什么？

```
var obj1 = {a:1, b:2};
var obj2 = {a:1, b:2};
console.log(obj1 == obj2);
console.log(obj1 = obj2);
console.log(obj1 == obj2);
```
false //类型相同，执行 严格相等运算符。地址不同，所以不相等，结果为 `false`
{a: 1, b: 2} //obj1和obj2都是引用的地址，这里是把 obj2引用对象的地址 赋值给 obj1 
//所以输出obj1指向的对象
true //类型相同，地址相同，所以 `true`

### 15.如下代码的输出？为什么？

```
var a = 1
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

```
f1(a) //没事,变动的仅仅是传入的参数，函数内存释放之后，就没有了
f2(c) // c = { name: 'jirengu', age: 3 } 是对地址进行的修改
f1(c.age) //c = { name: 'jirengu', age: 3 } 传入的是 值
console.log(a)  //1 
console.log(c)  //{ name: 'jirengu', age: 4 }
```
16.写一篇关于作用域链的博客，不少于200字，附上博客链接
[]()
17.写一个深拷贝函数。

