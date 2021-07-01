window.onload = function () {

//曲线图
    var chart = echarts.init(document.getElementById("main"));
    var req = new XMLHttpRequest();
    var url1 = "https://edu.telking.com/api/?type=month";
    req.open('get',url1);
    req.send(null);
    req.onload = function () {
        var data = JSON.parse(req.responseText);
        chart.setOption({
            title: {
                text: '曲线图数据展示',
                x: 'center'
            },
            xAxis: {
                type: 'category',
                data: data.data.xAxis
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}人'
                }
            },
            series: {
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#adc9f8'
                        }
                    }
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(255,255,255,0.1)'
                        }, {
                            offset: 1, color: 'rgba(0,0,0,0.1)'
                        }],
                        global: false
                    }
                },
                data: data.data.series
            }

        })
    }


//饼图
    var piechart = echarts.init(document.getElementById('pie'));
    var xhr = new XMLHttpRequest();
    var url2 = "https://edu.telking.com/api/?type=week"
    xhr.open('get', url2);
    xhr.send(null);
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        piechart.setOption({
            title: {
                text: '饼图数据展示',
                x: 'center'
            },
            series: [{
                type: 'pie',
                radius: '55%',
                data: (function () {
                    var rs = [];
                    for (var res in data.data.xAxis) {
                        rs.push({
                            name: data.data.xAxis[res],
                            value: data.data.series[res]
                        });
                    }
                    return rs;
                })()
            }]
        })
    }

//柱状图
    var mychart = echarts.init(document.getElementById('mychart'));
    var request = new XMLHttpRequest();
    var url3 = "https://edu.telking.com/api/?type=week"
    request.open('get', url3);
    request.send(null);
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        mychart.setOption({
            title: {
                text: '柱状图数据展示',
                x: 'center'
            },
            xAxis: {
                data: data.data.xAxis
            },
            yAxis: {},
            series: [{
                type: 'bar',
                data: data.data.series
            }]
        })
    }

}