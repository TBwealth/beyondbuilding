import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 linechart = [];
 datalabel: any[] = ['January', 'February', 'March'];
 data1:any[] = ['10000','9000','1000','50000'];
 data2:any[] = ['20000','8000','10000','200000']
  constructor() { }

  ngOnInit() {
    
this.linechart = new Chart('canvas',{
  type: 'line',
  data:{
    labels:["January", "February", "March"],
    datasets:[
      {
      label: "Number of items sold in 3 months",
      data:["200","300","100"],
      borderColor:"#3cba9f",
      fill: false
    }
  ]
  },
  options: {
    title: {
      text: "test",
      display:true
    },
    scales:{
      xAxes:[{
        display: true
      }],
      yAxes:[{
        display: true
      }]
    }
  }
});

  }

}
