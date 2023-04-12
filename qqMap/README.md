# 腾讯地图 SDK 声明文件

## 使用

```bash
pnpm i -D qqmap-gl-typings
```

在 d.ts 文件中引入

```ts
/// <reference types="qqmap-gl-typings" />
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
