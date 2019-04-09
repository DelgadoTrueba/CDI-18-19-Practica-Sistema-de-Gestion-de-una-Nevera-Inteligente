import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  alimentos;

  constructor(
    private alimentosService: AlimentosService
  ) { }

  ngOnInit() {
    this.alimentos = this.alimentosService.alimentosFrutaFilter();
  }

}
