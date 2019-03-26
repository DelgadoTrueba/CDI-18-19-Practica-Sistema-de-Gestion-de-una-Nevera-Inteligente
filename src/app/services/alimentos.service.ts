import { Injectable } from '@angular/core';

/*Archivo de los alimentos*/
import { alimentos as alimentosFile } from '../model/alimentos/alimentos';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  alimentos = alimentosFile;

  private notification: BehaviorSubject<any>;
  public notification$: Observable<any>;

  constructor() {
    this.notification = new BehaviorSubject<any>(this.alimentos);
    this.notification$ = this.notification.asObservable();
  }

  private notify(){
    this.notification.next(this.alimentos);
  }

  alimentosMainFridgeFilter(element){
    let isContent = function(id: string, ids:Array<any>){
      for(let i=0; i<ids.length; i++){
          if(ids[i] === id){
              return true;
          }
      }
      return false;
    }

    let ids = [
        "broccoli",
        "carne",
        "cereza",
        "coliflor",
        "huevos",
        "manzana",
        "melon",
        "pepino",
        "pera",
        "pescado",
        "pimiento",
        "platano",
        "pollo",
        "salchicha",
        "zanahoria",
        ]
    return  isContent(element.id, ids);
  }

  alimentosAllFridgeFilter(element){

    let isContent = function(id: string, ids:Array<any>){
      for(let i=0; i<ids.length; i++){
          if(ids[i] === id){
              return true;
          }
      }
      return false;
    }
    
    let ids = [
        "agua",
        "broccoli",
        "carne",
        "cereza",
        "cocaCola",
        "coliflor",
        "fanta",
        "huevos",
        "leche",
        "mantequilla",
        "manzana",
        "melon",
        "pepino",
        "pera",
        "pescado",
        "pimiento",
        "platano",
        "pollo",
        "queso",
        "salchicha",
        "salsaDeTomate",
        "sprite",
        "yogurt",
        "zanahoria",
        "zumo"
        ]
    return isContent(element.id, ids);
  }

  alimentosLateralIzqFilter(element){

    let isContent = function(id: string, ids:Array<any>){
      for(let i=0; i<ids.length; i++){
          if(ids[i] === id){
              return true;
          }
      }
      return false;
    }

    let ids = [
        "agua",
        "leche",
        "mantequilla",
        "salsaDeTomate",
        ]
    return isContent(element.id, ids);
  }

  alimentosLateralDerFilter(element){

    let isContent = function(id: string, ids:Array<any>){
      for(let i=0; i<ids.length; i++){
          if(ids[i] === id){
              return true;
          }
      }
      return false;
    }

    let ids = [
        "cocaCola",
        "fanta",
        "queso",
        "sprite",
        "yogurt",
        "zumo"
        ]
    return isContent(element.id, ids);
  }

  alimentosFreezerFilter(element){

    let isContent = function(id: string, ids:Array<any>){
      for(let i=0; i<ids.length; i++){
          if(ids[i] === id){
              return true;
          }
      }
      return false;
    }
    let ids = [
        "carne-congelada",
        "churros",
        "helado",
        "patatas-congeladas",
        "pescado-congelado",
        "pizza-congelada",
        "tarta",
        "verduras-congeladas",
        ]
    return isContent(element.id, ids);
  }

  /*getters cantidad*/
  getAgua(){
    return this.alimentos[0].cantidad;
  }

  getBroccoli(){
    return this.alimentos[1].cantidad;
  }

  getCarne(){
    return this.alimentos[2].cantidad;
  }

  getCarneCongelada(){
    return this.alimentos[3].cantidad;
  }

  getCereza(){
    return this.alimentos[4].cantidad;
  }

  getChurros(){
    return this.alimentos[5].cantidad;
  }

  getCocaCola(){
    return this.alimentos[6].cantidad;
  }

  getColiflor(){
    return this.alimentos[7].cantidad;
  }

  getFanta(){
    return this.alimentos[8].cantidad;
  }

  getHelado(){
    return this.alimentos[9].cantidad;
  }

  getHuevos(){
    return this.alimentos[10].cantidad;
  }

  getLeche(){
    return this.alimentos[11].cantidad;
  }

  getMantequilla(){
    return this.alimentos[12].cantidad;
  }

  getManzana(){
    return this.alimentos[13].cantidad;
  }

  getMelon(){
    return this.alimentos[14].cantidad;
  }

  getPatatasCongeladas(){
    return this.alimentos[15].cantidad;
  }

  getPepino(){
    return this.alimentos[16].cantidad;
  }

  getPera(){
    return this.alimentos[17].cantidad;
  }

  getPescado(){
    return this.alimentos[18].cantidad;
  }

  getPescadoCongelado(){
    return this.alimentos[19].cantidad;
  }

  getPimiento(){
    return this.alimentos[20].cantidad;
  }

  getPizzaCongelada(){
    return this.alimentos[21].cantidad;
  }

  getPlatano(){
    return this.alimentos[22].cantidad;
  }

  getPollo(){
    return this.alimentos[23].cantidad;
  }

  getQueso(){
    return this.alimentos[24].cantidad;
  }

  getSalchicha(){
    return this.alimentos[25].cantidad;
  }

  getSalsaDeTomate(){
    return this.alimentos[26].cantidad;
  }

  getSprite(){
    return this.alimentos[27].cantidad;
  }

  getTarta(){
    return this.alimentos[28].cantidad;
  }

  getVerdurasCongeladas(){
    return this.alimentos[29].cantidad;
  }

  getYogurt(){
    return this.alimentos[30].cantidad;
  }

  getZanahoria(){
    return this.alimentos[31].cantidad;
  }

  getZumo(){
    return this.alimentos[32].cantidad;
  }


  /*setters de cantidad*/
  setAgua(cantidad){
    this.alimentos[0].cantidad = cantidad;
	this.notify();
  }

 setBroccoli(cantidad){
    this.alimentos[1].cantidad = cantidad;
	this.notify();
  }

 setCarne(cantidad){
    this.alimentos[2].cantidad = cantidad;
	this.notify();
 }

 setCarneCongelada(cantidad){
    this.alimentos[3].cantidad = cantidad;
	this.notify();
 }

 setCereza(cantidad){
    this.alimentos[4].cantidad = cantidad;
	this.notify();
 }

 setChurros(cantidad){
    this.alimentos[5].cantidad = cantidad;
	this.notify();
 }

 setCocaCola(cantidad){
    this.alimentos[6].cantidad = cantidad;
	this.notify();
 }

 setColiflor(cantidad){
    this.alimentos[7].cantidad = cantidad;
	this.notify();
 }

 setFanta(cantidad){
    this.alimentos[8].cantidad = cantidad;
	this.notify();
 }

 setHelado(cantidad){
    this.alimentos[9].cantidad = cantidad;
	this.notify();
 }

 setHuevos(cantidad){
    this.alimentos[10].cantidad = cantidad;
	this.notify();
 }

 setLeche(cantidad){
    this.alimentos[11].cantidad = cantidad;
	this.notify();
 }

 setMantequilla(cantidad){
    this.alimentos[12].cantidad = cantidad;
	this.notify();
 }

 setManzana(cantidad){
    this.alimentos[13].cantidad = cantidad;
	this.notify();
 }

 setMelon(cantidad){
    this.alimentos[14].cantidad = cantidad;
	this.notify();
 }

 setPatatasCongeladas(cantidad){
    this.alimentos[15].cantidad = cantidad;
	this.notify();
 }

 setPepino(cantidad){
    this.alimentos[16].cantidad = cantidad;
	this.notify();
 }

 setPera(cantidad){
    this.alimentos[17].cantidad = cantidad;
	this.notify();
 }

 setPescado(cantidad){
    this.alimentos[18].cantidad = cantidad;
	this.notify();
 }

 setPescadoCongelado(cantidad){
    this.alimentos[19].cantidad = cantidad;
	this.notify();
 }

 setPimiento(cantidad){
    this.alimentos[20].cantidad = cantidad;
	this.notify();
 }

 setPizzaCongelada(cantidad){
    this.alimentos[21].cantidad = cantidad;
	this.notify();
 }

 setPlatano(cantidad){
    this.alimentos[22].cantidad = cantidad;
	this.notify();
 }

 setPollo(cantidad){
    this.alimentos[23].cantidad = cantidad;
	this.notify();
 }

 setQueso(cantidad){
    this.alimentos[24].cantidad = cantidad;
	this.notify();
 }

 setSalchicha(cantidad){
    this.alimentos[25].cantidad = cantidad;
	this.notify();
 }

 setSalsaDeTomate(cantidad){
    this.alimentos[26].cantidad = cantidad;
	this.notify();
 }

 setSprite(cantidad){
    this.alimentos[27].cantidad = cantidad;
	this.notify();
 }

 setTarta(cantidad){
    this.alimentos[28].cantidad = cantidad;
	this.notify();
 }

 setVerdurasCongeladas(cantidad){
    this.alimentos[29].cantidad = cantidad;
	this.notify();
 }

 setYogurt(cantidad){
    this.alimentos[30].cantidad = cantidad;
	this.notify();
 }

 setZanahoria(cantidad){
    this.alimentos[31].cantidad = cantidad;
	this.notify();
 }

 setZumo(cantidad){
    this.alimentos[32].cantidad = cantidad;
	this.notify();
 }

 /*decrementar*/
 decrementarAgua(){
  this.alimentos[0].cantidad--;
	this.notify();
  }

  decrementarBroccoli(){
    this.alimentos[1].cantidad--;
	this.notify();
  }

  decrementarCarne(){
    this.alimentos[2].cantidad--;
	this.notify();
  }

  decrementarCarneCongelada(){
    this.alimentos[3].cantidad--;
	this.notify();
  }

  decrementarCereza(){
    this.alimentos[4].cantidad--;
	this.notify();
  }

  decrementarChurros(){
    this.alimentos[5].cantidad--;
	this.notify();
  }

  decrementarCocaCola(){
    this.alimentos[6].cantidad--;
	this.notify();
  }

  decrementarColiflor(){
    this.alimentos[7].cantidad--;
	this.notify();
  }

  decrementarFanta(){
    this.alimentos[8].cantidad--;
	this.notify();
  }

  decrementarHelado(){
    this.alimentos[9].cantidad--;
	this.notify();
  }

  decrementarHuevos(){
    this.alimentos[10].cantidad--;
	this.notify();
  }

  decrementarLeche(){
    this.alimentos[11].cantidad--;
	this.notify();
  }

  decrementarMantequilla(){
    this.alimentos[12].cantidad--;
	this.notify();
  }

  decrementarManzana(){
    this.alimentos[13].cantidad--;
	this.notify();
  }

  decrementarMelon(){
    this.alimentos[14].cantidad--;
	this.notify();
  }

  decrementarPatatasCongeladas(){
    this.alimentos[15].cantidad--;
	this.notify();
  }

  decrementarPepino(){
    this.alimentos[16].cantidad--;
	this.notify();
  }

  decrementarPera(){
    this.alimentos[17].cantidad--;
	this.notify();
  }

  decrementarPescado(){
    this.alimentos[18].cantidad--;
	this.notify();
  }

  decrementarPescadoCongelado(){
    this.alimentos[19].cantidad--;
	this.notify();
  }

  decrementarPimiento(){
    this.alimentos[20].cantidad--;
	this.notify();
  }

  decrementarPizzaCongelada(){
    this.alimentos[21].cantidad--;
	this.notify();
  }

  decrementarPlatano(){
    this.alimentos[22].cantidad--;
	this.notify();
  }

  decrementarPollo(){
    this.alimentos[23].cantidad--;
	this.notify();
  }

  decrementarQueso(){
    this.alimentos[24].cantidad--;
	this.notify();
  }

  decrementarSalchicha(){
    this.alimentos[25].cantidad--;
	this.notify();
  }

  decrementarSalsaDeTomate(){
    this.alimentos[26].cantidad--;
	this.notify();
  }

  decrementarSprite(){
    this.alimentos[27].cantidad--;
	this.notify();
  }

  decrementarTarta(){
    this.alimentos[28].cantidad--;
	this.notify();
  }

  decrementarVerdurasCongeladas(){
    this.alimentos[29].cantidad--;
	this.notify();
  }

  decrementarYogurt(){
    this.alimentos[30].cantidad--;
	this.notify();
  }

  decrementarZanahoria(){
    this.alimentos[31].cantidad--;
	this.notify();
  }

  decrementarZumo(){
    this.alimentos[32].cantidad--;
	this.notify();
  }
}
