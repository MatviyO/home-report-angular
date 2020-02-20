import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import { AccountPageComponent } from './account-page/account-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlaningPageComponent } from './planing-page/planing-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import {SystemComponent} from './system.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import {HeaderService} from './layout/services/header.service';
import { NavbarHeaderComponent } from './layout/components/navbar-header/navbar-header.component';
import {DropdownDirective} from './layout/directives/dropdown.directive';
import { AccountCardComponent } from './account-page/account-card/account-card.component';
import { CurrencyCardComponent } from './account-page/currency-card/currency-card.component';
import {AccountService} from './layout/services/account.service';
import {MomentPipe} from './layout/pipes/moment.pipe';
import { AddEventComponent } from './records-page/add-event/add-event.component';
import { AddCategoryComponent } from './records-page/add-category/add-category.component';
import { EditCategoryComponent } from './records-page/edit-category/edit-category.component';
import {CategoriesService} from './layout/services/categories.service';
import {EventsService} from './layout/services/events.service';
import {ChartsModule} from 'ng4-charts';
import { HistoryChartComponent } from './history-page/history-chart/history-chart.component';
import { HistoryEventsComponent } from './history-page/history-events/history-events.component';
import { HistoryDetailComponent } from './history-page/history-detail/history-detail.component';
import { HistoryFilterComponent } from './history-page/history-filter/history-filter.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FilterPipe} from './layout/pipes/filter.pipe';
import {LoaderComponent} from '../shared/components/loader/loader.component';

@NgModule({
    imports: [CommonModule, SharedModule, SystemRoutingModule, ChartsModule, NgxChartsModule ],
  declarations: [LoaderComponent, SystemComponent, AccountPageComponent, HistoryPageComponent, PlaningPageComponent,
    RecordsPageComponent,  DashboardComponent, SidebarComponent, FooterComponent, NavbarHeaderComponent, DropdownDirective, AccountCardComponent, CurrencyCardComponent, MomentPipe, AddEventComponent, AddCategoryComponent, EditCategoryComponent, HistoryChartComponent, HistoryEventsComponent, HistoryDetailComponent, HistoryFilterComponent, FilterPipe],
  providers: [HeaderService, AccountService, CategoriesService, EventsService]
})
export class SystemModule {

}
