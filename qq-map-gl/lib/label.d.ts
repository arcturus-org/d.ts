declare namespace TMap {
  type LabelEvtName =
    | 'click'
    | 'dblclick'
    | 'mousedown'
    | 'mouseup'
    | 'mousemove'
    | 'hover'
    | 'touchstart'
    | 'touchmove'
    | 'touchend';

  /**
   * 表示地图上的多个文本标注, 可以自定义每个文本标注的样式
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLabel
   */
  class MultiLabel implements MultiLabelOptions {
    constructor(options: MultiLabelOptions);

    /**
     * 设置地图对象, 如果 map 为 null 意味着将多个文本标注同时从地图中移除
     */
    setMap(map: Map | null): this;

    /**
     * 更新多文本标注数据, 如果参数为 null 或 undefined 不会做任何处理
     */
    setGeometries(geometries?: LabelGeometry[] | null): this;

    /**
     * 设置 MultiLabel 图层相关样式信息, 如果参数为 null 或 undefined 不会做任何处理
     */
    setStyles(styles?: MultiLabelStyleHash | null): this;

    /**
     * 获取地图对象, 若为空返回 null
     */
    getMap(): Map | null;

    /**
     * 获取图层的 id
     */
    getId(): this;

    /**
     * 获取多文本标注数据
     */
    getGeometries(): LabelGeometry[];

    /**
     * 获取图层相关样式信息
     */
    getStyles(): MultiLabelStyleHash;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): this;

    /**
     * 获取可见状态
     */
    getVisible(): boolean;

    /**
     * 根据多文本数据 id 来获取点数据
     */
    getGeometryById(id: string): LabelGeometry;

    /**
     * 更新多文本数据, 如果 geometry 的 id 存在于集合中,
     * 会更新对 id 的数据, 如果之前不存在于集合中, 会作为新的文本标注添加到集合中,
     * 如果参数为 null 或 undefined 不会做任何处理
     */
    updateGeometries(geometry?: LabelGeometry[] | null): this;

    /**
     * 向图层中添加文本, 如果 geometry 的 id 已经存在集合中,
     * 则该 geometry 不会被重复添加, 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合,
     * 没有 id 的 geometry 会被赋予一个唯一 id, 如果要添加到集合中的文本存在重复 id, 这些文本会被重新分配 id,
     * 如果参数为 null 或 undefined 不会做任何处理
     */
    add(geometries?: LabelGeometry[] | null): this;

    /**
     * 移除指定 id 的文本, 如果参数为 null 或 undefined 不会做任何处理
     */
    remove(ids?: string[]): this;

    /**
     * 添加 listener 到 eventName 事件的监听器数组中
     */
    on(eventName: LabelEvtName, listener: (evt: GeometryOverlayEvent) => void);

    /**
     * 从 eventName 事件的监听器数组中移除指定的 listener。
     */
    off(eventName: LabelEvtName, listener: (evt: GeometryOverlayEvent) => void);
  }

  type MultiLabelStyleHash = Record<string, LabelStyle>;

  class LabelStyle implements LabelStyleOptions {
    constructor(options: LabelStyleOptions);
  }

  interface LabelGeometry {
    /**
     * 点图形数据的标志信息, 不可重复,
     * 若 id 重复后面的 id 会被重新分配一个新 id,
     * 若没有会随机生成一个
     */
    id?: string;

    /**
     * 对应 MultiLabelStyleHash 中的样式 id, 如果样式表中没有包含 geometry 指定的 styleId, 则该 geometry 不会被绘制出来
     */
    styleId?: string;

    /**
     * 标注点位置
     */
    position?: LatLng;

    /**
     * 标注文本
     */
    content?: string;

    /**
     * 当开启文本碰撞时, 值越大碰撞优先级越高关闭碰撞时, 表示标注文本的图层内绘制顺序
     */
    rank?: number;

    /**
     * 标注点的属性数据
     */
    properties?: Record<string, any>;
  }
}
