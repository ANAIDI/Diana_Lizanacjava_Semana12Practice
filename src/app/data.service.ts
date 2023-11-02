import { Injectable } from '@angular/core';
interface Curso {
  id: number;
  nombre: string;
  horas: number;
  creditos: number;
  categoria: string;
}
interface Alumno {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  direccion: string;
  correo: string;
  telefono: string;
}

interface Matricula {
  id: number;
  alumnoId: number;
  cursos: number[]; 
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Mobile Application',
      horas: 20,
      creditos: 4,
      categoria: 'software'
    },
    {
      id: 2,
      nombre: 'Postman',
      horas: 30,
      creditos: 5,
      categoria: 'Testing'
    },
    {
      id: 3,
      nombre: 'JMeter',
      horas: 28,
      creditos: 6,
      categoria: 'Testing'
    },
    {
      id: 4,
      nombre: 'Selenium',
      horas: 50,
      creditos: 8,
      categoria: 'Testing'
    }
  ];

  private alumnos: Alumno[] = [
    {
      id: 1,
      nombres: 'Juan',
      apellidos: 'Castro',
      fechaNacimiento: '2003-01-15',
      direccion: 'San Francisco de Asis Mz D Lte3',
      correo: 'juan@gmail.com',
      telefono: '984456234'
    },
    {
      id: 2,
      nombres: 'Hernan',
      apellidos: 'Lizana',
      fechaNacimiento: '2003-01-15',
      direccion: 'San Francisco de Asis Mz D Lte3',
      correo: 'hernan@gmail.com',
      telefono: '984456234'
    },
    {
      id: 3,
      nombres: 'Vicenta',
      apellidos: 'de la Cruz',
      fechaNacimiento: '2003-01-15',
      direccion: 'San Francisco de Asis Mz D Lte3',
      correo: 'vicenta@gmail.com',
      telefono: '984456234'
    }
  ];
  private matriculas: Matricula[] = []; 

  constructor() { }

  getCursos() {
    return this.cursos;
  }

  getAlumnos() {
    return this.alumnos;
  }

  agregarCurso(nuevoCurso: Curso) {
    this.cursos.push(nuevoCurso);
  }

  agregarAlumno(nuevoAlumno: Alumno) {
    this.alumnos.push(nuevoAlumno);
  }
  
  agregarMatricula(nuevaMatricula: Matricula) {
    this.matriculas.push(nuevaMatricula);
  }
}
