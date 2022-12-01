import Vue from "vue";
import "normalize.css";
import App from "./App.vue";

import { injectStatistics } from "@/utils/statistics";

new Vue({
  render: (h) => h(App),
}).$mount("#app");

// 初始化友盟
injectStatistics();
