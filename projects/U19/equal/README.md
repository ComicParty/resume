# a==b
* 如果两个值类型相同，则执行 **一致/严格相等 (===)** 的运算
    严格相等运算符（===）比较它们是否为“同一个值”。
    如果两个值不是同一类型，严格相等运算符（===）直接返回false
* 如果两个值的类型不同，相等运算符会**先**将数据进行类型转换，然后**再**用严格相等运算符比较。
    1. 如果一个是null，一个是undefined，那么相等
    2. 如果一个是数字，一个是字符串，先将字符串转为数字，然后比较
    3. 如果一个值是true/false则将其转为1/0比较
    4. 如果一个值是对象，一个是数字或字符串，则尝试使用valueOf和toString转换后比较
    5. 其它就不相等了

> 阮一峰

1.原始类型的值会转换成数值再进行比较。
```
//MDN
 1   ==  1     // true
"1"  ==  1     // true
 1   == '1'    // true
 0   == false  // true
 {} == {}       //false 类型相同，进行 一致 运算，两个 对象的地址 不同
 

 1 == true // true
// 等同于 1 === Number(true)

0 == false // true
// 等同于 0 === Number(false)

2 == true // false
// 等同于 2 === Number(true)

2 == false // false
// 等同于 2 === Number(false)

'true' == true // false
// 等同于 Number('true') === Number(true)
// 等同于 NaN === 1

'' == 0 // true
// 等同于 Number('') === 0
// 等同于 0 === 0

'' == false  // true
// 等同于 Number('') === Number(false)
// 等同于 0 === 0

'1' == true  // true
// 等同于 Number('1') === Number(true)
// 等同于 1 === 1

'\n  123  \t' == 123 // true
// 因为字符串转为数字时，省略前置和后置的空格
```
2.对象（这里指广义的对象，包括数组和函数）与原始类型的值比较时，对象转换成原始类型的值，再进行比较。

```
// 对象与数值比较时，对象转为数值
[1] == 1 // true
// 等同于 Number([1]) == 1

// 对象与字符串比较时，对象转为字符串
[1] == '1' // true
// 等同于 String([1]) == '1'
[1, 2] == '1,2' // true
// 等同于 String([1, 2]) == '1,2'

// 对象与布尔值比较时，两边都转为数值
[1] == true // true
// 等同于 Number([1]) == Number(true)
[2] == true // false
// 等同于 Number([2]) == Number(true)
```
3. `undefined`和`null`与其他类型的值比较时，结果都为`false`，它们互相比较时结果为true。

```
0 == ''             // true
0 == '0'            // true

2 == true           // false
2 == false          // false

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
```


参考文献：

[MDN-比较操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

[JRG-相等](http://book.jirengu.com/fe/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/Javascript/%E8%BF%90%E7%AE%97%E7%AC%A6.html)

[阮一峰-相等运算符](https://wangdoc.com/javascript/operators/comparison.html#%E7%9B%B8%E7%AD%89%E8%BF%90%E7%AE%97%E7%AC%A6)

