import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog-hielo',
  templateUrl: './dialog-hielo.component.html',
  styleUrls: ['./dialog-hielo.component.css']
})
export class DialogHieloComponent implements OnInit {

  toggleIsOn = true;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<DialogHieloComponent>,) {}

  ngOnInit() {
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(DialogHieloComponent, dialogConfig);
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
