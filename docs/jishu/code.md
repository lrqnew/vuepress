---
title: 代码片段
date: 2020-11-4
categories:
 - 技术
tags:
- 代码片段
---
<Boxx/>

## 防抖

防抖和节流大家应该都不陌生，作为性能优化（可以是前端页面的响应性能方面，也可以是降低服务器压力方面）的必要技巧。
下面是进一步完善的功能和特性，使得它可以支持传参配置是否立即响应第一次调用。
``` js
/**
* 改良版本
* @param {method} Function 需要防抖调用的函数
* @param {delay} Function 防抖的时间阈值(ms)
* @param {immediate} Boolean 是否需要立即执行（即在一个阈值范围的头部执行，如果触发时还处于上一个阈值范围内，则不会触发）
*/
function debounceX (method, delay, immediate) {
    let timer = null
    return function(...args) {

        // 每次进来都需要清空前一个延时执行任务（有的话）之后再分策略处理不同场景，其实这才是【防抖】的精髓
        timer && clearTimeout(timer)

        // 在一个阈值范围的头部执行
        if (immediate) {
            // 保证在本轮连续触发的周期内，只有第一次触发会"立即执行"，后续的每次触发都需要更新定时任务延时触发；
            // 同时也要保证本轮周期结束，下一轮周期开始时依旧可以"立即执行"
            immediate = false
            timer = setTimeout(() => { 
                timer = null
                immediate = true
             }, delay)
            // 立即执行
            method.apply(this, args)
        } else {
            // 否则在一个阈值范围的尾部执行
            timer = setTimeout(() => {
                timer = null
                method.apply(this, args)
            }, delay)
        }
        
    }
}
```
至此，我们就完美地实现了一个可以适配大部分场景的“防抖”功能函数，那么我们自己的搜索框功能也就可以配备上了：
```js
function search (e) {
    const keyWord = e.target.value
    API.request({
        keyWord
    })
    ...
}
input.oninput = debounceX(search, 200)
```