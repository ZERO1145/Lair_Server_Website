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
  ],
});
