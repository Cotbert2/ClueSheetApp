import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPersistanceService {

  //common data in application
  constructor() { }

  private data: any;

  setData(key: string, value: any) : void{
    this.data = { ...this.data, [key] : value};
    console.log('Current data:');
    console.log(this.data);
  }

  getData(key : string) : any {
    return (this.data) ? this.data[key] : null;
  }

}