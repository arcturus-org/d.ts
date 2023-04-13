declare namespace TMap {
  interface BaseMap {}

  /**
   * VectorBaseMap 对象规范
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#5
   */
  interface VectorBaseMap extends BaseMap {
    /**
     * 必须为 vector
     */
    type: 'vector';

    /**
     * 矢量底图要素类型, 通过控制 features 可以控制矢量底图中不同类型要素的显示与否
     */
    features?: (
      | 'base'
      | 'building3d'
      | 'building2d'
      | 'point'
      | 'label'
      | 'arrow'
    )[];

    /**
     * 用于设置建筑物显示层级区间
     * min 默认值为 16.5, 最小值不低于 14.5, 低于 14.5 则按照 min=14.5 进行建筑渲染
     * max 默认值为 20, 若地图实例启用了 enableExtendZoom 则默认值为 25
     * buildingRange 仅当 features 中包含 building2d 或者 building3d 时生效
     */
    buildingRange?: [number, number];
  }

  /**
   * SatelliteBaseMap 对象规范
   */
  interface SatelliteBaseMap extends BaseMap {
    /**
     * 必须为 satellite
     */
    type: 'satellite';

    /**
     * 卫星图要素类型, 目前支持卫星影像图(base)、路网图(road)
     */
    features: ('base' | 'road')[];
  }

  /**
   * TrafficBaseMap 对象规范
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#7
   */
  interface TrafficBaseMap extends BaseMap {
    /**
     * 必须为 traffic
     */
    type: 'traffic';

    /**
     * 路况图要素类型, 目前支持路况线网(base)、流动粒子(flow)
     * 默认为只显示路况线网图
     */
    features?: ('base' | 'flow')[];

    /**
     * 指定特定类型的道路才显示路况, 对线网和粒子图同时生效,
     * 可选值高速 "highway", 快速路 "motorway", 国道 "national", 省道 "provincial",
     * 县道 "county", 乡道 "country", 其他道路 "other",
     * 默认不传或者传入非数组对象都显示, 空数组都所有道路路况都不显示
     */
    filter?: (
      | 'highway'
      | 'motorway'
      | 'national'
      | 'provincial'
      | 'county'
      | 'other'
    )[];

    /**
     * 路况线网图的透明度, 默认为 1
     */
    opacity?: number;

    /**
     * 路况流动粒子颜色组合, 长度为 4 的数组, 0-3 位分别对应流畅、缓行、拥堵、极度拥堵
     */
    flowColor: string[];

    /**
     * 路况流动粒子速度组合, 长度为 4 的数组, 0-3位分别对应流畅、缓行、拥堵、极度拥堵
     * 单位为 pixel/s, 默认为 [80, 30, 10, 5]
     */
    flowSpeed: number[];
  }
}
