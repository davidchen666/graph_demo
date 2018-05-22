<?php
$type = !empty($_GET['type']) && is_numeric($_GET['type']) ? $_GET['type'] : 1;
$post = '';
switch ($type) {
//        折线图
    case 1:
        $post = '{
                        "feature":1,
                        "themeColor":1,
                        "legend":1,
                        "tooltip":1,
                        "graphic":1,
                        "dataZoom":1,
                        "animation":1,
                        "showDetail":1,
                         "x":
                             {"data":["2017/9/1","2017/9/2","2017/9/3","2017/9/4","2017/9/5","2017/9/6","2017/9/7"]},
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
                         "bigTitle": "折线图",
                         "subTitle": "副标题副标题副标题副标题副标题副标题副",
                         "credit":"基数：所有被访者 n=400",
                         "subCredit":"数据来源：B12",
                         "unit":"k",
                         "width":723,
                         "height":548
                }';
        break;
//        圆环图
    case 2:
        $post = '{
	"feature": 1,
	"themeColor":1,
	"legend": 2,
	"tooltip": 1,
	"graphic": 1,
	"animation": 1,
	"dataZoom": 6,
	"grayBar": [{
			"index": 1,
			"color": "#BBBBBB"
		},
		{
			"index": 2,
			"color": "#AAAAAA"
		}
	],
	"y": [{
			"data": [
				95
			],
			"percent": [
				10
			],
			"name": "图例1"
		},
		{
			"data": [
				25
			],
			"percent": [
				10
			],
			"name": "图例2"
		},
		{
			"data": [
				25
			],
			"percent": [
				10
			],
			"name": "图例3"
		}
	],
	"bigTitle": "圆环图",
	"subTitle": "副标题",
	"credit": "基数：所有被访者 n=400",
	"subCredit": "数据来源: B12",
	"unit1": "%",
	"unit": "人",
	"width": 723,
	"height": 540
}';
        break;
