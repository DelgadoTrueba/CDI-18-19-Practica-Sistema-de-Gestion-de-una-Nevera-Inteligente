import { Component, OnInit, HostListener } from '@angular/core';

import { Alimentos } from 'src/app/model/all-fridge-alimentos/alimentos';

@Component({
  selector: 'app-main-fridge',
  templateUrl: './main-fridge.component.html',
  styleUrls: ['./main-fridge.component.css']
})
export class MainFridgeComponent implements OnInit {

  alimentos;

  width:number;
  height:number;
  top:number;
  left:number;

  mapArea: any = {
    A: {x: 0, y: 0},
    B: {x: 0, y: 0},
    C: {x: 0, y: 0},
    D: {x: 0, y: 0},
    
    E: {x: 0, y: 0},
    F: {x: 0, y: 0},
    G: {x: 0, y: 0},
    H: {x: 0, y: 0},

    I: {x: 0, y: 0},
    J: {x: 0, y: 0},
    K: {x: 0, y: 0},
    L: {x: 0, y: 0},

    M: {x: 0, y: 0},
    N: {x: 0, y: 0},
    O: {x: 0, y: 0},
    P: {x: 0, y: 0}
  };

  mapCoorManzana: string;
  mapCoorEFGH: string;
  mapCoorIJKL: string;
  mapCoorMNOP: string;

  constructor(
  ) { 
    this.width= 0; 
    this.height = 0;
  }

  ngOnInit() {
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.80): (window.innerHeight*0.76);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.9) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );
    this.alimentos = Alimentos.filter( (alimento) => {
      return false;
      //alimento.nombreId ¿Corresponde a los ID que me interesa?
    } );
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
    this.calcular1_primera();
    this.calcular2();
    this.calcular3();
    this.calcular4_ultima();


  }

  calcular1_primera(){
    let coord1x, coord1y, coord2x;

    coord1x = Math.round( this.width * 0.12 ); coord1y = Math.round( this.height * 0.21 ); coord2x = Math.round( this.width * 0.08 ); 

    let mapCoord = [ coord1x, coord1y, coord2x];

    this.mapCoorManzana = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act}`;else  return v_ant += `,${v_act}`;}, '');
    console.log("manzana",this.mapCoorManzana)
  }

  calcular2(){
    this.mapArea.E.x = this.height*(0.55);
    this.mapArea.E.y = 0;

    this.mapArea.F.x = this.height*(0.31);
    this.mapArea.F.y = 0;

    this.mapArea.G.x = this.height*(0.31);
    this.mapArea.G.y = this.width;

    this.mapArea.H.x = this.height*(0.55);
    this.mapArea.H.y = this.width ;

    this.mapCoorEFGH = this.toStringCoor(this.mapArea.E, this.mapArea.F, this.mapArea.G, this.mapArea.H);
  }

  calcular3(){
    this.mapArea.I.x = this.height*(0.77);
    this.mapArea.I.y = 0;

    this.mapArea.J.x = this.height*(0.55);
    this.mapArea.J.y = 0;

    this.mapArea.K.x = this.height*(0.55);
    this.mapArea.K.y = this.width;

    this.mapArea.L.x = this.height*(0.77);
    this.mapArea.L.y = this.width ;

    this.mapCoorIJKL = this.toStringCoor(this.mapArea.I, this.mapArea.J, this.mapArea.K, this.mapArea.L);
  }

  calcular4_ultima(){
    this.mapArea.M.x = this.height;
    this.mapArea.M.y = 0;

    this.mapArea.N.x = this.height*(0.77);
    this.mapArea.N.y = 0;

    this.mapArea.O.x = this.height*(0.77);
    this.mapArea.O.y = this.width;

    this.mapArea.P.x = this.height;
    this.mapArea.P.y = this.width ;

    this.mapCoorMNOP = this.toStringCoor(this.mapArea.M, this.mapArea.N, this.mapArea.O, this.mapArea.P);
  }

  //A largo(X) B ancho(y)
  toStringCoor(ptoA, ptoB, ptoC, ptoD){
    
    return +parseInt(ptoA.y , 10) +","+ parseInt(ptoA.x, 10) +
      " "+ parseInt(ptoB.y, 10) +","+ parseInt(ptoB.x, 10) +
      " "+ parseInt(ptoC.y, 10) +","+ parseInt(ptoC.x, 10) +
      " "+ parseInt(ptoD.y, 10) +","+ parseInt(ptoD.x, 10);
  }
}
