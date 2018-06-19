<template>
  <div class="data">
    <card>
      <h4 slot="header">总体概述</h4>
      <ul class="summary">
        <li style="background:#FF7567;"><i class="fa fa-windows"></i><span>建设模块：<br/>17个</span></li>
        <li style="background:#F6B63C;"><i class="fa fa-windows"></i><span>总记录数：<br/>1743</span></li>
        <li style="background:#35BBF6;"><i class="fa fa-windows"></i><span>总表数：<br/>14756</span></li>
        <li style="background:#3CB8A0;"><i class="fa fa-windows"></i><span>已用空间：<br/>23M<br/>分配空间：<br/>14752M</span></li>
      </ul>
    </card>
    <div class="table">
      <ul class="nav">
        <li><a><i class="fa fa-windows"></i>基础数据</a></li>
        <li><a><i class="fa fa-windows"></i>教学数据</a></li>
        <li><a><i class="fa fa-windows"></i>资产数据</a></li>
        <li><a><i class="fa fa-windows"></i>校友数据</a></li>
      </ul>
      <card>
        <h4 slot="header">学生数据</h4>
        <select>
          <option value="高一年级">高一年级</option>
          <option value="高二年级">高二年级</option>
          <option value="高三年级">高三年级</option>
        </select>
      </card>
    </div>
  </div>
</template>

<script>
import card from "@/components/Card.vue";
export default {
  name: "DataPlat",
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
  .data{
    width: 1140px;
    margin: 5px auto 0;
    ul.summary{
      display: flex;
      justify-content: space-around;
      padding: 20px 0;
      li{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 240px;
        height: 100px;
        font-family: 'Roboto';
        font-size: 14px;
        color: #fff;
        i{
          font-size: 40px;
          margin-right: 20px;
        }
      }
    }
    .table{
      display: flex;
      align-items: flex-start;
      ul.nav{
        padding: 30px 20px 0;
        box-shadow: 0 0 2px 0 #aaaaaa;
        a{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
          width: 160px;
          font-size: 14px;
          font-family: 'Roboto';
          color: #585858;
          box-shadow: 0 0 2px 0 #aaaaaa;
          margin-bottom: 30px;
          i{
            font-size: 24px;
            margin-right: 15px;
          }
        }
      }
      .card{
        flex: 1;
        margin-left: 8px;
        select{
          width: 200px;
          height: 30px;
          font-size: 14px;
          color: #101010;
          padding-left: 10px;
          border: 1px solid #bbb;
          border-radius: 5px;
          margin: 10px 20px 0;
          option{
            color: #101010;
          }
        }
      }
    }
  }
</style>
