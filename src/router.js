import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AppMarket from "./views/AppMarket.vue";//应用市场
import DataPlat from "./views/DataPlat.vue";//数据平台
import BasicData from "./components/BasicData.vue";//数据平台-基础数据
import FilesData from "./components/FilesData.vue";//数据平台-档案数据
import AssetsData from "./components/AssetsData.vue";//数据平台-资产数据
import MatesData from "./components/MatesData.vue";//数据平台-校友数据
import SafetyCenter from "./views/SafetyCenter";//安全中心
import LogisticalCenter from "./views/LogisticalCenter";//物流中心
import MakerCenter from "./views/MakerCenter";//创客中心
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "首页",
      component: Home
    },
    {
      path: "/app",
      name: "应用市场",
      component: AppMarket
    },
    {
      path: "/data",
      component: DataPlat,
      children:[
        {path:"/data/basicData",name:"基础数据", component:BasicData},
        {path:"/data/filesData",name:"档案数据", component:FilesData},
        {path:"/data/assetsData",name:"资产数据", component:AssetsData},
        {path:"/data/matesData",name:"校友数据", component:MatesData}
      ]
    },
    {
      path: "/safety",
      name: "安全中心",
      component: SafetyCenter
    },
    {
      path: "/logistics",
      name: "物联中心",
      component: LogisticalCenter
    },
    {
      path:"/maker",
      name:"创客中心",
      component:MakerCenter
    }
  ]
});
