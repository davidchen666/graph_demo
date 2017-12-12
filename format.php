<?php
$type = !empty($_GET['type']) && is_numeric($_GET['type']) ? $_GET['type'] : 1;
$post = '';
switch ($type) {
    case 11:
        $post = '{
     "downloadimg":1,
     "x":
         {
             "data":
                 [],
             "name": "months"
         },
     "y":
         [{
             "data":
                 [13],
             "name": "男"
         },{
             "data":
                 [12],
             "name": "女"
         }],
     "big_title": "性别",
     "small_title": "%",
     "source": "基数: 所有被访者 n=25",
     "source2": "数据来源：Q1"
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
    case 41:
        $post = '{
    "downloadimg": 1,
    "y":
        [
            {
                "data":
                    [4],
                "name": "完全不可能"
            },
            {
                "data":
                    [16],
                "name": "2"
            },
            {
                "data":
                    [24],
                "name": "3"
            },
            {
                "data":
                    [36],
                "name": "4"
            },
            {
                "data":
                    [20],
                "name": "极有可能"
            }
        ],
    "big_title": "您对它功能更新的速度是否满意呢?(星型)",
    "small_title": "%",
    "source": "基数: 所有被访者 n=25",
    "source2": "数据来源：Q18"
}';
        break;
}
echo $post;
die;
?>