import { Component, OnInit, HostListener } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  width:number;
  height:number;

  abiertoArriba: boolean = false;
  abiertoAbajo: boolean = false;

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
    L: {x: 0, y: 0}
  };

  mapCoorAB: string;
  mapCoorCD: string;
  mapCoorEF: string;
  mapCoorGH: string;
  mapCoorIJ: string;
  mapCoorKL: string;

  constructor() { 
    this.width= 0; 
    this.height = 0;
  }

  ngOnInit() {
    this.height = (window.innerHeight*0.85)*(3/4);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth)*0.78 : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

    this.calcularMapArea();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = (window.innerHeight*0.85)*(3/4);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth)*0.78 : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

    this.calcularMapArea();
  }

  calcularMapArea(){
    this.calcularIzquierdaArriba();
    this.calcularNeveraCentral();
    this.calcularDerechaArriba();
  
    this.calcularIzquierdaAbajo();
    this.calcularCongelador();
    this.calcularDerechaAbajo();
  }

  calcularIzquierdaArriba(){
    this.mapArea.A.x = 0;
    this.mapArea.A.y = 0;

    this.mapArea.B.x = this.height*0.57;
    this.mapArea.B.y = this.width*0.27;

    this.mapCoorAB = this.toStringCoor(this.mapArea.A, this.mapArea.B);
  }

  calcularNeveraCentral(){
    this.mapArea.C.x = 0;
    this.mapArea.C.y = this.width*0.31;

    this.mapArea.D.x = this.height*0.57;
    this.mapArea.D.y = this.width-(this.width*0.31);

    this.mapCoorCD = this.toStringCoor(this.mapArea.C, this.mapArea.D);
  }

  calcularDerechaArriba(){
    this.mapArea.E.x = 0;
    this.mapArea.E.y = this.width-(this.width*0.27);

    this.mapArea.F.x = this.height*0.57;
    this.mapArea.F.y = this.width;

    this.mapCoorEF = this.toStringCoor(this.mapArea.E, this.mapArea.F);
  }

  calcularIzquierdaAbajo(){
    this.mapArea.G.x = this.height*0.61;
    this.mapArea.G.y = 0;

    this.mapArea.H.x = this.height;
    this.mapArea.H.y = this.width*0.27;

    this.mapCoorGH = this.toStringCoor(this.mapArea.G, this.mapArea.H);
  }

  calcularCongelador(){
    this.mapArea.I.x = this.height*0.61;
    this.mapArea.I.y = this.width*0.31;

    this.mapArea.J.x = this.height;
    this.mapArea.J.y = this.width-(this.width*0.31);

    this.mapCoorIJ = this.toStringCoor(this.mapArea.I, this.mapArea.J);
  }

  calcularDerechaAbajo(){
    this.mapArea.K.x = this.height*0.61;
    this.mapArea.K.y = this.width-(this.width*0.27);

    this.mapArea.L.x = this.height;
    this.mapArea.L.y = this.width;

    this.mapCoorKL = this.toStringCoor(this.mapArea.K, this.mapArea.L);
  }

  toStringCoor(ptoA, ptoB){
    return parseInt(ptoA.y , 10) +","+ parseInt(ptoA.x, 10) +" "+ parseInt(ptoB.y, 10) +","+ parseInt(ptoB.x, 10);
  }

  hightLeft(){
    console.log("hightLeft");
    this.abiertoArriba = false;
  }

  main(){
    console.log("main");
    this.abiertoArriba = true;
  }

  hightRight(){
    console.log("hightRight");
    this.abiertoArriba = false;
  }

  lowerLeft(){
    console.log("lowerLeft");
    this.abiertoAbajo = false;
  }

  freezer(){
    console.log("freezer");
    this.abiertoAbajo = true;
  }

  lowerRight(){
    console.log("higlowerRighthtRight");
    this.abiertoAbajo = false;
  }

}
