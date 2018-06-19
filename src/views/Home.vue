<template>
  <div class="home">
    <img src="../assets/banner.png">
    <main>
      <div class="left">
        <card>
        <h4 slot="header">会议通知<i class="fa fa-angle-double-right"></i></h4>
        <ul class="meeting">
          <li><a><i class="fa fa-circle"></i><span class="color1">办公会议</span>第十六周行政会议通知<time>6分钟前</time></a></li>
          <li><a><i class="fa fa-circle"></i><span class="color2">办公会议</span>第十六周行政会议通知<time>6分钟前</time></a></li>
          <li><a><i class="fa fa-circle"></i><span class="color3">办公会议</span>第十六周行政会议通知<time>6分钟前</time></a></li>
          <li><a><i class="fa fa-circle"></i><span class="color3">办公会议</span>第十六周行政会议通知<time>6分钟前</time></a></li>
        </ul>
      </card>
        <card>
          <h4 slot="header">我的应用<i class="fa fa-angle-double-right"></i></h4>
          <ul class="app">
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
            <li><a><img src="../assets/app.png"/><div class="text">人事管理<br/><span>基础数据</span></div></a></li>
          </ul>
        </card>
        <card>
          <h4 slot="header">我的成就<i class="fa fa-angle-double-right"></i></h4>
          <div class="count">总积分：<em>25分</em>总档案数：<em>12份</em></div>
          <ul class="achievement">
            <li><a><i class="fa fa-trophy"></i>武汉市十大优秀教师荣誉<time>2017年10月30日</time></a></li>
            <li><a><i class="fa fa-trophy"></i>武汉市十大优秀教师荣誉<time>2017年10月30日</time></a></li>
            <li><a><i class="fa fa-trophy"></i>武汉市十大优秀教师荣誉<time>2017年10月30日</time></a></li>
          </ul>
        </card>
      </div>
      <div class="right">
        <card>
          <h4 slot="header">待办事宜<i class="fa fa-angle-double-right"></i></h4>
          <ul class="todo">
            <li><a>
              <h5><i class="fa fa-bookmark-o"></i>刘莉发起了一个请假申请</h5>
              <p><time>25/06 15:11</time>去处理</p>
            </a></li>
            <li><a>
              <h5><i class="fa fa-bookmark-o"></i>刘莉发起了一个请假申请</h5>
              <p><time>25/06 15:11</time>去处理</p>
            </a></li>
            <li><a>
              <h5><i class="fa fa-bookmark-o"></i>刘莉发起了一个请假申请</h5>
              <p><time>25/06 15:11</time>去处理</p>
            </a></li>
          </ul>
        </card>
        <card>
          <h4 slot="header">流程追踪<i class="fa fa-angle-double-right"></i></h4>
          <ul class="process">
            <li><a><i class="fa fa-sitemap"></i>武汉市十大优秀教师荣誉<span>待审核</span></a></li>
            <li><a><i class="fa fa-sitemap"></i>第一会议室申请<span>待审核</span></a></li>
            <li><a><i class="fa fa-sitemap"></i>请假申请<span>副校长审核</span></a></li>
          </ul>
        </card>
        <card>
          <h4 slot="header">在线作业<i class="fa fa-angle-double-right"></i></h4>
          <ul class="homework">
            <li><a><i class="fa fa-wordpress"></i>第一单元家庭作业<time>2017年9月30日</time></a></li>
            <li><a><i class="fa fa-wordpress"></i>第一单元家庭作业<time>2017年9月30日</time></a></li>
            <li><a><i class="fa fa-wordpress"></i>第一单元家庭作业<time>2017年9月30日</time></a></li>
          </ul>
        </card>
      </div>
    </main>
  </div>
</template>

<script>
import card from "@/components/Card.vue";
export default {
  name: "home",
  components:{
    card
  }
};
</script>

<style scoped lang="less">
  .home{
    max-width: 1140px;
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
  main{
    display: flex;
    justify-content: space-between;
    .left{

    }
    .right{

    }
  }
  h4{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: normal;
    color: #4A96ED;
    margin: 0;
  }
  /*会议通知*/
  .meeting{
    width: 690px;
    overflow: hidden;
    li:first-child a{
      color: #101010;
      font-weight: bold;
    }
    a{
      display: block;
      font-size: 14px;
      color: #919191;
      padding: 0 70px 0 20px;
      margin: 15px 0;
      i{
        font-size: 12px;
        color: #FF5722;
      }
      span{
        margin: 0 10px;
      }
      .color1{
        color: #03A9F4;
      }
      .color2{
        color: #259B24;
      }
      .color3{
        color: #FF9800;
      }
      time{
        float: right;
      }
    }
  }
  /*我的应用*/
  .app{
    display: flex;
    flex-flow: wrap;
    padding-top: 20px;
    li{
      width: 25%;
      margin-bottom: 20px;
      a{
        display: flex;
        align-items: center;
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
  /*我的成就*/
  .count{
    font-size: 14px;
    font-family: 'Roboto';
    color: #C4C2C4;
    padding: 10px 0 20px 20px;
    em{
      font-style: normal;
      color: #FF9800;
      margin-right: 10px;
    }
  }
  .achievement{
    a{
      display: block;
      overflow: hidden;
      font-size: 14px;
      padding: 0 0 30px 28px;
      i{
        color: #FF5722;
        margin-right: 10px;
      }
      time{
        float: right;
        font-family: 'Roboto';
        color: #B1B2B3;
        margin-right: 30px;
      }
    }
  }
  /*待办事宜*/
  .todo{
    width: 400px;
    li{
      padding: 0 20px;
      a{
        display: block;
        font-size: 14px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
        h5{
          font-size: 14px;
          font-weight: normal;
          color: #101010;
          margin: 20px 0 5px 0;
          i{
            color: #9C27B0;
            margin: 0 10px;
          }
        }
        p{
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #8BC34A;
          padding-left: 30px;
          margin: 0;
          time{
            font-family: 'Roboto';
            color: #C4C2C4;
          }
        }
      }
    }
    li:last-child a{
      border: none
    }
  }
  /*流程追踪*/
  .process{
    padding: 10px 0;
    li{
      padding: 0 20px;
      a{
        display: block;
        height: 48px;
        line-height: 48px;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
        i{
          color: #FF9800;
          margin-right: 10px;
        }
        span{
          float: right;
          color: #5677FC;
          font-family: 'Roboto';
        }
      }
    }
    li:last-child a{
      border: none
    }
  }
  /*在线作业*/
  .homework{
    /*padding: 10px 0;*/
    li{
      padding: 0 20px;
      a{
        display: block;
        height: 48px;
        line-height: 48px;
        font-size: 14px;
        i{
          color: #5677FC;
          margin: 0 20px 0 10px;
        }
        time{
          float: right;
          font-family: 'Roboto';
          color: #B1B2B3;
        }
      }
    }
  }
</style>
