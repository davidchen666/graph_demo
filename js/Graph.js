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

    var graphdata = {};
    graphdata = $.parseJSON(data.data)
    // console.log(graphdata)
    var d_data = typeof data.data == 'object' ? data.data : eval('(' + data.data + ');');
    // var graph_type = ['pie-doughnut', 'bar-y-category', 'gauge', 'bar-y-category-stack'];
    //定义图表类型
    //area：堆叠区域图，gauge：仪表盘图，scatter-relationship：散点关系图，bar-y-category：纵向柱状图，bar-y-category-stack：纵向柱状堆叠图，line：折线图，k：k线图，graph：力导图
    var graph_type = ['pie', 'wordCloud', 'map', 'line', 'k', 'area', 'gauge', 'bar-x-category', 'bar-y-category', 'bar-y-category-stack', 'scatter-relationship', 'bar-x-category-stack', 'pictorialline'];
    if ($.inArray(data.graph, graph_type) == -1) {
        alert('暂无该图表类型');
        return false;
    }
    var themename = data.theme;
    // var themename='wk_colorful';
    var echartsTheme = dataThenme[themename].theme;

    // 调用echarts.registerTheme()注册主题
    echarts.registerTheme('DT', echartsTheme)
    // console.log(echartsTheme.color.length)
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
    //设置动画开关
    var animation = false;
    if (typeof(d_data.animation) == "undefined" || d_data.animation == 1) {
        animation = true;
    }
    //对网页自适应进行判断
    var gTop = 22;
    var gBottom = 27;
    if (typeof(d_data.big_title) == "undefined") {
        gTop -= 120

    }
    if (typeof(d_data.small_title) == "undefined") {
        gTop -= 120

    }
    if (typeof(d_data.remarks1) == "undefined") {

        gBottom -= 65
    }
    if (typeof(d_data.remarks2) == "undefined") {

        gBottom -= 65
    }
    var grid = {
        top:105.5,
        right: 91,
        bottom:94.5,
        left: 91,

        // bottom: gBottom + '%',

        // top: gTop + '%',

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
                rich:{fontSize:14},
                height: 14
            },
            left: 23,
            top: 21.5,
            //标题内边距,上右下左
            // padding: [20, 0, 0, 40],
            //主标题和副标题之间的间距
            itemGap:17,
            text: graphdata['big_title'],
            subtext: graphdata['small_title'],

        },{
            text: '',
            subtext: remarks1 + '\n\n' + remarks2,
            left: 25,
            bottom: 25.5
        }

    ]

    // title=[{"name":"推荐净值(NPS)"},{"name":"备注"}];title.push({"name":"组名"}) ;title

    // data.graph = 'gauge'
    // 指定图表的配置项和数据
    var option = {}
    //圆环饼图
    if (data.graph == 'pie') {
        var series = [];
        var legend = [];
        var len = []
        // 第二种方案：使用循环将series循环输出
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
        }
        for (var i = 0; i < len; i++) {
            //循环折线图x轴上的legend
            //设置图例开关
            if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
                legend[i] = graphdata['y'][i]['name'];
            } else {
                legend = [];
            }
            series[i] = {
                name: graphdata['y'][i]['name'],
                value: graphdata['y'][i]['data'],
                //是否开启鼠标移到扇形区域时的动画效果
                hoverAnimation:false,
            }
        }
            // top:107,
            // right:190,
            // bottom:90,
            // left:190,
        option = {
            //添加水印方案2
            graphic:

                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom:60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height:40,
                            },
                            style: {
                                //填充色
                                fill: 'rgba(0,0,0,0.05)',
                                //是否可拖拽
                                // draggable: true,

                            }
                        },
                        {
                            type: 'text',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            style: {
                                fill: 'rgba(255,255,255,1)',
                                text: 'Meta Insight',
                                font: 'bold 26px Microsoft YaHei'
                            }
                        }
                    ]
                },

            toolbox: {
                itemSize:14,
                feature: feature,
                right:22,
                top:22
                // right:21,
                // top:21
            },
            grid: grid,
            title: title,
            //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
            // center: ['50%', '56%'],
            // animationDuration: animationDuration,
            tooltip: {
                show: tooltip,
                trigger: 'item',
                //formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            legend: {
                //图例
                data: legend,
                //图例布局设置为垂直（水平/垂直,默认为水平）
                orient: 'vertical',
                // y:'center',
                align:'auto',
                //图例形状
                icon:"rect",
                left:24.5,
                bottom:226,
                itemGap:13,
                itemWidth:14,
                itemHeight:14
            },
            "series": [{
                //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
                center: ['50%', '51%'],
                //顺时针转动
                clockwise:true,
                "type": "pie",
                //圆环内半径、外半径
                "radius": [110, 170],
                "height": 230,
                //图表上的数据
                "data": series,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: "{c}"
                    },

                },
            }],
        };
    }

    //词云
    if (data.graph == 'wordCloud') {
        var series = [];
        var legend = [];
        var len = []
        // 第二种方案：使用循环将series循环输出
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
        }
        for (var i = 0; i < len; i++) {
            //循环legend图例
            //设置图例开关
            if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
                legend[i] = graphdata['y'][i]['name'];
            } else {
                legend = [];
            }
            series[i] = {
                name: graphdata['y'][i]['name'],
                value: graphdata['y'][i]['data']
            }
        }
        // var newW  = $('main').width()*3/4;
        // var newH = $('main').width()*3/4;
        option = {
            //添加水印方案2
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom:60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height:40,
                            },
                            style: {
                                //填充色
                                fill: 'rgba(0,0,0,0.05)',
                                //是否可拖拽
                                // draggable: true,

                            }
                        },
                        {
                            type: 'text',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            style: {
                                fill: 'rgba(255,255,255,1)',
                                text: 'Meta Insight',
                                font: 'bold 26px Microsoft YaHei'
                            }
                        }
                    ]
                },

            toolbox: {
                        itemSize:14,
                        feature: feature,
                right:22,
                top:22
                        // right:24,
                        // top:23
                    },
            grid: grid,
            title: title,
            animationDuration: animationDuration,
            tooltip: {
                show: tooltip,
                trigger: 'item',
                //formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            legend: {
                //legend超出一行时滚动
                type:"scroll",
                //图例
                data: legend
            },
            "series": {
                "type": "wordCloud",
                "sizeRange": [14, 85],//字体大小范围（最小汉字-最大汉字）
                "rotationRange": [-40, 20],//字体旋转角度
                "gridSize": 10,//偏移
                "width": "100%",//字浮云宽度
                "data": series,
                gridSize: 1,//字符间距
                //词云位置
                // center:['50%','50%'],
                width: 501,
                height:324,
                top:147,
                left:113,
                bottom:150,
                right:105,
                textStyle: {
                    normal: {
                        color: function() {
                            //取主题随机色（四舍五入）
                            return echartsTheme.color[Math.round(Math.random() * echartsTheme.color.length)];
                        }
                    }
                }
            },
        };
    }

    //地图
    if (data.graph == 'map') {
        var series = [];
        var legend = [];
        var len = [];
        var datamax = []
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
        }
        for (var i = 0; i < len; i++) {
            //循环折线图x轴上的legend
            //设置图例开关
            if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
                legend[i] = graphdata['y'][i]['name'];
            } else {
                legend = [];
            }
            datamax[i] = graphdata['y'][i]['data'];
            series[i] = {
                name: graphdata['y'][i]['name'],
                value: graphdata['y'][i]['data']
            }
        }
        option = {
            //添加水印方案2
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom:60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height:40,
                            },
                            style: {
                                //填充色
                                fill: 'rgba(0,0,0,0.05)',
                                //是否可拖拽
                                // draggable: true,

                            }
                        },
                        {
                            type: 'text',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            style: {
                                fill: 'rgba(255,255,255,1)',
                                text: 'Meta Insight',
                                font: 'bold 26px Microsoft YaHei'
                            }
                        }
                    ]
                },

            toolbox: {
                itemSize:14,
                feature: feature,
                right:22,
                top:22
                // right:24,
                // top:23
            },

            title: title,
            animationDuration: animationDuration,
            tooltip: {
                show: tooltip,
                trigger: 'axis',
                //formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },

            visualMap: {
                "type": "continuous",
                "inRange": {"color": [echartsTheme.visualMapColor[1], echartsTheme.visualMapColor[0]]},
                "min": 0,
                "max": Math.max.apply(null, datamax),
                "text": ["高", "低"],
                "calculable": true,
                //??
                bottom: 92,
                left:28,
                itemWidth:20,
                itemHeight:140,
                textGap:10,

            },
            series: [{
                        "type": "map",
                        "mapType": "china",
                        label: {
                            normal: {
                                show: true,
                                position: 'insideTop',
                                distance:111,
                                padding:[20,0,0,-25]
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(255, 255, 255, .1)'
                            }
                        },
                        "data": series
                    }]
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
            //设置图例开关
            if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
                legend[i] = graphdata['y'][i]['name'];
            } else {
                legend = [];
            }
            series[i] = {

                //引入动画开关
                animation: animation,
                //关闭这线上的圆点
                symbol:'none',
                name: graphdata['y'][i]['name'],
                type: 'line',
                data: graphdata['y'][i]['data']
            }
        }
        option = {
            //添加水印方案2
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom:60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height:40,
                            },
                            style: {
                                //填充色
                                fill: 'rgba(0,0,0,0.05)',
                                //是否可拖拽
                                // draggable: true,
                                
                            }
                        },
                        {
                            type: 'text',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            style: {
                                fill: 'rgba(255,255,255,1)',
                                text: 'Meta Insight',
                                font: 'bold 26px Microsoft YaHei'
                            }
                        }
                    ]
                },

            toolbox: {
                itemSize:14,
                feature: feature,
                right:22,
                top:22
            },
            animationDuration: animationDuration,
            grid: grid,
            title: title,
            tooltip: {
                show: tooltip,
                trigger:'axis',
            //     //formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            legend: {
                //legend超出一行时滚动
                type:"scroll",
                //图例
                top: 99,
                right: 25,
                data: legend,
                align:'auto',
                icon:"rect",
                itemGap:10,
                itemWidth:14,
                itemHeight:2
            },
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
                    // areaStyle: {
                    //     //图形透明度
                    //     opacity: splitAreaOpacity
                    // }
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
                    //是否显示轴刻度
                    show:false,
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

    //横向柱状图
    if (data.graph == 'bar-x-category') {
        console.log(graphdata)
        var series = [];
        var legend = [];
        var len = []
        // 第二种方案：使用循环将series循环输出
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
        }
        for (var i = 0; i < len; i++) {
            //循环折线图x轴上的legend
            //设置图例开关
            if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
                legend[i] = graphdata['y'][i]['name'];
            } else {
                legend = [];
            }
            series[i] = {
                name: graphdata['y'][i]['name'],
                data: graphdata['y'][i]['data'],
                type: "bar"
            }
        }
        option = {
            //添加水印方案2
            graphic:

                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom:60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height:40,
                            },
                            style: {
                                //填充色
                                fill: 'rgba(0,0,0,0.05)',
                                //是否可拖拽
                                // draggable: true,

                            }
                        },
                        {
                            type: 'text',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            style: {
                                fill: 'rgba(255,255,255,1)',
                                text: 'Meta Insight',
                                font: 'bold 26px Microsoft YaHei'
                            }
                        }
                    ]
                },

            toolbox: {
                itemSize:14,
                feature: feature,
                right:22,
                top:22
            },
            grid: grid,
            title: title,
            animationDuration: animationDuration,
            tooltip: {
                show: tooltip,
                trigger:'axis',
                //formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            // legend: {
            //     //图例
            //     data: legend
            // },
            "series": series,
            "yAxis": [{
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
                "type": "category",
                "data": graphdata['x']['data']
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
        // console.log(data)
        var series = [];
        var legend = [];
        var len = []
        // 第二种方案：使用循环将series循环输出
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
        }
        for (var i = 0; i < len; i++) {
            //循环折线图x轴上的legend
            //设置图例开关
            if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
                legend[i] = graphdata['y'][i]['name'];
            } else {
                legend = [];
            }
            series[i] = {
                name: graphdata['y'][i]['name'],
                data: graphdata['y'][i]['data'],
                type: "bar",
                stack: "总量"
            }
        }
        option = {
            //添加水印方案2
            graphic:

                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom:60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height:40,
                            },
                            style: {
                                //填充色
                                fill: 'rgba(0,0,0,0.05)',
                                //是否可拖拽
                                // draggable: true,

                            }
                        },
                        {
                            type: 'text',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            style: {
                                fill: 'rgba(255,255,255,1)',
                                text: 'Meta Insight',
                                font: 'bold 26px Microsoft YaHei'
                            }
                        }
                    ]
                },

            toolbox: {
                itemSize:14,
                feature: feature,
                right:22,
                top:22
            },
            grid: grid,
            title: title,
            animationDuration: animationDuration,
            tooltip: {
                show: tooltip,
                trigger: 'item',
                //formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            legend: {
                //图例
                data: legend,
                x: 'center',
                top:99,
                align:'auto',
                itemGap:10,
                itemWidth:14,
                itemHeight:14,
                icon:"rect",
                type:"scroll"
            },
            "series": series,
            "yAxis": [{
                "type": "category",
                "data": graphdata['x']['data'],
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
            }],
            "xAxis": [{
                "type": "value",
                "show": false,
                "min": 0,
                "max": 100
            }]
        }
    }

    //纵向柱状图
    if (data.graph == 'bar-y-category') {
        var series = []
        for (i = 0; i < d_data.x['data'].length; i++) {
            //循环折线图x轴上的legend
            //设置图例开关
            if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
                legend[i] = graphdata['y'][i]['name'];
            } else {
                legend = [];
            }
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
                feature: feature,
                x:672,
                y:18
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
            title.push(
                {
                    subtextStyle: {
                        rich:{fontSize:14},
                        height: 14
                    },
                    left: 'center',
                    top: 295,
                    //标题内边距,上右下左
                    // padding: [20, 0, 0, 40],
                    //主标题和副标题之间的间距
                    itemGap:30,
                    text: graphdata['x']['data'][0],
                    subtext: graphdata['y'][0]['name'],

                }
            );
            option = {
                //添加水印方案2
                graphic:

                    {
                        type: 'group',
                        rotation: Math.PI / 4,
                        bounding: 'raw',
                        right: 50,
                        bottom:60,
                        z: 100,
                        children: [
                            {
                                type: 'rect',
                                left: 'center',
                                top: 'center',
                                z: 100,
                                shape: {
                                    width: 400,
                                    height:40,
                                },
                                style: {
                                    //填充色
                                    fill: 'rgba(0,0,0,0.05)',
                                    //是否可拖拽
                                    // draggable: true,

                                }
                            },
                            {
                                type: 'text',
                                left: 'center',
                                top: 'center',
                                z: 100,
                                style: {
                                    fill: 'rgba(255,255,255,1)',
                                    text: 'Meta Insight',
                                    font: 'bold 26px Microsoft YaHei'
                                }
                            }
                        ]
                    },

                toolbox: {
                    itemSize:14,
                    feature: feature,
                    right:22,
                    top:22
                    // right:24,
                    // top:24
                },
                grid: grid,
                title: title,
                animationDuration: animationDuration,
                tooltip: {
                    show: tooltip},
            legend: {
                //legend超出一行时滚动
                type:"scroll",
                //图例
                data: legend
            },
            "series": [{
                "name": "推荐净值",
                type: 'gauge',
                min: -100,
                max: 100,
                // top:104,
                // right: 130,
                // bottom:208,
                // left: 132,
                center:['50%','61.5%'],
                //仪表盘半径
                radius:230,
                silent:true,
                // wukong!
                "axisLine": {
                    "lineStyle": {
                        "width": 80,
                        "opacity": 0.8,
                        //仪表盘颜色
                        "color": [[0.5, echartsTheme.visualMapColor[1]], [1, echartsTheme.visualMapColor[0]]]
                    }
                },
                "detail": {
                    show:true,
                    "offsetCenter": [0, "62"],
                    "textStyle": {"color": "#000","fontSize":18},
                    fontFamily:'PingFangSC-Medium',
                    height:18,
                },
                // wukong!
                "data": [{"value":"60", "name":"推荐净值（NPS）", "serise_name":"品牌名称"}],
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
                "pointer": {"width": 12, "length": "50%", "color": "#000"},
                "itemStyle": {"normal": {"color": echartsTheme.visualMapColor[0]}},
                // title:{fontFamily:'PingFangSC-Medium'}
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
            //循环折线图x轴上的legend
            //设置图例开关
            if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
                legend[i] = graphdata['y'][i]['name'];
            } else {
                legend = [];
            }
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
                feature: feature,
                x: 672,
                y: 18
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

    //条形象形图
    if (data.graph == 'pictorialline') {
        //控制象形图上、左边距
        grid.left = 105,
        grid.top = 96,
        grid.height =199,
        grid.width = 524,

        option = {
            //添加水印方案2
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom:60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height:40,
                            },
                            style: {
                                //填充色
                                fill: 'rgba(0,0,0,0.05)',
                                //是否可拖拽
                                // draggable: true,

                            }
                        },
                        {
                            type: 'text',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            style: {
                                fill: 'rgba(255,255,255,1)',
                                text: 'Meta Insight',
                                font: 'bold 26px Microsoft YaHei'
                            }
                        }
                    ]
                },
            toolbox: {
                itemSize:14,
                feature: feature,
                right:22,
                top:22
                // right:24,
                // top:24
            },
            animationDuration: animationDuration,
            grid: grid,
            title: title,
            tooltip: {
                show: tooltip,
                trigger: 'item',
                //formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            legend: {
                //legend超出一行时滚动
                type:"scroll",
                //图例
                data: legend
            },
            "yAxis": {
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
                            graphdata['y'][2]['name']+'  '+graphdata['y'][2]['data'][0],
                            graphdata['y'][1]['name']+'  '+graphdata['y'][1]['data'][0],
                            graphdata['y'][0]['name']+'  '+graphdata['y'][0]['data'][0],
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
                "data": [{
                    "value": graphdata['y'][2]['data'][0],
                    "symbol": "path:\/\/m 100.55702,161.03384 c -6.077439,-1.21802 -8.357637,-8.69503 -4.007038,-13.13952 4.820698,-4.92474 13.254328,-1.44121 13.254328,5.47473 0,4.87383 -4.51213,8.61379 -9.24729,7.66479 z m -0.759346,-4.37014 c 1.200056,-0.91533 2.469196,-1.08812 3.700536,-0.50381 0.54186,0.25713 1.04654,0.62735 1.12151,0.82271 0.20972,0.54653 1.13802,0.43807 1.13802,-0.13296 0,-0.97295 -2.03243,-2.15767 -3.70157,-2.15767 -1.77676,0 -3.954581,1.35381 -3.612375,2.24559 0.205632,0.53587 0.32354,0.51202 1.353879,-0.27386 z m 0.615486,-4.4059 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40929,-0.40929 -1.601547,-0.40929 -2.010836,0 -0.409289,0.40929 -0.409289,1.60154 0,2.01083 0.409289,0.40929 1.601546,0.40929 2.010836,0 z m 5.29166,0 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40928,-0.40929 -1.60154,-0.40929 -2.01083,0 -0.17462,0.17462 -0.3175,0.62706 -0.3175,1.00541 0,0.37836 0.14288,0.83079 0.3175,1.00542 0.40929,0.40929 1.60155,0.40929 2.01083,0 z",
                    label:{
                        normal:{
                            fontSize:"14px"
                        }
                    },
                    "itemStyle": {"normal": {"color": "#DC1E35"}}
                }, {
                    "value": graphdata['y'][1]['data'][0],
                    "symbol": "path:\/\/M10.2565161,249 C10.2565161,386.531 121.178839,498 258.014968,498 C394.834581,498 505.740387,386.531 505.740387,249 C505.740387,111.4856 394.834581,0 258.014968,0 C121.178839,0 10.2565161,111.4856 10.2565161,249 Z M299.30529,182.6 C299.30529,159.6754 317.786839,141.1 340.579097,141.1 C363.387871,141.1 381.869419,159.6754 381.869419,182.6 C381.869419,205.508 363.387871,224.1 340.579097,224.1 C317.786839,224.1 299.30529,205.508 299.30529,182.6 Z M134.127484,182.6 C134.127484,159.6754 152.625548,141.1 175.417806,141.1 C198.226581,141.1 216.724645,159.6754 216.724645,182.6 C216.724645,205.508 198.226581,224.1 175.417806,224.1 C152.625548,224.1 134.127484,205.508 134.127484,182.6 Z M144.466581,329.925 C144.466581,321.9072 150.924387,315.4 158.901677,315.4 L357.095226,315.4 C365.072516,315.4 371.563355,321.9072 371.563355,329.925 C371.563355,337.9428 365.072516,344.45 357.095226,344.45 L158.901677,344.45 C150.924387,344.45 144.466581,337.9428 144.466581,329.925 Z",
                    label:{
                        normal:{
                            fontSize:"14px"
                        }
                    },
                    "itemStyle": {"normal": {"color": "#F6A623"}}
                }, {
                    "value": graphdata['y'][0]['data'][0],
                    "symbol": "path:\/\/M0,249 C0,386.531 111.469,498 249,498 C386.5144,498 498,386.531 498,249 C498,111.4856 386.5144,0 249,0 C111.469,0 0,111.4856 0,249 Z M290.5,182.6 C290.5,159.6754 309.092,141.1 332,141.1 C354.9246,141.1 373.5,159.6754 373.5,182.6 C373.5,205.508 354.9246,224.1 332,224.1 C309.092,224.1 290.5,205.508 290.5,182.6 Z M124.5,182.6 C124.5,159.6754 143.092,141.1 166,141.1 C188.9246,141.1 207.5,159.6754 207.5,182.6 C207.5,205.508 188.9246,224.1 166,224.1 C143.092,224.1 124.5,205.508 124.5,182.6 Z M336.5318,299.0158 C340.9806,292.3592 350.011,290.5664 356.6842,295.0318 C363.3408,299.4806 365.1336,308.511 360.6682,315.1676 C337.4614,349.8782 295.231,371.425 248.9668,371.425 C202.7524,371.425 160.5718,349.928 137.3318,315.2838 C132.8664,308.6438 134.6426,299.6134 141.3158,295.1314 C147.9724,290.666 157.0028,292.4422 161.4682,299.1154 C179.1804,325.526 212.2476,342.375 248.9668,342.375 C285.7358,342.375 318.8196,325.4762 336.5318,299.0158 Z",
                    label:{
                        normal:{
                            fontSize:"14px"
                        }
                    },
                    "itemStyle": {"normal": {"color": "#40BA2C"}}
                }],
                    "animation": false,
                    "type": "pictorialBar",
                    //前后图形间距
                    symbolMargin: 4,
                    //图形重叠
                    symbolRepeat: 'fixed',
                    "symbolClip": true,
                    //图形的大小
                    "symbolSize":[40,40],
                    "symbolBoundingData": 100,
            }, {
                "data": [{
                    "value": 100,
                    "symbol": "path:\/\/m 100.55702,161.03384 c -6.077439,-1.21802 -8.357637,-8.69503 -4.007038,-13.13952 4.820698,-4.92474 13.254328,-1.44121 13.254328,5.47473 0,4.87383 -4.51213,8.61379 -9.24729,7.66479 z m -0.759346,-4.37014 c 1.200056,-0.91533 2.469196,-1.08812 3.700536,-0.50381 0.54186,0.25713 1.04654,0.62735 1.12151,0.82271 0.20972,0.54653 1.13802,0.43807 1.13802,-0.13296 0,-0.97295 -2.03243,-2.15767 -3.70157,-2.15767 -1.77676,0 -3.954581,1.35381 -3.612375,2.24559 0.205632,0.53587 0.32354,0.51202 1.353879,-0.27386 z m 0.615486,-4.4059 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40929,-0.40929 -1.601547,-0.40929 -2.010836,0 -0.409289,0.40929 -0.409289,1.60154 0,2.01083 0.409289,0.40929 1.601546,0.40929 2.010836,0 z m 5.29166,0 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40928,-0.40929 -1.60154,-0.40929 -2.01083,0 -0.17462,0.17462 -0.3175,0.62706 -0.3175,1.00541 0,0.37836 0.14288,0.83079 0.3175,1.00542 0.40929,0.40929 1.60155,0.40929 2.01083,0 z",
                    label:{
                        normal:{
                            fontSize:"14px"
                        }
                    },
                    "itemStyle": {"normal": {"color": "#b1b1b1"}}
                }, {
                    "value": 100,
                    "symbol": "path:\/\/M10.2565161,249 C10.2565161,386.531 121.178839,498 258.014968,498 C394.834581,498 505.740387,386.531 505.740387,249 C505.740387,111.4856 394.834581,0 258.014968,0 C121.178839,0 10.2565161,111.4856 10.2565161,249 Z M299.30529,182.6 C299.30529,159.6754 317.786839,141.1 340.579097,141.1 C363.387871,141.1 381.869419,159.6754 381.869419,182.6 C381.869419,205.508 363.387871,224.1 340.579097,224.1 C317.786839,224.1 299.30529,205.508 299.30529,182.6 Z M134.127484,182.6 C134.127484,159.6754 152.625548,141.1 175.417806,141.1 C198.226581,141.1 216.724645,159.6754 216.724645,182.6 C216.724645,205.508 198.226581,224.1 175.417806,224.1 C152.625548,224.1 134.127484,205.508 134.127484,182.6 Z M144.466581,329.925 C144.466581,321.9072 150.924387,315.4 158.901677,315.4 L357.095226,315.4 C365.072516,315.4 371.563355,321.9072 371.563355,329.925 C371.563355,337.9428 365.072516,344.45 357.095226,344.45 L158.901677,344.45 C150.924387,344.45 144.466581,337.9428 144.466581,329.925 Z",
                    label:{
                        normal:{
                            fontSize:"14px"
                        }
                    },
                    "itemStyle": {"normal": {"color": "#b1b1b1"}}
                }, {
                    "value": 100,
                    "symbol": "path:\/\/M0,249 C0,386.531 111.469,498 249,498 C386.5144,498 498,386.531 498,249 C498,111.4856 386.5144,0 249,0 C111.469,0 0,111.4856 0,249 Z M290.5,182.6 C290.5,159.6754 309.092,141.1 332,141.1 C354.9246,141.1 373.5,159.6754 373.5,182.6 C373.5,205.508 354.9246,224.1 332,224.1 C309.092,224.1 290.5,205.508 290.5,182.6 Z M124.5,182.6 C124.5,159.6754 143.092,141.1 166,141.1 C188.9246,141.1 207.5,159.6754 207.5,182.6 C207.5,205.508 188.9246,224.1 166,224.1 C143.092,224.1 124.5,205.508 124.5,182.6 Z M336.5318,299.0158 C340.9806,292.3592 350.011,290.5664 356.6842,295.0318 C363.3408,299.4806 365.1336,308.511 360.6682,315.1676 C337.4614,349.8782 295.231,371.425 248.9668,371.425 C202.7524,371.425 160.5718,349.928 137.3318,315.2838 C132.8664,308.6438 134.6426,299.6134 141.3158,295.1314 C147.9724,290.666 157.0028,292.4422 161.4682,299.1154 C179.1804,325.526 212.2476,342.375 248.9668,342.375 C285.7358,342.375 318.8196,325.4762 336.5318,299.0158 Z",
                    "itemStyle": {"normal": {"color": "#b1b1b1"}}
                }],
                    "animation": false,
                    "type": "pictorialBar",
                    //前后图形间距
                    symbolMargin: 4,
                    symbolRepeat: 'fixed',
                    "symbolClip": true,
                    "symbolSize":[40,40],
                    "symbolBoundingData": 100,
                "z": -5
            }
                // barGap:4

            ],

        }
    }

    // console.log(option)
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}
