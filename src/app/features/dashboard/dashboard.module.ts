import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        RouterModule,
        TranslateModule,
        DashboardRoutingModule
    ],
    declarations: [DashboardComponent]
})
export default class Dashboard {}
