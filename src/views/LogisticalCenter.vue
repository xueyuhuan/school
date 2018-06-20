<template>
  <div class="logistics">
    <card>
      <h4 slot="header">电子班牌</h4>
      <div class="summary">总体建设<span class="green">30</span>台，当前运行正常<span class="orange">28</span>台，运行异常<span class="red">2</span>台。</div>
      <el-table :data="tableData" border stripe style="display:inline-block;width: 500px">
        <el-table-column prop="class" label="班级"></el-table-column>
        <el-table-column prop="number" label="班牌编号"></el-table-column>
        <el-table-column prop="state" label="当前状态">
          <template slot-scope="scope">
            <span :class="{red:(scope.row.state!='正常')}">{{ scope.row.state }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <a :class="{green:true}" style="text-decoration:underline">{{ scope.row.operation }}</a>
          </template>
        </el-table-column>
      </el-table>
    </card>
    <card>
      <h4 slot="header">电子手环</h4>
      <div class="summary">已分配<span class="green">3333</span>只，当前运行正常<span class="orange">3330</span>只，运行异常<span class="red">3</span>只。</div>
      <el-table :data="tableData" border stripe style="display:inline-block;width: 500px">
        <el-table-column prop="class" label="班级"></el-table-column>
        <el-table-column prop="number" label="班牌编号"></el-table-column>
        <el-table-column prop="state" label="当前状态">
          <template slot-scope="scope">
            <span :class="{red:(scope.row.state!='正常')}">{{ scope.row.state }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <a :class="{green:true}" style="text-decoration:underline">{{ scope.row.operation }}</a>
          </template>
        </el-table-column>
      </el-table>
    </card>
    <div class="other">
      <card>
        <h4 slot="header">服务器</h4>
        <select>
          <option value="服务器1">服务器1</option>
          <option value="服务器2">服务器2</option>
          <option value="服务器3">服务器3</option>
        </select>
        <div class="gauge">
          <div id="gauge" style="width: 300px;height: 300px"></div>
          <p>CPU：2核<br/>内存：16G<br/>硬盘：共500G；可用230G</p>
        </div>
      </card>
      <card>
        <h4 slot="header">一卡通</h4>
        <select>
          <option value="高一年级">高一年级</option>
          <option value="高二年级">高二年级</option>
          <option value="高三年级">高三年级</option>
        </select>
        <div id="pie" style="width: 500px;height: 300px;margin: 0 auto"></div>
      </card>
    </div>
  </div>
</template>

<script>
import card from "@/components/Card.vue";
export default {
  name: "LogisticalCenter",
  components:{
    card
  },
  data(){
    return{
      tableData: [{
        class: '高一（1）班',
        number: 'BP001',
        state: '正常',
        operation:'查看',
      },{
        class: '高一（1）班',
        number: 'BP001',
        state: '异常',
        operation:'查看',
      },{
        class: '高一（1）班',
        number: 'BP001',
        state: '关机',
        operation:'查看',
      }]
    }
  },
  mounted(){
    this.drawGauge();
    this.drawPie();
  },
  methods: {
    drawGauge() {
      // 基于准备好的dom，初始化echarts实例
      let gauge = this.$echarts.init(document.getElementById('gauge'));
      // 绘制图表
      gauge.setOption({
        color:[],
        series: [
          {
            type: 'gauge',
            radius: '80%',
            axisLine: {
              lineStyle: {
                width: 10 // 这个是修改宽度的属性
              }
            },
            data: [{value: 33, name: 'CPU'}]
          }
        ]
      });
    },
    drawPie() {
      let pie = this.$echarts.init(document.getElementById('pie'));
      pie.setOption({

        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal',
          data: ['0次','1-3次','4-6次','7-9次','10次级以上']
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '50%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'0次'},
              {value:310, name:'1-3次'},
              {value:234, name:'4-6次'},
              {value:135, name:'7-9次'},
              {value:1548, name:'10次级以上'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style>
  .cell{
    font-size: 14px;
    font-family: 'Roboto';
    text-align: center;
  }
</style>
<style scoped lang="less">
  h4{
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: normal;
    color: #4A96ED;
    margin: 0
  }
  .green{color: forestgreen;}
  .orange{color: orange;}
  .red{color: red;}
  .logistics{
    width: 1140px;
    margin: 5px auto 0;
    .card{
      padding-bottom: 20px;
      .summary{
        font-size: 14px;
        font-family: Roboto;
        color: #101010;
        margin: 10px 10px 20px;
      }
    }
    .other{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .card{
        width: 564px;
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
        .gauge{
          display: flex;
          align-items: center;
          p{
            font-family: 'Roboto';
            color: #585858;
          }
        }
      }
    }
  }
</style>
