import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  alimentos;

  constructor(private alimentoService:AlimentosService) {
   }

  ngOnInit() {
    this.alimentos = this.alimentoService.alimentosBebidasFilter();
  }

}
