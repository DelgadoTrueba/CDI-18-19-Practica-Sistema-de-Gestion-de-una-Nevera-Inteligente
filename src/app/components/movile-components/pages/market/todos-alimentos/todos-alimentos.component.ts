import { Component, OnInit } from '@angular/core';

import {alimentos as AlimentosFile} from "../../../../../model/alimentos/alimentos";

@Component({
  selector: 'app-todos-alimentos',
  templateUrl: './todos-alimentos.component.html',
  styleUrls: ['./todos-alimentos.component.css']
})
export class TodosAlimentosComponent implements OnInit {

  alimentos;

  constructor() { }

  ngOnInit() {
    this.alimentos = AlimentosFile;
  }

}
