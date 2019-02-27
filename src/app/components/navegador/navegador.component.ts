import { Component, OnInit, ViewEncapsulation, ViewChildren, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup, MatTabChangeEvent } from '@angular/material/tabs';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/animations';


@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class NavegadorComponent implements OnInit {

  private tabs: Array<string> =["fridge", "market", "settings"];
  private position: number;

  public eventText = '';


  @ViewChild("tabGroup") tabGroup: MatTabGroup;

  constructor(
    private _router: Router
  ) { 
    this.position = 0;
  }

  ngOnInit() {
    
  }

  public onSwipeLeft(evt) {
    console.log("onSwipeLeft");

    let index = this.calculatePosition("left");
    if(index !== -1){
      this.reAlignTabGroup(index);
      this.navegateToComponent(this.tabs[index]);
    } 

    console.log(index, this.tabs[index]);
  }

  public onSwipeRight(evt) {
    console.log("onSwipeRight");

    let index = this.calculatePosition("right");
    if(index !== -1){
      this.reAlignTabGroup(index);
      this.navegateToComponent(this.tabs[index]);
    } 

    console.log(index, this.tabs[index]);
  }
  
  public onLinkClick(event: MatTabChangeEvent){
    let index = event.index;
    console.log("onclick; "+index);
    if (index >=0 && index < this.tabs.length){
      this.reAlignTabGroup(index);
      this.navegateToComponent(this.tabs[index]);
    }
  }

  private calculatePosition(direction:string ): number{
    if(direction === "left" && this.position -1 >= 0){
      return --this.position;
    }
    else if(direction === "right" && this.position + 1< this.tabs.length)
    {
      return ++this.position;
    }
    else return -1;
  }

  private reAlignTabGroup( index: number ){
    if (index >=0 && index < this.tabs.length){
      this.tabGroup.selectedIndex = index;
      this.tabGroup.realignInkBar();
    }
  }

  private navegateToComponent(component: string){
    this._router.navigate(['/'+component]);
  }
  

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
