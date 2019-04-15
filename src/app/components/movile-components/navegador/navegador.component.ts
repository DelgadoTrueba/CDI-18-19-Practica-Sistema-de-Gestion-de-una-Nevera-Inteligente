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
  }

  navegateToNevera(component: string){
    this._router.navigate(['/fridge']);
  }

  navegateToMarket(component: string){
    this._router.navigate(['/market']);
  }

  navegateToConfig(component: string){
    this._router.navigate(['/settings']);
  }
  
}
