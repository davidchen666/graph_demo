<?php
$type = !empty($_GET['type']) && is_numeric($_GET['type']) ? $_GET['type'] : 1;
$post = '';
switch ($type) {
//        折线图
    case 1:
        $post = '{
                        "feature":1,
                        "legend":1,
                        "tooltip":1,
                        "selectedMode":1,
                        "animation":1,
                         "x":
                             {
                                 "data":["2017/9/1","2017/9/2","2017/9/3","2017/9/4","2017/9/5","2017/9/6","2017/9/7"]
                             },
                         "y":
                             [
                                 {
                                     "data":
                                         [10,20,30,1,3,2,44],
                                     "name": "图例1"
                                },{
                                     "data":
                                         [30,43,51,30,1,3,2],
                                     "name": "图例2"
                                },{
                                     "data":
                                         [60,20,12,51,30,1,3],
                                     "name": "图例3"
                                },{
                                     "data":
                                         [42,39,55,20,62,51,30],
                                     "name": "图例4"
                                }
                             ],
                         "big_title": "折线图",
                         "small_title": "副标题副标题副标题副标题副标题副标题副",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"k",
                         "width":723,
                         "height":548
                }';
        break;
//        圆环图
    case 2:
        $post = ' {
                         "feature":1,
                         "legend":1,
                         "tooltip":1,
                         "animation":1,
                         "selectedMode":1,
                         "y":
                             [{
                                 "data":[50],
                                 "name": "图例1"
                             },{
                                 "data":[25],
                                 "name": "图例2"
                             },{
                                 "data":[25],
                                 "name": "图例3"
                             }],
                         "big_title": "圆环图",
                         "small_title": "副标题",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源: B12",
                         "unit1":"%",
                         "unit2":"人",
                         "width":723,
                         "height":540
                     }';
        break;
//        地图
    case 3:
        $post = '{
                        "feature":1, 
                         "tooltip":1,           
                         "y":
                             [{
                                 "data":[2],
                                 "name": "上海"
                             },{
                                 "data":[30],
                                 "name": "北京"
                             },{
                                 "data":[2],
                                 "name": "天津"
                             },{
                                 "data":[2],
                                 "name": "江苏"
                             },{
                                 "data":[2],
                                 "name": "浙江"
                             },{
                                 "data":[2],
                                 "name": "福建"
                             },{
                                 "data":[2],
                                 "name": "台湾"
                             },{
                                 "data":[2],
                                 "name": "广东"
                             },{
                                 "data":[2],
                                 "name": "江西"
                             },{
                                 "data":[2],
                                 "name": "广西"
                             },{
                                 "data":[2],
                                 "name": "湖南"
                             },{
                                 "data":[2],
                                 "name": "贵州"
                             },{
                                 "data":[2],
                                 "name": "云南"
                             },{
                                 "data":[2],
                                 "name": "四川"
                             },{
                                 "data":[2],
                                 "name": "重庆"
                             },{
                                 "data":[2],
                                 "name": "湖北"
                             },{
                                 "data":[2],
                                 "name": "安徽"
                             },{
                                 "data":[2],
                                 "name": "河南"
                             },{
                                 "data":
                                     [2],
                                 "name": "河北"
                             },{
                                 "data":[27],
                                 "name": "山西"
                             },{
                                 "data":[2],
                                 "name": "陕西"
                             },{
                                 "data":[2],
                                 "name": "内蒙古"
                             },{
                                 "data":[2],
                                 "name": "甘肃"
                             },{
                                 "data":[2],
                                 "name": "宁夏"
                             },{
                                 "data":[2],
                                 "name": "青海"
                             },{
                                 "data":[2],
                                 "name": "新疆"
                             },{
                                 "data":[2],
                                 "name": "西藏"
                             },{
                                 "data":[2],
                                 "name": "海南"
                             },{
                                 "data":[2],
                                 "name": "澳门"
                             },{
                                 "data":[2],
                                 "name": "香港"
                             },{
                                 "data":[1],
                                 "name": "黑龙江"
                             },{
                                 "data":[1],
                                 "name": "吉林"
                             },{
                                 "data":[1],
                                 "name": "辽宁"
                             },{
                                 "data":[2],
                                 "name": "山东"
                             },{
                                 "data":[4],
                                 "name": "南海诸岛"
                             }
                             ],
                         "big_title": "热力地图",
                         "small_title": "副标题",
                         "remarks1":"基数: 所有被访者 n=400",
                         "remarks2": "数据来源：B12",
                         "unit":"人",
                         "width":723,
                         "height":617
                }';
        break;
