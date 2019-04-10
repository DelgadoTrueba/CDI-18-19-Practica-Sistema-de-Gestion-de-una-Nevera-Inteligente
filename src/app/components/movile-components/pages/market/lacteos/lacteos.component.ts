import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-lacteos',
  templateUrl: './lacteos.component.html',
  styleUrls: ['./lacteos.component.css']
})
export class LacteosComponent implements OnInit {

  alimentos;
  alta: any;

  constructor(
    private alimentoService:AlimentosService,
    private globalService: GlobalService
    ) {
   }

  ngOnInit() {
    this.alimentos = this.alimentoService.alimentosLacteosFilter();
    this.alta = this.globalService.getAlta();
  }

}
