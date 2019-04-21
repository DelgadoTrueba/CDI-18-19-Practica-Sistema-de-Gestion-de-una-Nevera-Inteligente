import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/services/alimentos.service';

@Component({
  selector: 'app-ideas-para-comer',
  templateUrl: './ideas-para-comer.component.html',
  styleUrls: ['./ideas-para-comer.component.css']
})
export class IdeasParaComerComponent implements OnInit {

  manzana;
  platano;
  melon;

  pollo;
  mantequilla;
  leche;
  coliflor;

  carne;
  zanahoria;
  agua;

  pimiento;

  salchicha;
  patatas;
  ketchup;

  pescado;
  verduras;
  
  constructor(
    private alimentosServicie: AlimentosService
  ) { }

  ngOnInit() {
    this.manzana = this.alimentosServicie.getManzana();
    this.platano = this.alimentosServicie.getPlatano();
    this.melon = this.alimentosServicie.getMelon();

    this.pollo = this.alimentosServicie.getPollo();
    this.mantequilla = this.alimentosServicie.getMantequilla();
    this.leche = this.alimentosServicie.getLeche();
    this.coliflor = this.alimentosServicie.getColiflor();

    this.carne = this.alimentosServicie.getCarne();
    this.zanahoria = this.alimentosServicie.getZanahoria();
    this.agua = this.alimentosServicie.getAgua();

    this.pimiento = this.alimentosServicie.getPimiento();

    this.salchicha = this.alimentosServicie.getSalchicha();
    this.patatas = this.alimentosServicie.getPatatasCongeladas();
    this.ketchup = this.alimentosServicie.getSalsaDeTomate();

    this.pescado = this.alimentosServicie.getPescadoCongelado();
    this.verduras = this.alimentosServicie.getVerdurasCongeladas();
  }

}
