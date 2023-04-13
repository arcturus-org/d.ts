declare namespace TMap {
  type MultiPolylineEvtName =
    | 'click'
    | 'dblclick'
    | 'rightclick'
    | 'mousedown'
    | 'mouseup'
    | 'mousemove'
    | 'mouseover'
    | 'mouseout'
    | 'hover'
    | 'touchstart'
    | 'touchmove'
    | 'touchend';

  /**
   * 表示地图上的多个折线, 可以自定义每个折线的样式
   */
  class MultiPolyline implements MultiPolylineOptions {
    constructor(options: MultiPolylineOptions);

    /**
     * 设置地图对象, 如果 map 为 null 意味着将多折线同时从地图中移除
     */
    setMap(map: Map | null): MultiPolyline;

    /**
     * 设置图层绘制顺序
     */
    setZIndex(zIndex: number): MultiPolyline;

    /**
     * 更新折线数据, 如果参数为 null 或 undefined 不会做任何处理
     */
    setGeometries(geometries?: PolylineGeometry[] | null): MultiPolyline;

    /**
     * 设置 MultiPolyline 图层相关样式信息, 如果参数为 null 或 undefined 不会做任何处理
     */
    setStyles(styles?: MultiPolylineStyleHash | null): MultiPolyline;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): MultiPolyline;

    /**
     * 获取地图对象, 若为空返回 null
     */
    getMap(): Map | null;

    /**
     * 获取折线数据
     */
    getGeometries(): PolylineGeometry[];

    /**
     * 获取图层相关样式信息
     */
    getStyles(): MultiPolylineStyleHash;

    /**
     * 获取可见状态
     */
    getVisible(): boolean;

    /**
     * 获取图层绘制顺序
     */
    getZIndex(): number;

    /**
     * 获取图层的 id
     */
    getId(): MultiPolyline;

    /**
     * 根据折线数据 id 来获取点数据
     */
    getGeometryById(id: string): PolylineGeometry;

    /**
     * 更新折线数据, 如果 geometry 的 id 存在于集合中, 会更新对应id的数据,
     * 如果之前不存在于集合中, 会作为新的折线添加到集合中,
     * 如果参数为 null 或 undefined 不会做任何处理
     */
    updateGeometries(geometry?: PolylineGeometry[] | null): MultiPolyline;

    /**
     * 向图层中添加折线, 如果 geometry 的 id 已经存在集合中,
     * 则该 geometry 不会被重复添加, 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合,
     * 没有 id 的 geometry 会被赋予一个唯一 id, 如果要添加到集合中的折线存在重复 id,
     * 这些折线会被重新分配 id, 如果参数为 null 或 undefined 不会做任何处理
     */
    add(geometries?: PolylineGeometry[] | null): MultiPolyline;

    /**
     * 移除指定 id 的折线, 如果参数为 null 或 undefined 不会做任何处理
     */
    remove(ids?: string[] | null): MultiPolyline;

    /**
     * 添加listener到eventName事件的监听器数组中
     */
    on(
      eventName: MultiPolylineEvtName,
      listener: (evt: GeometryOverlayEvent) => void
    ): MultiPolyline;

    /**
     * 从 eventName 事件的监听器数组中移除指定的 listener
     */
    off(
      eventName: MultiPolylineEvtName,
      listener: (evt: GeometryOverlayEvent) => void
    ): MultiPolyline;
  }

  type MultiPolylineStyleHash = Record<string, PolylineStyle>;

  /**
   * 表示应用于折线图层的样式类型
   */
  class PolylineStyle implements PolylineStyleOptions {
    constructor(options: PolylineStyleOptions);
  }

  /**
   * 折线数据
   */
  interface PolylineGeometry {
    /**
     * 折线图形数据的标志信息, 不可重复, 若id重复后面的id会被重新分配一个新id, 若没有会随机生成一个
     */
    id: string;

    /**
     * 对应 MultiPolylineStyleHash 中的样式 id, 如果样式表中没有包含 geometry 指定的 styleId, 则该 geometry 不会被绘制出来
     */
    styleId: string;

    /**
     * 折线的位置信息, 可以传入 [latLng1, latLng2, latLng3] 表示一条折线,
     * 另外一条折线可能由多个不相连的线组成一个逻辑单位, 如: [[latLng1, latLng2, latLng3], [latLng4, latLng5, latLng6]]
     */
    paths: LatLng[] | LatLng[][];

    /**
     * 多颜色折线的信息
     */
    rainbowPaths: {
      path: latLng[];
      color?: string;
      borderColor?: string;
    }[];

    /**
     * 折线的属性数据
     */
    properties: Record<string, any>;
  }

  type MultiPloygonEvtName =
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
   * 表示地图上的多个多边形，可以自定义每个多边形的样式
   */
  class MultiPolygon implements MultiPolygonOptions {
    constructor(options: MultiPolygonOptions);

    /**
     * 设置地图对象, 如果 map 为 null 意味着将多多边形同时从地图中移除
     */
    setMap(map: Map | null): MultiPolygon;

    /**
     * 设置图层绘制顺序
     */
    setZIndex(zIndex: number): MultiPolygon;

    /**
     * 更新多边形数据, 如果参数为 null 或 undefined 不会做任何处理
     */
    setGeometries(geometries?: PolygonGeometry[] | null): MultiPolygon;

    /**
     * 设置 MultiPolygon 图层相关样式信息, 如果参数为 null 或 undefined 不会做任何处理
     */
    setStyles(styles?: MultiPolygonStyleHash | null): MultiPolygon;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): MultiPolygon;

    /**
     * 获取地图对象, 若为空返回 null
     */
    getMap(): Map | null;

    /**
     * 获取多边形数据
     */
    getGeometries(): PolygonGeometry[];

    /**
     * 获取图层相关样式信息
     */
    getStyles(): MultiPolygonStyleHash;

    /**
     * 获取可见状态
     */
    getVisible(): boolean;

    /**
     * 获取图层绘制顺序
     */
    getZIndex(): number;

    /**
     * 获取图层的 id
     */
    getId(): MultiPolygon;

    /**
     * 根据多边形数据 id 来获取点数据
     */
    getGeometryById(id: string): PolygonGeometry;

    /**
     * 更新多边形数据, 如果 geometry 的 id 存在于集合中, 会更新对 id 的数据, 如果之前不存在于集合中, 会作为新的多边形添加到集合中, 如果参数为 null 或 undefined 不会做任何处理
     */
    updateGeometries(geometry?: PolygonGeometry[] | null): MultiPolygon;

    /**
     * 向图层中添加多边形, 如果 geometry 的 id 已经存在集合中,
     * 则该 geometry 不会被重复添加, 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合,
     * 没有 id 的 geometry 会被赋予一个唯一id, 如果要添加到集合中的多边形存在重复id,
     * 这些多边形会被重新分配id, 如果参数为 null 或 undefined 不会做任何处理
     */
    add(geometries?: PolygonGeometry[] | null): MultiPolygon;

    /**
     * 移除指定 id 的多边形, 如果参数为 null 或 undefined 不会做任何处理
     */
    remove(ids?: string[] | null): MultiPolygon;

    /**
     * 添加 listener 到 eventName 事件的监听器数组中
     */
    on(
      eventName: MultiPloygonEvtName,
      listener: (evt: GeometryOverlayEvent) => void
    ): MultiPolygon;

    /**
     * 从 eventName 事件的监听器数组中移除指定的 listener
     */
    off(
      eventName: MultiPloygonEvtName,
      listener: (evt: GeometryOverlayEvent) => void
    ): MultiPolygon;
  }

  type MultiPolygonStyleHash = Record<
    string,
    PolygonStyle | ExtrudablePolygonStyle
  >;

  class PolygonStyle implements PolygonStyleOptions {
    constructor(options: PolygonStyleOptions);
  }

  /**
   * 表示应用于有立体拉伸需求的多边形的样式类型,
   * 拔起面块的边线不支持设置宽度永远为 1 像素宽度
   */
  class ExtrudablePolygonStyle implements ExtrudablePolygonStyleOptions {
    constructor(options: ExtrudablePolygonStyleOptions);
  }

  /**
   * 多边形数据
   */
  interface PolygonGeometry {
    /**
     * 多边形图形数据的标志信息, 不可重复,
     * 若 id 重复后面的 id 会被重新分配一个新id,
     * 若没有会随机生成一个
     */
    id: string;

    /**
     * 对应 MultiPolygonStyleHash 中的样式 id,
     * 如果样式表中没有包含 geometry 指定的 styleId,
     * 则该 geometry 不会被绘制出来
     */
    styleId: string;

    /**
     * 多边形的位置信息, 可以传入 [latLng1, latLng2, latLng3, latLng5, latLng1] 这种简单多边形,
     * 也可以传入带洞多边形 [[latLng1, latLng2, latLng3, latLng5, latLng1], [latLng6, latLng8, latLng9, latLng6], [latLng10, latLng11, latLng10]]
     * 这个多边形包含一个外环 [latLng1, latLng2, latLng3, latLng5, latLng1] 和两个洞 [latLng6, latLng8, latLng9, latLng6], [latLng10, latLng11, latLng10],
     * 另外一个多边形可能有多个不相邻的多边形组成一个逻辑主体, 比如南沙群岛就是由多个分离的多边形组成一个主体, 一个岛屿可能存在多个岛中湖形成带洞多边形,
     * 示例: [[[latLng1, latLng2, latLng3, latLng5, latLng1], [latLng6, latLng8, latLng9, latLng6], [latLng10, latLng11, latLng10]], [[latLng11, latLng12, latLng13, latLng14, latLng11]], [[latLng15, latLng16, latLng17, latLng18, latLng15]]],
     * 这个多边形主体中包含了三个多边形,  其中第一个多边形包含一个外环 [latLng1, latLng2, latLng3, latLng5, latLng1] 和两个洞 [latLng6, latLng8, latLng9, latLng6], [latLng10, latLng11, latLng10],
     * 第二和第三个多边形都是不带洞的简单多边形
     */
    paths: LatLng[] | LatLng[][] | LatLng[][][];

    /**
     * 多边形的图层内绘制顺序
     */
    rank: number;

    /**
     * 多边形的属性数据
     */
    properties: Record<string, any>;
  }

  /**
   * 表示地图上的多个矩形, 可以自定义每个矩形的样式
   */
  class MultiRectangle {
    constructor(options: MultiRectangleOptions);

    /**
     * 设置地图对象, 如果 map 为 null 意味着将多矩形同时从地图中移除
     */
    setMap(map: Map | null): this;

    /**
     * 设置图层绘制顺序
     */
    setZIndex(zIndex: number): this;

    /**
     * 更新多矩形数据, 如果参数为 null 或 undefined 不会做任何处理
     */
    setGeometries(geometries?: RectangleGeometry[] | null): this;

    /**
     * 设置 MultiRectangle 图层相关样式信息, 如果参数为 null 或 undefined 不会做任何处理
     */
    setStyles(styles?: MultiRectangleStyleHash | null): this;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): this;

    /**
     * 获取地图对象, 若为空返回 null
     */
    getMap(): Map | null;

    /**
     * 获取多矩形数据
     */
    getGeometries(): RectangleGeometry[];

    /**
     * 获取图层相关样式信息
     */
    getStyles(): MultiRectangleStyleHash;

    /**
     * 获取可见状态
     */
    getVisible(): boolean;

    /**
     * 获取图层绘制顺序
     */
    getZIndex(): number;

    /**
     * 根据多矩形数据 id 来获取点数据
     */
    getGeometryById(id: string): RectangleGeometry;

    /**
     * 更新多矩形数据, 如果geometry的id存在于集合中,
     * 会更新对 id 的数据, 如果之前不存在于集合中, 会作为新的矩形添加到集合中,
     * 如果参数为 null 或 undefined 不会做任何处理
     */
    updateGeometries(geometry?: RectangleGeometry[] | null): this;

    /**
     * 向图层中添加矩形, 如果 geometry 的 id 已经存在集合中,
     * 则该 geometry 不会被重复添加, 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合,
     * 没有 id 的 geometry 会被赋予一个唯一 id, 如果要添加到集合中的多边形存在重复 id, 这些多边形会被重新分配 id,
     * 如果参数为 null 或 undefined 不会做任何处理
     */
    add(geometries?: RectangleGeometry[] | null): this;

    /**
     * 移除指定 id 的矩形, 如果参数为 null 或 undefined 不会做任何处理
     */
    remove(ids?: string[] | null): this;

    destroy(): void;

    /**
     * 根据 geometry 获取矩形的左下角和右上角顶点经纬度坐标
     */
    static getBounds(geometry: RectangleGeometry): LatLngBounds;
  }

  type MultiRectangleStyleHash = Record<string, RectangleStyle>;

  /**
   * 表示应用于矩形图层的样式类型
   */
  class RectangleStyle implements RectangleStyleOptions {
    constructor(options: RectangleStyleOptions);
  }

  /**
   * 多矩形数据
   */
  interface RectangleGeometry {
    /**
     * 多矩形图形数据的标志信息, 不可重复,
     * 若 id 重复后面的id会被重新分配一个新 id, 若没有会随机生成一个
     */
    id: string;

    /**
     * 对应 MultiRectangleStyleHash 中的样式 id, 如果样式表中没有包含 geometry 指定的 styleId, 则该 geometry 不会被绘制出来
     */
    styleId?: string;

    /**
     * 矩形的中心点位置
     */
    center?: LatLng;

    /**
     * 矩形的宽, 正数, 单位为米
     */
    width?: number;

    /**
     * 矩形的高, 正数, 单位为米
     */
    height?: number;

    /**
     * 矩形的属性数据
     */
    properties?: Record<string, any>;

    /**
     * 矩形的图层内绘制顺序
     */
    rank?: number;
  }

  /**
   *  表示地图上的多个圆形, 可以自定义每个圆形的样式
   */
  class MultiCircle {
    constructor(options: MultiCircleOptions);

    /**
     * 设置地图对象, 如果 map 为 null 意味着将多圆同时从地图中移除
     */
    setMap(map: Map | null): this;

    /**
     * 设置图层绘制顺序
     */
    setZIndex(zIndex: number): this;

    /**
     * 更新多圆数据, 如果参数为 null 或 undefined 不会做任何处理
     */
    setGeometries(geometries: CircleGeometry[] | null): this;

    /**
     * 设置 MultiCircle 图层相关样式信息, 如果参数为 null 或 undefined 不会做任何处理
     */
    setStyles(styles?: MultiCircleStyleHash): this;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): this;

    /**
     * 获取地图对象, 若为空返回 null
     */
    getMap(): Map | null;

    /**
     * 获取多圆数据
     */
    getGeometries(): CircleGeometry[];

    /**
     * 获取图层相关样式信息
     */
    getStyles(): MultiCircleStyleHash;

    /**
     * 获取可见状态
     */
    getVisible(): boolean;

    /**
     * 获取图层绘制顺序
     */
    getZIndex(): number;

    /**
     * 获取图层的 id
     */
    getId(): MultiCircle;

    /**
     * 根据多圆数据 id 来获取点数据
     */
    getGeometryById(id: string): CircleGeometry;

    /**
     * 更新多圆数据, 如果 geometry 的 id 存在于集合中, 会更新对 id 的数据,
     * 如果之前不存在于集合中, 会作为新的圆添加到集合中, 如果参数为 null 或 undefined 不会做任何处理
     */
    updateGeometries(geometry?: CircleGeometry[] | null): this;

    /**
     * 向图层中添加圆, 如果 geometry 的 id 已经存在集合中, 则该 geometry 不会被重复添加,
     * 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合,
     * 没有 id 的 geometry 会被赋予一个唯一 id, 如果要添加到集合中的多边形存在重复 id,
     * 这些多边形会被重新分配id, 如果参数为 null 或 undefined 不会做任何处理
     */
    add(geometries?: CircleGeometry[] | null): this;

    /**
     *  移除指定 id 的圆, 如果参数为 null 或 undefined 不会做任何处理
     */
    remove(ids?: string[] | null): this;
  }

  type MultiCircleStyleHash = Record<string, CircleStyle>;

  interface CircleGeometry {
    /**
     * 多圆图形数据的标志信息, 不可重复,
     * 若 id 重复后面的 id 会被重新分配一个新id,
     * 若没有会随机生成一个
     */
    id?: string;

    /**
     * 对应 MultiCircleStyleHash 中的样式 id,
     * 如果样式表中没有包含 geometry 指定的 styleId,
     * 则该 geometry 不会被绘制出来
     */
    styleId?: string;

    /**
     * 圆的中心点位置
     */
    center?: LatLng;

    /**
     * 圆的半径, 正数, 单位为米
     */
    radius?: number;

    /**
     * 圆的属性数据
     */
    properties?: Record<string, any>;
  }

  /**
   * 表示应用于圆图层的样式类型
   */
  class CircleStyle {
    constructor(options: CircleStyleOptions);
  }

  /**
   * 表示地图上的多个椭圆, 可以自定义每个椭圆的样式
   */
  class MultiEllipse {
    constructor(options: MultiEllipseOptions);

    /**
     * 设置地图对象, 如果 map 为 null 意味着将多椭圆同时从地图中移除
     */
    setMap(map: Map | null): this;

    /**
     * 设置图层绘制顺序
     */
    setZIndex(zIndex: number): MultiEllipse;

    /**
     * 更新多椭圆数据, 如果参数为 null 或 undefined 不会做任何处理
     */
    setGeometries(geometries?: EllipseGeometry[]): this;

    /**
     * 设置 MultiEllipse 图层相关样式信息, 如果参数为 null 或 undefined 不会做任何处理
     */
    setStyles(styles?: MultiEllipseStyleHash): this;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): this;

    /**
     * 获取地图对象, 若为空返回 null
     */
    getMap(): Map | null;

    /**
     * 获取多椭圆数据
     */
    getGeometries(): EllipseGeometry[];

    /**
     * 获取图层相关样式信息
     */
    getStyles(): MultiEllipseStyleHash;

    /**
     * 获取可见状态
     */
    getVisible(): boolean;

    /**
     * 获取图层绘制顺序
     */
    getZIndex(): number;

    /**
     * 根据多椭圆数据 id 来获取点数据
     */
    getGeometryById(id: string): EllipseGeometry;

    /**
     * 更新多椭圆数据, 如果 geometry 的 id 存在于集合中, 会更新对 id 的数据,
     * 如果之前不存在于集合中, 会作为新的椭圆添加到集合中, 如果参数为 null 或 undefined 不会做任何处理
     */
    updateGeometries(geometry?: EllipseGeometry[] | null): this;

    /**
     * 向图层中添加椭圆, 如果 geometry 的 id 已经存在集合中,
     * 则该 geometry 不会被重复添加, 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合,
     * 没有 id 的 geometry 会被赋予一个唯一id, 如果要添加到集合中的多边形存在重复id,
     * 这些多边形会被重新分配 id, 如果参数为 null 或 undefined 不会做任何处理
     */
    add(geometries?: EllipseGeometry[] | null): this;

    /**
     * 移除指定 id 的椭圆, 如果参数为 null 或 undefined 不会做任何处理
     */
    remove(ids?: string[] | null): this;

    /**
     * 销毁图层对象
     */
    destroy();
  }

  type MultiEllipseStyleHash = Record<string, EllipseStyle>;

  /**
   * 表示应用于椭圆图层的样式类型
   */
  class EllipseStyle implements EllipseStyleOptions {
    constructor(options: EllipseStyleOptions);
  }

  interface EllipseGeometry {
    /**
     * 多椭圆图形数据的标志信息, 不可重复, 若 id 重复后面的 id 会被重新分配一个新 id,
     * 若没有会随机生成一个
     */
    id?: string;

    /**
     * 对应 MultiEllipseStyleHash 中的样式 id, 如果样式表中没有包含 geometry 指定的 styleId,
     * 则该 geometry 不会被绘制出来
     */
    styleId?: string;

    /**
     * 椭圆的中心点位置
     */
    center?: LatLng;

    /**
     * 椭圆的主半径, 正数, 单位为米
     */
    majorRadius?: number;

    /**
     * 椭圆的辅半径, 正数, 单位为米
     */
    minorRadius?: number;

    /**
     * 椭圆的属性数据
     */
    properties?: Record<string, any>;

    /**
     * 椭圆的图层内绘制顺序
     */
    rank?: number;
  }
}
