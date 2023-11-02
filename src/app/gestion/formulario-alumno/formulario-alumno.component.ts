import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data.service'; 
@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})

export class FormularioAlumnoComponent {
  formularioAlumno: FormGroup;
  constructor(    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.formularioAlumno = this.formBuilder.group({
      id: ['', [Validators.required, Validators.min(1)]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    if (this.formularioAlumno.valid) {
      const AlumnoData = this.formularioAlumno.value;
      this.dataService.agregarAlumno(AlumnoData);
      this.router.navigate(['/agregar-alumno']); 
    }
  }
}
