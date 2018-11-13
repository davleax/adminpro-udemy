import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: string[] = [];
  @Input('chartData') doughnutchartData: number[] = [];
  @Input('chartType') doughnutchartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
