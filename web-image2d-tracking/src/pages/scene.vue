<template>
  <div class="container">
    <div class="kivicube" v-if="showScene">
      <loading-com :loading="loading" :progress="progress" />
      <iframe
        id="kivicube-scene"
        ref="kivicubeScene"
        v-bind="props"
        @ready="ready"
        @downloadAssetProgress="downloadAssetProgress"
        @loadSceneEnd="loadSceneEnd"
        @sceneStart="sceneStart"
        @tracked="tracked"
        @lostTrack="lostTrack"
      />
      <scanning class="scan" v-if="scanning" />
      <button @click="goBackView" class="goBack" v-if="!loading">返回</button>
    </div>
    <home @onJumpScene="onJumpScene" v-else />
  </div>
</template>

<script>
import loading from "@/components/loading";
import scanning from "@/components/scanning.vue";
import { COMMON_STATISTICS } from "@/utils/statistics";
import home from "./home";

export default {
  components: {
    loadingCom: loading,
    scanning,
    home,
  },
  data() {
    return {
      scanning: false,
      loading: false,
      showScene: false,
      progress: 0,

      props: {},
    };
  },

  methods: {
    loadKivicubePlugin() {
      const domEl = this.$refs.kivicubeScene;

      this.props = window.kivicubeIframePlugin.openKivicubeScene(domEl, {
        sceneId: "tGCnNBETSiJykPlhFOtVGHpwliJbnsVr",
        hideTitle: true,
        hideScan: true,
        hideLoading: true,
        hideDownload: true,
        hideTakePhoto: true,
        hideBackground: true,
      });
    },
    ready() {
      this.loading = true;
    },
    downloadAssetProgress({ detail }) {
      this.progress = (detail * 97) | 0;
    },

    loadSceneEnd() {
      // 单独处理，让看起来更流畅
      this.progress = 100;
    },

    sceneStart() {
      setTimeout(() => {
        this.loading = false;
        this.scanning = true;
      }, 100);
    },

    tracked() {
      COMMON_STATISTICS("ar_success_identify");
      this.scanning = false;
    },
    lostTrack() {
      this.scanning = true;
    },

    onJumpScene() {
      this.loading = true;
      this.showScene = true;
      this.$nextTick(() => {
        this.loadKivicubePlugin();
      });
      // 进入识别页
      COMMON_STATISTICS("hoempage_arrive_ar");
    },

    goBackView() {
      COMMON_STATISTICS("ar_click_return");
      this.$emit("onJunpHome");
      this.destroyScene();
      // reset status
      this.showScene = false;
      this.$nextTick(() => {
        this.scanning = false;
        this.loading = false;
        this.progress = 0;
      });
    },
    destroyScene() {
      window.kivicubeIframePlugin.destroyKivicubeScene(
        this.$refs.kivicubeScene
      );
    },
  },
  beforeDestroy() {
    this.destroyScene();
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

iframe#kivicube-scene {
  width: 100vw;
  // height: calc(80vw * (4 / 3))
  height: 100vh;
  border: none;
  position: absolute;
  left: 0;
  top: 0;
}
.kivicube {
  position: absolute;
  height: 100%;
  width: 100%;
}

.scan {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.photo {
  position: absolute;
  bottom: 14.4vw;
  left: 50%;
  transform: translateX(-50%);
  width: 21.87vw;
  height: 21.87vw;
  z-index: 10;
}
.goBack {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 50;

  box-sizing: border-box;
  border: 0;
  border-radius: 16px;
  padding: 8px 16px;
  color: #fff;
  letter-spacing: 5px;
  text-align: center;
  background: linear-gradient(to right, #b36afe, #739dfd);
}
</style>
