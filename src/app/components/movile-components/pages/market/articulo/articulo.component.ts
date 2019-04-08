import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() article: Article;
  
  constructor() { }

  ngOnInit() {
  }

}
