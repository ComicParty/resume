### 1.下面这段代码输出结果是? 为什么?

```
var a = 1;
setTimeout(function(){//setTimeout()函数会在正常代码运行结束后运行
    a = 2; //对a进行重新赋值
    console.log(a); //输出2
}, 0);
var a ; //重复声明，但是没有赋值是没有意义的
console.log(a); //输出1
a = 3;  //对a进行重新赋值
console.log(a); //输出3
```

```
1
3
2
```
### 2.下面这段代码输出结果是? 为什么?

```
var flag = true;
setTimeout(function(){
    flag = false;
},0)
while(flag){}
console.log(flag);

```
答：没有输出，
首先，主线程会去执行所有的同步任务。等到同步任务全部执行完，就会去看任务队列里面的异步任务。

所以异步任务 `setTimeout()`，会进入 任务队列（task queue），被 JS引擎挂起。

而执行`while(flag){}`，但`flag`值一直为true，所以，while一直执行，但while的里面什么都没有无法退出，所以 我们什么都看不到，但程序又㕛叒叕一直运行着！死循环～

### 3.实现一个节流函数。

```
function flow(f,time){
  var timer = null;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
      f();
    },time);
  }
}

function fn(){
  console.log('hello');
}

var fn2 = flow(fn,100);
fn2();
fn2();
```

### 4.简单解释单线程、任务队列的概念。

> **单线程模型**指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。
> 注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行（称为主线程），其他线程都是在后台配合。

JS脚本 是从上到下执行的。
**任务队列**

> JavaScript 运行时，除了一个正在运行的主线程，引擎还提供一个任务队列（task queue），里面是各种需要当前程序处理的异步任务。（实际上，根据异步任务的类型，存在多个任务队列。为了方便理解，这里假设只存在一个队列。）

异步任务有：`setTimeout();`

> 首先，主线程会去执行所有的同步任务。等到同步任务全部执行完，就会去看任务队列里面的异步任务。如果满足条件，那么异步任务就重新进入主线程开始执行，这时它就变成同步任务了。等到执行完，下一个异步任务再进入主线程开始执行。一旦任务队列清空，程序就结束执行。

这也就是为什么有的 函数写在前面却后执行了的原因。

