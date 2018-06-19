import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AppMarket from "./views/AppMarket.vue";//应用市场
import DataPlat from "./views/DataPlat.vue";//数据平台
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/app",
      name: "app",
      component: AppMarket
    },
    {
      path: "/data",
      name: "data",
      component: DataPlat
    }
  ]
});
