import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    imports: [
        RouterModule,
        TranslateModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})
export default class Dashboard {}
