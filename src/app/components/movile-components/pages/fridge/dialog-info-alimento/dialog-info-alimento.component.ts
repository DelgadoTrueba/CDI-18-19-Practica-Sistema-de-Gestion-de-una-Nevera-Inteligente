import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-info-alimento',
  templateUrl: './dialog-info-alimento.component.html',
  styleUrls: ['./dialog-info-alimento.component.css']
})
export class DialogInfoAlimentoComponent implements OnInit {

  alimento;
  alimentoCong: boolean = false;

  constructor(
      @Inject(MAT_DIALOG_DATA) data,
      private dialogRef: MatDialogRef<DialogInfoAlimentoComponent>,
      private router: Router,
      private alimentosService: AlimentosService
  ) { 
    this.alimento = data;
    console.log(this.alimento);
  }

  ngOnInit() {
    if(this.alimento.id === "carne-congelada")
       this.alimentoCong = true;

    if(this.alimento.id === "pescado-congelado")
       this.alimentoCong = true;

    if(this.alimento.id === "tarta")
       this.alimentoCong = true;
  }

  close()
  {
    this.dialogRef.close();
  }

  comprar10(){
    this.alimentosService.setCantidad(this.alimento, 10)
  }

  consumir(){
    this.alimentosService.decrementarCantidad(this.alimento);
  }

  irATodosLosAlimentos(){
    this.router.navigate(["../market/todosAlimentos"]);
  }

}