//        地图
    case 3:
        $post = '{
                    "feature": 1,
                    "themeColor":1,
                    "legend": 5,
                    "tooltip": 1,
                    "graphic": 1,
                    "dataZoom": 6,
                    "legendHoverLink": 1,
                    "y": [{
                            "data1": [
                                        {
                                            "value": [2],
                                            "name": "上海"
                                        },
                                        {
                                            "value": [30],
                                            "name": "北京"
                                        },
                                        {
                                            "value": [2],
                                            "name": "天津"
                                        },
                                        {
                                            "value": [2],
                                            "name": "重庆"
                                        },
                                        {
                                            "value": [2],
                                            "name": "澳门"
                                        },
                                        {
                                            "value": [2],
                                            "name": "香港"
                                        },
                                        {
                                            "value": [2],
                                            "name": "江苏"
                                        },
                                        {
                                            "value": [2],
                                            "name": "浙江"
                                        },
                                        {
                                            "value": [2],
                                            "name": "福建"
                                        },
                                        {
                                            "value": [2],
                                            "name": "台湾"
                                        },
                                        {
                                            "value": [2],
                                            "name": "广东"
                                        },
                                        {
                                            "value": [2],
                                            "name": "江西"
                                        },
                                        {
                                            "value": [2],
                                            "name": "广西"
                                        },
                                        {
                                            "value": [2],
                                            "name": "湖南"
                                        },
                                        {
                                            "value": [2],
                                            "name": "贵州"
                                        },
                                        {
                                            "value": [2],
                                            "name": "云南"
                                        },
                                        {
                                            "value": [2],
                                            "name": "四川"
                                        },
                                        {
                                            "value": [2],
                                            "name": "湖北"
                                        },
                                        {
                                            "value": [2],
                                            "name": "安徽"
                                        },
                                        {
                                            "value": [2],
                                            "name": "河南"
                                        },
                                        {
                                            "value": [2],
                                            "name": "河北"
                                        },
                                        {
                                            "value": [27],
                                            "name": "山西"
                                        },
                                        {
                                            "value": [2],
                                            "name": "陕西"
                                        },{
                                            "value": [1],
                                            "name": "黑龙江"
                                        },
                                        {
                                            "value": [2],
                                            "name": "甘肃"
                                        },
                                        {
                                            "value": [2],
                                            "name": "宁夏"
                                        },
                                        {
                                            "value": [1],
                                            "name": "青海"
                                        },
                                        {
                                            "value": [2],
                                            "name": "新疆"
                                        },
                                        {
                                            "value": [2],
                                            "name": "西藏"
                                        },
                                        {
                                            "value": [2],
                                            "name": "海南"
                                        },
                                        {
                                            "value": [2],
                                            "name": "内蒙古"
                                        },
                                        {
                                            "value": [1],
                                            "name": "吉林"
                                        },
                                        {
                                            "value": [1],
                                            "name": "辽宁"
                                        },
                                        {
                                            "value": [2],
                                            "name": "山东"
                                        },
                                        {
                                            "value": [4],
                                            "name": "南海诸岛"
                                        }
                                    ],
                            "data2" : [
                                        {
                                            "value": [1],
                                            "name": "南京市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "徐州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "连云港市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宿迁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "淮安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "盐城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "扬州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "泰州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "南通市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "镇江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "常州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "无锡市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "苏州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "江阴市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宜兴市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "邳州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "新沂市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "金坛市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "溧阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "常熟市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "张家港市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "太仓市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "昆山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "如皋市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "海门市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "启东市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "大丰市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "东台市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "高邮市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "仪征市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "扬中市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "句容市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "丹阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "兴化市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "泰兴市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "靖江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "杭州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宁波市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "湖州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "嘉兴市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "舟山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "绍兴市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "衢州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "金华市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "台州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "温州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "丽水市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "临安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "富阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "建德市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "慈溪市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "余姚市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "奉化市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "平湖市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "海宁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "桐乡市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "诸暨市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "嵊州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "江山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "兰溪市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "永康市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "义乌市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "东阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "临海市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "温岭市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "瑞安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "乐清市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "龙泉市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "厦门市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "福州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "南平市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "三明市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "莆田市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "泉州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "漳州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "龙岩市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宁德市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "福清市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "长乐市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "邵武市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "武夷山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "建瓯市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "建阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "永安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "石狮市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "晋江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "南安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "龙海市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "漳平市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "福安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "福鼎市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "广州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "深圳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "清远市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "韶关市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "河源市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "梅州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "潮州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "汕头市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "揭阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "汕尾市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "惠州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "东莞市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "珠海市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "中山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "江门市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "佛山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "肇庆市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "云浮市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阳江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "茂名市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "湛江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "英德市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "连州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "乐昌市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "南雄市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "兴宁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "普宁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "陆丰市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "恩平市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "台山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "开平市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "鹤山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "高要市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "四会市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "罗定市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阳春市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "化州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "信宜市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "高州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "吴川市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "廉江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "雷州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "南昌市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "九江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "赣州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "景德镇市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "鹰潭市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "新余市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "萍乡市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "上饶市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "抚州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宜春市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "吉安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "瑞昌市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "乐平市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "瑞金市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "德兴市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "丰城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "樟树市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "高安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "井冈山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "贵溪市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "共青城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "南宁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "桂林市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "柳州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "梧州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "贵港市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "玉林市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "钦州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "北海市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "防城港市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "崇左市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "百色市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "河池市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "来宾市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "贺州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "岑溪市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "桂平市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "北流市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "东兴市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "凭祥市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宜州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "合山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "长沙市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "衡阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "张家界市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "常德市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "益阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "岳阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "株洲市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "湘潭市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "郴州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "永州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "邵阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "怀化市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "娄底市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "湘西土家族苗族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "常宁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "浏阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "津市市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "沅江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "汨罗市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "临湘市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "醴陵市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "湘乡市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "韶山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "资兴市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "武冈市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "洪江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "冷水江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "涟源市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "吉首市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "贵阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "六盘水市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "遵义市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "安顺市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "毕节地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "铜仁地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "黔西南布依族苗族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "黔南布依族苗族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "黔东南苗族侗族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "凯里市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "都匀市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "兴义市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "福泉市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "昆明市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "曲靖市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "玉溪市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "丽江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "昭通市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "怒江傈僳族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "迪庆藏族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "保山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "文山壮族苗族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "德宏傣族景颇族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "临沧市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "大理白族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "楚雄彝族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "红河哈尼族彝族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "西双版纳傣族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "普洱市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "成都市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "广元市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "绵阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "德阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "南充市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "广安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "遂宁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "内江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "乐山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "自贡市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "泸州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宜宾市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "攀枝花市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "巴中市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "达州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "资阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "眉山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "雅安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阿坝藏族羌族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "凉山彝族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "甘孜藏族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "彭州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "江油市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "什邡市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "广汉市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "绵竹市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阆中市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "华蓥市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "峨眉山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "万源市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "简阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "西昌市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "康定市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "武汉市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "十堰市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "襄樊市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "荆门市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "孝感市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "黄冈市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "鄂州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "黄石市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "咸宁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "荆州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宜昌市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "随州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "仙桃市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "天门市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "潜江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "丹江口市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "老河口市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "枣阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宜城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "钟祥市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "汉川市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "应城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "安陆市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "广水市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "麻城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "武穴市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "大冶市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "赤壁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "石首市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "洪湖市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "松滋市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宜都市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "枝江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "神农架林区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "恩施土家族苗族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "利川市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "合肥市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宿州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "淮北市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阜阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "蚌埠市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "淮南市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "滁州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "马鞍山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "芜湖市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "铜陵市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "安庆市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "黄山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "六安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "池州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宣城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "亳州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "界首市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "明光市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "天长市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "桐城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宁国市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "巢湖市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "郑州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "开封市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "洛阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "平顶山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "安阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "鹤壁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "新乡市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "焦作市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "濮阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "许昌市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "漯河市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "三门峡市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "南阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "商丘市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "周口市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "驻马店市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "信阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "济源市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "巩义市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "邓州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "永城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "汝州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "荥阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "新郑市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "登封市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "新密市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "偃师市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "孟州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "沁阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "卫辉市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "辉县市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "林州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "禹州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "长葛市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "舞钢市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "义马市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "灵宝市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "项城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "石家庄市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "邯郸市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "唐山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "保定市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "秦皇岛市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "邢台市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "张家口市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "承德市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "沧州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "廊坊市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "衡水市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "定州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "辛集市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "藁城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "晋州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "新乐市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "鹿泉市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "遵化市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "迁安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "霸州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "三河市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "涿州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "安国市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "高碑店市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "泊头市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "任丘市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "黄骅市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "河间市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "冀州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "深州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "南宫市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "沙河市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "武安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "太原市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "大同市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "朔州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阳泉市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "长治市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "晋城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "忻州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "吕梁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "晋中市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "临汾市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "运城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "古交市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "潞城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "高平市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "原平市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "孝义市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "汾阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "介休市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "侯马市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "霍州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "永济市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "河津市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "西安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宝鸡市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "延安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "铜川市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "渭南市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "咸阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "汉中市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "榆林市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "商洛市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "安康市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "韩城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "华阴市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "兴平市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "呼和浩特市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "包头市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "乌海市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "赤峰市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "呼伦贝尔市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "通辽市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "乌兰察布市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "鄂尔多斯市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "巴彦淖尔市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "满洲里市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "扎兰屯市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "牙克石市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "根河市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "额尔古纳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "乌兰浩特市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "锡林郭勒盟"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阿拉善盟"
                                        },
                                        {
                                            "value": [1],
                                            "name" : "兴安盟"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阿尔山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "霍林郭勒市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "锡林浩特市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "二连浩特市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "丰镇市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "兰州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "天水市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "嘉峪关市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "金昌市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "白银市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "酒泉市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "张掖市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "武威市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "庆阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "平凉市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "定西市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "陇南市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "甘南藏族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "敦煌市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "临夏回族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "合作市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "银川市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "石嘴山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "吴忠市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "中卫市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "固原市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "灵武市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "青铜峡市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "西宁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "海东地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "海西蒙古族藏族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "海北藏族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "海南藏族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "果洛藏族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "玉树藏族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "黄南藏族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "乌鲁木齐市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "克拉玛依市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "吐鲁番地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "石河子市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "五家渠市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阿拉尔市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "图木舒克市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "北屯市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "铁门关市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "双河市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "可克达拉市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "喀什地区"
                                        },
                                        {
                                            "value":[1],
                                            "name":"克孜勒苏柯尔克孜自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阿克苏地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "和田地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "哈密地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阿图什市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "博尔塔拉蒙古自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "昌吉回族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阜康市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "巴音郭楞蒙古自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "伊犁哈萨克自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "奎屯市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "塔城地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "乌苏市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阿勒泰地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阿拉山口市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "霍尔果斯市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "拉萨市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "日喀则地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "昌都地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "林芝地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "那曲地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "山南地区"
                                        },
                                        {
                                            "value":[1],
                                            "name":"阿里地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "海口市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "三亚市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "三沙市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "文昌市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "琼海市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "万宁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "东方市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "儋州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "五指山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "哈尔滨市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "齐齐哈尔市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "黑河市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "大兴安岭地区"
                                        },
                                        {
                                            "value": [1],
                                            "name": "大庆市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "伊春市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "鹤岗市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "佳木斯市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "双鸭山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "七台河市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "鸡西市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "牡丹江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "绥化市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "绥芬河市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "双城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "尚志市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "五常市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阿城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "讷河市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "北安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "五大连池市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "铁力市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "同江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "富锦市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "虎林市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "密山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "海林市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "宁安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "安达市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "肇东市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "海伦市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "长春市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "吉林市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "延边朝鲜族自治州"
                                        },
                                        {
                                            "value": [1],
                                            "name": "白城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "松原市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "四平市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "辽源市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "通化市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "白山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "德惠市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "九台市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "榆树市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "磐石市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "蛟河市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "桦甸市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "舒兰市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "洮南市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "大安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "双辽市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "公主岭市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "梅河口市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "集安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "临江市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "延吉市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "图们市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "敦化市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "珲春市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "龙井市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "和龙市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "扶余市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "沈阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "大连市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "朝阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "阜新市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "铁岭市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "抚顺市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "本溪市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "辽阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "鞍山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "丹东市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "营口市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "盘锦市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "锦州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "葫芦岛市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "新民市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "瓦房店市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "普兰店市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "庄河市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "北票市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "凌源市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "调兵山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "开原市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "灯塔市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "海城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "凤城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "东港市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "大石桥市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "盖州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "凌海市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "北镇市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "兴城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "济南市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "青岛市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "聊城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "德州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "东营市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "淄博市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "潍坊市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "烟台市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "威海市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "日照市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "临沂市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "枣庄市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "济宁市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "泰安市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "莱芜市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "滨州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "菏泽市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "章丘市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "即墨市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "平度市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "胶州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "莱西市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "临清市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "乐陵市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "禹城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "安丘市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "昌邑市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "高密市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "青州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "诸城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "寿光市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "栖霞市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "海阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "龙口市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "莱阳市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "莱州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "蓬莱市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "招远市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "文登市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "荣成市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "乳山市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "滕州市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "曲阜市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "邹城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "新泰市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "肥城市"
                                        },
                                        {
                                            "value": [1],
                                            "name": "台湾省"
                                        }]                 
						 }],
                    "bigTitle": "热力地图",
                    "subTitle": "副标题",
                    "credit": "基数: 所有被访者 n=400",
                    "subCredit": "数据来源：B12",
                    "unit": "人",
                    "width": 723,
                    "height": 617
                }';
        break;
