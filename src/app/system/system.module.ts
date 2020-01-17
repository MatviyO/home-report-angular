import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import { AccountPageComponent } from './bill-page/account-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlaningPageComponent } from './planing-page/planing-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import {SystemComponent} from './system.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import {HeaderService} from './header.service';

@NgModule({
  imports: [CommonModule, SharedModule, SystemRoutingModule],
  declarations: [SystemComponent, AccountPageComponent, HistoryPageComponent, PlaningPageComponent,
    RecordsPageComponent, DashboardComponent, SidebarComponent, FooterComponent],
  providers: [HeaderService]
})
export class SystemModule {

}
