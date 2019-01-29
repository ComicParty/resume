function getInfo(name, age, sex){
        console.log('name:',name);
        console.log('age:', age);
        console.log('sex:', sex);
        console.log(arguments);
        arguments[0] = 'valley';
        console.log('name', name);
    }

    getInfo('饥人谷', 2, '男');
    getInfo('小谷', 3);
    getInfo('男');

这是我没有运行前，思考的：
    name: 饥人谷 
    age:2 
    sex:男
    [name:饥人谷，age:2,sex:男]   //看下面的注释 ['饥人谷',3,'男']
    undefined                   //想了一下应该改为 valley，因为0代表name，所以数组中 也只有name的值，不应该出现name
    //少了name 没有注意到

    name: 小谷 
    age:3
    sex:undefined
    ['小谷',3]  //应该是3个参数，这个第3个会不会是 undefined? 
    //arguments数组会不会在 3个形参 后面，后面加一个'/0'或者undefined?
    //或者在实际参数的数量后面加 一个'/0'或者undefined?
    name:valley  

    name:男   //因为是按照顺序传入的，所以'男'就给了name
    age:undefined
    sex:undefined
    ['男',undefined,undefined]
    name valley

参考配套图片
总结：1. chorme 中的 console 的 console.log(,)中的 ','可能会转化成 一个空格
2.argument数组，里面只有 实参，而且按0、1、2 顺序排列
                        实参数量 小于 形参数量时，形参不会以'undefined'的形势在数组中 占位

                        实参 后面有 callee 、Symbol两个多余的东西，以后再研究