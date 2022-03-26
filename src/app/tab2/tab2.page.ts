import { Component } from '@angular/core';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private servAl: AlumnosService) {
    this.alumnos = servAl.getAlumnos()
  }

  alumnos = []
}
