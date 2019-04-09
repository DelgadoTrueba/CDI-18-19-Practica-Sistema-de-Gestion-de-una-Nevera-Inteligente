import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatDialogConfig, MatDialog } from '@angular/material';
import { arrayDeNavegacion } from 'src/app/model/array-de-navegacion/array-de-navegacion.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { DialogCarritoComponent } from '../dialog-carrito/dialog-carrito.component';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  public position;
  private arrayDeNavegacion:Array<string> = arrayDeNavegacion;

  carritonumber:number = 0;

  @ViewChild("sidenav") sidenav: MatSidenav;

  constructor(
    private router: Router, private r:ActivatedRoute,
    private carritoService: CarritoService,
    private dialog :MatDialog
  ) { }

  ngOnInit() {
    this.carritoService.notification$.subscribe( (alimentosEnCarrito) =>{
        this.carritonumber = alimentosEnCarrito.reduce( (sum, alimento)=>{
          if(alimento.cantidad > 0){
            return ++sum;
          }
          return sum;
        }, 0);
    } )
  }

  public onSwipeLeft(evt) {
    console.log("onSwipeLeft");

    let index = this.calculatePosition("left");
  
    console.log(index, this.arrayDeNavegacion[index]);
  }

  private calculatePosition(direction:string ): number{
    if(direction === "right" && this.position - 1 >= 0){
      return --this.position;
    }
    else if(direction === "left" && this.position + 1< this.arrayDeNavegacion.length)
    {
      return ++this.position;
    }
    else return -1;
  }

  irATodosLosAlimentos(){
    this.router.navigate(["todosAlimentos"], { relativeTo: this.r });
  }
  irAFruta(){
    this.router.navigate(["frutasAlimentos"], { relativeTo: this.r });
  }

  irAVerdurasAlimentos(){
    this.router.navigate(["VerdurasAlimentos"], { relativeTo: this.r });
  }

  irACarnePescado(){
    this.router.navigate(["CarnePescadoAlimentos"], { relativeTo: this.r });
  }

  irALacteos(){
    this.router.navigate(["lacteosAlimentos"], { relativeTo: this.r });
  }

  irABebidas(){
    this.router.navigate(["bebidasAlimentos"], { relativeTo: this.r });
  }

  irAOtros(){
    this.router.navigate(["otrosAlimentos"], { relativeTo: this.r });
  }

  abrirCarrito(){
    let dialogConfig = new MatDialogConfig();

    dialogConfig = {
      height: '90%',
      width: '90%',
    }

    this.dialog.open(DialogCarritoComponent, dialogConfig)
  }

}
