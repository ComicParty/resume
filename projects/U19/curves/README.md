# 关于`if(xx)`
`if(xx)`紧跟if后面`()`规则不同于常用的`()`

`()`圆括号不是运算符，而是一种语法结构，它会现在在多种地方：
###### 1. 把表达式放在圆括号之中，提升运算的优先级；
圆括号之中，只能放置表达式，如果将语句放在圆括号之中，就会报错。
###### 2. 跟在函数的后面，作用是调用函数;

```
function fn() {
  return 1;
}

fn();

chrome console> 1
```

###### 3. 函数放在圆括号之中会返回函数本身

```
function fn() {
  return 1;
}

(fn);

chrome console> ƒ fn() {
                  return 1;
                }
```

###### 4. 跟在if后面
跟在if后面的`()`，规则有：
1.里面存放 任意表达式 ，不能存放 语句

```
if(var a=1){
    console.log('1');
}
chrome console>Uncaught SyntaxError: Unexpected token var
```
2.表达式 的结果不一定是布尔值，JavaScript解释器会自动调用Boolean()将表达式结果转为布尔值
3.建议在 表达式中 使用“严格相等运算符”（===），而不是“相等运算符”（==）

###### 5. **不知道还有没有，目前没学到**

参考文献：

[JRG-if](http://book.jirengu.com/fe/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/Javascript/%E8%AF%AD%E5%8F%A5.html)

[阮一峰-圆括号的作用](https://wangdoc.com/javascript/operators/priority.html#%E5%9C%86%E6%8B%AC%E5%8F%B7%E7%9A%84%E4%BD%9C%E7%94%A8)


