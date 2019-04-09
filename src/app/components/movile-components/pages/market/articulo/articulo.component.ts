import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() article: any;
  added: boolean = false;

  cantidad: number = 0;

  constructor() { }

  ngOnInit() {
  }

  comprar(){
    this.added = true;
    setTimeout( ()=>{
      this.added = false;
    },1000 );
  }

  add(){
    this.cantidad++;
  }

  remove(){
    if(this.cantidad>0)
      this.cantidad--;
  }

}
