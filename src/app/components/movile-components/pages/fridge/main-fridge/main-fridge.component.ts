import { Component, OnInit, HostListener } from '@angular/core';

//objeto con la información de los alimentos//
import { AlimentosMainFridge } from 'src/app/model/alimentos/alimentosMainFridge';

@Component({
  selector: 'app-main-fridge',
  templateUrl: './main-fridge.component.html',
  styleUrls: ['./main-fridge.component.css']
})
export class MainFridgeComponent implements OnInit {

  alimentos = AlimentosMainFridge;

  width:number;
  height:number;
  top:number;
  left:number;

  mapCoorPescado: string;
  mapCoorCarne: string;
  mapCoorSalchicha: string;
  mapCoorPollo: string;
  mapCoorHuevos: string;
  mapCoorZanahoria: string;
  mapCoorPimiento: string;
  mapCoorPepino: string;
  mapCoorColiflor: string;
  mapCoorBroccoli: string;
  mapCoorCherry: string;
  mapCoorManzana: string;
  mapCoorPlatano: string;
  mapCoorMelon: string;
  mapCoorPera: string;


  constructor(
  ) { 
    this.width= 0; 
    this.height = 0;
  }

  ngOnInit() {
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.80): (window.innerHeight*0.76);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.9) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );
    //this.alimentos = Alimentos.filter( (alimento) => {
      //return false;
      //alimento.nombreId ¿Corresponde a los ID que me interesa?
      // myfiltro.comprobar(nombreId): boolean
    //} );
    this.calcularMapArea();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.80): (window.innerHeight*0.76);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.9) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

    this.calcularMapArea();
  }

  calcularMapArea(){
    this.calcularPescado();
    this.calcularCarne();
    this.calcularSalchicha();
    this.calcularPollo();
    this.calcularHuevos();
    this.calcularZanahoria();
    this.calcularPimiento();
    this.calcularPepino();
    this.calcularColiflor();
    this.calcularBroccoli();
    this.calcularCherry();
    this.calcularManzana();
    this.calcularPlatano();
    this.calcularMelon();
    this.calcularPera();
  }

  calcularPescado(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.79 ); coord1y = Math.round( this.height * 0.14 ); coord2x = Math.round( this.width * 0.97 ); coord2y = Math.round( this.height * 0.29 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPescado = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularCarne(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.6 ); coord1y = Math.round( this.height * 0.16 ); coord2x = Math.round( this.width * 0.78 ); coord2y = Math.round( this.height * 0.29 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorCarne = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularSalchicha(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.44 ); coord1y = Math.round( this.height * 0.16 ); coord2x = Math.round( this.width * 0.59 ); coord2y = Math.round( this.height * 0.29 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorSalchicha = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularPollo(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.23 ); coord1y = Math.round( this.height * 0.15 ); coord2x = Math.round( this.width * 0.43 ); coord2y = Math.round( this.height * 0.29 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPollo = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularHuevos(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.03 ); coord1y = Math.round( this.height * 0.17 ); coord2x = Math.round( this.width * 0.21 ); coord2y = Math.round( this.height * 0.29 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorHuevos = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularZanahoria(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.82 ); coord1y = Math.round( this.height * 0.38 ); coord2x = Math.round( this.width * 0.97 ); coord2y = Math.round( this.height * 0.53 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorZanahoria = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularPimiento(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.65 ); coord1y = Math.round( this.height * 0.39 ); coord2x = Math.round( this.width * 0.8 ); coord2y = Math.round( this.height * 0.53 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPimiento = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularPepino(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.45 ); coord1y = Math.round( this.height * 0.38 ); coord2x = Math.round( this.width * 0.63 ); coord2y = Math.round( this.height * 0.53 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPepino = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularColiflor(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.25 ); coord1y = Math.round( this.height * 0.38 ); coord2x = Math.round( this.width * 0.43 ); coord2y = Math.round( this.height * 0.55 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorColiflor = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularBroccoli(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.04 ); coord1y = Math.round( this.height * 0.38 ); coord2x = Math.round( this.width * 0.23 ); coord2y = Math.round( this.height * 0.54 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorBroccoli = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularCherry(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.83 ); coord1y = Math.round( this.height * 0.63 ); coord2x = Math.round( this.width * 0.96 ); coord2y = Math.round( this.height * 0.76 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorCherry = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularManzana(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.64 ); coord1y = Math.round( this.height * 0.62 ); coord2x = Math.round( this.width * 0.81 ); coord2y = Math.round( this.height * 0.76 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorManzana = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularPlatano(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.45 ); coord1y = Math.round( this.height * 0.61 ); coord2x = Math.round( this.width * 0.61 ); coord2y = Math.round( this.height * 0.76 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPlatano = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularMelon(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.25 ); coord1y = Math.round( this.height * 0.59 ); coord2x = Math.round( this.width * 0.43 ); coord2y = Math.round( this.height * 0.76 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorMelon = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularPera(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.06 ); coord1y = Math.round( this.height * 0.58 ); coord2x = Math.round( this.width * 0.22 ); coord2y = Math.round( this.height * 0.76 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorPera = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  

  //A largo(X) B ancho(y)
  toStringCoor(ptoA, ptoB, ptoC, ptoD){
    
    return +parseInt(ptoA.y , 10) +","+ parseInt(ptoA.x, 10) +
      " "+ parseInt(ptoB.y, 10) +","+ parseInt(ptoB.x, 10) +
      " "+ parseInt(ptoC.y, 10) +","+ parseInt(ptoC.x, 10) +
      " "+ parseInt(ptoD.y, 10) +","+ parseInt(ptoD.x, 10);
  }
}
