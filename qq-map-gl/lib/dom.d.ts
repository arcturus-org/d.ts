declare namespace TMap {
  /**
   * DOM 覆盖物抽象类, 用户可以此作为基类实现自定义的DOM覆盖物类
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocDomOverlay
   */
  class DOMOverlay implements DOMOverlayOptions {
    constructor(options: DOMOverlayOptions);

    /**
     * 设置覆盖物所在的 map 对象, 传入 null 则代表将其从 Map 中移除
     */
    setMap(map: Map | null): this;

    /**
     * 获取覆盖物所在的 Map 对象
     */
    getMap(): Map;

    /**
     * 销毁覆盖物对象
     */
    destroy(): this;

    /**
     * 添加 listener 到 eventName 事件的监听器数组中
     */
    on(eventName: string, listener: () => void): DOMOverlay;

    /**
     * 从 eventName 事件的监听器数组中移除指定的 listener
     */
    off(eventName: string, listener: () => void): DOMOverlay;

    /**
     * 实现这个接口来定义构造阶段的初始化过程,
     * 此方法在构造函数中被调用,
     * 接收构造函数的 options 参数作为输入
     */
    static onInit(options): void;

    /**
     * 实现这个接口来定义销毁阶段的资源释放过程, 此方法在 destroy 函数中被调用
     */
    static onDestroy(): void;

    /**
     * 实现这个接口来创建自定义的 DOM 元素, 此方法在构造函数中被调用(在初始化过程之后)
     */
    static createDOM(): HTMLElement;

    /**
     * 实现这个接口来更新 DOM 元素的内容及样式, 此方法在地图发生平移、缩放等变化时被调用
     */
    static updateDOM(): void;
  }
}
