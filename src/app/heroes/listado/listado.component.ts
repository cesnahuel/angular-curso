import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  hereoes : string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor'];
  heroeBorrado : string = '';

  borraHeroe(){
    console.log('Borrando');
    this.heroeBorrado = this.hereoes.shift() || '';
  }
}
