<template>
  <div id="app" ref="app">
    <incompatible-guide>
      <scene />
    </incompatible-guide>
  </div>
</template>

<script>
import scene from "./pages/scene";

import incompatibleGuide from "./components/incompatible-guide.vue";

export default {
  components: { incompatibleGuide, scene },
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* 全局样式。如果项目复杂，可单独提取全局样式文件。 */
.layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

/* 上下左右绝对居中，可任意设置区域大小。 */
.center {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>
