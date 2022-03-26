import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }

  getAlumnos() {
    return this.alumnos
  }

  AgregarAlumno(nombre,apellido,matricula) {
    var nuevo_al = {
      "nombre": nombre,
      "Apellido": apellido,
      "matricula": matricula,
    }
    this.alumnos.push(nuevo_al)
  }

  getAlumno(matricula: string) {
    var alumno: any = {}
    for(let x=0; x<this.alumnos.length;x++) {
      if(matricula == this.alumnos[x].matricula) {
        alumno = this.alumnos[x]
        break
      }
    }
    return alumno
  }

  findAlumno(matricula: string) {
    for(let x=0; x<this.alumnos.length;x++) {
      if(matricula == this.alumnos[x].matricula) {
        return x
      }
    }
    //Si no halla la matrícula es porque hubo error
  }

  deleteAlumno(matricula: string) {
    var indice = this.findAlumno(matricula)
    this.alumnos.splice(indice, 1)
  }

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
