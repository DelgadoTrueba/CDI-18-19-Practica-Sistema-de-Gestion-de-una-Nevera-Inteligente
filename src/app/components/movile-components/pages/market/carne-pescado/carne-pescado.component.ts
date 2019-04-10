import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-carne-pescado',
  templateUrl: './carne-pescado.component.html',
  styleUrls: ['./carne-pescado.component.css']
})
export class CarnePescadoComponent implements OnInit {

  alimentos;
  alta: any;
  
  constructor(
    private alimentosService: AlimentosService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.alimentos = this.alimentosService.alimentosCarnePescadoFilter();
    this.alta = this.globalService.getAlta();
  }
}
