import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

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
}
