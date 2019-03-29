import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

//objeto con la información de los alimentos//
import { AlimentosService } from 'src/app/services/alimentos.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogInfoAlimentoComponent } from '../dialog-info-alimento/dialog-info-alimento.component';

@Component({
  selector: 'app-main-fridge',
  templateUrl: './main-fridge.component.html',
  styleUrls: ['./main-fridge.component.css']
})
export class MainFridgeComponent implements OnInit, OnDestroy {

  //inicializarla
  alimentos;
  subscribeServiceAlimentos;

  width:number;
  height:number;
  top:number;
  left:number;

  isOpen: boolean = false;

  mapCoorPescado: string;
  mapCoorCarne: string;
  mapCoorSalchicha: string;
  mapCoorPollo: string;
  mapCoorHuevos: string;
  mapCoorZanahoria: string;
  mapCoorPimiento: string;
  mapCoorPepino: string;
  mapCoorColiflor: string;
  mapCoorBroccoli: string;
  mapCoorCherry: string;
  mapCoorManzana: string;
  mapCoorPlatano: string;
  mapCoorMelon: string;
  mapCoorPera: string;
  mapCoorCarneDescongelada: string;
  mapCoorPescadoDescongelado: string;
  mapCoorTartaDescongelada: string;


  mapCoorCajon: string;

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
        let filterFunction = this.alimentosService.alimentosMainFridgeFilter
        this.alimentos = alimentos.filter( (item) => filterFunction(item) );
        console.log(this.alimentos);
      }
    );

    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.80): (window.innerHeight*0.75);
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
    this.height = ( window.innerHeight >= window.innerWidth ) ? (window.innerHeight*0.80): (window.innerHeight*0.75);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.9) : this.height;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

    this.calcularMapArea();
  }

  ngOnDestroy() {
    this.subscribeServiceAlimentos.unsubscribe();
  }

  calcularMapArea(){
    this.calcularPescado();
    this.calcularCarne();
    this.calcularSalchicha();
    this.calcularPollo();
    this.calcularHuevos();
    this.calcularZanahoria();
    this.calcularPimiento();
    this.calcularPepino();
    this.calcularColiflor();
    this.calcularBroccoli();
    this.calcularCherry();
    this.calcularManzana();
    this.calcularPlatano();
    this.calcularMelon();
    this.calcularPera();
    this.calcularCarneDesongelada();
    this.calcularPescadoDesongelado();
    this.calcularTartaDesongelada();

    this.calcularCajon();

  }

  calcularPescado(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.79 ); coord1y = Math.round( this.height * 0.14 ); coord2x = Math.round( this.width * 0.97 ); coord2y = Math.round( this.height * 0.29 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPescado = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularCarne(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.6 ); coord1y = Math.round( this.height * 0.16 ); coord2x = Math.round( this.width * 0.78 ); coord2y = Math.round( this.height * 0.29 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorCarne = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularSalchicha(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.44 ); coord1y = Math.round( this.height * 0.16 ); coord2x = Math.round( this.width * 0.59 ); coord2y = Math.round( this.height * 0.29 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorSalchicha = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularPollo(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.23 ); coord1y = Math.round( this.height * 0.15 ); coord2x = Math.round( this.width * 0.43 ); coord2y = Math.round( this.height * 0.29 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPollo = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularHuevos(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.03 ); coord1y = Math.round( this.height * 0.17 ); coord2x = Math.round( this.width * 0.21 ); coord2y = Math.round( this.height * 0.29 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorHuevos = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularZanahoria(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.82 ); coord1y = Math.round( this.height * 0.38 ); coord2x = Math.round( this.width * 0.97 ); coord2y = Math.round( this.height * 0.53 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorZanahoria = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularPimiento(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.65 ); coord1y = Math.round( this.height * 0.39 ); coord2x = Math.round( this.width * 0.8 ); coord2y = Math.round( this.height * 0.53 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPimiento = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularPepino(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.45 ); coord1y = Math.round( this.height * 0.38 ); coord2x = Math.round( this.width * 0.63 ); coord2y = Math.round( this.height * 0.53 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPepino = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularColiflor(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.25 ); coord1y = Math.round( this.height * 0.38 ); coord2x = Math.round( this.width * 0.43 ); coord2y = Math.round( this.height * 0.55 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorColiflor = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularBroccoli(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.04 ); coord1y = Math.round( this.height * 0.38 ); coord2x = Math.round( this.width * 0.23 ); coord2y = Math.round( this.height * 0.54 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorBroccoli = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularCherry(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.83 ); coord1y = Math.round( this.height * 0.63 ); coord2x = Math.round( this.width * 0.96 ); coord2y = Math.round( this.height * 0.76 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorCherry = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularManzana(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.64 ); coord1y = Math.round( this.height * 0.62 ); coord2x = Math.round( this.width * 0.81 ); coord2y = Math.round( this.height * 0.76 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorManzana = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularPlatano(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.45 ); coord1y = Math.round( this.height * 0.61 ); coord2x = Math.round( this.width * 0.61 ); coord2y = Math.round( this.height * 0.76 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPlatano = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularMelon(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.25 ); coord1y = Math.round( this.height * 0.59 ); coord2x = Math.round( this.width * 0.43 ); coord2y = Math.round( this.height * 0.76 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorMelon = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
  }

  calcularPera(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.06 ); coord1y = Math.round( this.height * 0.58 ); coord2x = Math.round( this.width * 0.22 ); coord2y = Math.round( this.height * 0.76 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorPera = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');

  }

  calcularCajon(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.03 ); coord1y = Math.round( this.height * 0.77 ); coord2x = Math.round( this.width * 0.97 ); coord2y = Math.round( this.height * 0.99 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorCajon = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');

  }
  
  calcularCarneDesongelada(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.08 ); coord1y = Math.round( this.height * 0.82 ); coord2x = Math.round( this.width * 0.3 ); coord2y = Math.round( this.height * 0.95 ); 
    
    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];
    
    this.mapCoorCarneDescongelada= mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');

  }
  calcularPescadoDesongelado(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.37 ); coord1y = Math.round( this.height * 0.82 ); coord2x = Math.round( this.width * 0.7 ); coord2y = Math.round( this.height * 0.97 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorPescadoDescongelado = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
    
  }
  calcularTartaDesongelada(){
    let coord1x, coord1y, coord2x, coord2y;

    coord1x = Math.round( this.width * 0.75 ); coord1y = Math.round( this.height * 0.82 ); coord2x = Math.round( this.width * 0.94 ); coord2y = Math.round( this.height * 0.97 ); 

    let mapCoord = [ coord1x, coord1y, coord2x, coord2y];

    this.mapCoorTartaDescongelada = mapCoord.reduce( (v_ant, v_act, index,)=>{if(index ==0 ) return v_ant += `${v_act} `;else  return v_ant += `,${v_act} `;}, '');
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

  openDialog(alimentoNombre) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    if(alimentoNombre === "pescado"){
      dialogConfig.data = this.alimentosService.getPescado();
    }
    if(alimentoNombre === "carne"){
      dialogConfig.data = this.alimentosService.getCarne();
    }
    if(alimentoNombre === "salchica"){
      dialogConfig.data = this.alimentosService.getSalchicha();
    }
    if(alimentoNombre === "pollo"){
      dialogConfig.data = this.alimentosService.getPollo();
    }
    if(alimentoNombre === "huevos"){
      dialogConfig.data = this.alimentosService.getHuevos();
    }
    if(alimentoNombre === "pimineto"){
      dialogConfig.data = this.alimentosService.getPimiento();
    }
    if(alimentoNombre === "zanahoria"){
      dialogConfig.data = this.alimentosService.getZanahoria();
    }
    if(alimentoNombre === "pimiento"){
      dialogConfig.data = this.alimentosService.getPimiento();
    }
    if(alimentoNombre === "pepino"){
      dialogConfig.data = this.alimentosService.getPepino();
    }
    if(alimentoNombre === "coliflor"){
      dialogConfig.data = this.alimentosService.getColiflor();
    }
    if(alimentoNombre === "broccoli"){
      dialogConfig.data = this.alimentosService.getBroccoli();
    }
    if(alimentoNombre === "cherry"){
      dialogConfig.data = this.alimentosService.getCereza();
    }
    if(alimentoNombre === "manzana"){
      dialogConfig.data = this.alimentosService.getManzana();
    }
    if(alimentoNombre === "platano"){
      dialogConfig.data = this.alimentosService.getPlatano();
    }
    if(alimentoNombre === "melon"){
      dialogConfig.data = this.alimentosService.getMelon();
    }
    if(alimentoNombre === "pera"){
      dialogConfig.data = this.alimentosService.getPera();
    }
    if(alimentoNombre === "carne-descongelada"){
      dialogConfig.data = this.alimentosService.getCarneDescongelada();
    }
    if(alimentoNombre === "pescado-descongelado"){
      dialogConfig.data = this.alimentosService.getPescadoDescongelado();
    }
    if(alimentoNombre === "tarta-descongelada"){
      dialogConfig.data = this.alimentosService.getTartaDescongelada();
    }

    this.dialog.open(DialogInfoAlimentoComponent, dialogConfig);
  }
}
