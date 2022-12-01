<template>
  <div class="layer">
    <div v-if="isWebEnv" class="layer guide">
      <div class="need-mobile">
        <img :src="qrcodeUrl" />
        <p>请使用手机扫描二维码体验</p>
      </div>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
import { isPcPlatform } from "@/utils/hleper";

export default {
  data() {
    return {
      qrcodeUrl: "",
      isWebEnv: false,
    };
  },

  created() {
    this.isWebEnv = isPcPlatform();
    if (this.isWebEnv) {
      this.qrcodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
        location.href
      )}`;
    }
  },
};
</script>

<style lang="scss" scoped>
.guide {
  background-color: gainsboro;
  font-size: 14px;
  width: 100%;
  height: 100%;
}

.need-mobile {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
