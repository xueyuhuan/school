<template>
  <div id="app">
    <div style="min-width: 1440px">
      <nav>
        <div class="left">
          <i class="fa fa-institution"></i>中小学内门户
        </div>
        <div class="right">
          <ul>
            <li v-for="(item,index) in array" @click="toggle(index)" :class="{active:index===active}"><router-link :to="item.url">{{item.name}}</router-link></li>
          </ul>
          <span>名字<i class="fa fa-caret-down"></i></span>
        </div>
      </nav>
    </div>
    <router-view></router-view>
    <footer>© 2015-2017 Wuhan Sibe. All rights reserved.</footer>
  </div>
</template>
<script>
  export default {
    name:"App",
    data(){
      return{
        array:[
          {name:'首页',url:'/'},
          {name:'应用市场',url:'/app'},
          {name:'数据平台',url:'/data'},
          {name:'安全中心',url:'/safety'},
          {name:'物联中心',url:'/logistics'},
          {name:'创客中心',url:'/'},
        ],
        active:0
      }
    },
    methods:{
      toggle(i){
        this.active=i;
      }
    }
  }
</script>
<style lang="less">
  html{
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    margin: 0
  }
  ul,li{
    list-style: none;
    padding: 0;margin: 0;
  }
  a{
    text-decoration: none;
  }
  nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background: #4F8AD0;
    color: #fff;
    padding: 0 80px;
    .left{
      font-size: 18px;
      font-family: 'Microsoft Yahei';
      i{
        margin-right: 10px;
      }
    };
    .right{
      display: flex;
      align-items: center;
      height: 100%;
      font-family: 'Roboto';
      ul{
        display: flex;
        align-items: center;
        height: 100%;
        margin-right: 90px;
        li{
          display: flex;
          flex: none;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 84px;
          a{
            color: #fff;
          }
        }
      }
      span{
        font-size: 14px;
        i{
          margin-left: 10px;
        }
      }
    };
    .active{
      background: #006DA4;
    }
  }
  footer{
    background: #BFBDBF;
    width: 100%;
    height: 68px;
    line-height: 68px;
    font-size: 14px;
    color: #fff;
    text-align: center;
  }
</style>
