import { Injectable } from '@angular/core';

import { AlimentosService } from './alimentos.service';
import { alimentos } from '../model/alimentos/alimentos';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private alimentosService: AlimentosService) { 
  }

  RecetaMacedonia(){
    let disponible = false;
    if(this.alimentosService.getManzana().cantidad > 0){
      if (this.alimentosService.getMelon().cantidad > 0){
        if (this.alimentosService.getPlatano().cantidad > 0){
          disponible = true;
        }
      }
    }
    return disponible;
  }

  RecetaSalchipapas(){
    let disponible = false;
    if(this.alimentosService.getSalchicha().cantidad > 0){
      if(this.alimentosService.getPatatasCongeladas().cantidad > 0){
        if(this.alimentosService.getSalsaDeTomate().cantidad > 0){
          disponible = true;
        }
      }
    }
    return disponible;
  }

  RecetaPescadoPisto(){
    let disponible = false;
    if((this.alimentosService.getPescado().cantidad > 0) || (this.alimentosService.getPescadoDescongelado().cantidad > 0)){
      if(this.alimentosService.getVerdurasCongeladas().cantidad > 0){
        disponible = true;
      }
    }
    return disponible;
  }

  
}
