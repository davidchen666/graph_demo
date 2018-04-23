var colors1 = ['#11BA89'];
var colors2 = ['#11BA89', '#118BF6'];
var colors3 = ['#11BA89', '#118BF6', '#F37676'];
var colors4 = ['#11BA89', '#118BF6', '#F37676', '#732FC3'];
var colors5 = ['#11BA89', '#118BF6', '#F37676', '#732FC3', '#F89E01'];
var colors6 = ['#11BA89', '#118BF6', '#F37676', '#732FC3', '#F89E01', '#098C66'];
var colors7 = ['#11BA89', '#118BF6', '#F37676', '#732FC3', '#F89E01', '#098C66', '#50E3C2'];
var colors8 = ['#11BA89', '#118BF6', '#F37676', '#732FC3', '#F89E01', '#098C66', '#50E3C2', '#7ED321'];
var colors9 = ['#11BA89', '#118BF6', '#F37676', '#732FC3', '#F89E01', '#098C66', '#50E3C2', '#7ED321', '#C1A781'];
var colors = ['#11BA89', '#118BF6', '#F37676', '#732FC3', '#F89E01', '#098C66', '#50E3C2', '#7ED321', '#C1A781', '#C95477'];
var legendTextstyleColor = '#999';  //组件字体颜色
var animationDuration = '1500';   //动画速度
var axislineLinestyleColor = '#ddd';      //轴颜色
var axislineAxistickColor = '#ddd';      //轴标尺颜色
var axislineAxislabelColor = '#999';     //轴字体颜色


