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
    var graph_type = [
        'pie',
        'wordCloud1',
        'wordCloud2',
        'map',
        'line',
        'k',
        'area',
        'gauge',
        'bar-x-category',
        'bar-y-category',
        'bar-y-category-stack',
        'scatter',
        'linemaker',
        'bar-y-stack',
        'scatter-relationship',
        'bar-x-category-stack',
        'pictorialline',
        'bar-y-contrast',
        'bar-y-value',
        'line-bar'];
    if ($.inArray(data.graph, graph_type) == -1) {
        alert('暂无该图表类型');
        return false;
    }
    var themename = data.theme;
    // var themename='wk_colorful';
    var echartsTheme = dataThenme[themename].theme;

    // 调用echarts.registerTheme()注册主题
    echarts.registerTheme('DT', echartsTheme)


    //数据格式化
    var len = []
    var lenv = []
    if (typeof(graphdata['y'].length) != "undefined") {
        len = graphdata['y'].length;
        lenv = graphdata['y'][0]['data'].length;
    }
    if(data.graph != 'scatter'){
        for (var i = 0; i < len; i++) {
            var datav = []
            for (var l = 0; l < lenv; l++) {
                //根据主题判断数据来源，分别进行处理
                var ynumber = graphdata['y'][i]['data'][l] + ''
                if (themename == 'ml' && ynumber.indexOf('.') > -1 ) {
                    graphdata['y'][i]['data'][l] = parseFloat(ynumber.substring(0, ynumber.indexOf('.')));
                }
                if (themename == 'wk_purple' || themename == 'wk_colorful' && ynumber.indexOf('.') > -1) {
                    graphdata['y'][i]['data'][l] = parseFloat(ynumber.substring(0, ynumber.indexOf('.') + 12));
                }
            }
        }
    }


    // console.log(echartsTheme.color.length)
    // echarts.registerTheme('WK_purple', echartsTheme)
    //使用echarts.init()创建图表，第二个参数即为刚才注册的主题名字。
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
    //设置动画开关
    var animation = false;
    if (typeof(d_data.animation) == "undefined" || d_data.animation == 1) {
        animation = true;
    }
    //data 形状
    var symbol = ['roundRect', 'circle', 'triangle', 'diamond', 'path://m0.75,72.94l98,-72.19l98,72.19l-37.43,116.81l-121.13,0l-37.43-116.81z', 'emptyroundRect', 'emptycircle', 'emptytriangle', 'emptydiamond', 'emptypath://m0.75,72.94l98,-72.19l98,72.19l-37.43,116.81l-121.13,0l-37.43-116.81z',]


    //对网页自适应进行判断
    //grid
    var lLeft = '';
    var lTop = '';
    var gBottom = 95;
    var gLeft = 80;
    var gTop= 105;
    var gRight = 30;
    //标签和坐标轴的间距
    var xMargin = 12;
    //标签和坐标轴的间距
    var yMargin = 12;
    //圆心在x轴位置
    var pie_center_x = 50;
    //圆心在y轴位置
    var pie_center_y = 51;
    //圆环图内半径
    var pie_center_i = 40;
    //圆环图外半径
    var pie_center_n = 63;
    //x轴位置legend占比1.9%，y轴legend占比2.59%
    //legend在内半径占比12.72%,legend在外半径占比8.23%
    //legend(圆角矩形)在右上角时间距
    if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
        gTop += 19;
        lTop = 97;
        gBottom += 12;
        gLeft -=9;
        // gRight +=0;
        // pie_center_y += 4;
        // pie_center_i -= 7;
        // pie_center_n -= 8;
    }
    //legend在靠左垂直时间距
    if (d_data.legend == 2) {
        lTop = 233;
        lLeft = 18;
    }
    //legend（方形）在右上角时间距
    if (d_data.legend == 3) {
        lTop = 97;
        gTop += 19;
        gLeft -=9;
        gBottom += 12;
        pie_center_y += 4;
        pie_center_i -= 7;
        pie_center_n -= 8;
    }
    //主标题/副标题未定义时间距
    if (typeof(d_data.big_title) == "undefined" || d_data.small_title == "undefined"){

    }
    //主标题未定义/副标题未定义/备注1未定义时间距
    if (typeof(d_data.big_title) == "undefined" || d_data.small_title == "undefined" || d_data.remarks1 == "undefined"){

    }
    //主标题未定义/副标题未定义/备注2未定义时间距
    if (typeof(d_data.big_title) == "undefined" || d_data.small_title == "undefined" || d_data.remarks2 == "undefined"){

    }
    //主标题未定义/备注1未定义/备注2未定义时间距
    if (typeof(d_data.big_title) == "undefined" || d_data.remarks1 == "undefined" || d_data.remarks2 == "undefined"){

    }
    //主标题未定义/备注1未定义/legend在靠左垂直位置时间距
    if (typeof(d_data.big_title) == "undefined" || d_data.remarks1 == "undefined" || d_data.legend == 2) {

    }
    //主标题未定义/备注2未定义/legend在靠左垂直位置时间距
    if (typeof(d_data.big_title) == "undefined" || d_data.remarks2 == "undefined" || d_data.legend == 2) {

    }
    //主标题未定义/备注1未定义时间距
    if (typeof(d_data.big_title) == "undefined" || d_data.remarks1 == "undefined"){

    }
    //主标题未定义/备注2未定义时间距
    if (typeof(d_data.big_title) == "undefined" || d_data.remarks2 == "undefined"){

    }
    //主标题未定义/legend在靠左垂直位置时间距
    if (typeof(d_data.big_title) == "undefined" || d_data.legend == 2) {

    }
    //主标题未定义/legend在右上角水平位置时间距
    if (typeof(d_data.big_title) == "undefined" || d_data.legend == "undefined" || d_data.legend == 1 || d_data.legend == 3) {
        gTop -= 18
        // lTop -= 18
        pie_center_y -= 5;
    }
    //主标题未定义/副标题未定义/legend在靠左垂直时间距
    if (typeof(d_data.big_title) == "undefined" || d_data.small_title == "undefined" || d_data.legend == 2) {

    }
    //副标题/备注1未定义时间距
    if (typeof(d_data.small_title) == "undefined" || d_data.remarks1 == "undefined"){

    }
    //副标题/备注2未定义时间距
    if (typeof(d_data.small_title) == "undefined" || d_data.remarks2 == "undefined"){

    }
    //副标题未定义/legend在靠左垂直位置时间距
    if (typeof(d_data.small_title) == "undefined" || d_data.legend == 2) {

    }
    //副标题未定义/legend在右上角水平位置时间距
    if (typeof(d_data.small_title) == "undefined" || d_data.legend == "undefined" || d_data.legend == 1 || d_data.legend == 3) {
        gTop -= 14;
        // lTop -= 14
        pie_center_y -= 5;
    }
    //副标题未定义/备注1未定义/legend在靠左垂直位置时间距
    if (typeof(d_data.small_title) == "undefined" || d_data.remarks1 == "undefined" || d_data.legend == 2) {

    }
    //副标题未定义/备注2未定义/legend在靠左垂直位置时间距
    if (typeof(d_data.small_title) == "undefined" || d_data.remarks2 == "undefined" || d_data.legend == 2) {

    }
    //备注1未定义/legend在靠左垂直位置时间距
    if (typeof(d_data.remarks1) == "undefined" || d_data.legend == 2) {

    }
    //备注1未定义/legend在右上角位置时间距
    if (typeof(d_data.remarks1) == "undefined" || d_data.legend == "undefined" || d_data.legend == 1 || d_data.legend == 3) {
        gBottom -= 12;
        pie_center_y += 5;
    }
    //备注2未定义/legend在靠左垂直位置时间距
    if (typeof(d_data.remarks2) == "undefined" || d_data.legend == 2) {

    }
    //备注2未定义/legend在右上角位置时间距
    if (typeof(d_data.remarks2) == "undefined" || d_data.legend == "undefined" || d_data.legend == 1 || d_data.legend == 3) {
        gBottom -= 12;
        pie_center_y += 5;
    }

