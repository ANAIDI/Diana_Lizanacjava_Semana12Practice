import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionModule } from './gestion/gestion.module';
import { UtilesModule } from './utiles/utiles.module';
import { MatriculaModule } from './matricula/matricula.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    AppRoutingModule,
    GestionModule,
    UtilesModule,
    MatriculaModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    RouterModule,

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
