declare namespace TMap {
  /**
   * 用于创建自定义栅格瓦片图层
   */
  class ImageTileLayer implements ImageTileLayerOptions {
    constructor(options: ImageTileLayerOptions);

    /**
     * 获取图层的 id
     */
    getId(): this;

    /**
     * 设置展示图层的地图对象
     */
    setMap(map: Map | null): this;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): this;

    /**
     * 设置图层绘制顺序
     */
    setZIndex(zIndex: number): this;

    /**
     * 设置图层透明度
     */
    setOpacity(opacity: number): this;

    /**
     * 创建个性化图层平台配置的个性化图层
     */
    static createCustomLayer(
      options: CustomLayerOptions
    ): Promise<ImageTileLayer>;
  }

  /**
   * 用于创建基于 OGC 标准的 WMS 地图服务的图层类,
   * 仅支持 EPSG3857 坐标系统的WMS图层
   */
  class WMSLayer implements WMSLayerOptions {
    constructor(options: WMSLayerOptions);

    /**
     * 设置展示图层的地图对象
     */
    setMap(map: Map | null): this;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): this;

    /**
     * 设置图层绘制顺序
     */
    setZIndex(zIndex: number): this;

    /**
     * 设置图层透明度
     */
    setOpacity(opacity: number): this;
  }

  interface WMSParams {
    /**
     * 请求的图层名称
     */
    layers: string;

    /**
     * 请求的 WMS 的版本号
     */
    version?: string;
  }

  /**
   * 用于创建基于 OGC 标准的 WMTS 地图服务的图层类,
   * 仅支持 EPSG3857 坐标系统的 WMTS 图层
   */
  class WMTSLayer implements WMTSLayerOptions {
    constructor(options: WMTSLayerOptions);

    /**
     * 设置展示图层的地图对象
     */
    setMap(map: Map | null): this;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): this;

    /**
     * 设置图层绘制顺序
     */
    setZIndex(zIndex: number): this;

    /**
     * 设置图层透明度
     */
    setOpacity(opacity: number): this;
  }

  interface WMTSParams {
    /**
     * 请求的图层名称
     */
    layer: string;

    /**
     * 瓦片矩阵数据集
     */
    tileMatrixSet: string;

    /**
     * 请求的 WMTS 的版本号
     */
    version?: string;
  }

  /**
   * 用于创建自定义图片图层, 图片会随着地图缩放而缩放
   */
  class ImageGroundLayer implements ImageGroundLayerOptions {
    constructor(options: ImageGroundLayerOptions);

    /**
     * 设置展示图层的地图对象
     */
    setMap(map: Map): this;

    /**
     * 设置展示图层的地理范围
     */
    setBounds(bounds: LatLngBounds): this;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): this;

    /**
     * 设置图层绘制顺序
     */
    setZIndex(zIndex: number): this;

    /**
     * 设置图层透明度
     */
    setOpacity(opacity: number): this;

    /**
     * 更新图层资源路径, 相同的 url 不会被更新
     */
    setSrc(src: string): this;

    /**
     * 获取地图对象, 若无返回 null
     */
    getMap(): Map | null;

    /**
     * 获取图层的 id
     */
    getId(): this;

    /**
     * 获取展示图层的地理范围
     */
    getBounds(): LatLngBounds;
  }

  /**
   * 用于创建自定义图片图层, 图片会随着地图缩放而缩放
   */
  class CanvasGroundLayer implements CanvasGroundLayerOptions {
    constructor(options: CanvasGroundLayerOptions);

    /**
     * 设置展示图层的地图对象
     */
    setMap(map: Map): this;

    /**
     * 设置展示图层的地理范围
     */
    setBounds(bounds: LatLngBounds): this;

    /**
     * 设置图层是否可见
     */
    setVisible(visible: boolean): this;

    /**
     * 设置图层绘制顺序
     */
    setZIndex(zIndex: number): this;

    /**
     * 设置图层透明度
     */
    setOpacity(opacity: number): this;

    /**
     * 更新 canvas 元素, 同一个 canvas 不会被重复更新
     */
    setCanvas(canvas: HTMLCanvasElement): this;

    /**
     * 刷新 canvas, 当 canvas 图像内容改变时调用, 否则 canvas 的内容不会更新到地图上
     */
    refresh(): null;

    /**
     * 获取地图对象, 若无返回 null
     */
    getMap(): Map | null;

    /**
     * 获取图层的 id
     */
    getId(): this;

    /**
     * 获取展示图层的地理范围
     */
    getBounds(): LatLngBounds;
  }

  /**
   * 用于创建遮罩图层, 其覆盖区域内 3D 建筑及 POI 将不显示, 可配合自定义图层进行使用
   */
  class MaskLayer implements MaskLayerOptions {
    constructor(options: MaskLayerOptions);

    /**
     * 新增遮罩区域, 可批量添加
     */
    add(geometries: MaskGeometry[]): this;

    /**
     * 更新遮罩区域数据, 已存在id则更新已有数据, 若不存在则添加数据
     */
    update(geometries: MaskGeometry[]): this;

    /**
     * 获取指定遮罩区域
     */
    get(id: string): MaskGeometry;

    /**
     * 获取图层内所有遮罩区域
     */
    getAll(): MaskGeometry[];

    /**
     * 删除指定遮罩区域
     */
    remove(ids: string[]): this;

    /**
     * 清除所有遮罩区域
     */
    clear(): this;

    /**
     * 设置图层绑定的地图对象, 若为 null 则将其从地图中移除
     */
    setMap(map: Map | null): this;

    /**
     * 获取地图对象, 若为空则返回 null
     */
    getMap(): Map | null;
  }

  interface MaskGeometry {
    /**
     * 唯一标识
     */
    id: string;

    /**
     * 遮罩轮廓线坐标点串
     */
    paths: LatLng[];
  }
}