/////legend
    //2.legend各种情况下的位置和间距
    var legendValue = [];
    var legend = {
        selected:{},
        // 图例布局设置为垂直（水平/垂直,默认为水平）
        orient: 'vertical',
        //图例标记和文本对齐
        align: 'auto',
        // legend.left = 24.5,
        // legend.bottom = 226,
        itemGap: 13,
        itemWidth: 14,
        itemHeight: 14,
        type: 'scroll',
    }
    //循环折线图x轴上的legend
    //设置图例开关
    //当legend未定义时，不显示legend
    //右上角圆角矩形legend
    if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
        //控制图例位置
        //legend水平
        legend.orient = 'horizontal';
        legend.right = '24';
        legend.top = lTop;
        //获取图例数据
        for (var i = 0; i < graphdata['y'].length; i++) {
            legendValue[i] = graphdata['y'][i]['name'];
        }
        legend.data = legendValue;
        //图例自适应
        gTop += 19;
        gBottom += 12;
        gLeft -=9;
        // gRight +=0;
    }
    //靠左垂直方形legend
    if (d_data.legend == 2) {
        //左垂直方形legend，适用于圆环图
        legend.orient = 'vertical';
        legend.left = lLeft;
        legend.top = lTop;
        legend.icon = "rect";
        for (var i = 0; i < graphdata['y'].length; i++) {
            legendValue[i] = graphdata['y'][i]['name'];
        }
        legend.data = legendValue;
        gLeft += 10
    }
    //右上角水平方形legend
    if (d_data.legend == 3) {
        //控制图例位置
        //legend水平
        legend.orient = 'horizontal';
        legend.right = '24';
        legend.top = lTop;
        legend.icon = "rect";
        //获取图例数据
        for (var i = 0; i < graphdata['y'].length; i++) {
            legendValue[i] = graphdata['y'][i]['name'];
        }
        legend.data = legendValue;
        //图形自适应
        gTop += 19;
        gBottom += 12;
        gLeft -=9;
    }
//legend

    //点击legend的开关
    //selectedMode默认legend可点击
    if (graphdata.selectedMode == undefined || graphdata.selected !== 2){
        legend.selectedMode = true;
    }
    if (graphdata.selectedMode == 2) {
        legend.selectedMode = false;
    }
    //单选
    // if (graphdata.selectedMode == 3){
    //     legend.selectedMode = single;
    // }
    // //多选
    // if (graphdata.selectedMode == 4){
    //     legend.selectedMode = multiple;
    // }

