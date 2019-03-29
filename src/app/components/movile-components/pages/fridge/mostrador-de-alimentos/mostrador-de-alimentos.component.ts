import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-mostrador-de-alimentos',
  templateUrl: './mostrador-de-alimentos.component.html',
  styleUrls: ['./mostrador-de-alimentos.component.css']
})
export class MostradorDeAlimentosComponent implements OnInit {

  @Input() alimentos;

  displayedColumns: string[] = ['nombre'];
  dataSource;

  constructor() { 
  
  }

  ngOnInit() {
    this.dataSource = this.alimentos;
  }

}
