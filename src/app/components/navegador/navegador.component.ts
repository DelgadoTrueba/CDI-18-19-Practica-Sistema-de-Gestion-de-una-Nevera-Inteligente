import { Component, OnInit, ViewEncapsulation, ViewChildren, ViewChild } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';


@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavegadorComponent implements OnInit {

  private tabs: Array<string> =["First", "Second", "Third"];
  private position: number;

  public eventText = '';


  @ViewChild("tabGroup") tabGroup: MatTabGroup;

  constructor() {
    this.position = 0;
  }

  ngOnInit() {
    
  }

  public onSwipeLeft(evt) {
    console.log("onSwipeLeft");

    let index = this.calculatePosition("left");
    if(index !== -1) this.reAlignTabGroup(index);

    console.log(index);
  }

  public onSwipeRight(evt) {
    console.log("onSwipeRight");

    let index = this.calculatePosition("right");
    if(index !== -1) this.reAlignTabGroup(index);

    console.log(index);
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
  

}
