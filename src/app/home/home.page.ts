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

    //init lock booleans value
    this.lockWho.fill(true);
    this.lockWhere.fill(true);
    this.lockWith.fill(true);
  }

  who : string [] = [
    'Verduzco', 'Mostaza', 'Marlene',
    'Moradillo', 'Escarlata' , 'Blanca'
  ];

  lockWho : boolean [] = [];
  lockWhere : boolean [] = [];
  lockWith : boolean [] = [];



  with: string []  = [
    'Candelabro', 'Daga', 'Tubo de plomo',
    'Revólver', 'Soga', ' Llave Inglesa'
  ];

  where : string [] = [
    'Salón de Baile', 'Sala de billar', 'Terraza',
    'Comedor', 'Pasillo', 'Cocina',
    'Bibliotecas', 'Sala', 'Estudio'
  ];

  inversorWho (indexNum : number) : void {
    this.lockWho[indexNum] = !this.lockWho[indexNum];
  }

  inversorWhere (indexNum : number) : void {
    this.lockWhere[indexNum] = !this.lockWhere[indexNum];
  }
  inversorWith (indexNum : number) : void {
    this.lockWith[indexNum] = !this.lockWith[indexNum];
  }


}
