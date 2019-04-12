import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  alta: boolean = false;

  aC = true;
  aM = false;
  aH = false;

  bC = true;
  bM = false;
  bH = false;

  constructor() { }

  getAlta(){
    return this.alta;
  }

  darDeAlta(){
    this.alta = true;
  }
}
