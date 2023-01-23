import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

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

    if(this.heroe.id){
      this.heroesService.actualizarHeroe( this.heroe).subscribe( resp => {
        console.log(resp);
      })
    }else{
      this.heroesService.crearHeroe( this.heroe).subscribe( resp => {
        console.log(resp);
        this.heroe=resp
      })
    }




  }
}
