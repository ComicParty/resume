### 1. 根据视频的讲解，写一篇关于if(xx)和 a==b的判断的博客

[if(xx)](https://github.com/ComicParty/resume/tree/master/projects/U19/curves)

[a==b的判断](https://github.com/ComicParty/resume/tree/master/projects/U19/equal)

### 2. 以下代码输出结果是? 为什么 （选做）
选做的，我就不做了。

### 3. 遍历数组 `var arr = [3,4,5] `，打印数组里的每一项的平方。
请将以下代码在chrome console运行
```
var arr = [3,4,5];
for (var i = 0; i < arr.length; i++) {
    var arrSquare = arr[i]*arr[i];
    console.log(arrSquare );
}
```
### 4. 以下代码的输出结果是? 为什么？
```
 var a = 1;
 var b = 3;
 console.log( a+++b ); 
```
结果是4.
答：正常的 `a+b`，很容易得到 4这个答案，但是题目中`a`与`b`之间有3个`+`,怎么计算呢？
很简单：操作符是有优先级的，谁的 优先级高，谁就先形成。
后++为17级
前++为16级
   +为13级
所以`a+++b`可以理解成`(a++)+b`
因为a是后++，所以a在表达式中的值为1再加上b，所以结果是4.

### 5.switch case 语句中的 break 有什么作用？
break用于跳出swicth case语句，如果没有break，他会一直运行到程序最后才结束。

### 6.break与continue有什么区别？
break是跳出循环，不再继续循环。
continue是跳出本次循环，继续下一次循环。
可以这样记，continue比较长，所以还得再循环。

### 7.写出如下知识点的代码范例:
1. if-else 的用法

```
if(true){
  //如果if后面的（）里面的 boolean值 为真，则执行这里的语句
}else{
  //否则执行我
}
```
2. switch-case 的用法
多个if-else语句建议使用switch
```
switch(变量){
    case "检查我与变量值是否相同":
    //可写可不写
    break;//break为可选
    case "":
    //当case值与变量值相同时，可以执行break里面的语句
    break;//如果不写break，那么 switch会发挥传递性，不会再判断case中的值是否相等
    //直接执行语句，直到switch语句结束
    default://可选
    //当case中没有值匹配，这里才会执行
}
```
3. while 的用法
While语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。
while语句基本都可以转换成for语句，除非特殊情况
```
while (条件)
  语句;
```
4. do-while 的用法
do...while循环与while循环类似，唯一的区别就是先运行一次循环体，然后判断循环条件。
```
do {
  语句
} while (条件);
```
5. for 遍历数组的用法
for语句是循环命令的另一种形式，可以指定循环的起点、终点和终止条件。它的格式如下。
```
for (初始化表达式; 条件; 递增表达式) {
  语句
}
```
* 初始化表达式（initialize）：确定循环变量的初始值，只在循环开始时执行一次。
* 条件表达式（test）：每轮循环开始时，都要执行这个条件表达式，只有值为真，才继续进行循环。
* 递增表达式（increment）：每轮循环的最后一个操作，通常用来递增循环变量。
6. for-in 遍历对象的用法
[MDN-for-in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)

for...in语句以任意顺序遍历一个对象的可枚举属性。对于每个不同的属性，语句都会被执行。
```
for (variable in object) {...}
```
variable     在每次迭代时，将不同的属性名分配给变量。
object      被迭代枚举其属性的对象。
7. break 和 continue 的用法
 break:跳出循环
 代码打印：0 就结束了结束
```
for(var i = 0;i<100;i++){
    if(i===0){
        console.log(i);
        break;
    }
    console.log(i);
}
```
continue:跳出本次循环
代码打印是从：1～99
```
for(var i = 0;i<100;i++){
    if(i===0){
        continue;
    }
    console.log(i);
}
```