//        仪表盘图
    case 5:
        $post = '{
                    "feature": 1,
                     "tooltip":1,
                    "x":
                        {
                            "data": ["推荐净值（NPS）"]
                        },
                    "y":
                        [{
                            "data":[36],
                            "name": "品牌名称"
                        }],
                    "big_title": "仪表盘NPS",
                    "small_title": "副标题",
                    "remarks1": "基数：所有被访者 n=400",
                    "remarks2": "数据来源：B12",
                    "unit": "%",
                    "width": 723,
                    "height": 546
                }';
        break;
//        条形图
    case 6:
        $post = '{
                        "feature":1,
                         "tooltip":1,
                         "x":
                             {
                                 "data":["图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14"]
                            },
                         "y":
                             [{
                                 "data":[90,50,10,70,80,50,40,30,40,32,60],
                                 "name": ""
                             }],
                         "big_title": "条形图",
                         "small_title": "副标题副标题副标题副标题副标题副标题副",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"人",
                         "width":723,
                         "height":624
                }';
        break;
//        百分比堆叠条形图
    case 7:
        $post = '{
                        "feature":1,
                         "tooltip":1,
                         "selectedMode":1,
                         "x":
                             {
                                 "data":["类目名称","类目名称","类目名称"]
                             },
                         "y":
                             [{
                                 "data":[10,10,10],
                                 "name": "图例1"
                             },{
                                 "data":[10,10,10],
                                 "name": "图例2"
                             },{
                                 "data":[10,10,10],
                                 "name": "图例3"
                             },{
                                 "data":[10,10,10],
                                 "name": "图例4"
                             },{
                                 "data":[10,10,10],
                                 "name": "图例5"
                             },{
                                 "data":[10,10,10],
                                 "name": "图例6"
                             },{
                                 "data":[10,10,10],
                                 "name": "图例7"
                             },{
                                 "data":[10,10,10],
                                 "name": "图例8"
                             },{
                                 "data":[10,10,10],
                                 "name": "图例9"
                             },{
                                 "data":[10,10,10],
                                 "name": "图例10"
                             }
                             ],
                         "big_title": "百分比堆叠条形图",
                         "small_title": "%",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"人",
                         "width":723,
                         "height":419
                }';
        break;
//        条形象形图
    case 8:
        $post = '{
                        "feature":1,
                         "tooltip":1,
                         "y":
                             [{
                                 "data":[40],
                                 "name": "推荐者"
                             },{
                                 "data":[20],
                                 "name": "中立者"
                             },{
                                 "data":[50],
                                 "name": "贬损者"
                             }],
                         "big_title": "条形象形图",
                         "small_title": "%",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"人",
                         "width":723,
                         "height":360
                }';
        break;
