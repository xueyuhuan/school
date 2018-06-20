<template>
    <div>
        <card>
            <h4 slot="header" class="h4">学生数据</h4>
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
        name: "BasicData",
        components: {
            card
        },
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '高一年级'
                }, {
                    value: '选项2',
                    label: '高二年级'
                }, {
                    value: '选项3',
                    label: '高三年级'
                }],
                value: ''
            }
        },
        mounted(){
            this.drawBar();
            this.draw_zuzhijiagou();
        },
        methods: {
            drawBar(){//画柱状图
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('chart_bar1'));
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
                        data:['女生','男生']
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
                            data : ['1班','2班','3班','4班','5班','6班','7班']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'女生',
                            type:'bar',
                            data:[20, 29, 27, 23, 25, 27, 25],
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
                            name:'男生',
                            type:'bar',
                            data:[26, 29, 29, 26, 28, 27, 25],
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
            draw_zuzhijiagou(){//画组织架构
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('zuzhijigou'));
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        triggerOn: 'mousemove'
                    },
                    series: [
                        {
                            type: 'tree',

                            data: [{
                                "name": "flare",
                                "children": [
                                    {
                                        "name": "analytics",
                                        "children": [
                                            {
                                                "name": "cluster",
                                                "children": [
                                                    {"name": "AgglomerativeCluster", "value": 3938},
                                                    {"name": "CommunityStructure", "value": 3812},
                                                    {"name": "HierarchicalCluster", "value": 6714},
                                                    {"name": "MergeEdge", "value": 743}
                                                ]
                                            },
                                            {
                                                "name": "graph",
                                            },
                                            {
                                                "name": "optimization",
                                            }
                                        ]
                                    },
                                    {
                                        "name": "animate",
                                        "children": [
                                            {"name": "Easing", "value": 17010},
                                            {"name": "FunctionSequence", "value": 5842},
                                            {
                                                "name": "interpolate",
                                            }
                                        ]
                                    },
                                ]
                            }
                            ],

                            top: '1%',
                            left: '7%',
                            bottom: '1%',
                            right: '20%',

                            symbolSize: 20,

                            label: {
                                normal: {
                                    position: 'left',
                                    verticalAlign: 'middle',
                                    align: 'right',
                                    fontSize: 20
                                }
                            },

                            leaves: {
                                label: {
                                    normal: {
                                        position: 'right',
                                        verticalAlign: 'middle',
                                        align: 'left'
                                    }
                                }
                            },

                            expandAndCollapse: true,
                            animationDuration: 550,
                            animationDurationUpdate: 750
                        }
                    ]
                });
            }
        }
    };
</script>

<style scoped lang="less">
    @themeColor:#4A96ED;
    .pad10{
        padding: 10px;
    }
    .dsp_flex{
        display: flex;
        align-items: flex-start;
        margin-top:10px;
    }
    .left_box{
        padding: 20px;
    }
    .right_chart{
        -webkit-box-flex:1;
        -ms-flex:1;
        flex:1;
    }
    .border_bottom_dash{
        border-bottom:1px dashed #aaaaaa;
    }
    .h4{
        height: 45px;
        line-height: 45px;
        border-bottom: 1px dashed #aaaaaa;
        margin: 0;
        color: @themeColor;
    }
</style>