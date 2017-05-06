# ionic2-demo

ionic在跨平台开发中占有一席之地，闲暇之余，这里把ionic好好玩了把，做了这个demo，将常用到的一些功能点融于项目中，同时对常见的问题一一整理放在issue中
相信能够帮助一些人

## 说明

 + 水平有限
 + 问题[查Issues](https://github.com/heqiang421/ionic2-demo/issues),无，请[添加issue](https://github.com/heqiang421/ionic2-demo/issues/new),我会及时解答
 + 有回答的issue，在项目代码中可以找到具体的应用，当然有时会有延迟，因为实在很忙，敬请见谅

## ionic做APP行不行

+ 没有最好的，只有最合适的，ionic这种跨平台开，让web开发人员具备了开发APP的能力，另外对于一些企业的一些项目，提供了最快捷，最有效，最经济的解决方案。
+ hybrid开发，从机理上来说，存在性能问题，但是随着用户手机设备的性能在提升，本身的ionic这种技术不断的优化，所以如果项目开发周期短，另外APP本身简单的话，使用ionic,`没问题的`
+ ionic经历了这几年，成熟了，现在推出的ionic2,最新版本是V3.1，使用后，觉得进步还是很大的，体验不错

## 还有ionicv4？

ionic官方仓库已经创建了v4分支，也给出了v4的介绍及愿景，这里我翻一下，想看原文[点击这里](https://github.com/driftyco/ionic/blob/v4/README.md)

## 翻译

ionic组件向着一下目标发展
+ 用户继续用angular组件开发APP和组件
+ 开发和构建不会有变化
+ 用户使用上的改变将会最小化
+ 减少构建时间
+ 减少启动时间
+ ionic组件的异步加载将会成为缺省配置

对于大多数部分，`ionic-angular`将会按照同样的方式继续工作，想之前的版本一样使用所有的API，然而少量复杂的组件比如`ion-badge`,将会使用标准的web组件规范V1，这些规范在主流浏览器中已经实现且运行，
除此之外，对于那些不支持web组件的浏览器，`polyfills`将会按需添加，这点已经在v4项目中实现。

我们将会继续开发维护v3主干分支，根本上来说，v3与v4的差异性是内在的，外在来说，v3，v4等同。

### 变化

### @NgModule Updates

What's great is that Angular already supports and works with web components! In order to enable them simply add CUSTOM_ELEMENTS_SCHEMA to the schemas property of @NgModule, such as:

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
### ion-label Required

Previously an ion-label would automatically get added to ion-item if one wasn't provided. Now an ion-label must always be added if the item is used to display text.

  <ion-item>
    <ion-label>Item's Text!</ion-label>
  </ion-item>


## 未来的目标
ionic集成web组件标准，我们的目标之一是让ionic组件能够轻易的在所有主流的框架中运行。