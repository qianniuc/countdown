# Countdown
js倒计时插件，无需依赖jquery，zepto等，适合简易页面，节省资源
### 使用方法
```js
new Countdown(el, options);
```
### 参数
```js
{
 format: "hh小时mm分ss秒" | "hh:mm:ss", 
 lastTime: "2016-04-20 16:00:00" | 1492675200000
}
```
### 例子
```html
<h3 id="countdown1"></h3>
```
```js
new Countdown(document.getElementById('countdown1'),{
   format: "hh小时mm分ss秒",
   lastTime: "2017-04-20 16:00:00"
});
```
format:可以自定义输出格式  
lastTime: 倒计时截止的时间
### License
[MIT](https://opensource.org/licenses/MIT)