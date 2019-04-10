import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.component.html',
  styleUrls: ['./verduras.component.css']
})
export class VerdurasComponent implements OnInit {

  alimentos;
  alta: any;

  constructor(
    private alimentosService: AlimentosService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.alimentos = this.alimentosService.alimentosVerdurasFilter();
    this.alta = this.globalService.getAlta();
  }

}

