import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe= new HeroeModel();


  constructor( private heroesService: HeroesService ){
  }

  guardar( form: NgForm){
    if(form.invalid) {
      console.log('Formulario no valido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando informacion',
    });
    Swal.showLoading(Swal.getDenyButton());

    let peticion: Observable<any>;

    if(this.heroe.id){
     peticion =  this.heroesService.actualizarHeroe( this.heroe)
    }else{
      peticion = this.heroesService.crearHeroe( this.heroe)
    }

    peticion.subscribe( resp => {
      Swal.fire({ 
      title: this.heroe.nombre,
      text: 'Se actualizo correctamente',
    })
    });

  }
}
