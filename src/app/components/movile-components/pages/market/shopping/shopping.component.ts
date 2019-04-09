import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { arrayDeNavegacion } from 'src/app/model/array-de-navegacion/array-de-navegacion.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  public position;
  private arrayDeNavegacion:Array<string> = arrayDeNavegacion;

  @ViewChild("sidenav") sidenav: MatSidenav;

  constructor(
    private router: Router, private r:ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  public onSwipeLeft(evt) {
    console.log("onSwipeLeft");

    let index = this.calculatePosition("left");
  
    console.log(index, this.arrayDeNavegacion[index]);
  }

  private calculatePosition(direction:string ): number{
    if(direction === "right" && this.position - 1 >= 0){
      return --this.position;
    }
    else if(direction === "left" && this.position + 1< this.arrayDeNavegacion.length)
    {
      return ++this.position;
    }
    else return -1;
  }

  irATodosLosAlimentos(){
    this.router.navigate(["todosAlimentos"], { relativeTo: this.r });
  }
  irAFruta(){
    this.router.navigate(["frutasAlimentos"], { relativeTo: this.r });
  }

  irAVerdurasAlimentos(){
    this.router.navigate(["VerdurasAlimentos"], { relativeTo: this.r });
  }

  irALacteos(){
    this.router.navigate(["lacteosAlimentos"], { relativeTo: this.r });
  }

  irABebidas(){
    this.router.navigate(["bebidasAlimentos"], { relativeTo: this.r });
  }

  irAOtros(){
    this.router.navigate(["otrosAlimentos"], { relativeTo: this.r });
  }

}