//        词云
    case 9:
        $post = '{
                        "feature":1,
                         "tooltip":1,
                         "y":
                             [{
                                 "data":[1],
                                 "name": "不错"
                             },{
                                 "data":[2],
                                 "name": "活动"
                             },{
                                 "data":[3],
                                 "name": "安全带"
                             },{
                                 "data":[4],
                                 "name": "服务态度"
                             },{
                                 "data":[5],
                                 "name": "驾驶"
                             },{
                                 "data":[6],
                                 "name": "外观"
                             },{
                                 "data":[7],
                                 "name": "汽车"
                             },{
                                 "data":[8],
                                 "name": "驾驶"
                             },{
                                 "data":[9],
                                 "name": "外观"
                             },{
                                 "data":[10],
                                 "name": "车"
                             },{
                                 "data":[11],
                                 "name": "降低"
                             },{
                                 "data":[12],
                                 "name": "降价"
                             },{
                                 "data":[13],
                                 "name": "省油"
                             },{
                                 "data":[14],
                                 "name": "提供一点"
                             },{
                                 "data":[15],
                                 "name": "发动机"
                             },{
                                 "data":[16],
                                 "name": "油耗"
                             },{
                                 "data":[17],
                                 "name": "售后"
                             },{
                                 "data":[18],
                                 "name": "动力"
                             },{
                                 "data":[19],
                                 "name": "性价比"
                             },{
                                 "data":[20],
                                 "name": "性能"
                             },{
                                 "data":[21],
                                 "name": "质量"
                             },{
                                 "data":[22],
                                 "name": "品牌"
                             },{
                                 "data":[23],
                                 "name": "促销"
                             },{
                                 "data":[24],
                                 "name": "更好保养"
                             },{
                                 "data":[25],
                                 "name": "增加力度"
                             },{
                                 "data":[26],
                                 "name": "推荐"
                             },{
                                 "data":[27],
                                 "name": "舒适"
                             },{
                                 "data":[28],
                                 "name": "配置"
                             },{
                                 "data":[29],
                                 "name": "舒适度"
                             },{
                                 "data":[30],
                                 "name": "价格"
                             },{
                                 "data":[31],
                                 "name": "体验"
                             },{
                                 "data":[32],
                                 "name": "品质"
                             },{
                                 "data":[33],
                                 "name": "配置"
                             },{
                                 "data":[34],
                                 "name": "免费"
                             },{
                                 "data":[35],
                                 "name": "内饰"
                             },{
                                 "data":[36],
                                 "name": "点"
                             },{
                                 "data":[37],
                                 "name": "坐"
                             },{
                                 "data":[38],
                                 "name": "车子"
                             },{
                                 "data":[39],
                                 "name": "外形"
                             },{
                                 "data":[40],
                                 "name": "M5"
                             },{
                                 "data":[41],
                                 "name": "GTR"
                             },{
                                 "data":[42],
                                 "name": "RS6"
                             },{
                                 "data":[43],
                                 "name": "AMG"
                             },{
                                 "data":[44],
                                 "name": "AE86"
                             },{
                                 "data":[45],
                                 "name": "Golf-R"
                             },{
                                 "data":[46],
                                 "name": "RCZ"
                             }
                             ],
                         "big_title": "词云",
                         "small_title": "副标题",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"人",
                         "width":723,
                         "height":605
                }';
        break;
//        对比柱状图
    case 10:
        $post = '{
                        "feature":1,
                         "tooltip":1,
                         "selectedMode":1,
                          "legend":1,
                         "x":
                             {
                                 "data":["2017/10/1","2017/10/2","2017/10/3","2017/10/4","2017/10/5","2017/10/6","2017/10/7"]
                             },
                         "y":
                             [
                                {
                                     "data":[10,20,30,40,50,60,55],
                                     "name": "图例1"
                                },{
                                     "data":[20,30,40,50,30,40,50],
                                     "name": "图例2"
                                },{
                                     "data":[30,40,50,60,30,40,50],
                                     "name": "图例3"
                                },{
                                     "data":[40,50,60,88,50,60,55],
                                     "name": "图例4"
                                }
                             ],
                         "big_title": "对比柱状图",
                         "small_title": "副标题副标题副标题副标题副标题副标题副",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"人",
                         "width":723,
                         "height":548
                }';
        break;
