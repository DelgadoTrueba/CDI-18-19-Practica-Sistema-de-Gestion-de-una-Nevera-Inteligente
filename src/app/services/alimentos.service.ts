import { Injectable } from '@angular/core';

/*Archivo de los alimentos*/
import { alimentos as alimentosFile } from '../model/alimentos/alimentos';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  alimentos = alimentosFile;

  constructor() { }

  isContent(id: string, ids:Array<any>){
    for(let i=0; i<ids.length; i++){
        if(ids[i] === id){
            return true;
        }
    }
    return false;
  }

  alimentosMainFridge(){
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
    return this.alimentos.filter( element => this.isContent(element.id, ids) );
}

  alimentosAllFridge(){
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
    return this.alimentos.filter( element => this.isContent(element.id, ids) );
}

  alimentosLateralIzq(){
    let ids = [
        "agua",
        "leche",
        "mantequilla",
        "salsaDeTomate",
        ]
    return this.alimentos.filter( element => this.isContent(element.id, ids) );
}

  alimentosLateralDer(){
    let ids = [
        "cocaCola",
        "fanta",
        "queso",
        "sprite",
        "yogurt",
        "zumo"
        ]
    return this.alimentos.filter( element => this.isContent(element.id, ids) );
}

  alimentosFreezer(){
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
    return this.alimentos.filter( element => this.isContent(element.id, ids) );
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
 }

 setBroccoli(cantidad){
    this.alimentos[1].cantidad = cantidad;
 }

 setCarne(cantidad){
    this.alimentos[2].cantidad = cantidad;
 }

 setCarneCongelada(cantidad){
    this.alimentos[3].cantidad = cantidad;
 }

 setCereza(cantidad){
    this.alimentos[4].cantidad = cantidad;
 }

 setChurros(cantidad){
    this.alimentos[5].cantidad = cantidad;
 }

 setCocaCola(cantidad){
    this.alimentos[6].cantidad = cantidad;
 }

 setColiflor(cantidad){
    this.alimentos[7].cantidad = cantidad;
 }

 setFanta(cantidad){
    this.alimentos[8].cantidad = cantidad;
 }

 setHelado(cantidad){
    this.alimentos[9].cantidad = cantidad;
 }

 setHuevos(cantidad){
    this.alimentos[10].cantidad = cantidad;
 }

 setLeche(cantidad){
    this.alimentos[11].cantidad = cantidad;
 }

 setMantequilla(cantidad){
    this.alimentos[12].cantidad = cantidad;
 }

 setManzana(cantidad){
    this.alimentos[13].cantidad = cantidad;
 }

 setMelon(cantidad){
    this.alimentos[14].cantidad = cantidad;
 }

 setPatatasCongeladas(cantidad){
    this.alimentos[15].cantidad = cantidad;
 }

 setPepino(cantidad){
    this.alimentos[16].cantidad = cantidad;
 }

 setPera(cantidad){
    this.alimentos[17].cantidad = cantidad;
 }

 setPescado(cantidad){
    this.alimentos[18].cantidad = cantidad;
 }

 setPescadoCongelado(cantidad){
    this.alimentos[19].cantidad = cantidad;
 }

 setPimiento(cantidad){
    this.alimentos[20].cantidad = cantidad;
 }

 setPizzaCongelada(cantidad){
    this.alimentos[21].cantidad = cantidad;
 }

 setPlatano(cantidad){
    this.alimentos[22].cantidad = cantidad;
 }

 setPollo(cantidad){
    this.alimentos[23].cantidad = cantidad;
 }

 setQueso(cantidad){
    this.alimentos[24].cantidad = cantidad;
 }

 setSalchicha(cantidad){
    this.alimentos[25].cantidad = cantidad;
 }

 setSalsaDeTomate(cantidad){
    this.alimentos[26].cantidad = cantidad;
 }

 setSprite(cantidad){
    this.alimentos[27].cantidad = cantidad;
 }

 setTarta(cantidad){
    this.alimentos[28].cantidad = cantidad;
 }

 setVerdurasCongeladas(cantidad){
    this.alimentos[29].cantidad = cantidad;
 }

 setYogurt(cantidad){
    this.alimentos[30].cantidad = cantidad;
 }

 setZanahoria(cantidad){
    this.alimentos[31].cantidad = cantidad;
 }

 setZumo(cantidad){
    this.alimentos[32].cantidad = cantidad;
 }

 /*decrementar*/
 decrementarAgua(){
  this.alimentos[0].cantidad--;
  }

  decrementarBroccoli(){
    this.alimentos[1].cantidad--;
  }

  decrementarCarne(){
    this.alimentos[2].cantidad--;
  }

  decrementarCarneCongelada(){
    this.alimentos[3].cantidad--;
  }

  decrementarCereza(){
    this.alimentos[4].cantidad--;
  }

  decrementarChurros(){
    this.alimentos[5].cantidad--;
  }

  decrementarCocaCola(){
    this.alimentos[6].cantidad--;
  }

  decrementarColiflor(){
    this.alimentos[7].cantidad--;
  }

  decrementarFanta(){
    this.alimentos[8].cantidad--;
  }

  decrementarHelado(){
    this.alimentos[9].cantidad--;
  }

  decrementarHuevos(){
    this.alimentos[10].cantidad--;
  }

  decrementarLeche(){
    this.alimentos[11].cantidad--;
  }

  decrementarMantequilla(){
    this.alimentos[12].cantidad--;
  }

  decrementarManzana(){
    this.alimentos[13].cantidad--;
  }

  decrementarMelon(){
    this.alimentos[14].cantidad--;
  }

  decrementarPatatasCongeladas(){
    this.alimentos[15].cantidad--;
  }

  decrementarPepino(){
    this.alimentos[16].cantidad--;
  }

  decrementarPera(){
    this.alimentos[17].cantidad--;
  }

  decrementarPescado(){
    this.alimentos[18].cantidad--;
  }

  decrementarPescadoCongelado(){
    this.alimentos[19].cantidad--;
  }

  decrementarPimiento(){
    this.alimentos[20].cantidad--;
  }

  decrementarPizzaCongelada(){
    this.alimentos[21].cantidad--;
  }

  decrementarPlatano(){
    this.alimentos[22].cantidad--;
  }

  decrementarPollo(){
    this.alimentos[23].cantidad--;
  }

  decrementarQueso(){
    this.alimentos[24].cantidad--;
  }

  decrementarSalchicha(){
    this.alimentos[25].cantidad--;
  }

  decrementarSalsaDeTomate(){
    this.alimentos[26].cantidad--;
  }

  decrementarSprite(){
    this.alimentos[27].cantidad--;
  }

  decrementarTarta(){
    this.alimentos[28].cantidad--;
  }

  decrementarVerdurasCongeladas(){
    this.alimentos[29].cantidad--;
  }

  decrementarYogurt(){
    this.alimentos[30].cantidad--;
  }

  decrementarZanahoria(){
    this.alimentos[31].cantidad--;
  }

  decrementarZumo(){
    this.alimentos[32].cantidad--;
  }

}
