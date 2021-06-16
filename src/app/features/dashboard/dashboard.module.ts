import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        RouterModule,
        DashboardRoutingModule
    ],
    declarations: [DashboardComponent]
})
export default class Dashboard {}
