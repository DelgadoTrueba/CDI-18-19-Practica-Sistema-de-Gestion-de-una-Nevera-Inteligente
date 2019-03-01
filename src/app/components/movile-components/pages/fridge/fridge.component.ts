import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {

  private cerrado: boolean;
  private abieroArriba: boolean;
  private abiertoAbajo: boolean;

  constructor() {
    this.cerrado = true;
    this.abieroArriba = false;
    this.abiertoAbajo = false;
  }

  ngOnInit() {
  }

  public abrirArriba(){
    this.abieroArriba = !this.abieroArriba;  
    if(!this.abiertoAbajo) this.cerrado = !this.abieroArriba;
  }


  public abrirAbajo() {
    this.abiertoAbajo = !this.abiertoAbajo;  
    if(!this.abieroArriba) this.cerrado = !this.abiertoAbajo;
  }

  playSound(soundfile) {
    document.getElementById("audio").innerHTML= 
    "<embed src="+soundfile+" hidden='true' autostart='true' loop='false' />";
  }

}
