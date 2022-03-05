import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor() {}
  agregar: boolean = false
  alumnos = [
    {
      "nombre": "Abraham",
      "Apellido": "Ramírez",
      "matricula": "ABC123",
    },
    {
      "nombre": "Aylin",
      "Apellido": "Demecti",
      "matricula": "ABC123",
    },
    {
      "nombre": "Brian",
      "Apellido": "Esquivel",
      "matricula": "ABC123",
    },
    {
      "nombre": "Diego",
      "Apellido": "Dávila",
      "matricula": "ABC123",
    },
    {
      "nombre": "Diego",
      "Apellido": "Jasso",
      "matricula": "ABC123",
    },
    {
      "nombre": "Julio",
      "Apellido": "Manuel",
      "matricula": "ABC123",
    },
    {
      "nombre": "Luis",
      "Apellido": "Armando",
      "matricula": "ABC123",
    },
    {
      "nombre": "Luis",
      "Apellido": "Otoniel",
      "matricula": "ABC123",
    },
    {
      "nombre": "Manuel",
      "Apellido": "Antonio",
      "matricula": "ABC123",
    },
    {
      "nombre": "Rogel",
      "Apellido": "Axel",
      "matricula": "ABC123",
    },
    {
      "nombre": "Sergio",
      "Apellido": "Gutierrez",
      "matricula": "ABC123",
    }
  ]

  toglar():void {
    this.agregar = !this.agregar
  }

  @Input() nombre: string = ""
  @Input() apellido: string = ""
  @Input() matricula: string = ""

  nuevoalumno():void {
    var nuevo_al = {
      "nombre": this.nombre,
      "Apellido": this.apellido,
      "matricula": this.matricula,
    }
    this.alumnos.push(nuevo_al)
  }

}
