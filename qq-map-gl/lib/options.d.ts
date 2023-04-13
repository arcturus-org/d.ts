declare namespace TMap {
  /**
   * 地图配置参数, 通过这个参数来控制初始化地图的中心点、缩放级别、俯仰角度等
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#2
   */
  interface MapOptions {
    /**
     * 地图中心点经纬度
     */
    center?: LatLng;

    /**
     * 地图缩放级别, 支持3～20
     */
    zoom?: number;

    /**
     * 地图最小缩放级别, 默认为3
     */
    minZoom?: number;

    /**
     * 地图最大缩放级别, 默认为20
     */
    maxZoom?: number;

    /**
     * 地图在水平面上的旋转角度, 顺时针方向为正, 默认为 0
     */
    rotation?: number;

    /**
     * 地图俯仰角度, 取值范围为 0~80, 默认为 0
     */
    pitch?: number;

    /**
     * 地图显示比例, 默认为 1
     */
    scale?: number;

    /**
     * 地图中心与容器的偏移量
     */
    offset?: {
      x: number;
      y: number;
    };

    /**
     * 是否支持拖拽移动地图, 默认为 true
     */
    draggable?: boolean;

    /**
     * 是否支持鼠标滚轮缩放地图, 默认为 true
     */
    scrollable?: boolean;

    /**
     * 是否允许设置俯仰角度, 默认为 true
     * 在 2D 视图下, 此属性无效
     */
    pitchable?: boolean;

    /**
     * 是否允许设置旋转角度, 默认为 true
     * 在 2D 视图下, 此属性无效
     */
    rotatable?: boolean;

    /**
     * 是否支持双击缩放地图, 默认为 true
     */
    doubleClickZoom?: boolean;

    /**
     * 地图缩放焦点控制
     */
    mapZoomType?: constants.MAP_ZOOM_TYPE;

    /**
     * 地图边界, 设置后拖拽、缩放等操作无法将地图移动至边界外, 默认为 null
     */
    boundary?: LatLngBounds | null;

    /**
     * 地图样式 ID, 有效值为 "style[编号]", 与 key 绑定
     * docs: https://lbs.qq.com/dev/console/custom/mapStyle
     */
    mapStyleId?: string;

    /**
     * 地图底图, 可以使用数组形式实现多种底图叠加
     * 默认为 VectorBaseMap, 如果传入 null 地图不显示任何地物
     */
    baseMap?: BaseMap | BaseMap[] | null;

    /**
     * 地图视图模式, 支持 2D 和 3D, 默认为 3D
     * 2D 模式下不可对地图进行拖拽旋转, pitch 和 rotation 始终保持为 0
     */
    viewMode?: string;

    /**
     * 地图渲染配置参数
     */
    renderOptions?: MapRenderOptions;

    /**
     * 是否显示地图上的控件, 默认为 true
     */
    showControl?: boolean;

    /**
     * clip 区域掩膜配置参数
     */
    clip?: ClipOptions;
  }

  /**
   * 地图渲染配置参数
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#10
   */
  interface MapRenderOptions {
    /**
     * 保留地图的渲染缓冲, 在一些结合开源库需要导出图片的场景下(如 dom-to-image html2canvas)
     * 需要设置这个参数为 true, 默认为 false
     */
    preserveDrawingBuffer?: boolean;

    /**
     * 是否启用泛光效果(请确认浏览器支持 WebGL2)
     */
    enableBloom?: boolean;

    /**
     * 边际雾化设置
     */
    fogOptions?: fogOptions;
  }

  /**
   * 雾化参数
   */
  interface fogOptions {
    /**
     * 雾气颜色, 支持 #RRGGBB 和 rgb() 格式
     * 若不设置则使用矢量地图地面颜色
     */
    color?: string;
  }

  interface GradientColorOptions {
    /**
     * 渐变色中的断点集合, key-value 形式,
     * key 为偏移(offset), value 为颜色(color),
     * 比如 {0: '#FFFFFF', 1: '#000000' }
     */
    stops?: ColorObj;

    /**
     * 水平线和渐变线之间的角度, 逆时针方向旋转,
     * 0 度从左到右, 90 度从下到上, 默认值 0 度
     */
    angle?: number;
  }

  /**
   * 地图缓动变化配置参数
   */
  interface EaseOptions {
    /**
     * 缓动动画时长, 单位为 ms, 默认为 500
     */
    duration?: number;
  }

  /**
   * 地图自适应地理范围配置参数
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#3
   */
  interface FitBoundsOptions {
    /**
     * 设定的地理范围与可视窗口之间的距离
     */
    padding?:
      | number
      | {
          top?: number;
          bottom?: number;
          left?: number;
          right?: number;
        };

    /**
     * 调整视野时的最小缩放等级,
     * 默认值且最小值为地图的最小缩放等级
     */
    minZoom?: number;

    /**
     * 调整视野时的最大缩放等级,
     * 默认值且最大值为地图的最大缩放等级
     */
    maxZoom?: number;

    /**
     * 缓动配置, 可设置地图视野变化过程的动画效果
     */
    ease?: EaseOptions;
  }

  /**
   * 地图掩膜区域设置
   */
  interface ClipOptions {
    /**
     * 掩膜区域轮廓坐标点串
     */
    paths?: LatLng;
  }

  interface AnimationOptions {
    /**
     * 动画周期时长, 单位为 ms, 默认为 1000
     */
    duration?: number;

    /**
     *  动画周期循环次数, 若为 Infinity 则无限循环, 默认为 1
     */
    loop?: number;
  }

  /**
   * 地图高亮区域设置
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap#highlightOptions
   */
  interface highlightOptions {
    /**
     * 高亮区域轮廓坐标点串
     */
    paths?: LatLng;

    /**
     * 高亮色, 区域内地图元素将与该色进行混合,
     * 支持 rgb()、rgba()、#RRGGBB 等形式, 默认为 rgba(0, 0, 0, 0)
     */
    highlightColor?: string;

    /**
     * 阴影色, 区域外地图元素将与该色进行混合
     * 支持 rgb()、rgba()、#RRGGBB 等形式, 默认为 rgba(0, 0, 0, 0.4)
     */
    shadeColor?: string;
  }

  /**
   * docs: https://lbs.qq.com/Vis/JUEAPI/APIDoc/overlay#2
   */
  interface GeometryOverlayOptions {
    /**
     * 图层 id
     */
    id?: string;

    /**
     * 显示图层的底图
     */
    map?: Map;

    /**
     * 图层样式映射表
     */
    styles?: Record<string, string>;

    /**
     * 数据数组
     */
    geometries?: Geometry[];
  }

  /**
   * MultiMarker 的配置参数
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#2
   */
  interface MultiMarkerOptions {
    /**
     * 图层 id
     */
    id?: string;

    /**
     * 显示 Marker 图层的底图
     */
    map?: Map;

    /**
     * 图层绘制顺序
     */
    zIndex?: number;

    /**
     * 点标注的相关样式
     */
    styles?: MultiMarkerStyleHash;

    /**
     * 是否开启图层内部的 marker 标注碰撞
     */
    enableCollision?: boolean;

    /**
     * 点标注数据数组
     */
    geometries?: PointGeometry[];
  }

  /**
   * MarkerStyle 配置参数
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocMarker#5
   */
  interface MarkerStyleOptions {
    /**
     * 标注点图片的宽度, 默认为 34
     */
    width: number;

    /**
     * 标注点图片的高度, 默认为 50
     */
    height: number;

    /**
     * 标注点图片的锚点位置, 默认为 { x: width / 2, y: height }, 左上角点为原点
     */
    anchor?: { x: number; y: number };

    /**
     * 标注点图片 url 或 base64 地址
     */
    src?: string;

    /**
     * 标注点图片的朝向, 可取贴地(map)或直立(screen), 默认为 'screen'
     */
    faceTo?: 'map' | 'screen';

    /**
     * 标注点图片的旋转角度, 单位为度, 非负数,
     * 以锚点为旋转原点, 逆时针为正
     */
    rotate?: number;

    /**
     * 标注点文本颜色属性, 支持 rgb(), rgba(), #RRGGBB等形式, 默认为 rgba(0,0,0,1)
     */
    color?: string;

    /**
     * 标注点文本描边颜色属性, 支持 rgb(), rgba(), #RRGGBB 等形式, 默认为 rgba(0,0,0,0)
     */
    strokeColor?: string;

    /**
     * 标注点文本描边宽度, 默认为 1
     */
    strokeWidth?: number;

    /**
     * 标注点文本文字大小属性, 默认为 14
     */
    size?: number;

    /**
     * 标注点文本文字相对于标注点图片的方位, 可选位于标注点图片的 center, top, bottom, left, right方位
     */
    direction?: string;

    /**
     * 标注点文本文字基于 direction 方位的偏移量, 单位为像素,
     * 以文本文字中心为原点, x轴向右为正向左为负, y轴向下为正向上为负, 默认为 {x:0, y:0}
     */
    offset?: {
      x: number;
      y: number;
    };
  }

  /**
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocLayer#2
   */
  interface ImageTileLayerOptions {
    /**
     * 通过传入的瓦片坐标 (x,y) 以及 zoom 级别返回瓦片的 URL(string类型)
     */
    getTileUrl: (x: number, y: number, z: number) => string;

    /**
     * 展示图层的地图对象
     */
    map?: Map;

    /**
     * 最小缩放层级, 当地图缩放层级小于该值时该图层不显示, 默认为 3
     */
    minZoom?: number;

    /**
     * 最大缩放层级, 当地图缩放层级大于该值时该图层不显示, 默认为 18
     */
    maxZoom?: number;

    /**
     * 是否可见, 默认为 true
     */
    visible?: boolean;

    /**
     * 图层绘制顺序, 默认为 1, 有效范围为 [1, 9999]
     */
    zIndex?: number;

    /**
     * 图层透明度, 默认为 1
     */
    opacity?: number;
  }

  /**
   * 创建个性化图层时的配置参数
   */
  interface CustomLayerOptions {
    /**
     * 个性化图层的 id
     */
    layerId: string;

    /**
     * 展示图层的地图对象
     */
    map?: Map;

    /**
     * 最小缩放层级, 当地图缩放层级小于该值时该图层不显示
     */
    minZoom?: number;

    /**
     * 最大缩放层级, 当地图缩放层级大于该值时该图层不显示
     */
    maxZoom?: number;

    /**
     * 是否可见, 默认为 true
     */
    visible?: boolean;

    /**
     * 图层绘制顺序, 默认为 1, 有效范围为 [1, 9999]
     */
    zIndex?: number;

    /**
     * 图层透明度, 默认为 1
     */
    opacity?: number;
  }

  interface WMSLayerOptions {
    /**
     * 地图服务地址
     */
    url: string;

    /**
     * 展示图层的地图对象
     */
    map?: Map;

    /**
     * 最小缩放层级, 当地图缩放层级小于该值时该图层不显示, 默认为 3
     */
    minZoom?: number;

    /**
     * 最大缩放层级, 当地图缩放层级大于该值时该图层不显示, 默认为 20
     */
    maxZoom?: number;

    /**
     * 最大数据层级, 当缩放层级大于该值时不再加载新数据, 而是以此层级数据拉伸进行展示, 默认与 maxZoom 相同
     */
    maxDataZoom?: number;

    /**
     * 是否可见, 默认为 true
     */
    visible?: boolean;

    /**
     * 图层绘制顺序, 默认为 1, 有效范围为 [1, 9999]
     */
    zIndex?: number;

    /**
     * 图层透明度, 默认为 1
     */
    opacity?: number;

    /**
     * OGC 标准的 WMS 地图服务的 GetMap 接口的参数
     */
    params?: WMSParams;
  }

  interface WMTSLayerOptions {
    /**
     * 地图服务地址
     */
    url: string;

    /**
     * 展示图层的地图对象
     */
    map?: Map;

    /**
     * 最小缩放层级, 当地图缩放层级小于该值时该图层不显示, 默认为 3
     */
    minZoom?: number;

    /**
     * 最大缩放层级, 当地图缩放层级大于该值时该图层不显示, 默认为 20
     */
    maxZoom?: number;

    /**
     * 最大数据层级, 当缩放层级大于该值时不再加载新数据, 而是以此层级数据拉伸进行展示, 默认与 maxZoom 相同
     */
    maxDataZoom?: number;

    /**
     * 是否可见, 默认为 true
     */
    visible?: boolean;

    /**
     * 图层绘制顺序, 默认为 1, 有效范围为 [1, 9999]
     */
    zIndex?: number;

    /**
     * 图层透明度, 默认为 1
     */
    opacity?: number;

    /**
     * OGC 标准的 WMTS 地图服务的 GetTile 接口的参数
     */
    params?: WMTSParams;
  }

  interface ImageGroundLayerOptions {
    /**
     * 图片覆盖的经纬度范围
     */
    bounds: LatLngBounds;

    /**
     * 图片 url 或 base64, 如果图片为 url 格式, 图片服务器必须允许跨域访问
     */
    src: string;

    /**
     * 展示图层的地图对象
     */
    map?: Map;

    /**
     * 最小缩放层级, 当地图缩放层级小于该值时该图层不显示, 默认为 3
     */
    minZoom?: number;

    /**
     * 最大缩放层级, 当地图缩放层级大于该值时该图层不显示, 默认为 20
     */
    maxZoom?: number;

    /**
     * 是否可见, 默认为 true
     */
    visible?: boolean;

    /**
     * 图层绘制顺序, 默认为 1
     */
    zIndex?: boolean;

    /**
     * 图层透明度, 默认为 1
     */
    opacity?: number;
  }

  interface CanvasGroundLayerOptions {
    /**
     * 纹理覆盖的经纬度范围
     */
    bounds: LatLngBounds;

    /**
     * Canvas 元素, 如果 canvas 中有图片, 必须保证原始的图片服务允许跨域访问
     */
    canvas: HTMLCanvasElement;

    /**
     * 展示图层的地图对象
     */
    map?: Map;

    /**
     * 最小缩放层级, 当地图缩放层级小于该值时该图层不显示, 默认为 3
     */
    minZoom?: number;

    /**
     * 最大缩放层级, 当地图缩放层级大于该值时该图层不显示, 默认为 20
     */
    maxZoom?: number;

    /**
     * 是否可见, 默认为 true
     */
    visible?: boolean;

    /**
     * 图层绘制顺序, 默认为 1
     */
    zIndex?: boolean;

    /**
     * 图层透明度, 默认为 1
     */
    opacity?: number;
  }

  interface MaskLayerOptions {
    /**
     * 绑定的地图对象
     */
    map: Map;

    /**
     * 遮罩区域数据
     */
    geometries?: MaskGeometry[];
  }

  interface MarkerClusterOptions {
    /**
     * 图层id, 若没有会自动分配一个
     */
    id?: string;

    /**
     * 显示点聚合图层的底图
     */
    map?: Map;

    /**
     * 是否启用默认的聚合样式,
     * 默认样式是聚合点的数量量在 1-10,11-100,101-1000 的样式图标,
     * 默认为 true, 如果用户想实现更加炫酷的聚合效果, 可以关闭默认样式,
     * 使用 getClusters 获取到聚合簇数据后通过继承 DOMOverlay 来实现自定义聚合样式
     */
    enableDefaultStyle?: boolean;

    /**
     * 形成聚合簇的最小个数, 默认为 2
     */
    minimumClusterSize?: number;

    /**
     * 点标记数据数组
     */
    geometries?: PointGeometry[];

    /**
     * 点击已经聚合的标记点时是否实现聚合分离, 默认为 true
     */
    zoomOnClick?: boolean;

    /**
     * 聚合算法的可聚合距离, 即距离小于该值的点会聚合至一起, 默认为 60
     */
    gridSize?: number;

    /**
     * 每个聚和簇的中心是否应该是聚类中所有标记的平均值, 默认为 false
     */
    averageCenter?: boolean;

    /**
     * 采用聚合策略的最大缩放级别, 若地图缩放级别大于该值, 则不进行聚合默认为 20
     */
    maxZoom?: number;
  }

  /**
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo#2
   */
  interface InfoWindowOptions {
    /**
     * 显示信息窗的地图
     */
    map: Map;

    /**
     * 信息窗的经纬度坐标
     */
    position: LatLng;

    /**
     * 信息窗显示内容, 默认为空字符串当 enableCustom 为 true 时, 需传入信息窗体的 dom 字符串
     */
    content?: string;

    /**
     * 信息窗的 z-index值, 默认为 0
     */
    zIndex?: number;

    /**
     * 信息窗相对于 position 对应像素坐标的偏移量, x 方向向右偏移为正值, y 方向向下偏移为正值
     */
    offset?: {
      x: number;
      y: number;
    };

    /**
     * 信息窗体样式是否为自定义, 默认为 false
     */
    enableCustom?: boolean;
  }

  interface DOMOverlayOptions {
    /**
     * 显示自定义 DOM 覆盖物的地图
     */
    map: Map;
  }

  interface MultiLabelOptions {
    /**
     * 图层id, 若没有会自动分配一个
     */
    id?: string;

    /**
     * 显示文本标注图层的底图
     */
    map?: Map;

    /**
     * 文本标注的相关样式
     */
    styles?: MultiLabelStyleHash;

    /**
     * 是否开启图层内部的文本标注碰撞
     */
    enableCollision?: boolean;

    /**
     * 文本标注数据数组
     */
    geometries?: LabelGeometry[];
  }

  interface MultiPolylineOptions {
    /**
     * 图层id, 若没有会自动分配一个
     */
    id?: string;

    /**
     * 显示折线图层的底图
     */
    map?: Map;

    /**
     * 图层绘制顺序
     */
    zIndex?: number;

    /**
     * 折线的相关样式
     */
    styles?: MultiPolylineStyleHash;

    /**
     * 绘制折线是否是大圆航线, 默认为 false
     */
    enableGeodesic?: boolean;

    /**
     * 折线数据数组
     */
    geometries?: PolylineGeometry[];
  }

  interface LabelStyleOptions {
    /**
     * 颜色属性, 支持 rgb(), rgba(), #RRGGBB 等形式, 默认为 rgba(0,0,0,1)
     */
    color: string;

    /**
     * 文字大小属性, 默认为 14
     */
    size: number;

    /**
     * 文字偏移属性, 单位为像素, 以 PointGeometry 的位置点所对应屏幕位置为原点,
     * x 轴向右为正向左为负, y 轴向下为正向上为负
     */
    offset?: {
      x: number;
      y: number;
    };

    /**
     * 文字旋转属性, 单位为度, 以 PointGeometry 的位置点所对应屏幕位置为原点, 逆时针为正, 默认为 0
     */
    angle: number;

    /**
     * 文字水平对齐属性, 默认为 center, 可选值为 left（文字左侧与位置锚点对齐）、right（文字右侧与位置锚点对齐）、center（文字水平中心与位置锚点对齐）
     */
    alignment: string;

    /**
     * 文字垂直对齐属性, 默认为middle, 可选值为top（文字顶部与位置点对齐）、bottom（文字底部与位置点对齐）、middle（文字垂直中心与位置点对齐）
     */
    verticalAlignment: string;

    /**
     * 文字背景框高度, 单位为像素
     */
    height: number;

    /**
     * 文字背景框宽度, 单位为像素
     */
    width: number;

    /**
     * 文字背景框颜色属性, 支持 rgb(), rgba(), #RRGGBB 等形式, 默认为 rgba(0,0,0,0)
     */
    backgroundColor: string;

    /**
     * 文字背景框内边距, 单位为像素, 属性支持接受 1~2 个值, 规则符合 css 规范
     */
    padding: string;

    /**
     * 文字背景框边线宽度, 单位为像素
     */
    borderWidth: number;

    /**
     * 文字背景框边线宽度, 单位为像素
     */
    borderRadius: number;

    /**
     * 文字背景框边线颜色属性, 支持 rgb(), rgba(), #RRGGBB 等形式, 默认为 rgba(0,0,0,0)
     */
    borderColor: string;
  }

  interface PolylineStyleOptions {
    color?: string; // 线填充色, 支持rgb(), rgba(), #RRGGBB等形式, 默认为#3777FF
    width?: number; // 折线宽度, 正整数, 单位为像素, 指的是地图pitch为0时的屏幕像素大小, 如果pitch不为0, 实际绘制出来的线宽度与屏幕像素会存在一定误差, 默认为3
    borderWidth?: number; // 边线宽度, 非负整数, 默认为0, 单位为像素, 指的是地图pitch为0时的屏幕像素大小, 如果pitch不为0, 实际绘制出来的线宽度与屏幕像素会存在一定误差, 默认为1
    borderColor?: string; // 边线颜色, 支持rgb(), rgba(), #RRGGBB等形式, borderWidth不为0时有效, 默认为#3777FF
    lineCap?: string; // 线端头方式, 可选为butt, round, square, 默认为butt
    dashArray?: number[]; // 虚线展示方式, [0, 0]为实线, [10, 10]表示十个像素的实线和十个像素的空白（如此反复）组成的虚线, 默认为[0, 0];这里的像素指的是地图pitch为0时的屏幕像素大小, 如果pitch不为0, 实际绘制出来的线宽度与屏幕像素会存在一定误差
    showArrow?: boolean; // 是否沿线路方向显示箭头, 默认为false, 建议线宽度大于6时使用
    arrowOptions?: ArrowOptions; // 箭头显示配置, 仅在showArrow为true时有效
    enableBloom?: boolean; // 是否对折线启用泛光效果, 需在MapRenderOptions中开启泛光后才可使用
  }

  interface PolygonStyleOptions {
    /**
     * 面填充色, 支持 rgb(), rgba(), #RRGGBB 等形式
     */
    color?: string;

    /**
     * 是否显示边线, 默认为 false
     */
    showBorder?: boolean;

    /**
     * 边线颜色, 支持 rgb(), rgba(), #RRGGBB 等形式,
     * 默认为 #3777FF, showBorder 为 true 时有效
     */
    borderColor?: string;

    /**
     * 边线宽度, 正整数, 单位为像素, 指的是地图 pitch 为 0 时的屏幕像素大小,
     * 如果 pitch 不为 0, 实际绘制出来的线宽度与屏幕像素会存在一定误差,
     * 默认为 2, showBorder 为 true 时有效
     */
    borderWidth?: number;

    /**
     * 边线虚线虚线展示方式, [0, 0] 为实线, [10, 10] 表示十个像素的实线和十个像素的空白(如此反复)组成的虚线,
     * 默认为[0, 0], 这里的像素指的是地图 pitch 为 0 时的屏幕像素大小,
     * 如果 pitch 不为 0, 实际绘制出来的线宽度与屏幕像素会存在一定误差
     */
    borderDashArray?: number[];
  }

  /**
   * 折线上箭头配置参数
   */
  interface ArrowOptions {
    /**
     * 箭头图标宽度, 单位为px, 默认为6, 最大支持255
     */
    width?: number;

    /**
     * 箭头图标高度(沿线方向长度), 单位为px, 默认为4, 最大支持255
     */
    height?: number;

    /**
     * 箭头图标之间的孔隙长度, 单位为px, 默认为50, 最大支持255
     */
    space?: number;
  }

  interface MultiPolygonOptions {
    /**
     * 图层 id, 若没有会自动分配一个
     */
    id?: string;

    /**
     * 显示多边形图层的底图
     */
    map?: Map;

    /**
     * 图层绘制顺序
     */
    zIndex?: number;

    /**
     * 多边形的相关样式
     */
    styles?: MultiPolygonStyleHash;

    /**
     * 多边形数据数组
     */
    geometries?: PolygonGeometry[];
  }

  interface MultiRectangleOptions {
    /**
     *  图层 id, 若没有会自动分配一个
     */
    id?: string;

    /**
     * 显示多矩形图层的底图
     */
    map?: Map;

    /**
     * 图层绘制顺序
     */
    zIndex?: number;

    /**
     * 矩形的相关样式
     */
    styles?: MultiRectangleStyleHash;

    /**
     * 矩形数据数组
     */
    geometries?: RectangleGeometry[];
  }

  interface RectangleStyleOptions {
    /**
     * 面填充色, 支持 rgb(), rgba(), #RRGGBB 等形式
     */
    color?: string;

    /**
     * 是否显示边线, 默认为 false
     */
    showBorder?: boolean;

    /**
     * 边线颜色, 支持 rgb(), rgba(), #RRGGBB 等形式, 默认为 #3777FF, showBorder 为 true 时有效
     */
    borderColor?: string;

    /**
     * 折线宽度, 正整数, 单位为像素
     * 指的是地图 pitch 为 0 时的屏幕像素大小
     * 如果 pitch 不为 0, 实际绘制出来的线宽度与屏幕像素会存在一定误差, 默认为2
     * showBorder 为 true 时有效
     */
    borderWidth?: number;
  }

  interface MultiCircleOptions {
    /**
     * 图层 id, 若没有会自动分配一个
     */
    id?: string;

    /**
     * 显示多圆图层的底图
     */
    map?: Map;

    /**
     * 图层绘制顺序
     */
    zIndex?: number;

    /**
     * 圆的相关样式
     */
    styles?: MultiCircleStyleHash;

    /**
     * 圆数据数组
     */
    geometries?: CircleGeometry[];
  }

  interface CircleStyleOptions {
    /**
     * 面填充色, 支持 rgb(), rgba(), #RRGGBB 等形式
     */
    color?: string;

    /**
     * 是否显示边线, 默认为 false
     */
    showBorder?: boolean;

    /**
     * 边线颜色, 支持 rgb(), rgba(), #RRGGBB 等形式,
     * 默认为 #3777FF, showBorder 为 true 时有效
     */
    borderColor?: string;

    /**
     * 折线宽度, 正整数, 单位为像素,
     * 指的是地图 pitch 为 0 时的屏幕像素大小,
     * 如果 pitch 不为 0, 实际绘制出来的线宽度与屏幕像素会存在一定误差, 默认为 2,
     * showBorder 为 true 时有效
     */
    borderWidth?: number;
  }

  interface MultiEllipseOptions {
    /**
     * 图层 id, 若没有会自动分配一个
     */
    id?: string;

    /**
     * 显示多椭圆图层的底图
     */
    map?: Map;

    /**
     * 图层绘制顺序
     */
    zIndex?: number;

    /**
     * 椭圆的相关样式
     */
    styles?: MultiEllipseStyleHash;

    /**
     * 椭圆数据数组
     */
    geometries?: EllipseGeometry[];
  }

  interface EllipseStyleOptions {
    /**
     * 面填充色, 支持 rgb(), rgba(), #RRGGBB 等形式
     */
    color?: string;

    /**
     * 是否显示边线, 默认为 false
     */
    showBorder?: boolean;

    /**
     * 边线颜色, 支持 rgb(), rgba(), #RRGGBB 等形式, 默认为 #3777FF, showBorder 为 true 时有效
     */
    borderColor?: string;

    /**
     * 折线宽度, 正整数, 单位为像素
     * 指的是地图 pitch 为 0 时的屏幕像素大小
     * 如果 pitch 不为 0, 实际绘制出来的线宽度与屏幕像素会存在一定误差, 默认为2
     * showBorder 为 true 时有效
     */
    borderWidth?: number;
  }

  interface ExtrudablePolygonStyleOptions {
    /**
     * 线填充色, 支持 rgb(), rgba(), #RRGGBB 等形式
     */
    color: string;

    /**
     * 多边形拔起高度, 默认为 1, 单位米
     */
    extrudeHeight: number;

    /**
     * 是否显示拔起面块的边线, 拔起面块的边线不支持设置宽度, 永远为 1 像素宽度
     */
    showBorder: boolean;

    /**
     * 边线颜色, 支持 rgb(), rgba(), #RRGGBB 等形式,
     * showBorder 为 true 时有效
     */
    borderColor: string;
  }
}
