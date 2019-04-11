import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { MatDialogConfig, MatDialog, MatTooltip } from '@angular/material';
import { DialogCancelComponent } from 'src/app/components/core/dialog-cancel/dialog-cancel.component';
import { DialogModificarComponent } from '../dialog-modificar/dialog-modificar.component';
import { GlobalService } from 'src/app/services/global.service';
import { DialogConfirmarComponent } from '../dialog-confirmar/dialog-confirmar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarNotificationService } from 'src/app/services/snack-bar-notification.service';

@Component({
  selector: 'app-dialog-carrito',
  templateUrl: './dialog-carrito.component.html',
  styleUrls: ['./dialog-carrito.component.css'],
})
export class DialogCarritoComponent implements OnInit {
  
  alimentosEnCarrito = null;
  displayedColumns: string[] = ['nombre', 'cantidad', "precio", "actions"];
  total: number;

  foods= [
    {value: '1234-5678-9101-112', viewValue: '1234-5678-9101-112'},
  ];
  alta: boolean;
  fecha: boolean = false;
  tarjeta: boolean = false;

  minDate = new Date();

  constructor(
    private carritoServicie: CarritoService,
    private dialog :MatDialog,
    private globalServicie: GlobalService,
    private router: Router, private r:ActivatedRoute,
    private snackBarNotification: SnackBarNotificationService
  ) { }

  ngOnInit() {
    
    this.alta = this.globalServicie.getAlta();
    
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
            this.total = this.alimentosEnCarrito.reduce( (sum, alimento) =>{
              return sum += alimento.cantidad * alimento.precio;
            },0)
          }
        }
    );
  }

  onDeleteAll(){
  
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    
    dialogConfig.data = {
      nombre: "",
    }
    
   
    const dialogRef = this.dialog.open(DialogCancelComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data =>{
          if(data){
            this.carritoServicie.deleteAll();
          }
        }
    );
  

  }

  confirmar(){
    const dialogConfig = new MatDialogConfig();
       
    const dialogRef = this.dialog.open(DialogConfirmarComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
        data =>{
          if(data){
            this.carritoServicie.addToFridge();
            this.carritoServicie.deleteAll();
            this.router.navigate(["fridge"]);
            this.snackBarNotification.notify("La compra se ha realizado correctamente")
            this.dialog.closeAll();
          }
        }
    );
  

  }

  public onDate(event): void {
    console.log(event.value);
    this.fecha = true;
  }

  selectOption(event) {
    //getted from event
    console.log(event.value);
    //getted from 
    this.tarjeta = true;
  }

}
