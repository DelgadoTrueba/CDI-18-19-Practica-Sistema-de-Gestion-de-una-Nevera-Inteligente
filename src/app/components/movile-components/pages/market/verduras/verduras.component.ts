import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';

@Component({
  selector: 'app-verduras',
  templateUrl: './verduras.component.html',
  styleUrls: ['./verduras.component.css']
})
export class VerdurasComponent implements OnInit {

  alimentos;

  constructor(
    private alimentosService: AlimentosService
  ) { }

  ngOnInit() {
    this.alimentos = this.alimentosService.alimentosVerdurasFilter();
  }

}

