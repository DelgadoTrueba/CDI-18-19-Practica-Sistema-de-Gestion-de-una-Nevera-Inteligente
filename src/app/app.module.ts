//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


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
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';


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
import { AllFridgeComponent } from './components/movile-components/pages/fridge/allFridge/allFridge.component';
import { MainFridgeComponent } from './components/movile-components/pages/fridge/main-fridge/main-fridge.component';
import { FreezerComponent } from './components/movile-components/pages/fridge/freezer/freezer.component';
import { LateralIzqComponent } from './components/movile-components/pages/fridge/lateral-izq/lateral-izq.component';
import { LateralDerComponent } from './components/movile-components/pages/fridge/lateral-der/lateral-der.component';
import { OverLapDirective } from './directives/over-lap.directive';
import { DialogInfoAlimentoComponent } from './components/movile-components/pages/fridge/dialog-info-alimento/dialog-info-alimento.component';
import { DialogAguaComponent } from './components/movile-components/pages/fridge/dialog-agua/dialog-agua.component';
import { ShoppingComponent } from './components/movile-components/pages/market/shopping/shopping.component';
import { MostradorDeArticulosComponent } from './components/movile-components/pages/market/mostrador-de-articulos/mostrador-de-articulos.component';
import { ArticuloComponent } from './components/movile-components/pages/market/articulo/articulo.component';
import { TodosAlimentosComponent } from './components/movile-components/pages/market/todos-alimentos/todos-alimentos.component';
import { OtrosComponent } from './components/movile-components/pages/market/otros/otros.component';
import { LacteosComponent } from './components/movile-components/pages/market/lacteos/lacteos.component';
import { BebidasComponent } from './components/movile-components/pages/market/bebidas/bebidas.component';
import { VerdurasComponent } from './components/movile-components/pages/market/verduras/verduras.component';
import { FrutaComponent } from './components/movile-components/pages/market/fruta/fruta.component';
import { CarnePescadoComponent } from './components/movile-components/pages/market/carne-pescado/carne-pescado.component';
import { DialogCarritoComponent } from './components/movile-components/pages/market/dialog-carrito/dialog-carrito.component';
import { DialogCancelComponent } from './components/core/dialog-cancel/dialog-cancel.component';
import { DialogModificarComponent } from './components/movile-components/pages/market/dialog-modificar/dialog-modificar.component';
import { AltaComponent } from './components/movile-components/pages/market/alta/alta.component';
import { DialogConfirmarComponent } from './components/movile-components/pages/market/dialog-confirmar/dialog-confirmar.component';
import { DialogHieloComponent } from './components/movile-components/pages/fridge/dialog-hielo/dialog-hielo.component';
import { SnackBarComponent } from './components/core/snack-bar/snack-bar.component';
import { MisProductosComponent } from './components/movile-components/pages/settings/mis-productos/mis-productos.component';
import { AllSettingsComponent } from './components/movile-components/pages/settings/all-settings/all-settings.component';
import { IdeasParaComerComponent } from './components/movile-components/pages/settings/ideas-para-comer/ideas-para-comer.component';
import { ServicioTecnicoComponent } from './components/movile-components/pages/settings/servicio-tecnico/servicio-tecnico.component';
import { TemperaturaComponent } from './components/movile-components/pages/settings/temperatura/temperatura.component';

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
    
    AllFridgeComponent,
    
    StyleGetterDirective,
    
    MainFridgeComponent,
    
    FreezerComponent,
    
    LateralIzqComponent,
    
    LateralDerComponent,
    
    OverLapDirective,
    
    DialogInfoAlimentoComponent,
        
    DialogAguaComponent,
        
    ShoppingComponent,
        
    MostradorDeArticulosComponent,
        
    ArticuloComponent,
        
    TodosAlimentosComponent,
        
    OtrosComponent,
    LacteosComponent,
        
    BebidasComponent,
    VerdurasComponent,
    FrutaComponent,
    CarnePescadoComponent,
    DialogCarritoComponent,
    DialogCancelComponent,
    DialogModificarComponent,
    AltaComponent,
    DialogConfirmarComponent,
    DialogHieloComponent,
    SnackBarComponent,
    MisProductosComponent,
    AllSettingsComponent,
    IdeasParaComerComponent,
    ServicioTecnicoComponent,
    TemperaturaComponent,
  ],
  //Importar Modulos, Material Design y Flexbox
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatDividerModule,
    MatExpansionModule,
    MatTooltipModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressBarModule,

    FlexLayoutModule
  ],
  //Importar Servicios
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
      DialogInfoAlimentoComponent,
      DialogAguaComponent,
      DialogCarritoComponent,
      DialogCancelComponent,
      DialogModificarComponent,
      DialogConfirmarComponent,
      DialogHieloComponent,
    ]
})
export class AppModule { }
