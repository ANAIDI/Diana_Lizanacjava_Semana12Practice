import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service'; 
@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {
  cursos: any[];

  constructor(private router: Router, private dataService: DataService) {
    this.cursos = this.dataService.getCursos();
  }

  navigateToFormularioCurso() {
    this.router.navigate(['/gestión/formulario-curso']);
  }
}

