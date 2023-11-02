import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraAppComponent } from './cabecera-app/cabecera-app.component';
import { PieAppComponent } from './pie-app/pie-app.component';
import { CarruselAppComponent } from './carrusel-app/carrusel-app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    CabeceraAppComponent,
    PieAppComponent,
    CarruselAppComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[
    CabeceraAppComponent,
    PieAppComponent,
    CarruselAppComponent
  ]
})
export class UtilesModule { }
