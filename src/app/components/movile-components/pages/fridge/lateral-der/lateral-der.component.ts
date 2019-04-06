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
    this.subscribeServiceAlimentos.unsubscribe();
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
