declare namespace TMap {
  /**
   * 表示地图上的多个标注点，可自定义标注的图标
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker
   */
  class MultiMarker implements MultiMarkerOptions {
    constructor(options: MultiMarkerOptions);

    /**
     * 设置地图对象, 如果 map 为 null 意味着将多个标注点同时从地图中移除
     */
    setMap(map: Map | null): MultiMarker;

    /**
     * 更新标注点数据, 如果参数为 null 或 undefined 不会做任何处理
     */
    setGeometries(geometries?: PointGeometry[] | null): MultiMarker;

    /**
     * 设置 MultiMarker 图层相关样式信息, 如果参数为 null 或 undefined 不会做任何处理
     */
    setStyles(styles?: MultiMarkerStyleHash | null): MultiMarker;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): MultiMarker;

    /**
     * 获取地图对象, 若为空返回 null
     */
    getMap(): Map | null;

    /**
     * 获取图层的 id
     */
    getId(): MultiMarker;

    /**
     * 获取点数据
     */
    getGeometries(): PointGeometry[];

    /**
     * 获取图层相关样式信息
     */
    getStyles(): MultiMarkerStyleHash;

    /**
     * 获取可见状态
     */
    getVisible(): boolean;

    /**
     * 根据点数据 id 来获取点数据
     */
    getGeometryById(id: string): PointGeometry;

    /**
     * 更新标注点数据, 如果 geometry 的 id 存在于多点标注的集合中,
     * 会更新对 id 的数据, 如果之前不存在于集合中, 会作为新的点标注添加到集合中,
     * 如果参数为 null 或 undefined 不会做任何处理
     */
    updateGeometries(geometry?: PointGeometry[] | null): MultiMarker;

    /**
     * 向图层中添加标注点, 如果 geometry 的 id 已经存在集合中,
     * 则该 geometry 不会被重复添加, 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合,
     * 没有 id 的 geometry 会被赋予一个唯一 id, 如果要添加到集合中的标注存在重复 id,
     * 这些标注点会被重新分配 id, 如果参数为 null 或 undefined 不会做任何处理
     */
    add(geometries?: PointGeometry[] | null): MultiMarker;

    /**
     * 移除指定 id 的标注点, 如果参数为 null 或 undefined 不会做任何处理
     */
    remove(ids?: string[] | null): MultiMarker;

    /**
     * 指定 id 的标注点, 沿着指定路径移动, 每次新调用 moveAlong 时,
     * 尚未完成的动画会被取消, 并触发 move_stopped 事件,
     * options 中如果设置 autoRotation 为 true, 对于 faceTo 为 'map' 的点标记
     * 会根据路径方向自动改变点标记图片的旋转角度
     */
    moveAlong(
      param: MoveAlongParamSet,
      options: Record<string, any>
    ): MultiMarker;

    /**
     * 停止移动, 尚未完成的动画会被取消, 并触发 move_stopped 事件,
     * 已经完成的动画不会触发 move_stopped 事件
     */
    stopMove(): MultiMarker;

    /**
     * 暂停点标记的动画效果, 并触发 move_paused 事件,
     * 未在移动状态不会触发 move_paused 事件
     */
    pauseMove(): MultiMarker;

    /**
     * 重新开始点标记的动画效果, 并触发 move_resumed 事件,
     * 未在暂停状态不会触发 move_resumed 事件
     */
    resumeMove(): MultiMarker;

    /**
     * 添加 listener 到 eventName 事件的监听器数组中
     */
    on(
      eventName:
        | 'click'
        | 'dblclick'
        | 'mousedown'
        | 'mouseup'
        | 'image.png'
        | 'hover'
        | 'touchstart'
        | 'touchmove'
        | 'touchend',
      listener: (evt: GeometryOverlayEvent) => void
    ): MultiMarker;

    /**
     * 点标记在执行 moveAlong 动画时触发事件,
     * 事件参数为一个 key-value 形式对象,
     * key 代表 MultiMarker 点数据集合中的 PointGeometry 的 id,
     * value 是一个 MarkerMovingEventItem 对象
     */
    on(
      eventName: 'moving',
      listener: (evt: Record<string, MarkerMovingEventItem>) => void
    ): MultiMarker;

    on(
      eventName: 'move_ended' | 'move_stopped' | 'move_paused' | 'move_resumed',
      listener: () => void
    ): MultiMarker;

    /**
     * 从 eventName 事件的监听器数组中移除指定的 listener
     */
    off(eventName: string, listener: () => void): MultiMarker;
  }

  type MultiMarkerStyleHash = Record<string, MarkerStyle>;

  class MarkerStyle {
    constructor(options: MarkerStyleOptions);
  }

  type MoveAlongParamSet = Record<string, MoveAlongParam>;

  interface MoveAlongParam {
    /**
     * 移动路径的坐标串
     */
    path: LatLng[];

    /**
     * 完成移动所需的时间, 单位: 毫秒 (同时指定 duration 和 speed, duration 优先级高)
     */
    duration?: number;

    /**
     * speed 为指定速度, 正整数, 单位: 千米/小时
     */
    speed?: number;
  }

  /**
   * 点标记沿线移动时返回的信息
   */
  interface MarkerMovingEventItem {
    /**
     * marker 所走过的路径坐标串
     */
    passedLatLngs: LatLng[];

    /**
     * 自动旋转情况下, 当前点的旋转角度(只对 faceTo 为 'Map' 的点标记有效)
     */
    angle: number;
  }
}