//        仪表盘图
    case 5:
        $post = '{
  "bigTitle": "推荐净值（NPS）",
  "themeColor":1,
  "credit": "基数：n=4000",
  "subTitle": "%",
  "unit": "%",
  "y": [
    {
      "data": [
        -45.875
      ],
      "name": "全部"
    }
  ],
  "x": {
    "data": [
      "推荐净值（NPS）"
    ]
  },
  "subCredit": "数据来源：Q42",
  "feature": 1,
  "tooltip": 1,
  "height": "530"
}';
        break;
//        条形图
    case 6:
        $post = '{
  "subTitle": "%",
  "themeColor":1,
  "feature": 1,
  "tooltip": 1,
  "height": 1493,
  "bigTitle": "现在具体的日期和时间是什么? 【数字题 – 日期+时间】",
  "credit": "基数：所有被访者 n=4000",
  "grayBar": [
    {
      "index": 1,
      "color": "#BBBBBB"
    },
    {
      "index": 2,
      "color": "#AAAAAA"
    }
  ],
  "y": [
    {
      "percent": [
        3.55,
        2.975,
        3.3,
        3.65,
        3.525,
        3.35,
        2.725,
        3.075,
        3.65,
        3.575,
        3.35,
        3.05,
        3.125,
        3.175,
        3.025,
        2.85,
        3.3,
        3.3,
        3.475,
        3.85,
        3.2,
        3.075,
        2.95,
        3.4,
        3.125,
        2.925,
        3.15,
        3.0,
        3.125,
        3.1,
        3.075
      ],
      "data": [
        142,
        119,
        132,
        146,
        141,
        134,
        109,
        123,
        146,
        143,
        134,
        122,
        125,
        127,
        121,
        114,
        132,
        132,
        139,
        154,
        128,
        123,
        118,
        136,
        125,
        117,
        126,
        120,
        125,
        124,
        123
      ]
    }
  ],
  "x": {
    "data": [
      "2017-09-01 09:00",
      "2017-09-02 09:00",
      "2017-09-03 09:00",
      "2017-09-04 09:00",
      "2017-09-05 09:00",
      "2017-09-06 09:00",
      "2017-09-07 09:00",
      "2017-09-08 09:00",
      "2017-09-09 09:00",
      "2017-09-10 09:00",
      "2017-09-11 09:00",
      "2017-09-12 09:00",
      "2017-09-13 09:00",
      "2017-09-14 09:00",
      "2017-09-15 09:00",
      "2017-09-16 09:00",
      "2017-09-17 09:00",
      "2017-09-18 09:00",
      "2017-09-19 09:00",
      "2017-09-20 09:00",
      "2017-09-21 09:00",
      "2017-09-22 09:00",
      "2017-09-23 09:00",
      "2017-09-24 09:00",
      "2017-09-25 09:00",
      "2017-09-26 09:00",
      "2017-09-27 09:00",
      "2017-09-28 09:00",
      "2017-09-29 09:00",
      "2017-09-30 09:00",
      "2017-10-01 09:00"
    ]
  },
  "subCredit": "数据来源：Q25",
  "unit": "人"
}';
        break;
