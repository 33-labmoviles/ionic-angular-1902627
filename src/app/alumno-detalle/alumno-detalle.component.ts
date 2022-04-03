import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { AlumnosService } from '../alumnos.service';



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
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
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
    this.servAl.deleteAlumno(this.index)
  } 
}
