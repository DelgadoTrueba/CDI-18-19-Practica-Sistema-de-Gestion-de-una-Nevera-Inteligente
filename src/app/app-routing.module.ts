import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FridgeComponent } from './components/fridge/fridge.component';
import { MarketComponent } from './components/market/market.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'fridge', pathMatch: 'full' },
  { path: 'fridge', component: FridgeComponent, data: {animation: 'fridge'} },
  { path: 'market', component: MarketComponent, data: {animation: 'market'} },
  { path: 'settings', component: SettingsComponent, data: {animation: 'settings'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
