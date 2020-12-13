# store

本目录包含所有vuex状态管理声明文件。

建议index.ts中只操作基础的状态内容，大部分内容应该放入modules。

如：
```
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    user,
    tagsView,
    permission,
    settings
  },
  getters
});

export default store;
```
