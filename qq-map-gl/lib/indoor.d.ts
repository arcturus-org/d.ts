// 室内地图
declare namespace TMap {
  /**
   * IndoorManager 用于控制室内地图的加载显示, 不可实例化
   * docs: https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocIndoor
   */
  class IndoorManager {
    /**
     * 初始化室内图管理器
     */
    initialize: Promise<null>;

    /**
     * 设置室内建筑是否可以被自动激活
     */
    setAutoActive(autoActive: boolean): this;

    /**
     * 将 buildingId 对应的室内建筑设置为激活状态
     */
    setActiveIndoorBuilding(buildingId: string): this;

    /**
     * 设置室内建筑是否显示
     */
    setVisible(isVisible: boolean): this;

    /**
     * 显示处于激活状态的室内建筑的楼层控件, 若没有激活状态的室内建筑, 该方法无效
     */
    showFloorControl(): this;

    /**
     * 隐藏处于激活状态的室内建筑的楼层控件
     */
    hideFloorControl(): this;

    /**
     * 获取地图对象, 若为空返回 null
     */
    getMap(): Map | null;

    /**
     * 获取室内建筑是否可以被自动激活
     */
    getAutoActive(): boolean;

    /**
     * 获取处于激活状态下的室内建筑, 若都为非激活状态, 则返回 null
     */
    getActiveIndoorBuilding(): IndoorBuilding | null;

    /**
     * 获取室内图是否显示
     */
    getVisible(): boolean;

    /**
     * 获取室内建筑, 若 id 不存在返回 null
     */
    getIndoorBuilding(buildingId: string): IndoorBuilding | null;

    /**
     * 获取所有的室内建筑
     */
    getIndoorBuildingList(): IndoorBuilding;

    /**
     * 添加 listener 到 eventName 事件的监听
     */
    on(
      eventName: 'active_changed',
      listener: (evt: IndoorBuilding) => void
    ): this;

    /**
     * 从 eventName 事件的监听器数组中移除指定的 listener
     */
    off(eventName: 'active_changed', listener: () => void): this;
  }

  /**
   * 室内建筑实例
   */
  interface IndoorBuilding {
    /**
     * 设置当前选中楼层
     */
    setSelectedFloor(floor: string): this;

    /**
     * 获取地图对象, 若为空返回 null
     */
    getMap(): Map | null;

    /**
     * 获取室内建筑物的管理器
     */
    getManager(): IndoorManager;

    /**
     * 获取室内建筑物的当前展示的楼层
     */
    getSelectedFloor(): string;

    /**
     * 获取室内建筑物信息
     */
    getBuildingInfo(): IndoorBuildingInfo;

    /**
     * 异步获取室内建筑物信息
     */
    getBuildingInfoAsync(): Promise<IndoorBuildingInfo>;

    /**
     * 室内建筑物是否处于激活状态
     */
    isActive(): boolean;

    /**
     * 添加 listener 到 eventName 事件的监听器数组中
     */
    on(eventName: 'floor_changed', listener: () => void): this;

    /**
     * 从 eventName 事件的监听器数组中移除指定的 listener
     */
    off(eventName: 'floor_changed', listener: () => void): this;
  }

  /**
   * 室内建筑相关信息
   */
  interface IndoorBuildingInfo {
    /**
     * 室内建筑物所在的城市 id
     */
    cityId: string;

    /**
     * 室内建筑物 id
     */
    buldingId: string;

    /**
     * 室内建筑名称
     */
    buildingName: string;

    /**
     * 室内建筑物的楼层信息列表
     */
    floorList: FloorInfo[];

    /**
     * 室内建筑物默认显示的楼层
     */
    defaultFloor: string;

    /**
     * 室内建筑物的中心点, 通常是建筑物的默认显示楼层的中心点
     */
    center: LatLng;
  }

  /**
   * 室内建筑楼层信息
   */
  interface FloorInfo {
    /**
     * 楼层名称
     */
    name: string;

    /**
     * 室内建筑物的楼层范围
     */
    bounds: LatLngBounds;
  }
}
