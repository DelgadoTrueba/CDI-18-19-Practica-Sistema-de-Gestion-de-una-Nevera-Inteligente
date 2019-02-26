//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Services

//Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

//Components
import { AppComponent } from './app.component';

@NgModule({
  //Importar Componenentes
  declarations: [
    AppComponent
  ],
  //Importar Modulos, Material Design y Flexbox
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatButtonModule
  ],
  //Importar Servicios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