/////legend

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

    //3.如果tittle/subtext不存在时，legend的间距和位置
    //对网页自适应进行判断
    //3-1.当legend为1时
    // var gTop = 22;
    // var gBottom = 27;
    // if (typeof(d_data.big_title) == "undefined" || (d_data.legend) == "undefined" || (d_data.legend) == 1) {
    //     gTop -= 18,
    //     legend.top -= 18
    // }
    // if (typeof(d_data.small_title) == "undefined" || (d_data.legend) == "undefined" || (d_data.legend) == 1) {
    //     gTop -= 14,
    //     legend.top -= 14
    // }
    // if (typeof(d_data.big_title) == "undefined" || (d
    // )(d_data.legend) == "undefined" || (d_data.legend) == 1) {
    //     gTop -= 18,
    //     legend.top -= 18
    // }
    // if (typeof(d_data.remarks1) == "undefined" || (d_data.legend) == "undefined") || (d_data.legend) == 1){
    //     gBottom -= 12,
    //     legend.top += 12
    // }
    //3-2.当legend为2时
    // if (typeof(d_data.small_title) == "undefined" || (d_data.legend) == "undefined" || (d_data.legend) == 2) {
    //     gTop -= 14
    //     legend.top -= 14;
    //     legend.left = 14;
    // }
    // if (typeof(d_data.remarks1) == "undefined" || (d_data.legend) == "undefined") || (d_data.legend) == 2){
    //     gBottom -= 65
    //     legend.top += 12;
    //     legend.left = 12;
    // }

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
    //标题
    var title = [
        {
            subtextStyle: {
                fontSize: 14,
                color: '#999',
                fontFamily: 'PingFangSC-Regular'
            },
            left: 23,
            top: 21.5,
            //标题内边距,上右下左
            // padding: [20, 0, 0, 40],
            //主标题和副标题之间的间距
            itemGap: 17,
            text: graphdata['big_title'],
            subtext: graphdata['small_title'],
            fontSize: 18,
            fontFamily: "PingFangSC-Medium"
        }, {
            text: '',
            subtext: remarks1 + '\n\n' + remarks2,
            left: 25,
            bottom: 24,
            fontFamily: 'PingFangSC-Medium',
            itemGap: 5,
            fontSize: 12,
        }

    ]

    //对下载功能有无进行判断
    if (typeof(d_data.feature) == "undefined" || d_data.feature == 1) {
        feature = {"saveAsImage": {"type": "png"}}
        // toolbox.right = 22;
        // toolbox.top = 22;
    }
    //定义公共toolbox
    var toolbox = {
        itemSize: 14,
        feature:feature,
        right: 22,
        top: 22
    }
    // grid.top += 14;
    // legend.top += 14;

    //定义公共grid
    var grid = {
        top: gTop,
        right: gRight,
        bottom: gBottom,
        left: gLeft,
        // bottom: gBottom + '%',
        // top: gTop + '%',
        containLabel: false
    };
    // title=[{"name":"推荐净值(NPS)"},{"name":"备注"}];title.push({"name":"组名"}) ;title

    // data.graph = 'gauge'
    // 指定图表的配置项和数据
    var option = {}
    //圆环图
    if (data.graph == 'pie') {
        var series = [];
        // var legend = [];
        var len = [];
        // 第二种方案：使用循环将series循环输出
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
        }
        for (var i = 0; i < len; i++) {
            series[i] = {
                name: graphdata['y'][i]['name'],
                value: graphdata['y'][i]['data'],
                //是否开启鼠标移到扇形区域时的动画效果
                hoverAnimation: false,
                //启用防止标签重叠策略
                avoidLabelOverlap: true,
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
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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

            toolbox: toolbox,
            // toolbox:toolbox,
            // animation:animation,
            grid: grid,
            title: title,
            //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
            // center: ['50%', '56%'],
            // animationDuration: animationDuration,
            tooltip: {
                show: tooltip,
                trigger: 'item',
                //悬浮框中文字向左对齐
                textStyle: {
                    align: 'left'
                },
                // {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
                //在图形上显示具体数值
                formatter: '{a} <br/>{b} : {c}' + graphdata['unit2'],
            },
            legend: legend,
            // legend: {
            //     //图例
            //     data: legend,
            //     //图例布局设置为垂直（水平/垂直,默认为水平）
            //     orient: 'vertical',
            //     // y:'center',
            //     align: 'auto',
            //     //图例形状
            //     icon: "rect",
            //     left: 24.5,
            //     bottom: 226,
            //     itemGap: 13,
            //     itemWidth: 14,
            //     itemHeight: 14
            // },
            "series": [{
                //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
                center: [pie_center_x + '%', pie_center_y + '%'],
                //顺时针转动
                clockwise: true,
                "type": "pie",
                //圆环内半径、外半径
                // "radius": [110, 170],
                radius: [pie_center_i + '%', pie_center_n + '%'],
                // "height": 230,
                //图表上的数据
                "data": series,
                //图表上的字
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        // formatter: "{c}" 在图形上显示数值所占百分比
                        //带单位
                        // formatter: '{d}' + graphdata['unit1']
                        //不带单位
                        formatter: '{d}'
                    },

                },
            }],
        };
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });
    }

    //词云1
    // if (data.graph == 'wordCloud1') {
    //     var series = [];
    //     var legend = [];
    //     var len = []
    //     // 第二种方案：使用循环将series循环输出
    //     if (typeof(graphdata['y'].length) != "undefined") {
    //         len = graphdata['y'].length;
    //     }
    //     for (var i = 0; i < len; i++) {
    //         //循环legend图例
    //         //设置图例开关
    //         if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
    //             legend[i] = graphdata['y'][i]['name'];
    //         } else {
    //             legend = [];
    //         }
    //         series[i] = {
    //             name: graphdata['y'][i]['name'],
    //             value: graphdata['y'][i]['data']
    //         }
    //     }
    //     // var newW  = $('main').width()*3/4;
    //     // var newH = $('main').width()*3/4;
    //     option = {
    //         //添加水印方案2
    //         graphic: [
    //             //词云背景图
    //             // {
    //             //     type: 'image',
    //             //     right: 'center',
    //             //     top: 105,
    //             //     //  z: -10,
    //             //     bounding: 'raw',
    //             //     style: {
    //             //                 image: '../echartsDemo/img/wordbg.png',
    //             //                 width: 538,
    //             //                 height: 405,
    //             //                 opacity: 1
    //             //             }
    //             // },
    //             {
    //                 type: 'group',
    //                 rotation: Math.PI / 4,
    //                 bounding: 'raw',
    //                 right: 50,
    //                 bottom: 60,
    //                 z: 100,
    //                 children: [
    //                     {
    //                         type: 'rect',
    //                         left: 'center',
    //                         top: 'center',
    //                         z: 100,
    //                         shape: {
    //                             width: 400,
    //                             height: 40,
    //                         },
    //                         style: {
    //                             //填充色
    //                             fill: 'rgba(0,0,0,0.05)',
    //                             //是否可拖拽
    //                             // draggable: true,
    //
    //                         }
    //                     },
    //                     {
    //                         type: 'text',
    //                         left: 'center',
    //                         top: 'center',
    //                         z: 100,
    //                         style: {
    //                             fill: 'rgba(255,255,255,1)',
    //                             text: 'Meta Insight',
    //                             // fontFamily: 'bold 26px, Microsoft YaHei'
    //                             fontFamily: '微软雅黑',
    //                         }
    //                     }
    //                 ]
    //             }
    //         ],
    //         toolbox: {
    //             itemSize: 14,
    //             feature: feature,
    //             right: 22,
    //             top: 22
    //             // right:24,
    //             // top:23
    //         },
    //         grid: grid,
    //         title: title,
    //         animationDuration: animationDuration,
    //         animation: animation,
    //         tooltip: {
    //             show: tooltip,
    //             trigger: 'item',
    //             formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
    //         },
    //         legend: {
    //             //legend超出一行时滚动
    //             type: "scroll",
    //             //图例
    //             data: legend
    //         },
    //         "series": {
    //             "type": "wordCloud",
    //             "sizeRange": [12, 85],//字体大小范围（最小汉字-最大汉字）
    //             "rotationRange": [0, 0],//字体旋转角度
    //             "gridSize": 10,//偏移
    //             "width": "100%",//字浮云宽度
    //             // data必选包含name和value选项,name即为显示的字符，value越大字符字体大小越大/词频
    //             "data": series,
    //             //设置cloud形状
    //             // shape: 'cardioid',
    //             // shape: 'pentagon',
    //             // shape: 'circle',
    //             gridSize: 1,//字符间距
    //             //词云位置
    //             // center:['50%','50%'],
    //             width: 501,
    //             height: 324,
    //             top: 147,
    //             left: 113,
    //             bottom: 150,
    //             right: 105,
    //             textStyle: {
    //                 normal: {
    //                     color: function () {
    //                         //取主题随机色（四舍五入）
    //                         return echartsTheme.color[Math.round(Math.random() * echartsTheme.color.length)];
    //                     }
    //                 }
    //             },
    //         },
    //     };
    // }

    //词云
    if (data.graph == 'wordCloud2') {
        var maskImage = new Image();
        var series = [];
        var len = []
        // 第二种方案：使用循环将series循环输出
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
        }
        for (var i = 0; i < len; i++) {
            //循环legend图例
            //设置图例开关
            // if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
            //     legend[i] = graphdata['y'][i]['name'];
            // } else {
            //     legend = [];
            // }
            series[i] = {
                name: graphdata['y'][i]['name'],
                value: graphdata['y'][i]['data']
            }
        }
        option = {
            //添加水印方案2
            graphic: [
                //词云背景图
                // {
                //     type: 'image',
                //     right: 'center',
                //     top: 105,
                //     //  z: -10,
                //     bounding: 'raw',
                //     style: {
                //         image: '../echartsDemo/img/wordbg.png',
                //         width: 538,
                //         height: 405,
                //         opacity: 1
                //     }
                // },
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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
                                // fontFamily: 'bold 26px, Microsoft YaHei'
                                fontFamily: '微软雅黑',
                            }
                        }
                    ]
                }
            ],
            toolbox: toolbox,
            grid: grid,
            title: title,
            animation: animation,
            animationDuration: animationDuration,
            tooltip: {
                show: tooltip,
                trigger: 'item',
                //悬浮框中文字向左对齐
                textStyle: {
                    align: 'left'
                },
                formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            // legend: {
            //     //legend超出一行时滚动
            //     type: "scroll",
            //     //图例
            //     data: legend
            // },
            "series": {
                "type": "wordCloud",
                "sizeRange": [1, 100],//字体大小范围（最小汉字-最大汉字）
                "rotationRange": [0, 0],//字体旋转角度
                // "gridSize": 10,//偏移
                // "width": "100%",//字浮云宽度
                // data必选包含name和value选项,name即为显示的字符，value越大字符字体大小越大/词频
                "data": series,
                //设置cloud形状
                // shape: 'cardioid',
                // shape: 'pentagon',
                // shape: 'circle',
                maskImage: maskImage,
                gridSize: 1,//字符间距
                //词云位置
                // center:['50%','50%'],
                // width: 501,
                // height: 324,
                width: "69.29%",
                height: "53.55%",
                // top: 147,
                // left: 113,
                // bottom: 150,
                // right: 105,
                textStyle: {
                    normal: {
                        color: function () {
                            //取主题随机色（四舍五入）
                            return echartsTheme.color[Math.round(Math.random() * echartsTheme.color.length)];
                        }
                    }
                },

            },
        };
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });
        maskImage.onload = function () {
            option.series.maskImage
            myChart.setOption(option);
        }
        // maskImage.src= 'img/wordbg.png';
        maskImage.src= 'img/wordCloud.png';
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
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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

            toolbox:toolbox,
            grid: grid,
            title: title,
            animation: animation,
            animationDuration: animationDuration,
            tooltip: {
                show: tooltip,
                trigger: 'item',
                //悬浮框中文字向左对齐
                textStyle: {
                    align: 'left'
                },
                formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
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
                left: 28,
                itemWidth: 20,
                itemHeight: 140,
                textGap: 10,

            },
            series: [{
                "type": "map",
                "mapType": "china",
                label: {
                    normal: {
                        // verticalAlign:'bottom',
                        show: true,
                        // position: 'inside',
                        distance: 111,
                        // position: [-20,35]
                        // offset:[-20,40]
                        // align:'left',
                        // position: 'inside',
                        // padding: [20, 0, 0, -25]
                        // position:'left'
                        offset: [-60, 0],
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: 12,
                        color: '#333',
                    },
                    emphasis: {
                        show: true,
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: 12,
                        color: echartsTheme.visualMapColor[0],
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(196, 196, 196,1)',
                        borderType: 'solid',
                        borderWidth: 0.5,
                    },
                    emphasis: {
                        borderType: 'solid',
                        borderColor: 'rgba(102, 102, 102,1)',
                        areaColor: '#F5A623',
                        borderWidth: 0.5,
                    }
                },
                "data": series
            }]
        };
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false;
            myChart.setOption(option);
        });
    }
    // console.log(data.data);

    //折线图
    if (data.graph == 'line') {
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
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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


            toolbox: toolbox,
            animationDuration: animationDuration,
            grid: grid,
            title: title,
            tooltip: {
                show: tooltip,
                trigger: 'axis',
                //悬浮框中文字向左对齐
                textStyle: {
                    align: 'left'
                },
                formatter: function (params) {
                    // x轴名称
                    var relVal = params[0].name;
                    for (var i = 0, l = params.length; i < l; i++) {
                        relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                    }
                    return relVal;
                },
                axisPointer: {
                    lineStyle: {width: 1, color: '#c4c4c4'}
                }
            },
            legend: legend,
            xAxis: {
                // show: true,
                // name: 'x',
                // //设置坐标轴类型，此处为类目轴
                // type: 'category',
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
                    margin:xMargin,
                    show: true,
                    textStyle: {
                        //轴字体颜色
                        color: '#333',
                        fontSize: 14,
                    },
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
                    //标签距离轴的位置
                    margin:yMargin,
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
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });
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
        option = {
            //添加水印方案2
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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

            toolbox: toolbox,
            animationDuration: animationDuration,
            grid: grid,
            title: title,
            tooltip: {
                show: tooltip,
                trigger: 'axis',
                //悬浮框中文字向左对齐
                textStyle: {
                    align: 'left'
                },
                formatter: function (params) {
                    // x轴名称
                    var relVal = params[0].name;
                    for (var i = 0, l = params.length; i < l; i++) {
                        relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                    }
                    return relVal;
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
                    textStyle: {
                        margin:xMargin,
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
                    margin:xMargin,
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
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });
    }

    //条形图
    if (data.graph == 'bar-x-category') {
        // console.log(graphdata)
        var series = [];
        // var legend = [];
        var len = []
        var lenv = []
        var CountData = 0
        // 第二种方案：使用循环将series循环输出
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
            lenv = graphdata['y'][0]['data'].length;
        }
        for (var i = 0; i < len; i++) {
            //计算每个数值所占总数百分比
            //因为谛听做了截取整数处理，所以当数据低于1%，可能会显示0%。
            for (var l = 0; l < lenv; l++) {
                CountData += graphdata['y'][i]['data'][l]
                console.log(graphdata['y'][i]['data'][l])
            }
            series[i] = {
                barWidth: 24,
                barGap: '2.8%',
                //柱子宽度
                //barWidth: 24,
                //柱子间距
                //barCategoryGap: 15,
                name: graphdata['y'][i]['name'],
                data: graphdata['y'][i]['data'],
                type: "bar",
                label: {
                    normal: {
                        show: true,
                        // 柱子上的Value
                        position: 'right',
                        textStyle: {
                            color: "#333333", //color of value
                            fontSize: 14,
                            fontFamily: "PingFangSC-Regular",
                            fontWeight: 'normal',
                        }
                    },

                }
            }

        }
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
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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
            title: title,
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
                    // x轴名称
                    var relVal = params[0].name;
                    for (var i = 0, l = params.length; i < l; i++) {
                        var ynumber=params[i].value/CountData*100+''
                        relVal += '<br/>' +  parseFloat(ynumber.substring(0, ynumber.indexOf('.'))) + '%<br/>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                    }
                    return relVal;
                },
                axisPointer: {
                    lineStyle: {width: 1, color: 'rgba(15,15,15,0)'}
                }

            },
            // legend: legend,
            "series": series,
            "yAxis": [{
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
                "type": "category",
                "data": graphdata['x']['data'],
                "axisLabel": {
                    //标签距离轴的位置
                    margin:yMargin,
                    show: true,
                    textStyle: {
                        //轴字体颜色
                        color: '#333',
                        fontSize: 14,
                    }
                },
                //数据排序
                inverse: true,
            }],
            "xAxis": [{
                //wukong!
                "type": "value",
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
                "show": false,
            }]
        };
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });

    }

    //百分比堆叠条形图
    if (data.graph == 'bar-x-category-stack') {
        // console.log(data)
        grid.gleft -= 0
        var series = [];
        // var legend = [];
        var len = []
        // 第二种方案：使用循环将series循环输出
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
        }
        for (var i = 0; i < len; i++) {
            //循环折线图x轴上的legend
            //设置图例开关
            // if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
            //     legend[i] = graphdata['y'][i]['name'];
            // }
            // else {
            //     legend = [];
            // }
            series[i] = {
                name: graphdata['y'][i]['name'],
                data: graphdata['y'][i]['data'],
                type: "bar",
                stack: "总量",
                // legendHoverLink:true,
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
                //柱子宽度
                //barWidth: 40,
                // barMaxWidth:40,
                //柱子间距
                // barCategoryGap:17,
                // barCategoryGap: '30%'
            }
        }
        option = {
            // //柱子宽度
            // barWidth: 40,
            //添加水印方案2
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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

            toolbox: toolbox,
            grid: grid,
            title: title,
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
                    var relVal = params[0].name;
                    for (var i = 0, l = params.length; i < l; i++) {
                        relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                    }
                    return relVal;
                }
                // formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            // legend: {
            //     //图例
            //     data: legend,
            //     x: 'right',
            //     top: 99,
            //     align: 'auto',
            //     itemGap: 10,
            //     itemWidth: 14,
            //     itemHeight: 14,
            //     icon: "rect",
            //     //legend超出一行时滚动
            //     type: 'scroll'
            // },
            legend: legend,
            "series": series,
            "yAxis": [{
                "type": "category",
                "data": graphdata['x']['data'],
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        //轴字体颜色
                        color: '#333',
                        fontSize: 14,
                    },
                },
                inverse: true,
            }],
            "xAxis": [{
                "type": "value",
                "show": false,
                // "min": 0,
                // "max": 100
            }]
        };
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });
    }

    //纵向柱状图
    // if (data.graph == 'bar-y-category') {
    //     var series = []
    //     for (i = 0; i < d_data.x['data'].length; i++) {
    //         //循环折线图x轴上的legend
    //         //设置图例开关
    //         if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
    //             legend[i] = graphdata['y'][i]['name'];
    //         } else {
    //             legend = [];
    //         }
    //         series[i] = {
    //             name: d_data.y[i]['name'],
    //             type: 'bar',
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: 'right',
    //                     formatter: '{c}%'
    //                 }
    //             },
    //             data: [d_data.y[i]['data'][0]]
    //         }
    //
    //     }
    //     option = {
    //         //        backgroundColor: '#eee',
    //         animationDuration: animationDuration,
    //         toolbox: {
    //             feature: feature,
    //             x: 672,
    //             y: 18
    //         },
    //         // color: colors,
    //         title: {},
    //         tooltip: {
    //             trigger: 'axis',
    //             axisPointer: {
    //                 type: 'shadow'
    //             }
    //         },
    //         legend: {
    //             // textStyle: {
    //             //     color: legendTextstyleColor
    //             // },
    //             bottom: 0,
    //             // data: ['2017年']
    //         },
    //         grid: {
    //             left: '3%',
    //             right: '6%',
    //             bottom: '7%',
    //             top: '5%',
    //             containLabel: true
    //         },
    //         xAxis: {
    //             splitLine: {
    //                 show: false //去掉网格线
    //             },
    //             axisLine: {
    //                 // lineStyle: {
    //                 //     color: axislineLinestyleColor
    //                 // }
    //             },
    //             axisTick: {
    //                 // lineStyle: {
    //                 //     color: axislineAxistickColor
    //                 // }
    //             },
    //             axisLabel: {
    //                 show: true,
    //                 // textStyle: {
    //                 //     color: axislineAxislabelColor
    //                 // }
    //             },
    //             type: 'value',
    //             boundaryGap: [0, 0.01],
    //
    //         },
    //         yAxis: {
    //             axisLine: {
    //                 // lineStyle: {
    //                 //     color: axislineLinestyleColor,
    //                 //     width: '1'
    //                 // }
    //             },
    //             // axisTick: {
    //             //     lineStyle: {
    //             //         color: axislineAxistickColor
    //             //     }
    //             // },
    //             axisLabel: {
    //                 show: true,
    //                 // textStyle: {
    //                 //     color: axislineAxislabelColor
    //                 // }
    //             },
    //             splitLine: {
    //                 show: false //去掉网格线
    //             },
    //             type: 'category',
    //
    //
    //             data: [{
    //                 value: '',
    //                 barWidth: '40',
    //                 // 突出周一
    //                 // textStyle: {
    //                 //
    //                 //     color: '#999'
    //                 // }
    //             }]
    //         },
    //         series: series
    //     };
    // }

    //百分比堆叠柱状图
    if (data.graph == 'bar-y-stack') {
        // console.log(data)
        var series = [];
        var len = []
        var lenv = []
        // 第二种方案：使用循环将series循环输出
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
            lenv = graphdata['y'][0]['data'].length;
        }

        for (var i = 0; i < len; i++) {
            //循环折线图x轴上的legend
            //设置图例开关
            var datav = []
            for (var l = 0; l < lenv; l++) {

                if (graphdata['y'][i]['data'][l] < 10) {
                    datav[l] = {
                        value: graphdata['y'][i]['data'][l],
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }
                } else {
                    datav[l] = graphdata['y'][i]['data'][l]
                }

            }

            series[i] = {
                name: graphdata['y'][i]['name'],
                data: datav,
                type: "bar",
                stack: "总量",
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                    }
                },
                barMaxWidth: 50,
            }
        }
        option = {
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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
            toolbox: toolbox,
            grid: grid,
            title: title,
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
                    var relVal = params[0].name;
                    for (var i = 0, l = params.length; i < l; i++) {
                        relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                    }
                    return relVal;
                }
                // formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            legend: legend,
            "series": series,
            "yAxis": [{
                "type": "value",
                "show": false,
                // "min": 0,
                // "max": 100,
                inverse: true,

            }],
            "xAxis": [{
                "type": "category",
                "data": xaxisdata,
                "axisTick": {"show": false},
                "axisLine": {"show": false},
                "splitLine": {"show": false},
            }]
        };
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });
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
        option = {
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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
            toolbox: toolbox,
            grid: grid,
            title: title,
            animationDuration: animationDuration,
            animation: animation,
            tooltip: {
                show: tooltip,
                trigger: 'item',
                axisPointer: {
                    lineStyle: {
                        color: 'rgba(15,15,15,0)'
                    },
                },
                //悬浮框中文字向左对齐
                textStyle: {
                    align: 'left'
                },

                formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
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
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });
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
            top: $('#' + obj).height() * (pie_center_y / 100) + 92,
            //标题内边距,上右下左
            padding: [5, 0, 0, 0],
            //主标题和副标题之间的间距
            itemGap: -78,
            // text: graphdata['x']['data'][0],
            // subtext: graphdata['y'][0]['name'],
            subtext: graphdata['x']['data'][0],
            text: graphdata['y'][0]['name'],

        });

        option = {
            //添加水印方案2
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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
            toolbox: toolbox,
            grid: grid,
            title: title,
            // animation:animation,
            // animationDuration: animationDuration,
            tooltip: {
                show: tooltip,
                trigger: 'item',
                //悬浮框中文字向左对齐
                textStyle: {
                    align: 'left'
                },
                formatter: "{a} <br/>{b} : {c}" + graphdata['unit']
            },
            legend: {
                //legend超出一行时滚动
                type: "scroll",
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
                center: [pie_center_x + '%', pie_center_y + '%'],
                //仪表盘半径
                radius: pie_center_n + 15 + '%',
                //这个会影响tooltip显示
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
                    "offsetCenter": [0, "77"],
                    "textStyle": {
                        "color": "#333333",
                        "fontSize": 18,
                        fontFamily: 'PingFangSC-Regular',
                        fontWeight: 'normal',
                    },
                    height: 18,
                },
                // wukong!
                "data": [{"value": graphdata['y'][0]['data'][0]}],
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
                "pointer": {"width": 12, "length": "47%", "color": "#000"},
                // "itemStyle": {"normal": {"color": echartsTheme.visualMapColor[0]}},  //指针颜色
                title: {fontFamily: 'PingFangSC-Medium'}
            }],
        };
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });
    }

    //纵向柱状堆叠图
    // if (data.graph == 'bar-y-category-stack') {
    //     var series = []
    //     var legend = []
    //     for (i = 0; i < d_data.y.length; i++) {
    //         var draw_value = [];
    //         draw_value[i] = [];
    //         $.each(d_data.y[i]['data'], function (j, val) {
    //             if (val < 6) {
    //                 draw_value[i][j] = {
    //                     value: val,
    //                     label: {
    //                         normal: {
    //                             show: false,
    //                             position: 'insideRight',
    //                             formatter: '{c}%'
    //                         }
    //                     },
    //                 }
    //             } else {
    //                 draw_value[i][j] = {
    //                     value: val,
    //                     label: {
    //                         normal: {
    //                             show: true,
    //                             position: 'insideRight',
    //                             formatter: '{c}%'
    //                         }
    //                     },
    //                 }
    //             }
    //         });
    //         //循环折线图x轴上的legend
    //         //设置图例开关
    //         if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
    //             legend[i] = graphdata['y'][i]['name'];
    //         } else {
    //             legend = [];
    //         }
    //         series[i] = {
    //             name: d_data.y[i]['name'],
    //             type: 'bar',
    //             stack: '总量',
    //             label: {
    //                 normal: {
    //                     show: true,
    //                     position: 'insideRight',
    //                     formatter: '{c}%'
    //                 }
    //             },
    //             data: draw_value[i]
    //         }
    //     }
    //     option = {
    //         animation: animation,
    //         animationDuration: animationDuration,
    //         toolbox: {
    //             feature: feature,
    //             x: 672,
    //             y: 18
    //         },
    //         // color: colors,
    //         title: {},
    //         tooltip: {
    //             trigger: 'axis',
    //             axisPointer: { // 坐标轴指示器，坐标轴触发有效
    //                 type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    //             }
    //         },
    //         legend: {
    //             // textStyle: {
    //             //     color: legendTextstyleColor
    //             // },
    //             bottom: 0,
    //             data: legend,
    //         },
    //         grid: {
    //             left: '3%',
    //             right: '4%',
    //             bottom: '7%',
    //             top: '5%',
    //             containLabel: true
    //         },
    //         xAxis: {
    //             // axisLine: {
    //             //     lineStyle: {
    //             //         color: axislineLinestyleColor
    //             //     }
    //             // },
    //             // axisTick: {
    //             //     lineStyle: {
    //             //         color: axislineAxistickColor
    //             //     }
    //             // },
    //             // axisLabel: {
    //             //     show: true,
    //             //     textStyle: {
    //             //         color: axislineAxislabelColor
    //             //     }
    //             // },
    //             splitLine: {
    //                 show: false //去掉网格线
    //             },
    //             type: 'value'
    //         },
    //         yAxis: {
    //             // axisLine: {
    //             //     lineStyle: {
    //             //         color: axislineLinestyleColor
    //             //     }
    //             // },
    //             // axisTick: {
    //             //     lineStyle: {
    //             //         color: axislineAxistickColor
    //             //     }
    //             // },
    //             // axisLabel: {
    //             //     show: true,
    //             //     textStyle: {
    //             //         color: axislineAxislabelColor
    //             //     }
    //             // },
    //             splitLine: {
    //                 show: false //去掉网格线
    //             },
    //             type: 'category',
    //             data: d_data.x['data']
    //         },
    //         series: series
    //     };
    // }

    //条形象形图
    if (data.graph == 'pictorialline') {
        //控制象形图上、左边距
        grid.left -= 0,
            grid.top -= 0,
            grid.right -= 0,
            grid.bottom -= 0,

            option = {
                //添加水印方案2
                graphic:
                    {
                        type: 'group',
                        rotation: Math.PI / 4,
                        bounding: 'raw',
                        right: 50,
                        bottom: 60,
                        z: 100,
                        children: [
                            {
                                type: 'rect',
                                left: 'center',
                                top: 'center',
                                z: 100,
                                shape: {
                                    width: 400,
                                    height: 40,
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
                toolbox: toolbox,
                animation: animation,
                animationDuration: animationDuration,
                grid: grid,
                title: title,
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
                        var relVal = params[0].name;
                        for (var i = 0, l = params.length; i < l; i++) {
                            relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                        }
                        return relVal;
                    }
                    // formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
                },
                legend: {
                    //legend超出一行时滚动
                    type: "scroll",
                    //图例
                    data: legend
                },
                "yAxis": {
                    "axisLabel": {
                        show: true,
                        textStyle: {
                            //轴字体颜色
                            color: '#333',
                            fontSize: 14,
                        }
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
                        graphdata['y'][2]['name'] + '  ' + graphdata['y'][2]['data'][0],
                        graphdata['y'][1]['name'] + '  ' + graphdata['y'][1]['data'][0],
                        graphdata['y'][0]['name'] + '  ' + graphdata['y'][0]['data'][0],
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
                            label: {
                                normal: {
                                    fontSize: "14px"
                                }
                            },
                            "itemStyle": {"normal": {"color": "#DC1E35"}}
                        }, {
                            "value": graphdata['y'][1]['data'][0],
                            "symbol": "path:\/\/M10.2565161,249 C10.2565161,386.531 121.178839,498 258.014968,498 C394.834581,498 505.740387,386.531 505.740387,249 C505.740387,111.4856 394.834581,0 258.014968,0 C121.178839,0 10.2565161,111.4856 10.2565161,249 Z M299.30529,182.6 C299.30529,159.6754 317.786839,141.1 340.579097,141.1 C363.387871,141.1 381.869419,159.6754 381.869419,182.6 C381.869419,205.508 363.387871,224.1 340.579097,224.1 C317.786839,224.1 299.30529,205.508 299.30529,182.6 Z M134.127484,182.6 C134.127484,159.6754 152.625548,141.1 175.417806,141.1 C198.226581,141.1 216.724645,159.6754 216.724645,182.6 C216.724645,205.508 198.226581,224.1 175.417806,224.1 C152.625548,224.1 134.127484,205.508 134.127484,182.6 Z M144.466581,329.925 C144.466581,321.9072 150.924387,315.4 158.901677,315.4 L357.095226,315.4 C365.072516,315.4 371.563355,321.9072 371.563355,329.925 C371.563355,337.9428 365.072516,344.45 357.095226,344.45 L158.901677,344.45 C150.924387,344.45 144.466581,337.9428 144.466581,329.925 Z",
                            label: {
                                normal: {
                                    fontSize: "14px"
                                }
                            },
                            "itemStyle": {"normal": {"color": "#F6A623"}}
                        }, {
                            "value": graphdata['y'][0]['data'][0],
                            "symbol": "path:\/\/M0,249 C0,386.531 111.469,498 249,498 C386.5144,498 498,386.531 498,249 C498,111.4856 386.5144,0 249,0 C111.469,0 0,111.4856 0,249 Z M290.5,182.6 C290.5,159.6754 309.092,141.1 332,141.1 C354.9246,141.1 373.5,159.6754 373.5,182.6 C373.5,205.508 354.9246,224.1 332,224.1 C309.092,224.1 290.5,205.508 290.5,182.6 Z M124.5,182.6 C124.5,159.6754 143.092,141.1 166,141.1 C188.9246,141.1 207.5,159.6754 207.5,182.6 C207.5,205.508 188.9246,224.1 166,224.1 C143.092,224.1 124.5,205.508 124.5,182.6 Z M336.5318,299.0158 C340.9806,292.3592 350.011,290.5664 356.6842,295.0318 C363.3408,299.4806 365.1336,308.511 360.6682,315.1676 C337.4614,349.8782 295.231,371.425 248.9668,371.425 C202.7524,371.425 160.5718,349.928 137.3318,315.2838 C132.8664,308.6438 134.6426,299.6134 141.3158,295.1314 C147.9724,290.666 157.0028,292.4422 161.4682,299.1154 C179.1804,325.526 212.2476,342.375 248.9668,342.375 C285.7358,342.375 318.8196,325.4762 336.5318,299.0158 Z",
                            label: {
                                normal: {
                                    fontSize: "14px"
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
                        "symbolSize": [40, 40],
                        "symbolBoundingData": 100,
                    }, {
                        "data": [{
                            "value": 100,
                            "symbol": "path:\/\/m 100.55702,161.03384 c -6.077439,-1.21802 -8.357637,-8.69503 -4.007038,-13.13952 4.820698,-4.92474 13.254328,-1.44121 13.254328,5.47473 0,4.87383 -4.51213,8.61379 -9.24729,7.66479 z m -0.759346,-4.37014 c 1.200056,-0.91533 2.469196,-1.08812 3.700536,-0.50381 0.54186,0.25713 1.04654,0.62735 1.12151,0.82271 0.20972,0.54653 1.13802,0.43807 1.13802,-0.13296 0,-0.97295 -2.03243,-2.15767 -3.70157,-2.15767 -1.77676,0 -3.954581,1.35381 -3.612375,2.24559 0.205632,0.53587 0.32354,0.51202 1.353879,-0.27386 z m 0.615486,-4.4059 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40929,-0.40929 -1.601547,-0.40929 -2.010836,0 -0.409289,0.40929 -0.409289,1.60154 0,2.01083 0.409289,0.40929 1.601546,0.40929 2.010836,0 z m 5.29166,0 c 0.40929,-0.40929 0.40929,-1.60154 0,-2.01083 -0.40928,-0.40929 -1.60154,-0.40929 -2.01083,0 -0.17462,0.17462 -0.3175,0.62706 -0.3175,1.00541 0,0.37836 0.14288,0.83079 0.3175,1.00542 0.40929,0.40929 1.60155,0.40929 2.01083,0 z",
                            label: {
                                normal: {
                                    fontSize: "14px"
                                }
                            },
                            "itemStyle": {"normal": {"color": "rgba(177, 177, 177, 0.2)"}}
                        }, {
                            "value": 100,
                            "symbol": "path:\/\/M10.2565161,249 C10.2565161,386.531 121.178839,498 258.014968,498 C394.834581,498 505.740387,386.531 505.740387,249 C505.740387,111.4856 394.834581,0 258.014968,0 C121.178839,0 10.2565161,111.4856 10.2565161,249 Z M299.30529,182.6 C299.30529,159.6754 317.786839,141.1 340.579097,141.1 C363.387871,141.1 381.869419,159.6754 381.869419,182.6 C381.869419,205.508 363.387871,224.1 340.579097,224.1 C317.786839,224.1 299.30529,205.508 299.30529,182.6 Z M134.127484,182.6 C134.127484,159.6754 152.625548,141.1 175.417806,141.1 C198.226581,141.1 216.724645,159.6754 216.724645,182.6 C216.724645,205.508 198.226581,224.1 175.417806,224.1 C152.625548,224.1 134.127484,205.508 134.127484,182.6 Z M144.466581,329.925 C144.466581,321.9072 150.924387,315.4 158.901677,315.4 L357.095226,315.4 C365.072516,315.4 371.563355,321.9072 371.563355,329.925 C371.563355,337.9428 365.072516,344.45 357.095226,344.45 L158.901677,344.45 C150.924387,344.45 144.466581,337.9428 144.466581,329.925 Z",
                            label: {
                                normal: {
                                    fontSize: "14px"
                                }
                            },
                            "itemStyle": {"normal": {"color": "rgba(177, 177, 177, 0.2)"}}
                        }, {
                            "value": 100,
                            "symbol": "path:\/\/M0,249 C0,386.531 111.469,498 249,498 C386.5144,498 498,386.531 498,249 C498,111.4856 386.5144,0 249,0 C111.469,0 0,111.4856 0,249 Z M290.5,182.6 C290.5,159.6754 309.092,141.1 332,141.1 C354.9246,141.1 373.5,159.6754 373.5,182.6 C373.5,205.508 354.9246,224.1 332,224.1 C309.092,224.1 290.5,205.508 290.5,182.6 Z M124.5,182.6 C124.5,159.6754 143.092,141.1 166,141.1 C188.9246,141.1 207.5,159.6754 207.5,182.6 C207.5,205.508 188.9246,224.1 166,224.1 C143.092,224.1 124.5,205.508 124.5,182.6 Z M336.5318,299.0158 C340.9806,292.3592 350.011,290.5664 356.6842,295.0318 C363.3408,299.4806 365.1336,308.511 360.6682,315.1676 C337.4614,349.8782 295.231,371.425 248.9668,371.425 C202.7524,371.425 160.5718,349.928 137.3318,315.2838 C132.8664,308.6438 134.6426,299.6134 141.3158,295.1314 C147.9724,290.666 157.0028,292.4422 161.4682,299.1154 C179.1804,325.526 212.2476,342.375 248.9668,342.375 C285.7358,342.375 318.8196,325.4762 336.5318,299.0158 Z",
                            "itemStyle": {"normal": {"color": "rgba(177, 177, 177, 0.2)"}}
                        }],
                        //"color": "#b1b1b1"
                        "animation": false,
                        "type": "pictorialBar",
                        //前后图形间距
                        symbolMargin: 4,
                        symbolRepeat: 'fixed',
                        "symbolClip": true,
                        "symbolSize": [40, 40],
                        "symbolBoundingData": 100,
                        "z": -5
                    },
                    // barGap:4
                ],

            };
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });
    }

    //对比柱状图
    if (data.graph == 'bar-y-contrast') {
        // console.log(graphdata)
        var series = [];
        // var legend = [];
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
            }
            // else {
            //     legend = [];
            // }
            series[i] = {

                //柱子最大宽度
                barMaxWidth: 50,
                // barWidth:'5%',
                barCategoryGap: '18%',
                // barCategoryGap: 3,
                barGap: '10%',
                // barGap: 21,
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
        option = {
            grid:grid,
            //     {
            //     top: 100,
            //     // right:125,
            //     bottom: 102,
            //     left: 129,
            //     containLabel: false
            // },
            //添加水印方案2
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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
            title: title,
            toolbox: toolbox,
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
                // formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
                //悬浮框中文字向左对齐
                textStyle: {align: 'left'},
                formatter: function (params) {

                    // x轴名称
                    var relVal = params[0].name;
                    for (var i = 0, l = params.length; i < l; i++) {
                        relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                    }
                    return relVal;
                },
                // formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            // legend: {
            //     //图例
            //     data: legend,
            //     x: 'right',
            //     top: 99,
            //     align: 'auto',
            //     itemGap: 10,
            //     itemWidth: 14,
            //     itemHeight: 14,
            //     icon: "rect",
            //     //legend超出一行时滚动
            //     type: 'scroll'
            // },
            legend: legend,
            "series": series,
            "xAxis": [{
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
                    //标签距离轴的位置
                    margin:yMargin,
                    show: true,
                    textStyle: {
                        //轴字体颜色
                        color: '#333',
                        fontSize: 14,
                    },
                },
                // splitArea: {
                //                 areaStyle: {
                //                             //图形透明度
                //                             opacity: splitAreaOpacity
                //                             }
                //             },
                splitLine: {show: false},
                // "data": graphdata['x']['data'],
                data: xaxisdata,
                type: 'category'
            }],
            "yAxis": [{
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
            }]
        };
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });

    }

    //顶部显示数值柱状图
    if (data.graph == 'bar-y-value') {
        // console.log(graphdata)
        var series = [];
        // var legend = [];
        var len = [];
        // 第二种方案：使用循环将series循环输出
        if (typeof(graphdata['y'].length) != "undefined") {
            len = graphdata['y'].length;
        }
        for (var i = 0; i < len; i++) {
            //循环折线图x轴上的legend
            //设置图例开关
            // if (typeof(d_data.legend) == "undefined" || d_data.legend == 1) {
            //     legend[i] = graphdata['y'][i]['name'];
            // } else {
            //     legend = [];
            // }
            series[i] = {
                type: 'bar',
                //柱子最大宽度
                barMaxWidth: 50,
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
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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
            title: title,
            toolbox:toolbox,
            animationDuration: animationDuration,
            animation: animation,
            // legend: legend,
            tooltip: {
                show: tooltip,
                trigger: 'axis',
                //悬浮框中文字向左对齐
                textStyle: {
                    align: 'left'
                },
                formatter: function (params) {
                    // x轴名称
                    var relVal = params[0].name;
                    for (var i = 0, l = params.length; i < l; i++) {
                        relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                    }
                    return relVal;
                },
                // formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
                axisPointer: {
                    lineStyle: {
                        color: 'rgba(15,15,15,0)'
                    },
                },
            },
            // legend: {
            //     //图例
            //     data: legend
            // },
            "series": series,
            "xAxis": [{
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
                    //标签距离轴的位置
                    margin:yMargin,
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
            }],
            "yAxis": [{
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
            }]
        };
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });

    }

    //折柱图
    if (data.graph == 'line-bar') {
        // console.log(graphdata)
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
                barMaxWidth: 50,
                // barWidth: 45,
                barWidth: '66%',
                // barCategoryGap: '5.53%',
                barGap: "80%",
                name: graphdata['y'][i]['name'],
                data: graphdata['y'][i]['data'],
            }
        }
        option = {
            grid: grid,
            //添加水印方案2
            graphic:
                {
                    type: 'group',
                    rotation: Math.PI / 4,
                    bounding: 'raw',
                    right: 50,
                    bottom: 60,
                    z: 100,
                    children: [
                        {
                            type: 'rect',
                            left: 'center',
                            top: 'center',
                            z: 100,
                            shape: {
                                width: 400,
                                height: 40,
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
            title: title,
            toolbox: toolbox,
            //     {
            //     itemSize: 14,
            //     feature: {
            //         //这个可以用toolbox直接切换图形，有点厉害。。。
            //         // dataView: {show: true, readOnly: false},
            //         // magicType: {show: true, type: ['line', 'bar']},
            //         // restore: {show: true},
            //         saveAsImage: {show: true}
            //     },
            //     right: 22,
            //     top: 22,
            // },
            animationDuration: animationDuration,
            animation: animation,
            legend:legend,
            // legend: {   selected:{},
            //             data: [
            //                     {
            //                         name:'图例1',
            //                         icon:'rect',
            //                         itemWidth: 14,
            //                         itemHeight: 2,
            //                     },
            //                     {
            //                         name:'图例2',
            //                         icon:'rect',
            //                         itemWidth: 14,
            //                         itemHeight: 14,
            //                     }
            //                 ]
            //         },
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
                    var relVal = params[0].name;
                    for (var i = 0, l = params.length; i < l; i++) {
                        relVal += '<br/>' + params[i].seriesName + ' : ' + params[i].value + graphdata['unit'];
                    }
                    return relVal;
                }
                // formatter: '{a} <br/>{b} : {c}' + graphdata['unit']
            },
            // legend: {
            //     //图例
            //     data: legend
            // },
            "series": series,
            "xAxis": [{
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
                    margin:xMargin,
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
                type: 'category'
            }],
            "yAxis": [{
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
                    margin:yMargin,
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
            }]
        };
        myChart.on('click', function (params) {
            option['legend']['selected'][params.name] = false
            myChart.setOption(option);
        });

    }

    console.log(option)
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    $(window).resize(function () {
        myChart.resize();
    });

}
console.log("<script language=javascript src='js/javascript.js'></script>");
console.log("<script language=javascript src='js/echarts.min.js'></script>");
