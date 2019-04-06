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
