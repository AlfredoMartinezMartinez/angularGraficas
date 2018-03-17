import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Graficos
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import {LineaComponent} from './component/linea/linea.component';
import { BarraComponent } from './component/barra/barra.component';
import { DonutComponent } from './component/donut/donut.component';
import { RadarComponent } from './component/radar/radar.component';


@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarraComponent,
    DonutComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
