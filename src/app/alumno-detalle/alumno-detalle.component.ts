import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {
  }

  matriculaid = this.ruta.snapshot.params["id"]

  hallarAlumno(matricula: string) {
    var alumno: any = {}
    for(let x=0; x<this.alumnos.length;x++) {
      if(matricula == this.alumnos[x].matricula) {
        alumno = this.alumnos[x]
        break
      }
    }
    return alumno
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

  resultado = this.hallarAlumno(this.matriculaid)
}
