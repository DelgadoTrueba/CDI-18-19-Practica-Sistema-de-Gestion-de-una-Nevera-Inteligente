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
import { VerdurasComponent } from './components/movile-components/pages/market/verduras/verduras.component';

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
      { path: 'todosAlimentos', component: TodosAlimentosComponent },
      { path: 'VerdurasAlimentos', component: VerdurasComponent},
    ]
  },
  { path: 'settings', component: SettingsComponent, data: {animation: 'settings'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
