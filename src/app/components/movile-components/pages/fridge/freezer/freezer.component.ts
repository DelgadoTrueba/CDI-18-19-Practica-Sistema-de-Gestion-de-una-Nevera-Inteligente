import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
//objeto con la información de los alimentos//
import { AlimentosService } from 'src/app/services/alimentos.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogInfoAlimentoComponent } from '../dialog-info-alimento/dialog-info-alimento.component';

@Component({
  selector: 'app-freezer',
  templateUrl: './freezer.component.html',
  styleUrls: ['./freezer.component.css']
})
export class FreezerComponent implements OnInit, OnDestroy {

  //inicializarla
  alimentos;
  subscribeServiceAlimentos;

  width:number;
  height:number;

  arrayCajonIsOpen = [false, false, false]

  mapCoorHelado: string;
  mapCoorChurro: string;
  mapCoorTarta: string;
  mapCoorPizza: string;
  mapCoorPatata: string;
  mapCoorVerduras: string;
  mapCoorPescado: string;
  mapCoorCarne: string;

  constructor(
    private alimentosService: AlimentosService,
    private dialog: MatDialog
  ) { 
    this.width= 0; 
    this.height = 0;
  }

  ngOnInit() {
    this.subscribeServiceAlimentos = this.alimentosService.notification$.subscribe(
      (alimentos) => {
        let filterFunction = this.alimentosService.alimentosFreezerFilter;
        this.alimentos = alimentos.filter( (item) => filterFunction(item) );
        console.log(this.alimentos);
      }
    );
    
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.75): (window.innerHeight*0.76);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.9) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

    this.calcularMapArea();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.75): (window.innerHeight*0.76);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.9) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

    this.calcularMapArea();
  }

  ngOnDestroy() {
    this.subscribeServiceAlimentos.unsubscribe();
  }

  calcularMapArea(){
    this.calcularHelado();
    this.calcularChurro();
    this.calcularTarta();
    this.calcularPizza();
    this.calcularPatata();
    this.calcularVerduras();
    this.calcularPescado();
    this.calcularCarne();
  }

  calcularHelado(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.11 ); coord1y = Math.round( this.height * 0.11 ); coord2x = Math.round( this.width * 0.27 ); coord2y = Math.round( this.height * 0.28 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorHelado = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  calcularChurro(){
 let coord1x, coord1y, coord2x, coord2y;

  coord1x = Math.round( this.width * 0.4 ); coord1y = Math.round( this.height * 0.06 ); coord2x = Math.round( this.width * 0.55 ); coord2y = Math.round( this.height * 0.29 ); 

  let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

  this.mapCoorChurro = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  calcularTarta(){
  let coord1x, coord1y, coord2x, coord2y;

  coord1x = Math.round( this.width * 0.68 ); coord1y = Math.round( this.height * 0.1 ); coord2x = Math.round( this.width * 0.85 ); coord2y = Math.round( this.height * 0.28 ); 

  let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

  this.mapCoorTarta = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  calcularPizza(){
  let coord1x, coord1y, coord2x, coord2y;

  coord1x = Math.round( this.width * 0.13 ); coord1y = Math.round( this.height * 0.37 ); coord2x = Math.round( this.width * 0.29 ); coord2y = Math.round( this.height * 0.54 ); 

  let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

  this.mapCoorPizza = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  calcularPatata(){
  let coord1x, coord1y, coord2x, coord2y;

  coord1x = Math.round( this.width * 0.39 ); coord1y = Math.round( this.height * 0.31 ); coord2x = Math.round( this.width * 0.56 ); coord2y = Math.round( this.height * 0.56 ); 

  let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

  this.mapCoorPatata = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  calcularVerduras(){
  let coord1x, coord1y, coord2x, coord2y;

  coord1x = Math.round( this.width * 0.65 ); coord1y = Math.round( this.height * 0.31 ); coord2x = Math.round( this.width * 0.88 ); coord2y = Math.round( this.height * 0.56 ); 

  let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

  this.mapCoorVerduras = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  calcularPescado(){
  let coord1x, coord1y, coord2x, coord2y;

  coord1x = Math.round( this.width * 0.21 ); coord1y = Math.round( this.height * 0.65 ); coord2x = Math.round( this.width * 0.47 ); coord2y = Math.round( this.height * 0.84 ); 

  let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

  this.mapCoorPescado = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  calcularCarne(){
  let coord1x, coord1y, coord2x, coord2y;

  coord1x = Math.round( this.width * 0.57 ); coord1y = Math.round( this.height * 0.67 ); coord2x = Math.round( this.width * 0.76 ); coord2y = Math.round( this.height * 0.84 ); 

  let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

  this.mapCoorCarne = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }


  abrirCajon1(){
    this.arrayCajonIsOpen[0] = !this.arrayCajonIsOpen[0] ;
  }
  abrirCajon2(){
    this.arrayCajonIsOpen[1]  = !this.arrayCajonIsOpen[1] ;
  }
  abrirCajon3(){
    this.arrayCajonIsOpen[2]  = !this.arrayCajonIsOpen[2] ;
  }

  //A largo(X) B ancho(y)
  toStringCoor(ptoA, ptoB, ptoC, ptoD){
    
    return +parseInt(ptoA.y , 10) +","+ parseInt(ptoA.x, 10) +
      " "+ parseInt(ptoB.y, 10) +","+ parseInt(ptoB.x, 10) +
      " "+ parseInt(ptoC.y, 10) +","+ parseInt(ptoC.x, 10) +
      " "+ parseInt(ptoD.y, 10) +","+ parseInt(ptoD.x, 10);
  }


  openDialog(alimentoNombre) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    if(alimentoNombre === "helado"){
      dialogConfig.data = this.alimentosService.getHelado();
    }
	  else if(alimentoNombre === "carne-congelada"){
      dialogConfig.data = this.alimentosService.getCarneCongelada();
    }
  	else if(alimentoNombre === "churros"){
      dialogConfig.data = this.alimentosService.getChurros();
    }
  	else if(alimentoNombre === "patatas-congeladas"){
      dialogConfig.data = this.alimentosService.getPatatasCongeladas();
    }
  	else if(alimentoNombre === "pescado-congelado"){
      dialogConfig.data = this.alimentosService.getPescadoCongelado();
    }
  	else if(alimentoNombre === "pizza-congelada"){
      dialogConfig.data = this.alimentosService.getPizzaCongelada();
    }
  	else if(alimentoNombre === "tarta"){
      dialogConfig.data = this.alimentosService.getTarta();
    }
  	else if(alimentoNombre === "verduras-congeladas"){
      dialogConfig.data = this.alimentosService.getVerdurasCongeladas();
    }

    this.dialog.open(DialogInfoAlimentoComponent, dialogConfig);
  }

}
