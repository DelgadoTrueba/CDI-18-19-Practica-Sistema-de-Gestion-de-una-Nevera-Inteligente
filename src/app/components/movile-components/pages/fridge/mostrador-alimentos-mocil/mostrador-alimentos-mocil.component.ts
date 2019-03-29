import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mostrador-alimentos-mocil',
  templateUrl: './mostrador-alimentos-mocil.component.html',
  styleUrls: ['./mostrador-alimentos-mocil.component.css']
})
export class MostradorAlimentosMocilComponent implements OnInit {

  @Input() alimentos;

  constructor() { }

  ngOnInit() {
  }

}
