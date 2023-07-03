import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://lairserver.cn/",

  author: {
    name: "Lair | 栖息地",
  },

  darkmode: "enable",

  iconAssets: "fontawesome-with-brands",

  logo: "/lair-256-transparent-whiteText.png",

  repo: "LairOfficial/Lair_Server_Website",

  docsDir: "src",

  navbar,

  sidebar,

  footer: "QQ群: 438684087",

  displayFooter: true,

  encrypt: {
    config: {
      "/community/starwar.html": ["lairlock"],
      "/law/starwar.html": ["lairlock"],
    },
  },

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
