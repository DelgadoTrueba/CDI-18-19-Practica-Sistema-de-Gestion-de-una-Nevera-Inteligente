import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-info-alimento',
  templateUrl: './dialog-info-alimento.component.html',
  styleUrls: ['./dialog-info-alimento.component.css']
})
export class DialogInfoAlimentoComponent implements OnInit {

  alimento;

  constructor(
      @Inject(MAT_DIALOG_DATA) data,
      private dialogRef: MatDialogRef<DialogInfoAlimentoComponent>
  ) { 
    this.alimento = data;
    console.log(this.alimento);
  }

  ngOnInit() {
  }

  close()
  {
    this.dialogRef.close();
  }

}
