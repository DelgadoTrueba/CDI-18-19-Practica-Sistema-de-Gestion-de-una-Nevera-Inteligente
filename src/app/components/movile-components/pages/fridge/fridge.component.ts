import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {

  private abiertoArriba: boolean;
  private abiertoAbajo: boolean;

  constructor() {
    this.abiertoArriba = false;
    this.abiertoAbajo = false;
  }

  ngOnInit() {
  }

  public abrirArriba(){
    this.abiertoArriba = !this.abiertoArriba;  
  }


  public abrirAbajo() {
    this.abiertoAbajo = !this.abiertoAbajo;  
  }

  playSound(soundfile) {
    document.getElementById("audio").innerHTML= 
    "<embed src="+soundfile+" hidden='true' autostart='true' loop='false' />";
  }

}
