import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  alta: boolean = false;

  constructor() { }

  getAlta(){
    return this.alta;
  }

  darDeAlta(){
    this.alta = true;
  }
}
