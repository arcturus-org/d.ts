// docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocCluster

declare namespace TMap {
  class MarkerCluster implements MarkerClusterOptions {
    constructor(options: MarkerClusterOptions);

    /**
     * 设置地图对象, 如果 map 为 null 意味着将点聚合图层从地图中移除
     */
    setMap(map: Map | null): MarkerCluster;

    /**
     * 更新点数据, 如果参数为 null 或 undefined 不会做任何处理
     */
    setGeometries(geometries?: PointGeometry[] | null): MarkerCluster;

    /**
     * 获取地图对象, 若为空返回 null
     */
    getMap(): Map | null;

    /**
     * 获取图层的 id
     */
    getId(): this;

    /**
     * 获取当前地图视野范围内, 聚合后的聚合簇数据, 聚合是异步操作,
     * 可以绑定 cluster_changed 事件获取每次地图上最新的聚合簇
     */
    getClusters(): ClusterInfo[];

    /**
     *  获取点数据
     */
    getGeometries(): PointGeometry[];

    /**
     * 根据点数据 id 来获取点数据
     */
    getGeometryById(id: string): PointGeometry;

    /**
     * 更新标注点数据, 如果 geometry 的 id 存在于聚合点的集合中, 会更新对 id 的数据, 如果之前不存在于集合中, 会作为新的点标注添加到集合中进行聚合,
     * 如果参数为 null 或 undefined 不会做任何处理
     */
    updateGeometries(geometry?: PointGeometry[] | null): this;

    /**
     * 向图层中添加标注点
     * 如果 geometry 的 id 已经存在集合中, 则该 geometry 不会被重复添加
     * 如果 geometry 没有 id 或者 id 不存在于集合中会被添加到集合中进行聚合
     * 没有 id 的 geometry 会被赋予一个唯一 id
     * 如果要添加到集合中的标注存在重复 id, 这些标注点会被重新分配 id
     * 如果参数为 null 或 undefined 不会做任何处理
     */
    add(geometries?: PointGeometry[] | null): this;

    /**
     * 移除指定 id 的标注点, 如果参数为 null 或 undefined 不会做任何处理
     */
    remove(ids?: string[] | null): this;

    on(
      eventName: 'click',
      listener: (evt: ClusterInfo[] | PointGeometry) => void
    ): this;

    on(eventName: 'cluster_changed', listener: () => void): this;

    /**
     * 从 eventName 事件的监听器数组中移除指定的 listener
     */
    off(eventName: 'cluster_changed' | 'click', listener: () => void): this;
  }

  interface ClusterInfo {
    /**
     * 聚合簇的位置点
     */
    center: LatLng;

    /**
     * 该聚合簇内的点标记数据数组,
     * 注: 该点标记不支持通过style更改样式
     */
    geometries: PointGeometry[];

    /**
     * 聚合簇的边界范围
     */
    bounds: LatLngBounds;
  }
}
