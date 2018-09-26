import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/main.scss";
import ElementUI from "element-ui";
import VueFullPage from "vue-fullpage.js";
import VueScrollReveal from "vue-scroll-reveal";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueFullPage);
Vue.use(VueScrollReveal);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
