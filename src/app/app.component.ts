import { Component, OnInit } from '@angular/core';
import { PieChart, PieChartOptions, ResponsiveOptions } from 'chartist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'SS-APP';

  ngOnInit(): void {}
}
