<template>
  <div class="container">
    <div class="content">
      <img class="button" src="~@/assets/home/button.png" @click="onJumpScene" alt="">
    </div>
  </div>
</template>

<script>
import { COMMON_STATISTICS } from "@/utils/statistics";

export default {
  methods: {
    onJumpScene() {
      COMMON_STATISTICS("homepage_click_start");
      this.$emit("onJumpScene");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url("~@/assets/home/bg.jpg?inline") no-repeat center;
  background-size: cover;
  position: relative;
  .shadow {
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
    bottom: 0;
  }
  .content {
    position: absolute;
    left: 50%;
    bottom: 8vh;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    z-index: 10;

    .text-box {
      display: inline-flex;
      flex-direction: column;
      width: 66.4vw;
      margin-bottom: 8.53vw;
      .image {
        width: 13vw;
        height: 3.2vw;
        margin-bottom: 4.8vw;
      }

      .text {
        width: 48vw;
        height: 20vw;
      }
    }
    .button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 50vw;
      height: auto;
    }
  }
}
</style>
