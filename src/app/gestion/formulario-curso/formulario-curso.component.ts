import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service'; 
@Component({
  selector: 'app-formulario-curso',
  templateUrl: './formulario-curso.component.html',
  styleUrls: ['./formulario-curso.component.css']
})
export class FormularioCursoComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.formulario = this.fb.group({
      id: ['', [Validators.required, Validators.min(1)]],
      nombre: ['', Validators.required],
      horas: ['', [Validators.required, Validators.min(1), Validators.max(24)]],
      creditos: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      categoria: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const cursoData = this.formulario.value;
      // Aquí puedes manejar la lógica para guardar el curso
      this.dataService.agregarCurso(cursoData); // Utiliza el método del servicio

      // Redirige a la página de Lista de Cursos
      // Puedes utilizar el Router para navegar o como lo hayas implementado
    }
  }
}
