import { Component, Input } from '@angular/core';

@Component({
    selector: 'pregunta',
    templateUrl: './pregunta.html',
    styleUrls: ['./pregunta.css']
  })
  export class PreguntaComponent {
    @Input()
    nombre: string;
  }