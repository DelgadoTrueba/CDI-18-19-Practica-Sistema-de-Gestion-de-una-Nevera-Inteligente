//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Services

//Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';


//Importar Flex-Layout
import { FlexLayoutModule } from "@angular/flex-layout";

//Components
import { AppComponent } from './app.component';

import { IconSettingComponent } from './components/movile-components/navegador/icons/icon-setting/icon-setting.component';
import { IconKitchenComponent } from './components/movile-components/navegador/icons/icon-kitchen/icon-kitchen.component';
import { IconSelecledKitchenComponent } from './components/movile-components/navegador/icons/icon-selecled-kitchen/icon-selecled-kitchen.component';
import { IconStoreComponent } from './components/movile-components/navegador/icons/icon-store/icon-store.component';
import { IconSelecledStoreComponent } from './components/movile-components/navegador/icons/icon-selecled-store/icon-selecled-store.component';
import { IconSelecledSettingComponent } from './components/movile-components/navegador/icons/icon-selecled-setting/icon-selecled-setting.component';
import { NavegadorComponent } from './components/movile-components/navegador/navegador.component';

import { FridgeComponent } from './components/movile-components/pages/fridge/fridge.component';
import { MarketComponent } from './components/movile-components/pages/market/market.component';
import { SettingsComponent } from './components/movile-components/pages/settings/settings.component';

import { AppMovileComponent } from './components/movile-components/app-movile/app-movile.component';

@NgModule({
  //Importar Componenentes
  declarations: [
    AppComponent,

    IconSelecledSettingComponent,
    IconSettingComponent,
    IconKitchenComponent,
    IconSelecledKitchenComponent,
    IconStoreComponent,
    IconSelecledStoreComponent,
    NavegadorComponent,
    
    FridgeComponent,
    MarketComponent,
    SettingsComponent,
    
    AppMovileComponent,
  ],
  //Importar Modulos, Material Design y Flexbox
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,

    FlexLayoutModule
  ],
  //Importar Servicios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
