import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-cancel',
  templateUrl: './dialog-cancel.component.html',
  styleUrls: ['./dialog-cancel.component.css']
})
export class DialogCancelComponent implements OnInit {

  alimento;
  delete = false;

  constructor(
    private dialogRef: MatDialogRef<DialogCancelComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.alimento = data;
  }

  ngOnInit() {
  }

  eliminar(){
    this.delete = true;
    this.dialogRef.close(this.delete);
  }

}