//        百分比堆叠条形图
    case 7:
        $post = '{
  "feature": 1,
  "themeColor":1,
  "tooltip": 1,
  "graphic": 1,
  "legend": 4,
  "dataZoom": 6,
  "animation": 1,  
  "x": {
    "data": [
      "类目名称",
      "类目名称",
      "类目名称"
    ]
  },
  "y": [
    {
      "data": [
        386,
        386,
        386
      ],
      "percent": [
        9.65,
        9.65,
        9.65
      ],
      "name": "非常不容易"
    },    
    {
      "data": [
        375,
        375,
        375
      ],
      "percent": [
        9.375,
        9.375,
        9.375
      ],
      "name": "3"
    },
    {
      "data": [
        378,
        378,
        378
      ],
      "percent": [
        9.45,
        9.45,
        9.45
      ],
      "name": "4"
    },
    {
      "data": [
        365,
        365,
        365
      ],
      "percent": [
        9.125,
        9.125,
        9.125
      ],
      "name": "5"
    },
    {
      "data": [
        352,
        352,
        352
      ],
      "percent": [
        8.8,
        8.8,
        8.8
      ],
      "name": "不确定"
    },
    {
      "data": [
        352,
        352,
        352
      ],
      "percent": [
        8.8,
        8.88,
        8.88
      ],
      "name": "7"
    },
    {
      "data": [
        374,
        374,
        374
      ],
      "percent": [
        9.35,
        9.35,
        9.35
      ],
      "name": "8"
    },
    {
      "data": [
        381,
        381,
        381
      ],
      "percent": [
        9.525,
        9.525,
        9.525
      ],
      "name": "9"
    },
    {
      "data": [
        330,
        330,
        330
      ],
      "percent": [
        8.25,
        8.25,
        8.25
      ],
      "name": "10"
    },
    {
      "data": [
        353,
        353,
        353
      ],
      "percent": [
        8.825,
        8.825,
        8.825
      ],
      "name": "非常\n容易"
    }
  ],
  "bigTitle": "百分比堆叠条形图",
  "subTitle": "%",
  "credit": "基数：所有被访者 n=400",
  "subCredit": "数据来源：B12",
  "unit": "人",
  "width": 723,
  "height": 419
}';
        break;
