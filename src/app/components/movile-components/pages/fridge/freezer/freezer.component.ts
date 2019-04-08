import { Component, OnInit, HostListener, OnDestroy, ViewChild } from '@angular/core';
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
    this.alimentos = this.alimentosService.alimentosFreezerFilter();
    /*
    this.subscribeServiceAlimentos = this.alimentosService.notification$.subscribe(
      (alimentos) => {
        let filterFunction = this.alimentosService.alimentosFreezerFilter;
        this.alimentos = alimentos.filter( (item) => filterFunction(item) );
        console.log(this.alimentos);
      }
    );
    */
    
    this.height = (window.innerHeight*0.75);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.8) : 350;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = (window.innerHeight*0.75);
    this.width = ( window.innerHeight >= window.innerWidth ) ? (window.innerWidth*0.8) : 350;
    
    //console.log("width: "+ this.width+", "+"height: "+ this.height );
  }

  ngOnDestroy() {
    //this.subscribeServiceAlimentos.unsubscribe();
  }

  abrirCajon1(){
    this.arrayCajonIsOpen[0] = !this.arrayCajonIsOpen[0];
  }
  abrirCajon2(){
    this.arrayCajonIsOpen[1] = !this.arrayCajonIsOpen[1];  
  }
  abrirCajon3(){
    this.arrayCajonIsOpen[2] = !this.arrayCajonIsOpen[2];
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
