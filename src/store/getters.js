const getters = {
    // 系统设置类数据
    isFullScreen: state => state.systemConfig.isFullScreen,
    themeActive: state => state.systemConfig.themeActive,
    currentApp: state => state.systemConfig.currentApp,
    asideCollapse: state => state.systemConfig.asideCollapse,
    visitedViews: state => state.tagsView.visitedViews,

    //表格自定义
    personColumns: state => state.tableSetting.personColumns,
}
export default getters