//        顶部显示数值柱状图
    case 11:
        $post = '{
                        "feature":1,
                        "selectedMode":1,
                         "tooltip":1,
                         "x":{
                                 "data":["类目名称","类目名称","类目名称","类目名称","类目名称","类目名称","类目名称"]
                            },
                         "y":[{
                                 "data":[10000,13000,10000,13800,6000,2500,5000],
                                 "name": ""
                             }],
                         "big_title": "顶部显示数值柱状图",
                         "small_title": "副标题",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"k",
                         "width":723,
                         "height":501
                }';
        break;
//        折柱图
    case 12:
        $post = '{
                        "feature":1,
                        "legend":1,
                        "selectedMode":1,
                         "tooltip":1,
                         "x":
                             {
                                 "data":["2017/9/1","2017/9/2","2017/9/3","2017/9/4","2017/9/5","2017/9/6","2017/9/7"]
                             },
                          "y":
                             [
                                {
                                  "type":"line",
                                      "data":[30,50,30,60,40,20,30],
                                     "name": "图例1"
                                },{
                                  	"type":"bar",
                                     "data":[20,40,20,45,30,15,25],
                                     "name": "图例2"
                                }
                             ],
                         "big_title": "折柱图",
                         "small_title": "副标题副标题副标题副标题副标题副标题副",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"人",
                         "width":723,
                         "height":548
                }';
        break;
