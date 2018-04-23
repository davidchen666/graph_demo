(function (window) {
    var colorRgb = function (sColor, Opacity) {
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "rgba(" + sColorChange.join(",") + "," + Opacity + ")";

    };
    //基本配置
    // var legendTextstyleColor = '#999';              //组件字体颜色
    var animationDuration = '1500';                 //动画速度
    var backgroundColor = '#000';                  //图表背景颜色
    var titleColor = '#333';                        //标题字体颜色
    var subtitleColor = '#999';                     //副标题字体颜色
    var markTextColor = '#333';                     //标签字体颜色
    var outWidth = 0;                                 //描边宽度(粗细)

    //视觉映射
    var visualMapMaxColor = '#11ba89';              //视觉映射颜色最大值
    var visualMapLeastColor = '#b3e9d9';            //视觉映射最小值

    //坐标轴
    var axisLineColor = '#c4c4c4';                 //轴线颜色
    var axisTickColor = '#c4c4c4';                 //轴刻度颜色
    var axisLabeColor = '#333333';                 //轴字体颜色
    var splitLineColor = '#eee';                    //网格(分隔线)颜色
    var splitAreaLightColor = '#fff';               //网格（分隔区域颜色）填充色（浅）
    var splitAreaDeepColor = '#eee';               //网格填充色（深）
    var splitAreaOpacity = '0.2';                   //网格透明度

    //图例主色
    var legendbackgroundColor = '#333';            //图例主色

    //工具箱
    var toolboxColor = '#999';                      //工具箱图标颜色
    var toolboxEmpasisColor = '#11ba89';          //工具箱悬停范围填充颜色

    //提示框
    var tooltipAxisColor = '#c4c4c4';                      //提示框指示线颜色
    var tooltipAxisWidth = 1;                               //提示框指示线宽度

    //时间轴(dataZoom组件)
    var timelineItemColor = '#c4c4c4';                     //时间轴标记颜色
    var timelineItemColorE = '#11ba89';                    //时间轴标记悬停颜色
    var timelineCheckColor = '#11ba89';                    //时间轴标记选中范围填充颜色
    var timelineCheckBorderColor = '#732FC3';             //时间轴标记选中描边颜色
    var timelineItemBorderNormalopacity = '0.3';             //时间轴标记选中描边透明度
    var timelineItemBorderWidth = '1px';                   //时间轴标记描边宽度
    var timelineLineColor = '#c4c4c4';                      //时间轴主轴颜色
    var timelineLineWidth = '1px';                          //时间轴主轴宽度
    var timelineControlColor = '#999';                     //时间轴控件填充色
    var timelineControlBorderColor = '#999';              //时间轴控件描边颜色
    var timelineControlWidth = '0.5';                        //时间轴控件宽度
    var timelineLabelColor = '#333';                       //时间轴文字颜色

    //数据缩放
    var datazoomBackgroundColor = '#fff';      //数据缩放区域填充颜色
    var datazoomDataColor = '#eee';     //数据背景色
    var datazoomFillColor = '#b3e9d9';   //填充色
    var datazoomHandleColor = '#11ba89';   //控制手柄色
    var datazoomHandleWidth = 100;          //控制手柄大小（宽度）
    var datazoomLabelColor = '#11ba89';   //文字颜色
    //公共样式end

    //定义变量接收外部主题（json文件）
    //切换主题
    //定义主题变量
    var dataThenme = [];
    //谛听彩色
    dataThenme['ml'] = {
        "version": 1,
        "themeName": "DT",
        "theme": {
            "seriesCnt": "1",
            "backgroundColor": "rgba(0, 0, 0, 0)",
            "titleColor": "#333",
            "subtitleColor": "#999999",
            "textColorShow": false,
            "textColor": "#333",
            "markTextColor": "#333333",
            "color": [
                "#11ba89",
                "#118bf6",
                "#f37676",
                "#732fc3",
                "#f89e01",
                "#098c66",
                "#50e3c2",
                "#7ed321",
                "#c1a781",
                "#c95477",
                "#87B797",
                "#005666",
                "#61b5b1",
                "#008760",
                "#a2a000",
                "#896d45",
                "#f3c81a",
                "#ef955d",
                "#a0435f",
                "#55b0d3"
            ],
            "borderColor": "#ccc",
            "borderWidth": 0,
            "visualMapColor": [
                "#11ba89",
                "#b3e9d9"
            ],
            "dataZoomColor": ["#11BA89"],
            "legendTextColor": "#333",
            "kColor": "#b3e9d9",
            "kColor0": "#11ba89",
            "kBorderColor": "#b3e9d9",
            "kBorderColor0": "#11ba89",
            "kBorderWidth": 1,
            "lineWidth": 2,
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "symbolBorderWidth": 1,
            "lineSmooth": false,
            "graphLineWidth": 1,
            "graphLineColor": "#c4c4c4",
            "mapLabelColor": "#333333",
            "mapLabelColorE": "#118bf6",
            "mapBorderColor": "#ffffff",
            "mapBorderColorE": "#ffffff",
            "mapBorderWidth": 0.5,
            "mapBorderWidthE": 1,
            "mapAreaColor": "#b3e9d9",
            "mapAreaColorE": "#b3e9d9",
            "axes": [
                {
                    "type": "all",
                    "name": "通用坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#333",
                    "axisTickShow": true,
                    "axisTickColor": "#333",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#ccc"
                    ],
                    "splitAreaShow": false,
                    "splitAreaColor": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                },
                {
                    "type": "category",
                    "name": "类目坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#c4c4c4",
                    "axisTickShow": true,
                    "axisTickColor": "#c4c4c4",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(250,250,250,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                },
                {
                    "type": "value",
                    "name": "数值坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#c4c4c4",
                    "axisTickShow": true,
                    "axisTickColor": "#c4c4c4",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(250,250,250,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                },
                {
                    "type": "log",
                    "name": "对数坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#c4c4c4",
                    "axisTickShow": true,
                    "axisTickColor": "#c4c4c4",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(250,250,250,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                },
                {
                    "type": "time",
                    "name": "时间坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#c4c4c4",
                    "axisTickShow": true,
                    "axisTickColor": "#c4c4c4",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(250,250,250,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                }
            ],
            "axisSeperateSetting": true,
            "toolboxColor": "#999",
            "toolboxEmpasisColor": "#11ba89",
            "tooltipAxisColor": "#c4c4c4",
            "tooltipAxisWidth": 1,
            "timelineLineColor": "#c4c4c4",
            "timelineLineWidth": 1,
            "timelineItemColor": "#c4c4c4",
            "timelineItemColorE": "#11ba89",
            "timelineCheckColor": "#11ba89",
            "timelineCheckBorderColor": "rgba(115,47,195,0.3)",
            "timelineItemBorderWidth": 1,
            "timelineControlColor": "#999999",
            "timelineControlBorderColor": "#999999",
            "timelineControlBorderWidth": 0.5,
            "timelineLabelColor": "#333333",
            "datazoomBackgroundColor": "rgba(255,255,255,0)",
            "datazoomDataColor": "rgba(238,238,238,1)",
            "datazoomFillColor": "#b3e9d9",
            "datazoomHandleColor": "#11ba89",
            "datazoomHandleWidth": "100",
            "datazoomLabelColor": "#11ba89"
        }
    };
    //悟空紫色主题
    dataThenme['wk_purple'] = {
        "version": 1,
        "themeName": "WK_purple",
        "theme": {
            "seriesCnt": "1",
            "backgroundColor": "rgba(0, 0, 0, 0)",
            "titleColor": "#333",
            "subtitleColor": "#999999",
            "textColorShow": false,
            "textColor": "#333",
            "markTextColor": "#333333",
            "color": [
                "#732fc3",
                "#824dd2",
                "#9067e0",
                "#9d82ef",
                "#ada1ff",
                "#c0b7ff",
                "#b7b1dd",
                "#a099d0",
                "#8a83bb",
                "#726ba4",
                "#5d5690",
                "#443c78",
                "#5a287b",
                "#70438f",
                "#885fa3",
                "#9f7bb8",
                "#b595cb",
                "#d0b5e2",
                "#d1a3f1",
                "#c085ea",
                "#aa69df",
                "#9b58d6",
                "#8b37d0",
                "#7811bd"
            ],
            "borderColor": "#ccc",
            "borderWidth": 0,
            "visualMapColor": [
                // "#732fc3",
                // "#c0b7ff"
                "#732fc3",
                "#eeeeee"
            ],
            "dataZoomColor": ["#732FC3", ],
            "legendTextColor": "#333",
            "kColor": "#c0b7ff",
            "kColor0": "#732fc3",
            "kBorderColor": "#c0b7ff",
            "kBorderColor0": "#732fc3",
            "kBorderWidth": 1,
            "lineWidth": 2,
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "symbolBorderWidth": 1,
            "lineSmooth": false,
            "graphLineWidth": "-2",
            "graphLineColor": "#c4c4c4",
            "mapLabelColor": "#333333",
            "mapLabelColorE": "#f5a623",
            "mapBorderColor": "#ffffff",
            "mapBorderColorE": "#ffffff",
            "mapBorderWidth": "0.5",
            "mapBorderWidthE": 1,
            "mapAreaColor": "rgba(192,183,255,0.3)",
            "mapAreaColorE": "#732fc3",
            "axes": [
                {
                    "type": "all",
                    "name": "通用坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#333",
                    "axisTickShow": true,
                    "axisTickColor": "#333",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#ccc"
                    ],
                    "splitAreaShow": false,
                    "splitAreaColor": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                },
                {
                    "type": "category",
                    "name": "类目坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#c4c4c4",
                    "axisTickShow": true,
                    "axisTickColor": "#c4c4c4",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(255,255,255,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                },
                {
                    "type": "value",
                    "name": "数值坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#c4c4c4",
                    "axisTickShow": true,
                    "axisTickColor": "#c4c4c4",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(255,255,255,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                },
                {
                    "type": "log",
                    "name": "对数坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#c4c4c4",
                    "axisTickShow": true,
                    "axisTickColor": "#c4c4c4",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(255,255,255,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                },
                {
                    "type": "time",
                    "name": "时间坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#333",
                    "axisTickShow": true,
                    "axisTickColor": "#333",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(255,255,255,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                }
            ],
            "axisSeperateSetting": true,
            "toolboxColor": "#999999",
            "toolboxEmpasisColor": "#732fc3",
            "tooltipAxisColor": "#c4c4c4",
            "tooltipAxisWidth": 1,
            "timelineLineColor": "#c4c4c4",
            "timelineLineWidth": 1,
            "timelineItemColor": "#c4c4c4",
            "timelineItemColorE": "#732fc3",
            "timelineCheckColor": "#732fc3",
            "timelineCheckBorderColor": "rgba(115,47,195,0.3)",
            "timelineItemBorderWidth": "1",
            "timelineControlColor": "#999999",
            "timelineControlBorderColor": "#999999",
            "timelineControlBorderWidth": 0.5,
            "timelineLabelColor": "#333333",
            "datazoomBackgroundColor": "rgba(255,255,255,0)",
            "datazoomDataColor": "#eeeeee",
            "datazoomFillColor": "rgba(192,183,255,0.3)",
            "datazoomHandleColor": "#732fc3",
            "datazoomHandleWidth": "100",
            "datazoomLabelColor": "#732fc3"
        }
    };
    //悟空彩色主题
    dataThenme['wk_colorful'] = {
        "version": 1,
        "themeName": "WK_colorful",
        "theme": {
            "seriesCnt": "1",
            "backgroundColor": "rgba(0, 0, 0, 0)",
            "titleColor": "#333",
            "subtitleColor": "#999999",
            "textColorShow": false,
            "textColor": "#333",
            "markTextColor": "#333333",
            "color": [
                "#077FB1",
                "#E4B84B",
                "#40A588",
                "#AC8957",
                "#05658D",
                "#E3C172",
                "#7858A0",
                "#1F92A8",
                "#C1A781",
                "#BB7676",
                "#87B797",
                "#005666",
                "#61B5B1",
                "#008760",
                "#A2A000",
                "#896D45",
                "#F3C81A",
                "#EF955D",
                "#A0435F",
                "#D77F99",
                "#5C9C1A",
                "#CBC900",
                "#EA7127",
                "#187486",
                "#96D359",
                "#55B0D3"
            ],
            "borderColor": "#ccc",
            "borderWidth": 0,
            "visualMapColor": [
                "#077FB1",
                "#55B0D3"
            ],
            "dataZoomColor": ["#077FB1"],
            "legendTextColor": "#333",
            "kColor": "#c0b7ff",
            "kColor0": "#732fc3",
            "kBorderColor": "#c0b7ff",
            "kBorderColor0": "#732fc3",
            "kBorderWidth": 1,
            "lineWidth": 2,
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "symbolBorderWidth": 1,
            "lineSmooth": false,
            "graphLineWidth": 1,
            "graphLineColor": "#c4c4c4",
            "mapLabelColor": "#333333",
            "mapLabelColorE": "#f5a623",
            "mapBorderColor": "#ffffff",
            "mapBorderColorE": "#ffffff",
            "mapBorderWidth": 0.5,
            "mapBorderWidthE": 1,
            "mapAreaColor": "rgba(192,183,255,0.3)",
            "mapAreaColorE": "#732fc3",
            "axes": [
                {
                    "type": "all",
                    "name": "通用坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#333",
                    "axisTickShow": true,
                    "axisTickColor": "#333",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#ccc"
                    ],
                    "splitAreaShow": false,
                    "splitAreaColor": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                },
                {
                    "type": "category",
                    "name": "类目坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#c4c4c4",
                    "axisTickShow": true,
                    "axisTickColor": "#c4c4c4",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(255,255,255,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                },
                {
                    "type": "value",
                    "name": "数值坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#c4c4c4",
                    "axisTickShow": true,
                    "axisTickColor": "#c4c4c4",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(255,255,255,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                },
                {
                    "type": "log",
                    "name": "对数坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#c4c4c4",
                    "axisTickShow": true,
                    "axisTickColor": "#c4c4c4",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(255,255,255,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                },
                {
                    "type": "time",
                    "name": "时间坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#c4c4c4",
                    "axisTickShow": true,
                    "axisTickColor": "#c4c4c4",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eeeeee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(255,255,255,0.3)",
                        "rgba(238,238,238,0.3)"
                    ]
                }
            ],
            "axisSeperateSetting": true,
            "toolboxColor": "#999",
            "toolboxEmpasisColor": "#732fc3",
            "tooltipAxisColor": "#c4c4c4",
            "tooltipAxisWidth": 1,
            "timelineLineColor": "#c4c4c4",
            "timelineLineWidth": 1,
            "timelineItemColor": "#c4c4c4",
            "timelineItemColorE": "#732fc3",
            "timelineCheckColor": "#732fc3",
            "timelineCheckBorderColor": "rgba(115,47,195,0.3)",
            "timelineItemBorderWidth": 1,
            "timelineControlColor": "#999999",
            "timelineControlBorderColor": "#999999",
            "timelineControlBorderWidth": 0.5,
            "timelineLabelColor": "#333333",
            "datazoomBackgroundColor": "rgba(255,255,255,0.3)",
            "datazoomDataColor": "rgba(238,238,238,0.3)",
            "datazoomFillColor": "#c3b7ff",
            "datazoomHandleColor": "#732fc3",
            "datazoomHandleWidth": "100",
            "datazoomLabelColor": "#732fc3"
        }
    };
    //自定义主题
    dataThenme['custom'] = {
        "version": 1,
        "themeName": "macarons",
        "theme": {
            "seriesCnt": "4",
            "backgroundColor": "rgba(0,0,0,0)",
            "titleColor": "#008acd",
            "subtitleColor": "#aaaaaa",
            "textColorShow": false,
            "textColor": "#333",
            "markTextColor": "#eeeeee",
            "color": [
                "#2ec7c9",
                "#b6a2de",
                "#5ab1ef",
                "#ffb980",
                "#d87a80",
                "#8d98b3",
                "#e5cf0d",
                "#97b552",
                "#95706d",
                "#dc69aa",
                "#07a2a4",
                "#9a7fd1",
                "#588dd5",
                "#f5994e",
                "#c05050",
                "#59678c",
                "#c9ab00",
                "#7eb00a",
                "#6f5553",
                "#c14089"
            ],
            "borderColor": "#ccc",
            "borderWidth": 0,
            "visualMapColor": [
                "#5ab1ef",
                "#e0ffff"
            ],
            "dataZoomColor": ["#2ec7c9"],
            "legendTextColor": "#333333",
            "kColor": "#d87a80",
            "kColor0": "#2ec7c9",
            "kBorderColor": "#d87a80",
            "kBorderColor0": "#2ec7c9",
            "kBorderWidth": 1,
            "lineWidth": 2,
            "symbolSize": 3,
            "symbol": "emptyCircle",
            "symbolBorderWidth": 1,
            "lineSmooth": true,
            "graphLineWidth": 1,
            "graphLineColor": "#aaaaaa",
            "mapLabelColor": "#d87a80",
            "mapLabelColorE": "rgb(100,0,0)",
            "mapBorderColor": "#eeeeee",
            "mapBorderColorE": "#444444",
            "mapBorderWidth": 0.5,
            "mapBorderWidthE": 1,
            "mapAreaColor": "#dddddd",
            "mapAreaColorE": "rgba(254,153,78,1)",
            "axes": [
                {
                    "type": "all",
                    "name": "通用坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#eeeeee",
                    "axisTickShow": true,
                    "axisTickColor": "#eeeeee",
                    "axisLabelShow": true,
                    "axisLabelColor": "#eeeeee",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#aaaaaa"
                    ],
                    "splitAreaShow": false,
                    "splitAreaColor": [
                        "#eeeeee"
                    ]
                },
                {
                    "type": "category",
                    "name": "类目坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#008acd",
                    "axisTickShow": true,
                    "axisTickColor": "#333",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": false,
                    "splitLineColor": [
                        "#eee"
                    ],
                    "splitAreaShow": false,
                    "splitAreaColor": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                },
                {
                    "type": "value",
                    "name": "数值坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#008acd",
                    "axisTickShow": true,
                    "axisTickColor": "#333",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                },
                {
                    "type": "log",
                    "name": "对数坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#008acd",
                    "axisTickShow": true,
                    "axisTickColor": "#333",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eee"
                    ],
                    "splitAreaShow": true,
                    "splitAreaColor": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                },
                {
                    "type": "time",
                    "name": "时间坐标轴",
                    "axisLineShow": true,
                    "axisLineColor": "#008acd",
                    "axisTickShow": true,
                    "axisTickColor": "#333",
                    "axisLabelShow": true,
                    "axisLabelColor": "#333",
                    "splitLineShow": true,
                    "splitLineColor": [
                        "#eee"
                    ],
                    "splitAreaShow": false,
                    "splitAreaColor": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            ],
            "axisSeperateSetting": true,
            "toolboxColor": "#2ec7c9",
            "toolboxEmpasisColor": "#18a4a6",
            "tooltipAxisColor": "#008acd",
            "tooltipAxisWidth": "1",
            "timelineLineColor": "#008acd",
            "timelineLineWidth": 1,
            "timelineItemColor": "#008acd",
            "timelineItemColorE": "#a9334c",
            "timelineCheckColor": "#2ec7c9",
            "timelineCheckBorderColor": "rgba(46,199,201,0.4)",
            "timelineItemBorderWidth": 1,
            "timelineControlColor": "#008acd",
            "timelineControlBorderColor": "#008acd",
            "timelineControlBorderWidth": 0.5,
            "timelineLabelColor": "#008acd",
            "datazoomBackgroundColor": "rgba(47,69,84,0)",
            "datazoomDataColor": "rgba(239,239,255,1)",
            "datazoomFillColor": "rgba(182,162,222,0.2)",
            "datazoomHandleColor": "#008acd",
            "datazoomHandleWidth": "100",
            "datazoomLabelColor": "#333333"
        }
    }

    //############ begin 文字换行 相关处理函数 #############
    //判断是否是中文，以及中文字符，中文返回数组，否则返回null
    var ischinese = function(_str){
        // return _str.match(/[\u4e00-\u9fa5]/g);
        return _str.match(/[\u4E00-\u9FA5\uF900-\uFA2D\uFF00-\uFFEF|\u3001]/g);
    }
    //去字符串两边的空格
    var trim=function(strings){
        return (strings||"").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"");
        //+表示匹配一次或多次，|表示或者，\s和\u00A0匹配空白字符，/^以……开头，$以……结尾，/g全局匹配,/i忽略大小写
    }

    //返回字符串的字节数中文算是2个字节，英文以及符号算1个字节
    var countnums=(function(){
        return function(_str){
            _str=trim(_str);   //去除字符串的左右两边空格
            var strlength=_str.length;
            if(!strlength){   //如果字符串长度为零，返回零
                return 0;
            }
            // var chinese=_str.match(/[\u4e00-\u9fa5]/g); //匹配中文，match返回包含中文的数组
            var chinese = ischinese(_str); //匹配中文，match返回包含中文的数组
            return strlength+(chinese?chinese.length:0); //计算字符个数
        }
    })();

    //处理字符串换行参数说明：
    // _str->需要处理的字符串
    // num->每一行最多显示的文字（已中文字符个数为准，英文的个数是中文的两倍）
    //bstr->不超过一行最大值的字符左边补充的字符串（说明如果需要补充请补充空格'  ',不需要补充则填写''）
    //maxLine->最多显示多少行，最后一行最后几个字将以...替换，默认是2行
    var getNewStr = function(_str,num,bstr,maxLine){
        var bstr = arguments[2] ? arguments[2] : '';
        var maxLine = arguments[3] ? arguments[3] : 2;
        if(!_str){
            return _str;
        }
        _str = trim(_str);//去空格
        //当前字符串的字节数目
        var _strCurrentNum = countnums(_str);
        //期望的换行字节数
        var _strHopeNum = num * 2;
        //返回新的字符串
        var newStr = '';
        //判断是否超过换行的数量
        if(_strCurrentNum > _strHopeNum){ //超过换行的数量
            var lineNum = 1;//行数
            var currentLineStrNum = 0;//当前行的字符数
            for(var i=0;i<_str.length;i++){
                // console.log(_str.charAt(i));
                var baseNum = ischinese(_str.charAt(i)) ? 2 : 1;
                currentLineStrNum += baseNum;
                //不换行
                if(currentLineStrNum < _strHopeNum){//当前行没有超过期望值
                    newStr += _str.charAt(i);
                    // console.log(newStr);
                }else if(currentLineStrNum === _strHopeNum){
                    //换行(正好满足一行期望的字符数)
                    newStr += _str.charAt(i) + '\n';
                    lineNum += 1;
                    currentLineStrNum = 0;
                    // console.log(newStr);
                }else{//超过期望值,换行操作
                    //中文包括中文字符是两位，英文以及数字是一位所以超过的这种情况只能是英文，因此需要补空格
                    // newStr = ' ' + newStr + '\n' + _str.charAt(i);
                    if(bstr){
                        newStr = bstr + newStr + '\n' + _str.charAt(i);
                    }else{
                        newStr = newStr + '\n' + _str.charAt(i);
                    }

                    lineNum += 1;
                    currentLineStrNum = baseNum;
                }
                //判断是否达到需要的字数
                if(maxLine === lineNum && ((_strHopeNum-currentLineStrNum === 2) || (_strHopeNum-currentLineStrNum === 3))){
                    newStr += '...';
                    break;
                }
            }
        }else if(_strCurrentNum === _strHopeNum){
            var lineNum = 1;//行数
            newStr = _str;
        }else{
            var lineNum = 1;//行数
            var spaceNum = _strHopeNum - _strCurrentNum;
            for (var k = 0; k < spaceNum; k++) {
                _str = bstr + _str;
            }
            newStr = _str;
        }
        // console.log('srt',newStr);
        // console.log('lineNum',lineNum);
        return newStr;
    }
    //处理换行参数说明：
    // option->option(echarts);
    // number->每一行最多显示的文字（已中文字符个数为准，英文的个数是中文的两倍）
    //axis->更改文字的轴
    function newline(option, number, axis, bstr, maxLine){
        /* 此处注意你的json是数组还是对象 */
        option[axis]['axisLabel']={
            interval: 0,
            formatter: function(params){
                return getNewStr(params,number,bstr,maxLine);
            }
        }
        return option;
    }
    var getNewTitleStr = function(tilteStr,my_width){
        //获取高度，计算截取的字符串
        console.log(tilteStr,my_width);
        var wordNum = 0;
        var newSS = '';
        wordNum = Math.round((my_width-50)/18.5);
        console.log('wordNum-->'+wordNum);
        if(tilteStr.length <= wordNum){
            newSS = tilteStr;
        }else{
            newSS = tilteStr.substr(0,wordNum) + '...';
        }
        // return getNewStr(tilteStr,wordNum,'',1);
        return newSS;
    }
    //图例换行
    var getNewLegendLine = function(legendData){
        var dataArr = legendData.data;
        var newArr = [];
        var baseNum = 5;
        var s = parseInt(dataArr.length / baseNum);
        var n = 0;
        for (var i = 1; i <= s; i++) {
            var star = (i - 1) * baseNum;
            newArr[n++] = dataArr.slice(star, star + baseNum);
        }
        var y = dataArr.length - s * baseNum;
        if (y > 0) {
            newArr[n++] = dataArr.slice(s * baseNum);
        }
        if(newArr.length <= 1){
            return legendData;
        }else{
            var newLegend = [];
            for(var j = 0; j < newArr.length; j++){
                newLegend[j] = {
                    align: legendData.align,
                    icon: legendData.icon,
                    itemGap: legendData.itemGap,
                    itemHeight: legendData.itemHeight,
                    itemWidth: legendData.itemWidth,
                    left: legendData.left,
                    orient: legendData.orient,
                    pageButtonGap: legendData.pageButtonGap,
                    right: legendData.right,
                    selected: legendData.selected,
                    selectedMode: legendData.selectedMode,
                    top: legendData.top,
                    type: legendData.type,
                    data: newArr[j]
                };
                if(j > 0){
                    newLegend[j].top = newLegend[j-1].top + 20;
                }
            }
            return newLegend;
        }
    }
    //############ end 文字换行 相关处理函数 ############


    window.graph_ajax = function ($, echarts, params, callback) {
        // console.log($, echarts, params, callback = null)
        console.log('option--->',params.option)
        console.log('element---->',params.element)
        var data = params.option;
        var obj = params.element;
        var graphdata = {};
        graphdata = data.data
        //console.log(data)
        var d_data = data.data;
        //定义图表类型
        var graph_type = [
            'ring',
            'wordcloud1',
            'wordcloud',
            'heapmap',
            'line',
            'k',
            'area',
            'gauge',
            'clustered_bar',
            'bar-y-category',
            'bar-y-category-stack',
            'scatter',
            'linemaker',
            'stacked_column',
            'scatter-relationship',
            'stacked_bar',
            'pictorialline',
            'bar-y-contrast',
            'bar-y-value',
            'line-bar',
            'stack-area',
            'bar',
            'bar-average',
        ];
        if ($.inArray(data.graph, graph_type) == -1) {
            alert('暂无该图表类型');
            return false;
        }
        var themename = data.theme;
        // var themename='wk_colorful';
        var echartsTheme = dataThenme[themename].theme;

        // 调用echarts.registerTheme()注册主题
        echarts.registerTheme('DT', echartsTheme)

        //对网页自适应进行判断;grid
        // var tTop = 21.5;
        var tTop = 0;
        //主标题下边距,24
        var tLeft = 0;
        //主标题和副标题之间间隔
        var sItemGap = 10;
        //备注1和备注2之间的间距
        var rItemGap = 5;
        //备注下边距
        var rBottom = 4;
        //备注左边距
        var rLeft = 0;
        //下载按钮上边距
        // var fTop = 22;
        var fTop = 0;
        //下载按钮右边距
        var fRight = 15;
        //legend左边距
        var lLeft = 23;
        //legend上边距
        var lTop = 97;
        //legend下边距
        var lBottom = 235;
        //legend右边距
        var lRight = 24;
        //gird下边距
        var gBottom = 95;
        // var gBottom = '17.33%';
        var gLeft = 80;
        // var gLeft = '11.06%';
        var gTop = 105;
        // var gTop= '19.09%';
        var gRight = 30;
        //分页按钮与legend间距
        var lpGap = 30;
        //dataZoom上间距
        var dzTop = 457;
        //dataZoom右间距
        var dzRight = 26;
        //dataZoom左间距
        var dzLeft = 60;
        //dataZoom右间距
        var dzRight = 30;
        //dataZoom高
        var dzHeight = 30;
        // var gRight = '0.04%';
        //标签和坐标轴的间距
        var xMargin = 12;
        //标签和坐标轴的间距
        var yMargin = 12;
        //圆心在x轴位置
        var ring_center_x = 50;
        //圆心在y轴位置
        var ring_center_y = 51;
        //圆环图内半径
        var ring_center_i = 40;
        //圆环图外半径
        var ring_center_n = 63;
        //x轴位置legend占比1.9%,y轴legend占比2.59%
        //legend在内半径占比12.72%,legend在外半径占比8.23%

        if (d_data.legend == 5) {
            $('#' + obj).height($('#' + obj).height() + 10)
            gTop += 21;
            gBottom += 16;
            ring_center_y -= 0.3;
        }
        //legend(圆角矩形)在右上角时间距
        if (d_data.legend == 1) {
            $('#' + obj).height($('#' + obj).height() + 10)
            gTop += 22;
            gBottom += 19;
            lTop -= 16;
            rBottom += 2;
            gLeft -= 9;

        } else if (typeof(d_data.legend) == "undefined") {
            $('#' + obj).height($('#' + obj).height() - 62.5)
            gTop += 55;
            gBottom += 73.5;
            gLeft -= 17;
            rBottom += 42;
            dzTop -= 29;
        }
        //legend在靠左垂直时间距
        if (d_data.legend == 2) {
            //$('#' + obj).height($('#' + obj).height() +60);
            // lTop +=136;
            // lTop +=60;
            lLeft -= 19;
            rBottom += 2;
            rItemGap += 2;
            //rBottom -= 35;
            ring_center_y -= 5.5;
            dzTop -= 53;
        } else if (typeof(d_data.legend) == "undefined") {
            $('#' + obj).height($('#' + obj).height() + 92);
            gBottom -= 33;
            gTop -= 21;
            rBottom -= 80;
            ring_center_y -= 0.1;
        }
        //legend（方形）在右上角时间距
        if (d_data.legend == 3) {
            $('#' + obj).height($('#' + obj).height() + 37);
            lTop += 2;
            gTop += 33;
            gLeft -= 23;
            gBottom += 26;
            //备注下边距
            rBottom -= 5.5;
            rItemGap -= 2;
            //圆环的内半径、外半径、x轴和y轴移动的单位都是%
            ring_center_y -= 0.7;
        } else if (typeof(d_data.legend) == "undefined") {
            ring_center_y += 0.1;
        }
        //top=105水平方形legend
        if (d_data.legend == 4) {

            //console.log('joson4: ' + $('#' + obj));
            // lTop -= 43;
            // lTop -= 53;
            lTop = 60+3; //大标题与次标题间隔为30px
            lLeft += 75;
            // gTop += 15;
            // gTop -= 16;
            gTop = 60+5+20;
            gLeft -= 9;
            // rBottom += 2;
            rBottom = 60;
            lpGap += 20;

            //当高度不存在时，计算高度值
            if(!data.data.height){
                var dataNum = data.data.x.data.length;
                if(typeof(d_data.graphic) == 'undefined'){ //不存在水印
                    $('#' + obj).height(200 + dataNum * 68 + 70 -60);
                    gTop = 60+20+6;
                    if(dataNum === 1){
                        gTop = 60+20+4;
                        // $('#' + obj).height($('#' + obj).height() - 9);
                    }
                    rBottom = 0;
                    lpGap += 30;
                    // gBottom = 40;
                    gBottom = 30;
                }else{//存在水印
                    $('#' + obj).height(200 + dataNum * 68 + 70);
                }
            }
            $('#' + obj).height($('#' + obj).height() - 70);

        } else if (typeof(d_data.legend) == "undefined") {
            $('#' + obj).height($('#' + obj).height() - 41);
            gTop -= 13;
            rBottom += 40;
        }
        //设置位置--条形图
        if(data.graph && data.graph === "clustered_bar"){
            //当高度不存在时，计算高度值
            rBottom = 0;
            gTop = 60+30+30 + 1;
            gBottom = 90 + 30 + 3;
            gRight += 10;
            if(!data.data.height && data.data.x){
                var data_Num = data.data.x.data.length;
                if(typeof(d_data.graphic) == 'undefined'){ //不存在水印
                    $('#' + obj).height(130 + data_Num * 42 + 20);
                    // gTop = 60+20;
                    // rBottom = 0;
                    // lpGap += 130;
                    // gBottom = 40;
                }else{//存在水印
                    $('#' + obj).height(130 + data_Num * 42 + 20);
                }
            }
        }
        //设置位置--圆环图
        if(data.graph && data.graph === "ring"){
            gTop = 30;
            //圆环图高度固定
            if (typeof(d_data.dataZoom) == "undefined"){
                $('#' + obj).height(472 + 20);
            }else{
                $('#' + obj).height(472);
            }
            gBottom = 10;
            rBottom = 0;
            // //圆环图内半径
            ring_center_i = 110;
            // //圆环图外半径
            ring_center_n = 170;
            //距离轴的距离
            ring_center_y = 50.6;
            // gBottom = 30;
        }

        //设置位置--仪表盘图
        if(data.graph && data.graph === "gauge"){
            gTop = 30;
            //当高度未定义，设置高度
            if(!data.data.height){
                $('#' + obj).height(478 + 20);
            }
            gBottom = 100;
            rBottom = 0;
            // //圆环图内半径
            ring_center_i = 140;
            // //圆环图外半径
            ring_center_n = 230;
            //距离y轴的距离
            ring_center_y = 51.9;
        }

        //设置位置--条形象形图
        if(data.graph && data.graph === "pictorialline"){
            gTop = 66;
            gBottom = 100;
            //当高度未定义，设置高度
            if(!data.data.height){
                $('#' + obj).height(340 + 20);
            }
        }

        //主标题未定义/Legend未定义时间距
        if (typeof(d_data.bigTitle) == "undefined" && d_data.legend == 5) {
            $('#' + obj).height($('#' + obj).height() - 22);
            gTop -= 25;
            rBottom -= 20;
        } else if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.legend) == "undefined") {
            $('#' + obj).height($('#' + obj).height() + 148);
            rBottom -= 98;
        }
        //主标题未定义/legend在右上角水平位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && (d_data.legend == 1)) {
            $('#' + obj).height($('#' + obj).height() - 134);
            gTop -= 24;
            gBottom += 113;
            lTop += 17;
            rItemGap -= 18;
            rBottom += 93;
        } else if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.legend) == "undefined") {
            $('#' + obj).height($('#' + obj).height() - 134);
            gTop += 20;
            gBottom += 119;
            lTop += 17;
            rBottom += 143;
        }
        //主标题未定义/legend（方形）在靠左垂直位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && d_data.legend == 2) {
            $('#' + obj).height($('#' + obj).height() + 48);
            lTop -= 6;
            rItemGap -= 11;
            rBottom += 3;
            ring_center_y += 2;
        } else if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.legend) == "undefined") {
            $('#' + obj).height($('#' + obj).height() + 39);
            rBottom -= 39;
            ring_center_y -= 2.5;
        }
        //主标题未定义/legend（方形）在右上角水平位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && d_data.legend == 3) {
            $('#' + obj).height($('#' + obj).height() + 111);
            lTop += 10.5;
            rItemGap -= 11;
            rBottom += 14;
            ring_center_y += 0.1;
        } else if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.legend) == "undefined") {
            $('#' + obj).height($('#' + obj).height() + 1);
            rBottom -= 1;
            ring_center_y += 0.3;
        }
        //主标题未定义/legend（方形）在水平居中位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && d_data.legend == 4) {
            $('#' + obj).height($('#' + obj).height() + 57);
            gTop += 6;
            gBottom -= 18;
            lTop -= 4;
            rItemGap -= 18;
            rBottom += 49;
        } else if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.legend) == "undefined") {
            $('#' + obj).height($('#' + obj).height() - 28);
            gTop -= 16;
            gBottom -= 18;
            rItemGap -= 18;
            rBottom -= 7;
        }

        //主标题未定义和副标题未定义和legend未定义
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && d_data.legend == 5) {
            $('#' + obj).height($('#' + obj).height() + 43);
            gTop += 5;
            rBottom += 35;
        }
        //主标题未定义和副标题未定义和legend在右上角平行位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && d_data.legend == 1) {
            $('#' + obj).height($('#' + obj).height() - 213);
            lTop -= 11;
            gTop -= 18;
            gBottom += 146.8;
            rBottom += 88.5;
        }


        //主标题未定义/副标题未定义/legend在靠左垂直位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && d_data.legend == 2) {
            $('#' + obj).height($('#' + obj).height() - 24.3);
            lTop += 32;
            rBottom += 74;
            ring_center_y += 4;
        }

        //主标题未定义和副标题未定义和legend在右上角（方形）平行位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && d_data.legend == 3) {
            $('#' + obj).height($('#' + obj).height() - 158.5);
            lTop -= 12.8;
            rBottom -= 14;
            ring_center_y -= 1.7;
        }

        //主标题未定义/副标题未定义/legend在水平向右对齐位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && d_data.legend == 4) {
            $('#' + obj).height($('#' + obj).height() - 88);
            gTop -= 13;
            gBottom += 18;
            lTop -= 11;
            rBottom -= 34;
        }

        //主标题未定义和备注未定义和legend未定义时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && d_data.legend == 5) {
            $('#' + obj).height($('#' + obj).height() + 30);
            gTop += 16;
            gBottom -= 33;
            rBottom -= 9.7;
        }


        //主标题未定义和备注未定义和legend在水平位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && d_data.legend == 1) {
            $('#' + obj).height($('#' + obj).height() - 3);
            lTop -= 11;
            gTop += 6;
            rBottom += 21;
        }
        //主标题未定义和备注未定义和legend在靠左垂直位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && d_data.legend == 2) {
            $('#' + obj).height($('#' + obj).height() - 39);
            lTop -= 18;
            rItemGap -= 3;
            rBottom += 38;
            ring_center_y -= 5.3;
        }
        //主标题未定义和备注未定义和legend在右上角平行位置间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && d_data.legend == 3) {
            $('#' + obj).height($('#' + obj).height() - 74.5);
            lTop -= 25;
            rItemGap -= 3;
            rBottom += 12.5
            ring_center_y -= 3.2;
        }
        //主标题未定义和备注未定义和legend在水平位置间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && d_data.legend == 4) {
            $('#' + obj).height($('#' + obj).height() - 37);
            lTop -= 26.5
            gTop -= 5;
            rBottom -= 5;
        }

        //主标题未定义和副标题未定义和备注未定义和legend未定义时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && d_data.legend == 5) {
            $('#' + obj).height($('#' + obj).height() - 75);
            gTop -= 14.8;
            rBottom -= 55
        }
        else if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && d_data.legend == 5 && d_data.feature == 2) {
            $('#' + obj).height($('#' + obj).height() - 45);
            gTop -= 26;
            gBottom += 39;
        }

        //主标题未定义和副标题未定义和备注未定义和legend在右上角水平位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && d_data.legend == 1) {
            $('#' + obj).height($('#' + obj).height() + 290);
            lTop += 5;
            gTop += 37;
            gBottom -= 262;
        }
        //legend为100/只剩下图形时间距
        else if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && typeof(d_data.legend) == "undefined" && d_data.feature == 2) {
            $('#' + obj).height($('#' + obj).height() - 109);
            gTop -= 59;
            gBottom += 39;
        }
        //主标题未定义和副标题未定义和备注未定义和legend在靠左垂直位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && d_data.legend == 2) {
            $('#' + obj).height($('#' + obj).height() - 9);
            lTop -= 35;
            ring_center_y -= 4.4;
        }
        //legend为100/只剩下图形时间距
        else if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && typeof(d_data.legend) == "undefined" && d_data.feature == 2) {
            $('#' + obj).height($('#' + obj).height() + 160);
            ring_center_y -= 11.8;
        }
        //主标题未定义/副标题未定义/备注未定义/legend在右上角水平位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && d_data.legend == 3) {
            $('#' + obj).height($('#' + obj).height() + 79);
            lTop += 13;
            ring_center_y += 0.9;
        }
        //legend为100/只剩下图形时间距
        else if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && typeof(d_data.legend) == "undefined" && d_data.feature == 2) {
        }
        //主标题未定义/副标题未定义/备注未定义/legend在右上角水平位置时间距
        if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && d_data.legend == 4) {
            $('#' + obj).height($('#' + obj).height() + 2);
            gTop += 11;
            // gBottom +=25;
            lTop += 40;
        }
        //legend为100/只剩下图形时间距
        else if (typeof(d_data.bigTitle) == "undefined" && typeof(d_data.subTitle) == "undefined" && typeof(d_data.remarks) == "undefined" && typeof(d_data.legend) == "undefined" && d_data.feature == 2) {
            $('#' + obj).height($('#' + obj).height() - 42);
            gTop -= 7;
            gBottom -= 89;
        }
        //副标题未定义/legend未定义时间距
        if (typeof(d_data.subTitle) == "undefined" && d_data.legend == 5) {
            $('#' + obj).height($('#' + obj).height() - 26);
            gTop -= 40;
            rBottom += 3;
        }
        //副标题未定义/legend为1时间距
        if (typeof(d_data.subTitle) == "undefined" && d_data.legend == 1) {
            $('#' + obj).height($('#' + obj).height() - 169);
            gTop -= 50;
            gBottom += 145;
            lTop -= 25.5;
            rItemGap -= 18;
            rBottom += 145;
        }
        //副标题未定义/legend在靠左垂直位置时间距
        if (typeof(d_data.subTitle) == "undefined" && d_data.legend == 2) {
            $('#' + obj).height($('#' + obj).height() - 59.5);
            lTop -= 35;
            rBottom += 36.8;
            ring_center_y -= 4.9;
        }
        //副标题未定义/legend在右上角水平位置时间距
        if (typeof(d_data.subTitle) == "undefined" && d_data.legend == 3) {
            $('#' + obj).height($('#' + obj).height() - 35);
            lTop -= 24;
            rItemGap -= 11;
            rBottom += 23.5;
            ring_center_y -= 4.9;
        }
        //副标题未定义/legend在水平位置时间距
        if (typeof(d_data.subTitle) == "undefined" && d_data.legend == 4) {
            $('#' + obj).height($('#' + obj).height() - 35);
            gTop -= 49;
            gBottom += 18;
            lTop -= 38;
            rItemGap -= 18;
            rBottom += 25;
        }

        //dataZoom在各种情况下的样式
        if (d_data.dataZoom == 1) {
            $('#' + obj).height($('#' + obj).height() + 38);
            lTop += 15;
            gTop -= 4;
            gRight += 3;
            gBottom += 55;
            // gLeft -=2;
            dzTop -= 36;
            dzRight += 5;
            dzLeft -= 30;
            rBottom -= 1.8;
        } else if (typeof(d_data.dataZoom) == "undefined") {
            $('#' + obj).height($('#' + obj).height() - 30);
            lTop += 15;
            gTop += 32;
            gBottom += 29;
            rBottom -= 2;
        }
        if (d_data.dataZoom == 2) {
            $('#' + obj).height($('#' + obj).height() + 64);
            lLeft -= 4;
            gTop -= 2;
            gLeft -= 16;
            gBottom += 58;
            dzTop -= 42;
            dzRight += 5;
            dzLeft -= 30;
            rBottom -= 1;
        } else if (typeof(d_data.dataZoom) == "undefined") {
            $('#' + obj).height($('#' + obj).height() + 20);
            lLeft -= 4;
            gTop -= 17;
            gBottom += 20;
            gLeft -= 14;

        }
        if (d_data.dataZoom == 3) {
            $('#' + obj).height($('#' + obj).height() + 44);
            lTop += 18;
            gTop += 17;
            gBottom += 36;
            gRight -= 1;
            gLeft -= 2;
            dzTop -= 10;
            dzLeft -= 30;
            dzRight += 5;
            rBottom -= 2;
        } else if (typeof(d_data.dataZoom) == "undefined") {
            $('#' + obj).height($('#' + obj).height() - 14);
            gLeft += 12;
            gTop += 18;
            gBottom -= 20;
            // rBottom +=14;

        }
        if (d_data.dataZoom == 4) {
            $('#' + obj).height($('#' + obj).height() + 42);
            gTop -= 53;
            gBottom += 30;
            gRight += 2;
            gLeft += 1;
            dzTop -= 46;
            dzLeft -= 30;
            dzRight += 5;
        } else if (typeof(d_data.dataZoom) == "undefined") {
            $('#' + obj).height($('#' + obj).height() - 23);
            gTop -= 99;
            gBottom -= 59;
        }
        if (d_data.dataZoom == 5) {
            $('#' + obj).height($('#' + obj).height() + 36);
            gTop += 12;
            gBottom += 56;
            gLeft -= 9;
            dzTop -= 65;
            dzLeft -= 29;
            dzRight += 5;
        } else if (typeof(d_data.dataZoom) == "undefined") {
            $('#' + obj).height($('#' + obj).height() + 27);
            gTop += 62;
            gBottom += 27;

        }

        //legend未定义/只剩下图形时间距
        //console.log(echartsTheme.visualMapColor);
        //数据格式化
        var len = []
        var lenv = []
        //if (typeof(graphdata['y'].length) != "undefined") {
		if (typeof(graphdata['y'].length) != "undefined" && data.graph != 'heapmap') {
            len = graphdata['y'].length;
            lenv = graphdata['y'][0]['data'].length;
        }
        //if (data.graph != 'scatter') {
		if (data.graph != 'scatter' && data.graph != 'heapmap') {
            for (var i = 0; i < len; i++) {
                var datav = []
                for (var l = 0; l < lenv; l++) {
                    //根据主题判断数据来源,分别进行处理
                    var ynumber = graphdata['y'][i]['data'][l] + ''
                    if (themename == 'ml' && ynumber.indexOf('.') > -1) {
                        graphdata['y'][i]['data'][l] = parseFloat(ynumber.substring(0, ynumber.indexOf('.')));
                    }
                    if (themename == 'wk_purple' || themename == 'wk_colorful' && ynumber.indexOf('.') > -1) {
                        graphdata['y'][i]['data'][l] = parseFloat(ynumber.substring(0, ynumber.indexOf('.') + 11));
                    }
                }
            }
        }
        //字符串四舍五入
        //console.log(Math.round(22.73));
        //console.log(Math.round(77.27));

        //base64

        //使用echarts.init()创建图表,第二个参数即为刚才注册的主题名字。
        //console.log(graphdata);
        //接收div高和宽
        //var echartsObj = document.getElementById(obj);
        var echartsObj = window.document.getElementById(obj);
        echartsObj.style.height == "" ? echartsObj.style.height = "723px" : echartsObj.style.height = graphdata.height + 'px';
        // echartsObj.style.height = graphdata.height ? graphdata.height : "723px";
        // if(typeof(graphdata.height) == "undefined"){
        //     // echartsObj.style.height = "723px"
        //     echartsObj.style.height = "500px"
        // }else{
        //     echartsObj.style.height = graphdata.height + 'px'
        // }
        echartsObj.style.width = '100%';
        var myChart = echarts.init(echartsObj, 'DT');

        var feature = {}
        var source1 = ''
        var source2 = ''
        if (typeof(d_data.source) != "undefined") {
            source1 = d_data.source;
        }
        if (typeof(d_data.source2) != "undefined") {
            source2 = d_data.source2;
        }
        //设置动画开关
        var animation = false;
        if (typeof(d_data.animation) == "undefined") {
            animation = false;
        } else {
            animation = true;
        }
        //data形状
        var symbol = ['roundRect', 'circle', 'triangle', 'diamond', 'path://m0.75,72.94l98,-72.19l98,72.19l-37.43,116.81l-121.13,0l-37.43-116.81z', 'emptyroundRect', 'emptycircle', 'emptytriangle', 'emptydiamond', 'emptypath://m0.75,72.94l98,-72.19l98,72.19l-37.43,116.81l-121.13,0l-37.43-116.81z', ]


        //legend
        //2.legend各种情况下的位置和间距
        var legendValue = [];
        //定义公共legend
        var legend = {
            selected: {},
            // 图例布局设置为垂直（水平/垂直,默认为水平）
            orient: 'vertical',
            //图例标记和文本对齐
            align: 'auto',
            itemGap: 20,
            itemWidth: 14,
            itemHeight: 14,
            type: 'scroll',
        }
        //循环获取legend
        //设置图例开关
        //右上角圆角矩形legend
        if (d_data.legend == 5 || d_data.legend == 1) {
            //控制图例位置
            //legend水平
            legend.orient = 'horizontal';
            legend.right = lRight;
            legend.top = lTop;
            //legend超出一行时滚动
            legend.type = 'scroll';
            //获取图例数据
            for (var i = 0; i < graphdata['y'].length; i++) {
                legendValue[i] = graphdata['y'][i]['name'];
            }
            legend.data = legendValue;
            //图例自适应
            gTop += 30;
            gBottom += 12;
            gLeft -= 9;
            sItemGap -= 0;
        }
        //靠左垂直方形legend
        if (d_data.legend == 2) {
            //左垂直方形legend,适用于圆环图
            legend.orient = 'vertical';
            legend.left = lLeft;
            legend.top = "center";
            legend.icon = "rect";
            //legend超出一行时滚动
            legend.type = 'scroll';
            for (var i = 0; i < graphdata['y'].length; i++) {
                legendValue[i] = graphdata['y'][i]['name'];
            }
            legend.data = legendValue;
            //设置图例文字换行,圆环图，百分比堆叠柱状图
            legend.formatter = function(params){
                return getNewStr(params,10,'',2);
            }
        }
        //右上角水平方形legend
        if (d_data.legend == 3) {
            //控制图例位置
            //legend水平
            legend.orient = 'horizontal';
            legend.right = lRight;
            legend.top = lTop
            legend.icon = "rect";
            //legend超出一行时滚动
            legend.type = 'scroll';
            //获取图例数据
            for (var i = 0; i < graphdata['y'].length; i++) {
                legendValue[i] = graphdata['y'][i]['name'];
            }
            legend.data = legendValue;
            //图形自适应
            gTop += 19;
            gBottom += 12;
            gLeft -= 9;
            //圆环的内半径、外半径、x轴和y轴移动的单位都是%
            ring_center_y += 5.5;
            $('#' + obj).height($('#' + obj).height() + 20);
            // rBottom +=7
            rBottom -= 14.5
            //legend超出一行时滚动
            legend.type = 'scroll';
        }
        //top=105水平方形legend
        if (d_data.legend == 4) {
            //控制图例位置
            //legend水平
            legend.orient = 'horizontal';
            // legend.left = lLeft = '17.5%';
            // legend.top = lTop = '24%';
            legend.top = lTop
            legend.right = lRight;
            legend.left = lLeft;
            legend.icon = "rect";
            //legend超出一行时滚动
            legend.type = 'scroll';
            legend.pageButtonGap = lpGap;
            //获取图例数据
            for (var i = 0; i < graphdata['y'].length; i++) {
                legendValue[i] = graphdata['y'][i]['name'];
            }
            legend.data = legendValue;
            //图形自适应
        }
        //关闭legend
        if (typeof(d_data.legend) == "undefined") {
            legend = false;
        }
        //legend

        //legend可点击的开关,selectedMode默认legend可点击
        var selectedMode = false;
        if (graphdata.selectedMode == undefined) {
            legend.selectedMode = false;
        } else {
            legend.selectedMode = true;
        }

        var xaxisdata = []
        if (typeof(graphdata['x']) != "undefined") {
            for (var i = 0; i < graphdata['x']['data'].length; i++) {
                xaxisdata[i] = {
                    value: graphdata['x']['data'][i],
                    textStyle: {
                        fontSize: 14
                    }
                }
            }
        }

        //初始化
        var credit = ''
        var subCredit = ''
        var remarks = ''
        var subTitle = ''
        var bigTitle = ''
        var selectedMode = ''
        var dataZoom = ''
        var showDetail = ''
        var roam = ''
        if (typeof(d_data.remarks) != "undefined") {
            remarks = graphdata['remarks']
        }
        if (typeof(d_data.credit) != "undefined") {
            credit = graphdata['credit']
        }
        if (typeof(d_data.subCredit) != "undefined") {

            subCredit = graphdata['subCredit']
        }
        if (typeof(d_data.subTitle) != "undefined") {
            subTitle = graphdata['subTitle']
        }
        if (typeof(d_data.bigTitle) != "undefined") {
            bigTitle = graphdata['bigTitle'];
            // graphdata['bigTitle'] = getNewTitleStr(graphdata['bigTitle'],$('#' + obj).width());
            // bigTitle = getNewStr(graphdata['bigTitle'],10,'',1);
        }
        if (typeof(d_data.selectedMode) != "undefined") {
            selectedMode = graphdata['selectedMode']
        }
        if (typeof(d_data.dataZoom) != "undefined") {
            dataZoom = graphdata['dataZoom']
        }
        if (typeof(d_data.showDetail) != "undefined") {
            showDetail = graphdata['showDetail']
        }
        if (typeof(d_data.roam) != "undefined") {
            roam = graphdata['roam']
        }


        //默认显示tooltip
        var tooltip = true;
        //tooptip==2时不显示
        if (typeof(graphdata['tooltip']) == "undefined") {
            tooltip = false;
        }

        //定义公共title
        var title = [
            {
                subtextStyle: {
                    fontSize: 14,
                    color: '#999',
                    fontFamily: 'PingFangSC-Regular'
                },
                top: tTop,
                left: tLeft,
                itemGap: sItemGap,
                text: graphdata['bigTitle'],
                subtext: graphdata['subTitle'],
                fontSize: 18,
                fontFamily: "PingFangSC-Medium"
            },
            {
                text: graphdata['remarks'],
                subtext: credit + '\n\n' + subCredit,
                bottom: rBottom,
                left: rLeft,
                fontFamily: 'PingFangSC-Medium',
                itemGap: rItemGap,
                fontSize: 12,
            }
        ]

        //下载feature功能开关
        if (typeof(d_data.feature) !== "undefined") {
            feature = {
                "saveAsImage": {
                    "show": true,
                    "type": "png",
                    "backgroundColor": "#ffffff",
                    iconStyle: {
                        color:'#99999'
                    }
                }
            }
        } else if (typeof(d_data.feature) == "undefined") {
            feature = false;
        }
        //定义公共toolbox
        var toolbox = {
            //14
            itemSize: 15,
            feature: feature,
            // right: 22,
            right: fRight,
            top: fTop
        }

        //定义公共grid
        var grid = {
            top: gTop,
            right: gRight,
            bottom: gBottom,
            left: gLeft,
            // bottom: gBottom + '%',
            // top: gTop + '%',
            containLabel: true,
        };

        //设置showDetail开关
        var showDetail = true;
        if (typeof(d_data.showDetail) == "undefined") {
            showDetail = false;
        } else {
            showDetail = true;
        }


        //定义公共dz
        var dataZoom = [
            {
                //图形外缩放
                type: 'slider',
                //开启鼠标滚轮进行缩放
                // zoomOnMouseWheel:true,
                top: dzTop,
                right: dzRight,
                left: dzLeft,
                height: dzHeight,
                //拖动时显示数值
                showDetail: showDetail,
                start: 0,
                end: 100,
                //拖动时实时更新视图
                realtime: true,
                //选中范围（手柄之间）的颜色
                fillerColor: colorRgb(echartsTheme.dataZoomColor[0], .15),
                // fillerColor: echartsTheme.visualMapColor[1],
                //组件背景颜色
                backgroundColor: "rgba(255,255,255,0)",
                dataBackground: {
                    lineStyle: {
                        color: "#c4c4c4",
                    },
                    areaStyle: {
                        shadowColor: "#eeeeee",
                    }
                },
                handleStyle: {
                    color: echartsTheme.dataZoomColor[0],
                },
                handleSize: '100%',
                textStyle: {
                    color: echartsTheme.dataZoomColor[0],
                },
                borderColor: "#eeeeee",
                //当1个网页存在多个图形时,可选择控制第几个x轴
                // xAxisIndex: [0],
                // 设定为 'filter' 从而 X 的窗口变化会影响 Y 的范围。
                filterMode: 'filter',
                //设置触发视图刷新的频率。单位为毫秒（ms）。
                throttle: 100,
            },
            {
                //图形内缩放
                type: 'inside',
                //开启鼠标滚轮进行缩放
                zoomOnMouseWheel: true,
                //鼠标移动触发窗口平移
                moveOnMouseMove: true,
                throttle: 100,
                start: 0,
                end: 100,
            }
        ];
        //设置dz开关
        if (d_data.dataZoom == 1) {
            dataZoom.top = dzTop;
            dataZoom.right = dzRight;
            dataZoom.left = dzLeft;
            dataZoom.height = dzHeight;
        }
        if (d_data.dataZoom == 2) {
            dataZoom.top = dzTop;
            dataZoom.right = dzRight;
            dataZoom.left = dzLeft;
            dataZoom.height = dzHeight;
        }
        if (d_data.dataZoom == 3) {
            dataZoom.top = dzTop;
            dataZoom.right = dzRight;
            grid.top = gTop;
            grid.bottom = gBottom;
        }
        if (d_data.dataZoom == 4) {
            dataZoom.top = dzTop;
            dataZoom.right = dzRight;
            grid.top = gTop;
            grid.bottom = gBottom;
        }
        if (d_data.dataZoom == 5) {
            grid.bottom = gBottom;
            dataZoom.top = dzTop;
            dataZoom.left = dzLeft;
            dataZoom.right = dzRight;

        }
        if (typeof(d_data.dataZoom) == "undefined") {
            dataZoom = false;
        }

        // 设置水印开关
        var graphic = {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 50,
            bottom: 60,
            z: 100,
            children: [
                {
                    type: 'text',
                    left: '-62',
                    top: '80',
                    z: 100,
                    style: {
                        fill: 'rgba(0,1)',
                        text: 'Meta Insight',
                        font: 'bold 17px Microsoft YaHei',
                    }
                }
            ]
        }
        //    矩形文字水印
        if (typeof(d_data.graphic) !== 'undefined') {
            graphic = {
                type: 'group',
                rotation: Math.PI / 4,
                bounding: 'raw',
                right: 50,
                bottom: 60,
                z: 100,
                children: [
                    {
                        type: 'text',
                        left: '-62',
                        top: '8',
                        z: 100,
                        style: {
                            fill: 'rgba(0,1)',
                            text: 'Meta Insight',
                            font: 'bold 17px Microsoft YaHei',
                        }
                    }
                ]
            };
        }
        if (typeof(d_data.graphic) == 'undefined') {
            graphic = false;
        }


        //设置地图鼠标缩放和平移漫游开关
        var roam = true;
        if (typeof(d_data.roam) == "undefined") {
            roam = false;
        } else {
            roam = true;
        }

        // data.graph = 'gauge'
        // 指定图表的配置项和数据
        var option = {}
        //圆环图
        if (data.graph == 'ring') {
            var series = [];
            // var legend = [];
            var len = [];
            var sum = 0;
            var i = 0;
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }

            for (i = 0; i < len; i++) {
                sum += graphdata['y'][i]['data'][0];
            }
            var graphdataV = []
            if (typeof(graphdata['grayBar']) != "undefined") {
                for (i = 0; i < graphdata['grayBar'].length; i++) {
                    graphdataV[i] = graphdata['grayBar'][i]['index']
                }
            }
            for (i = 0; i < len; i++) {
                //如果百分比值为0时，则不在图形上显示数据
                var graph_y = true;
                if (graphdata['y'][i]['data'][0] <= 0) {
                    graph_y = false;
                } else {
                    graph_y = true;
                }
                ;
                var itemStyle = {}
                if ($.inArray(i, graphdataV) > -1) {
                    //console.log(i)
                    for (l = 0; l < graphdata['grayBar'].length; l++) {
                        if (graphdata['grayBar'][l]['index'] == i) {
                            itemStyle = {"normal": {"color": graphdata['grayBar'][l]['color']}}
                        }


                    }


                } else {
                    itemStyle = ''
                }
                series[i] = {
                    name: graphdata['y'][i]['name'],
                    value: graphdata['y'][i]['data'][0],
                    //鼠标移到扇形区域时的抖动动画效果的开关
                    hoverAnimation: false,
                    //启用防止标签重叠策略
                    avoidLabelOverlap: true,
                    "itemStyle": itemStyle,
                    label: {
                        normal: {
                            show: graph_y,
                            position: 'inside',
                            //四舍五入
                            formatter: function (params) {
                                return (params.value / sum * 100).toFixed(0)
                            },
                            fontSize: 14,
                            width: 17,
                            height: 14
                        }

                    }
                }


            }
            var z = 100;
            //用数组接收百分比处理后的数据
            var percentNum = [];
            //求百分比
            for (i = 0; i < len; i++) {
                if (i == len - 1) {
                    percentNum[i] = z
                } else {
                    //四舍五入
                    percentNum[i] = Math.round(parseFloat(yNum / sum * 100))
                    z -= percentNum[i]
                    ////console.log('这里输出Z:',z)
                    ////console.log('这里输出计算后的百分比:',percentNum)
                }
            }
            option = {
                //添加水印方案2
                graphic: graphic,
                toolbox: toolbox,
                // toolbox:toolbox,
                animation: animation,
                grid: grid,
                title: title,
                //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
                tooltip: {
                    show: tooltip,
                    trigger: 'item',
                    //悬浮框中文字向左对齐
                    textStyle: {align: 'left'},
                    // {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。在图形上显示具体数值
                    formatter: function (params) {


                        var params_value = 0
                        if (typeof data.data.y[params.dataIndex].percent == "undefined") {
                            params_value = 0
                        } else {
                            params_value = data.data.y[params.dataIndex].percent[0];
                        }
                        //保留小数点
                        var params_nums = 0;
                        //验证小数点位数
                        if (params_value.toString().indexOf(".") <= 0) {
                            params_nums = 0;
                        } else {
                            if (params_value.toString().split(".")[1].length >= 10) {
                                params_nums = 10;
                            } else {
                                params_nums = params_value.toString().split(".")[1].length;
                            }
                        }
                        ;


                        //计算数值
                        if (typeof data.data.y[params.dataIndex].percent == "undefined") {
                            //返回浮层结果
                            return params.name + "<br/>" +
                                params.value + graphdata['unit'];
                        } else {
                            //返回浮层结果


                            return params.name + "<br/>" +
                                params_value.toFixed(4) + '%<br/>' +
                                params.value + graphdata['unit'];
                        }
                    },
                },
                legend: legend,
                "series": [
                    {
                        //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
                        center: [ring_center_x + '%', ring_center_y + '%'],
                        //顺时针转动
                        clockwise: true,
                        "type": "pie",
                        //圆环内半径、外半径
                        // "radius": [110, 170],
                        // radius: [ring_center_i + '%', ring_center_n + '%'],
                        radius: [ring_center_i, ring_center_n],
                        // "height": 230,
                        //图表上的数据
                        "data": series,
                    }
                ],
            };
            //点击图形可合并数据的开关
            if (graphdata.selectedMode == 1) {
                myChart.on('click', function (params) {
                    option['legend']['selected'][params.name] = false
                    //为echarts对象加载数据
                    myChart.setOption(option);
                });
            }
            console.log(JSON.stringify(option))
            // //图形自适应窗口大小
            // myChart.setOption(option);
            // window.addEventListener("resize",function(){
            //     myChart.resize();
            // });
        }


        //词云
        if (data.graph == 'wordcloud') {
            //var maskImage = new Image();
            //maskImage.src = wordCloudImageUrl;
            var series = [];
            var len = []
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }
            var l = 0
            for (var i = 0; i < len; i++) {
                series[i] = {
                    name: graphdata['y'][i]['name'],
                    value: graphdata['y'][i]['data'],
                    textStyle: {
                        normal: {
                            color: echartsTheme.color[l]
                        }
                    }
                }
                l++
                if (l == echartsTheme.color.length) {
                    l = 0
                }
            }
            //词云图title
            var title = [
                {
                    subtextStyle: {
                        fontSize: 14,
                        color: '#999',
                        fontFamily: 'PingFangSC-Regular'
                    },
                    top: tTop,
                    left: tLeft,
                    itemGap: sItemGap,
                    text: graphdata['bigTitle'],
                    subtext: graphdata['subTitle'],
                    fontSize: 18,
                    fontFamily: "PingFangSC-Medium"
                },
                {
                    text: graphdata['remarks'],
                    subtext: credit + '\n\n' + subCredit,
                    //在这里改词云 备注的下边距
                    bottom: 2,
                    left: rLeft,
                    fontFamily: 'PingFangSC-Medium',
                    itemGap: rItemGap,
                    fontSize: 12,
                }
            ]
            option = {
                //添加水印方案2
                graphic: graphic,
                toolbox: toolbox,
                legend: legend,
                grid: grid,
                title: title,
                animation: animation,
                tooltip: {
                    show: tooltip,
                    trigger: 'item',
                    //悬浮框中文字向左对齐
                    textStyle: {align: 'left'},
                    formatter: function (params) {
                        // x轴名称
                        var relName = params.name;
                        relName += '<br/>'+ params.value + graphdata['unit'];
                        return relName;
                    },
                },
                "series": [
                    {
                        "type": "wordCloud",
                        autoSize: {
                            enable: true,
                            minSize: 12,
                        },
                        "rotationRange": [0, 0],//字体旋转角度
                        "data": series,
                        //词云形状
                        shape: 'circle',
                        //maskImage: maskImage,
                        gridSize: 1,//字符间距
                        //词云位置
                        // width: "69.29%",
                        width: "84.7%",
                        // height: "53.55%",
                        height: "84%",
                    }
                ],
            };
            //点击图形可合并数据
            // myChart.on('click', function (params) {
            //     option['legend']['selected'][params.name] = false
            //     myChart.setOption(option);
            // });
            //maskImage.onload = function () {
            //    myChart.setOption(option);
            //}
            //return false
            console.log(JSON.stringify(option))
        }

        //地图
        if (data.graph == 'heapmap') {
            var series = [];
            // var legend = [];
            // var len = [];
            var len = 0;
            var i = 0;
            var sum = 0;
            var datamax = [];
            if (typeof(graphdata['y'].length) != "undefined") {
                // len = graphdata['y'].length;
                len = graphdata['y'][0]['data1'].length
            }
            for (i = 0; i < len; i++) {
                datamax[i] = graphdata['y'][0]['data1'][i]['value'];
                var yNum =   graphdata['y'][0]['data1'][i]['value'];
                //数组求和
                sum += parseFloat(yNum);
                series = graphdata['y'][0]['data1']
                // console.log(series);
            }
            option = {
                //添加水印方案2
                graphic:graphic,
                toolbox: toolbox,
                grid: grid,
                title: title,
                animation: animation,
                animationDuration: animationDuration,
                geo:{
                    show:true,
                    layoutCenter: ['30%', '30%'],
                    layoutSize: 10,
                    top: '30%'
                    //   layoutCenter: ['100%', '100%'],
                },
                tooltip: {
                    show: tooltip,
                    trigger: 'item',
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    // formatter: '{b}' + '<br/>' +'{c}' + graphdata['unit']
                    formatter: function (params) {
                        //百分比值
                        // var params_value = (params.value / sum * 100);
                        //判断接口是否含有percent
                        // console.log(params);
                        if(isNaN(params.value)){
                            return '';
                        }
                        if(params.data && params.data.percent){
                            var params_value = params.data.percent[0];
                        }else{
                            if(sum !== 0){
                                var params_value = (parseInt(params.value) / sum * 100);
                            }else{
                                var params_value = 0;
                            }
                        }
                        //保留小数点
                        var params_nums = 0;
                        //验证小数点位数
                        if (params_value.toString().indexOf(".") <= 0) {
                            params_nums = 0;
                        } else {
                            if (params_value.toString().split(".")[1].length >= 10) {
                                params_nums = 10;
                            } else {
                                params_nums = params_value.toString().split(".")[1].length;
                            }
                        }
                        ;
                        //返回
                        return params.name + "<br/>" +
                            params_value.toFixed(4) + '%<br/>' +
                            params.value + graphdata['unit'];
                    },
                },
                visualMap: {
                    "type": "continuous",
                    "inRange": {"color": [echartsTheme.visualMapColor[1], echartsTheme.visualMapColor[0]]},
                    "min": 0,
                    "max": Math.max.apply(null, datamax),
                    "text": ["高", "低"],
                    "calculable": true,
                    "outOfRange": {
                        "color": [
                            "rgba(177, 177, 177, 0.2)"
                        ]
                    },
                    bottom: 92,
                    // left: 25,
                    left: 0,
                    itemWidth: 20,
                    itemHeight: 140,
                    textGap: 10,

                },
                series: [{
                    "type": "map",
                    "mapType": "china",
                    //长宽比
                    "aspectScale": 0.75,
                    "roam":roam,
                    label: {
                        normal: {
                            show: true,
                            distance: 111,
                            offset: [-60, 0],
                            fontFamily: 'PingFangSC-Medium',
                            fontSize: 12,
                            color: '#333333',
                            fontWeight: 'normal',
                        },
                        emphasis: {
                            show: true,
                            fontFamily: 'PingFangSC-Medium',
                            fontSize: 12,
                            color: echartsTheme.visualMapColor[0],
                            fontWeight: 'normal',
                        }

                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(196, 196, 196,1)',
                            borderType: 'solid',
                            borderWidth: 0.5,
                            areaColor: 'rgba(238,238,238)',
                        },
                        emphasis: {
                            borderType: 'solid',
                            borderColor: 'rgba(102, 102, 102,1)',
                            areaColor: '#F5A623',
                            borderWidth: 0.5,
                        }
                    },
                    "data": series
                }],
            };
            // var chart = echarts.init(document.getElementById('main'));
            // //34个省、市、自治区的名字拼音映射数组
            var provinces = {
                //23个省
                "台湾": "taiwan",
                "河北": "hebei",
                "山西": "shanxi",
                "辽宁": "liaoning",
                "吉林": "jilin",
                "黑龙江": "heilongjiang",
                "江苏": "jiangsu",
                "浙江": "zhejiang",
                "安徽": "anhui",
                "福建": "fujian",
                "江西": "jiangxi",
                "山东": "shandong",
                "河南": "henan",
                "湖北": "hubei",
                "湖南": "hunan",
                "广东": "guangdong",
                "海南": "hainan",
                "四川": "sichuan",
                "贵州": "guizhou",
                "云南": "yunnan",
                "陕西": "shanxi1",
                "甘肃": "gansu",
                "青海": "qinghai",
                //5个自治区
                "新疆": "xinjiang",
                "广西": "guangxi",
                "内蒙古": "neimenggu",
                "宁夏": "ningxia",
                "西藏": "xizang",
                //4个直辖市
                // "北京": "beijing",
                // "天津": "tianjin",
                // "上海": "shanghai",
                // "重庆": "chongqing",
                //2个特别行政区
                "香港": "xianggang",
                "澳门": "aomen"
            };

			//直辖市和特别行政区-只有二级地图，没有三级地图
            var municipality = ["北京","天津","上海","重庆","香港","澳门"];
            var mapdata = [];
           //绘制全国地图
            //$.getJSON('json/china.json', function(data){
			$.getJSON('http://localhost/graph_demo/json/china.json', function(data){
                d = [];
                for( var i=0;i<data.features.length;i++ ){
                    d.push({
                        name:data.features[i].properties.name
                    })
                }
                mapdata = d;
                //注册地图
                echarts.registerMap('china', data);
                var wrap_map_html =
                    '<ul class="wrap-return">'
                    +'<li class="icon-china" id="return"><img src="img/icon_china.png" />中国</li>'
                    +'<li class="icon-arrow"><img src="img/icon_arrow.png" /></li>'
                    +'<li class="current-city">上海</li>'
                    +'</ul></div>';
                $("#main").append(wrap_map_html);
                //绘制地图
                //renderMap('china',d);
            });
            console.log(data);
            //地图点击事件
            myChart.on('click', function (params) {
                // console.log(params);
                var selectedProvince = params.name;
                //var requestUrl = 'json/provinces/' + provinces[selectedProvince] + '.json'
				var requestUrl =' http://localhost/graph_demo/json/provinces/' + provinces[selectedProvince] + '.json'
                //console.log(requestUrl)
                if( params.name in provinces ){
                    //如果点击的是34个省、市、自治区，绘制选中地区的二级地图
                    $.getJSON(requestUrl, function(data){
                        console.log(data);
                        echarts.registerMap( params.name, data);
                        var newObject = jQuery.extend(true, {}, option);
                        newObject.series[0] = {
                            name: '选择器',
                            type: 'map',
                            mapType: selectedProvince,
                            //是否开启移动地图
                            roam: roam,
                            zoom: 1,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        textStyle: {
                                            color: 'rgba(0, 0, 0, 0.6)'
                                        }
                                    },
                                    areaColor: 'rgba(153, 153, 153, 0.5)',
                                    /*borderType: 'dotted',*/
                                    borderColor: 'rgba(255, 255, 255, 0.1)'
                                },
                                emphasis: {
                                    label: {
                                        show: true
                                    }
                                }
                            },
                            //格式1
                            // data:data2,
                            //格式2
                            data:graphdata['y'][0]['data2']
                        }
                        //console.log(newObject, JSON.stringify(newObject));
                        myChart.setOption(newObject);console.log(JSON.stringify(newObject));
                        $("ul.wrap-return").show();
                        $(".current-city").text(selectedProvince);
                    });
                }else if( params.seriesName in provinces ){
                    //如果是【直辖市/特别行政区】只有二级下钻
                    if(municipality.indexOf( params.seriesName ) >=0){
                        renderMap('china',mapdata);
                    }
                    // else{
                    //     //显示县级地图
                    //     $.getJSON('static/map/city/'+ cityMap[params.name] +'.json', function(data){
                    //         echarts.registerMap( params.name, data);
                    //         var d = [];
                    //         for( var i=0;i<data.features.length;i++ ){
                    //             d.push({
                    //                 name:data.features[i].properties.name
                    //             })
                    //         }
                    //         renderMap(params.name,d);
                    //     });
                    // }
                }else{
                    // renderMap('china',mapdata);
                    return;
                }
            });

            /*返回到中国地图*/
            $("body").on("click","#return",function(){
                myChart.setOption(option);
                $("ul.wrap-return").hide();
            });
        }
        // //console.log(data.data);

        //折线图
        if (data.graph == 'line') {
            var series = [];
            legend['icon'] = "rect"
            legend['itemGap'] = 10
            legend['itemWidth'] = 14
            legend['itemHeight'] = 2
            grid.left -= 35.5
            grid.top -= 20
            grid.bottom -= 28
            // grid.bottom +=10
            grid.right -= 2
            var len = []
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }
            for (var i = 0; i < len; i++) {
                series[i] = {
                    //引入动画开关
                    animation: animation,
                    //关闭这线上的圆点
                    symbol: 'none',
                    name: graphdata['y'][i]['name'],
                    type: 'line',
                    data: graphdata['y'][i]['data'],
                }
            }

            option = {
                //添加水印方案2
                graphic: graphic,
                toolbox: toolbox,
                animationDuration: animationDuration,
                grid: grid,
                title: title,
                //折线图dz
                dataZoom: dataZoom,
                tooltip: {
                    show: tooltip,
                    trigger: 'axis',
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    formatter: function (params) {
                        // x轴名称
                        var relName = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relName += '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                        }
                        return relName;
                    },
                    axisPointer: {
                        lineStyle: {width: 1, color: '#c4c4c4'}
                    }
                },
                legend: legend,
                xAxis: {
                    axisLine: {
                        lineStyle: {
                            //轴线颜色
                            color: axisLineColor,
                            width: 1
                        }
                    },
                    axisTick: {
                        alignWithLabel: true,
                        lineStyle: {
                            //轴刻度颜色
                            color: axisTickColor
                        },
                        interval: '0'
                    },
                    axisLabel: {
                        //强制显示所有标签
                        interval: 0,
                        margin: xMargin,
                        show: true,
                        textStyle: {
                            //轴字体颜色
                            color: '#333',
                            fontSize: 14,
                        },
                    },
                    splitLine: {
                        lineStyle: splitLineColor
                    },
                    splitLine: {show: false},
                    type: 'category',
                    data: graphdata['x']['data']
                },
                yAxis: {
                    show: true,
                    axisLine: {
                        lineStyle: {
                            //轴线颜色
                            color: axisLineColor,
                            width: 1
                        }
                    },
                    axisTick: {
                        //是否显示轴刻度
                        show: false,
                        lineStyle: {
                            //轴刻度颜色
                            color: axisTickColor
                        }
                    },
                    axisLabel: {
                        //标签距离轴的位置
                        margin: yMargin,
                        show: true,
                        textStyle: {
                            //轴字体颜色
                            color: '#333',
                            fontSize: 14,
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#eee",
                            width: 1
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            //图形透明度
                            opacity: splitAreaOpacity
                        }
                    },
                    // type: 'category'
                },
                series: series
            };
        }

        //折线图(maker)
        if (data.graph == 'linemaker') {
            var series = [];
            var len = []
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }
            var ii = 0;
            for (var i = 0; i < len; i++) {
                //循环折线图x轴上的legend
                //设置图例开关
                ii = i % 10
                var symbolSize = 10;
                if (ii == 3) {
                    symbolSize = 12
                }
                if (ii == 4) {
                    symbolSize = 11
                }
                if (ii == 5) {
                    symbolSize = 8
                }
                if (ii == 8) {
                    symbolSize = 11
                }
                if (ii == 6 || ii == 7 || ii == 8 || ii == 9) {
                    symbolSize = 9
                }
                series[i] = {
                    symbol: symbol[i],
                    //强制显示所有symbol
                    showAllSymbol: true,
                    symbolSize: symbolSize,
                    itemStyle: {
                        normal: {
                            borderWidth: 2
                        }
                    },
                    name: graphdata['y'][i]['name'],
                    type: 'line',
                    data: graphdata['y'][i]['data'],
                }

            }
            grid.left -= 35
            grid.top -= 21
            grid.bottom -= 28
            grid.right -= 4
            option = {
                //添加水印方案2
                graphic: graphic,

                toolbox: toolbox,
                animationDuration: animationDuration,
                grid: grid,
                title: title,
                //折线marker图dz
                dataZoom: dataZoom,
                tooltip: {
                    show: tooltip,
                    trigger: 'axis',
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    formatter: function (params) {
                        // x轴名称
                        var relName = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relName += '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                        }
                        return relName;
                    },
                    axisPointer: {
                        lineStyle: {color: '#c4c4c4'}
                    }
                },
                legend: legend,
                xAxis: {
                    axisLine: {
                        lineStyle: {
                            //轴线颜色
                            color: axisLineColor,
                            width: 1
                        }
                    },
                    axisTick: {
                        alignWithLabel: true,
                        lineStyle: {
                            //轴刻度颜色
                            color: axisTickColor
                        },
                        interval: '0'
                    },
                    axisLabel: {
                        //强制显示所有标签
                        interval: 0,
                        textStyle: {
                            margin: xMargin,
                            color: '#333',
                            fontSize: 14,
                        }
                    },
                    // axisLable: {
                    //     //轴字体颜色
                    //     color: axisLabeColor
                    // },
                    splitLine: {
                        lineStyle: splitLineColor
                    },
                    splitArea: {
                        // areaStyle: {
                        //     //图形透明度
                        //     opacity: splitAreaOpacity
                        // }
                    },
                    splitLine: {show: false},
                    type: 'category',
                    data: graphdata['x']['data']
                },
                yAxis: {
                    show: true,
                    axisLine: {
                        lineStyle: {
                            //轴线颜色
                            color: axisLineColor,
                            width: 1
                        }
                    },
                    axisTick: {
                        //是否显示轴刻度
                        show: false,
                        lineStyle: {
                            //轴刻度颜色
                            color: axisTickColor
                        }
                    },
                    axisLabel: {
                        margin: xMargin,
                        show: true,
                        textStyle: {
                            //轴字体颜色
                            color: '#333',
                            fontSize: 14,
                        },
                    },
                    splitArea: {
                        areaStyle: {
                            //图形透明度
                            opacity: splitAreaOpacity
                        }
                    },
                    //分割线样式设置
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#eee",
                            width: 1
                        }
                    },
                    // type: 'category'
                },
                series: series
            };

        }

        //条形图
        if (data.graph == 'clustered_bar') {
            var series = [];
            // var legend = [];
            var len = []
            var lenv = []
            //灰色柱子数组
            var grayBar = []
            var CountData = 0
            var label = {
                normal: {
                    show: true,
                    // 柱子上的Value
                    position: 'right',
                    textStyle: {
                        color: "#333333", //color of value
                        fontSize: 14,
                        fontFamily: "PingFangSC-Regular",
                        fontWeight: 'normal'
                    }
                },

            }
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
                lenv = graphdata['y'][0]['data'].length;
            }
            var sdata = []
            var sydata = []

            var graphdataV = []

            if (typeof(graphdata['grayBar']) != "undefined") {
                for (i = 0; i < graphdata['grayBar'].length; i++) {
                    graphdataV[i] = graphdata['grayBar'][i]['index']
                }
            }
            for (var i = 0; i < graphdata['y'][0]['data'].length; i++) {
                sdata[i] = {};
                var sb = '';
                if (typeof(graphdata['y'][0]['percent']) == "undefined") {
                    // sb = Math.round(graphdata['y'][0]['data'][i])
                    sb = parseFloat(graphdata['y'][0]['data'][i]);
                    var max = null
                    //滑块100评分题将max设置为100
                    if(typeof(graphdata['grayType']) != "undefined" && graphdata['grayType'][0]['type'] == "sliding"){
                        max = 100;
                    }
                } else {
                    var max = 100;
                    sb = parseFloat(graphdata['y'][0]['percent'][i]);
                }
                if ($.inArray(i, graphdataV) > -1) {
                    for (l = 0; l < graphdata['grayBar'].length; l++) {
                        if (graphdata['grayBar'][l]['index'] == i) {
                            var itemStyle = {
                                "normal": {
                                    "color": graphdata['grayBar'][l]['color']
                                }
                            }
                        }
                    }
                    sdata[i] = {
                        'value': sb,
                        "itemStyle": itemStyle
                    }

                } else {
                    sdata[i] = {
                        'value': sb
                    }

                }

            }
            // console.log(sdata)
            for (var i = 0; i < len; i++) {
                //注意：计算每个数值所占总数百分比,因为谛听做了截取整数处理，所以当数据低于1%，可能会显示0%。
                //数组求和
                for (var l = 0; l < lenv; l++) {
                    CountData += graphdata['y'][i]['data'][l]
                }
                series[i] = {
                    // barWidth: 24,
                    barMaxWidth: 50,
                    barGap: '2.8%',
                    //柱子宽度
                    //barWidth: 24,
                    //柱子间距

                    //barCategoryGap: 15,
                    barCategoryGap: 13,
                    name: graphdata['y'][i]['name'],
                    data: sdata,
                    type: "bar",
                    label: label,
                }
                //存在百分比，显示四舍五入显示百分比的整数
                if(typeof(graphdata['y'][0]['percent']) !== "undefined"){
                    series[i].label.normal.formatter = function(params) {
                                                            // console.log(params);
                                                            return String(Math.round(params.value));
                                                        } ;
                    series[i].label.normal.position = 'right';
                    series[i].label.normal.show = true;
                }else{
                    //不存在百分比，显示data值
                    series[i].label.normal.formatter = function(params) {
                        //判断参数float===2，表示是小数数字题，需要显示两位小数
                        if(typeof(graphdata['float']) !== "undefined" && graphdata['float'] === 2){
                            return String(params.value.toFixed(2));
                        }else{
                            //显示整数部分
                            return String(Math.round(params.value));
                        }
                    } ;
                    series[i].label.normal.position = 'right';
                    series[i].label.normal.show = true;
                }
            }
            grid.left -= 34
            grid.top -= 55
            grid.bottom -= 85
            grid.right -= 4
            option = {
                grid: grid,
                //     {
                //     top: 100,
                //     // right:125,
                //     bottom: 102,
                //     left: 129,
                //     containLabel: false
                // },
                //添加水印方案2
                graphic: graphic,
                title: title,
                // legend:legend,
                toolbox: toolbox,
                animationDuration: animationDuration,
                animation: animation,
                tooltip: {
                    show: tooltip,
                    trigger: 'axis',
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    formatter: function (params) {
                        if (typeof(graphdata['y'][0]['percent']) != "undefined") {
                            var params_value = graphdata['y'][0]['percent'][params[0].dataIndex];
                            //保留小数点
                            var params_nums = 0;
                            //验证小数点位数
                            if (params_value.toString().indexOf(".") <= 0) {
                                params_nums = 0;
                            } else {
                                if (params_value.toString().split(".")[1].length >= 10) {
                                    params_nums = 10;
                                } else {
                                    params_nums = params_value.toString().split(".")[1].length;
                                }
                            }
                        }
                        if (typeof graphdata['y'][0]['percent'] == "undefined") {
                            //返回浮层结果
                            return params[0].name + "<br/>" +
                                graphdata['y'][0]['data'][params[0].dataIndex].toFixed(4) + graphdata['unit'];
                        } else {
                            return params[0].name + "<br/>" +
                                params_value.toFixed(4) + '%<br/>' +
                                graphdata['y'][0]['data'][params[0].dataIndex] + graphdata['unit'];
                        }


                        ////////console.log(yNum);
                    },
                    // formatter: function (params) {
                    //     ////////console.log(params);
                    //     return params[0].data.value + '</br>' + params[0].data.percentValue;
                    // },
                    // formatter: '{b}' + '<br/>' + '{d}'+ "%<br/>" +'{c}'+ graphdata['unit'],
                    axisPointer: {
                        lineStyle: {width: 1, color: 'rgba(15,15,15,0)'}
                    }

                },
                // legend: legend,
                "series": series,
                "yAxis": [
                    {
                        "axisTick": {"show": false},
                        "axisLine": {"show": false},
                        "splitLine": {"show": false},
                        "type": "category",
                        "data": graphdata['x']['data'],
                        "axisLabel": {
                            //标签距离轴的位置
                            margin: yMargin,
                            show: true,
                            textStyle: {
                                //轴字体颜色
                                color: '#333',
                                fontSize: 14
                            },
                            lineHeight: 30,
                            formatter: function(params){
                                return getNewStr(params,10,'  ',2);
                            }
                        },
                        //数据排序
                        inverse: true,

                    }
                ],
                "xAxis": [
                    {
                        //wukong!
                        "type": "value",
                        "axisTick": {"show": false},
                        "axisLine": {"show": false},
                        "splitLine": {"show": false},
                        "show": false,
                        min: 0,
                        max: max
                    }
                ]
            };
        }

        //百分比堆叠条形图
        if (data.graph == 'stacked_bar') {
            console.log('grid',grid)
            //默认颜色由浅色到深色
            var just_right = [
                // '#726BA4',
                // '#8A83BB',
                // '#A099D0',
                // '#B7B1DD',
                // '#C0B7FF',
                // '#ADA1FF',
                // '#9D82EF',
                // '#9067E0',
                // '#824DD2',
                // '#732FC3'
                '#732FC3',
                '#824DD2',
                '#9067E0',
                '#9D82EF',
                '#ADA1FF',
                '#C0B7FF',
                '#B7B1DD',
                '#A099D0',
                '#8A83BB',
                '#726BA4'
            ]

            // legend.top += 15;
            // grid.top -= 15;
            // grid.bottom -= 55;

            var just_right2 = []
            //console.log('just_right'+just_right.length)
            //console.log('graphdata'+graphdata['y'].length)
            for (var i = just_right.length - graphdata['y'].length; i < just_right.length; i++) {
                //console.log(i)
                just_right2[i - just_right.length + graphdata['y'].length] = just_right[i]
            }
            // console.log(just_right2);
            // console.log(graphdata);
            //判断题型--，如果是排序题，颜色需要使用如下色系
            if(typeof(graphdata['colorSort']) != "undefined" && graphdata['colorSort'] === 2){
                just_right = ['#220446','#360D67','#471681','#5718A1','#621AB6','#6A27BA','#7536BD','#7F44C4','#8652C3','#8F60C5','#986EC8','#9E7AC9','#A383C8','#AA90C8','#B39FCB','#BBACCD','#C6BAD5','#CFC4DB','#D5CCE0','#DDD4E6'];
            }
            if (typeof(graphdata['grayType']) != "undefined") {
                // if (graphdata['grayType'][0]['type'] == "likert" || graphdata['grayType'][0]['type'] == "rating") {
                //     if (graphdata['grayType'][0]['sort'] == 2) {
                //     }
                // }
                //滑块10分，100分
                if(graphdata['grayType'][0]['type'] == "sliding"){
                    just_right = ['#726BA4','#8A83BB','#A099D0','#B7B1DD','#C0B7FF','#ADA1FF','#9D82EF','#9067E0','#824DD2','#732FC3'];
                }
                //星型量表
                if(graphdata['grayType'][0]['type'] == "rating"){
                    just_right = ['#ADA1FF','#9D82EF','#9067E0','#824DD2','#732FC3'];
                }
                //里克特
                if(graphdata['grayType'][0]['type'] == "likert"){
                    just_right = [
                        '#B7B1DD',
                        '#C0B7FF',
                        '#ADA1FF',
                        '#9D82EF',
                        '#9067E0',
                        '#824DD2',
                        '#732FC3'];
                    just_right = just_right.reverse();
                    //取出前几个颜色再反转颜色
                    just_right = just_right.slice(0,graphdata['y'].length).reverse();
                }
                //正好尺度
                if (graphdata['grayType'][0]['type'] == "just_right") {
                    just_right = ['#D1A3F1', '#AA69DF', '#732FC3', '#9067E0', '#ADA1FF']
                }
                //双极量表，5段，7段，11段
                if (graphdata['grayType'][0]['type'] == "bipolar") {
                    if (graphdata['y'].length == 5) {
                        just_right = [
                            '#AA69DF',
                            '#BF85EA',
                            '#BBBBBB',
                            '#ADA1FF',
                            '#9D82EF'
                        ]
                    }
                    if (graphdata['y'].length == 7) {
                        just_right = [
                            '#9B58D6',
                            '#AA69DF',
                            '#BF85EA',
                            '#BBBBBB',
                            '#ADA1FF',
                            '#9D82EF',
                            '#9067E0'
                        ]
                    }
                    if (graphdata['y'].length == 11) {
                        just_right = [
                            '#7811BD',
                            '#8B37CF',
                            '#9B58D6',
                            '#AA69DF',
                            '#BF85EA',
                            '#BBBBBB',
                            '#ADA1FF',
                            '#9D82EF',
                            '#9067E0',
                            '#824DD2',
                            '#732FC3'
                        ]
                    }


                }
            }

            //判断是否有N/A，需要特殊颜色处理
            if(legend.data && legend.data.length && legend.data.indexOf('N/A') > -1){
                just_right[legend.data.length-1] = '#bbbbbb';
            }
            // legend.left = '120';
            legend.left = 'auto';
            legend.right = grid.right;
            // legend.right = 53;//92;
            legend.pageButtonGap = 30;
            // legend.width = '71%';
            //设置legend的左间距（自适应宽度）
            if(graphdata.x.data.length > 1){
                legend.width = $('#'+obj).width()-282;
                // legend.left = '60';
            }else{
                legend.width = $('#'+obj).width()-72;
                // legend.left = '30';
            }
            // legend.align = 'right';
            legend.pageFormatter = function(params){
                // console.log('params-->',params);
                if(params.total === 1){
                    legend.right = 92;
                    // legend.width = '70%';
                }else{
                    legend.right = 53;
                    // legend.width = '80%';
                }
                console.log('legend.right',legend.right);
                // return JSON.stringify({current: params.current, total: params.total});
            };
            //legend换行处理
            //legend = getNewLegendLine(legend);
            //换行处理后更改间距
            // if(typeof(legend.length) != "undefined" && legend.length > 1){
            //     grid.top += 20*(legend.length-1);
            //     $('#' + obj).height($('#' + obj).height()+ 20*(legend.length-1));
            // }
            //当没有选项文字的时候，设置左间距=右间距
            if(graphdata['x'].data.length === 1){
                grid.left = grid.right;
            }
            var series = [];
            var len = []
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }

            var graphdataV = []
            if (typeof(graphdata['grayBar']) != "undefined") {
                for (i = 0; i < graphdata['grayBar'].length; i++) {
                    graphdataV[i] = graphdata['grayBar'][i]['index']
                }
            }

            var max = 0;
            for (var i = 0; i < len; i++) {
                var itemStyle = ''
                if ($.inArray(i, graphdataV) > -1) {
                    for (l = 0; l < graphdata['grayBar'].length; l++) {
                        if (graphdata['grayBar'][l]['index'] == i) {
                            itemStyle = {"normal": {"color": graphdata['grayBar'][l]['color']}}
                        }
                    }
                }
                var seriesV = [];

                if (typeof(graphdata['y'][i]['percent']) == "undefined") {
                    var seriesP = [];
                    for (var l = 0; l < graphdata['y'][i]['data'].length; l++) {
                        seriesP[l] = graphdata['y'][i]['data'][l]
                        if (graphdata['y'][i]['data'][l] < 10) {
                            seriesP[l] = {
                                value: graphdata['y'][i]['data'][l],
                                label: {
                                    normal: {
                                        show: false
                                    }
                                }
                            }

                        } else {
                            seriesP[l] = graphdata['y'][i]['data'][l]
                        }
                    }
                    seriesV = seriesP
                    max = null
                } else {
                    var seriesP = []
                    for (var l = 0; l < graphdata['y'][i]['percent'].length; l++) {
                        //2%及以下数值仍需要显示（0%除外)
                        if (graphdata['y'][i]['percent'][l] == 0) {
                            seriesP[l] = {
                                value: Math.round(graphdata['y'][i]['percent'][l]),
                                label: {
                                    normal: {
                                        show: false
                                    }
                                }
                            }

                        } else {
                            seriesP[l] = {
                                // value: Math.round(graphdata['y'][i]['percent'][l]),
                                value: parseFloat(graphdata['y'][i]['percent'][l]),
                                label: {
                                    normal: {
                                        formatter:String(Math.round(graphdata['y'][i]['percent'][l])),
                                    }
                                }
                            }

                            // seriesP[l] = graphdata['y'][i]['percent'][l].toFixed(4);
                            // seriesP[l] = parseFloat(graphdata['y'][i]['percent'][l])
                        }
                    }

                    seriesV = seriesP
                    max += seriesP[0]
                }

                series[i] = {
                    name: graphdata['y'][i]['name'],
                    data: seriesV,
                    itemStyle: itemStyle,
                    type: "bar",
                    stack: "总量",
                    label: {
                        normal: {
                            show: true,
                            // 柱子上的Value
                            position: 'inside',
                            textStyle: {
                                color: "#fff", //color of value
                                fontSize: 14,
                            }
                        }
                    },
                    //柱子最大宽度
                    barMaxWidth: 45,
                    // barWidth: 40,
                    barGap:'50%'
                }

            }
            //grid.left -= 32,
            //grid.top += 58,
            //grid.bottom -= 57,
            option = {
                color: just_right,
                //添加水印方案2
                graphic: graphic,
                toolbox: toolbox,
                grid: grid,
                title: title,
                legend: legend,
                animationDuration: animationDuration,
                animation: animation,
                tooltip: {
                    show: tooltip,
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: 'rgba(15,15,15,0)'
                        },
                    },
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    formatter: function (params) {
                        // x轴名称
                        var relName = ''
                        for (var i = 0, l = params.length; i < l; i++) {
                            if (typeof(graphdata['y'][0]['percent']) == "undefined") {
                                relName += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'] + '<br/>';

                            } else {
                                relName += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + graphdata['y'][i]['percent'][params[i]['dataIndex']].toFixed(4) + '(' + graphdata['y'][i]['data'][params[i]['dataIndex']] + graphdata['unit'] + ')<br/>';

                            }


                        }
                        return relName;
                    }
                },
                legend: legend,
                "series": series,
                "yAxis": [
                    {
                        "type": "category",
                        "data": graphdata['x']['data'],
                        "axisTick": {"show": false},
                        "axisLine": {"show": false},
                        "splitLine": {"show": false},
                        axisLabel: {
                            show: true,
                            //标签距离轴的位置
                            margin: yMargin,
                            textStyle: {
                                //轴字体颜色
                                color: '#333',
                                fontSize: 14,
                            },
                            formatter: function(params){
                                return getNewStr(params,10,'  ',2);
                            }
                        },
                        //排序
                        inverse: true
                    }
                ],
                "xAxis": [
                    {
                        "type": "value",
                        "show": false,
                        min: 0,
                        max: max
                    }
                ]
            };
            // console.log(JSON.stringify(option))
        }


        //百分比堆叠柱状图
        if (data.graph == 'stacked_column') {
            var series = [];
            legend['top'] = 186
            legend['bottom'] = 180
            legend['left'] = 22
            legend['itemGap'] = 13
            var len = []
            var lenv = []
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
                lenv = graphdata['y'][0]['data'].length;
            }
            var max = 0;
            for (var i = 0; i < len; i++) {
                //循环折线图x轴上的legend
                //设置图例开关
                var seriesV = [];
                if (typeof(graphdata['y'][i]['percent']) == "undefined") {
                    var seriesP = []
                    for (var l = 0; l < graphdata['y'][i]['data'].length; l++) {
                        if (graphdata['y'][i]['data'][l] < 10) {
                            seriesP[l] = {
                                value: graphdata['y'][i]['data'][l],
                                label: {
                                    normal: {
                                        show: false
                                    }
                                }
                            }

                        } else {
                            seriesP[l] = graphdata['y'][i]['data'][l]
                        }
                    }
                    seriesV = seriesP
                    max = null
                } else {
                    var seriesP = []
                    for (var l = 0; l < graphdata['y'][i]['percent'].length; l++) {
                        seriesP[l] = Math.round(graphdata['y'][i]['percent'][l])
                        //四舍五入后百分比大于2才显示
                        if (Math.round(graphdata['y'][i]['percent'][l]) < 2) {
                            seriesP[l] = {
                                value: graphdata['y'][i]['percent'][l],
                                label: {
                                    normal: {
                                        show: false
                                    }
                                }
                            }

                        } else {
                            // seriesP[l] = Math.round(graphdata['y'][i]['percent'][l])
                            // seriesP[l] = graphdata['y'][i]['data'][l]
                            seriesP[l] = {
                                value: parseFloat(graphdata['y'][i]['percent'][l]),
                                label: {
                                    normal: {
                                        show: true,
                                        formatter:String(Math.round(graphdata['y'][i]['data'][l]))
                                    }
                                }
                            }
                        }

                    }

                    seriesV = seriesP
                    max += seriesP[0]
                }


                series[i] = {
                    name: graphdata['y'][i]['name'],
                    data: seriesV,
                    type: "bar",
                    stack: "总量",
                    barMaxWidth: 45,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                        }
                    },
                }
            }

            grid.left -= 34;
            grid.right -= 32;
            grid.bottom += 1;
            //图例对齐图表高度
            legend.top = grid.top + 7;
            legend.bottom = grid.bottom + 7;
            option = {
                graphic: graphic,
                toolbox: toolbox,
                grid: grid,
                title: title,
                animationDuration: animationDuration,
                animation: animation,
                //百分比堆叠柱状图dz
                dataZoom: dataZoom,
                tooltip: {
                    show: tooltip,
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: 'rgba(15,15,15,0)'
                        },
                    },
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    formatter: function (params) {
                        // x轴名称
                        var relName = '';
                        for (var i = 0, l = params.length; i < l; i++) {
                            if (typeof(graphdata['y'][0]['percent']) == "undefined") {
                                relName += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'] + '</br>';
                            } else {
                                if(graphdata['y'][i]['data'][params[i]['dataIndex']] === 0){
                                    var tStr = 0;
                                }else{
                                    var tStr = String(graphdata['y'][i]['data'][params[i]['dataIndex']].toFixed(4));
                                }
                                relName += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + tStr + '</br>';
                            }
                        }
                        return relName;
                    }
                },
                legend: legend,
                "series": series,
                "yAxis": [
                    {
                        "type": "value",
                        "show": false,
                        //图形内数值排序
                        inverse: true,
                        min: 0,
                        max: max
                    }
                ],
                "xAxis": [
                    {
                        "type": "category",
                        "data": xaxisdata,
                        "axisTick": {"show": false},
                        "axisLine": {"show": false},
                        "splitLine": {"show": false},
                    }
                ]
            };

        }


        //散点图
        if (data.graph == 'scatter') {
            var series = []
            var len = []
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }
            var ii = 0;
            for (var i = 0; i < len; i++) {
                ii = i % 10
                var symbolSize = 10;
                if (ii == 3) {
                    symbolSize = 12
                }
                if (ii == 4) {
                    symbolSize = 11
                }
                if (ii == 5) {
                    symbolSize = 8
                }
                if (ii == 8) {
                    symbolSize = 11
                }
                if (ii == 6 || ii == 7 || ii == 8 || ii == 9) {
                    symbolSize = 9
                }

                series[i] =
                {
                    name: graphdata['y'][i]['name'],
                    data: graphdata['y'][i]['data'],
                    type: 'scatter',
                    symbol: symbol[i],
                    symbolSize: 10,
                    itemStyle: {
                        normal: {
                            borderWidth: 2
                        }
                    },
                    itemStyle: {
                        normal: {}
                    }

                }

            }
            grid.left -= 43,
                grid.bottom -= 31,
                grid.top -= 20
            // grid.right -=3
            option = {
                graphic: graphic,
                toolbox: toolbox,
                grid: grid,
                title: title,
                animationDuration: animationDuration,
                animation: animation,
                tooltip: {
                    show: tooltip,
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: 'rgba(15,15,15,0)'
                        },
                    },

                    formatter: function (params) {
                        // x轴名称
                        var relName = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relName += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                        }
                        return relName;
                    }
                },
                legend: legend,
                xAxis: {
                    axisLine: {
                        lineStyle: {
                            //轴线颜色
                            color: axisLineColor,
                            width: 1
                        }
                    },
                    axisTick: {
                        alignWithLabel: true,
                        lineStyle: {
                            //轴刻度颜色
                            color: axisTickColor
                        }
                    },
                    axisLabel: {
                        show: true,
                        //强制显示所有标签
                        interval: 0,
                        textStyle: {
                            //轴字体颜色
                            color: '#333',
                            fontSize: 14,
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#eee",
                            width: 1
                        }
                    },
                },
                yAxis: {
                    axisLine: {
                        lineStyle: {
                            //轴线颜色
                            color: axisLineColor,
                            width: 1
                        }
                    },
                    axisTick: {
                        //是否显示轴刻度
                        show: false,
                        lineStyle: {
                            //轴刻度颜色
                            color: axisTickColor
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            //轴字体颜色
                            color: '#333',
                            fontSize: 14,
                        },
                    },
                    splitArea: {
                        areaStyle: {
                            //图形透明度
                            opacity: splitAreaOpacity
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#eee",
                            width: 1
                        }
                    },
                },
                series: series
            };
        }

        //仪表盘图
        if (data.graph == 'gauge') {
            title.push({
                subtextStyle: {
                    // rich: {fontSize:18,fontFamily:'PingFangSC-Regular'},
                    fontSize: 18,
                    fontFamily: 'PingFangSC-Regular',
                    // fontFamily:'PingFangSC-Regular',
                    color: "#333",
                    lineHeight: 18,
                    // height: 18,
                    fontWeight: 'normal',
                },
                textStyle: {
                    fontSize: 18,
                    fontFamily: 'PingFangSC-Regular',
                    color: "#333",
                    lineHeight: 18,
                    fontWeight: 'normal',
                },
                left: 'center',
                // top: 368,
                // top: $('#' + obj).height() * (ring_center_y / 100) + 152,
                top: $('#' + obj).height() * (ring_center_y / 100) + 150,
                //标题内边距,上右下左
                padding: [0, 0, 0, 0],
                //主标题和副标题之间的间距
                itemGap: -78,
                // itemGap: -84,
                subtext: graphdata['x']['data'][0],
                text: graphdata['y'][0]['name'],

            });
            //设置formatter是否显示圈圈，默认不显示，！！！颜色暂未动态获取
            var quanquan = '';
            if (1 == 1) {

            } else {
                quanquan = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + relColor + ';"></span>'
            }
            grid.top = 0;
            option = {
                //添加水印方案2
                graphic: graphic,
                toolbox: toolbox,
                grid: grid,
                title: title,
                animation: animation,
                // animation:animation,
                // animationDuration: animationDuration,
                tooltip: {
                    show: tooltip,
                    trigger: 'item',
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    // formatter: "{a} <br/>{b} : {c}" + graphdata['unit']
                    formatter: function (params) {
                        // x轴名称
                        var relName = params.name;
                        var params_value = graphdata['y'][0]['data'][0];
                        //保留小数点
                        var params_nums = 0;
                        //验证小数点位数
                        if (params_value.toString().indexOf(".") <= 0) {
                            params_nums = 0;
                        } else {
                            if (params_value.toString().split(".")[1].length >= 10) {
                                params_nums = 10;
                            } else {
                                params_nums = params_value.toString().split(".")[1].length;
                            }
                        }
                        var relValue = params_value.toFixed(4);
                        var relColor = [echartsTheme.visualMapColor[0], echartsTheme.visualMapColor[1]]
                        relValue = (relValue);
                        if (relValue > 0) {
                            relColor = echartsTheme.visualMapColor[0]
                        } else if (relValue <= 0) {
                            relColor = echartsTheme.visualMapColor[1]
                        }
                        relName = graphdata['y'][0]['name'] + '<br/>' + quanquan + relValue + graphdata['unit'];
                        return relName;
                    },
                },
                legend: legend,
                "series": [
                    {
                        "name": "推荐净值",
                        type: 'gauge',
                        min: -100,
                        max: 100,
                        // top:104,
                        // right: 130,
                        // bottom:208,
                        // left: 132,
                        center: [ring_center_x + '%', ring_center_y + 10.5 + '%'],
                        //仪表盘半径
                        radius: ring_center_n,
                        //这个会影响tooltip是否显示
                        silent: false,
                        // wukong!
                        "axisLine": {
                            "lineStyle": {
                                "width": 80,
                                "opacity": 0.8,
                                //仪表盘颜色
                                "color": [
                                    [
                                        0.5,
                                        colorRgb(echartsTheme.visualMapColor[0], .4)
                                    ],
                                    [
                                        1,
                                        echartsTheme.visualMapColor[0]
                                    ]
                                ]
                            }
                        },
                        "detail": {
                            show: true,
                            formatter: '{value}' + graphdata['unit'],
                            // formatter: "{a} <br/>{b} : {c}" + graphdata['unit'],
                            "offsetCenter": [0, "80"],
                            color: '#000',
                            fontSize: 18,
                            "textStyle": {
                                "color": "#333333",
                                "fontSize": 18,
                                fontFamily: 'PingFangSC-Regular',
                                fontWeight: 'normal',
                            },
                            height: 18,
                        },
                        // wukong!
                        "data": [
                            {"value": Math.round(graphdata['y'][0]['data'][0])}
                        ],
                        "type": "gauge",
                        //起始旋转角度
                        "startAngle": 180,
                        //末尾旋转角度
                        "endAngle": 0,
                        "splitLine": {
                            "length": "25",
                            "lineStyle": {
                                "width": 2,
                                //线条类型
                                "type": "solid",
                                "opacity": 1,
                            }
                        },
                        "axisTick": {
                            "length": "15",
                            "splitNumber": 10,
                            "lineStyle": {"width": 2, "type": "solid", "opacity": 0.4}
                        },
                        "axisLabel": {
                            "show": true,
                            "distance": 64,
                            "textStyle": {
                                "fontSize": 14
                            }
                        },
                        //字体间距
                        "splitNumber": 4,
                        //指针相关设置
                        "pointer": {"width": 12, "length": "46%", "color": "#000"},
                        title: {fontFamily: 'PingFangSC-Medium'}
                    }
                ],
            };
            // console.log(JSON.stringify(option));
        }


        //条形象形图
        if (data.graph == 'pictorialline') {
            title.push({
                textStyle: {
                    fontSize: 18,
                    fontFamily: 'PingFangSC-Regular',
                    color: "#333",
                    lineHeight: 18,
                    fontWeight: 'normal'
                },
                left: 'center',
                // top: 368,
                // top: $('#' + obj).height() * (ring_center_y / 100) + 152,
                top: $('#' + obj).height() * (ring_center_y / 100) + 75,
                //标题内边距,上右下左
                padding: [5, 0, 0, 0],
                //主标题和副标题之间的间距
                // itemGap: -84,
                text: '全部'

            });
            var ssum = graphdata['y'][2]['data'][0] + graphdata['y'][1]['data'][0] + graphdata['y'][0]['data'][0]
            var sb = []

            if (typeof(graphdata['y'][0]['percent']) == "undefined") {
                sb[0] = ''
            } else {

                sb[0] = Math.round(graphdata['y'][0]['percent'][0])
            }
            if (typeof(graphdata['y'][1]['percent']) == "undefined") {
                sb[1] = ''
            } else {
                sb[1] = Math.round(graphdata['y'][1]['percent'][0])
            }
            if (typeof(graphdata['y'][2]['percent']) == "undefined") {
                sb[2] = ''
            } else {
                sb[2] = Math.round(graphdata['y'][2]['percent'][0])
            }

            grid.left = 'center'
            // grid.top -= 45,
            // grid.height = 199,
            grid.width = 460,
            option = {
                //添加水印方案2
                graphic: graphic,
                toolbox: toolbox,
                animation: animation,
                animationDuration: animationDuration,
                grid: grid,
                title: title,
                tooltip: {
                    show: tooltip,
                    trigger: 'item',
                    axisPointer: {
                        lineStyle: {
                            color: 'rgba(15,15,15,0)'
                        }
                    },
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    formatter: function (params) {
                        // x轴名称
                        if (typeof graphdata.y[params.dataIndex]['percent'] == "undefined") {
                            //返回浮层结果
                            return params.name + "<br/>" +
                                graphdata.y[params.dataIndex]['data'] + graphdata['unit'];
                        } else {
                            var params_value = graphdata.y[params.dataIndex]['percent'][0];
                            //保留小数点
                            var params_nums = 0;
                            //验证小数点位数
                            if (params_value.toString().indexOf(".") <= 0) {
                                params_nums = 0;
                            } else {
                                if (params_value.toString().split(".")[1].length >= 10) {
                                    params_nums = 10;
                                } else {
                                    params_nums = params_value.toString().split(".")[1].length;
                                }
                            }
                            return graphdata.y[params.dataIndex]['name'] + "<br/>" +
                                params_value.toFixed(4) + '%<br/>' +
                                graphdata.y[params.dataIndex]['data'] + graphdata['unit'];
                        }
                    }
                    // formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
                },
                // legend:legend,
                "yAxis": {
                    inverse: true,
                    "axisLabel": {
                        show: true,
                        //标签距离轴的位置
                        margin: 23,
                        color: '#333',
                        fontSize: 14
                    },
                    "axisTick": {
                        "show": false
                    },
                    "axisLine": {
                        "show": false
                    },
                    "splitLine": {
                        "show": false
                    },
                    "data": [
                        graphdata['y'][0]['name'] + ' ' + sb[0],
                        graphdata['y'][1]['name'] + ' ' + sb[1],
                        graphdata['y'][2]['name'] + ' ' + sb[2]
                    ]
                },
                "xAxis": {
                    "axisTick": {
                        "show": false
                    },
                    "axisLine": {
                        "show": false
                    },
                    "splitLine": {
                        "show": false
                    },
                    "show": false,
                    "min": 0,
                    "max": 100
                },
                "series": [
                    {
                        "data": [
                            {
                                "value": sb[0],
                                "symbol": "path:\/\/M0,249 C0,386.531 111.469,498 249,498 C386.5144,498 498,386.531 498,249 C498,111.4856 386.5144,0 249,0 C111.469,0 0,111.4856 0,249 Z M290.5,182.6 C290.5,159.6754 309.092,141.1 332,141.1 C354.9246,141.1 373.5,159.6754 373.5,182.6 C373.5,205.508 354.9246,224.1 332,224.1 C309.092,224.1 290.5,205.508 290.5,182.6 Z M124.5,182.6 C124.5,159.6754 143.092,141.1 166,141.1 C188.9246,141.1 207.5,159.6754 207.5,182.6 C207.5,205.508 188.9246,224.1 166,224.1 C143.092,224.1 124.5,205.508 124.5,182.6 Z M336.5318,299.0158 C340.9806,292.3592 350.011,290.5664 356.6842,295.0318 C363.3408,299.4806 365.1336,308.511 360.6682,315.1676 C337.4614,349.8782 295.231,371.425 248.9668,371.425 C202.7524,371.425 160.5718,349.928 137.3318,315.2838 C132.8664,308.6438 134.6426,299.6134 141.3158,295.1314 C147.9724,290.666 157.0028,292.4422 161.4682,299.1154 C179.1804,325.526 212.2476,342.375 248.9668,342.375 C285.7358,342.375 318.8196,325.4762 336.5318,299.0158 Z",
                                label: {
                                    normal: {
                                        fontSize: "14px"
                                    }
                                },
                                "itemStyle": {"normal": {"color": "#40BA2C"}}
                            },
                            {
                                "value": sb[1],
                                "symbol": "path:\/\/M10.2565161,249 C10.2565161,386.531 121.178839,498 258.014968,498 C394.834581,498 505.740387,386.531 505.740387,249 C505.740387,111.4856 394.834581,0 258.014968,0 C121.178839,0 10.2565161,111.4856 10.2565161,249 Z M299.30529,182.6 C299.30529,159.6754 317.786839,141.1 340.579097,141.1 C363.387871,141.1 381.869419,159.6754 381.869419,182.6 C381.869419,205.508 363.387871,224.1 340.579097,224.1 C317.786839,224.1 299.30529,205.508 299.30529,182.6 Z M134.127484,182.6 C134.127484,159.6754 152.625548,141.1 175.417806,141.1 C198.226581,141.1 216.724645,159.6754 216.724645,182.6 C216.724645,205.508 198.226581,224.1 175.417806,224.1 C152.625548,224.1 134.127484,205.508 134.127484,182.6 Z M144.466581,329.925 C144.466581,321.9072 150.924387,315.4 158.901677,315.4 L357.095226,315.4 C365.072516,315.4 371.563355,321.9072 371.563355,329.925 C371.563355,337.9428 365.072516,344.45 357.095226,344.45 L158.901677,344.45 C150.924387,344.45 144.466581,337.9428 144.466581,329.925 Z",
                                label: {
                                    normal: {
                                        fontSize: "14px"
                                    }
                                },
                                "itemStyle": {"normal": {"color": "#F6A623"}}
                            },
                            {
                                "value": sb[2],
                                "symbol": "path:\/\/m 100.55702,161.03384 c -6.077439,-1.21802 -8.357637,-8.69503 -4.007038,-13.13952 4.820698,-4.92474 13.254328,-1.44121 13.254328,5.47473 0,4.87383 -4.51213,8.61379 -9.24729,7.66479 z m -0.759346,-4.37014 c 1.200056,-0.91533 2.469196,-1.08812 3.700536,-0.50381 0.54186,0.25713 1.04654,0.62735 1.12151,0.82271 0.20972,0.54653 1.13802,0.43807 1.13802,-0.13296 0,-0.97295 -2.03243,-2.15767 -3.70157,-2.15767 -1.77676,0 -3.954581,1.35381 -3.612375,2.24559 0.205632,0.53587 0.32354,0.51202 1.353879,-0.27386 z m 0.615486,-4.4059 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40929,-0.40929 -1.601547,-0.40929 -2.010836,0 -0.409289,0.40929 -0.409289,1.60154 0,2.01083 0.409289,0.40929 1.601546,0.40929 2.010836,0 z m 5.29166,0 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40928,-0.40929 -1.60154,-0.40929 -2.01083,0 -0.17462,0.17462 -0.3175,0.62706 -0.3175,1.00541 0,0.37836 0.14288,0.83079 0.3175,1.00542 0.40929,0.40929 1.60155,0.40929 2.01083,0 z",
                                label: {
                                    normal: {
                                        fontSize: "14px"
                                    }
                                },
                                "itemStyle": {"normal": {"color": "#DC1E35"}}
                            }
                        ],
                        "animation": false,
                        "type": "pictorialBar",
                        //前后图形间距
                        symbolMargin: 4,
                        //图形重叠
                        symbolRepeat: 'fixed',
                        "symbolClip": true,
                        //图形的大小
                        "symbolSize": [36, 36],
                        "symbolBoundingData": 100,
                    },
                    {
                        "data": [
                            {
                                "value": 100,
                                "symbol": "path:\/\/m 100.55702,161.03384 c -6.077439,-1.21802 -8.357637,-8.69503 -4.007038,-13.13952 4.820698,-4.92474 13.254328,-1.44121 13.254328,5.47473 0,4.87383 -4.51213,8.61379 -9.24729,7.66479 z m -0.759346,-4.37014 c 1.200056,-0.91533 2.469196,-1.08812 3.700536,-0.50381 0.54186,0.25713 1.04654,0.62735 1.12151,0.82271 0.20972,0.54653 1.13802,0.43807 1.13802,-0.13296 0,-0.97295 -2.03243,-2.15767 -3.70157,-2.15767 -1.77676,0 -3.954581,1.35381 -3.612375,2.24559 0.205632,0.53587 0.32354,0.51202 1.353879,-0.27386 z m 0.615486,-4.4059 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40929,-0.40929 -1.601547,-0.40929 -2.010836,0 -0.409289,0.40929 -0.409289,1.60154 0,2.01083 0.409289,0.40929 1.601546,0.40929 2.010836,0 z m 5.29166,0 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40928,-0.40929 -1.60154,-0.40929 -2.01083,0 -0.17462,0.17462 -0.3175,0.62706 -0.3175,1.00541 0,0.37836 0.14288,0.83079 0.3175,1.00542 0.40929,0.40929 1.60155,0.40929 2.01083,0 z",
                                label: {
                                    normal: {
                                        fontSize: "14px"
                                    }
                                },
                                "itemStyle": {"normal": {"color": "rgba(177, 177, 177, 0.2)"}}
                            },
                            {
                                "value": 100,
                                "symbol": "path:\/\/M10.2565161,249 C10.2565161,386.531 121.178839,498 258.014968,498 C394.834581,498 505.740387,386.531 505.740387,249 C505.740387,111.4856 394.834581,0 258.014968,0 C121.178839,0 10.2565161,111.4856 10.2565161,249 Z M299.30529,182.6 C299.30529,159.6754 317.786839,141.1 340.579097,141.1 C363.387871,141.1 381.869419,159.6754 381.869419,182.6 C381.869419,205.508 363.387871,224.1 340.579097,224.1 C317.786839,224.1 299.30529,205.508 299.30529,182.6 Z M134.127484,182.6 C134.127484,159.6754 152.625548,141.1 175.417806,141.1 C198.226581,141.1 216.724645,159.6754 216.724645,182.6 C216.724645,205.508 198.226581,224.1 175.417806,224.1 C152.625548,224.1 134.127484,205.508 134.127484,182.6 Z M144.466581,329.925 C144.466581,321.9072 150.924387,315.4 158.901677,315.4 L357.095226,315.4 C365.072516,315.4 371.563355,321.9072 371.563355,329.925 C371.563355,337.9428 365.072516,344.45 357.095226,344.45 L158.901677,344.45 C150.924387,344.45 144.466581,337.9428 144.466581,329.925 Z",
                                label: {
                                    normal: {
                                        fontSize: "14px"
                                    }
                                },
                                "itemStyle": {"normal": {"color": "rgba(177, 177, 177, 0.2)"}}
                            },
                            {
                                "value": 100,
                                "symbol": "path:\/\/M0,249 C0,386.531 111.469,498 249,498 C386.5144,498 498,386.531 498,249 C498,111.4856 386.5144,0 249,0 C111.469,0 0,111.4856 0,249 Z M290.5,182.6 C290.5,159.6754 309.092,141.1 332,141.1 C354.9246,141.1 373.5,159.6754 373.5,182.6 C373.5,205.508 354.9246,224.1 332,224.1 C309.092,224.1 290.5,205.508 290.5,182.6 Z M124.5,182.6 C124.5,159.6754 143.092,141.1 166,141.1 C188.9246,141.1 207.5,159.6754 207.5,182.6 C207.5,205.508 188.9246,224.1 166,224.1 C143.092,224.1 124.5,205.508 124.5,182.6 Z M336.5318,299.0158 C340.9806,292.3592 350.011,290.5664 356.6842,295.0318 C363.3408,299.4806 365.1336,308.511 360.6682,315.1676 C337.4614,349.8782 295.231,371.425 248.9668,371.425 C202.7524,371.425 160.5718,349.928 137.3318,315.2838 C132.8664,308.6438 134.6426,299.6134 141.3158,295.1314 C147.9724,290.666 157.0028,292.4422 161.4682,299.1154 C179.1804,325.526 212.2476,342.375 248.9668,342.375 C285.7358,342.375 318.8196,325.4762 336.5318,299.0158 Z",
                                "itemStyle": {"normal": {"color": "rgba(177, 177, 177, 0.2)"}}
                            }
                        ],
                        //"color": "#b1b1b1"
                        "animation": false,
                        "type": "pictorialBar",
                        //前后图形间距
                        symbolMargin: 4,
                        symbolRepeat: 'fixed',
                        "symbolClip": true,
                        "symbolSize": [36, 36],
                        "symbolBoundingData": 100,
                        "z": -5
                    },
                    // barGap:4
                ],
            };
            console.log(JSON.stringify(option));
        }

        //对比柱状图
        if (data.graph == 'bar-y-contrast') {
            var series = [];
            var len = []
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }
            for (var i = 0; i < len; i++) {
                //循环折线图x轴上的legend
                //设置图例开关
                if (d_data.legend == 5 || d_data.legend == 1) {
                    legend[i] = graphdata['y'][i]['name'];
                }
                series[i] = {

                    //柱子最大宽度
                    barMaxWidth: 50,
                    barCategoryGap: '18%',
                    barGap: '10%',
                    name: graphdata['y'][i]['name'],
                    data: graphdata['y'][i]['data'],
                    type: "bar",
                    label: {
                        normal: {
                            show: false,
                            // 柱子上的Value
                            position: 'top',
                            textStyle: {
                                color: "#333333", //color of value
                                fontSize: 14,
                                fontFamily: "PingFangSC-Regular",
                            }
                        },
                    }
                }

            }
            grid.left -= 43,
                grid.bottom -= 28,
                grid.right -= 2,
                grid.top -= 20,
                option = {
                    grid: grid,
                    //添加水印方案2
                    graphic: graphic,
                    title: title,
                    toolbox: toolbox,
                    //对比柱状图
                    dataZoom: dataZoom,
                    animationDuration: animationDuration,
                    animation: animation,
                    tooltip: {
                        show: tooltip,
                        trigger: 'axis',
                        //区域阴影
                        axisPointer: {
                            show: true,
                            type: 'shadow',
                            shadowStyle: {
                                //阴影颜色
                                color: "#c4c4c4",
                                //阴影部分透明度
                                opacity: 0.2,
                            },
                        },
                        //悬浮框中文字向左对齐
                        textStyle: {align: 'left'},
                        formatter: function (params) {

                            // x轴名称
                            var relName = params[0].name;
                            for (var i = 0, l = params.length; i < l; i++) {
                                relName += '<br/> <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                            }
                            return relName;
                        },
                    },
                    legend: legend,
                    "series": series,
                    "xAxis": [
                        {
                            axisLine: {
                                lineStyle: {
                                    //轴线颜色
                                    color: "#c4c4c4",
                                    width: 1
                                }
                            },
                            axisTick: {
                                //是否显示轴刻度
                                show: false
                            },
                            axisLabel: {
                                //强制显示所有标签
                                interval: 0,
                                //标签旋转角度
                                // rotate:45,
                                //标签距离轴的位置
                                margin: yMargin,
                                show: true,
                                textStyle: {
                                    //轴字体颜色
                                    color: '#333',
                                    fontSize: 14,
                                },
                            },
                            splitLine: {show: false},
                            // "data": graphdata['x']['data'],
                            data: xaxisdata,
                            type: 'category'
                        }
                    ],
                    "yAxis": [
                        {
                            //wukong!
                            "type": "value",
                            show: true,
                            axisLine: {
                                lineStyle: {
                                    //轴线颜色
                                    // color: axisLineColor
                                    color: "#c4c4c4",
                                    width: 1
                                }
                            },
                            axisTick: {
                                //是否显示轴刻度
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    //轴字体颜色
                                    color: '#333',
                                    fontSize: 14,
                                },
                            },
                            splitArea: {
                                areaStyle: {
                                    //图形透明度
                                    opacity: splitAreaOpacity
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: "#eee",
                                    width: 1
                                }
                            },
                        }
                    ]
                };
        }

        //顶部显示数值柱状图
        if (data.graph == 'bar-y-value') {
            // //console.log(graphdata)
            var series = [];
            // var legend = [];
            var len = [];
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }
            for (var i = 0; i < len; i++) {
                //循环折线图x轴上的legend
                series[i] = {
                    type: 'bar',
                    //柱子最大宽度
                    barMaxWidth: 45,
                    barCategoryGap: '18%',
                    barGap: "30%",
                    name: graphdata['y'][i]['name'],
                    data: graphdata['y'][i]['data'],
                    type: "bar",
                    label: {
                        normal: {
                            show: true,
                            // 柱子上的Value
                            position: 'top',
                            textStyle: {
                                color: "#333333", //color of value
                                fontSize: 14,
                                fontFamily: "PingFangSC-Regular",
                                fontWeight: 'normal',
                            }
                        },

                    },
                }

            }
            grid.left -= 114;
            grid.right -= 30;
            grid.bottom -= 28;
            grid.top -= 67;
            option = {
                grid: grid,
                //添加水印方案2
                graphic: graphic,
                title: title,
                toolbox: toolbox,
                animationDuration: animationDuration,
                animation: animation,
                //顶部显示数值柱状图dz
                dataZoom: dataZoom,
                tooltip: {
                    show: tooltip,
                    trigger: 'axis',
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    formatter: function (params) {
                        // x轴名称
                        var relName = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relName += '<br/> <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                        }
                        return relName;
                    },
                    axisPointer: {
                        lineStyle: {
                            color: 'rgba(15,15,15,0)'
                        },
                    },
                },
                "series": series,
                "xAxis": [
                    {
                        axisLine: {
                            show: false,
                            lineStyle: {
                                //轴线颜色
                                color: "#333"
                            }
                        },
                        axisTick: {
                            //是否显示轴刻度
                            show: false
                        },
                        axisLabel: {
                            //强制显示所有标签
                            interval: 0,
                            //标签旋转角度
                            // rotate:45,
                            //标签距离轴的位置
                            margin: yMargin,
                            show: true,
                            textStyle: {
                                //轴字体颜色
                                color: '#333',
                                fontSize: 14,
                            },
                        },
                        splitLine: {
                            lineStyle: splitLineColor
                        },
                        splitArea: {
                            areaStyle: {
                                //图形透明度
                                opacity: splitAreaOpacity
                            }
                        },
                        // "data": graphdata['x']['data'],
                        "data": xaxisdata,
                        type: 'category'
                    }
                ],
                "yAxis": [
                    {
                        //wukong!
                        "type": "value",
                        show: false,
                        axisLine: {
                            lineStyle: {
                                //轴线颜色
                                color: axisLineColor
                                //    color: '#C4C4C4'
                            }
                        },
                        axisTick: {
                            //是否显示轴刻度
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                //轴字体颜色
                                color: '#333',
                                fontSize: 14,
                            },

                        },
                        splitArea: {
                            areaStyle: {
                                //图形透明度
                                opacity: splitAreaOpacity
                            }
                        },
                        splitLine: {show: true},
                    }
                ]
            };
        }

        //折柱图
        if (data.graph == 'line-bar') {
            var series = [];
            legend['icon'] = "rect"
            legend['itemGap'] = 10
            legend['itemWidth'] = 14
            legend['itemHeight'] = 2
            var len = []
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }
            for (var i = 0; i < len; i++) {
                if (i == 0) {
                    var type = 'line';
                } else {
                    var type = 'bar';
                }
                series[i] = {
                    type: type,
                    //折线上标记的图形，none为不显示
                    symbol: 'none',
                    //柱子最大宽度
                    barMaxWidth: 45,
                    barGap: "80%",
                    name: graphdata['y'][i]['name'],
                    data: graphdata['y'][i]['data'],
                }
            }
            grid.left -= 35
            grid.right -= 3
            grid.bottom -= 29
            grid.top -= 19
            option = {
                grid: grid,
                //添加水印方案2
                graphic: graphic,
                title: title,
                toolbox: toolbox,
                animationDuration: animationDuration,
                animation: animation,
                legend: legend,
                //折柱图dz
                dataZoom: dataZoom,
                tooltip: {
                    show: tooltip,
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: 'rgba(196,196,196,1)'
                        },
                    },
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    formatter: function (params) {
                        // x轴名称
                        var relName = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relName += '<br/> <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                        }
                        return relName;
                    }
                },
                "series": series,
                "xAxis": [
                    {
                        //坐标轴指示器
                        axisPointer: {
                            type: 'line',
                            crossStyle: {
                                color: '#c4c4c4'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //轴线颜色
                                color: "#c4c4c4",
                                width: 1
                            }
                        },
                        axisTick: {
                            //是否显示轴刻度
                            show: false
                        },
                        axisLabel: {
                            //强制显示所有标签
                            interval: 0,
                            //标签旋转角度
                            // rotate:45,
                            margin: xMargin,
                            show: true,
                            textStyle: {
                                //轴字体颜色
                                color: '#333',
                                fontSize: 14,
                            },
                        },
                        splitLine: {
                            lineStyle: splitLineColor,
                            width: 1,
                        },
                        splitArea: {
                            areaStyle: {
                                //图形透明度
                                opacity: splitAreaOpacity
                            }
                        },
                        splitLine: {show: false},
                        "data": xaxisdata,
                        type: 'category'
                    }
                ],
                "yAxis": [
                    {
                        //wukong!
                        "type": "value",
                        show: true,
                        axisLine: {
                            lineStyle: {
                                //轴线颜色
                                color: "#c4c4c4",
                                width: 1
                            }
                        },
                        axisTick: {
                            //是否显示轴刻度
                            show: false
                        },
                        axisLabel: {
                            margin: yMargin,
                            show: true,
                            textStyle: {
                                //轴字体颜色
                                color: '#333',
                                fontSize: 14,
                            },
                        },
                        splitArea: {
                            areaStyle: {
                                //图形透明度
                                opacity: splitAreaOpacity
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: "#eee",
                                width: 1
                            }
                        },
                    }
                ]
            };
        }

        //面积图
        if (data.graph == 'stack-area') {
            var series = [];
            //心形
            legend['icon'] = "emptycircle"
            legend['itemGap'] = 10
            legend['itemWidth'] = 14
            var len = []
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }
            for (var i = 0; i < len; i++) {
                series[i] = {
                    type: 'line',
                    //折线上标记的图形，none为不显示
                    // symbol: 'none',
                    smooth: true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    name: graphdata['y'][i]['name'],
                    data: graphdata['y'][i]['data'],
                }
            }
            grid.top -= 36
            grid.bottom -= 10
            grid.left -= 32
            option = {
                grid: grid,
                //添加水印方案2
                graphic: graphic,
                title: title,
                toolbox: toolbox,
                animationDuration: animationDuration,
                animation: animation,
                legend: legend,
                //面积图dz
                dataZoom: dataZoom,
                tooltip: {
                    show: tooltip,
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: 'rgba(196,196,196,1)'
                        },
                    },
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    formatter: function (params) {
                        // x轴名称
                        var relName = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relName += '<br/> <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                        }
                        return relName;
                    }
                },
                "series": series,
                "xAxis": [
                    {
                        //坐标轴指示器
                        axisPointer: {
                            type: 'line',
                            crossStyle: {
                                color: '#c4c4c4'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //轴线颜色
                                color: "#c4c4c4",
                                width: 1
                            }
                        },
                        axisTick: {
                            //是否显示轴刻度
                            show: true
                        },
                        axisLabel: {
                            //强制显示所有标签
                            interval: 0,
                            margin: xMargin,
                            show: true,
                            textStyle: {
                                //轴字体颜色
                                color: '#333',
                                fontSize: 14,
                            },
                        },
                        splitLine: {
                            lineStyle: splitLineColor,
                            width: 1,
                        },
                        splitArea: {
                            areaStyle: {
                                //图形透明度
                                opacity: splitAreaOpacity
                            }
                        },
                        splitLine: {show: false},
                        // "data": graphdata['x']['data'],
                        "data": xaxisdata,
                        type: 'category',
                        boundaryGap: false,
                    }
                ],
                "yAxis": [
                    {
                        //wukong!
                        "type": "value",
                        show: true,
                        axisLine: {
                            lineStyle: {
                                //轴线颜色
                                color: "#c4c4c4",
                                width: 1
                            }
                        },
                        axisTick: {
                            //是否显示轴刻度
                            show: false
                        },
                        axisLabel: {
                            margin: yMargin,
                            show: true,
                            textStyle: {
                                //轴字体颜色
                                color: '#333',
                                fontSize: 14,
                            },
                        },
                        splitArea: {
                            areaStyle: {
                                //图形透明度
                                opacity: splitAreaOpacity
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: "#eee",
                                width: 1
                            }
                        },
                    }
                ]
            };
        }

        //标准柱状图
        if (data.graph == 'bar') {
            var series = [];
            var len = [];
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }
            for (var i = 0; i < len; i++) {
                series[i] = {
                    type: "bar",
                    //折线上标记的图形，none为不显示
                    symbol: 'none',
                    //柱子最大宽度
                    barMaxWidth: 45,
                    barGap: "80%",
                    name: graphdata['y'][i]['name'],
                    data: graphdata['y'][i]['data'],
                }
            }
            grid.left -= 44,
                grid.right -= 2,
                option = {
                    grid: grid,
                    //添加水印方案2
                    graphic: graphic,
                    title: title,
                    toolbox: toolbox,
                    animationDuration: animationDuration,
                    animation: animation,
                    //标准柱状图dz
                    dataZoom: dataZoom,
                    tooltip: {
                        show: tooltip,
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: 'rgba(255,255,255,0)'
                            },
                        },
                        //悬浮框中文字向左对齐
                        textStyle: {
                            align: 'left'
                        },
                        formatter: function (params) {
                            // x轴名称
                            var relName = params[0].name;
                            for (var i = 0, l = params.length; i < l; i++) {
                                relName += '<br/> <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                            }
                            return relName;
                        }
                    },
                    "series": series,
                    "xAxis": [
                        {
                            //坐标轴指示器
                            axisPointer: {
                                type: 'line',
                                crossStyle: {
                                    color: '#c4c4c4'
                                }
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    //轴线颜色
                                    color: "#c4c4c4",
                                    width: 1
                                }
                            },
                            axisTick: {
                                //是否显示轴刻度
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                //强制显示所有标签
                                interval: 0,
                                //标签旋转角度
                                // rotate:45,
                                margin: xMargin,
                                textStyle: {
                                    //轴字体颜色
                                    color: '#333',
                                    fontSize: 14,
                                },
                            },
                            splitLine: {
                                show: false,
                                lineStyle: splitLineColor,
                                width: 1,
                            },
                            splitArea: {
                                areaStyle: {
                                    //图形透明度
                                    opacity: splitAreaOpacity
                                }
                            },
                            "data": xaxisdata,
                            type: 'category'
                        }
                    ],
                    "yAxis": [
                        {
                            //wukong!
                            "type": "value",
                            show: true,
                            axisLine: {
                                lineStyle: {
                                    //轴线颜色
                                    color: "#c4c4c4",
                                    width: 1
                                }
                            },
                            axisTick: {
                                //是否显示轴刻度
                                show: false
                            },
                            axisLabel: {
                                margin: yMargin,
                                show: true,
                                textStyle: {
                                    //轴字体颜色
                                    color: '#333',
                                    fontSize: 14,
                                },
                            },
                            splitArea: {
                                areaStyle: {
                                    //图形透明度
                                    opacity: splitAreaOpacity
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: "#eee",
                                    width: 1
                                }
                            },
                        }
                    ]
                };
        }

        // 平均柱状图
        if (data.graph == 'bar-average') {
            //console.log(graphdata)
            var series = [];
            var len = [];
            // 第二种方案：使用循环将series循环输出
            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }
            for (var i = 0; i < len; i++) {
                series[i] = {
                    type: "bar",
                    //折线上标记的图形，none为不显示
                    symbol: 'none',
                    //柱子最大宽度
                    barMaxWidth: 45,
                    // y轴平均线
                    markLine: {
                        itemStyle: {
                            normal: {
                                color: '#FA8565',
                                label: {formatter: '{c}'}
                            }
                        },
                        data: [
                            {type: 'average', name: '平均值'},
                        ]
                    },
                    barGap: "80%",
                    name: graphdata['y'][i]['name'],
                    data: graphdata['y'][i]['data'],
                }
            }
            grid.left -= 44,
                grid.right += 23,
                option = {
                    grid: grid,
                    //添加水印方案2
                    graphic: graphic,
                    title: title,
                    toolbox: toolbox,
                    animationDuration: animationDuration,
                    animation: animation,
                    tooltip: {
                        show: tooltip,
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: 'rgba(255,255,255,0)'
                            },
                        },
                        //悬浮框中文字向左对齐
                        textStyle: {
                            align: 'left'
                        },
                        formatter: function (params) {
                            // x轴名称
                            var relName = params[0].name;
                            for (var i = 0, l = params.length; i < l; i++) {
                                relName += '<br/> <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                            }
                            return relName;
                        }
                    },
                    //平均柱状图dz
                    dataZoom: dataZoom,
                    "series": series,
                    "xAxis": [
                        {
                            //坐标轴指示器
                            axisPointer: {
                                type: 'line',
                                crossStyle: {
                                    color: '#c4c4c4'
                                }
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    //轴线颜色
                                    color: "#c4c4c4",
                                    width: 1
                                }
                            },
                            axisTick: {
                                //是否显示轴刻度
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                //强制显示所有标签
                                interval: 0,
                                //标签旋转角度
                                // rotate:45,
                                margin: xMargin,
                                textStyle: {
                                    //轴字体颜色
                                    color: '#333',
                                    fontSize: 14,
                                },
                            },
                            splitLine: {
                                show: false,
                                lineStyle: splitLineColor,
                                width: 1,
                            },
                            splitArea: {
                                areaStyle: {
                                    //图形透明度
                                    opacity: splitAreaOpacity
                                }
                            },
                            "data": xaxisdata,
                            type: 'category'
                        }
                    ],
                    "yAxis": [
                        {
                            //wukong!
                            "type": "value",
                            show: true,
                            axisLine: {
                                lineStyle: {
                                    //轴线颜色
                                    // color: axisLineColor
                                    color: "#c4c4c4",
                                    width: 1,
                                }
                            },
                            axisTick: {
                                //是否显示轴刻度
                                show: false
                            },
                            axisLabel: {
                                margin: yMargin,
                                show: true,
                                textStyle: {
                                    //轴字体颜色
                                    color: '#333',
                                    fontSize: 14,
                                },
                            },
                            splitArea: {
                                areaStyle: {
                                    //图形透明度
                                    opacity: splitAreaOpacity
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: "#eee",
                                    width: 1
                                }
                            },
                        },
                        {
                            //坐标轴右侧第二个Y轴
                            type: 'value',
                            name: '',
                            axisLine: {
                                lineStyle: {
                                    //轴线颜色
                                    color: "#c4c4c4",
                                    width: 1
                                }
                            },
                        }
                    ]
                };
        }

        console.log(option)
        if(option.title[0].text){
            option.title[0].text = getNewTitleStr(option.title[0].text,$('#' + obj).width());
        }
        // console.log('===>',option)
        //设置高度
        // if(!option.height && option.yAxis[0] && option.yAxis[0].data){
        //     console.log(option.yAxis[0].data);
        //     var dataNum = option.yAxis[0].data.length;
        //     $('#main').height(160 + dataNum * 60);
        //     // $('.main').height(160 + dataNum * 60);
        // }
        // 使用刚指定的配置项和数据显示图表。
        // console.log(JSON.stringify(option));
        myChart.setOption(option);

        var currentWidth = $('#' + obj).width();
        //图表跟随窗口大小自适应
        $(window).resize(function () {
            //宽度发生变化时
            if(currentWidth !== $('#' + obj).width()){
                //大标题随窗口自适应
                if(option.title[0].text && bigTitle){
                    option.title[0].text = getNewTitleStr(bigTitle,$('#' + obj).width());
                }
                //百分比堆叠条形图图例自适应
                if (data.graph == 'stacked_bar') {
                    //设置legend的左间距（自适应宽度）
                    if(graphdata.x.data.length > 1){
                        option.legend.width = $('#'+obj).width()-282;
                    }else{
                        option.legend.width = $('#'+obj).width()-72;
                    }
                    option.legend.right = 30;
                    // option.legend.pageFormatter = function(params){
                    //     if(params.total === 1){
                    //         option.legend.right = 30;//92;
                    //     }else{
                    //         option.legend.right = 30;//53;
                    //     }
                    // };
                }
                currentWidth = $('#' + obj).width();
                myChart.setOption(option);
            }
            myChart.resize();
        });
        console.log(option);
        // console.log(JSON.stringify(option));
        if (typeof callback === 'function') {
            callback()
        }
    }
})(window)