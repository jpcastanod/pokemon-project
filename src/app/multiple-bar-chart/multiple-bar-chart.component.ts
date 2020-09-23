import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-multiple-bar-chart',
  templateUrl: './multiple-bar-chart.component.html',
  styleUrls: ['./multiple-bar-chart.component.css']
})
export class MultipleBarChartComponent implements OnInit {
  @Input('complete-stats') completeStats;
  view: any[] = [450, 300];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.completeStats);
  }

  onSelect(data): void {

    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
