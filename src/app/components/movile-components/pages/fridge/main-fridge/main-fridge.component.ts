import { Component, OnInit, HostListener } from '@angular/core';

//objeto con la información de los alimentos//
import { alimentosMainFridge } from 'src/app/model/alimentos/alimentos';

@Component({
  selector: 'app-main-fridge',
  templateUrl: './main-fridge.component.html',
  styleUrls: ['./main-fridge.component.css']
})
export class MainFridgeComponent implements OnInit {

  alimentos = alimentosMainFridge();

  width:number;
  height:number;
  top:number;
  left:number;

  isOpen: boolean = false;

  mapCoorPescado: string;
  mapCoorCajon: string;

  constructor(
  ) { 
    this.width= 0; 
    this.height = 0;
  }

  ngOnInit() {
    console.log(this.alimentos);

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

    this.calcularCajon();

  }

  calcularPescado(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.77 ); coord1y = Math.round( this.height * 0.13 ); coord2x = Math.round( this.width * 0.97 ); coord2y = Math.round( this.height * 0.29 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPescado = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');

  }

  calcularCajon(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.03 ); coord1y = Math.round( this.height * 0.77 ); coord2x = Math.round( this.width * 0.97 ); coord2y = Math.round( this.height * 0.99 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorCajon = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');

  }

  abrirCajon(){
    this.isOpen = !this.isOpen;
  }

  //A largo(X) B ancho(y)
  toStringCoor(ptoA, ptoB, ptoC, ptoD){
    
    return +parseInt(ptoA.y , 10) +","+ parseInt(ptoA.x, 10) +
      " "+ parseInt(ptoB.y, 10) +","+ parseInt(ptoB.x, 10) +
      " "+ parseInt(ptoC.y, 10) +","+ parseInt(ptoC.x, 10) +
      " "+ parseInt(ptoD.y, 10) +","+ parseInt(ptoD.x, 10);
  }
}
