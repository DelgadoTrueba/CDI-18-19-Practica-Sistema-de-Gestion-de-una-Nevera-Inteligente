import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FridgeComponent } from './components/movile-components/pages/fridge/fridge.component';
import { MarketComponent } from './components/movile-components/pages/market/market.component';
import { SettingsComponent } from './components/movile-components/pages/settings/settings.component';
import { AllFridgeComponent } from './components/movile-components/pages/fridge/allFridge/allFridge.component';

const routes: Routes = [
  { path: '', redirectTo: 'fridge', pathMatch: 'full' },
  { path: 'fridge', component: FridgeComponent, data: {animation: 'fridge'},
    children:[
      { path: '', redirectTo: 'allFridge', pathMatch: 'full' },
      { path: 'allFridge', component: AllFridgeComponent },
    ]
  },
  { path: 'market', component: MarketComponent, data: {animation: 'market'} },
  { path: 'settings', component: SettingsComponent, data: {animation: 'settings'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
