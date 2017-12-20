<?php
$type = !empty($_GET['type']) && is_numeric($_GET['type']) ? $_GET['type'] : 1;
$post = '';
switch ($type) {
        case 1:
        $post = '{
                        "downloadimg":1,
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
    case 2:
        $post = '{
                         "downloadimg":1,
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
                         "big_title": "性别",
                         "small_title": "副标题",
                         "remarks1":"基数: 所有被访者 n=3 \n\n数据来源: Q2",
                         "remarks2":"备注2：",
                         "unit":"人",
                         "tooltip":1
                }';
        break;
    case 3:
        $post = '{
                    "downloadimg":1,
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
                         "big_title": "热力地图",
                         "small_title": "%",
                         "remarks1":"",
                         "remarks2":"基数: 所有被访者 n=4 \n\n数据来源：Q3",
                         "unit":"人",
                         "tooltip":1
                }';
        break;
    case 4:
        $post = '{
                    "downloadimg":1,
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
                         "big_title": "wordCloud",
                         "small_title": "副标题",
                         "remarks1":"基数：所以被访者 n=3",
                         "remarks2":"数据来源：Q5",
                         "unit":"人",
                         "tooltip":1
                }';
        break;
    case 5:
        $post = '{
                    "downloadimg":1,
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
                         "big_title": "推荐净值(NPS)",
                         "small_title": "%",
                         "remarks1":"基数：n=1",
                         "remarks2":"数据来源：Q5",
                         "unit":"k",
                         "tooltip":1
                }';
        break;
    case 6:
        $post = '{
                    "downloadimg":1,
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
                         "big_title": "横向柱状图",
                         "small_title": "%",
                         "remarks1":"基数：所有被访问者 n=3",
                         "remarks2":"数据来源：Q3",
                         "unit":"k",
                         "tooltip":1
                }';
        break;
    case 7:
        $post = '{
                    "downloadimg":1,
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
                         "big_title": "横向柱状堆叠图",
                         "small_title": "%",
                         "remarks1":"基数：所有被访者 n=3",
                         "remarks2":"数据来源：Q4",
                         "unit":"k",
                         "tooltip":1
                }';
        break;
    case 8:
        $post = '{
                     "downloadimg":1,
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