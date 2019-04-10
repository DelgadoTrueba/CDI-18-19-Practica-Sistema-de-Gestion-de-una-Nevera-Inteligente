import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  alimentos;
  alta: any;

  constructor(
    private alimentoService:AlimentosService,
    private globalService: GlobalService
    ) {
   }

  ngOnInit() {
    this.alimentos = this.alimentoService.alimentosBebidasFilter();
    this.alta = this.globalService.getAlta();
  }

}
