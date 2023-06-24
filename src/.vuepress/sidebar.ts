import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "社区",
      icon: "people-group",
      prefix: "community/",
      children: "structure",
    },
    {
      text: "状态",
      icon: "signal",
      prefix: "status/",
      children: [{
        text: "节点状态",
        icon: "network-wired",
        link: "https://status.lairserver.cn/",
      }, "planning"],
    },
  ],
});
