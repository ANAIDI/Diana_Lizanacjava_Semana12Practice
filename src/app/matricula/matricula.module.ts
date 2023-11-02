import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioMatriculaComponent } from './formulario-matricula/formulario-matricula.component';
import { PagosComponent } from './pagos/pagos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FormularioMatriculaComponent,
    PagosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  
  ],
  exports:[
    FormularioMatriculaComponent,
    PagosComponent
  ]
})
export class MatriculaModule { }
