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
import { NavegadorComponent } from './components/navegador/navegador.component';
import { FridgeComponent } from './components/fridge/fridge.component';
import { MarketComponent } from './components/market/market.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SelecledSettingComponent } from './components/icons/icon-selecled-setting/icon-selecled-setting.component';
import { IconSettingComponent } from './components/icons/icon-setting/icon-setting.component';
import { IconKitchenComponent } from './components/icons/icon-kitchen/icon-kitchen.component';
import { IconSelecledKitchenComponent } from './components/icons/icon-selecled-kitchen/icon-selecled-kitchen.component';
import { IconStoreComponent } from './components/icons/icon-store/icon-store.component';
import { IconSelecledStoreComponent } from './components/icons/icon-selecled-store/icon-selecled-store.component';

@NgModule({
  //Importar Componenentes
  declarations: [
    AppComponent,
    NavegadorComponent,
    FridgeComponent,
    MarketComponent,
    SettingsComponent,
    SelecledSettingComponent,
    IconSettingComponent,
    IconKitchenComponent,
    IconSelecledKitchenComponent,
    IconStoreComponent,
    IconSelecledStoreComponent,
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
