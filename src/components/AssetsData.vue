<template>
    <div>
        <card>
            <h4 slot="header" class="h4">电教资产</h4>
            <div class="flex">
                <div style="border: 1px solid #418BCA;"><i class="fa fa-database fa-2x"></i> <span>设备总数</span><span>1234台</span></div>
                <div style="border: 1px solid #EFAD4D;"><i class="fa fa-wrench fa-2x"></i> <span>本月累计维修费</span><span>1234元</span></div>
                <div style="border: 1px solid #D9544F;"><i class="fa fa-cog fa-2x"></i> <span>待处理报修单</span><span>12单</span></div>
            </div>
            <div class="flex2">
                <div id="djzc_left">1</div>
                <div id="djzc_right">2</div>
            </div>

            <div>
                <h4 class="h4">房屋资产</h4>
                <div id="fangwuzichan" class="fwzc"></div>
            </div>
            <div>
                <h4 class="h4">其他资产</h4>
                <div class="nodata">
                    <div><i class="fa fa-smile-o"></i> 暂无数据</div>
                </div>
            </div>
        </card>
    </div>
</template>

<script type="text/ecmascript-6">
    import card from "@/components/Card.vue";
    export default {
        name: "AssetsData",
        components:{
            card
        },
        mounted(){
            this.draw_djzc_left();
            this.draw_djzc_right();
            this.draw_fangwuzichan();
        },
        methods:{
            draw_djzc_left(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('djzc_left'));
                // 绘制图表
                myChart.setOption({
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '10%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            name : '日期',
                            type : 'category',
                            data : ['12.01', '12.02', '12.03', '12.04', '12.05', '12.06', '12.07'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            name : '保修单数（单）',
                            type : 'value',
                            data:['']
                        }
                    ],
                    series : [
                        {
                            name:'保修单数（单）',
                            type:'bar',
                            barWidth: '30%',
                            data:[10, 52, 200, 334, 490, 330, 220]
                        }
                    ]
                });
            },
            draw_djzc_right(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('djzc_right'));
                // 绘制图表
                myChart.setOption({
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '10%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            name : '日期',
                            type : 'category',
                            data : ['12.01', '12.02', '12.03', '12.04', '12.05', '12.06', '12.07'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            name : '维修费用（元）',
                            type : 'value',
                            data:['']
                        }
                    ],
                    series : [
                        {
                            name:'维修费用（元）',
                            type:'bar',
                            barWidth: '30%',
                            data:[300, 520, 200, 334, 490, 730, 1220]
                        }
                    ]
                });
            },
            draw_fangwuzichan(){//房屋资产
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('fangwuzichan'));
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
                        data:['普通教室','多功能教室']
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
                            type : 'category',
                            data : ['明德楼','逸夫楼','育才楼','实验楼','教学楼']
                        }
                    ],
                    yAxis : [
                        {
                            name:"教室数（间）",
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'普通教室',
                            type:'bar',
                            color:"#57C7C9",
                            barWidth: '20%',
                            data:[20, 29, 27, 23, 25],
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
                        {
                            name:'多功能教室',
                            type:'bar',
                            color:"#B4A3DE",
                            barWidth: '20%',
                            data:[26, 29, 29, 26, 28],
                            markPoint : {
                                data : [
                                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name : '平均值'}
                                ]
                            }
                        }
                    ]
                });
            },
        }
    };
</script>

<style scoped lang="less">
    @themeColor:#4A96ED;
    .flex{
        display: flex;
        justify-content: space-around;
        padding: 10px 20px;
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width:260px;
            height:60px;
            padding:10px;
            i{
             color: #585858;
            }
        }
    }
    .flex2{
        display: flex;
        justify-content:space-around;
        align-items: center;
        border-bottom: 1px dashed #aaaaaa;
        padding-bottom:10px;
        div{
            width: 450px;
            height: 300px;
            }
    }
    .h4{
        height: 45px;
        line-height: 45px;
        border-bottom: 1px dashed #aaaaaa;
        margin: 0;
        color: @themeColor;
    }
    .fwzc{
        height: 500px;
        border-bottom: 1px dashed #aaaaaa;
        padding: 10px 0;
    }
    .nodata{
        padding:20px;
        div{
            text-align: center;
            margin: 0 auto;
        }
    }
</style>