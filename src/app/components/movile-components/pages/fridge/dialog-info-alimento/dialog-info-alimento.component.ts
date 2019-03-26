import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-info-alimento',
  templateUrl: './dialog-info-alimento.component.html',
  styleUrls: ['./dialog-info-alimento.component.css']
})
export class DialogInfoAlimentoComponent implements OnInit {

  alimento;

  constructor(
      @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.alimento = data;
    console.log(this.alimento);
  }

  ngOnInit() {
  }

}
