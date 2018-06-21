<template>
  <div class="maker">
    <card>
      <h4 slot="header">创客课程</h4>
      <ul class="course">
        <li>
          <div class="title"><i class="fa fa-institution"></i><h5>创客入门<br/><span>快来成为3D创意设计师吧！</span></h5></div>
          <h6>入门视频</h6>
          <span class="video"><i></i>《3D One入门视频》</span>
          <span class="video"><i></i>《3D One入门视频》</span>
          <span class="video"><i></i>《3D One入门视频》</span>
          <h6>教材书籍</h6>
          <span class="book"><img src="../assets/head.png"/><span class="text">《3D One三维实体设计》<br/><span class="btn">兑换&nbsp;购买&nbsp;阅读</span></span></span>
          <span class="book"><img src="../assets/head.png"/><span class="text">《3D One三维实体设计》<br/><span class="btn">兑换&nbsp;购买&nbsp;阅读</span></span></span>
          <span class="book"><img src="../assets/head.png"/><span class="text">《3D One三维实体设计》<br/><span class="btn">兑换&nbsp;购买&nbsp;阅读</span></span></span>
          <h6>软件下载</h6>
          <span class="software"><i style="background: dodgerblue">3DOne</i><i style="background: dodgerblue">3DOne</i><i style="background: dodgerblue">3DOne</i></span>
        </li>
        <li class="other">
          <span class="item"><i>课件</i><img src="../assets/demo.jpg"/></span>
          <span class="item"><i>课件</i><img src="../assets/demo.jpg"/></span>
          <span class="item"><i>课件</i><img src="../assets/demo.jpg"/></span>
        </li>
        <li class="other">
          <span class="item"><i>课件</i><img src="../assets/demo.jpg"/></span>
          <span class="item"><i>课件</i><img src="../assets/demo.jpg"/></span>
          <span class="item"><i>课件</i><img src="../assets/demo.jpg"/></span>
        </li>
        <li class="other">
          <span class="item"><i>课件</i><img src="../assets/demo.jpg"/></span>
          <span class="item"><i>课件</i><img src="../assets/demo.jpg"/></span>
          <span class="item"><i>课件</i><img src="../assets/demo.jpg"/></span>
        </li>
      </ul>
      <div class="hr">
        <h4>大赛活动</h4>
      </div>
      <ul class="activity">
        <li><img style="width: 100%;height: 100%;" src="../assets/activity.jpg"/></li>
        <li><img style="width: 100%;height: 100%;" src="../assets/activity.jpg"/></li>
      </ul>
      <div class="hr">
        <h4>创客导师</h4>
      </div>
      <ul class="tutor">
        <li><a><img src="../assets/head.png"/><p>刘知远老师<br/><span>刘志远老师酷爱零件创作，善于观察的他，完成了很多惟妙惟肖的作品。</span></p></a></li>
        <li><a><img src="../assets/head.png"/><p>刘知远老师<br/><span>刘志远老师酷爱零件创作，善于观察的他，完成了很多惟妙惟肖的作品。</span></p></a></li>
        <li><a><img src="../assets/head.png"/><p>刘知远老师<br/><span>刘志远老师酷爱零件创作，善于观察的他，完成了很多惟妙惟肖的作品。</span></p></a></li>
        <li><a><img src="../assets/head.png"/><p>刘知远老师<br/><span>刘志远老师酷爱零件创作，善于观察的他，完成了很多惟妙惟肖的作品。</span></p></a></li>
      </ul>
    </card>
  </div>
</template>

<script>
import card from "@/components/Card.vue";
export default {
  name: "MakerCenter",
  components:{
    card
  },
};
</script>
<style scoped lang="less">
  h4{
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: normal;
    color: #4A96ED;
    margin: 0
  }
  .maker{
    width: 1140px;
    margin: 5px auto 0;
    ul.course{
      display: flex;
      width: 1040px;
      height: 496px;
      border-top: 8px solid #f3f5f7;
      border-bottom: 8px solid #f3f5f7;
      margin: 10px auto;
      li{
        flex: 1;
      }
      li.other{
        display: flex;
        flex-flow: column;
        .item{
          position: relative;
          flex: 1;
          i{
            display: inline-block;
            top: 8px;
            left: 8px;
            position: absolute;
            background: #b2b2b2;
            height: 20px;
            line-height: 20px;
            font-style: normal;
            color: #fff;
            border-radius: 5px;
            padding: 0 5px;
          }
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      li:first-child{
        background: -webkit-linear-gradient(#e4f3f2, #f5e4f7); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#e4f3f2, #f5e4f7); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#e4f3f2, #f5e4f7); /* Firefox 3.6 - 15 */
        background: linear-gradient(#e4f3f2, #f5e4f7); /* 标准的语法 */
        padding: 10px 20px;
        .title{
          display: flex;
          align-items: center;
          i{
            color: #fff;
            font-size: 38px;
            margin-right: 10px;
          }
          h5{
            line-height: 20px;
            font-size: 20px;
            font-weight: bold;
            margin: 0;
            span{
              font-size: 12px;
              color: #666;
            }
          }
        }
        h6{
          font-size: 12px;
          color: #8f7efb;
          margin: 10px 0;
        }
        span.video{
          display: block;
          font-size: 14px;
          margin: 10px 0;
          i{
            display: inline-block;
            width: 10px;
            height: 10px;
            background: #8f7efb;
          }
        }
        span.book{
          display: flex;
          align-items: center;
          font-size: 14px;
          margin: 5px 0;
          img{
            width: 42px;
            height: 55px;
            margin-right: 12px;
          }
          .text{
            line-height: 20px;
            .btn{
              color: #999;
              margin-left: 10px;
            }
          }
        }
        span.software{
          display: flex;
          align-items: center;
          /*justify-content: space-around;*/
          i{
            display: inline-block;
            width: 45px;
            height: 45px;
            line-height: 45px;
            font-size: 12px;
            font-weight: bold;
            font-style: normal;
            color: #fff;
            border-radius: 5px;
            margin-right: 10px;
          }
        }
      }
    }
    .hr{
      height: 45px;
      line-height: 45px;
      border-top: 1px dashed #aaaaaa;
      border-bottom: 1px dashed #aaaaaa;
    }
    ul.activity{
      display: flex;
      justify-content: space-between;
      background: #f3f5f7;
      width: 1040px;
      height: 178px;
      border-top: 8px solid #f3f5f7;
      border-bottom: 8px solid #f3f5f7;
      margin: 10px auto;
      li{
        width: 500px;
      }
    }
    ul.tutor{
      display: flex;
      justify-content: space-around;
      padding: 20px 0;
      li{
        width: 226px;
        height: 100px;
        box-shadow: 0 0 2px 0 #aaa;
        a{
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 10px;
          img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 18px;
          }
          p{
            font-family: 'Roboto';
            font-size: 14px;
            color: #000;
            margin: 0;
            span{
              font-size: 12px;
              color: #a6a6a6;
            }
          }
        }
      }
    }
  }
</style>
