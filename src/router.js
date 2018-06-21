import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AppMarket from "./views/AppMarket.vue";//应用市场
import DataPlat from "./views/DataPlat.vue";//数据平台
import BasicData from "./components/BasicData.vue";//数据平台-基础数据
import FilesData from "./components/FilesData.vue";//数据平台-档案数据
import AssetsData from "./components/AssetsData.vue";//数据平台-资产数据
import MatesData from "./components/MatesData.vue";//数据平台-校友数据
import SafetyCenter from "./views/SafetyCenter"//安全中心
import LogisticalCenter from "./views/LogisticalCenter"//物流中心
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
      component: DataPlat,
      children:[
        {path:"/data/basicData", component:BasicData},
        {path:"/data/filesData", component:FilesData},
        {path:"/data/assetsData", component:AssetsData},
        {path:"/data/matesData", component:MatesData}
      ]
    },
    {
      path: "/safety",
      name: "safety",
      component: SafetyCenter
    },
    {
      path: "/logistics",
      name: "logistics",
      component: LogisticalCenter
    }
  ]
});
