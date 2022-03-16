import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
}
