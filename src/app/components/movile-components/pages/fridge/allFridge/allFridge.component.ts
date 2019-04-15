import { Component, OnInit, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//objeto con la información de los alimentos//
import { AlimentosService } from 'src/app/services/alimentos.service';
import { MatTooltip, MatDialogConfig, MatDialog } from '@angular/material';
import { DialogAguaComponent } from '../dialog-agua/dialog-agua.component';
import { DialogHieloComponent } from '../dialog-hielo/dialog-hielo.component';
import { SnackBarNotificationService } from 'src/app/services/snack-bar-notification.service';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-allFridge',
  templateUrl: './allFridge.component.html',
  styleUrls: ['./allFridge.component.css']
})
export class AllFridgeComponent implements OnInit {

  //inicializarla
  alimentos;
  subscribeServiceAlimentos;

  width:number;
  height:number;

  top: number;
  left: number;

  abiertoArriba: boolean = false;
  abiertoAbajo: boolean = false;

  mapCoorNevera;
  mapCoorIzqLateral1;
  mapCoorIzqLateral2;
  mapCoorIzq1;
  mapCoorIzq2;
  mapCoorIzq3;
  mapCoorIzqA;
  mapCoorIzqB;

  mapCoorDerLateral1;
  mapCoorDerLateral2;
  mapCoorDer1;
  mapCoorDer2;
  mapCoorDer3;
  mapCoorDerA;
  mapCoorDerB;

  mapCoorCongelador;
  mapCoorAbajoIzq;
  mapCoorAbajoDer;
  
  lateral: string;

  @ViewChild('tooltip1') tooltip1:MatTooltip;
  @ViewChild('tooltip2') tooltip2:MatTooltip;
  @ViewChild('tooltip3') tooltip3:MatTooltip;
  @ViewChild('tooltip4') tooltip4:MatTooltip;
  @ViewChild('tooltip5') tooltip5:MatTooltip;
  @ViewChild('tooltip6') tooltip6:MatTooltip;
  @ViewChild('tooltip7') tooltip7:MatTooltip;
  @ViewChild('tooltip8') tooltip8:MatTooltip;
  @ViewChild('tooltip9') tooltip9:MatTooltip;
  @ViewChild('tooltip10') tooltip10:MatTooltip;
  a2 
  a1
  b1
  b2
  encendida: boolean = false;

  constructor(
    private router: Router, private r:ActivatedRoute,
    private alimentosService: AlimentosService,
    private dialog: MatDialog,
    private snackBarNotificationService: SnackBarNotificationService,
    private globalService: GlobalService
  ) { 
    this.width= 0; 
    this.height = 0;

    this.top= 0; 
    this.left = 0;
  }

   ngOnInit() {
    this.encendida = this.globalService.encendida;

    this.alimentos = this.alimentosService.alimentosAllFridgeFilter();
    /*
    this.subscribeServiceAlimentos = this.alimentosService.notification$.subscribe(
      (alimentos) => {
        let filterFunction = this.alimentosService.alimentosAllFridgeFilter
        this.alimentos = alimentos.filter( (item) => filterFunction(item) );
        console.log(this.alimentos);
      }
    );
    */
    
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.80): (window.innerHeight*0.76);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.70) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );
    
    this.top = (window.innerHeight*0.14);
    this.left = (window.innerWidth/2) - (this.width/1.975);
    
    this.calcularMapArea();
    let nombres = [];

    if(this.encendida){
    this.alimentos.forEach(async alimento => {
      if(alimento.caducado === true){
        nombres.push(alimento.nombre);
      }

      if(nombres.length === 1){
        let nombre = nombres[0];
        this.snackBarNotificationService.notify("El alimento: "+nombre+" esta caducados.");
      }
      else if(nombres.length > 1){
        let nombre = nombres.reduce( (str, value, index)=>{ 
          console.log(str);
          return str+=value+", "}, " ");
        this.snackBarNotificationService.notify("Los alimentos: "+nombre+" estan caducados.");
      }
    });
  }
  }

  

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.80): (window.innerHeight*0.76);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.70) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );
    this.top = (window.innerHeight*0.14);
    this.left = (window.innerWidth/2) - (this.width/1.975);

    this.calcularMapArea();
  }
