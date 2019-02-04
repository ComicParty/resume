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
###### push
改变数组
——新增
返回——改变后的数组
```
var arr = [3, 4, 5, 6];
arr.push('hello')      //再数组最后添加一个元素
console.log(arr)         // [3, 4, 5, 6,"hello"]
```
###### pop
改变数组
——删除
返回 删除的元素
```
var arr = [3, 4, 5, 6];
var value = arr.pop()    //把数组最后一位弹出来返回，数组发生变化
console.log(value)       //6
console.log(arr)         //[3, 4, 5]
```
###### shift
改变数组
——删除
返回 删除的元素
```
var arr = [3, 4, 5, 6];
var valueShift = arr.shift() //把数组第一位拿出来返回，数组发生变化
console.log(valueShift)      // 3
console.log(arr)         //[4, 5, 6]
```
###### unshift
改变数组
——新增
返回 改变后 数组长度
```
var arr = [3, 4, 5, 6];
var arrUnshift = arr.unshift(3);
console.log(arr);               //[3,3,4,5,6]
console.log(arrUnshift);      //5 ——返回改变后 数组长度
```  
###### join
不改变——数组
——新增
返回 字符串
```
var arr = [3, 4, 5, 6];
var str = arr.join('-');
 
console.log(arr);      //[3,4,5,6]  不改变——数组
typeof arr;             //"object"

console.log(str);       //3-4-5-6  返回 字符串
typeof str;             //"string"
```
###### splice
改变原数组

JavaScript提供了一个splice方法用于一次性解决数组添加、删除（这两种方法一结合就可以达到替换效果），方法有三个参数

1.数组索引(含)
2.删除元素的 个数（含）
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
只要方法第二个参数，也就是删除动作执行的次数设为0，第三个参数及以后填写要插入内容就splice就能执行插入操作，而如果第二个参数不为0则变成了先在该位置删除再插入，也就是替换效果
```
var a = [1,2,3,4,5];
a.splice(1,0,9,99,999);
console.log(a.length); //8
console.log(a);//[1, 9, 99, 999, 2, 3, 4, 5]
a.splice(1,3,8,88,888);
console.log(a.length);//8
console.log(a);//[1, 8, 88, 888, 2, 3, 4, 5]
```
**负数**
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
如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。
```
var a = [1, 2, 3, 4];
a.splice(2) // [3, 4]
a // [1, 2]
```

###### slice(start,end)
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
###### sort
sort方法用于对数组进行排序，当没有参数的时候会按字母表升序排序，如果含有undefined会被排到最后面，对象元素则会调用其toString方法，如果想按照自己定义方式排序，可以传一个排序方法进去，很典型的策略模式，同样sort会改变原数组。

var a=[5,4,3,2,1]
a.sort()
console.log(a) //[1, 2, 3, 4, 5]
但是。。。

var a=[7,8,9,10,11]
a.sort()
console.log(a) //[10, 11, 7, 8, 9]
因为按照字母表排序，7就比10大了，这时候我们需要传入自定义排序函数

如果想按照数值排序，可

    var a = [7,8,9,10,11]

    a.sort(function(v1,v2){
        return v1-v2
    })
    console.log(a) //[7, 8, 9, 10, 11]

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
    ]
    // 按age 从小到大排序

    var sortByAge = users.sort(function(v1, v2){
        return  v1.age > v2.age
    })

  // 按name从大到小排序
    var sortByName = users.sort(function(v1, v2){
        return  v1.name > v2.name
    })
###### reverse
方法用于将数组逆序，与之前不同的是它会修改原数组

var a = [1,2,3,4,5];
a.reverse();
console.log(a); //[5, 4, 3, 2, 1]
###### concat
看起来像是剪切，但这个真不是形声字，concat方法用于拼接数组，a.concat(b)返回一个a和b共同组成的新数组，同样不会修改任何一个原始数组，也不会递归连接数组内部数组

var a = [1,2,3,4,5];
var b = [6,7,8,9];
console.log(a.concat(b));//[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(a); //[1, 2, 3, 4, 5]
console.log(b); //[6, 7, 8, 9]

