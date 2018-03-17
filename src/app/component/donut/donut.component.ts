import { Component } from '@angular/core';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: []
})
export class DonutComponent  {
  // Doughnut
 public doughnutChartLabels:string[] = ['Tomates', 'Lechugas', 'Pepinos'];
 public doughnutChartData:number[] = [350, 450, 100];
 public doughnutChartType:string = 'doughnut';

 // events
 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }

 public numeros_random(){
   this.doughnutChartData=[
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100),
     Math.round(Math.random() * 100)
   ];
 }


}
