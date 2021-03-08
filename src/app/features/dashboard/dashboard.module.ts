import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        TranslateModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})
export default class Dashboard {}