var graph_ajax = function (data, obj, callback) {
    var d_data = typeof data.data == 'object' ? data.data : eval('(' + data.data + ');');

    var graph_type = ['pie-doughnut', 'bar-y-category', 'gauge', 'bar-y-category-stack'];
    if ($.inArray(data.graph, graph_type) == -1) {
        alert('暂无该图标类型');
        return false;
    }
    var myChart = echarts.init(document.getElementById(obj));
    var feature = {}
    var source1 = ''
    var source2 = ''
    if (typeof(d_data.source) != "undefined") {
        source1 = d_data.source;
    }
    if (typeof(d_data.source2) != "undefined") {
        source2 = d_data.source2;
    }
    if (d_data.downloadimg == 1) {
        feature = {"saveAsImage": {"type": "png"}}
    }
    // data.graph = 'gauge'
    // 指定图表的配置项和数据
    var option = {}
    if (data.graph == 'pie-doughnut') {
        option = {
            color: colors,
            animationDuration: animationDuration,
            toolbox: {
                feature: {
                    saveAsImage: {show: false}   //辅助工具-保存图片
                }
            },


            series: [

                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data: [
                        {
                            value: d_data.y[0]['data'][0],
                            name: d_data.y[0]['name'],
                            label: {
                                normal: {
                                    position: 'center',
                                    formatter: "{b}\n{d}%"
                                }
                            }
                        },
                        {
                            value: d_data.y[1]['data'][0],
                            name: d_data.y[1]['name'],
                            label: {
                                normal: {
                                    show: false
                                }
                            }
                        }
                    ]
                }
            ]
        };
    }
    if (data.graph == 'bar-y-category') {
        var series=[]
        for (i = 0; i < d_data.x['data'].length; i++) {
            series[i]={
                name: d_data.y[i]['name'],
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{c}%'
                    }
                },
                data: [d_data.y[i]['data'][0]]
            }
        }
        option = {
            //        backgroundColor: '#eee',
            animationDuration: animationDuration,
            toolbox: {
                feature: {
                    saveAsImage: {
                        show: false
                    } //辅助工具-保存图片
                }
            },
            color: colors,
            title: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                textStyle: {
                    color: legendTextstyleColor
                },
                bottom: 0,
                // data: ['2017年']
            },
            grid: {
                left: '3%',
                right: '6%',
                bottom: '7%',
                top: '5%',
                containLabel: true
            },
            xAxis: {
                splitLine: {
                    show: false //去掉网格线
                },
                axisLine: {
                    lineStyle: {
                        color: axislineLinestyleColor
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: axislineAxistickColor
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: axislineAxislabelColor
                    }
                },
                type: 'value',
                boundaryGap: [0, 0.01],

            },
            yAxis: {

                axisLine: {
                    lineStyle: {
                        color: axislineLinestyleColor,
                        width: '1'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: axislineAxistickColor
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: axislineAxislabelColor
                    }
                },
                splitLine: {
                    show: false //去掉网格线
                },
                type: 'category',


                data: [{
                    value: '',
                    barWidth: '40',
                    // 突出周一
                    textStyle: {

                        color: '#999'
                    }
                }]
            },
            series: series
        };
    }
    if (data.graph == 'gauge') {
        option = {
            "toolbox": {"feature": feature},
            "grid": {
                "show": false,
                "top": "65px",
                "height": "217px",
                "left": "20%",
                "right": "20%",
                "width": "400px",
                "z": 2,
                "zlevel": 0,
                "bottom": 30
            },
            "series": [{
                "name": "推荐净值",
                "axisLine": {
                    "lineStyle": {
                        "width": 100,
                        "opacity": 0.8,
                        "color": [[0.5, "rgba(115, 47, 195, 0.4)"], [1, "#732FC3"]]
                    }
                },
                "value": d_data.y[0]['data'][0],
                "percent": d_data.y[0]['data'][0],
                "detail": {"offsetCenter": [0, "100"], "textStyle": {"color": "#000", "fontSize": 24}},
                "animation": false,
                "data": [{
                    "value": d_data.y[0]['data'][0],
                    "name": d_data.y[0]['name'],
                    "serise_name": d_data.y[0]['name']
                }],
                "type": "gauge",
                "startAngle": 180,
                "endAngle": 0,
                "center": ["50%", "340"],
                "radius": 200,
                "splitLine": {"length": "25", "lineStyle": {"width": 2, "type": "solid", "opacity": 1}},
                "axisTick": {
                    "length": "15",
                    "splitNumber": 10,
                    "lineStyle": {"width": 2, "type": "solid", "opacity": 0.4}
                },
                "axisLabel": {"show": true, "distance": 90, "textStyle": {"fontSize": 18}},
                "min": -100,
                "max": 100,
                "splitNumber": 4,
                "pointer": {"width": 12, "length": "50%", "color": "#000"},
                "itemStyle": {"normal": {"color": "auto"}},
                "title": {"show": true, "offsetCenter": [0, "170"], "textStyle": {"fontSize": 24, "fontWeight": "bold"}}
            }],
            "chartHeight": "650",
            "title": [{
                "text": d_data.big_title,
                "subtext": d_data.small_title,
                "textStyle": {
                    "color": "#000",
                    "fontStyle": "normal",
                    "fontWeight": "bolder",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 16
                },
                "left": 0,
                "bottom": 0,
                "top": "0px"
            }, {
                "text": "",
                "subtext": source1 + "\n\n" + source2,
                "textStyle": {
                    "color": "#000",
                    "fontStyle": "normal",
                    "fontWeight": "bolder",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": "12"
                },
                "left": 0,
                "bottom": "30px",
                "top": "548px"
            }]
        }, {
            "toolbox": {"feature": {"saveAsImage": {"type": "png"}}},
            "grid": {
                "show": false,
                "top": "65px",
                "height": 170,
                "left": "center",
                "right": "20%",
                "width": 530,
                "z": 2,
                "zlevel": 0,
                "bottom": 30
            },
            "graphic": [{
                "type": "text",
                "z": 100,
                "left": "center",
                "top": "260px",
                "style": {"fill": "#000", "text": ["全部"], "font": "bold 24px Microsoft YaHei"}
            }],
            "yAxis": {
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
                "axisLabel": {"margin": 20, "textStyle": {"color": "#000", "fontSize": 14}},
                "data": ["贬损者 68", "中立者 20", "推荐者 12"]
            },
            "xAxis": {
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
                "show": false,
                "min": 0,
                "max": 100
            },
            "tooltip": {"show": true},
            "series": [{
                "data": [{
                    "name": "贬损者",
                    "realValue": 17,
                    "value": 68,
                    "percent": 68,
                    "people": 68,
                    "symbol": "path:\/\/m 100.55702,161.03384 c -6.077439,-1.21802 -8.357637,-8.69503 -4.007038,-13.13952 4.820698,-4.92474 13.254328,-1.44121 13.254328,5.47473 0,4.87383 -4.51213,8.61379 -9.24729,7.66479 z m -0.759346,-4.37014 c 1.200056,-0.91533 2.469196,-1.08812 3.700536,-0.50381 0.54186,0.25713 1.04654,0.62735 1.12151,0.82271 0.20972,0.54653 1.13802,0.43807 1.13802,-0.13296 0,-0.97295 -2.03243,-2.15767 -3.70157,-2.15767 -1.77676,0 -3.954581,1.35381 -3.612375,2.24559 0.205632,0.53587 0.32354,0.51202 1.353879,-0.27386 z m 0.615486,-4.4059 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40929,-0.40929 -1.601547,-0.40929 -2.010836,0 -0.409289,0.40929 -0.409289,1.60154 0,2.01083 0.409289,0.40929 1.601546,0.40929 2.010836,0 z m 5.29166,0 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40928,-0.40929 -1.60154,-0.40929 -2.01083,0 -0.17462,0.17462 -0.3175,0.62706 -0.3175,1.00541 0,0.37836 0.14288,0.83079 0.3175,1.00542 0.40929,0.40929 1.60155,0.40929 2.01083,0 z",
                    "itemStyle": {"normal": {"color": "#DC1E35"}}
                }, {
                    "name": "中立者",
                    "realValue": 5,
                    "value": 20,
                    "percent": 20,
                    "people": 20,
                    "symbol": "path:\/\/M10.2565161,249 C10.2565161,386.531 121.178839,498 258.014968,498 C394.834581,498 505.740387,386.531 505.740387,249 C505.740387,111.4856 394.834581,0 258.014968,0 C121.178839,0 10.2565161,111.4856 10.2565161,249 Z M299.30529,182.6 C299.30529,159.6754 317.786839,141.1 340.579097,141.1 C363.387871,141.1 381.869419,159.6754 381.869419,182.6 C381.869419,205.508 363.387871,224.1 340.579097,224.1 C317.786839,224.1 299.30529,205.508 299.30529,182.6 Z M134.127484,182.6 C134.127484,159.6754 152.625548,141.1 175.417806,141.1 C198.226581,141.1 216.724645,159.6754 216.724645,182.6 C216.724645,205.508 198.226581,224.1 175.417806,224.1 C152.625548,224.1 134.127484,205.508 134.127484,182.6 Z M144.466581,329.925 C144.466581,321.9072 150.924387,315.4 158.901677,315.4 L357.095226,315.4 C365.072516,315.4 371.563355,321.9072 371.563355,329.925 C371.563355,337.9428 365.072516,344.45 357.095226,344.45 L158.901677,344.45 C150.924387,344.45 144.466581,337.9428 144.466581,329.925 Z",
                    "itemStyle": {"normal": {"color": "#F6A623"}}
                }, {
                    "name": "推荐者",
                    "realValue": 3,
                    "value": 12,
                    "percent": 12,
                    "people": 12,
                    "symbol": "path:\/\/M0,249 C0,386.531 111.469,498 249,498 C386.5144,498 498,386.531 498,249 C498,111.4856 386.5144,0 249,0 C111.469,0 0,111.4856 0,249 Z M290.5,182.6 C290.5,159.6754 309.092,141.1 332,141.1 C354.9246,141.1 373.5,159.6754 373.5,182.6 C373.5,205.508 354.9246,224.1 332,224.1 C309.092,224.1 290.5,205.508 290.5,182.6 Z M124.5,182.6 C124.5,159.6754 143.092,141.1 166,141.1 C188.9246,141.1 207.5,159.6754 207.5,182.6 C207.5,205.508 188.9246,224.1 166,224.1 C143.092,224.1 124.5,205.508 124.5,182.6 Z M336.5318,299.0158 C340.9806,292.3592 350.011,290.5664 356.6842,295.0318 C363.3408,299.4806 365.1336,308.511 360.6682,315.1676 C337.4614,349.8782 295.231,371.425 248.9668,371.425 C202.7524,371.425 160.5718,349.928 137.3318,315.2838 C132.8664,308.6438 134.6426,299.6134 141.3158,295.1314 C147.9724,290.666 157.0028,292.4422 161.4682,299.1154 C179.1804,325.526 212.2476,342.375 248.9668,342.375 C285.7358,342.375 318.8196,325.4762 336.5318,299.0158 Z",
                    "itemStyle": {"normal": {"color": "#40BA2C"}}
                }],
                "animation": false,
                "type": "pictorialBar",
                "symbolRepeat": "10",
                "symbolMargin": "0",
                "symbolClip": true,
                "symbolSize": 40,
                "symbolBoundingData": 100
            }, {
                "data": [{
                    "name": "贬损者",
                    "realValue": 17,
                    "value": 100,
                    "percent": 68,
                    "people": 68,
                    "symbol": "path:\/\/m 100.55702,161.03384 c -6.077439,-1.21802 -8.357637,-8.69503 -4.007038,-13.13952 4.820698,-4.92474 13.254328,-1.44121 13.254328,5.47473 0,4.87383 -4.51213,8.61379 -9.24729,7.66479 z m -0.759346,-4.37014 c 1.200056,-0.91533 2.469196,-1.08812 3.700536,-0.50381 0.54186,0.25713 1.04654,0.62735 1.12151,0.82271 0.20972,0.54653 1.13802,0.43807 1.13802,-0.13296 0,-0.97295 -2.03243,-2.15767 -3.70157,-2.15767 -1.77676,0 -3.954581,1.35381 -3.612375,2.24559 0.205632,0.53587 0.32354,0.51202 1.353879,-0.27386 z m 0.615486,-4.4059 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40929,-0.40929 -1.601547,-0.40929 -2.010836,0 -0.409289,0.40929 -0.409289,1.60154 0,2.01083 0.409289,0.40929 1.601546,0.40929 2.010836,0 z m 5.29166,0 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40928,-0.40929 -1.60154,-0.40929 -2.01083,0 -0.17462,0.17462 -0.3175,0.62706 -0.3175,1.00541 0,0.37836 0.14288,0.83079 0.3175,1.00542 0.40929,0.40929 1.60155,0.40929 2.01083,0 z",
                    "itemStyle": {"normal": {"opacity": 0.2, "color": "#b1b1b1"}}
                }, {
                    "name": "中立者",
                    "realValue": 5,
                    "value": 100,
                    "percent": 20,
                    "people": 20,
                    "symbol": "path:\/\/M10.2565161,249 C10.2565161,386.531 121.178839,498 258.014968,498 C394.834581,498 505.740387,386.531 505.740387,249 C505.740387,111.4856 394.834581,0 258.014968,0 C121.178839,0 10.2565161,111.4856 10.2565161,249 Z M299.30529,182.6 C299.30529,159.6754 317.786839,141.1 340.579097,141.1 C363.387871,141.1 381.869419,159.6754 381.869419,182.6 C381.869419,205.508 363.387871,224.1 340.579097,224.1 C317.786839,224.1 299.30529,205.508 299.30529,182.6 Z M134.127484,182.6 C134.127484,159.6754 152.625548,141.1 175.417806,141.1 C198.226581,141.1 216.724645,159.6754 216.724645,182.6 C216.724645,205.508 198.226581,224.1 175.417806,224.1 C152.625548,224.1 134.127484,205.508 134.127484,182.6 Z M144.466581,329.925 C144.466581,321.9072 150.924387,315.4 158.901677,315.4 L357.095226,315.4 C365.072516,315.4 371.563355,321.9072 371.563355,329.925 C371.563355,337.9428 365.072516,344.45 357.095226,344.45 L158.901677,344.45 C150.924387,344.45 144.466581,337.9428 144.466581,329.925 Z",
                    "itemStyle": {"normal": {"opacity": 0.2, "color": "#b1b1b1"}}
                }, {
                    "name": "推荐者",
                    "realValue": 3,
                    "value": 100,
                    "percent": 12,
                    "people": 12,
                    "symbol": "path:\/\/M0,249 C0,386.531 111.469,498 249,498 C386.5144,498 498,386.531 498,249 C498,111.4856 386.5144,0 249,0 C111.469,0 0,111.4856 0,249 Z M290.5,182.6 C290.5,159.6754 309.092,141.1 332,141.1 C354.9246,141.1 373.5,159.6754 373.5,182.6 C373.5,205.508 354.9246,224.1 332,224.1 C309.092,224.1 290.5,205.508 290.5,182.6 Z M124.5,182.6 C124.5,159.6754 143.092,141.1 166,141.1 C188.9246,141.1 207.5,159.6754 207.5,182.6 C207.5,205.508 188.9246,224.1 166,224.1 C143.092,224.1 124.5,205.508 124.5,182.6 Z M336.5318,299.0158 C340.9806,292.3592 350.011,290.5664 356.6842,295.0318 C363.3408,299.4806 365.1336,308.511 360.6682,315.1676 C337.4614,349.8782 295.231,371.425 248.9668,371.425 C202.7524,371.425 160.5718,349.928 137.3318,315.2838 C132.8664,308.6438 134.6426,299.6134 141.3158,295.1314 C147.9724,290.666 157.0028,292.4422 161.4682,299.1154 C179.1804,325.526 212.2476,342.375 248.9668,342.375 C285.7358,342.375 318.8196,325.4762 336.5318,299.0158 Z",
                    "itemStyle": {"normal": {"opacity": 0.2, "color": "#b1b1b1"}}
                }],
                "animation": false,
                "type": "pictorialBar",
                "symbolRepeat": "10",
                "symbolMargin": "0",
                "symbolClip": true,
                "symbolSize": 40,
                "symbolBoundingData": 100,
                "z": -5
            }],
            "unit": "人",
            "chartHeight": "450",
            "formatterScheme": "default",
            "title": [{
                "text": "人群分布:推荐者\/中立者\/贬损者",
                "subtext": "%",
                "textStyle": {
                    "color": "#000",
                    "fontStyle": "normal",
                    "fontWeight": "bolder",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 16
                },
                "left": 0,
                "bottom": 0,
                "top": "0px"
            }, {
                "text": "",
                "subtext": "基数: n=25 \n\n数据来源：Q11",
                "textStyle": {
                    "color": "#000",
                    "fontStyle": "normal",
                    "fontWeight": "bolder",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": "12"
                },
                "left": 0,
                "bottom": "30px",
                "top": "300px"
            }]
        };
    }
    if (data.graph == 'bar-y-category-stack') {
        var series=[]
        for (i = 0; i < d_data.y.length; i++) {
            series[i]={
                name: d_data.y[i]['name'],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        formatter: '{c}%'
                    }
                },
                data: d_data.y[i]['data']
            }
        }



        option = {
            animationDuration: animationDuration,
            toolbox: {
                feature: {
                    saveAsImage: {
                        show: false
                    } //辅助工具-保存图片
                }
            },
            color: colors,
            title: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                textStyle: {
                    color: legendTextstyleColor
                },
                bottom: 0,
                data: data.data['legend'],
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '7%',
                top: '5%',
                containLabel: true
            },
            xAxis: {
                axisLine: {
                    lineStyle: {
                        color: axislineLinestyleColor
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: axislineAxistickColor
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: axislineAxislabelColor
                    }
                },
                splitLine: {
                    show: false //去掉网格线
                },
                type: 'value'
            },
            yAxis: {
                axisLine: {
                    lineStyle: {
                        color: axislineLinestyleColor
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: axislineAxistickColor
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: axislineAxislabelColor
                    }
                },
                splitLine: {
                    show: false //去掉网格线
                },
                type: 'category',

                data: d_data.x['data']
            },
            series:series
        };
    }

    console.log(series)
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    return


