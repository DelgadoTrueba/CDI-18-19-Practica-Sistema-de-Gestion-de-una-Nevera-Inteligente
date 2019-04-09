import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent implements OnInit {

  alimentos;

  constructor(
    private  alimentosService: AlimentosService
  ) { }

  ngOnInit() {
    this.alimentos = this.alimentosService.alimentosOtrosFilter();
  }

}
