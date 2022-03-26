import { Component, Input } from '@angular/core';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private servAl: AlumnosService) {
    this.alumnos = servAl.getAlumnos()
  }

  agregar: boolean = false
  alumnos = [
  ]
  @Input() nombre: string = ""
  @Input() apellido: string = ""
  @Input() matricula: string = ""

  toglar():void {
    this.agregar = !this.agregar
  }

  nuevoalumno():void {
    this.servAl.AgregarAlumno(this.nombre,this.apellido,this.matricula)
  }

}
