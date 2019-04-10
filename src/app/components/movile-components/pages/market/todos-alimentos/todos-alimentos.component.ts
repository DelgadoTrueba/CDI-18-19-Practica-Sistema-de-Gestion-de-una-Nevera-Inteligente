import { Component, OnInit } from '@angular/core';

import {alimentos as AlimentosFile} from "../../../../../model/alimentos/alimentos";
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-todos-alimentos',
  templateUrl: './todos-alimentos.component.html',
  styleUrls: ['./todos-alimentos.component.css']
})
export class TodosAlimentosComponent implements OnInit {

  alimentos;
  alta: any;

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.alimentos = AlimentosFile;
    this.alta = this.globalService.getAlta();

  }

}
