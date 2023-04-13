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

  // docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#1
  class Map implements MapOptions {
    constructor(dom: string | HTMLElement, options: MapOptions);

    setCenter(center: LatLng): Map;

    setZoom(zoom: number): Map;

    setRotation(rotation: number): Map;

    setPitch(pitch: number): Map;

    setScale(scale: number): Map;

    setOffset(offset: { x: number; y: number }): Map;

    setDraggable(draggable: boolean): Map;

    setScrollable(scrollable: boolean): Map;

    setMaxZoom(maxZoom: number): Map;

    setMinZoom(minZoom: number): Map;

    setPitchable(pitchable: boolean): Map;

    setRotatable(rotatable: boolean): Map;

    setDoubleClickZoom(doubleClickZoom: boolean): Map;

    setBoundary(boundary: LatLngBounds): Map;

    setViewMode(viewMode: string): Map;

    setBaseMap(baseMap: BaseMap | BaseMap[]): Map;

    setMapStyleId(mapStyleId: string): Map;

    panTo(latLng: LatLng, opts: EaseOptions): Map;

    zoomTo(zoom: number, opts: EaseOptions): Map;

    rotateTo(rotation: number, opts: EaseOptions): Map;

    pitchTo(pitch: number, opts: EaseOptions): Map;

    easeTo(mapStatus: object, opts: EaseOptions): Map;

    fitBounds(bounds: LatLngBounds, options: FitBoundsOptions): Map;

    getCenter(): LatLng;

    getZoom(): number;

    getRotation(): number;

    getPitch(): number;

    getBounds(): LatLngBounds;

    getScale(): number;

    getOffset(): { x: number; y: number };

    getDraggable(): boolean;

    getScrollable(): boolean;

    getDoubleClickZoom(): boolean;

    getBoundary(): LatLngBounds;

    addControl(control: Control): Map;

    removeControl(id: string): Map;

    getControl(id: string): Control;

    getViewMode(): string;

    getBaseMap(): BaseMap | BaseMap[];

    getIndoorManager(): indoorManager;

    destroy(): void;

    projectToContainer(latLng: LatLng): Point;

    unprojectFromContainer(pixel: Point): LatLng;

    on(eventName: EvtName, listener: () => void): Map;

    on(eventName: MapEvtName, listener: (evt: MapEvent) => void): Map;

    on(eventName: AnimateEvtName, listener: (evt: AnimationEvent) => void): Map;

    on(eventName: LoopEvtName, listener: (evt: number) => void): Map;

    off(
      eventName: EvtName | MapEvtName | AnimateEvtName | LoopEvtName,
      listener: () => void
    ): Map;

    moveLayer(layerId: string, level: constants.LAYER_LEVEL): Map;

    startAnimation(keyFrames: MapKeyFrame[], opts: AnimationOptions): void;

    stopAnimation(): void;

    pauseAnimation(): void;

    resumeAnimation(): void;

    enableAreaHighlight(opts: highlightOptions): Map;

    disableAreaHighlight(): Map;

    enableAreaClip(opts: ClipOptions): Map;

    disableAreaClip(): Map;
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
