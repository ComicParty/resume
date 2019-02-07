
### 1.多行字符串的声明有哪几种常见写法？
1 反斜杠的后面必须是换行符，而不能有其他字符（比如空格），否则会报错。
```
var longString = "Long \
long \
long \
string";

longString
// "Long long long string"
```
2 连接运算符（+）可以连接多个单行字符串，用来模拟多行字符串。
```
var longString = 'Long '
  + 'long '
  + 'long '
  + 'string';
```
3 ES6 “点”号
```
var str =  `
你好
这里是饥人谷
jirengu.com
开启你的前端之路
`
```
4 字符串模板
```
var name = '饥人谷'
var website = 'jirengu.com'

var str = `你好， 这里是${name}，${website}，开启你的前端之路`
//"你好， 这里是饥人谷，jirengu.com，开启你的前端之路"
```
### 2.以下代码 输出什么？
```
var str = 'C:\Users\Document\node\index.js'
console.log(str.length)
```
如何声明 str 让 `console.log(str)`输出 `C:\Users\Document\node\index.js`?
### 3.对于字符串
`var str = 'hello jirengu.com'`
写出以下操作的代码范例
1. 获取 str 下标为3的字符
2. 获取 str 下标为4的字符的 Ascii 码
3. 截取字符g到末尾的字符串
4. 从字符o开始，截取长为4个字符的字符串
5. 获取第一个 l的下标


### 4.写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255。
```
function getRandIP(){
  //补全
}
var ip = getRandIP()
console.log(ip) // 10.234.121.45
```
### 5.写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff。

```
function getRandColor(){
}
var color = getRandColor()
console.log(color)   // #3e2f1b
```

### 6.写一个函数，返回从min到max之间的 随机整数，包括min不包括max 。
### 7.写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。
```
function getRandStr(len){
  //补全函数
}
var str = getRandStr(10); // 0a3iJiRZap
```
### 8.写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串：
* 刚刚（ t 距当前时间不到1分钟时间间隔）
* 3分钟前 (t距当前时间大于等于1分钟，小于1小时)
* 8小时前 (t 距离当前时间大于等于1小时，小于24小时)
* 3天前 (t 距离当前时间大于等于24小时，小于30天)
* 2个月前 (t 距离当前时间大于等于30天小于12个月)
* 8年前 (t 距离当前时间大于等于12个月)

```function friendlyDate(time){
}
var str = friendlyDate( '1484286699422' ) //  1分钟前（以当前时间为准）
var str2 = friendlyDate('1483941245793') //4天前（以当前时间为准）
```
### 9.实现一个reduce函数，作用和原生的reduce类似下面的例子。
Ex：
```
 var sum = reduce([1, 2, 3], function(memo, num){
             return memo + num; 
             }, 0); => 6
```
### 10.实现一个flatten函数，将一个嵌套多层的数组 array（数组） (嵌套可以是任何层数)转换为只有一层的数组，数组中元素仅基本类型的元素或数组，不存在循环引用的情况。
Ex:：`flatten([1, [2], [3, [[4]]]]) => [1, 2, 3, 4];`