//        条形象形图
    case 8:
        $post = '{
  "bigTitle": "人群分布:推荐者\/中立者\/贬损者",
  "credit": "基数：n=4000",
  "subTitle": "%",
  "unit": "人",
  "y": [
    {
      "percent": [
        17.5
      ],
      "data": [
        700
      ],
      "name": "推荐者"
    },
    {
      "percent": [
        19.125
      ],
      "data": [
        765
      ],
      "name": "中立者"
    },
    {
      "percent": [
        63.375
      ],
      "data": [
        2535
      ],
      "name": "贬损者"
    }
  ],
  "subCredit": "数据来源：Q42",
  "feature": 1,
  "tooltip": 1,
  "height": "360"
}';
        break;
//        词云
    case 9:
        $post = '{
                         "feature":1,
                         "themeColor":1,
                         "tooltip":1,
                         "legend":5,
                         "graphic":1,
                         "dataZoom":6,
                         "animation":1,
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
                             },{
                                 "data":[47],
                                 "name": "阿斯顿·马丁"
                             },{
                                 "data":[48],
                                 "name": "阿尔发·罗密欧"
                             },{
                                 "data":[49],
                                 "name": "奥迪"
                             },{
                                 "data":[50],
                                 "name": "宝马"
                             },{
                                 "data":[51],
                                 "name": "本特利"
                             },{
                                 "data":[52],
                                 "name": "RCZ"
                             },{
                                 "data":[53],
                                 "name": "宾利"
                             },{
                                 "data":[54],
                                 "name": "布加迪"
                             },{
                                 "data":[55],
                                 "name": "大众"
                             },{
                                 "data":[56],
                                 "name": "RCZ"
                             },{
                                 "data":[57],
                                 "name": "五十铃"
                             },{
                                 "data":[58],
                                 "name": "捷豹"
                             },{
                                 "data":[59],
                                 "name": "马自达"
                             },{
                                 "data":[60],
                                 "name": "福特"
                             },{
                                 "data":[61],
                                 "name": "道奇"
                             },{
                                 "data":[62],
                                 "name": "别克"
                             },{
                                 "data":[63],
                                 "name": "迈巴赫"
                             },{
                                 "data":[64],
                                 "name": "Lamborghini"
                             },{
                                 "data":[65],
                                 "name": "Ferrari"
                             }
                             ],
                         "bigTitle": "词云",
                         "subTitle": "副标题",
                         "credit":"基数：所有被访者 n=400",
                         "subCredit":"数据来源：B12",
                         "unit":"人",
                         "width":723,
                         "height":605
                }';
        break;
