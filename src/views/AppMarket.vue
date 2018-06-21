<template>
  <div class="app">
      <div class="left">
        <card>
          <h4 slot="header">协同办公</h4>
          <ul>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
          </ul>
        </card>
        <card>
          <h4 slot="header">资产管理</h4>
          <ul>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
          </ul>
        </card>
        <card>
          <h4 slot="header">教师发展</h4>
          <ul>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
          </ul>
        </card>
        <card>
          <h4 slot="header">学生成长</h4>
          <ul>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
          </ul>
        </card>
      </div>
      <div class="right">
        <card>
          <h4 slot="header">应用分类</h4>
          <ul class="classify">
            <li><a><i class="fa fa-phone" style="color:#FF9800;"></i>协同办公（9）</a></li>
            <li><a><i class="fa fa-wrench" style="color:#4F8AD0;"></i>资产管理（2）</a></li>
            <li><a><i class="fa fa-pencil" style="color:#009688;"></i>教师发展（5）</a></li>
            <li><a><i class="fa fa-users" style="color:#E35F14;"></i>学生成长（9）</a></li>
          </ul>
        </card>
        <card>
          <h4 slot="header">最新应用</h4>
          <ul class="newest">
            <li><a><i class="fa fa-lemon-o" style="color:#FF9800;"></i>通知公告</a></li>
            <li><a><i class="fa fa-bookmark-o" style="color:#009688;"></i>故障报修</a></li>
          </ul>
        </card>
      </div>
  </div>
</template>

<script>
import card from "@/components/Card.vue";
export default {
  name: "AppMarket",
  components:{
    card
  }
};
</script>

<style scoped lang="less">
  .app{
    display: flex;
    justify-content: space-between;
    width: 1140px;
    margin: 5px auto 0;
    h4{
      font-family: 'Roboto';
      font-size: 14px;
      font-weight: normal;
      margin: 0;
    }
    .left{
      width: 800px;
      h4{
        color: #717272;
      }
      ul{
        display: flex;
        flex-flow: wrap;
        padding-top: 20px;
        li{
          width: 25%;
          margin-bottom: 20px;
          a{
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              width: 60px;
              margin-right: 5px;
            }
            .text{
              font-size: 14px;
              color: #101010;
              span{
                font-size: 11px;
                color: #B8B6B8;
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
    .right{
      width: 327px;
      h4{
        color: #4A96ED;
      }
      .classify{
        display: flex;
        flex-flow: wrap;
        padding-top: 20px;
        li{
          width: 50%;
          text-align: center;
          margin-bottom: 20px;
          a{
            font-size: 14px;
            font-family: 'Roboto';
            color: #585858;
            i{
              margin-right: 5px;
            }
          }
        }
      }
      .newest{
        padding: 20px 30px 0;
        overflow: hidden;
        li{
          margin-bottom: 20px;
          a{
            font-size: 14px;
            font-family: 'Roboto';
            color: #585858;
            i{
              margin-right: 20px;
            }
          }
        }
      }
    }
  }




</style>
