//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
      'pinch': { enable: false },
      'rotate': { enable: false }
  }
}

//Services

//Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


//Importar Flex-Layout
import { FlexLayoutModule } from "@angular/flex-layout";

//Directives
import { StyleGetterDirective } from './directives/style-getter.directive';

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
import { CanvasComponent } from './components/movile-components/pages/fridge/canvas/canvas.component';

@NgModule({
  //Importar Componenentes y Directivas
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
    
    CanvasComponent,
    
    StyleGetterDirective,
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
    MatCardModule,

    FlexLayoutModule
  ],
  //Importar Servicios
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
