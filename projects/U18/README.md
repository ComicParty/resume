题目列表：（答案在题目列表下方）
# 1.NaN是什么？ 有什么特别之处？
# 2.以下代码的输出结果是？
```
var a = 1;  
a+++a;  
typeof a+2;
```
# 3.以下代码的输出结果是？为什么？
```
console.log(1+1);    
console.log("2"+"4");  
console.log(2+"4"); 
console.log(+"4"); 
```
# 4.==与===有什么区别？

## 1.
NaN
	释义
		它是一个特殊的值，这个数值用于表示一个本来要返回数值的操作数，结果未返回数值的情况。
	特点
		任何涉及 NaN 的操作都会返回 NaN
		NaN 值与任何值都不相等，包括自己
	isNaN()函数
		该接收一个参数（可以是任何类型），而函数会帮我们确定这个参数是否“不是数值”。
		会进行类型转换
## 2.
```
var a = 1;  
a+++a;  
>3
typeof a+2; 
>"number2"
```
## 3.
```
console.log(1+1);
> 2
```
输出1+1这个表达式的结果2.

```
console.log("2"+"4");  
> 24
```
错：先输出 字符"2"，再输出字符"4"

对：输出 拼接的字符串 “24”
```
console.log(2+"4"); 
> 24
```
错：先输出 数字2，再输出 字符4

对：输出 拼接的字符串“24”

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U18/imgs/console.jpg" alt="Sample"  width="249" height="451">
    <p align="center">
        <em>chrome console</em>
    </p>
</p>

```
console.log(+"4"); 
> 4
```
错：输出4这个字符

输出 数字4 


## 4.
相等运算符（==）比较两个值是否相等，
严格相等运算符（===）比较它们是否为“同一个值”。
如果两个值不是同一类型，严格相等运算符（===）直接返回false，而相等运算符（==）会将它们转换成同一个类型，再用严格相等运算符进行比较。

[阮一峰-BOOK-比较运算符](https://wangdoc.com/javascript/operators/comparison.html#%E4%B8%A5%E6%A0%BC%E7%9B%B8%E7%AD%89%E8%BF%90%E7%AE%97%E7%AC%A6)


