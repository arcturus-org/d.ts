declare namespace TMap {
  interface Geometry {}

  /**
   * 点图形数据
   */
  interface PointGeometry extends Geometry {
    /**
     * 点图形数据的标志信息, 不可重复, 若 id 重复后面的 id 会被重新分配一个新 id,
     * 若没有会随机生成一个
     */
    id: string;

    /**
     * 对应 MultiMarkerStyleHash 中的样式 id
     */
    styleId?: string;

    /**
     * 标注点位置
     */
    position: LatLng;

    /**
     * 标注点的图层内绘制顺序
     */
    rank?: number;

    /**
     * 标注点的属性数据
     */
    properties?: Record<string, any>;

    /**
     * 标注点文本, 默认为 undefined
     */
    content?: string;
  }
}
