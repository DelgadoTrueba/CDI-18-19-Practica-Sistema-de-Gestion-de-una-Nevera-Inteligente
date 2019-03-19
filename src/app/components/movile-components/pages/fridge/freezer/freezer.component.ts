import { Component, OnInit, HostListener } from '@angular/core';
import { AlimentosFreezer } from 'src/app/model/alimentos/alimentosFreezer';

@Component({
  selector: 'app-freezer',
  templateUrl: './freezer.component.html',
  styleUrls: ['./freezer.component.css']
})
export class FreezerComponent implements OnInit {

  alimentos = AlimentosFreezer;

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
  };

  mapCoorABCD: string;
  mapCoorEFGH: string;
  mapCoorIJKL: string;

  constructor(
  ) { 
    this.width= 0; 
    this.height = 0;
  }

  ngOnInit() {
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.80): (window.innerHeight*0.76);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.9) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

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
    this.calcular3_ultima();

  }

  calcular1_primera(){
    this.mapArea.A.x = this.height*(0.3);
    this.mapArea.A.y = 0;

    this.mapArea.B.x = 0;
    this.mapArea.B.y = 0;

    this.mapArea.C.x = 0;
    this.mapArea.C.y = this.width;

    this.mapArea.D.x = this.height*(0.3) ;
    this.mapArea.D.y = this.width ;

    this.mapCoorABCD = this.toStringCoor(this.mapArea.A, this.mapArea.B, this.mapArea.C, this.mapArea.D);
  }

  calcular2(){
    this.mapArea.E.x = this.height*(0.58);
    this.mapArea.E.y = 0;

    this.mapArea.F.x = this.height*(0.3);
    this.mapArea.F.y = 0;

    this.mapArea.G.x = this.height*(0.3);
    this.mapArea.G.y = this.width;

    this.mapArea.H.x = this.height*(0.58);
    this.mapArea.H.y = this.width ;

    this.mapCoorEFGH = this.toStringCoor(this.mapArea.E, this.mapArea.F, this.mapArea.G, this.mapArea.H);
  }

  calcular3_ultima(){
    this.mapArea.I.x = this.height*(0.90);
    this.mapArea.I.y = 0;

    this.mapArea.J.x = this.height*(0.58);
    this.mapArea.J.y = 0;

    this.mapArea.K.x = this.height*(0.58);
    this.mapArea.K.y = this.width;

    this.mapArea.L.x = this.height*(0.90);
    this.mapArea.L.y = this.width ;

    this.mapCoorIJKL = this.toStringCoor(this.mapArea.I, this.mapArea.J, this.mapArea.K, this.mapArea.L);
  }

  //A largo(X) B ancho(y)
  toStringCoor(ptoA, ptoB, ptoC, ptoD){
    
    return +parseInt(ptoA.y , 10) +","+ parseInt(ptoA.x, 10) +
      " "+ parseInt(ptoB.y, 10) +","+ parseInt(ptoB.x, 10) +
      " "+ parseInt(ptoC.y, 10) +","+ parseInt(ptoC.x, 10) +
      " "+ parseInt(ptoD.y, 10) +","+ parseInt(ptoD.x, 10);
  }

}
