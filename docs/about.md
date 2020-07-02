---
title: '关于'
lang: en-US
meta:
  - name: description
    content: about
  - name: keywords
    content: about123
# 永久链接
permalink: /about

# 优化搜索结果
tags: 
  - 233
  - 123
# 单独的页面禁用内置的搜索框
search: false

# 明确地重写或者禁用上 / 下一篇链接
# prev: ./bar/
# next: false

# 禁用指定页面的Git 仓库和编辑链接
editLink: false

# 自定义页面类
pageClass: custom-page-class

# 特定页面的自定义布局
# layout: SpecialLayout

---

# About



<!-- 目录 -->
[[toc]]

## 插值
{{ 1 + 1 }}

## 指令
<span v-for="i in 3">{{ i }} </span>

<!-- ## 访问网站以及页面的数据 -->
<!-- {{ $page }} -->
<!-- {{ $site }} -->

::: v-pre
`{{ This will be displayed as-is }}`
:::

<!-- 
<style>
    * {
        color: red;
    }
</style>
<script>
alert('about')
</script> -->
<Badge text="beta" type="warning"/>
<Badge text="默认主题"/>

## 个人简介
 - 程序员
 - iOS
 - 前端
 - 混合

## 兴趣
 - 读书
 - 游戏
 - 电影
 - 旅游

## 自定义容器
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: danger STOP
危险区域，禁止通行
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: details 点击查看代码
```js
console.log('Hello，VuePress！')
```
:::

``` js {5}
// ``` js {5}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```