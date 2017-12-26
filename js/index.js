window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: function (swiper) {

                var n = this.activeIndex; //Swiper的当前索引
                switch (n) {
                    case 0:
                        myChart1.clear();
                        myChart1.setOption(option1);
                        console.log(n)
                        break;
                    case 1:
                        myChart2.clear();
                        myChart2.setOption(option2);
                        console.log(n)
                        break;
                    case 2:
                        myChart3.clear();
                        myChart3.setOption(option3);
                        console.log(n)
                        break;
                    case 3:
                        myChart4.clear();
                        myChart4.setOption(option4);
                        break;
                    case 4:
                        myChart5.clear();
                        myChart5.setOption(option5);
                        break;
                    case 5:
                        myChart6.clear();
                        myChart6.setOption(option6);
                        break;
                    case 6:
                        myChart7.clear();
                        myChart7.setOption(option7);
                        break;

                    default:
                        console.log(n)
                        break;
                }

            }
        }

    });

    /*
     * 
     * 第一页 用户访问量排名
     * 
     * */

    var myChart1 = echarts.init(document.getElementById('page1'));

    option1 = {
        title: {
            text: '用户访问量排名（单位：次数）',
            left: 'center',
            textStyle: {
                color: '#000',
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
            // formatter: function (params) {
            //     var tar = params[1];
            //     return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            // }
        },
        // 整个图表显示要统一的位置
        grid: {
            left: '3%',
            right: '6%',
            bottom: '20%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                rotate: 0
            },
            data: ['李发安', '王实', '曾建华', '黄学军', '罗蜀章']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
                name: '辅助',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                //  data: [0, 4398, 3955, 3559, 2836, 0]
            },
            {
                name: '访问量',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                itemStyle: {
                    //通常情况下：
                    normal: {　　　　　　　　　　　　 //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params) {
                            var colorList = ['#fead33', '#619FA7',
                                '#46eda9', '#7646d8', '#F0805A'
                            ];
                            return colorList[params.dataIndex];
                        }
                    },
                    //鼠标悬停时：
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data: [649, 560, 397, 316, 259]
            }
        ]
    };
    myChart1.setOption(option1);
    /*
     * 
     * 第二页 饼图
     * 
     * */
    var myChart2 = echarts.init(document.getElementById('page2'));
    option2 = {
        title: {
            text: '模块访问量排名',
            subtext: '排名前五的模块',
            x: 'center',
            textStyle: {
                color: '#000',
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#fead33', '#619FA7',
        '#46eda9', '#7646d8', '#F0805A'],
        legend: {
           // x: 'center',
           // y: 'bottom',
           bottom:'20%',
            data: ['分行数据', '最新分享', '滤镜数据', '指标关注数据', '指标组设置数据']
        },
        series: [{
            name: '模块访问量',
            type: 'pie',
            radius: '55%',
           // bottom:'30%',
            center: ['50%', '40%'],
            data: [

                {
                    value: 511,
                    name: '分行数据'
                },
                {
                    value: 241,
                    name: '最新分享'
                },
                {
                    value: 175,
                    name: '滤镜数据'
                },
                {
                    value: 25,
                    name: '指标关注数据'
                },
                {
                    value: 16,
                    name: '指标组设置数据'
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };




    /*
     * 
     * 第三页 折线图y月访问量
     * 
     * */
    var myChart3 = echarts.init(document.getElementById('page3'));
    var data1 = [
        ["一", "542"],
        ["二", "625"],
        ["三", "735"],
        ["四", "662"],
        ["五", "552"],
        ["六", "724"],
        ["七", "639"],
        ["八", "407"],
        ["九", "374"],
        ["十", "349"],
        ["十一", "317"],
        ["十二", "300"],

    ];
    
    var dateList = data1.map(function (item) {
        return item[0];
    });
    var valueList = data1.map(function (item) {
        return item[1];
    });
   
    var option3 = {

        // Make gradient line here
        visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
           // max: 400
        }, {
            show: false,
            type: 'continuous',
            seriesIndex: 1,
            dimension: 0,
            min: 0,
           // max: dateList2.length - 1
        }],


        title: [{
            left: 'center',
            //top:'10%',
            text: '2017年1月~12月访问量',

        }, {
            top: '55%',
            left: 'center',
            // text: '2017年7月~12月访问量'
        }],
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            data: dateList,
            type: 'category',
            name: '月',
            axisLine: {
                lineStyle: {
                    color: '#000',
                    width: 1, //这里是为了突出显示加上的  
                }
            },
            axisLabel: {  
                interval:0,  
                //rotate:40  
             } ,

            boundaryGap: false,
            textStyle: {
                color: "#fff",

            }

        }, {
            // data: dateList2,
            // type : 'category',
            // boundaryGap : false,
            // gridIndex: 1
        }],
        yAxis: [{
            name: '访问量',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#000',
                    width: 1, //这里是为了突出显示加上的  
                }
            },
        }, {
            splitLine: {
                show: false
            },
            //gridIndex: 1
        }],
        grid: [{
            bottom: '40%'
        }, {
            //top: '60%'
        }],
        series: [{
            type: 'line',
            showSymbol: true,
            itemStyle: { /*设置折线颜色*/
                normal: {
                    /* color:'#c4cddc'*/
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value
                        }
                    }
                }
            },
            data: valueList
        }, {
            type: 'line',
            showSymbol: false,
            // data: valueList2,
            // xAxisIndex: 1,
            // yAxisIndex: 1
        }]
    };

    /*
     * 
     * 第4页 app新增用户量
     * 
     * */
    var myChart4 = echarts.init(document.getElementById('page4'));


    option4 = {
        title: {
            text: '新增用户数',
            //subtext: '排名前五的模块',
            x: 'center',
            textStyle: {
                color: '#000',
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: 'center',
            y: 'bottom',
           data: ['西宁分行', '宁波分行', '北京分行', '成都分行', '福州分行','石家庄分行','贵阳分行','银川分行','中国光大银行','呼和浩特分行','南昌分行','南京分行','青岛分行','潍坊分行','乌鲁木齐','烟台分行']
        },
        series: [{
            name: '模块访问量',
            type: 'pie',
            radius: '50%',
            center: ['50%', '40%'],
            data: [

                {
                    value: 11,
                    name: '西宁分行'
                },
                {
                    value: 5,
                    name: '宁波分行'
                },
                {
                    value: 3,
                    name: '北京分行'
                },
                {
                    value: 3,
                    name: '成都分行'
                },
                {
                    value: 3,
                    name: '福州分行'
                },
                {
                    value: 3,
                    name: '石家庄分行'
                },
                {
                    value: 2,
                    name: '贵阳分行'
                },
                {
                    value: 2,
                    name: '银川分行'
                },
                {
                    value: 2,
                    name: '中国光大银行'
                },
                {
                    value: 1,
                    name: '呼和浩特分行'
                },
                {
                    value: 1,
                    name: '南昌分行'
                },
                {
                    value: 1,
                    name: '南京分行'
                },
                {
                    value: 1,
                    name: '青岛分行'
                },
                {
                    value: 1,
                    name: '潍坊分行'
                },
                {
                    value: 1,
                    name: '乌鲁木齐'
                },
                {
                    value: 1,
                    name: '烟台分行'
                },
            ],
            itemStyle: {
                normal : {
                    label : {
                       position : 'inner',
                       //distance:0.1,
                        formatter : function (params) {                         
                          return (params.percent - 0).toFixed(0)
                        }
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };



    /*
     * 
     * 第5页 柱状 分行访问量排名
     * 
     * */

    var myChart5 = echarts.init(document.getElementById('page5'));
    option5 = {
        title: {
            text: '分行访问量排名（单位：次数）',
            left: 'center',
            textStyle: {
                color: '#000',
            },
            // subtext: 'From ExcelHome',
            // sublink: 'http://e.weibo.com/1341556070/AjQH99che'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var tar = params[1];
                //   return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        // 整个图表显示要统一的位置



        grid: {
            left: '3%',
            right: '6%',
            bottom: '20%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            textStyle: {
                color: "#000",

            },
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                rotate: 0
            },
            data: ['大连分行', '西宁分行', '南昌分行', '长沙分行', '贵阳分行']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
                name: '辅助',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                //  data: [0, 4398, 3955, 3559, 2836, 0]
            },
            {
                name: '访问量',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                itemStyle: {
                    //通常情况下：
                    normal: {　　　　　　　　　　　　 //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params) {
                            var colorList = ['#fead33', '#619FA7',
                                '#46eda9', '#7646d8', '#F0805A'
                            ];
                            return colorList[params.dataIndex];
                        }
                    },
                    //鼠标悬停时：
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                data: [342, 1528, 443, 396, 723]
            }
        ]
    };

    /*
     * 
     * 第6页 访问频度分析
     * 
     * */




    var myChart6 = echarts.init(document.getElementById('page6'));
    var option6 = {
        title: {
            text: '访问频度（单位：次数）',
            textStyle: {
                color: '#000',
            },

            left: 'center',
            // subtext: 'From ExcelHome',
            // sublink: 'http://e.weibo.com/1341556070/AjQH99che'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['访问量', '百分比']
        },
        grid: {
            left: '3%',
            right: '6%',
            bottom: '20%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisLabel: {  
                interval:0,  
                //rotate:40  
             } ,
            data: ['10次以下', '10-50次', '50次-100次', '100-150次', '150次以上']
        }],
        yAxis: [{
            type: 'value',
            name: '访问次数',
            min: 0,
            max: 25,
            // interval: 50,
            axisLabel: {
                formatter: '{value} '
            }
        }],
        series: [

            {
                name: '降水量',
                type: 'bar',

                /*设置柱状图颜色*/
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // build a color map as your need.
                            var colorList = [
                                '#fead33', '#619FA7',
                                '#46eda9', '#7646d8', '#F0805A'
                            ];
                            return colorList[params.dataIndex]
                        },
                        /*信息显示方式*/
                        label: {
                            show: true,
                            position: 'inside',
                            color: '#fff',
                            // formatter: '{b}\n{c}%'
                        }
                    }
                },
                data: [19, 22, 7, 3, 8]
            },
            {
                name: '折线',
                type: 'line',
                itemStyle: { /*设置折线颜色*/
                    normal: {
                        /* color:'#c4cddc'*/
                        label: {
                            show: true,
                            formatter: function (params) {
                                return parseInt(params.value / 59 * 100) + '%'
                            }
                        }
                    }
                },
                data: [19, 22, 7, 3, 8]
            }
        ]
    };

}