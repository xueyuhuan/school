<template>
    <div>
        <card>
            <h4 slot="header" class="h4">校友数据</h4>
            <div id="cahrt1_div" style="height:500px;" class="border_bottom_dash"></div>
            <div>
                <h4 class="h4">校友分布</h4>
                <div id="chart2_div"  style="height:500px;" class=""></div>
            </div>

        </card>
    </div>
</template>

<script type="text/ecmascript-6">
    import card from "@/components/Card.vue";
    export default {
        name: "MatesData",
        components:{
            card
        },
        mounted(){
            this.draw_chart1();
            this.draw_chart2();
        },
        methods:{
            draw_chart1(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('cahrt1_div'));
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: 'Customized Pie',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#000'
                        }
                    },

                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom: 10,
                        data: [
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:274, name:'联盟广告'},
                            {value:235, name:'视频广告'},
                            {value:400, name:'搜索引擎'}
                        ]
                    },
                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '50%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:274, name:'联盟广告'},
                                {value:235, name:'视频广告'},
                                {value:400, name:'搜索引擎'}
                            ].sort(function (a, b) { return a.value - b.value; }),
                            roseType: 'radius',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgb(0, 0, 0)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgb(0, 0, 0)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                });
            },
            draw_chart2(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('chart2_div'));
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data:['北京','上海','广州','海外','湖北']
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'北京'},
                                {value:310, name:'上海'},
                                {value:234, name:'广州'},
                                {value:135, name:'海外'},
                                {value:1548, name:'湖北'}
                            ]
                        }
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
    .border_bottom_dash{
        border-bottom:1px dashed #aaaaaa;
    }
</style>