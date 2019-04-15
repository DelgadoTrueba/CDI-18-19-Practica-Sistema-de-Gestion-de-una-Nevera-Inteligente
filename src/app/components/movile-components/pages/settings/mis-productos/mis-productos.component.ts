import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { Router } from '@angular/router';
import { SnackBarNotificationService } from 'src/app/services/snack-bar-notification.service';
import { CarritoService } from 'src/app/services/carrito.service';


@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css']
})
export class MisProductosComponent implements OnInit {

  mostrar = false;
  alimentos ;
  caducados = false;

  constructor(
    private alimentosService: AlimentosService,
    private router: Router,
    private snackBarServicie: SnackBarNotificationService,
    private carritoService: CarritoService
  ) { }

  ngOnInit() {
    this.alimentos = this.alimentosService.alimentos.filter( (alimento)=>{
      if(alimento.caducado && alimento.cantidad > 0) {this.mostrar=true; return true;}
      else return false;
    } );;

  }

  reponer(){
    this.alimentos.forEach(element => {
      this.carritoService.setCantidadIdCaducado(element.id, element.cantidad);
    });

    this.mostrar = false;
    this.router.navigate(["/market"]);
    this.snackBarServicie.notify("Alimentos caducados añadidos al carrito");
  }
  

}
