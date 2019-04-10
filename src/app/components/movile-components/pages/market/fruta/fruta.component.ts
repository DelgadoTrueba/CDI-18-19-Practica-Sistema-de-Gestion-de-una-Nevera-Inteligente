import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  alimentos;
  alta: any;

  constructor(
    private alimentosService: AlimentosService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.alimentos = this.alimentosService.alimentosFrutaFilter();
    this.alta = this.globalService.getAlta();
  }

}
