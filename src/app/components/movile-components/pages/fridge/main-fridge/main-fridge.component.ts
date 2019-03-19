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

  mapCoorManzana: string;

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
    this.calcularManzana();

  }

  calcularManzana(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.11 ); coord1y = Math.round( this.height * 0.58 ); coord2x = Math.round( this.width * 0.23 ); coord2y = Math.round( this.height * 0.76 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorManzana = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');

  }

  //A largo(X) B ancho(y)
  toStringCoor(ptoA, ptoB, ptoC, ptoD){
    
    return +parseInt(ptoA.y , 10) +","+ parseInt(ptoA.x, 10) +
      " "+ parseInt(ptoB.y, 10) +","+ parseInt(ptoB.x, 10) +
      " "+ parseInt(ptoC.y, 10) +","+ parseInt(ptoC.x, 10) +
      " "+ parseInt(ptoD.y, 10) +","+ parseInt(ptoD.x, 10);
  }
}
