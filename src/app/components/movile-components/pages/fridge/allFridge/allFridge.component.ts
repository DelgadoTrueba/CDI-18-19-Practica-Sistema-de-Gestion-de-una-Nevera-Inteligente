import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//objeto con la información de los alimentos//
import { Alimentos } from 'src/app/model/alimentos/alimentos';

@Component({
  selector: 'app-allFridge',
  templateUrl: './allFridge.component.html',
  styleUrls: ['./allFridge.component.css']
})
export class AllFridgeComponent implements OnInit {

  alimentos = Alimentos;

  width:number;
  height:number;

  top: number;
  left: number;

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

  mapCoorIZQ1: string;
  mapCoorIZQ2: string;
  mapCoorIZQ3: string;
  mapCoorIZQ4: string;
  mapCoorIZQ5: string;

  mapCoorDER1: string;
  mapCoorDER2: string;
  mapCoorDER3: string;
  mapCoorDER4: string;
  mapCoorDER5: string;

  mapCoorCD: string;

  mapCoorGH: string;
  mapCoorIJ: string;
  mapCoorKL: string;

  lateral: string;

  constructor(
    private router: Router, private r:ActivatedRoute
  ) { 
    this.width= 0; 
    this.height = 0;

    this.top= 0; 
    this.left = 0;
  }

  ngOnInit() {
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.80): (window.innerHeight*0.76);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );
    
    this.top = (window.innerHeight*0.0125);
    this.left = (window.innerWidth/2) - (this.width/2);
    
    this.recalculateImagenes();
    this.calcularMapArea();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.80): (window.innerHeight*0.76);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );
    this.top = (window.innerHeight*0.0125);
    this.left = (window.innerWidth/2) - (this.width/2);

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
/*
    this.mapArea.A.x = 0;
    this.mapArea.A.y = 0;

    this.mapArea.B.x = this.height*0.57;
    this.mapArea.B.y = this.width*0.27;
    */
   let Ax, Ay, Bx, By, Cx, Cy, Dx, Dy, Ex, Ey, Fx, Fy,
      Gx, Gy, Hx, Hy, Ix, Iy, Jx, Jy;

    Ax = 0;
    Ay = 0;
    Bx = this.height*0.17;
    By = this.width*0.27;

    this.mapCoorIZQ1 = this.toStringCoor2(Ax, Ay, Bx, By);

    Cx = this.height*0.18;
    Cy = 0;
    Dx = this.height*0.21;
    Dy = this.width*0.27;

    this.mapCoorIZQ2 = this.toStringCoor2(Cx, Cy, Dx, Dy);

    Ex = this.height*0.22;
    Ey = 0;
    Fx = this.height*0.46;
    Fy = this.width*0.27;

    this.mapCoorIZQ3 = this.toStringCoor2(Ex, Ey, Fx, Fy);

    Gx = this.height*0.47;
    Gy = 0;
    Hx = this.height*0.50;
    Hy = this.width*0.27;

    this.mapCoorIZQ4 = this.toStringCoor2(Gx, Gy, Hx, Hy);

    Ix = this.height*0.48;
    Iy = 0;
    Jx = this.height*0.58;
    Jy = this.width*0.27;

    this.mapCoorIZQ5 = this.toStringCoor2(Ix, Iy, Jx, Jy);
  }

  toStringCoor2(Ax, Ay, Bx, By){
    return parseInt(Ay , 10) +","+ parseInt(Ax, 10) +" "+ parseInt(By, 10) +","+ parseInt(Bx, 10);

  }

  calcularNeveraCentral(){
    this.mapArea.C.x = 0;
    this.mapArea.C.y = this.width*0.31;

    this.mapArea.D.x = this.height*0.57;
    this.mapArea.D.y = this.width-(this.width*0.31);

    this.mapCoorCD = this.toStringCoor(this.mapArea.C, this.mapArea.D);
  }

  calcularDerechaArriba(){
    /*
    this.mapArea.E.x = 0;
    this.mapArea.E.y = this.width-(this.width*0.27);

    this.mapArea.F.x = this.height*0.57;
    this.mapArea.F.y = this.width;

    this.mapCoorEF = this.toStringCoor(this.mapArea.E, this.mapArea.F);*/
    let Ax, Ay, Bx, By, Cx, Cy, Dx, Dy, Ex, Ey, Fx, Fy,
      Gx, Gy, Hx, Hy, Ix, Iy, Jx, Jy;

    let anchoInicial = this.width-(this.width*0.27);

    Ax = 0;
    Ay = anchoInicial
    Bx = this.height*0.17;
    By = this.width

    this.mapCoorDER1 = this.toStringCoor2(Ax, Ay, Bx, By);

    Cx = this.height*0.18;
    Cy = anchoInicial;
    Dx = this.height*0.21;
    Dy = this.width;

    this.mapCoorDER2 = this.toStringCoor2(Cx, Cy, Dx, Dy);

    Ex = this.height*0.22;
    Ey = anchoInicial;
    Fx = this.height*0.46;
    Fy = this.width;

    this.mapCoorDER3 = this.toStringCoor2(Ex, Ey, Fx, Fy);

    Gx = this.height*0.47;
    Gy = anchoInicial;
    Hx = this.height*0.50;
    Hy = this.width;

    this.mapCoorDER4 = this.toStringCoor2(Gx, Gy, Hx, Hy);

    Ix = this.height*0.48;
    Iy = anchoInicial;
    Jx = this.height*0.58;
    Jy = this.width;

    this.mapCoorDER5 = this.toStringCoor2(Ix, Iy, Jx, Jy);
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
    if(!this.abiertoArriba ) this.abiertoArriba = true;
    else this.router.navigate(["../main"], { relativeTo: this.r });
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
    if(!this.abiertoAbajo ) this.abiertoAbajo = true;
    else this.router.navigate(["../freezer"], { relativeTo: this.r });
  }

  lowerRight(){
    console.log("higlowerRighthtRight");
    this.abiertoAbajo = false;
  }

  lateralIzq(){
    console.log("lateralIzq");
    this.router.navigate(["../leftSide"], { relativeTo: this.r });
  }

  lateralDer(){
    console.log("lateralDer")
    this.router.navigate(["../rightSide"], { relativeTo: this.r });
  }

  recalculateImagenes(){
    //console.log(this.alimentos);

    this.alimentos.forEach( (alimento) => {
      if( alimento.empty === true){
        alimento.nombreRuta += "-cruz";
        alimento.empty = false;
      } 
      else{
        let separador = alimento.nombreRuta.indexOf("-");
        if(separador !== -1){
          alimento.nombreRuta = alimento.nombreRuta.substr(0, separador);
        }
        alimento.empty = true;
      } 
    });

   //console.log(this.alimentos);
  }

}
