import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent implements OnInit {

  alta

  alimentos;

  constructor(
    private  alimentosService: AlimentosService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.alimentos = this.alimentosService.alimentosOtrosFilter();
    this.alta = this.globalService.getAlta();
  }

}
