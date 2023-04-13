declare namespace TMap {
  type EvtName =
    | 'idle'
    | 'tilesloaded'
    | 'dragstart'
    | 'drag'
    | 'dragend'
    | 'panstart'
    | 'pan'
    | 'panend'
    | 'rotatestart'
    | 'rotate'
    | 'rotateend'
    | 'pitchstart'
    | 'pitch'
    | 'pitchend'
    | 'zoom'
    | 'resize'
    | 'center_changed'
    | 'bounds_changed'
    | 'scale_changed'
    | 'control_added'
    | 'control_removed'
    | 'animation_ended'
    | 'animation_stopped';

  type MapEvtName =
    | 'click'
    | 'rightclick'
    | 'dblclick'
    | 'mousedown'
    | 'mouseup'
    | 'mousemove'
    | 'touchstart'
    | 'touchmove'
    | 'touchend';

  type AnimateEvtName = 'animation_playing';

  type LoopEvtName = 'animation_looped';

  /**
   * API 中的核心类， 用于创建地图实例
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1
   */
  class Map implements MapOptions {
    constructor(dom: string | HTMLElement, options: MapOptions);

    /**
     * 设置地图中心点
     */
    setCenter(center: LatLng): this;

    /**
     * 设置地图缩放级别
     */
    setZoom(zoom: number): this;

    /**
     * 设置地图水平面上的旋转角度
     */
    setRotation(rotation: number): this;

    /**
     * 设置地图俯仰角
     */
    setPitch(pitch: number): this;

    /**
     * 设置地图显示比例
     */
    setScale(scale: number): this;

    /**
     * 设置地图与容器偏移量, x 方向向右偏移为正值, y 方向向下偏移为正值
     */
    setOffset(offset: { x: number; y: number }): this;

    /**
     * 设置地图是否支持拖拽
     */
    setDraggable(draggable: boolean): this;

    /**
     * 设置地图是否支持滚轮缩放
     */
    setScrollable(scrollable: boolean): this;

    /**
     * 设置地图最大缩放级别, 支持 3~20
     */
    setMaxZoom(maxZoom: number): this;

    /**
     * 设置地图最小缩放级别, 支持 3~20
     */
    setMinZoom(minZoom: number): this;

    /**
     * 设置地图是否支持改变俯仰角度, 在 2D 视图下, 此方法无效
     */
    setPitchable(pitchable: boolean): this;

    /**
     * 设置地图是否支持改变旋转角度, 在 2D 视图下, 此方法无效
     */
    setRotatable(rotatable: boolean): this;

    /**
     * 设置地图是否支持双击缩放
     */
    setDoubleClickZoom(doubleClickZoom: boolean): this;

    /**
     * 设置地图限制边界, 拖拽、缩放等操作无法将地图移动至边界外
     */
    setBoundary(boundary: LatLngBounds): this;

    /**
     * 设置地图视图模式
     */
    setViewMode(viewMode: string): this;

    /**
     * 动态设置地图底图
     */
    setBaseMap(baseMap: BaseMap | BaseMap[]): this;

    /**
     * 动态设置个性化地图样式
     */
    setMapStyleId(mapStyleId: string): this;

    /**
     * 将地图中心平滑移动到指定的经纬度坐标
     */
    panTo(latLng: LatLng, opts: EaseOptions): this;

    /**
     * 平滑缩放到指定级别
     */
    zoomTo(zoom: number, opts: EaseOptions): this;

    /**
     * 平滑旋转到指定角度
     */
    rotateTo(rotation: number, opts: EaseOptions): this;

    /**
     * 平滑变化到指定俯仰角度
     */
    pitchTo(pitch: number, opts: EaseOptions): this;

    /**
     * 平滑过渡到指定状态
     */
    easeTo(mapStatus: Record<string, any>, opts: EaseOptions): this;

    /**
     * 根据指定的地理范围调整地图视野
     */
    fitBounds(bounds: LatLngBounds, options: FitBoundsOptions): this;

    /**
     * 获取地图中心
     */
    getCenter(): LatLng;

    /**
     * 获取地图缩放级别
     */
    getZoom(): number;

    /**
     * 获取地图水平面上的旋转角度
     */
    getRotation(): number;

    /**
     * 获取地图俯仰角度
     */
    getPitch(): number;

    /**
     * 返回当前地图的视野范围
     */
    getBounds(): LatLngBounds;

    /**
     * 获取地图显示比例
     */
    getScale(): number;

    /**
     * 获取地图与容器的偏移量
     */
    getOffset(): { x: number; y: number };

    /**
     * 获取地图是否支持拖拽
     */
    getDraggable(): boolean;

    /**
     * 获取地图是否支持滚轮缩放
     */
    getScrollable(): boolean;

    /**
     * 获取地图是否支持双击缩放
     */
    getDoubleClickZoom(): boolean;

    /**
     * 获取地图限制边界
     */
    getBoundary(): LatLngBounds;

    /**
     * 添加控件到地图, 传入控件对象
     */
    addControl(control: Control): this;

    /**
     * 从地图容器移出控件
     */
    removeControl(id: string): this;

    /**
     * 根据控件 id 获取对应的控件对象
     */
    getControl(id: string): Control;

    /**
     * 获取地图视图模式
     */
    getViewMode(): string;

    /**
     * 获取当前的底图类型
     */
    getBaseMap(): BaseMap | BaseMap[];

    /**
     * 获取室内地图管理器
     */
    getIndoorManager(): indoorManager;

    /**
     * 销毁地图
     */
    destroy(): void;

    /**
     * 经纬度坐标转换为容器像素坐标, 容器像素坐标系以地图容器左上角点为原点
     */
    projectToContainer(latLng: LatLng): Point;

    /**
     * 容器像素坐标转换为经纬度坐标
     */
    unprojectFromContainer(pixel: Point): LatLng;

    /**
     * 添加 listener 到 eventName 事件的监听器数组中
     */
    on(eventName: EvtName, listener: () => void): this;

    on(eventName: MapEvtName, listener: (evt: MapEvent) => void): this;

    on(
      eventName: AnimateEvtName,
      listener: (evt: AnimationEvent) => void
    ): this;

    on(eventName: LoopEvtName, listener: (evt: number) => void): this;

    off(
      eventName: EvtName | MapEvtName | AnimateEvtName | LoopEvtName,
      listener: () => void
    ): Map;

    /**
     * 修改图层层级顺序
     */
    moveLayer(layerId: string, level: constants.LAYER_LEVEL): this;

    /**
     * 开始动画, 通过 keyFrames 定义关键帧
     */
    startAnimation(keyFrames: MapKeyFrame[], opts: AnimationOptions): void;

    /**
     * 停止动画, 停止后无法通过 resumeAnimation 恢复
     */
    stopAnimation(): void;

    /**
     * 暂停动画
     */
    pauseAnimation(): void;

    /**
     * 恢复动画
     */
    resumeAnimation(): void;

    /**
     * 启用地图区域高亮功能
     */
    enableAreaHighlight(opts: highlightOptions): this;

    /**
     * 禁用地图区域高亮功能
     */
    disableAreaHighlight(): this;

    /**
     * 启用地图区域掩膜功能
     */
    enableAreaClip(opts: ClipOptions): this;

    /**
     * 停用地图区域掩膜功能
     */
    disableAreaClip(): this;
  }

  /**
   * key 为偏移(offset), value 为颜色(color)
   */
  type ColorObj = Record<number, string>;

  /**
   * 用于创建渐变色实例
   */
  class GradientColor implements GradientColorOptions {
    constructor(options: GradientColorOptions);

    /**
     * 添加一个由偏移(offset)和颜色(color)定义的断点,
     * offset 取值范围为0~1, 颜色支持 rgb(), rgba(), #RRGGBB 格式
     */
    addColorStop(offset: number, color: string): GradientColor;

    /**
     * 设置水平线和渐变线之间的角度, 逆时针方向旋转, 0 度从左到右, 90 度从下到上
     */
    setAngle(angle: number): GradientColor;

    /**
     * 获取水平线和渐变线之间的角度
     */
    getAngle(): number;

    /**
     * 创建双色渐变色
     */
    static createDoubleColorGradient(
      color1: string,
      color2: string,
      angle: number
    ): GradientColor;

    /**
     * 将字面量对象和双色值数组, 比如 {0: '#FFFFFF', 1: '#000000' }
     * 或 ['#FFFFFF', '#000000'] 转换为 GradientColor 对象,
     * 颜色支持 rgb(), rgba(), #RRGGBB 格式, 只支持双色,
     * 第一个颜色为起点颜色, 默认 offset 为 0, 第二个颜色为终点颜色,
     * 默认 offset 为 1, angle 默认为 0
     */
    static convert(colors: ColorObj | string[]): GradientColor;
  }

  /**
   * 地图关键帧对象
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#mapKeyFrame
   */
  interface MapKeyFrame {
    /**
     * 动画过程中该关键帧的百分比, 取值范围为 0~1
     */
    percentage: number;

    /**
     * 地图中心点经纬度
     */
    center: LatLng;

    /**
     * 地图缩放级别
     */
    zoom: number;

    /**
     * 地图在水平面上的旋转角度
     */
    rotation: number;

    /**
     * 地图俯仰角度, 取值范围为 0~80
     */
    pitch: number;
  }

  /**
   * 缩放控件, 为控件Control 的子类
   */
  class ZoomControl extends Control {
    /**
     * 设置控件上是否显示缩放级别, 默认为 false(不显示)
     */
    setNumVisible(visible: boolean): this;
  }
}
