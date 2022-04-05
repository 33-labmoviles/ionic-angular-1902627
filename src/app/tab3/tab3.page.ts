import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlumnosService } from '../alumnos.service';

export interface Alumno {
  nombreInput: string;
  apellidoInput: string;
  matriculaInput: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private AlServ: AlumnosService) {}

  Nombre: string = ""
  Apellido: string = ""
  Matricula: string = ""

  onSubmit(form: NgForm) {
    var alumno: Alumno = form.value
    this.AlServ.AgregarAlumno(alumno.nombreInput,alumno.apellidoInput,alumno.matriculaInput).subscribe()
  }

  limpiarEntrada() {
    this.Nombre = ""
    this.Apellido = ""
    this.Matricula = ""
  }
}
