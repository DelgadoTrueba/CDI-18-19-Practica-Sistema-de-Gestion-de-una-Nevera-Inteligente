import { Component, OnInit, Input } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogInfoAlimentoComponent } from '../dialog-info-alimento/dialog-info-alimento.component';


@Component({
  selector: 'app-mostrador-de-alimentos',
  templateUrl: './mostrador-de-alimentos.component.html',
  styleUrls: ['./mostrador-de-alimentos.component.css']
})
export class MostradorDeAlimentosComponent implements OnInit {

  @Input() zona:string;

  displayedColumns: string[] = ['nombre'];
  dataSource;
  noCajon: Array<any>;
  cajon1: Array<any>;
  cajon2: Array<any>;
  cajon3: Array<any>;

  subscribeServiceAlimentos;

  constructor(
    private alimentosService: AlimentosService,
    private dialog: MatDialog
  ) { 
  
  }

  ngOnInit() {
    let filterFunction;
    if(this.zona === "main") filterFunction = this.alimentosService.alimentosMainFridgeFilter;
    else if(this.zona === "freezer") filterFunction = this.alimentosService.alimentosFreezerFilter;
    else if(this.zona === "lateralDerecho") filterFunction = this.alimentosService.alimentosLateralDerFilter;
    else if(this.zona === "lateralIzquierdo") filterFunction = this.alimentosService.alimentosLateralIzqFilter;



    this.subscribeServiceAlimentos = this.alimentosService.notification$.subscribe(
      (alimentos) => {
        let todosAlimentos = alimentos.filter( (item) => filterFunction(item) );
        this.noCajon = todosAlimentos.filter( (item)=> item.cajon == null );
        this.cajon1 = todosAlimentos.filter( (item)=> item.cajon === 0 );
        this.cajon2 = todosAlimentos.filter( (item)=> item.cajon === 1 );
        this.cajon3 = todosAlimentos.filter( (item)=> item.cajon === 2 );
      }
    );
  }

  ngOnDestroy() {
    this.subscribeServiceAlimentos.unsubscribe();
  }

  openDialog(alimento) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = alimento;

    this.dialog.open(DialogInfoAlimentoComponent, dialogConfig);

  }
}
