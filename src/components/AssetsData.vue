<template>
    <div>
        <card>
            <h4 slot="header" class="h4">电教资产</h4>
            <div class="flex">
                <div><i class="fa fa-database fa-3x"></i> <span>设备总数</span><span>1234台</span></div>
                <div><i class="fa fa-wrench fa-3x"></i> <span>本月累计维修费</span><span>1234元</span></div>
                <div><i class="fa fa-cog fa-3x"></i> <span>待处理报修单</span><span>12单</span></div>
            </div>
            <div class="flex2">
                <div id="djzc_left">1</div>
                <div id="djzc_right">2</div>
            </div>
            <div class="pad10 border_bottom_dash">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <div class="dsp_flex">
                    <div class="left_box">
                        学生总数：2124人<br/>
                        高一年级：553人<br/>
                        高二年级：349人<br/>
                        高三年级：659人<br/>
                    </div>
                    <div class="right_chart" style="height: 500px;" id="chart_bar1"></div>
                </div>
            </div>
            <div class="">
                <h4 class="h4">组织机构</h4>
                <div id="zuzhijigou" style="height: 500px;"></div>
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
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '60%',
                            data:[10, 52, 200, 334, 390, 330, 220]
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
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '60%',
                            data:[10, 52, 200, 334, 390, 330, 220]
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
            border: 1px solid #418BCA;
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
        div{
            width: 450px;
            height: 450px;
        }
    }
    .h4{
        height: 45px;
        line-height: 45px;
        border-bottom: 1px dashed #aaaaaa;
        margin: 0;
        color: @themeColor;
    }
</style>