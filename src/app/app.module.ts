//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Services

//Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';


//Importar Flex-Layout
import { FlexLayoutModule } from "@angular/flex-layout";

//Components
import { AppComponent } from './app.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { FridgeComponent } from './components/fridge/fridge.component';
import { MarketComponent } from './components/market/market.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  //Importar Componenentes
  declarations: [
    AppComponent,
    NavegadorComponent,
    FridgeComponent,
    MarketComponent,
    SettingsComponent,
  ],
  //Importar Modulos, Material Design y Flexbox
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule
  ],
  //Importar Servicios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
