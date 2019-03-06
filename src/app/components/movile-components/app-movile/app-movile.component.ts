import { Component, OnInit } from '@angular/core';

import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { slideInAnimation } from 'src/app/animations';
import { arrayDeNavegacion } from 'src/app/model/array-de-navegacion/array-de-navegacion.component';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-movile',
  templateUrl: './app-movile.component.html',
  styleUrls: ['./app-movile.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppMovileComponent implements OnInit {

  private position;
  private arrayDeNavegacion:Array<string> = arrayDeNavegacion;

  constructor(
    private _router: Router,
  ) { 
    console.log(this._router.url);
  }

  ngOnInit() {
    this._router.events.subscribe( (event) => {
      if( event instanceof NavigationEnd){
        let url = event.urlAfterRedirects;
        url = url.substr(1).split("/")[0]
        //console.log(url);
        this.position = this.arrayDeNavegacion.indexOf(url);
        console.log(url, this.position);
      }
    } );
  }

  public onSwipeLeft(evt) {
    console.log("onSwipeLeft");

    let index = this.calculatePosition("left");
  
    console.log(index, this.arrayDeNavegacion[index]);
  }

  public onSwipeRight(evt) {
    console.log("onSwipeRight");

    let index = this.calculatePosition("right");

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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
