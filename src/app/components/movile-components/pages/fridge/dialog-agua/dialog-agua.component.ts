import {MatDialog, MatDialogConfig} from "@angular/material";
import { Component } from '@angular/core';

@Component({
    selector: 'app-DialogoAgua',
    templateUrl: './dialog-agua.component.html',
    styleUrls: ['./dialog-agua.component.css']
})

export class  DialogAguaComponent{

    constructor(private dialog: MatDialog) {}

    openDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        this.dialog.open(DialogAguaComponent, dialogConfig);
    }
}