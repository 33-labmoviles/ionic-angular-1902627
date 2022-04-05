import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from 'src/Alumno';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private servAl: AlumnosService) {}

  ngOnInit(): void {
    this.servAl.getAlumnosObs().subscribe(res=> {
      this.alumnos = res
    })
  }

  eliminarAlumno(matricula: string) {
    this.servAl.deleteAlumno(matricula).subscribe(res=> {
      this.actualizardatos()
    })
  }

  actualizardatos() {
    this.servAl.getAlumnosObs().subscribe(res=> {
      this.alumnos = res
    })
  }

  alumnos: Map<string,Alumno>
}
