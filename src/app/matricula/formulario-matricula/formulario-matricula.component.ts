import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service'; 

@Component({
  selector: 'app-formulario-matricula',
  templateUrl: './formulario-matricula.component.html',
  styleUrls: ['./formulario-matricula.component.css']
})
export class FormularioMatriculaComponent {
  formularioMatricula: FormGroup;
  alumnos: any[]; 
  cursos: any[]; 

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.formularioMatricula = this.formBuilder.group({
      alumno: ['', Validators.required], // Debes personalizar esto según tus necesidades
      cursos: [[]], // Utiliza un formulario de selección múltiple para seleccionar cursos
    });

    // Carga la lista de alumnos y cursos desde tu servicio de datos
    this.alumnos = this.dataService.getAlumnos();
    this.cursos = this.dataService.getCursos();
  }

onSubmit() {
  if (this.formularioMatricula.valid) {
    const matriculaData = this.formularioMatricula.value;
    
    // Lógica para guardar la matrícula en el servicio de datos
    this.dataService.agregarMatricula(matriculaData);

    // Redirige a la página deseada (por ejemplo, la lista de matrículas)
    // Debes configurar tu enrutamiento para esta parte
  }
}
}