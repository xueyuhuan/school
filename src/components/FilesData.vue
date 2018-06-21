<template>
    <div>
        <card>
            <h4 slot="header" class="h4">学生成长档案</h4>
            <div class="pad10 border_bottom_dash">
                <el-select v-model="value1" placeholder="请选择">
                    <el-option
                            v-for="item in options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <div class="right_chart" style="height: 500px;" id="chart_bar1"></div>
            </div>
            <div>
                <h4 class="h4">教师成长档案</h4>
                <div  class="pad10">
                    <el-select v-model="value2" placeholder="请选择">
                        <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <div style="height: 500px;" id="jsczda"></div>
                </div>
            </div>
        </card>
    </div>
</template>

<script type="text/ecmascript-6">
    import card from "@/components/Card.vue";
    export default {
        name: "FilesData",
        components:{
            card
        },
        data(){
          return{
              value1:"",
              value2:"",
              options1: [{
                  value: '选项1',
                  label: '高一年级10月语文月考'
              }, {
                  value: '选项2',
                  label: '高二年级10月语文月考'
              }, {
                  value: '选项3',
                  label: '高三年级10月语文月考'
              }],
              options2: [{
                  value: '选项1',
                  label: '分类汇总1'
              }, {
                  value: '选项2',
                  label: '分类汇总2'
              }, {
                  value: '选项3',
                  label: '分类汇总3'
              }],
          }
        },
        mounted(){
            this.draw_stu();
            this.draw_teacher();
        },
        methods:{
            draw_stu(){//学生成长档案
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('chart_bar1'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: ''
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data:['不及格','及格','中等','良好','优秀']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['一班','二班','三班','四班','五班','六班','七班']
                        }
                    ],
                    yAxis : [
                        {
                            name:"人数",
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'不及格',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[2, 3, 4, 3, 3, 4, 2]
                        },
                        {
                            name:'及格',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[33, 35, 37, 36, 35, 31, 30]
                        },
                        {
                            name:'中等',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[11, 12, 14, 16, 20, 21, 16]
                        },
                        {
                            name:'良好',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[22, 23, 24, 22, 29, 21, 20]
                        },
                        {
                            name:'优秀',
                            type:'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: {normal: {}},
                            data:[15, 16, 17, 13, 14, 16, 18]
                        }
                    ]
                });
            },
            draw_teacher(){//教师成长档案
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('jsczda'));
                // 绘制图表
                myChart.setOption({
                    title : {
                        text: '',
                        subtext: ''
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['数量']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            name:"类别",
                            type : 'category',
                            data : ['论著','期刊','培训','校本课程','优质课类竞赛','录像课竞赛']
                        }
                    ],
                    yAxis : [
                        {
                            name:"数量",
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'数量',
                            type:'bar',
                            color:"#57C7C9",
                            barWidth: '10%',
                            data:[20, 29, 27, 23, 25, 27],
                            markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'},
                                    {type : 'min', name: '最小值'}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        },
                    ]
                });
            },
        }
    };
</script>

<style scoped lang="less">
    @themeColor:#4A96ED;
    .h4{
        height: 45px;
        line-height: 45px;
        border-bottom: 1px dashed #aaaaaa;
        margin: 0;
        color: @themeColor;
    }
    .pad10{
        padding: 10px;
    }
    .border_bottom_dash{
        border-bottom:1px dashed #aaaaaa;
    }
</style>