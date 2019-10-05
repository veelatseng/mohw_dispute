// 自行加入的JS請寫在這裡
$(function() {
    $('.mpSlider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        // fade: true,
        cssEase: 'ease'
    });
	 //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        useHistoryApi: 'true',
        lazy: true
    });
});
$(function() {
    $(".notification_intro .more").click(function(event) {
        $(this).parent(".notification_intro").toggleClass('open')
    });
    
});
$(function () {
    // chart1 爭議通報案件數量分析
    $('.chart1 .chart').highcharts({
        exporting: { 
            enabled: false
        },
        credits: {
            enabled: false
        },
        style: {
            color: '#555',
            fontSize: "12px",
            fontWeight: "blod",
            fontFamily: "Courier new"
        },
        chart: {
            type: 'line'            
        },
        title: {
            text: '爭議通報案件數量分析'
        },
        subtitle: {
            text: '107年2-11月'
        },
        xAxis: {
            categories: ['二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
            min: 0,
            title: {
                text: '數量'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    // format: '{point.y:.1f}'
                }
            }
        },
        series: [{
            name: '案件數',
            data: [9, 12, 7, 22, 21, 14, 9, 21, 12, 12],
            color: "#07abbe"
        }],
    });
    // chart2 案件分析-縣市別
    $('.chart2 .chart').highcharts({
        exporting: { 
            enabled: false
        },
        credits: {
            enabled: false
        },
        chart: {
            // inverted: true,
            type: 'column'
        },
        title: {
            text: '案件分析-縣市別'
        },
        subtitle: {
            text: '共有16縣市機構通報(107.2.1-11.30)'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            // allowDecimals:false,
            title: {
                text: '案件數'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                // borderWidth: 10,
                // groupPadding:0.1,
                // pointWidth:20,
                dataLabels: {
                    enabled: true,
                    // format: '{point.y:.1f}'
                }
            }
        },
        series: [{
            name: '案件數',
            colorByPoint: true,
            data: [{
                name: '台北',
                y: 33,
                color:"#335498"
            }, {
                name: '台中',
                y: 20,
                color:"#008bc0"
            }, {
                name: '台南',
                y: 19,
                color:"#0099d8"
            }, {
                name: '高雄',
                y: 18,
                color:"#5cb9ed"
            }, {
                name: '5',
                y: 9,
                color:"#00a39b"
            }, {
                name: '6',
                y: 7,
                color:"#00bc9c"
            }, {
                name: '7',
                y: 7,
                color:"#56cc9b"
            }, {
                name: '8',
                y: 5,
                color:"#913589"
            }, {
                name: '9',
                y: 4,
                color:"#9145aa"
            }, {
                name: '10',
                y: 4,
                color:"#9e59b3"
            }, {
                name: '11',
                y: 3,
                color:"#f07d26"
            }, {
                name: '12',
                y: 3,
                color:"#fa7752"
            }, {
                name: '13',
                y: 3,
                color:"#fab35b"
            }, {
                name: '14',
                y: 2,
                color:"#ebca56"
            }, {
                name: '15',
                y: 1,
                color:"#aab7b7"
            }, {
                name: '16',
                y: 1,
                color:"#d3d2d2"
            }, {
                name: '17',
                y: 1,
                color:"#571a0d"
            }, {
                name: '18',
                y: 1,
                color:"#ad3b1f"
            }, {
                name: '19',
                y: 1,
                color:"#e85212"
            }, {
                name: '20',
                y: 1,
                color:"#e79217"
            }, {
                name: '21',
                y: 1,
                color:"#cd9b2a"
            }, {
                name: '22',
                y: 1,
                color:"#c1c82d"
            }]
        }],
    });
    // chart3 案件分析-機構別(累積)
    $('.chart3 .chart').highcharts({
        exporting: { 
            enabled: false
        },
        credits: {
            enabled: false
        },
        chart: {
            type: 'pie',
            spacing : [40, 0 , 40, 0]
        },
        title: {
            text: '案件分析-機構別(累積)'
        },
        subtitle: {
            text: '107年2-11月'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend: true,
                dataLabels: {
                    enabled: true,
                    // format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    format: '{point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            innerSize: '50%',
            name: '機構別(累積)',
            data: [{
                name:'醫學中心',
                y: 41,
                color:"#00a39b"
            },{
                name:'區域醫院',
                y: 47,
                color:"#00bc9c"
            },{
                name:'地區醫院',
                y: 46,
                color:"#56cc9b"
            },{
                name:'診所',
                y: 10,
                color:"#eb783f"
            },{
                name:'護理機構',
                y: 20,
                color:"#ebca56"
            },{
                name:'其他（醫事機構、事業單位、學校、老人福利機構等）',
                y: 5,
                color:"#aab7b7"
            }

            ]
        }]
    });
    // chart4 案件分析-爭議別
    $('.chart4 .chart').highcharts({
        exporting: { 
            enabled: false
        },
        credits: {
            enabled: false
        },
        chart: {
            type: 'pie',
            spacing : [40, 0 , 40, 0]
        },
        title: {
            text: '案件分析-爭議別'
        },
        subtitle: {
            text: '107年2-11月'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend: true,
                dataLabels: {
                    enabled: true,
                    // format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    format: '{point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            innerSize: '50%',
            name: '爭議別',
            data: [{
                name:'勞基法相關',
                y: 103,
                color:"#09aab6"
            },{
                name:'其他爭議(休息室空間、福利待遇、無照人員檢舉及其他法令疑義等)',
                y: 36,
                color:"#68b277"
            }]
        }],
        legend: {
            layout: "horizontal"
        }
    });
    // chart5 勞基法相關103件案件態樣-申訴內容
    $('.chart5 .chart').highcharts({
        exporting: { 
            enabled: false
        },
        credits: {
            enabled: false
        },
        chart: {
            // inverted: true,
            backgroundColor: '#fff',
            type: 'column'
        },
        title: {
            text: '勞基法相關103件案件態樣-申訴內容'
        },
        subtitle: {
            text: '部分案件涉及1種以上勞基法規定態樣'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: '件數'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                    // format: '{point.y:.1f}'
                }
            }
        },
        series: [{
            name: '件數',
            colorByPoint: true,
            data: [{
                name: '工時過長(含打卡後繼續上班)',
                y: 33,
                color:"#335498"
            }, {
                name: '花花班及更換班次間隔未達11小時',
                y: 28,
                color:"#008bc0"
            }, {
                name: '例假日上班爭議(含休假爭議)',
                y: 20,
                color:"#0099d8"
            }, {
                name: '未給加班費及時數',
                y: 18,
                color:"#5cb9ed"
            }, {
                name: '職場罷凌',
                y: 6,
                color:"#00a39b"
            }, {
                name: '其他(留職停薪與年終獎金爭議)',
                y: 6,
                color:"#00bc9c"
            }, {
                name: '負時數',
                y: 5,
                color:"#56cc9b"
            }, {
                name: '假班表',
                y: 4,
                color:"#913589"
            }, {
                name: '離職爭議',
                y: 3,
                color:"#9145aa"
            }, {
                name: '午休時間爭議',
                y: 3,
                color:"#9e59b3"
            }, {
                name: '無償待命值班',
                y: 3,
                color:"#f07d26"
            }, {
                name: '獎懲規定',
                y: 3,
                color:"#fa7752"
            }, {
                name: '進修爭議',
                y: 2,
                color:"#fab35b"
            }, {
                name: '離職違約金',
                y: 1,
                color:"#ebca56"
            }]
        }],
    });
    // chart6 勞基法相關案件-病房/單位類別
    $('.chart6 .chart').highcharts({
        exporting: { 
            enabled: false
        },
        credits: {
            enabled: false
        },
        chart: {
            type: 'pie',
            spacing : [40, 0 , 40, 0]
        },
        title: {
            text: '勞基法相關案件-病房/單位類別'
        },
        subtitle: {
            text: '107年2-11月'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                showInLegend: true,
                dataLabels: {
                    enabled: true,
                    // format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    format: '{point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            innerSize: '50%',
            name: '病房/單位類別',
            data: [{
                name:'醫院/門診',
                y: 75,
                color:"#09aab6"
            },{
                name:'醫院/急診',
                y: 4,
                color:"#00a39b"
            },{
                name:'醫院/病房',
                y: 4,
                color:"#00bc9c"
            },{
                name:'醫院/其他單位',
                y: 19,
                color:"#56cc9b"
            },{
                name:'診所',
                y: 3,
                color:"#eb783f"
            },{
                name:'護理機構',
                y: 16,
                color:"#ebca56"
            },{
                name:'其他',
                y: 5,
                color:"#aab7b7"
            }]
        }],
        legend: {
            layout: "horizontal"
        }
    });
    // chart7 處理原則與辦理情形
    $('.chart7 .chart').highcharts({
        exporting: { 
            enabled: false
        },
        credits: {
            enabled: false
        },
        chart: {
            type: 'column'            
        },
        title: {
            text: '處理原則與辦理情形'
        },
        subtitle: {
            text: '107年2-11月'
        },
        xAxis: {
            categories: ['涉勞基法','非涉勞基法']
        },
        yAxis: {
            min: 0,
            title: {
                text: '件數'
            },
            stackLabels: {
                enabled: true,
                // style: {
                //     fontWeight: 'bold',
                //     color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                // }
            }
        },       
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + ' 件<br/>' +
                '總數: ' + this.point.stackTotal + ' 件';
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: '調查中',
            data: [24, 7],
            color:"#07abbe"
        }, {
            name: '輔導',
            data: [60, 25],
            color:"#ebca56"
        }, {
            name: '裁罰',
            data: [19, 4],
            color:"#eb783f"
        }]
    });
});  
$(function () {
    $('.number').each(function() {
      var $this = $(this),
      countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
    },{
        duration: 8000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
      },
      complete: function() {
          $this.text(this.countNum);
          //alert('finished');
      }
  });  
  });        
}); 
$(function(){
    $("div#myId").dropzone({ url: "/file/post" });
});
$(window).bind('resize load', function(e) {
    var windowWidth = $(window).width();
    if (windowWidth <= 1024) {
        if($(".cp_panel .function").is(":visible")){
            $(".cp_panel").show();
        } else{
            $(".cp_panel").hide();
        }
    };

});
$(window).bind('resize load', function(e) {
    if ($(window).outerWidth() <= 768 ) {
        var ww = $(window).outerWidth(),
        pageWidth=$(".container").width(),
        rightWidth= (ww-pageWidth)/2;
        $('.fixed_right_block,.scrollToTop').css('right', (rightWidth-55));
    }  else {
        $('.fixed_right_block,.scrollToTop').css('right', 10);
    }

});
