import { Component, OnInit, Input, Inject } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogCancelComponent } from 'src/app/components/core/dialog-cancel/dialog-cancel.component';

@Component({
  selector: 'app-dialog-modificar',
  templateUrl: './dialog-modificar.component.html',
  styleUrls: ['./dialog-modificar.component.css']
})
export class DialogModificarComponent implements OnInit {

  article: any;
  added: boolean = false;

  cantidad;

  constructor(
    private carritoService: CarritoService,
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<DialogCancelComponent>,
  ) { 
    this.article = data.articulo;
    this.cantidad = this.carritoService.getCantidad(this.article.id);
  }

  ngOnInit() {
  }

  comprar(){
    this.added = true;
    setTimeout( ()=>{
      this.added = false;
    },1000 );

    this.dialogRef.close(this.cantidad);
  }

  add(){
    this.cantidad++;
  }

  remove(){
    if(this.cantidad>0)
      this.cantidad--;
  }

}
