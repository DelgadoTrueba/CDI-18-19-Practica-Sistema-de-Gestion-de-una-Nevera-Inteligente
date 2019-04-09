import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrador-de-articulos',
  templateUrl: './mostrador-de-articulos.component.html',
  styleUrls: ['./mostrador-de-articulos.component.css']
})
export class MostradorDeArticulosComponent implements OnInit {

  public tags;
  public articles;
  public error = false;

  public selectValue = "All";

  constructor(
  ) { }

  ngOnInit() {
   
    this.tags = [];
    this.articles = null;

   setTimeout( ()=>{
    this.articles = [
      {"title":"Pera", "description":"magnifica pera","photo":"assets/img/main/pera.png", "tags": [1,2,3]},
      {"title":"Pescado Congelado", "description":"magnifica pera","photo":"assets/img/main/pera.png", "tags": [1,2,3]},
      {"title":"Pera", "description":"magnifica pera","photo":"assets/img/main/pera.png", "tags": [1,2,3]}
    ];
   }, 0);
  
  }

  selectChange(tag){
    /*
    this.articles = null;
    if(tag === "All"){
      this._Service.getArticles().subscribe(
        (articles) => { 
          this.articles = articles;
        },
        (err) => { console.log(err); this.error = true }
      )
    }
    else{
      this._Service.getArticuloByTag(tag).subscribe(
        (articles) => { 
          this.articles = articles;
        },
        (err) => { console.log(err) }
      )
    }
    */
  }

  /*
  service(){
    this.articles = null;
  }
  */

}
