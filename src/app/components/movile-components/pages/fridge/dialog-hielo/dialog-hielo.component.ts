import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MatSlideToggle} from "@angular/material";

@Component({
  selector: 'app-dialog-hielo',
  templateUrl: './dialog-hielo.component.html',
  styleUrls: ['./dialog-hielo.component.css']
})
export class DialogHieloComponent {

  
  toggleIsOn = true;
  a0 = false;
  a10 = false;
  a20 = false;
  a40 = false;
  a60 = false;
  a80 = false;
  a100 = true;
  number: number = 0;

  abierto = false;
  pid;

  constructor(
      private dialog: MatDialog,
      private dialogRef: MatDialogRef<DialogHieloComponent>,) {}


  OnInit(){
    
  }

  openDialog() {

   
  }

  close()
{
  this.dialogRef.close();
}

@ViewChild("grifo") grifo: MatSlideToggle;
  changeImg()
  {
    if(this.abierto===true) {
      clearTimeout(this.pid);        
      this.toggleIsOn = true;  
      this.abierto = false;
      return;}
    

    this.abierto = true;
    this.toggleIsOn = false;
    this.pid= setInterval( ()=>{
      this.number++;
      if(this.number === 1) {this.a100 = false; this.a80 = true;}
      if(this.number === 2) {this.a80 = false; this.a60 = true;}
      if(this.number === 3) {this.a60 = false; this.a40 = true;}
      if(this.number === 4) {this.a40 = false; this.a20 = true;}
      if(this.number === 5) {this.a20 = false; this.a0 = true; this.toggleIsOn = true; 
      this.number = 0; this.grifo.toggle(); this.abierto = false; clearTimeout(this.pid);   
    }
      console.log(this.number)
    },1000)
  }

  reset(){
    this.a0 = false;
  this.a10 = false;
  this.a20 = false;
  this.a40 = false;
  this.a60 = false;
  this.a80 = false;
  this.a100 = true;
  }
}