
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
答：
输出 27
对`\`进行转义，使用`\\`
```
var str = 'C:\\Users\\Document\\node\\index.js';
console.log(str.length);        //31
console.log(str);       //C:\Users\Document\node\index.js
```
### 3.对于字符串
`var str = 'hello jirengu.com';`
写出以下操作的代码范例

```
1. 获取 str 下标为3的字符
    1. `str[3];`        //下标法
    2. `str.charAt(3);`  //
2. 获取 str 下标为4的字符的 Ascii 码
    1.`str.charCodeAt(4);`
3. 截取字符g到末尾的字符串
    1.`str.slice(11,str.length);`       //"gu.com"
    2.`str.slice(str.indexOf('g'),str.length)` //"gu.com"
4. 从字符o开始，截取长为4个字符的字符串
    1. `str.substring(str.indexOf('o'),str.indexOf('o')+4);      //"o ji"`
    2. `str.substr(str.indexOf('o'),4);                     //"o ji"`  
    3. `str.slice(str.indexOf('o'),str.indexOf('o')+4);     //"o ji"`
5. 获取第一个 l的下标
    1.`str.search('l');         //2`

```

### 4.写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255。

```
function getRandIP(){
//补全
  var IP=0;
  var IParry =[];
    
  for(var i = 0; i < 4; i++){
    var IPnumber = Math.floor(Math.random() * (255 - 0 + 1))+0;
    IParry[i]= IPnumber;
  }
  var IParryJoin = IParry.join('.');

  return IParryJoin;
}
var ip = getRandIP()
console.log(ip) // 10.234.121.45
```

 [参考链接](https://wangdoc.com/javascript/stdlib/math.html#mathrandom)
 
### 5.写一个函数，生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff。

```
function getRandColor(){
//补全
  var color = '0123456789abcdf';
  color = new String(color);
  
  var RandColor = '#';
  for(var i = 0; i<6; i++){
    var k = Math.floor(Math.random()*(color.length - 0 +1)) + 0;
    
    var rand = color[k];
    RandColor += rand;
  }
  
  return RandColor;
}
var color = getRandColor()
console.log(color)   // #3e2f1b
```

### 6.写一个函数，返回从min到max之间的 随机整数，包括min不包括max 。

```
function randMinMax(min,max){
  return Math.floor(Math.random()*(max-min)+min);     
}
```

### 7.写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。

```
function getRandStr(len){
  //补全函数
  var str = "0123456789zbcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var strLen = str.length;
  var ranArr = '';
  
  for(var i = 0 ; i < len ; i++){
    var rand = Math.floor(Math.random()*(strLen - 0 )+ 0);
    //因为这里strLen比 str的下标大1，所以不需要加一了
    //简单点就是 strLen(不含)
   ranArr += str[rand];
  }
  
  return ranArr;
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

思路：
使用switch语句， 大于等于 就用 与(&&) 判断

```
function friendlyDate(time){
  //补全
  var timeNumber = Number(time);
  var nowTime = (new Date()).valueOf();

  var justNow = 60*100;
  var th1 =60*justNow;
  var th24 = 24*th1;
  var day30 = 30*th24; 
  var month12 = 12*day30;

  var nowJustNow = nowTime - justNow;
  var nowTh1 = nowTime - th1;
  var nowTh24 = nowTime - th24;
  var nowDay30 = nowTime - day30; 
  var nowMonth12 = nowTime - month12;

    if (nowMonth12 >= timeNumber) {
        console.log('t 距离当前时间大于等于12个月');
    }else if(nowDay30 >= timeNumber && timeNumber > nowMonth12){
        console.log('t 距离当前时间大于等于30天小于12个月');
    }else if(nowTh24 >= timeNumber && timeNumber > nowDay30){
        console.log('t 距离当前时间大于等于24小时，小于30天');
    }else if(nowTh1 >= timeNumber && timeNumber > nowTh24){
        console.log('t 距离当前时间大于等于1小时，小于24小时');
    }else if(nowJustNow >= timeNumber && timeNumber > nowTh1){
        console.log('t距当前时间大于等于1分钟，小于1小时');
    }else if(timeNumber > nowJustNow){
        console.log('t 距当前时间不到1分钟时间间隔');
    } 
}
var str = friendlyDate( '1484286699422' ); //  1分钟前（以当前时间为准）
var str2 = friendlyDate((new Date()).valueOf()-6000); 
var str3 = friendlyDate((new Date()).valueOf()-5999); 
var str4 = friendlyDate((new Date()).valueOf()-600); 
```
### 9.实现一个reduce函数，作用和原生的reduce类似下面的例子。
Ex：
```
 var sum = reduce([1, 2, 3], function(memo, num){
             return memo + num; 
             }, 0); => 6
```

答：

```
function reduce(v1){
  var sum = 0;
  for(var i =0; i< v1.length; i++){
    sum += v1[i];
  }
  return sum;
}
```

### 10.实现一个flatten函数，将一个嵌套多层的数组 array（数组） (嵌套可以是任何层数)转换为只有一层的数组，数组中元素仅基本类型的元素或数组，不存在循环引用的情况。
Ex:：`flatten([1, [2], [3, [[4]]]]) => [1, 2, 3, 4];`
答：

```
  
  function flatten(v1){
    var arr = []; //因为要把这个变量放在flatten()函数里面，我不得不再写一个函数包裹
    //为了 多次在外部使用这个函数，所以arr变量放 在 函数里面
    
    function tile(v1){
        for(var i = 0 ; i< v1.length; i++){
          if(Array.isArray(v1[i])){
            tile(v1[i]);
            //return; //整个函数结束,不能使用 
            continue;
          }
          arr.push(v1[i]);
        }
    }
    tile(v1);
    return arr;
  }
  
  flatten([1, [2], [3, [[4]]]]);
```

