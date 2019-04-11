import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-confirmar',
  templateUrl: './dialog-confirmar.component.html',
  styleUrls: ['./dialog-confirmar.component.css']
})
export class DialogConfirmarComponent implements OnInit {

  alimento;
  delete = false;

  constructor(
    private dialogRef: MatDialogRef<DialogConfirmarComponent>,
  ) { 
  }

  ngOnInit() {
  }

  eliminar(){
    this.delete = true;
    this.dialogRef.close(this.delete);
  }
}
