<template>
  <div class="safety">
    <div class="top">
      <card>
        <h4 slot="header">在校情况</h4>
        <ul>
          <li><i class="fa fa-bell orange"></i>高一年级：<br/>
            总数<span class="green">354</span>人，到校<span class="green">300</span>人<br/>
            请假<span class="orange">12</span>人，不在校<span class="orange">12</span>人</li>
          <li><i class="fa fa-bell orange"></i>高一年级：<br/>
            总数<span class="green">354</span>人，到校<span class="green">300</span>人<br/>
            请假<span class="orange">12</span>人，不在校<span class="orange">12</span>人</li>
          <li><i class="fa fa-bell orange"></i>高一年级：<br/>
            总数<span class="green">354</span>人，到校<span class="green">300</span>人<br/>
            请假<span class="orange">12</span>人，不在校<span class="orange">12</span>人</li>
        </ul>

      </card>
      <card>
        <h4 slot="header">重点关注</h4>
        <ul>
          <li><span>李思涵<br/><i>高一（5）班</i></span>第三次请假</li>
          <li><span>李思涵<br/><i>高一（5）班</i></span>第三次请假</li>
          <li><span>李思涵<br/><i>高一（5）班</i></span>第三次请假</li>
          <li><span>李思涵<br/><i>高一（5）班</i></span>第三次请假</li>
        </ul>
      </card>
      <card>
        <h4 slot="header">视频监控</h4>
        <select>
          <option value="校园大门">校园大门</option>
          <option value="高二年级">高二年级</option>
          <option value="高三年级">高三年级</option>
        </select>
      </card>
    </div>
    <card class="bottom">
      <h4 slot="header">学生轨迹</h4>
      <div class="info">
        <input placeholder="请输入学生姓名或学号"/><button>查询</button>
        <div class="base">
          <img src="../assets/head.png"/>
          <p>学生姓名：张峰<br/>班级：高一（1）班<br/>班主任：李毅<br/>当前状态：在校</p>
        </div>
        <p>出生日期：2009年10月12日<br/>当前心率：110次/分<br/>当前位置：明德楼<br/>家长姓名：张曲<br/>家长联系方式：18987280823</p>
      </div>
    </card>
  </div>
</template>

<script>
import card from "@/components/Card.vue";
export default {
  name: "SafetyCenter",
  components:{
    card
  }
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
  .safety{
    width: 1140px;
    margin: 5px auto 0;
    .top{
      display: flex;
      align-items: flex-start;
      :first-child{
        ul{
          padding-top: 10px;
          li{
            position: relative;
            line-height: 24px;
            font-family: 'Roboto';
            font-size: 14px;
            color: #585858;
            padding: 0 70px 10px;
            i{
              position: absolute;
              left: 30px;
              font-size: 20px;
            }
            .orange{
              color: #FF9800;
            }
            .green{
              color: #419A26;
            }
          }
        }
      }
      :nth-child(2){
        margin: 0 8px 10px;
        ul{
          width: 300px;
          padding: 0 10px 10px;
          li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Roboto';
            font-size: 14px;
            color: #585858;
            padding: 10px 0 15px;
            border-bottom: 1px solid #ddd;
            span{
              line-height: 20px;
              i{
                font-size: 12px;
                font-style: normal;
                color: #bdbdbd;
              }
            }
          }
        }
      }
      :last-child{
        flex: 1;
        select{
          width: 200px;
          height: 30px;
          font-size: 14px;
          color: #101010;
          padding-left: 10px;
          border: 1px solid #bbb;
          border-radius: 5px;
          margin: 10px;
          option{
            color: #101010;
          }
        }
      }
    }
    .bottom{
      padding-bottom: 30px;
      .info{
        input{
          width: 235px;
          height: 34px;
          font-family: Roboto;
          font-size: 14px;
          color: #101010;
          padding: 0 10px;
          border: none;
          box-shadow: 0 0 2px 0 #aaa;
          margin: 20px;
        }
        input::-webkit-input-placeholder {
          color:#aaa;
        }
        button{
          background: rgba(111, 179, 224, 1);
          width: 75px;
          height: 30px;
          font-size: 12px;
          font-family: Roboto;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          border: 1px solid rgba(111, 179, 224, 1);
          border-radius: 2px;
        }
        .base{
          display: flex;
          align-items: center;
          padding-left: 30px;
          margin-bottom: 30px;
          img{
            height: 114px;
            width: 114px;
          }
        }
        p{
          line-height: 24px;
          font-size: 14px;
          font-family: Roboto;
          color: #101010;
          text-align: left;
          padding-left: 30px;
          margin: 0;
        }
      }
    }

  }
</style>
