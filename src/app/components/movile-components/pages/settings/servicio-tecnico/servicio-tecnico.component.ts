import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio-tecnico',
  templateUrl: './servicio-tecnico.component.html',
  styleUrls: ['./servicio-tecnico.component.css']
})
export class ServicioTecnicoComponent implements OnInit {

  mostrar= true;
  error = false;

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.mostrar = false;
    },1000 );

    let num = Math.random()
    if(num > 0.5) this.error = true; 
    console.log(num);
  }

}
