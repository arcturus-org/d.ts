/**
 * 基础类
 */
declare namespace TMap {
  /**
   * 控件基类
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocControl#1
   */
  class Control {
    /**
     * 设置控件的位置
     */
    setPosition(position: constants.CONTROL_POSITION): this;

    /**
     * 设置控件的 css 样式名
     */
    setClassName(className: string): this;
  }

  /**
   * 经纬度坐标
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#1
   */
  class LatLng {
    lat: number;
    lng: number;

    /**
     * @param lat 纬度值
     * @param lng 经度值
     */
    constructor(lat: number, lng: number);

    /**
     * 返回经度值
     */
    getLng(): number;

    /**
     * 获取纬度值
     */
    getLat(): number;
  }

  /**
   * 描述一个矩形的地理坐标范围
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#2
   */
  class LatLngBounds {
    /**
     * @param sw 西南角位置经纬度
     * @param ne 东北角位置经纬度
     */
    constructor(sw: LatLng, ne: LatLng);

    /**
     * 获取该范围的中心点坐标
     */
    getCenter(): LatLng;

    /**
     * 获取该范围的东北角坐标
     */
    getNorthEast(): LatLng;

    /**
     * 获取该范围的西南角坐标
     */
    getSouthWest(): LatLng;

    /**
     * 扩展该范围边界, 以包含指定的坐标点
     */
    extend(latlng: LatLng): LatLngBounds;

    /**
     * 扩展该范围边界, 以包含指定的一个矩形范围
     */
    union(other: LatLngBounds): LatLngBounds;

    /**
     * 比较两个矩形范围是否完全相等
     */
    equals(other: LatLngBounds): boolean;

    /**
     * 判断该范围是否与另一矩形范围相交
     */
    intersects(other: LatLngBounds): boolean;

    /**
     * 判断该范围是否为空
     */
    isEmpty(): boolean;

    /**
     * 判断指定的坐标是否在这个范围内
     */
    contains(latlng: LatLng): boolean;

    /**
     * 转换为字符串表示
     */
    toString(): string;
  }

  /**
   * 二维点坐标
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocClass#3
   */
  class Point {
    constructor(x: number, y: number);

    /**
     * 获取 x 坐标值
     */
    getX(): number;

    /**
     * 获取 y 坐标值
     */
    getY(): number;

    /**
     * 判断两个点是否相等
     */
    equals(other: Point): boolean;

    /**
     * 创建一个坐标值相同的点
     */
    clone(): Point;

    /**
     * 转换为字符串表示
     */
    toString(): string;
  }
}
