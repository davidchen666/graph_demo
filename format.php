<?php
$type = !empty($_GET['type']) && is_numeric($_GET['type']) ? $_GET['type'] : 1;
$post = '';
switch ($type) {
        case 1:
//            折线图json
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
                         "remarks2":"备注2：",
                         "unit":"k",
                         "tooltip":1,
                         "width":723,
                         "height":548
                }';
        break;
//        饼图json
    case 2:
        $post = ' {
                         "downloadimg":1,
                         "legend":1,
                         "animation":1,
                         "y":
                             [{
                                 "data":
                                     [10],
                                 "name": "nick"
                             },{
                                 "data":
                                     [20],
                                 "name": "david"
                             },{
                                 "data":[70],
                                 "name": "mark"
                             }],
                         "big_title": "性别",
                         "small_title": "副标题",
                         "remarks1":"基数: 所有被访者 n=3 \n\n数据来源: Q2",
                         "remarks2":"备注2：",
                         "unit":"人",
                         "tooltip":1
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
                                     [150],
                                 "name": "上海"
                             },{
                                 "data":
                                     [120],
                                 "name": "北京"
                             },{
                                 "data":
                                     [130],
                                 "name": "天津"
                             }],
                         "big_title": "热力地图",
                         "small_title": "%",
                         "remarks1":"",
                         "remarks2":"基数: 所有被访者 n=4 \n\n数据来源：Q3",
                         "unit":"人",
                         "tooltip":1
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
                                 "name": "nick喜欢红烧肉"
                             },{
                                 "data":
                                     [2],
                                 "name": "davy喜欢炸酱面"
                             },{
                                 "data":
                                     [3],
                                 "name": "gavin喜欢小笼包"
                             },{
                                 "data":
                                     [4],
                                 "name": "红灯笼"
                             },{
                                 "data":
                                     [5],
                                 "name": "圣诞节"
                             },{
                                 "data":
                                     [6],
                                 "name": "圣诞礼物"
                             },{
                                 "data":
                                     [7],
                                 "name": "现货"
                             },{
                                 "data":
                                     [8],
                                 "name": "男女"
                             },{
                                 "data":
                                     [9],
                                 "name": "看看书"
                             },{
                                 "data":
                                     [10],
                                 "name": "解放军"
                             },{
                                 "data":
                                     [11],
                                 "name": "oe"
                             },{
                                 "data":
                                     [12],
                                 "name": "君君"
                             },{
                                 "data":
                                     [13],
                                 "name": "tom"
                             },{
                                 "data":
                                     [14],
                                 "name": "mark"
                             }
                             ],
                         "big_title": "wordCloud",
                         "small_title": "副标题",
                         "remarks1":"基数：所以被访者 n=3",
                         "remarks2":"数据来源：Q5",
                         "unit":"人",
                         "tooltip":1
                }';
        break;
//        仪表盘图
    case 5:
        $post = '{
                    "downloadimg":1,
                    "legend":1,
                    "animation":1,
                         "x":
                             {
                                 "data":["全部"]
                             },
                         "big_title": "推荐净值(NPS)",
                         "small_title": "%",
                         "remarks1":"基数：n=1",
                         "remarks2":"数据来源：Q5",
                         "unit":"人",
                         "tooltip":1
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
                                 "data":["1","2","3"]
                             },
                         "y":
                             [{
                                 "data":
                                     [10,10,10],
                                 "name": "其他"
                             },{
                                 "data":
                                     [50,20,30],
                                 "name": "恋人/配偶"
                             },{
                                 "data":
                                     [80,10,50],
                                 "name": "家人"
                             },{
                                 "data":
                                     [10,70,30],
                                 "name": "小三"
                             }],
                         "big_title": "横向柱状图",
                         "small_title": "%",
                         "remarks1":"基数：所有被访问者 n=3",
                         "remarks2":"数据来源：Q3",
                         "unit":"人",
                         "tooltip":1
                }';
        break;
//        横向柱状堆叠图
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
                         "big_title": "横向柱状堆叠图",
                         "small_title": "%",
                         "remarks1":"基数：所有被访者 n=3",
                         "remarks2":"数据来源：Q4",
                         "unit":"人",
                         "tooltip":1
                }';
        break;
//        条形象形图
    case 8:
        $post = '{
                     "downloadimg":1,
                     "legend":1,
                     "animation":1,
                         "x":
                             {
                                 "data":["贬损者","中立者","推荐者"]
                             },
                         "y":
                             [{
                                 "data":[50,50,100],
                                 "name": ""
                             }],
                         "big_title": "人群分布：推荐者/中立者/贬损者",
                         "small_title": "%",
                         "remarks1":"基数： n=1",
                         "remarks2":"数据来源：Q5",
                         "unit":"k",
                         "tooltip":1
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
     "remarks2":"备注2：",
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
     "remarks2":"备注2：",
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