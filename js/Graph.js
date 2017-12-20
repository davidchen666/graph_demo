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
var axisLabeColor = '#333';                     //轴字体颜色
var splitLineColor = '#eee';                    //网格(分隔线)颜色
var splitAreaLightColor = '#fff';               //网格（分隔区域颜色）填充色（浅）
var splitAreaDeepColor = '#eee';               //网格填充色（深）
var splitAreaOpacity = '0.3';                   //网格透明度

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
//谛听彩色主题
var dataThenme = [];
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
            "#077fb1",
            "#e4b84b",
            "#40a588",
            "#ac8957",
            "#05658d",
            "#e3c172",
            "#7858a0",
            "#1f92a8",
            "#c1a781",
            "#bb7676",
            "#87b797",
            "#005666",
            "#61b5b1",
            "#008760",
            "#a2a000",
            "#896d45",
            "#f3c81a",
            "#ef955d",
            "#a0435f",
            "#d77f99",
            "#5c9c1a",
            "#cbc900",
            "#ea7127",
            "#187486",
            "#96d359",
            "#55b0d3"
        ],
        "borderColor": "#ccc",
        "borderWidth": 0,
        "visualMapColor": [
            "#732fc3",
            "#c0b7ff"
        ],
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


var graph_ajax = function (data, obj, callback) {
    // console.log(data)
    var graphdata = {};
    graphdata = $.parseJSON(data.data)
    var d_data = typeof data.data == 'object' ? data.data : eval('(' + data.data + ');');
    // var graph_type = ['pie-doughnut', 'bar-y-category', 'gauge', 'bar-y-category-stack'];
    //定义图表类型
    //area：堆叠区域图
    //gauge：仪表盘图
    //scatter-relationship：散点关系图
    //bar-y-category：纵向柱状图
    //bar-y-category-stack：纵向柱状堆叠图
    //line：折线图
    //k：k线图
    //graph：力导图
    var graph_type = ['pie', 'wordCloud', 'map', 'line', 'k', 'area', 'gauge', 'bar-x-category', 'bar-y-category', 'bar-y-category-stack', 'scatter-relationship', 'bar-x-category-stack'];
    if ($.inArray(data.graph, graph_type) == -1) {
        alert('暂无该图表类型');
        return false;
    }
    var themename = data.theme;
    // var themename='wk_colorful';
    var echartsTheme = dataThenme[themename].theme;
    // console.log(echartsTheme);
    // console.log(echartsTheme)
    // console.log(mlTheme.theme)
    // console.log(wkTheme.theme)
    // console.log(wk2Theme.theme)
    // console.log(autoTheme.theme)

    // 调用echarts.registerTheme()注册主题
    echarts.registerTheme('DT', echartsTheme)
    // echarts.registerTheme('WK_purple', echartsTheme)
    //使用echarts.init()创建图标，第二个参数即为刚才注册的主题名字。
    var myChart = echarts.init(document.getElementById(obj), 'DT');
    // var myChart = echarts.init(document.getElementById(obj),'WK_purple');
    var feature = {}
    var source1 = ''
    var source2 = ''
    if (typeof(d_data.source) != "undefined") {
        source1 = d_data.source;
    }
    if (typeof(d_data.source2) != "undefined") {
        source2 = d_data.source2;
    }
    //对下载功能有无进行判断
    if (typeof(d_data.downloadimg) == "undefined" || d_data.downloadimg == 1) {
        feature = {"saveAsImage": {"type": "png"}}
    }
    //对网页自适应进行判断
    var gTop = 23;
    var gBottom = 27;
    if (typeof(d_data.big_title) == "undefined") {
        gTop -= 8

    }
    if (typeof(d_data.small_title) == "undefined") {
        gTop -= 8

    }
    if (typeof(d_data.remarks1) == "undefined") {

        gBottom -= 11
    }
    if (typeof(d_data.remarks2) == "undefined") {

        gBottom -= 11
    }
    var grid = {
        left: '4.3%',
        right: '3%',
        bottom: gBottom + '%',
        top: gTop + '%',
        containLabel: true
    }
    var remarks1 = ''
    var remarks2 = ''
    if (typeof(d_data.remarks2) != "undefined") {

        remarks1 = graphdata['remarks1']
    }
    if (typeof(d_data.remarks2) != "undefined") {

        remarks2 = graphdata['remarks2']
    }

    //默认显示tooltip
    var tooltip = true;
    //tooptip==2时不显示
    if (graphdata['tooltip'] == 2) {
        tooltip = false;
    }
    // console.log(graphdata);
    var title = [
        {

            subtextStyle: {
                height: '1.5%'
            },

            //标题内边距,上右下左
            padding: [20, 0, 0, 40],
            //主标题和副标题之间的间距
            // itemGap: '1%',
            text: graphdata['big_title'],
            subtext: graphdata['small_title'],
        }, {
            text: '',
            subtext: remarks1 + '\n\n' + remarks2,
            left: '5.8%',
            top: '80%'
        }
    ]

    // data.graph = 'gauge'
    // 指定图表的配置项和数据
    var option = {}
    //圆环饼图
    if (data.graph == 'pie') {
        option = {
                    animationDuration: animationDuration,
                    "toolbox": {"feature": {"saveAsImage": {"type": "png"}}},
                    "grid": {
                        "show": false,
                        "top": "65px",
                        "height": "340px",
                        "left": "20%",
                        "right": "20%",
                        "width": "500px",
                        "z": 2,
                        "zlevel": 0,
                        "bottom": 30
                    },
                    // "legend": {
                    //     "selectedMode": false,
                    //     "itemWidth": 14,
                    //     "itemHeight": 14,
                    //     "itemGap": 20,
                    //     "bottom": 180,
                    //     "top": "middle",
                    //     "left": "0px",
                    //     "orient": "vertical",
                    //     "data": ["男", "女"]
                    // },
                    "series": [{
                                "type": "pie",
                                "radius": [110, 170],
                                "avoidLabelOverlap": false,
                                "hoverAnimation": false,
                                "stillShowZeroSum": false,
                                "height": 230,
                                //图表上的数据
                                "data": [
                                            {
                                            "value": 66.66666666666667,
                                            "name": "男",
                                            },
                                            {
                                            "value": 33.333333333333336,
                                            "name": "女",
                                            }
                                        ]
                                }],
                    "unit": "人",
                    "tooltipNumberBits": 10,
                    "numberBits": 0,
                    // "title": [{
                    //     "text": "姓别？",
                    //     "subtext": "%",
                    //     "left": 0,
                    //     "bottom": 0,
                    //     "top": "0px"
                    // }, {
                    //     "text": "",
                    //     "subtext": "基数: 所有被访者 n=3 \n\n数据来源：Q2",
                    //     "left": 0,
                    //     "bottom": "30px",
                    //     "top": "510px"
                    // }],
                    "chartHeight": "568"
        };
    }

    //词云
    if (data.graph == 'wordCloud') {
        // var series = [];
        // // var legend = [];
        // //循环series
        // for (var i = 0;i < len; i++)
        // {
        //     series[i] =
        //         {
        //             "type": "wordCloud",
        //             "sizeRange": [20, 60],//字体大小范围
        //             "rotationRange": [-40, 20],//角度
        //             "gridSize": 10,//偏移
        //             "width": "100%",//字浮云宽度
        //             name: graphdata['y'][i]['name'],
        //             value:graphdata['y'][i],
        //             data: graphdata['y'][i]['data']
        //         }
        // }
        option = {
            animationDuration: animationDuration,
            toolbox: {
                feature: {
                    saveAsImage: {show: true}   //辅助工具-保存图片
                }
            },
            // series:series
            "series": {
                "type": "wordCloud",
                "sizeRange": [20, 60],//字体大小范围
                "rotationRange": [-40, 20],//角度
                "gridSize": 10,//偏移
                "width": "100%",//字浮云宽度
                "data": [
                    {
                        value: 1,
                        name: 'nick喜欢红烧肉',
                    },
                    {
                        "value": 2,
                        "name": 'davy喜欢炸酱面',
                    },
                    {
                        "value": 3,
                        "name": 'gavin喜欢小笼包',
                    },
                    {
                        "value": 4,
                        "name": '红灯笼',
                    },
                    {
                        "value": 5,
                        "name": '圣诞节',
                    },
                    {
                        "value": 6,
                        "name": '圣诞礼物',
                    },
                    {
                        "value": 7,
                        "name": "现货",
                    },
                    {
                        "value": 8,
                        "name": "男女",
                    },
                    {
                        "value": 9,
                        "name": "看看书",
                    },
                    {
                        "value": 10,
                        "name": "解放军",
                    },
                    {
                        "value": 11,
                        "name": "oe",
                    }
                ]
            },
        };
    }

    //地图
    if (data.graph == 'map') {



        option = {
            "toolbox": {"feature": {"saveAsImage": {"type": "png"}}},
            "tooltip": {"trigger": "item"},
            "visualMap": {
                "type": "continuous",
                "min": 0,
                "max": 2,
                "inRange": {"color": [echartsTheme.visualMapColor[1], echartsTheme.visualMapColor[0]]},
                "text": ["高", "低"],
                "calculable": true,
                "bottom": 50,
                "zlevel": 2
            },
            "grid": {
                "show": false,
                "top": "65px",
                "height": "340px",
                "left": "20%",
                "right": "20%",
                "width": "600px",
                "z": 2,
                "zlevel": 0,
                "bottom": 30
            },
            "series": [{
                "type": "map",
                "name": "选择器",
                "mapType": "china",
                "top": "110",
                "width": 450,
                "center": [103.8328367911, 36.0653685116],
                "roam": false,
                "textFixed": {
                    "广东": [0, -10],
                    "香港": [10, 10],
                    "澳门": [-10, 18],
                    "黑龙江": [0, 20],
                    "天津": [5, 5],
                    "深圳市": [-35, 0],
                    "红河哈尼族彝族自治州": [0, 20],
                    "楚雄彝族自治州": [-5, 15],
                    "石河子市": [-5, 5],
                    "五家渠市": [0, -10],
                    "昌吉回族自治州": [10, 10],
                    "昌江黎族自治县": [0, 20],
                    "陵水黎族自治县": [0, 20],
                    "东方市": [0, 20],
                    "渭南市": [0, 20]
                },
                "zoom": 1.2,
                "itemStyle": {
                    "normal": {
                        "borderWidth": 0.5,
                        "borderType": "solid",
                        // "borderColor": "rgba(196,196,196, 1)",
                        // "areaColor": "rgba(238,238,238,1)"
                    },
                    "emphasis": {
                        "shadowOffsetX": 0,
                        // "areaColor": "#f5a623",
                        // "borderColor": "#666",
                        "borderWidth": "0.5"
                    }
                },
                "label": {
                    "normal": {
                        "show": true,
                        "textStyle": {"show": true},
                        // "color": "#333333"
                    },
                    "emphasis": {
                        "show": true,
                        "textStyle": {
                            "show": true,
                            // "color": "#732fc3"
                        }
                    }
                },
                "data": [
                    {
                        "value": 0,
                        "name": "内蒙古",
                    }, {
                        "value": 2,
                        "name": "北京",
                    }, {
                        "value": 0,
                        "name": "湖北",
                    }, {
                        "value": 0,
                        "name": "海南",
                    }, {
                        "value": 0,
                        "name": "山西",
                    }, {
                        "value": 0,
                        "name": "香港",
                    }, {
                        "value": 0,
                        "name": "黑龙江",
                    }, {
                        "value": 0,
                        "name": "江西",
                    }, {
                        "value": 0,
                        "name": "重庆",
                    }, {
                        "value": 0,
                        "name": "河南",
                    }, {
                        "value": 0,
                        "name": "吉林",
                    }, {
                        "value": 0,
                        "name": "贵州",
                    }, {
                        "value": 0,
                        "name": "陕西",
                    }, {
                        "value": 0,
                        "name": "河北",
                    }, {
                        "value": 0,
                        "name": "广东",
                    }, {
                        "value": 0,
                        "name": "宁夏",
                    }, {
                        "value": 0,
                        "name": "山东",
                    }, {
                        "value": 1,
                        "name": "天津",
                    }, {
                        "value": 0,
                        "name": "新疆",
                    }, {
                        "value": 0,
                        "name": "四川",
                    }, {
                        "value": 0,
                        "name": "浙江",
                    }, {
                        "value": 0,
                        "name": "福建",
                    }, {
                        "value": 0,
                        "name": "辽宁",
                    }, {
                        "value": 0,
                        "name": "台湾",
                    }, {
                        "value": 0,
                        "name": "甘肃",
                    }, {
                        "value": 0,
                        "name": "湖南",
                    }, {
                        "value": 0,
                        "name": "安徽",
                    }, {
                        "value": 0,
                        "name": "青海",
                    }, {
                        "value": 0,
                        "name": "云南",
                    }, {
                        "value": 1,
                        "name": "上海",
                    }, {
                        "value": 0,
                        "name": "西藏",
                    }, {
                        "value": 0,
                        "name": "澳门",
                    }, {
                        "value": 0,
                        "name": "江苏",
                    }, {
                        "value": 0,
                        "name": "广西",
                    }],
                "map_city": [{
                    "value": 0,
                    "name": "徐州市",
                }, {
                    "value": 0,
                    "name": "三沙市",
                }, {
                    "value": 0,
                    "name": "塔城地区",
                }, {
                    "value": 0,
                    "name": "河源市",
                }, {
                    "value": 0,
                    "name": "杭州市",
                }, {
                    "value": 0,
                    "name": "濮阳市",
                }, {
                    "value": 0,
                    "name": "吉安市",
                }, {
                    "value": 0,
                    "name": "盘锦市",
                }, {
                    "value": 0,
                    "name": "新乡市",
                }, {
                    "value": 0,
                    "name": "沧州市",
                }, {
                    "value": 0,
                    "name": "清远市",
                }, {
                    "value": 0,
                    "name": "株洲市",
                }, {
                    "value": 0,
                    "name": "琼中黎族苗族自治县",
                }, {
                    "value": 0,
                    "name": "合肥市",
                }, {
                    "value": 0,
                    "name": "石嘴山市",
                }, {
                    "value": 0,
                    "name": "酒泉市",
                }, {
                    "value": 0,
                    "name": "铜仁市",
                }, {
                    "value": 0,
                    "name": "四平市",
                }, {
                    "value": 0,
                    "name": "海南藏族自治州",
                }, {
                    "value": 0,
                    "name": "嘉兴市",
                }, {
                    "value": 0,
                    "name": "运城市",
                }, {
                    "value": 0,
                    "name": "茂名市",
                }, {
                    "value": 0,
                    "name": "保山市",
                }, {
                    "value": 0,
                    "name": "延边朝鲜族自治州",
                }, {
                    "value": 0,
                    "name": "漳州市",
                }, {
                    "value": 0,
                    "name": "陇南市",
                }, {
                    "value": 0,
                    "name": "日照市",
                }, {
                    "value": 0,
                    "name": "信阳市",
                }, {
                    "value": 0,
                    "name": "银川市",
                }, {
                    "value": 0,
                    "name": "迪庆藏族自治州",
                }, {
                    "value": 0,
                    "name": "湘西土家族苗族自治州",
                }, {
                    "value": 0,
                    "name": "新余市",
                }, {
                    "value": 0,
                    "name": "鄂尔多斯市",
                }, {
                    "value": 0,
                    "name": "肇庆市",
                }, {
                    "value": 0,
                    "name": "荆门市",
                }, {
                    "value": 0,
                    "name": "深圳市",
                }, {
                    "value": 0,
                    "name": "荆州市",
                }, {
                    "value": 0,
                    "name": "凉山彝族自治州",
                }, {
                    "value": 0,
                    "name": "拉萨市",
                }, {
                    "value": 0,
                    "name": "三门峡市",
                }, {
                    "value": 0,
                    "name": "东方市",
                }, {
                    "value": 0,
                    "name": "德宏傣族景颇族自治州",
                }, {
                    "value": 0,
                    "name": "来宾市",
                }, {
                    "value": 0,
                    "name": "南充市",
                }, {
                    "value": 0,
                    "name": "黔南布依族苗族自治州",
                }, {
                    "value": 0,
                    "name": "衡阳市",
                }, {
                    "value": 0,
                    "name": "烟台市",
                }, {
                    "value": 0,
                    "name": "黄山市",
                }, {
                    "value": 0,
                    "name": "大庆市",
                }, {
                    "value": 0,
                    "name": "遂宁市",
                }, {
                    "value": 0,
                    "name": "苏州市",
                }, {
                    "value": 0,
                    "name": "玉林市",
                }, {
                    "value": 0,
                    "name": "锦州市",
                }, {
                    "value": 0,
                    "name": "澳门特别行政区",
                }, {
                    "value": 0,
                    "name": "鄂州市",
                }, {
                    "value": 0,
                    "name": "景德镇市",
                }, {
                    "value": 0,
                    "name": "通辽市",
                }, {
                    "value": 0,
                    "name": "镇江市",
                }, {
                    "value": 0,
                    "name": "长沙市",
                }, {
                    "value": 0,
                    "name": "东营市",
                }, {
                    "value": 0,
                    "name": "佛山市",
                }, {
                    "value": 0,
                    "name": "台湾省",
                }, {
                    "value": 0,
                    "name": "西安市",
                }, {
                    "value": 0,
                    "name": "吐鲁番地区",
                }, {
                    "id": 542500,
                    "value": 0,
                    "name": "阿里地区",

                }, {
                    "value": 0,
                    "name": "晋城市",
                }, {
                    "value": 0,
                    "name": "漯河市",
                }, {
                    "value": 0,
                    "name": "抚顺市",
                }, {
                    "value": 0,
                    "name": "眉山市",
                }, {
                    "value": 0,
                    "name": "攀枝花市",
                }, {
                    "value": 0,
                    "name": "临夏回族自治州",
                }, {
                    "value": 0,
                    "name": "唐山市",
                }, {
                    "value": 0,
                    "name": "黔东南苗族侗族自治州",
                }, {
                    "value": 0,
                    "name": "鸡西市",
                }, {
                    "value": 0,
                    "name": "黄石市",
                }, {
                    "value": 0,
                    "name": "池州市",
                }, {
                    "value": 0,
                    "name": "七台河市",
                }, {
                    "value": 0,
                    "name": "大同市",
                }, {
                    "value": 0,
                    "name": "自贡市",
                }, {
                    "value": 0,
                    "name": "嘉峪关市",
                }, {
                    "value": 0,
                    "name": "辽源市",
                }, {
                    "value": 0,
                    "name": "巴中市",
                }, {
                    "value": 0,
                    "name": "北海市",
                }, {
                    "value": 1,
                    "name": "上海市",
                }, {
                    "value": 0,
                    "name": "中山市",
                }, {
                    "value": 0,
                    "name": "丽水市",
                }, {
                    "value": 0,
                    "name": "潮州市",
                }, {
                    "value": 0,
                    "name": "阿拉善盟",
                }, {
                    "value": 0,
                    "name": "沈阳市",
                }, {
                    "value": 0,
                    "name": "巴彦淖尔市",
                }, {
                    "value": 0,
                    "name": "图木舒克市",
                }, {
                    "value": 0,
                    "name": "邢台市",
                }, {
                    "value": 0,
                    "name": "十堰市",
                }, {
                    "value": 0,
                    "name": "韶关市",
                }, {
                    "value": 0,
                    "name": "遵义市",
                }, {
                    "value": 0,
                    "name": "克孜勒苏柯尔克孜自治州",
                }, {
                    "value": 0,
                    "name": "芜湖市",
                }, {
                    "value": 0,
                    "name": "商洛市",
                }, {
                    "value": 0,
                    "name": "郴州市",
                }, {
                    "value": 0,
                    "name": "承德市",
                }, {
                    "value": 0,
                    "name": "福州市",
                }, {
                    "value": 0,
                    "name": "伊春市",
                }, {
                    "value": 0,
                    "name": "甘孜藏族自治州",
                }, {
                    "value": 0,
                    "name": "天门市",
                }, {
                    "value": 0,
                    "name": "潜江市",
                }, {
                    "value": 0,
                    "name": "武汉市",
                }, {
                    "value": 0,
                    "name": "仙桃市",
                }, {
                    "value": 0,
                    "name": "马鞍山市",
                }, {
                    "value": 0,
                    "name": "济源市",
                }, {
                    "value": 0,
                    "name": "阿勒泰地区",
                }, {
                    "value": 0,
                    "name": "娄底市",
                }, {
                    "value": 0,
                    "name": "哈密地区",
                }, {
                    "value": 0,
                    "name": "三亚市",
                }, {
                    "value": 0,
                    "name": "阳江市",
                }, {
                    "value": 0,
                    "name": "东莞市",
                }, {
                    "value": 0,
                    "name": "宜春市",
                }, {
                    "value": 0,
                    "name": "辽阳市",
                }, {
                    "value": 0,
                    "name": "天水市",
                }, {
                    "value": 0,
                    "name": "松原市",
                }, {
                    "value": 0,
                    "name": "平顶山市",
                }, {
                    "value": 0,
                    "name": "曲靖市",
                }, {
                    "value": 0,
                    "name": "安庆市",
                }, {
                    "value": 0,
                    "name": "大兴安岭地区",
                }, {
                    "value": 0,
                    "name": "海口市",
                }, {
                    "value": 0,
                    "name": "张家界市",
                }, {
                    "value": 0,
                    "name": "临沧市",
                }, {
                    "value": 0,
                    "name": "淮北市",
                }, {
                    "value": 0,
                    "name": "吉林市",
                }, {
                    "value": 0,
                    "name": "中卫市",
                }, {
                    "value": 0,
                    "name": "平凉市",
                }, {
                    "value": 0,
                    "name": "忻州市",
                }, {
                    "value": 0,
                    "name": "梅州市",
                }, {
                    "value": 0,
                    "name": "金华市",
                }, {
                    "value": 0,
                    "name": "湛江市",
                }, {
                    "value": 0,
                    "name": "日喀则地区",
                }, {
                    "value": 0,
                    "name": "朝阳市",
                }, {
                    "value": 0,
                    "name": "郑州市",
                }, {
                    "value": 0,
                    "name": "延安市",
                }, {
                    "value": 0,
                    "name": "绥化市",
                }, {
                    "value": 0,
                    "name": "泉州市",
                }, {
                    "value": 0,
                    "name": "揭阳市",
                }, {
                    "value": 0,
                    "name": "商丘市",
                }, {
                    "value": 0,
                    "name": "舟山市",
                }, {
                    "value": 0,
                    "name": "玉溪市",
                }, {
                    "value": 0,
                    "name": "榆林市",
                }, {
                    "value": 0,
                    "name": "兴安盟",
                }, {
                    "value": 0,
                    "name": "儋州市",
                }, {
                    "value": 0,
                    "name": "营口市",
                }, {
                    "value": 0,
                    "name": "廊坊市",
                }, {
                    "value": 0,
                    "name": "黄冈市",
                }, {
                    "value": 0,
                    "name": "黔西南布依族苗族自治州",
                }, {
                    "value": 0,
                    "name": "惠州市",
                }, {
                    "value": 0,
                    "name": "鹰潭市",
                }, {
                    "value": 0,
                    "name": "南京市",
                }, {
                    "value": 0,
                    "name": "伊犁哈萨克自治州",
                }, {
                    "value": 0,
                    "name": "庆阳市",
                }, {
                    "value": 0,
                    "name": "渭南市",
                }, {
                    "value": 0,
                    "name": "邵阳市",
                }, {
                    "value": 0,
                    "name": "广元市",
                }, {
                    "value": 0,
                    "name": "泰安市",
                }, {
                    "value": 0,
                    "name": "河池市",
                }, {
                    "value": 0,
                    "name": "内江市",
                }, {
                    "value": 0,
                    "name": "果洛藏族自治州",
                }, {
                    "value": 0,
                    "name": "宿州市",
                }, {
                    "value": 0,
                    "name": "萍乡市",
                }, {
                    "value": 0,
                    "name": "巴音郭楞蒙古自治州",
                }, {
                    "value": 0,
                    "name": "赤峰市",
                }, {
                    "value": 0,
                    "name": "扬州市",
                }, {
                    "value": 1,
                    "name": "天津市",
                }, {
                    "value": 0,
                    "name": "汕头市",
                }, {
                    "value": 0,
                    "name": "铜川市",
                }, {
                    "value": 0,
                    "name": "咸宁市",
                }, {
                    "value": 0,
                    "name": "襄阳市",
                }, {
                    "value": 0,
                    "name": "许昌市",
                }, {
                    "value": 0,
                    "name": "常德市",
                }, {
                    "value": 0,
                    "name": "香港特别行政区",
                }, {
                    "value": 0,
                    "name": "朔州市",
                }, {
                    "value": 0,
                    "name": "南通市",
                }, {
                    "value": 0,
                    "name": "南宁市",
                }, {
                    "value": 0,
                    "name": "贺州市",
                }, {
                    "value": 0,
                    "name": "宜宾市",
                }, {
                    "value": 0,
                    "name": "绵阳市",
                }, {
                    "value": 0,
                    "name": "德州市",
                }, {
                    "value": 0,
                    "name": "枣庄市",
                }, {
                    "value": 0,
                    "name": "重庆市",
                }, {
                    "value": 0,
                    "name": "亳州市",
                }, {
                    "value": 0,
                    "name": "宜昌市",
                }, {
                    "value": 0,
                    "name": "琼海市",
                }, {
                    "value": 0,
                    "name": "五指山市",
                }, {
                    "value": 0,
                    "name": "本溪市",
                }, {
                    "value": 0,
                    "name": "万宁市",
                }, {
                    "value": 0,
                    "name": "文昌市",
                }, {
                    "value": 0,
                    "name": "石家庄市",
                }, {
                    "value": 0,
                    "name": "海西蒙古族藏族自治州",
                }, {
                    "value": 0,
                    "name": "林芝地区",
                }, {
                    "value": 0,
                    "name": "阳泉市",
                }, {
                    "value": 0,
                    "name": "锡林郭勒盟",
                }, {
                    "value": 0,
                    "name": "淄博市",
                }, {
                    "value": 0,
                    "name": "克拉玛依市",
                }, {
                    "value": 0,
                    "name": "大理白族自治州",
                }, {
                    "value": 0,
                    "name": "广安市",
                }, {
                    "value": 0,
                    "name": "驻马店市",
                }, {
                    "value": 0,
                    "name": "兰州市",
                }, {
                    "value": 0,
                    "name": "大连市",
                }, {
                    "value": 0,
                    "name": "柳州市",
                }, {
                    "value": 0,
                    "name": "西宁市",
                }, {
                    "value": 0,
                    "name": "楚雄彝族自治州",
                }, {
                    "value": 0,
                    "name": "邯郸市",
                }, {
                    "value": 0,
                    "name": "广州市",
                }, {
                    "value": 0,
                    "name": "蚌埠市",
                }, {
                    "value": 0,
                    "name": "牡丹江市",
                }, {
                    "value": 0,
                    "name": "海东市",
                }, {
                    "value": 0,
                    "name": "乌海市",
                }, {
                    "value": 0,
                    "name": "宿迁市",
                }, {
                    "value": 0,
                    "name": "钦州市",
                }, {
                    "value": 0,
                    "name": "文山壮族苗族自治州",
                }, {
                    "value": 0,
                    "name": "鹤岗市",
                }, {
                    "value": 0,
                    "name": "张家口市",
                }, {
                    "value": 0,
                    "name": "黑河市",
                }, {
                    "value": 0,
                    "name": "开封市",
                }, {
                    "value": 0,
                    "name": "葫芦岛市",
                }, {
                    "value": 0,
                    "name": "张掖市",
                }, {
                    "value": 0,
                    "name": "上饶市",
                }, {
                    "value": 0,
                    "name": "怀化市",
                }, {
                    "value": 0,
                    "name": "岳阳市",
                }, {
                    "value": 0,
                    "name": "甘南藏族自治州",
                }, {
                    "value": 0,
                    "name": "白城市",
                }, {
                    "value": 0,
                    "name": "成都市",
                }, {
                    "value": 0,
                    "name": "白银市",
                }, {
                    "value": 0,
                    "name": "白山市",
                }, {
                    "value": 0,
                    "name": "安阳市",
                }, {
                    "id": 350300,
                    "value": 0,
                    "name": "莆田市",
                }, {
                    "value": 0,
                    "name": "恩施土家族苗族自治州",
                }, {
                    "value": 0,
                    "name": "温州市",
                }, {
                    "value": 0,
                    "name": "乌兰察布市",
                }, {
                    "value": 0,
                    "name": "海北藏族自治州",
                }, {
                    "value": 0,
                    "name": "怒江傈僳族自治州",
                }, {
                    "value": 0,
                    "name": "普洱市",
                }, {
                    "value": 0,
                    "name": "吕梁市",
                }, {
                    "value": 0,
                    "name": "铜陵市",
                }, {
                    "value": 0,
                    "name": "宁德市",
                }, {
                    "value": 0,
                    "name": "固原市",
                }, {
                    "value": 0,
                    "name": "益阳市",
                }, {
                    "value": 0,
                    "name": "临沂市",
                }, {
                    "value": 0,
                    "name": "安顺市",
                }, {
                    "value": 0,
                    "name": "焦作市",
                }, {
                    "value": 0,
                    "name": "昌都地区",
                }, {
                    "value": 2,
                    "name": "北京市",
                }, {
                    "value": 0,
                    "name": "无锡市",
                }, {
                    "value": 0,
                    "name": "六盘水市",
                }, {
                    "value": 0,
                    "name": "云浮市",
                }, {
                    "value": 0,
                    "name": "汕尾市",
                }, {
                    "value": 0,
                    "name": "绍兴市",
                }, {
                    "value": 0,
                    "name": "昌吉回族自治州",
                }, {
                    "value": 0,
                    "name": "衢州市",
                }, {
                    "value": 0,
                    "name": "铁岭市",
                }, {
                    "value": 0,
                    "name": "汉中市",
                }, {
                    "value": 0,
                    "name": "长春市",
                }, {
                    "value": 0,
                    "name": "鹤壁市",
                }, {
                    "value": 0,
                    "name": "三明市",
                }, {
                    "value": 0,
                    "name": "安康市",
                }, {
                    "value": 0,
                    "name": "阜新市",
                }, {
                    "value": 0,
                    "name": "贵阳市",
                }, {
                    "value": 0,
                    "name": "衡水市",
                }, {
                    "value": 0,
                    "name": "白沙黎族自治县",
                }, {
                    "value": 0,
                    "name": "淮安市",
                }, {
                    "value": 0,
                    "name": "赣州市",
                }, {
                    "value": 0,
                    "name": "六安市",
                }, {
                    "value": 0,
                    "name": "吴忠市",
                }, {
                    "value": 0,
                    "name": "防城港市",
                }, {
                    "value": 0,
                    "name": "咸阳市",
                }, {
                    "value": 0,
                    "name": "定西市",
                }, {
                    "value": 0,
                    "name": "昭通市",
                }, {
                    "value": 0,
                    "name": "资阳市",
                }, {
                    "value": 0,
                    "name": "济宁市",
                }, {
                    "value": 0,
                    "name": "乐山市",
                }, {
                    "value": 0,
                    "name": "威海市",
                }, {
                    "value": 0,
                    "name": "玉树藏族自治州",
                }, {
                    "value": 0,
                    "name": "阜阳市",
                }, {
                    "value": 0,
                    "name": "宣城市",
                }, {
                    "value": 0,
                    "name": "随州市",
                }, {
                    "id": 652900,
                    "value": 0,
                    "name": "阿克苏地区",
                }, {
                    "value": 0,
                    "name": "九江市",
                }, {
                    "value": 0,
                    "name": "呼伦贝尔市",
                }, {
                    "value": 0,
                    "name": "连云港市",
                }, {
                    "value": 0,
                    "name": "博尔塔拉蒙古自治州",
                }, {
                    "value": 0,
                    "name": "孝感市",
                }, {
                    "value": 0,
                    "name": "珠海市",
                }, {
                    "value": 0,
                    "name": "宝鸡市",
                }, {
                    "value": 0,
                    "name": "湖州市",
                }, {
                    "value": 0,
                    "name": "晋中市",
                }, {
                    "value": 0,
                    "name": "南阳市",
                }, {
                    "value": 0,
                    "name": "聊城市",
                }, {
                    "value": 0,
                    "name": "潍坊市",
                }, {
                    "value": 0,
                    "name": "南昌市",
                }, {
                    "value": 0,
                    "name": "百色市",
                }, {
                    "value": 0,
                    "name": "德阳市",
                }, {
                    "value": 0,
                    "name": "丹东市",
                }, {
                    "value": 0,
                    "name": "红河哈尼族彝族自治州",
                }, {
                    "value": 0,
                    "name": "哈尔滨市",
                }, {
                    "value": 0,
                    "name": "神农架林区",
                }, {
                    "value": 0,
                    "name": "滁州市",
                }, {
                    "value": 0,
                    "name": "莱芜市",
                }, {
                    "value": 0,
                    "name": "山南地区",
                }, {
                    "value": 0,
                    "name": "长治市",
                }, {
                    "value": 0,
                    "name": "常州市",
                }, {
                    "value": 0,
                    "name": "江门市",
                }, {
                    "value": 0,
                    "name": "丽江市",
                }, {
                    "value": 0,
                    "name": "佳木斯市",
                }, {
                    "value": 0,
                    "name": "达州市",
                }, {
                    "value": 0,
                    "name": "周口市",
                }, {
                    "value": 0,
                    "name": "那曲地区",
                }, {
                    "value": 0,
                    "name": "泸州市",
                }, {
                    "value": 0,
                    "name": "滨州市",
                }, {
                    "value": 0,
                    "name": "青岛市",
                }, {
                    "value": 0,
                    "name": "桂林市",
                }, {
                    "value": 0,
                    "name": "鞍山市",
                }, {
                    "value": 0,
                    "name": "阿拉尔市",
                }, {
                    "value": 0,
                    "name": "齐齐哈尔市",
                }, {
                    "value": 0,
                    "name": "石河子市",
                }, {
                    "value": 0,
                    "name": "铁门关市",
                }, {
                    "value": 0,
                    "name": "双河市",
                }, {
                    "value": 0,
                    "name": "五家渠市",
                }, {
                    "value": 0,
                    "name": "北屯市",
                }, {
                    "value": 0,
                    "name": "呼和浩特市",
                }, {
                    "value": 0,
                    "name": "可克达拉市",
                }, {
                    "value": 0,
                    "name": "西双版纳傣族自治州",
                }, {
                    "value": 0,
                    "name": "湘潭市",
                }, {
                    "value": 0,
                    "name": "盐城市",
                }, {
                    "value": 0,
                    "name": "秦皇岛市",
                }, {
                    "value": 0,
                    "name": "太原市",
                }, {
                    "value": 0,
                    "name": "贵港市",
                }, {
                    "value": 0,
                    "name": "包头市",
                }, {
                    "value": 0,
                    "name": "泰州市",
                }, {
                    "value": 0,
                    "name": "和田地区",
                }, {
                    "value": 0,
                    "name": "台州市",
                }, {
                    "value": 0,
                    "name": "金昌市",
                }, {
                    "value": 0,
                    "name": "通化市",
                }, {
                    "value": 0,
                    "name": "保定市",
                }, {
                    "value": 0,
                    "name": "梧州市",
                }, {
                    "value": 0,
                    "name": "崇左市",
                }, {
                    "value": 0,
                    "name": "洛阳市",
                }, {
                    "value": 0,
                    "name": "南平市",
                }, {
                    "value": 0,
                    "name": "双鸭山市",
                }, {
                    "value": 0,
                    "name": "武威市",
                }, {
                    "value": 0,
                    "name": "抚州市",
                }, {
                    "value": 0,
                    "name": "定安县",
                }, {
                    "value": 0,
                    "name": "澄迈县",
                }, {
                    "id": 469022,
                    "value": 0,
                    "name": "屯昌县",
                }, {
                    "value": 0,
                    "name": "乌鲁木齐市",
                }, {
                    "value": 0,
                    "name": "临高县",
                }, {
                    "value": 0,
                    "name": "乐东黎族自治县",
                }, {
                    "value": 0,
                    "name": "昌江黎族自治县",
                }, {
                    "value": 0,
                    "name": "保亭黎族苗族自治县",
                }, {
                    "value": 0,
                    "name": "陵水黎族自治县",
                }, {
                    "value": 0,
                    "name": "喀什地区",
                }, {
                    "value": 0,
                    "name": "济南市",
                }, {
                    "value": 0,
                    "name": "雅安市",
                }, {
                    "value": 0,
                    "name": "阿坝藏族羌族自治州",
                }, {
                    "value": 0,
                    "name": "永州市",
                }, {
                    "value": 0,
                    "name": "昆明市",
                }, {
                    "value": 0,
                    "name": "黄南藏族自治州",
                }, {
                    "value": 0,
                    "name": "厦门市",
                }, {
                    "value": 0,
                    "name": "宁波市",
                }, {
                    "value": 0,
                    "name": "菏泽市",
                }, {
                    "value": 0,
                    "name": "龙岩市",
                }, {
                    "value": 0,
                    "name": "毕节市",
                }, {
                    "value": 0,
                    "name": "临汾市",
                }, {
                    "value": 0,
                    "name": "淮南市",
                }]
            }],
            "animation": false,
            "unit": "人",
            "type": "heapmap",
            "title": [{
                "text": "热力地图",
                "subtext": "%",
                "textStyle": {
                    // "color": "#000",
                    "fontStyle": "normal",
                    "fontWeight": "bolder",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": 18
                },
                "left": 0,
                "bottom": 0,
                "top": "0px"
            }, {
                "text": "",
                "subtext": "基数: 所有被访者 n=4 \n\n数据来源：Q3",
                "textStyle": {
                    // "color": "#000",
                    "fontStyle": "normal",
                    "fontWeight": "bolder",
                    "fontFamily": "Microsoft YaHei",
                    "fontSize": "14"
                },
                "left": 0,
                "bottom": "30px",
                "top": "598px"
            }],
            "chartHeight": "658"
        }
    }
    // console.log(data.data);


    //折线图
    if (data.graph == 'line') {
        var series = [];
        var legend = [];
        var len = []
        // 第二种方案：使用循环将series循环输出
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
        }
        for (var i = 0; i < len; i++) {
            //循环折线图x轴上的legend
            legend[i] = graphdata['y'][i]['name'];
            series[i] = {
                name: graphdata['y'][i]['name'],
                type: 'line',
                data: graphdata['y'][i]['data']
            }
        }

        option = {
            toolbox: {
                feature: feature
            },
            // color: colors,
            animationDuration: animationDuration,
            grid: grid,
            title: title,
            tooltip: {
                show: tooltip,
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            // legend: {
            //     //折线图上x轴的名字
            //     data: legend
            // },
            xAxis: {
                // show: true,
                // name: 'x',
                // //设置坐标轴类型，此处为类目轴
                // type: 'category',
                axisLine: {
                    lineStyle: {
                        //轴线颜色
                        color: axisLineColor
                    }
                },
                axisTick: {
                    lineStyle: {
                        //轴刻度颜色
                        color: axisTickColor
                    }
                },
                axisLable: {
                    //轴字体颜色
                    color: axisLabeColor
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

                type: 'category',
                name: 'x',
                splitLine: {show: false},
                data: graphdata['x']['data']
            },
            yAxis: {
                show: true,
                name: 'y',
                axisLine: {
                    lineStyle: {
                        //轴线颜色
                        color: axisLineColor
                    }
                },
                axisTick: {
                    lineStyle: {
                        //轴刻度颜色
                        color: axisTickColor
                    }
                },
                axisLable: {
                    //轴字体颜色
                    color: axisLabeColor
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

    //K线图
    // if (data.graph == 'k') {
    //
    //     //图形标题
    //     app.title = '上证指数';
    //     //设定X轴时间段
    //     // reverse()用于数组中元素的顺序改为倒序
    //     // 开盘(open),收盘(close),最低(lowest),最高(heightest)
    //     var rawData = [[]].reverse();
    //     //计算MA平均线.N日移动平均线=N日收盘价之和/N,dayCount要计算的天数
    //     //把数组中的日期和数据分离,返回数组中的日期或数据
    //     function calculateMA(dayCount, data) {
    //
    //
    //     }
    //
    //     var option = {
    //         //背景填充色
    //         // backgroundColor:
    //         //鼠标悬浮显示数据
    //         //图例组件
    //         legend: {
    //             //图例里的数据数组
    //             data: ['日K', 'M1'],
    //             //图例关闭时的颜色
    //             inactiveColor: '#777',
    //             //字体颜色
    //             textStyle: {
    //                 color: '#fff'
    //             }
    //         },
    //         //提示框组件
    //         tooltip: {
    //             //是否显示提示框组件
    //             show: true,
    //             //触发类型,axis:坐标轴触发，主要用在柱状图/折线图等
    //             trigger: 'axis',
    //             //什么都不触发
    //             // trigger:'none',
    //             //数据项图形触发，主要用在散点图/饼图等无类目轴的图表中使用。
    //             // trigger:'item',
    //
    //             //坐标轴指示器配置项
    //             axisPointer: {
    //                 //图例翻页是否使用动画
    //                 animation: false,
    //                 //指示器类型，cross为十字准星指示器
    //                 type: 'cross',
    //                 //直线指示器
    //                 // type:'line',
    //                 //阴影指示器
    //                 // type:'shadow',
    //                 lineStyle: {
    //                     //线的颜色
    //                     color: '#376df4',
    //                     //线宽
    //                     width: 2,
    //                     //线的类型
    //                     //实线
    //                     // type:'solid',
    //                     //虚线
    //                     // type:'dashed',
    //                     //点线
    //                     // type:'dotted',
    //
    //                     //图形透明度.0-1,为0时不绘制该图形
    //                     opacity: 1
    //                 }
    //             }
    //         },
    //         //直角坐标系grid中的x轴,一般情况下单个grid组件最多只能放上下两个X轴
    //         xAxis: {
    //             //是否显示X轴
    //             show: true,
    //             //坐标轴类型
    //             //类目轴,适用于离散的类目数据,为该类型时必须通过data设置类目数据
    //             type: 'category',
    //             // //数值轴,适用于连续数据
    //             // type:'value',
    //             // //时间轴,适用于连续的时序数据
    //             // type:'time',
    //             // //对数轴,适用于对数数据
    //             // type:'log',
    //
    //             //类目数据,在类目轴(type:'category')中有效
    //             data: dates,
    //             axisLine: {lineStyle: {color: '#8392A5'}}
    //         },
    //         yAxis: {
    //             //是否显示Y轴
    //             show: true,
    //             //
    //             scale: true,
    //             //坐标轴轴线相关设置
    //             axisLine: {lineStyle: {color: '#8392A5'}},
    //             //坐标轴在grid区域中的分割线
    //             //是否显示分割线
    //             splitLine: {show: false}
    //         },
    //         //直角坐标系内绘图网格,单个grid内最多可以放置上下两个X轴,左右两个Y 轴.可以在网格上绘制折线图/柱状图/散点图(气泡图).
    //         gird: {
    //             //grid组件离容器下侧的距离
    //             //bottom值可以设置为80,也可以设置为80%这种相对于容器高宽的百分比
    //             bottom: 80
    //         },
    //         //dataZoom组件用于区域缩放
    //         dataZoom: [{
    //             //字体颜色
    //             textStyle: {
    //                 color: '#8392A5'
    //             },
    //             //手柄形状为icon,支持路径字符串
    //             handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
    //             //控制手柄的尺寸
    //             handleSize: '80%',
    //             //数据阴影的样式
    //             dataBackground: {
    //                 //数据阴影填充的颜色
    //                 areaStyle: {
    //                     color: '#8392A5'
    //                 },
    //                 //阴影的线条样式
    //                 lineStyle: {
    //                     //图形透明度
    //                     opacity: 0.8,
    //                     //线条颜色
    //                     color: '#8392A5'
    //                 }
    //             },
    //             //手柄样式配置
    //             handleStyle: {
    //                 //图形的颜色
    //                 color: '#fff',
    //                 //图形阴影的模糊大小
    //                 shadowBlur: 3,
    //                 //阴影水平方向上的偏移距离
    //                 shadowOffsetX: 2,
    //                 //阴影垂直方向上的偏移距离
    //                 shadowOffsetY: 2
    //             }
    //
    //         }, {
    //             //是否显示组件
    //             show: true,
    //             //组件类型:内置
    //             type: 'inside'
    //             // 组件类型:滑块
    //             // type:'slider'
    //         }],
    //         //是否启用动画
    //         animation: false,
    //         series:
    //             [{
    //                 //图表类型:K线图
    //                 type: 'candlestick',
    //                 name: '日K',
    //                 data: data,
    //                 itemStyle:
    //                     {
    //                         normal:
    //                             {
    //                                 //阳线填充色
    //                                 Color: '#b3e9d9',
    //                                 //阴线填充色
    //                                 Color0: '#11ba89',
    //                                 //阳线图形描边色
    //                                 borderColor: '#b3e9d9',
    //                                 //阴线图形描边色
    //                                 borderColor0: '#11ba89',
    //                                 //描边图形宽度
    //                                 borderWidth: '1'
    //                             },
    //                     }
    //             }, {
    //                 //系列名称,用于tooltip的显示
    //                 name: 'M1',
    //                 //线条类型
    //                 type: 'line',
    //                 //数据格式.对象
    //                 data: calculateMA(5, data),
    //                 //是否开启平滑曲线
    //                 smooth: true,
    //                 //是否显示Symbol
    //                 showSymbol: false,
    //                 //线条样式
    //                 lineStyle: {
    //                     normal: {
    //                         width: 1
    //                     }
    //                 }
    //             }
    //                 // {
    //                 //     name: 'M2',
    //                 //     type:'line',
    //                 //     data: calculateMA(10,data),
    //                 //     smooth: true,
    //                 //     showSymbol:false,
    //                 //     lineStyle:{
    //                 //         normal:{
    //                 //             width:1
    //                 //         }
    //                 //     }
    //                 //
    //                 //  },{
    //                 //     name:'M3',
    //                 //     type:'line',
    //                 //     data:calculateMA(20,data),
    //                 //     //是否开启平滑曲线
    //                 //     smooth:true,
    //                 //     showSymbol:false,
    //                 //     lineStyle:{
    //                 //         normal:{
    //                 //             width:1
    //                 //         }
    //                 //     }
    //                 // },{
    //                 //     name:'M4',
    //                 //     type:'line',
    //                 //     data:calculateMA(30,data),
    //                 //     //是否开启平滑曲线
    //                 //     smooth:true,
    //                 //     //是否显示Symbol
    //                 //     showSymbol:false,
    //                 //     lineStyle:{
    //                 //         normal:{
    //                 //             width:1
    //                 //         }
    //                 //     }
    //                 // }
    //             ]
    //     }
    // }
    // ;


    //横向柱状图
    if (data.graph == 'bar-x-category') {
        option = {
            "series": [{
                "type": "bar",
                "data": [{
                    "value": 0,
                    "name": "其他",
                }, {

                    "value": 0,
                    "name": "恋人\/配偶"

                }, {
                    "value": 100,
                    "name": "家人"
                }, {
                    "value": 100,
                    "name": "同事"
                }, {
                    "value": 100,
                    "name": "同学"
                }, {
                    "value": 100,
                    "name": "朋友"
                }]
            }],
            "yAxis": [{
                //wukong!
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
                "type": "category",
                //错误代码
                // "axisPointer": false,
                "data": ["其他", "恋人\/配偶", "家人", "同事", "同学", "朋友"]
            }],
            "xAxis": [{
                //wukong!
                "type": "value",
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
                "show": false,
                "min": 0,
                "max": 100
            }]
        }
    }

    //横向柱状堆叠图
    if (data.graph == 'bar-x-category-stack') {
        option = {
            "toolbox": {"feature": {"saveAsImage": {"type": "png"}}},
            "calculable": true,
            "tooltip": {"trigger": "axis", "axisPointer": {"type": "shadow"}},
            "grid": {
                "show": false,
                "top": "100px",
                "height": 127,
                "left": "20%",
                "right": "20%",
                "width": "70%",
                "z": 2,
                "zlevel": 0,
                "bottom": 30
            },
            // "backgroundColor": "#ffffff",
            "legend": {"top": "85px", "right": "10%", "data": ["不满意", "2", "3", "4", "满意"]},
            "series": [{
                "name": "不满意",
                "data": [{
                    "value": 0,
                    "name": "不满意",
                    // "colorScheme": {
                    //     "labelFormat": "default",
                    //     "numberBits": 0,
                    //     "xAxisMax": 100,
                    //     "colorSeries": {"color": "purple", "model": "default"},
                    //     "chartTypeList": ["table", "stacked_bar"],
                    //     "chartType": "stacked_bar",
                    //     "itemSortConfig": [{"id": {"type": 1, "sortOrder": 4}}],
                    //     "unit": "人"
                    // }
                }],
                "type": "bar",
                "stack": "总量",
                "barMaxWidth": 60,
                "itemStyle": {"normal": {"label": {"show": true, "position": "insideRight"}}}
            }, {
                "name": "2",
                "data": [{
                    "value": 0,
                    "name": "2",
                    // "colorScheme": {
                    //     "labelFormat": "default",
                    //     "numberBits": 0,
                    //     "xAxisMax": 100,
                    //     "colorSeries": {"color": "purple", "model": "default"},
                    //     "chartTypeList": ["table", "stacked_bar"],
                    //     "chartType": "stacked_bar",
                    //     "itemSortConfig": [{"id": {"type": 1, "sortOrder": 4}}],
                    //     "unit": "人"
                    // }
                }],
                "type": "bar",
                "stack": "总量",
                "barMaxWidth": 60,
                "itemStyle": {"normal": {"label": {"show": true, "position": "insideRight"}}}
            }, {
                "name": "3",
                "data": [{
                    "value": 33.333333333333336,
                    "name": "3",
                    // "colorScheme": {
                    //     "labelFormat": "default",
                    //     "numberBits": 0,
                    //     "xAxisMax": 100,
                    //     "colorSeries": {"color": "purple", "model": "default"},
                    //     "chartTypeList": ["table", "stacked_bar"],
                    //     "chartType": "stacked_bar",
                    //     "itemSortConfig": [{"id": {"type": 1, "sortOrder": 4}}],
                    //     "unit": "人"
                    // }
                }],
                "type": "bar",
                "stack": "总量",
                "barMaxWidth": 60,
                "itemStyle": {"normal": {"label": {"show": true, "position": "insideRight"}}}
            }, {
                "name": "4",
                "data": [{
                    "value": 33.333333333333336,
                    "name": "4",
                    // "colorScheme": {
                    //     "labelFormat": "default",
                    //     "numberBits": 0,
                    //     "xAxisMax": 100,
                    //     "colorSeries": {"color": "purple", "model": "default"},
                    //     "chartTypeList": ["table", "stacked_bar"],
                    //     "chartType": "stacked_bar",
                    //     "itemSortConfig": [{"id": {"type": 1, "sortOrder": 4}}],
                    //     "unit": "人"
                    // }
                }],
                "type": "bar",
                "stack": "总量",
                "barMaxWidth": 60,
                "itemStyle": {"normal": {"label": {"show": true, "position": "insideRight"}}}
            }, {
                "name": "满意",
                "data": [{
                    "value": 33.333333333333336,
                    "name": "满意",
                    // "colorScheme": {
                    //     "labelFormat": "default",
                    //     "numberBits": 0,
                    //     "xAxisMax": 100,
                    //     "colorSeries": {"color": "purple", "model": "default"},
                    //     "chartTypeList": ["table", "stacked_bar"],
                    //     "chartType": "stacked_bar",
                    //     "itemSortConfig": [{"id": {"type": 1, "sortOrder": 4}}],
                    //     "unit": "人"
                    // }
                }],
                "type": "bar",
                "stack": "总量",
                "barMaxWidth": 60,
                "itemStyle": {"normal": {"label": {"show": true, "position": "insideRight"}}}
            }],
            // "color": ["#ADA1FF", "#9D82EF", "#9067E0", "#824DD2", "#732FC3"],
            "yAxis": [{
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
                "type": "category",
                "axisPointer": false,
                "data": [""]
            }],
            "xAxis": [{
                "type": "value",
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
                "show": false,
                "min": 0,
                "max": 100
            }],
            "unit": "人",
            "tooltipNumberBits": 10,
            "numberBits": 0,
            "chartHeight": 267,
            "title": [{
                "text": "菜品味道打分",
                "subtext": "%",
                // "textStyle": {
                //     "color": "#000",
                //     "fontStyle": "normal",
                //     "fontWeight": "bolder",
                //     "fontFamily": "Microsoft YaHei",
                //     "fontSize": 18
                // },
                "left": 0,
                "bottom": 0,
                "top": "0px"
            }, {
                "text": "",
                "subtext": "基数: 所有被访者 n=3 \n\n数据来源：Q4",
                // "textStyle": {
                //     "color": "#000",
                //     "fontStyle": "normal",
                //     "fontWeight": "bolder",
                //     "fontFamily": "Microsoft YaHei",
                //     "fontSize": "14"
                // },
                "left": 0,
                "bottom": "30px",
                "top": "209px"
            }]
        }
    }

    //散点关系图
    //if(data.graph == 'scatter-relationship')
    // {

    // }

    //纵向柱状图
    if (data.graph == 'bar-y-category') {
        var series = []
        for (i = 0; i < d_data.x['data'].length; i++) {
            series[i] = {
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
            // color: colors,
            title: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                // textStyle: {
                //     color: legendTextstyleColor
                // },
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
                    // lineStyle: {
                    //     color: axislineLinestyleColor
                    // }
                },
                axisTick: {
                    // lineStyle: {
                    //     color: axislineAxistickColor
                    // }
                },
                axisLabel: {
                    show: true,
                    // textStyle: {
                    //     color: axislineAxislabelColor
                    // }
                },
                type: 'value',
                boundaryGap: [0, 0.01],

            },
            yAxis: {

                axisLine: {
                    // lineStyle: {
                    //     color: axislineLinestyleColor,
                    //     width: '1'
                    // }
                },
                // axisTick: {
                //     lineStyle: {
                //         color: axislineAxistickColor
                //     }
                // },
                axisLabel: {
                    show: true,
                    // textStyle: {
                    //     color: axislineAxislabelColor
                    // }
                },
                splitLine: {
                    show: false //去掉网格线
                },
                type: 'category',


                data: [{
                    value: '',
                    barWidth: '40',
                    // 突出周一
                    // textStyle: {
                    //
                    //     color: '#999'
                    // }
                }]
            },
            series: series
        };
    }
    //仪表盘图
    if (data.graph == 'gauge') {
        option = {

            "series": [{
                "name": "推荐净值",
                // wukong!
                "axisLine": {
                    "lineStyle": {
                        "width": 80,
                        "opacity": 0.8,
                        "color": [[0.5, "rgba(115, 47, 195, 0.4)"], [1, "#732FC3"]]
                    }
                },
                "detail": {"offsetCenter": [0, "62"],
                    "textStyle": {"color": "#000", "fontSize": 18}
                },
                // wukong!
                "data": [{"value": -100, "realPercent": "-100%", "name": "全部", "serise_name": "推荐净值"}],
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
                        "opacity": 1
                    }},
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
                    }},
                //字体间距
                "splitNumber": 4,
                "pointer": {"width": 12, "length": "50%", "color": "#f00"},
                "itemStyle": {"normal": {"color": "auto"}},
                "title": {"show": true, "offsetCenter": [0, "110"], "textStyle": {"fontSize": 18}}
            }],


        }

    }
    //纵向柱状堆叠图
    if (data.graph == 'bar-y-category-stack') {
        var series = []
        var legend = []
        for (i = 0; i < d_data.y.length; i++) {
            var draw_value = [];
            draw_value[i] = [];
            $.each(d_data.y[i]['data'], function (j, val) {

                if (val < 6) {
                    draw_value[i][j] = {
                        value: val,
                        label: {
                            normal: {
                                show: false,
                                position: 'insideRight',
                                formatter: '{c}%'
                            }
                        },
                    }
                } else {
                    draw_value[i][j] = {
                        value: val,
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight',
                                formatter: '{c}%'
                            }
                        },
                    }
                }
            });
            legend[i] = d_data.y[i]['name'];
            series[i] = {
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
                data: draw_value[i]
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
            // color: colors,
            title: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                // textStyle: {
                //     color: legendTextstyleColor
                // },
                bottom: 0,
                data: legend,
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '7%',
                top: '5%',
                containLabel: true
            },
            xAxis: {
                // axisLine: {
                //     lineStyle: {
                //         color: axislineLinestyleColor
                //     }
                // },
                // axisTick: {
                //     lineStyle: {
                //         color: axislineAxistickColor
                //     }
                // },
                // axisLabel: {
                //     show: true,
                //     textStyle: {
                //         color: axislineAxislabelColor
                //     }
                // },
                splitLine: {
                    show: false //去掉网格线
                },
                type: 'value'
            },
            yAxis: {
                // axisLine: {
                //     lineStyle: {
                //         color: axislineLinestyleColor
                //     }
                // },
                // axisTick: {
                //     lineStyle: {
                //         color: axislineAxistickColor
                //     }
                // },
                // axisLabel: {
                //     show: true,
                //     textStyle: {
                //         color: axislineAxislabelColor
                //     }
                // },
                splitLine: {
                    show: false //去掉网格线
                },
                type: 'category',

                data: d_data.x['data']
            },
            series: series
        };
    }

    // console.log(option)
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    return


//    var unit = data.params && data.params.unit || '万人';
    var graph_type = ['solid_line', 'doubleY_solid_line', 'solid_xline', 'reversed', 'horizontal_bar', 'stack_bar', 'dcolumn_bar', '2Dpie', 'hollow_line', 'mcolumn_bar', 'hcolumn_bar', 'single_bar', 'dcolumn_xtilt_bar', 'imgsingle_bar', '2Dmpie', 'wordCloud', 'map', 'line','pie'];
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
