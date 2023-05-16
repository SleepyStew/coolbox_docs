import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "download",
      text: "Installation",
      prefix: "install",
      link: "install",
      children: "structure",
    },
    {
      icon: "book",
      text: "Docs",
      prefix: "docs",
      link: "docs",
      children: "structure",
    },
  ],
});
