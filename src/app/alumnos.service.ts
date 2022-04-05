import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from 'src/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  //GET
  getAlumnosObs() {
    return this.http.get<Map<string,Alumno>>('https://base-alumnos-27492-default-rtdb.firebaseio.com/alumnos.json')
  }

  getAlumnoObs(id) {
    return this.http.get('https://base-alumnos-27492-default-rtdb.firebaseio.com/alumnos/'+ id +'.json')
  }

  //POST
  AgregarAlumno(nombre: string,apellido: string,matricula: string) {
    var nuevo_al = {
      "nombre": nombre,
      "apellido": apellido,
      "matricula": matricula
    }

    return this.http.post('https://base-alumnos-27492-default-rtdb.firebaseio.com/alumnos.json', nuevo_al)
  }

  //DELETE
  deleteAlumno(id: string) {
    return this.http.delete('https://base-alumnos-27492-default-rtdb.firebaseio.com/alumnos/' + id + '.json')
  }
}
