import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
declare let echarts;
/*
 Generated class for the Echarts page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-echarts',
    templateUrl: 'echarts.html'
})
export class EchartsPage {
    @ViewChild('chart') chart: ElementRef;

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello Echarts Page');
        this.chartInit();
    }

    //初始化图表
    chartInit() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(this.chart.nativeElement);
        let option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

}
