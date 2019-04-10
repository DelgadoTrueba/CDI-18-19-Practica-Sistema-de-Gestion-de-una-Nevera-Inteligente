import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/model/article';
import { CarritoService } from 'src/app/services/carrito.service';
import { DialogCancelComponent } from 'src/app/components/core/dialog-cancel/dialog-cancel.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() article: any;
  added: boolean = false;

  cantidad: number = 0;
  estaEnCarrito = false;

  constructor(
    private carritoService: CarritoService,
    private dialog :MatDialog
  ) { }

  ngOnInit() {
    this.carritoService.notification$.subscribe( (alimentosDelCarrito)=> {
      this.estaEnCarrito = alimentosDelCarrito.reduce( (resul, aliemento)=>{
        if(aliemento.id === this.article.id && aliemento.cantidad > 0) resul = true;
        return resul;
      }, false)
    })
  }

  comprar(){
    this.added = true;
    setTimeout( ()=>{
      this.added = false;
    },1000 );

    this.carritoService.setCantidad(this.article.id, this.cantidad);
    this.estaEnCarrito = true;
  }

  add(){
    this.cantidad++;
  }

  remove(){
    if(this.cantidad>0)
      this.cantidad--;
  }

  cancelarArticulos(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    dialogConfig.data = {
      nombre: this.article.nombre,
      cantidad: this.cantidad,
      unidad: this.article.unidad,
    }
    const dialogRef = this.dialog.open(DialogCancelComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data =>{
          if(data){
            this.carritoService.setCantidad(this.article.id, 0);
            this.cantidad = 0;
          }
        }
    );
  }


}
