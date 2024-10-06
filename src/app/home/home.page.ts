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
  playersLabel : string [] = [];
  numberOfPlayers : number = 2;
  repetitions : any;

  ngOnInit(): void {
    this.numberOfPlayers =  this.dataPersistanceService.getData("numberOfPlayers");
    this.playersName = this.dataPersistanceService.getData("playersName");
    console.log(`players name : ${this.playersName}`);
    this.repetitions = Array(this.numberOfPlayers);

    //init lock booleans value
    this.lockWho.fill(true);
    this.lockWhere.fill(true);
    this.lockWith.fill(true);

    this.buildLabels();

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

  buildLabels() : void {
    //take first thow initials into Pascal Case
    this.playersName.forEach(playerName => {
      if(playerName.length > 1){
        let identifier : string = playerName.substring(0,2).toLowerCase();
        identifier = identifier.replace(identifier.substring(0,1), identifier.substring(0,1).toUpperCase());
        this.playersLabel.push(identifier);
      }
    });

    //check Unique ids
    this.playersLabel.forEach( (playerLabel : string, index  : number) => {
      if(!this.isUnique(this.playersLabel,playerLabel))
        this.doUniqueNames(playerLabel);
    })
    console.log(`players Labels: ${this.playersLabel}`);
  }

  doUniqueNames(element : string) : void {
    let currentRepetition : number = 1;
    this.playersLabel.forEach((currentLabel : string, index : number) => {
      if(currentLabel === element)
        this.playersLabel[index] += `${currentRepetition++}`;
    })
  }

  isUnique(elements : string[], element: string) : boolean{
    return elements.indexOf(element) === elements.lastIndexOf(element);
  }


}
