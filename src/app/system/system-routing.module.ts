import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {AccountPageComponent} from './account-page/account-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {PlaningPageComponent} from './planing-page/planing-page.component';
import {RecordsPageComponent} from './records-page/records-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HistoryDetailComponent} from './history-page/history-detail/history-detail.component';
import {AuthGuard} from '../shared/services/auth.guard';

const routes: Routes = [
  {path: '', component: SystemComponent, canActivate: [AuthGuard] , children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'account', component: AccountPageComponent },
      {path: 'history', component: HistoryPageComponent },
      {path: 'planing', component: PlaningPageComponent },
      {path: 'records', component: RecordsPageComponent },
      {path: 'history/:id', component: HistoryDetailComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {

}
