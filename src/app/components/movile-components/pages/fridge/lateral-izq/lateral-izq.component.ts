import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
//objeto con la información de los alimentos//
import { AlimentosService } from 'src/app/services/alimentos.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogInfoAlimentoComponent } from '../dialog-info-alimento/dialog-info-alimento.component';


@Component({
  selector: 'app-lateral-izq',
  templateUrl: './lateral-izq.component.html',
  styleUrls: ['./lateral-izq.component.css']
})
export class LateralIzqComponent implements OnInit, OnDestroy {

  //inicializarla
  alimentos;
  subscribeServiceAlimentos;

  width:number;
  height:number;

  mapCoorAgua: string;
  mapCoorLeche: string;
  mapCoorKetchup: string;
  mapCoorMantequilla: string;

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
        let filterFunction = this.alimentosService.alimentosLateralIzqFilter;
        this.alimentos = alimentos.filter( (item) => filterFunction(item) );
        console.log(this.alimentos);
      }
    );

    this.height = (window.innerHeight*0.75);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.8) : 350;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

    this.calcularMapArea();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = (window.innerHeight*0.75);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.8) : 350;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

    this.calcularMapArea();
  }

  ngOnDestroy() {
    this.subscribeServiceAlimentos.unsubscribe();
  }

  calcularMapArea(){
    this.calcularAgua();
    this.calcularLeche();
    this.calcularKetchup();
    this.calcularMantequilla();
  }

  calcularAgua(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.64 ); coord1y = Math.round( this.height * 0.61 ); coord2x = Math.round( this.width * 0.76 ); coord2y = Math.round( this.height * 0.78 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorAgua = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
   
  }

  calcularLeche(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.21 ); coord1y = Math.round( this.height * 0.61 ); coord2x = Math.round( this.width * 0.36 ); coord2y = Math.round( this.height * 0.79 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorLeche = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
        
  }

  calcularKetchup(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.2 ); coord1y = Math.round( this.height * 0.12 ); coord2x = Math.round( this.width * 0.33 ); coord2y = Math.round( this.height * 0.28 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorKetchup = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
      
  }

  calcularMantequilla(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.59 ); coord1y = Math.round( this.height * 0.19 ); coord2x = Math.round( this.width * 0.8 ); coord2y = Math.round( this.height * 0.28 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorMantequilla = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
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

    if(alimentoNombre === "agua"){
      dialogConfig.data = this.alimentosService.getAgua();
    } else
    if(alimentoNombre === "leche"){
      dialogConfig.data = this.alimentosService.getLeche();
    } else
    if(alimentoNombre === "ketchup"){
      dialogConfig.data = this.alimentosService.getSalsaDeTomate();
    } else
    if(alimentoNombre === "mantequilla"){
      dialogConfig.data = this.alimentosService.getMantequilla();
    } 

    this.dialog.open(DialogInfoAlimentoComponent, dialogConfig);
  }

}
