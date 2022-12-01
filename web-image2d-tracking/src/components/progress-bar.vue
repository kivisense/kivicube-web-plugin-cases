<template>
  <div class="circle">
    <div class="left">
      <div class="ring" :style="rotateLeft"></div>
    </div>
    <div class="right">
      <div class="ring" :style="rotateRight"></div>
    </div>
    <div class="circle sm"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      rotateRight: "",
      rotateLeft: "",
    };
  },
  watch: {
    progress: function () {
      const progress = parseInt(this.progress);

      this.rotateRight = `transform: rotate(${
        progress > 50 ? 180 : (progress / 50) * 180
      }deg)`;

      this.rotateLeft = `transform: rotate(${
        progress < 50 ? 0 : ((progress - 50) / 50) * 180
      }deg)`;
    },
  },
};
</script>

<style lang="scss" scoped>
.circle {
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  mix-blend-mode: lighten;
}

.sm {
  width: calc(100% - 5px);
  height: calc(100% - 5px);
}

.left,
.right {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: relative;
  float: left;
  background-color: #ffffff;
}
.left {
  border-radius: 10000px 0 0 10000px;
}
.right {
  border-radius: 0 10000px 10000px 0;
}
.ring {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000000;
}
.right .ring {
  transform-origin: left center;
}
.left .ring {
  transform-origin: right center;
}
</style>
