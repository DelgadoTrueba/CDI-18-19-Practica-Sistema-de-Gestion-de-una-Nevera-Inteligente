import { Component, OnInit, HostListener } from '@angular/core';
//objeto con la información de los alimentos//
import { AlimentosLeftSide } from 'src/app/model/alimentos/alimentosLeftSide';

@Component({
  selector: 'app-lateral-izq',
  templateUrl: './lateral-izq.component.html',
  styleUrls: ['./lateral-izq.component.css']
})
export class LateralIzqComponent implements OnInit {

  alimentos = AlimentosLeftSide;

  width:number;
  height:number;

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

  mapCoorABCD: string;
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
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.95) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

    this.calcularMapArea();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.80): (window.innerHeight*0.76);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.95) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

    this.calcularMapArea();
  }

  calcularMapArea(){
    this.calcular1_primera();
    this.calcular4_ultima();

  }

  calcular1_primera(){
    this.mapArea.A.x = this.height*(0.33);
    this.mapArea.A.y = 0;

    this.mapArea.B.x = 0;
    this.mapArea.B.y = 0;

    this.mapArea.C.x = 0;
    this.mapArea.C.y = this.width;

    this.mapArea.D.x = this.height*(0.33) ;
    this.mapArea.D.y = this.width ;

    this.mapCoorABCD = this.toStringCoor(this.mapArea.A, this.mapArea.B, this.mapArea.C, this.mapArea.D);
  }

  
  calcular4_ultima(){
    this.mapArea.M.x = this.height*(0.84);
    this.mapArea.M.y = 0;

    this.mapArea.N.x = this.height*(0.61);
    this.mapArea.N.y = 0;

    this.mapArea.O.x = this.height*(0.61);
    this.mapArea.O.y = this.width;

    this.mapArea.P.x = this.height*(0.84);
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
