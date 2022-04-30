import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlumnosService } from '../alumnos.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, public AcSheet: ActionSheetController, private servAl: AlumnosService) { 
  }

  index = this.ruta.snapshot.params["id"]
  resultado: any
  editando: boolean = false
  
  Nombre: string = ""
  Apellido: string = ""

  ngOnInit() {
    this.servAl.getAlumnoObs(this.index).subscribe(res=> {
      this.resultado = res
    })
  }

  //Muestra Action Sheet
  async presentActionSheet() {
    const actionSheet = await this.AcSheet.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [  
      {
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
          window.alert("Alumno eliminado")
          this.eliminarAlumno()
        }
      }, {
        text: 'Editar',
        icon: 'pencil-outline',
        data: 10,
        handler: () => {
          this.editarAlumno()
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  //Elimina el elemento
  eliminarAlumno() {
    this.servAl.deleteAlumno(this.index).subscribe()
  } 

  //Enviar Edición
  onSubmit(Form: NgForm) {
    this.servAl.EditarAluno(this.Nombre, this.Apellido, this.resultado.matricula, this.index).subscribe(
      res=>{
        window.alert("Alumno Modificado")
        console.log(res)
      }
    )
  }

  //Muestra para editar al alumno
  editarAlumno() {
    this.editando = true;
  }

  //Y ano muestra para editar
  quitarEdicion() {
    this.editando = false
  }
}
