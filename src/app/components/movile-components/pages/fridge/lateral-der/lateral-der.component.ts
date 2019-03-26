import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
//objeto con la información de los alimentos//
import { AlimentosService } from 'src/app/services/alimentos.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogInfoAlimentoComponent } from '../dialog-info-alimento/dialog-info-alimento.component';
@Component({
  selector: 'app-lateral-der',
  templateUrl: './lateral-der.component.html',
  styleUrls: ['./lateral-der.component.css']
})
export class LateralDerComponent implements OnInit, OnDestroy {

   //inicializarla
   alimentos;
   subscribeServiceAlimentos;

  width:number;
  height:number;

  mapCoorQueso: string;
  mapCoorYogurt: string;
  mapCoorZumo: string;
  mapCoorSprite: string;
  mapCoorFanta: string;
  mapCoorCoke: string;

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
        let filterFunction = this.alimentosService.alimentosLateralDerFilter;
        this.alimentos = alimentos.filter( (item) => filterFunction(item) );
        console.log(this.alimentos);
      }
    );
   
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

  ngOnDestroy() {
    this.subscribeServiceAlimentos.unsubscribe();
  }

  calcularMapArea(){
    this.calcularAreaQueso();
    this.calcularYogurt();
    this.calcularZumo();
    this.calcularSprite();
    this.calcularFanta();
    this.calcularCoke();
  }

  calcularAreaQueso(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.24 ); coord1y = Math.round( this.height * 0.21 ); coord2x = Math.round( this.width * 0.4 ); coord2y = Math.round( this.height * 0.3 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorQueso = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularYogurt(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.66 ); coord1y = Math.round( this.height * 0.2 ); coord2x = Math.round( this.width * 0.8 ); coord2y = Math.round( this.height * 0.3 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorYogurt = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularZumo(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.16 ); coord1y = Math.round( this.height * 0.59 ); coord2x = Math.round( this.width * 0.29 ); coord2y = Math.round( this.height * 0.79 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorZumo = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularSprite(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.31 ); coord1y = Math.round( this.height * 0.6 ); coord2x = Math.round( this.width * 0.43 ); coord2y = Math.round( this.height * 0.79 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorSprite = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularFanta(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.56 ); coord1y = Math.round( this.height * 0.59 ); coord2x = Math.round( this.width * 0.68 ); coord2y = Math.round( this.height * 0.79 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorFanta = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularCoke(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.72 ); coord1y = Math.round( this.height * 0.59 ); coord2x = Math.round( this.width * 0.84 ); coord2y = Math.round( this.height * 0.79 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorCoke = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
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

    if(alimentoNombre === "queso"){
      dialogConfig.data = this.alimentosService.getQueso();
    }
    if(alimentoNombre === "fanta"){
      dialogConfig.data = this.alimentosService.getFanta();
    }
    if(alimentoNombre === "coke"){
      dialogConfig.data = this.alimentosService.getCocaCola();
    }
    if(alimentoNombre === "yogurt"){
      dialogConfig.data = this.alimentosService.getYogurt();
    }
    if(alimentoNombre === "zumo"){
      dialogConfig.data = this.alimentosService.getZumo();
    }
    if(alimentoNombre === "sprite"){
      dialogConfig.data = this.alimentosService.getSprite();
    }

    this.dialog.open(DialogInfoAlimentoComponent, dialogConfig);
  }

}
