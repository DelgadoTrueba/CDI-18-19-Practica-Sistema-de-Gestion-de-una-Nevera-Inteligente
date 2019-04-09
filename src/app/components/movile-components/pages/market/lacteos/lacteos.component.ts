import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';

@Component({
  selector: 'app-lacteos',
  templateUrl: './lacteos.component.html',
  styleUrls: ['./lacteos.component.css']
})
export class LacteosComponent implements OnInit {

  alimentos;

  constructor(private alimentoService:AlimentosService) {
   }

  ngOnInit() {
    this.alimentos = this.alimentoService.alimentosLacteosFilter();
  }

}
