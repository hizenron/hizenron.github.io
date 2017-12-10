// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('barline'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts-1：柱状和折线图'
    },
    toolbox: {
        show: true,
        feature: {
            dataView:{
                show:true
            },
            restore:{
                show:true
            },
            dataZoom:{
                show:true
            },
            saveAsImage: {
                show: true
            },
            magicType: {
                type: ['line', 'bar']
            }
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 30, 20]
    },{
        name: '产量',
        type: 'line',
        data: [5, 20, 36, 10, 30, 20],
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值',symbol:'arrow'}
            ]
        },
        markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
        }
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);