declare namespace TMap {
  /**
   * 用于创建信息窗覆盖物
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocInfo
   */
  class InfoWindow implements InfoWindowOptions {
    constructor(options: InfoWindowOptions);

    /**
     * 设置经纬度位置
     */
    setPosition(position: LatLng): this;

    /**
     * 设置信息窗显示内容
     */
    setContent(content: string): this;

    /**
     * 设置信息窗口所在的 map 对象, 传入 null 则代表将 infoWindow 从 Map 中移除
     */
    setMap(map: Map | null): this;

    /**
     * 获取信息窗口所在的 map 对象
     */
    getMap(): Map;

    /**
     * 打开信息窗口
     */
    open(): this;

    /**
     * 关闭信息窗口
     */
    close(): this;

    /**
     * 销毁信息窗
     */
    destroy(): this;

    /**
     * 添加 listener 到 eventName 事件的监听器数组中
     */
    on(eventName: 'closeclick', listener: () => void): this;

    /**
     * 从 eventName 事件的监听器数组中移除指定的 listener
     */
    off(eventName: 'closeclick', listener: () => void): this;
  }
}
