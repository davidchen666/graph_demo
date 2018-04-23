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
                "#732fc3",
                "#c0b7ff"
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


    window.graph_ajax = function ($, echarts, params, mapJson, callback = null) {
        console.log(mapJson)
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
            $('#' + obj).height($('#' + obj).height() - 70);
            //console.log('joson4: ' + $('#' + obj));
            lTop -= 43;
            lLeft += 75;
            gTop += 15;
            gLeft -= 9;
            rBottom += 2;
            lpGap += 20;
        } else if (typeof(d_data.legend) == "undefined") {
            $('#' + obj).height($('#' + obj).height() - 41);
            gTop -= 13;
            rBottom += 40;

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

        //图片地址
        var wordCloudImageUrl = 'data:image/png;base64,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'

        //使用echarts.init()创建图表,第二个参数即为刚才注册的主题名字。
        //console.log(graphdata);
        //接收div高和宽
        //var echartsObj = document.getElementById(obj);
        var echartsObj = window.document.getElementById(obj);
        echartsObj.style.height == "" ? echartsObj.style.height = "723px" : echartsObj.style.height = graphdata.height + 'px';
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
            bigTitle = graphdata['bigTitle']
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
                    fontSize: 12,
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
                    top: '8',
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
            ;

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
                        radius: [ring_center_i + '%', ring_center_n + '%'],
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
            const title = [
                {
                    subtextStyle: {
                        fontSize: 12,
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
                        width: "69.29%",
                        height: "53.55%",
                    }
                ],
            };
            //点击图形可合并数据
            myChart.on('click', function (params) {
                option['legend']['selected'][params.name] = false
                myChart.setOption(option);
            });
            //maskImage.onload = function () {
            //    myChart.setOption(option);
            //}
            //return false

        }

        //地图
       if (data.graph == 'heapmap') {
            var series = [];
            // var legend = [];
            var len = [];
            var i = 0;
            var sum =0;
            var datamax = [];
            var formatter = {};

            if (typeof(graphdata['y'].length) != "undefined") {
                len = graphdata['y'].length;
            }
            for (i = 0; i < len; i++) {
                datamax[i] = graphdata['y'][0]['data1'][i]['value'];
                var yNum =   graphdata['y'][0]['data1'][i]['value'];
                //数组求和
                sum += parseFloat(yNum);
                series = graphdata['y'][0]['data1']
                console.log(series);
            }
            option = {
                //添加水印方案2
                graphic:graphic,
                toolbox: toolbox,
                grid: grid,
                title: title,
                animation: animation,
                animationDuration: animationDuration,
                tooltip:
                    {
                    show: tooltip,
                    trigger: 'item',
                    //悬浮框中文字向左对齐
                    textStyle: {
                        align: 'left'
                    },
                    // formatter: '{b}' + '<br/>' +'{c}' + graphdata['unit']
                        formatter : function (params) {
                            //百分比值
                            var params_value = (params.value/sum*100);
                            //保留小数点
                            var params_nums = 0;
                            //验证小数点位数
                            if(params_value.toString().indexOf(".") <= 0){
                                params_nums = 0;
                            } else {
                                if(params_value.toString().split(".")[1].length >= 10) {
                                    params_nums = 10;
                                } else {
                                    params_nums = params_value.toString().split(".")[1].length;
                                }
                            };
                            //返回
                            return params.name + "<br/>" +
                                params_value.toFixed(4) + '%<br/>' +
                                params.value + graphdata['unit'];
                        }
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
                    left: 25,
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
            
            //城市
            var couties ={
                "北京市": "110100",
                "天津市": "120100",
                "上海市": "310100",
                "重庆市": "500100",

                "崇明县": "310200", //
                "湖北省直辖县市": "429000", //
                "铜仁市": "522200", //
                "毕节市": "522400", //

                "石家庄市": "130100",
                "唐山市": "130200",
                "秦皇岛市": "130300",
                "邯郸市": "130400",
                "邢台市": "130500",
                "保定市": "130600",
                "张家口市": "130700",
                "承德市": "130800",
                "沧州市": "130900",
                "廊坊市": "13100",
                "衡水市": "131100",
                "太原市": "140100",
                "大同市": "140200",
                "阳泉市": "140300",
                "长治市": "140400",
                "晋城市": "140500",
                "朔州市": "140600",
                "晋中市": "140700",
                "运城市": "140800",
                "忻州市": "140900",
                "临汾市": "14100",
                "吕梁市": "141100",
                "呼和浩特市": "150100",
                "包头市": "150200",
                "乌海市": "150300",
                "赤峰市": "150400",
                "通辽市": "150500",
                "鄂尔多斯市": "150600",
                "呼伦贝尔市": "150700",
                "巴彦淖尔市": "150800",
                "乌兰察布市": "150900",
                "兴安盟": "152200",
                "锡林郭勒盟": "152500",
                "阿拉善盟": "152900",
                "沈阳市": "210100",
                "大连市": "210200",
                "鞍山市": "210300",
                "抚顺市": "210400",
                "本溪市": "210500",
                "丹东市": "210600",
                "锦州市": "210700",
                "营口市": "210800",
                "阜新市": "210900",
                "辽阳市": "21100",
                "盘锦市": "211100",
                "铁岭市": "211200",
                "朝阳市": "211300",
                "葫芦岛市": "211400",
                "长春市": "220100",
                "吉林市": "220200",
                "四平市": "220300",
                "辽源市": "220400",
                "通化市": "220500",
                "白山市": "220600",
                "松原市": "220700",
                "白城市": "220800",
                "延边朝鲜族自治州": "222400",
                "哈尔滨市": "230100",
                "齐齐哈尔市": "230200",
                "鸡西市": "230300",
                "鹤岗市": "230400",
                "双鸭山市": "230500",
                "大庆市": "230600",
                "伊春市": "230700",
                "佳木斯市": "230800",
                "七台河市": "230900",
                "牡丹江市": "23100",
                "黑河市": "231100",
                "绥化市": "231200",
                "大兴安岭地区": "232700",
                "南京市": "320100",
                "无锡市": "320200",
                "徐州市": "320300",
                "常州市": "320400",
                "苏州市": "320500",
                "南通市": "320600",
                "连云港市": "320700",
                "淮安市": "320800",
                "盐城市": "320900",
                "扬州市": "32100",
                "镇江市": "321100",
                "泰州市": "321200",
                "宿迁市": "321300",
                "杭州市": "330100",
                "宁波市": "330200",
                "温州市": "330300",
                "嘉兴市": "330400",
                "湖州市": "330500",
                "绍兴市": "330600",
                "金华市": "330700",
                "衢州市": "330800",
                "舟山市": "330900",
                "台州市": "33100",
                "丽水市": "331100",
                "合肥市": "340100",
                "芜湖市": "340200",
                "蚌埠市": "340300",
                "淮南市": "340400",
                "马鞍山市": "340500",
                "淮北市": "340600",
                "铜陵市": "340700",
                "安庆市": "340800",
                "黄山市": "34100",
                "滁州市": "341100",
                "阜阳市": "341200",
                "宿州市": "341300",
                "六安市": "341500",
                "亳州市": "341600",
                "池州市": "341700",
                "宣城市": "341800",
                "福州市": "350100",
                "厦门市": "350200",
                "莆田市": "350300",
                "三明市": "350400",
                "泉州市": "350500",
                "漳州市": "350600",
                "南平市": "350700",
                "龙岩市": "350800",
                "宁德市": "350900",
                "南昌市": "360100",
                "景德镇市": "360200",
                "萍乡市": "360300",
                "九江市": "360400",
                "新余市": "360500",
                "鹰潭市": "360600",
                "赣州市": "360700",
                "吉安市": "360800",
                "宜春市": "360900",
                "抚州市": "36100",
                "上饶市": "361100",
                "济南市": "370100",
                "青岛市": "370200",
                "淄博市": "370300",
                "枣庄市": "370400",
                "东营市": "370500",
                "烟台市": "370600",
                "潍坊市": "370700",
                "济宁市": "370800",
                "泰安市": "370900",
                "威海市": "37100",
                "日照市": "371100",
                "莱芜市": "371200",
                "临沂市": "371300",
                "德州市": "371400",
                "聊城市": "371500",
                "滨州市": "371600",
                "菏泽市": "371700",
                "郑州市": "410100",
                "开封市": "410200",
                "洛阳市": "410300",
                "平顶山市": "410400",
                "安阳市": "410500",
                "鹤壁市": "410600",
                "新乡市": "410700",
                "焦作市": "410800",
                "濮阳市": "410900",
                "许昌市": "41100",
                "漯河市": "411100",
                "三门峡市": "411200",
                "南阳市": "411300",
                "商丘市": "411400",
                "信阳市": "411500",
                "周口市": "411600",
                "驻马店市": "411700",
                "省直辖县级行政区划": "469000",
                "武汉市": "420100",
                "黄石市": "420200",
                "十堰市": "420300",
                "宜昌市": "420500",
                "襄阳市": "420600",
                "鄂州市": "420700",
                "荆门市": "420800",
                "孝感市": "420900",
                "荆州市": "42100",
                "黄冈市": "421100",
                "咸宁市": "421200",
                "随州市": "421300",
                "恩施土家族苗族自治州": "422800",
                "长沙市": "430100",
                "株洲市": "430200",
                "湘潭市": "430300",
                "衡阳市": "430400",
                "邵阳市": "430500",
                "岳阳市": "430600",
                "常德市": "430700",
                "张家界市": "430800",
                "益阳市": "430900",
                "郴州市": "43100",
                "永州市": "431100",
                "怀化市": "431200",
                "娄底市": "431300",
                "湘西土家族苗族自治州": "433100",
                "广州市": "440100",
                "韶关市": "440200",
                "深圳市": "440300",
                "珠海市": "440400",
                "汕头市": "440500",
                "佛山市": "440600",
                "江门市": "440700",
                "湛江市": "440800",
                "茂名市": "440900",
                "肇庆市": "441200",
                "惠州市": "441300",
                "梅州市": "441400",
                "汕尾市": "441500",
                "河源市": "441600",
                "阳江市": "441700",
                "清远市": "441800",
                "东莞市": "441900",
                "中山市": "442000",
                "潮州市": "445100",
                "揭阳市": "445200",
                "云浮市": "445300",
                "南宁市": "450100",
                "柳州市": "450200",
                "桂林市": "450300",
                "梧州市": "450400",
                "北海市": "450500",
                "防城港市": "450600",
                "钦州市": "450700",
                "贵港市": "450800",
                "玉林市": "450900",
                "百色市": "45100",
                "贺州市": "451100",
                "河池市": "451200",
                "来宾市": "451300",
                "崇左市": "451400",
                "海口市": "460100",
                "三亚市": "460200",
                "三沙市": "460300",
                "成都市": "510100",
                "自贡市": "510300",
                "攀枝花市": "510400",
                "泸州市": "510500",
                "德阳市": "510600",
                "绵阳市": "510700",
                "广元市": "510800",
                "遂宁市": "510900",
                "内江市": "51100",
                "乐山市": "511100",
                "南充市": "511300",
                "眉山市": "511400",
                "宜宾市": "511500",
                "广安市": "511600",
                "达州市": "511700",
                "雅安市": "511800",
                "巴中市": "511900",
                "资阳市": "512000",
                "阿坝藏族羌族自治州": "513200",
                "甘孜藏族自治州": "513300",
                "凉山彝族自治州": "513400",
                "贵阳市": "520100",
                "六盘水市": "520200",
                "遵义市": "520300",
                "安顺市": "520400",
                "黔西南布依族苗族自治州": "522300",
                "黔东南苗族侗族自治州": "522600",
                "黔南布依族苗族自治州": "522700",
                "昆明市": "530100",
                "曲靖市": "530300",
                "玉溪市": "530400",
                "保山市": "530500",
                "昭通市": "530600",
                "丽江市": "530700",
                "普洱市": "530800",
                "临沧市": "530900",
                "楚雄彝族自治州": "532300",
                "红河哈尼族彝族自治州": "532500",
                "文山壮族苗族自治州": "532600",
                "西双版纳傣族自治州": "532800",
                "大理白族自治州": "532900",
                "德宏傣族景颇族自治州": "533100",
                "怒江傈僳族自治州": "533300",
                "迪庆藏族自治州": "533400",
                "拉萨市": "540100",
                "昌都地区": "542100",
                "山南地区": "542200",
                "日喀则地区": "542300",
                "那曲地区": "542400",
                "阿里地区": "542500",
                "林芝地区": "542600",
                "西安市": "610100",
                "铜川市": "610200",
                "宝鸡市": "610300",
                "咸阳市": "610400",
                "渭南市": "610500",
                "延安市": "610600",
                "汉中市": "610700",
                "榆林市": "610800",
                "安康市": "610900",
                "商洛市": "61100",
                "兰州市": "620100",
                "嘉峪关市": "620200",
                "金昌市": "620300",
                "白银市": "620400",
                "天水市": "620500",
                "武威市": "620600",
                "张掖市": "620700",
                "平凉市": "620800",
                "酒泉市": "620900",
                "庆阳市": "62100",
                "定西市": "621100",
                "陇南市": "621200",
                "临夏回族自治州": "622900",
                "甘南藏族自治州": "623000",
                "西宁市": "630100",
                "海东地区": "632100",
                "海北藏族自治州": "632200",
                "黄南藏族自治州": "632300",
                "海南藏族自治州": "632500",
                "果洛藏族自治州": "632600",
                "玉树藏族自治州": "632700",
                "海西蒙古族藏族自治州": "632800",
                "银川市": "640100",
                "石嘴山市": "640200",
                "吴忠市": "640300",
                "固原市": "640400",
                "中卫市": "640500",
                "乌鲁木齐市": "650100",
                "克拉玛依市": "650200",
                "吐鲁番地区": "652100",
                "哈密地区": "652200",
                "昌吉回族自治州": "652300",
                "博尔塔拉蒙古自治州": "652700",
                "巴音郭楞蒙古自治州": "652800",
                "阿克苏地区": "652900",
                "克孜勒苏柯尔克孜自治州": "653000",
                "喀什地区": "653100",
                "和田地区": "653200",
                "伊犁哈萨克自治州": "654000",
                "塔城地区": "654200",
                "阿勒泰地区": "654300",
                "自治区直辖县级行政区划": "659000",
                "台湾省": "71000",
                "香港特别行政区": "810100",
                "澳门特别行政区": "820000"
            };
            //直辖市和特别行政区-只有二级地图，没有三级地图
            var municipality = ["北京","天津","上海","重庆","香港","澳门"];
            var mapdata = [];
           //绘制全国地图
           //$.getJSON('json/china.json', function(data){
           // test
            
            //console.log(data);
            //地图点击事件
            myChart.on('click', function (params) {
                //console.log( params );
                var selectedProvince = params.name;
                //引用远程地址
                var requestUrl =' http://106.14.248.228/graph_demo/json/provinces/' + provinces[selectedProvince] + '.json'
                const provinceName = provinces[selectedProvince]
                const cityData = mapJson[provinceName]
                echarts.registerMap( params.name, cityData);
				var newObject = $.extend(true, {}, option);
				//console.log(newObject);
                //var newObject = option;
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
				
				//返回中国按钮
				const chinaData = mapJson.china
				if (chinaData) {
                var d = [];
                for( var i=0;i<chinaData.features.length;i++ ){
                    d.push({
                        name:chinaData.features[i].properties.name
                    })
                }
                mapdata = d;
                //注册地图
                echarts.registerMap('china', chinaData);
                var wrap_map_html =
					'<ul class="wrap-return">'
					+'<li class="icon-china" id="return"><img src="http://106.14.248.228/graph_demo/img/icon_china.png" />中国</li>'
                    +'<li class="icon-arrow"><img src="http://106.14.248.228/graph_demo/img/icon_arrow.png" /></li>'
                    +'<li class="current-city">上海</li>'
                    +'</ul></div>';
				$('#' + obj).append(wrap_map_html);
                //绘制地图
                //renderMap('china',d);
            }
				
                // console.log(newObject, JSON.stringify(newObject));
                myChart.setOption(newObject);
                //renderMap('china',d);
                $("ul.wrap-return").show();
                $(".current-city").text(selectedProvince);
            });

            /*返回到中国地图*/
            $("body").on("click","#return",function(){
                myChart.setOption(option);
                $("ul.wrap-return").hide();
            });
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

                var sb = ''

                if (typeof(graphdata['y'][0]['percent']) == "undefined") {
                    sb = Math.round(graphdata['y'][0]['data'][i])
                    var max = null
                } else {
                    sb = Math.round(graphdata['y'][0]['percent'][i])
                    var max = 100
                }
                if ($.inArray(i, graphdataV) > -1) {
                    for (l = 0; l < graphdata['grayBar'].length; l++) {
                        if (graphdata['grayBar'][l]['index'] == i) {
                            var itemStyle = {"normal": {"color": graphdata['grayBar'][l]['color']}}
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
            console.log(sdata)
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
                        ;


                        if (typeof graphdata['y'][0]['percent'] == "undefined") {
                            //返回浮层结果
                            return params[0].name + "<br/>" +
                                graphdata['y'][0]['data'][params[0].dataIndex] + graphdata['unit'];
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
                                fontSize: 14,
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
            var just_right = [
                '#726BA4',
                '#8A83BB',
                '#A099D0',
                '#B7B1DD',
                '#C0B7FF',
                '#ADA1FF',
                '#9D82EF',
                '#9067E0',
                '#824DD2',
                '#732FC3'
            ]

            legend.top += 15;
            grid.top -= 15;
            grid.bottom -= 55;

            var just_right2 = []
            //console.log('just_right'+just_right.length)
            //console.log('graphdata'+graphdata['y'].length)
            for (var i = just_right.length - graphdata['y'].length; i < just_right.length; i++) {
                //console.log(i)
                just_right2[i - just_right.length + graphdata['y'].length] = just_right[i]
            }
            just_right = just_right2
            if (typeof(graphdata['grayType']) != "undefined") {
                if (graphdata['grayType'][0]['type'] == "likert" || graphdata['grayType'][0]['type'] == "rating") {
                    if (graphdata['grayType'][0]['sort'] == 2) {

                    }
                }


                if (graphdata['grayType'][0]['type'] == "just_right") {

                    just_right = ['#D1A3F1', '#AA69DF', '#732FC3', '#9067E0', '#ADA1FF']
                }


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


            legend.left = 'auto'
            legend.right = grid.right
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
                    var seriesP = []
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
                        if (graphdata['y'][i]['percent'][l] < 3) {
                            seriesP[l] = {
                                value: Math.round(graphdata['y'][i]['percent'][l]),
                                label: {
                                    normal: {
                                        show: false
                                    }
                                }
                            }

                        } else {
                            seriesP[l] = Math.round(graphdata['y'][i]['percent'][l])
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
                            }
                        }
                    },
                    //柱子最大宽度
                    barMaxWidth: 45
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
                        },
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

                        if (graphdata['y'][i]['percent'][l] < 10) {
                            seriesP[l] = {
                                value: Math.round(graphdata['y'][i]['percent'][l]),
                                label: {
                                    normal: {
                                        show: false
                                    }
                                }
                            }

                        } else {
                            seriesP[l] = Math.round(graphdata['y'][i]['percent'][l])
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


                                relName += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>' + params[i].seriesName + ' : ' + graphdata['y'][i]['percent'][params[i]['dataIndex']].toFixed(4) + '</br>';

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
                padding: [5, 0, 0, 0],
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
                        ;


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
                        radius: ring_center_n + 22 + '%',
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
                            {"value": parseInt(graphdata['y'][0]['data'][0])}
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
            grid.top -= 45,
                grid.height = 199,
                grid.width = 480,

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
                                ;


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
                                    "symbol": "path:\/\/m 100.55702,161.03384 c -6.077439,-1.21802 -8.357637,-8.69503 -4.007038,-13.13952 4.820698,-4.92474 13.254328,-1.44121 13.254328,5.47473 0,4.87383 -4.51213,8.61379 -9.24729,7.66479 z m -0.759346,-4.37014 c 1.200056,-0.91533 2.469196,-1.08812 3.700536,-0.50381 0.54186,0.25713 1.04654,0.62735 1.12151,0.82271 0.20972,0.54653 1.13802,0.43807 1.13802,-0.13296 0,-0.97295 -2.03243,-2.15767 -3.70157,-2.15767 -1.77676,0 -3.954581,1.35381 -3.612375,2.24559 0.205632,0.53587 0.32354,0.51202 1.353879,-0.27386 z m 0.615486,-4.4059 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40929,-0.40929 -1.601547,-0.40929 -2.010836,0 -0.409289,0.40929 -0.409289,1.60154 0,2.01083 0.409289,0.40929 1.601546,0.40929 2.010836,0 z m 5.29166,0 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40928,-0.40929 -1.60154,-0.40929 -2.01083,0 -0.17462,0.17462 -0.3175,0.62706 -0.3175,1.00541 0,0.37836 0.14288,0.83079 0.3175,1.00542 0.40929,0.40929 1.60155,0.40929 2.01083,0 z",
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
                                    "symbol": "path:\/\/M0,249 C0,386.531 111.469,498 249,498 C386.5144,498 498,386.531 498,249 C498,111.4856 386.5144,0 249,0 C111.469,0 0,111.4856 0,249 Z M290.5,182.6 C290.5,159.6754 309.092,141.1 332,141.1 C354.9246,141.1 373.5,159.6754 373.5,182.6 C373.5,205.508 354.9246,224.1 332,224.1 C309.092,224.1 290.5,205.508 290.5,182.6 Z M124.5,182.6 C124.5,159.6754 143.092,141.1 166,141.1 C188.9246,141.1 207.5,159.6754 207.5,182.6 C207.5,205.508 188.9246,224.1 166,224.1 C143.092,224.1 124.5,205.508 124.5,182.6 Z M336.5318,299.0158 C340.9806,292.3592 350.011,290.5664 356.6842,295.0318 C363.3408,299.4806 365.1336,308.511 360.6682,315.1676 C337.4614,349.8782 295.231,371.425 248.9668,371.425 C202.7524,371.425 160.5718,349.928 137.3318,315.2838 C132.8664,308.6438 134.6426,299.6134 141.3158,295.1314 C147.9724,290.666 157.0028,292.4422 161.4682,299.1154 C179.1804,325.526 212.2476,342.375 248.9668,342.375 C285.7358,342.375 318.8196,325.4762 336.5318,299.0158 Z",
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
        // 使用刚指定的配置项和数据显示图表。
        //console.log(JSON.stringify(option));
        myChart.setOption(option);

        //图表跟随窗口大小自适应
        $(window).resize(function () {
            myChart.resize();
        });
        if (typeof callback === 'function') {
            callback()
        }
    }
})(window)