//        对比柱状图
    case 10:
        $post = '{
                         "feature":1,
                         "themeColor":1,
                         "legend":1,
                         "tooltip":1,
                         "graphic":1,
                         "dataZoom":1,
                         "animation":1,
                         "showDetail":1,
                         "x":
                             {"data":["2017/10/1","2017/10/2","2017/10/3","2017/10/4","2017/10/5","2017/10/6","2017/10/7"]},
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
                         "bigTitle": "对比柱状图",
                         "subTitle": "副标题副标题副标题副标题副标题副标题副",
                         "credit":"基数：所有被访者 n=400",
                         "subCredit":"数据来源：B12",
                         "unit":"人",
                         "width":723,
                         "height":548
                }';
        break;
//        顶部显示数值柱状图
    case 11:
        $post = '{
                         "feature":1,
                         "themeColor":1,
                         "tooltip":1,
                         "legend":5,
                         "graphic":1,
                         "dataZoom":5,
                         "animation":1,
                         "showDetail":1,
                         "x":{"data":["类目名称","类目名称","类目名称","类目名称","类目名称","类目名称","类目名称"]},
                         "y":[{
                                 "data":[10000,13000,10000,13800,6000,2500,5000],
                                 "name": "a"
                             }],
                         "bigTitle": "顶部显示数值柱状图",
                         "subTitle": "副标题",
                         "credit":"基数：所有被访者 n=400",
                         "subCredit":"数据来源：B12",
                         "unit":"k",
                         "width":723,
                         "height":501
                }';
        break;
//        折柱图
    case 12:
        $post = '{
                         "feature":1,
                         "themeColor":1,
                         "legend":1,
                         "tooltip":1,
                         "graphic":1,
                         "dataZoom":1,
                         "animation":1,
                         "showDetail":1,
                         "x":
                             {"data":["2017/9/1","2017/9/2","2017/9/3","2017/9/4","2017/9/5","2017/9/6","2017/9/7"]},
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
                         "bigTitle": "折柱图",
                         "subTitle": "副标题副标题副标题副标题副标题副标题副",
                         "credit":"基数：所有被访者 n=400",
                         "subCredit":"数据来源：B12",
                         "unit":"人",
                         "width":723,
                         "height":550
                }';
        break;