//    var unit = data.params && data.params.unit || '万人';
    var graph_type = ['solid_line', 'doubleY_solid_line', 'solid_xline', 'reversed', 'horizontal_bar', 'stack_bar', 'dcolumn_bar', '2Dpie', 'hollow_line', 'mcolumn_bar', 'hcolumn_bar', 'single_bar', 'dcolumn_xtilt_bar', 'imgsingle_bar', '2Dmpie'];
    // var graph_type = ['solid_line', 'doubleY_solid_line', 'solid_xline', 'reversed', 'horizontal_bar', 'stack_bar', 'dcolumn_bar', '2Dpie', 'hollow_line', 'mcolumn_bar', 'hcolumn_bar', 'single_bar', 'dcolumn_xtilt_bar', 'imgsingle_bar', '2Dmpie'];

    if ($.inArray(data.graph, graph_type) == -1) {
        alert('暂无该图标类型');
        return false;
    }

    var params = {

        chart: {
            type: data.graph || 'column',
        },
        title: {
            text: ''//data.big_title
        },
        subtitle: {
            text: ''//data.small_title
        },
        tooltip: {
            style: {
                color: '#fff',
                opacity: 0.9,
            },
            borderWidth: 0,
            borderRadius: 8,
            headerFormat: '<span style="font-size: 15px">{point.key}</span><br/>',
            backgroundColor: '#252525',
            pointFormat: '<span style="color:{series.color}">{series.name}</span>:  <span style="color:#fff;font-weight: bold;">{point.y:.2f}</span><br/>',
            shared: false,         //折线图提示单个显示false 全部显示true
            crosshairs: true,
            crosshairs: {

                width: 1,
                color: "#CCC",
                dashStyle: "longdash"
            }
        },
        xAxis: {
            tickLength: 1,
            categories: '',//data.x.data,//eval(data[0].categories[0].title),
            title: {
                text: null
            }
        },
        yAxis: {
            lineWidth: 1,// Y轴的宽度
//					min: 0,
            title: {
                text: null,
                align: 'high'
            }
        },
        plotOptions: {
            series: {
                marker: {
                    symbol: 'circle',
                    radius: 3.5,
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            symbolWidth: 25,
            itemMarginBottom: 5,
            borderWidth: 0,
            x: -10,
            y: -10,
            shadow: false,
            enabled: true,
            itemStyle: {
                color: 'rgb(128, 128, 128)',
                fontWeight: 'lighter'
            }
        },
        credits: {
            enabled: false
        },
        series: '',//data.y//eval(data[1].series[0].name)
    };
    switch (data.graph) {

        case 'solid_line' ://实心线性图
            params.chart.type = 'line';
            params.yAxis = {
                minPadding: 0,
                title: {
                    text: null
                },
            }
            break;
        case 'doubleY_solid_line' ://实心线形(双Y轴)图
            params.chart.type = 'line';
            params.chart.zoomType = 'xy';
            break;
        case 'solid_xline' ://实心线性图
            params.chart.type = 'line';
            params.yAxis = {
                minPadding: 0,
                title: {
                    text: null
                },
            },
                params.xAxis = {
                    tickLength: 1,
                    labels: {
                        rotation: -45,
                        align: 'right'
                    }
                }
            break;
        case 'reversed' ://Y轴倒序
            params.chart.type = 'line';
            params.yAxis = {
                reversed: true,
                minPadding: 0,
                title: {
                    text: null
                },
            }
            break;
        case 'horizontal_bar' ://横向柱状图
            params.chart.type = 'bar';
            params.legend.enabled = false;
            params.plotOptions = {
                series: {
                    dataLabels: {
                        enabled: true,
                        color: 'rgb(128, 128, 128)',
                        align: 'outside',
                    },
                    pointWidth: 20
                }
            },
                params.yAxis = {
                    lineWidth: 1,
                    title: {
                        text: null
                    },
                }
            break;

        case 'stack_bar' ://堆叠柱状图
            params.chart.type = 'column';
            params.colors = ['#b2d235', '#ffe600'];
            params.xAxis = {
                tickLength: 1,
                labels: {
                    rotation: -45,
                    align: 'right'
                },
            },
                params.yAxis = {
                    tickPixelInterval: 70,
                    title: {
                        text: null
                    },
                }
            params.plotOptions = {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                },
                series: {
                    pointWidth: 20
                }
            }
            params.yAxis.reversedStacks = false;
            break;

        case 'dcolumn_bar' ://双柱状图
            params.chart.type = 'column';
            params.colors = ['#b2d235', '#ffe600'];
//            params.plotOptions = {
//                column: {
//                    pointPadding:  0,
//                },
//            };
            break;
        case 'dcolumn_xtilt_bar':
            params.chart.type = 'column';
            params.colors = ['#b2d235', '#ffe600'];
            params.xAxis = {
                tickLength: 1,
                labels: {
                    rotation: -45,
                    align: 'right'
                }
            },
                params.plotOptions = {
                    column: {
                        pointPadding: 0,
                    },
                };
            params.yAxis = {
                lineWidth: 0,
                title: {
                    enabled: false
                }
            }
            break;
        case '2Dpie':
            params.chart.type = 'pie';
            params.colors = ['#b2d235', '#8dc63f', '#ffe600', '#fcb515', '#939598', '#20c4f4', '#02abe3', '#f48587'];
            params.plotOptions = {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#666666',
                    }
                }
            }

            break;
        case 'hollow_line' ://空心线性图
            params.chart.type = 'line';
            params.plotOptions = {
                line: {
                    marker: {
                        symbol: 'circle',
                        radius: 3,
                        fillColor: 'rgb(255, 255, 255)',
                        lineColor: null,//Highcharts.getOptions().colors['i'],
                        lineWidth: 1,
                    },

                }
            };
            params.yAxis = {
                tickPixelInterval: 70,
                minPadding: 0,
                title: {
                    text: null
                },
            }
            break;
        case 'mcolumn_bar' ://多柱状堆叠图
            params.chart.type = 'column';
            params.plotOptions = {
                column: {
                    stacking: 'percent',
                    dataLabels: {
                        enabled: true,
                        inside: true,
                        overflow: true,
                        padding: 0,
                        borderWidth: 0,
                        format: '{point.percentage:.0f}%',
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'rgb(128, 128, 128)',
                    }
                },
                series: {
                    pointWidth: 35,
                }
            }
            params.yAxis = {
                tickPixelInterval: 50,
                labels: {
                    format: '{value}%',
                },
                title: {
                    text: null,
                    enabled: false
                }
            }
            params.xAxis = {
                labels: {
                    formatter: function () {
                        return this.value.substr(0, 5);
                    }
                }
            },
                params.yAxis.reversedStacks = false;
            break;
        case 'hcolumn_bar' ://横向柱状堆叠图
            params.chart.type = 'bar';
            params.yAxis = {
                lineWidth: 1,
                tickPixelInterval: 150,
                labels: {
                    format: '{value}%'
                },
                title: {
                    enabled: false
                }
            }
            params.xAxis.reversed = 'true';
            params.plotOptions = {
                dataLabels: {
                    enabled: true,
                    inside: true,
                },
                series: {
                    stacking: 'percent',
                    pointWidth: 20,
                    dataLabels: {
                        enabled: true,
//                            overflow: false,
                        format: '{point.percentage:.0f}%',
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'rgb(128, 128, 128)'
                    }
                },
            }
            params.yAxis.reversedStacks = false;
            break;

        case 'single_bar' ://单柱状
            params.chart.type = 'column';
            params.legend.enabled = false;
            params.xAxis.labels = {
                tickLength: 1,
                rotation: -45,
                align: 'right'
            },
                params.yAxis = {
                    lineWidth: 0,
                    title: {
                        enabled: false
                    }
                }
            break;
        case 'imgsingle_bar' ://单柱状
            var categoryLinks = {
                '19岁及以下 ': 'http://180.169.19.166/graph_html5/js/img/19.png',
                '20～29岁 ': 'http://180.169.19.166/graph_html5/js/img/20~29.png',
                '30～39岁 ': 'http://180.169.19.166/graph_html5/js/img/30~39.png',
                '40～49岁 ': 'http://180.169.19.166/graph_html5/js/img/40~49.png',
                '50岁及以上 ': 'http://180.169.19.166/graph_html5/js/img/50.png',
            };
            params.chart.type = 'column';
            params.legend.enabled = false;
            params.xAxis.labels = {
                useHTML: true,
                formatter: function () {
                    return '<img src="' + categoryLinks[this.value] + '" width=50px>' + '<br />' + this.value
                },
                tickLength: 1,
                align: 'center'
            },
                params.plotOptions = {
                    dataLabels: {
                        enabled: true,
                        inside: true,
                    },
                    column: {
                        stacking: 'percentage'
                    },
                    series: {
                        pointWidth: 50,
                        dataLabels: {
                            enabled: true,
                            overflow: false,
                            format: '{point.y:.2f}%',
                            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'rgb(128, 128, 128)'
                        }
                    }
                },
                params.yAxis = {
                    max: 100,
                    lineWidth: 0,
                    title: {
                        enabled: false
                    },
                    labels: {
                        formatter: function () {
                            return this.value + '%';
                        }
                    },
                    opposite: true
                }
            break;
        case '2Dmpie':
            params.chart = {
                type: 'pie',
                events: {
                    load: function () {
                        $(".highcharts-tooltip span").css({
                            'background-color': '#252525',
                            'border': '1px solid #252525',
                            'borderRadius': '8px',
                            'color': '#ffffff',
                            'fontWeight': 'bold',
                            'opacity': '0.9',
                            'zIndex': '9999'
                        });
                    }
                }
            },
                params.yAxis = {
                    title: {
                        text: null
                    }
                }
            break;
        default:
            break;
    }

    function formatChar(d_data) {
        callback && callback(d_data);
        if (d_data.setParam) {
            var unit = d_data.setParam[0].unit ? d_data.setParam[0].unit : '万人';
            var yReversed = d_data.setParam[0].yReversed ? d_data.setParam[0].yReversed : false;
            var xRotation = d_data.setParam[0].xRotation ? d_data.setParam[0].xRotation : 0;
            var xStep = d_data.setParam[0].xStep ? d_data.setParam[0].xStep : 0;
            var toolshared = d_data.setParam[0].toolshared ? d_data.setParam[0].toolshared : false;
            params.yAxis = {
                reversed: yReversed,
                minPadding: 0,
                title: {
                    text: null
                }
            }
//            params.xAxis={
//                labels:{
//                    overflow:false,//自动区分
//                    staggerLines:1,//1行显示
//                    rotation: d_data.setParam[0].xRotation,
//                },
//            }
            params.xAxis = {    //设置间隔数和倾斜角度
                labels: {
                    rotation: d_data.setParam[0].xRotation,
                    step: d_data.setParam[0].xStep
                }
            }
            params.tooltip = {
                style: {
                    color: '#fff',
                    opacity: 0.9,
                },
                borderWidth: 0,
                borderRadius: 8,
                headerFormat: '<span style="font-size: 15px">{point.key}</span><br/>',
                backgroundColor: '#252525',
                pointFormat: '<span style="color:{series.color}">{series.name}</span>:  <span style="color:#fff;font-weight: bold;">{point.y:.2f}(' + unit + ')</span><br/>',
                shared: toolshared,
                crosshairs: true,
                crosshairs: {
                    width: 1,
                    color: "#CCC",
                    dashStyle: "longdash"
                }
            }
            if (data.graph == "mcolumn_bar" || data.graph == "hcolumn_bar") {
                params.tooltip = {
                    style: {
                        color: '#fff',
                        opacity: 0.9,
                    },
                    borderWidth: 0,
                    borderRadius: 8,
                    headerFormat: '<span style="font-size: 15px">{point.key}</span><br/>',
                    backgroundColor: '#252525',
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>:  <span style="color:#fff;font-weight: bold;">{point.y:.2f}(' + unit + ') ({point.percentage:.0f}%)</span><br/>',
                    shared: true,
                }
            }
        }
        if (data.graph == "mcolumn_bar" || data.graph == "hcolumn_bar") {
            params.tooltip = {
                style: {
                    color: '#fff',
                    opacity: 0.9,
                },
                borderWidth: 0,
                borderRadius: 8,
                headerFormat: '<span style="font-size: 15px">{point.key}</span><br/>',
                backgroundColor: '#252525',
                pointFormat: '<span style="color:{series.color}">{series.name}</span>:  <span style="color:#fff;font-weight: bold;">{point.y:.2f} ({point.percentage:.2f}%)</span><br/>',
                shared: true,
            }
        }
        if (data.graph == '2Dpie') {
            var n = [];
            for (var i = 0; i < d_data.x.data.length; i++) {
                var y = [];
                y[0] = d_data.x.data[i];
                y[1] = d_data.y[0].data[i];
                n[i] = y;
            }
            d_data.y[0].data = n;
        }
        if (data.graph == 'horizontal_bar') {
            var y = [];
            y[0] = d_data.y;
            d_data.y = y;
        }
        params.xAxis.categories = d_data.x.data;
        params.series = d_data.y;
        if (data.graph == 'doubleY_solid_line') {
            var colors = Highcharts.getOptions().colors;
            if (!d_data.y[0].unit) {
                d_data.y[0].unit = "";
            }
            ;
            if (d_data.y[1]) {
                if (!d_data.y[1].unit) {
                    d_data.y[1].unit = "";
                }
            }

            params.series = [{
                name: d_data.y[0].name,
                yAxis: 0,
                color: colors[0],
                data: d_data.y[0].data,
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>:  <span style="color:#fff;font-weight: bold;">{point.y:.2f} ' + d_data.y[0].unit + '</span><br/>',
                }
            }];
            params.yAxis = [{ // Primary yAxis
                minPadding: 0,
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} ' + d_data.y[0].unit,
                },
            }]
            if (d_data.y.length > 1) {
                params.series[1] = {
                    name: d_data.y[1].name,
                    yAxis: 1,
                    color: colors[3],
                    data: d_data.y[1].data,
                    tooltip: {
                        pointFormat: '<span style="color:{series.color}">{series.name}</span>:  <span style="color:#fff;font-weight: bold;">{point.y:.2f} ' + d_data.y[1].unit + '</span><br/>',
                    }
                },
                    params.yAxis[1] = { // Secondary yAxis
                        minPadding: 0,
                        title: {
                            text: null,
                        },
                        labels: {
                            format: '{value} ' + d_data.y[1].unit,
                        },
                        opposite: true
                    }
            }
            params.xAxis.categories = d_data.x.data;
            params.tooltip = {
                shared: true, //公用一个提示框
                style: {
                    color: '#fff',
                    opacity: 0.9,
                },
                borderWidth: 0,
                borderRadius: 8,
                headerFormat: '<span style="font-size: 15px">{point.key}</span><br/>',
                backgroundColor: '#252525',
                crosshairs: true,
                crosshairs: {
                    width: 1,
                    color: "#CCC",
                    dashStyle: "longdash"
                }
            }
        }
        ;
        if (data.graph == '2Dmpie') {
            var categoryLinks = {
                '男': 'http://180.169.19.166/graph_html5/js/img/man.png',
                '女': 'http://180.169.19.166/graph_html5/js/img/woman.png',
            };
            if (d_data.x.data[0] != '男' || d_data.x.data[1] != '女') {
                alert('数据格式不正确！');
                return false;
            }
            ;
            var colors = Highcharts.getOptions().colors;
            color = ['#ebeffd', '#fde9e9'],
                categories = d_data.x.data;
            data = [{
                y: d_data.y[0].data[0],
                color: colors[10],
                drilldown: {
                    name: d_data.y[0].name,
                    categories: [d_data.x.data[0]],
                    data: [d_data.y[0].data[0]]
                }
            }, {
                y: d_data.y[0].data[1],
                color: colors[11],
                drilldown: {
                    name: d_data.y[0].name,
                    categories: [d_data.x.data[1]],
                    data: [d_data.y[0].data[1]]
                }
            }];
            var browserData = [];
            var versionsData = [];
            for (var i = 0; i < data.length; i++) {
                browserData.push({
                    name: categories[i],
                    y: data[i].y,
                    color: color[i]
                });

                for (var j = 0; j < data[i].drilldown.data.length; j++) {
                    var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5;
                    versionsData.push({
                        name: data[i].drilldown.categories[j],
                        y: data[i].drilldown.data[j],
                        color: data[i].color
                    });
                }
            }
            ;
            params.tooltip = {
                style: {
                    color: '#fff',
                    opacity: 0.9,
                    padding: 0
                },
                borderRadius: 20,
                borderWidth: 0,
                shadow: true,
                useHTML: true,
                formatter: function () {
                    return '<div class="tooltip" style="padding:8px">' + '<a style="font-size: 15px">' + this.point.name + '</a>' + '<br />' + '<b>' + this.series.name + '： ' + Highcharts.numberFormat(this.y) + '</b></div>';// ' + Highcharts.numberFormat(this.percentage, 2) + '%
                }
            },
                params.plotOptions = {
                    pie: {
                        shadow: false,
                        borderWidth: 5,
                        center: ['50%', '50%'],
                        startAngle: (270 - (d_data.y[0].data[0] / (d_data.y[0].data[0] + d_data.y[0].data[1])) * 180)
                    }
                };
            params.series = [{
                name: d_data.y[0].name,
                data: browserData,
                size: '60%',
                dataLabels: {
                    distance: -1,
                    enable: true,
                    color: 'white',
                    format: '{point.percentage:.2f}%'
                }
            }, {
                name: d_data.y[0].name,
                data: versionsData,
                size: '82%',
                innerSize: '46%',
                dataLabels: {
                    zIndex: 1,
                    enabled: true,
                    useHTML: true,
                    connectorWidth: 0,
                    distance: 30,
                    inside: true,
                    y: -15,
                    formatter: function () {
                        return '<img src="' + categoryLinks[this.point.name] + '">'
                    },
                }
            }];
        }
        var num = (d_data.y).length;
        if (data.graph == 'imgsingle_bar') {
            var total = 0;
            for (var i = 0; i < d_data.y[0].data.length; i++) {
                total += d_data.y[0].data[i];
            }
            params.series[0].data = [{y: d_data.y[0].data[0] / total * 100, extra: d_data.y[0].data[0]},
                {y: d_data.y[0].data[1] / total * 100, extra: d_data.y[0].data[1]},
                {y: d_data.y[0].data[2] / total * 100, extra: d_data.y[0].data[2]},
                {y: d_data.y[0].data[3] / total * 100, extra: d_data.y[0].data[3]},
                {y: d_data.y[0].data[4] / total * 100, extra: d_data.y[0].data[4]}];
            if (d_data.x.data[0] != "19岁及以下 " || d_data.x.data[1] != "20～29岁 " || d_data.x.data[2] != "30～39岁 " || d_data.x.data[3] != "40～49岁 " || d_data.x.data[4] != "50岁及以上 ") {
                alert('数据格式不正确！');
                return false;
            }
            params.tooltip = {
                shared: true,
                style: {
                    color: '#fff',
                    opacity: 0.9,
                },
                borderWidth: 0,
                borderRadius: 8,
                headerFormat: '<span style="font-size: 15px">{point.key}</span><br/>',
                backgroundColor: '#252525',
                crosshairs: false,
                pointFormat: '<span style="color:{series.color}">{series.name}</span>:  <span style="color:#fff;font-weight: bold;">{point.extra:.2f}</span><br/>',
            }
        }
        ;
        if (data.graph != '2Dpie') {
            switch (num) {
                case 1:
                    params.colors = ['#b2d235'];
                    break;
                case 2:
                    if (data.graph == 'stack_bar') {
                        params.colors = ['#ffe600', '#b2d235'];
                    }
                    if (data.graph == '2Dmpie') {
                        params.colors = ['#7cb5ec', '#f15c80'];
                    }
                    params.colors = ['#b2d235', '#ffe600'];
                    break;
                case 3:
                    params.colors = ['#b2d235', '#ffe600', '#939598'];
                    break;
                case 4:
                    params.colors = ['#b2d235', '#8dc63f', '#ffe600', '#939598'];
                    break;
                case 5:
                    params.colors = ['#b2d235', '#8dc63f', '#ffe600', '#b1b4b6', '#20c4f4'];
                    break;
                case 6:
                    params.colors = ['#b2d235', '#8dc63f', '#ffe600', '#b1b4b6', '#20c4f4', '#f48587'];
                    break;
                case 7:
                    params.colors = ['#b2d235', '#8dc63f', '#ffe600', '#fcb515', '#b1b4b6', '#20c4f4', '#f48587'];
                    break;
                case 8:
                    params.colors = ['#b2d235', '#8dc63f', '#ffe600', '#fcb515', '#939598', '#20c4f4', '#02abe3', '#f48587'];
                    break;
                case 9:
                    params.colors = ['#b2d235', '#8dc63f', '#ffe600', '#fcb515', '#b1b4b6', '#939598', '#20c4f4', '#02abe3', '#f48587'];
                    break;
                case 10:
                    params.colors = ['#b2d235', '#8dc63f', '#ffe600', '#fcb515', '#b1b4b6', '#939598', '#20c4f4', '#02abe3', '#f48587', '#f15b61'];
                    break;
            }
        }
        obj.highcharts(params);
    }

    if (data.type == 'data') {
        var d_data = typeof data.data == 'object' ? data.data : eval('(' + data.data + ');');
        formatChar(d_data);
        return;
    }

    $.ajax({
        type: data.type || 'get',
        url: data.url,
        data: data.params,
        dataType: 'json',
//                jsonp:'jsonp_callback',
        beforeSend: function (data) {
//           obj.css({'height': '300px';'margin-top': '10%;'});
            obj.html('<div style="text-align: center;height: 300px;"><img style="margin-top:130px;" src="http://180.169.19.166/graph_html5/js/img/loading.gif" border="0" /></div>');
        },
        success: function (d_data) {

            formatChar(d_data);
        },
        error: function (err) {
            alert('ajax error');
        }
    });
}