/*
  ngOnDestroy() {
    //this.subscribeServiceAlimentos.unsubscribe();
    clearTimeout(this.a1);
    clearTimeout(this.a2);
    clearTimeout(this.b1);
    clearTimeout(this.b2);

  }

  ngAfterViewInit() {
    setTimeout(_ =>{
      this.tooltip1.show();

      this.tooltip5.show();
      
      this.tooltip7.show();
      this.tooltip8.show();

      setTimeout(_ =>{
        this.tooltip1.hide();
      
        this.tooltip5.hide();
      
        this.tooltip7.hide();
        this.tooltip8.hide();
      }, 3500);

    }, 500);
    
  }
*/
  calcularMapArea(){
    this.calcularNeveraCentral();

    this.calcularTopLeftLateral1();
    this.calcularTopLeftLateral2();

    this.calcularIzqArriba1();
    this.calcularIzqArriba2();
    this.calcularIzqArriba3();

    this.calcularIzqArribaA();
    this.calcularIzqArribaB();

    this.calcularDerLateral1();
    this.calcularDerLateral2();

    this.calcularDerArriba1();
    this.calcularDerArriba2();
    this.calcularDerArriba3();

    this.calcularDerArribaA();
    this.calcularDerArribaB();

    this.calcularCongelador();
    this.abajoIzq();
    this.abajoDer();
  }

  calcularNeveraCentral(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.31 ); coord1y = Math.round( this.height * 0 ); coord2x = Math.round( this.width * 0.69 ); coord2y = Math.round( this.height * 0.58 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorNevera = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularTopLeftLateral1(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.03 ); coord1y = Math.round( this.height * 0.06 ); coord2x = Math.round( this.width * 0.27 ); coord2y = Math.round( this.height * 0.21 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorIzqLateral1 = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularTopLeftLateral2(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.03 ); coord1y = Math.round( this.height * 0.34 ); coord2x = Math.round( this.width * 0.27 ); coord2y = Math.round( this.height * 0.5 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorIzqLateral2 = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');

  }

  calcularIzqArriba1(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0 ); coord1y = Math.round( this.height * 0.02 ); coord2x = Math.round( this.width * 0.27 ); coord2y = Math.round( this.height * 0.05 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorIzq1 = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularIzqArriba2(){
    let coord1x, coord1y, coord2x, coord2y;

coord1x = Math.round( this.width * 0 ); coord1y = Math.round( this.height * 0.22 ); coord2x = Math.round( this.width * 0.27 ); coord2y = Math.round( this.height * 0.32 ); 

let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

this.mapCoorIzq2 = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularIzqArriba3(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0 ); coord1y = Math.round( this.height * 0.51 ); coord2x = Math.round( this.width * 0.27 ); coord2y = Math.round( this.height * 0.58 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorIzq3 = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');

  }

  calcularCongelador(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.31 ); coord1y = Math.round( this.height * 0.6 ); coord2x = Math.round( this.width * 0.69 ); coord2y = Math.round( this.height * 0.94 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorCongelador = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  abajoIzq(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0 ); coord1y = Math.round( this.height * 0.61 ); coord2x = Math.round( this.width * 0.28 ); coord2y = Math.round( this.height * 0.96 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorAbajoIzq = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  abajoDer(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.72 ); coord1y = Math.round( this.height * 0.61 ); coord2x = Math.round( this.width * 1 ); coord2y = Math.round( this.height * 0.96 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorAbajoDer = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularIzqArribaA(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0 ); coord1y = Math.round( this.height * 0.05 ); coord2x = Math.round( this.width * 0.02 ); coord2y = Math.round( this.height * 0.22 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorIzqA = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularIzqArribaB(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0 ); coord1y = Math.round( this.height * 0.32 ); coord2x = Math.round( this.width * 0.02 ); coord2y = Math.round( this.height * 0.51 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorIzqB = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  
  calcularDerLateral1(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.73 ); coord1y = Math.round( this.height * 0.1 ); coord2x = Math.round( this.width * 0.97 ); coord2y = Math.round( this.height * 0.21 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorDerLateral1 = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularDerLateral2(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.73 ); coord1y = Math.round( this.height * 0.32 ); coord2x = Math.round( this.width * 0.97 ); coord2y = Math.round( this.height * 0.49 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorDerLateral2 = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');

  }

  calcularDerArriba1(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.73 ); coord1y = Math.round( this.height * 0.02 ); coord2x = Math.round( this.width * 1 ); coord2y = Math.round( this.height * 0.08 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorDer1 = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  calcularDerArriba2(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.73 ); coord1y = Math.round( this.height * 0.23 ); coord2x = Math.round( this.width * 1 ); coord2y = Math.round( this.height * 0.3 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorDer2 = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
    
  }
  calcularDerArriba3(){
    let coord1x, coord1y, coord2x, coord2y;

  coord1x = Math.round( this.width * 0.73 ); coord1y = Math.round( this.height * 0.51 ); coord2x = Math.round( this.width * 1 ); coord2y = Math.round( this.height * 0.57 ); 

  let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

  this.mapCoorDer3 = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  calcularDerArribaA(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.98 ); coord1y = Math.round( this.height * 0.08 ); coord2x = Math.round( this.width * 1 ); coord2y = Math.round( this.height * 0.3 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorIzqA = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }
  calcularDerArribaB(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.98 ); coord1y = Math.round( this.height * 0.3 ); coord2x = Math.round( this.width * 1 ); coord2y = Math.round( this.height * 0.51 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorIzqB = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
    
  }

  
  hightLeft(){
    console.log("hightLeft");
    this.abiertoArriba = false;
    clearTimeout(this.a1);
    clearTimeout(this.a2);
  }

  main(){
    console.log("main");
    if(!this.abiertoArriba ){
      this.abiertoArriba = true;
      this.a1 = setTimeout( ()=>{
        this.snackBarNotificationService.notify("Aviso: La parte superior lleva más de 30s abierta");
      }, 30000 );
    } 
    else this.router.navigate(["../main"], { relativeTo: this.r });
  }

  hightRight(){
    console.log("hightRight");
    this.abiertoArriba = false;
    clearTimeout(this.a1);
    clearTimeout(this.a2);
  }

  lowerLeft(){
    console.log("lowerLeft");
    this.abiertoAbajo = false;
    clearTimeout(this.b1);
    clearTimeout(this.b2);  
  }

  freezer(){
    console.log("freezer");
    if(!this.abiertoAbajo ) {
      this.abiertoAbajo = true;
      this.b1 = setTimeout( ()=>{
        this.snackBarNotificationService.notify("Aviso: La parte inferior lleva más de 30s abierta");
      }, 30000 );
    }
    else this.router.navigate(["../freezer"], { relativeTo: this.r });
  }

  lowerRight(){
    console.log("higlowerRighthtRight");
    this.abiertoAbajo = false;
    clearTimeout(this.b1);
    clearTimeout(this.b2);
  }

  lateralIzq(){
    console.log("lateralIzq");
    this.router.navigate(["../leftSide"], { relativeTo: this.r });
  }

  lateralDer(){
    console.log("lateralDer")
    this.router.navigate(["../rightSide"], { relativeTo: this.r });
  }

  /*LOGICA ALIMENTOS*/
  abrirNevera(){
    this.abiertoArriba = !this.abiertoArriba;
    if(this.abiertoArriba === true){
      /*setTimeout(_ =>{
        this.tooltip2.show();
        this.tooltip3.show();
        this.tooltip4.show();
        this.tooltip9.show();

        setTimeout(_ =>{
          this.tooltip2.hide();
          this.tooltip3.hide();
          this.tooltip4.hide();
          this.tooltip9.hide();
        }, 3500);

      });*/

      this.a2 = setTimeout( ()=>{
        this.snackBarNotificationService.notify("Aviso: La parte superior lleva más de 30s abierta");
      }, 30000 );
    }
      else{
        /*setTimeout(() =>{
          this.tooltip1.show();
          this.tooltip7.show();
          this.tooltip8.show();

          setTimeout(_ =>{
            this.tooltip1.hide();
            this.tooltip7.hide();
            this.tooltip8.hide();

          }, 1250);
        });*/
      }
      clearTimeout(this.a1);
      clearTimeout(this.a2);
    
  }

  abrirCongelador(){
    this.abiertoAbajo = !this.abiertoAbajo;
    if(this.abiertoAbajo === true){
      /*setTimeout(_ =>{
        this.tooltip6.show();
        this.tooltip10.show();

        setTimeout(_ =>{
          this.tooltip6.hide();
          this.tooltip10.hide();
        }, 3500);
      });*/

      this.b2 = setTimeout( ()=>{
        this.snackBarNotificationService.notify("Aviso: La parte inferior lleva más de 30s abierta");
      }, 30000 );
    }
    else{
      /*setTimeout(() =>{
        this.tooltip5.show();

        setTimeout(_ =>{
          this.tooltip5.hide();

        }, 1250);
      });*/
      clearTimeout(this.b1);
      clearTimeout(this.b2);
    }
  }

  abrirDialogAgua()
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(DialogAguaComponent, dialogConfig);
  }

  abrirDialogHielo()
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(DialogHieloComponent, dialogConfig);
  }


  encender(){
    this.encendida = true;
    this.globalService.encendida = true;
    this.ngOnInit();
  }
}
