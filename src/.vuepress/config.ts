import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "CoolBox",
      description: "A browser extension to make Schoolboox look good again.",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
