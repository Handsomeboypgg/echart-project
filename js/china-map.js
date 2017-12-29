//数据展示的js.
function tabProvincial(area){
    console.log(area)
    var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '新疆': [87.9236,43.5883],
        '甘肃': [103.5901,36.3043],
        '北京': [116.4551,40.2539],
        '江苏': [118.8062,31.9208],
        '广西': [108.479,23.1152],
        '江西': [116.0046,28.6633],
        '安徽': [117.29,32.0581],
        '内蒙古': [111.4124,40.4901],
        '黑龙江': [127.9688,45.368],
        '广东': [113.5107,23.2196],
        '四川': [103.9526,30.7617],
        '西藏': [91.1865,30.1465],
        '云南': [102.9199,25.4663],
        '湖北': [114.3896,30.6628],
        '辽宁': [123.1238,42.1216],
        '山东': [117.1582,36.8701],
        '河北': [114.4995,38.1006],
        '福建': [119.4543,25.9222],
        '陕西': [109.1162,34.2004],
        '河南': [113.4668,34.6234],
        '重庆': [107.7539,30.1904],
        '宁夏': [106.3586,38.1775],
        '吉林': [125.8154,44.2584],
        '湖南': [113.0823,28.2568],
        '天津': [117.4219,39.4189],
        '山西': [112.3352,37.9413],
        '海南': [110.3893,19.8516],
        '青海': [101.4038,36.8207],
        '贵州': [106.6992,26.7682],
        '浙江': [119.5313,29.8773],
    };
    var site = '广东'
    if(area != undefined){
         var site = area;
    }
    
    var GZData = [
    [{name:'上海',value:100}, {name:site}],
    [{name:'湖南',value:70}, {name:site}],
    [{name:'山西',value:30}, {name:site}],
    [{name:'河北',value:50}, {name:site}],
    [{name:'四川',value:20}, {name:site}],
    [{name:'黑龙江',value:10}, {name:site}],
    [{name:'青海',value:80}, {name:site}],
    [{name:'西藏',value:55}, {name:site}],
    [{name:'新疆',value:90}, {name:site}]
    ];
    var convertData = function (data) {
        console.log(data)
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[1].name];
            var toCoord = geoCoordMap[dataItem[0].name];
            if (fromCoord && toCoord) {
                res.push([
                {
                    coord:fromCoord,
                    value: dataItem[0].value
                },
                {
                    coord: toCoord,
                }
                ]);
            }
        }
        return res;

    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [[site, GZData]].forEach(function (item, i) {
        console.log(item)
        series.push(    
            {
                type: 'lines',
                zlevel: 2,
                silent: true,
                // symbol: ['none', 'arrow'],
                // symbolSize : 5, //箭头大小
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.1,//特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol:'circle',//箭头图标
                    symbolSize: 5,//图标大小
                    shadowBlur: 10
                },
                lineStyle: {
                    normal: {
                        width: 2,//尾迹线条宽度
                        opacity: 1,//尾迹线条透明度
                        curveness: -0.1, //尾迹线条曲直度
                        color: 'red',
                    }
                },
                
                data: convertData(item[1])
            },
            {//攻击点的样式
                type: 'effectScatter',
                coordinateSystem: 'geo',
                silent: true,
                zlevel: 2,
                rippleEffect: {//涟漪特效
                    period:4,//动画时间，值越小速度越快
                    brushType: 'stroke', //波纹绘制方式 stroke, fill
                    scale: 4 //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',//显示位置
                        offset:[5, 0], //偏移设置
                        formatter: '{b}' //圆环显示文字
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: 'emptyCircle',
                symbolSize: function (val) {
                    return 4 + val[2] / 10; //圆环大小
                },
                itemStyle: {
                    normal: {
                        show: false,
                        color: '#f00'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
                }),
            },
                
            {//广东 被攻击样式
                type: 'effectScatter',
                silent: true,
                coordinateSystem: 'geo',
                zlevel: 2,
                legendHoverLink: false,
                rippleEffect: {
                    period:4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        offset:[5, 0],
                        color:'#00ffff',
                        formatter: '{b}',
                        textStyle: {
                            color:"#00ffff"
                        }
                    },
                    emphasis: {
                        show: true
                    }
                },
                symbol: 'circle',
                symbolSize:10,
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#ddd'
                    }
                },
                data:[{
                    name: item[0],
                    value: geoCoordMap[item[0]].concat([100]),
                }],
            }
        );
    });
    var option = {

        dataRange: {
            min : 0,
            max : 100,
            calculable : true,
            color: ['#00d2db', '#fff'],
            textStyle:{
                color:'#fff'
            }
        },
        tooltip: {
            show: false, //不显示提示标签
            formatter: '{b}', //提示标签格式
            backgroundColor:"#ff7f50",//提示标签背景颜色
            textStyle:{color:"#fff"} //提示标签字体颜色
        },
        geo: {
            left: 10,
            selectedMode : 'single',
            map: 'china',
            // regions: [{name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0, label: {show: false}}}}],
            label: {
                // normal:{
                //     show:true,
                //     color:'#fff',
                // },
                emphasis: {
                    show: false
                }
            },
            roam: false, //是否允许缩放
            layoutCenter: ['38%', '45%'], //地图位置
            layoutSize:"105%",
            itemStyle: {
                normal: {
                    // borderWidth:1,
                    color: 'rgba(9, 40, 66, .5)', //地图背景色
                    borderColor: 'rgba(18,134,168,1)' //省市边界线
                },
                emphasis: {
                    color: '#79b0e6'//悬浮背景
                }
            }
        },
        // title : {
        //     text: 'new地图',
        //     subtext: '充值智商',
        //     x:'left',
        //     textStyle: {
        //         color: "rgb(249, 249, 249)"
        //     }   
        // },
        
        series: series

    };
    myChart.clear();
    myChart.setOption(option,true);
}


    

    
    function showCircle(area){

        //圆形数据
        //圆形图数据
        var site = area
        var CircleSeries = [];
        CircleSeries.push(
            {
                name:'会员数比',
                type:'pie',
                radius: ['35%', '55%'],
                color:['#f3c800','#00c6f7'],
                // avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        // position: 'center',
                        formatter: '{b}\n{d}%'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:25, name:site},
                    {value:75, name:'全国'},
                ]
            }
        ) 

        var myCircle = echarts.init(document.getElementById('circle')); 
        var option1 = {
            title : {
                text: '所占比例',
                x: 5,
                y: 10,
                textStyle: {
                    color: "#f3c800",
                    fontSize: 15,
                }   
            },

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                itemHeight: 5,
                itemWidth: 40,
                bottom:5,
                left: 'right',
                orient: 'vertical',
                x: 'left',
                data:[site,'全国'],
                textStyle:{
                    color: '#fff',
                }
            },
            // 
            series: CircleSeries
        }
        myCircle.clear();
        myCircle.setOption(option1, true);

    }
    
    

    var CircleSeries2 = [];
    CircleSeries2.push(
        {
            name: '消费金额来源',
            type: 'pie',
            radius : '50%',
            color:['#f3c800','#00ffde', '#00c6f7'],
            center: ['50%', '42%'],
            data:[
                {value:334, name:'本省去他省消费金额'},
                {value:310, name:'他省去本省消费金额'},
                {value:234, name:'本省消费金额'},
            ],
            label:{
                normal:{
                    position: 'inside',
                    show: true,
                    color: '#fff',
                    formatter: '{d}%',
                    align: 'top',
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    )


    function showCircleTwo(){

        var myCircle2 = echarts.init(document.getElementById('circle2'));   
    
        option2 = {
            title : {

                text: '所占比例',
                textStyle: {
                    color: "#f3c800",
                    fontSize: 15,
                },
                x: 5,
                y: 10,
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                itemHeight: 5,
                itemWidth: 40,
                bottom:5,
                left: 'right',
                orient: 'vertical',
                x: 'left',
                textStyle:{
                    color: '#fff',
                },
                data: ['本省去他省消费金额','他省去本省消费金额','本省消费金额']
            },
            series : CircleSeries2
        }; 
        myCircle2.clear();
        myCircle2.setOption(option2, true); 
    }
   

    //柱形
     var histogramData = [];
     histogramData.push(
        {
            name: '近期收益金额',
            type: 'bar',
            data: [175000, 235500, 125000, 335500, 778440, 541200, 1238000],
            // barWidth: 10,
            label:{
                normal:{
                    // show: true,
                    fontSize: 8,
                }
            },
            itemStyle:{
                normal:{
                    color: '#00c6f7',
                },
                emphasis:{
                    color: '#f3c800',
                }
            }
        }
     )

    function showHistogram(){

        var myHistogram = echarts.init(document.getElementById('histogram'));
       

        var option3 = {
            title: {
                text: '近期收益金额',
                textStyle: {
                    color: "#f3c800",
                    fontSize: 15,
                },
                x: 5,
                y: 10,
            },
            tooltip: {},
            xAxis: {
                
                data: ["周一","周二","周三","周四","周五","周六","周日"],
                axisLine:{
                    show: false,
                    lineStyle:{
                        color: '#fff',
                    }
                },
                axisTick:{
                    show:false,
                },
                
            },
            yAxis: {
                show: false,
            },
            series: histogramData,
        };

        myHistogram.clear();
        myHistogram.setOption(option3, true); 

    }
     