import { Injectable } from '@angular/core';

/*Archivo de los alimentos*/
import { carrito as carritoFile } from '../model/carrito';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  alimentos = carritoFile;

  private notification: BehaviorSubject<any>;
  public notification$: Observable<any>;

  constructor() {
    this.notification = new BehaviorSubject<any>(this.alimentos);
    this.notification$ = this.notification.asObservable();
  }

  private notify(){
    this.notification.next(this.alimentos);
  }

  /*getters*/
  getAgua(){
    return this.alimentos[0];
  }

  getBroccoli(){
    return this.alimentos[1];
  }

  getCarne(){
    return this.alimentos[2];
  }

  getCarneCongelada(){
    return this.alimentos[3];
  }

  getCereza(){
    return this.alimentos[4];
  }

  getChurros(){
    return this.alimentos[5];
  }

  getCocaCola(){
    return this.alimentos[6];
  }

  getColiflor(){
    return this.alimentos[7];
  }

  getFanta(){
    return this.alimentos[8];
  }

  getHelado(){
    return this.alimentos[9];
  }

  getHuevos(){
    return this.alimentos[10];
  }

  getLeche(){
    return this.alimentos[11];
  }

  getMantequilla(){
    return this.alimentos[12];
  }

  getManzana(){
    return this.alimentos[13];
  }

  getMelon(){
    return this.alimentos[14];
  }

  getPatatasCongeladas(){
    return this.alimentos[15];
  }

  getPepino(){
    return this.alimentos[16];
  }

  getPera(){
    return this.alimentos[17];
  }

  getPescado(){
    return this.alimentos[18];
  }

  getPescadoCongelado(){
    return this.alimentos[19];
  }

  getPimiento(){
    return this.alimentos[20];
  }

  getPizzaCongelada(){
    return this.alimentos[21];
  }

  getPlatano(){
    return this.alimentos[22];
  }

  getPollo(){
    return this.alimentos[23];
  }

  getQueso(){
    return this.alimentos[24];
  }

  getSalchicha(){
    return this.alimentos[25];
  }

  getSalsaDeTomate(){
    return this.alimentos[26];
  }

  getSprite(){
    return this.alimentos[27];
  }

  getTarta(){
    return this.alimentos[28];
  }

  getVerdurasCongeladas(){
    return this.alimentos[29];
  }

  getYogurt(){
    return this.alimentos[30];
  }

  getZanahoria(){
    return this.alimentos[31];
  }

  getZumo(){
    return this.alimentos[32];
  }
  getCarneDescongelada(){
    return this.alimentos[33];
  }
  getPescadoDescongelado(){
    return this.alimentos[34];
  }
  getTartaDescongelada(){
    return this.alimentos[35];
  }

  /*setters de cantidad*/

  setCantidad(id, cantidad){
    let pos = this.indexOfId(id);
    console.log(pos);
    if(pos !== -1){
      let cantidadInicial = this.alimentos[pos].cantidad;
      this.alimentos[pos].cantidad = cantidad;

      if( (cantidadInicial === 0 && cantidad > 0) || (cantidadInicial >0 && cantidad == 0) ){
        this.notify();
      }
    }
  }
  
  indexOfId(id: string) : number {
    for( let i=0; i< this.alimentos.length; i++){
      if(this.alimentos[i].id === id) return i;
    }
    return -1;
  }

  getCantidad(id){
    let pos = this.indexOfId(id);
    console.log(pos);
    if(pos !== -1){
      return this.alimentos[pos].cantidad;
    }
  }

}
