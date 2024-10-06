import { Component, OnInit } from '@angular/core';
import { DataPersistanceService } from '../services/data-persistance.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(
    private dataPersistanceService: DataPersistanceService
  ) {}


  data : any;
  playersName : string [] = [];
  numberOfPlayers : number = 2;
  repetitions : any;

  ngOnInit(): void {
    this.numberOfPlayers =  this.dataPersistanceService.getData("numberOfPlayers");
    console.log(`number of players ${this.dataPersistanceService.getData("numberOfPlayers")}`);
    this.repetitions = Array(this.numberOfPlayers);
  }

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
