import { Component, OnInit, HostListener, OnDestroy, ViewChild } from '@angular/core';

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

    this.height = (window.innerHeight*0.75);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.8) : 350;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );
    //this.alimentos = Alimentos.filter( (alimento) => {
      //return false;
      //alimento.nombreId ¿Corresponde a los ID que me interesa?
      // myfiltro.comprobar(nombreId): boolean
    //} );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = (window.innerHeight*0.75);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.8) : 350;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );

  }

  ngOnDestroy() {
    this.subscribeServiceAlimentos.unsubscribe();
  }

  abrirCajon(){
    this.isOpen =  !this.isOpen;
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
