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
      "matricula": "BBIWAD",
    },
    {
      "nombre": "Brian",
      "Apellido": "Esquivel",
      "matricula": "DWAKDAW",
    },
    {
      "nombre": "Diego",
      "Apellido": "Dávila",
      "matricula": "NIDABW",
    },
    {
      "nombre": "Diego",
      "Apellido": "Jasso",
      "matricula": "123BJ",
    },
    {
      "nombre": "Julio",
      "Apellido": "Manuel",
      "matricula": "GFD342",
    },
    {
      "nombre": "Luis",
      "Apellido": "Armando",
      "matricula": "DAW321",
    },
    {
      "nombre": "Luis",
      "Apellido": "Otoniel",
      "matricula": "AD324A",
    },
    {
      "nombre": "Manuel",
      "Apellido": "Antonio",
      "matricula": "321SDF",
    },
    {
      "nombre": "Rogel",
      "Apellido": "Axel",
      "matricula": "123DWASD",
    },
    {
      "nombre": "Sergio",
      "Apellido": "Gutierrez",
      "matricula": "321DAS",
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
