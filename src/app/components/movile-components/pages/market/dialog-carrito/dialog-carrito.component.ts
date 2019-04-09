import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-dialog-carrito',
  templateUrl: './dialog-carrito.component.html',
  styleUrls: ['./dialog-carrito.component.css']
})
export class DialogCarritoComponent implements OnInit {
  
  alimentosEnCarrito = null;
  displayedColumns: string[] = ['nombre', 'cantidad'];


  constructor(
    private carritoServicie: CarritoService
  ) { }

  ngOnInit() {
    
      this.carritoServicie.notification$.subscribe( (alimentos)=>{
        this.alimentosEnCarrito = alimentos.filter( (alimento)=>{
          if(alimento.cantidad>0) return true;
          else return false;
        })
      });
  }

}
