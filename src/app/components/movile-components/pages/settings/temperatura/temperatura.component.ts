import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit {

  aC = false;
  aM = false;
  aH = false;

  bC = false;
  bM = false;
  bH = false;

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.aC = this.globalService.aC;
    this.aH = this.globalService.aH;
    this.aM = this.globalService.aM;

    this.bC = this.globalService.bC;
    this.bH = this.globalService.bH;
    this.bM = this.globalService.bM;

    

  }

  cambiar(number: number){
    this.aC = false;
    this.aM = false;
    this.aH = false;
    if(number == 1){      this.aM = true;}
    if(number == 2){      this.aH = true;}
    if(number == 3){      this.aC = true;}
    
    this.globalService.aC = this.aC;
    this.globalService.aH = this.aH;
    this.globalService.aM = this.aM; 

  }

  cambiar2(number: number){
    this.bC = false;
    this.bM = false;
    this.bH = false;
    if(number == 1){      this.bM = true;}
    if(number == 2){      this.bH = true;}
    if(number == 3){      this.bC = true;}
    console.log(number)

    
    this.globalService.bC = this.bC;
    this.globalService.bH = this.bH;
    this.globalService.bM = this.bM; 

  }
}
