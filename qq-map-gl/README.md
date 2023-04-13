# 腾讯地图声明文件

## 官方文档地址

[点击进入](https://lbs.qq.com/webApi/javascriptGL/glGuide/glOverview)

## 使用

```bash
pnpm i -D qqmap-typings
```

在 d.ts 文件中引入

```ts
/// <reference types="qqmap-typings" />
```

```ts
// 中心点坐标
const center = new TMap.LatLng(latitude, longitude);
// 初始化地图
const map = new TMap.Map(dom ?? 'map', {
  center,
  zoom: 14, // 缩放比例
  viewMode: '2D', // 显示模式
});

// 其他...
```
