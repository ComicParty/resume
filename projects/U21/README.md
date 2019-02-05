### 1.JSON格式的数据需要遵循什么规则？
1. 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。
2. 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）。
3. 字符串必须使用双引号表示，不能使用单引号。
4. 对象的键名必须放在双引号里面。
5. 数组或对象最后一个成员的后面，不能加逗号。

### 2.遍历 company 对象，输出里面每一项的值
```
var company = {
    name: '饥人谷',
    age: 3,
    sex: '男'
}
```
注意 对象 `.`和`[]`的使用
```
for(var comKey in company){
    console.log(company[comKey]);
}
```
### 3. 使用 JSON 对象实现一个简单的深拷贝函数(deepCopy)。
思路：把 JS对象 转成 JSON，再把 JOSN转换成 JS对象。
```
//obj对象
var obj = {
    name: 'hunger',
    age: 3,
    friends: ['aa', 'bb', 'cc']
}

var obj2 = JSON.parse(JSON.stringify(obj))
obj.age = 4
console.log(obj2.age)
```
利用 ES2017 才引入标准的`Object.getOwnPropertyDescriptors`方法实现[对象的深拷贝](https://wangdoc.com/javascript/oop/object.html#in-%E8%BF%90%E7%AE%97%E7%AC%A6%E5%92%8C-forin-%E5%BE%AA%E7%8E%AF)：
```
function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}
```
### 4.分别举例说明数组方法push、pop、shift、unshift、join、splice、sort、reverse、concat的作用？
###### **push**——在数组最后添加一个元素返回
改变数组
——新增
返回——改变后的数组
```
var arr = [3, 4, 5, 6];
arr.push('hello')      //在数组最后添加一个元素
console.log(arr)         // [3, 4, 5, 6,"hello"]
```
###### **pop**——把数组最后一位弹出来返回
改变数组
——删除
返回 删除的元素
```
var arr = [3, 4, 5, 6];
var value = arr.pop()    //把数组最后一位弹出来返回，数组发生变化
console.log(value)       //6
console.log(arr)         //[3, 4, 5]
```
###### **shift**——把数组第一位拿出来返回
改变数组
——删除
返回 删除的元素
```
var arr = [3, 4, 5, 6];
var valueShift = arr.shift(); //把数组第一位拿出来返回，数组发生变化
console.log(valueShift);      // 3
console.log(arr);         //[4, 5, 6]
```
###### **unshift**
改变数组
——新增
返回 改变后 数组长度
```
var arr = [3, 4, 5, 6];
var arrUnshift = arr.unshift(3);
console.log(arr);               //[3,3,4,5,6]
console.log(arrUnshift);      //5 ——返回改变后 数组长度
```  
###### **join**
不改变——数组
——新增
返回 字符串
```
var arr = [3, 4, 5, 6];
var str = arr.join('-');
//arr.join('');//join('')里面没内容，相当于返回一个 字符串

console.log(arr);      //[3,4,5,6]  不改变——数组
typeof arr;             //"object"

console.log(str);       //3-4-5-6  返回 字符串
typeof str;             //"string"
```
###### **splice**
改变原数组

JavaScript提供了一个splice方法用于一次性解决数组添加、删除（这两种方法一结合就可以达到替换效果），方法有三个参数

1.数组索引(含)
2.删除元素的 个数（含）——（见下面 **加粗**，也有可能是执行几次）
3.插入的新元素，当然也可以写多个

splice方法返回一个由删除元素组成的新数组，没有删除则返回空数组

**删除**
指定前两个参数，可以使用splice删除数组元素，同样会带来索引调整及length调整

```
//       0  1  2  3  4
var a = [1, 2, 3, 4, 5];
console.log(a.splice(1,3));//[2, 3, 4]
console.log(a.length);//2
console.log(a);//[1,5]
```
如果数组索引不是从0开始的，那么结果会很有意思，有一这样数组
```
var a = new Array();
a[2]=2;
a[3]=3;
a[7]=4;
a[8]=5;

// 0 1 2 3 4 5 6 7 8 
// u u 2 3 u u u 4 5
 
console.log(a.splice(3,4)); //[3,empty*3]
console.log(a.length); //5
console.log(a); //[empty*2,2,4,5]
```
上面例子可以看到，splice的第一个参数是绝对索引值，而不是相对于数组索引，第二个参数并不是删除元素的个数，而是**删除动作执行多少次**，并不是按数组实际索引移动，而是连续移动。同时调整后面元素索引，前面索引不理会

>* 根据现象推理原理，可以解释现象的原理有许多个，但是！真正正确的原理保有一个。*
> *这里，splice()方法，具体是 **删除动作执行多次**（原地-参数1所指的位置-删除多次），还是**从目标位置，数数，数够了一起删除**不得而知*

**插入与替换**
如果：删除动作执行的次数设为0，第三个参数也能能执行插入操作——在目标元素**前**面插入！！！
如果第二个参数不为0则变成了 先在该位置删除再插入，也就是**替换效果**
```
var a = [1,2,3,4,5];
a.splice(1,0,9,99,999);
//参数1 值为1，也就是数组中的 索引为1的数——>2
console.log(a);//[1, 9, 99, 999, 2, 3, 4, 5]//要插入的数在 2 的前面
console.log(a.length); //8
a.splice(1,3,8,88,888);
console.log(a.length);//8
console.log(a);//[1, 8, 88, 888, 2, 3, 4, 5]
```
**负数**——从倒数位置开始删除
起始位置如果是负数，就表示从倒数位置开始删除。
```
var a = [1,2,3,4,5];
var b =a.splice(-2,2);
console.log(a,'%20',b);
//[1, 2, 3] "%20" (2) [4, 5]
```
`a.splice(-2,2);`
注意：第一个参数-最后一个数5 的索引为1（含-包含目标位进行操作）
     第二个参数-向后数，不是向前数-（含-包含计数位进行操作）
**只有一个参数**
> 如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。
```
var a = [1, 2, 3, 4];
a.splice(2) // [3, 4]
a // [1, 2]
```

###### **slice(start,end)**——返回数组中一个片段（从 *参数1* 到 *参数2* 的距离）或子数组
不改变——原数组
返回——新数组

不要和splice方法混淆，slice方法用于返回数组中一个片段或子数组，

1. 如果只写一个参数，返回参数到数组结束部分
2. 如果参数出现负数，则从数组尾部计数（-3意思是数组倒第三个，一般人不会这么干，但是在不知道数组长度，想舍弃后n个的时候有些用，不过数组长度很好知道。。。。，好纠结的用法），
3. 如果start大于end返回空数组

参数1**（含）**
参数2**（不含）**
从 *参数1* 到 *参数2* 的距离

```
var a = [1,2,3,4,5];
console.log(a); //[1, 2, 3, 4, 5]
console.log(a.slice(1,2));//2
console.log(a.slice(1,-1));//[2, 3, 4]
console.log(a.slice(3,2));//[]
console.log(a); //[1, 2, 3, 4, 5]
```
###### **sort**
sort方法用于对数组进行排序，当没有参数的时候会按字母表升序排序，如果含有undefined会被排到最后面，对象元素则会调用其toString方法，如果想按照自己定义方式排序，可以传一个排序方法进去，很典型的策略模式，同样sort会改变原数组。
```
var a=[5,4,3,2,1];
a.sort();
console.log(a) //[1, 2, 3, 4, 5];
```
但是。。。
```
var a=[7,8,9,10,11];
a.sort();
console.log(a) //[10, 11, 7, 8, 9];
```
因为按照字母表排序，7就比10大了，这时候我们需要传入自定义排序函数

如果想按照数值排序，可（减法）
``` 
var a = [7,8,9,10,11]

    a.sort(function(v1,v2){
        return v1-v2
    })
    console.log(a) //[7, 8, 9, 10, 11]
```
按对象的age属性值 从小到大排序
```
    var users = [
        {
            name: 'aaa',
            age: 21
        },
        {
            name: 'baa',
            age: 18
        },
         {
            name: 'abc',
            age: 24
        }
    ];
    // 按age 从小到大排序

    var sortByAge = users.sort(function(v1, v2){
        return  v1.age - v2.age;
    })

  // 按name从大到小排序  
   var sortByName = users.sort(function(v1,v2){//user === sortByName
        var n1 = v1.name.toUpperCase();
        var n2 = v2.name.toUpperCase();
        if(n1 >n2){
         return 1;
        }
        return -1;  
   });
```
###### **reverse**——将数组逆序
改变——原数组
方法用于将数组逆序
```
var a = [1,2,3,4,5];
a.reverse();
console.log(a); //[5, 4, 3, 2, 1]
```
###### **a.concat(b)**——返回一个a和b共同组成的新数组
不改变——原数组

看起来像是剪切，但这个真不是形声字，concat方法用于拼接数组，a.concat(b)返回一个a和b共同组成的新数组，同样不会修改任何一个原始数组，也不会递归连接数组内部数组
```
var a = [1,2,3,4,5];
var b = [6,7,8,9];
console.log(a.concat(b));//[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(a); //[1, 2, 3, 4, 5]
console.log(b); //[6, 7, 8, 9]
```

### 5.写一个函数，操作数组，返回一个新数组，新数组中只包含正数。
```
function filterPositive(arr){
    //填写 内容如下：
    arr.splice(1,1);
    arr.splice(2,2);
    return arr;
    //或者用for，判断。。如果符合条件，就执行某某删除函数
}
var arr = [3, -1,  2,  '饥人谷', true];
console.log(filterPositive(arr)); //[3,  2]
```
上面是知道要操作什么内容 ，所以使用 splice()，如果改变一下操作的内容，就不能用了，所以有了下面的：
```
function filterPositive(arr){
    var filterArr = arr.filter(function(v1){
        return (v1>0);
    });
    
    return filterArr;
}
var arr = [3, -1,  2,  '饥人谷', true];
console.log(filterPositive(arr)); //[3,  2]
```
### 6. 用 splice函数分别实现 push、pop、shift、unshift方法。
如:
```
function push(arr, value){
    arr.splice(arr.length, 0, value)
    return arr.length
}
var arr = [3, 4, 5]
arr.push(10) // arr 变成[3,4,5,10]，返回4
```
改进版
```
function push(arr){
    for(var i=1; i<arguments.length;i++){
        arr.splice(arr.length, 0, arguments[i])
    }
    return arr.length
}
//下面的写法有兴趣的同学可自行了解 //http://es6.ruanyifeng.com/#docs/array
function push(arr, ...args){
    arr.splice(arr.length, 0, ...args)
    return arr.length
}
```
我的方案
```
//pop
function pop(arr){
     var leng = --arr.length;
    arr.splice(leng,1);
    return arr;
}
var arr = [3, 4, 5];
pop(arr);
arr;                // [3, 4]

//shift
function shift(arr){
    arr.splice(0,1);
    return arr;
}
var arr = [3, 4, 5];
shift(arr);
arr;                //[4, 5]

//unshift
function unshift(arr,value){
    arr.splice(0,0,value);

    return arr;
}
var arr = [3, 4, 5];
unshift(arr,32);
```
### 7.对以下代码 users中的对象，分别以 name 字段、age 字段、company 字段进行排序
```
var users = [
  { name: "John", age: 20, company: "Baidu" },
  { name: "Pete", age: 18, company: "Alibaba" },
  { name: "Ann", age: 19, company: "Tecent" }
];

//name
users.sort(function(v1,v2){
    var name1 = v1.name.toUpperCase();
    var name2 = v2.name.toUpperCase();
    if(name1 < name2){
        return -1;
    }
    if(name1 > name2){
        return 1;
    }
    return 0;
});
//age  数值用-，字符串用> 或 <
users.sort(function(v1,v2){
    return v1.age-v2.age;
});
// company
users.sort(function(v1,v2){
    var name1 = v1.company.toUpperCase();
    var name2 = v2.company.toUpperCase();
    if(name1 < name2){
        return -1;
    }
    if(name1 > name2){
        return 1;
    }
    return 0;
});
```
### 8.分别举例说明ES5数组方法 indexOf()、forEach、map、every、some、filter、reduce的用法？
参考资料[JS](https://wangdoc.com/javascript/stdlib/array.html#some%EF%BC%8Cevery)

###### 1. indexOf()
indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。
```
var a = ['a', 'b', 'c'];

a.indexOf('b') // 1
a.indexOf('y') // -1
```
indexOf方法还可以接受第二个参数，表示搜索的开始位置。

`['a', 'b', 'c'].indexOf('a', 1) // -1`

上面代码从1号位置开始搜索字符a，结果为-1，表示没有搜索到。
###### 2. forEach()
forEach方法与map方法很相似，也是对数组的所有成员依次执行参数函数。但是，forEach方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用map方法，否则使用forEach方法。

forEach的用法与map方法一致，参数是一个函数，该函数同样接受三个参数：当前值、当前位置、整个数组。
```
function log(element, index, array) {
  console.log('[' + index + '] = ' + element);
}

[2, 5, 9].forEach(log);
// [0] = 2
// [1] = 5
// [2] = 9
```
上面代码中，forEach遍历数组不是为了得到返回值，而是为了在屏幕输出内容，所以不必使用map方法。
###### 3. map()
map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。
```
var numbers = [1, 2, 3];

numbers.map(function (n) {
  return n + 1;
});
// [2, 3, 4]

numbers
// [1, 2, 3]
```
上面代码中，numbers数组的所有成员依次执行参数函数，运行结果组成一个新数组返回，原数组没有变化。

map方法接受一个函数作为参数。该函数调用时，map方法向它传入三个参数：当前成员、当前位置和数组本身。

```
[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
// [0, 2, 6]
```
上面代码中，map方法的回调函数有三个参数，elem为当前成员的值，index为当前成员的位置，arr为原数组（[1, 2, 3]）。
###### 4. some()，every()
这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。

它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。

some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false。
```
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true
```
上面代码中，如果数组arr有一个成员大于等于3，some方法就返回true。

every方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false。
```
var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false
```
上面代码中，数组arr并非所有成员大于等于3，所以返回false。

注意，对于空数组，some方法返回false，every方法返回true，回调函数都不会执行。
```
function isEven(x) { return x % 2 === 0 }

[].some(isEven) // false
[].every(isEven) // true
```
some和every方法还可以接受第二个参数，用来绑定参数函数内部的this变量。
###### 6. filter
filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。

```
[1, 2, 3, 4, 5].filter(function (elem) {
  return (elem > 3);
})
// [4, 5]
```
上面代码将大于3的数组成员，作为一个新数组返回。

```
var arr = [0, 1, 'a', false];

arr.filter(Boolean)
// [1, "a"]
```
上面代码中，filter方法返回数组arr里面所有布尔值为true的成员。

filter方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组。

```
[1, 2, 3, 4, 5].filter(function (elem, index, arr) {
  return index % 2 === 0;
});
// [1, 3, 5]
```
上面代码返回偶数位置的成员组成的新数组。

filter方法还可以接受第二个参数，用来绑定参数函数内部的this变量。

```
var obj = { MAX: 3 };
var myFilter = function (item) {
  if (item > this.MAX) return true;
};

var arr = [2, 8, 3, 4, 1, 3, 2, 9];
arr.filter(myFilter, obj) // [8, 4, 9]
```
上面代码中，过滤器myFilter内部有this变量，它可以被filter方法的第二个参数obj绑定，返回大于3的成员。
###### 7. reduce
reduce方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一
个成员到第一个成员），其他完全一样。
```
[1, 2, 3, 4, 5].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
})
// 1 2
// 3 3
// 6 4
// 10 5
//最后结果：15
```
上面代码中，reduce方法求出数组所有成员的和。第一次执行，a是数组的第一个成员1，b是数组的第二个成员2。第二次执行，a为上一轮的返回值3，b为第三个成员3。第三次执行，a为上一轮的返回值6，b为第四个成员4。第四次执行，a为上一轮返回值10，b为第五个成员5。至此所有成员遍历完成，整个方法的返回值就是最后一轮的返回值15。

reduce方法和reduceRight方法的第一个参数都是一个函数。该函数接受以下四个参数。

累积变量，默认为数组的第一个成员
当前变量，默认为数组的第二个成员
当前位置（从0开始）
原数组
这四个参数之中，只有前两个是必须的，后两个则是可选的。

如果要对累积变量指定初值，可以把它放在reduce方法和reduceRight方法的第二个参数。
```
[1, 2, 3, 4, 5].reduce(function (a, b) {
  return a + b;
}, 10);
// 25
```
上面代码指定参数a的初值为10，所以数组从10开始累加，最终结果为25。注意，这时b是从数组的第一个成员开始遍历。

上面的第二个参数相当于设定了默认值，处理空数组时尤其有用



