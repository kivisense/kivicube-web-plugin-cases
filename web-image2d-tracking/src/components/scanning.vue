<template>
  <div class="scanning">
    <div class="focus-frame">
      <div class="text">
        请对准海报识别
      </div>
      <img class="focus-frame-image1" src="@/assets/scan/focus-frame.png" />
      <img class="focus-frame-image2" src="@/assets/scan/id-picture.png" />
    </div>
    <image class="shadow" mode="widthFix" src="@/assets/scan/bg.png"></image>
  </div>
</template>

<style lang="scss" scoped>
.scanning {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 10;
}
.focus-frame {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.73vw;
  color: #ffffff;
  width: 75.47vw;
  height: 109.6vw;
}

.text {
  position: absolute;
  top: 0;
}

.focus-frame-image1 {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.focus-frame-image2 {
  position: absolute;
  z-index: -1;
  width: 44vw;
  height: 78.13vw;
}

.shadow {
  position: absolute;
  width: 100%;
  z-index: -2;
}
</style>
