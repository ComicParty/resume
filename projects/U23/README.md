### 1. 什么是贪婪模式和非贪婪模式？
贪婪模式：默认情况下都是最大可能匹配 ，匹配直到下一个字符不满足匹配规则为止。
非贪婪模式：一旦条件满足，就不再往下匹配。
### 2. 写一个函数isValidUsername(str)，判断用户输入的是不是合法的用户名（长度6-20个字符，只能包括字母、数字、下划线）。

```
  function isValidUsername(str){
    var lengBool = str.length < 6 | str.length > 20;
    if(lengBool){
      return(console.log("长度错误"));
    }
    
    var WBool = /\W/.test(str);
    if(WBool){
      return(console.log("只能包括字母、数字、下划线"));
    }
    
    return '合法';
    
  }
  //isValidUsername('a'); //长度错误
  //isValidUsername('afds4afds1a152f'); //"合法"
  //isValidUsername('afds4afds1a152f='); //VM1097:9 只能包括字母、数字、下划线
```

### 3. 写一个函数isPhoneNum(str)，判断用户输入的是不是手机号。
下面的函数有很高的兼容性：

```
function isPhoneNum(str){
  if(str.length===11){
    /\D/.test(str);
    return '是';
  }
  return '不是';
}

isPhoneNum('fewa');
isPhoneNum('165');
isPhoneNum('16525468521');
```

### 4. 写一个函数trim(str)，去除字符串两边的空白字符。
[参考链接](https://wangdoc.com/javascript/stdlib/regexp.html#stringprototypereplace)

```
function trim(str){
  return str.replace(/^\s+|\s+$/g,'');
}
var b = trim('  #id div.class  ');
b;
```

### 5. \d，\w，\s，[a-zA-Z0-9]，\b，.，*，+，?，x{3}，^，$分别是什么?
* \d 匹配0-9之间的任一数字，相当于[0-9]。
* \w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
* \s 匹配空格（包括换行符、制表符、空格符等），相等于[ \t\r\n\v\f]。
* a 
* \b 匹配词的边界。
* 点字符（.）匹配除回车（\r）、换行(\n) 、行分隔符（\u2028）和段分隔符（\u2029）以外的所有字符。注意，对于码点大于0xFFFF字符，点字符不能正确匹配，会认为这是两个字符。
*  量词符 星号  表示某个模式出现0次或多次，等同于{0,}。
*  量词符 + 加号表示某个模式出现1次或多次，等同于{1,}。
*  量词符 ? 问号表示某个模式出现0次或1次，等同于{0, 1}。
*  x{3} 表示x恰好重复3次
* ^ 表示字符串的开始位置
* $ 表示字符串的结束位置


