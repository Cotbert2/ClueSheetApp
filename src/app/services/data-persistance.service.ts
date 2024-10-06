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
  }
  getData(key: string) : void {
    return (this.data) ? this.data[key] : null;
  }

}