//        面积图
    case 13:
        $post = '{
                        "feature":1,
                        "themeColor":1,
                        "legend":1,
                        "tooltip":1,
                        "graphic":1,
                        "dataZoom":3,
                        "animation":1,
                        "showDetail":1,
                         "x":
                             {"data":["2017/9/1","2017/9/2","2017/9/3","2017/9/4","2017/9/5","2017/9/6","2017/9/7"]},
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
                                }
                             ],
                         "bigTitle": "面积图",
                         "subTitle": "副标题副标题副标题副标题副标题副标题副",
                         "credit":"基数：所有被访者 n=400",
                         "subCredit":"数据来源：B12",
                         "unit":"k",
                         "width":723,
                         "height":548
                }';
        break;
//        标准柱状图
    case 14:
        $post = '{
                         "feature":1,
                         "themeColor":1,
                         "tooltip":1,
                         "legend":5,
                         "graphic":1,
                         "dataZoom":4,
                         "animation":1,
                         "showDetail":1,
                         "x":{"data":["类目名称","类目名称","类目名称","类目名称","类目名称","类目名称","类目名称"]},
                         "y":[{
                                 "data":[10000,13000,10000,13800,6000,2500,5000],
                                 "name": "a"
                             }],
                         "bigTitle": "标准柱状图",
                         "subTitle": "副标题",
                         "credit":"基数：所有被访者 n=400",
                         "subCredit":"数据来源：B12",
                         "unit":"k",
                         "width":723,
                         "height":516
                }';
        break;
//		 平均值柱状图
    case 15:
        $post = '{
                         "feature":1,
                         "themeColor":1,
                         "tooltip":1,
                         "legend":5,
                         "graphic":1,
                         "dataZoom":4,
                         "animation":1,
                         "showDetail":1,
                         "x":{"data":["2018-05-11","2018-05-12","2018-05-13"]},
                         "y":[{
                                "type":"average",
                                 "data":{"date":["2018-05-11","2018-05-12","2018-05-13"],"value":[2,1,0]},
                            
                                 "name": "当日完成样本量"
                             },
                             {
                                "type":"average",
                                 "data":{"value":[2,3,3]},
                            
                                 "name": "累计完成样本量"
                             }],
                         "bigTitle": "平均值柱状图",
                         "subTitle": "副标题",
                         "credit":"",
                         "subCredit":"",
                         "unit":"k",
                         "width":723,
                         "height":516
                }';
        break;
//        百分比堆叠柱状图
    case 21:
        $post = '{
  "showDetail": 1,
  "themeColor":1,
  "graphic": 1,
  "subTitle": "%",
  "feature": 1,
  "tooltip": 1,
  "height": 464,
  "bigTitle": "比重题",
  "credit": "基数：所有被访者 n=4",
  "selectedMode": 1,
  "y": [
    {
      "data": [
        2.25
      ],
      "percent": [
        22.5
      ],
      "name": "选项1"
    },
    {
      "data": [
        3
      ],
      "percent": [
        30
      ],
      "name": "选项2"
    },
    {
      "data": [
        4.75
      ],
      "percent": [
        47.5
      ],
      "name": "选项3"
    }
  ],
  "x": {
    "data": [
      "总体"
    ]
  },
  "subCredit": "数据来源：Q2",
  "legend": 2,
  "unit": "人"
}';
        break;
    //散点图
    case 22:
        $post = '{
                    "feature": 1,
                    "themeColor":1,
                    "legend":1,
                    "tooltip": 1,
                    "graphic":1,
                    "dataZoom":6,
                    "animation":1,
                    "selectedMode": 1,
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
                    "bigTitle": "散点图",
                    "subTitle": "副标题副标题副标题副标题副标题副标题副",
                    "credit": "基数：所有被访者 n=400",
                    "subCredit": "数据来源：B12",
                    "unit": "k",
                    "width": 723,
                    "height": 548
                }';
        break;
}
echo $post;
die;
?>