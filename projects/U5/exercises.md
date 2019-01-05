# 1.post 和 get 方式提交数据有什么区别？
[99%的人都理解错了HTTP中GET与POST的区别](https://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&mid=100000054&idx=1&sn=71f6c214f3833d9ca20b9f7dcd9d33e4#rd)
[听说『99% 的人都理解错了 HTTP 中 GET 与 POST 的区别』？？](https://zhuanlan.zhihu.com/p/25028045)
[get和post区别？](https://www.zhihu.com/question/28586791/answer/145424285)
网上摸了好多资料，我现在还是弄不懂两个 有没有区别。老师可以在点评的时候说一下吗？
# 2.在input里，name 有什么作用？
name 需要与value配合使用，他们用来存储数据（对象中的 键：值。）告诉服务器，这个input中有什么东西。
# 3. radio 如何分组？
radio使用name来分组啊！不管radio有多少个，只有name的值相同的radio才是同一组的！
# 4. placeholder 属性有什么作用？
plsceholder属性用于input中，他的值会在输入框中显示，用来提示用户此输入框的功能。 
# 5. CSRF 攻击是什么？如何防范？  
CSRF我的理解就是，有人在用户不知情的情况下，使用网站存储在用户浏览器中的数据(session、cookie)，进行操作，以达到损人的利己的 目地.
防范：主要思路就是验证发送过来的操作是不是用户本人自己操作的。
1. 服务端在收到路由请求时，生成一个随机数，在渲染请求页面时把随机数埋入页面（一般埋入 form 表单内，<input type="hidden" name="_csrf_token" value="xxxx">）
2. 服务端设置setCookie，把该随机数作为cookie或者session种入用户浏览器
3. 当用户发送 GET 或者 POST 请求时带上_csrf_token参数（对于 Form 表单直接提交即可，因为会自动把当前表单内所有的 input 提交给后台，包括_csrf_token）
4. 后台在接受到请求后解析请求的cookie获取_csrf_token的值，然后和用户请求提交的_csrf_token做个比较，如果相等表示请求是合法的。
5. 使用验证码-虽然影响交互，但极为有效-
# 6. type=hidden隐藏域有什么作用? 举例说明

```
<input type="hidden" name="CSRF" value="woshiyanzhengdeshuju">
<!--老师，name的值可以使用中文吗？--!>
```
1. 他不会被用户看见
2. 用来防范CSRF攻击，如果服务器端没有收到 这里的键：值，那么很有可能受到了CSRF攻击。
# 7. 实现如下表单,附上预览地址。其中性别和取向是单选，爱好是多选
https://comicparty.github.io/resume/projects/U5/exercise7.html
# 8. label 有什么作用？如何使用？
主要是实现 文字与选框绑定，如下代码：

```
<div class="username">
            <label for="inputname">姓名</label>
            <input type="text" id="inputname" placeholder="用户名">
</div>
```
当我想在input中输入东西时，我可以点击 input显示的输入框。但是当我用label与input绑定时，点击姓名，也可以输入。
# 9. 以下input有何作用？<input type="submit" value="提交">
点击后，表单会提交
# 10. bing或者 google 搜索：“stackoverflow http get length”，找到第一条检索结果，大致翻译得票最高的答案
限制取决于服务器和使用的客户端（如果适用，还取决于服务器或客户端使用的代理）。
大多数Web服务器的限制为8192字节（8KB），通常可在服务器配置中的某处进行配置。至于客户端问题，HTTP 1.1规范甚至警告过这一点，这是第3.2.1章的摘录：
> 注意：服务器应该谨慎依赖于长度超过255个字节的URI，因为某些较旧的客户端或代理实现可能无法正确支持这些长度。

```
Browser     Address bar   document.location  
                          or anchor tag
------------------------------------------
Chrome          32779           >64k      
Android          8192           >64k                         
Firefox          >64k           >64k      
Safari           >64k           >64k      
IE11             2047           5120   
Edge 16          2047          10240

```
限制在MSIE和Safari大约2KB，在Opera大约4KB和在Firefox大约8KB。因此，我们可以假设8KB是最大可能长度，并且2KB是服务器端依赖的更可承受的长度，并且255字节是假设整个URL将进入的最安全长度。

如果在浏览器或服务器中超出限制，大多数将仅截断限制之外的字符而不发出任何警告。但是，某些服务器可能会发送HTTP 414错误。如果您需要发送大数据，那么最好使用POST而不是GET。它的限制要高得多，但更多地依赖于使用的服务器而不是客户端。通常，平均网络服务器允许高达2GB左右。这也可以在服务器设置中的某处进行配置。当超过POST限制时，平均服务器将显示特定于服务器的错误/异常，通常为HTTP 500错误。


