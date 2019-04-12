import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FridgeComponent } from './components/movile-components/pages/fridge/fridge.component';
import { MarketComponent } from './components/movile-components/pages/market/market.component';
import { SettingsComponent } from './components/movile-components/pages/settings/settings.component';
import { AllFridgeComponent } from './components/movile-components/pages/fridge/allFridge/allFridge.component';
import { MainFridgeComponent } from './components/movile-components/pages/fridge/main-fridge/main-fridge.component';
import { FreezerComponent } from './components/movile-components/pages/fridge/freezer/freezer.component';
import { LateralIzqComponent } from './components/movile-components/pages/fridge/lateral-izq/lateral-izq.component';
import { LateralDerComponent } from './components/movile-components/pages/fridge/lateral-der/lateral-der.component';
import { TodosAlimentosComponent } from './components/movile-components/pages/market/todos-alimentos/todos-alimentos.component';
import { OtrosComponent } from './components/movile-components/pages/market/otros/otros.component';
import { LacteosComponent } from './components/movile-components/pages/market/lacteos/lacteos.component';
import { BebidasComponent } from './components/movile-components/pages/market/bebidas/bebidas.component';
import { VerdurasComponent } from './components/movile-components/pages/market/verduras/verduras.component';
import { FrutaComponent } from './components/movile-components/pages/market/fruta/fruta.component';
import { CarnePescadoComponent } from './components/movile-components/pages/market/carne-pescado/carne-pescado.component';
import { AltaComponent } from './components/movile-components/pages/market/alta/alta.component';
import { MisProductosComponent } from './components/movile-components/pages/settings/mis-productos/mis-productos.component';
import { AllSettingsComponent } from './components/movile-components/pages/settings/all-settings/all-settings.component';
import { IdeasParaComerComponent } from './components/movile-components/pages/settings/ideas-para-comer/ideas-para-comer.component';

const routes: Routes = [
  { path: '', redirectTo: 'fridge', pathMatch: 'full' },
  { path: 'fridge', component: FridgeComponent, data: {animation: 'fridge'},
    children:[
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllFridgeComponent },
      { path: 'main', component: MainFridgeComponent },
      { path: 'freezer', component: FreezerComponent },
      { path: 'leftSide', component: LateralIzqComponent },
      { path: 'rightSide', component: LateralDerComponent }
    ]
  },
  { path: 'market', component: MarketComponent, data: {animation: 'market'},
    children:[
      { path: '', redirectTo: 'todosAlimentos', pathMatch: 'full' },
      { path: 'otrosAlimentos', component: OtrosComponent },
      { path: 'todosAlimentos', component: TodosAlimentosComponent },
      { path: 'lacteosAlimentos', component: LacteosComponent },
      { path: 'VerdurasAlimentos', component: VerdurasComponent},
      { path: 'frutasAlimentos', component: FrutaComponent },
      { path: 'CarnePescadoAlimentos', component: CarnePescadoComponent },
      { path: 'bebidasAlimentos', component: BebidasComponent },
      { path: 'registro', component: AltaComponent },
    ]
  },
  { path: 'settings', component: SettingsComponent, data: {animation: 'settings'},
    children: [
      { path: '', redirectTo: 'allSettings', pathMatch: 'full' },
      { path: 'allSettings', component: AllSettingsComponent },
      { path: 'misProductos', component: MisProductosComponent },
      { path: 'ideasParaComer', component: IdeasParaComerComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
