import { Component } from '@angular/core';
import { DataPersistanceService } from '../services/data-persistance.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private dataPersistanceService: DataPersistanceService
  ) {}

  numberOfPLayers : number = 2;

  repetitions = Array(this.numberOfPLayers);

  who : string [] = [
    'Verduzco', 'Mostaza', 'Marlene',
    'Moradillo', 'Escarlata' , 'Blanca'
  ];
  with: string []  = [
    'Candelabro', 'Daga', 'Tubo de plomo',
    'Revólver', 'Soga', ' Llave Inglesa'
  ];

  where : string [] = [
    'Salón de Baile', 'Sala de billar', 'Terraza',
    'Comedor', 'Pasillo', 'Cocina',
    'Bibliotecas', 'Sala', 'Estudio'
  ];


}
