<?php
$type = !empty($_GET['type']) && is_numeric($_GET['type']) ? $_GET['type'] : 1;
$post = '';
switch ($type) {
        case 1:
//            折线图
        $post = '{
                        "downloadimg":1,
                        "legend":1,
                        "animation":1,
                         "x":
                             {
                                 "data":["2017/9/1","2017/9/2","2017/9/3","2017/9/4","2017/9/5","2017/9/6","2017/9/7"]
                             },
                         "y":
                             [
                                {
                                     "data":
                                         [1,3,2],
                                     "name": "nick"
                                },{
                                     "data":
                                         [10,20,30,1,3,2],
                                     "name": "david"
                                },{
                                     "data":
                                         [30,43,51,30,1,3,2],
                                     "name": "tom"
                                },{
                                     "data":
                                         [60,20,72,51,30,1,3,2],
                                     "name": "gavin"
                                },{
                                     "data":
                                         [85,39,55,20,72,51,30],
                                     "name": "mark"
                                }
                             ],
                         "big_title": "折线图",
                         "small_title": "副标题副标题副标题副标题副标题副标题副",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"k",
                         "tooltip":1,
                         "width":723,
                         "height":548
                }';
        break;
//        饼图
    case 2:
        $post = ' {
                         "downloadimg":1,
                         "legend":1,
                         "animation":1,
                         "y":
                             [{
                                 "data":
                                     [50],
                                 "name": "图例1"
                             },{
                                 "data":
                                     [25],
                                 "name": "图例2"
                             },{
                                 "data":[25],
                                 "name": "图例3"
                             }],
                         "big_title": "圆环图",
                         "small_title": "副标题",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源: B12",
                         "unit":"人",
                         "tooltip":1,
                         "width":723,
                         "height":540
                     }';
        break;
//        地图
    case 3:
        $post = '{
                    "downloadimg":1,  
                    "legend":1,   
                    "animation":1,                   
                         "y":
                             [{
                                 "data":
                                     [2],
                                 "name": "上海"
                             },{
                                 "data":
                                     [30],
                                 "name": "北京"
                             },{
                                 "data":
                                     [2],
                                 "name": "天津"
                             },{
                                 "data":
                                     [2],
                                 "name": "江苏"
                             },{
                                 "data":
                                     [2],
                                 "name": "浙江"
                             },{
                                 "data":
                                     [2],
                                 "name": "福建"
                             },{
                                 "data":
                                     [2],
                                 "name": "台湾"
                             },{
                                 "data":
                                     [2],
                                 "name": "广东"
                             },{
                                 "data":
                                     [2],
                                 "name": "江西"
                             },{
                                 "data":
                                     [2],
                                 "name": "广西"
                             },{
                                 "data":
                                     [2],
                                 "name": "湖南"
                             },{
                                 "data":
                                     [2],
                                 "name": "贵州"
                             },{
                                 "data":
                                     [2],
                                 "name": "云南"
                             },{
                                 "data":
                                     [2],
                                 "name": "四川"
                             },{
                                 "data":
                                     [2],
                                 "name": "重庆"
                             },{
                                 "data":
                                     [2],
                                 "name": "湖北"
                             },{
                                 "data":
                                     [2],
                                 "name": "安徽"
                             },{
                                 "data":
                                     [2],
                                 "name": "河南"
                             },{
                                 "data":
                                     [2],
                                 "name": "河北"
                             },{
                                 "data":
                                     [27],
                                 "name": "山西"
                             },{
                                 "data":
                                     [2],
                                 "name": "陕西"
                             },{
                                 "data":
                                     [2],
                                 "name": "内蒙古"
                             },{
                                 "data":
                                     [2],
                                 "name": "甘肃"
                             },{
                                 "data":
                                     [2],
                                 "name": "宁夏"
                             },{
                                 "data":
                                     [2],
                                 "name": "青海"
                             },{
                                 "data":
                                     [2],
                                 "name": "新疆"
                             },{
                                 "data":
                                     [2],
                                 "name": "西藏"
                             },{
                                 "data":
                                     [2],
                                 "name": "海南"
                             },{
                                 "data":
                                     [2],
                                 "name": "澳门"
                             },{
                                 "data":
                                     [2],
                                 "name": "香港"
                             },{
                                 "data":
                                     [1],
                                 "name": "黑龙江"
                             },{
                                 "data":
                                     [1],
                                 "name": "吉林"
                             },{
                                 "data":
                                     [1],
                                 "name": "辽宁"
                             },{
                                 "data":
                                     [2],
                                 "name": "山东"
                             },{
                                 "data":
                                     [4],
                                 "name": "南海诸岛"
                             }
                             ],
                         "big_title": "热力地图",
                         "small_title": "副标题",
                         "remarks1":"基数: 所有被访者 n=400",
                         "remarks2": "数据来源：B12",
                         "unit":"人",
                         "tooltip":1,
                         "width":723,
                         "height":617
                }';
        break;
