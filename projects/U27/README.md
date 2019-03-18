### 1.实现这个登录注册页面，[链接](http://book.jirengu.com/fe/code/projects/HungoouRadio/login.html#)。

[点击查看](https://comicparty.github.io/resume/projects/U27/ex1.html)

1. contains合检测 目标是否含有 指定类名
`event.target.classList.contains('fa-window-close')`
适合用在 事件监听，判断目标元素上面！
2. 想要获取目标元素的样式不能使用`el.style.display`，
使用`window.getComputedStyle(logSignModel).display === 'none'`
3.需要分两对样式，才能正常实现翻转效果！
 /*登录 状态下的 登录*/&/*注册 状态下的 注册*/
/*注册 状态下的 登录*/&/*登录 状态下的 注册*/


