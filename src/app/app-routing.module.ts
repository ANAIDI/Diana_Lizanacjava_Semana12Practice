import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraAppComponent } from './utiles/cabecera-app/cabecera-app.component';
import { ListaCursosComponent } from './gestion/lista-cursos/lista-cursos.component';
import { ListaAlumnosComponent } from './gestion/lista-alumnos/lista-alumnos.component';
import { FormularioAlumnoComponent } from './gestion/formulario-alumno/formulario-alumno.component';
import { FormularioCursoComponent } from './gestion/formulario-curso/formulario-curso.component';
import { MatriculaModule } from './matricula/matricula.module';

const routes: Routes = [
  { path: 'inicio', component: CabeceraAppComponent },
  { path: 'alumnos', component: ListaAlumnosComponent },
  { path: 'cursos', component: ListaCursosComponent },
  { path: 'matriculas', component: MatriculaModule },
  { path: 'gestión/lista-cursos', component: FormularioCursoComponent },
  { path: 'gestión/lista-alumnos', component: FormularioAlumnoComponent },
  { path: 'gestión/formulario-alumno', component: FormularioAlumnoComponent }, 
  { path: 'gestión/formulario-curso', component: FormularioCursoComponent }, 
  { path: 'agregar-alumno', component: FormularioAlumnoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
