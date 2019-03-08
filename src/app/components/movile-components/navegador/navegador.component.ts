import { Component, OnInit, ViewEncapsulation, ViewChild, Input, HostListener } from '@angular/core';
import { MatTabGroup, MatTabChangeEvent } from '@angular/material/tabs';
import { Router, NavigationEnd, } from '@angular/router';
import { arrayDeNavegacion as tabs} from 'src/app/model/array-de-navegacion/array-de-navegacion.component';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavegadorComponent implements OnInit {

  private tabs:Array<string> = tabs;
  @Input() position: number = 0;

  height: number;
  width: number;


  @ViewChild("tabGroup") tabGroup: MatTabGroup;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
   this.reAlignTabGroup(this.position);
   this.height = (window.innerHeight*0.10);
   this.width  = (window.innerWidth);

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height =(window.innerHeight*0.10);
    this.width  = (window.innerWidth);
  }


  ngOnChanges(changes) {
    //console.log('Changed', changes.position.currentValue, changes.position.previousValue);
    this.reAlignTabGroup(this.position);
  }
 
  public onLinkClick(event: MatTabChangeEvent){
    let index = event.index;
    //console.log("onclick; "+index);
    if (index >=0 && index < this.tabs.length){
      this.navegateToComponent(this.tabs[index]);
    }
  }

  private reAlignTabGroup( index: number ){
    if (index >=0 && index < this.tabs.length){
      this.position = index;
      this.tabGroup.selectedIndex = index;
      this.tabGroup.realignInkBar();
    }
  }

  private navegateToComponent(component: string){
    this._router.navigate(['/'+component]);
  }
  
}
