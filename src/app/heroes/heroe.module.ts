import { NgModule } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';


@NgModule({
    //Que componentes contiene el modulo:
    declarations: [
        ListadoComponent,
        HeroeComponent 
    ],
    //Que componentes quiro hacer public para fuera del module, en este caso como uso ListadoComponente desde appComponente lo debo poner
    exports: [
        ListadoComponent
    ],
    //Solo modulos va aca, 
    imports: [
        //Necesario para las directivas ngIf, ngFor, etc
        CommonModule
    ]
})
export class HeroesModule {

}