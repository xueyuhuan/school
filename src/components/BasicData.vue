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
            <div>
                <h4 class="h4">教师数据</h4>
                <div style="padding-bottom: 10px;" class="border_bottom_dash">
                    <div class="input_group">
                        <div style="margin-top: 15px;padding-right: 10px">
                                <el-input placeholder="请输入内容" v-model="input_row" class="input-with-select">
                                    <div slot="prepend">行属性：</div>
                                    <el-button slot="append" icon="el-icon-search"></el-button>
                                </el-input>
                        </div>
                        <div style="margin-top: 15px;padding-right: 10px">
                            <el-input placeholder="请输入内容" v-model="input_colum" class="input-with-select">
                                <div slot="prepend">列属性：</div>
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </div>
                        <div style="margin-top: 15px;">
                            <el-input placeholder="请输入内容" v-model="input_area" class="input-with-select">
                                <div slot="prepend">统计范围：</div>
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </div>
                    </div>
                    <div>
                            <el-table
                                    :data="tableData6"
                                    border

                                    show-summary
                                    style="width: 100%;margin-top: 10px;">
                                <el-table-column
                                        prop="id"
                                        label="ID"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="name"
                                        label="姓名">
                                </el-table-column>
                                <el-table-column
                                        prop="amount1"
                                        sortable
                                        label="数值 1">
                                </el-table-column>
                                <el-table-column
                                        prop="amount2"
                                        sortable
                                        label="数值 2">
                                </el-table-column>
                                <el-table-column
                                        prop="amount3"
                                        sortable
                                        label="数值 3">
                                </el-table-column>
                            </el-table>
                    </div>

                </div>
            </div>
            <div>
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
                value:"",
                input_row:"",
                input_colum:"",
                input_area:"",
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
                tableData6: [{
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                }, {
                    id: '12987123',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                }, {
                    id: '12987124',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                }, {
                    id: '12987125',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                }, {
                    id: '12987126',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }]
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
                            name:"班级",
                            type : 'category',
                            data : ['1班','2班','3班','4班','5班','6班','7班']
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
                            name:'女生',
                            type:'bar',
                            color:"#57C7C9",
                            barWidth: '20%',
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
                            color:"#B4A3DE",
                            barWidth: '20%',
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
                                "name": "光谷二高",
                                "children": [
                                    {
                                        "name": "年级组",
                                        "children": [
                                            {
                                                "name": "2017级（高一）",
                                                "children": [
                                                    {"name": "1班", "value": 3938},
                                                    {"name": "2班", "value": 3812},
                                                    {"name": "3班", "value": 6714},
                                                    {"name": "4班", "value": 743}
                                                ]
                                            },
                                            {
                                                "name": "2016级（高二）",
                                            },
                                            {
                                                "name": "2015级（高三）",
                                            }
                                        ]
                                    },
                                    {
                                        "name": "党总支",
                                        "children": [
                                            {"name": "分支一", "value": 17010},
                                            {"name": "分支二", "value": 5842},
                                            {"name": "分支三"}
                                        ]
                                    },
                                ]
                            }
                            ],

                            top: '1%',
                            left: '15%',
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
            },
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '总价';
                        return;
                    }
                    const values = data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] += ' 元';
                    } else {
                        sums[index] = 'N/A';
                    }
                });

                return sums;
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
        margin-top:30px;
        border:1px solid #aaa;
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
    .input_group{
        display: flex;
        justify-content: space-around;
    }
</style>