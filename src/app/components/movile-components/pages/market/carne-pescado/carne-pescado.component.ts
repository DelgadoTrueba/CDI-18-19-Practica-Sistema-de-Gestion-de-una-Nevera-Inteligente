import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';

@Component({
  selector: 'app-carne-pescado',
  templateUrl: './carne-pescado.component.html',
  styleUrls: ['./carne-pescado.component.css']
})
export class CarnePescadoComponent implements OnInit {

  alimentos;
  
  constructor(
    private alimentosService: AlimentosService
  ) { }

  ngOnInit() {
    this.alimentos = this.alimentosService.alimentosCarnePescadoFilter();
  }
}
