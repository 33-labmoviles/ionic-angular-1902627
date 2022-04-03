import { Component, Input, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from 'src/Alumno';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  constructor(private servAl: AlumnosService) {
  }

  ngOnInit() {
    this.actualizardatos()
  }

  agregar: boolean = false
  alumnos: Map<string,Alumno>

  @Input() nombre: string = ""
  @Input() apellido: string = ""
  @Input() matricula: string = ""

  toglar():void {
    this.agregar = !this.agregar
  }

  nuevoalumno():void {
    this.servAl.AgregarAlumno(this.nombre,this.apellido,this.matricula)
    this.actualizardatos()
  }

  actualizardatos() {
    this.servAl.getAlumnosObs().subscribe(res=> {
      this.alumnos = res
    })
  }
}
