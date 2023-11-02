import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';
import { FormularioCursoComponent } from './formulario-curso/formulario-curso.component';
import { RouterModule } from '@angular/router'; 


@NgModule({
  declarations: [
    ListaCursosComponent,
    ListaAlumnosComponent,
    FormularioCursoComponent,
    FormularioAlumnoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    RouterModule
  ],
  exports:[
    ListaCursosComponent,
    ListaAlumnosComponent,
    FormularioAlumnoComponent,
    FormularioCursoComponent

  ]
})
export class GestionModule { }
