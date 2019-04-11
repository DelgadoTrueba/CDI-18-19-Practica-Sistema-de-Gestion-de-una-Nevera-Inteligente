import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import { Component } from '@angular/core';

@Component({
    selector: 'app-DialogoAgua',
    templateUrl: './dialog-agua.component.html',
    styleUrls: ['./dialog-agua.component.css']
})

export class  DialogAguaComponent{

    toggleIsOn = true;

    constructor(
        private dialog: MatDialog,
        private dialogRef: MatDialogRef<DialogAguaComponent>,) {}

    openDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(DialogAguaComponent, dialogConfig);
    }

    close()
  {
    this.dialogRef.close();
  }

    changeImg()
    {
      this.toggleIsOn = !this.toggleIsOn;
    }
}