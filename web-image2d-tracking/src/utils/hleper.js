// 是否是 webpc
export function isPcPlatform() {
  const userAgentInfo = navigator.userAgent; // 包含有关浏览器的信息
  // 非手机端
  const Agents = ["android", "iphone", "ipad", "ipod"];
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.toLocaleLowerCase().indexOf(Agents[v]) !== -1) {
      return false;
    }
  }
  return true;
}
