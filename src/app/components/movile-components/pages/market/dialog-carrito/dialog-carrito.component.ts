import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogCancelComponent } from 'src/app/components/core/dialog-cancel/dialog-cancel.component';
import { DialogModificarComponent } from '../dialog-modificar/dialog-modificar.component';

@Component({
  selector: 'app-dialog-carrito',
  templateUrl: './dialog-carrito.component.html',
  styleUrls: ['./dialog-carrito.component.css']
})
export class DialogCarritoComponent implements OnInit {
  
  alimentosEnCarrito = null;
  displayedColumns: string[] = ['nombre', 'cantidad', "precio", "actions"];
  total: number;

  constructor(
    private carritoServicie: CarritoService,
    private dialog :MatDialog
  ) { }

  ngOnInit() {
    
      this.carritoServicie.notification$.subscribe( (alimentos)=>{
        this.alimentosEnCarrito = alimentos.filter( (alimento)=>{
          if(alimento.cantidad>0) return true;
          else return false;
        })

        this.total = this.alimentosEnCarrito.reduce( (sum, alimento) =>{
          return sum += alimento.cantidad * alimento.precio;
        },0)
      });
  }

  onDelete(alimento){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    
    dialogConfig.data = {
      nombre: alimento.nombre,
    }
    
   
    const dialogRef = this.dialog.open(DialogCancelComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data =>{
          if(data){
            this.carritoServicie.setCantidad(alimento.id, 0);
          }
        }
    );
  
  }

  onUpdate(alimento){
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.data = {
      articulo: alimento,
      cantidad: alimento.cantidad
    }
    const dialogRef = this.dialog.open(DialogModificarComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data =>{
          if(data >= 0){
            this.carritoServicie.setCantidad(alimento.id, data);
          }
        }
    );
  }

}
