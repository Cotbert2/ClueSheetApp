import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.page.html',
  styleUrls: ['./setup-page.page.scss'],
})
export class SetupPagePage implements OnInit {

  constructor() { }
  numberOfPlayers ?: number;

  ngOnInit() {
    this.numberOfPlayers = 2;
  }

  printNumberOfPlayer(){
    console.log("something");
    console.log('Number of players: ' + this.numberOfPlayers);
  }




}
