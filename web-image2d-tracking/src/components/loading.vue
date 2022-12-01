<template>
  <div class="loading" v-show="loading">
    <div class="box">
      <progress-bar class="progress-bar" :progress="percent" />
      <div class="progress-bar">
        <div class="progress-box" :style="boxStyle">
          <div class="progress">
            <img class="box-image" src="@/assets/loading/progress.png" />
            <span class="progress-text">{{percent}}%</span>
          </div>
        </div>

        <img class="loading-image" src="@/assets/loading/loading.png" />
      </div>
      <img class="box-image" src="@/assets/loading/loading-bg.png" />
      <div class="text">Loading...</div>
    </div>
  </div>
</template>


<script>
import progressBar from "./progress-bar.vue";

export default {
  components: {
    progressBar,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    percent() {
      return this.progress || 0;
    },
    boxStyle() {
      const deg = ((360 * this.progress) / 100) | 0;
      return {
        transform: `rotateZ(${deg}deg)`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(239, 237, 255, 1);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;

  .slot-box {
    width: 100%;
    height: 100%;
  }
}

.box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92.27vw;
  width: 92.27vw;
}

.box-image {
  position: absolute;
  height: 100%;
  width: 100%;
}

.loading-image {
  position: absolute;
  width: 58.67vw;
  height: 58.67vw;
  z-index: 10;
}

.text {
  position: absolute;
  bottom: 2.93vw;
  font-size: 3.73vw;
  color: rgba(179, 145, 253, 1);
}

.progress-bar {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(58.67vw + 5px);
  height: calc(58.67vw + 5px);
  z-index: 9;
}
.progress-box {
  width: 14.93vw;
  height: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  // transform: translateX(-50%);
  // transform: "translateX(-50%)";
  z-index: 20;
  transform-origin: 0% 100%;
  .progress {
    transform: translate(-50%, -50%);
    transform-origin: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.93vw;
    height: 14.93vw;
  }
}

.progress-text {
  position: absolute;
  font-size: 3.2vw;
  color: #ffffff;
}
</style>
