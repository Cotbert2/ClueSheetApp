import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  numberOfPLayers : number = 4;

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
