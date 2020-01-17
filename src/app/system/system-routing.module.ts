import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {AccountPageComponent} from './bill-page/account-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {PlaningPageComponent} from './planing-page/planing-page.component';
import {RecordsPageComponent} from './records-page/records-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'account', component: AccountPageComponent },
      {path: 'history', component: HistoryPageComponent },
      {path: 'planing', component: PlaningPageComponent },
      {path: 'records', component: RecordsPageComponent }
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {

}
