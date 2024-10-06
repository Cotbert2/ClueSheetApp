import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

//services

import { DataPersistanceService } from '../services/data-persistance.service';
@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.page.html',
  styleUrls: ['./setup-page.page.scss'],
})
export class SetupPagePage implements OnInit {

  constructor(
    private NavController : NavController,
    private dataPersistanceService: DataPersistanceService,
    private toastManager : ToastController,
  ) {}

  numberOfPlayers : number = 2;
  playersPlaceholders : string [] = [];
  playersNames: string [] = [];

  ngOnInit() {
    this.buildPlaceholders();
  }

  printNumberOfPlayer() : void{
    this.playersPlaceholders = [];
    this.playersNames = [];
    console.log('Number of players: ' + this.numberOfPlayers);
    if(this.numberOfPlayers > 6 || this.numberOfPlayers < 2) this.numberOfPlayers = 2;

    this.buildPlaceholders();
  }

  buildPlaceholders() : void{
    for(let i = 0; i < this.numberOfPlayers; i ++) {
      this.playersPlaceholders[i] = 'Jugado ' + (i+ 1);
      this.playersNames[i] = '';
    }
  }

  startGame() : void {
    console.log("Starting game");
    console.log(this.playersNames);
    if(!this.playersNameAreComplete())
      this.showCompleteFormToast('Llena todos los campos primero :(');
    else {
      this.NavController.navigateForward('home');
      this.dataPersistanceService.setData('playersName',this.playersNames);
      this.dataPersistanceService.setData('numberOfPlayers',this.numberOfPlayers);
    }
  }

  playersNameAreComplete () : boolean {
    return (this.playersNames.every(value => value != ''));
  }


  async showCompleteFormToast(message : string){
    const toast = await this.toastManager.create({
      message: message,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }











}
