import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos: any[];
  constructor(private router: Router, private dataService: DataService) {
    this.alumnos = this.dataService.getAlumnos();
  }

  navigateToFormularioAlumno() {
    this.router.navigate(['/agregar-alumno']); 
  }
}
