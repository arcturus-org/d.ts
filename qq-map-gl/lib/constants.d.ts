declare namespace TMap {
  namespace constants {
    // 控件位置
    enum CONTROL_POSITION {
      /**
       * 左上
       */
      TOP_LEFT,

      /**
       * 顶部中间
       */
      TOP_CENTER,

      /**
       * 右上
       */
      TOP_RIGHT,

      /**
       * 左侧中间
       */
      CENTER_LEFT,

      /**
       * 图区中间
       */
      CENTER,

      /**
       * 右侧中间
       */
      CENTER_RIGHT,

      /**
       * 左下
       */
      BOTTOM_LEFT,

      /**
       * 底部中间
       */
      BOTTOM_CENTER,

      /**
       * 右下
       */
      BOTTOM_RIGHT,
    }

    enum IMAGE_DISPLAY {
      ORIGIN,
      SCALE,
      REPEAT,
    }

    /**
     * 默认控件
     */
    enum DEFAULT_CONTROL_ID {
      /**
       * 旋转控件
       */
      ROTATION = 'rotation',

      /**
       * 比例尺控件
       */
      SCALE = 'scale',

      /**
       * 缩放控件
       */
      ZOOM = 'zoom',
    }

    /**
     * 地图缩放焦点常量
     */
    enum MAP_ZOOM_TYPE {
      /**
       *  默认缩放, 双指中心位置(移动端), 鼠标的光标位置(PC端)
       */
      DEFAULT,

      /**
       * 根据地图中心点缩放(移动端和 PC 端)
       */
      CENTER,
    }

    enum GEOMETRY_TYPES {
      CIRCLE = 'CIRCLE',
      ELLIPSE = 'ELLIPSE',
      HIGHLIGHT = 'HIGHLIGHT',
      LABEL = 'LABEL',
      MASK = 'MASK',
      POINT = 'POINT',
      POLYGON = 'POLYGON',
      POLYLINE = 'POLYLINE',
      RECTANGLE = 'RECTANGLE',
    }

    /**
     * 图层渲染层级常量
     */
    enum LAYER_LEVEL {
      /**
       * 地下层, 底图下方
       */
      UNDERGROUND,

      /**
       * 基础底图层, 底图平面元素所在层级
       */
      BASE,

      /**
       * 贴地层, 用户创建的平面图层所在层级
       */
      GROUND,

      /**
       * 建筑层
       */
      BUILDING,

      /**
       * 需抗锯齿的覆盖物层
       */
      OVERLAY_AA,

      /**
       * 文字层
       */
      TEXT,

      /**
       * 不需抗锯齿的覆盖物层
       */
      OVERLAY_NAA,
    }

    enum LIGHT_TYPE {
      AMBIENT = 'ambient',
      DIRECTION = 'dir',
      POINT = 'point',
      SPOT = 'spot',
    }
  }
}