//        百分比堆叠柱状图
    case 21:
        $post = '{
                    "feature": 1,
                    "tooltip": 1,
                    "legend":2,
                    "selectedMode":1,
                    "animation":1,
                    "x": {
                        "data": [
                            "类目名称1",
                            "类目名称2",
                            "类目名称3",
                            "类目名称4",
                            "类目名称5",
                            "类目名称6"
                        ]
                    },
                    "y": [
                        {
                            "data": [
                                34,
                                24,
                                33,
                                46,
                                5,
                                33
                            ],
                            "name": "图例1"
                        },
                        {
                            "data": [
                                33,
                                46,
                                17,
                                24,
                                60,
                                57
                            ],
                            "name": "图例2"
                        },
                        {
                            "data": [
                                33,
                                30,
                                50,
                                30,
                                35,
                                10
                            ],
                            "name": "图例3"
                        }
                    ],
                    "big_title": "百分比堆叠柱状图",
                    "small_title": "%",
                    "remarks1": "基数：所有被访者 n=400",
                    "remarks2": "数据来源：B12",
                    "unit": "人",
                    "width": 723,
                    "height": 464
                }';
        break;
    //散点图
    case 22:
        $post = '{
                    "feature": 1,
                    "legend": 1,
                    "animation": 1,
                    "selectedMode": 1,
                    "tooltip": 1,
                    "y": [{
                            "data": [
                                [
                                    28604,
                                    77,
                                    17096869,
                                    "Australia",
                                    1990
                                ],
                                [
                                    31163,
                                    77.4,
                                    27662440,
                                    "Canada",
                                    1990
                                ],
                                [
                                    1516,
                                    68,
                                    1154605773,
                                    "China",
                                    1990
                                ],
                                [
                                    13670,
                                    74.7,
                                    10582082,
                                    "Cuba",
                                    1990
                                ],
                                [
                                    28599,
                                    75,
                                    4986705,
                                    "Finland",
                                    1990
                                ],
                                [
                                    29476,
                                    77.1,
                                    56943299,
                                    "France",
                                    1990
                                ],
                                [
                                    31476,
                                    75.4,
                                    78958237,
                                    "Germany",
                                    1990
                                ],
                                [
                                    28666,
                                    78.1,
                                    254830,
                                    "Iceland",
                                    1990
                                ],
                                [
                                    1777,
                                    57.7,
                                    870601776,
                                    "India",
                                    1990
                                ],
                                [
                                    29550,
                                    79.1,
                                    122249285,
                                    "Japan",
                                    1990
                                ],
                                [
                                    2076,
                                    67.9,
                                    20194354,
                                    "NorthKorea",
                                    1990
                                ],
                                [
                                    12087,
                                    72,
                                    42972254,
                                    "SouthKorea",
                                    1990
                                ],
                                [
                                    24021,
                                    75.4,
                                    3397534,
                                    "NewZealand",
                                    1990
                                ],
                                [
                                    43296,
                                    76.8,
                                    4240375,
                                    "Norway",
                                    1990
                                ],
                                [
                                    10088,
                                    70.8,
                                    38195258,
                                    "Poland",
                                    1990
                                ],
                                [
                                    19349,
                                    69.6,
                                    147568552,
                                    "Russia",
                                    1990
                                ],
                                [
                                    10670,
                                    67.3,
                                    53994605,
                                    "Turkey",
                                    1990
                                ],
                                [
                                    26424,
                                    75.7,
                                    57110117,
                                    "UnitedKingdom",
                                    1990
                                ],
                                [
                                    37062,
                                    75.4,
                                    252847810,
                                    "UnitedStates",
                                    1990
                                ]
                            ],
                            "name": "1990"
                        },
                        {
                            "data": [
                                [
                                    44056,
                                    81.8,
                                    23968973,
                                    "Australia",
                                    2015
                                ],
                                [
                                    43294,
                                    81.7,
                                    35939927,
                                    "Canada",
                                    2015
                                ],
                                [
                                    13334,
                                    76.9,
                                    1376048943,
                                    "China",
                                    2015
                                ],
                                [
                                    21291,
                                    78.5,
                                    11389562,
                                    "Cuba",
                                    2015
                                ],
                                [
                                    38923,
                                    80.8,
                                    5503457,
                                    "Finland",
                                    2015
                                ],
                                [
                                    37599,
                                    81.9,
                                    64395345,
                                    "France",
                                    2015
                                ],
                                [
                                    44053,
                                    81.1,
                                    80688545,
                                    "Germany",
                                    2015
                                ],
                                [
                                    42182,
                                    82.8,
                                    329425,
                                    "Iceland",
                                    2015
                                ],
                                [
                                    5903,
                                    66.8,
                                    1311050527,
                                    "India",
                                    2015
                                ],
                                [
                                    36162,
                                    83.5,
                                    126573481,
                                    "Japan",
                                    2015
                                ],
                                [
                                    1390,
                                    71.4,
                                    25155317,
                                    "NorthKorea",
                                    2015
                                ],
                                [
                                    34644,
                                    80.7,
                                    50293439,
                                    "SouthKorea",
                                    2015
                                ],
                                [
                                    34186,
                                    80.6,
                                    4528526,
                                    "NewZealand",
                                    2015
                                ],
                                [
                                    64304,
                                    81.6,
                                    5210967,
                                    "Norway",
                                    2015
                                ],
                                [
                                    24787,
                                    77.3,
                                    38611794,
                                    "Poland",
                                    2015
                                ],
                                [
                                    23038,
                                    73.13,
                                    143456918,
                                    "Russia",
                                    2015
                                ],
                                [
                                    19360,
                                    76.5,
                                    78665830,
                                    "Turkey",
                                    2015
                                ],
                                [
                                    38225,
                                    81.4,
                                    64715810,
                                    "UnitedKingdom",
                                    2015
                                ],
                                [
                                    53354,
                                    79.1,
                                    321773631,
                                    "UnitedStates",
                                    2015
                                ]
                            ],
                            "name": "2015"
                        }
                    ],
                    "big_title": "散点图",
                    "small_title": "副标题副标题副标题副标题副标题副标题副",
                    "remarks1": "基数：所有被访者 n=400",
                    "remarks2": "数据来源：B12",
                    "unit": "k",
                    "width": 723,
                    "height": 548
                }';
                break;
}
echo $post;
die;
?>