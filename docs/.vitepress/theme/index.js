import DefaultTheme from "vitepress/theme";
import Formula from "./components/Formula.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Formula", Formula);
  },
};
