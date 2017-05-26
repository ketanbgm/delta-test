import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../services/colors';

declare var $: any;
declare var Morris: any;
declare var Datamap: any;

@Component({
  selector: 'dashboard',
  templateUrl: '../dashboards/dashboard.html',
  providers: [ColorsService]
})

export class DashboardComponent implements OnInit {

  public colors: Object;

  constructor(private colorsService: ColorsService) {
    this.colors = colorsService.getBootstrapColors();
  }

  ngOnInit() {

    this.peityBar1('.bar-chart-1', 75, this.colors['success']);
    this.peityBar1('.bar-chart-2', 75, this.colors['danger']);
    this.peityArea1('.area-chart-1', 75, this.colors['warning']);
    this.peityArea1('.area-chart-2', 75, this.colors['info']);
    this.morrisBar('bar-chart-3', this.colors);
    this.morrisLine('line-chart-1', this.colors);

    let self = this;
    let onResizeEnd = () => {
      self.peityBar1('.bar-chart-1', 75, self.colors['success']);
      self.peityBar1('.bar-chart-2', 75, self.colors['danger']);
      self.peityArea1('.area-chart-1', 75, self.colors['warning']);
      self.peityArea1('.area-chart-2', 75, self.colors['info']);
      $('body').trigger('changed:background');
    }

    let resizeTimeout;
    $(window).on('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(onResizeEnd, 500);
    });

    $('body').on('toggle:collapsed', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(onResizeEnd, 500);
    })
  }

  peityArea1(element: string, height: number, color: any): void {
    $(element).peity('line', {
      height: height,
      width: '100%',
      stroke: color,
      fill: color
    });
  }

  peityBar1(element: string, height: number, color: any): void {
    $(element).peity('bar', {
      height: height,
      width: '100%',
      fill: [color]
    });
  }

  morrisBar(element: string, colors: any): void {
    const chart = Morris.Bar({
      element: element,
      data: [{
        y: '2006',
        a: 100,
        b: 90
      }, {
        y: '2007',
        a: 75,
        b: 65
      }, {
        y: '2008',
        a: 50,
        b: 40
      }, {
        y: '2009',
        a: 75,
        b: 65
      }, {
        y: '2010',
        a: 50,
        b: 40
      }, {
        y: '2011',
        a: 75,
        b: 65
      }, {
        y: '2012',
        a: 100,
        b: 90
      }],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      barColors: [this.colors['info'], this.colors['success']],
    });
    $(window).resize(function() {
      chart.redraw();
    });
  }

  morrisLine(element: string, colors: any): void {
    const chart = Morris.Line({
      element: element,
      data: [{
        y: '2006',
        a: 100,
        b: 90
      }, {
        y: '2007',
        a: 75,
        b: 65
      }, {
        y: '2008',
        a: 50,
        b: 40
      }, {
        y: '2009',
        a: 75,
        b: 65
      }, {
        y: '2010',
        a: 50,
        b: 40
      }, {
        y: '2011',
        a: 75,
        b: 65
      }, {
        y: '2012',
        a: 100,
        b: 90
      }],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      lineColors: [colors.danger, colors.warning],
      lineWidth: 2
    });
    $(window).resize(function() {
      chart.redraw();
    });

  }

}

