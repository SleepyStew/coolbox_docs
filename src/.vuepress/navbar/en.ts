import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Install",
    icon: "download",
    prefix: "/install",
    children: [
        {
            text: "Chrome",
            link: "https://chrome.google.com/webstore/detail/coolbox/kjaoemamgcopdbdpenkanjinaodmihpo",
        },
        {
            text: "Firefox",
            link: "https://addons.mozilla.org/en-US/firefox/addon/coolbox/",
        }
    ],
  },
    {
        text: "Docs",
        icon: "book",
        link: "/docs",
    },
    {
        text: "Stats",
        icon: "chart-simple",
        link: "/stats",
    }
]);