//        词云
    case 4:
        $post = '{
                    "downloadimg":1,
                    "legend":1,
                    "animation":1,
                         "y":
                             [{
                                 "data":
                                     [1],
                                 "name": "不错"
                             },{
                                 "data":
                                     [2],
                                 "name": "活动"
                             },{
                                 "data":
                                     [3],
                                 "name": "安全带"
                             },{
                                 "data":
                                     [4],
                                 "name": "服务态度"
                             },{
                                 "data":
                                     [5],
                                 "name": "驾驶"
                             },{
                                 "data":
                                     [6],
                                 "name": "外观"
                             },{
                                 "data":
                                     [7],
                                 "name": "汽车"
                             },{
                                 "data":
                                     [8],
                                 "name": "驾驶"
                             },{
                                 "data":
                                     [9],
                                 "name": "外观"
                             },{
                                 "data":
                                     [10],
                                 "name": "车"
                             },{
                                 "data":
                                     [11],
                                 "name": "降低"
                             },{
                                 "data":
                                     [12],
                                 "name": "降价"
                             },{
                                 "data":
                                     [13],
                                 "name": "省油"
                             },{
                                 "data":
                                     [14],
                                 "name": "提供一点"
                             },{
                                 "data":
                                     [15],
                                 "name": "发动机"
                             },{
                                 "data":
                                     [16],
                                 "name": "油耗"
                             },{
                                 "data":
                                     [17],
                                 "name": "售后"
                             },{
                                 "data":
                                     [18],
                                 "name": "动力"
                             },{
                                 "data":
                                     [19],
                                 "name": "性价比"
                             },{
                                 "data":
                                     [20],
                                 "name": "性能"
                             },{
                                 "data":
                                     [21],
                                 "name": "质量"
                             },{
                                 "data":
                                     [22],
                                 "name": "品牌"
                             },{
                                 "data":
                                     [23],
                                 "name": "促销"
                             },{
                                 "data":
                                     [24],
                                 "name": "更好保养"
                             },{
                                 "data":
                                     [25],
                                 "name": "增加力度"
                             },{
                                 "data":
                                     [26],
                                 "name": "推荐"
                             },{
                                 "data":
                                     [27],
                                 "name": "舒适"
                             },{
                                 "data":
                                     [28],
                                 "name": "配置"
                             },{
                                 "data":
                                     [29],
                                 "name": "舒适度"
                             },{
                                 "data":
                                     [30],
                                 "name": "价格"
                             },{
                                 "data":
                                     [31],
                                 "name": "体验"
                             },{
                                 "data":
                                     [32],
                                 "name": "品质"
                             },{
                                 "data":
                                     [33],
                                 "name": "配置"
                             },{
                                 "data":
                                     [34],
                                 "name": "免费"
                             },{
                                 "data":
                                     [35],
                                 "name": "内饰"
                             },{
                                 "data":
                                     [36],
                                 "name": "点"
                             },{
                                 "data":
                                     [37],
                                 "name": "坐"
                             },{
                                 "data":
                                     [38],
                                 "name": "车子"
                             },{
                                 "data":
                                     [39],
                                 "name": "外形"
                             }
                             ],
                         "big_title": "词云",
                         "small_title": "副标题",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"人",
                         "tooltip":1,
                         "width":723,
                         "height":605
                }';
        break;
//        仪表盘图
    case 5:
        $post = '{
                    "downloadimg": 1,
                    "legend": 1,
                    "x":
                        {
                            "data": ["推荐净值（NPS）"]
                        },
                    "y":
                        [{
                            "data":
                                [36],
                            "name": "品牌名称"
                        }],
                    "animation": 1,
                    "big_title": "仪表盘NPS",
                    "small_title": "副标题",
                    "remarks1": "基数：所有被访者 n=400",
                    "remarks2": "数据来源：B12",
                    "unit": "%",
                    "tooltip": 1,
                    "width": 723,
                    "height": 546
                }';
        break;
