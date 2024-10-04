import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  numberOfPLayers : number = 4;

  who : string [] = [
    'Verduzco', 'Mostaza', 'Marlene'
  ];

  where : string [] = [];

  with: string []  = [];
  

}
