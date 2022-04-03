import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  //GET
  getAlumnosObs() {
    return this.http.get('https://base-alumnos-27492-default-rtdb.firebaseio.com/alumnos.json')
  }

  getAlumnoObs(index: Number) {
    return this.http.get('https://base-alumnos-27492-default-rtdb.firebaseio.com/alumnos/'+ index +'.json')
  }

  //POST
  AgregarAlumno(nombre: string,apellido: string,matricula: string) {
    var nuevo_al = {
      "nombre": nombre,
      "apellido": apellido,
      "matricula": matricula,
    }

    //this.http.post()
  }

  //DELETE
  deleteAlumno(matricula: string) {
  }
}
