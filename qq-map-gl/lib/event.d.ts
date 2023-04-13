declare namespace TMap {
  /**
   * 动画事件回调
   */
  interface AnimationEvent {
    /**
     * 动画进行百分比
     */
    percentage: number;

    /**
     * 当前帧状态
     */
    frame: Record<string, unknown>;
  }

  /**
   * 地图事件
   */
  interface MapEvent {
    /**
     * 事件发生时的经纬度坐标
     */
    latLng: LatLng;

    /**
     * 事件发生时的屏幕位置
     */
    point: {
      x: number;
      y: number;
    };

    /**
     * 事件类型
     */
    type: string;

    /**
     * 事件的目标对象
     */
    target: Record<string, any>;

    /**
     * 事件触发位置的poi信息, 当触发位置没有 poi 点时值为 null
     */
    poi: POIInfo | null;

    /**
     * MouseEvent 或 TouchEvent	浏览器原生的事件对象
     */
    originalEvent: MouseEvent | TouchEvent;
  }

  /**
   *  地图事件返回参数中的 poi 信息
   */
  interface POIInfo {
    /**
     * poi 的经纬度位置
     */
    latLng: LatLng;

    /**
     * poi 名称
     */
    name: string;
  }

  /**
   * 几何覆盖物事件返回参数
   */
  interface GeometryOverlayEvent {
    /**
     * 事件发生时的图形数据信息
     */
    geometry: Geometry;

    /**
     * 事件发生时的经纬度坐标
     */
    latLng: LatLng;

    /**
     * 事件发生时的屏幕位置
     */
    point: {
      x: number;
      y: number;
    };

    /**
     * 事件类型
     */
    type: string;

    /**
     * 事件的目标对象
     */
    target: Record<string, any>;

    /**
     * 浏览器原生的事件对象
     */
    originalEvent: MouseEvent | TouchEvent;
  }
}
