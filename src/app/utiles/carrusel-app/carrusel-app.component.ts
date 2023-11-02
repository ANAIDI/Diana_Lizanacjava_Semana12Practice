import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-carrusel-app',
  templateUrl: './carrusel-app.component.html',
  styleUrls: ['./carrusel-app.component.css']
})
export class CarruselAppComponent {
  ngAfterViewInit(): void {
    // Inicializa el carrusel de Bootstrap después de que la vista se haya inicializado
    $(document).ready(() => {
      $('#carruselCursos').carousel();
    });
  }

}
