/*
 * @Description: 这是基于友盟插件简单封装，用于统计、分析用户行为
 */

/**
 *
 * @param {String} eventCode 事件ID
 * @param {Object} params 事件参数对象
 * 友盟统计
 */
export function UMENG_STATISTICS(eventCode, params = {}) {
  try {
    window.aplus_queue.push({
      action: "aplus.record",
      arguments: [eventCode, "CLK", Object.assign({}, params)],
    });
    console.log(`Counter:====> | ${eventCode} | params -->`, params);
  } catch (e) {
    console.log(e);
  }
}

/**
 *
 * @param {string} id  友盟统计ID
 * 向页面注入友盟统计
 */
export function injectUmengStatistics(id) {
  try {
    (function (w, d, s, q, i) {
      w[q] = w[q] || [];
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s);
      j.async = true;
      j.id = "beacon-aplus";
      j.src = "https://d.alicdn.com/alilog/mlog/aplus/" + i + ".js";
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "aplus_queue", "203467608");

    //集成应用的appKey
    window.aplus_queue.push({
      action: "aplus.setMetaInfo",
      arguments: ["appKey", id],
    });
  } catch (e) {
    console.error(e);
  }
}

/**
 *
 * @param {String} eventCode 事件ID
 * @param {Object} params 事件参数对象
 * 友盟统计
 */
export function COMMON_STATISTICS(eventCode, params = {}) {
  UMENG_STATISTICS(eventCode, params);
}

const statsCode = {
  um: "637dcc8805844627b588514c",
};

/**
 *
 * 注入统计
 */
export function injectStatistics() {
  injectUmengStatistics(statsCode.um);
}