//        横向柱状图
    case 6:
        $post = '{
                    "downloadimg":1,
                    "legend":1,
                    "animation":1,
                         "x":
                             {
                                 "data":["图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14","图表字号14"]
                            },
                         "y":
                             [{
                                 "data":
                                     [90,50,3,70,80,50,40,30,40,32,60],
                                 "name": "图表字号14,图表字号14,图表字号14,图表字号14,图表字号14,图表字号14,图表字号14,图表字号14,图表字号14,图表字号14,图表字号14"
                             }],
                         "big_title": "条形图",
                         "small_title": "副标题副标题副标题副标题副标题副标题副",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"人",
                         "tooltip":1,
                         "width":723,
                         "height":624
                }';
        break;
//        百分比堆叠条形图
    case 7:
        $post = '{
                    "downloadimg":1,
                    "legend":1,
                    "animation":1,
                         "x":
                             {
                                 "data":["1","2","3"]
                             },
                         "y":
                             [{
                                 "data":
                                     [15,35,20],
                                 "name": "nick"
                             },{
                                 "data":
                                     [50,45,50],
                                 "name": "david"
                             },{
                                 "data":
                                     [30,15,25],
                                 "name": "tom"
                             },{
                                 "data":
                                     [5,5,5],
                                 "name": "lily"
                             }],
                         "big_title": "百分比堆叠条形图",
                         "small_title": "%",
                         "remarks1":"基数：所有被访者 n=400",
                         "remarks2":"数据来源：B12",
                         "unit":"人",
                         "tooltip":1,
                         "width":723,
                         "height":419
                }';
        break;
//        条形象形图
    case 8:
        $post = '{
                     "downloadimg":1,
                     "legend":1,
                     "animation":1,
                        
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
                         "unit":"k",
                         "tooltip":1,
                         "width":723,
                         "height":360
                }';
        break;
    case 9:
        $post = '{
     "downloadimg":1,
     "legend":1,
     "animation":1,
     "x":
         {
             "data":["第一季度","第二季度","第三季度"]
         },
     "y":
         [{
             "data":
                 [1,3,2],
             "name": "nick"
         },{
             "data":
                 [10,20,30],
             "name": "david"
         },{
             "data":
                 [30,43,51],
             "name": "tom"
         }],
     "big_title": "日收入",
     "small_title": "副标题",
     "remarks1":"备注1：",
     "remarks2":"数据来源: Q2：",
     "unit":"k",
     "tooltip":1
 }';
        break;
    case 10:
        $post = '{
     "downloadimg":1,
     "legend":1,
     "animation":1,
     "x":
         {
             "data":["第一季度","第二季度","第三季度"]
         },
     "y":
         [{
             "data":
                 [1,3,2],
             "name": "nick"
         },{
             "data":
                 [10,20,30],
             "name": "david"
         },{
             "data":
                 [30,43,51],
             "name": "tom"
         }],
     "big_title": "日收入",
     "small_title": "副标题",
     "remarks1":"备注1：",
     "remarks2":"数据来源: Q2：",
     "unit":"k",
     "tooltip":1
 }';
        break;
    case 21:
        $post = '{
    "downloadimg": 1,
    "legend":1,
    "x":
        {
            "data":
                ["20岁以下", "21-25岁", "26-30岁", "31-45岁", "46-50岁", "50岁以上"]
        },
    "y":
        [{
            "data":
                [21],
            "name": "20岁以下"
        },
            {
                "data":
                    [8],
                "name": "21-25岁"
            },
            {
                "data":
                    [24],
                "name": "26-30岁"
            },
            {
                "data":
                    [20],
                "name": "31-45岁"
            },
            {
                "data":
                    [4],
                "name": "46-50岁"
            },
            {
                "data":
                    [12],
                "name": "50岁以上"
            }],
    "big_title": "年龄",
    "small_title": "%",
    "source": "基数: 所有被访者 n=25",
    "source2": "数据来源：Q2"
}';
        break;
    case 31:
        $post = '{
     "downloadimg":1,
     "legend":1,
     "y":
         [{
             "data":
                 [-56],
             "name": "全部"
         }],
     "big_title": "推荐净值(NPS)",
     "small_title": "%",
     "source": "基数:n=25",
     "source2": "数据来源：Q11"
 }';
        break;

}
echo $post;
die;
?>